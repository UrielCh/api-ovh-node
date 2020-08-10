import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /price Models
 * Source: https://eu.api.soyoustart.com/1.0/price.json
 */
export namespace order {
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

/**
 * END API /price Models
 */
export function proxyPrice(ovhEngine: OvhRequestable): Price {
    return buildOvhProxy(ovhEngine, '/price');
}
export default proxyPrice;
/**
 * Api model for /price
 */
export interface Price {
    cluster: {
        hadoop: {
            cluster: {
                $(duration: price.Cluster.Hadoop.ClusterEnum): {
                    /**
                     * Get the price of a Hadoop cluster consumptions
                     * GET /price/cluster/hadoop/cluster/{duration}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            node: {
                hourly: {
                    $(nodeProfile: price.Cluster.Hadoop.Node.HourlyEnum): {
                        /**
                         * Get the hourly price of the available node profiles
                         * GET /price/cluster/hadoop/node/hourly/{nodeProfile}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                monthly: {
                    $(nodeProfile: price.Cluster.Hadoop.Node.MonthlyEnum): {
                        /**
                         * Get the monthly price of the available node profiles
                         * GET /price/cluster/hadoop/node/monthly/{nodeProfile}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
        }
    }
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
    }
}
