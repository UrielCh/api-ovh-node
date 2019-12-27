import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /price Models
 * Source: https://ca.api.ovh.com/1.0/price.json
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
        export namespace Nasha {
            // type fullname: price.Dedicated.Nasha.ModelEnum
            export type ModelEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
        }
        export namespace Server {
            // type fullname: price.Dedicated.Server.AntiDDoSProEnum
            export type AntiDDoSProEnum = "sk"
            // type fullname: price.Dedicated.Server.BackupStorageEnum
            export type BackupStorageEnum = "1000" | "10000" | "500" | "5000"
            // type fullname: price.Dedicated.Server.FirewallEnum
            export type FirewallEnum = "asa5505" | "asa5510" | "asa5520"
            // type fullname: price.Dedicated.Server.IpEnum
            export type IpEnum = "kimsufi" | "parking"
            // type fullname: price.Dedicated.Server.ProfessionalUseEnum
            export type ProfessionalUseEnum = "bhg" | "eg" | "hg" | "mg" | "sp"
        }
    }
    export namespace DedicatedCloud {
        export namespace _2013v1 {
            export namespace Bhs1a {
                export namespace Filer {
                    // type fullname: price.DedicatedCloud._2013v1.Bhs1a.Filer.HourlyEnum
                    export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200g-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-6600-GB"
                    // type fullname: price.DedicatedCloud._2013v1.Bhs1a.Filer.MonthlyEnum
                    export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-6600-GB"
                }
                export namespace Host {
                    // type fullname: price.DedicatedCloud._2013v1.Bhs1a.Host.HourlyEnum
                    export type HourlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                    // type fullname: price.DedicatedCloud._2013v1.Bhs1a.Host.MonthlyEnum
                    export type MonthlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                }
            }
            export namespace Rbx2a {
                export namespace Filer {
                    // type fullname: price.DedicatedCloud._2013v1.Rbx2a.Filer.HourlyEnum
                    export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200g-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-6600-GB"
                    // type fullname: price.DedicatedCloud._2013v1.Rbx2a.Filer.MonthlyEnum
                    export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-6600-GB"
                }
                export namespace Host {
                    // type fullname: price.DedicatedCloud._2013v1.Rbx2a.Host.HourlyEnum
                    export type HourlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                    // type fullname: price.DedicatedCloud._2013v1.Rbx2a.Host.MonthlyEnum
                    export type MonthlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                }
            }
            export namespace Sbg1a {
                export namespace Filer {
                    // type fullname: price.DedicatedCloud._2013v1.Sbg1a.Filer.HourlyEnum
                    export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200g-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-6600-GB"
                    // type fullname: price.DedicatedCloud._2013v1.Sbg1a.Filer.MonthlyEnum
                    export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-6600-GB"
                }
                export namespace Host {
                    // type fullname: price.DedicatedCloud._2013v1.Sbg1a.Host.HourlyEnum
                    export type HourlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                    // type fullname: price.DedicatedCloud._2013v1.Sbg1a.Host.MonthlyEnum
                    export type MonthlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                }
            }
        }
        export namespace _2014v1 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2014v2 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v1 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v2 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v3 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v4 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v5 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v6 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v7 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        // type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2018v1 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v2 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v3 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v4 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v5 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v6 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v7 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        // type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.HourlyEnum
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                        // type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-2400-GB" | "nfs-3300-GB" | "nfs-6600-GB" | "nfs-800-GB"
                    }
                    export namespace Host {
                        // type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.HourlyEnum
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        // type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.MonthlyEnum
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
    }
    export namespace Email {
        export namespace Exchange {
            // type fullname: price.Email.Exchange.OfferEnum
            export type OfferEnum = "hosted"
        }
    }
    export namespace License {
        // type fullname: price.License.OfficeEnum
        export type OfficeEnum = "officeBusiness" | "officeProPlus"
    }
    export namespace Vps {
        export namespace Classic {
            // type fullname: price.Vps.Classic.ModelEnum
            export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
        }
        export namespace Cloud {
            // type fullname: price.Vps.Cloud.ModelEnum
            export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
            // type fullname: price.Vps.Cloud.OptionEnum
            export type OptionEnum = "ftpbackup" | "ip" | "snapshot" | "veeam"
        }
        export namespace Lowlat {
            // type fullname: price.Vps.Lowlat.ModelEnum
            export type ModelEnum = "model1" | "model2" | "model3"
        }
        export namespace _2013v1 {
            export namespace Classic {
                // type fullname: price.Vps._2013v1.Classic.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
            }
            export namespace Cloud {
                // type fullname: price.Vps._2013v1.Cloud.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
                // type fullname: price.Vps._2013v1.Cloud.OptionEnum
                export type OptionEnum = "ftpbackup" | "ip" | "snapshot" | "veeam"
            }
            export namespace Lowlat {
                // type fullname: price.Vps._2013v1.Lowlat.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
            }
        }
        export namespace _2014v1 {
            export namespace Classic {
                // type fullname: price.Vps._2014v1.Classic.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
            }
            export namespace Cloud {
                // type fullname: price.Vps._2014v1.Cloud.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
                // type fullname: price.Vps._2014v1.Cloud.OptionEnum
                export type OptionEnum = "ftpbackup" | "ip" | "snapshot" | "veeam"
            }
        }
        export namespace _2015v1 {
            export namespace Cloud {
                // type fullname: price.Vps._2015v1.Cloud.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2015v1.Cloud.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                // type fullname: price.Vps._2015v1.Cloudram.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2015v1.Cloudram.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                // type fullname: price.Vps._2015v1.Ssd.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2015v1.Ssd.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2017v1 {
            export namespace Ssd {
                // type fullname: price.Vps._2017v1.Ssd.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
                // type fullname: price.Vps._2017v1.Ssd.OptionEnum
                export type OptionEnum = "ip"
            }
        }
        export namespace _2017v2 {
            export namespace Cloud {
                // type fullname: price.Vps._2017v2.Cloud.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2017v2.Cloud.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                // type fullname: price.Vps._2017v2.Cloudram.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2017v2.Cloudram.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                // type fullname: price.Vps._2017v2.Ssd.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2017v2.Ssd.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2017v3 {
            export namespace Cloud {
                // type fullname: price.Vps._2017v3.Cloud.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2017v3.Cloud.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                // type fullname: price.Vps._2017v3.Cloudram.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2017v3.Cloudram.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                // type fullname: price.Vps._2017v3.Ssd.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2017v3.Ssd.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2018v1 {
            export namespace Cloud {
                // type fullname: price.Vps._2018v1.Cloud.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2018v1.Cloud.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                // type fullname: price.Vps._2018v1.Cloudram.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2018v1.Cloudram.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                // type fullname: price.Vps._2018v1.Ssd.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3"
                // type fullname: price.Vps._2018v1.Ssd.OptionEnum
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2018v2 {
            export namespace Ssd {
                // type fullname: price.Vps._2018v2.Ssd.ModelEnum
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
                // type fullname: price.Vps._2018v2.Ssd.OptionEnum
                export type OptionEnum = "ip"
            }
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
        nasha: {
            model: {
                $(modelName: price.Dedicated.Nasha.ModelEnum): {
                    // GET /price/dedicated/nasha/model/{modelName}
                    $get(): Promise<order.Price>;
                };
            }
        }
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
    dedicatedCloud: {
        '2013v1': {
            bhs1a: {
                filer: {
                    hourly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Bhs1a.Filer.HourlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                    monthly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Bhs1a.Filer.MonthlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                }
                host: {
                    hourly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Bhs1a.Host.HourlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                    monthly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Bhs1a.Host.MonthlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                }
            }
            rbx2a: {
                filer: {
                    hourly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Rbx2a.Filer.HourlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                    monthly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Rbx2a.Filer.MonthlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                }
                host: {
                    hourly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Rbx2a.Host.HourlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                    monthly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Rbx2a.Host.MonthlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                }
            }
            sbg1a: {
                filer: {
                    hourly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Sbg1a.Filer.HourlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                    monthly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Sbg1a.Filer.MonthlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                }
                host: {
                    hourly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Sbg1a.Host.HourlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                    monthly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Sbg1a.Host.MonthlyEnum): {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}
                            $get(): Promise<order.Price>;
                        };
                    }
                }
            }
        }
        '2014v1': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2014v2': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2016v1': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2016v2': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2016v3': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2016v4': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2016v5': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2016v6': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2016v7': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2018v1': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2018v2': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2018v3': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2018v4': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2018v5': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2018v6': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
        '2018v7': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.HourlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            };
                        }
                    }
                }
            }
        }
    }
    license: {
        office: {
            $(officeName: price.License.OfficeEnum): {
                // GET /price/license/office/{officeName}
                $get(): Promise<order.Price>;
            };
        }
    }
    vps: {
        '2013v1': {
            classic: {
                model: {
                    $(modelName: price.Vps._2013v1.Classic.ModelEnum): {
                        // GET /price/vps/2013v1/classic/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            cloud: {
                model: {
                    $(modelName: price.Vps._2013v1.Cloud.ModelEnum): {
                        // GET /price/vps/2013v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2013v1.Cloud.OptionEnum): {
                        // GET /price/vps/2013v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            lowlat: {
                model: {
                    $(modelName: price.Vps._2013v1.Lowlat.ModelEnum): {
                        // GET /price/vps/2013v1/lowlat/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        '2014v1': {
            classic: {
                model: {
                    $(modelName: price.Vps._2014v1.Classic.ModelEnum): {
                        // GET /price/vps/2014v1/classic/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            cloud: {
                model: {
                    $(modelName: price.Vps._2014v1.Cloud.ModelEnum): {
                        // GET /price/vps/2014v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2014v1.Cloud.OptionEnum): {
                        // GET /price/vps/2014v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        '2015v1': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2015v1.Cloud.ModelEnum): {
                        // GET /price/vps/2015v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2015v1.Cloud.OptionEnum): {
                        // GET /price/vps/2015v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2015v1.Cloudram.ModelEnum): {
                        // GET /price/vps/2015v1/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2015v1.Cloudram.OptionEnum): {
                        // GET /price/vps/2015v1/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2015v1.Ssd.ModelEnum): {
                        // GET /price/vps/2015v1/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2015v1.Ssd.OptionEnum): {
                        // GET /price/vps/2015v1/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        '2017v1': {
            ssd: {
                model: {
                    $(modelName: price.Vps._2017v1.Ssd.ModelEnum): {
                        // GET /price/vps/2017v1/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v1.Ssd.OptionEnum): {
                        // GET /price/vps/2017v1/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        '2017v2': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2017v2.Cloud.ModelEnum): {
                        // GET /price/vps/2017v2/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v2.Cloud.OptionEnum): {
                        // GET /price/vps/2017v2/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2017v2.Cloudram.ModelEnum): {
                        // GET /price/vps/2017v2/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v2.Cloudram.OptionEnum): {
                        // GET /price/vps/2017v2/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2017v2.Ssd.ModelEnum): {
                        // GET /price/vps/2017v2/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v2.Ssd.OptionEnum): {
                        // GET /price/vps/2017v2/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        '2017v3': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2017v3.Cloud.ModelEnum): {
                        // GET /price/vps/2017v3/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v3.Cloud.OptionEnum): {
                        // GET /price/vps/2017v3/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2017v3.Cloudram.ModelEnum): {
                        // GET /price/vps/2017v3/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v3.Cloudram.OptionEnum): {
                        // GET /price/vps/2017v3/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2017v3.Ssd.ModelEnum): {
                        // GET /price/vps/2017v3/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v3.Ssd.OptionEnum): {
                        // GET /price/vps/2017v3/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        '2018v1': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2018v1.Cloud.ModelEnum): {
                        // GET /price/vps/2018v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v1.Cloud.OptionEnum): {
                        // GET /price/vps/2018v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2018v1.Cloudram.ModelEnum): {
                        // GET /price/vps/2018v1/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v1.Cloudram.OptionEnum): {
                        // GET /price/vps/2018v1/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2018v1.Ssd.ModelEnum): {
                        // GET /price/vps/2018v1/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v1.Ssd.OptionEnum): {
                        // GET /price/vps/2018v1/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        '2018v2': {
            ssd: {
                model: {
                    $(modelName: price.Vps._2018v2.Ssd.ModelEnum): {
                        // GET /price/vps/2018v2/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v2.Ssd.OptionEnum): {
                        // GET /price/vps/2018v2/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    };
                }
            }
        }
        classic: {
            model: {
                $(modelName: price.Vps.Classic.ModelEnum): {
                    // GET /price/vps/classic/model/{modelName}
                    $get(): Promise<order.Price>;
                };
            }
        }
        cloud: {
            model: {
                $(modelName: price.Vps.Cloud.ModelEnum): {
                    // GET /price/vps/cloud/model/{modelName}
                    $get(): Promise<order.Price>;
                };
            }
            option: {
                $(optionName: price.Vps.Cloud.OptionEnum): {
                    // GET /price/vps/cloud/option/{optionName}
                    $get(): Promise<order.Price>;
                };
            }
        }
        lowlat: {
            model: {
                $(modelName: price.Vps.Lowlat.ModelEnum): {
                    // GET /price/vps/lowlat/model/{modelName}
                    $get(): Promise<order.Price>;
                };
            }
        }
    }
// Api
  /**
   * Get the price of Nas HA offers
   * Get the price of Nas HA offers
   */
  get(path: '/price/dedicated/nasha/model/{modelName}'): (params: {modelName: price.Dedicated.Nasha.ModelEnum}) => Promise<order.Price>;
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
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2013v1.Bhs1a.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2013v1.Bhs1a.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2013v1.Bhs1a.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2013v1.Bhs1a.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2013v1.Rbx2a.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2013v1.Rbx2a.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2013v1.Rbx2a.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2013v1.Rbx2a.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2013v1.Sbg1a.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2013v1.Sbg1a.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2013v1.Sbg1a.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2013v1.Sbg1a.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}'): (params: {filerProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.HourlyEnum}) => Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}'): (params: {hostProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.MonthlyEnum}) => Promise<order.Price>;
  /**
   * Get the monthly price for an office license
   * Get the monthly price for an office license
   */
  get(path: '/price/license/office/{officeName}'): (params: {officeName: price.License.OfficeEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2013
   * Get price of VPS Cloud 2013
   */
  get(path: '/price/vps/2013v1/classic/model/{modelName}'): (params: {modelName: price.Vps._2013v1.Classic.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Classic 2013
   * Get price of VPS Classic 2013
   */
  get(path: '/price/vps/2013v1/cloud/model/{modelName}'): (params: {modelName: price.Vps._2013v1.Cloud.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2013
   * Get price of VPS Cloud Options 2013
   */
  get(path: '/price/vps/2013v1/cloud/option/{optionName}'): (params: {optionName: price.Vps._2013v1.Cloud.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Low Latency 2013
   * Get price of VPS Low Latency 2013
   */
  get(path: '/price/vps/2013v1/lowlat/model/{modelName}'): (params: {modelName: price.Vps._2013v1.Lowlat.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Classic 2014
   * Get price of VPS Classic 2014
   */
  get(path: '/price/vps/2014v1/classic/model/{modelName}'): (params: {modelName: price.Vps._2014v1.Classic.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2014
   * Get price of VPS Cloud 2014
   */
  get(path: '/price/vps/2014v1/cloud/model/{modelName}'): (params: {modelName: price.Vps._2014v1.Cloud.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2014
   * Get price of VPS Cloud Options 2014
   */
  get(path: '/price/vps/2014v1/cloud/option/{optionName}'): (params: {optionName: price.Vps._2014v1.Cloud.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2015
   * Get price of VPS Cloud 2015
   */
  get(path: '/price/vps/2015v1/cloud/model/{modelName}'): (params: {modelName: price.Vps._2015v1.Cloud.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  get(path: '/price/vps/2015v1/cloud/option/{optionName}'): (params: {optionName: price.Vps._2015v1.Cloud.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2016
   * Get price of VPS Cloud RAM 2016
   */
  get(path: '/price/vps/2015v1/cloudram/model/{modelName}'): (params: {modelName: price.Vps._2015v1.Cloudram.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  get(path: '/price/vps/2015v1/cloudram/option/{optionName}'): (params: {optionName: price.Vps._2015v1.Cloudram.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD 2015
   * Get price of VPS SSD 2015
   */
  get(path: '/price/vps/2015v1/ssd/model/{modelName}'): (params: {modelName: price.Vps._2015v1.Ssd.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  get(path: '/price/vps/2015v1/ssd/option/{optionName}'): (params: {optionName: price.Vps._2015v1.Ssd.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD Discovery 2017
   * Get price of VPS SSD Discovery 2017
   */
  get(path: '/price/vps/2017v1/ssd/model/{modelName}'): (params: {modelName: price.Vps._2017v1.Ssd.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD Discovery Options 2017
   * Get price of VPS SSD Discovery Options 2017
   */
  get(path: '/price/vps/2017v1/ssd/option/{optionName}'): (params: {optionName: price.Vps._2017v1.Ssd.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2017
   * Get price of VPS Cloud 2017
   */
  get(path: '/price/vps/2017v2/cloud/model/{modelName}'): (params: {modelName: price.Vps._2017v2.Cloud.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  get(path: '/price/vps/2017v2/cloud/option/{optionName}'): (params: {optionName: price.Vps._2017v2.Cloud.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2017
   * Get price of VPS Cloud RAM 2017
   */
  get(path: '/price/vps/2017v2/cloudram/model/{modelName}'): (params: {modelName: price.Vps._2017v2.Cloudram.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  get(path: '/price/vps/2017v2/cloudram/option/{optionName}'): (params: {optionName: price.Vps._2017v2.Cloudram.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD 2017
   * Get price of VPS SSD 2017
   */
  get(path: '/price/vps/2017v2/ssd/model/{modelName}'): (params: {modelName: price.Vps._2017v2.Ssd.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  get(path: '/price/vps/2017v2/ssd/option/{optionName}'): (params: {optionName: price.Vps._2017v2.Ssd.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2017
   * Get price of VPS Cloud 2017
   */
  get(path: '/price/vps/2017v3/cloud/model/{modelName}'): (params: {modelName: price.Vps._2017v3.Cloud.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  get(path: '/price/vps/2017v3/cloud/option/{optionName}'): (params: {optionName: price.Vps._2017v3.Cloud.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2017
   * Get price of VPS Cloud RAM 2017
   */
  get(path: '/price/vps/2017v3/cloudram/model/{modelName}'): (params: {modelName: price.Vps._2017v3.Cloudram.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  get(path: '/price/vps/2017v3/cloudram/option/{optionName}'): (params: {optionName: price.Vps._2017v3.Cloudram.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD 2017
   * Get price of VPS SSD 2017
   */
  get(path: '/price/vps/2017v3/ssd/model/{modelName}'): (params: {modelName: price.Vps._2017v3.Ssd.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  get(path: '/price/vps/2017v3/ssd/option/{optionName}'): (params: {optionName: price.Vps._2017v3.Ssd.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2017
   * Get price of VPS Cloud 2017
   */
  get(path: '/price/vps/2018v1/cloud/model/{modelName}'): (params: {modelName: price.Vps._2018v1.Cloud.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  get(path: '/price/vps/2018v1/cloud/option/{optionName}'): (params: {optionName: price.Vps._2018v1.Cloud.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2017
   * Get price of VPS Cloud RAM 2017
   */
  get(path: '/price/vps/2018v1/cloudram/model/{modelName}'): (params: {modelName: price.Vps._2018v1.Cloudram.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  get(path: '/price/vps/2018v1/cloudram/option/{optionName}'): (params: {optionName: price.Vps._2018v1.Cloudram.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD 2018
   * Get price of VPS SSD 2018
   */
  get(path: '/price/vps/2018v1/ssd/model/{modelName}'): (params: {modelName: price.Vps._2018v1.Ssd.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  get(path: '/price/vps/2018v1/ssd/option/{optionName}'): (params: {optionName: price.Vps._2018v1.Ssd.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD APAC
   * Get price of VPS SSD APAC
   */
  get(path: '/price/vps/2018v2/ssd/model/{modelName}'): (params: {modelName: price.Vps._2018v2.Ssd.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS SSD APAC Options
   * Get price of VPS SSD APAC Options
   */
  get(path: '/price/vps/2018v2/ssd/option/{optionName}'): (params: {optionName: price.Vps._2018v2.Ssd.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Classic
   * Get price of VPS Classic
   */
  get(path: '/price/vps/classic/model/{modelName}'): (params: {modelName: price.Vps.Classic.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud
   * Get price of VPS Cloud
   */
  get(path: '/price/vps/cloud/model/{modelName}'): (params: {modelName: price.Vps.Cloud.ModelEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options
   * Get price of VPS Cloud Options
   */
  get(path: '/price/vps/cloud/option/{optionName}'): (params: {optionName: price.Vps.Cloud.OptionEnum}) => Promise<order.Price>;
  /**
   * Get price of VPS Low Latency
   * Get price of VPS Low Latency
   */
  get(path: '/price/vps/lowlat/model/{modelName}'): (params: {modelName: price.Vps.Lowlat.ModelEnum}) => Promise<order.Price>;
}
