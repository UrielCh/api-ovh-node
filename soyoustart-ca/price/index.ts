import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /price Models
 */
export namespace order {
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace price {
    export namespace Dedicated {
        export namespace Server {
            // type fullname: price.Dedicated.Server.AntiDDoSProEnum
            export type AntiDDoSProEnum = "sk"
            // type fullname: price.Dedicated.Server.BackupStorageEnum
            export type BackupStorageEnum = "1000" | "10000" | "500" | "5000"
            // type fullname: price.Dedicated.Server.FirewallEnum
            export type FirewallEnum = "asa5505" | "asa5510" | "asa5520"
            // type fullname: price.Dedicated.Server.IpEnum
            export type IpEnum = "kimsufi" | "parking"
        }
    }
}

/**
 * END API /price Models
 */
export function proxyPrice(ovhEngine: OvhRequestable): Price {
    return buildOvhProxy(ovhEngine, '/price');
}
export default proxyPrice;
/**
 * Api Proxy model
 */// Apis harmony
// path /price
export interface Price{
    dedicated: {
        server: {
            antiDDoSPro: {
                $(commercialRange: price.Dedicated.Server.AntiDDoSProEnum): {
                    // GET /price/dedicated/server/antiDDoSPro/{commercialRange}
                    $get(): Promise<order.Price>;
                };
            }
            backupStorage: {
                $(capacity: price.Dedicated.Server.BackupStorageEnum): {
                    // GET /price/dedicated/server/backupStorage/{capacity}
                    $get(): Promise<order.Price>;
                };
            }
            firewall: {
                $(firewallModel: price.Dedicated.Server.FirewallEnum): {
                    // GET /price/dedicated/server/firewall/{firewallModel}
                    $get(): Promise<order.Price>;
                };
            }
            ip: {
                $(routedTo: price.Dedicated.Server.IpEnum): {
                    // GET /price/dedicated/server/ip/{routedTo}
                    $get(): Promise<order.Price>;
                };
            }
        }
    }
// Api
  /**
   * Get price of anti-DDos Pro option
   * Get price of anti-DDos Pro option
   */
  get(path: '/price/dedicated/server/antiDDoSPro/{commercialRange}'): (params: {commercialRange: price.Dedicated.Server.AntiDDoSProEnum}) => Promise<order.Price>;
  /**
   * Get price of backup storage offer
   * Get price of backup storage offer
   */
  get(path: '/price/dedicated/server/backupStorage/{capacity}'): (params: {capacity: price.Dedicated.Server.BackupStorageEnum}) => Promise<order.Price>;
  /**
   * Get price of available firewall models
   * Get price of available firewall models
   */
  get(path: '/price/dedicated/server/firewall/{firewallModel}'): (params: {firewallModel: price.Dedicated.Server.FirewallEnum}) => Promise<order.Price>;
  /**
   * Get price of IPs
   * Get price of IPs
   */
  get(path: '/price/dedicated/server/ip/{routedTo}'): (params: {routedTo: price.Dedicated.Server.IpEnum}) => Promise<order.Price>;
}
