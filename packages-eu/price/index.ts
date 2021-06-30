import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /price Models
 * Source: https://eu.api.ovh.com/1.0/price.json
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
export namespace price {
    export namespace Dedicated {
        export namespace Nasha {
            /**
             * Enum of Models
             * type fullname: price.Dedicated.Nasha.ModelEnum
             */
            export type ModelEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
        }
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
            /**
             * Enum of ProfessionalUses
             * type fullname: price.Dedicated.Server.ProfessionalUseEnum
             */
            export type ProfessionalUseEnum = "bhg" | "eg" | "hg" | "mg" | "sp"
        }
    }
    export namespace DedicatedCloud {
        export namespace _2013v1 {
            export namespace Bhs1a {
                export namespace Filer {
                    /**
                     * Enum of Hourlys
                     * type fullname: price.DedicatedCloud._2013v1.Bhs1a.Filer.HourlyEnum
                     */
                    export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200g-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-9000-GB"
                    /**
                     * Enum of Monthlys
                     * type fullname: price.DedicatedCloud._2013v1.Bhs1a.Filer.MonthlyEnum
                     */
                    export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-9000-GB"
                }
                export namespace Host {
                    /**
                     * Enum of Hourlys
                     * type fullname: price.DedicatedCloud._2013v1.Bhs1a.Host.HourlyEnum
                     */
                    export type HourlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                    /**
                     * Enum of Monthlys
                     * type fullname: price.DedicatedCloud._2013v1.Bhs1a.Host.MonthlyEnum
                     */
                    export type MonthlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                }
            }
            export namespace Rbx2a {
                export namespace Filer {
                    /**
                     * Enum of Hourlys
                     * type fullname: price.DedicatedCloud._2013v1.Rbx2a.Filer.HourlyEnum
                     */
                    export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200g-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-9000-GB"
                    /**
                     * Enum of Monthlys
                     * type fullname: price.DedicatedCloud._2013v1.Rbx2a.Filer.MonthlyEnum
                     */
                    export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-9000-GB"
                }
                export namespace Host {
                    /**
                     * Enum of Hourlys
                     * type fullname: price.DedicatedCloud._2013v1.Rbx2a.Host.HourlyEnum
                     */
                    export type HourlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                    /**
                     * Enum of Monthlys
                     * type fullname: price.DedicatedCloud._2013v1.Rbx2a.Host.MonthlyEnum
                     */
                    export type MonthlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                }
            }
            export namespace Sbg1a {
                export namespace Filer {
                    /**
                     * Enum of Hourlys
                     * type fullname: price.DedicatedCloud._2013v1.Sbg1a.Filer.HourlyEnum
                     */
                    export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200g-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-9000-GB"
                    /**
                     * Enum of Monthlys
                     * type fullname: price.DedicatedCloud._2013v1.Sbg1a.Filer.MonthlyEnum
                     */
                    export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-3600-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-9000-GB"
                }
                export namespace Host {
                    /**
                     * Enum of Hourlys
                     * type fullname: price.DedicatedCloud._2013v1.Sbg1a.Host.HourlyEnum
                     */
                    export type HourlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                    /**
                     * Enum of Monthlys
                     * type fullname: price.DedicatedCloud._2013v1.Sbg1a.Host.MonthlyEnum
                     */
                    export type MonthlyEnum = "L" | "L+" | "L++" | "L2" | "L2+" | "M" | "S" | "S++" | "XL" | "XL+"
                }
            }
        }
        export namespace _2014v1 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2014v2 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v1 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v2 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v3 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v4 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v5 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v6 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2016v7 {
            export namespace Bhs1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Enterprise {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "iscsi-1200-GB" | "iscsi-13200g-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "iscsi-1200-GB" | "iscsi-13200-GB" | "iscsi-3300-GB" | "iscsi-6600-GB" | "iscsi-800-GB" | "nfs-100-GB" | "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "L" | "L+" | "M" | "XL" | "XL+"
                    }
                }
            }
        }
        export namespace _2018v1 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2d {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v2 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2d {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v3 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2d {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v4 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2d {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v5 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2d {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v6 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2d {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
        export namespace _2018v7 {
            export namespace Bhs1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Eri1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Lim1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2b {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Rbx2d {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Sbg1a {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
            export namespace Waw1c {
                export namespace Infrastructure {
                    export namespace Filer {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.HourlyEnum
                         */
                        export type HourlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum
                         */
                        export type MonthlyEnum = "nfs-1200-GB" | "nfs-13200-GB" | "nfs-1600-GB" | "nfs-18000-GB" | "nfs-2000-GB" | "nfs-2400-GB" | "nfs-3000-GB" | "nfs-3300-GB" | "nfs-36000-GB" | "nfs-6000-GB" | "nfs-6600-GB" | "nfs-800-GB" | "nfs-9000-GB"
                    }
                    export namespace Host {
                        /**
                         * Enum of Hourlys
                         * type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.HourlyEnum
                         */
                        export type HourlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                        /**
                         * Enum of Monthlys
                         * type fullname: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.MonthlyEnum
                         */
                        export type MonthlyEnum = "SDDC-128" | "SDDC-16" | "SDDC-256" | "SDDC-512" | "SDDC-64" | "SDDCVSAN-256" | "SDDCVSAN-512"
                    }
                }
            }
        }
    }
    export namespace Domain {
        export namespace Zone {
            /**
             * Enum of Options
             * type fullname: price.Domain.Zone.OptionEnum
             */
            export type OptionEnum = "dnsAnycast"
        }
    }
    export namespace Email {
        export namespace Exchange {
            /**
             * Enum of Offers
             * type fullname: price.Email.Exchange.OfferEnum
             */
            export type OfferEnum = "hosted"
        }
    }
    export namespace Hosting {
        /**
         * Enum of PrivateDatabases
         * type fullname: price.Hosting.PrivateDatabaseEnum
         */
        export type PrivateDatabaseEnum = "mysql_4.1_1024" | "mysql_4.1_128" | "mysql_4.1_256" | "mysql_4.1_512" | "mysql_5.0_1024" | "mysql_5.0_128" | "mysql_5.0_256" | "mysql_5.0_512" | "mysql_5.1_1024" | "mysql_5.1_128" | "mysql_5.1_256" | "mysql_5.1_512" | "mysql_5.5_1024" | "mysql_5.5_128" | "mysql_5.5_256" | "mysql_5.5_512"
        export namespace Web {
            /**
             * Enum of Cdns
             * type fullname: price.Hosting.Web.CdnEnum
             */
            export type CdnEnum = "CDN_BUSINESS"
            /**
             * Enum of ExtraSqlPersos
             * type fullname: price.Hosting.Web.ExtraSqlPersoEnum
             */
            export type ExtraSqlPersoEnum = "SQLPERSO_1_BASES_400_MB" | "SQLPERSO_1_BASES_800_MB" | "SQLPERSO_20_BASES_100_MB" | "SQLPERSO_20_BASES_200_MB" | "SQLPERSO_2_BASES_400_MB" | "SQLPERSO_2_BASES_800_MB" | "SQLPERSO_50_BASES_100_MB" | "SQLPERSO_50_BASES_200_MB" | "SQLPERSO_5_BASES_100_MB" | "SQLPERSO_5_BASES_200_MB" | "SQLPERSO_5_BASES_400_MB" | "SQLPERSO_5_BASES_800_MB"
            /**
             * Enum of Ssls
             * type fullname: price.Hosting.Web.SslEnum
             */
            export type SslEnum = "HOSTEDSSL"
        }
    }
    export namespace Hpcspot {
        export namespace Account {
            /**
             * Enum of Subscriptions
             * type fullname: price.Hpcspot.Account.SubscriptionEnum
             */
            export type SubscriptionEnum = "HPCSPOT"
        }
        export namespace Consumption {
            /**
             * Enum of Jobs
             * type fullname: price.Hpcspot.Consumption.JobEnum
             */
            export type JobEnum = "16core.64gb" | "4core.32gb" | "8core.32gb"
            /**
             * Enum of Reservations
             * type fullname: price.Hpcspot.Consumption.ReservationEnum
             */
            export type ReservationEnum = "12core.60gb.quadrok400" | "1core.4gb" | "1core.4gb.quadrok4000" | "2core.8gb" | "2core.8gb.quadrok4000" | "4core.15gb" | "4core.15gb.quadrok4000" | "8core.30gb" | "8core.30gb.quadrok4000"
            /**
             * Enum of Sessions
             * type fullname: price.Hpcspot.Consumption.SessionEnum
             */
            export type SessionEnum = "16core.64gb" | "4core.32gb" | "8core.32gb"
        }
    }
    export namespace License {
        /**
         * Enum of Offices
         * type fullname: price.License.OfficeEnum
         */
        export type OfficeEnum = "officeBusiness" | "officeProPlus"
    }
    export namespace OverTheBox {
        /**
         * Enum of Offers
         * type fullname: price.OverTheBox.OfferEnum
         */
        export type OfferEnum = "plus.v1"
    }
    export namespace Pack {
        export namespace Xdsl {
            /**
             * Enum of Installations
             * type fullname: price.Pack.Xdsl.InstallationEnum
             */
            export type InstallationEnum = "enterprise" | "express" | "expressLite"
            /**
             * Enum of Offerss
             * type fullname: price.Pack.Xdsl.OffersEnum
             */
            export type OffersEnum = "enterprise" | "express" | "expressLite"
            /**
             * Enum of Optionss
             * type fullname: price.Pack.Xdsl.OptionsEnum
             */
            export type OptionsEnum = "enterpriseGtr" | "vdslFt"
        }
    }
    export namespace Saas {
        export namespace Csp2 {
            /**
             * Enum of Licenses
             * type fullname: price.Saas.Csp2.LicenseEnum
             */
            export type LicenseEnum = "AzureActiveDirectoryBasic" | "AzureActiveDirectoryPremiumP1" | "Business" | "BusinessEssentials" | "BusinessPremium" | "EnterpriseE1" | "EnterpriseE3" | "EnterpriseK1" | "ExchangeOnlinePlan1" | "ProPlus" | "ProjectOnline" | "ProjectOnlineProfessional" | "VisioPro"
        }
    }
    export namespace Telephony {
        /**
         * Enum of Offers
         * type fullname: price.Telephony.OfferEnum
         */
        export type OfferEnum = "discovery" | "enterprise" | "enterpriseMobile" | "resellerEnterprise" | "resellerEnterpriseMobile"
    }
    export namespace Vps {
        export namespace Classic {
            /**
             * Enum of Models
             * type fullname: price.Vps.Classic.ModelEnum
             */
            export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
        }
        export namespace Cloud {
            /**
             * Enum of Models
             * type fullname: price.Vps.Cloud.ModelEnum
             */
            export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
            /**
             * Enum of Options
             * type fullname: price.Vps.Cloud.OptionEnum
             */
            export type OptionEnum = "ftpbackup" | "ip" | "snapshot" | "veeam"
        }
        export namespace Lowlat {
            /**
             * Enum of Models
             * type fullname: price.Vps.Lowlat.ModelEnum
             */
            export type ModelEnum = "model1" | "model2" | "model3"
        }
        export namespace _2013v1 {
            export namespace Classic {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2013v1.Classic.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
            }
            export namespace Cloud {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2013v1.Cloud.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2013v1.Cloud.OptionEnum
                 */
                export type OptionEnum = "ftpbackup" | "ip" | "snapshot" | "veeam"
            }
            export namespace Lowlat {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2013v1.Lowlat.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
            }
        }
        export namespace _2014v1 {
            export namespace Classic {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2014v1.Classic.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
            }
            export namespace Cloud {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2014v1.Cloud.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2014v1.Cloud.OptionEnum
                 */
                export type OptionEnum = "ftpbackup" | "ip" | "snapshot" | "veeam"
            }
        }
        export namespace _2015v1 {
            export namespace Cloud {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2015v1.Cloud.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2015v1.Cloud.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2015v1.Cloudram.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2015v1.Cloudram.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2015v1.Ssd.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2015v1.Ssd.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2017v1 {
            export namespace Ssd {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2017v1.Ssd.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2017v1.Ssd.OptionEnum
                 */
                export type OptionEnum = "ip"
            }
        }
        export namespace _2017v2 {
            export namespace Cloud {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2017v2.Cloud.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2017v2.Cloud.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2017v2.Cloudram.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2017v2.Cloudram.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2017v2.Ssd.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2017v2.Ssd.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2017v3 {
            export namespace Cloud {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2017v3.Cloud.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2017v3.Cloud.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2017v3.Cloudram.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2017v3.Cloudram.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2017v3.Ssd.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2017v3.Ssd.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2018v1 {
            export namespace Cloud {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2018v1.Cloud.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2018v1.Cloud.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Cloudram {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2018v1.Cloudram.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2018v1.Cloudram.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "automatedBackup" | "ftpbackup" | "ip" | "snapshot"
            }
            export namespace Ssd {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2018v1.Ssd.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2018v1.Ssd.OptionEnum
                 */
                export type OptionEnum = "additionalDisk100" | "additionalDisk200" | "additionalDisk50" | "additionalDisk500" | "ip" | "snapshot"
            }
        }
        export namespace _2018v2 {
            export namespace Ssd {
                /**
                 * Enum of Models
                 * type fullname: price.Vps._2018v2.Ssd.ModelEnum
                 */
                export type ModelEnum = "model1" | "model2" | "model3" | "model4"
                /**
                 * Enum of Options
                 * type fullname: price.Vps._2018v2.Ssd.OptionEnum
                 */
                export type OptionEnum = "ip"
            }
        }
    }
    export namespace Xdsl {
        export namespace AddressMove {
            /**
             * Enum of Fees
             * type fullname: price.Xdsl.AddressMove.FeeEnum
             */
            export type FeeEnum = "keepPortability"
        }
        /**
         * Enum of Installations
         * type fullname: price.Xdsl.InstallationEnum
         */
        export type InstallationEnum = "backup"
        /**
         * Enum of Offerss
         * type fullname: price.Xdsl.OffersEnum
         */
        export type OffersEnum = "backup"
        export namespace Options {
            /**
             * Enum of Installations
             * type fullname: price.Xdsl.Options.InstallationEnum
             */
            export type InstallationEnum = "ipv4"
            /**
             * Enum of Ipv4s
             * type fullname: price.Xdsl.Options.Ipv4Enum
             */
            export type Ipv4Enum = "29"
            /**
             * Enum of Lines
             * type fullname: price.Xdsl.Options.LineEnum
             */
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
 * Api model for /price
 */
export interface Price {
    dedicated: {
        nasha: {
            model: {
                $(modelName: price.Dedicated.Nasha.ModelEnum): {
                    /**
                     * Get the price of Nas HA offers
                     * GET /price/dedicated/nasha/model/{modelName}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
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
    dedicatedCloud: {
        '2013v1': {
            bhs1a: {
                filer: {
                    hourly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Bhs1a.Filer.HourlyEnum): {
                            /**
                             * Get price of dedicated Cloud hourly filer ressources
                             * GET /price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    monthly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Bhs1a.Filer.MonthlyEnum): {
                            /**
                             * Get price of dedicated Cloud monthly filer ressources
                             * GET /price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
                host: {
                    hourly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Bhs1a.Host.HourlyEnum): {
                            /**
                             * Get price of dedicated Cloud hourly host ressources
                             * GET /price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    monthly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Bhs1a.Host.MonthlyEnum): {
                            /**
                             * Get price of dedicated Cloud monthly host ressources
                             * GET /price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}
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
            rbx2a: {
                filer: {
                    hourly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Rbx2a.Filer.HourlyEnum): {
                            /**
                             * Get price of dedicated Cloud hourly filer ressources
                             * GET /price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    monthly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Rbx2a.Filer.MonthlyEnum): {
                            /**
                             * Get price of dedicated Cloud monthly filer ressources
                             * GET /price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
                host: {
                    hourly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Rbx2a.Host.HourlyEnum): {
                            /**
                             * Get price of dedicated Cloud hourly host ressources
                             * GET /price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    monthly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Rbx2a.Host.MonthlyEnum): {
                            /**
                             * Get price of dedicated Cloud monthly host ressources
                             * GET /price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}
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
            sbg1a: {
                filer: {
                    hourly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Sbg1a.Filer.HourlyEnum): {
                            /**
                             * Get price of dedicated Cloud hourly filer ressources
                             * GET /price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    monthly: {
                        $(filerProfile: price.DedicatedCloud._2013v1.Sbg1a.Filer.MonthlyEnum): {
                            /**
                             * Get price of dedicated Cloud monthly filer ressources
                             * GET /price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
                host: {
                    hourly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Sbg1a.Host.HourlyEnum): {
                            /**
                             * Get price of dedicated Cloud hourly host ressources
                             * GET /price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}
                             */
                            $get(): Promise<order.Price>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    monthly: {
                        $(hostProfile: price.DedicatedCloud._2013v1.Sbg1a.Host.MonthlyEnum): {
                            /**
                             * Get price of dedicated Cloud monthly host ressources
                             * GET /price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}
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
        '2014v1': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v1.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2014v2': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2014v2.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2016v1': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v1.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2016v2': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v2.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2016v3': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v3.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2016v4': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v4.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2016v5': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v5.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2016v6': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v6.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2016v7': {
            bhs1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                enterprise: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Enterprise.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}
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
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2016v7.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}
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
        }
        '2018v1': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}
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
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            rbx2d: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2d/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2d/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2d/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Rbx2d.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/rbx2d/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}
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
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v1.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}
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
        }
        '2018v2': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}
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
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            rbx2d: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2d/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2d/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2d/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Rbx2d.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/rbx2d/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}
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
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v2.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}
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
        }
        '2018v3': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}
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
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            rbx2d: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2d/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2d/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2d/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Rbx2d.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/rbx2d/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}
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
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v3.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}
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
        }
        '2018v4': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}
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
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            rbx2d: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2d/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2d/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2d/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Rbx2d.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/rbx2d/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}
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
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v4.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}
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
        }
        '2018v5': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}
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
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            rbx2d: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2d/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2d/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2d/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Rbx2d.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/rbx2d/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}
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
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v5.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}
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
        }
        '2018v6': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}
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
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            rbx2d: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2d/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2d/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2d/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Rbx2d.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/rbx2d/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}
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
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v6.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}
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
        }
        '2018v7': {
            bhs1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Bhs1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}
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
            eri1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Eri1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}
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
            lim1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Lim1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}
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
            rbx2a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}
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
            rbx2b: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2b.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}
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
            rbx2d: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2d/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2d/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2d/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Rbx2d.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/rbx2d/infrastructure/host/monthly/{hostProfile}
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
            sbg1a: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Sbg1a.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}
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
            waw1c: {
                infrastructure: {
                    filer: {
                        hourly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(filerProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Filer.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly filer ressources
                                 * GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                    host: {
                        hourly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.HourlyEnum): {
                                /**
                                 * Get price of dedicated Cloud hourly host ressources
                                 * GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}
                                 */
                                $get(): Promise<order.Price>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        monthly: {
                            $(hostProfile: price.DedicatedCloud._2018v7.Waw1c.Infrastructure.Host.MonthlyEnum): {
                                /**
                                 * Get price of dedicated Cloud monthly host ressources
                                 * GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}
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
        }
    }
    domain: {
        zone: {
            option: {
                $(optionName: price.Domain.Zone.OptionEnum): {
                    /**
                     * Get price of zone options
                     * GET /price/domain/zone/option/{optionName}
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
    hosting: {
        privateDatabase: {
            $(privateDatabaseName: price.Hosting.PrivateDatabaseEnum): {
                /**
                 * Get the price for a private database
                 * GET /price/hosting/privateDatabase/{privateDatabaseName}
                 */
                $get(): Promise<order.Price>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        web: {
            cdn: {
                $(cdnName: price.Hosting.Web.CdnEnum): {
                    /**
                     * Get the price for cdn option
                     * GET /price/hosting/web/cdn/{cdnName}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            extraSqlPerso: {
                $(extraSqlPersoName: price.Hosting.Web.ExtraSqlPersoEnum): {
                    /**
                     * Get the price for extra sql perso option
                     * GET /price/hosting/web/extraSqlPerso/{extraSqlPersoName}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            ssl: {
                $(sslName: price.Hosting.Web.SslEnum): {
                    /**
                     * Get the price for hosted ssl option
                     * GET /price/hosting/web/ssl/{sslName}
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
    hpcspot: {
        account: {
            subscription: {
                $(subscriptionName: price.Hpcspot.Account.SubscriptionEnum): {
                    /**
                     * Get the price of a HPC Spot Account for 1 month
                     * GET /price/hpcspot/account/subscription/{subscriptionName}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        consumption: {
            job: {
                $(reference: price.Hpcspot.Consumption.JobEnum): {
                    /**
                     * Get the price of a JOB consumption for 1 hour
                     * GET /price/hpcspot/consumption/job/{reference}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            reservation: {
                $(reference: price.Hpcspot.Consumption.ReservationEnum): {
                    /**
                     * Get the price of a RESERVATION consumption for 1 hour
                     * GET /price/hpcspot/consumption/reservation/{reference}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            session: {
                $(reference: price.Hpcspot.Consumption.SessionEnum): {
                    /**
                     * Get the price of a SESSION consumption for 1 hour
                     * GET /price/hpcspot/consumption/session/{reference}
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
    license: {
        office: {
            $(officeName: price.License.OfficeEnum): {
                /**
                 * Get the monthly price for an office license
                 * GET /price/license/office/{officeName}
                 */
                $get(): Promise<order.Price>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
    overTheBox: {
        offer: {
            $(offerName: price.OverTheBox.OfferEnum): {
                /**
                 * Get the price of overTheBox offers
                 * GET /price/overTheBox/offer/{offerName}
                 */
                $get(): Promise<order.Price>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    }
    saas: {
        csp2: {
            license: {
                $(licenseName: price.Saas.Csp2.LicenseEnum): {
                    /**
                     * Get the monthly price for an Office 365 license
                     * GET /price/saas/csp2/license/{licenseName}
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
    vps: {
        '2013v1': {
            classic: {
                model: {
                    $(modelName: price.Vps._2013v1.Classic.ModelEnum): {
                        /**
                         * Get price of VPS Cloud 2013
                         * GET /price/vps/2013v1/classic/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            cloud: {
                model: {
                    $(modelName: price.Vps._2013v1.Cloud.ModelEnum): {
                        /**
                         * Get price of VPS Classic 2013
                         * GET /price/vps/2013v1/cloud/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2013v1.Cloud.OptionEnum): {
                        /**
                         * Get price of VPS Cloud Options 2013
                         * GET /price/vps/2013v1/cloud/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            lowlat: {
                model: {
                    $(modelName: price.Vps._2013v1.Lowlat.ModelEnum): {
                        /**
                         * Get price of VPS Low Latency 2013
                         * GET /price/vps/2013v1/lowlat/model/{modelName}
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
        '2014v1': {
            classic: {
                model: {
                    $(modelName: price.Vps._2014v1.Classic.ModelEnum): {
                        /**
                         * Get price of VPS Classic 2014
                         * GET /price/vps/2014v1/classic/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            cloud: {
                model: {
                    $(modelName: price.Vps._2014v1.Cloud.ModelEnum): {
                        /**
                         * Get price of VPS Cloud 2014
                         * GET /price/vps/2014v1/cloud/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2014v1.Cloud.OptionEnum): {
                        /**
                         * Get price of VPS Cloud Options 2014
                         * GET /price/vps/2014v1/cloud/option/{optionName}
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
        '2015v1': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2015v1.Cloud.ModelEnum): {
                        /**
                         * Get price of VPS Cloud 2015
                         * GET /price/vps/2015v1/cloud/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2015v1.Cloud.OptionEnum): {
                        /**
                         * Get price of VPS Cloud Options 2015/2016
                         * GET /price/vps/2015v1/cloud/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2015v1.Cloudram.ModelEnum): {
                        /**
                         * Get price of VPS Cloud RAM 2016
                         * GET /price/vps/2015v1/cloudram/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2015v1.Cloudram.OptionEnum): {
                        /**
                         * Get price of VPS Cloud RAM Options 2015/2016
                         * GET /price/vps/2015v1/cloudram/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2015v1.Ssd.ModelEnum): {
                        /**
                         * Get price of VPS SSD 2015
                         * GET /price/vps/2015v1/ssd/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2015v1.Ssd.OptionEnum): {
                        /**
                         * Get price of VPS SSD Options 2015/2016
                         * GET /price/vps/2015v1/ssd/option/{optionName}
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
        '2017v1': {
            ssd: {
                model: {
                    $(modelName: price.Vps._2017v1.Ssd.ModelEnum): {
                        /**
                         * Get price of VPS SSD Discovery 2017
                         * GET /price/vps/2017v1/ssd/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v1.Ssd.OptionEnum): {
                        /**
                         * Get price of VPS SSD Discovery Options 2017
                         * GET /price/vps/2017v1/ssd/option/{optionName}
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
        '2017v2': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2017v2.Cloud.ModelEnum): {
                        /**
                         * Get price of VPS Cloud 2017
                         * GET /price/vps/2017v2/cloud/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v2.Cloud.OptionEnum): {
                        /**
                         * Get price of VPS Cloud Options 2015/2016
                         * GET /price/vps/2017v2/cloud/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2017v2.Cloudram.ModelEnum): {
                        /**
                         * Get price of VPS Cloud RAM 2017
                         * GET /price/vps/2017v2/cloudram/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v2.Cloudram.OptionEnum): {
                        /**
                         * Get price of VPS Cloud RAM Options 2015/2016
                         * GET /price/vps/2017v2/cloudram/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2017v2.Ssd.ModelEnum): {
                        /**
                         * Get price of VPS SSD 2017
                         * GET /price/vps/2017v2/ssd/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v2.Ssd.OptionEnum): {
                        /**
                         * Get price of VPS SSD Options 2015/2016
                         * GET /price/vps/2017v2/ssd/option/{optionName}
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
        '2017v3': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2017v3.Cloud.ModelEnum): {
                        /**
                         * Get price of VPS Cloud 2017
                         * GET /price/vps/2017v3/cloud/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v3.Cloud.OptionEnum): {
                        /**
                         * Get price of VPS Cloud Options 2015/2016
                         * GET /price/vps/2017v3/cloud/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2017v3.Cloudram.ModelEnum): {
                        /**
                         * Get price of VPS Cloud RAM 2017
                         * GET /price/vps/2017v3/cloudram/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v3.Cloudram.OptionEnum): {
                        /**
                         * Get price of VPS Cloud RAM Options 2015/2016
                         * GET /price/vps/2017v3/cloudram/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2017v3.Ssd.ModelEnum): {
                        /**
                         * Get price of VPS SSD 2017
                         * GET /price/vps/2017v3/ssd/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2017v3.Ssd.OptionEnum): {
                        /**
                         * Get price of VPS SSD Options 2015/2016
                         * GET /price/vps/2017v3/ssd/option/{optionName}
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
        '2018v1': {
            cloud: {
                model: {
                    $(modelName: price.Vps._2018v1.Cloud.ModelEnum): {
                        /**
                         * Get price of VPS Cloud 2017
                         * GET /price/vps/2018v1/cloud/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v1.Cloud.OptionEnum): {
                        /**
                         * Get price of VPS Cloud Options 2015/2016
                         * GET /price/vps/2018v1/cloud/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            cloudram: {
                model: {
                    $(modelName: price.Vps._2018v1.Cloudram.ModelEnum): {
                        /**
                         * Get price of VPS Cloud RAM 2017
                         * GET /price/vps/2018v1/cloudram/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v1.Cloudram.OptionEnum): {
                        /**
                         * Get price of VPS Cloud RAM Options 2015/2016
                         * GET /price/vps/2018v1/cloudram/option/{optionName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            ssd: {
                model: {
                    $(modelName: price.Vps._2018v1.Ssd.ModelEnum): {
                        /**
                         * Get price of VPS SSD 2018
                         * GET /price/vps/2018v1/ssd/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v1.Ssd.OptionEnum): {
                        /**
                         * Get price of VPS SSD Options 2015/2016
                         * GET /price/vps/2018v1/ssd/option/{optionName}
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
        '2018v2': {
            ssd: {
                model: {
                    $(modelName: price.Vps._2018v2.Ssd.ModelEnum): {
                        /**
                         * Get price of VPS SSD APAC
                         * GET /price/vps/2018v2/ssd/model/{modelName}
                         */
                        $get(): Promise<order.Price>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                option: {
                    $(optionName: price.Vps._2018v2.Ssd.OptionEnum): {
                        /**
                         * Get price of VPS SSD APAC Options
                         * GET /price/vps/2018v2/ssd/option/{optionName}
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
        classic: {
            model: {
                $(modelName: price.Vps.Classic.ModelEnum): {
                    /**
                     * Get price of VPS Classic
                     * GET /price/vps/classic/model/{modelName}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        cloud: {
            model: {
                $(modelName: price.Vps.Cloud.ModelEnum): {
                    /**
                     * Get price of VPS Cloud
                     * GET /price/vps/cloud/model/{modelName}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            option: {
                $(optionName: price.Vps.Cloud.OptionEnum): {
                    /**
                     * Get price of VPS Cloud Options
                     * GET /price/vps/cloud/option/{optionName}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        lowlat: {
            model: {
                $(modelName: price.Vps.Lowlat.ModelEnum): {
                    /**
                     * Get price of VPS Low Latency
                     * GET /price/vps/lowlat/model/{modelName}
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
    xdsl: {
        addressMove: {
            fee: {
                $(option: price.Xdsl.AddressMove.FeeEnum): {
                    /**
                     * Get the price of address move option fee
                     * GET /price/xdsl/addressMove/fee/{option}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        installation: {
            $(offer: price.Xdsl.InstallationEnum): {
                /**
                 * Get the price of options installation fee
                 * GET /price/xdsl/installation/{offer}
                 */
                $get(): Promise<order.Price>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        offers: {
            $(offersName: price.Xdsl.OffersEnum): {
                /**
                 * Get the price of xdsl offers
                 * GET /price/xdsl/offers/{offersName}
                 */
                $get(): Promise<order.Price>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        options: {
            installation: {
                $(option: price.Xdsl.Options.InstallationEnum): {
                    /**
                     * Get the price of options installation fee
                     * GET /price/xdsl/options/installation/{option}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            ipv4: {
                $(ipRange: price.Xdsl.Options.Ipv4Enum): {
                    /**
                     * Get the price of IPv4 options
                     * GET /price/xdsl/options/ipv4/{ipRange}
                     */
                    $get(): Promise<order.Price>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            line: {
                $(lineAction: price.Xdsl.Options.LineEnum): {
                    /**
                     * Get the price of line action
                     * GET /price/xdsl/options/line/{lineAction}
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
