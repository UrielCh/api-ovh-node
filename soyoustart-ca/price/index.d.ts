import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /price Models
 * Source: https://ca.api.soyoustart.com/1.0/price.json
 */
export namespace order {
    /**
     * type fullname: order.CurrencyCodeEnum
     */
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "INR" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
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
export namespace price {
    export namespace Dedicated {
        export namespace Server {
            /**
             * Enum of AntiDDoSPros
             * type fullname: price.Dedicated.Server.AntiDDoSProEnum
             */
            export type AntiDDoSProEnum = "sk"
            /**
             * Enum of BackupStorages
             * type fullname: price.Dedicated.Server.BackupStorageEnum
             */
            export type BackupStorageEnum = "1000" | "10000" | "500" | "5000"
            /**
             * Enum of Firewalls
             * type fullname: price.Dedicated.Server.FirewallEnum
             */
            export type FirewallEnum = "asa5505" | "asa5510" | "asa5520"
            /**
             * Enum of Ips
             * type fullname: price.Dedicated.Server.IpEnum
             */
            export type IpEnum = "kimsufi" | "parking"
        }
    }
}
/**
 * Api model for /price
 */
export interface Price {
    dedicated: {
        server: {
            antiDDoSPro: {
                $(commercialRange: price.Dedicated.Server.AntiDDoSProEnum): {
                    /**
                     * Get price of anti-DDos Pro option
                     * GET /price/dedicated/server/antiDDoSPro/{commercialRange}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            backupStorage: {
                $(capacity: price.Dedicated.Server.BackupStorageEnum): {
                    /**
                     * Get price of backup storage offer
                     * GET /price/dedicated/server/backupStorage/{capacity}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            firewall: {
                $(firewallModel: price.Dedicated.Server.FirewallEnum): {
                    /**
                     * Get price of available firewall models
                     * GET /price/dedicated/server/firewall/{firewallModel}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            ip: {
                $(routedTo: price.Dedicated.Server.IpEnum): {
                    /**
                     * Get price of IPs
                     * GET /price/dedicated/server/ip/{routedTo}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
        }
    }
}

export declare function proxyPrice(ovhEngine: OvhRequestable): Price;
export default proxyPrice;
