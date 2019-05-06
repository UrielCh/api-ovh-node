import { ApiCommon } from '@ovh-api/common';
/**
 * Start and end points (inclusive) of a range
 */
export interface ComplexTypeRange<T> {
  /**
   * Start point of the range
   *
   */
  from?: T;
  /**
   * End point of the range
   *
   */
  to?: T;
}
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  key?: string;
  /**
   */
  value?: T;
}
/**
 * A value set tagged with its unit
 */
export interface ComplexTypeUnitAndValues<T> {
  /**
   */
  unit?: string;
  /**
   */
  values?: T[];
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * IANA TimeZone names
 */
export type CoreTypesTimeZoneEnum = 'Africa/Abidjan' | 'Africa/Accra' | 'Africa/Addis_Ababa' | 'Africa/Algiers' | 'Africa/Asmara' | 'Africa/Bamako' | 'Africa/Bangui' | 'Africa/Banjul' | 'Africa/Bissau' | 'Africa/Blantyre' | 'Africa/Brazzaville' | 'Africa/Bujumbura' | 'Africa/Cairo' | 'Africa/Casablanca' | 'Africa/Ceuta' | 'Africa/Conakry' | 'Africa/Dakar' | 'Africa/Dar_es_Salaam' | 'Africa/Djibouti' | 'Africa/Douala' | 'Africa/El_Aaiun' | 'Africa/Freetown' | 'Africa/Gaborone' | 'Africa/Harare' | 'Africa/Johannesburg' | 'Africa/Juba' | 'Africa/Kampala' | 'Africa/Khartoum' | 'Africa/Kigali' | 'Africa/Kinshasa' | 'Africa/Lagos' | 'Africa/Libreville' | 'Africa/Lome' | 'Africa/Luanda' | 'Africa/Lubumbashi' | 'Africa/Lusaka' | 'Africa/Malabo' | 'Africa/Maputo' | 'Africa/Maseru' | 'Africa/Mbabane' | 'Africa/Mogadishu' | 'Africa/Monrovia' | 'Africa/Nairobi' | 'Africa/Ndjamena' | 'Africa/Niamey' | 'Africa/Nouakchott' | 'Africa/Ouagadougou' | 'Africa/Porto-Novo' | 'Africa/Sao_Tome' | 'Africa/Tripoli' | 'Africa/Tunis' | 'Africa/Windhoek' | 'America/Adak' | 'America/Anchorage' | 'America/Anguilla' | 'America/Antigua' | 'America/Araguaina' | 'America/Argentina/Buenos_Aires' | 'America/Argentina/Catamarca' | 'America/Argentina/Cordoba' | 'America/Argentina/Jujuy' | 'America/Argentina/La_Rioja' | 'America/Argentina/Mendoza' | 'America/Argentina/Rio_Gallegos' | 'America/Argentina/Salta' | 'America/Argentina/San_Juan' | 'America/Argentina/San_Luis' | 'America/Argentina/Tucuman' | 'America/Argentina/Ushuaia' | 'America/Aruba' | 'America/Asuncion' | 'America/Atikokan' | 'America/Bahia' | 'America/Bahia_Banderas' | 'America/Barbados' | 'America/Belem' | 'America/Belize' | 'America/Blanc-Sablon' | 'America/Boa_Vista' | 'America/Bogota' | 'America/Boise' | 'America/Cambridge_Bay' | 'America/Campo_Grande' | 'America/Cancun' | 'America/Caracas' | 'America/Cayenne' | 'America/Cayman' | 'America/Chicago' | 'America/Chihuahua' | 'America/Costa_Rica' | 'America/Creston' | 'America/Cuiaba' | 'America/Curacao' | 'America/Danmarkshavn' | 'America/Dawson' | 'America/Dawson_Creek' | 'America/Denver' | 'America/Detroit' | 'America/Dominica' | 'America/Edmonton' | 'America/Eirunepe' | 'America/El_Salvador' | 'America/Fortaleza' | 'America/Glace_Bay' | 'America/Godthab' | 'America/Goose_Bay' | 'America/Grand_Turk' | 'America/Grenada' | 'America/Guadeloupe' | 'America/Guatemala' | 'America/Guayaquil' | 'America/Guyana' | 'America/Halifax' | 'America/Havana' | 'America/Hermosillo' | 'America/Indiana/Indianapolis' | 'America/Indiana/Knox' | 'America/Indiana/Marengo' | 'America/Indiana/Petersburg' | 'America/Indiana/Tell_City' | 'America/Indiana/Vevay' | 'America/Indiana/Vincennes' | 'America/Indiana/Winamac' | 'America/Inuvik' | 'America/Iqaluit' | 'America/Jamaica' | 'America/Juneau' | 'America/Kentucky/Louisville' | 'America/Kentucky/Monticello' | 'America/Kralendijk' | 'America/La_Paz' | 'America/Lima' | 'America/Los_Angeles' | 'America/Lower_Princes' | 'America/Maceio' | 'America/Managua' | 'America/Manaus' | 'America/Marigot' | 'America/Martinique' | 'America/Matamoros' | 'America/Mazatlan' | 'America/Menominee' | 'America/Merida' | 'America/Metlakatla' | 'America/Mexico_City' | 'America/Miquelon' | 'America/Moncton' | 'America/Monterrey' | 'America/Montevideo' | 'America/Montserrat' | 'America/Nassau' | 'America/New_York' | 'America/Nipigon' | 'America/Nome' | 'America/Noronha' | 'America/North_Dakota/Beulah' | 'America/North_Dakota/Center' | 'America/North_Dakota/New_Salem' | 'America/Ojinaga' | 'America/Panama' | 'America/Pangnirtung' | 'America/Paramaribo' | 'America/Phoenix' | 'America/Port-au-Prince' | 'America/Port_of_Spain' | 'America/Porto_Velho' | 'America/Puerto_Rico' | 'America/Rainy_River' | 'America/Rankin_Inlet' | 'America/Recife' | 'America/Regina' | 'America/Resolute' | 'America/Rio_Branco' | 'America/Santa_Isabel' | 'America/Santarem' | 'America/Santiago' | 'America/Santo_Domingo' | 'America/Sao_Paulo' | 'America/Scoresbysund' | 'America/Sitka' | 'America/St_Barthelemy' | 'America/St_Johns' | 'America/St_Kitts' | 'America/St_Lucia' | 'America/St_Thomas' | 'America/St_Vincent' | 'America/Swift_Current' | 'America/Tegucigalpa' | 'America/Thule' | 'America/Thunder_Bay' | 'America/Tijuana' | 'America/Toronto' | 'America/Tortola' | 'America/Vancouver' | 'America/Whitehorse' | 'America/Winnipeg' | 'America/Yakutat' | 'America/Yellowknife' | 'Antarctica/Casey' | 'Antarctica/Davis' | 'Antarctica/DumontDUrville' | 'Antarctica/Macquarie' | 'Antarctica/Mawson' | 'Antarctica/McMurdo' | 'Antarctica/Palmer' | 'Antarctica/Rothera' | 'Antarctica/Syowa' | 'Antarctica/Troll' | 'Antarctica/Vostok' | 'Arctic/Longyearbyen' | 'Asia/Aden' | 'Asia/Almaty' | 'Asia/Amman' | 'Asia/Anadyr' | 'Asia/Aqtau' | 'Asia/Aqtobe' | 'Asia/Ashgabat' | 'Asia/Baghdad' | 'Asia/Bahrain' | 'Asia/Baku' | 'Asia/Bangkok' | 'Asia/Beirut' | 'Asia/Bishkek' | 'Asia/Brunei' | 'Asia/Chita' | 'Asia/Choibalsan' | 'Asia/Colombo' | 'Asia/Damascus' | 'Asia/Dhaka' | 'Asia/Dili' | 'Asia/Dubai' | 'Asia/Dushanbe' | 'Asia/Gaza' | 'Asia/Hebron' | 'Asia/Ho_Chi_Minh' | 'Asia/Hong_Kong' | 'Asia/Hovd' | 'Asia/Irkutsk' | 'Asia/Jakarta' | 'Asia/Jayapura' | 'Asia/Jerusalem' | 'Asia/Kabul' | 'Asia/Kamchatka' | 'Asia/Karachi' | 'Asia/Kathmandu' | 'Asia/Khandyga' | 'Asia/Kolkata' | 'Asia/Krasnoyarsk' | 'Asia/Kuala_Lumpur' | 'Asia/Kuching' | 'Asia/Kuwait' | 'Asia/Macau' | 'Asia/Magadan' | 'Asia/Makassar' | 'Asia/Manila' | 'Asia/Muscat' | 'Asia/Nicosia' | 'Asia/Novokuznetsk' | 'Asia/Novosibirsk' | 'Asia/Omsk' | 'Asia/Oral' | 'Asia/Phnom_Penh' | 'Asia/Pontianak' | 'Asia/Pyongyang' | 'Asia/Qatar' | 'Asia/Qyzylorda' | 'Asia/Rangoon' | 'Asia/Riyadh' | 'Asia/Sakhalin' | 'Asia/Samarkand' | 'Asia/Seoul' | 'Asia/Shanghai' | 'Asia/Singapore' | 'Asia/Srednekolymsk' | 'Asia/Taipei' | 'Asia/Tashkent' | 'Asia/Tbilisi' | 'Asia/Tehran' | 'Asia/Thimphu' | 'Asia/Tokyo' | 'Asia/Ulaanbaatar' | 'Asia/Urumqi' | 'Asia/Ust-Nera' | 'Asia/Vientiane' | 'Asia/Vladivostok' | 'Asia/Yakutsk' | 'Asia/Yekaterinburg' | 'Asia/Yerevan' | 'Atlantic/Azores' | 'Atlantic/Bermuda' | 'Atlantic/Canary' | 'Atlantic/Cape_Verde' | 'Atlantic/Faroe' | 'Atlantic/Madeira' | 'Atlantic/Reykjavik' | 'Atlantic/South_Georgia' | 'Atlantic/St_Helena' | 'Atlantic/Stanley' | 'Australia/Adelaide' | 'Australia/Brisbane' | 'Australia/Broken_Hill' | 'Australia/Currie' | 'Australia/Darwin' | 'Australia/Eucla' | 'Australia/Hobart' | 'Australia/Lindeman' | 'Australia/Lord_Howe' | 'Australia/Melbourne' | 'Australia/Perth' | 'Australia/Sydney' | 'Europe/Amsterdam' | 'Europe/Andorra' | 'Europe/Athens' | 'Europe/Belgrade' | 'Europe/Berlin' | 'Europe/Bratislava' | 'Europe/Brussels' | 'Europe/Bucharest' | 'Europe/Budapest' | 'Europe/Busingen' | 'Europe/Chisinau' | 'Europe/Copenhagen' | 'Europe/Dublin' | 'Europe/Gibraltar' | 'Europe/Guernsey' | 'Europe/Helsinki' | 'Europe/Isle_of_Man' | 'Europe/Istanbul' | 'Europe/Jersey' | 'Europe/Kaliningrad' | 'Europe/Kiev' | 'Europe/Lisbon' | 'Europe/Ljubljana' | 'Europe/London' | 'Europe/Luxembourg' | 'Europe/Madrid' | 'Europe/Malta' | 'Europe/Mariehamn' | 'Europe/Minsk' | 'Europe/Monaco' | 'Europe/Moscow' | 'Europe/Oslo' | 'Europe/Paris' | 'Europe/Podgorica' | 'Europe/Prague' | 'Europe/Riga' | 'Europe/Rome' | 'Europe/Samara' | 'Europe/San_Marino' | 'Europe/Sarajevo' | 'Europe/Simferopol' | 'Europe/Skopje' | 'Europe/Sofia' | 'Europe/Stockholm' | 'Europe/Tallinn' | 'Europe/Tirane' | 'Europe/Uzhgorod' | 'Europe/Vaduz' | 'Europe/Vatican' | 'Europe/Vienna' | 'Europe/Vilnius' | 'Europe/Volgograd' | 'Europe/Warsaw' | 'Europe/Zagreb' | 'Europe/Zaporozhye' | 'Europe/Zurich' | 'Indian/Antananarivo' | 'Indian/Chagos' | 'Indian/Christmas' | 'Indian/Cocos' | 'Indian/Comoro' | 'Indian/Kerguelen' | 'Indian/Mahe' | 'Indian/Maldives' | 'Indian/Mauritius' | 'Indian/Mayotte' | 'Indian/Reunion' | 'Pacific/Apia' | 'Pacific/Auckland' | 'Pacific/Bougainville' | 'Pacific/Chatham' | 'Pacific/Chuuk' | 'Pacific/Easter' | 'Pacific/Efate' | 'Pacific/Enderbury' | 'Pacific/Fakaofo' | 'Pacific/Fiji' | 'Pacific/Funafuti' | 'Pacific/Galapagos' | 'Pacific/Gambier' | 'Pacific/Guadalcanal' | 'Pacific/Guam' | 'Pacific/Honolulu' | 'Pacific/Johnston' | 'Pacific/Kiritimati' | 'Pacific/Kosrae' | 'Pacific/Kwajalein' | 'Pacific/Majuro' | 'Pacific/Marquesas' | 'Pacific/Midway' | 'Pacific/Nauru' | 'Pacific/Niue' | 'Pacific/Norfolk' | 'Pacific/Noumea' | 'Pacific/Pago_Pago' | 'Pacific/Palau' | 'Pacific/Pitcairn' | 'Pacific/Pohnpei' | 'Pacific/Port_Moresby' | 'Pacific/Rarotonga' | 'Pacific/Saipan' | 'Pacific/Tahiti' | 'Pacific/Tarawa' | 'Pacific/Tongatapu' | 'Pacific/Wake' | 'Pacific/Wallis';
/**
 * All genders a person can choose
 */
export type NichandleGenderEnum = 'female' | 'male';
/**
 * A contract
 */
export interface OrderContract {
  /**
   */
  content?: string;
  /**
   */
  name?: string;
  /**
   */
  url?: string;
}
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  text?: string;
  /**
   */
  value?: Number;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * Spare properties
 */
export interface SpareTelephonyTelephonySpare {
  /**
   * Phone brand model
   *
   */
  brand?: string;
  /**
   * Mac address
   *
   */
  macAddress?: string;
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
}
/**
 * Abbreviated number
 */
export interface TelephonyAbbreviatedNumber {
  /**
   * The abbreviated number which must start with "2" and must have a length of 3 or 4 digits
   *
   */
  abbreviatedNumber?: Number;
  /**
   * The destination of the abbreviated number
   *
   */
  destinationNumber?: string;
  /**
   */
  name?: string;
  /**
   */
  surname?: string;
}
/**
 * Abbreviated number
 */
export interface TelephonyAbbreviatedNumberGroup {
  /**
   * The abbreviated number which must start with "7" and must have a length of 3 or 4 digits
   *
   */
  abbreviatedNumber?: Number;
  /**
   * The destination of the abbreviated number
   *
   */
  destinationNumber?: string;
  /**
   */
  name?: string;
  /**
   */
  surname?: string;
}
/**
 * Informations related to a line offer
 */
export interface TelephonyAccessoryOffer {
  /**
   * The accessory description
   *
   */
  description?: string;
  /**
   * The accessory name
   *
   */
  name?: string;
  /**
   * Accessory price
   *
   */
  price?: OrderPrice;
  /**
   * An URL to accessory details
   *
   */
  url?: string;
}
/**
 * Action for list antihack
 */
export type TelephonyAntihackActionEnum = 'AUTHORIZE_ALL' | 'AUTHORIZE_ONE_NUMBER' | 'BLOCK_ALL' | 'BLOCK_ONE_NUMBER';
/**
 * The web access for your cloudpabx
 */
export interface TelephonyBannerAccess {
  /**
   * The creation date of this access
   *
   */
  creationDate?: string;
  /**
   */
  id?: Number;
  /**
   * The url of the web access
   *
   */
  url?: string;
}
/**
 * Document suffix
 */
export type TelephonyBillDocument = 'csv' | 'pdf' | 'received.csv' | 'xml';
/**
 * Billing progress status
 */
export type TelephonyBillStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Billing Account
 */
export interface TelephonyBillingAccount {
  /**
   * Allowed outplan
   *
   */
  allowedOutplan?: OrderPrice;
  /**
   * Name of the billing account
   *
   */
  billingAccount?: string;
  /**
   * Allowed threshold credit
   *
   */
  creditThreshold?: OrderPrice;
  /**
   * Current outplan
   *
   */
  currentOutplan?: OrderPrice;
  /**
   * Description of the billing account
   *
   */
  description?: string;
  /**
   * Hide called numbers in end-of-month call details CSV
   *
   */
  hiddenExternalNumber?: boolean;
  /**
   * Override number display for calls between services of your billing account
   *
   */
  overrideDisplayedNumber?: boolean;
  /**
   * Security deposit amount
   *
   */
  securityDeposit?: OrderPrice;
  /**
   * Current status of billing account
   *
   */
  status?: TelephonyBillingAccountStatusEnum;
  /**
   * Is the billing account trusted
   *
   */
  trusted?: boolean;
}
/**
 * Status of billing account
 */
export type TelephonyBillingAccountStatusEnum = 'closed' | 'deleted' | 'enabled' | 'expired';
/**
 * Call diagnostic analyze structure on metric performance values
 */
export interface TelephonyCallDiagnosticCallQuality {
  /**
   * Call identifier of the sip signal leg
   *
   */
  callId?: string;
  /**
   * Codec used in this direction flow
   *
   */
  codec?: TelephonyCallDiagnosticCodecEnum;
  /**
   * Identifier of the metric performance value
   *
   */
  flowId?: Number;
  /**
   * The ip address destination
   *
   */
  ipDst?: string;
  /**
   * The ip address source
   *
   */
  ipSrc?: string;
  /**
   * The max delay between two packet in the given direction flow
   *
   */
  maxDelay?: Number;
  /**
   * Variation in the delay of received packets. Smaller is better and less is more
   *
   */
  maxJitter?: Number;
  /**
   * Mean Opinion Score expressed in one number, from 1 to 5, 1 being the worst and 5 the best.
   *
   */
  mos?: Number;
  /**
   * The number of packet sent in the given direction flow
   *
   */
  packets?: Number;
  /**
   * Destination port
   *
   */
  portDst?: Number;
  /**
   * The port source
   *
   */
  portSrc?: Number;
  /**
   * Number of packet RTP lost in the direction flow
   *
   */
  rtpLost?: Number;
  /**
   * The creation timestamp of the given direction flow
   *
   */
  timestamp?: string;
}
/**
 * SS7 ISUP cause codes
 */
export type TelephonyCallDiagnosticCauseEnum = '1' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '1a' | '1b' | '1c' | '1d' | '1e' | '1f' | '2' | '22' | '26' | '27' | '28' | '29' | '2a' | '2b' | '2c' | '2e' | '2f' | '3' | '30' | '31' | '32' | '33' | '34' | '35' | '37' | '39' | '3a' | '3e' | '3f' | '4' | '41' | '42' | '45' | '46' | '4f' | '5' | '51' | '52' | '53' | '54' | '55' | '56' | '57' | '58' | '5a' | '5b' | '5f' | '6' | '60' | '61' | '62' | '63' | '64' | '65' | '66' | '67' | '6e' | '6f' | '7' | '7f' | '8' | '9';
/**
 * Call diagnostic analyze structure call cdrs
 */
export interface TelephonyCallDiagnosticCdrs {
  /**
   * Basic information about call details record
   *
   */
  basic?: TelephonyCallDiagnosticCdrsBasic;
  /**
   * The timestamp of the call details record capture
   *
   */
  timestamp?: string;
}
/**
 * Call diagnostic analyze structure call cdrs
 */
export interface TelephonyCallDiagnosticCdrsBasic {
  /**
   * Hexadecimal SIP-to-SS7 ISUP cause codes
   *
   */
  cause?: TelephonyCallDiagnosticCauseEnum;
  /**
   * SS7 ISUP cause codes
   *
   */
  causeDescription?: string;
  /**
   * Release location type : forward if the calling hangup, backward if the caller hangup, else local
   *
   */
  releaseLocation?: TelephonyReleaseLocationEnum;
}
/**
 * Enumeration providing payload type to Name of RTP audio video profile
 */
export type TelephonyCallDiagnosticCodecEnum = 'G722' | 'G729' | 'PCMA' | 'PCMU';
/**
 * Reporting of the current diagnostic
 */
export interface TelephonyCallDiagnosticReporting {
  /**
   * The relevant informations in anormal behaviors
   *
   */
  message?: string;
}
/**
 * Call diagnostic analyze structure on sip signal
 */
export interface TelephonyCallDiagnosticSip {
  /**
   * Encoded json headers
   *
   */
  headers?: string;
  /**
   */
  requestMethod?: string;
  /**
   */
  response?: string;
  /**
   */
  timestamp?: string;
}
/**
 * Information extraction status
 */
export type TelephonyCallDiagnosticStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Advanced diagnostic of the voice call
 */
export interface TelephonyCallDiagnostics {
  /**
   * The MOS call quality report
   *
   */
  callQuality?: TelephonyCallDiagnosticCallQuality[];
  /**
   * The Call details records information
   *
   */
  cdrs?: TelephonyCallDiagnosticCdrs[];
  /**
   * The relevant informations in anormal behaviors
   *
   */
  reporting?: TelephonyCallDiagnosticReporting[];
  /**
   * Sip signal packets during the call and last registers
   *
   */
  sip?: TelephonyCallDiagnosticSip[];
  /**
   * Todo if datas are being to be loaded in cache. done when datas are available
   *
   */
  status?: TelephonyCallDiagnosticStatusEnum;
}
/**
 * Automatic Call made by Call Generator on this line
 */
export interface TelephonyCallsGenerated {
  /**
   * answer date
   *
   */
  answerDatetime?: string;
  /**
   * Application and dialplan running for call
   *
   */
  application?: string;
  /**
   * end status of application
   *
   */
  applicationResult?: string;
  /**
   * billingNumber (service used)
   *
   */
  billingNumber?: string;
  /**
   * creation date of the call
   *
   */
  callCreatedDatetime?: string;
  /**
   * call duration on seconds
   *
   */
  callDuration?: Number;
  /**
   * number called
   *
   */
  callee?: string;
  /**
   * number where the call come from
   *
   */
  caller?: string;
  /**
   * DTMF received during the call separate by commas
   *
   */
  dtmf?: string;
  /**
   * hangup cause
   *
   */
  hangupCause?: TelephonyCallsGeneratorHangupCauseEnum;
  /**
   * hangup date
   *
   */
  hangupDatetime?: string;
  /**
   * Generated call identifier
   *
   */
  identifier?: string;
  /**
   * original call uuid if it's a transfer
   *
   */
  transferFrom?: string;
  /**
   * unique call id
   *
   */
  uuid?: string;
}
/**
 * Types of dialplan available for callsGenerator.
 */
export type TelephonyCallsGeneratorDialplanEnum = 'PlayAudioFile' | 'PlayAudioFileAndTransferCall' | 'ReadText' | 'RequestAppointmentConfirmation' | 'RequestAppointmentConfirmationWithTransfer';
/**
 * Types of hangupCause for generated calls.
 */
export type TelephonyCallsGeneratorHangupCauseEnum = 'AccessInformationDiscarded' | 'AllottedTimeout' | 'AttendedTransfer' | 'BlindTransfer' | 'CallAwardedbeing' | 'ChannelTypeNotImplemented' | 'ChannelUnacceptable' | 'CodeSip403BearerCapabilityNotAuthorized' | 'CodeSip403IncomingCallsBarred' | 'CodeSip403OutgoingCallsBarred' | 'CodeSip404NoRouteToDestination' | 'CodeSip404NoRouteToSpecifiedTransitNetwork' | 'CodeSip404UnallocatedNumber' | 'CodeSip408NoUserResponding' | 'CodeSip410NumberChanged' | 'CodeSip410RedirectionToNewDestination' | 'CodeSip480NoAnswerFromUser' | 'CodeSip480NormalUnspecified' | 'CodeSip480SubscriberAbsent' | 'CodeSip483ExchangeRoutingError' | 'CodeSip484InvalidNumberFormatAddressIncomplete' | 'CodeSip486UserBusy' | 'CodeSip487OriginatorCancel' | 'CodeSip488IncompatibleDestination' | 'CodeSip488bearerCapabilityNotImplemented' | 'CodeSip501FacilitiesRejected' | 'CodeSip501RequestedFacilityNotImplemented' | 'CodeSip501ServiceOrOptionNotImplementedUnspecified' | 'CodeSip502DestinationOutOfOrder' | 'CodeSip503BearerCapabilityNotPresentlyAvailable' | 'CodeSip503NetworkOutOfOrder' | 'CodeSip503NoCircuitChannelAvailable' | 'CodeSip503RequestedCircuitOrChannelNotAvailable' | 'CodeSip503SwitchingEquipmentCongestion' | 'CodeSip503TemporaryFailure' | 'CodeSip504RecoveryOnTimerExpiry' | 'CodeSip603CallRejected' | 'Crash' | 'GatewayDown' | 'InformationElementOrParameterNonExistentOrNotImplemented' | 'InterworkingUnspecified' | 'InvalidCallReferenceValue' | 'InvalidInformationElementContents' | 'InvalidMessageUnspecified' | 'LoseRace' | 'ManagerRequest' | 'MandatoryInformationElementIsMissing' | 'MediaTimeout' | 'MessageNotCompatibleWithCallState' | 'MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented' | 'MessageTypeNonExistentOrNotImplemented' | 'NormalCallClearing' | 'ParameterNonExistentOrNotImplementedPassedOnNationalUse' | 'PickedOff' | 'PreEmpted' | 'ProgressTimeout' | 'ProtocolErrorUnspecified' | 'RequestedFacilityNotSubscribed' | 'ResponseToStatusInquiry' | 'ServiceOrOptionNotAvailableUnspecified' | 'SystemShutdown' | 'UnknownOrCallUnfinished' | 'UnspecifiedNoOtherCauseCodesApplicable' | 'UserChallenge' | 'UserNotRegistered';
/**
 * Represents a city
 */
export interface TelephonyCity {
  /**
   * The identifier of the city
   *
   */
  administrationCode?: string;
  /**
   * The name of the city
   *
   */
  name?: string;
  /**
   * The zip code of the city
   *
   */
  zipCode?: string;
}
/**
 * User of the click 2 call
 */
export interface TelephonyClick2CallUser {
  /**
   * Date when user was created
   *
   */
  creationDateTime?: string;
  /**
   * Contact identifier
   *
   */
  id?: Number;
  /**
   * login of the click 2 call user
   *
   */
  login?: string;
}
/**
 * Conference
 */
export interface TelephonyConference {
  /**
   */
  description?: string;
  /**
   */
  offers?: string[];
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * List past conferences on your number
 */
export interface TelephonyConferenceHistory {
  /**
   * The count of connections to the conference
   *
   */
  countConnections?: Number;
  /**
   * The count of unique participants of the conference
   *
   */
  countParticipants?: Number;
  /**
   * The date the conference began
   *
   */
  dateBegin?: string;
  /**
   * The date the conference end
   *
   */
  dateEnd?: string;
  /**
   * The duration of the conference in seconds
   *
   */
  duration?: Number;
  /**
   * The events of the conference (participants joining/left)
   *
   */
  events?: TelephonyConferenceHistoryEvent[];
  /**
   * The id of the conference history
   *
   */
  id?: Number;
  /**
   * The audio record url if you set recording
   *
   */
  recordUrl?: string;
}
/**
 * Event of a conference (participant left/join)
 */
export interface TelephonyConferenceHistoryEvent {
  /**
   * The caller id of the participant
   *
   */
  callerid?: string;
  /**
   * The date of the conference event
   *
   */
  date?: string;
  /**
   * The nature of the event : left/join
   *
   */
  type?: string;
}
/**
 * Conference realtime informations structure
 */
export interface TelephonyConferenceInformations {
  /**
   * The date when the conference began
   *
   */
  dateStart?: string;
  /**
   * Whether or not the conference room is locked
   *
   */
  locked?: boolean;
  /**
   * The current participants count in your conference room
   *
   */
  membersCount?: Number;
}
/**
 * Available language for your conference
 */
export type TelephonyConferenceLanguageEnum = 'de' | 'en' | 'es' | 'fr' | 'it';
/**
 * Conference service
 */
export interface TelephonyConferenceParticipants {
  /**
   * The arrival datetime of the participant in the conference.
   *
   */
  arrivalDateTime?: string;
  /**
   * The caller name of the participant
   *
   */
  callerName?: string;
  /**
   * The caller number of the participant
   *
   */
  callerNumber?: string;
  /**
   * The current level of the participant audio transmission
   *
   */
  energy?: Number;
  /**
   * Whether or not the participant is active in the room
   *
   */
  floor?: boolean;
  /**
   * Whether or not the participant can hear the conference
   *
   */
  hear?: boolean;
  /**
   * The id of the participant
   *
   */
  id?: Number;
  /**
   * Whether or not the participant can talk in the conference
   *
   */
  speak?: boolean;
  /**
   * Whether or not the participant is talking
   *
   */
  talking?: boolean;
}
/**
 * Conference properties
 */
export interface TelephonyConferenceProperties {
  /**
   * Whether or not announce file is played before entrance
   *
   */
  announceFile?: boolean;
  /**
   * The announce file name
   *
   */
  announceFilename?: string;
  /**
   * The announce sound id
   *
   */
  announceSoundId?: Number;
  /**
   * Whether or not anonmyous participants are allowed
   *
   */
  anonymousRejection?: boolean;
  /**
   * Whether or not participants enter conference room muted
   *
   */
  enterMuted?: boolean;
  /**
   * The events channel hash
   *
   */
  eventsChannel?: string;
  /**
   * The conference sounds language
   *
   */
  language?: TelephonyConferenceLanguageEnum;
  /**
   * The conference pin number
   *
   */
  pin?: string;
  /**
   * Whether or not conference is recorded
   *
   */
  recordStatus?: boolean;
  /**
   * The email address to send conference report to
   *
   */
  reportEmail?: string;
  /**
   * The status of the reporting
   *
   */
  reportStatus?: TelephonyConferenceReportStatusEnum;
  /**
   * True if you want to receive a white-labelled mail report of your conference
   *
   */
  whiteLabelReport?: boolean;
}
/**
 * Conference report receiver
 */
export type TelephonyConferenceReportStatusEnum = 'customer' | 'none' | 'other';
/**
 * List public web access of your conference
 */
export interface TelephonyConferenceWebAccess {
  /**
   * The id of the conference web access
   *
   */
  id?: Number;
  /**
   * The type of the conference web access : read or write
   *
   */
  type?: TelephonyConferenceWebAccessTypeEnum;
  /**
   * The URL of the conference web access
   *
   */
  url?: string;
}
/**
 * Webaccess type for your conference
 */
export type TelephonyConferenceWebAccessTypeEnum = 'read' | 'write';
/**
 * The outplan notifications configured for your billing account
 */
export interface TelephonyConsumptionThreshold {
  /**
   * The blocking type of the associate lines
   *
   */
  block?: TelephonyOutplanNotificationBlockEnum;
  /**
   * The id of the notification
   *
   */
  id?: Number;
  /**
   * Override the nichandle email for this notification
   *
   */
  notifyEmail?: string;
  /**
   * The notification percentage of maximum outplan
   *
   */
  percentage?: Number;
}
/**
 * Contact informations structure
 */
export interface TelephonyContact {
  /**
   * Contact address
   *
   */
  address?: string;
  /**
   * Contact city
   *
   */
  city?: string;
  /**
   * Contact country
   *
   */
  country?: CoreTypesCountryEnum;
  /**
   */
  email?: string;
  /**
   * Contact firstname
   *
   */
  firstname?: string;
  /**
   * Contact name
   *
   */
  name?: string;
  /**
   * Contact organisation
   *
   */
  organisation?: string;
  /**
   * Contact phone
   *
   */
  phone?: string;
  /**
   * Contact zip
   *
   */
  zip?: string;
}
/**
 * Export file format
 */
export type TelephonyContactsExportFormatsEnum = 'csv';
/**
 * A ip value associated to a datetime
 */
export interface TelephonyDatetimeAndIpvalue {
  /**
   */
  datetime?: string;
  /**
   */
  ip?: string;
}
/**
 * DDI (direct dial-in) service
 */
export interface TelephonyDdi {
  /**
   */
  description?: string;
  /**
   */
  destination?: string;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * 
 */
export interface TelephonyDefaultSipDomains {
  /**
   * Country
   *
   */
  country?: TelephonyNumberCountryEnum;
  /**
   * Current SIP domain
   *
   */
  currentDomain?: string;
  /**
   * List of available SIP domains
   *
   */
  list?: string[];
  /**
   * Type of the VoIP product concerned
   *
   */
  productType?: TelephonySipDomainProductTypeEnum;
}
/**
 * Detailed informations related to this number
 */
export interface TelephonyDetailedRateCodeInformation {
  /**
   * Cancelable datetime deadline for the new scheduled rateCode
   *
   */
  cancelLimitDatetime?: string;
  /**
   * Effective datetime
   *
   */
  effectiveDatetime?: string;
  /**
   * Price per call
   *
   */
  pricePerCallWithoutTax?: OrderPrice;
  /**
   * Price in minute
   *
   */
  pricePerMinuteWithoutTax?: OrderPrice;
  /**
   * Scheduled rate code
   *
   */
  rateCode?: string;
  /**
   * Repayment per call
   *
   */
  repaymentPricePerCallWithoutTax?: OrderPrice;
  /**
   * Repayment per minute
   *
   */
  repaymentPricePerMinuteWithoutTax?: OrderPrice;
  /**
   * Fees concerning rateCode update
   *
   */
  updateRateCodePriceWithoutTax?: OrderPrice;
}
/**
 * Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
 */
export interface TelephonyDiagnosticReport {
  /**
   * Identifier of the concerned leg
   *
   */
  callId?: string;
  /**
   * Typology where the diagnostic arriving from
   *
   */
  category?: TelephonyDiagnosticReportCategoryEnum;
  /**
   * Datetime of the diagnostic
   *
   */
  datetime?: string;
  /**
   * Explanation of the diagnostic
   *
   */
  description?: string;
  /**
   * The level of the diagnostic
   *
   */
  level?: TelephonyDiagnosticReportLevelEnum;
  /**
   * Name of the rule detected
   *
   */
  name?: string;
  /**
   * Report of the diagnostic
   *
   */
  report?: string;
}
/**
 * Source of the diagnostic report
 */
export type TelephonyDiagnosticReportCategoryEnum = 'dpi' | 'signal';
/**
 * The index interval
 */
export type TelephonyDiagnosticReportIndexEnum = '2 days ago' | '3 days ago' | 'today' | 'yesterday';
/**
 * Level of the diagnostic report
 */
export type TelephonyDiagnosticReportLevelEnum = 'debug' | 'error' | 'info' | 'warn';
/**
 * Directory Informations
 */
export interface TelephonyDirectoryHeadingPJ {
  /**
   */
  apeCode?: string;
  /**
   */
  apeDescription?: string;
  /**
   */
  directoryServiceCode?: Number;
  /**
   */
  directoryServiceDescription?: string;
  /**
   */
  notification?: string;
}
/**
 * Directory Informations
 */
export interface TelephonyDirectoryInfo {
  /**
   */
  PJSocialNomination?: string;
  /**
   */
  address?: string;
  /**
   */
  addressExtra?: string;
  /**
   */
  ape?: string;
  /**
   */
  areaCode?: Number;
  /**
   */
  birthDate?: string;
  /**
   */
  cedex?: string;
  /**
   */
  city?: string;
  /**
   */
  country?: string;
  /**
   */
  directoryServiceCode?: string;
  /**
   */
  displayFirstName?: boolean;
  /**
   */
  displayMarketingDirectory?: boolean;
  /**
   */
  displayOnlyCity?: boolean;
  /**
   */
  displaySearchReverse?: boolean;
  /**
   */
  displayUniversalDirectory?: boolean;
  /**
   */
  email?: string;
  /**
   */
  firstName?: string;
  /**
   */
  gender?: NichandleGenderEnum;
  /**
   */
  inseeCode?: Number;
  /**
   */
  legalForm?: string;
  /**
   */
  lineDescription?: string;
  /**
   */
  modificationDate?: string;
  /**
   */
  modificationType?: string;
  /**
   */
  name?: string;
  /**
   */
  number?: string;
  /**
   */
  occupation?: string;
  /**
   */
  postBox?: string;
  /**
   */
  postCode?: string;
  /**
   */
  receivePJDirectory?: boolean;
  /**
   */
  siret?: string;
  /**
   */
  socialNomination?: string;
  /**
   */
  socialNominationExtra?: string;
  /**
   */
  status?: string;
  /**
   */
  urbanDistrict?: string;
  /**
   */
  wayName?: string;
  /**
   */
  wayNumber?: string;
  /**
   */
  wayNumberExtra?: string;
  /**
   */
  wayType?: string;
}
/**
 * Directory way type
 */
export interface TelephonyDirectoryWayType {
  /**
   */
  abbreviatedName?: string;
  /**
   */
  wayName?: string;
}
/**
 * OVH easy calls queues
 */
export interface TelephonyEasyHunting {
  /**
   * Reject (hangup) anonymous calls
   *
   */
  anonymousRejection?: boolean;
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   * Feature of the service
   *
   */
  featureType?: TelephonyTypeEnum;
  /**
   * Does the service have extended CCS options enabled?
   *
   */
  isCCS?: boolean;
  /**
   * Max wait time when caller is in queue (in seconds)
   *
   */
  maxWaitTime?: Number;
  /**
   * Max number of callers in queue
   *
   */
  queueSize?: Number;
  /**
   */
  serviceName?: string;
  /**
   * General type of the service
   *
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   * The presented number when bridging calls
   *
   */
  showCallerNumber?: TelephonyOvhPabxDialplanNumberPresentationEnum;
  /**
   * Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default.
   *
   */
  statusIvrEnabled?: boolean;
  /**
   * The calls dispatching strategy
   *
   */
  strategy?: TelephonyOvhPabxHuntingQueueStrategyEnum;
  /**
   * Tone played just before call is hang up
   *
   */
  toneOnClosing?: Number;
  /**
   * Tone played when caller is put on hold
   *
   */
  toneOnHold?: Number;
  /**
   * Tone played when call is picked up
   *
   */
  toneOnOpening?: Number;
  /**
   * The voicemail used by the EasyPABX
   *
   */
  voicemail?: string;
}
/**
 * Screenlist condition
 */
export interface TelephonyEasyHuntingScreenListsConditions {
  /**
   * Screenlist based on the presented caller number
   *
   */
  callerIdNumber?: string;
  /**
   */
  conditionId?: Number;
  /**
   * Screenlist based on the destination number
   *
   */
  destinationNumber?: string;
  /**
   * Type of screenlist
   *
   */
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
}
/**
 * Easy hunting screen lists conditions options
 */
export interface TelephonyEasyHuntingScreenListsConditionsSettings {
  /**
   */
  status?: TelephonyEasyHuntingScreenListsConditionsStatusEnum;
}
/**
 * Screenlist condition type
 */
export type TelephonyEasyHuntingScreenListsConditionsStatusEnum = 'disabled' | 'incomingBlackList' | 'incomingWhiteList';
/**
 * Easy hunting time conditions
 */
export interface TelephonyEasyHuntingTimeConditions {
  /**
   */
  conditionId?: Number;
  /**
   * The policy of time condition
   *
   */
  policy?: TelephonyTimeConditionsPolicyEnum;
  /**
   * The time of the day when the extension will start to be executed
   *
   */
  timeFrom?: string;
  /**
   * The time of the day when the extension will stop to be executed
   *
   */
  timeTo?: string;
  /**
   * The day of the week when the extension will be executed
   *
   */
  weekDay?: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
}
/**
 * Easy hunting time conditions options
 */
export interface TelephonyEasyHuntingTimeConditionsSettings {
  /**
   * Status of time conditions
   *
   */
  enable?: boolean;
  /**
   * Number associated to the first slot action
   *
   */
  slot1Number?: string;
  /**
   * Action type executed when the first slot is used
   *
   */
  slot1Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
  /**
   * Number associated to the second slot action
   *
   */
  slot2Number?: string;
  /**
   * Action type executed when the second slot is used
   *
   */
  slot2Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
  /**
   * Number associated to the third slot action
   *
   */
  slot3Number?: string;
  /**
   * Action type executed when the third slot is used
   *
   */
  slot3Type?: TelephonyTimeConditionsSettingsForwardTypeEnum;
  /**
   * Number associated to the unavailable slot action
   *
   */
  unavailableNumber?: string;
  /**
   * Action type executed when the unavailable slot is used
   *
   */
  unavailableType?: TelephonyTimeConditionsSettingsForwardTypeEnum;
}
/**
 * Easy/Mini PABX agent
 */
export interface TelephonyEasyMiniPabxHuntingAgent {
  /**
   * The phone number of the agent
   *
   */
  agentNumber?: string;
  /**
   * True if the agent is logged
   *
   */
  logged?: boolean;
  /**
   * The maxium ringing time
   *
   */
  noReplyTimer?: Number;
  /**
   * The position in the hunting
   *
   */
  position?: Number;
}
/**
 * Calls dispatching pattern
 */
export type TelephonyEasyMiniPabxHuntingPatternEnum = 'all-at-once' | 'cumulated' | 'sequential';
/**
 * Calls dispatching startegy
 */
export type TelephonyEasyMiniPabxHuntingStrategyEnum = 'cyclic' | 'leastIdleSinceLastCall' | 'linear' | 'mostIdleSinceLastCall' | 'mostIdleSinceLogging' | 'parallel' | 'random';
/**
 * EasyPabx
 */
export interface TelephonyEasyPabx {
  /**
   */
  description?: string;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * EasyPabx Hunting
 */
export interface TelephonyEasyPabxHunting {
  /**
   * Reject anonymous calls
   *
   */
  anonymousCallRejection?: boolean;
  /**
   */
  name?: string;
  /**
   * The maximum no-reply time before forwarding the call to the voicemail
   *
   */
  noReplyTimer?: Number;
  /**
   * Number of simultaneous calls
   *
   */
  numberOfCalls?: Number;
  /**
   */
  pattern?: TelephonyEasyMiniPabxHuntingPatternEnum;
  /**
   */
  strategy?: TelephonyEasyMiniPabxHuntingStrategyEnum;
  /**
   * True if the tone on closure is enabled
   *
   */
  toneOnClosure?: boolean;
  /**
   * Sound ID of on-closure tone
   *
   */
  toneOnClosureSoundId?: Number;
  /**
   * True if the tone on hold is enabled
   *
   */
  toneOnHold?: boolean;
  /**
   * Sound ID of on-hold tone
   *
   */
  toneOnHoldSoundId?: Number;
  /**
   * True if the ring back tone is enabled
   *
   */
  toneRingback?: boolean;
  /**
   * Sound ID of ringback tone
   *
   */
  toneRingbackSoundId?: Number;
  /**
   * The voicemail used by the EasyPABX
   *
   */
  voicemail?: string;
}
/**
 * Task informations about an entreprise
 */
export interface TelephonyEntrepriseNumberInformations {
  /**
   * Address of the entreprise
   *
   */
  address?: string;
  /**
   * Entreprise's category code for directory services
   *
   */
  ape?: string;
  /**
   * Brand of the entreprise
   *
   */
  brand?: string;
  /**
   * Entreprise number
   *
   */
  entrepriseNumber?: string;
  /**
   * Is this a valid entreprise number?
   *
   */
  isValid?: boolean;
  /**
   * Name of the entreprise
   *
   */
  name?: string;
  /**
   * Short version of the entreprise number (FR only)
   *
   */
  siren?: string;
}
/**
 * Task about getting entreprise informations
 */
export interface TelephonyEntrepriseNumberInformationsTask {
  /**
   * Informations about the enterprise
   *
   */
  informations?: TelephonyEntrepriseNumberInformations;
  /**
   * Task status
   *
   */
  status?: TelephonyTaskStatusEnum;
}
/**
 * Events triggered by the line
 */
export interface TelephonyEvent {
  /**
   * Called referer, could be the msisdn or the label name
   *
   */
  calledIdentifier?: string;
  /**
   * Calling referer, could be the msisdn or the label name
   *
   */
  callingIdentifier?: string;
  /**
   * Datetime call establishment
   *
   */
  dateTime?: string;
  /**
   * Incoming or outgoing call
   *
   */
  direction?: TelephonyRealtimeEventDirection;
  /**
   * Duration of the call
   *
   */
  duration?: Number;
  /**
   * Type of event
   *
   */
  eventType?: TelephonyRealtimeEventType;
  /**
   * Uniq identifier of the call
   *
   */
  id?: string;
  /**
   * Protocol (mgcp or sip)
   *
   */
  protocol?: TelephonyRealtimeEventProtocol;
}
/**
 * Callback url for each event
 */
export interface TelephonyEventCallback {
  /**
   * Email notification address in case of url calling failure
   *
   */
  emailError?: string;
  /**
   * Url called for each event
   *
   */
  url?: string;
}
/**
 * Token associated to the service for live event
 */
export interface TelephonyEventToken {
  /**
   */
  token?: string;
}
/**
 * Fax service
 */
export interface TelephonyFax {
  /**
   */
  description?: string;
  /**
   * Send notifications about Line's diagnosticReports
   *
   */
  notifications?: TelephonyLineNotificationsOptions;
  /**
   */
  offers?: string[];
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * Fax campaigns
 */
export interface TelephonyFaxCampaign {
  /**
   * The count of failed faxes in the campaign
   *
   */
  countFailed?: Number;
  /**
   * The count of success faxes in the campaign
   *
   */
  countSuccess?: Number;
  /**
   * The total count of faxes in the campaign
   *
   */
  countTotal?: Number;
  /**
   * The end date of the fax campaign
   *
   */
  dateEnd?: string;
  /**
   * The start date of the fax campaign
   *
   */
  dateStart?: string;
  /**
   * The id of the fax campaign
   *
   */
  id?: Number;
  /**
   * The name of the fax campaign
   *
   */
  name?: string;
  /**
   * The reference of the fax campaign
   *
   */
  reference?: string;
  /**
   * The status of the fax campaign
   *
   */
  status?: string;
}
/**
 * Detail of a fax campaign
 */
export interface TelephonyFaxCampaignDetail {
  /**
   */
  failed?: string[];
  /**
   */
  success?: string[];
  /**
   */
  todo?: string[];
}
/**
 * Available recipients method for fax campaign
 */
export type TelephonyFaxCampaignRecipientsTypeEnum = 'document' | 'list';
/**
 * Available sending method for fax campaign
 */
export type TelephonyFaxCampaignSendTypeEnum = 'automatic' | 'manual' | 'scheduled';
/**
 * Fax delivery record
 */
export interface TelephonyFaxConsumption {
  /**
   */
  called?: string;
  /**
   */
  calling?: string;
  /**
   */
  consumptionId?: Number;
  /**
   */
  creationDatetime?: string;
  /**
   */
  pages?: Number;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  wayType?: TelephonyFaxConsumptionWayTypeEnum;
}
/**
 * Consumption way type
 */
export type TelephonyFaxConsumptionWayTypeEnum = 'received' | 'sent';
/**
 * Format of the notification mail. "html" will include a preview image of the fax
 */
export type TelephonyFaxMailFormatEnum = 'html' | 'text';
/**
 * Fax properties
 */
export interface TelephonyFaxProperties {
  /**
   */
  callNumber?: string;
  /**
   */
  countryCode?: string;
  /**
   */
  faxMaxCall?: TelephonyFaxSendingTries;
  /**
   */
  faxQuality?: TelephonyFaxQualityEnum;
  /**
   */
  faxTagLine?: string;
  /**
   */
  fromEmail?: string;
  /**
   */
  fromName?: string;
  /**
   */
  mailFormat?: TelephonyFaxMailFormatEnum;
  /**
   */
  receiver?: string;
  /**
   */
  redirectionEmail?: string[];
  /**
   */
  rejectAnonymous?: boolean;
  /**
   */
  sender?: string;
}
/**
 * Available quality for fax documents
 */
export type TelephonyFaxQualityEnum = 'best' | 'high' | 'normal';
/**
 * Fax ScreenLists
 */
export interface TelephonyFaxScreen {
  /**
   * List of numbers not allowed to send a fax
   *
   */
  blacklistedNumbers?: string[];
  /**
   * List of logins (TSI or ID) not allowed to send a fax
   *
   */
  blacklistedTSI?: string[];
  /**
   * Number of the fax service
   *
   */
  callNumber?: string;
  /**
   * Country code of the fax service
   *
   */
  countryCode?: string;
  /**
   * Which list is active (blackist, whitelist or none)
   *
   */
  filteringList?: TelephonyFaxScreenListTypeEnum;
  /**
   */
  serviceName?: string;
  /**
   * List of numbers allowed to send a fax
   *
   */
  whitelistedNumbers?: string[];
  /**
   * List of logins (TSI or ID) allowed to send a fax
   *
   */
  whitelistedTSI?: string[];
}
/**
 * Type of screen list
 */
export type TelephonyFaxScreenListTypeEnum = '' | 'blacklist' | 'no' | 'whitelist';
/**
 * Number of tries when sending a fax
 */
export type TelephonyFaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * Plug & Phone function key
 */
export interface TelephonyFunctionKey {
  /**
   * The default function used by the key
   *
   */
  default?: string;
  /**
   * The function active on the key
   *
   */
  function?: string;
  /**
   * The number of the function key
   *
   */
  keyNum?: Number;
  /**
   * The key label
   *
   */
  label?: string;
  /**
   * The function parameter
   *
   */
  parameter?: string;
  /**
   * The key type
   *
   */
  type?: string;
}
/**
 * Time conditions capable services
 */
export interface TelephonyGenericScreen {
  /**
   */
  serviceName?: string;
}
/**
 * Informations related to a telephone offer
 */
export interface TelephonyHardwareOffer {
  /**
   * The telephony description
   *
   */
  description?: string;
  /**
   * The telephony name
   *
   */
  name?: string;
  /**
   * Telephony price
   *
   */
  price?: OrderPrice;
  /**
   * An URL to telephony details
   *
   */
  url?: string;
}
/**
 * Previous billed consumptions
 */
export interface TelephonyHistoryConsumption {
  /**
   */
  date?: string;
  /**
   */
  price?: OrderPrice;
  /**
   */
  priceOutplan?: OrderPrice;
  /**
   */
  status?: TelephonyBillStatusEnum;
}
/**
 * Previous repayment bill
 */
export interface TelephonyHistoryRepaymentConsumption {
  /**
   * the number of the bill
   *
   */
  billingNumber?: string;
  /**
   * date of the bill
   *
   */
  date?: string;
  /**
   * the amout which is repayed
   *
   */
  price?: OrderPrice;
  /**
   * status of the bill
   *
   */
  status?: TelephonyBillStatusEnum;
}
/**
 * Previous tollfree bill
 */
export interface TelephonyHistoryTollfreeConsumption {
  /**
   * date of the bill
   *
   */
  date?: string;
  /**
   * the amount which is paid by the called number
   *
   */
  price?: OrderPrice;
  /**
   * status of the bill
   *
   */
  status?: TelephonyBillStatusEnum;
}
/**
 * Line service
 */
export interface TelephonyLine {
  /**
   * Ability to manage SIP password on this service
   *
   */
  canChangePassword?: boolean;
  /**
   */
  description?: string;
  /**
   * The line offers
   *
   */
  getPublicOffer?: TelephonyLineOffer;
  /**
   * The infrastructure where is configured the line
   *
   */
  infrastructure?: string;
  /**
   * Is this line attached to a phone that belongs to another line?
   *
   */
  isAttachedToOtherLinesPhone?: boolean;
  /**
   * Send notifications about Line's diagnosticReports
   *
   */
  notifications?: TelephonyLineNotificationsOptions;
  /**
   * The line offers (Deprecated, prefer "name" in getPublicOffer)
   *
   */
  offers?: string[];
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  simultaneousLines?: Number;
}
/**
 * The blocking mode of line calls
 */
export type TelephonyLineBlockingMode = 'both' | 'incoming' | 'outgoing';
/**
 * Types of statistics available for a line.
 */
export type TelephonyLineNotificationsLogsFrequencyEnum = 'Never' | 'Once a day' | 'Twice a day';
/**
 * Error logging notifications options
 */
export interface TelephonyLineNotificationsLogsOptions {
  /**
   * Email address where to send notifications
   *
   */
  email?: string;
  /**
   * Frequency at which the notifications will be send
   *
   */
  frequency?: TelephonyLineNotificationsLogsFrequencyEnum;
  /**
   * Send a blank notification if there is no diagnosticReports entries for the period
   *
   */
  sendIfNull?: boolean;
}
/**
 * 
 */
export interface TelephonyLineNotificationsOptions {
  /**
   * Error logging notifications options
   *
   */
  logs?: TelephonyLineNotificationsLogsOptions;
}
/**
 * Informations related to a line offer
 */
export interface TelephonyLineOffer {
  /**
   * The offer description
   *
   */
  description?: string;
  /**
   * The offer name
   *
   */
  name?: string;
  /**
   * Offer price per month
   *
   */
  price?: OrderPrice;
}
/**
 * Informations related to a line offer
 */
export interface TelephonyLineOffersAndContracts {
  /**
   * Informations related to a line contracts
   *
   */
  contracts?: OrderContract[];
  /**
   * Informations related to a line offer
   *
   */
  offers?: TelephonyLineOffer[];
}
/**
 * The nature of the call forward
 */
export type TelephonyLineOptionForwardNatureTypeEnum = 'fax' | 'number' | 'voicemail';
/**
 * Intercom configuration
 */
export type TelephonyLineOptionIntercomEnum = 'no' | 'prefixed' | 'yes';
/**
 * The language of the line
 */
export type TelephonyLineOptionLanguageEnum = 'Dutch' | 'English (UK)' | 'French' | 'French (BE)' | 'German' | 'Italian' | 'Spanish';
/**
 * Line options
 */
export interface TelephonyLineOptions {
  /**
   */
  absentSubscriber?: boolean;
  /**
   * Reject anonymous calls
   *
   */
  anonymousCallRejection?: boolean;
  /**
   * Whether or not the line has restriction on incoming calls
   *
   */
  callRestrictionIncoming?: boolean;
  /**
   * Whether or not the line has restriction on outgoing calls
   *
   */
  callRestrictionOutgoing?: boolean;
  /**
   * If the line receives a new call and the line is already in communication, this new call is dispatched once the current call is completed
   *
   */
  callWaiting?: boolean;
  /**
   * Codecs preferences
   *
   */
  codecs?: string;
  /**
   * The default voicemail of the line. It can be the voicemail of any line of your account.
   *
   */
  defaultVoicemail?: string;
  /**
   */
  displayNumber?: string;
  /**
   */
  doNotDisturb?: boolean;
  /**
   * The SIP domain of the line
   *
   */
  domain?: string;
  /**
   * Enable calls forward when the line is unavailable
   *
   */
  forwardBackup?: boolean;
  /**
   * Nature of the forward when the line is unavailable
   *
   */
  forwardBackupNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Destination of the forward when the line is unavailable
   *
   */
  forwardBackupNumber?: string;
  /**
   * Enable calls forward when the line is busy
   *
   */
  forwardBusy?: boolean;
  /**
   * Nature of the forward when the line is busy
   *
   */
  forwardBusyNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Destination of the forward when the line is busy
   *
   */
  forwardBusyNumber?: string;
  /**
   * Enable calls forward on no-reply
   *
   */
  forwardNoReply?: boolean;
  /**
   * Delay before forward on no-reply
   *
   */
  forwardNoReplyDelay?: Number;
  /**
   * Nature of the forward on no-reply
   *
   */
  forwardNoReplyNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Destination of the forward on no-reply
   *
   */
  forwardNoReplyNumber?: string;
  /**
   * Enable unconditional calls forward
   *
   */
  forwardUnconditional?: boolean;
  /**
   * Nature of the unconditional forward
   *
   */
  forwardUnconditionalNature?: TelephonyLineOptionForwardNatureTypeEnum;
  /**
   * Destination of the unconditional forward
   *
   */
  forwardUnconditionalNumber?: string;
  /**
   * Do not display your number
   *
   */
  identificationRestriction?: boolean;
  /**
   * Intercom mode: takes automatically the call with the loudspeaker
   *
   */
  intercom?: TelephonyLineOptionIntercomEnum;
  /**
   * The ip restrictions of your line
   *
   */
  ipRestrictions?: string[];
  /**
   * Language of the line
   *
   */
  language?: TelephonyLineOptionLanguageEnum;
  /**
   * Disallow outgoing calls
   *
   */
  lockOutCall?: boolean;
  /**
   * Disallow outgoing calls password
   *
   */
  lockOutCallPassword?: string;
  /**
   * Enable or disable record of outgoing calls
   *
   */
  recordOutgoingCallsBeta?: boolean;
  /**
   * Sound ID of on-call-waiting tone
   *
   */
  toneOnCallWaitingSoundId?: Number;
  /**
   * Sound ID of on-hold tone
   *
   */
  toneOnHoldSoundId?: Number;
  /**
   * Sound ID of ringback tone
   *
   */
  toneRingbackSoundId?: Number;
  /**
   * Voicemail number to dial from any other line
   *
   */
  voicemailExternalNumber?: string;
  /**
   * Voicemail short number to dial from the line
   *
   */
  voicemailInternalNumber?: string;
}
/**
 * Informations related to phone capabilities
 */
export interface TelephonyLinePhone {
  /**
   * Brand name of the phone
   *
   */
  brand?: string;
  /**
   * The phone description
   *
   */
  description?: string;
  /**
   * Maximum number of lines managed by a phone
   *
   */
  maxline?: Number;
  /**
   * Telephony price
   *
   */
  price?: OrderPrice;
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
}
/**
 * Informations related to associable phone capabilities
 */
export interface TelephonyLinePhoneAssociable {
  /**
   * Current lines configured on the phone
   *
   */
  associatedLines?: TelephonyLinePhoneAssociableConfiguredLines[];
  /**
   * Brand name of the phone
   *
   */
  brand?: string;
  /**
   * Maximum quantity of lines managed by the phone
   *
   */
  maxLines?: Number;
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
}
/**
 * Current lines configured on the phone
 */
export interface TelephonyLinePhoneAssociableConfiguredLines {
  /**
   * The line description
   *
   */
  description?: string;
  /**
   * Service name of the line
   *
   */
  serviceName?: string;
}
/**
 * Types of statistics available for a line.
 */
export type TelephonyLineStatisticsTypeEnum = 'maxDelay' | 'maxJitter' | 'rtpMos' | 'sumRtpLost';
/**
 * MiniPabx
 */
export interface TelephonyMiniPabx {
  /**
   */
  description?: string;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * MiniPabx Hunting
 */
export interface TelephonyMiniPabxHunting {
  /**
   * Reject anonymous calls
   *
   */
  anonymousCallRejection?: boolean;
  /**
   */
  name?: string;
  /**
   * Number of simultaneous calls
   *
   */
  numberOfCalls?: Number;
  /**
   * The maximum waiting time in the calls queue
   *
   */
  onHoldTimer?: Number;
  /**
   */
  pattern?: TelephonyEasyMiniPabxHuntingPatternEnum;
  /**
   * Maximum numbers of callers in the queue
   *
   */
  queueSize?: Number;
  /**
   */
  strategy?: TelephonyEasyMiniPabxHuntingStrategyEnum;
  /**
   * True if the tone on closure is enabled
   *
   */
  toneOnClosure?: boolean;
  /**
   * Sound ID of on-closure tone
   *
   */
  toneOnClosureSoundId?: Number;
  /**
   * True if the tone on hold is enabled
   *
   */
  toneOnHold?: boolean;
  /**
   * Sound ID of on-hold tone
   *
   */
  toneOnHoldSoundId?: Number;
  /**
   * True if the ring back tone is enabled
   *
   */
  toneRingback?: boolean;
  /**
   * Sound ID of ringback tone
   *
   */
  toneRingbackSoundId?: Number;
}
/**
 * Additional number
 */
export interface TelephonyNumber {
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   * Feature enabled on the number
   *
   */
  featureType?: TelephonyTypeEnum;
  /**
   * Parent of the service (if it is part of a pool)
   *
   */
  partOfPool?: string;
  /**
   * Name of the service
   *
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * Number country code
 */
export type TelephonyNumberCountryCodeEnum = 32 | 33 | 34 | 39 | 41 | 44 | 49;
/**
 * Number country
 */
export type TelephonyNumberCountryEnum = 'be' | 'ch' | 'de' | 'es' | 'fr' | 'gb' | 'it' | 'uk';
/**
 * A geographic zone from a country
 */
export interface TelephonyNumberDetailedZone {
  /**
   * The searched value
   *
   */
  askedCity?: string;
  /**
   * The city of the zone
   *
   */
  city?: string;
  /**
   * The country of the zone
   *
   */
  country?: TelephonyNumberCountryEnum;
  /**
   * The number's range of this zone, in international format
   *
   */
  internationalNumber?: string;
  /**
   * The criteria that matched the searched value
   *
   */
  matchingCriteria?: TelephonyNumberDetailedZoneMatchingCriteriaEnum;
  /**
   * The number's range of this zone
   *
   */
  number?: string;
  /**
   * The country code of the number's range
   *
   */
  prefix?: TelephonyNumberCountryCodeEnum;
  /**
   * The type of number's range of this zone
   *
   */
  type?: TelephonyNumberDetailedZoneTypeEnum;
  /**
   * The zip code of the zone
   *
   */
  zipCode?: string;
  /**
   * The list of ZNE of this zone
   *
   */
  zneList?: string[];
}
/**
 * The possible criteria matching a searched value for a zone
 */
export type TelephonyNumberDetailedZoneMatchingCriteriaEnum = 'city' | 'internationalNumber' | 'number' | 'zne';
/**
 * A zone type
 */
export type TelephonyNumberDetailedZoneTypeEnum = 'geographic' | 'non-geographic' | 'special';
/**
 * Typology of number
 */
export type TelephonyNumberTypeEnum = 'geographic' | 'nogeographic' | 'special';
/**
 * Offer change
 */
export interface TelephonyOfferChange {
  /**
   * The current offer will be replace by this one on the next renew.
   *
   */
  offer?: string;
}
/**
 * Operation on a telephony offer
 */
export interface TelephonyOfferTask {
  /**
   * Actual action that will be executed
   *
   */
  action?: TelephonyOfferTaskActionEnum;
  /**
   * Planned execution date
   *
   */
  executionDate?: string;
  /**
   * Current status of the task
   *
   */
  status?: TelephonyTaskStatusEnum;
  /**
   */
  taskId?: Number;
  /**
   * Type of operation that will be executed
   *
   */
  type?: TelephonyOfferTaskTypeEnum;
}
/**
 * Offer task actions
 */
export type TelephonyOfferTaskActionEnum = 'convertToAlias' | 'convertToSip' | 'migrateToNewVoicemail' | 'removeSimltaneousLines' | 'switchServer' | 'termination' | 'updateFirmware' | 'upgrade';
/**
 * Offer task types
 */
export type TelephonyOfferTaskTypeEnum = 'line' | 'offer' | 'option' | 'phone';
/**
 * Type of line blocking on outplan notification
 */
export type TelephonyOutplanNotificationBlockEnum = 'blockAllCalls' | 'blockIncomingCalls' | 'blockOutgoingCalls' | 'none';
/**
 * OVH calls queues and OVH IVRs (Interactive Voice Response)
 */
export interface TelephonyOvhPabx {
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   * Feature of the service
   *
   */
  featureType?: TelephonyTypeEnum;
  /**
   * Does the service have extended CCS options enabled?
   *
   */
  isCCS?: boolean;
  /**
   */
  serviceName?: string;
  /**
   * General type of the service
   *
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * Custom statuses of your callcenter agents
 */
export interface TelephonyOvhPabxCustomStatus {
  /**
   * The color (in hexadecimal) of the status that will be displayed on agent banner web application
   *
   */
  color?: string;
  /**
   * A short description of the status
   *
   */
  description?: string;
  /**
   */
  id?: Number;
  /**
   * The name of the status (Pause, Mission, etc...)
   *
   */
  name?: string;
}
/**
 * Dialplan
 */
export interface TelephonyOvhPabxDialplan {
  /**
   * Reject (hangup) anonymous calls
   *
   */
  anonymousRejection?: boolean;
  /**
   */
  dialplanId?: Number;
  /**
   */
  lastUpdate?: string;
  /**
   * The dialplan name
   *
   */
  name?: string;
  /**
   * The presented number when bridging calls
   *
   */
  showCallerNumber?: TelephonyOvhPabxDialplanNumberPresentationEnum;
  /**
   * The timeout (in seconds) when bridging calls
   *
   */
  transferTimeout?: Number;
}
/**
 * Dialplan extension
 */
export interface TelephonyOvhPabxDialplanExtension {
  /**
   * True if the extension is enabled
   *
   */
  enabled?: boolean;
  /**
   */
  extensionId?: Number;
  /**
   * The position of the extension in the dialplan (the extensions are executed following this order)
   *
   */
  position?: Number;
  /**
   * Additionnal conditions are used from this chosen scheduler category
   *
   */
  schedulerCategory?: TelephonySchedulerCategoryEnum;
  /**
   * The type of the screenlist
   *
   */
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
}
/**
 * Screenlist condition
 */
export interface TelephonyOvhPabxDialplanExtensionConditionScreenList {
  /**
   * Screenlist based on the presented caller number
   *
   */
  callerIdNumber?: string;
  /**
   */
  conditionId?: Number;
  /**
   * Screenlist based on the destination number
   *
   */
  destinationNumber?: string;
  /**
   * Type of screenlist
   *
   */
  screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum;
}
/**
 * Screenlist condition type
 */
export type TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum = 'destinationBlackList' | 'destinationWhiteList' | 'incomingBlackList' | 'incomingWhiteList';
/**
 * Time condition
 */
export interface TelephonyOvhPabxDialplanExtensionConditionTime {
  /**
   */
  conditionId?: Number;
  /**
   * The time of the day when the extension will start to be executed
   *
   */
  timeFrom?: string;
  /**
   * The time of the day when the extension will stop to be executed
   *
   */
  timeTo?: string;
  /**
   * The day of the week when the extension will be executed
   *
   */
  weekDay?: TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum;
}
/**
 * Day of the week
 */
export type TelephonyOvhPabxDialplanExtensionConditionTimeWeekDayEnum = 'friday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday';
/**
 * Dialplan rule
 */
export interface TelephonyOvhPabxDialplanExtensionRule {
  /**
   * The action made by the rule
   *
   */
  action?: TelephonyOvhPabxDialplanExtensionRuleActionEnum;
  /**
   * The parameter of the chosen action
   *
   */
  actionParam?: string;
  /**
   * If true, the rule will be executed only when the result of the conditions is false
   *
   */
  negativeAction?: boolean;
  /**
   * The position of the rule in the extension (the rules are executed following this order)
   *
   */
  position?: Number;
  /**
   */
  ruleId?: Number;
}
/**
 * Dialplan rule action
 */
export type TelephonyOvhPabxDialplanExtensionRuleActionEnum = 'bridge' | 'endless_playback' | 'hangup' | 'hunting' | 'ivr' | 'playback' | 'readDtmf' | 'setCallerName' | 'sleep' | 'tts' | 'voicemail';
/**
 * Displayed number
 */
export type TelephonyOvhPabxDialplanNumberPresentationEnum = 'alias' | 'both' | 'caller';
/**
 * PABX Hunting
 */
export interface TelephonyOvhPabxHunting {
  /**
   * The templated url of your CRM, opened by the banner application of your cloudpabx
   *
   */
  crmUrlTemplate?: string;
  /**
   * Enable G729 codec on your callcenter
   *
   */
  g729?: boolean;
  /**
   * The name of your callcenter offer
   *
   */
  name?: string;
  /**
   * Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default.
   *
   */
  statusIvrEnabled?: boolean;
}
/**
 * Calls agent
 */
export interface TelephonyOvhPabxHuntingAgent {
  /**
   */
  agentId?: Number;
  /**
   * The id of the current break status of the agent
   *
   */
  breakStatus?: Number;
  /**
   * The agent's description
   *
   */
  description?: string;
  /**
   * The number of the agent
   *
   */
  number?: string;
  /**
   * The maximum of simultaneous calls that the agent will receive from the hunting
   *
   */
  simultaneousLines?: Number;
  /**
   * The current status of the agent
   *
   */
  status?: TelephonyOvhPabxHuntingAgentStatusEnum;
  /**
   * The waiting timeout (in seconds) before hangup an assigned called
   *
   */
  timeout?: Number;
  /**
   * The agent's type
   *
   */
  type?: TelephonyOvhPabxHuntingAgentTypeEnum;
  /**
   * The wrap up time (in seconds) after the calls
   *
   */
  wrapUpTime?: Number;
}
/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingAgentLiveStatus {
  /**
   * The number of calls this agent took on the current day
   *
   */
  answeredCalls?: Number;
  /**
   * Last status change date
   *
   */
  lastStatusChange?: string;
  /**
   * Current status of the agent
   *
   */
  status?: TelephonyOvhPabxHuntingLiveAgentStatusEnum;
  /**
   * The total duration in seconds of the calls this agent took on the current day
   *
   */
  totalCallDuration?: Number;
}
/**
 * Agent assigned to a queue
 */
export interface TelephonyOvhPabxHuntingAgentQueue {
  /**
   */
  agentId?: Number;
  /**
   * The position in the queue
   *
   */
  position?: Number;
  /**
   */
  queueId?: Number;
}
/**
 * Status of the agent
 */
export type TelephonyOvhPabxHuntingAgentStatusEnum = 'available' | 'loggedOut' | 'onBreak';
/**
 * Type of the agent
 */
export type TelephonyOvhPabxHuntingAgentTypeEnum = 'external' | 'internal';
/**
 * Status of the agent
 */
export type TelephonyOvhPabxHuntingLiveAgentStatusEnum = 'inAQueueCall' | 'loggedOut' | 'onBreak' | 'receiving' | 'waiting';
/**
 * State of the call
 */
export type TelephonyOvhPabxHuntingLiveCallsStateEnum = 'Answered' | 'Waiting';
/**
 * Calls queue
 */
export interface TelephonyOvhPabxHuntingQueue {
  /**
   * Action executed when there is no member in queue
   *
   */
  actionOnClosure?: TelephonyOvhPabxQueueActionEnum;
  /**
   * The additionnal parameter of the on closure action
   *
   */
  actionOnClosureParam?: string;
  /**
   * Action executed when caller enters a full queue
   *
   */
  actionOnOverflow?: TelephonyOvhPabxQueueActionEnum;
  /**
   * The additionnal parameter of the overflow action
   *
   */
  actionOnOverflowParam?: string;
  /**
   * Allow the caller to disable call record by pressing a key
   *
   */
  askForRecordDisabling?: boolean;
  /**
   * The name of the queue
   *
   */
  description?: string;
  /**
   * Follow the calls forwarding
   *
   */
  followCallForwards?: boolean;
  /**
   * The maximum of people waiting in the queue
   *
   */
  maxMember?: Number;
  /**
   * The maximum waiting time (in seconds) in the queue
   *
   */
  maxWaitTime?: Number;
  /**
   */
  queueId?: Number;
  /**
   * Enable record on calls in queue
   *
   */
  record?: boolean;
  /**
   * Key to press to disable record
   *
   */
  recordDisablingDigit?: TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum;
  /**
   * Language of the sound played to the caller to inform that he can disable record
   *
   */
  recordDisablingLanguage?: TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum;
  /**
   * The id of the OvhPabxSound played to caller when on hold
   *
   */
  soundOnHold?: Number;
  /**
   * The calls dispatching strategy
   *
   */
  strategy?: TelephonyOvhPabxHuntingQueueStrategyEnum;
}
/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingQueueLiveCalls {
  /**
   * Name or number of the agent who answered the call
   *
   */
  agent?: string;
  /**
   * Answer date of the call
   *
   */
  answered?: string;
  /**
   * Begin date of the call
   *
   */
  begin?: string;
  /**
   * Name of the caller (or anonymous if unknown)
   *
   */
  callerIdName?: string;
  /**
   * Phone number of the caller (or anonymous if unknown)
   *
   */
  callerIdNumber?: string;
  /**
   * Phone number called (in case of an outgoing call)
   *
   */
  destinationNumber?: string;
  /**
   * End date of the call
   *
   */
  end?: string;
  /**
   */
  id?: Number;
  /**
   * Whether or not the call is on hold
   *
   */
  onHold?: boolean;
  /**
   * Name of the queue of the call
   *
   */
  queue?: string;
  /**
   * Current state of the call
   *
   */
  state?: TelephonyOvhPabxHuntingLiveCallsStateEnum;
}
/**
 * Live statistics of the queue
 */
export interface TelephonyOvhPabxHuntingQueueLiveStatistics {
  /**
   * Total of calls answered
   *
   */
  callsAnswered?: Number;
  /**
   * Total of calls lost
   *
   */
  callsLost?: Number;
  /**
   * Total of calls
   *
   */
  callsTotal?: Number;
  /**
   * Last reset datetime of queue's statistics
   *
   */
  lastReset?: string;
  /**
   * Total call duration in seconds
   *
   */
  totalCallDuration?: Number;
  /**
   * Total waiting duration in seconds
   *
   */
  totalWaitingDuration?: Number;
}
/**
 * Digit keys allowed to be pressed to disable call record
 */
export type TelephonyOvhPabxHuntingQueueRecordDisablingDigitEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * Possible languages of the sound played to inform caller that he can disable call record
 */
export type TelephonyOvhPabxHuntingQueueRecordDisablingLanguageEnum = 'english' | 'french';
/**
 * Calls dispatching startegy
 */
export type TelephonyOvhPabxHuntingQueueStrategyEnum = 'cumulationByAgentOrder' | 'longestHangupAgent' | 'longestIdleAgent' | 'random' | 'ringAll' | 'roundRobin' | 'sequentiallyByAgentOrder';
/**
 * IVR menu action
 */
export type TelephonyOvhPabxIvrMenuEntryActionEnum = 'bridge' | 'callcenter' | 'menuBack' | 'menuExit' | 'menuSub' | 'menuTop' | 'playback' | 'readDtmf' | 'setCallerName';
/**
 * IVR Menu
 */
export interface TelephonyOvhPabxMenu {
  /**
   * The id of the OvhPabxSound played to greet
   *
   */
  greetSound?: Number;
  /**
   * The text to speech sound played to greet
   *
   */
  greetSoundTts?: Number;
  /**
   * The id of the OvhPabxSound played when the caller uses an invalid DTMF
   *
   */
  invalidSound?: Number;
  /**
   * The text to speech sound played when the caller uses an invalid DTMF
   *
   */
  invalidSoundTts?: Number;
  /**
   */
  menuId?: Number;
  /**
   * The name of the menu
   *
   */
  name?: string;
}
/**
 * IVR menu entry
 */
export interface TelephonyOvhPabxMenuEntry {
  /**
   * The action triggered by the DTMF
   *
   */
  action?: TelephonyOvhPabxIvrMenuEntryActionEnum;
  /**
   * The additionnal parameter of the action
   *
   */
  actionParam?: string;
  /**
   * The DTMF that triggers the action
   *
   */
  dtmf?: string;
  /**
   */
  entryId?: Number;
  /**
   * The position of the entry in the menu
   *
   */
  position?: Number;
}
/**
 * Available actions for overflow and on closure
 */
export type TelephonyOvhPabxQueueActionEnum = 'playback' | 'voicemail';
/**
 * The PABX records
 */
export interface TelephonyOvhPabxRecord {
  /**
   * The agent number of the recorded call
   *
   */
  agent?: string;
  /**
   * The end date of the recorded call
   *
   */
  callEnd?: string;
  /**
   * The begin date of the recorded call
   *
   */
  callStart?: string;
  /**
   * The caller name of the recorded call
   *
   */
  callerIdName?: string;
  /**
   * The caller number of the recorded call
   *
   */
  callerIdNumber?: string;
  /**
   * The destination number of the recorded call
   *
   */
  destinationNumber?: string;
  /**
   * The duration in seconds of the recorded call
   *
   */
  duration?: Number;
  /**
   * The record sound url
   *
   */
  fileUrl?: string;
  /**
   */
  id?: Number;
}
/**
 * The PABX sounds
 */
export interface TelephonyOvhPabxSound {
  /**
   * The sound filename
   *
   */
  name?: string;
  /**
   */
  soundId?: Number;
}
/**
 * The PABX Text To Speech sounds
 */
export interface TelephonyOvhPabxTts {
  /**
   */
  id?: Number;
  /**
   * The text that will be played
   *
   */
  text?: string;
  /**
   * The voice used to say text
   *
   */
  voice?: TelephonyOvhPabxTtsVoiceEnum;
}
/**
 * Voice to use for your text to speech
 */
export type TelephonyOvhPabxTtsVoiceEnum = 'Bruce' | 'Helene' | 'Jenny' | 'Loic';
/**
 * Whispering mode
 */
export type TelephonyOvhPabxWhisperingModeEnum = 'Whisper to agent only' | 'Whisper to all participants';
/**
 * Telephony API related file hosted
 */
export interface TelephonyPcsFile {
  /**
   */
  filename?: string;
  /**
   */
  status?: TelephonyPcsFileStatusEnum;
  /**
   */
  url?: string;
  /**
   */
  urlExpirationDatetime?: string;
}
/**
 * File providing task status
 */
export type TelephonyPcsFileStatusEnum = 'doing' | 'done' | 'error' | 'todo';
/**
 * Plug & Phone
 */
export interface TelephonyPhone {
  /**
   * Brand name
   *
   */
  brand?: string;
  /**
   * The phone description
   *
   */
  description?: string;
  /**
   * Mac Address
   *
   */
  macAddress?: string;
  /**
   * Maximum number of lines managed by a phone
   *
   */
  maxline?: Number;
  /**
   * The ip restriction of your MGCP phone
   *
   */
  mgcpIpRestriction?: string;
  /**
   * Current phone properties
   *
   */
  phoneConfiguration?: TelephonyPhoneConfigurationProperty[];
  /**
   * Phone protocol
   *
   */
  protocol?: TelephonyProtocolEnum;
  /**
   * The phone user password
   *
   */
  userPassword?: string;
}
/**
 * Phone Configuration level enum
 */
export type TelephonyPhoneConfigurationLevelEnum = 'admin' | 'expert';
/**
 * Phone configuration property
 */
export interface TelephonyPhoneConfigurationProperty {
  /**
   * Default property value
   *
   */
  default?: string;
  /**
   * Property description
   *
   */
  description?: string;
  /**
   * Property value possibilities
   *
   */
  enum?: string[];
  /**
   * The property group
   *
   */
  group?: string;
  /**
   * Provisioning level
   *
   */
  level?: TelephonyPhoneConfigurationLevelEnum;
  /**
   * Max string chars
   *
   */
  maxlength?: Number;
  /**
   * The property name
   *
   */
  name?: string;
  /**
   * Range property value
   *
   */
  rangeValue?: ComplexTypeRange<Number>;
  /**
   * Provisioning type
   *
   */
  type?: TelephonyPhoneConfigurationTypeEnum;
  /**
   * Current property value
   *
   */
  value?: string;
}
/**
 * Phone configuration type enum
 */
export type TelephonyPhoneConfigurationTypeEnum = 'boolean' | 'enum' | 'hidden' | 'ipv4' | 'numeric' | 'string';
/**
 * Credentials to access the web interface of the phone
 */
export interface TelephonyPhoneCredentials {
  /**
   * Username to access the web interface of the phone
   *
   */
  login?: string;
  /**
   * Password to access the web interface of the phone
   *
   */
  password?: string;
}
/**
 * Phone book
 */
export interface TelephonyPhonebook {
  /**
   * Identifier of the phonebook
   *
   */
  bookKey?: string;
  /**
   * Set if phonebook is readonly
   *
   */
  isReadonly?: boolean;
  /**
   * Phonebook name
   *
   */
  name?: string;
  /**
   * Phone key identifier between the phone and phonebooks
   *
   */
  phoneKey?: string;
}
/**
 * Phone book contact
 */
export interface TelephonyPhonebookContact {
  /**
   * Group name of the phonebook
   *
   */
  group?: string;
  /**
   * Home mobile phone number of the contact
   *
   */
  homeMobile?: string;
  /**
   * Home landline phone number of the contact
   *
   */
  homePhone?: string;
  /**
   * Contact identifier
   *
   */
  id?: Number;
  /**
   * Contact name
   *
   */
  name?: string;
  /**
   * Contact surname
   *
   */
  surname?: string;
  /**
   * Mobile phone office number of the contact
   *
   */
  workMobile?: string;
  /**
   * Landline phone office number of the contact
   *
   */
  workPhone?: string;
}
/**
 * Phone book on group
 */
export interface TelephonyPhonebookMaster {
  /**
   * Identifier of the phonebook
   *
   */
  bookKey?: string;
  /**
   * Phone book name
   *
   */
  name?: string;
}
/**
 * Portability informations
 */
export interface TelephonyPortability {
  /**
   * The billing account where the numbers will be inserted
   *
   */
  billingAccount?: string;
  /**
   * The portability's creation date
   *
   */
  creationDate?: string;
  /**
   * Customer informations about this portability
   *
   */
  customerInfos?: TelephonyPortabilityCustomerInfos;
  /**
   * The date when the portability will be done and when numbers will be ported
   *
   */
  desiredExecutionDate?: string;
  /**
   * Indicates that portability is in error
   *
   */
  error?: boolean;
  /**
   * Codes representing the error in current portability
   *
   */
  errorCodes?: string[];
  /**
   * The ID of the portability
   *
   */
  id?: Number;
  /**
   * Show the redirection that will be configured when the portability will be done
   *
   */
  lineToRedirectTo?: string;
  /**
   * The list of numbers that is going to be ported
   *
   */
  numbersList?: string[];
  /**
   * The operator that currently holds the numbers
   *
   */
  operator?: string;
  /**
   * The ID of the portability order
   *
   */
  orderId?: Number;
  /**
   * Country that defines the portability kind
   *
   */
  portabilityCountry?: TelephonyPortabilityCountryEnum;
}
/**
 * Country that defines the portability kind
 */
export type TelephonyPortabilityCountryEnum = 'belgium' | 'france' | 'switzerland';
/**
 * Customer informations about a portability
 */
export interface TelephonyPortabilityCustomerInfos {
  /**
   * Building of the customer's address
   *
   */
  building?: string;
  /**
   * City of the customer's address
   *
   */
  city?: string;
  /**
   * Door of the customer's address
   *
   */
  door?: string;
  /**
   * Floor of the customer's address
   *
   */
  floor?: string;
  /**
   * Name of the customer
   *
   */
  name?: string;
  /**
   * SIRET of the customer
   *
   */
  siret?: string;
  /**
   * Stair of the customer's address
   *
   */
  stair?: string;
  /**
   * Street name of the customer's address
   *
   */
  streetName?: string;
  /**
   * Street number of the customer's address
   *
   */
  streetNumber?: string;
  /**
   * ZIP code of the customer's address
   *
   */
  zip?: string;
}
/**
 * Document linked to a portability
 */
export interface TelephonyPortabilityDocument {
  /**
   * Description of the document
   *
   */
  description?: string;
  /**
   * Identifier of the document
   *
   */
  documentId?: Number;
  /**
   * URL to get document
   *
   */
  getUrl?: string;
  /**
   * Name of the document
   *
   */
  name?: string;
  /**
   * URL to upload document
   *
   */
  putUrl?: string;
  /**
   * Document size (in bytes)
   *
   */
  size?: Number;
}
/**
 * Possible parameters to provide to fix portability errors
 */
export interface TelephonyPortabilityFixErrorPossibleParameters {
  /**
   * Mandatory parameter list
   *
   */
  mandatoryParameters?: string[];
  /**
   * Optional parameter list
   *
   */
  optionalParameters?: string[];
}
/**
 * A step in the portability process
 */
export interface TelephonyPortabilityStep {
  /**
   * A brief description of the step
   *
   */
  description?: string;
  /**
   * The date when this step was done
   *
   */
  doneDate?: string;
  /**
   * The theoric delay between the previous step's done date and this step's done date
   *
   */
  duration?: TelephonyPortabilityStepDuration;
  /**
   * Additional informations about the step
   *
   */
  infos?: TelephonyPortabilityStepInfos;
  /**
   * The name of the portability step
   *
   */
  name?: TelephonyPortabilityStepNameEnum;
  /**
   * Indicates if the step is to do, currently doing or done
   *
   */
  status?: TelephonyPortabilityStepStatusEnum;
}
/**
 * Represent the delay between two portability steps
 */
export interface TelephonyPortabilityStepDuration {
  /**
   * The quantity of delay
   *
   */
  quantity?: Number;
  /**
   * The delay's unit
   *
   */
  unit?: TelephonyPortabilityStepDurationUnitEnum;
}
/**
 * List of possible duration unit. "NA" means that there is no defined duration
 */
export type TelephonyPortabilityStepDurationUnitEnum = 'NA' | 'day' | 'hour' | 'openday';
/**
 * Additional informations about the portability step
 */
export interface TelephonyPortabilityStepInfos {
  /**
   * The last portability due date that has been proposed
   *
   */
  lastProposedDate?: string;
  /**
   * If the step status is "error", it is the reason
   *
   */
  reason?: string;
  /**
   * A code representing the reason
   *
   */
  reasonType?: string;
}
/**
 * List of possible step name
 */
export type TelephonyPortabilityStepNameEnum = 'acknowledgmentReceivedFromOperator' | 'belgiumPortabilityRequestCreated' | 'belgiumPortabilityRequestExecutionAcked' | 'belgiumPortabilityRequestExecutionAsked' | 'belgiumPortabilityRequestExecutionCompleted' | 'belgiumPortabilityRequestValidated' | 'belgiumPortabilityRequestWaitingUntilExec' | 'customerFormReceived' | 'customerFormSent' | 'customerFormValidated' | 'finalReportReceivedFromOperator' | 'intermediateReportReceivedFromOperator' | 'numberActivation' | 'requestSentToOperator' | 'sDASequenceReceivedFromOperator';
/**
 * List of possible status of a step
 */
export type TelephonyPortabilityStepStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'hold' | 'todo';
/**
 * Call delivery record of the previous month
 */
export interface TelephonyPreviousVoiceConsumption {
  /**
   */
  called?: string;
  /**
   */
  calling?: string;
  /**
   */
  consumptionId?: Number;
  /**
   * Country suffix destination
   *
   */
  countrySuffix?: string;
  /**
   */
  creationDatetime?: string;
  /**
   * Description of the destination
   *
   */
  designation?: string;
  /**
   */
  destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum;
  /**
   */
  duration?: Number;
  /**
   * Information about hangup cause
   *
   */
  hangupNature?: string;
  /**
   */
  planType?: TelephonyVoiceConsumptionPlanTypeEnum;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  wayType?: TelephonyVoiceConsumptionWayTypeEnum;
}
/**
 * All existing properties of line or alias offer
 */
export type TelephonyPropertyEnum = 'xdsl';
/**
 * Phone protocol
 */
export type TelephonyProtocolEnum = 'mgcp' | 'sip';
/**
 * Informations related to the rate code
 */
export interface TelephonyRateCodeInformation {
  /**
   * The Rsva rate code
   *
   */
  code?: string;
  /**
   * Price per call
   *
   */
  pricePerCallWithoutTax?: OrderPrice;
  /**
   * Price per minute
   *
   */
  pricePerMinuteWithoutTax?: OrderPrice;
}
/**
 * The call direction for a given event
 */
export type TelephonyRealtimeEventDirection = 'incoming' | 'outgoing';
/**
 * The event protocol
 */
export type TelephonyRealtimeEventProtocol = 'mgcp' | 'sip';
/**
 * The event type
 */
export type TelephonyRealtimeEventType = 'end_calling' | 'end_hold' | 'end_ringing' | 'start_calling' | 'start_hold' | 'start_ringing';
/**
 * Redirect service
 */
export interface TelephonyRedirect {
  /**
   */
  description?: string;
  /**
   */
  destination?: string;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * Informations about a SIP registration (i.e. IP, port, User-Agent...)
 */
export interface TelephonyRegistrationInformations {
  /**
   * SIP registration's date
   *
   */
  datetime?: string;
  /**
   * SIP registration's domain
   *
   */
  domain?: string;
  /**
   * SIP registration's IP
   *
   */
  ip?: string;
  /**
   * SIP registration's local device IP
   *
   */
  localIp?: string;
  /**
   * SIP registration's local device port
   *
   */
  localPort?: Number;
  /**
   * SIP registration's port
   *
   */
  port?: Number;
  /**
   * SIP registration's User-Agent
   *
   */
  userAgent?: string;
}
/**
 * Release location type : forward if the calling hangup, backward if the caller hangup, else local
 */
export type TelephonyReleaseLocationEnum = 'backward' | 'forward' | 'local';
/**
 * Call which are repayable
 */
export interface TelephonyRepaymentConsumption {
  /**
   * Called number of the call
   *
   */
  called?: string;
  /**
   * Calling number of the call
   *
   */
  calling?: string;
  /**
   */
  consumptionId?: Number;
  /**
   * the Datetime of the start of the call
   *
   */
  creationDatetime?: string;
  /**
   */
  dialed?: string;
  /**
   * Duration of the call
   *
   */
  duration?: Number;
  /**
   * Calling number's operator
   *
   */
  operator?: string;
  /**
   * Price repayed with the call
   *
   */
  price?: Number;
  /**
   * Is the call repayable right now
   *
   */
  repayable?: boolean;
}
/**
 * Relevant informations about reset code
 */
export interface TelephonyResetPhoneCodeInfo {
  /**
   * Activation code
   *
   */
  activationCode?: string;
  /**
   * Key book url
   *
   */
  keyBook?: string;
  /**
   * Server url
   *
   */
  serverURL?: string;
}
/**
 * Relevant informations of the phone reset
 */
export interface TelephonyResetPhoneInfo {
  /**
   * Reset code informations
   *
   */
  resetCodeInfo?: TelephonyResetPhoneCodeInfo;
  /**
   * Which way had been used to reset the phone
   *
   */
  resetPhoneMethod?: TelephonyResetPhoneMethodEnum;
}
/**
 * How the phone had been reset
 */
export type TelephonyResetPhoneMethodEnum = 'code' | 'http';
/**
 * Current Return Merchandise Authorisation
 */
export interface TelephonyRma {
  /**
   * Is the RMA cancellable?
   *
   */
  cancellable?: boolean;
  /**
   * Creation datetime of the return merchandise authorisation ticket
   *
   */
  creationDatetime?: string;
  /**
   * Merchandise reference
   *
   */
  equipmentReference?: string;
  /**
   * Return merchandise authorisation identifier
   *
   */
  id?: string;
  /**
   * New merchandise brand in case of exchange
   *
   */
  newMerchandise?: string;
  /**
   * Offer type of the new merchandise in case of exchange
   *
   */
  offerTypeNew?: TelephonyRmaOfferTypeEnum;
  /**
   * Offer type of the return merchandise
   *
   */
  offerTypeOld?: TelephonyRmaOfferTypeEnum;
  /**
   * Process determined for merchandise returned
   *
   */
  process?: TelephonyRmaReplaceTypeEnum;
  /**
   * Reception datetime of the return merchandise authorisation ticket
   *
   */
  receptionDatetime?: string;
  /**
   * Contact information related to the delivery shipping in case of exchange
   *
   */
  shippingContact?: TelephonyContact;
  /**
   * Return merchandise authorisation step
   *
   */
  status?: TelephonyRmaStatusEnum;
  /**
   * Indicates the current status of the RMA with a list of steps
   *
   */
  steps?: TelephonyRmaStep[];
  /**
   * Termination datetime of the return merchandise authorisation ticket
   *
   */
  terminationDatetime?: string;
  /**
   * Typology process of merchandise return
   *
   */
  type?: TelephonyRmaTypeEnum;
}
/**
 * Return merchandise authorisation offer type
 */
export type TelephonyRmaOfferTypeEnum = 'deposit' | 'loan' | 'purchase';
/**
 * Return merchandise authorisation type
 */
export type TelephonyRmaPublicTypeEnum = 'change to another phone/equipment (restitution first and shipping then)' | 'restitution but keep the service enable';
/**
 * Return merchandise authorisation type
 */
export type TelephonyRmaReplaceTypeEnum = 'changePhone' | 'phoneRestitution' | 'undefined';
/**
 * Post-creation return information structure
 */
export interface TelephonyRmaReturn {
  /**
   * Voucher reference identifier of the return merchandise authorisation
   *
   */
  id?: string;
}
/**
 * Return merchandise authorisation step
 */
export type TelephonyRmaStatusEnum = 'closed' | 'open' | 'received';
/**
 * Informations related to the current RMA step status
 */
export interface TelephonyRmaStep {
  /**
   * A brief description of the step
   *
   */
  description?: string;
  /**
   * The date when this step was done
   *
   */
  doneDate?: string;
  /**
   * Additional informations about the step
   *
   */
  infos?: string;
  /**
   * The name of the RMA step
   *
   */
  name?: TelephonyRmaStepNameEnum;
  /**
   * Status of the step
   *
   */
  status?: TelephonyRmaStepStatusEnum;
}
/**
 * RMA step names
 */
export type TelephonyRmaStepNameEnum = 'dispatchJustification' | 'equipmentSending' | 'equipmentTesting' | 'opening' | 'parcelReception' | 'parcelValidation' | 'validation';
/**
 * Status of the RMA step
 */
export type TelephonyRmaStepStatusEnum = 'done' | 'todo';
/**
 * Return merchandise authorisation type
 */
export type TelephonyRmaTypeEnum = 'after sale equipment service exchange' | 'after sale phone service exchange' | 'equipment restitution' | 'fast exchange' | 'old merchandise reception before exchange' | 'phone restitution' | 'resends due to shipping lost by the carrier' | 'resends due to shipping not withdraw' | 'specific return merchandise authorisation' | 'termination' | 'unknown';
/**
 * French value added services subject to the RSVA reform (Référentiel des numéros SVA)
 */
export interface TelephonyRsva {
  /**
   */
  serviceName?: string;
  /**
   */
  typology?: TelephonyPortabilitySpecialNumberCategoryEnum;
}
/**
 * Scheduler capable services
 */
export interface TelephonyScheduler {
  /**
   */
  serviceName?: string;
  /**
   */
  timeZone?: TelephonyTimeZone;
}
/**
 * Scheculer category
 */
export type TelephonySchedulerCategoryEnum = 'holidays' | 'scheduler1' | 'scheduler2' | 'scheduler3';
/**
 * Scheduled event
 */
export interface TelephonySchedulerEvent {
  /**
   * The category of the event
   *
   */
  categories?: TelephonySchedulerCategoryEnum;
  /**
   * The ending date of the event
   *
   */
  dateEnd?: string;
  /**
   * The beginning date of the event
   *
   */
  dateStart?: string;
  /**
   */
  description?: string;
  /**
   */
  title?: string;
  /**
   * The unique ICS event identifier
   *
   */
  uid?: string;
}
/**
 * ScreenList capable services
 */
export interface TelephonyScreen {
  /**
   */
  incomingScreenList?: TelephonyScreenListChoosingEnum;
  /**
   */
  outgoingScreenList?: TelephonyScreenListChoosingEnum;
  /**
   */
  serviceName?: string;
}
/**
 * Screen list
 */
export interface TelephonyScreenList {
  /**
   */
  callNumber?: string;
  /**
   */
  id?: Number;
  /**
   */
  nature?: TelephonyScreenListNatureEnum;
  /**
   */
  status?: string;
  /**
   */
  type?: TelephonyScreenListTypeEnum;
}
/**
 * Type of screen list
 */
export type TelephonyScreenListChoosingEnum = 'blacklist' | 'disabled' | 'whitelist';
/**
 * Nature of screen list
 */
export type TelephonyScreenListNatureEnum = 'fax' | 'international' | 'services' | 'special' | 'voicemail';
/**
 * Type of screen list
 */
export type TelephonyScreenListTypeEnum = 'incomingBlackList' | 'incomingWhiteList' | 'outgoingBlackList' | 'outgoingWhiteList';
/**
 * Voicemail audio format
 */
export type TelephonyServiceVoicemailAudioFormatEnum = 'aiff' | 'au' | 'flac' | 'mp3' | 'ogg' | 'wav';
/**
 * Voicemail configuration
 */
export type TelephonyServiceVoicemailMailOptionEnum = 'attachment' | 'simple';
/**
 * Voicemail configuration
 */
export interface TelephonyServiceVoicemailNotifications {
  /**
   */
  email?: string;
  /**
   */
  type?: TelephonyServiceVoicemailMailOptionEnum;
}
/**
 * Details about simultaneous channels of this line
 */
export interface TelephonySimultaneousChannelsDetails {
  /**
   * Basic quantity of simultaneous channels included in the line.
   *
   */
  basic?: Number;
  /**
   * Current quantity of simultaneous channels.
   *
   */
  current?: Number;
  /**
   * Extra quantity of simultaneous channels added to the line.
   *
   */
  extra?: Number;
  /**
   * Maximum quantity of simultaneous channels the line can have.
   *
   */
  maximum?: Number;
  /**
   * Quantity of simultaneous channels going to be deleted at the end of the billing cycle.
   *
   */
  toBeDeleted?: Number;
}
/**
 * Product type
 */
export type TelephonySipDomainProductTypeEnum = 'sip' | 'trunk';
/**
 * Sounds attached to this telephony account
 */
export interface TelephonySound {
  /**
   * Sound creation date
   *
   */
  creationDate?: string;
  /**
   * Sound description
   *
   */
  description?: string;
  /**
   * Sound filename
   *
   */
  filename?: string;
  /**
   * URL to get sound file
   *
   */
  getUrl?: string;
  /**
   * Sound ID
   *
   */
  id?: Number;
  /**
   * URL to upload sound file
   *
   */
  putUrl?: string;
  /**
   * Sound file size (in bytes)
   *
   */
  size?: Number;
}
/**
 * Specific number available
 */
export interface TelephonySpecificNumber {
  /**
   * Set if number is premium
   *
   */
  isPremium?: boolean;
  /**
   * The number
   *
   */
  number?: string;
}
/**
 * Available timeframes for statistics
 */
export type TelephonyStatisticsTimeframeEnum = 'daily' | 'hourly' | 'monthly' | 'weekly' | 'yearly';
/**
 * Operation on a telephony service
 */
export interface TelephonyTask {
  /**
   * Action associated with the task
   *
   */
  action?: string;
  /**
   * Potential failure reason of the task
   *
   */
  message?: string;
  /**
   * Object potentially created at the end of the task
   *
   */
  objectCreated?: string;
  /**
   */
  serviceType?: string;
  /**
   * Status of the task
   *
   */
  status?: TelephonyTaskStatusEnum;
  /**
   */
  taskId?: Number;
}
/**
 * Task status
 */
export type TelephonyTaskStatusEnum = 'doing' | 'done' | 'error' | 'pause' | 'todo';
/**
 * Telephony service
 */
export interface TelephonyTelephonyGenericService {
  /**
   */
  serviceName?: string;
}
/**
 * Informations related to a telephony service
 */
export interface TelephonyTelephonySearchService {
  /**
   * The billing account of the service
   *
   */
  billingAccount?: string;
  /**
   * The service domain
   *
   */
  domain?: string;
  /**
   * The offer description
   *
   */
  type?: TelephonyTelephonySearchServiceTypeEnum;
}
/**
 * List of possible type of a telephony service
 */
export type TelephonyTelephonySearchServiceTypeEnum = 'alias' | 'line';
/**
 * Telephony service
 */
export interface TelephonyTelephonyService {
  /**
   * The country of the number
   *
   */
  country?: TelephonyNumberCountryEnum;
  /**
   * The country code of the number
   *
   */
  countryCode?: TelephonyNumberCountryCodeEnum;
  /**
   * Current outplan
   *
   */
  currentOutplan?: OrderPrice;
  /**
   */
  description?: string;
  /**
   */
  featureType?: TelephonyTypeEnum;
  /**
   * The service offers
   *
   */
  getPublicOffer?: TelephonyLineOffer;
  /**
   * Does this service have fax capabilities?
   *
   */
  hasFaxCapabilities?: boolean;
  /**
   */
  offers?: string[];
  /**
   */
  properties?: TelephonyPropertyEnum[];
  /**
   * The identifier to use to port the number
   *
   */
  rio?: string;
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
  /**
   */
  simultaneousLines?: Number;
}
/**
 * Temporary url informations
 */
export interface TelephonyTemporaryLogsLink {
  /**
   * Temporary url expiration date
   *
   */
  expirationDate?: string;
  /**
   * Temporary url
   *
   */
  url?: string;
}
/**
 * Termination reason
 */
export type TelephonyTerminationReasonEnum = 'addresseMove' | 'billingDifficulties' | 'cessationOfActivity' | 'missingOptions' | 'moveToCompetitor' | 'other' | 'plugAndPhoneDifficulties' | 'technicalDifficulties';
/**
 * Time conditions
 */
export interface TelephonyTimeCondition {
  /**
   */
  day?: TelephonyTimeConditionsDayEnum;
  /**
   */
  hourBegin?: string;
  /**
   */
  hourEnd?: string;
  /**
   */
  id?: Number;
  /**
   */
  policy?: TelephonyTimeConditionsPolicyEnum;
  /**
   */
  status?: string;
}
/**
 * Time conditions options
 */
export interface TelephonyTimeConditionOptions {
  /**
   * Number associated to the first slot action
   *
   */
  slot1Number?: string;
  /**
   * Action type executed when the first slot is used
   *
   */
  slot1Type?: TelephonyTimeConditionsSlotTypeEnum;
  /**
   * Number associated to the second slot action
   *
   */
  slot2Number?: string;
  /**
   * Action type executed when the second slot is used
   *
   */
  slot2Type?: TelephonyTimeConditionsSlotTypeEnum;
  /**
   * Number associated to the third slot action
   *
   */
  slot3Number?: string;
  /**
   * Action type executed when the third slot is used
   *
   */
  slot3Type?: TelephonyTimeConditionsSlotTypeEnum;
  /**
   * Status of time conditions
   *
   */
  status?: TelephonyTimeConditionsGlobalStatusEnum;
  /**
   * Timeout value of the time condition
   *
   */
  timeout?: TelephonyTimeConditionsTimeoutEnum;
  /**
   * Number associated to the unavailable slot action
   *
   */
  unavailableNumber?: string;
  /**
   * Action type executed when the unavailable slot is used
   *
   */
  unavailableType?: TelephonyTimeConditionsSlotTypeEnum;
}
/**
 * Day of the time condition
 */
export type TelephonyTimeConditionsDayEnum = 'friday' | 'holiday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday';
/**
 * Time conditions global status
 */
export type TelephonyTimeConditionsGlobalStatusEnum = 'deleted' | 'disabled' | 'enabled';
/**
 * Policy of the time condition
 */
export type TelephonyTimeConditionsPolicyEnum = 'available' | 'slot1' | 'slot2' | 'slot3';
/**
 * Forward type
 */
export type TelephonyTimeConditionsSettingsForwardTypeEnum = 'number' | 'voicemail';
/**
 * Type of slot
 */
export type TelephonyTimeConditionsSlotTypeEnum = 'number' | 'voicemail';
/**
 * Timeout before unavailable action is triggered
 */
export type TelephonyTimeConditionsTimeoutEnum = 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 5 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90;
/**
 * A value associated to a timestamp
 */
export interface TelephonyTimestampAndValue {
  /**
   */
  timestamp?: Number;
  /**
   */
  value?: Number;
}
/**
 * expiration possibility
 */
export type TelephonyTokenExpirationEnum = '1 day' | '1 hour' | '30 days' | '5 minutes' | 'unlimited';
/**
 * Line tones
 */
export interface TelephonyTones {
  /**
   * Tone played when caller is waiting in queue
   *
   */
  callWaiting?: TelephonyTonesEnum;
  /**
   * Tone played when callee is ending call
   *
   */
  endCall?: TelephonyTonesEnum;
  /**
   * Tone played when caller is put on hold
   *
   */
  onHold?: TelephonyTonesOnHoldEnum;
  /**
   * Ringback tone
   *
   */
  ringback?: TelephonyTonesEnum;
}
/**
 * Tones type
 */
export type TelephonyTonesEnum = 'Custom sound' | 'None';
/**
 * Tones type
 */
export type TelephonyTonesOnHoldEnum = 'Custom sound' | 'None' | 'Predefined 1' | 'Predefined 2';
/**
 * Tones type
 */
export type TelephonyTonesTypeEnum = 'callWaiting' | 'endCall' | 'onHold' | 'ringback';
/**
 * Trunk service
 */
export interface TelephonyTrunk {
  /**
   * Description of the service
   *
   */
  description?: string;
  /**
   * Name of the service
   *
   */
  serviceName?: string;
  /**
   * Type of the service
   *
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * External displayed number linked to a trunk
 */
export interface TelephonyTrunkExternalDisplayedNumber {
  /**
   * Creation date
   *
   */
  createdAt?: string;
  /**
   * External displayed number linked to a trunk
   *
   */
  number?: string;
  /**
   * Validation status
   *
   */
  status?: TelephonyTrunkExternalDisplayedNumberStatusEnum;
  /**
   * Validation date
   *
   */
  validatedAt?: string;
}
/**
 * Status of the trunk's external displayed number
 */
export type TelephonyTrunkExternalDisplayedNumberStatusEnum = 'enabled' | 'refused' | 'toDelete' | 'waitingValidation';
/**
 * Trunk external displayed number validation
 */
export interface TelephonyTrunkExternalDisplayedNumberValidation {
  /**
   * telephony.Task id of the validation phone call
   *
   */
  phoneCallTaskId?: Number;
  /**
   * Validation code to type during phone call
   *
   */
  validationCode?: string;
}
/**
 * Details for a channels pack
 */
export interface TelephonyTrunkSimultaneousPack {
  /**
   * The number of channels included in the pack
   *
   */
  channels?: Number;
  /**
   * The quantity of packs present in the combination
   *
   */
  quantity?: Number;
  /**
   * The unit price of the channels pack
   *
   */
  unitPrice?: OrderPrice;
}
/**
 * Repartition of simultaneous channels packs for a trunk
 */
export interface TelephonyTrunkSimultaneousPacksRepartition {
  /**
   * The optimized quantity of channels to order
   *
   */
  optimizedChannelsQuantity?: Number;
  /**
   * The repartition of the packs
   *
   */
  packsRepartition?: TelephonyTrunkSimultaneousPack[];
  /**
   * The total price of the channels packs combination
   *
   */
  totalPrice?: OrderPrice;
}
/**
 * All existing types of line or alias
 */
export type TelephonyTypeEnum = 'cloudHunting' | 'cloudIvr' | 'conference' | 'contactCenterSolution' | 'contactCenterSolutionExpert' | 'ddi' | 'easyHunting' | 'easyPabx' | 'empty' | 'fax' | 'freefax' | 'mgcp' | 'miniPabx' | 'oldConference' | 'plugAndFax' | 'redirect' | 'sip' | 'svi' | 'voicefax' | 'voicemail' | 'vxml';
/**
 * All existing types
 */
export type TelephonyTypeServiceEnum = 'alias' | 'line';
/**
 * Call delivery record
 */
export interface TelephonyVoiceConsumption {
  /**
   */
  called?: string;
  /**
   */
  calling?: string;
  /**
   */
  consumptionId?: Number;
  /**
   * Country suffix destination
   *
   */
  countrySuffix?: string;
  /**
   */
  creationDatetime?: string;
  /**
   * Description of the destination
   *
   */
  designation?: string;
  /**
   */
  destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum;
  /**
   */
  dialed?: string;
  /**
   */
  duration?: Number;
  /**
   * Information about hangup cause
   *
   */
  hangupNature?: string;
  /**
   */
  planType?: TelephonyVoiceConsumptionPlanTypeEnum;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  wayType?: TelephonyVoiceConsumptionWayTypeEnum;
}
/**
 * Consumption destination type
 */
export type TelephonyVoiceConsumptionDestinationTypeEnum = 'landline' | 'mobile' | 'special';
/**
 * Consumption plan type
 */
export type TelephonyVoiceConsumptionPlanTypeEnum = 'outplan' | 'priceplan';
/**
 * Consumption way type
 */
export type TelephonyVoiceConsumptionWayTypeEnum = 'incoming' | 'outgoing' | 'transfer';
/**
 * All existing type of routing for a voicemail
 */
export type TelephonyVoicefaxRoutingEnum = 'fax' | 'voicemail';
/**
 * Voicemail service
 */
export interface TelephonyVoicemail {
  /**
   */
  description?: string;
  /**
   */
  offers?: string[];
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * Greeting type
 */
export type TelephonyVoicemailGreetingEnum = 'default' | 'full' | 'short';
/**
 * Voicemail greeting
 */
export interface TelephonyVoicemailGreetings {
  /**
   * Callee number in international format
   *
   */
  callee?: string;
  /**
   * Customized greeting voicemail directory
   *
   */
  dir?: TelephonyVoicemailMessageFolderGreetingEnum;
  /**
   * Uniq customized greeting identifier
   *
   */
  id?: Number;
}
/**
 * Folder type
 */
export type TelephonyVoicemailMessageFolderDirectoryEnum = 'family' | 'friends' | 'inbox' | 'old' | 'urgent' | 'work';
/**
 * Folder type
 */
export type TelephonyVoicemailMessageFolderGreetingEnum = 'busy' | 'greet' | 'temp' | 'unavail';
/**
 * Voicemail message
 */
export interface TelephonyVoicemailMessages {
  /**
   * Callee number in international format
   *
   */
  callee?: string;
  /**
   * Caller number in international format
   *
   */
  caller?: string;
  /**
   * Message datetime creation
   *
   */
  creationDatetime?: string;
  /**
   * Voicemessage directory
   *
   */
  dir?: TelephonyVoicemailMessageFolderDirectoryEnum;
  /**
   * Message duration (in seconds)
   *
   */
  duration?: Number;
  /**
   * Uniq voicemail message identifier
   *
   */
  id?: Number;
}
/**
 * Internal and external numbers for voicemail service
 */
export interface TelephonyVoicemailNumbers {
  /**
   * The external voicemail number
   *
   */
  external?: string;
  /**
   * The internal voicemail number
   *
   */
  internal?: string;
}
/**
 * Voicemail Properties
 */
export interface TelephonyVoicemailProperties {
  /**
   * Name of the voicemail panel announce file
   *
   */
  annouceMessage?: string;
  /**
   * Format of the voicemail audio file attached to emails
   *
   */
  audioFormat?: TelephonyServiceVoicemailAudioFormatEnum;
  /**
   * Don't allow callers to leave voicemails
   *
   */
  doNotRecord?: boolean;
  /**
   * Force password request to access the voicemail panel
   *
   */
  forcePassword?: boolean;
  /**
   * Email address from which emails will be sent
   *
   */
  fromEmail?: string;
  /**
   * Name from which emails will be sent
   *
   */
  fromName?: string;
  /**
   * Sound ID of the long greeeting
   *
   */
  fullGreetingSoundId?: Number;
  /**
   * Type of the greeting to play
   *
   */
  greetingType?: TelephonyVoicemailGreetingEnum;
  /**
   * Current voicemail version
   *
   */
  isNewVersion?: boolean;
  /**
   * Don't delete voicemails after they've been sent by email
   *
   */
  keepMessage?: boolean;
  /**
   * Email addresses to notify when a new voicemail is left
   *
   */
  redirectionEmails?: TelephonyServiceVoicemailNotifications[];
  /**
   * Sound ID of the short greeting played before an automated message
   *
   */
  shortGreetingSoundId?: Number;
  /**
   * Play the temporary greeting instead of the regular one
   *
   */
  temporaryGreetingActivated?: boolean;
  /**
   * Sound ID of the temporary greeeting
   *
   */
  temporaryGreetingSoundId?: Number;
  /**
   * Quantity of unread voicemails
   *
   */
  unreadMessages?: Number;
}
/**
 * Vxml services
 */
export interface TelephonyVxml {
  /**
   */
  description?: string;
  /**
   */
  offers?: string[];
  /**
   */
  serviceName?: string;
  /**
   */
  serviceType?: TelephonyTypeServiceEnum;
}
/**
 * Vxml Properties
 */
export interface TelephonyVxmlProperties {
  /**
   */
  url?: string;
  /**
   */
  urlRecord?: string;
}
/**
 * Special number category
 */
export type TelephonyPortabilitySpecialNumberCategoryEnum = 'access' | 'adults' | 'announced' | 'be_adults' | 'be_content' | 'be_games' | 'be_general' | 'be_relaxing' | 'conferencing' | 'contentsAuto' | 'contentsManual' | 'directory' | 'games' | 'linking' | 'm2m' | 'relationship';
/**
 * Time zones available for scheduled events time definitions
 */
export type TelephonyTimeZone = 'Europe/Berlin' | 'Europe/Brussels' | 'Europe/London' | 'Europe/Madrid' | 'Europe/Paris' | 'Europe/Zurich';
/**
 * Traffic extracts (SIP) of your line
 */
export interface TelephonyTrafficExtract {
  /**
   * The start date of the traffic extract
   *
   */
  dateEnd?: string;
  /**
   * The start date of the traffic extract
   *
   */
  dateStart?: string;
  /**
   * The PCAP file size of the traffic extract
   *
   */
  fileSize?: Number;
  /**
   * The PCAP URL of the traffic extract
   *
   */
  fileUrl?: string;
  /**
   * The id of the traffic extract
   *
   */
  id?: Number;
  /**
   * The status of the extract
   *
   */
  status?: TelephonyTaskStatusEnum;
}
type PathsTelephonyGET = '/telephony' | 
'/telephony/accessories' | 
'/telephony/aliases' | 
'/telephony/aliases/{serviceName}' | 
'/telephony/aliases/{serviceName}/serviceInfos' | 
'/telephony/availableDefaultSipDomains' | 
'/telephony/currentOrderIds' | 
'/telephony/directories/availableZipCodes' | 
'/telephony/directories/cities' | 
'/telephony/fax/offers' | 
'/telephony/line/offer/phones' | 
'/telephony/line/offers' | 
'/telephony/lines' | 
'/telephony/lines/{serviceName}' | 
'/telephony/lines/{serviceName}/serviceInfos' | 
'/telephony/number/detailedZones' | 
'/telephony/number/ranges' | 
'/telephony/number/specificNumbers' | 
'/telephony/number/zones' | 
'/telephony/searchServices' | 
'/telephony/sounds' | 
'/telephony/sounds/{id}' | 
'/telephony/spare' | 
'/telephony/spare/brands' | 
'/telephony/spare/{spare}' | 
'/telephony/spare/{spare}/compatibleReplacement' | 
'/telephony/spare/{spare}/serviceInfos' | 
'/telephony/trunks' | 
'/telephony/trunks/{serviceName}' | 
'/telephony/trunks/{serviceName}/serviceInfos' | 
'/telephony/{billingAccount}' | 
'/telephony/{billingAccount}/abbreviatedNumber' | 
'/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/allowedCreditThreshold' | 
'/telephony/{billingAccount}/amountSecurityDeposit' | 
'/telephony/{billingAccount}/billingAccountSite' | 
'/telephony/{billingAccount}/conference' | 
'/telephony/{billingAccount}/conference/{serviceName}' | 
'/telephony/{billingAccount}/conference/{serviceName}/histories' | 
'/telephony/{billingAccount}/conference/{serviceName}/histories/{id}' | 
'/telephony/{billingAccount}/conference/{serviceName}/informations' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}' | 
'/telephony/{billingAccount}/conference/{serviceName}/settings' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}' | 
'/telephony/{billingAccount}/ddi' | 
'/telephony/{billingAccount}/ddi/{serviceName}' | 
'/telephony/{billingAccount}/easyHunting' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/records' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/sound' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyPabx' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones' | 
'/telephony/{billingAccount}/eventToken' | 
'/telephony/{billingAccount}/fax' | 
'/telephony/{billingAccount}/fax/{serviceName}' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings' | 
'/telephony/{billingAccount}/historyConsumption' | 
'/telephony/{billingAccount}/historyConsumption/{date}' | 
'/telephony/{billingAccount}/historyConsumption/{date}/file' | 
'/telephony/{billingAccount}/historyRepaymentConsumption' | 
'/telephony/{billingAccount}/historyRepaymentConsumption/{date}' | 
'/telephony/{billingAccount}/historyRepaymentConsumption/{date}/document' | 
'/telephony/{billingAccount}/historyTollfreeConsumption' | 
'/telephony/{billingAccount}/historyTollfreeConsumption/{date}' | 
'/telephony/{billingAccount}/historyTollfreeConsumption/{date}/document' | 
'/telephony/{billingAccount}/line' | 
'/telephony/{billingAccount}/line/{serviceName}' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/line/{serviceName}/activateNewPhone' | 
'/telephony/{billingAccount}/line/{serviceName}/antihack' | 
'/telephony/{billingAccount}/line/{serviceName}/automaticCall' | 
'/telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}' | 
'/telephony/{billingAccount}/line/{serviceName}/availableSipDomains' | 
'/telephony/{billingAccount}/line/{serviceName}/calls' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/canChangePassword' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/ips' | 
'/telephony/{billingAccount}/line/{serviceName}/lastRegistrations' | 
'/telephony/{billingAccount}/line/{serviceName}/listAssociablePhones' | 
'/telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines' | 
'/telephony/{billingAccount}/line/{serviceName}/offer' | 
'/telephony/{billingAccount}/line/{serviceName}/options' | 
'/telephony/{billingAccount}/line/{serviceName}/options/availableCodecs' | 
'/telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs' | 
'/telephony/{billingAccount}/line/{serviceName}/phone' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook' | 
'/telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable' | 
'/telephony/{billingAccount}/line/{serviceName}/records' | 
'/telephony/{billingAccount}/line/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails' | 
'/telephony/{billingAccount}/line/{serviceName}/statistics' | 
'/telephony/{billingAccount}/line/{serviceName}/tones' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}' | 
'/telephony/{billingAccount}/miniPabx' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/tones' | 
'/telephony/{billingAccount}/number' | 
'/telephony/{billingAccount}/number/{serviceName}' | 
'/telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers' | 
'/telephony/{billingAccount}/offerTask' | 
'/telephony/{billingAccount}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/oldPhone' | 
'/telephony/{billingAccount}/outplanNotification' | 
'/telephony/{billingAccount}/outplanNotification/{id}' | 
'/telephony/{billingAccount}/ovhPabx' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/records' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/sound' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' | 
'/telephony/{billingAccount}/phonebook' | 
'/telephony/{billingAccount}/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/export' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/portability' | 
'/telephony/{billingAccount}/portability/{id}' | 
'/telephony/{billingAccount}/portability/{id}/canBeCancelled' | 
'/telephony/{billingAccount}/portability/{id}/canBeExecuted' | 
'/telephony/{billingAccount}/portability/{id}/dateCanBeChanged' | 
'/telephony/{billingAccount}/portability/{id}/document' | 
'/telephony/{billingAccount}/portability/{id}/document/{documentId}' | 
'/telephony/{billingAccount}/portability/{id}/relaunch' | 
'/telephony/{billingAccount}/portability/{id}/status' | 
'/telephony/{billingAccount}/redirect' | 
'/telephony/{billingAccount}/redirect/{serviceName}' | 
'/telephony/{billingAccount}/rsva' | 
'/telephony/{billingAccount}/rsva/{serviceName}' | 
'/telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes' | 
'/telephony/{billingAccount}/rsva/{serviceName}/currentRateCode' | 
'/telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode' | 
'/telephony/{billingAccount}/scheduler' | 
'/telephony/{billingAccount}/scheduler/{serviceName}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' | 
'/telephony/{billingAccount}/screen' | 
'/telephony/{billingAccount}/screen/{serviceName}' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}' | 
'/telephony/{billingAccount}/service' | 
'/telephony/{billingAccount}/service/{serviceName}' | 
'/telephony/{billingAccount}/service/{serviceName}/diagnosticReports' | 
'/telephony/{billingAccount}/service/{serviceName}/directory' | 
'/telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode' | 
'/telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes' | 
'/telephony/{billingAccount}/service/{serviceName}/eventToken' | 
'/telephony/{billingAccount}/service/{serviceName}/faxConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChange' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChanges' | 
'/telephony/{billingAccount}/service/{serviceName}/offerTask' | 
'/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/task' | 
'/telephony/{billingAccount}/service/{serviceName}/task/{taskId}' | 
'/telephony/{billingAccount}/service/{serviceName}/voiceConsumption' | 
'/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}' | 
'/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics' | 
'/telephony/{billingAccount}/serviceInfos' | 
'/telephony/{billingAccount}/task' | 
'/telephony/{billingAccount}/task/{taskId}' | 
'/telephony/{billingAccount}/timeCondition' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/options' | 
'/telephony/{billingAccount}/trunk' | 
'/telephony/{billingAccount}/trunk/{serviceName}' | 
'/telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}' | 
'/telephony/{billingAccount}/voicemail' | 
'/telephony/{billingAccount}/voicemail/{serviceName}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/routing' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers' | 
'/telephony/{billingAccount}/vxml' | 
'/telephony/{billingAccount}/vxml/{serviceName}' | 
'/telephony/{billingAccount}/vxml/{serviceName}/settings';

type PathsTelephonyPUT = '/telephony/aliases/{serviceName}/serviceInfos' | 
'/telephony/lines/{serviceName}/serviceInfos' | 
'/telephony/sounds/{id}' | 
'/telephony/spare/{spare}/serviceInfos' | 
'/telephony/trunks/{serviceName}/serviceInfos' | 
'/telephony/{billingAccount}' | 
'/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/conference/{serviceName}/settings' | 
'/telephony/{billingAccount}/ddi/{serviceName}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones' | 
'/telephony/{billingAccount}/fax/{serviceName}' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings' | 
'/telephony/{billingAccount}/line/{serviceName}' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/line/{serviceName}/options' | 
'/telephony/{billingAccount}/line/{serviceName}/phone' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/tones' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/tones' | 
'/telephony/{billingAccount}/number/{serviceName}' | 
'/telephony/{billingAccount}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/portability/{id}/document/{documentId}' | 
'/telephony/{billingAccount}/redirect/{serviceName}' | 
'/telephony/{billingAccount}/rsva/{serviceName}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' | 
'/telephony/{billingAccount}/screen/{serviceName}' | 
'/telephony/{billingAccount}/service/{serviceName}' | 
'/telephony/{billingAccount}/service/{serviceName}/directory' | 
'/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}' | 
'/telephony/{billingAccount}/serviceInfos' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/options' | 
'/telephony/{billingAccount}/voicemail/{serviceName}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings' | 
'/telephony/{billingAccount}/vxml/{serviceName}/settings';

type PathsTelephonyPOST = '/telephony/aliases/{serviceName}/changeContact' | 
'/telephony/lines/{serviceName}/changeContact' | 
'/telephony/setDefaultSipDomain' | 
'/telephony/sounds' | 
'/telephony/spare/{spare}/replace' | 
'/telephony/trunks/{serviceName}/changeContact' | 
'/telephony/{billingAccount}/abbreviatedNumber' | 
'/telephony/{billingAccount}/billingAccountSite' | 
'/telephony/{billingAccount}/canTransferSecurityDeposit' | 
'/telephony/{billingAccount}/cancelTermination' | 
'/telephony/{billingAccount}/changeContact' | 
'/telephony/{billingAccount}/conference/{serviceName}/announceUpload' | 
'/telephony/{billingAccount}/conference/{serviceName}/lock' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf' | 
'/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute' | 
'/telephony/{billingAccount}/conference/{serviceName}/unlock' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess' | 
'/telephony/{billingAccount}/ddi/{serviceName}/changeDestination' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload' | 
'/telephony/{billingAccount}/eventToken' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists/reset' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings/changePassword' | 
'/telephony/{billingAccount}/fax/{serviceName}/settings/sendFax' | 
'/telephony/{billingAccount}/historyRepaymentConsumption' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber' | 
'/telephony/{billingAccount}/line/{serviceName}/activateNewPhone' | 
'/telephony/{billingAccount}/line/{serviceName}/antihack' | 
'/telephony/{billingAccount}/line/{serviceName}/associateDevice' | 
'/telephony/{billingAccount}/line/{serviceName}/automaticCall' | 
'/telephony/{billingAccount}/line/{serviceName}/block' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer' | 
'/telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper' | 
'/telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber' | 
'/telephony/{billingAccount}/line/{serviceName}/changePassword' | 
'/telephony/{billingAccount}/line/{serviceName}/click2Call' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call' | 
'/telephony/{billingAccount}/line/{serviceName}/convertToNumber' | 
'/telephony/{billingAccount}/line/{serviceName}/dissociateDevice' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/reboot' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/resetConfig' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma' | 
'/telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines' | 
'/telephony/{billingAccount}/line/{serviceName}/tones/toneUpload' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts' | 
'/telephony/{billingAccount}/line/{serviceName}/unblock' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload' | 
'/telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine' | 
'/telephony/{billingAccount}/number/{serviceName}/changeFeatureType' | 
'/telephony/{billingAccount}/number/{serviceName}/convertToLine' | 
'/telephony/{billingAccount}/outplanNotification' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts' | 
'/telephony/{billingAccount}/phonebook' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/import' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact' | 
'/telephony/{billingAccount}/portability/{id}/cancel' | 
'/telephony/{billingAccount}/portability/{id}/changeDate' | 
'/telephony/{billingAccount}/portability/{id}/document' | 
'/telephony/{billingAccount}/portability/{id}/execute' | 
'/telephony/{billingAccount}/portability/{id}/relaunch' | 
'/telephony/{billingAccount}/redirect/{serviceName}/changeDestination' | 
'/telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode' | 
'/telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/service/{serviceName}/cancelTermination' | 
'/telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount' | 
'/telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations' | 
'/telephony/{billingAccount}/service/{serviceName}/eventToken' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChange' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition' | 
'/telephony/{billingAccount}/transferSecurityDeposit' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting' | 
'/telephony/{billingAccount}/vxml/{serviceName}/settings/logs';

type PathsTelephonyDELETE = '/telephony/sounds/{id}' | 
'/telephony/spare/{spare}' | 
'/telephony/{billingAccount}' | 
'/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}' | 
'/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/eventToken' | 
'/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}' | 
'/telephony/{billingAccount}/fax/{serviceName}/screenLists' | 
'/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}' | 
'/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}' | 
'/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}' | 
'/telephony/{billingAccount}/outplanNotification/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}' | 
'/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}' | 
'/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}' | 
'/telephony/{billingAccount}/portability/{id}/document/{documentId}' | 
'/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}' | 
'/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}' | 
'/telephony/{billingAccount}/service/{serviceName}' | 
'/telephony/{billingAccount}/service/{serviceName}/eventToken' | 
'/telephony/{billingAccount}/service/{serviceName}/offerChange' | 
'/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}' | 
'/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}' | 
'/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}';

export class ApiTelephony extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Search a service with its domain, to get its billing account and type
  Search a service with its domain, to get its billing account and type
  **/
  public get(path: '/telephony/searchServices', pathParams: undefined, queryParams: {axiom?: string}): Promise<TelephonyTelephonySearchService[]>;
  /**
  Spare properties
  Get this object properties
  **/
  public get(path: '/telephony/spare/{spare}', pathParams: {spare: string}): Promise<SpareTelephonyTelephonySpare>;
  /**
  compatibleReplacement operations
  Return the list of phone domains compatible to be replaced
  **/
  public get(path: '/telephony/spare/{spare}/compatibleReplacement', pathParams: {spare: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/spare/{spare}/serviceInfos', pathParams: {spare: string}): Promise<ServicesService>;
  /**
  Get all available spare brands
  Get all available spare brands
  **/
  public get(path: '/telephony/spare/brands'): Promise<string[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/spare'): Promise<string[]>;
  /**
  List the telephony.TelephonyService objects
  Services associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/service', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  offerChanges operations
  List all available offer changes compatibilities
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChanges', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyLineOffer[]>;
  /**
  List the telephony.RepaymentConsumption objects
  Call which could be repayable
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption', pathParams: {billingAccount: string, serviceName: string}, queryParams: {'creationDatetime.to'?: string, 'creationDatetime.from'?: string}): Promise<Number[]>;
  /**
  Call which are repayable
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/repaymentConsumption/{consumptionId}', pathParams: {billingAccount: string, serviceName: string, consumptionId: Number}): Promise<TelephonyRepaymentConsumption>;
  /**
  List the telephony.VoiceConsumption objects
  Call delivery records.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption', pathParams: {billingAccount: string, serviceName: string}, queryParams: {'creationDatetime.to'?: string, destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum, wayType?: TelephonyVoiceConsumptionWayTypeEnum, 'creationDatetime.from'?: string, planType?: TelephonyVoiceConsumptionPlanTypeEnum}): Promise<Number[]>;
  /**
  Advanced diagnostic of the voice call
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}/callDiagnostics', pathParams: {billingAccount: string, serviceName: string, consumptionId: Number}): Promise<TelephonyCallDiagnostics>;
  /**
  Call delivery record
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/voiceConsumption/{consumptionId}', pathParams: {billingAccount: string, serviceName: string, consumptionId: Number}): Promise<TelephonyVoiceConsumption>;
  /**
  List the telephony.OfferTask objects
  Operations on a telephony service's offer
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask', pathParams: {billingAccount: string, serviceName: string}, queryParams: {status?: TelephonyTaskStatusEnum, type?: TelephonyOfferTaskTypeEnum, action?: TelephonyOfferTaskActionEnum}): Promise<Number[]>;
  /**
  Operation on a telephony offer
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}', pathParams: {billingAccount: string, serviceName: string, taskId: Number}): Promise<TelephonyOfferTask>;
  /**
  diagnosticReports operations
  Get Relevant informations of the service detected from the MOS or the signal leg in SIP/MGCP protocol.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/diagnosticReports', pathParams: {billingAccount: string, serviceName: string}, queryParams: {dayInterval?: TelephonyDiagnosticReportIndexEnum}): Promise<TelephonyDiagnosticReport[]>;
  /**
  Offer change
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOfferChange>;
  /**
  Operation on a telephony service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/task/{taskId}', pathParams: {billingAccount: string, serviceName: string, taskId: Number}): Promise<TelephonyTask>;
  /**
  List the telephony.Task objects
  Operations on a telephony service
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/task', pathParams: {billingAccount: string, serviceName: string}, queryParams: {action?: string, status?: TelephonyTaskStatusEnum, serviceType?: string}): Promise<Number[]>;
  /**
  Directory Informations
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyDirectoryInfo>;
  /**
  getDirectoryServiceCode operations
  Get directory service code from an APE code ( principal activity of the firm code )
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getDirectoryServiceCode', pathParams: {billingAccount: string, serviceName: string}, queryParams: {apeCode?: string}): Promise<TelephonyDirectoryHeadingPJ[]>;
  /**
  getWayTypes operations
  Get all the way types availables
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/directory/getWayTypes', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyDirectoryWayType[]>;
  /**
  List the telephony.FaxConsumption objects
  Fax delivery records.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption', pathParams: {billingAccount: string, serviceName: string}, queryParams: {'creationDatetime.from'?: string, wayType?: TelephonyFaxConsumptionWayTypeEnum, 'creationDatetime.to'?: string}): Promise<Number[]>;
  /**
  Fax delivery record
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/faxConsumption/{consumptionId}', pathParams: {billingAccount: string, serviceName: string, consumptionId: Number}): Promise<TelephonyFaxConsumption>;
  /**
  Call delivery record of the previous month
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption/{consumptionId}', pathParams: {billingAccount: string, serviceName: string, consumptionId: Number}): Promise<TelephonyPreviousVoiceConsumption>;
  /**
  List the telephony.PreviousVoiceConsumption objects
  Call delivery records of the previous month.
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/previousVoiceConsumption', pathParams: {billingAccount: string, serviceName: string}, queryParams: {'creationDatetime.to'?: string, destinationType?: TelephonyVoiceConsumptionDestinationTypeEnum, wayType?: TelephonyVoiceConsumptionWayTypeEnum, 'creationDatetime.from'?: string, planType?: TelephonyVoiceConsumptionPlanTypeEnum}): Promise<Number[]>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTelephonyService>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEventToken>;
  /**
  Phone book contact
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount: string, bookKey: string, id: Number}): Promise<TelephonyPhonebookContact>;
  /**
  List the telephony.PhonebookContact objects
  Phonebook contacts
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount: string, bookKey: string}): Promise<Number[]>;
  /**
  Phone book on group
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}', pathParams: {billingAccount: string, bookKey: string}): Promise<TelephonyPhonebookMaster>;
  /**
  export operations
  Export the phonebook's contacts
  **/
  public get(path: '/telephony/{billingAccount}/phonebook/{bookKey}/export', pathParams: {billingAccount: string, bookKey: string}, queryParams: {format?: TelephonyContactsExportFormatsEnum}): Promise<TelephonyPcsFile>;
  /**
  List the telephony.PhonebookMaster objects
  Return phonebooks associated to this group
  **/
  public get(path: '/telephony/{billingAccount}/phonebook', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  amountSecurityDeposit operations
  Give all amounts availables for your billing account
  **/
  public get(path: '/telephony/{billingAccount}/amountSecurityDeposit', pathParams: {billingAccount: string}): Promise<OrderPrice[]>;
  /**
  List the telephony.HistoryConsumption objects
  Previous billed consumptions
  **/
  public get(path: '/telephony/{billingAccount}/historyConsumption', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Previous billed consumptions
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/historyConsumption/{date}', pathParams: {billingAccount: string, date: string}): Promise<TelephonyHistoryConsumption>;
  /**
  file operations
  Previous billed consumption files
  **/
  public get(path: '/telephony/{billingAccount}/historyConsumption/{date}/file', pathParams: {billingAccount: string, date: string}, queryParams: {extension?: TelephonyBillDocument}): Promise<TelephonyPcsFile>;
  /**
  List the telephony.OfferTask objects
  Operations on a telephony service's offer
  **/
  public get(path: '/telephony/{billingAccount}/offerTask', pathParams: {billingAccount: string}, queryParams: {type?: TelephonyOfferTaskTypeEnum, action?: TelephonyOfferTaskActionEnum, status?: TelephonyTaskStatusEnum}): Promise<Number[]>;
  /**
  Operation on a telephony offer
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/offerTask/{taskId}', pathParams: {billingAccount: string, taskId: Number}): Promise<TelephonyOfferTask>;
  /**
  DDI (direct dial-in) service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ddi/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyDdi>;
  /**
  List the telephony.Ddi objects
  DDIs (direct dial-in) associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/ddi', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  List the telephony.Number objects
  Additional numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/number', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  convertToLineAvailableOffers operations
  Get the available line offers to schedule a conversion to line
  **/
  public get(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLineAvailableOffers', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyLineOffersAndContracts>;
  /**
  Additional number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/number/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyNumber>;
  /**
  List the telephony.EasyPabx objects
  EasyPabx associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  EasyPabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyPabx>;
  /**
  Line tones
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTones>;
  /**
  Easy/Mini PABX agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Hunting agents
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  EasyPabx Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyPabxHunting>;
  /**
  List the telephony.Redirect objects
  Redirects associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/redirect', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Redirect service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/redirect/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyRedirect>;
  /**
  Trunk service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTrunk>;
  /**
  channelsPacksRepartition operations
  Determine the best channels packs combination for a given channel quantity
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/channelsPacksRepartition', pathParams: {billingAccount: string, serviceName: string}, queryParams: {quantity?: Number}): Promise<TelephonyTrunkSimultaneousPacksRepartition>;
  /**
  List the telephony.TrunkExternalDisplayedNumber objects
  External displayed number linked to this trunk
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  External displayed number linked to a trunk
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}', pathParams: {billingAccount: string, serviceName: string, number: string}): Promise<TelephonyTrunkExternalDisplayedNumber>;
  /**
  List the telephony.Trunk objects
  Trunk associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/trunk', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  IVR Menu
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', pathParams: {billingAccount: string, serviceName: string, menuId: Number}): Promise<TelephonyOvhPabxMenu>;
  /**
  IVR menu entry
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', pathParams: {billingAccount: string, serviceName: string, menuId: Number, entryId: Number}): Promise<TelephonyOvhPabxMenuEntry>;
  /**
  List the telephony.OvhPabxMenuEntry objects
  Menu entry
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry', pathParams: {billingAccount: string, serviceName: string, menuId: Number}): Promise<Number[]>;
  /**
  List the telephony.OvhPabxMenu objects
  Menus associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  The PABX sounds
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}', pathParams: {billingAccount: string, serviceName: string, soundId: Number}): Promise<TelephonyOvhPabxSound>;
  /**
  List the telephony.OvhPabxSound objects
  Sounds associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  OVH calls queues and OVH IVRs (Interactive Voice Response)
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabx>;
  /**
  The PABX Text To Speech sounds
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyOvhPabxTts>;
  /**
  List the telephony.OvhPabxTts objects
  Text to Speech associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  The PABX records
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyOvhPabxRecord>;
  /**
  List the telephony.OvhPabxRecord objects
  Records associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Calls queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queue
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveStatistics', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<TelephonyOvhPabxHuntingQueueLiveStatistics>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Live calls of the queue
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Calls queues
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  PABX Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHunting>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Calls agents
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/liveStatus', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Calls agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyEventToken>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Current calls of the callcenter agent
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queues
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<Number[]>;
  /**
  The web access for your cloudpabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyBannerAccess>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEventToken>;
  /**
  Custom statuses of your callcenter agents
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Custom statuses of your agents
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Screenlist condition
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, conditionId: Number}): Promise<TelephonyOvhPabxDialplanExtensionConditionScreenList>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
  Screenlist conditions checked when executing the extension
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<Number[]>;
  /**
  Dialplan extension
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<TelephonyOvhPabxDialplanExtension>;
  /**
  Time condition
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, conditionId: Number}): Promise<TelephonyOvhPabxDialplanExtensionConditionTime>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionTime objects
  Time conditions checked when executing the extension
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<Number[]>;
  /**
  List the telephony.OvhPabxDialplanExtensionRule objects
  Rules contained in the extension
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<Number[]>;
  /**
  Dialplan rule
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, ruleId: Number}): Promise<TelephonyOvhPabxDialplanExtensionRule>;
  /**
  List the telephony.OvhPabxDialplanExtension objects
  Extensions contained in the dialplan
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number}): Promise<Number[]>;
  /**
  Dialplan
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number}): Promise<TelephonyOvhPabxDialplan>;
  /**
  List the telephony.OvhPabxDialplan objects
  Dialplans associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  List the telephony.OvhPabx objects
  OVH calls queues and OVH IVRs (Interactive Voice Response) associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/ovhPabx', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/eventToken', pathParams: {billingAccount: string}): Promise<TelephonyEventToken>;
  /**
  oldPhone operations
  List old phones archived as they were not returned after an RMA
  **/
  public get(path: '/telephony/{billingAccount}/oldPhone', pathParams: {billingAccount: string}): Promise<TelephonyPhone[]>;
  /**
  Abbreviated number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount: string, abbreviatedNumber: Number}): Promise<TelephonyAbbreviatedNumberGroup>;
  /**
  List the telephony.AbbreviatedNumberGroup objects
  Abbreviated numbers for the billing account
  **/
  public get(path: '/telephony/{billingAccount}/abbreviatedNumber', pathParams: {billingAccount: string}): Promise<Number[]>;
  /**
  List the telephony.Screen objects
  Screenlist compatible numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/screen', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  ScreenList capable services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyScreen>;
  /**
  List the telephony.ScreenList objects
  Rules for call filtering for this service
  **/
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Screen list
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyScreenList>;
  /**
  Previous tollfree bill
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}', pathParams: {billingAccount: string, date: string}): Promise<TelephonyHistoryTollfreeConsumption>;
  /**
  document operations
  Get the csv document
  **/
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption/{date}/document', pathParams: {billingAccount: string, date: string}): Promise<TelephonyPcsFile>;
  /**
  List the telephony.HistoryTollfreeConsumption objects
  Previous tollfree bill
  **/
  public get(path: '/telephony/{billingAccount}/historyTollfreeConsumption', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Operation on a telephony service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/task/{taskId}', pathParams: {billingAccount: string, taskId: Number}): Promise<TelephonyTask>;
  /**
  List the telephony.Task objects
  Operations on a telephony billing account
  **/
  public get(path: '/telephony/{billingAccount}/task', pathParams: {billingAccount: string}, queryParams: {serviceType?: string, status?: TelephonyTaskStatusEnum, action?: string}): Promise<Number[]>;
  /**
  List the telephony.ConsumptionThreshold objects
  Outplan notifications configured for this billing account
  **/
  public get(path: '/telephony/{billingAccount}/outplanNotification', pathParams: {billingAccount: string}): Promise<Number[]>;
  /**
  The outplan notifications configured for your billing account
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/outplanNotification/{id}', pathParams: {billingAccount: string, id: Number}): Promise<TelephonyConsumptionThreshold>;
  /**
  billingAccountSite operations
  Current billing account site (billing account features are overwritten by the site)
  **/
  public get(path: '/telephony/{billingAccount}/billingAccountSite', pathParams: {billingAccount: string}): Promise<string>;
  /**
  List the telephony.Scheduler objects
  Scheduled events
  **/
  public get(path: '/telephony/{billingAccount}/scheduler', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Scheduler capable services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyScheduler>;
  /**
  List the telephony.SchedulerEvent objects
  Custom events scheduled
  **/
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events', pathParams: {billingAccount: string, serviceName: string}, queryParams: {'dateStart.to'?: string, 'dateStart.from'?: string, 'dateEnd.from'?: string, categories?: TelephonySchedulerCategoryEnum, 'dateEnd.to'?: string}): Promise<string[]>;
  /**
  Scheduled event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', pathParams: {billingAccount: string, serviceName: string, uid: string}): Promise<TelephonySchedulerEvent>;
  /**
  Previous repayment bill
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}', pathParams: {billingAccount: string, date: string}): Promise<TelephonyHistoryRepaymentConsumption>;
  /**
  document operations
  Get the csv document
  **/
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption/{date}/document', pathParams: {billingAccount: string, date: string}): Promise<TelephonyPcsFile>;
  /**
  List the telephony.HistoryRepaymentConsumption objects
  Previous repayment bill
  **/
  public get(path: '/telephony/{billingAccount}/historyRepaymentConsumption', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Conference
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyConference>;
  /**
  List the telephony.ConferenceWebAccess objects
  List your conference web access
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  List public web access of your conference
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyConferenceWebAccess>;
  /**
  informations operations
  Get realtime conference informations
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/informations', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyConferenceInformations>;
  /**
  Conference properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyConferenceProperties>;
  /**
  List the telephony.ConferenceHistory objects
  List your past conferences for this number
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  List past conferences on your number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/histories/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyConferenceHistory>;
  /**
  Conference service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyConferenceParticipants>;
  /**
  List the telephony.ConferenceParticipants objects
  Current participants of the associate conference
  **/
  public get(path: '/telephony/{billingAccount}/conference/{serviceName}/participants', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  List the telephony.Conference objects
  Conferences associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/conference', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/serviceInfos', pathParams: {billingAccount: string}): Promise<ServicesService>;
  /**
  List the telephony.Voicemail objects
  Voicemails associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/voicemail', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  routing operations
  Get the status of the voicemail. Available only if the line has fax capabilities
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/routing', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyVoicefaxRoutingEnum>;
  /**
  voicemailNumbers operations
  Get number for internal and external voicemail
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/voicemailNumbers', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyVoicemailNumbers>;
  /**
  Voicemail Properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyVoicemailProperties>;
  /**
  Voicemail service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyVoicemail>;
  /**
  download operations
  Get a url to download the sound file
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/download', pathParams: {billingAccount: string, serviceName: string, id: Number}, queryParams: {format?: TelephonyServiceVoicemailAudioFormatEnum}): Promise<TelephonyPcsFile>;
  /**
  Voicemail message
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyVoicemailMessages>;
  /**
  List the telephony.VoicemailMessages objects
  Voicemail directory messages
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories', pathParams: {billingAccount: string, serviceName: string}, queryParams: {dir?: TelephonyVoicemailMessageFolderDirectoryEnum}): Promise<Number[]>;
  /**
  download operations
  Get a url to download the sound file
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/download', pathParams: {billingAccount: string, serviceName: string, id: Number}, queryParams: {format?: TelephonyServiceVoicemailAudioFormatEnum}): Promise<TelephonyPcsFile>;
  /**
  Voicemail greeting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyVoicemailGreetings>;
  /**
  List the telephony.VoicemailGreetings objects
  Voicemail greeting message properties
  **/
  public get(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings', pathParams: {billingAccount: string, serviceName: string}, queryParams: {dir?: TelephonyVoicemailMessageFolderGreetingEnum}): Promise<Number[]>;
  /**
  List the telephony.Vxml objects
  Vxml numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/vxml', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Vxml services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/vxml/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyVxml>;
  /**
  Vxml Properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyVxmlProperties>;
  /**
  allowedCreditThreshold operations
  Get the allowed creditThreshold for this billing account
  **/
  public get(path: '/telephony/{billingAccount}/allowedCreditThreshold', pathParams: {billingAccount: string}): Promise<OrderPrice[]>;
  /**
  List the telephony.Fax objects
  Faxes associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/fax', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Fax campaigns
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyFaxCampaign>;
  /**
  detail operations
  Detail of the fax recipients by status
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/detail', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyFaxCampaignDetail>;
  /**
  List the telephony.FaxCampaign objects
  Fax campaigns of the associate fax
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Fax properties
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyFaxProperties>;
  /**
  Fax ScreenLists
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyFaxScreen>;
  /**
  Fax service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/fax/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyFax>;
  /**
  dateCanBeChanged operations
  Indicates whether or not the portability date can be changed
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/dateCanBeChanged', pathParams: {billingAccount: string, id: Number}): Promise<boolean>;
  /**
  canBeExecuted operations
  Indicates whether or not the portability can be executed
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/canBeExecuted', pathParams: {billingAccount: string, id: Number}): Promise<boolean>;
  /**
  canBeCancelled operations
  Indicates whether or not the portability can be cancelled
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/canBeCancelled', pathParams: {billingAccount: string, id: Number}): Promise<boolean>;
  /**
  status operations
  Indicates the current status of the portability, with a list of steps
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/status', pathParams: {billingAccount: string, id: Number}): Promise<TelephonyPortabilityStep[]>;
  /**
  Portability informations
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}', pathParams: {billingAccount: string, id: Number}): Promise<TelephonyPortability>;
  /**
  relaunch operations
  Indicates whether or not error can be fixed and portability can be relaunched
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/relaunch', pathParams: {billingAccount: string, id: Number}): Promise<TelephonyPortabilityFixErrorPossibleParameters>;
  /**
  Document linked to a portability
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', pathParams: {billingAccount: string, id: Number, documentId: Number}): Promise<TelephonyPortabilityDocument>;
  /**
  List the telephony.PortabilityDocument objects
  Document linked to this portability
  **/
  public get(path: '/telephony/{billingAccount}/portability/{id}/document', pathParams: {billingAccount: string, id: Number}): Promise<Number[]>;
  /**
  List the telephony.Portability objects
  Current number portabilities for this billing account
  **/
  public get(path: '/telephony/{billingAccount}/portability', pathParams: {billingAccount: string}): Promise<Number[]>;
  /**
  List the telephony.MiniPabx objects
  Miniabx associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Easy/Mini PABX agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Hunting agents
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  MiniPabx Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyMiniPabxHunting>;
  /**
  Line tones
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTones>;
  /**
  MiniPabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/miniPabx/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyMiniPabx>;
  /**
  List the telephony.Line objects
  Lines associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/line', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  lastRegistrations operations
  List the informations about the last registrations (i.e. IP, port, User-Agent...)
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/lastRegistrations', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyRegistrationInformations[]>;
  /**
  availableSipDomains operations
  Listing of domains Sip availables
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/availableSipDomains', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  listAssociablePhones operations
  List phones with available slots where this line can be attached
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/listAssociablePhones', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyLinePhoneAssociable[]>;
  /**
  ips operations
  Listing of last ips registry
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/ips', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyDatetimeAndIpvalue[]>;
  /**
  antihack operations
  Current list of numbers or short code numbers restricted by an auto antihack
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/antihack', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  Line options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyLineOptions>;
  /**
  availableCodecs operations
  List of codecs combinaisons available for this line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options/availableCodecs', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  defaultCodecs operations
  Get the default codecs for this line if none are set
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/options/defaultCodecs', pathParams: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
  offer operations
  Return public offer property
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/offer', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyLineOffer>;
  /**
  simultaneousChannelsDetails operations
  Details about simultaneous channels of this line.
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/simultaneousChannelsDetails', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonySimultaneousChannelsDetails>;
  /**
  phoneCanBeAssociable operations
  List the phones with Sip slot available
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phoneCanBeAssociable', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyLinePhone[]>;
  /**
  merchandiseAvailable operations
  List of available exchange merchandise brand
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/merchandiseAvailable', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyHardwareOffer[]>;
  /**
  List the telephony.Rma objects
  Return Merchandise Authorisation associated
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  Current Return Merchandise Authorisation
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', pathParams: {billingAccount: string, serviceName: string, id: string}): Promise<TelephonyRma>;
  /**
  List the telephony.Phonebook objects
  Return phonebooks associated
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  List the telephony.PhonebookContact objects
  Phonebook contacts
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount: string, serviceName: string, bookKey: string}): Promise<Number[]>;
  /**
  Phone book contact
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount: string, serviceName: string, bookKey: string, id: Number}): Promise<TelephonyPhonebookContact>;
  /**
  export operations
  Export the phonebook's contacts
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/export', pathParams: {billingAccount: string, serviceName: string, bookKey: string}, queryParams: {format?: TelephonyContactsExportFormatsEnum}): Promise<TelephonyPcsFile>;
  /**
  Phone book
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', pathParams: {billingAccount: string, serviceName: string, bookKey: string}): Promise<TelephonyPhonebook>;
  /**
  availableFunction operations
  List the available functions for the key
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}/availableFunction', pathParams: {billingAccount: string, serviceName: string, keyNum: Number}): Promise<string[]>;
  /**
  Plug & Phone function key
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}', pathParams: {billingAccount: string, serviceName: string, keyNum: Number}): Promise<TelephonyFunctionKey>;
  /**
  List the telephony.FunctionKey objects
  Plug & Phone function keys
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  supportsPhonebook operations
  Does the phone manages phonebooks?
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/supportsPhonebook', pathParams: {billingAccount: string, serviceName: string}): Promise<boolean>;
  /**
  adminCredentials operations
  Returns the administration user and password of the phone if you are a VIP
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone/adminCredentials', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyPhoneCredentials>;
  /**
  Plug & Phone
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/phone', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyPhone>;
  /**
  maximumAvailableSimultaneousLines operations
  Get the maximum available simultaneous lines for this line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/maximumAvailableSimultaneousLines', pathParams: {billingAccount: string, serviceName: string}): Promise<Number>;
  /**
  User of the click 2 call
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyClick2CallUser>;
  /**
  List the telephony.Click2CallUser objects
  User which can use click 2 call on the line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  List the telephony.CallsGenerated objects
  Automatic Calls made by Calls Generator on this line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall', pathParams: {billingAccount: string, serviceName: string}): Promise<string[]>;
  /**
  Automatic Call made by Call Generator on this line
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall/{identifier}', pathParams: {billingAccount: string, serviceName: string, identifier: string}): Promise<TelephonyCallsGenerated>;
  /**
  The PABX records
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyOvhPabxRecord>;
  /**
  List the telephony.OvhPabxRecord objects
  The recordings of your line outgoing calls
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/records', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  statistics operations
  Get statistics of the current line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/statistics', pathParams: {billingAccount: string, serviceName: string}, queryParams: {type?: TelephonyLineStatisticsTypeEnum, timeframe?: TelephonyStatisticsTimeframeEnum}): Promise<ComplexTypeUnitAndValues<TelephonyTimestampAndValue>>;
  /**
  Line tones
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/tones', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTones>;
  /**
  Line service
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyLine>;
  /**
  activateNewPhone operations
  Check if there is a new phone to activate and if it's possible, in case of phone switch
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  List the telephony.AbbreviatedNumber objects
  Abbreviated numbers for the line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Abbreviated number
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount: string, serviceName: string, abbreviatedNumber: Number}): Promise<TelephonyAbbreviatedNumber>;
  /**
  List the telephony.trafficExtract objects
  The traffic extracts (SIP only) of your line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Traffic extracts (SIP) of your line
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTrafficExtract>;
  /**
  canChangePassword operations
  Ability to manage SIP password on this service
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/canChangePassword', pathParams: {billingAccount: string, serviceName: string}): Promise<boolean>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  The current calls of your line
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/calls', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  List the telephony.Rsva objects
  Service concerned by the french RSVA reform
  **/
  public get(path: '/telephony/{billingAccount}/rsva', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  allowedRateCodes operations
  Compatible rate codes related to this value added service
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/allowedRateCodes', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyRateCodeInformation[]>;
  /**
  French value added services subject to the RSVA reform (Référentiel des numéros SVA)
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyRsva>;
  /**
  currentRateCode operations
  Current rate code related to this sva
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/currentRateCode', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyDetailedRateCodeInformation>;
  /**
  scheduledRateCode operations
  New scheduled rate code related to this sva
  **/
  public get(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduledRateCode', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyDetailedRateCodeInformation>;
  /**
  Billing Account
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}', pathParams: {billingAccount: string}): Promise<TelephonyBillingAccount>;
  /**
  List the telephony.EasyHunting objects
  OVH easy calls queues associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  List the telephony.EasyHuntingTimeConditions objects
  Time conditions checked when a call is received
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions', pathParams: {billingAccount: string, serviceName: string}, queryParams: {policy?: TelephonyTimeConditionsPolicyEnum}): Promise<Number[]>;
  /**
  Easy hunting time conditions
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', pathParams: {billingAccount: string, serviceName: string, conditionId: Number}): Promise<TelephonyEasyHuntingTimeConditions>;
  /**
  Easy hunting time conditions options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyHuntingTimeConditionsSettings>;
  /**
  OVH easy calls queues
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyHunting>;
  /**
  Easy hunting screen lists conditions options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyHuntingScreenListsConditionsSettings>;
  /**
  Screenlist condition
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', pathParams: {billingAccount: string, serviceName: string, conditionId: Number}): Promise<TelephonyEasyHuntingScreenListsConditions>;
  /**
  List the telephony.EasyHuntingScreenListsConditions objects
  Screen lists conditions checked when a call is received
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions', pathParams: {billingAccount: string, serviceName: string}, queryParams: {screenListType?: TelephonyOvhPabxDialplanExtensionConditionScreenListTypeEnum}): Promise<Number[]>;
  /**
  List the telephony.OvhPabxRecord objects
  Records associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  The PABX records
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyOvhPabxRecord>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Live calls of the queue
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveStatistics', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<TelephonyOvhPabxHuntingQueueLiveStatistics>;
  /**
  Calls queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}/liveStatus', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queue
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<Number[]>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Calls queues
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Custom statuses of your agents
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Custom statuses of your callcenter agents
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEventToken>;
  /**
  List the telephony.OvhPabxHuntingQueueLiveCalls objects
  Current calls of the callcenter agent
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<Number[]>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyOvhPabxHuntingQueueLiveCalls>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}/liveStatus', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  Agent assigned to a queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Agent assigned to the queues
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<Number[]>;
  /**
  The web access for your cloudpabx
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyBannerAccess>;
  /**
  Token associated to the service for live event
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyEventToken>;
  /**
  Calls agent
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  Live statistics of the queue
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/liveStatus', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentLiveStatus>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Calls agents
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  PABX Hunting
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHunting>;
  /**
  List the telephony.OvhPabxSound objects
  Sounds associated with this PABX
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  The PABX sounds
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}', pathParams: {billingAccount: string, serviceName: string, soundId: Number}): Promise<TelephonyOvhPabxSound>;
  /**
  List the telephony.GenericScreen objects
  Time conditions compatible numbers associated with this billing account
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition', pathParams: {billingAccount: string}): Promise<string[]>;
  /**
  Time conditions capable services
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyGenericScreen>;
  /**
  Time conditions options
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTimeConditionOptions>;
  /**
  List the telephony.TimeCondition objects
  Rules for time conditions for this service
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition', pathParams: {billingAccount: string, serviceName: string}): Promise<Number[]>;
  /**
  Time conditions
  Get this object properties
  **/
  public get(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTimeCondition>;
  /**
  Get all available SIP domains by country
  Get all available SIP domains by country
  **/
  public get(path: '/telephony/availableDefaultSipDomains', pathParams: undefined, queryParams: {type?: TelephonySipDomainProductTypeEnum}): Promise<TelephonyDefaultSipDomains[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/trunks/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/trunks/{serviceName}', pathParams: {serviceName: string}): Promise<TelephonyTelephonyGenericService>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/trunks'): Promise<string[]>;
  /**
  Get current order ids
  Get current order ids
  **/
  public get(path: '/telephony/currentOrderIds'): Promise<Number[]>;
  /**
  List the telephony.Sound objects
  Sounds attached to this telephony account
  **/
  public get(path: '/telephony/sounds'): Promise<Number[]>;
  /**
  Sounds attached to this telephony account
  Get this object properties
  **/
  public get(path: '/telephony/sounds/{id}', pathParams: {id: Number}): Promise<TelephonySound>;
  /**
  Get all available specific number from a country
  Get all available specific number from a country
  **/
  public get(path: '/telephony/number/specificNumbers', pathParams: undefined, queryParams: {range?: string, zone?: string, type?: TelephonyNumberTypeEnum, country?: TelephonyNumberCountryEnum}): Promise<TelephonySpecificNumber[]>;
  /**
  Get all available geographic zone with some details, from a country
  Get all available geographic zone with some details, from a country
  **/
  public get(path: '/telephony/number/detailedZones', pathParams: undefined, queryParams: {axiom?: string, country?: TelephonyNumberCountryEnum}): Promise<TelephonyNumberDetailedZone[]>;
  /**
  Get all available special range from a country
  Get all available special range from a country
  **/
  public get(path: '/telephony/number/ranges', pathParams: undefined, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<string[]>;
  /**
  Get all available geographic zone from a country
  Get all available geographic zone from a country
  **/
  public get(path: '/telephony/number/zones', pathParams: undefined, queryParams: {country?: TelephonyNumberCountryEnum, axiom?: string}): Promise<string[]>;
  /**
  Get all available fax offer compatible
  Get all available fax offer compatible
  **/
  public get(path: '/telephony/fax/offers', pathParams: undefined, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<TelephonyLineOffer[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/aliases'): Promise<string[]>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/aliases/{serviceName}', pathParams: {serviceName: string}): Promise<TelephonyTelephonyGenericService>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/aliases/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Get all available accessories
  Get all available accessories
  **/
  public get(path: '/telephony/accessories', pathParams: undefined, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<TelephonyAccessoryOffer[]>;
  /**
  Get all zip codes compatible for a number
  Get all zip codes compatible for a number
  **/
  public get(path: '/telephony/directories/availableZipCodes', pathParams: undefined, queryParams: {country?: TelephonyNumberCountryEnum, number?: string}): Promise<string[]>;
  /**
  Get city informations from a zip code
  Get city informations from a zip code
  **/
  public get(path: '/telephony/directories/cities', pathParams: undefined, queryParams: {zipCode?: string, country?: TelephonyNumberCountryEnum}): Promise<TelephonyCity[]>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony'): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/telephony/lines/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Telephony service
  Get this object properties
  **/
  public get(path: '/telephony/lines/{serviceName}', pathParams: {serviceName: string}): Promise<TelephonyTelephonyGenericService>;
  /**
  Operations about the VOIP service
  List available services
  **/
  public get(path: '/telephony/lines'): Promise<string[]>;
  /**
  Get all available phone brands compatible with lines
  Get all available phone brands compatible with lines
  **/
  public get(path: '/telephony/line/offer/phones', pathParams: undefined, queryParams: {country?: TelephonyNumberCountryEnum, offer?: string}): Promise<TelephonyLinePhone[]>;
  /**
  Get all available line offer compatible
  Get all available line offer compatible
  **/
  public get(path: '/telephony/line/offers', pathParams: undefined, queryParams: {country?: TelephonyNumberCountryEnum}): Promise<TelephonyLineOffer[]>;
  public get(path: PathsTelephonyGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/spare/{spare}/serviceInfos', pathParams: {spare: string}): Promise<void>;
  /**
  Operation on a telephony offer
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/service/{serviceName}/offerTask/{taskId}', pathParams: {billingAccount: string, serviceName: string, taskId: Number}): Promise<void>;
  /**
  Directory Informations
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/service/{serviceName}/directory', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Telephony service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/service/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Phone book contact
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount: string, bookKey: string, id: Number}): Promise<void>;
  /**
  Phone book on group
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/phonebook/{bookKey}', pathParams: {billingAccount: string, bookKey: string}): Promise<void>;
  /**
  Operation on a telephony offer
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/offerTask/{taskId}', pathParams: {billingAccount: string, taskId: Number}): Promise<void>;
  /**
  DDI (direct dial-in) service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ddi/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Additional number
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/number/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  EasyPabx
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Line tones
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Easy/Mini PABX agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<void>;
  /**
  EasyPabx Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Redirect service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/redirect/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  IVR Menu
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', pathParams: {billingAccount: string, serviceName: string, menuId: Number}): Promise<void>;
  /**
  IVR menu entry
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', pathParams: {billingAccount: string, serviceName: string, menuId: Number, entryId: Number}): Promise<void>;
  /**
  OVH calls queues and OVH IVRs (Interactive Voice Response)
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  The PABX Text To Speech sounds
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Calls queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<void>;
  /**
  PABX Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Calls agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<void>;
  /**
  Dialplan extension
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<void>;
  /**
  Time condition
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, conditionId: Number}): Promise<void>;
  /**
  Dialplan rule
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, ruleId: Number}): Promise<void>;
  /**
  Dialplan
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number}): Promise<void>;
  /**
  Abbreviated number
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount: string, abbreviatedNumber: Number}): Promise<void>;
  /**
  ScreenList capable services
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/screen/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Scheduler capable services
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/scheduler/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Scheduled event
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', pathParams: {billingAccount: string, serviceName: string, uid: string}): Promise<void>;
  /**
  Conference properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/conference/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/serviceInfos', pathParams: {billingAccount: string}): Promise<void>;
  /**
  Voicemail Properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Voicemail service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/voicemail/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Vxml Properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Fax properties
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}/settings', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Fax ScreenLists
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Fax service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/fax/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Document linked to a portability
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', pathParams: {billingAccount: string, id: Number, documentId: Number}): Promise<void>;
  /**
  Easy/Mini PABX agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<void>;
  /**
  MiniPabx Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Line tones
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  MiniPabx
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/miniPabx/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Line options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/options', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', pathParams: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
  Phone book contact
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount: string, serviceName: string, bookKey: string, id: Number}): Promise<void>;
  /**
  Phone book
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', pathParams: {billingAccount: string, serviceName: string, bookKey: string}): Promise<void>;
  /**
  Plug & Phone function key
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone/functionKey/{keyNum}', pathParams: {billingAccount: string, serviceName: string, keyNum: Number}): Promise<void>;
  /**
  Plug & Phone
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/phone', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Line tones
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/tones', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Line service
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Abbreviated number
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount: string, serviceName: string, abbreviatedNumber: Number}): Promise<void>;
  /**
  French value added services subject to the RSVA reform (Référentiel des numéros SVA)
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/rsva/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Billing Account
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}', pathParams: {billingAccount: string}): Promise<void>;
  /**
  Easy hunting time conditions
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', pathParams: {billingAccount: string, serviceName: string, conditionId: Number}): Promise<void>;
  /**
  Easy hunting time conditions options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  OVH easy calls queues
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Easy hunting screen lists conditions options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Screenlist condition
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', pathParams: {billingAccount: string, serviceName: string, conditionId: Number}): Promise<void>;
  /**
  Calls queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<void>;
  /**
  Agent assigned to a queue
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<void>;
  /**
  Calls agent
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  PABX Hunting
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Time conditions options
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/options', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Time conditions
  Alter this object properties
  **/
  public put(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/trunks/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Sounds attached to this telephony account
  Alter this object properties
  **/
  public put(path: '/telephony/sounds/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/aliases/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/telephony/lines/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  public put(path: PathsTelephonyPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  replace operations
  Replace the phone by its spare. The broken phone became a spare if it was bought. An RMA is created if the broken phone is under securitydeposit.
  **/
  public post(path: '/telephony/spare/{spare}/replace', pathParams: {spare: string}): Promise<void>;
  /**
  Offer change
  Add a new offer change
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  cancelTermination operations
  Cancel the service termination
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/cancelTermination', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  fetchEntrepriseInformations operations
  Get company entreprise informations by providing entreprise number
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEntrepriseNumberInformationsTask>;
  /**
  changeOfBillingAccount operations
  Move a service of billing account. Source and destination nics should be the same.
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/changeOfBillingAccount', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/{billingAccount}/changeContact', pathParams: {billingAccount: string}): Promise<Number[]>;
  /**
  List the telephony.PhonebookContact objects
  Create a phonebook contact. Return identifier of the phonebook contact.
  **/
  public post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount: string, bookKey: string}): Promise<Number>;
  /**
  import operations
  Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
  **/
  public post(path: '/telephony/{billingAccount}/phonebook/{bookKey}/import', pathParams: {billingAccount: string, bookKey: string}): Promise<TelephonyTask>;
  /**
  List the telephony.PhonebookMaster objects
  Add a phonebook on group. Return the bookKey.
  **/
  public post(path: '/telephony/{billingAccount}/phonebook', pathParams: {billingAccount: string}): Promise<string>;
  /**
  changeDestination operations
  Change the destination of the DDI
  **/
  public post(path: '/telephony/{billingAccount}/ddi/{serviceName}/changeDestination', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  cancelConvertToLine operations
  Cancel a scheduled conversion to line
  **/
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/cancelConvertToLine', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  convertToLine operations
  Schedule a conversion to line
  **/
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/convertToLine', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOfferTask>;
  /**
  changeFeatureType operations
  Change the feature type of the phone number
  **/
  public post(path: '/telephony/{billingAccount}/number/{serviceName}/changeFeatureType', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  toneUpload operations
  Upload new tone file
  **/
  public post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/tones/toneUpload', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  transferSecurityDeposit operations
  Transfer security deposit between two billing accounts
  **/
  public post(path: '/telephony/{billingAccount}/transferSecurityDeposit', pathParams: {billingAccount: string}): Promise<void>;
  /**
  changeDestination operations
  Change the destination of the redirect
  **/
  public post(path: '/telephony/{billingAccount}/redirect/{serviceName}/changeDestination', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  List the telephony.TrunkExternalDisplayedNumber objects
  External displayed number creation for a given trunk
  **/
  public post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTrunkExternalDisplayedNumber>;
  /**
  validate operations
  Generate a phone call for validation. Returned validation code should be typed when asked.
  **/
  public post(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}/validate', pathParams: {billingAccount: string, serviceName: string, number: string}): Promise<TelephonyTrunkExternalDisplayedNumberValidation>;
  /**
  List the telephony.OvhPabxMenuEntry objects
  Create a new menu entry
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry', pathParams: {billingAccount: string, serviceName: string, menuId: Number}): Promise<TelephonyOvhPabxMenuEntry>;
  /**
  List the telephony.OvhPabxMenu objects
  Create a new menu
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxMenu>;
  /**
  List the telephony.OvhPabxTts objects
  Create a new text to speech
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  soundUpload operations
  Upload new sound file
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/soundUpload', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Create a new queue
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<string>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  The web access for your cloudpabx
  Create a new web access for this ressource
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyBannerAccess>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Create a new custom status
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionScreenList objects
  Create a new screenlist condition for an extension
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<TelephonyOvhPabxDialplanExtensionConditionScreenList>;
  /**
  List the telephony.OvhPabxDialplanExtensionConditionTime objects
  Create a new time condition for an extension
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<TelephonyOvhPabxDialplanExtensionConditionTime>;
  /**
  List the telephony.OvhPabxDialplanExtensionRule objects
  Create a new rule for an extension
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<TelephonyOvhPabxDialplanExtensionRule>;
  /**
  List the telephony.OvhPabxDialplanExtension objects
  Create a new extension for a dialplan
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number}): Promise<TelephonyOvhPabxDialplanExtension>;
  /**
  List the telephony.OvhPabxDialplan objects
  Create a new dialplan
  **/
  public post(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxDialplan>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/eventToken', pathParams: {billingAccount: string}): Promise<string>;
  /**
  List the telephony.AbbreviatedNumberGroup objects
  Create a new abbreviated number for the billing account
  **/
  public post(path: '/telephony/{billingAccount}/abbreviatedNumber', pathParams: {billingAccount: string}): Promise<TelephonyAbbreviatedNumberGroup>;
  /**
  List the telephony.ScreenList objects
  Create a new screen list rule
  **/
  public post(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  List the telephony.ConsumptionThreshold objects
  Add an outplan notification on the billing account
  **/
  public post(path: '/telephony/{billingAccount}/outplanNotification', pathParams: {billingAccount: string}): Promise<TelephonyConsumptionThreshold>;
  /**
  billingAccountSite operations
  Used to overwrite current billing account feature by the billing account site
  **/
  public post(path: '/telephony/{billingAccount}/billingAccountSite', pathParams: {billingAccount: string}): Promise<void>;
  /**
  importIcsCalendar operations
  Add scheduler events in ICS format
  **/
  public post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/importIcsCalendar', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  List the telephony.SchedulerEvent objects
  Add a scheduler event
  **/
  public post(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  List the telephony.HistoryRepaymentConsumption objects
  Ask for a new repayment
  **/
  public post(path: '/telephony/{billingAccount}/historyRepaymentConsumption', pathParams: {billingAccount: string}): Promise<TelephonyHistoryRepaymentConsumption>;
  /**
  unlock operations
  Lock the conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/unlock', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  List the telephony.ConferenceWebAccess objects
  Add a public web access to your conference
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyConferenceWebAccess>;
  /**
  lock operations
  Lock the conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/lock', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  announceUpload operations
  Change the sound played at the beginning of the conference
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/announceUpload', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  mute operations
  Mute a participant in your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/mute', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  deaf operations
  Make a participant deaf in your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/deaf', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  energy operations
  Change a participant level of audio transmission
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/energy', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  unmute operations
  Unmute a participant in your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/unmute', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  undeaf operations
  Make a participant undeaf your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/undeaf', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  kick operations
  Eject a participant from your conference room
  **/
  public post(path: '/telephony/{billingAccount}/conference/{serviceName}/participants/{id}/kick', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  changePassword operations
  Change the voicemail password. It must be 4 digit
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changePassword', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  changeRouting operations
  Disable/Enable voicemail. Available only if the line has fax capabilities
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  move operations
  Move the message to another directory
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/move', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  move operations
  Move the message to another directory
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  List the telephony.VoicemailGreetings objects
  Upload a new sound for a specific greeting. Return a task id.
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings', pathParams: {billingAccount: string, serviceName: string}): Promise<Number>;
  /**
  migrateOnNewVersion operations
  Change the voicemail on a new version to manager greetings, directories and extra settings.
  **/
  public post(path: '/telephony/{billingAccount}/voicemail/{serviceName}/migrateOnNewVersion', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  logs operations
  Generate a temporary url to retrieve device logs
  **/
  public post(path: '/telephony/{billingAccount}/vxml/{serviceName}/settings/logs', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTemporaryLogsLink>;
  /**
  canTransferSecurityDeposit operations
  Check if security deposit transfer is possible between two billing accounts
  **/
  public post(path: '/telephony/{billingAccount}/canTransferSecurityDeposit', pathParams: {billingAccount: string}): Promise<boolean>;
  /**
  start operations
  Start a fax campaign
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/start', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  stop operations
  Stop a fax campaign
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}/stop', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  List the telephony.FaxCampaign objects
  Create a new fax campaign
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyFaxCampaign>;
  /**
  changePassword operations
  Generates a new password for your fax account
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/changePassword', pathParams: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
  sendFax operations
  Send a fax
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/settings/sendFax', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  reset operations
  Reset a specifical fax screenList
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists/reset', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Fax ScreenLists
  Create a new fax ScreenLists
  **/
  public post(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyFaxScreen>;
  /**
  execute operations
  Ask to execute the portability
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/execute', pathParams: {billingAccount: string, id: Number}): Promise<void>;
  /**
  relaunch operations
  Fix error and relaunch portability
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/relaunch', pathParams: {billingAccount: string, id: Number}): Promise<void>;
  /**
  changeDate operations
  Ask to change the portability date
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/changeDate', pathParams: {billingAccount: string, id: Number}): Promise<void>;
  /**
  cancel operations
  Ask to cancel the portability
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/cancel', pathParams: {billingAccount: string, id: Number}): Promise<void>;
  /**
  List the telephony.PortabilityDocument objects
  Create a portability document
  **/
  public post(path: '/telephony/{billingAccount}/portability/{id}/document', pathParams: {billingAccount: string, id: Number}): Promise<TelephonyPortabilityDocument>;
  /**
  List the telephony.EasyMiniPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyMiniPabxHuntingAgent>;
  /**
  toneUpload operations
  Upload new tone file
  **/
  public post(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/tones/toneUpload', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  cancelTermination operations
  Cancel the billing account termination
  **/
  public post(path: '/telephony/{billingAccount}/cancelTermination', pathParams: {billingAccount: string}): Promise<void>;
  /**
  removeSimultaneousLines operations
  Remove extra simultaneous lines
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/removeSimultaneousLines', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  associateDevice operations
  Associate a device to the current line with the device mac address
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/associateDevice', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  unblock operations
  Unblock the line. It will remove any incoming and outboing block made earlier
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/unblock', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  click2Call operations
  Make a phone call from the current line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2Call', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  antihack operations
  Clean the antihack or add it on active filter screen list
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/antihack', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  cancelConvertToNumber operations
  Cancel a scheduled conversion to number
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/cancelConvertToNumber', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  convertToNumber operations
  Schedule a conversion to number
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/convertToNumber', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOfferTask>;
  /**
  List the telephony.Rma objects
  Create a specific rma
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyRmaReturn>;
  /**
  changePhoneConfiguration operations
  Edit configuration of the phone remotely by provisioning
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/changePhoneConfiguration', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  reboot operations
  Create a task to reboot the phone
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/reboot', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  resetConfig operations
  Reinitialize the phone configuration
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/resetConfig', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyResetPhoneInfo>;
  /**
  refreshScreen operations
  Create a task to refresh the screen of the MGCP phone
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/refreshScreen', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  List the telephony.Phonebook objects
  Add a phonebook. Return the bookKey.
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook', pathParams: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
  List the telephony.PhonebookContact objects
  Create a phonebook contact. Return identifier of the phonebook contact.
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact', pathParams: {billingAccount: string, serviceName: string, bookKey: string}): Promise<Number>;
  /**
  import operations
  Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/import', pathParams: {billingAccount: string, serviceName: string, bookKey: string}): Promise<TelephonyTask>;
  /**
  click2Call operations
  Make a phone call from the current line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/click2Call', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  changePassword operations
  Change the password of the click2call user
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}/changePassword', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  List the telephony.Click2CallUser objects
  Create a new user for click 2 call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser', pathParams: {billingAccount: string, serviceName: string}): Promise<Number>;
  /**
  List the telephony.CallsGenerated objects
  Make an automatic phone call. Return generated call identifier
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/automaticCall', pathParams: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
  toneUpload operations
  Upload new tone file
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/tones/toneUpload', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  activateNewPhone operations
  Allow to activate new phone, in case of phone switch
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/activateNewPhone', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  List the telephony.AbbreviatedNumber objects
  Create a new abbreviated number for the line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyAbbreviatedNumber>;
  /**
  block operations
  Block the line. By default it will block incoming and outgoing calls (except for emergency numbers)
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/block', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  List the telephony.trafficExtract objects
  Launch a traffic extract on your line
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTrafficExtract>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/transfer', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hold', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/eavesdrop', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/hangup', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/intercept', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/calls/{id}/whisper', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<TelephonyTask>;
  /**
  changePassword operations
  Change the SIP account password. It must be more than 7 and less than 21 alpha and numerical characters.
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/changePassword', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  dissociateDevice operations
  Dissociate a device from the current line with the device mac address
  **/
  public post(path: '/telephony/{billingAccount}/line/{serviceName}/dissociateDevice', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  scheduleRateCode operations
  Schedule a new rate code for this sva
  **/
  public post(path: '/telephony/{billingAccount}/rsva/{serviceName}/scheduleRateCode', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyDetailedRateCodeInformation>;
  /**
  cancelScheduledRateCode operations
  Cancel a scheduled rate code update
  **/
  public post(path: '/telephony/{billingAccount}/rsva/{serviceName}/cancelScheduledRateCode', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  List the telephony.EasyHuntingTimeConditions objects
  Create a new time condition
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyHuntingTimeConditions>;
  /**
  List the telephony.EasyHuntingScreenListsConditions objects
  Create a new screenlist condition for an extension
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyEasyHuntingScreenListsConditions>;
  /**
  soundUpload operations
  Upload new sound file
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/soundUpload', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/transfer', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hold', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/eavesdrop', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/intercept', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/hangup', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/liveCalls/{id}/whisper', pathParams: {billingAccount: string, serviceName: string, queueId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  List the telephony.OvhPabxHuntingQueue objects
  Create a new queue
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHuntingQueue>;
  /**
  List the telephony.OvhPabxCustomStatus objects
  Create a new custom status
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxCustomStatus>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<string>;
  /**
  whisper operations
  Whisper on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/whisper', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  intercept operations
  Intercept a non answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/intercept', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hangup operations
  Hangup a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hangup', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  hold operations
  Toogle hold on call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/hold', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  eavesdrop operations
  Eavesdrop on a call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/eavesdrop', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  transfer operations
  Transfer an answered call
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/calls/{id}/transfer', pathParams: {billingAccount: string, serviceName: string, agentId: Number, id: Number}): Promise<TelephonyTask>;
  /**
  List the telephony.OvhPabxHuntingAgentQueue objects
  Create a new skill for an agent (it adds the agent in a queue)
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyOvhPabxHuntingAgentQueue>;
  /**
  The web access for your cloudpabx
  Create a new web access for this ressource
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<TelephonyBannerAccess>;
  /**
  Token associated to the service for live event
  Create a new token
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<string>;
  /**
  List the telephony.OvhPabxHuntingAgent objects
  Create a new agent
  **/
  public post(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyOvhPabxHuntingAgent>;
  /**
  List the telephony.TimeCondition objects
  Create a new time condition rule
  **/
  public post(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition', pathParams: {billingAccount: string, serviceName: string}): Promise<TelephonyTimeCondition>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/trunks/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  List the telephony.Sound objects
  Create a new sound
  **/
  public post(path: '/telephony/sounds'): Promise<TelephonySound>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/aliases/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/telephony/lines/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Get all available SIP domains by country
  Get all available SIP domains by country
  **/
  public post(path: '/telephony/setDefaultSipDomain'): Promise<void>;
  public post(path: PathsTelephonyPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Spare properties
  Delete the spare as if it was not belonging to OVH anymore
  **/
  public delete(path: '/telephony/spare/{spare}', pathParams: {spare: string}): Promise<void>;
  /**
  Offer change
  Delete the replacement offer scheduling
  **/
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}/offerChange', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Telephony service
  Ask for a service termination.
  **/
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}', pathParams: {billingAccount: string, serviceName: string}, bodyParams: {details?: string, reason?: TelephonyTerminationReasonEnum}): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/service/{serviceName}/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Phone book contact
  Delete a phonebook contact
  **/
  public delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount: string, bookKey: string, id: Number}): Promise<void>;
  /**
  Phone book on group
  Delete a phonebook
  **/
  public delete(path: '/telephony/{billingAccount}/phonebook/{bookKey}', pathParams: {billingAccount: string, bookKey: string}): Promise<void>;
  /**
  Easy/Mini PABX agent
  Delete the agent
  **/
  public delete(path: '/telephony/{billingAccount}/easyPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<void>;
  /**
  External displayed number linked to a trunk
  Delete an external displayed number for a given trunk
  **/
  public delete(path: '/telephony/{billingAccount}/trunk/{serviceName}/externalDisplayedNumber/{number}', pathParams: {billingAccount: string, serviceName: string, number: string}): Promise<void>;
  /**
  IVR Menu
  Delete the given menu
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}', pathParams: {billingAccount: string, serviceName: string, menuId: Number}): Promise<void>;
  /**
  IVR menu entry
  Delete the given menu entry
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/menu/{menuId}/entry/{entryId}', pathParams: {billingAccount: string, serviceName: string, menuId: Number, entryId: Number}): Promise<void>;
  /**
  The PABX sounds
  Delete the given sound
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/sound/{soundId}', pathParams: {billingAccount: string, serviceName: string, soundId: Number}): Promise<void>;
  /**
  The PABX Text To Speech sounds
  Delete the given text to speech
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/tts/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  The PABX records
  Delete the given record
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/records/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Calls queue
  Delete the given queue
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<void>;
  /**
  Calls agent
  Delete the given agent
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<void>;
  /**
  The web access for your cloudpabx
  Delete the given web access
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Custom statuses of your callcenter agents
  Delete the given custom status
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Screenlist condition
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionScreenList/{conditionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, conditionId: Number}): Promise<void>;
  /**
  Dialplan extension
  Delete the given extension
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number}): Promise<void>;
  /**
  Time condition
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/conditionTime/{conditionId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, conditionId: Number}): Promise<void>;
  /**
  Dialplan rule
  Delete the given rule
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}/extension/{extensionId}/rule/{ruleId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number, extensionId: Number, ruleId: Number}): Promise<void>;
  /**
  Dialplan
  Delete the given dialplan
  **/
  public delete(path: '/telephony/{billingAccount}/ovhPabx/{serviceName}/dialplan/{dialplanId}', pathParams: {billingAccount: string, serviceName: string, dialplanId: Number}): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/eventToken', pathParams: {billingAccount: string}): Promise<void>;
  /**
  Abbreviated number
  Delete the given abbreviated number
  **/
  public delete(path: '/telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount: string, abbreviatedNumber: Number}): Promise<void>;
  /**
  Screen list
  Delete the given screen list
  **/
  public delete(path: '/telephony/{billingAccount}/screen/{serviceName}/screenLists/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  The outplan notifications configured for your billing account
  Delete an outplan notification
  **/
  public delete(path: '/telephony/{billingAccount}/outplanNotification/{id}', pathParams: {billingAccount: string, id: Number}): Promise<void>;
  /**
  Scheduled event
  Delete the given scheduler event
  **/
  public delete(path: '/telephony/{billingAccount}/scheduler/{serviceName}/events/{uid}', pathParams: {billingAccount: string, serviceName: string, uid: string}): Promise<void>;
  /**
  List public web access of your conference
  Delete a public web access to your conference
  **/
  public delete(path: '/telephony/{billingAccount}/conference/{serviceName}/webAccess/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Voicemail message
  Delete the given voicemail message
  **/
  public delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Voicemail greeting
  Delete the customized greeting
  **/
  public delete(path: '/telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Fax campaigns
  Delete a fax campaign
  **/
  public delete(path: '/telephony/{billingAccount}/fax/{serviceName}/campaigns/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Fax ScreenLists
  Delete all fax screenLists
  **/
  public delete(path: '/telephony/{billingAccount}/fax/{serviceName}/screenLists', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Document linked to a portability
  Delete the document
  **/
  public delete(path: '/telephony/{billingAccount}/portability/{id}/document/{documentId}', pathParams: {billingAccount: string, id: Number, documentId: Number}): Promise<void>;
  /**
  Easy/Mini PABX agent
  Delete the agent
  **/
  public delete(path: '/telephony/{billingAccount}/miniPabx/{serviceName}/hunting/agent/{agentNumber}', pathParams: {billingAccount: string, serviceName: string, agentNumber: string}): Promise<void>;
  /**
  Current Return Merchandise Authorisation
  Cancel the rma
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}', pathParams: {billingAccount: string, serviceName: string, id: string}): Promise<void>;
  /**
  Phone book contact
  Delete a phonebook contact
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}', pathParams: {billingAccount: string, serviceName: string, bookKey: string, id: Number}): Promise<void>;
  /**
  Phone book
  Delete a phonebook
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}', pathParams: {billingAccount: string, serviceName: string, bookKey: string}): Promise<void>;
  /**
  User of the click 2 call
  Delete a click 2 call user
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/click2CallUser/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  The PABX records
  Delete the given record
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/records/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Abbreviated number
  Delete the given abbreviated number
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/abbreviatedNumber/{abbreviatedNumber}', pathParams: {billingAccount: string, serviceName: string, abbreviatedNumber: Number}): Promise<void>;
  /**
  Traffic extracts (SIP) of your line
  Delete a traffic extract
  **/
  public delete(path: '/telephony/{billingAccount}/line/{serviceName}/trafficExtracts/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Billing Account
  Ask for a billing account termination.
  **/
  public delete(path: '/telephony/{billingAccount}', pathParams: {billingAccount: string}, bodyParams: {reason?: TelephonyTerminationReasonEnum, details?: string}): Promise<void>;
  /**
  Easy hunting time conditions
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/timeConditions/conditions/{conditionId}', pathParams: {billingAccount: string, serviceName: string, conditionId: Number}): Promise<void>;
  /**
  Screenlist condition
  Delete the given condition
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/screenListConditions/conditions/{conditionId}', pathParams: {billingAccount: string, serviceName: string, conditionId: Number}): Promise<void>;
  /**
  The PABX records
  Delete the given record
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/records/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Calls queue
  Delete the given queue
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number}): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, queueId: Number, agentId: Number}): Promise<void>;
  /**
  Custom statuses of your callcenter agents
  Delete the given custom status
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/customStatus/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/eventToken', pathParams: {billingAccount: string, serviceName: string}): Promise<void>;
  /**
  Agent assigned to a queue
  Delete the given skill
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/queue/{queueId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number, queueId: Number}): Promise<void>;
  /**
  The web access for your cloudpabx
  Delete the given web access
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/bannerAccess', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  Token associated to the service for live event
  Delete the given token
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}/eventToken', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  Calls agent
  Delete the given agent
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/hunting/agent/{agentId}', pathParams: {billingAccount: string, serviceName: string, agentId: Number}): Promise<void>;
  /**
  The PABX sounds
  Delete the given sound
  **/
  public delete(path: '/telephony/{billingAccount}/easyHunting/{serviceName}/sound/{soundId}', pathParams: {billingAccount: string, serviceName: string, soundId: Number}): Promise<void>;
  /**
  Time conditions
  Delete the given screen list
  **/
  public delete(path: '/telephony/{billingAccount}/timeCondition/{serviceName}/condition/{id}', pathParams: {billingAccount: string, serviceName: string, id: Number}): Promise<void>;
  /**
  Sounds attached to this telephony account
  Delete the sound
  **/
  public delete(path: '/telephony/sounds/{id}', pathParams: {id: Number}): Promise<void>;
  public delete(path: PathsTelephonyDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
