import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /price Models
 * Source: https://eu.api.soyoustart.com/1.0/price.json
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
export interface Price {
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
}
