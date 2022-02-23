import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/server Models
 * Source: https://ca.api.kimsufi.com/1.0/dedicated/server.json
 */
export namespace complexType {
    /**
     * Chart
     * interface fullName: complexType.ChartReturn.ChartReturn
     */
    export interface ChartReturn {
        unit?: string;
        values?: complexType.ChartTimestampValue[];
    }
    /**
     * A timestamp associated to a value
     * interface fullName: complexType.ChartTimestampValue.ChartTimestampValue
     */
    export interface ChartTimestampValue {
        timestamp: number;
        value?: number;
    }
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValueCanBeNull.SafeKeyValueCanBeNull
     */
    export interface SafeKeyValueCanBeNull<T> {
        key?: string;
        value?: T;
    }
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    /**
     * CheckSum type
     * type fullname: dedicated.CheckSumTypesEnum
     */
    export type CheckSumTypesEnum = "md5" | "sha1" | "sha256" | "sha512"
    /**
     * ovh datacenter
     * type fullname: dedicated.DatacenterEnum
     */
    export type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "bhs8" | "dc1" | "eri1" | "gra1" | "gra2" | "gra3" | "gsw" | "hil1" | "lim1" | "lim3" | "p19" | "rbx-hz" | "rbx1" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "rbx8" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sbg5" | "sgp1" | "syd1" | "syd2" | "vin1" | "waw1"
    /**
     * Type of your image
     * type fullname: dedicated.ImageTypesEnum
     */
    export type ImageTypesEnum = "qcow2" | "raw"
    /**
     * List of operation type
     * type fullname: dedicated.OperationFunctionEnum
     */
    export type OperationFunctionEnum = "bmc/javaKvm" | "bmc/restart" | "bmc/revokeSessions" | "bmc/sshSol" | "bmc/testPassword" | "bmc/testPing" | "bmc/testWeb" | "bmc/webKvm" | "bmc/webSol"
    /**
     * Intervention status
     * type fullname: dedicated.PlannedInterventionStatusEnum
     */
    export type PlannedInterventionStatusEnum = "doing" | "done" | "todo"
    /**
     * A time slot for a planned intervention
     * interface fullName: dedicated.PlannedInterventionTimeSlot.PlannedInterventionTimeSlot
     */
    export interface PlannedInterventionTimeSlot {
        endDate: string;
        startDate: string;
    }
    /**
     * Intervention type
     * type fullname: dedicated.PlannedInterventionTypeEnum
     */
    export type PlannedInterventionTypeEnum = "HARDWARE_UPGRADE_ON_ACTIVE_SERVER"
    /**
     * List of logs
     * interface fullName: dedicated.PublicLog.PublicLog
     */
    export interface PublicLog {
        cacheDate?: string;
        count: number;
        data: dedicated.PublicLogEntry[];
    }
    /**
     * A log entry for a specific server
     * interface fullName: dedicated.PublicLogEntry.PublicLogEntry
     */
    export interface PublicLogEntry {
        datetime: string;
        resume: string;
        server: string;
    }
    /**
     * enable or disable
     * type fullname: dedicated.StatusEnum
     */
    export type StatusEnum = "disable" | "enable"
    /**
     * different task operation
     * type fullname: dedicated.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "INFRA_002_VirtualNetworkInterface_group" | "INFRA_002_VirtualNetworkInterface_ungroup" | "INFRA_ONE_NETWORK_VirtualNetworkInterface_group" | "INFRA_ONE_NETWORK_VirtualNetworkInterface_ungroup" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "hardware_update" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    /**
     * different task status
     * type fullname: dedicated.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace biosSettings {
        /**
         * Your BiosSettings
         * interface fullName: dedicated.biosSettings.BiosSettings.BiosSettings
         */
        export interface BiosSettings {
            supportedSettings: dedicated.server.BiosSettingsSupport;
        }
    }
    export namespace biosSettingsSgx {
        /**
         * Your BiosSettings for SGX feature
         * interface fullName: dedicated.biosSettingsSgx.BiosSettingsSgx.BiosSettingsSgx
         */
        export interface BiosSettingsSgx {
            prmrr: dedicated.server.BiosSettingsSgxPrmrrEnum;
            status: dedicated.server.BiosSettingsSgxStatusEnum;
        }
    }
    export namespace networkInterfaceController {
        /**
         * Your networkInterfaceController
         * interface fullName: dedicated.networkInterfaceController.NetworkInterfaceController.NetworkInterfaceController
         */
        export interface NetworkInterfaceController {
            linkType: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum;
            mac: string;
            virtualNetworkInterface?: string;
        }
        /**
         * List NetworkInterfaceController linktype
         * type fullname: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum
         */
        export type NetworkInterfaceControllerLinkTypeEnum = "isolated" | "private" | "private_lag" | "provisioning" | "provisioning_lag" | "public" | "public_lag"
    }
    export namespace server {
        /**
         * A structure describing the server's access
         * interface fullName: dedicated.server.Access.Access
         */
        export interface Access {
            password: string;
            type: dedicated.server.AccessTypeEnum;
            url?: string;
            user?: string;
        }
        /**
         * Application access type
         * type fullname: dedicated.server.AccessTypeEnum
         */
        export type AccessTypeEnum = "DIRECTADMIN_PANEL" | "PLESK_PANEL" | "PROXMOX_PANEL" | "RDP" | "SQL_SERVER" | "SSH" | "WEB_PANEL"
        /**
         * Addon family
         * type fullname: dedicated.server.AddonFamilyEnum
         */
        export type AddonFamilyEnum = "memory" | "storage"
        /**
         * A structure describing bandwidth informations about this dedicated server
         * interface fullName: dedicated.server.BandwidthDetails.BandwidthDetails
         */
        export interface BandwidthDetails {
            InternetToOvh?: complexType.UnitAndValue<number>;
            OvhToInternet?: complexType.UnitAndValue<number>;
            OvhToOvh?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthTypeEnum;
        }
        /**
         *  Different Bandwidth type
         * type fullname: dedicated.server.BandwidthTypeEnum
         */
        export type BandwidthTypeEnum = "improved" | "included" | "platinum" | "premium" | "standard" | "ultimate"
        /**
         * A structure describing vRack bandwidth informations about this dedicated server
         * interface fullName: dedicated.server.BandwidthvRackDetails.BandwidthvRackDetails
         */
        export interface BandwidthvRackDetails {
            bandwidth?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthvRackTypeEnum;
        }
        /**
         *  Different Bandwidth type
         * type fullname: dedicated.server.BandwidthvRackTypeEnum
         */
        export type BandwidthvRackTypeEnum = "included" | "standard"
        /**
         * Dedicated server addon.
         * interface fullName: dedicated.server.BillingAddon.BillingAddon
         */
        export interface BillingAddon {
            family: dedicated.server.AddonFamilyEnum;
            planCode: string;
        }
        /**
         * SGX PRMRR value enum
         * type fullname: dedicated.server.BiosSettingsSgxPrmrrEnum
         */
        export type BiosSettingsSgxPrmrrEnum = "128" | "16384" | "2048" | "256" | "32" | "32768" | "4096" | "512" | "64" | "65536" | "8192"
        /**
         * SGX Status enum
         * type fullname: dedicated.server.BiosSettingsSgxStatusEnum
         */
        export type BiosSettingsSgxStatusEnum = "disabled" | "enabled" | "software controlled"
        /**
         * A structure describing supported bios settings
         * interface fullName: dedicated.server.BiosSettingsSupport.BiosSettingsSupport
         */
        export interface BiosSettingsSupport {
            sgx: boolean;
            sgxOptions: dedicated.server.BiosSettingsSupportSgxOptions;
        }
        /**
         * A structure describing supported SGX options values
         * interface fullName: dedicated.server.BiosSettingsSupportSgxOptions.BiosSettingsSupportSgxOptions
         */
        export interface BiosSettingsSupportSgxOptions {
            prmrr: dedicated.server.BiosSettingsSgxPrmrrEnum[];
            status: dedicated.server.BiosSettingsSgxStatusEnum[];
        }
        /**
         * Server boot mode
         * type fullname: dedicated.server.BootModeEnum
         */
        export type BootModeEnum = "legacy" | "uefi" | "uefi-legacy"
        /**
         * Different option activated on netboot 
         * type fullname: dedicated.server.BootOptionEnum
         */
        export type BootOptionEnum = "cpufamily" | "grsec" | "ipv6" | "smp"
        /**
         *  Different netboot boot
         * type fullname: dedicated.server.BootTypeEnum
         */
        export type BootTypeEnum = "harddisk" | "internal" | "ipxeCustomerScript" | "network" | "rescue"
        /**
         * Bring you own Image on your server
         * interface fullName: dedicated.server.ByoiStatus.ByoiStatus
         */
        export interface ByoiStatus {
            checksum?: string;
            message?: string;
            servername?: string;
            status?: dedicated.server.ByoiStatusEnum;
        }
        /**
         * All states a status can be in
         * type fullname: dedicated.server.ByoiStatusEnum
         */
        export type ByoiStatusEnum = "doing" | "done" | "error"
        /**
         * Configurations used by cloud-init or cloudbase-init
         * interface fullName: dedicated.server.ConfigDrive.ConfigDrive
         */
        export interface ConfigDrive {
            enable?: boolean;
            hostname?: string;
            sshKey?: string;
            userData?: string;
            userMetadatas?: complexType.SafeKeyValueCanBeNull<string>[];
        }
        /**
         * cpu family 
         * type fullname: dedicated.server.CpuFamilyEnum
         */
        export type CpuFamilyEnum = "arm64" | "armhf32" | "ppc64" | "x86" | "x86-ht" | "x86_64"
        /**
         * Server informations
         * interface fullName: dedicated.server.Dedicated.Dedicated
         */
        export interface Dedicated {
            bootId?: number;
            commercialRange?: string;
            datacenter: dedicated.DatacenterEnum;
            ip: string;
            linkSpeed?: number;
            monitoring: boolean;
            name: string;
            newUpgradeSystem: boolean;
            noIntervention: boolean;
            os: string;
            professionalUse: boolean;
            rack: string;
            rescueMail?: string;
            reverse?: string;
            rootDevice?: string;
            serverId: number;
            state: dedicated.server.StateEnum;
            supportLevel: dedicated.server.SupportLevelEnum;
        }
        /**
         * Disk interface type enum
         * type fullname: dedicated.server.DiskTypeEnum
         */
        export type DiskTypeEnum = "NVMe" | "SAS" | "SATA" | "SSD" | "Unknown"
        /**
         * Server form factor
         * type fullname: dedicated.server.FormFactorEnum
         */
        export type FormFactorEnum = "0.25u" | "0.5u" | "1u" | "2u" | "3u" | "4u"
        /**
         * Simulated result of how the hardware RAID template will be configured on this server
         * interface fullName: dedicated.server.HardwareRaidConfiguration.HardwareRaidConfiguration
         */
        export interface HardwareRaidConfiguration {
            capacity: complexType.UnitAndValue<number>;
            diskCount: number;
            diskSize: complexType.UnitAndValue<number>;
            diskSpanSize: number;
            mode: dedicated.server.HardwareSpecificationsRaidHardEnum;
            name: string;
            type: string;
        }
        /**
         * RAID controller configuration
         * interface fullName: dedicated.server.HardwareRaidController.HardwareRaidController
         */
        export interface HardwareRaidController {
            disks: dedicated.server.HardwareRaidDiskGroup[];
            model: string;
            type: string;
        }
        /**
         * Disk attached to a RAID controller
         * interface fullName: dedicated.server.HardwareRaidDiskGroup.HardwareRaidDiskGroup
         */
        export interface HardwareRaidDiskGroup {
            capacity: complexType.UnitAndValue<number>;
            names: string[];
            speed: complexType.UnitAndValue<string>;
            type: dedicated.server.DiskTypeEnum;
        }
        /**
         * A structure describing the server's hardware RAID configuration
         * interface fullName: dedicated.server.HardwareRaidProfile.HardwareRaidProfile
         */
        export interface HardwareRaidProfile {
            controllers: dedicated.server.HardwareRaidController[];
        }
        /**
         * A structure describing the server's resulting layout after RAID configuration
         * interface fullName: dedicated.server.HardwareRaidSize.HardwareRaidSize
         */
        export interface HardwareRaidSize {
            configurations: dedicated.server.HardwareRaidConfiguration[];
        }
        /**
         * A structure describing informations about this dedicated server
         * interface fullName: dedicated.server.HardwareSpecifications.HardwareSpecifications
         */
        export interface HardwareSpecifications {
            bootMode: dedicated.server.BootModeEnum;
            coresPerProcessor?: number;
            defaultHardwareRaidSize?: complexType.UnitAndValue<number>;
            defaultHardwareRaidType?: dedicated.server.HardwareSpecificationsRaidHardEnum;
            description?: string;
            diskGroups?: dedicated.server.HardwareSpecificationsDisk[];
            expansionCards?: dedicated.server.HardwareSpecificationsExpansionCard[];
            formFactor?: dedicated.server.FormFactorEnum;
            memorySize?: complexType.UnitAndValue<number>;
            motherboard?: string;
            numberOfProcessors?: number;
            processorArchitecture?: dedicated.server.CpuFamilyEnum;
            processorName?: string;
            threadsPerProcessor?: number;
            usbKeys?: complexType.UnitAndValue<number>[];
        }
        /**
         * A structure describing informations about server disks
         * interface fullName: dedicated.server.HardwareSpecificationsDisk.HardwareSpecificationsDisk
         */
        export interface HardwareSpecificationsDisk {
            defaultHardwareRaidSize?: complexType.UnitAndValue<number>;
            defaultHardwareRaidType?: dedicated.server.HardwareSpecificationsRaidHardEnum;
            description?: string;
            diskGroupId?: number;
            diskSize?: complexType.UnitAndValue<number>;
            diskType?: string;
            numberOfDisks?: number;
            raidController?: string;
        }
        /**
         * A structure describing informations about server expansion cards
         * interface fullName: dedicated.server.HardwareSpecificationsExpansionCard.HardwareSpecificationsExpansionCard
         */
        export interface HardwareSpecificationsExpansionCard {
            description: string;
            type: dedicated.server.HardwareSpecificationsExpansionCardTypeEnum;
        }
        /**
         * Expansion card type enum
         * type fullname: dedicated.server.HardwareSpecificationsExpansionCardTypeEnum
         */
        export type HardwareSpecificationsExpansionCardTypeEnum = "fpga" | "gpu"
        /**
         * Raid hard configuration
         * type fullname: dedicated.server.HardwareSpecificationsRaidHardEnum
         */
        export type HardwareSpecificationsRaidHardEnum = "raid0" | "raid1" | "raid10" | "raid1E" | "raid5" | "raid50" | "raid6" | "raid60"
        /**
         * A structure describing informations about installation custom
         * interface fullName: dedicated.server.InstallCustom.InstallCustom
         */
        export interface InstallCustom {
            customHostname?: string;
            diskGroupId?: number;
            installRTM?: boolean;
            installSqlServer?: boolean;
            language?: string;
            noRaid?: boolean;
            postInstallationScriptLink?: string;
            postInstallationScriptReturn?: string;
            resetHwRaid?: boolean;
            softRaidDevices?: number;
            sshKeyName?: string;
            useDistribKernel?: boolean;
            useSpla?: boolean;
        }
        /**
         * A structure describing informations about an Installation templates
         * interface fullName: dedicated.server.InstallTemplate.InstallTemplate
         */
        export interface InstallTemplate {
            ovh?: string[];
            personal?: string[];
        }
        /**
         * A structure describing informations about this dedicated server installation status
         * interface fullName: dedicated.server.InstallationProgressStatus.InstallationProgressStatus
         */
        export interface InstallationProgressStatus {
            elapsedTime: number;
            progress?: dedicated.server.InstallationProgressSteps[];
        }
        /**
         * Distinct Installation status
         * type fullname: dedicated.server.InstallationProgressStatusEnum
         */
        export type InstallationProgressStatusEnum = "doing" | "done" | "error" | "expired" | "idle" | "pending" | "stopping" | "todo"
        /**
         * A structure describing informations about this dedicated server installation steps
         * interface fullName: dedicated.server.InstallationProgressSteps.InstallationProgressSteps
         */
        export interface InstallationProgressSteps {
            comment: string;
            error?: string;
            status: dedicated.server.InstallationProgressStatusEnum;
        }
        /**
         * Interface or interfaces aggregation
         * interface fullName: dedicated.server.Interfaces.Interfaces
         */
        export interface Interfaces {
            macs: string[];
            type: dedicated.server.NetworkingTypeEnum;
        }
        /**
         * Intervention made on this server
         * interface fullName: dedicated.server.Intervention.Intervention
         */
        export interface Intervention {
            date?: string;
            interventionId: number;
            type?: string;
        }
        /**
         * IP block size
         * type fullname: dedicated.server.IpBlockSizeEnum
         */
        export type IpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8
        /**
         * A structure describing informations about orderable IP address
         * interface fullName: dedicated.server.IpOrderable.IpOrderable
         */
        export interface IpOrderable {
            ipv4?: dedicated.server.IpOrderableDetails[];
            ipv6?: dedicated.server.IpOrderableDetails[];
        }
        /**
         * A structure describing informations about orderable IP address
         * interface fullName: dedicated.server.IpOrderableDetails.IpOrderableDetails
         */
        export interface IpOrderableDetails {
            blockSizes: dedicated.server.IpBlockSizeEnum[];
            included: boolean;
            ipNumber?: number;
            number: number;
            optionRequired?: dedicated.server.OptionRequiredEnum;
            type: dedicated.server.IpTypeOrderableEnum;
        }
        /**
         * Orderable IP type
         * type fullname: dedicated.server.IpTypeOrderableEnum
         */
        export type IpTypeOrderableEnum = "failover" | "static" | "unshielded"
        /**
         * distincts MRTG period
         * type fullname: dedicated.server.MrtgPeriodEnum
         */
        export type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
        /**
         * A timestamp associated to a value
         * interface fullName: dedicated.server.MrtgTimestampValue.MrtgTimestampValue
         */
        export interface MrtgTimestampValue {
            timestamp: number;
            value?: complexType.UnitAndValue<number>;
        }
        /**
         * distincts MRTG type
         * type fullname: dedicated.server.MrtgTypeEnum
         */
        export type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload"
        /**
         * Available boots
         * interface fullName: dedicated.server.Netboot.Netboot
         */
        export interface Netboot {
            bootId: number;
            bootType: dedicated.server.BootTypeEnum;
            description: string;
            kernel: string;
        }
        /**
         * A structure describing network informations about this dedicated server
         * interface fullName: dedicated.server.NetworkSpecifications.NetworkSpecifications
         */
        export interface NetworkSpecifications {
            bandwidth?: dedicated.server.BandwidthDetails;
            connection?: complexType.UnitAndValue<number>;
            ola?: dedicated.server.OlaDetails;
            routing?: dedicated.server.RoutingDetails;
            switching?: dedicated.server.SwitchingDetails;
            traffic?: dedicated.server.TrafficDetails;
            vmac: dedicated.server.VmacDetails;
            vrack?: dedicated.server.BandwidthvRackDetails;
        }
        /**
         * Network configuration
         * interface fullName: dedicated.server.Networking.Networking
         */
        export interface Networking {
            description?: string;
            interfaces: dedicated.server.Interfaces[];
            status?: dedicated.server.NetworkingOperationEnum;
        }
        /**
         * Network operation states
         * type fullname: dedicated.server.NetworkingOperationEnum
         */
        export type NetworkingOperationEnum = "active" | "deploying"
        /**
         * Network type
         * type fullname: dedicated.server.NetworkingTypeEnum
         */
        export type NetworkingTypeEnum = "public" | "vrack"
        /**
         * A structure describing OVH Link Aggregation available modes
         * interface fullName: dedicated.server.OlaAvailableModes.OlaAvailableModes
         */
        export interface OlaAvailableModes {
            default: boolean;
            interfaces: dedicated.server.OlaInterface[];
            name: string;
        }
        /**
         * A structure describing OVH Link Aggregation available modes for this dedicated server
         * interface fullName: dedicated.server.OlaDetails.OlaDetails
         */
        export interface OlaDetails {
            available: boolean;
            availableModes: dedicated.server.OlaAvailableModes[];
            supportedModes?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[];
        }
        /**
         * A structure describing OVH Link Aggregation interface configuration
         * interface fullName: dedicated.server.OlaInterface.OlaInterface
         */
        export interface OlaInterface {
            aggregation: boolean;
            count: number;
            type: dedicated.server.OlaInterfaceModeEnum;
        }
        /**
         * An enum describing OVH Link Aggregation interface types
         * type fullname: dedicated.server.OlaInterfaceModeEnum
         */
        export type OlaInterfaceModeEnum = "public" | "vrack"
        /**
         * Server operations
         * interface fullName: dedicated.server.Operation.Operation
         */
        export interface Operation {
            comment?: string;
            doneDate?: string;
            function: dedicated.OperationFunctionEnum;
            lastUpdate?: string;
            operationId: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
        }
        /**
         * Information about the options of a dedicated server
         * interface fullName: dedicated.server.Option.Option
         */
        export interface Option {
            option: dedicated.server.OptionEnum;
            state: dedicated.server.OptionStateEnum;
        }
        /**
         * All options a dedicated server can have and release
         * type fullname: dedicated.server.OptionEnum
         */
        export type OptionEnum = "BACKUPPROTOCOL" | "BANDWIDTH" | "BANDWIDTH_VRACK" | "OLA" | "SGX" | "TRAFFIC" | "TRAFFIC_DISCOVER" | "TUNING" | "TUNING_FIREWALL" | "TUNING_KVM" | "USB_KVM_IP"
        /**
         * Required option
         * type fullname: dedicated.server.OptionRequiredEnum
         */
        export type OptionRequiredEnum = "professionalUse"
        /**
         * All states a dedicated server option can be in
         * type fullname: dedicated.server.OptionStateEnum
         */
        export type OptionStateEnum = "released" | "subscribed"
        /**
         * Planned intervention on the server
         * interface fullName: dedicated.server.PlannedIntervention.PlannedIntervention
         */
        export interface PlannedIntervention {
            expectedEndDate: string;
            id: number;
            status: dedicated.PlannedInterventionStatusEnum;
            type: dedicated.PlannedInterventionTypeEnum;
            wantedStartDate: string;
        }
        /**
         * A structure describing routing informations about this dedicated server
         * interface fullName: dedicated.server.RoutingDetails.RoutingDetails
         */
        export interface RoutingDetails {
            ipv4?: dedicated.server.RoutingDetailsIpv4;
            ipv6?: dedicated.server.RoutingDetailsIpv6;
        }
        /**
         * A structure describing IPv4 routing informations about this dedicated server
         * interface fullName: dedicated.server.RoutingDetailsIpv4.RoutingDetailsIpv4
         */
        export interface RoutingDetailsIpv4 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        /**
         * A structure describing IPv6 routing informations about this dedicated server
         * interface fullName: dedicated.server.RoutingDetailsIpv6.RoutingDetailsIpv6
         */
        export interface RoutingDetailsIpv6 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        /**
         * Servers statistics sent by RTM (Real Time Monitoring)
         * interface fullName: dedicated.server.Rtm.Rtm
         */
        export interface Rtm {
            currentVersion?: string;
            installedVersion?: string;
            needsUpdate: boolean;
        }
        /**
         * distincts RTM charts period
         * type fullname: dedicated.server.RtmChartPeriodEnum
         */
        export type RtmChartPeriodEnum = "daily" | "monthly" | "weekly" | "yearly"
        /**
         * distincts probes type
         * type fullname: dedicated.server.RtmChartTypeEnum
         */
        export type RtmChartTypeEnum = "cpu" | "loadavg1" | "loadavg15" | "loadavg5" | "memory" | "processCount" | "processRunning" | "swap"
        /**
         * A structure describing informations about RTM
         * interface fullName: dedicated.server.RtmCommandSize.RtmCommandSize
         */
        export interface RtmCommandSize {
            command?: string;
            memory?: complexType.UnitAndValue<number>;
        }
        /**
         * A structure describing informations about opened sockets on the server
         * interface fullName: dedicated.server.RtmConnection.RtmConnection
         */
        export interface RtmConnection {
            cmdline?: string;
            domain?: string;
            exe?: string;
            ip?: string;
            pid?: number;
            port?: number;
            procname?: string;
            uid?: number;
            username?: string;
        }
        /**
         * A structure describing informations about server cpu
         * interface fullName: dedicated.server.RtmCpu.RtmCpu
         */
        export interface RtmCpu {
            cache?: complexType.UnitAndValue<number>;
            core?: number;
            freq?: complexType.UnitAndValue<number>;
            name?: string;
        }
        /**
         * Server disks informations
         * interface fullName: dedicated.server.RtmDisk.RtmDisk
         */
        export interface RtmDisk {
            capacity?: complexType.UnitAndValue<number>;
            disk: string;
            model?: string;
            temperature?: complexType.UnitAndValue<number>;
        }
        /**
         * A structure describing SMART health disk status
         * interface fullName: dedicated.server.RtmDiskSmart.RtmDiskSmart
         */
        export interface RtmDiskSmart {
            current_pending_sector?: number;
            multizone_error_rate?: number;
            offline_seek_performance?: number;
            offline_uncorrectable?: number;
            other_errors?: number;
            realocated_event_count?: number;
            temperature_celsius?: number;
            udma_crc_error?: number;
            uncorrected_read_errors?: number;
            uncorrected_write_errors?: number;
        }
        /**
         * A structure describing informations about server load
         * interface fullName: dedicated.server.RtmLoad.RtmLoad
         */
        export interface RtmLoad {
            cpu?: complexType.UnitAndValue<number>;
            loadavg1?: number;
            loadavg15?: number;
            loadavg5?: number;
            memory?: complexType.UnitAndValue<number>;
            processCount?: number;
            processRunning?: number;
            swap?: complexType.UnitAndValue<number>;
            uptime?: number;
        }
        /**
         * A structure describing informations about server memory
         * interface fullName: dedicated.server.RtmMemory.RtmMemory
         */
        export interface RtmMemory {
            capacity?: complexType.UnitAndValue<number>;
            slot?: string;
        }
        /**
         * A structure describing informations about motherboard
         * interface fullName: dedicated.server.RtmMotherboardHw.RtmMotherboardHw
         */
        export interface RtmMotherboardHw {
            manufacturer?: string;
            name?: string;
        }
        /**
         * A structure describing informations about Rtm os
         * interface fullName: dedicated.server.RtmOs.RtmOs
         */
        export interface RtmOs {
            kernelRelease?: string;
            kernelVersion?: string;
            release?: string;
        }
        /**
         * Server partitions informations
         * interface fullName: dedicated.server.RtmPartition.RtmPartition
         */
        export interface RtmPartition {
            inodeUsage?: complexType.UnitAndValue<number>;
            mountPoint?: string;
            partition: string;
            usage?: complexType.UnitAndValue<number>;
        }
        /**
         * A structure describing informations about server PCI devices
         * interface fullName: dedicated.server.RtmPci.RtmPci
         */
        export interface RtmPci {
            bus?: string;
            device?: string;
        }
        /**
         * Server raid informations
         * interface fullName: dedicated.server.RtmRaid.RtmRaid
         */
        export interface RtmRaid {
            unit: string;
        }
        /**
         *  Different RAID status
         * type fullname: dedicated.server.RtmRaidStatusEnum
         */
        export type RtmRaidStatusEnum = "KO" | "OK" | "REBUILDING" | "UNKNOWN"
        /**
         * Server raid volume information
         * interface fullName: dedicated.server.RtmRaidVolume.RtmRaidVolume
         */
        export interface RtmRaidVolume {
            capacity?: complexType.UnitAndValue<number>;
            chunks?: string;
            label?: string;
            letter?: string;
            phys?: string;
            status?: dedicated.server.RtmRaidStatusEnum;
            stripe?: string;
            syncprogress?: string;
            type?: string;
            volume?: string;
        }
        /**
         * Server raid volume port informations
         * interface fullName: dedicated.server.RtmRaidVolumePort.RtmRaidVolumePort
         */
        export interface RtmRaidVolumePort {
            capacity?: complexType.UnitAndValue<number>;
            disk?: string;
            model?: string;
            port?: string;
            serial?: string;
            status?: dedicated.server.RtmRaidStatusEnum;
            syncprogress?: string;
        }
        /**
         * All states a Dedicated can in
         * type fullname: dedicated.server.StateEnum
         */
        export type StateEnum = "error" | "hacked" | "hackedBlocked" | "ok"
        /**
         * distincts support level
         * type fullname: dedicated.server.SupportLevelEnum
         */
        export type SupportLevelEnum = "critical" | "fastpath" | "gs" | "pro"
        /**
         * A structure describing informations support level orderable for this dedicated server
         * interface fullName: dedicated.server.SupportLevelOrderable.SupportLevelOrderable
         */
        export interface SupportLevelOrderable {
            levels?: dedicated.server.SupportLevelOrderableEnum[];
            orderable: boolean;
        }
        /**
         * distincts support level
         * type fullname: dedicated.server.SupportLevelOrderableEnum
         */
        export type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs"
        /**
         * Hdd replace support request details. 
         * interface fullName: dedicated.server.SupportReplaceHddInfo.SupportReplaceHddInfo
         */
        export interface SupportReplaceHddInfo {
            disk_serial: string;
            slot_id?: number;
        }
        /**
         * A structure describing switching informations about this dedicated server
         * interface fullName: dedicated.server.SwitchingDetails.SwitchingDetails
         */
        export interface SwitchingDetails {
            name?: string;
        }
        /**
         * Server tasks
         * interface fullName: dedicated.server.Task.Task
         */
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            needSchedule: boolean;
            note?: string;
            plannedInterventionId?: number;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
            ticketReference?: string;
        }
        /**
         * Miscellaneous template capabilities regarding the server.
         * interface fullName: dedicated.server.TemplateCaps.TemplateCaps
         */
        export interface TemplateCaps {
            hybridSupport: boolean;
        }
        /**
         * A structure describing traffic informations about this dedicated server
         * interface fullName: dedicated.server.TrafficDetails.TrafficDetails
         */
        export interface TrafficDetails {
            inputQuotaSize?: complexType.UnitAndValue<number>;
            inputQuotaUsed?: complexType.UnitAndValue<number>;
            isThrottled?: boolean;
            outputQuotaSize?: complexType.UnitAndValue<number>;
            outputQuotaUsed?: complexType.UnitAndValue<number>;
            resetQuotaDate?: string;
        }
        /**
         * A structure describing VMAC Infos for this dedicated server
         * interface fullName: dedicated.server.VmacDetails.VmacDetails
         */
        export interface VmacDetails {
            supported: boolean;
        }
        export namespace backup {
            /**
             * Backup cloud offer description for a dedicated server
             * interface fullName: dedicated.server.backup.BackupOffer.BackupOffer
             */
            export interface BackupOffer {
                maxArchive?: complexType.UnitAndValue<number>;
                maxBandwidthArchive?: complexType.UnitAndValue<number>;
                maxBandwidthStorage?: complexType.UnitAndValue<number>;
                maxStorage?: complexType.UnitAndValue<number>;
            }
        }
        /**
         * Available boot options
         * interface fullName: dedicated.server.netbootOption.netbootOption
         */
        export interface netbootOption {
            option: dedicated.server.BootOptionEnum;
            value: string;
        }
    }
    export namespace virtualNetworkInterface {
        /**
         * Your VirtualNetworkInterface
         * interface fullName: dedicated.virtualNetworkInterface.VirtualNetworkInterface.VirtualNetworkInterface
         */
        export interface VirtualNetworkInterface {
            enabled: boolean;
            mode: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
            name: string;
            networkInterfaceController: string[];
            serverName: string;
            uuid: string;
            vrack?: string;
        }
        /**
         * Available VirtualNetworkInterface modes
         * type fullname: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum
         */
        export type VirtualNetworkInterfaceModeEnum = "public" | "public_aggregation" | "vrack" | "vrack_aggregation"
    }
}
export namespace secondaryDns {
    /**
     * Secondary dns infos
     * interface fullName: secondaryDns.SecondaryDNS.SecondaryDNS
     */
    export interface SecondaryDNS {
        creationDate: string;
        dns: string;
        domain: string;
        ipMaster: string;
    }
    /**
     * A structure describing informations about secondary dns check field
     * interface fullName: secondaryDns.SecondaryDNSCheckField.SecondaryDNSCheckField
     */
    export interface SecondaryDNSCheckField {
        fieldType: zone.NamedResolutionFieldTypeEnum;
        fieldValue: string;
        subDomain: string;
    }
    /**
     * A structure describing informations about available nameserver for secondary dns 
     * interface fullName: secondaryDns.SecondaryDNSNameServer.SecondaryDNSNameServer
     */
    export interface SecondaryDNSNameServer {
        hostname: string;
        ip: string;
        ipv6?: string;
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
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export namespace support {
    /**
     * Newly created support identifiers
     * interface fullName: support.NewMessageInfo.NewMessageInfo
     */
    export interface NewMessageInfo {
        messageId: number;
        ticketId: number;
        ticketNumber: number;
    }
}
export namespace zone {
    /**
     * Resource record fieldType
     * type fullname: zone.NamedResolutionFieldTypeEnum
     */
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "DNAME" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
}

/**
 * END API /dedicated/server Models
 */
export function proxyDedicatedServer(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedServer;
/**
 * Api model for /dedicated/server
 */
export interface Dedicated {
    server: {
        /**
         * List available services
         * GET /dedicated/server
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        log: {
            /**
             * Get public logs for servers
             * GET /dedicated/server/log
             */
            $get(params?: { datacenter?: dedicated.DatacenterEnum, limit?: number, page?: number, server?: string }): Promise<dedicated.PublicLog>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /dedicated/server/{serviceName}
             */
            $get(): Promise<dedicated.server.Dedicated>;
            /**
             * Alter this object properties
             * PUT /dedicated/server/{serviceName}
             */
            $put(params?: { bootId?: number, commercialRange?: string, datacenter?: dedicated.DatacenterEnum, ip?: string, linkSpeed?: number, monitoring?: boolean, name?: string, newUpgradeSystem?: boolean, noIntervention?: boolean, os?: string, professionalUse?: boolean, rack?: string, rescueMail?: string, reverse?: string, rootDevice?: string, serverId?: number, state?: dedicated.server.StateEnum, supportLevel?: dedicated.server.SupportLevelEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            authenticationSecret: {
                /**
                 * Retrieve secret to connect to the server / application
                 * POST /dedicated/server/{serviceName}/authenticationSecret
                 */
                $post(): Promise<dedicated.server.Access[]>;
            }
            backupCloudOfferDetails: {
                /**
                 * Get details on offered backup cloud if available for the current server
                 * GET /dedicated/server/{serviceName}/backupCloudOfferDetails
                 */
                $get(): Promise<dedicated.server.backup.BackupOffer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            biosSettings: {
                /**
                 * Get this object properties
                 * GET /dedicated/server/{serviceName}/biosSettings
                 */
                $get(): Promise<dedicated.biosSettings.BiosSettings>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                sgx: {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/biosSettings/sgx
                     */
                    $get(): Promise<dedicated.biosSettingsSgx.BiosSettingsSgx>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    configure: {
                        /**
                         * Configure SGX feature
                         * POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
                         */
                        $post(params?: { prmrr?: dedicated.server.BiosSettingsSgxPrmrrEnum, status?: dedicated.server.BiosSettingsSgxStatusEnum }): Promise<dedicated.server.Task>;
                    }
                }
            }
            boot: {
                /**
                 * Server compatibles netboots
                 * GET /dedicated/server/{serviceName}/boot
                 */
                $get(params?: { bootType?: dedicated.server.BootTypeEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(bootId: number): {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/boot/{bootId}
                     */
                    $get(): Promise<dedicated.server.Netboot>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    option: {
                        /**
                         * Option used on this netboot
                         * GET /dedicated/server/{serviceName}/boot/{bootId}/option
                         */
                        $get(): Promise<dedicated.server.BootOptionEnum[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(option: dedicated.server.BootOptionEnum): {
                            /**
                             * Get this object properties
                             * GET /dedicated/server/{serviceName}/boot/{bootId}/option/{option}
                             */
                            $get(): Promise<dedicated.server.netbootOption>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            bringYourOwnImage: {
                /**
                 * Delete your current image installation
                 * DELETE /dedicated/server/{serviceName}/bringYourOwnImage
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /dedicated/server/{serviceName}/bringYourOwnImage
                 */
                $get(): Promise<dedicated.server.ByoiStatus>;
                /**
                 * Start an install with your own image
                 * POST /dedicated/server/{serviceName}/bringYourOwnImage
                 */
                $post(params: { checkSum?: string, checkSumType?: dedicated.CheckSumTypesEnum, configdrive?: dedicated.server.ConfigDrive, description?: string, diskGroupId?: number, httpHeader?: complexType.SafeKeyValueCanBeNull<string>[], type: dedicated.ImageTypesEnum, URL: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /dedicated/server/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            install: {
                compatibleTemplatePartitionSchemes: {
                    /**
                     * Retrieve compatible  install template partitions scheme
                     * GET /dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes
                     */
                    $get(params: { templateName: string }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                compatibleTemplates: {
                    /**
                     * Retrieve compatible  install templates names
                     * GET /dedicated/server/{serviceName}/install/compatibleTemplates
                     */
                    $get(): Promise<dedicated.server.InstallTemplate>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                hardwareRaidProfile: {
                    /**
                     * Retrieve hardware RAID profile
                     * GET /dedicated/server/{serviceName}/install/hardwareRaidProfile
                     */
                    $get(): Promise<dedicated.server.HardwareRaidProfile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                hardwareRaidSize: {
                    /**
                     * Get hardware RAID size for a given configuration
                     * GET /dedicated/server/{serviceName}/install/hardwareRaidSize
                     */
                    $get(params: { partitionSchemeName: string, templateName: string }): Promise<dedicated.server.HardwareRaidSize>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                start: {
                    /**
                     * Start an install
                     * POST /dedicated/server/{serviceName}/install/start
                     */
                    $post(params: { details?: dedicated.server.InstallCustom, partitionSchemeName?: string, templateName: string, userMetadata?: complexType.SafeKeyValue<string>[] }): Promise<dedicated.server.Task>;
                }
                status: {
                    /**
                     * Get installation status
                     * GET /dedicated/server/{serviceName}/install/status
                     */
                    $get(): Promise<dedicated.server.InstallationProgressStatus>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                templateCapabilities: {
                    /**
                     * Gives some capabilities regarding the template for the current dedicated server.
                     * GET /dedicated/server/{serviceName}/install/templateCapabilities
                     */
                    $get(params: { templateName: string }): Promise<dedicated.server.TemplateCaps>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            intervention: {
                /**
                 * technical intervention history
                 * GET /dedicated/server/{serviceName}/intervention
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(interventionId: number): {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/intervention/{interventionId}
                     */
                    $get(): Promise<dedicated.server.Intervention>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            ips: {
                /**
                 * List all ip from server
                 * GET /dedicated/server/{serviceName}/ips
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            mrtg: {
                /**
                 * Retrieve traffic graph values
                 * GET /dedicated/server/{serviceName}/mrtg
                 */
                $get(params: { period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum }): Promise<dedicated.server.MrtgTimestampValue[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            networkInterfaceController: {
                /**
                 * List server networkInterfaceController
                 * GET /dedicated/server/{serviceName}/networkInterfaceController
                 */
                $get(params?: { linkType?: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(mac: string): {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/networkInterfaceController/{mac}
                     */
                    $get(): Promise<dedicated.networkInterfaceController.NetworkInterfaceController>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    mrtg: {
                        /**
                         * Retrieve traffic graph values
                         * GET /dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg
                         */
                        $get(params: { period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum }): Promise<dedicated.server.MrtgTimestampValue[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            option: {
                /**
                 * List of dedicated server options
                 * GET /dedicated/server/{serviceName}/option
                 */
                $get(): Promise<dedicated.server.OptionEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(option: dedicated.server.OptionEnum): {
                    /**
                     * Release a given option
                     * DELETE /dedicated/server/{serviceName}/option/{option}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/option/{option}
                     */
                    $get(): Promise<dedicated.server.Option>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            reboot: {
                /**
                 * Hard reboot this server
                 * POST /dedicated/server/{serviceName}/reboot
                 */
                $post(): Promise<dedicated.server.Task>;
            }
            secondaryDnsDomains: {
                /**
                 * List of secondary dns domain name
                 * GET /dedicated/server/{serviceName}/secondaryDnsDomains
                 */
                $get(): Promise<string[]>;
                /**
                 * add a domain on secondary dns
                 * POST /dedicated/server/{serviceName}/secondaryDnsDomains
                 */
                $post(params: { domain: string, ip?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(domain: string): {
                    /**
                     * remove this domain
                     * DELETE /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                     */
                    $get(): Promise<secondaryDns.SecondaryDNS>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                     */
                    $put(params?: { creationDate?: string, dns?: string, domain?: string, ipMaster?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    dnsServer: {
                        /**
                         * domain name server informations
                         * GET /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
                         */
                        $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            secondaryDnsNameDomainToken: {
                /**
                 * DNS field to temporarily add to your zone so that we can verify you are the owner of this domain
                 * GET /dedicated/server/{serviceName}/secondaryDnsNameDomainToken
                 */
                $get(params: { domain: string }): Promise<secondaryDns.SecondaryDNSCheckField>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            secondaryDnsNameServerAvailable: {
                /**
                 * Secondary nameServer available for your Server
                 * GET /dedicated/server/{serviceName}/secondaryDnsNameServerAvailable
                 */
                $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /dedicated/server/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /dedicated/server/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            specifications: {
                hardware: {
                    /**
                     * Retrieve hardware informations about this dedicated server
                     * GET /dedicated/server/{serviceName}/specifications/hardware
                     */
                    $get(): Promise<dedicated.server.HardwareSpecifications>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                ip: {
                    /**
                     * Retrieve IP capabilities about this dedicated server
                     * GET /dedicated/server/{serviceName}/specifications/ip
                     */
                    $get(): Promise<dedicated.server.IpOrderable>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                network: {
                    /**
                     * Retrieve network informations about this dedicated server
                     * GET /dedicated/server/{serviceName}/specifications/network
                     */
                    $get(): Promise<dedicated.server.NetworkSpecifications>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            statistics: {
                /**
                 * Get this object properties
                 * GET /dedicated/server/{serviceName}/statistics
                 */
                $get(): Promise<dedicated.server.Rtm>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                chart: {
                    /**
                     * Retrieve RTM graph values
                     * GET /dedicated/server/{serviceName}/statistics/chart
                     */
                    $get(params: { period: dedicated.server.RtmChartPeriodEnum, type: dedicated.server.RtmChartTypeEnum }): Promise<complexType.ChartReturn>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                connection: {
                    /**
                     * Get server opened connections
                     * GET /dedicated/server/{serviceName}/statistics/connection
                     */
                    $get(): Promise<dedicated.server.RtmConnection[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                cpu: {
                    /**
                     * Get server cpu informations
                     * GET /dedicated/server/{serviceName}/statistics/cpu
                     */
                    $get(): Promise<dedicated.server.RtmCpu>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                disk: {
                    /**
                     * Server disks
                     * GET /dedicated/server/{serviceName}/statistics/disk
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(disk: string): {
                        /**
                         * Get this object properties
                         * GET /dedicated/server/{serviceName}/statistics/disk/{disk}
                         */
                        $get(): Promise<dedicated.server.RtmDisk>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        smart: {
                            /**
                             * Get disk smart informations
                             * GET /dedicated/server/{serviceName}/statistics/disk/{disk}/smart
                             */
                            $get(): Promise<dedicated.server.RtmDiskSmart>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                load: {
                    /**
                     * Get server load
                     * GET /dedicated/server/{serviceName}/statistics/load
                     */
                    $get(): Promise<dedicated.server.RtmLoad>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                memory: {
                    /**
                     * Get server memory informations
                     * GET /dedicated/server/{serviceName}/statistics/memory
                     */
                    $get(): Promise<dedicated.server.RtmMemory[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                motherboard: {
                    /**
                     * Get server motherboard hardware informations
                     * GET /dedicated/server/{serviceName}/statistics/motherboard
                     */
                    $get(): Promise<dedicated.server.RtmMotherboardHw>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                os: {
                    /**
                     * Get server os informations
                     * GET /dedicated/server/{serviceName}/statistics/os
                     */
                    $get(): Promise<dedicated.server.RtmOs>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                partition: {
                    /**
                     * Server partitions
                     * GET /dedicated/server/{serviceName}/statistics/partition
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(partition: string): {
                        /**
                         * Get this object properties
                         * GET /dedicated/server/{serviceName}/statistics/partition/{partition}
                         */
                        $get(): Promise<dedicated.server.RtmPartition>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        chart: {
                            /**
                             * Retrieve partition charts
                             * GET /dedicated/server/{serviceName}/statistics/partition/{partition}/chart
                             */
                            $get(params: { period: dedicated.server.RtmChartPeriodEnum }): Promise<complexType.ChartReturn>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                pci: {
                    /**
                     * Get server PCI devices informations
                     * GET /dedicated/server/{serviceName}/statistics/pci
                     */
                    $get(): Promise<dedicated.server.RtmPci[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                process: {
                    /**
                     * Get server process
                     * GET /dedicated/server/{serviceName}/statistics/process
                     */
                    $get(): Promise<dedicated.server.RtmCommandSize[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                raid: {
                    /**
                     * Server raid informations
                     * GET /dedicated/server/{serviceName}/statistics/raid
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(unit: string): {
                        /**
                         * Get this object properties
                         * GET /dedicated/server/{serviceName}/statistics/raid/{unit}
                         */
                        $get(): Promise<dedicated.server.RtmRaid>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        volume: {
                            /**
                             * Raid unit volumes
                             * GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(volume: string): {
                                /**
                                 * Get this object properties
                                 * GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}
                                 */
                                $get(): Promise<dedicated.server.RtmRaidVolume>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                port: {
                                    /**
                                     * Raid unit volume ports
                                     * GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port
                                     */
                                    $get(): Promise<string[]>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    $(port: string): {
                                        /**
                                         * Get this object properties
                                         * GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}
                                         */
                                        $get(): Promise<dedicated.server.RtmRaidVolumePort>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    };
                                }
                            };
                        }
                    };
                }
            }
            support: {
                replace: {
                    cooling: {
                        /**
                         * Ask for a cooling module replacement
                         * POST /dedicated/server/{serviceName}/support/replace/cooling
                         */
                        $post(params: { comment: string, details: string }): Promise<support.NewMessageInfo>;
                    }
                    hardDiskDrive: {
                        /**
                         * Ask for a broken HDD replacement
                         * POST /dedicated/server/{serviceName}/support/replace/hardDiskDrive
                         */
                        $post(params: { comment: string, disks: dedicated.server.SupportReplaceHddInfo[], inverse: boolean }): Promise<support.NewMessageInfo>;
                    }
                    memory: {
                        /**
                         * Ask for a faulty RAM module replacement
                         * POST /dedicated/server/{serviceName}/support/replace/memory
                         */
                        $post(params: { comment: string, details: string, slots?: string[] }): Promise<support.NewMessageInfo>;
                    }
                }
            }
            task: {
                /**
                 * Dedicated server todos
                 * GET /dedicated/server/{serviceName}/task
                 */
                $get(params?: { function_?: dedicated.TaskFunctionEnum, status?: dedicated.TaskStatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/task/{taskId}
                     */
                    $get(): Promise<dedicated.server.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    cancel: {
                        /**
                         * this action stop the task progression if it's possible
                         * POST /dedicated/server/{serviceName}/task/{taskId}/cancel
                         */
                        $post(): Promise<void>;
                    }
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /dedicated/server/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
            virtualNetworkInterface: {
                /**
                 * List server VirtualNetworkInterfaces
                 * GET /dedicated/server/{serviceName}/virtualNetworkInterface
                 */
                $get(params?: { enabled?: boolean, mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, vrack?: string }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(uuid: string): {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}
                     */
                    $get(): Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}
                     */
                    $put(params?: { enabled?: boolean, mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, networkInterfaceController?: string[], serverName?: string, uuid?: string, vrack?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    disable: {
                        /**
                         * Disable this VirtualNetworkInterface
                         * POST /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable
                         */
                        $post(): Promise<dedicated.server.Task>;
                    }
                    enable: {
                        /**
                         * Enable this VirtualNetworkInterface
                         * POST /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable
                         */
                        $post(): Promise<dedicated.server.Task>;
                    }
                };
            }
        };
    }
}
