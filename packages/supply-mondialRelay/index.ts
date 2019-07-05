import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace coreTypes {
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace supply {
    //supply.MondialRelay
    // fullName: supply.MondialRelay.MondialRelay
    export interface MondialRelay {
        address: string;
        city: string;
        closing?: OVH.supply.MondialRelayClosingPeriod[];
        country: OVH.coreTypes.CountryEnum;
        distance?: number;
        id: string;
        lat: number;
        lng: number;
        mapUrl?: string;
        name: string;
        opening: OVH.supply.MondialRelayOpening;
        pictureUrl?: string;
        zipcode: string;
    }
    //supply.MondialRelayClosingPeriod
    // fullName: supply.MondialRelayClosingPeriod.MondialRelayClosingPeriod
    export interface MondialRelayClosingPeriod {
        end: string;
        start: string;
    }
    //supply.MondialRelayDayPeriod
    // fullName: supply.MondialRelayDayPeriod.MondialRelayDayPeriod
    export interface MondialRelayDayPeriod {
        end: string;
        start: string;
    }
    //supply.MondialRelayOpening
    // fullName: supply.MondialRelayOpening.MondialRelayOpening
    export interface MondialRelayOpening {
        friday?: OVH.supply.MondialRelayDayPeriod[];
        monday?: OVH.supply.MondialRelayDayPeriod[];
        saturday?: OVH.supply.MondialRelayDayPeriod[];
        sunday?: OVH.supply.MondialRelayDayPeriod[];
        thursday?: OVH.supply.MondialRelayDayPeriod[];
        tuesday?: OVH.supply.MondialRelayDayPeriod[];
        wednesday?: OVH.supply.MondialRelayDayPeriod[];
    }
    //supply.MondialRelayResult
    // fullName: supply.MondialRelayResult.MondialRelayResult
    export interface MondialRelayResult {
        referenceAddress: string;
        relayPoints: OVH.supply.MondialRelay[];
    }
    //supply.MondialRelayReturn
    // fullName: supply.MondialRelayReturn.MondialRelayReturn
    export interface MondialRelayReturn {
        error?: string;
        result?: OVH.supply.MondialRelayResult;
        status: OVH.supply.Status;
    }
    //supply.Status
    export type Status = "error" | "ok" | "pending"
}
// Apis harmony
// path /supply
export interface Supply{
    mondialRelay: {
        // POST /supply/mondialRelay
        $post(body?: {address?: string, city?: string, country: coreTypes.CountryEnum, zipcode?: string}): Promise<supply.MondialRelayReturn>;
    }
}
// Api
type PathsSupplyMondialRelayPOST = '/supply/mondialRelay';

export class ApiSupplyMondialRelay extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Find the 10 nearest MondialRelay points from address or city.
   * Find the 10 nearest MondialRelay points from address or city.
   */
  public post(path: '/supply/mondialRelay', params: {address?: string, city?: string, country: OVH.coreTypes.CountryEnum, zipcode?: string}): Promise<supply.MondialRelayReturn>;
  public post(path: PathsSupplyMondialRelayPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}