import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Mondial Relay Point Details
 */
export interface SupplyMondialRelay {
  /**
   * Relay point address
   *
   */
  address: string;
  /**
   * City
   *
   */
  city: string;
  /**
   * Relay point closing dates
   *
   */
  closing?: SupplyMondialRelayClosingPeriod[];
  /**
   * Relay country
   *
   */
  country: CoreTypesCountryEnum;
  /**
   * Distance between address and relay point
   *
   */
  distance?: number;
  /**
   * Mondial Relay point ID
   *
   */
  id: string;
  /**
   * Relay point latitude
   *
   */
  lat: number;
  /**
   * Relay point longitude
   *
   */
  lng: number;
  /**
   * URL of short map
   *
   */
  mapUrl?: string;
  /**
   * Relay point name
   *
   */
  name: string;
  /**
   * Relay point opening hours
   *
   */
  opening: SupplyMondialRelayOpening;
  /**
   * Relay point picture\s URL
   *
   */
  pictureUrl?: string;
  /**
   * Zipcode
   *
   */
  zipcode: string;
}
/**
 * Closing period for mondial relay point
 */
export interface SupplyMondialRelayClosingPeriod {
  /**
   * Ending of closing period
   *
   */
  end: string;
  /**
   * Beginning of closing period
   *
   */
  start: string;
}
/**
 * Opening range for mondial relay point
 */
export interface SupplyMondialRelayDayPeriod {
  /**
   * Ending time (00:00 format)
   *
   */
  end: string;
  /**
   * Starting time (00:00 format)
   *
   */
  start: string;
}
/**
 * Day with schedule for mondial relay point opening
 */
export interface SupplyMondialRelayOpening {
  /**
   * Opening range
   *
   */
  friday?: SupplyMondialRelayDayPeriod[];
  /**
   * Opening range
   *
   */
  monday?: SupplyMondialRelayDayPeriod[];
  /**
   * Opening range
   *
   */
  saturday?: SupplyMondialRelayDayPeriod[];
  /**
   * Opening range
   *
   */
  sunday?: SupplyMondialRelayDayPeriod[];
  /**
   * Opening range
   *
   */
  thursday?: SupplyMondialRelayDayPeriod[];
  /**
   * Opening range
   *
   */
  tuesday?: SupplyMondialRelayDayPeriod[];
  /**
   * Opening range
   *
   */
  wednesday?: SupplyMondialRelayDayPeriod[];
}
/**
 * Status and Mondial Relay Point Details
 */
export interface SupplyMondialRelayResult {
  /**
   * Reference address for finding RelayPoints
   *
   */
  referenceAddress: string;
  /**
   * Array of relay points
   *
   */
  relayPoints: SupplyMondialRelay[];
}
/**
 * Status and Mondial Relay Point Details
 */
export interface SupplyMondialRelayReturn {
  /**
   * Error
   *
   */
  error?: string;
  /**
   * Relay points list and reference address
   *
   */
  result?: SupplyMondialRelayResult;
  /**
   * Request status
   *
   */
  status: SupplyStatus;
}
/**
 * Request status
 */
export type SupplyStatus = 'error' | 'ok' | 'pending';
type PathsSupplyMondialRelayPOST = '/supply/mondialRelay';

export class ApiSupplyMondialRelay extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Find the 10 nearest MondialRelay points from address or city.
   * Find the 10 nearest MondialRelay points from address or city.
   */
  public post(path: '/supply/mondialRelay', params: {address?: string, city?: string, country: CoreTypesCountryEnum, zipcode?: string}): Promise<SupplyMondialRelayReturn>;
  public post(path: PathsSupplyMondialRelayPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params
  );}
}
export default ApiSupplyMondialRelay;
