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
    export namespace Domain {
        export namespace Zone {
            // type fullname: price.Domain.Zone.OptionEnum
            export type OptionEnum = "dnsAnycast"
        }
    }
    export namespace Email {
        export namespace Exchange {
            // type fullname: price.Email.Exchange.OfferEnum
            export type OfferEnum = "hosted"
        }
    }
    export namespace Hosting {
        // type fullname: price.Hosting.PrivateDatabaseEnum
        export type PrivateDatabaseEnum = "mysql_4.1_1024" | "mysql_4.1_128" | "mysql_4.1_256" | "mysql_4.1_512" | "mysql_5.0_1024" | "mysql_5.0_128" | "mysql_5.0_256" | "mysql_5.0_512" | "mysql_5.1_1024" | "mysql_5.1_128" | "mysql_5.1_256" | "mysql_5.1_512" | "mysql_5.5_1024" | "mysql_5.5_128" | "mysql_5.5_256" | "mysql_5.5_512"
        export namespace Web {
            // type fullname: price.Hosting.Web.CdnEnum
            export type CdnEnum = "CDN_BUSINESS"
            // type fullname: price.Hosting.Web.ExtraSqlPersoEnum
            export type ExtraSqlPersoEnum = "SQLPERSO_1_BASES_400_MB" | "SQLPERSO_1_BASES_800_MB" | "SQLPERSO_20_BASES_100_MB" | "SQLPERSO_20_BASES_200_MB" | "SQLPERSO_2_BASES_400_MB" | "SQLPERSO_2_BASES_800_MB" | "SQLPERSO_50_BASES_100_MB" | "SQLPERSO_50_BASES_200_MB" | "SQLPERSO_5_BASES_100_MB" | "SQLPERSO_5_BASES_200_MB" | "SQLPERSO_5_BASES_400_MB" | "SQLPERSO_5_BASES_800_MB"
            // type fullname: price.Hosting.Web.SslEnum
            export type SslEnum = "HOSTEDSSL"
        }
    }
    export namespace Hpcspot {
        export namespace Account {
            // type fullname: price.Hpcspot.Account.SubscriptionEnum
            export type SubscriptionEnum = "HPCSPOT"
        }
        export namespace Consumption {
            // type fullname: price.Hpcspot.Consumption.JobEnum
            export type JobEnum = "16core.64gb" | "4core.32gb" | "8core.32gb"
            // type fullname: price.Hpcspot.Consumption.ReservationEnum
            export type ReservationEnum = "12core.60gb.quadrok400" | "1core.4gb" | "1core.4gb.quadrok4000" | "2core.8gb" | "2core.8gb.quadrok4000" | "4core.15gb" | "4core.15gb.quadrok4000" | "8core.30gb" | "8core.30gb.quadrok4000"
            // type fullname: price.Hpcspot.Consumption.SessionEnum
            export type SessionEnum = "16core.64gb" | "4core.32gb" | "8core.32gb"
        }
    }
    export namespace License {
        // type fullname: price.License.OfficeEnum
        export type OfficeEnum = "officeBusiness" | "officeProPlus"
    }
    export namespace OverTheBox {
        // type fullname: price.OverTheBox.OfferEnum
        export type OfferEnum = "plus.v1"
    }
    export namespace Pack {
        export namespace Xdsl {
            // type fullname: price.Pack.Xdsl.InstallationEnum
            export type InstallationEnum = "enterprise" | "express" | "expressLite"
            // type fullname: price.Pack.Xdsl.OffersEnum
            export type OffersEnum = "enterprise" | "express" | "expressLite"
            // type fullname: price.Pack.Xdsl.OptionsEnum
            export type OptionsEnum = "enterpriseGtr" | "vdslFt"
        }
    }
    export namespace Saas {
        export namespace Csp2 {
            // type fullname: price.Saas.Csp2.LicenseEnum
            export type LicenseEnum = "AzureActiveDirectoryBasic" | "AzureActiveDirectoryPremiumP1" | "Business" | "BusinessEssentials" | "BusinessPremium" | "EnterpriseE1" | "EnterpriseE3" | "EnterpriseK1" | "ExchangeOnlinePlan1" | "ProPlus" | "ProjectOnline" | "ProjectOnlineProfessional" | "VisioPro"
        }
    }
    export namespace Telephony {
        // type fullname: price.Telephony.OfferEnum
        export type OfferEnum = "discovery" | "enterprise" | "enterpriseMobile" | "resellerEnterprise" | "resellerEnterpriseMobile"
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
    export namespace Xdsl {
        export namespace AddressMove {
            // type fullname: price.Xdsl.AddressMove.FeeEnum
            export type FeeEnum = "keepPortability"
        }
        // type fullname: price.Xdsl.InstallationEnum
        export type InstallationEnum = "backup"
        // type fullname: price.Xdsl.OffersEnum
        export type OffersEnum = "backup"
        export namespace Options {
            // type fullname: price.Xdsl.Options.InstallationEnum
            export type InstallationEnum = "ipv4"
            // type fullname: price.Xdsl.Options.Ipv4Enum
            export type Ipv4Enum = "29"
            // type fullname: price.Xdsl.Options.LineEnum
            export type LineEnum = "creation" | "partialToTotal"
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
    domain: {
        zone: {
            option: {
                $(optionName: price.Domain.Zone.OptionEnum): {
                    // GET /price/domain/zone/option/{optionName}
                    $get(): Promise<order.Price>;
                };
            }
        }
    }
    hosting: {
        privateDatabase: {
            $(privateDatabaseName: price.Hosting.PrivateDatabaseEnum): {
                // GET /price/hosting/privateDatabase/{privateDatabaseName}
                $get(): Promise<order.Price>;
            };
        }
        web: {
            cdn: {
                $(cdnName: price.Hosting.Web.CdnEnum): {
                    // GET /price/hosting/web/cdn/{cdnName}
                    $get(): Promise<order.Price>;
                };
            }
            extraSqlPerso: {
                $(extraSqlPersoName: price.Hosting.Web.ExtraSqlPersoEnum): {
                    // GET /price/hosting/web/extraSqlPerso/{extraSqlPersoName}
                    $get(): Promise<order.Price>;
                };
            }
            ssl: {
                $(sslName: price.Hosting.Web.SslEnum): {
                    // GET /price/hosting/web/ssl/{sslName}
                    $get(): Promise<order.Price>;
                };
            }
        }
    }
    hpcspot: {
        account: {
            subscription: {
                $(subscriptionName: price.Hpcspot.Account.SubscriptionEnum): {
                    // GET /price/hpcspot/account/subscription/{subscriptionName}
                    $get(): Promise<order.Price>;
                };
            }
        }
        consumption: {
            job: {
                $(reference: price.Hpcspot.Consumption.JobEnum): {
                    // GET /price/hpcspot/consumption/job/{reference}
                    $get(): Promise<order.Price>;
                };
            }
            reservation: {
                $(reference: price.Hpcspot.Consumption.ReservationEnum): {
                    // GET /price/hpcspot/consumption/reservation/{reference}
                    $get(): Promise<order.Price>;
                };
            }
            session: {
                $(reference: price.Hpcspot.Consumption.SessionEnum): {
                    // GET /price/hpcspot/consumption/session/{reference}
                    $get(): Promise<order.Price>;
                };
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
    overTheBox: {
        offer: {
            $(offerName: price.OverTheBox.OfferEnum): {
                // GET /price/overTheBox/offer/{offerName}
                $get(): Promise<order.Price>;
            };
        }
    }
    saas: {
        csp2: {
            license: {
                $(licenseName: price.Saas.Csp2.LicenseEnum): {
                    // GET /price/saas/csp2/license/{licenseName}
                    $get(): Promise<order.Price>;
                };
            }
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
    xdsl: {
        addressMove: {
            fee: {
                $(option: price.Xdsl.AddressMove.FeeEnum): {
                    // GET /price/xdsl/addressMove/fee/{option}
                    $get(): Promise<order.Price>;
                };
            }
        }
        installation: {
            $(offer: price.Xdsl.InstallationEnum): {
                // GET /price/xdsl/installation/{offer}
                $get(): Promise<order.Price>;
            };
        }
        offers: {
            $(offersName: price.Xdsl.OffersEnum): {
                // GET /price/xdsl/offers/{offersName}
                $get(): Promise<order.Price>;
            };
        }
        options: {
            installation: {
                $(option: price.Xdsl.Options.InstallationEnum): {
                    // GET /price/xdsl/options/installation/{option}
                    $get(): Promise<order.Price>;
                };
            }
            ipv4: {
                $(ipRange: price.Xdsl.Options.Ipv4Enum): {
                    // GET /price/xdsl/options/ipv4/{ipRange}
                    $get(): Promise<order.Price>;
                };
            }
            line: {
                $(lineAction: price.Xdsl.Options.LineEnum): {
                    // GET /price/xdsl/options/line/{lineAction}
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
   * Get price of zone options
   * Get price of zone options
   */
  get(path: '/price/domain/zone/option/{optionName}'): (params: {optionName: price.Domain.Zone.OptionEnum}) => Promise<order.Price>;
  /**
   * Get the price for a private database
   * Get the price for a private database
   */
  get(path: '/price/hosting/privateDatabase/{privateDatabaseName}'): (params: {privateDatabaseName: price.Hosting.PrivateDatabaseEnum}) => Promise<order.Price>;
  /**
   * Get the price for cdn option
   * Get the price for cdn option
   */
  get(path: '/price/hosting/web/cdn/{cdnName}'): (params: {cdnName: price.Hosting.Web.CdnEnum}) => Promise<order.Price>;
  /**
   * Get the price for extra sql perso option
   * Get the price for extra sql perso option
   */
  get(path: '/price/hosting/web/extraSqlPerso/{extraSqlPersoName}'): (params: {extraSqlPersoName: price.Hosting.Web.ExtraSqlPersoEnum}) => Promise<order.Price>;
  /**
   * Get the price for hosted ssl option
   * Get the price for hosted ssl option
   */
  get(path: '/price/hosting/web/ssl/{sslName}'): (params: {sslName: price.Hosting.Web.SslEnum}) => Promise<order.Price>;
  /**
   * Get the price of a HPC Spot Account for 1 month
   * Get the price of a HPC Spot Account for 1 month
   */
  get(path: '/price/hpcspot/account/subscription/{subscriptionName}'): (params: {subscriptionName: price.Hpcspot.Account.SubscriptionEnum}) => Promise<order.Price>;
  /**
   * Get the price of a JOB consumption for 1 hour
   * Get the price of a JOB consumption for 1 hour
   */
  get(path: '/price/hpcspot/consumption/job/{reference}'): (params: {reference: price.Hpcspot.Consumption.JobEnum}) => Promise<order.Price>;
  /**
   * Get the price of a RESERVATION consumption for 1 hour
   * Get the price of a RESERVATION consumption for 1 hour
   */
  get(path: '/price/hpcspot/consumption/reservation/{reference}'): (params: {reference: price.Hpcspot.Consumption.ReservationEnum}) => Promise<order.Price>;
  /**
   * Get the price of a SESSION consumption for 1 hour
   * Get the price of a SESSION consumption for 1 hour
   */
  get(path: '/price/hpcspot/consumption/session/{reference}'): (params: {reference: price.Hpcspot.Consumption.SessionEnum}) => Promise<order.Price>;
  /**
   * Get the monthly price for an office license
   * Get the monthly price for an office license
   */
  get(path: '/price/license/office/{officeName}'): (params: {officeName: price.License.OfficeEnum}) => Promise<order.Price>;
  /**
   * Get the price of overTheBox offers
   * Get the price of overTheBox offers
   */
  get(path: '/price/overTheBox/offer/{offerName}'): (params: {offerName: price.OverTheBox.OfferEnum}) => Promise<order.Price>;
  /**
   * Get the monthly price for an Office 365 license
   * Get the monthly price for an Office 365 license
   */
  get(path: '/price/saas/csp2/license/{licenseName}'): (params: {licenseName: price.Saas.Csp2.LicenseEnum}) => Promise<order.Price>;
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
  /**
   * Get the price of address move option fee
   * Get the price of address move option fee
   */
  get(path: '/price/xdsl/addressMove/fee/{option}'): (params: {option: price.Xdsl.AddressMove.FeeEnum}) => Promise<order.Price>;
  /**
   * Get the price of options installation fee
   * Get the price of options installation fee
   */
  get(path: '/price/xdsl/installation/{offer}'): (params: {offer: price.Xdsl.InstallationEnum}) => Promise<order.Price>;
  /**
   * Get the price of xdsl offers
   * Get the price of xdsl offers
   */
  get(path: '/price/xdsl/offers/{offersName}'): (params: {offersName: price.Xdsl.OffersEnum}) => Promise<order.Price>;
  /**
   * Get the price of options installation fee
   * Get the price of options installation fee
   */
  get(path: '/price/xdsl/options/installation/{option}'): (params: {option: price.Xdsl.Options.InstallationEnum}) => Promise<order.Price>;
  /**
   * Get the price of IPv4 options
   * Get the price of IPv4 options
   */
  get(path: '/price/xdsl/options/ipv4/{ipRange}'): (params: {ipRange: price.Xdsl.Options.Ipv4Enum}) => Promise<order.Price>;
  /**
   * Get the price of line action
   * Get the price of line action
   */
  get(path: '/price/xdsl/options/line/{lineAction}'): (params: {lineAction: price.Xdsl.Options.LineEnum}) => Promise<order.Price>;
}
/**
 * classic Model
 */