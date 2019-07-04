import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
}
export namespace price {
    export namespace Dedicated {
        export namespace Nasha {
            //price.Dedicated.Nasha.ModelEnum
            export type ModelEnum = "1200g" | "13200g" | "19200g" | "2400g" | "26400g" | "3600g" | "7200g"
        }
        export namespace Server {
            //price.Dedicated.Server.AntiDDoSProEnum
            export type AntiDDoSProEnum = "sk"
            //price.Dedicated.Server.BackupStorageEnum
            export type BackupStorageEnum = "1000" | "10000" | "500" | "5000"
            //price.Dedicated.Server.FirewallEnum
            export type FirewallEnum = "asa5505" | "asa5510" | "asa5520"
            //price.Dedicated.Server.IpEnum
            export type IpEnum = "kimsufi" | "parking"
            //price.Dedicated.Server.ProfessionalUseEnum
            export type ProfessionalUseEnum = "bhg" | "eg" | "hg" | "mg" | "sp"
        }
    }
    export namespace Domain {
        export namespace Zone {
            //price.Domain.Zone.OptionEnum
            export type OptionEnum = "dnsAnycast"
        }
    }
    export namespace Email {
        export namespace Exchange {
            //price.Email.Exchange.OfferEnum
            export type OfferEnum = "hosted"
        }
    }
    export namespace Hosting {
        //price.Hosting.PrivateDatabaseEnum
        export type PrivateDatabaseEnum = "mysql_4.1_1024" | "mysql_4.1_128" | "mysql_4.1_256" | "mysql_4.1_512" | "mysql_5.0_1024" | "mysql_5.0_128" | "mysql_5.0_256" | "mysql_5.0_512" | "mysql_5.1_1024" | "mysql_5.1_128" | "mysql_5.1_256" | "mysql_5.1_512" | "mysql_5.5_1024" | "mysql_5.5_128" | "mysql_5.5_256" | "mysql_5.5_512"
        export namespace Web {
            //price.Hosting.Web.CdnEnum
            export type CdnEnum = "CDN_BUSINESS"
            //price.Hosting.Web.ExtraSqlPersoEnum
            export type ExtraSqlPersoEnum = "SQLPERSO_1_BASES_400_MB" | "SQLPERSO_1_BASES_800_MB" | "SQLPERSO_20_BASES_100_MB" | "SQLPERSO_20_BASES_200_MB" | "SQLPERSO_2_BASES_400_MB" | "SQLPERSO_2_BASES_800_MB" | "SQLPERSO_50_BASES_100_MB" | "SQLPERSO_50_BASES_200_MB" | "SQLPERSO_5_BASES_100_MB" | "SQLPERSO_5_BASES_200_MB" | "SQLPERSO_5_BASES_400_MB" | "SQLPERSO_5_BASES_800_MB"
            //price.Hosting.Web.SslEnum
            export type SslEnum = "HOSTEDSSL"
        }
    }
    export namespace Hpcspot {
        export namespace Account {
            //price.Hpcspot.Account.SubscriptionEnum
            export type SubscriptionEnum = "HPCSPOT"
        }
        export namespace Consumption {
            //price.Hpcspot.Consumption.JobEnum
            export type JobEnum = "16core.64gb" | "4core.32gb" | "8core.32gb"
            //price.Hpcspot.Consumption.ReservationEnum
            export type ReservationEnum = "12core.60gb.quadrok400" | "1core.4gb" | "1core.4gb.quadrok4000" | "2core.8gb" | "2core.8gb.quadrok4000" | "4core.15gb" | "4core.15gb.quadrok4000" | "8core.30gb" | "8core.30gb.quadrok4000"
            //price.Hpcspot.Consumption.SessionEnum
            export type SessionEnum = "16core.64gb" | "4core.32gb" | "8core.32gb"
        }
    }
    export namespace License {
        //price.License.OfficeEnum
        export type OfficeEnum = "officeBusiness" | "officeProPlus"
    }
    export namespace OverTheBox {
        //price.OverTheBox.OfferEnum
        export type OfferEnum = "plus.v1"
    }
    export namespace Pack {
        export namespace Xdsl {
            //price.Pack.Xdsl.InstallationEnum
            export type InstallationEnum = "enterprise" | "express" | "expressLite"
            //price.Pack.Xdsl.OffersEnum
            export type OffersEnum = "enterprise" | "express" | "expressLite"
            //price.Pack.Xdsl.OptionsEnum
            export type OptionsEnum = "enterpriseGtr" | "vdslFt"
        }
    }
    export namespace Saas {
        export namespace Csp2 {
            //price.Saas.Csp2.LicenseEnum
            export type LicenseEnum = "AzureActiveDirectoryBasic" | "AzureActiveDirectoryPremiumP1" | "Business" | "BusinessEssentials" | "BusinessPremium" | "EnterpriseE1" | "EnterpriseE3" | "EnterpriseK1" | "ExchangeOnlinePlan1" | "ProPlus" | "ProjectOnline" | "ProjectOnlineProfessional" | "VisioPro"
        }
    }
    export namespace Telephony {
        //price.Telephony.OfferEnum
        export type OfferEnum = "discovery" | "enterprise" | "enterpriseMobile" | "resellerEnterprise" | "resellerEnterpriseMobile"
    }
    export namespace Vps {
        export namespace Classic {
            //price.Vps.Classic.ModelEnum
            export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
        }
        export namespace Cloud {
            //price.Vps.Cloud.ModelEnum
            export type ModelEnum = "model1" | "model2" | "model3" | "model4" | "model5" | "model6"
            //price.Vps.Cloud.OptionEnum
            export type OptionEnum = "ftpbackup" | "ip" | "snapshot" | "veeam"
        }
        export namespace Lowlat {
            //price.Vps.Lowlat.ModelEnum
            export type ModelEnum = "model1" | "model2" | "model3"
        }
    }
    export namespace Xdsl {
        export namespace AddressMove {
            //price.Xdsl.AddressMove.FeeEnum
            export type FeeEnum = "keepPortability"
        }
        //price.Xdsl.InstallationEnum
        export type InstallationEnum = "backup"
        //price.Xdsl.OffersEnum
        export type OffersEnum = "backup"
        export namespace Options {
            //price.Xdsl.Options.InstallationEnum
            export type InstallationEnum = "ipv4"
            //price.Xdsl.Options.Ipv4Enum
            export type Ipv4Enum = "29"
            //price.Xdsl.Options.LineEnum
            export type LineEnum = "creation" | "partialToTotal"
        }
    }
}
// Apis harmony
// path /price
export interface Price {
    dedicated:  {
        nasha:  {
            model:  {
                [keys: string]: {
                    // GET /price/dedicated/nasha/model/{modelName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
        server:  {
            antiDDoSPro:  {
                [keys: string]: {
                    // GET /price/dedicated/server/antiDDoSPro/{commercialRange}
                    $get(): Promise<order.Price>;
                } | any
            }
            backupStorage:  {
                [keys: string]: {
                    // GET /price/dedicated/server/backupStorage/{capacity}
                    $get(): Promise<order.Price>;
                } | any
            }
            firewall:  {
                [keys: string]: {
                    // GET /price/dedicated/server/firewall/{firewallModel}
                    $get(): Promise<order.Price>;
                } | any
            }
            ip:  {
                [keys: string]: {
                    // GET /price/dedicated/server/ip/{routedTo}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
    }
    dedicatedCloud:  {
        '2013v1':  {
            bhs1a:  {
                filer:  {
                    hourly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                    monthly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                }
                host:  {
                    hourly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                    monthly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                }
            }
            rbx2a:  {
                filer:  {
                    hourly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                    monthly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                }
                host:  {
                    hourly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                    monthly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                }
            }
            sbg1a:  {
                filer:  {
                    hourly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                    monthly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                }
                host:  {
                    hourly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                    monthly:  {
                        [keys: string]: {
                            // GET /price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}
                            $get(): Promise<order.Price>;
                        } | any
                    }
                }
            }
        }
        '2014v1':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2014v2':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2016v1':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2016v2':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2016v3':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2016v4':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2016v5':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2016v6':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2016v7':  {
            bhs1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                enterprise:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2018v1':  {
            bhs1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            eri1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            lim1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            waw1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2018v2':  {
            bhs1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            eri1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            lim1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            waw1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2018v3':  {
            bhs1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            eri1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            lim1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            waw1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2018v4':  {
            bhs1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            eri1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            lim1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            waw1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2018v5':  {
            bhs1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            eri1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            lim1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            waw1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2018v6':  {
            bhs1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            eri1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            lim1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            waw1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
        '2018v7':  {
            bhs1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            eri1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            lim1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            rbx2b:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            sbg1a:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
            waw1c:  {
                infrastructure:  {
                    filer:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                    host:  {
                        hourly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                        monthly:  {
                            [keys: string]: {
                                // GET /price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}
                                $get(): Promise<order.Price>;
                            } | any
                        }
                    }
                }
            }
        }
    }
    domain:  {
        zone:  {
            option:  {
                [keys: string]: {
                    // GET /price/domain/zone/option/{optionName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
    }
    hosting:  {
        privateDatabase:  {
            [keys: string]: {
                // GET /price/hosting/privateDatabase/{privateDatabaseName}
                $get(): Promise<order.Price>;
            } | any
        }
        web:  {
            cdn:  {
                [keys: string]: {
                    // GET /price/hosting/web/cdn/{cdnName}
                    $get(): Promise<order.Price>;
                } | any
            }
            extraSqlPerso:  {
                [keys: string]: {
                    // GET /price/hosting/web/extraSqlPerso/{extraSqlPersoName}
                    $get(): Promise<order.Price>;
                } | any
            }
            ssl:  {
                [keys: string]: {
                    // GET /price/hosting/web/ssl/{sslName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
    }
    hpcspot:  {
        account:  {
            subscription:  {
                [keys: string]: {
                    // GET /price/hpcspot/account/subscription/{subscriptionName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
        consumption:  {
            job:  {
                [keys: string]: {
                    // GET /price/hpcspot/consumption/job/{reference}
                    $get(): Promise<order.Price>;
                } | any
            }
            reservation:  {
                [keys: string]: {
                    // GET /price/hpcspot/consumption/reservation/{reference}
                    $get(): Promise<order.Price>;
                } | any
            }
            session:  {
                [keys: string]: {
                    // GET /price/hpcspot/consumption/session/{reference}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
    }
    license:  {
        office:  {
            [keys: string]: {
                // GET /price/license/office/{officeName}
                $get(): Promise<order.Price>;
            } | any
        }
    }
    overTheBox:  {
        offer:  {
            [keys: string]: {
                // GET /price/overTheBox/offer/{offerName}
                $get(): Promise<order.Price>;
            } | any
        }
    }
    saas:  {
        csp2:  {
            license:  {
                [keys: string]: {
                    // GET /price/saas/csp2/license/{licenseName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
    }
    vps:  {
        '2013v1':  {
            classic:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2013v1/classic/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            cloud:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2013v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2013v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            lowlat:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2013v1/lowlat/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        '2014v1':  {
            classic:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2014v1/classic/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            cloud:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2014v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2014v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        '2015v1':  {
            cloud:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2015v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2015v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            cloudram:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2015v1/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2015v1/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            ssd:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2015v1/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2015v1/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        '2017v1':  {
            ssd:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2017v1/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2017v1/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        '2017v2':  {
            cloud:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2017v2/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2017v2/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            cloudram:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2017v2/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2017v2/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            ssd:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2017v2/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2017v2/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        '2017v3':  {
            cloud:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2017v3/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2017v3/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            cloudram:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2017v3/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2017v3/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            ssd:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2017v3/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2017v3/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        '2018v1':  {
            cloud:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2018v1/cloud/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2018v1/cloud/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            cloudram:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2018v1/cloudram/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2018v1/cloudram/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
            ssd:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2018v1/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2018v1/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        '2018v2':  {
            ssd:  {
                model:  {
                    [keys: string]: {
                        // GET /price/vps/2018v2/ssd/model/{modelName}
                        $get(): Promise<order.Price>;
                    } | any
                }
                option:  {
                    [keys: string]: {
                        // GET /price/vps/2018v2/ssd/option/{optionName}
                        $get(): Promise<order.Price>;
                    } | any
                }
            }
        }
        classic:  {
            model:  {
                [keys: string]: {
                    // GET /price/vps/classic/model/{modelName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
        cloud:  {
            model:  {
                [keys: string]: {
                    // GET /price/vps/cloud/model/{modelName}
                    $get(): Promise<order.Price>;
                } | any
            }
            option:  {
                [keys: string]: {
                    // GET /price/vps/cloud/option/{optionName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
        lowlat:  {
            model:  {
                [keys: string]: {
                    // GET /price/vps/lowlat/model/{modelName}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
    }
    xdsl:  {
        addressMove:  {
            fee:  {
                [keys: string]: {
                    // GET /price/xdsl/addressMove/fee/{option}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
        installation:  {
            [keys: string]: {
                // GET /price/xdsl/installation/{offer}
                $get(): Promise<order.Price>;
            } | any
        }
        offers:  {
            [keys: string]: {
                // GET /price/xdsl/offers/{offersName}
                $get(): Promise<order.Price>;
            } | any
        }
        options:  {
            installation:  {
                [keys: string]: {
                    // GET /price/xdsl/options/installation/{option}
                    $get(): Promise<order.Price>;
                } | any
            }
            ipv4:  {
                [keys: string]: {
                    // GET /price/xdsl/options/ipv4/{ipRange}
                    $get(): Promise<order.Price>;
                } | any
            }
            line:  {
                [keys: string]: {
                    // GET /price/xdsl/options/line/{lineAction}
                    $get(): Promise<order.Price>;
                } | any
            }
        }
    }
}
// Api
type PathsPriceGET = '/price/dedicated/nasha/model/{modelName}' |
  '/price/dedicated/server/antiDDoSPro/{commercialRange}' |
  '/price/dedicated/server/backupStorage/{capacity}' |
  '/price/dedicated/server/firewall/{firewallModel}' |
  '/price/dedicated/server/ip/{routedTo}' |
  '/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}' |
  '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}' |
  '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}' |
  '/price/domain/zone/option/{optionName}' |
  '/price/hosting/privateDatabase/{privateDatabaseName}' |
  '/price/hosting/web/cdn/{cdnName}' |
  '/price/hosting/web/extraSqlPerso/{extraSqlPersoName}' |
  '/price/hosting/web/ssl/{sslName}' |
  '/price/hpcspot/account/subscription/{subscriptionName}' |
  '/price/hpcspot/consumption/job/{reference}' |
  '/price/hpcspot/consumption/reservation/{reference}' |
  '/price/hpcspot/consumption/session/{reference}' |
  '/price/license/office/{officeName}' |
  '/price/overTheBox/offer/{offerName}' |
  '/price/saas/csp2/license/{licenseName}' |
  '/price/vps/2013v1/classic/model/{modelName}' |
  '/price/vps/2013v1/cloud/model/{modelName}' |
  '/price/vps/2013v1/cloud/option/{optionName}' |
  '/price/vps/2013v1/lowlat/model/{modelName}' |
  '/price/vps/2014v1/classic/model/{modelName}' |
  '/price/vps/2014v1/cloud/model/{modelName}' |
  '/price/vps/2014v1/cloud/option/{optionName}' |
  '/price/vps/2015v1/cloud/model/{modelName}' |
  '/price/vps/2015v1/cloud/option/{optionName}' |
  '/price/vps/2015v1/cloudram/model/{modelName}' |
  '/price/vps/2015v1/cloudram/option/{optionName}' |
  '/price/vps/2015v1/ssd/model/{modelName}' |
  '/price/vps/2015v1/ssd/option/{optionName}' |
  '/price/vps/2017v1/ssd/model/{modelName}' |
  '/price/vps/2017v1/ssd/option/{optionName}' |
  '/price/vps/2017v2/cloud/model/{modelName}' |
  '/price/vps/2017v2/cloud/option/{optionName}' |
  '/price/vps/2017v2/cloudram/model/{modelName}' |
  '/price/vps/2017v2/cloudram/option/{optionName}' |
  '/price/vps/2017v2/ssd/model/{modelName}' |
  '/price/vps/2017v2/ssd/option/{optionName}' |
  '/price/vps/2017v3/cloud/model/{modelName}' |
  '/price/vps/2017v3/cloud/option/{optionName}' |
  '/price/vps/2017v3/cloudram/model/{modelName}' |
  '/price/vps/2017v3/cloudram/option/{optionName}' |
  '/price/vps/2017v3/ssd/model/{modelName}' |
  '/price/vps/2017v3/ssd/option/{optionName}' |
  '/price/vps/2018v1/cloud/model/{modelName}' |
  '/price/vps/2018v1/cloud/option/{optionName}' |
  '/price/vps/2018v1/cloudram/model/{modelName}' |
  '/price/vps/2018v1/cloudram/option/{optionName}' |
  '/price/vps/2018v1/ssd/model/{modelName}' |
  '/price/vps/2018v1/ssd/option/{optionName}' |
  '/price/vps/2018v2/ssd/model/{modelName}' |
  '/price/vps/2018v2/ssd/option/{optionName}' |
  '/price/vps/classic/model/{modelName}' |
  '/price/vps/cloud/model/{modelName}' |
  '/price/vps/cloud/option/{optionName}' |
  '/price/vps/lowlat/model/{modelName}' |
  '/price/xdsl/addressMove/fee/{option}' |
  '/price/xdsl/installation/{offer}' |
  '/price/xdsl/offers/{offersName}' |
  '/price/xdsl/options/installation/{option}' |
  '/price/xdsl/options/ipv4/{ipRange}' |
  '/price/xdsl/options/line/{lineAction}';

export class ApiPrice extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Get the price of Nas HA offers
   * Get the price of Nas HA offers
   */
  public get(path: '/price/dedicated/nasha/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of anti-DDos Pro option
   * Get price of anti-DDos Pro option
   */
  public get(path: '/price/dedicated/server/antiDDoSPro/{commercialRange}', params: {commercialRange: string}): Promise<order.Price>;
  /**
   * Get price of backup storage offer
   * Get price of backup storage offer
   */
  public get(path: '/price/dedicated/server/backupStorage/{capacity}', params: {capacity: string}): Promise<order.Price>;
  /**
   * Get price of available firewall models
   * Get price of available firewall models
   */
  public get(path: '/price/dedicated/server/firewall/{firewallModel}', params: {firewallModel: string}): Promise<order.Price>;
  /**
   * Get price of IPs
   * Get price of IPs
   */
  public get(path: '/price/dedicated/server/ip/{routedTo}', params: {routedTo: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly filer ressources
   * Get price of dedicated Cloud hourly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly filer ressources
   * Get price of dedicated Cloud monthly filer ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud hourly host ressources
   * Get price of dedicated Cloud hourly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of dedicated Cloud monthly host ressources
   * Get price of dedicated Cloud monthly host ressources
   */
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: string}): Promise<order.Price>;
  /**
   * Get price of zone options
   * Get price of zone options
   */
  public get(path: '/price/domain/zone/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get the price for a private database
   * Get the price for a private database
   */
  public get(path: '/price/hosting/privateDatabase/{privateDatabaseName}', params: {privateDatabaseName: string}): Promise<order.Price>;
  /**
   * Get the price for cdn option
   * Get the price for cdn option
   */
  public get(path: '/price/hosting/web/cdn/{cdnName}', params: {cdnName: string}): Promise<order.Price>;
  /**
   * Get the price for extra sql perso option
   * Get the price for extra sql perso option
   */
  public get(path: '/price/hosting/web/extraSqlPerso/{extraSqlPersoName}', params: {extraSqlPersoName: string}): Promise<order.Price>;
  /**
   * Get the price for hosted ssl option
   * Get the price for hosted ssl option
   */
  public get(path: '/price/hosting/web/ssl/{sslName}', params: {sslName: string}): Promise<order.Price>;
  /**
   * Get the price of a HPC Spot Account for 1 month
   * Get the price of a HPC Spot Account for 1 month
   */
  public get(path: '/price/hpcspot/account/subscription/{subscriptionName}', params: {subscriptionName: string}): Promise<order.Price>;
  /**
   * Get the price of a JOB consumption for 1 hour
   * Get the price of a JOB consumption for 1 hour
   */
  public get(path: '/price/hpcspot/consumption/job/{reference}', params: {reference: string}): Promise<order.Price>;
  /**
   * Get the price of a RESERVATION consumption for 1 hour
   * Get the price of a RESERVATION consumption for 1 hour
   */
  public get(path: '/price/hpcspot/consumption/reservation/{reference}', params: {reference: string}): Promise<order.Price>;
  /**
   * Get the price of a SESSION consumption for 1 hour
   * Get the price of a SESSION consumption for 1 hour
   */
  public get(path: '/price/hpcspot/consumption/session/{reference}', params: {reference: string}): Promise<order.Price>;
  /**
   * Get the monthly price for an office license
   * Get the monthly price for an office license
   */
  public get(path: '/price/license/office/{officeName}', params: {officeName: string}): Promise<order.Price>;
  /**
   * Get the price of overTheBox offers
   * Get the price of overTheBox offers
   */
  public get(path: '/price/overTheBox/offer/{offerName}', params: {offerName: string}): Promise<order.Price>;
  /**
   * Get the monthly price for an Office 365 license
   * Get the monthly price for an Office 365 license
   */
  public get(path: '/price/saas/csp2/license/{licenseName}', params: {licenseName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2013
   * Get price of VPS Cloud 2013
   */
  public get(path: '/price/vps/2013v1/classic/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Classic 2013
   * Get price of VPS Classic 2013
   */
  public get(path: '/price/vps/2013v1/cloud/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2013
   * Get price of VPS Cloud Options 2013
   */
  public get(path: '/price/vps/2013v1/cloud/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Low Latency 2013
   * Get price of VPS Low Latency 2013
   */
  public get(path: '/price/vps/2013v1/lowlat/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Classic 2014
   * Get price of VPS Classic 2014
   */
  public get(path: '/price/vps/2014v1/classic/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2014
   * Get price of VPS Cloud 2014
   */
  public get(path: '/price/vps/2014v1/cloud/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2014
   * Get price of VPS Cloud Options 2014
   */
  public get(path: '/price/vps/2014v1/cloud/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2015
   * Get price of VPS Cloud 2015
   */
  public get(path: '/price/vps/2015v1/cloud/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  public get(path: '/price/vps/2015v1/cloud/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2016
   * Get price of VPS Cloud RAM 2016
   */
  public get(path: '/price/vps/2015v1/cloudram/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  public get(path: '/price/vps/2015v1/cloudram/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD 2015
   * Get price of VPS SSD 2015
   */
  public get(path: '/price/vps/2015v1/ssd/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  public get(path: '/price/vps/2015v1/ssd/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD Discovery 2017
   * Get price of VPS SSD Discovery 2017
   */
  public get(path: '/price/vps/2017v1/ssd/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD Discovery Options 2017
   * Get price of VPS SSD Discovery Options 2017
   */
  public get(path: '/price/vps/2017v1/ssd/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2017
   * Get price of VPS Cloud 2017
   */
  public get(path: '/price/vps/2017v2/cloud/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  public get(path: '/price/vps/2017v2/cloud/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2017
   * Get price of VPS Cloud RAM 2017
   */
  public get(path: '/price/vps/2017v2/cloudram/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  public get(path: '/price/vps/2017v2/cloudram/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD 2017
   * Get price of VPS SSD 2017
   */
  public get(path: '/price/vps/2017v2/ssd/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  public get(path: '/price/vps/2017v2/ssd/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2017
   * Get price of VPS Cloud 2017
   */
  public get(path: '/price/vps/2017v3/cloud/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  public get(path: '/price/vps/2017v3/cloud/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2017
   * Get price of VPS Cloud RAM 2017
   */
  public get(path: '/price/vps/2017v3/cloudram/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  public get(path: '/price/vps/2017v3/cloudram/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD 2017
   * Get price of VPS SSD 2017
   */
  public get(path: '/price/vps/2017v3/ssd/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  public get(path: '/price/vps/2017v3/ssd/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud 2017
   * Get price of VPS Cloud 2017
   */
  public get(path: '/price/vps/2018v1/cloud/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options 2015/2016
   * Get price of VPS Cloud Options 2015/2016
   */
  public get(path: '/price/vps/2018v1/cloud/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM 2017
   * Get price of VPS Cloud RAM 2017
   */
  public get(path: '/price/vps/2018v1/cloudram/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud RAM Options 2015/2016
   * Get price of VPS Cloud RAM Options 2015/2016
   */
  public get(path: '/price/vps/2018v1/cloudram/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD 2018
   * Get price of VPS SSD 2018
   */
  public get(path: '/price/vps/2018v1/ssd/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD Options 2015/2016
   * Get price of VPS SSD Options 2015/2016
   */
  public get(path: '/price/vps/2018v1/ssd/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD APAC
   * Get price of VPS SSD APAC
   */
  public get(path: '/price/vps/2018v2/ssd/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS SSD APAC Options
   * Get price of VPS SSD APAC Options
   */
  public get(path: '/price/vps/2018v2/ssd/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Classic
   * Get price of VPS Classic
   */
  public get(path: '/price/vps/classic/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud
   * Get price of VPS Cloud
   */
  public get(path: '/price/vps/cloud/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Cloud Options
   * Get price of VPS Cloud Options
   */
  public get(path: '/price/vps/cloud/option/{optionName}', params: {optionName: string}): Promise<order.Price>;
  /**
   * Get price of VPS Low Latency
   * Get price of VPS Low Latency
   */
  public get(path: '/price/vps/lowlat/model/{modelName}', params: {modelName: string}): Promise<order.Price>;
  /**
   * Get the price of address move option fee
   * Get the price of address move option fee
   */
  public get(path: '/price/xdsl/addressMove/fee/{option}', params: {option: string}): Promise<order.Price>;
  /**
   * Get the price of options installation fee
   * Get the price of options installation fee
   */
  public get(path: '/price/xdsl/installation/{offer}', params: {offer: string}): Promise<order.Price>;
  /**
   * Get the price of xdsl offers
   * Get the price of xdsl offers
   */
  public get(path: '/price/xdsl/offers/{offersName}', params: {offersName: string}): Promise<order.Price>;
  /**
   * Get the price of options installation fee
   * Get the price of options installation fee
   */
  public get(path: '/price/xdsl/options/installation/{option}', params: {option: string}): Promise<order.Price>;
  /**
   * Get the price of IPv4 options
   * Get the price of IPv4 options
   */
  public get(path: '/price/xdsl/options/ipv4/{ipRange}', params: {ipRange: string}): Promise<order.Price>;
  /**
   * Get the price of line action
   * Get the price of line action
   */
  public get(path: '/price/xdsl/options/line/{lineAction}', params: {lineAction: string}): Promise<order.Price>;
  public get(path: PathsPriceGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
}
}