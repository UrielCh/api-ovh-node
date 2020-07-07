import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/server Models
 * Source: https://ca.api.ovh.com/1.0/dedicated/server.json
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
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicated {
    /**
     * A structure describing the availabilities of dedicated server
     * interface fullName: dedicated.Availabilities.Availabilities
     */
    export interface Availabilities {
        datacenters: dedicated.AvailabilityDatacenter[];
        hardware?: string;
        region?: dedicated.AvailabilityRegionEnum;
    }
    /**
     * A structure describing the availabilities of dedicated server
     * interface fullName: dedicated.AvailabilitiesRaw.AvailabilitiesRaw
     */
    export interface AvailabilitiesRaw {
        availability: dedicated.AvailabilityEnum;
        available: number;
        incomingDatacenter: number;
        lastRule?: string;
        ordered: number;
        orderedCheck: number;
        parentAvailable: number;
        reference: string;
        trueAvailable: number;
        trueAvailable24H: number;
        trueAvailable4H: number;
        zone: dedicated.AvailabilityRegionEnum;
    }
    /**
     * A structure describing the hardware availability for each datacenter
     * interface fullName: dedicated.AvailabilityDatacenter.AvailabilityDatacenter
     */
    export interface AvailabilityDatacenter {
        availability: dedicated.AvailabilityEnum;
        datacenter: dedicated.AvailabilityDatacenterEnum;
    }
    /**
     * The datacenter
     * type fullname: dedicated.AvailabilityDatacenterEnum
     */
    export type AvailabilityDatacenterEnum = "bhs" | "default" | "fra" | "gra" | "hil" | "lon" | "rbx" | "rbx-hz" | "sbg" | "sgp" | "syd" | "vin" | "waw"
    /**
     * The availability
     * type fullname: dedicated.AvailabilityEnum
     */
    export type AvailabilityEnum = "1H-high" | "1H-low" | "240H" | "24H" | "72H" | "unavailable" | "unknown"
    /**
     * The region
     * type fullname: dedicated.AvailabilityRegionEnum
     */
    export type AvailabilityRegionEnum = "europe" | "northAmerica"
    /**
     * Get list of compatible firewall binaries
     * interface fullName: dedicated.BinaryFirewall.BinaryFirewall
     */
    export interface BinaryFirewall {
        asa: string[];
        asdm: string[];
        type: dedicated.ProfileFirewallEnum;
    }
    /**
     * Get temporary URL link to download binary
     * interface fullName: dedicated.BinaryFirewallLink.BinaryFirewallLink
     */
    export interface BinaryFirewallLink {
        url: string;
    }
    /**
     * CheckSum type
     * type fullname: dedicated.CheckSumTypesEnum
     */
    export type CheckSumTypesEnum = "md5" | "sha1" | "sha256" | "sha512"
    /**
     * A structure describing the availabilities of dedicated server
     * interface fullName: dedicated.DatacenterAvailability.DatacenterAvailability
     */
    export interface DatacenterAvailability {
        datacenters: dedicated.AvailabilityDatacenter[];
        fqn: string;
        memory?: string;
        planCode: string;
        server: string;
        storage?: string;
    }
    /**
     * ovh datacenter
     * type fullname: dedicated.DatacenterEnum
     */
    export type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "dc1" | "eri1" | "gra1" | "gra2" | "gsw" | "hil1" | "lim1" | "p19" | "rbx-hz" | "rbx1" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "rbx8" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sgp1" | "syd1" | "vin1" | "waw1"
    /**
     * Type of your image
     * type fullname: dedicated.ImageTypesEnum
     */
    export type ImageTypesEnum = "qcow2" | "raw"
    /**
     * Operating system name
     * type fullname: dedicated.OsAvailabilitiesEnum
     */
    export type OsAvailabilitiesEnum = "archlinux-installer_64" | "centos5_64" | "centos6-cpanel-latest_64" | "centos6-ovh_64" | "centos6-plesk12_64" | "centos6_64" | "centos7-cpanel-latest_64" | "centos7-directadmin_64" | "centos7-fpga-accelize_64" | "centos7-fpga-intel-opencl_64" | "centos7-plesk125_64" | "centos7-plesk12_64" | "centos7-plesk17_64" | "centos7_64" | "cloudlinux6_64" | "cloudlinux7_64" | "coreos-alpha_64" | "coreos_64" | "debian7-ispconfig3_64" | "debian7-minecraft_64" | "debian7-plesk12_64" | "debian7_64" | "debian8-ispconfig3_64" | "debian8-plesk125_64" | "debian8_64" | "debian8_armhf_32" | "debian9-ispconfig3_64" | "debian9_64" | "debian9_armhf_32" | "dgx1-os-3_64" | "esxi51_64" | "esxi55_64" | "esxi5_64" | "esxi60_64" | "esxi65_64" | "fedora26_64" | "fedora27_64" | "freebsd10-zfs_64" | "freebsd10_64" | "freebsd11-zfs_64" | "gentoo11_64" | "openmediavault3_armhf_32" | "openmediavault_armhf_32" | "opensuse42_64" | "proxmox4-zfs_64" | "proxmox4_64" | "proxmox5-zfs_64" | "proxmox5_64" | "slackware14_64" | "smartos_64" | "solusvm-master-vz_64" | "solusvm-slave-vz_64" | "ubuntu1404-plesk125_64" | "ubuntu1404-server_64" | "ubuntu1510-server_arm64_64" | "ubuntu1510-server_ppc64el_64" | "ubuntu1604-desktop_64" | "ubuntu1604-server_64" | "ubuntu1604-server_armhf_32" | "ubuntu1604-server_ppc64el_64" | "ubuntu1710-server_64" | "win2008r2-dc-virtuozzo46_64" | "win2008r2-dc_64" | "win2008r2-ent-plesk10_64" | "win2008r2-ent-plesk11_64" | "win2008r2-ent-plesk12_64" | "win2008r2-ent-sp2010found_64" | "win2008r2-ent-virtuozzo46_64" | "win2008r2-ent_64" | "win2008r2-std-plesk11_64" | "win2008r2-std-plesk12_64" | "win2008r2-std-sp2010found_64" | "win2008r2-std_64" | "win2008r2-web-plesk11_64" | "win2008r2-web-plesk12_64" | "win2008r2-web-sp2010found_64" | "win2008r2-web_64" | "win2008r2core-dc_64" | "win2008r2core-ent_64" | "win2008r2core-hyperv_64" | "win2008r2core-std_64" | "win2008r2core-web_64" | "win2012-dc_64" | "win2012-hyperv3_64" | "win2012-std-plesk11_64" | "win2012-std-plesk12_64" | "win2012-std_64" | "win2012r2-dc_64" | "win2012r2-hyperv3_64" | "win2012r2-std-plesk12_64" | "win2012r2-std_64" | "win2016-dc_64" | "win2016-std_64" | "win81-pro-sysprep_64" | "xenserver6_64"
    /**
     * profile firewall asa
     * type fullname: dedicated.ProfileFirewallEnum
     */
    export type ProfileFirewallEnum = "cisco.asa5505" | "cisco.asa5510" | "cisco.asa5520"
    /**
     * enable or disable
     * type fullname: dedicated.StatusEnum
     */
    export type StatusEnum = "disable" | "enable"
    /**
     * different task operation
     * type fullname: dedicated.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "INFRA_002_VirtualNetworkInterface_group" | "INFRA_002_VirtualNetworkInterface_ungroup" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
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
        export type NetworkInterfaceControllerLinkTypeEnum = "isolated" | "private" | "private_lag" | "provisioning" | "public"
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
         * Monitoring alert language
         * type fullname: dedicated.server.AlertLanguageEnum
         */
        export type AlertLanguageEnum = "cz" | "de" | "en" | "es" | "fi" | "fr" | "it" | "lt" | "nl" | "pl" | "pt"
        /**
         * Backup Cloud assigned to this server
         * interface fullName: dedicated.server.BackupCloud.BackupCloud
         */
        export interface BackupCloud {
            agreements?: number[];
            archive?: dedicated.server.backup.BackupContainer;
            status: dedicated.server.backup.BackupStatus;
            storage?: dedicated.server.backup.BackupContainer;
        }
        /**
         * Backup Ftp assigned to this server
         * interface fullName: dedicated.server.BackupFtp.BackupFtp
         */
        export interface BackupFtp {
            ftpBackupName: string;
            quota?: complexType.UnitAndValue<number>;
            readOnlyDate?: string;
            type: dedicated.server.BackupStorageTypeEnum;
            usage?: complexType.UnitAndValue<number>;
        }
        /**
         * Backup Ftp ACL for this server and Backup Ftp
         * interface fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
         */
        export interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        /**
         * Different backup storage capacity in gigabytes
         * type fullname: dedicated.server.BackupStorageCapacityEnum
         */
        export type BackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000
        /**
         * A structure describing informations storage backup orderable for this dedicated server
         * interface fullName: dedicated.server.BackupStorageOrderable.BackupStorageOrderable
         */
        export interface BackupStorageOrderable {
            capacities?: dedicated.server.BackupStorageCapacityEnum[];
            orderable: boolean;
        }
        /**
         * Different backup storage type
         * type fullname: dedicated.server.BackupStorageTypeEnum
         */
        export type BackupStorageTypeEnum = "included" | "storage"
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
         *  Different Bandwidth orderable in Mbps
         * type fullname: dedicated.server.BandwidthOrderEnum
         */
        export type BandwidthOrderEnum = 1000 | 2000 | 3000
        /**
         * A structure describing informations bandwidth orderable for this dedicated server
         * interface fullName: dedicated.server.BandwidthOrderable.BandwidthOrderable
         */
        export interface BandwidthOrderable {
            orderable: boolean;
            platinum?: dedicated.server.BandwidthOrderEnum[];
            premium?: dedicated.server.BandwidthOrderEnum[];
            ultimate?: dedicated.server.BandwidthOrderEnum[];
        }
        /**
         *  Different Bandwidth type
         * type fullname: dedicated.server.BandwidthTypeEnum
         */
        export type BandwidthTypeEnum = "included" | "platinum" | "premium" | "standard" | "ultimate"
        /**
         * A structure describing vRack bandwidth informations about this dedicated server
         * interface fullName: dedicated.server.BandwidthvRackDetails.BandwidthvRackDetails
         */
        export interface BandwidthvRackDetails {
            bandwidth?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthvRackTypeEnum;
        }
        /**
         *  Different vRack Bandwidth orderable in Mbps
         * type fullname: dedicated.server.BandwidthvRackOrderEnum
         */
        export type BandwidthvRackOrderEnum = 1000 | 3000
        /**
         * A structure describing informations bandwidth orderable for this dedicated server
         * interface fullName: dedicated.server.BandwidthvRackOrderable.BandwidthvRackOrderable
         */
        export interface BandwidthvRackOrderable {
            orderable: boolean;
            vrack?: dedicated.server.BandwidthvRackOrderEnum[];
        }
        /**
         *  Different Bandwidth type
         * type fullname: dedicated.server.BandwidthvRackTypeEnum
         */
        export type BandwidthvRackTypeEnum = "included" | "standard"
        /**
         * SGX PRMRR value enum
         * type fullname: dedicated.server.BiosSettingsSgxPrmrrEnum
         */
        export type BiosSettingsSgxPrmrrEnum = "128" | "256" | "32" | "64"
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
         * Dedicated server bandwidth burst
         * type fullname: dedicated.server.BurstStatusEnum
         */
        export type BurstStatusEnum = "active" | "inactive" | "inactiveLocked"
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
         * Time to live in minutes for cache
         * type fullname: dedicated.server.CacheTTLEnum
         */
        export type CacheTTLEnum = 1 | 10 | 15 | 3 | 5
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
         * Firewall attached to this server
         * interface fullName: dedicated.server.Firewall.Firewall
         */
        export interface Firewall {
            enabled: boolean;
            firewall: string;
            ip: string;
            mode: dedicated.server.FirewallModeEnum;
            model?: dedicated.server.FirewallModelEnum;
        }
        /**
         * Dedicated server firewall mode
         * type fullname: dedicated.server.FirewallModeEnum
         */
        export type FirewallModeEnum = "routed" | "transparent"
        /**
         * Firewall model name
         * type fullname: dedicated.server.FirewallModelEnum
         */
        export type FirewallModelEnum = "asa5505" | "asa5510" | "asa5520"
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
         * Available localization for this static IP
         * type fullname: dedicated.server.IpCountryEnum
         */
        export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
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
         * Server IPMI interface
         * interface fullName: dedicated.server.Ipmi.Ipmi
         */
        export interface Ipmi {
            activated: boolean;
            supportedFeatures: dedicated.server.IpmiSupportedFeatures;
        }
        /**
         * Distinct way to acces a KVM IPMI session
         * type fullname: dedicated.server.IpmiAccessTypeEnum
         */
        export type IpmiAccessTypeEnum = "kvmipHtml5URL" | "kvmipJnlp" | "serialOverLanSshKey" | "serialOverLanURL"
        /**
         * A structure describing ipmi access value
         * interface fullName: dedicated.server.IpmiAccessValue.IpmiAccessValue
         */
        export interface IpmiAccessValue {
            expiration?: string;
            value?: string;
        }
        /**
         * A structure describing the IPMI supported features
         * interface fullName: dedicated.server.IpmiSupportedFeatures.IpmiSupportedFeatures
         */
        export interface IpmiSupportedFeatures {
            kvmipHtml5URL: boolean;
            kvmipJnlp: boolean;
            serialOverLanSshKey: boolean;
            serialOverLanURL: boolean;
        }
        /**
         * A structure describing IPMI test result
         * interface fullName: dedicated.server.IpmiTestResult.IpmiTestResult
         */
        export interface IpmiTestResult {
            date?: string;
            status?: string;
        }
        /**
         * Different test can be made on IPMI interface
         * type fullname: dedicated.server.IpmiTestTypeEnum
         */
        export type IpmiTestTypeEnum = "http" | "password" | "ping"
        /**
         * Monitoring interval in seconds
         * type fullname: dedicated.server.MonitoringIntervalEnum
         */
        export type MonitoringIntervalEnum = "1800" | "21600" | "300" | "3600"
        /**
         * Monitoring protocol
         * type fullname: dedicated.server.MonitoringProtocolEnum
         */
        export type MonitoringProtocolEnum = "DNS" | "FTP" | "HTTP" | "IMAP" | "POP" | "SMTP" | "SSH" | "openTCP"
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
            vrack?: dedicated.server.BandwidthvRackDetails;
        }
        /**
         * A structure describing OVH Link Aggregation available modes for this dedicated server
         * interface fullName: dedicated.server.OlaDetails.OlaDetails
         */
        export interface OlaDetails {
            available: boolean;
            supportedModes?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[];
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
         * Dedicated server orderable features
         * type fullname: dedicated.server.OrderableSysFeatureEnum
         */
        export type OrderableSysFeatureEnum = "backupProtocol" | "monitoring"
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
         * Server bandwidth burst details
         * interface fullName: dedicated.server.ServerBurst.ServerBurst
         */
        export interface ServerBurst {
            capacity?: complexType.UnitAndValue<number>;
            status: dedicated.server.BurstStatusEnum;
        }
        /**
         * SPLA license status
         * type fullname: dedicated.server.SplaStatusEnum
         */
        export type SplaStatusEnum = "terminated" | "used" | "waitingToCheck"
        /**
         * SPLA license type
         * type fullname: dedicated.server.SplaTypeEnum
         */
        export type SplaTypeEnum = "os" | "sqlstd" | "sqlweb"
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
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
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
         *  traffic orderable 
         * type fullname: dedicated.server.TrafficOrderEnum
         */
        export type TrafficOrderEnum = "100Mbps-Unlimited" | "250Mbps-Unlimited" | "500Mbps-Unlimited"
        /**
         * A structure describing informations bandwidth orderable for this dedicated server
         * interface fullName: dedicated.server.TrafficOrderable.TrafficOrderable
         */
        export interface TrafficOrderable {
            orderable: boolean;
            traffic?: dedicated.server.TrafficOrderEnum[];
        }
        /**
         *  Different USB key capacity in gigabytes
         * type fullname: dedicated.server.UsbKeyCapacityEnum
         */
        export type UsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64
        /**
         * A structure describing informations about orderable USB keys
         * interface fullName: dedicated.server.UsbKeyOrderableDetails.UsbKeyOrderableDetails
         */
        export interface UsbKeyOrderableDetails {
            capacity: dedicated.server.UsbKeyCapacityEnum[];
            number: number;
            optionRequired?: dedicated.server.OptionRequiredEnum;
            orderable: boolean;
        }
        /**
         * A virtual MAC address associated to one or more IPs
         * interface fullName: dedicated.server.VirtualMac.VirtualMac
         */
        export interface VirtualMac {
            macAddress: string;
            type: dedicated.server.VmacTypeEnum;
        }
        /**
         *  ip address linked with this virtual mac address
         * interface fullName: dedicated.server.VirtualMacManagement.VirtualMacManagement
         */
        export interface VirtualMacManagement {
            ipAddress: string;
            virtualMachineName: string;
        }
        /**
         * Distinct type of virtual mac
         * type fullname: dedicated.server.VmacTypeEnum
         */
        export type VmacTypeEnum = "ovh" | "vmware"
        export namespace backup {
            /**
             * A structure describing informations about the backup cloud feature
             * interface fullName: dedicated.server.backup.BackupContainer.BackupContainer
             */
            export interface BackupContainer {
                cloudProject?: dedicated.server.backup.BackupProject;
                id?: string;
                name?: string;
                quota?: dedicated.server.backup.BackupQuota;
                region?: string;
                sftp?: dedicated.server.backup.BackupSftp;
                swift?: dedicated.server.backup.BackupSwift;
            }
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
            /**
             * A structure describing regenerated passwords
             * interface fullName: dedicated.server.backup.BackupPassword.BackupPassword
             */
            export interface BackupPassword {
                sftpArchive?: string;
                sftpStorage?: string;
                swiftArchive?: string;
                swiftStorage?: string;
            }
            /**
             * Cloud project struct.
             * interface fullName: dedicated.server.backup.BackupProject.BackupProject
             */
            export interface BackupProject {
                description?: string;
                projectId?: string;
            }
            /**
             * A structure describing quota associated to the current container
             * interface fullName: dedicated.server.backup.BackupQuota.BackupQuota
             */
            export interface BackupQuota {
                maxBandwidth?: complexType.UnitAndValue<number>;
                maxStorage?: complexType.UnitAndValue<number>;
                storageUsed?: complexType.UnitAndValue<number>;
                usagePercent?: number;
            }
            /**
             * A structure describing the SFTP access to a container
             * interface fullName: dedicated.server.backup.BackupSftp.BackupSftp
             */
            export interface BackupSftp {
                password?: string;
                url?: string;
                username?: string;
            }
            /**
             * A structure describing the status of your backup
             * interface fullName: dedicated.server.backup.BackupStatus.BackupStatus
             */
            export interface BackupStatus {
                code: dedicated.server.backup.BackupStatusCodeEnum;
                reason?: string;
            }
            /**
             * Possible values for backup status code
             * type fullname: dedicated.server.backup.BackupStatusCodeEnum
             */
            export type BackupStatusCodeEnum = "DELETING" | "ERROR" | "OK" | "SUSPENDED" | "SUSPENDING" | "UNKNOWN" | "WAITING_AGREEMENTS_VALIDATION"
            /**
             * A structure describing the information related to Openstack to reach the container.
             * interface fullName: dedicated.server.backup.BackupSwift.BackupSwift
             */
            export interface BackupSwift {
                authUrl?: string;
                password?: string;
                username?: string;
            }
        }
        /**
         * Service monitoring Email alert
         * interface fullName: dedicated.server.emailAlert.emailAlert
         */
        export interface emailAlert {
            alertId: number;
            email: string;
            enabled: boolean;
            language: dedicated.server.AlertLanguageEnum;
        }
        /**
         * Physical KVM
         * interface fullName: dedicated.server.kvm.kvm
         */
        export interface kvm {
            expiration: string;
            ip?: string;
            name: string;
        }
        /**
         * Available boot options
         * interface fullName: dedicated.server.netbootOption.netbootOption
         */
        export interface netbootOption {
            option: dedicated.server.BootOptionEnum;
            value: string;
        }
        /**
         * Service monitoring details
         * interface fullName: dedicated.server.serviceMonitoring.serviceMonitoring
         */
        export interface serviceMonitoring {
            challengeText?: string;
            enabled: boolean;
            interval: dedicated.server.MonitoringIntervalEnum;
            ip: string;
            monitoringId: number;
            port: number;
            protocol: dedicated.server.MonitoringProtocolEnum;
            url?: string;
        }
        /**
         * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
         * interface fullName: dedicated.server.smsAlert.smsAlert
         */
        export interface smsAlert {
            alertId: number;
            enabled: boolean;
            fromHour?: number;
            language: dedicated.server.AlertLanguageEnum;
            phoneNumberTo: string;
            smsAccount: string;
            toHour?: number;
        }
        /**
         * SPLA licenses management
         * interface fullName: dedicated.server.spla.spla
         */
        export interface spla {
            id: number;
            lastUpdate: string;
            serialNumber: string;
            status: dedicated.server.SplaStatusEnum;
            type: dedicated.server.SplaTypeEnum;
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
        export type VirtualNetworkInterfaceModeEnum = "public" | "vrack" | "vrack_aggregation"
    }
}
export namespace license {
    /**
     * All versions for Windows products
     * type fullname: license.WindowsOsVersionEnum
     */
    export type WindowsOsVersionEnum = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2003_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION" | "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION" | "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION" | "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2012_WEB_EDITION" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES" | "windows-server-2008-license-datacenter-edition-1-cpu" | "windows-server-2008-license-datacenter-edition-2-cpu" | "windows-server-2008-license-datacenter-edition-4-cpu" | "windows-server-2008-license-enterprise-edition-1-cpu" | "windows-server-2008-license-enterprise-edition-2-cpu" | "windows-server-2008-license-enterprise-edition-4-cpu" | "windows-server-2008-license-standard-edition-1-cpu" | "windows-server-2008-license-standard-edition-2-cpu" | "windows-server-2008-license-standard-edition-4-cpu" | "windows-server-2008-license-web-edition-1-cpu" | "windows-server-2008-license-web-edition-2-cpu" | "windows-server-2008-license-web-edition-4-cpu" | "windows-server-2012-license-datacenter-edition-1-cpu" | "windows-server-2012-license-datacenter-edition-2-cpu" | "windows-server-2012-license-datacenter-edition-4-cpu" | "windows-server-2012-license-standard-edition-1-cpu" | "windows-server-2012-license-standard-edition-2-cpu" | "windows-server-2012-license-standard-edition-4-cpu" | "windows-server-2016-license-datacenter-edition-1-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-8-cores" | "windows-server-2016-license-standard-edition-1-cpu-10-cores" | "windows-server-2016-license-standard-edition-1-cpu-12-cores" | "windows-server-2016-license-standard-edition-1-cpu-14-cores" | "windows-server-2016-license-standard-edition-1-cpu-16-cores" | "windows-server-2016-license-standard-edition-1-cpu-18-cores" | "windows-server-2016-license-standard-edition-1-cpu-20-cores" | "windows-server-2016-license-standard-edition-1-cpu-22-cores" | "windows-server-2016-license-standard-edition-1-cpu-24-cores" | "windows-server-2016-license-standard-edition-1-cpu-8-cores" | "windows-server-2016-license-standard-edition-2-cpu-10-cores" | "windows-server-2016-license-standard-edition-2-cpu-12-cores" | "windows-server-2016-license-standard-edition-2-cpu-14-cores" | "windows-server-2016-license-standard-edition-2-cpu-16-cores" | "windows-server-2016-license-standard-edition-2-cpu-18-cores" | "windows-server-2016-license-standard-edition-2-cpu-20-cores" | "windows-server-2016-license-standard-edition-2-cpu-22-cores" | "windows-server-2016-license-standard-edition-2-cpu-24-cores" | "windows-server-2016-license-standard-edition-2-cpu-8-cores" | "windows-server-2016-license-standard-edition-4-cpu-10-cores" | "windows-server-2016-license-standard-edition-4-cpu-12-cores" | "windows-server-2016-license-standard-edition-4-cpu-14-cores" | "windows-server-2016-license-standard-edition-4-cpu-16-cores" | "windows-server-2016-license-standard-edition-4-cpu-18-cores" | "windows-server-2016-license-standard-edition-4-cpu-20-cores" | "windows-server-2016-license-standard-edition-4-cpu-22-cores" | "windows-server-2016-license-standard-edition-4-cpu-24-cores" | "windows-server-2016-license-standard-edition-4-cpu-8-cores" | "windows-server-2019-license-datacenter-edition-10-cores" | "windows-server-2019-license-datacenter-edition-12-cores" | "windows-server-2019-license-datacenter-edition-14-cores" | "windows-server-2019-license-datacenter-edition-16-cores" | "windows-server-2019-license-datacenter-edition-18-cores" | "windows-server-2019-license-datacenter-edition-20-cores" | "windows-server-2019-license-datacenter-edition-22-cores" | "windows-server-2019-license-datacenter-edition-24-cores" | "windows-server-2019-license-datacenter-edition-26-cores" | "windows-server-2019-license-datacenter-edition-28-cores" | "windows-server-2019-license-datacenter-edition-30-cores" | "windows-server-2019-license-datacenter-edition-32-cores" | "windows-server-2019-license-datacenter-edition-34-cores" | "windows-server-2019-license-datacenter-edition-36-cores" | "windows-server-2019-license-datacenter-edition-38-cores" | "windows-server-2019-license-datacenter-edition-40-cores" | "windows-server-2019-license-datacenter-edition-42-cores" | "windows-server-2019-license-datacenter-edition-44-cores" | "windows-server-2019-license-datacenter-edition-46-cores" | "windows-server-2019-license-datacenter-edition-48-cores" | "windows-server-2019-license-datacenter-edition-50-cores" | "windows-server-2019-license-datacenter-edition-52-cores" | "windows-server-2019-license-datacenter-edition-54-cores" | "windows-server-2019-license-datacenter-edition-56-cores" | "windows-server-2019-license-datacenter-edition-58-cores" | "windows-server-2019-license-datacenter-edition-60-cores" | "windows-server-2019-license-datacenter-edition-62-cores" | "windows-server-2019-license-datacenter-edition-64-cores" | "windows-server-2019-license-datacenter-edition-8-cores" | "windows-server-2019-license-standard-edition-10-cores" | "windows-server-2019-license-standard-edition-12-cores" | "windows-server-2019-license-standard-edition-14-cores" | "windows-server-2019-license-standard-edition-16-cores" | "windows-server-2019-license-standard-edition-18-cores" | "windows-server-2019-license-standard-edition-20-cores" | "windows-server-2019-license-standard-edition-22-cores" | "windows-server-2019-license-standard-edition-24-cores" | "windows-server-2019-license-standard-edition-26-cores" | "windows-server-2019-license-standard-edition-28-cores" | "windows-server-2019-license-standard-edition-30-cores" | "windows-server-2019-license-standard-edition-32-cores" | "windows-server-2019-license-standard-edition-34-cores" | "windows-server-2019-license-standard-edition-36-cores" | "windows-server-2019-license-standard-edition-38-cores" | "windows-server-2019-license-standard-edition-40-cores" | "windows-server-2019-license-standard-edition-42-cores" | "windows-server-2019-license-standard-edition-44-cores" | "windows-server-2019-license-standard-edition-46-cores" | "windows-server-2019-license-standard-edition-48-cores" | "windows-server-2019-license-standard-edition-50-cores" | "windows-server-2019-license-standard-edition-52-cores" | "windows-server-2019-license-standard-edition-54-cores" | "windows-server-2019-license-standard-edition-56-cores" | "windows-server-2019-license-standard-edition-58-cores" | "windows-server-2019-license-standard-edition-60-cores" | "windows-server-2019-license-standard-edition-62-cores" | "windows-server-2019-license-standard-edition-64-cores" | "windows-server-2019-license-standard-edition-8-cores"
    /**
     * All SQL Server versions for Windows products
     * type fullname: license.WindowsSqlVersionEnum
     */
    export type WindowsSqlVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION" | "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES"
}
export namespace nichandle {
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
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
export namespace vrack {
    /**
     * vrack tasks
     * interface fullName: vrack.Task.Task
     */
    export interface Task {
        function: string;
        id: number;
        lastUpdate?: string;
        orderId?: number;
        serviceName?: string;
        status: vrack.TaskStatusEnum;
        targetDomain?: string;
        todoDate?: string;
    }
    /**
     * All states a vRack Task can be in
     * type fullname: vrack.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo"
    /**
     * vrack dedicated server interfaces
     * interface fullName: vrack.dedicatedServer.dedicatedServer
     */
    export interface dedicatedServer {
        dedicatedServer: string;
        vrack: string;
    }
}
export namespace zone {
    /**
     * Resource record fieldType
     * type fullname: zone.NamedResolutionFieldTypeEnum
     */
    export type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT"
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
        availabilities: {
            /**
             * List the availability of dedicated server
             * GET /dedicated/server/availabilities
             */
            $get(params: { country: nichandle.OvhSubsidiaryEnum, hardware?: string }): Promise<dedicated.Availabilities[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            raw: {
                /**
                 * List the availability of dedicated server
                 * GET /dedicated/server/availabilities/raw
                 */
                $get(): Promise<dedicated.AvailabilitiesRaw[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        datacenter: {
            availabilities: {
                /**
                 * List the availability of dedicated server
                 * GET /dedicated/server/datacenter/availabilities
                 */
                $get(params?: { datacenters?: string, excludeDatacenters?: boolean, memory?: string, planCode?: string, server?: string, storage?: string }): Promise<dedicated.DatacenterAvailability[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        osAvailabilities: {
            /**
             * List the os available for a specified hardware reference
             * GET /dedicated/server/osAvailabilities
             */
            $get(params: { hardware: string }): Promise<dedicated.OsAvailabilitiesEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        virtualNetworkInterface: {
            $(uuid: string): {
                /**
                 * Get VirtualNetworkInterface details
                 * GET /dedicated/server/virtualNetworkInterface/{uuid}
                 */
                $get(): Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
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
            $put(params?: { bootId?: number, commercialRange?: string, datacenter?: dedicated.DatacenterEnum, ip?: string, linkSpeed?: number, monitoring?: boolean, name?: string, os?: string, professionalUse?: boolean, rack?: string, rescueMail?: string, reverse?: string, rootDevice?: string, serverId?: number, state?: dedicated.server.StateEnum, supportLevel?: dedicated.server.SupportLevelEnum }): Promise<void>;
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
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            burst: {
                /**
                 * Get this object properties
                 * GET /dedicated/server/{serviceName}/burst
                 */
                $get(): Promise<dedicated.server.ServerBurst>;
                /**
                 * Alter this object properties
                 * PUT /dedicated/server/{serviceName}/burst
                 */
                $put(params?: { capacity?: complexType.UnitAndValue<number>, status?: dedicated.server.BurstStatusEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /dedicated/server/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
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
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            features: {
                backupCloud: {
                    /**
                     * Deactivate the cloud backup associated to the server. This does not delete container data.
                     * DELETE /dedicated/server/{serviceName}/features/backupCloud
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/features/backupCloud
                     */
                    $get(): Promise<dedicated.server.BackupCloud>;
                    /**
                     * Create a new storage backup space associated to server
                     * POST /dedicated/server/{serviceName}/features/backupCloud
                     */
                    $post(params?: { cloudProjectId?: string, projectDescription?: string }): Promise<dedicated.server.BackupCloud>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    password: {
                        /**
                         * Change your cloud account password
                         * POST /dedicated/server/{serviceName}/features/backupCloud/password
                         */
                        $post(): Promise<dedicated.server.backup.BackupPassword>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                backupFTP: {
                    /**
                     * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
                     * DELETE /dedicated/server/{serviceName}/features/backupFTP
                     */
                    $delete(): Promise<dedicated.server.Task>;
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/features/backupFTP
                     */
                    $get(): Promise<dedicated.server.BackupFtp>;
                    /**
                     * Create a new Backup FTP space
                     * POST /dedicated/server/{serviceName}/features/backupFTP
                     */
                    $post(): Promise<dedicated.server.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    access: {
                        /**
                         * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
                         * GET /dedicated/server/{serviceName}/features/backupFTP/access
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Create a new Backup FTP ACL
                         * POST /dedicated/server/{serviceName}/features/backupFTP/access
                         */
                        $post(params: { cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean }): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ipBlock: string): {
                            /**
                             * Revoke this ACL
                             * DELETE /dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}
                             */
                            $delete(): Promise<dedicated.server.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}
                             */
                            $get(): Promise<dedicated.server.BackupFtpAcl>;
                            /**
                             * Alter this object properties
                             * PUT /dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}
                             */
                            $put(params?: { cifs?: boolean, ftp?: boolean, ipBlock?: string, isApplied?: boolean, lastUpdate?: string, nfs?: boolean }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    authorizableBlocks: {
                        /**
                         * Get all IP blocks that can be used in the ACL
                         * GET /dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    password: {
                        /**
                         * Change your Backup FTP password
                         * POST /dedicated/server/{serviceName}/features/backupFTP/password
                         */
                        $post(): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                firewall: {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/features/firewall
                     */
                    $get(): Promise<dedicated.server.Firewall>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/server/{serviceName}/features/firewall
                     */
                    $put(params?: { enabled?: boolean, firewall?: string, ip?: string, mode?: dedicated.server.FirewallModeEnum, model?: dedicated.server.FirewallModelEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                ipmi: {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/features/ipmi
                     */
                    $get(): Promise<dedicated.server.Ipmi>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    access: {
                        /**
                         * IPMI access method
                         * GET /dedicated/server/{serviceName}/features/ipmi/access
                         */
                        $get(params: { type: dedicated.server.IpmiAccessTypeEnum }): Promise<dedicated.server.IpmiAccessValue>;
                        /**
                         * Request an acces on KVM IPMI interface
                         * POST /dedicated/server/{serviceName}/features/ipmi/access
                         */
                        $post(params: { ipToAllow?: string, sshKey?: string, ttl: dedicated.server.CacheTTLEnum, type: dedicated.server.IpmiAccessTypeEnum }): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    resetInterface: {
                        /**
                         * Reset KVM IPMI interface
                         * POST /dedicated/server/{serviceName}/features/ipmi/resetInterface
                         */
                        $post(): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    resetSessions: {
                        /**
                         * Reset KVM IPMI sessions
                         * POST /dedicated/server/{serviceName}/features/ipmi/resetSessions
                         */
                        $post(): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    test: {
                        /**
                         * Result of http, ping and identification tests on IPMI interface
                         * GET /dedicated/server/{serviceName}/features/ipmi/test
                         */
                        $get(params: { type: dedicated.server.IpmiTestTypeEnum }): Promise<dedicated.server.IpmiTestResult>;
                        /**
                         * Launch test on KVM IPMI interface
                         * POST /dedicated/server/{serviceName}/features/ipmi/test
                         */
                        $post(params: { ttl: dedicated.server.CacheTTLEnum, type: dedicated.server.IpmiTestTypeEnum }): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                kvm: {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/features/kvm
                     */
                    $get(): Promise<dedicated.server.kvm>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            firewall: {
                binary: {
                    compatible: {
                        /**
                         * Get name binary for asa
                         * GET /dedicated/server/{serviceName}/firewall/binary/compatible
                         */
                        $get(): Promise<dedicated.BinaryFirewall>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    link: {
                        /**
                         * Get url of binary to update firewall asa
                         * GET /dedicated/server/{serviceName}/firewall/binary/link
                         */
                        $get(params: { binaryName: string }): Promise<dedicated.BinaryFirewallLink>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
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
                    $post(params: { details?: dedicated.server.InstallCustom, partitionSchemeName?: string, templateName: string }): Promise<dedicated.server.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            ipBlockMerge: {
                /**
                 * Merge a splitted block and route it to the choosen server. You cannot undo this operation
                 * POST /dedicated/server/{serviceName}/ipBlockMerge
                 */
                $post(params: { block: string }): Promise<dedicated.server.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ipCanBeMovedTo: {
                /**
                 * Check if given IP can be moved to this server
                 * GET /dedicated/server/{serviceName}/ipCanBeMovedTo
                 */
                $get(params: { ip: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ipCountryAvailable: {
                /**
                 * Retrieve available country for IP order
                 * GET /dedicated/server/{serviceName}/ipCountryAvailable
                 */
                $get(): Promise<dedicated.server.IpCountryEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ipMove: {
                /**
                 * Move an Ip failover to this server
                 * POST /dedicated/server/{serviceName}/ipMove
                 */
                $post(params: { ip: string }): Promise<dedicated.server.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            license: {
                compliantWindows: {
                    /**
                     * Get the windows license compliant with your server.
                     * GET /dedicated/server/{serviceName}/license/compliantWindows
                     */
                    $get(): Promise<license.WindowsOsVersionEnum[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                compliantWindowsSqlServer: {
                    /**
                     * Get the windows SQL server license compliant with your server.
                     * GET /dedicated/server/{serviceName}/license/compliantWindowsSqlServer
                     */
                    $get(): Promise<license.WindowsSqlVersionEnum[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                windows: {
                    /**
                     * Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.
                     * POST /dedicated/server/{serviceName}/license/windows
                     */
                    $post(params: { licenseId: string, version: license.WindowsOsVersionEnum }): Promise<dedicated.server.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
            ola: {
                group: {
                    /**
                     * OLA : Group interfaces into an aggregation
                     * POST /dedicated/server/{serviceName}/ola/group
                     */
                    $post(params: { name: string, virtualNetworkInterfaces: string[] }): Promise<dedicated.server.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                ungroup: {
                    /**
                     * OLA : Ungroup interfaces
                     * POST /dedicated/server/{serviceName}/ola/ungroup
                     */
                    $post(params: { virtualNetworkInterface: string }): Promise<dedicated.server.Task[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
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
            orderable: {
                backupStorage: {
                    /**
                     * Get the backup storage orderable with your server.
                     * GET /dedicated/server/{serviceName}/orderable/backupStorage
                     */
                    $get(): Promise<dedicated.server.BackupStorageOrderable>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                bandwidth: {
                    /**
                     * Get bandwidth orderable with your server.
                     * GET /dedicated/server/{serviceName}/orderable/bandwidth
                     */
                    $get(): Promise<dedicated.server.BandwidthOrderable>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                bandwidthvRack: {
                    /**
                     * Get vRack bandwidth orderable with your server.
                     * GET /dedicated/server/{serviceName}/orderable/bandwidthvRack
                     */
                    $get(): Promise<dedicated.server.BandwidthvRackOrderable>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                feature: {
                    /**
                     * Is this feature orderable with your server
                     * GET /dedicated/server/{serviceName}/orderable/feature
                     */
                    $get(params: { feature: dedicated.server.OrderableSysFeatureEnum }): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                ip: {
                    /**
                     * Get IP orderable with your server.
                     * GET /dedicated/server/{serviceName}/orderable/ip
                     */
                    $get(): Promise<dedicated.server.IpOrderable>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                kvm: {
                    /**
                     * Is a KVM orderable with your server
                     * GET /dedicated/server/{serviceName}/orderable/kvm
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                kvmExpress: {
                    /**
                     * Is a KVM express orderable with your server
                     * GET /dedicated/server/{serviceName}/orderable/kvmExpress
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                professionalUse: {
                    /**
                     * Is professional use orderable with your server
                     * GET /dedicated/server/{serviceName}/orderable/professionalUse
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                traffic: {
                    /**
                     * Get orderable traffic with your server.
                     * GET /dedicated/server/{serviceName}/orderable/traffic
                     */
                    $get(): Promise<dedicated.server.TrafficOrderable>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                usbKey: {
                    /**
                     * Get USB keys orderable with your server
                     * GET /dedicated/server/{serviceName}/orderable/usbKey
                     */
                    $get(): Promise<dedicated.server.UsbKeyOrderableDetails>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            reboot: {
                /**
                 * Hard reboot this server
                 * POST /dedicated/server/{serviceName}/reboot
                 */
                $post(): Promise<dedicated.server.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            serviceMonitoring: {
                /**
                 * Service monitoring details
                 * GET /dedicated/server/{serviceName}/serviceMonitoring
                 */
                $get(): Promise<number[]>;
                /**
                 * Add a new service monitoring
                 * POST /dedicated/server/{serviceName}/serviceMonitoring
                 */
                $post(params: { challengeText?: string, enabled: boolean, interval: dedicated.server.MonitoringIntervalEnum, ip: string, port: number, protocol: dedicated.server.MonitoringProtocolEnum, url?: string }): Promise<dedicated.server.serviceMonitoring>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(monitoringId: number): {
                    /**
                     * Remove this service monitoring
                     * DELETE /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}
                     */
                    $get(): Promise<dedicated.server.serviceMonitoring>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}
                     */
                    $put(params?: { challengeText?: string, enabled?: boolean, interval?: dedicated.server.MonitoringIntervalEnum, ip?: string, monitoringId?: number, port?: number, protocol?: dedicated.server.MonitoringProtocolEnum, url?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    alert: {
                        email: {
                            /**
                             * Service monitoring alert by email
                             * GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Add a new email alert
                             * POST /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email
                             */
                            $post(params: { email: string, language: dedicated.server.AlertLanguageEnum }): Promise<dedicated.server.emailAlert>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(alertId: number): {
                                /**
                                 * Remove this Email alert monitoring
                                 * DELETE /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}
                                 */
                                $get(): Promise<dedicated.server.emailAlert>;
                                /**
                                 * Alter this object properties
                                 * PUT /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}
                                 */
                                $put(params?: { alertId?: number, email?: string, enabled?: boolean, language?: dedicated.server.AlertLanguageEnum }): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                        sms: {
                            /**
                             * Service monitoring alert by SMS
                             * GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms
                             */
                            $get(): Promise<number[]>;
                            /**
                             * Create a SMS alert
                             * POST /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms
                             */
                            $post(params: { fromHour?: number, language: dedicated.server.AlertLanguageEnum, phoneNumberTo: string, smsAccount: string, toHour?: number }): Promise<dedicated.server.smsAlert>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(alertId: number): {
                                /**
                                 * Remove this SMS alert
                                 * DELETE /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get this object properties
                                 * GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}
                                 */
                                $get(): Promise<dedicated.server.smsAlert>;
                                /**
                                 * Alter this object properties
                                 * PUT /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}
                                 */
                                $put(params?: { alertId?: number, enabled?: boolean, fromHour?: number, language?: dedicated.server.AlertLanguageEnum, phoneNumberTo?: string, smsAccount?: string, toHour?: number }): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    }
                };
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
            spla: {
                /**
                 * Your own SPLA licenses attached to this dedicated server
                 * GET /dedicated/server/{serviceName}/spla
                 */
                $get(params?: { status?: dedicated.server.SplaStatusEnum, type?: dedicated.server.SplaTypeEnum }): Promise<number[]>;
                /**
                 * Add a new SPLA license
                 * POST /dedicated/server/{serviceName}/spla
                 */
                $post(params: { serialNumber: string, type: dedicated.server.SplaTypeEnum }): Promise<number>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/spla/{id}
                     */
                    $get(): Promise<dedicated.server.spla>;
                    /**
                     * Alter this object properties
                     * PUT /dedicated/server/{serviceName}/spla/{id}
                     */
                    $put(params?: { id?: number, lastUpdate?: string, serialNumber?: string, status?: dedicated.server.SplaStatusEnum, type?: dedicated.server.SplaTypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    revoke: {
                        /**
                         * Revoke an SPLA license
                         * POST /dedicated/server/{serviceName}/spla/{id}/revoke
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
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
                    hardDiskDrive: {
                        /**
                         * Ask for a broken HDD replacement
                         * POST /dedicated/server/{serviceName}/support/replace/hardDiskDrive
                         */
                        $post(params: { comment: string, disks: dedicated.server.SupportReplaceHddInfo[], inverse: boolean }): Promise<support.NewMessageInfo>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /dedicated/server/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            virtualMac: {
                /**
                 * Virtual MAC addresses of the server
                 * GET /dedicated/server/{serviceName}/virtualMac
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a virtual mac to an IP address
                 * POST /dedicated/server/{serviceName}/virtualMac
                 */
                $post(params: { ipAddress: string, type: dedicated.server.VmacTypeEnum, virtualMachineName: string }): Promise<dedicated.server.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(macAddress: string): {
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/virtualMac/{macAddress}
                     */
                    $get(): Promise<dedicated.server.VirtualMac>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    virtualAddress: {
                        /**
                         * List of IPs associated to this Virtual MAC
                         * GET /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add an IP to this Virtual MAC
                         * POST /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress
                         */
                        $post(params: { ipAddress: string, virtualMachineName: string }): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ipAddress: string): {
                            /**
                             * Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted
                             * DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
                             */
                            $delete(): Promise<dedicated.server.Task>;
                            /**
                             * Get this object properties
                             * GET /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
                             */
                            $get(): Promise<dedicated.server.VirtualMacManagement>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    enable: {
                        /**
                         * Enable this VirtualNetworkInterface
                         * POST /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable
                         */
                        $post(): Promise<dedicated.server.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            vrack: {
                /**
                 * Server Vracks
                 * GET /dedicated/server/{serviceName}/vrack
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(vrack: string): {
                    /**
                     * remove this server from this vrack
                     * DELETE /dedicated/server/{serviceName}/vrack/{vrack}
                     */
                    $delete(): Promise<vrack.Task>;
                    /**
                     * Get this object properties
                     * GET /dedicated/server/{serviceName}/vrack/{vrack}
                     */
                    $get(): Promise<vrack.dedicatedServer>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    mrtg: {
                        /**
                         * Retrieve vrack traffic graph values
                         * GET /dedicated/server/{serviceName}/vrack/{vrack}/mrtg
                         */
                        $get(params: { period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum }): Promise<dedicated.server.MrtgTimestampValue[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
        };
    }
}
