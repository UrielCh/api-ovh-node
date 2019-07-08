import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicated/server Models
 */
export namespace complexType {
    //complexType.ChartReturn
    // fullName: complexType.ChartReturn.ChartReturn
    export interface ChartReturn {
        unit?: string;
        values?: complexType.ChartTimestampValue[];
    }
    //complexType.ChartTimestampValue
    // fullName: complexType.ChartTimestampValue.ChartTimestampValue
    export interface ChartTimestampValue {
        timestamp: number;
        value?: number;
    }
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace coreTypes {
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicated {
    //dedicated.Availabilities
    // fullName: dedicated.Availabilities.Availabilities
    export interface Availabilities {
        datacenters: dedicated.AvailabilityDatacenter[];
        hardware?: string;
        region?: dedicated.AvailabilityRegionEnum;
    }
    //dedicated.AvailabilitiesRaw
    // fullName: dedicated.AvailabilitiesRaw.AvailabilitiesRaw
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
    //dedicated.AvailabilityDatacenter
    // fullName: dedicated.AvailabilityDatacenter.AvailabilityDatacenter
    export interface AvailabilityDatacenter {
        availability: dedicated.AvailabilityEnum;
        datacenter: dedicated.AvailabilityDatacenterEnum;
    }
    //dedicated.AvailabilityDatacenterEnum
    export type AvailabilityDatacenterEnum = "bhs" | "default" | "fra" | "gra" | "hil" | "lon" | "rbx" | "rbx-hz" | "sbg" | "sgp" | "syd" | "vin" | "waw"
    //dedicated.AvailabilityEnum
    export type AvailabilityEnum = "1H-high" | "1H-low" | "240H" | "24H" | "72H" | "unavailable" | "unknown"
    //dedicated.AvailabilityRegionEnum
    export type AvailabilityRegionEnum = "europe" | "northAmerica"
    //dedicated.BinaryFirewall
    // fullName: dedicated.BinaryFirewall.BinaryFirewall
    export interface BinaryFirewall {
        asa: string[];
        asdm: string[];
        type: dedicated.ProfileFirewallEnum;
    }
    //dedicated.BinaryFirewallLink
    // fullName: dedicated.BinaryFirewallLink.BinaryFirewallLink
    export interface BinaryFirewallLink {
        url: string;
    }
    //dedicated.DatacenterAvailability
    // fullName: dedicated.DatacenterAvailability.DatacenterAvailability
    export interface DatacenterAvailability {
        datacenters: dedicated.AvailabilityDatacenter[];
        fqn: string;
        memory?: string;
        planCode: string;
        server: string;
        storage?: string;
    }
    //dedicated.DatacenterEnum
    export type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "dc1" | "eri1" | "gra1" | "gra2" | "gsw" | "hil1" | "lim1" | "p19" | "rbx-hz" | "rbx1" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sgp1" | "syd1" | "vin1" | "waw1"
    //dedicated.OsAvailabilitiesEnum
    export type OsAvailabilitiesEnum = "archlinux-installer_64" | "centos5_64" | "centos6-cpanel-latest_64" | "centos6-ovh_64" | "centos6-plesk12_64" | "centos6_64" | "centos7-cpanel-latest_64" | "centos7-directadmin_64" | "centos7-fpga-accelize_64" | "centos7-fpga-intel-opencl_64" | "centos7-plesk125_64" | "centos7-plesk12_64" | "centos7-plesk17_64" | "centos7_64" | "cloudlinux6_64" | "cloudlinux7_64" | "coreos-alpha_64" | "coreos_64" | "debian7-ispconfig3_64" | "debian7-minecraft_64" | "debian7-plesk12_64" | "debian7_64" | "debian8-ispconfig3_64" | "debian8-plesk125_64" | "debian8_64" | "debian8_armhf_32" | "debian9-ispconfig3_64" | "debian9_64" | "debian9_armhf_32" | "dgx1-os-3_64" | "esxi51_64" | "esxi55_64" | "esxi5_64" | "esxi60_64" | "esxi65_64" | "fedora26_64" | "fedora27_64" | "freebsd10-zfs_64" | "freebsd10_64" | "freebsd11-zfs_64" | "gentoo11_64" | "openmediavault3_armhf_32" | "openmediavault_armhf_32" | "opensuse42_64" | "proxmox4-zfs_64" | "proxmox4_64" | "proxmox5-zfs_64" | "proxmox5_64" | "slackware14_64" | "smartos_64" | "solusvm-master-vz_64" | "solusvm-slave-vz_64" | "ubuntu1404-plesk125_64" | "ubuntu1404-server_64" | "ubuntu1510-server_arm64_64" | "ubuntu1510-server_ppc64el_64" | "ubuntu1604-desktop_64" | "ubuntu1604-server_64" | "ubuntu1604-server_armhf_32" | "ubuntu1604-server_ppc64el_64" | "ubuntu1710-server_64" | "win2008r2-dc-virtuozzo46_64" | "win2008r2-dc_64" | "win2008r2-ent-plesk10_64" | "win2008r2-ent-plesk11_64" | "win2008r2-ent-plesk12_64" | "win2008r2-ent-sp2010found_64" | "win2008r2-ent-virtuozzo46_64" | "win2008r2-ent_64" | "win2008r2-std-plesk11_64" | "win2008r2-std-plesk12_64" | "win2008r2-std-sp2010found_64" | "win2008r2-std_64" | "win2008r2-web-plesk11_64" | "win2008r2-web-plesk12_64" | "win2008r2-web-sp2010found_64" | "win2008r2-web_64" | "win2008r2core-dc_64" | "win2008r2core-ent_64" | "win2008r2core-hyperv_64" | "win2008r2core-std_64" | "win2008r2core-web_64" | "win2012-dc_64" | "win2012-hyperv3_64" | "win2012-std-plesk11_64" | "win2012-std-plesk12_64" | "win2012-std_64" | "win2012r2-dc_64" | "win2012r2-hyperv3_64" | "win2012r2-std-plesk12_64" | "win2012r2-std_64" | "win2016-dc_64" | "win2016-std_64" | "win81-pro-sysprep_64" | "xenserver6_64"
    //dedicated.ProfileFirewallEnum
    export type ProfileFirewallEnum = "cisco.asa5505" | "cisco.asa5510" | "cisco.asa5520"
    //dedicated.StatusEnum
    export type StatusEnum = "disable" | "enable"
    //dedicated.TaskFunctionEnum
    export type TaskFunctionEnum = "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    //dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace networkInterfaceController {
        //dedicated.networkInterfaceController.NetworkInterfaceController
        // fullName: dedicated.networkInterfaceController.NetworkInterfaceController.NetworkInterfaceController
        export interface NetworkInterfaceController {
            linkType: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum;
            mac: string;
        }
        //dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum
        export type NetworkInterfaceControllerLinkTypeEnum = "private" | "public"
    }
    export namespace server {
        //dedicated.server.Access
        // fullName: dedicated.server.Access.Access
        export interface Access {
            password: string;
            type: dedicated.server.AccessTypeEnum;
            url?: string;
            user?: string;
        }
        //dedicated.server.AccessTypeEnum
        export type AccessTypeEnum = "DIRECTADMIN_PANEL" | "PLESK_PANEL" | "PROXMOX_PANEL" | "RDP" | "SQL_SERVER" | "SSH" | "WEB_PANEL"
        //dedicated.server.AlertLanguageEnum
        export type AlertLanguageEnum = "cz" | "de" | "en" | "es" | "fi" | "fr" | "it" | "lt" | "nl" | "pl" | "pt"
        //dedicated.server.BackupCloud
        // fullName: dedicated.server.BackupCloud.BackupCloud
        export interface BackupCloud {
            agreements?: number[];
            archive?: dedicated.server.backup.BackupContainer;
            status: dedicated.server.backup.BackupStatus;
            storage?: dedicated.server.backup.BackupContainer;
        }
        //dedicated.server.BackupFtp
        // fullName: dedicated.server.BackupFtp.BackupFtp
        export interface BackupFtp {
            ftpBackupName: string;
            quota?: complexType.UnitAndValue<number>;
            readOnlyDate?: string;
            type: dedicated.server.BackupStorageTypeEnum;
            usage?: complexType.UnitAndValue<number>;
        }
        //dedicated.server.BackupFtpAcl
        // fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
        export interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        //dedicated.server.BackupStorageCapacityEnum
        export type BackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000
        //dedicated.server.BackupStorageOrderable
        // fullName: dedicated.server.BackupStorageOrderable.BackupStorageOrderable
        export interface BackupStorageOrderable {
            capacities?: dedicated.server.BackupStorageCapacityEnum[];
            orderable: boolean;
        }
        //dedicated.server.BackupStorageTypeEnum
        export type BackupStorageTypeEnum = "included" | "storage"
        //dedicated.server.BandwidthDetails
        // fullName: dedicated.server.BandwidthDetails.BandwidthDetails
        export interface BandwidthDetails {
            InternetToOvh?: complexType.UnitAndValue<number>;
            OvhToInternet?: complexType.UnitAndValue<number>;
            OvhToOvh?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthTypeEnum;
        }
        //dedicated.server.BandwidthOrderEnum
        export type BandwidthOrderEnum = 1000 | 2000 | 3000
        //dedicated.server.BandwidthOrderable
        // fullName: dedicated.server.BandwidthOrderable.BandwidthOrderable
        export interface BandwidthOrderable {
            orderable: boolean;
            platinum?: dedicated.server.BandwidthOrderEnum[];
            premium?: dedicated.server.BandwidthOrderEnum[];
            ultimate?: dedicated.server.BandwidthOrderEnum[];
        }
        //dedicated.server.BandwidthTypeEnum
        export type BandwidthTypeEnum = "included" | "platinum" | "premium" | "standard" | "ultimate"
        //dedicated.server.BandwidthvRackDetails
        // fullName: dedicated.server.BandwidthvRackDetails.BandwidthvRackDetails
        export interface BandwidthvRackDetails {
            bandwidth?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthvRackTypeEnum;
        }
        //dedicated.server.BandwidthvRackOrderEnum
        export type BandwidthvRackOrderEnum = 1000 | 3000
        //dedicated.server.BandwidthvRackOrderable
        // fullName: dedicated.server.BandwidthvRackOrderable.BandwidthvRackOrderable
        export interface BandwidthvRackOrderable {
            orderable: boolean;
            vrack?: dedicated.server.BandwidthvRackOrderEnum[];
        }
        //dedicated.server.BandwidthvRackTypeEnum
        export type BandwidthvRackTypeEnum = "included" | "standard"
        //dedicated.server.BootModeEnum
        export type BootModeEnum = "legacy" | "uefi" | "uefi-legacy"
        //dedicated.server.BootOptionEnum
        export type BootOptionEnum = "cpufamily" | "grsec" | "ipv6" | "smp"
        //dedicated.server.BootTypeEnum
        export type BootTypeEnum = "harddisk" | "internal" | "ipxeCustomerScript" | "network" | "rescue"
        //dedicated.server.BurstStatusEnum
        export type BurstStatusEnum = "active" | "inactive" | "inactiveLocked"
        //dedicated.server.CacheTTLEnum
        export type CacheTTLEnum = 1 | 10 | 15 | 3 | 5
        //dedicated.server.CpuFamilyEnum
        export type CpuFamilyEnum = "arm64" | "armhf32" | "ppc64" | "x86" | "x86-ht" | "x86_64"
        //dedicated.server.Dedicated
        // fullName: dedicated.server.Dedicated.Dedicated
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
        //dedicated.server.DiskTypeEnum
        export type DiskTypeEnum = "NVMe" | "SAS" | "SATA" | "SSD" | "Unknown"
        //dedicated.server.Firewall
        // fullName: dedicated.server.Firewall.Firewall
        export interface Firewall {
            enabled: boolean;
            firewall: string;
            ip: string;
            mode: dedicated.server.FirewallModeEnum;
            model?: dedicated.server.FirewallModelEnum;
        }
        //dedicated.server.FirewallModeEnum
        export type FirewallModeEnum = "routed" | "transparent"
        //dedicated.server.FirewallModelEnum
        export type FirewallModelEnum = "asa5505" | "asa5510" | "asa5520"
        //dedicated.server.FormFactorEnum
        export type FormFactorEnum = "0.25u" | "0.5u" | "1u" | "2u" | "3u" | "4u"
        //dedicated.server.HardwareRaidConfiguration
        // fullName: dedicated.server.HardwareRaidConfiguration.HardwareRaidConfiguration
        export interface HardwareRaidConfiguration {
            capacity: complexType.UnitAndValue<number>;
            diskCount: number;
            diskSize: complexType.UnitAndValue<number>;
            diskSpanSize: number;
            mode: dedicated.server.HardwareSpecificationsRaidHardEnum;
            name: string;
            type: string;
        }
        //dedicated.server.HardwareRaidController
        // fullName: dedicated.server.HardwareRaidController.HardwareRaidController
        export interface HardwareRaidController {
            disks: dedicated.server.HardwareRaidDiskGroup[];
            model: string;
            type: string;
        }
        //dedicated.server.HardwareRaidDiskGroup
        // fullName: dedicated.server.HardwareRaidDiskGroup.HardwareRaidDiskGroup
        export interface HardwareRaidDiskGroup {
            capacity: complexType.UnitAndValue<number>;
            names: string[];
            speed: complexType.UnitAndValue<string>;
            type: dedicated.server.DiskTypeEnum;
        }
        //dedicated.server.HardwareRaidProfile
        // fullName: dedicated.server.HardwareRaidProfile.HardwareRaidProfile
        export interface HardwareRaidProfile {
            controllers: dedicated.server.HardwareRaidController[];
        }
        //dedicated.server.HardwareRaidSize
        // fullName: dedicated.server.HardwareRaidSize.HardwareRaidSize
        export interface HardwareRaidSize {
            configurations: dedicated.server.HardwareRaidConfiguration[];
        }
        //dedicated.server.HardwareSpecifications
        // fullName: dedicated.server.HardwareSpecifications.HardwareSpecifications
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
        //dedicated.server.HardwareSpecificationsDisk
        // fullName: dedicated.server.HardwareSpecificationsDisk.HardwareSpecificationsDisk
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
        //dedicated.server.HardwareSpecificationsExpansionCard
        // fullName: dedicated.server.HardwareSpecificationsExpansionCard.HardwareSpecificationsExpansionCard
        export interface HardwareSpecificationsExpansionCard {
            description: string;
            type: dedicated.server.HardwareSpecificationsExpansionCardTypeEnum;
        }
        //dedicated.server.HardwareSpecificationsExpansionCardTypeEnum
        export type HardwareSpecificationsExpansionCardTypeEnum = "fpga" | "gpu"
        //dedicated.server.HardwareSpecificationsRaidHardEnum
        export type HardwareSpecificationsRaidHardEnum = "raid0" | "raid1" | "raid10" | "raid1E" | "raid5" | "raid50" | "raid6" | "raid60"
        //dedicated.server.InstallCustom
        // fullName: dedicated.server.InstallCustom.InstallCustom
        export interface InstallCustom {
            customHostname?: string;
            diskGroupId?: number;
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
        //dedicated.server.InstallTemplate
        // fullName: dedicated.server.InstallTemplate.InstallTemplate
        export interface InstallTemplate {
            ovh?: string[];
            personal?: string[];
        }
        //dedicated.server.InstallationProgressStatus
        // fullName: dedicated.server.InstallationProgressStatus.InstallationProgressStatus
        export interface InstallationProgressStatus {
            elapsedTime: number;
            progress?: dedicated.server.InstallationProgressSteps[];
        }
        //dedicated.server.InstallationProgressStatusEnum
        export type InstallationProgressStatusEnum = "doing" | "done" | "error" | "expired" | "idle" | "pending" | "stopping" | "todo"
        //dedicated.server.InstallationProgressSteps
        // fullName: dedicated.server.InstallationProgressSteps.InstallationProgressSteps
        export interface InstallationProgressSteps {
            comment: string;
            error?: string;
            status: dedicated.server.InstallationProgressStatusEnum;
        }
        //dedicated.server.Intervention
        // fullName: dedicated.server.Intervention.Intervention
        export interface Intervention {
            date?: string;
            interventionId: number;
            type?: string;
        }
        //dedicated.server.IpBlockSizeEnum
        export type IpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8
        //dedicated.server.IpCountryEnum
        export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        //dedicated.server.IpOrderable
        // fullName: dedicated.server.IpOrderable.IpOrderable
        export interface IpOrderable {
            ipv4?: dedicated.server.IpOrderableDetails[];
            ipv6?: dedicated.server.IpOrderableDetails[];
        }
        //dedicated.server.IpOrderableDetails
        // fullName: dedicated.server.IpOrderableDetails.IpOrderableDetails
        export interface IpOrderableDetails {
            blockSizes: dedicated.server.IpBlockSizeEnum[];
            included: boolean;
            ipNumber?: number;
            number: number;
            optionRequired?: dedicated.server.OptionRequiredEnum;
            type: dedicated.server.IpTypeOrderableEnum;
        }
        //dedicated.server.IpTypeOrderableEnum
        export type IpTypeOrderableEnum = "failover" | "static" | "unshielded"
        //dedicated.server.Ipmi
        // fullName: dedicated.server.Ipmi.Ipmi
        export interface Ipmi {
            activated: boolean;
            supportedFeatures: dedicated.server.IpmiSupportedFeatures;
        }
        //dedicated.server.IpmiAccessTypeEnum
        export type IpmiAccessTypeEnum = "kvmipHtml5URL" | "kvmipJnlp" | "serialOverLanSshKey" | "serialOverLanURL"
        //dedicated.server.IpmiAccessValue
        // fullName: dedicated.server.IpmiAccessValue.IpmiAccessValue
        export interface IpmiAccessValue {
            expiration?: string;
            value?: string;
        }
        //dedicated.server.IpmiSupportedFeatures
        // fullName: dedicated.server.IpmiSupportedFeatures.IpmiSupportedFeatures
        export interface IpmiSupportedFeatures {
            kvmipHtml5URL: boolean;
            kvmipJnlp: boolean;
            serialOverLanSshKey: boolean;
            serialOverLanURL: boolean;
        }
        //dedicated.server.IpmiTestResult
        // fullName: dedicated.server.IpmiTestResult.IpmiTestResult
        export interface IpmiTestResult {
            date?: string;
            status?: string;
        }
        //dedicated.server.IpmiTestTypeEnum
        export type IpmiTestTypeEnum = "http" | "password" | "ping"
        //dedicated.server.MonitoringIntervalEnum
        export type MonitoringIntervalEnum = "1800" | "21600" | "300" | "3600"
        //dedicated.server.MonitoringProtocolEnum
        export type MonitoringProtocolEnum = "DNS" | "FTP" | "HTTP" | "IMAP" | "POP" | "SMTP" | "SSH" | "openTCP"
        //dedicated.server.MrtgPeriodEnum
        export type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly"
        //dedicated.server.MrtgTimestampValue
        // fullName: dedicated.server.MrtgTimestampValue.MrtgTimestampValue
        export interface MrtgTimestampValue {
            timestamp: number;
            value?: complexType.UnitAndValue<number>;
        }
        //dedicated.server.MrtgTypeEnum
        export type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload"
        //dedicated.server.Netboot
        // fullName: dedicated.server.Netboot.Netboot
        export interface Netboot {
            bootId: number;
            bootType: dedicated.server.BootTypeEnum;
            description: string;
            kernel: string;
        }
        //dedicated.server.NetworkSpecifications
        // fullName: dedicated.server.NetworkSpecifications.NetworkSpecifications
        export interface NetworkSpecifications {
            bandwidth?: dedicated.server.BandwidthDetails;
            connection?: complexType.UnitAndValue<number>;
            routing?: dedicated.server.RoutingDetails;
            switching?: dedicated.server.SwitchingDetails;
            traffic?: dedicated.server.TrafficDetails;
            vrack?: dedicated.server.BandwidthvRackDetails;
        }
        //dedicated.server.Option
        // fullName: dedicated.server.Option.Option
        export interface Option {
            option: dedicated.server.OptionEnum;
            state: dedicated.server.OptionStateEnum;
        }
        //dedicated.server.OptionEnum
        export type OptionEnum = "BACKUPPROTOCOL" | "BANDWIDTH" | "BANDWIDTH_VRACK" | "TRAFFIC" | "TRAFFIC_DISCOVER" | "TUNING" | "TUNING_FIREWALL" | "TUNING_KVM" | "USB_KVM_IP"
        //dedicated.server.OptionRequiredEnum
        export type OptionRequiredEnum = "professionalUse"
        //dedicated.server.OptionStateEnum
        export type OptionStateEnum = "released" | "subscribed"
        //dedicated.server.OrderableSysFeatureEnum
        export type OrderableSysFeatureEnum = "backupProtocol" | "monitoring"
        //dedicated.server.RoutingDetails
        // fullName: dedicated.server.RoutingDetails.RoutingDetails
        export interface RoutingDetails {
            ipv4?: dedicated.server.RoutingDetailsIpv4;
            ipv6?: dedicated.server.RoutingDetailsIpv6;
        }
        //dedicated.server.RoutingDetailsIpv4
        // fullName: dedicated.server.RoutingDetailsIpv4.RoutingDetailsIpv4
        export interface RoutingDetailsIpv4 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        //dedicated.server.RoutingDetailsIpv6
        // fullName: dedicated.server.RoutingDetailsIpv6.RoutingDetailsIpv6
        export interface RoutingDetailsIpv6 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        //dedicated.server.Rtm
        // fullName: dedicated.server.Rtm.Rtm
        export interface Rtm {
            currentVersion?: string;
            installedVersion?: string;
            needsUpdate: boolean;
        }
        //dedicated.server.RtmChartPeriodEnum
        export type RtmChartPeriodEnum = "daily" | "monthly" | "weekly" | "yearly"
        //dedicated.server.RtmChartTypeEnum
        export type RtmChartTypeEnum = "cpu" | "loadavg1" | "loadavg15" | "loadavg5" | "memory" | "processCount" | "processRunning" | "swap"
        //dedicated.server.RtmCommandSize
        // fullName: dedicated.server.RtmCommandSize.RtmCommandSize
        export interface RtmCommandSize {
            command?: string;
            memory?: complexType.UnitAndValue<number>;
        }
        //dedicated.server.RtmConnection
        // fullName: dedicated.server.RtmConnection.RtmConnection
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
        //dedicated.server.RtmCpu
        // fullName: dedicated.server.RtmCpu.RtmCpu
        export interface RtmCpu {
            cache?: complexType.UnitAndValue<number>;
            core?: number;
            freq?: complexType.UnitAndValue<number>;
            name?: string;
        }
        //dedicated.server.RtmDisk
        // fullName: dedicated.server.RtmDisk.RtmDisk
        export interface RtmDisk {
            capacity?: complexType.UnitAndValue<number>;
            disk: string;
            model?: string;
            temperature?: complexType.UnitAndValue<number>;
        }
        //dedicated.server.RtmDiskSmart
        // fullName: dedicated.server.RtmDiskSmart.RtmDiskSmart
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
        //dedicated.server.RtmLoad
        // fullName: dedicated.server.RtmLoad.RtmLoad
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
        //dedicated.server.RtmMemory
        // fullName: dedicated.server.RtmMemory.RtmMemory
        export interface RtmMemory {
            capacity?: complexType.UnitAndValue<number>;
            slot?: string;
        }
        //dedicated.server.RtmMotherboardHw
        // fullName: dedicated.server.RtmMotherboardHw.RtmMotherboardHw
        export interface RtmMotherboardHw {
            manufacturer?: string;
            name?: string;
        }
        //dedicated.server.RtmOs
        // fullName: dedicated.server.RtmOs.RtmOs
        export interface RtmOs {
            kernelRelease?: string;
            kernelVersion?: string;
            release?: string;
        }
        //dedicated.server.RtmPartition
        // fullName: dedicated.server.RtmPartition.RtmPartition
        export interface RtmPartition {
            inodeUsage?: complexType.UnitAndValue<number>;
            mountPoint?: string;
            partition: string;
            usage?: complexType.UnitAndValue<number>;
        }
        //dedicated.server.RtmPci
        // fullName: dedicated.server.RtmPci.RtmPci
        export interface RtmPci {
            bus?: string;
            device?: string;
        }
        //dedicated.server.RtmRaid
        // fullName: dedicated.server.RtmRaid.RtmRaid
        export interface RtmRaid {
            unit: string;
        }
        //dedicated.server.RtmRaidStatusEnum
        export type RtmRaidStatusEnum = "KO" | "OK" | "REBUILDING" | "UNKNOWN"
        //dedicated.server.RtmRaidVolume
        // fullName: dedicated.server.RtmRaidVolume.RtmRaidVolume
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
        //dedicated.server.RtmRaidVolumePort
        // fullName: dedicated.server.RtmRaidVolumePort.RtmRaidVolumePort
        export interface RtmRaidVolumePort {
            capacity?: complexType.UnitAndValue<number>;
            disk?: string;
            model?: string;
            port?: string;
            serial?: string;
            status?: dedicated.server.RtmRaidStatusEnum;
            syncprogress?: string;
        }
        //dedicated.server.ServerBurst
        // fullName: dedicated.server.ServerBurst.ServerBurst
        export interface ServerBurst {
            capacity?: complexType.UnitAndValue<number>;
            status: dedicated.server.BurstStatusEnum;
        }
        //dedicated.server.SplaStatusEnum
        export type SplaStatusEnum = "terminated" | "used" | "waitingToCheck"
        //dedicated.server.SplaTypeEnum
        export type SplaTypeEnum = "os" | "sqlstd" | "sqlweb"
        //dedicated.server.StateEnum
        export type StateEnum = "error" | "hacked" | "hackedBlocked" | "ok"
        //dedicated.server.SupportLevelEnum
        export type SupportLevelEnum = "critical" | "fastpath" | "gs" | "pro"
        //dedicated.server.SupportLevelOrderable
        // fullName: dedicated.server.SupportLevelOrderable.SupportLevelOrderable
        export interface SupportLevelOrderable {
            levels?: dedicated.server.SupportLevelOrderableEnum[];
            orderable: boolean;
        }
        //dedicated.server.SupportLevelOrderableEnum
        export type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs"
        //dedicated.server.SupportReplaceHddInfo
        // fullName: dedicated.server.SupportReplaceHddInfo.SupportReplaceHddInfo
        export interface SupportReplaceHddInfo {
            disk_serial: string;
            slot_id?: number;
        }
        //dedicated.server.SwitchingDetails
        // fullName: dedicated.server.SwitchingDetails.SwitchingDetails
        export interface SwitchingDetails {
            name?: string;
        }
        //dedicated.server.Task
        // fullName: dedicated.server.Task.Task
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
        }
        //dedicated.server.TemplateCaps
        // fullName: dedicated.server.TemplateCaps.TemplateCaps
        export interface TemplateCaps {
            hybridSupport: boolean;
        }
        //dedicated.server.TrafficDetails
        // fullName: dedicated.server.TrafficDetails.TrafficDetails
        export interface TrafficDetails {
            inputQuotaSize?: complexType.UnitAndValue<number>;
            inputQuotaUsed?: complexType.UnitAndValue<number>;
            isThrottled?: boolean;
            outputQuotaSize?: complexType.UnitAndValue<number>;
            outputQuotaUsed?: complexType.UnitAndValue<number>;
            resetQuotaDate?: string;
        }
        //dedicated.server.TrafficOrderEnum
        export type TrafficOrderEnum = "100Mbps-Unlimited" | "250Mbps-Unlimited" | "500Mbps-Unlimited"
        //dedicated.server.TrafficOrderable
        // fullName: dedicated.server.TrafficOrderable.TrafficOrderable
        export interface TrafficOrderable {
            orderable: boolean;
            traffic?: dedicated.server.TrafficOrderEnum[];
        }
        //dedicated.server.UsbKeyCapacityEnum
        export type UsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64
        //dedicated.server.UsbKeyOrderableDetails
        // fullName: dedicated.server.UsbKeyOrderableDetails.UsbKeyOrderableDetails
        export interface UsbKeyOrderableDetails {
            capacity: dedicated.server.UsbKeyCapacityEnum[];
            number: number;
            optionRequired?: dedicated.server.OptionRequiredEnum;
            orderable: boolean;
        }
        //dedicated.server.VirtualMac
        // fullName: dedicated.server.VirtualMac.VirtualMac
        export interface VirtualMac {
            macAddress: string;
            type: dedicated.server.VmacTypeEnum;
        }
        //dedicated.server.VirtualMacManagement
        // fullName: dedicated.server.VirtualMacManagement.VirtualMacManagement
        export interface VirtualMacManagement {
            ipAddress: string;
            virtualMachineName: string;
        }
        //dedicated.server.VmacTypeEnum
        export type VmacTypeEnum = "ovh" | "vmware"
        export namespace backup {
            //dedicated.server.backup.BackupContainer
            // fullName: dedicated.server.backup.BackupContainer.BackupContainer
            export interface BackupContainer {
                cloudProject?: dedicated.server.backup.BackupProject;
                id?: string;
                name?: string;
                quota?: dedicated.server.backup.BackupQuota;
                region?: string;
                sftp?: dedicated.server.backup.BackupSftp;
                swift?: dedicated.server.backup.BackupSwift;
            }
            //dedicated.server.backup.BackupOffer
            // fullName: dedicated.server.backup.BackupOffer.BackupOffer
            export interface BackupOffer {
                maxArchive?: complexType.UnitAndValue<number>;
                maxBandwidthArchive?: complexType.UnitAndValue<number>;
                maxBandwidthStorage?: complexType.UnitAndValue<number>;
                maxStorage?: complexType.UnitAndValue<number>;
            }
            //dedicated.server.backup.BackupPassword
            // fullName: dedicated.server.backup.BackupPassword.BackupPassword
            export interface BackupPassword {
                sftpArchive?: string;
                sftpStorage?: string;
                swiftArchive?: string;
                swiftStorage?: string;
            }
            //dedicated.server.backup.BackupProject
            // fullName: dedicated.server.backup.BackupProject.BackupProject
            export interface BackupProject {
                description?: string;
                projectId?: string;
            }
            //dedicated.server.backup.BackupQuota
            // fullName: dedicated.server.backup.BackupQuota.BackupQuota
            export interface BackupQuota {
                maxBandwidth?: complexType.UnitAndValue<number>;
                maxStorage?: complexType.UnitAndValue<number>;
                storageUsed?: complexType.UnitAndValue<number>;
                usagePercent?: number;
            }
            //dedicated.server.backup.BackupSftp
            // fullName: dedicated.server.backup.BackupSftp.BackupSftp
            export interface BackupSftp {
                password?: string;
                url?: string;
                username?: string;
            }
            //dedicated.server.backup.BackupStatus
            // fullName: dedicated.server.backup.BackupStatus.BackupStatus
            export interface BackupStatus {
                code: dedicated.server.backup.BackupStatusCodeEnum;
                reason?: string;
            }
            //dedicated.server.backup.BackupStatusCodeEnum
            export type BackupStatusCodeEnum = "DELETING" | "ERROR" | "OK" | "SUSPENDED" | "SUSPENDING" | "UNKNOWN" | "WAITING_AGREEMENTS_VALIDATION"
            //dedicated.server.backup.BackupSwift
            // fullName: dedicated.server.backup.BackupSwift.BackupSwift
            export interface BackupSwift {
                authUrl?: string;
                password?: string;
                username?: string;
            }
        }
        //dedicated.server.emailAlert
        // fullName: dedicated.server.emailAlert.emailAlert
        export interface emailAlert {
            alertId: number;
            email: string;
            enabled: boolean;
            language: dedicated.server.AlertLanguageEnum;
        }
        //dedicated.server.kvm
        // fullName: dedicated.server.kvm.kvm
        export interface kvm {
            expiration: string;
            ip?: string;
            name: string;
        }
        //dedicated.server.netbootOption
        // fullName: dedicated.server.netbootOption.netbootOption
        export interface netbootOption {
            option: dedicated.server.BootOptionEnum;
            value: string;
        }
        //dedicated.server.serviceMonitoring
        // fullName: dedicated.server.serviceMonitoring.serviceMonitoring
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
        //dedicated.server.smsAlert
        // fullName: dedicated.server.smsAlert.smsAlert
        export interface smsAlert {
            alertId: number;
            enabled: boolean;
            fromHour?: number;
            language: dedicated.server.AlertLanguageEnum;
            phoneNumberTo: string;
            smsAccount: string;
            toHour?: number;
        }
        //dedicated.server.spla
        // fullName: dedicated.server.spla.spla
        export interface spla {
            id: number;
            lastUpdate: string;
            serialNumber: string;
            status: dedicated.server.SplaStatusEnum;
            type: dedicated.server.SplaTypeEnum;
        }
    }
    export namespace virtualNetworkInterface {
        //dedicated.virtualNetworkInterface.VirtualNetworkInterface
        // fullName: dedicated.virtualNetworkInterface.VirtualNetworkInterface.VirtualNetworkInterface
        export interface VirtualNetworkInterface {
            mode: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
            name: string;
            serverName: string;
            uuid: string;
            vrack?: string;
        }
        //dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum
        export type VirtualNetworkInterfaceModeEnum = "public" | "vrack"
    }
}
export namespace license {
    //license.WindowsOsVersionEnum
    export type WindowsOsVersionEnum = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2003_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION" | "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION" | "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION" | "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2012_WEB_EDITION" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES" | "windows-server-2008-license-datacenter-edition-1-cpu" | "windows-server-2008-license-datacenter-edition-2-cpu" | "windows-server-2008-license-datacenter-edition-4-cpu" | "windows-server-2008-license-enterprise-edition-1-cpu" | "windows-server-2008-license-enterprise-edition-2-cpu" | "windows-server-2008-license-enterprise-edition-4-cpu" | "windows-server-2008-license-standard-edition-1-cpu" | "windows-server-2008-license-standard-edition-2-cpu" | "windows-server-2008-license-standard-edition-4-cpu" | "windows-server-2008-license-web-edition-1-cpu" | "windows-server-2008-license-web-edition-2-cpu" | "windows-server-2008-license-web-edition-4-cpu" | "windows-server-2012-license-datacenter-edition-1-cpu" | "windows-server-2012-license-datacenter-edition-2-cpu" | "windows-server-2012-license-datacenter-edition-4-cpu" | "windows-server-2012-license-standard-edition-1-cpu" | "windows-server-2012-license-standard-edition-2-cpu" | "windows-server-2012-license-standard-edition-4-cpu" | "windows-server-2016-license-datacenter-edition-1-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-8-cores" | "windows-server-2016-license-standard-edition-1-cpu-10-cores" | "windows-server-2016-license-standard-edition-1-cpu-12-cores" | "windows-server-2016-license-standard-edition-1-cpu-14-cores" | "windows-server-2016-license-standard-edition-1-cpu-16-cores" | "windows-server-2016-license-standard-edition-1-cpu-18-cores" | "windows-server-2016-license-standard-edition-1-cpu-20-cores" | "windows-server-2016-license-standard-edition-1-cpu-22-cores" | "windows-server-2016-license-standard-edition-1-cpu-24-cores" | "windows-server-2016-license-standard-edition-1-cpu-8-cores" | "windows-server-2016-license-standard-edition-2-cpu-10-cores" | "windows-server-2016-license-standard-edition-2-cpu-12-cores" | "windows-server-2016-license-standard-edition-2-cpu-14-cores" | "windows-server-2016-license-standard-edition-2-cpu-16-cores" | "windows-server-2016-license-standard-edition-2-cpu-18-cores" | "windows-server-2016-license-standard-edition-2-cpu-20-cores" | "windows-server-2016-license-standard-edition-2-cpu-22-cores" | "windows-server-2016-license-standard-edition-2-cpu-24-cores" | "windows-server-2016-license-standard-edition-2-cpu-8-cores" | "windows-server-2016-license-standard-edition-4-cpu-10-cores" | "windows-server-2016-license-standard-edition-4-cpu-12-cores" | "windows-server-2016-license-standard-edition-4-cpu-14-cores" | "windows-server-2016-license-standard-edition-4-cpu-16-cores" | "windows-server-2016-license-standard-edition-4-cpu-18-cores" | "windows-server-2016-license-standard-edition-4-cpu-20-cores" | "windows-server-2016-license-standard-edition-4-cpu-22-cores" | "windows-server-2016-license-standard-edition-4-cpu-24-cores" | "windows-server-2016-license-standard-edition-4-cpu-8-cores" | "windows-server-2019-license-datacenter-edition-10-cores" | "windows-server-2019-license-datacenter-edition-12-cores" | "windows-server-2019-license-datacenter-edition-14-cores" | "windows-server-2019-license-datacenter-edition-16-cores" | "windows-server-2019-license-datacenter-edition-18-cores" | "windows-server-2019-license-datacenter-edition-20-cores" | "windows-server-2019-license-datacenter-edition-22-cores" | "windows-server-2019-license-datacenter-edition-24-cores" | "windows-server-2019-license-datacenter-edition-26-cores" | "windows-server-2019-license-datacenter-edition-28-cores" | "windows-server-2019-license-datacenter-edition-30-cores" | "windows-server-2019-license-datacenter-edition-32-cores" | "windows-server-2019-license-datacenter-edition-34-cores" | "windows-server-2019-license-datacenter-edition-36-cores" | "windows-server-2019-license-datacenter-edition-38-cores" | "windows-server-2019-license-datacenter-edition-40-cores" | "windows-server-2019-license-datacenter-edition-42-cores" | "windows-server-2019-license-datacenter-edition-44-cores" | "windows-server-2019-license-datacenter-edition-46-cores" | "windows-server-2019-license-datacenter-edition-48-cores" | "windows-server-2019-license-datacenter-edition-50-cores" | "windows-server-2019-license-datacenter-edition-52-cores" | "windows-server-2019-license-datacenter-edition-54-cores" | "windows-server-2019-license-datacenter-edition-56-cores" | "windows-server-2019-license-datacenter-edition-58-cores" | "windows-server-2019-license-datacenter-edition-60-cores" | "windows-server-2019-license-datacenter-edition-62-cores" | "windows-server-2019-license-datacenter-edition-64-cores" | "windows-server-2019-license-datacenter-edition-8-cores" | "windows-server-2019-license-standard-edition-10-cores" | "windows-server-2019-license-standard-edition-12-cores" | "windows-server-2019-license-standard-edition-14-cores" | "windows-server-2019-license-standard-edition-16-cores" | "windows-server-2019-license-standard-edition-18-cores" | "windows-server-2019-license-standard-edition-20-cores" | "windows-server-2019-license-standard-edition-22-cores" | "windows-server-2019-license-standard-edition-24-cores" | "windows-server-2019-license-standard-edition-26-cores" | "windows-server-2019-license-standard-edition-28-cores" | "windows-server-2019-license-standard-edition-30-cores" | "windows-server-2019-license-standard-edition-32-cores" | "windows-server-2019-license-standard-edition-34-cores" | "windows-server-2019-license-standard-edition-36-cores" | "windows-server-2019-license-standard-edition-38-cores" | "windows-server-2019-license-standard-edition-40-cores" | "windows-server-2019-license-standard-edition-42-cores" | "windows-server-2019-license-standard-edition-44-cores" | "windows-server-2019-license-standard-edition-46-cores" | "windows-server-2019-license-standard-edition-48-cores" | "windows-server-2019-license-standard-edition-50-cores" | "windows-server-2019-license-standard-edition-52-cores" | "windows-server-2019-license-standard-edition-54-cores" | "windows-server-2019-license-standard-edition-56-cores" | "windows-server-2019-license-standard-edition-58-cores" | "windows-server-2019-license-standard-edition-60-cores" | "windows-server-2019-license-standard-edition-62-cores" | "windows-server-2019-license-standard-edition-64-cores" | "windows-server-2019-license-standard-edition-8-cores"
    //license.WindowsSqlVersionEnum
    export type WindowsSqlVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION" | "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES"
}
export namespace nichandle {
    //nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
}
export namespace secondaryDns {
    //secondaryDns.SecondaryDNS
    // fullName: secondaryDns.SecondaryDNS.SecondaryDNS
    export interface SecondaryDNS {
        creationDate: string;
        dns: string;
        domain: string;
        ipMaster: string;
    }
    //secondaryDns.SecondaryDNSCheckField
    // fullName: secondaryDns.SecondaryDNSCheckField.SecondaryDNSCheckField
    export interface SecondaryDNSCheckField {
        fieldType: zoneNamedResolutionFieldTypeEnum;
        fieldValue: string;
        subDomain: string;
    }
    //secondaryDns.SecondaryDNSNameServer
    // fullName: secondaryDns.SecondaryDNSNameServer.SecondaryDNSNameServer
    export interface SecondaryDNSNameServer {
        hostname: string;
        ip: string;
        ipv6?: string;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    //service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    //service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    //service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    //service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    //services.Service
    // fullName: services.Service.Service
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
    //support.NewMessageInfo
    // fullName: support.NewMessageInfo.NewMessageInfo
    export interface NewMessageInfo {
        messageId: number;
        ticketId: number;
        ticketNumber: number;
    }
}
export namespace vrack {
    //vrack.Task
    // fullName: vrack.Task.Task
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
    //vrack.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo"
    //vrack.dedicatedServer
    // fullName: vrack.dedicatedServer.dedicatedServer
    export interface dedicatedServer {
        dedicatedServer: string;
        vrack: string;
    }
}
export namespace zone {
    //zone.NamedResolutionFieldTypeEnum
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
 * Api Proxy model
 */// Apis harmony
// path /dedicated
export interface Dedicated{
    server: {
        // GET /dedicated/server
        $get(): Promise<string[]>;
        availabilities: {
            // GET /dedicated/server/availabilities
            $get(param?: {country: nichandle.OvhSubsidiaryEnum, hardware?: string}): Promise<dedicated.Availabilities[]>;
            raw: {
                // GET /dedicated/server/availabilities/raw
                $get(): Promise<dedicated.AvailabilitiesRaw[]>;
            }
        }
        datacenter: {
            availabilities: {
                // GET /dedicated/server/datacenter/availabilities
                $get(param?: {datacenters?: string, excludeDatacenters?: boolean, memory?: string, planCode?: string, server?: string, storage?: string}): Promise<dedicated.DatacenterAvailability[]>;
            }
        }
        osAvailabilities: {
            // GET /dedicated/server/osAvailabilities
            $get(param?: {hardware: string}): Promise<dedicated.OsAvailabilitiesEnum[]>;
        }
        virtualNetworkInterface: {
            $(uuid: string): {
                // GET /dedicated/server/virtualNetworkInterface/{uuid}
                $get(): Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
            };
        }
        $(serviceName: string): {
            // GET /dedicated/server/{serviceName}
            $get(): Promise<dedicated.server.Dedicated>;
            // PUT /dedicated/server/{serviceName}
            $put(body?: {body: dedicated.server.Dedicated}): Promise<void>;
            authenticationSecret: {
                // POST /dedicated/server/{serviceName}/authenticationSecret
                $post(): Promise<dedicated.server.Access[]>;
            }
            backupCloudOfferDetails: {
                // GET /dedicated/server/{serviceName}/backupCloudOfferDetails
                $get(): Promise<dedicated.server.backup.BackupOffer>;
            }
            boot: {
                // GET /dedicated/server/{serviceName}/boot
                $get(param?: {bootType?: dedicated.server.BootTypeEnum}): Promise<number[]>;
                $(bootId: number): {
                    // GET /dedicated/server/{serviceName}/boot/{bootId}
                    $get(): Promise<dedicated.server.Netboot>;
                    option: {
                        // GET /dedicated/server/{serviceName}/boot/{bootId}/option
                        $get(): Promise<dedicated.server.BootOptionEnum[]>;
                        $(option: dedicated.server.BootOptionEnum): {
                            // GET /dedicated/server/{serviceName}/boot/{bootId}/option/{option}
                            $get(): Promise<dedicated.server.netbootOption>;
                        };
                    }
                };
            }
            burst: {
                // GET /dedicated/server/{serviceName}/burst
                $get(): Promise<dedicated.server.ServerBurst>;
                // PUT /dedicated/server/{serviceName}/burst
                $put(body?: {body: dedicated.server.ServerBurst}): Promise<void>;
            }
            changeContact: {
                // POST /dedicated/server/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination: {
                // POST /dedicated/server/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            features: {
                backupCloud: {
                    // DELETE /dedicated/server/{serviceName}/features/backupCloud
                    $delete(): Promise<void>;
                    // GET /dedicated/server/{serviceName}/features/backupCloud
                    $get(): Promise<dedicated.server.BackupCloud>;
                    // POST /dedicated/server/{serviceName}/features/backupCloud
                    $post(body?: {cloudProjectId?: string, projectDescription?: string}): Promise<dedicated.server.BackupCloud>;
                    password: {
                        // POST /dedicated/server/{serviceName}/features/backupCloud/password
                        $post(): Promise<dedicated.server.backup.BackupPassword>;
                    }
                }
                backupFTP: {
                    // DELETE /dedicated/server/{serviceName}/features/backupFTP
                    $delete(): Promise<dedicated.server.Task>;
                    // GET /dedicated/server/{serviceName}/features/backupFTP
                    $get(): Promise<dedicated.server.BackupFtp>;
                    // POST /dedicated/server/{serviceName}/features/backupFTP
                    $post(): Promise<dedicated.server.Task>;
                    access: {
                        // GET /dedicated/server/{serviceName}/features/backupFTP/access
                        $get(): Promise<string[]>;
                        // POST /dedicated/server/{serviceName}/features/backupFTP/access
                        $post(body?: {cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean}): Promise<dedicated.server.Task>;
                        $(ipBlock: string): {
                            // DELETE /dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}
                            $delete(): Promise<dedicated.server.Task>;
                            // GET /dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}
                            $get(): Promise<dedicated.server.BackupFtpAcl>;
                            // PUT /dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}
                            $put(body?: {body: dedicated.server.BackupFtpAcl}): Promise<void>;
                        };
                    }
                    authorizableBlocks: {
                        // GET /dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks
                        $get(): Promise<string[]>;
                    }
                    password: {
                        // POST /dedicated/server/{serviceName}/features/backupFTP/password
                        $post(): Promise<dedicated.server.Task>;
                    }
                }
                firewall: {
                    // GET /dedicated/server/{serviceName}/features/firewall
                    $get(): Promise<dedicated.server.Firewall>;
                    // PUT /dedicated/server/{serviceName}/features/firewall
                    $put(body?: {body: dedicated.server.Firewall}): Promise<void>;
                }
                ipmi: {
                    // GET /dedicated/server/{serviceName}/features/ipmi
                    $get(): Promise<dedicated.server.Ipmi>;
                    access: {
                        // GET /dedicated/server/{serviceName}/features/ipmi/access
                        $get(param?: {type: dedicated.server.IpmiAccessTypeEnum}): Promise<dedicated.server.IpmiAccessValue>;
                        // POST /dedicated/server/{serviceName}/features/ipmi/access
                        $post(body?: {ipToAllow?: string, sshKey?: string, ttl: dedicated.server.CacheTTLEnum, type: dedicated.server.IpmiAccessTypeEnum}): Promise<dedicated.server.Task>;
                    }
                    resetInterface: {
                        // POST /dedicated/server/{serviceName}/features/ipmi/resetInterface
                        $post(): Promise<dedicated.server.Task>;
                    }
                    resetSessions: {
                        // POST /dedicated/server/{serviceName}/features/ipmi/resetSessions
                        $post(): Promise<dedicated.server.Task>;
                    }
                    test: {
                        // GET /dedicated/server/{serviceName}/features/ipmi/test
                        $get(param?: {type: dedicated.server.IpmiTestTypeEnum}): Promise<dedicated.server.IpmiTestResult>;
                        // POST /dedicated/server/{serviceName}/features/ipmi/test
                        $post(body?: {ttl: dedicated.server.CacheTTLEnum, type: dedicated.server.IpmiTestTypeEnum}): Promise<dedicated.server.Task>;
                    }
                }
                kvm: {
                    // GET /dedicated/server/{serviceName}/features/kvm
                    $get(): Promise<dedicated.server.kvm>;
                }
            }
            firewall: {
                binary: {
                    compatible: {
                        // GET /dedicated/server/{serviceName}/firewall/binary/compatible
                        $get(): Promise<dedicated.BinaryFirewall>;
                    }
                    link: {
                        // GET /dedicated/server/{serviceName}/firewall/binary/link
                        $get(param?: {binaryName: string}): Promise<dedicated.BinaryFirewallLink>;
                    }
                }
            }
            install: {
                compatibleTemplatePartitionSchemes: {
                    // GET /dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes
                    $get(param?: {templateName: string}): Promise<string[]>;
                }
                compatibleTemplates: {
                    // GET /dedicated/server/{serviceName}/install/compatibleTemplates
                    $get(): Promise<dedicated.server.InstallTemplate>;
                }
                hardwareRaidProfile: {
                    // GET /dedicated/server/{serviceName}/install/hardwareRaidProfile
                    $get(): Promise<dedicated.server.HardwareRaidProfile>;
                }
                hardwareRaidSize: {
                    // GET /dedicated/server/{serviceName}/install/hardwareRaidSize
                    $get(param?: {partitionSchemeName: string, templateName: string}): Promise<dedicated.server.HardwareRaidSize>;
                }
                start: {
                    // POST /dedicated/server/{serviceName}/install/start
                    $post(body?: {details?: dedicated.server.InstallCustom, partitionSchemeName?: string, templateName: string}): Promise<dedicated.server.Task>;
                }
                status: {
                    // GET /dedicated/server/{serviceName}/install/status
                    $get(): Promise<dedicated.server.InstallationProgressStatus>;
                }
                templateCapabilities: {
                    // GET /dedicated/server/{serviceName}/install/templateCapabilities
                    $get(param?: {templateName: string}): Promise<dedicated.server.TemplateCaps>;
                }
            }
            intervention: {
                // GET /dedicated/server/{serviceName}/intervention
                $get(): Promise<number[]>;
                $(interventionId: number): {
                    // GET /dedicated/server/{serviceName}/intervention/{interventionId}
                    $get(): Promise<dedicated.server.Intervention>;
                };
            }
            ipBlockMerge: {
                // POST /dedicated/server/{serviceName}/ipBlockMerge
                $post(body?: {block: string}): Promise<dedicated.server.Task>;
            }
            ipCanBeMovedTo: {
                // GET /dedicated/server/{serviceName}/ipCanBeMovedTo
                $get(param?: {ip: string}): Promise<void>;
            }
            ipCountryAvailable: {
                // GET /dedicated/server/{serviceName}/ipCountryAvailable
                $get(): Promise<dedicated.server.IpCountryEnum[]>;
            }
            ipMove: {
                // POST /dedicated/server/{serviceName}/ipMove
                $post(body?: {ip: string}): Promise<dedicated.server.Task>;
            }
            ips: {
                // GET /dedicated/server/{serviceName}/ips
                $get(): Promise<string[]>;
            }
            license: {
                compliantWindows: {
                    // GET /dedicated/server/{serviceName}/license/compliantWindows
                    $get(): Promise<license.WindowsOsVersionEnum[]>;
                }
                compliantWindowsSqlServer: {
                    // GET /dedicated/server/{serviceName}/license/compliantWindowsSqlServer
                    $get(): Promise<license.WindowsSqlVersionEnum[]>;
                }
                windows: {
                    // POST /dedicated/server/{serviceName}/license/windows
                    $post(body?: {licenseId: string, version: license.WindowsOsVersionEnum}): Promise<dedicated.server.Task>;
                }
            }
            mrtg: {
                // GET /dedicated/server/{serviceName}/mrtg
                $get(param?: {period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
            }
            networkInterfaceController: {
                // GET /dedicated/server/{serviceName}/networkInterfaceController
                $get(param?: {linkType?: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum}): Promise<string[]>;
                $(mac: string): {
                    // GET /dedicated/server/{serviceName}/networkInterfaceController/{mac}
                    $get(): Promise<dedicated.networkInterfaceController.NetworkInterfaceController>;
                    mrtg: {
                        // GET /dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg
                        $get(param?: {period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
                    }
                };
            }
            option: {
                // GET /dedicated/server/{serviceName}/option
                $get(): Promise<dedicated.server.OptionEnum[]>;
                $(option: dedicated.server.OptionEnum): {
                    // DELETE /dedicated/server/{serviceName}/option/{option}
                    $delete(): Promise<void>;
                    // GET /dedicated/server/{serviceName}/option/{option}
                    $get(): Promise<dedicated.server.Option>;
                };
            }
            orderable: {
                backupStorage: {
                    // GET /dedicated/server/{serviceName}/orderable/backupStorage
                    $get(): Promise<dedicated.server.BackupStorageOrderable>;
                }
                bandwidth: {
                    // GET /dedicated/server/{serviceName}/orderable/bandwidth
                    $get(): Promise<dedicated.server.BandwidthOrderable>;
                }
                bandwidthvRack: {
                    // GET /dedicated/server/{serviceName}/orderable/bandwidthvRack
                    $get(): Promise<dedicated.server.BandwidthvRackOrderable>;
                }
                feature: {
                    // GET /dedicated/server/{serviceName}/orderable/feature
                    $get(param?: {feature: dedicated.server.OrderableSysFeatureEnum}): Promise<boolean>;
                }
                ip: {
                    // GET /dedicated/server/{serviceName}/orderable/ip
                    $get(): Promise<dedicated.server.IpOrderable>;
                }
                kvm: {
                    // GET /dedicated/server/{serviceName}/orderable/kvm
                    $get(): Promise<boolean>;
                }
                kvmExpress: {
                    // GET /dedicated/server/{serviceName}/orderable/kvmExpress
                    $get(): Promise<boolean>;
                }
                professionalUse: {
                    // GET /dedicated/server/{serviceName}/orderable/professionalUse
                    $get(): Promise<boolean>;
                }
                traffic: {
                    // GET /dedicated/server/{serviceName}/orderable/traffic
                    $get(): Promise<dedicated.server.TrafficOrderable>;
                }
                usbKey: {
                    // GET /dedicated/server/{serviceName}/orderable/usbKey
                    $get(): Promise<dedicated.server.UsbKeyOrderableDetails>;
                }
            }
            reboot: {
                // POST /dedicated/server/{serviceName}/reboot
                $post(): Promise<dedicated.server.Task>;
            }
            secondaryDnsDomains: {
                // GET /dedicated/server/{serviceName}/secondaryDnsDomains
                $get(): Promise<string[]>;
                // POST /dedicated/server/{serviceName}/secondaryDnsDomains
                $post(body?: {domain: string, ip?: string}): Promise<void>;
                $(domain: string): {
                    // DELETE /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                    $delete(): Promise<void>;
                    // GET /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                    $get(): Promise<secondaryDns.SecondaryDNS>;
                    // PUT /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}
                    $put(body?: {body: secondaryDns.SecondaryDNS}): Promise<void>;
                    dnsServer: {
                        // GET /dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
                        $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                    }
                };
            }
            secondaryDnsNameDomainToken: {
                // GET /dedicated/server/{serviceName}/secondaryDnsNameDomainToken
                $get(param?: {domain: string}): Promise<secondaryDns.SecondaryDNSCheckField>;
            }
            secondaryDnsNameServerAvailable: {
                // GET /dedicated/server/{serviceName}/secondaryDnsNameServerAvailable
                $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
            }
            serviceInfos: {
                // GET /dedicated/server/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dedicated/server/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            serviceMonitoring: {
                // GET /dedicated/server/{serviceName}/serviceMonitoring
                $get(): Promise<number[]>;
                // POST /dedicated/server/{serviceName}/serviceMonitoring
                $post(body?: {challengeText?: string, enabled: boolean, interval: dedicated.server.MonitoringIntervalEnum, ip: string, port: number, protocol: dedicated.server.MonitoringProtocolEnum, url?: string}): Promise<dedicated.server.serviceMonitoring>;
                $(monitoringId: number): {
                    // DELETE /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}
                    $delete(): Promise<void>;
                    // GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}
                    $get(): Promise<dedicated.server.serviceMonitoring>;
                    // PUT /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}
                    $put(body?: {body: dedicated.server.serviceMonitoring}): Promise<void>;
                    alert: {
                        email: {
                            // GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email
                            $get(): Promise<number[]>;
                            // POST /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email
                            $post(body?: {email: string, language: dedicated.server.AlertLanguageEnum}): Promise<dedicated.server.emailAlert>;
                            $(alertId: number): {
                                // DELETE /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}
                                $delete(): Promise<void>;
                                // GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}
                                $get(): Promise<dedicated.server.emailAlert>;
                                // PUT /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}
                                $put(body?: {body: dedicated.server.emailAlert}): Promise<void>;
                            };
                        }
                        sms: {
                            // GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms
                            $get(): Promise<number[]>;
                            // POST /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms
                            $post(body?: {fromHour?: number, language: dedicated.server.AlertLanguageEnum, phoneNumberTo: string, smsAccount: string, toHour?: number}): Promise<dedicated.server.smsAlert>;
                            $(alertId: number): {
                                // DELETE /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}
                                $delete(): Promise<void>;
                                // GET /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}
                                $get(): Promise<dedicated.server.smsAlert>;
                                // PUT /dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}
                                $put(body?: {body: dedicated.server.smsAlert}): Promise<void>;
                            };
                        }
                    }
                };
            }
            specifications: {
                hardware: {
                    // GET /dedicated/server/{serviceName}/specifications/hardware
                    $get(): Promise<dedicated.server.HardwareSpecifications>;
                }
                ip: {
                    // GET /dedicated/server/{serviceName}/specifications/ip
                    $get(): Promise<dedicated.server.IpOrderable>;
                }
                network: {
                    // GET /dedicated/server/{serviceName}/specifications/network
                    $get(): Promise<dedicated.server.NetworkSpecifications>;
                }
            }
            spla: {
                // GET /dedicated/server/{serviceName}/spla
                $get(param?: {status?: dedicated.server.SplaStatusEnum, type?: dedicated.server.SplaTypeEnum}): Promise<number[]>;
                // POST /dedicated/server/{serviceName}/spla
                $post(body?: {serialNumber: string, type: dedicated.server.SplaTypeEnum}): Promise<number>;
                $(id: number): {
                    // GET /dedicated/server/{serviceName}/spla/{id}
                    $get(): Promise<dedicated.server.spla>;
                    // PUT /dedicated/server/{serviceName}/spla/{id}
                    $put(body?: {body: dedicated.server.spla}): Promise<void>;
                    revoke: {
                        // POST /dedicated/server/{serviceName}/spla/{id}/revoke
                        $post(): Promise<void>;
                    }
                };
            }
            statistics: {
                // GET /dedicated/server/{serviceName}/statistics
                $get(): Promise<dedicated.server.Rtm>;
                chart: {
                    // GET /dedicated/server/{serviceName}/statistics/chart
                    $get(param?: {period: dedicated.server.RtmChartPeriodEnum, type: dedicated.server.RtmChartTypeEnum}): Promise<complexType.ChartReturn>;
                }
                connection: {
                    // GET /dedicated/server/{serviceName}/statistics/connection
                    $get(): Promise<dedicated.server.RtmConnection[]>;
                }
                cpu: {
                    // GET /dedicated/server/{serviceName}/statistics/cpu
                    $get(): Promise<dedicated.server.RtmCpu>;
                }
                disk: {
                    // GET /dedicated/server/{serviceName}/statistics/disk
                    $get(): Promise<string[]>;
                    $(disk: string): {
                        // GET /dedicated/server/{serviceName}/statistics/disk/{disk}
                        $get(): Promise<dedicated.server.RtmDisk>;
                        smart: {
                            // GET /dedicated/server/{serviceName}/statistics/disk/{disk}/smart
                            $get(): Promise<dedicated.server.RtmDiskSmart>;
                        }
                    };
                }
                load: {
                    // GET /dedicated/server/{serviceName}/statistics/load
                    $get(): Promise<dedicated.server.RtmLoad>;
                }
                memory: {
                    // GET /dedicated/server/{serviceName}/statistics/memory
                    $get(): Promise<dedicated.server.RtmMemory[]>;
                }
                motherboard: {
                    // GET /dedicated/server/{serviceName}/statistics/motherboard
                    $get(): Promise<dedicated.server.RtmMotherboardHw>;
                }
                os: {
                    // GET /dedicated/server/{serviceName}/statistics/os
                    $get(): Promise<dedicated.server.RtmOs>;
                }
                partition: {
                    // GET /dedicated/server/{serviceName}/statistics/partition
                    $get(): Promise<string[]>;
                    $(partition: string): {
                        // GET /dedicated/server/{serviceName}/statistics/partition/{partition}
                        $get(): Promise<dedicated.server.RtmPartition>;
                        chart: {
                            // GET /dedicated/server/{serviceName}/statistics/partition/{partition}/chart
                            $get(param?: {period: dedicated.server.RtmChartPeriodEnum}): Promise<complexType.ChartReturn>;
                        }
                    };
                }
                pci: {
                    // GET /dedicated/server/{serviceName}/statistics/pci
                    $get(): Promise<dedicated.server.RtmPci[]>;
                }
                process: {
                    // GET /dedicated/server/{serviceName}/statistics/process
                    $get(): Promise<dedicated.server.RtmCommandSize[]>;
                }
                raid: {
                    // GET /dedicated/server/{serviceName}/statistics/raid
                    $get(): Promise<string[]>;
                    $(unit: string): {
                        // GET /dedicated/server/{serviceName}/statistics/raid/{unit}
                        $get(): Promise<dedicated.server.RtmRaid>;
                        volume: {
                            // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume
                            $get(): Promise<string[]>;
                            $(volume: string): {
                                // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}
                                $get(): Promise<dedicated.server.RtmRaidVolume>;
                                port: {
                                    // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port
                                    $get(): Promise<string[]>;
                                    $(port: string): {
                                        // GET /dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}
                                        $get(): Promise<dedicated.server.RtmRaidVolumePort>;
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
                        // POST /dedicated/server/{serviceName}/support/replace/hardDiskDrive
                        $post(body?: {comment: string, disks: dedicated.server.SupportReplaceHddInfo[], inverse: boolean}): Promise<support.NewMessageInfo>;
                    }
                }
            }
            task: {
                // GET /dedicated/server/{serviceName}/task
                $get(param?: {function_?: dedicated.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}): Promise<number[]>;
                $(taskId: number): {
                    // GET /dedicated/server/{serviceName}/task/{taskId}
                    $get(): Promise<dedicated.server.Task>;
                    cancel: {
                        // POST /dedicated/server/{serviceName}/task/{taskId}/cancel
                        $post(): Promise<void>;
                    }
                };
            }
            terminate: {
                // POST /dedicated/server/{serviceName}/terminate
                $post(): Promise<string>;
            }
            virtualMac: {
                // GET /dedicated/server/{serviceName}/virtualMac
                $get(): Promise<string[]>;
                // POST /dedicated/server/{serviceName}/virtualMac
                $post(body?: {ipAddress: string, type: dedicated.server.VmacTypeEnum, virtualMachineName: string}): Promise<dedicated.server.Task>;
                $(macAddress: string): {
                    // GET /dedicated/server/{serviceName}/virtualMac/{macAddress}
                    $get(): Promise<dedicated.server.VirtualMac>;
                    virtualAddress: {
                        // GET /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress
                        $get(): Promise<string[]>;
                        // POST /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress
                        $post(body?: {ipAddress: string, virtualMachineName: string}): Promise<dedicated.server.Task>;
                        $(ipAddress: string): {
                            // DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
                            $delete(): Promise<dedicated.server.Task>;
                            // GET /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
                            $get(): Promise<dedicated.server.VirtualMacManagement>;
                        };
                    }
                };
            }
            virtualNetworkInterface: {
                // GET /dedicated/server/{serviceName}/virtualNetworkInterface
                $get(param?: {mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, vrack?: string}): Promise<string[]>;
                $(uuid: string): {
                    // GET /dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}
                    $get(): Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
                };
            }
            vrack: {
                // GET /dedicated/server/{serviceName}/vrack
                $get(): Promise<string[]>;
                $(vrack: string): {
                    // DELETE /dedicated/server/{serviceName}/vrack/{vrack}
                    $delete(): Promise<vrack.Task>;
                    // GET /dedicated/server/{serviceName}/vrack/{vrack}
                    $get(): Promise<vrack.dedicatedServer>;
                    mrtg: {
                        // GET /dedicated/server/{serviceName}/vrack/{vrack}/mrtg
                        $get(param?: {period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}): Promise<dedicated.server.MrtgTimestampValue[]>;
                    }
                };
            }
        };
    }
// Api
  /**
   * Operations about the DEDICATED service
   * List available services
   */
  get(path: '/dedicated/server'): () => Promise<string[]>;
  /**
   * Server informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}'): (params: {serviceName: string}) => Promise<dedicated.server.Dedicated>;
  /**
   * backupCloudOfferDetails operations
   * Get details on offered backup cloud if available for the current server
   */
  get(path: '/dedicated/server/{serviceName}/backupCloudOfferDetails'): (params: {serviceName: string}) => Promise<dedicated.server.backup.BackupOffer>;
  /**
   * List the dedicated.server.Netboot objects
   * Server compatibles netboots
   */
  get(path: '/dedicated/server/{serviceName}/boot'): (params: {serviceName: string, bootType?: dedicated.server.BootTypeEnum}) => Promise<number[]>;
  /**
   * Available boots
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/boot/{bootId}'): (params: {bootId: number, serviceName: string}) => Promise<dedicated.server.Netboot>;
  /**
   * List the dedicated.server.netbootOption objects
   * Option used on this netboot
   */
  get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option'): (params: {bootId: number, serviceName: string}) => Promise<dedicated.server.BootOptionEnum[]>;
  /**
   * Available boot options
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option/{option}'): (params: {bootId: number, option: dedicated.server.BootOptionEnum, serviceName: string}) => Promise<dedicated.server.netbootOption>;
  /**
   * Server bandwidth burst details
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/burst'): (params: {serviceName: string}) => Promise<dedicated.server.ServerBurst>;
  /**
   * Backup Cloud assigned to this server
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/features/backupCloud'): (params: {serviceName: string}) => Promise<dedicated.server.BackupCloud>;
  /**
   * Backup Ftp assigned to this server
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/features/backupFTP'): (params: {serviceName: string}) => Promise<dedicated.server.BackupFtp>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
   */
  get(path: '/dedicated/server/{serviceName}/features/backupFTP/access'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {ipBlock: string, serviceName: string}) => Promise<dedicated.server.BackupFtpAcl>;
  /**
   * authorizableBlocks operations
   * Get all IP blocks that can be used in the ACL
   */
  get(path: '/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Firewall attached to this server
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/features/firewall'): (params: {serviceName: string}) => Promise<dedicated.server.Firewall>;
  /**
   * Server IPMI interface
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/features/ipmi'): (params: {serviceName: string}) => Promise<dedicated.server.Ipmi>;
  /**
   * access operations
   * IPMI access method
   */
  get(path: '/dedicated/server/{serviceName}/features/ipmi/access'): (params: {serviceName: string, type: dedicated.server.IpmiAccessTypeEnum}) => Promise<dedicated.server.IpmiAccessValue>;
  /**
   * test operations
   * Result of http, ping and identification tests on IPMI interface
   */
  get(path: '/dedicated/server/{serviceName}/features/ipmi/test'): (params: {serviceName: string, type: dedicated.server.IpmiTestTypeEnum}) => Promise<dedicated.server.IpmiTestResult>;
  /**
   * Physical KVM
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/features/kvm'): (params: {serviceName: string}) => Promise<dedicated.server.kvm>;
  /**
   * compatible operations
   * Get name binary for asa
   */
  get(path: '/dedicated/server/{serviceName}/firewall/binary/compatible'): (params: {serviceName: string}) => Promise<dedicated.BinaryFirewall>;
  /**
   * link operations
   * Get url of binary to update firewall asa
   */
  get(path: '/dedicated/server/{serviceName}/firewall/binary/link'): (params: {serviceName: string, binaryName: string}) => Promise<dedicated.BinaryFirewallLink>;
  /**
   * compatibleTemplatePartitionSchemes operations
   * Retrieve compatible  install template partitions scheme
   */
  get(path: '/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes'): (params: {serviceName: string, templateName: string}) => Promise<string[]>;
  /**
   * compatibleTemplates operations
   * Retrieve compatible  install templates names
   */
  get(path: '/dedicated/server/{serviceName}/install/compatibleTemplates'): (params: {serviceName: string}) => Promise<dedicated.server.InstallTemplate>;
  /**
   * hardwareRaidProfile operations
   * Retrieve hardware RAID profile
   */
  get(path: '/dedicated/server/{serviceName}/install/hardwareRaidProfile'): (params: {serviceName: string}) => Promise<dedicated.server.HardwareRaidProfile>;
  /**
   * hardwareRaidSize operations
   * Get hardware RAID size for a given configuration
   */
  get(path: '/dedicated/server/{serviceName}/install/hardwareRaidSize'): (params: {serviceName: string, partitionSchemeName: string, templateName: string}) => Promise<dedicated.server.HardwareRaidSize>;
  /**
   * status operations
   * Get installation status
   */
  get(path: '/dedicated/server/{serviceName}/install/status'): (params: {serviceName: string}) => Promise<dedicated.server.InstallationProgressStatus>;
  /**
   * templateCapabilities operations
   * Gives some capabilities regarding the template for the current dedicated server.
   */
  get(path: '/dedicated/server/{serviceName}/install/templateCapabilities'): (params: {serviceName: string, templateName: string}) => Promise<dedicated.server.TemplateCaps>;
  /**
   * List the dedicated.server.Intervention objects
   * technical intervention history
   */
  get(path: '/dedicated/server/{serviceName}/intervention'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Intervention made on this server
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/intervention/{interventionId}'): (params: {interventionId: number, serviceName: string}) => Promise<dedicated.server.Intervention>;
  /**
   * ipCanBeMovedTo operations
   * Check if given IP can be moved to this server
   */
  get(path: '/dedicated/server/{serviceName}/ipCanBeMovedTo'): (params: {serviceName: string, ip: string}) => Promise<void>;
  /**
   * ipCountryAvailable operations
   * Retrieve available country for IP order
   */
  get(path: '/dedicated/server/{serviceName}/ipCountryAvailable'): (params: {serviceName: string}) => Promise<dedicated.server.IpCountryEnum[]>;
  /**
   * ips operations
   * List all ip from server
   */
  get(path: '/dedicated/server/{serviceName}/ips'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * compliantWindows operations
   * Get the windows license compliant with your server.
   */
  get(path: '/dedicated/server/{serviceName}/license/compliantWindows'): (params: {serviceName: string}) => Promise<license.WindowsOsVersionEnum[]>;
  /**
   * compliantWindowsSqlServer operations
   * Get the windows SQL server license compliant with your server.
   */
  get(path: '/dedicated/server/{serviceName}/license/compliantWindowsSqlServer'): (params: {serviceName: string}) => Promise<license.WindowsSqlVersionEnum[]>;
  /**
   * mrtg operations
   * Retrieve traffic graph values
   */
  get(path: '/dedicated/server/{serviceName}/mrtg'): (params: {serviceName: string, period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}) => Promise<dedicated.server.MrtgTimestampValue[]>;
  /**
   * List the dedicated.networkInterfaceController.NetworkInterfaceController objects
   * List server networkInterfaceController
   */
  get(path: '/dedicated/server/{serviceName}/networkInterfaceController'): (params: {serviceName: string, linkType?: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum}) => Promise<string[]>;
  /**
   * Your networkInterfaceController
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}'): (params: {mac: string, serviceName: string}) => Promise<dedicated.networkInterfaceController.NetworkInterfaceController>;
  /**
   * mrtg operations
   * Retrieve traffic graph values
   */
  get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg'): (params: {mac: string, serviceName: string, period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}) => Promise<dedicated.server.MrtgTimestampValue[]>;
  /**
   * List the dedicated.server.Option objects
   * List of dedicated server options
   */
  get(path: '/dedicated/server/{serviceName}/option'): (params: {serviceName: string}) => Promise<dedicated.server.OptionEnum[]>;
  /**
   * Information about the options of a dedicated server
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/option/{option}'): (params: {option: dedicated.server.OptionEnum, serviceName: string}) => Promise<dedicated.server.Option>;
  /**
   * backupStorage operations
   * Get the backup storage orderable with your server.
   */
  get(path: '/dedicated/server/{serviceName}/orderable/backupStorage'): (params: {serviceName: string}) => Promise<dedicated.server.BackupStorageOrderable>;
  /**
   * bandwidth operations
   * Get bandwidth orderable with your server.
   */
  get(path: '/dedicated/server/{serviceName}/orderable/bandwidth'): (params: {serviceName: string}) => Promise<dedicated.server.BandwidthOrderable>;
  /**
   * bandwidthvRack operations
   * Get vRack bandwidth orderable with your server.
   */
  get(path: '/dedicated/server/{serviceName}/orderable/bandwidthvRack'): (params: {serviceName: string}) => Promise<dedicated.server.BandwidthvRackOrderable>;
  /**
   * feature operations
   * Is this feature orderable with your server
   */
  get(path: '/dedicated/server/{serviceName}/orderable/feature'): (params: {serviceName: string, feature: dedicated.server.OrderableSysFeatureEnum}) => Promise<boolean>;
  /**
   * ip operations
   * Get IP orderable with your server.
   */
  get(path: '/dedicated/server/{serviceName}/orderable/ip'): (params: {serviceName: string}) => Promise<dedicated.server.IpOrderable>;
  /**
   * kvm operations
   * Is a KVM orderable with your server
   */
  get(path: '/dedicated/server/{serviceName}/orderable/kvm'): (params: {serviceName: string}) => Promise<boolean>;
  /**
   * kvmExpress operations
   * Is a KVM express orderable with your server
   */
  get(path: '/dedicated/server/{serviceName}/orderable/kvmExpress'): (params: {serviceName: string}) => Promise<boolean>;
  /**
   * professionalUse operations
   * Is professional use orderable with your server
   */
  get(path: '/dedicated/server/{serviceName}/orderable/professionalUse'): (params: {serviceName: string}) => Promise<boolean>;
  /**
   * traffic operations
   * Get orderable traffic with your server.
   */
  get(path: '/dedicated/server/{serviceName}/orderable/traffic'): (params: {serviceName: string}) => Promise<dedicated.server.TrafficOrderable>;
  /**
   * usbKey operations
   * Get USB keys orderable with your server
   */
  get(path: '/dedicated/server/{serviceName}/orderable/usbKey'): (params: {serviceName: string}) => Promise<dedicated.server.UsbKeyOrderableDetails>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * List of secondary dns domain name
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Secondary dns infos
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {domain: string, serviceName: string}) => Promise<secondaryDns.SecondaryDNS>;
  /**
   * dnsServer operations
   * domain name server informations
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer'): (params: {domain: string, serviceName: string}) => Promise<secondaryDns.SecondaryDNSNameServer>;
  /**
   * secondaryDnsNameDomainToken operations
   * DNS field to temporarily add to your zone so that we can verify you are the owner of this domain
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsNameDomainToken'): (params: {serviceName: string, domain: string}) => Promise<secondaryDns.SecondaryDNSCheckField>;
  /**
   * secondaryDnsNameServerAvailable operations
   * Secondary nameServer available for your Server
   */
  get(path: '/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable'): (params: {serviceName: string}) => Promise<secondaryDns.SecondaryDNSNameServer>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the dedicated.server.serviceMonitoring objects
   * Service monitoring details
   */
  get(path: '/dedicated/server/{serviceName}/serviceMonitoring'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Service monitoring details
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}'): (params: {monitoringId: number, serviceName: string}) => Promise<dedicated.server.serviceMonitoring>;
  /**
   * List the dedicated.server.emailAlert objects
   * Service monitoring alert by email
   */
  get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email'): (params: {monitoringId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Service monitoring Email alert
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}'): (params: {alertId: number, monitoringId: number, serviceName: string}) => Promise<dedicated.server.emailAlert>;
  /**
   * List the dedicated.server.smsAlert objects
   * Service monitoring alert by SMS
   */
  get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms'): (params: {monitoringId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}'): (params: {alertId: number, monitoringId: number, serviceName: string}) => Promise<dedicated.server.smsAlert>;
  /**
   * hardware operations
   * Retrieve hardware informations about this dedicated server
   */
  get(path: '/dedicated/server/{serviceName}/specifications/hardware'): (params: {serviceName: string}) => Promise<dedicated.server.HardwareSpecifications>;
  /**
   * ip operations
   * Retrieve IP capabilities about this dedicated server
   */
  get(path: '/dedicated/server/{serviceName}/specifications/ip'): (params: {serviceName: string}) => Promise<dedicated.server.IpOrderable>;
  /**
   * network operations
   * Retrieve network informations about this dedicated server
   */
  get(path: '/dedicated/server/{serviceName}/specifications/network'): (params: {serviceName: string}) => Promise<dedicated.server.NetworkSpecifications>;
  /**
   * List the dedicated.server.spla objects
   * Your own SPLA licenses attached to this dedicated server
   */
  get(path: '/dedicated/server/{serviceName}/spla'): (params: {serviceName: string, status?: dedicated.server.SplaStatusEnum, type?: dedicated.server.SplaTypeEnum}) => Promise<number[]>;
  /**
   * SPLA licenses management
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/spla/{id}'): (params: {id: number, serviceName: string}) => Promise<dedicated.server.spla>;
  /**
   * Servers statistics sent by RTM (Real Time Monitoring)
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics'): (params: {serviceName: string}) => Promise<dedicated.server.Rtm>;
  /**
   * chart operations
   * Retrieve RTM graph values
   */
  get(path: '/dedicated/server/{serviceName}/statistics/chart'): (params: {serviceName: string, period: dedicated.server.RtmChartPeriodEnum, type: dedicated.server.RtmChartTypeEnum}) => Promise<complexType.ChartReturn>;
  /**
   * connection operations
   * Get server opened connections
   */
  get(path: '/dedicated/server/{serviceName}/statistics/connection'): (params: {serviceName: string}) => Promise<dedicated.server.RtmConnection[]>;
  /**
   * cpu operations
   * Get server cpu informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/cpu'): (params: {serviceName: string}) => Promise<dedicated.server.RtmCpu>;
  /**
   * List the dedicated.server.RtmDisk objects
   * Server disks
   */
  get(path: '/dedicated/server/{serviceName}/statistics/disk'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Server disks informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}'): (params: {disk: string, serviceName: string}) => Promise<dedicated.server.RtmDisk>;
  /**
   * smart operations
   * Get disk smart informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}/smart'): (params: {disk: string, serviceName: string}) => Promise<dedicated.server.RtmDiskSmart>;
  /**
   * load operations
   * Get server load
   */
  get(path: '/dedicated/server/{serviceName}/statistics/load'): (params: {serviceName: string}) => Promise<dedicated.server.RtmLoad>;
  /**
   * memory operations
   * Get server memory informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/memory'): (params: {serviceName: string}) => Promise<dedicated.server.RtmMemory[]>;
  /**
   * motherboard operations
   * Get server motherboard hardware informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/motherboard'): (params: {serviceName: string}) => Promise<dedicated.server.RtmMotherboardHw>;
  /**
   * os operations
   * Get server os informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/os'): (params: {serviceName: string}) => Promise<dedicated.server.RtmOs>;
  /**
   * List the dedicated.server.RtmPartition objects
   * Server partitions
   */
  get(path: '/dedicated/server/{serviceName}/statistics/partition'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Server partitions informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}'): (params: {partition: string, serviceName: string}) => Promise<dedicated.server.RtmPartition>;
  /**
   * chart operations
   * Retrieve partition charts
   */
  get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}/chart'): (params: {partition: string, serviceName: string, period: dedicated.server.RtmChartPeriodEnum}) => Promise<complexType.ChartReturn>;
  /**
   * pci operations
   * Get server PCI devices informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/pci'): (params: {serviceName: string}) => Promise<dedicated.server.RtmPci[]>;
  /**
   * process operations
   * Get server process
   */
  get(path: '/dedicated/server/{serviceName}/statistics/process'): (params: {serviceName: string}) => Promise<dedicated.server.RtmCommandSize[]>;
  /**
   * List the dedicated.server.RtmRaid objects
   * Server raid informations
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Server raid informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}'): (params: {serviceName: string, unit: string}) => Promise<dedicated.server.RtmRaid>;
  /**
   * List the dedicated.server.RtmRaidVolume objects
   * Raid unit volumes
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume'): (params: {serviceName: string, unit: string}) => Promise<string[]>;
  /**
   * Server raid volume information
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}'): (params: {serviceName: string, unit: string, volume: string}) => Promise<dedicated.server.RtmRaidVolume>;
  /**
   * List the dedicated.server.RtmRaidVolumePort objects
   * Raid unit volume ports
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port'): (params: {serviceName: string, unit: string, volume: string}) => Promise<string[]>;
  /**
   * Server raid volume port informations
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}'): (params: {port: string, serviceName: string, unit: string, volume: string}) => Promise<dedicated.server.RtmRaidVolumePort>;
  /**
   * List the dedicated.server.Task objects
   * Dedicated server todos
   */
  get(path: '/dedicated/server/{serviceName}/task'): (params: {serviceName: string, function_?: dedicated.TaskFunctionEnum, status?: dedicated.TaskStatusEnum}) => Promise<number[]>;
  /**
   * Server tasks
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<dedicated.server.Task>;
  /**
   * List the dedicated.server.VirtualMac objects
   * Virtual MAC addresses of the server
   */
  get(path: '/dedicated/server/{serviceName}/virtualMac'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * A virtual MAC address associated to one or more IPs
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}'): (params: {macAddress: string, serviceName: string}) => Promise<dedicated.server.VirtualMac>;
  /**
   * List the dedicated.server.VirtualMacManagement objects
   * List of IPs associated to this Virtual MAC
   */
  get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress'): (params: {macAddress: string, serviceName: string}) => Promise<string[]>;
  /**
   *  ip address linked with this virtual mac address
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}'): (params: {ipAddress: string, macAddress: string, serviceName: string}) => Promise<dedicated.server.VirtualMacManagement>;
  /**
   * List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects
   * List server VirtualNetworkInterfaces
   */
  get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface'): (params: {serviceName: string, mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum, name?: string, vrack?: string}) => Promise<string[]>;
  /**
   * Your VirtualNetworkInterface
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}'): (params: {serviceName: string, uuid: string}) => Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
  /**
   * List the vrack.dedicatedServer objects
   * Server Vracks
   */
  get(path: '/dedicated/server/{serviceName}/vrack'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * vrack dedicated server interfaces
   * Get this object properties
   */
  get(path: '/dedicated/server/{serviceName}/vrack/{vrack}'): (params: {serviceName: string, vrack: string}) => Promise<vrack.dedicatedServer>;
  /**
   * mrtg operations
   * Retrieve vrack traffic graph values
   */
  get(path: '/dedicated/server/{serviceName}/vrack/{vrack}/mrtg'): (params: {serviceName: string, vrack: string, period: dedicated.server.MrtgPeriodEnum, type: dedicated.server.MrtgTypeEnum}) => Promise<dedicated.server.MrtgTimestampValue[]>;
  /**
   * List the availability of dedicated server
   * List the availability of dedicated server
   */
  get(path: '/dedicated/server/availabilities'): (params: {country: nichandle.OvhSubsidiaryEnum, hardware?: string}) => Promise<dedicated.Availabilities[]>;
  /**
   * List the availability of dedicated server (RAW)
   * List the availability of dedicated server
   */
  get(path: '/dedicated/server/availabilities/raw'): () => Promise<dedicated.AvailabilitiesRaw[]>;
  /**
   * List the availability of dedicated server
   * List the availability of dedicated server
   */
  get(path: '/dedicated/server/datacenter/availabilities'): (params?: {datacenters?: string, excludeDatacenters?: boolean, memory?: string, planCode?: string, server?: string, storage?: string}) => Promise<dedicated.DatacenterAvailability[]>;
  /**
   * List the operating systems available for a specified hardware reference
   * List the os available for a specified hardware reference
   */
  get(path: '/dedicated/server/osAvailabilities'): (params: {hardware: string}) => Promise<dedicated.OsAvailabilitiesEnum[]>;
  /**
   * Get a VirtualNetworkInterface details
   * Get VirtualNetworkInterface details
   */
  get(path: '/dedicated/server/virtualNetworkInterface/{uuid}'): (params: {uuid: string}) => Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
  /**
   * Server informations
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}'): (params: {serviceName: string, bootId?: number, commercialRange?: string, datacenter?: dedicated.DatacenterEnum, ip?: string, linkSpeed?: number, monitoring?: boolean, name?: string, os?: string, professionalUse?: boolean, rack?: string, rescueMail?: string, reverse?: string, rootDevice?: string, serverId?: number, state?: dedicated.server.StateEnum, supportLevel?: dedicated.server.SupportLevelEnum}) => Promise<void>;
  /**
   * Server bandwidth burst details
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/burst'): (params: {serviceName: string, capacity?: complexType.UnitAndValue<number>, status?: dedicated.server.BurstStatusEnum}) => Promise<void>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {ipBlock: string, serviceName: string, cifs?: boolean, ftp?: boolean, isApplied?: boolean, lastUpdate?: string, nfs?: boolean}) => Promise<void>;
  /**
   * Firewall attached to this server
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/features/firewall'): (params: {serviceName: string, enabled?: boolean, firewall?: string, ip?: string, mode?: dedicated.server.FirewallModeEnum, model?: dedicated.server.FirewallModelEnum}) => Promise<void>;
  /**
   * Secondary dns infos
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {domain: string, serviceName: string, creationDate?: string, dns?: string, ipMaster?: string}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Service monitoring details
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}'): (params: {monitoringId: number, serviceName: string, challengeText?: string, enabled?: boolean, interval?: dedicated.server.MonitoringIntervalEnum, ip?: string, port?: number, protocol?: dedicated.server.MonitoringProtocolEnum, url?: string}) => Promise<void>;
  /**
   * Service monitoring Email alert
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}'): (params: {alertId: number, monitoringId: number, serviceName: string, email?: string, enabled?: boolean, language?: dedicated.server.AlertLanguageEnum}) => Promise<void>;
  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}'): (params: {alertId: number, monitoringId: number, serviceName: string, enabled?: boolean, fromHour?: number, language?: dedicated.server.AlertLanguageEnum, phoneNumberTo?: string, smsAccount?: string, toHour?: number}) => Promise<void>;
  /**
   * SPLA licenses management
   * Alter this object properties
   */
  put(path: '/dedicated/server/{serviceName}/spla/{id}'): (params: {id: number, serviceName: string, lastUpdate?: string, serialNumber?: string, status?: dedicated.server.SplaStatusEnum, type?: dedicated.server.SplaTypeEnum}) => Promise<void>;
  /**
   * authenticationSecret operations
   * Retrieve secret to connect to the server / application
   */
  post(path: '/dedicated/server/{serviceName}/authenticationSecret'): (params: {serviceName: string}) => Promise<dedicated.server.Access[]>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/dedicated/server/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/dedicated/server/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * Backup Cloud assigned to this server
   * Create a new storage backup space associated to server
   */
  post(path: '/dedicated/server/{serviceName}/features/backupCloud'): (params: {serviceName: string, cloudProjectId?: string, projectDescription?: string}) => Promise<dedicated.server.BackupCloud>;
  /**
   * password operations
   * Change your cloud account password
   */
  post(path: '/dedicated/server/{serviceName}/features/backupCloud/password'): (params: {serviceName: string}) => Promise<dedicated.server.backup.BackupPassword>;
  /**
   * Backup Ftp assigned to this server
   * Create a new Backup FTP space
   */
  post(path: '/dedicated/server/{serviceName}/features/backupFTP'): (params: {serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * Create a new Backup FTP ACL
   */
  post(path: '/dedicated/server/{serviceName}/features/backupFTP/access'): (params: {serviceName: string, cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean}) => Promise<dedicated.server.Task>;
  /**
   * password operations
   * Change your Backup FTP password
   */
  post(path: '/dedicated/server/{serviceName}/features/backupFTP/password'): (params: {serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * access operations
   * Request an acces on KVM IPMI interface
   */
  post(path: '/dedicated/server/{serviceName}/features/ipmi/access'): (params: {serviceName: string, ipToAllow?: string, sshKey?: string, ttl: dedicated.server.CacheTTLEnum, type: dedicated.server.IpmiAccessTypeEnum}) => Promise<dedicated.server.Task>;
  /**
   * resetInterface operations
   * Reset KVM IPMI interface
   */
  post(path: '/dedicated/server/{serviceName}/features/ipmi/resetInterface'): (params: {serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * resetSessions operations
   * Reset KVM IPMI sessions
   */
  post(path: '/dedicated/server/{serviceName}/features/ipmi/resetSessions'): (params: {serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * test operations
   * Launch test on KVM IPMI interface
   */
  post(path: '/dedicated/server/{serviceName}/features/ipmi/test'): (params: {serviceName: string, ttl: dedicated.server.CacheTTLEnum, type: dedicated.server.IpmiTestTypeEnum}) => Promise<dedicated.server.Task>;
  /**
   * start operations
   * Start an install
   */
  post(path: '/dedicated/server/{serviceName}/install/start'): (params: {serviceName: string, details?: dedicated.server.InstallCustom, partitionSchemeName?: string, templateName: string}) => Promise<dedicated.server.Task>;
  /**
   * ipBlockMerge operations
   * Merge a splitted block and route it to the choosen server. You cannot undo this operation
   */
  post(path: '/dedicated/server/{serviceName}/ipBlockMerge'): (params: {serviceName: string, block: string}) => Promise<dedicated.server.Task>;
  /**
   * ipMove operations
   * Move an Ip failover to this server
   */
  post(path: '/dedicated/server/{serviceName}/ipMove'): (params: {serviceName: string, ip: string}) => Promise<dedicated.server.Task>;
  /**
   * windows operations
   * Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.
   */
  post(path: '/dedicated/server/{serviceName}/license/windows'): (params: {serviceName: string, licenseId: string, version: license.WindowsOsVersionEnum}) => Promise<dedicated.server.Task>;
  /**
   * reboot operations
   * Hard reboot this server
   */
  post(path: '/dedicated/server/{serviceName}/reboot'): (params: {serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * add a domain on secondary dns
   */
  post(path: '/dedicated/server/{serviceName}/secondaryDnsDomains'): (params: {serviceName: string, domain: string, ip?: string}) => Promise<void>;
  /**
   * List the dedicated.server.serviceMonitoring objects
   * Add a new service monitoring
   */
  post(path: '/dedicated/server/{serviceName}/serviceMonitoring'): (params: {serviceName: string, challengeText?: string, enabled: boolean, interval: dedicated.server.MonitoringIntervalEnum, ip: string, port: number, protocol: dedicated.server.MonitoringProtocolEnum, url?: string}) => Promise<dedicated.server.serviceMonitoring>;
  /**
   * List the dedicated.server.emailAlert objects
   * Add a new email alert
   */
  post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email'): (params: {monitoringId: number, serviceName: string, email: string, language: dedicated.server.AlertLanguageEnum}) => Promise<dedicated.server.emailAlert>;
  /**
   * List the dedicated.server.smsAlert objects
   * Create a SMS alert
   */
  post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms'): (params: {monitoringId: number, serviceName: string, fromHour?: number, language: dedicated.server.AlertLanguageEnum, phoneNumberTo: string, smsAccount: string, toHour?: number}) => Promise<dedicated.server.smsAlert>;
  /**
   * List the dedicated.server.spla objects
   * Add a new SPLA license
   */
  post(path: '/dedicated/server/{serviceName}/spla'): (params: {serviceName: string, serialNumber: string, type: dedicated.server.SplaTypeEnum}) => Promise<number>;
  /**
   * revoke operations
   * Revoke an SPLA license
   */
  post(path: '/dedicated/server/{serviceName}/spla/{id}/revoke'): (params: {id: number, serviceName: string}) => Promise<void>;
  /**
   * hardDiskDrive operations
   * Ask for a broken HDD replacement
   */
  post(path: '/dedicated/server/{serviceName}/support/replace/hardDiskDrive'): (params: {serviceName: string, comment: string, disks: dedicated.server.SupportReplaceHddInfo[], inverse: boolean}) => Promise<support.NewMessageInfo>;
  /**
   * cancel operations
   * this action stop the task progression if it's possible
   */
  post(path: '/dedicated/server/{serviceName}/task/{taskId}/cancel'): (params: {serviceName: string, taskId: number}) => Promise<void>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/dedicated/server/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * List the dedicated.server.VirtualMac objects
   * Add a virtual mac to an IP address
   */
  post(path: '/dedicated/server/{serviceName}/virtualMac'): (params: {serviceName: string, ipAddress: string, type: dedicated.server.VmacTypeEnum, virtualMachineName: string}) => Promise<dedicated.server.Task>;
  /**
   * List the dedicated.server.VirtualMacManagement objects
   * Add an IP to this Virtual MAC
   */
  post(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress'): (params: {macAddress: string, serviceName: string, ipAddress: string, virtualMachineName: string}) => Promise<dedicated.server.Task>;
  /**
   * Backup Cloud assigned to this server
   * Deactivate the cloud backup associated to the server. This does not delete container data.
   */
  delete(path: '/dedicated/server/{serviceName}/features/backupCloud'): (params: {serviceName: string}) => Promise<void>;
  /**
   * Backup Ftp assigned to this server
   * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
   */
  delete(path: '/dedicated/server/{serviceName}/features/backupFTP'): (params: {serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Revoke this ACL
   */
  delete(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {ipBlock: string, serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * Information about the options of a dedicated server
   * Release a given option
   */
  delete(path: '/dedicated/server/{serviceName}/option/{option}'): (params: {option: dedicated.server.OptionEnum, serviceName: string}) => Promise<void>;
  /**
   * Secondary dns infos
   * remove this domain
   */
  delete(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {domain: string, serviceName: string}) => Promise<void>;
  /**
   * Service monitoring details
   * Remove this service monitoring
   */
  delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}'): (params: {monitoringId: number, serviceName: string}) => Promise<void>;
  /**
   * Service monitoring Email alert
   * Remove this Email alert monitoring
   */
  delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}'): (params: {alertId: number, monitoringId: number, serviceName: string}) => Promise<void>;
  /**
   * Monitoring SMS alert details, This service is currently not supported for servers at BHS 
   * Remove this SMS alert
   */
  delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}'): (params: {alertId: number, monitoringId: number, serviceName: string}) => Promise<void>;
  /**
   *  ip address linked with this virtual mac address
   * Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted
   */
  delete(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}'): (params: {ipAddress: string, macAddress: string, serviceName: string}) => Promise<dedicated.server.Task>;
  /**
   * vrack dedicated server interfaces
   * remove this server from this vrack
   */
  delete(path: '/dedicated/server/{serviceName}/vrack/{vrack}'): (params: {serviceName: string, vrack: string}) => Promise<vrack.Task>;
}
/**
 * classic Model
 */type zoneNamedResolutionFieldTypeEnum = zone.NamedResolutionFieldTypeEnum;
