import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /overTheBox Models
 * Source: https://eu.api.ovh.com/1.0/overTheBox.json
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
export namespace otb {
    /**
     * Statistics Period
     * type fullname: otb.DeviceStatisticsPeriodEnum
     */
    export type DeviceStatisticsPeriodEnum = "daily" | "hourly" | "monthly" | "weekly"
    /**
     * Serie Name
     * type fullname: otb.DeviceStatisticsTypeEnum
     */
    export type DeviceStatisticsTypeEnum = "load" | "memory_free" | "traffic"
    /**
     * Serie Unit
     * type fullname: otb.DeviceStatisticsUnitEnum
     */
    export type DeviceStatisticsUnitEnum = "bps" | "byte" | "n/a"
    export namespace device {
        /**
         * Device Statistics Datapoints
         * interface fullName: otb.device.statistics.statistics
         */
        export interface statistics {
            name: string;
            points: otb.device.statistics.point[];
            tags: otb.device.statistics.tag[];
            unit: otb.DeviceStatisticsUnitEnum;
        }
        export namespace statistics {
            /**
             * Statistics Datapoint
             * interface fullName: otb.device.statistics.point.point
             */
            export interface point {
                timestamp: number;
                value?: number;
            }
            /**
             * Tags for the metrics
             * interface fullName: otb.device.statistics.tag.tag
             */
            export interface tag {
                name: string;
                value?: string;
            }
        }
    }
}
export namespace overTheBox {
    /**
     * Status of a task.
     * type fullname: overTheBox.ActionStatusEnum
     */
    export type ActionStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Device action
     * interface fullName: overTheBox.AvailableDeviceAction.AvailableDeviceAction
     */
    export interface AvailableDeviceAction {
        description: string;
        name: string;
    }
    /**
     * Migration offer
     * interface fullName: overTheBox.AvailableMigrationOffer.AvailableMigrationOffer
     */
    export interface AvailableMigrationOffer {
        currentOfferPrice: order.Price;
        description: string;
        engagementMonths: number;
        hardwareAvailable: boolean;
        offer: string;
        price: order.Price;
    }
    /**
     * Status of the service
     * type fullname: overTheBox.AvailableStatusEnum
     */
    export type AvailableStatusEnum = "disabled" | "enabled"
    /**
     * Backup
     * interface fullName: overTheBox.Backup.Backup
     */
    export interface Backup {
        backupId: string;
        createdAt: string;
        deviceActionId?: string;
    }
    /**
     * Device
     * interface fullName: overTheBox.Device.Device
     */
    export interface Device {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
        networkInterfaces: overTheBox.DeviceInterface[];
        publicIp: string;
        systemVersion: string;
        version: string;
    }
    /**
     * Device action
     * interface fullName: overTheBox.DeviceAction.DeviceAction
     */
    export interface DeviceAction {
        actionId: string;
        createdAt: string;
        details: string;
        name: string;
        status: overTheBox.ActionStatusEnum;
        todoDate: string;
        updatedAt: string;
    }
    /**
     * A device for registration
     * interface fullName: overTheBox.DeviceForRegistration.DeviceForRegistration
     */
    export interface DeviceForRegistration {
        activated: boolean;
        deviceId: string;
        lastSeen: string;
    }
    /**
     * Infos about a network interface
     * interface fullName: overTheBox.DeviceInterface.DeviceInterface
     */
    export interface DeviceInterface {
        device?: string;
        dnsServers?: string[];
        gateway?: string;
        ip?: string;
        multipathStatus: overTheBox.MultipathStatusEnum;
        name: string;
        netmask?: string;
        publicIp?: string;
    }
    /**
     * Parameters required to query metrics from OpenTSDB
     * interface fullName: overTheBox.GraphEndpoint.GraphEndpoint
     */
    export interface GraphEndpoint {
        host: string;
        readToken: string;
        readTokenID: string;
    }
    /**
     * Hardware properties
     * interface fullName: overTheBox.Hardware.Hardware
     */
    export interface Hardware {
        canBeLinkedToService: boolean;
        mac?: string;
        model: string;
        name: string;
        serial: string;
    }
    /**
     * Status of a MPTCP Interface.
     * type fullname: overTheBox.MultipathStatusEnum
     */
    export type MultipathStatusEnum = "backup" | "handover" | "master" | "off" | "on"
    /**
     * If authorized, a remote access will expose a port, allowing an access to the device remotely
     * interface fullName: overTheBox.RemoteAccess.RemoteAccess
     */
    export interface RemoteAccess {
        accepted: boolean;
        askDate: string;
        authorizedBy?: string;
        connectionInfos: overTheBox.RemoteAccessConnectionInfos;
        expirationDate: string;
        exposedPort: number;
        remoteAccessId: string;
        remoteUserInfos: overTheBox.RemoteAccessUserInfos;
        status: overTheBox.RemoteAccessStatusEnum;
    }
    /**
     * All the infos needed to connect yourself to your OTB
     * interface fullName: overTheBox.RemoteAccessConnectionInfos.RemoteAccessConnectionInfos
     */
    export interface RemoteAccessConnectionInfos {
        ip?: string;
        port?: number;
    }
    /**
     * Status of the remote access.
     * type fullname: overTheBox.RemoteAccessStatusEnum
     */
    export type RemoteAccessStatusEnum = "active" | "creating" | "deleted" | "deleting" | "pendingValidation" | "toDelete"
    /**
     * Infos about the remote user
     * interface fullName: overTheBox.RemoteAccessUserInfos.RemoteAccessUserInfos
     */
    export interface RemoteAccessUserInfos {
        ip: string;
        publicKey?: string;
        user: string;
    }
    /**
     * Service
     * interface fullName: overTheBox.Service.Service
     */
    export interface Service {
        SOCKSProxyEnabled: boolean;
        autoMTU: overTheBox.AvailableStatusEnum;
        configurationMode: overTheBox.ServiceConfigurationModeEnum;
        customerDescription?: string;
        graphEndpoint?: overTheBox.GraphEndpoint;
        releaseChannel: string;
        serviceName: string;
        status: overTheBox.ServiceStatusEnum;
        tunnelMode: overTheBox.TunnelModeEnum;
    }
    /**
     * Configuration mode of the service
     * type fullname: overTheBox.ServiceConfigurationModeEnum
     */
    export type ServiceConfigurationModeEnum = "autoconfigure" | "local"
    /**
     * Status of the service.
     * type fullname: overTheBox.ServiceStatusEnum
     */
    export type ServiceStatusEnum = "active" | "creating" | "deleted" | "suspended" | "toCreate" | "toDelete"
    /**
     * Task
     * interface fullName: overTheBox.Task.Task
     */
    export interface Task {
        name: string;
        status: overTheBox.TaskStatusEnum;
        taskId: string;
    }
    /**
     * Status of a task.
     * type fullname: overTheBox.TaskStatusEnum
     */
    export type TaskStatusEnum = "doing" | "done" | "error" | "todo"
    /**
     * Temporary url informations
     * interface fullName: overTheBox.TemporaryLogsLink.TemporaryLogsLink
     */
    export interface TemporaryLogsLink {
        expirationDate: string;
        url: string;
    }
    /**
     * Tunnel mode of the service.
     * type fullname: overTheBox.TunnelModeEnum
     */
    export type TunnelModeEnum = "glorytun" | "glorytun_hybrid" | "glorytun_mud"
}
export namespace overthebox {
    export namespace configuration {
        /**
         * Status of the configuration
         * type fullname: overthebox.configuration.StatusEnum
         */
        export type StatusEnum = "applying" | "ok" | "problem" | "to_apply"
        export namespace dhcp {
            /**
             * DHCP configuration
             * interface fullName: overthebox.configuration.dhcp.Config.Config
             */
            export interface Config {
                configuration: overthebox.configuration.types.dhcp.Config;
                id: string;
                priority: number;
                status: overthebox.configuration.StatusEnum;
            }
            /**
             * DHCP static lease
             * interface fullName: overthebox.configuration.dhcp.StaticLease.StaticLease
             */
            export interface StaticLease {
                configuration: overthebox.configuration.types.dhcp.StaticLease;
                id: string;
                priority: number;
                status: overthebox.configuration.StatusEnum;
            }
        }
        export namespace dns {
            /**
             * DNS local domain
             * interface fullName: overthebox.configuration.dns.LocalDomain.LocalDomain
             */
            export interface LocalDomain {
                configuration: overthebox.configuration.types.dns.LocalDomain;
                id: string;
                priority: number;
                status: overthebox.configuration.StatusEnum;
            }
            /**
             * DNS nameserver
             * interface fullName: overthebox.configuration.dns.Nameserver.Nameserver
             */
            export interface Nameserver {
                configuration: overthebox.configuration.types.dns.Nameserver;
                id: string;
                priority: number;
                status: overthebox.configuration.StatusEnum;
            }
        }
        export namespace firewall {
            /**
             * Protocol family to match
             * type fullname: overthebox.configuration.firewall.ProtocolEnum
             */
            export type ProtocolEnum = "ah" | "all" | "ax.25" | "dccp" | "ddp" | "egp" | "eigrp" | "encap" | "esp" | "etherip" | "fc" | "ggp" | "gre" | "hmp" | "hopopt" | "icmp" | "idpr-cmtp" | "idrp" | "igmp" | "igp" | "ip" | "ip-encap" | "ipcomp" | "ipip" | "ipsec-ah" | "ipsec-esp" | "ipv6" | "ipv6-frag" | "ipv6-icmp" | "ipv6-nonxt" | "ipv6-opts" | "ipv6-route" | "isis" | "iso-tp4" | "l2tp" | "ospfigp" | "pim" | "pup" | "rdp" | "rspf" | "rsvp" | "sctp" | "skip" | "st" | "tcp" | "tcpudp" | "udp" | "udplite" | "vmtp" | "vrrp" | "xns-idp" | "xtp"
            /**
             * Firewall rule
             * interface fullName: overthebox.configuration.firewall.Redirect.Redirect
             */
            export interface Redirect {
                configuration: overthebox.configuration.types.firewall.Redirect;
                id: string;
                priority: number;
                status: overthebox.configuration.StatusEnum;
            }
            /**
             * Firewall rule
             * interface fullName: overthebox.configuration.firewall.Rule.Rule
             */
            export interface Rule {
                configuration: overthebox.configuration.types.firewall.Rule;
                id: string;
                priority: number;
                status: overthebox.configuration.StatusEnum;
            }
            export namespace redirect {
                /**
                 * Redirection NAT target
                 * type fullname: overthebox.configuration.firewall.redirect.TargetEnum
                 */
                export type TargetEnum = "DNAT" | "SNAT"
            }
            export namespace rule {
                /**
                 * Protocol family to match
                 * type fullname: overthebox.configuration.firewall.rule.FamilyEnum
                 */
                export type FamilyEnum = "any" | "ipv4" | "ipv6"
                /**
                 * Target action
                 * type fullname: overthebox.configuration.firewall.rule.TargetEnum
                 */
                export type TargetEnum = "ACCEPT" | "DROP" | "MARK" | "NOTRACK" | "REJECT"
            }
        }
        export namespace network {
            /**
             * Network interface
             * interface fullName: overthebox.configuration.network.Interface.Interface
             */
            export interface Interface {
                configuration: overthebox.configuration.types.network.Interface;
                id: string;
                priority: number;
                status: overthebox.configuration.StatusEnum;
            }
            export namespace interf {
                /**
                 * Multipath mode
                 * type fullname: overthebox.configuration.network.interf.MultipathEnum
                 */
                export type MultipathEnum = "backup" | "handover" | "master" | "off" | "on"
                /**
                 * IP allocation protocol of the network interface
                 * type fullname: overthebox.configuration.network.interf.ProtoEnum
                 */
                export type ProtoEnum = "dhcp" | "dhcpv6" | "static"
                /**
                 * Type of the network interface
                 * type fullname: overthebox.configuration.network.interf.TypeEnum
                 */
                export type TypeEnum = "bridge" | "inet" | "inet6"
            }
        }
        export namespace types {
            export namespace dhcp {
                /**
                 * DHCP configuration
                 * interface fullName: overthebox.configuration.types.dhcp.Config.Config
                 */
                export interface Config {
                    interface: string;
                    leaseDuration: number;
                    offset: number;
                    poolSize: number;
                }
                /**
                 * DHCP static lease
                 * interface fullName: overthebox.configuration.types.dhcp.StaticLease.StaticLease
                 */
                export interface StaticLease {
                    hostname: string;
                    ip: string;
                    mac: string;
                }
            }
            export namespace dns {
                /**
                 * DNS local domain
                 * interface fullName: overthebox.configuration.types.dns.LocalDomain.LocalDomain
                 */
                export interface LocalDomain {
                    hostname: string;
                    ip: string;
                }
                /**
                 * DNS nameserver
                 * interface fullName: overthebox.configuration.types.dns.Nameserver.Nameserver
                 */
                export interface Nameserver {
                    server: string;
                }
            }
            export namespace firewall {
                /**
                 * Firewall redirect
                 * interface fullName: overthebox.configuration.types.firewall.Redirect.Redirect
                 */
                export interface Redirect {
                    destinationIp?: string;
                    destinationPort?: string;
                    destinationZone?: string;
                    name: string;
                    protocol?: overthebox.configuration.firewall.ProtocolEnum;
                    sourceDestinationIp?: string;
                    sourceDestinationPort?: string;
                    sourceIp?: string;
                    sourcePort?: number;
                    sourceZone: string;
                    target?: overthebox.configuration.firewall.redirect.TargetEnum;
                }
                /**
                 * Firewall rule
                 * interface fullName: overthebox.configuration.types.firewall.Rule.Rule
                 */
                export interface Rule {
                    destinationIp?: string;
                    destinationPort?: string;
                    destinationZone?: string;
                    family?: overthebox.configuration.firewall.rule.FamilyEnum;
                    name?: string;
                    protocol?: overthebox.configuration.firewall.ProtocolEnum;
                    sourceIp?: string;
                    sourcePort?: string;
                    sourceZone: string;
                    target: overthebox.configuration.firewall.rule.TargetEnum;
                }
            }
            export namespace network {
                /**
                 * Network interface
                 * interface fullName: overthebox.configuration.types.network.Interface.Interface
                 */
                export interface Interface {
                    gateway?: string;
                    ifname: string;
                    interfaceName: string;
                    ip?: string;
                    ipv6?: boolean;
                    mtu?: number;
                    multipath?: overthebox.configuration.network.interf.MultipathEnum;
                    netmask?: string;
                    protocol?: overthebox.configuration.network.interf.ProtoEnum;
                    routingTable?: string;
                    type?: overthebox.configuration.network.interf.TypeEnum;
                }
            }
        }
    }
}
export namespace price {
    export namespace OverTheBox {
        /**
         * Enum of Offers
         * type fullname: price.OverTheBox.OfferEnum
         */
        export type OfferEnum = "plus.v1"
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
    export interface Service {
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}

/**
 * END API /overTheBox Models
 */
export function proxyOverTheBox(ovhEngine: OvhRequestable): OverTheBox {
    return buildOvhProxy(ovhEngine, '/overTheBox');
}
export default proxyOverTheBox;
/**
 * Api model for /overTheBox
 */
export interface OverTheBox {
    /**
     * List available services
     * GET /overTheBox
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    availableOffers: {
        /**
         * List the available offers for the new call
         * GET /overTheBox/availableOffers
         */
        $get(): Promise<price.OverTheBox.OfferEnum[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
    devices: {
        /**
         * Get the list of devices connected from the same IP address
         * POST /overTheBox/devices
         */
        $post(): Promise<overTheBox.DeviceForRegistration[]>;
    }
    hardware: {
        /**
         * List available services
         * GET /overTheBox/hardware
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        available: {
            /**
             * List hardware that can be linked to a service
             * GET /overTheBox/hardware/available
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(hardwareName: string): {
            /**
             * Get this object properties
             * GET /overTheBox/hardware/{hardwareName}
             */
            $get(): Promise<overTheBox.Hardware>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    $(serviceName: string): {
        /**
         * Resiliate a service
         * DELETE /overTheBox/{serviceName}
         */
        $delete(): Promise<void>;
        /**
         * Get this object properties
         * GET /overTheBox/{serviceName}
         */
        $get(): Promise<overTheBox.Service>;
        /**
         * Alter this object properties
         * PUT /overTheBox/{serviceName}
         */
        $put(params?: { SOCKSProxyEnabled?: boolean, autoMTU?: overTheBox.AvailableStatusEnum, configurationMode?: overTheBox.ServiceConfigurationModeEnum, customerDescription?: string, graphEndpoint?: overTheBox.GraphEndpoint, releaseChannel?: string, serviceName?: string, status?: overTheBox.ServiceStatusEnum, tunnelMode?: overTheBox.TunnelModeEnum }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        autoMTU: {
            /**
             * Change the value of autoMTU
             * PUT /overTheBox/{serviceName}/autoMTU
             */
            $put(params: { mtuAuto: overTheBox.AvailableStatusEnum }): Promise<void>;
        }
        availableReleaseChannels: {
            /**
             * List available release channels for this service
             * GET /overTheBox/{serviceName}/availableReleaseChannels
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        backups: {
            /**
             * List of backups for this service
             * GET /overTheBox/{serviceName}/backups
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(backupId: string): {
                /**
                 * Delete a backup
                 * DELETE /overTheBox/{serviceName}/backups/{backupId}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /overTheBox/{serviceName}/backups/{backupId}
                 */
                $get(): Promise<overTheBox.Backup>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        cancelResiliation: {
            /**
             * Cancel the resiliation of the Service
             * POST /overTheBox/{serviceName}/cancelResiliation
             */
            $post(): Promise<void>;
        }
        changeContact: {
            /**
             * Launch a contact change procedure
             * POST /overTheBox/{serviceName}/changeContact
             */
            $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
        }
        configuration: {
            dhcp: {
                config: {
                    /**
                     * Return the list of DHCP configurations
                     * GET /overTheBox/{serviceName}/configuration/dhcp/config
                     */
                    $get(): Promise<overthebox.configuration.dhcp.Config[]>;
                    /**
                     * Create a DHCP configuration
                     * POST /overTheBox/{serviceName}/configuration/dhcp/config
                     */
                    $post(params?: { configuration?: overthebox.configuration.types.dhcp.Config, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dhcp.Config>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Delete a DHCP configuration
                         * DELETE /overTheBox/{serviceName}/configuration/dhcp/config/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Return the specified DHCP configuration
                         * GET /overTheBox/{serviceName}/configuration/dhcp/config/{id}
                         */
                        $get(): Promise<overthebox.configuration.dhcp.Config>;
                        /**
                         * Update a DHCP configuration
                         * PUT /overTheBox/{serviceName}/configuration/dhcp/config/{id}
                         */
                        $put(params?: { configuration?: overthebox.configuration.types.dhcp.Config, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dhcp.Config>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                staticLease: {
                    /**
                     * Return the list of DHCP static leases
                     * GET /overTheBox/{serviceName}/configuration/dhcp/staticLease
                     */
                    $get(): Promise<overthebox.configuration.dhcp.StaticLease[]>;
                    /**
                     * Create a DHCP static lease
                     * POST /overTheBox/{serviceName}/configuration/dhcp/staticLease
                     */
                    $post(params?: { configuration?: overthebox.configuration.types.dhcp.StaticLease, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dhcp.StaticLease>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Delete a DHCP static lease
                         * DELETE /overTheBox/{serviceName}/configuration/dhcp/staticLease/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Return the specified DHCP static lease
                         * GET /overTheBox/{serviceName}/configuration/dhcp/staticLease/{id}
                         */
                        $get(): Promise<overthebox.configuration.dhcp.StaticLease>;
                        /**
                         * Update a DHCP static lease
                         * PUT /overTheBox/{serviceName}/configuration/dhcp/staticLease/{id}
                         */
                        $put(params?: { configuration?: overthebox.configuration.types.dhcp.StaticLease, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dhcp.StaticLease>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            dns: {
                localDomain: {
                    /**
                     * Return the list of DNS local domains
                     * GET /overTheBox/{serviceName}/configuration/dns/localDomain
                     */
                    $get(): Promise<overthebox.configuration.dns.LocalDomain[]>;
                    /**
                     * Create a DNS local domain
                     * POST /overTheBox/{serviceName}/configuration/dns/localDomain
                     */
                    $post(params?: { configuration?: overthebox.configuration.types.dns.LocalDomain, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dns.LocalDomain>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Delete a DNS local domain
                         * DELETE /overTheBox/{serviceName}/configuration/dns/localDomain/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Return the specified DNS local domain
                         * GET /overTheBox/{serviceName}/configuration/dns/localDomain/{id}
                         */
                        $get(): Promise<overthebox.configuration.dns.LocalDomain>;
                        /**
                         * Update a DNS local domain
                         * PUT /overTheBox/{serviceName}/configuration/dns/localDomain/{id}
                         */
                        $put(params?: { configuration?: overthebox.configuration.types.dns.LocalDomain, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dns.LocalDomain>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                nameserver: {
                    /**
                     * Return the list of DNS nameservers
                     * GET /overTheBox/{serviceName}/configuration/dns/nameserver
                     */
                    $get(): Promise<overthebox.configuration.dns.Nameserver[]>;
                    /**
                     * Create a DNS nameserver
                     * POST /overTheBox/{serviceName}/configuration/dns/nameserver
                     */
                    $post(params?: { configuration?: overthebox.configuration.types.dns.Nameserver, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dns.Nameserver>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Delete a DNS nameserver
                         * DELETE /overTheBox/{serviceName}/configuration/dns/nameserver/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get a DNS nameserver configuration
                         * GET /overTheBox/{serviceName}/configuration/dns/nameserver/{id}
                         */
                        $get(): Promise<overthebox.configuration.dns.Nameserver>;
                        /**
                         * Update a DNS nameserver configuration
                         * PUT /overTheBox/{serviceName}/configuration/dns/nameserver/{id}
                         */
                        $put(params?: { configuration?: overthebox.configuration.types.dns.Nameserver, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.dns.Nameserver>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            firewall: {
                redirect: {
                    /**
                     * Return the list of firewall redirects
                     * GET /overTheBox/{serviceName}/configuration/firewall/redirect
                     */
                    $get(): Promise<overthebox.configuration.firewall.Redirect[]>;
                    /**
                     * Create a firewall redirect
                     * POST /overTheBox/{serviceName}/configuration/firewall/redirect
                     */
                    $post(params?: { configuration?: overthebox.configuration.types.firewall.Redirect, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.firewall.Redirect>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Delete a firewall redirect
                         * DELETE /overTheBox/{serviceName}/configuration/firewall/redirect/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get a firewall redirect
                         * GET /overTheBox/{serviceName}/configuration/firewall/redirect/{id}
                         */
                        $get(): Promise<overthebox.configuration.firewall.Redirect>;
                        /**
                         * Update a firewall redirect
                         * PUT /overTheBox/{serviceName}/configuration/firewall/redirect/{id}
                         */
                        $put(params?: { configuration?: overthebox.configuration.types.firewall.Redirect, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.firewall.Redirect>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                rule: {
                    /**
                     * Return the list of firewall rules
                     * GET /overTheBox/{serviceName}/configuration/firewall/rule
                     */
                    $get(): Promise<overthebox.configuration.firewall.Rule[]>;
                    /**
                     * Create a firewall rule
                     * POST /overTheBox/{serviceName}/configuration/firewall/rule
                     */
                    $post(params?: { configuration?: overthebox.configuration.types.firewall.Rule, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.firewall.Rule>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Delete a firewall rule
                         * DELETE /overTheBox/{serviceName}/configuration/firewall/rule/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get a firewall rule
                         * GET /overTheBox/{serviceName}/configuration/firewall/rule/{id}
                         */
                        $get(): Promise<overthebox.configuration.firewall.Rule>;
                        /**
                         * Update a firewall rule
                         * PUT /overTheBox/{serviceName}/configuration/firewall/rule/{id}
                         */
                        $put(params?: { configuration?: overthebox.configuration.types.firewall.Rule, id?: string, priority?: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.firewall.Rule>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            network: {
                interface: {
                    /**
                     * Return the list of network interfaces
                     * GET /overTheBox/{serviceName}/configuration/network/interface
                     */
                    $get(): Promise<overthebox.configuration.network.Interface[]>;
                    /**
                     * Create a network interface
                     * POST /overTheBox/{serviceName}/configuration/network/interface
                     */
                    $post(params: { configuration: overthebox.configuration.types.network.Interface, id?: string, priority: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.network.Interface>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Delete a network interface
                         * DELETE /overTheBox/{serviceName}/configuration/network/interface/{id}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get a network interface
                         * GET /overTheBox/{serviceName}/configuration/network/interface/{id}
                         */
                        $get(): Promise<overthebox.configuration.network.Interface>;
                        /**
                         * Update a network interface
                         * PUT /overTheBox/{serviceName}/configuration/network/interface/{id}
                         */
                        $put(params: { configuration: overthebox.configuration.types.network.Interface, id?: string, priority: number, status?: overthebox.configuration.StatusEnum }): Promise<overthebox.configuration.network.Interface>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
        }
        device: {
            /**
             * Unlink a device from a service
             * DELETE /overTheBox/{serviceName}/device
             */
            $delete(): Promise<void>;
            /**
             * Get this object properties
             * GET /overTheBox/{serviceName}/device
             */
            $get(): Promise<overTheBox.Device>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            actions: {
                /**
                 * List of actions scheduled for this device
                 * GET /overTheBox/{serviceName}/device/actions
                 */
                $get(params?: { name?: string, status?: overTheBox.ActionStatusEnum }): Promise<string[]>;
                /**
                 * Create a device action on the device
                 * POST /overTheBox/{serviceName}/device/actions
                 */
                $post(params: { name: string }): Promise<overTheBox.DeviceAction>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(actionId: string): {
                    /**
                     * Get this object properties
                     * GET /overTheBox/{serviceName}/device/actions/{actionId}
                     */
                    $get(): Promise<overTheBox.DeviceAction>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            availableActions: {
                /**
                 * List the available device actions
                 * GET /overTheBox/{serviceName}/device/availableActions
                 */
                $get(): Promise<overTheBox.AvailableDeviceAction[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            backup: {
                /**
                 * Create an action to generate a backup
                 * POST /overTheBox/{serviceName}/device/backup
                 */
                $post(): Promise<overTheBox.DeviceAction>;
            }
            logs: {
                /**
                 * Generate a temporary url to retrieve device logs
                 * POST /overTheBox/{serviceName}/device/logs
                 */
                $post(): Promise<overTheBox.TemporaryLogsLink>;
            }
            restoreBackup: {
                /**
                 * Create a group of actions to restore a given backup
                 * POST /overTheBox/{serviceName}/device/restoreBackup
                 */
                $post(params: { backupId: string }): Promise<overTheBox.DeviceAction[]>;
            }
        }
        linkDevice: {
            /**
             * Link a device to this service
             * POST /overTheBox/{serviceName}/linkDevice
             */
            $post(params: { deviceId: string }): Promise<void>;
        }
        linkHardware: {
            /**
             * Link an available hardware to this service
             * POST /overTheBox/{serviceName}/linkHardware
             */
            $post(params: { hardwareName: string }): Promise<void>;
        }
        migration: {
            offers: {
                /**
                 * List all available offers one can migrate to
                 * GET /overTheBox/{serviceName}/migration/offers
                 */
                $get(): Promise<overTheBox.AvailableMigrationOffer[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        remoteAccesses: {
            /**
             * List of remote accesses for the service
             * GET /overTheBox/{serviceName}/remoteAccesses
             */
            $get(): Promise<string[]>;
            /**
             * Create a new remote access for the service
             * POST /overTheBox/{serviceName}/remoteAccesses
             */
            $post(params: { allowedIp?: string, expirationDate?: string, exposedPort: number, publicKey?: string }): Promise<overTheBox.RemoteAccess>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(remoteAccessId: string): {
                /**
                 * Delete a remote access
                 * DELETE /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}
                 */
                $get(): Promise<overTheBox.RemoteAccess>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                authorize: {
                    /**
                     * Authorize the remote access
                     * POST /overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize
                     */
                    $post(): Promise<void>;
                }
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /overTheBox/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /overTheBox/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        statistics: {
            /**
             * Get statistics for an OTB device
             * GET /overTheBox/{serviceName}/statistics
             */
            $get(params: { metricsType: otb.DeviceStatisticsTypeEnum, period?: otb.DeviceStatisticsPeriodEnum }): Promise<otb.device.statistics[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        tasks: {
            /**
             * List of tasks scheduled for this service
             * GET /overTheBox/{serviceName}/tasks
             */
            $get(params?: { name?: string, status?: overTheBox.TaskStatusEnum }): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: string): {
                /**
                 * Get this object properties
                 * GET /overTheBox/{serviceName}/tasks/{taskId}
                 */
                $get(): Promise<overTheBox.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
    };
}
