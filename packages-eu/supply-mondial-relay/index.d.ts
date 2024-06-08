import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /supply/mondialRelay Models
 * Source: https://eu.api.ovh.com/1.0/supply/mondialRelay.json
 */
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace supply {
    /**
     * Mondial Relay Point Details
     * interface fullName: supply.MondialRelay.MondialRelay
     */
    export interface MondialRelay {
        address: string;
        city: string;
        closing?: supply.MondialRelayClosingPeriod[];
        country: coreTypes.CountryEnum;
        distance?: number;
        id: string;
        lat: number;
        lng: number;
        mapUrl?: string;
        name: string;
        opening: supply.MondialRelayOpening;
        pictureUrl?: string;
        zipcode: string;
    }
    /**
     * Closing period for mondial relay point
     * interface fullName: supply.MondialRelayClosingPeriod.MondialRelayClosingPeriod
     */
    export interface MondialRelayClosingPeriod {
        end: string;
        start: string;
    }
    /**
     * Opening range for mondial relay point
     * interface fullName: supply.MondialRelayDayPeriod.MondialRelayDayPeriod
     */
    export interface MondialRelayDayPeriod {
        end: string;
        start: string;
    }
    /**
     * Day with schedule for mondial relay point opening
     * interface fullName: supply.MondialRelayOpening.MondialRelayOpening
     */
    export interface MondialRelayOpening {
        friday?: supply.MondialRelayDayPeriod[];
        monday?: supply.MondialRelayDayPeriod[];
        saturday?: supply.MondialRelayDayPeriod[];
        sunday?: supply.MondialRelayDayPeriod[];
        thursday?: supply.MondialRelayDayPeriod[];
        tuesday?: supply.MondialRelayDayPeriod[];
        wednesday?: supply.MondialRelayDayPeriod[];
    }
    /**
     * Status and Mondial Relay Point Details
     * interface fullName: supply.MondialRelayResult.MondialRelayResult
     */
    export interface MondialRelayResult {
        referenceAddress: string;
        relayPoints: supply.MondialRelay[];
    }
    /**
     * Status and Mondial Relay Point Details
     * interface fullName: supply.MondialRelayReturn.MondialRelayReturn
     */
    export interface MondialRelayReturn {
        error?: string;
        result?: supply.MondialRelayResult;
        status: supply.Status;
    }
    /**
     * Request status
     * type fullname: supply.Status
     */
    export type Status = "error" | "ok" | "pending"
}
/**
 * Api model for /supply/mondialRelay
 */
export interface Supply {
    mondialRelay: {
        /**
         * Find the 10 nearest MondialRelay points from address or city.
         * POST /supply/mondialRelay
         */
        $post(params: { address?: string, city?: string, country: coreTypes.CountryEnum, zipcode?: string }): Promise<supply.MondialRelayReturn>;
    }
}

export declare function proxySupplyMondialRelay(ovhEngine: OvhRequestable): Supply;
export default proxySupplyMondialRelay;
