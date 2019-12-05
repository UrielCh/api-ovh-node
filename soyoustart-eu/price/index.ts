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
    export namespace Cluster {
        export namespace Hadoop {
            // type fullname: price.Cluster.Hadoop.ClusterEnum
            export type ClusterEnum = "hourly" | "monthly"
            export namespace Node {
                // type fullname: price.Cluster.Hadoop.Node.HourlyEnum
                export type HourlyEnum = "300-disk-1"
                // type fullname: price.Cluster.Hadoop.Node.MonthlyEnum
                export type MonthlyEnum = "300-disk-1"
            }
        }
    }
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
    cluster: {
        hadoop: {
            cluster: {
                $(duration: price.Cluster.Hadoop.ClusterEnum): {
                    // GET /price/cluster/hadoop/cluster/{duration}
                    $get(): Promise<order.Price>;
                };
            }
            node: {
                hourly: {
                    $(nodeProfile: price.Cluster.Hadoop.Node.HourlyEnum): {
                        // GET /price/cluster/hadoop/node/hourly/{nodeProfile}
                        $get(): Promise<order.Price>;
                    };
                }
                monthly: {
                    $(nodeProfile: price.Cluster.Hadoop.Node.MonthlyEnum): {
                        // GET /price/cluster/hadoop/node/monthly/{nodeProfile}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
    }
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
   * Get the price of a Hadoop cluster consumptions
   * Get the price of a Hadoop cluster consumptions
   */
  get(path: '/price/cluster/hadoop/cluster/{duration}'): (params: {duration: price.Cluster.Hadoop.ClusterEnum}) => Promise<order.Price>;
  /**
   * Get the hourly price of the available node profiles
   * Get the hourly price of the available node profiles
   */
  get(path: '/price/cluster/hadoop/node/hourly/{nodeProfile}'): (params: {nodeProfile: price.Cluster.Hadoop.Node.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get the monthly price of the available node profiles
   * Get the monthly price of the available node profiles
   */
  get(path: '/price/cluster/hadoop/node/monthly/{nodeProfile}'): (params: {nodeProfile: price.Cluster.Hadoop.Node.MonthlyEnum}) => Promise<order.Price>;
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
