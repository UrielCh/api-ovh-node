import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dedicated/server Models
 */
export declare namespace complexType {
    interface ChartReturn {
        unit?: string;
        values?: complexType.ChartTimestampValue[];
    }
    interface ChartTimestampValue {
        timestamp: number;
        value?: number;
    }
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace coreTypes {
    type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw";
}
export declare namespace dedicated {
    interface Availabilities {
        datacenters: dedicated.AvailabilityDatacenter[];
        hardware?: string;
        region?: dedicated.AvailabilityRegionEnum;
    }
    interface AvailabilitiesRaw {
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
    interface AvailabilityDatacenter {
        availability: dedicated.AvailabilityEnum;
        datacenter: dedicated.AvailabilityDatacenterEnum;
    }
    type AvailabilityDatacenterEnum = "bhs" | "default" | "fra" | "gra" | "hil" | "lon" | "rbx" | "rbx-hz" | "sbg" | "sgp" | "syd" | "vin" | "waw";
    type AvailabilityEnum = "1H-high" | "1H-low" | "240H" | "24H" | "72H" | "unavailable" | "unknown";
    type AvailabilityRegionEnum = "europe" | "northAmerica";
    interface BinaryFirewall {
        asa: string[];
        asdm: string[];
        type: dedicated.ProfileFirewallEnum;
    }
    interface BinaryFirewallLink {
        url: string;
    }
    interface DatacenterAvailability {
        datacenters: dedicated.AvailabilityDatacenter[];
        fqn: string;
        memory?: string;
        planCode: string;
        server: string;
        storage?: string;
    }
    type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "dc1" | "eri1" | "gra1" | "gra2" | "gsw" | "hil1" | "lim1" | "p19" | "rbx-hz" | "rbx1" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sgp1" | "syd1" | "vin1" | "waw1";
    type OsAvailabilitiesEnum = "archlinux-installer_64" | "centos5_64" | "centos6-cpanel-latest_64" | "centos6-ovh_64" | "centos6-plesk12_64" | "centos6_64" | "centos7-cpanel-latest_64" | "centos7-directadmin_64" | "centos7-fpga-accelize_64" | "centos7-fpga-intel-opencl_64" | "centos7-plesk125_64" | "centos7-plesk12_64" | "centos7-plesk17_64" | "centos7_64" | "cloudlinux6_64" | "cloudlinux7_64" | "coreos-alpha_64" | "coreos_64" | "debian7-ispconfig3_64" | "debian7-minecraft_64" | "debian7-plesk12_64" | "debian7_64" | "debian8-ispconfig3_64" | "debian8-plesk125_64" | "debian8_64" | "debian8_armhf_32" | "debian9-ispconfig3_64" | "debian9_64" | "debian9_armhf_32" | "dgx1-os-3_64" | "esxi51_64" | "esxi55_64" | "esxi5_64" | "esxi60_64" | "esxi65_64" | "fedora26_64" | "fedora27_64" | "freebsd10-zfs_64" | "freebsd10_64" | "freebsd11-zfs_64" | "gentoo11_64" | "openmediavault3_armhf_32" | "openmediavault_armhf_32" | "opensuse42_64" | "proxmox4-zfs_64" | "proxmox4_64" | "proxmox5-zfs_64" | "proxmox5_64" | "slackware14_64" | "smartos_64" | "solusvm-master-vz_64" | "solusvm-slave-vz_64" | "ubuntu1404-plesk125_64" | "ubuntu1404-server_64" | "ubuntu1510-server_arm64_64" | "ubuntu1510-server_ppc64el_64" | "ubuntu1604-desktop_64" | "ubuntu1604-server_64" | "ubuntu1604-server_armhf_32" | "ubuntu1604-server_ppc64el_64" | "ubuntu1710-server_64" | "win2008r2-dc-virtuozzo46_64" | "win2008r2-dc_64" | "win2008r2-ent-plesk10_64" | "win2008r2-ent-plesk11_64" | "win2008r2-ent-plesk12_64" | "win2008r2-ent-sp2010found_64" | "win2008r2-ent-virtuozzo46_64" | "win2008r2-ent_64" | "win2008r2-std-plesk11_64" | "win2008r2-std-plesk12_64" | "win2008r2-std-sp2010found_64" | "win2008r2-std_64" | "win2008r2-web-plesk11_64" | "win2008r2-web-plesk12_64" | "win2008r2-web-sp2010found_64" | "win2008r2-web_64" | "win2008r2core-dc_64" | "win2008r2core-ent_64" | "win2008r2core-hyperv_64" | "win2008r2core-std_64" | "win2008r2core-web_64" | "win2012-dc_64" | "win2012-hyperv3_64" | "win2012-std-plesk11_64" | "win2012-std-plesk12_64" | "win2012-std_64" | "win2012r2-dc_64" | "win2012r2-hyperv3_64" | "win2012r2-std-plesk12_64" | "win2012r2-std_64" | "win2016-dc_64" | "win2016-std_64" | "win81-pro-sysprep_64" | "xenserver6_64";
    type ProfileFirewallEnum = "cisco.asa5505" | "cisco.asa5510" | "cisco.asa5520";
    type StatusEnum = "disable" | "enable";
    type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete";
    type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo";
    namespace biosSettings {
        interface BiosSettings {
            supportedSettings: dedicated.server.BiosSettingsSupport;
        }
    }
    namespace biosSettingsSgx {
        interface BiosSettingsSgx {
            prmrr: dedicated.server.BiosSettingsSgxPrmrrEnum;
            status: dedicated.server.BiosSettingsSgxStatusEnum;
        }
    }
    namespace networkInterfaceController {
        interface NetworkInterfaceController {
            linkType: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum;
            mac: string;
            virtualNetworkInterface?: string;
        }
        type NetworkInterfaceControllerLinkTypeEnum = "isolated" | "private" | "private_lag" | "provisioning" | "public";
    }
    namespace server {
        interface Access {
            password: string;
            type: dedicated.server.AccessTypeEnum;
            url?: string;
            user?: string;
        }
        type AccessTypeEnum = "DIRECTADMIN_PANEL" | "PLESK_PANEL" | "PROXMOX_PANEL" | "RDP" | "SQL_SERVER" | "SSH" | "WEB_PANEL";
        type AlertLanguageEnum = "cz" | "de" | "en" | "es" | "fi" | "fr" | "it" | "lt" | "nl" | "pl" | "pt";
        interface BackupCloud {
            agreements?: number[];
            archive?: dedicated.server.backup.BackupContainer;
            status: dedicated.server.backup.BackupStatus;
            storage?: dedicated.server.backup.BackupContainer;
        }
        interface BackupFtp {
            ftpBackupName: string;
            quota?: complexType.UnitAndValue<number>;
            readOnlyDate?: string;
            type: dedicated.server.BackupStorageTypeEnum;
            usage?: complexType.UnitAndValue<number>;
        }
        interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        type BackupStorageCapacityEnum = 1000 | 10000 | 500 | 5000;
        interface BackupStorageOrderable {
            capacities?: dedicated.server.BackupStorageCapacityEnum[];
            orderable: boolean;
        }
        type BackupStorageTypeEnum = "included" | "storage";
        interface BandwidthDetails {
            InternetToOvh?: complexType.UnitAndValue<number>;
            OvhToInternet?: complexType.UnitAndValue<number>;
            OvhToOvh?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthTypeEnum;
        }
        type BandwidthOrderEnum = 1000 | 2000 | 3000;
        interface BandwidthOrderable {
            orderable: boolean;
            platinum?: dedicated.server.BandwidthOrderEnum[];
            premium?: dedicated.server.BandwidthOrderEnum[];
            ultimate?: dedicated.server.BandwidthOrderEnum[];
        }
        type BandwidthTypeEnum = "included" | "platinum" | "premium" | "standard" | "ultimate";
        interface BandwidthvRackDetails {
            bandwidth?: complexType.UnitAndValue<number>;
            type?: dedicated.server.BandwidthvRackTypeEnum;
        }
        type BandwidthvRackOrderEnum = 1000 | 3000;
        interface BandwidthvRackOrderable {
            orderable: boolean;
            vrack?: dedicated.server.BandwidthvRackOrderEnum[];
        }
        type BandwidthvRackTypeEnum = "included" | "standard";
        type BiosSettingsSgxPrmrrEnum = "128MB";
        type BiosSettingsSgxStatusEnum = "disabled" | "enabled" | "software controlled";
        interface BiosSettingsSupport {
            sgx: boolean;
        }
        type BootModeEnum = "legacy" | "uefi" | "uefi-legacy";
        type BootOptionEnum = "cpufamily" | "grsec" | "ipv6" | "smp";
        type BootTypeEnum = "harddisk" | "internal" | "ipxeCustomerScript" | "network" | "rescue";
        type BurstStatusEnum = "active" | "inactive" | "inactiveLocked";
        type CacheTTLEnum = 1 | 10 | 15 | 3 | 5;
        type CpuFamilyEnum = "arm64" | "armhf32" | "ppc64" | "x86" | "x86-ht" | "x86_64";
        interface Dedicated {
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
        type DiskTypeEnum = "NVMe" | "SAS" | "SATA" | "SSD" | "Unknown";
        interface Firewall {
            enabled: boolean;
            firewall: string;
            ip: string;
            mode: dedicated.server.FirewallModeEnum;
            model?: dedicated.server.FirewallModelEnum;
        }
        type FirewallModeEnum = "routed" | "transparent";
        type FirewallModelEnum = "asa5505" | "asa5510" | "asa5520";
        type FormFactorEnum = "0.25u" | "0.5u" | "1u" | "2u" | "3u" | "4u";
        interface HardwareRaidConfiguration {
            capacity: complexType.UnitAndValue<number>;
            diskCount: number;
            diskSize: complexType.UnitAndValue<number>;
            diskSpanSize: number;
            mode: dedicated.server.HardwareSpecificationsRaidHardEnum;
            name: string;
            type: string;
        }
        interface HardwareRaidController {
            disks: dedicated.server.HardwareRaidDiskGroup[];
            model: string;
            type: string;
        }
        interface HardwareRaidDiskGroup {
            capacity: complexType.UnitAndValue<number>;
            names: string[];
            speed: complexType.UnitAndValue<string>;
            type: dedicated.server.DiskTypeEnum;
        }
        interface HardwareRaidProfile {
            controllers: dedicated.server.HardwareRaidController[];
        }
        interface HardwareRaidSize {
            configurations: dedicated.server.HardwareRaidConfiguration[];
        }
        interface HardwareSpecifications {
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
        interface HardwareSpecificationsDisk {
            defaultHardwareRaidSize?: complexType.UnitAndValue<number>;
            defaultHardwareRaidType?: dedicated.server.HardwareSpecificationsRaidHardEnum;
            description?: string;
            diskGroupId?: number;
            diskSize?: complexType.UnitAndValue<number>;
            diskType?: string;
            numberOfDisks?: number;
            raidController?: string;
        }
        interface HardwareSpecificationsExpansionCard {
            description: string;
            type: dedicated.server.HardwareSpecificationsExpansionCardTypeEnum;
        }
        type HardwareSpecificationsExpansionCardTypeEnum = "fpga" | "gpu";
        type HardwareSpecificationsRaidHardEnum = "raid0" | "raid1" | "raid10" | "raid1E" | "raid5" | "raid50" | "raid6" | "raid60";
        interface InstallCustom {
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
        interface InstallTemplate {
            ovh?: string[];
            personal?: string[];
        }
        interface InstallationProgressStatus {
            elapsedTime: number;
            progress?: dedicated.server.InstallationProgressSteps[];
        }
        type InstallationProgressStatusEnum = "doing" | "done" | "error" | "expired" | "idle" | "pending" | "stopping" | "todo";
        interface InstallationProgressSteps {
            comment: string;
            error?: string;
            status: dedicated.server.InstallationProgressStatusEnum;
        }
        interface Intervention {
            date?: string;
            interventionId: number;
            type?: string;
        }
        type IpBlockSizeEnum = 1 | 128 | 16 | 256 | 32 | 4 | 64 | 8;
        type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us";
        interface IpOrderable {
            ipv4?: dedicated.server.IpOrderableDetails[];
            ipv6?: dedicated.server.IpOrderableDetails[];
        }
        interface IpOrderableDetails {
            blockSizes: dedicated.server.IpBlockSizeEnum[];
            included: boolean;
            ipNumber?: number;
            number: number;
            optionRequired?: dedicated.server.OptionRequiredEnum;
            type: dedicated.server.IpTypeOrderableEnum;
        }
        type IpTypeOrderableEnum = "failover" | "static" | "unshielded";
        interface Ipmi {
            activated: boolean;
            supportedFeatures: dedicated.server.IpmiSupportedFeatures;
        }
        type IpmiAccessTypeEnum = "kvmipHtml5URL" | "kvmipJnlp" | "serialOverLanSshKey" | "serialOverLanURL";
        interface IpmiAccessValue {
            expiration?: string;
            value?: string;
        }
        interface IpmiSupportedFeatures {
            kvmipHtml5URL: boolean;
            kvmipJnlp: boolean;
            serialOverLanSshKey: boolean;
            serialOverLanURL: boolean;
        }
        interface IpmiTestResult {
            date?: string;
            status?: string;
        }
        type IpmiTestTypeEnum = "http" | "password" | "ping";
        type MonitoringIntervalEnum = "1800" | "21600" | "300" | "3600";
        type MonitoringProtocolEnum = "DNS" | "FTP" | "HTTP" | "IMAP" | "POP" | "SMTP" | "SSH" | "openTCP";
        type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly";
        interface MrtgTimestampValue {
            timestamp: number;
            value?: complexType.UnitAndValue<number>;
        }
        type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload";
        interface Netboot {
            bootId: number;
            bootType: dedicated.server.BootTypeEnum;
            description: string;
            kernel: string;
        }
        interface NetworkSpecifications {
            bandwidth?: dedicated.server.BandwidthDetails;
            connection?: complexType.UnitAndValue<number>;
            ola?: dedicated.server.OlaDetails;
            routing?: dedicated.server.RoutingDetails;
            switching?: dedicated.server.SwitchingDetails;
            traffic?: dedicated.server.TrafficDetails;
            vrack?: dedicated.server.BandwidthvRackDetails;
        }
        interface OlaDetails {
            available: boolean;
            supportedModes?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum[];
        }
        interface Option {
            option: dedicated.server.OptionEnum;
            state: dedicated.server.OptionStateEnum;
        }
        type OptionEnum = "BACKUPPROTOCOL" | "BANDWIDTH" | "BANDWIDTH_VRACK" | "OLA" | "SGX" | "TRAFFIC" | "TRAFFIC_DISCOVER" | "TUNING" | "TUNING_FIREWALL" | "TUNING_KVM" | "USB_KVM_IP";
        type OptionRequiredEnum = "professionalUse";
        type OptionStateEnum = "released" | "subscribed";
        type OrderableSysFeatureEnum = "backupProtocol" | "monitoring";
        interface RoutingDetails {
            ipv4?: dedicated.server.RoutingDetailsIpv4;
            ipv6?: dedicated.server.RoutingDetailsIpv6;
        }
        interface RoutingDetailsIpv4 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        interface RoutingDetailsIpv6 {
            gateway?: string;
            ip?: string;
            network?: string;
        }
        interface Rtm {
            currentVersion?: string;
            installedVersion?: string;
            needsUpdate: boolean;
        }
        type RtmChartPeriodEnum = "daily" | "monthly" | "weekly" | "yearly";
        type RtmChartTypeEnum = "cpu" | "loadavg1" | "loadavg15" | "loadavg5" | "memory" | "processCount" | "processRunning" | "swap";
        interface RtmCommandSize {
            command?: string;
            memory?: complexType.UnitAndValue<number>;
        }
        interface RtmConnection {
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
        interface RtmCpu {
            cache?: complexType.UnitAndValue<number>;
            core?: number;
            freq?: complexType.UnitAndValue<number>;
            name?: string;
        }
        interface RtmDisk {
            capacity?: complexType.UnitAndValue<number>;
            disk: string;
            model?: string;
            temperature?: complexType.UnitAndValue<number>;
        }
        interface RtmDiskSmart {
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
        interface RtmLoad {
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
        interface RtmMemory {
            capacity?: complexType.UnitAndValue<number>;
            slot?: string;
        }
        interface RtmMotherboardHw {
            manufacturer?: string;
            name?: string;
        }
        interface RtmOs {
            kernelRelease?: string;
            kernelVersion?: string;
            release?: string;
        }
        interface RtmPartition {
            inodeUsage?: complexType.UnitAndValue<number>;
            mountPoint?: string;
            partition: string;
            usage?: complexType.UnitAndValue<number>;
        }
        interface RtmPci {
            bus?: string;
            device?: string;
        }
        interface RtmRaid {
            unit: string;
        }
        type RtmRaidStatusEnum = "KO" | "OK" | "REBUILDING" | "UNKNOWN";
        interface RtmRaidVolume {
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
        interface RtmRaidVolumePort {
            capacity?: complexType.UnitAndValue<number>;
            disk?: string;
            model?: string;
            port?: string;
            serial?: string;
            status?: dedicated.server.RtmRaidStatusEnum;
            syncprogress?: string;
        }
        interface ServerBurst {
            capacity?: complexType.UnitAndValue<number>;
            status: dedicated.server.BurstStatusEnum;
        }
        type SplaStatusEnum = "terminated" | "used" | "waitingToCheck";
        type SplaTypeEnum = "os" | "sqlstd" | "sqlweb";
        type StateEnum = "error" | "hacked" | "hackedBlocked" | "ok";
        type SupportLevelEnum = "critical" | "fastpath" | "gs" | "pro";
        interface SupportLevelOrderable {
            levels?: dedicated.server.SupportLevelOrderableEnum[];
            orderable: boolean;
        }
        type SupportLevelOrderableEnum = "critical" | "fastpath" | "gs";
        interface SupportReplaceHddInfo {
            disk_serial: string;
            slot_id?: number;
        }
        interface SwitchingDetails {
            name?: string;
        }
        interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
        }
        interface TemplateCaps {
            hybridSupport: boolean;
        }
        interface TrafficDetails {
            inputQuotaSize?: complexType.UnitAndValue<number>;
            inputQuotaUsed?: complexType.UnitAndValue<number>;
            isThrottled?: boolean;
            outputQuotaSize?: complexType.UnitAndValue<number>;
            outputQuotaUsed?: complexType.UnitAndValue<number>;
            resetQuotaDate?: string;
        }
        type TrafficOrderEnum = "100Mbps-Unlimited" | "250Mbps-Unlimited" | "500Mbps-Unlimited";
        interface TrafficOrderable {
            orderable: boolean;
            traffic?: dedicated.server.TrafficOrderEnum[];
        }
        type UsbKeyCapacityEnum = 128 | 16 | 256 | 32 | 64;
        interface UsbKeyOrderableDetails {
            capacity: dedicated.server.UsbKeyCapacityEnum[];
            number: number;
            optionRequired?: dedicated.server.OptionRequiredEnum;
            orderable: boolean;
        }
        interface VirtualMac {
            macAddress: string;
            type: dedicated.server.VmacTypeEnum;
        }
        interface VirtualMacManagement {
            ipAddress: string;
            virtualMachineName: string;
        }
        type VmacTypeEnum = "ovh" | "vmware";
        namespace backup {
            interface BackupContainer {
                cloudProject?: dedicated.server.backup.BackupProject;
                id?: string;
                name?: string;
                quota?: dedicated.server.backup.BackupQuota;
                region?: string;
                sftp?: dedicated.server.backup.BackupSftp;
                swift?: dedicated.server.backup.BackupSwift;
            }
            interface BackupOffer {
                maxArchive?: complexType.UnitAndValue<number>;
                maxBandwidthArchive?: complexType.UnitAndValue<number>;
                maxBandwidthStorage?: complexType.UnitAndValue<number>;
                maxStorage?: complexType.UnitAndValue<number>;
            }
            interface BackupPassword {
                sftpArchive?: string;
                sftpStorage?: string;
                swiftArchive?: string;
                swiftStorage?: string;
            }
            interface BackupProject {
                description?: string;
                projectId?: string;
            }
            interface BackupQuota {
                maxBandwidth?: complexType.UnitAndValue<number>;
                maxStorage?: complexType.UnitAndValue<number>;
                storageUsed?: complexType.UnitAndValue<number>;
                usagePercent?: number;
            }
            interface BackupSftp {
                password?: string;
                url?: string;
                username?: string;
            }
            interface BackupStatus {
                code: dedicated.server.backup.BackupStatusCodeEnum;
                reason?: string;
            }
            type BackupStatusCodeEnum = "DELETING" | "ERROR" | "OK" | "SUSPENDED" | "SUSPENDING" | "UNKNOWN" | "WAITING_AGREEMENTS_VALIDATION";
            interface BackupSwift {
                authUrl?: string;
                password?: string;
                username?: string;
            }
        }
        interface emailAlert {
            alertId: number;
            email: string;
            enabled: boolean;
            language: dedicated.server.AlertLanguageEnum;
        }
        interface kvm {
            expiration: string;
            ip?: string;
            name: string;
        }
        interface netbootOption {
            option: dedicated.server.BootOptionEnum;
            value: string;
        }
        interface serviceMonitoring {
            challengeText?: string;
            enabled: boolean;
            interval: dedicated.server.MonitoringIntervalEnum;
            ip: string;
            monitoringId: number;
            port: number;
            protocol: dedicated.server.MonitoringProtocolEnum;
            url?: string;
        }
        interface smsAlert {
            alertId: number;
            enabled: boolean;
            fromHour?: number;
            language: dedicated.server.AlertLanguageEnum;
            phoneNumberTo: string;
            smsAccount: string;
            toHour?: number;
        }
        interface spla {
            id: number;
            lastUpdate: string;
            serialNumber: string;
            status: dedicated.server.SplaStatusEnum;
            type: dedicated.server.SplaTypeEnum;
        }
    }
    namespace virtualNetworkInterface {
        interface VirtualNetworkInterface {
            enabled: boolean;
            mode: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
            name: string;
            networkInterfaceController: string[];
            serverName: string;
            uuid: string;
            vrack?: string;
        }
        type VirtualNetworkInterfaceModeEnum = "public" | "vrack" | "vrack_aggregation";
    }
}
export declare namespace license {
    type WindowsOsVersionEnum = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2003_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION" | "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION" | "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION" | "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU" | "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU" | "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU" | "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION" | "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION" | "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU" | "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU" | "WINDOWS_SERVER_2012_WEB_EDITION" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES" | "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES" | "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES" | "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES" | "windows-server-2008-license-datacenter-edition-1-cpu" | "windows-server-2008-license-datacenter-edition-2-cpu" | "windows-server-2008-license-datacenter-edition-4-cpu" | "windows-server-2008-license-enterprise-edition-1-cpu" | "windows-server-2008-license-enterprise-edition-2-cpu" | "windows-server-2008-license-enterprise-edition-4-cpu" | "windows-server-2008-license-standard-edition-1-cpu" | "windows-server-2008-license-standard-edition-2-cpu" | "windows-server-2008-license-standard-edition-4-cpu" | "windows-server-2008-license-web-edition-1-cpu" | "windows-server-2008-license-web-edition-2-cpu" | "windows-server-2008-license-web-edition-4-cpu" | "windows-server-2012-license-datacenter-edition-1-cpu" | "windows-server-2012-license-datacenter-edition-2-cpu" | "windows-server-2012-license-datacenter-edition-4-cpu" | "windows-server-2012-license-standard-edition-1-cpu" | "windows-server-2012-license-standard-edition-2-cpu" | "windows-server-2012-license-standard-edition-4-cpu" | "windows-server-2016-license-datacenter-edition-1-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-1-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-2-cpu-8-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-10-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-12-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-14-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-16-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-18-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-20-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-22-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-24-cores" | "windows-server-2016-license-datacenter-edition-4-cpu-8-cores" | "windows-server-2016-license-standard-edition-1-cpu-10-cores" | "windows-server-2016-license-standard-edition-1-cpu-12-cores" | "windows-server-2016-license-standard-edition-1-cpu-14-cores" | "windows-server-2016-license-standard-edition-1-cpu-16-cores" | "windows-server-2016-license-standard-edition-1-cpu-18-cores" | "windows-server-2016-license-standard-edition-1-cpu-20-cores" | "windows-server-2016-license-standard-edition-1-cpu-22-cores" | "windows-server-2016-license-standard-edition-1-cpu-24-cores" | "windows-server-2016-license-standard-edition-1-cpu-8-cores" | "windows-server-2016-license-standard-edition-2-cpu-10-cores" | "windows-server-2016-license-standard-edition-2-cpu-12-cores" | "windows-server-2016-license-standard-edition-2-cpu-14-cores" | "windows-server-2016-license-standard-edition-2-cpu-16-cores" | "windows-server-2016-license-standard-edition-2-cpu-18-cores" | "windows-server-2016-license-standard-edition-2-cpu-20-cores" | "windows-server-2016-license-standard-edition-2-cpu-22-cores" | "windows-server-2016-license-standard-edition-2-cpu-24-cores" | "windows-server-2016-license-standard-edition-2-cpu-8-cores" | "windows-server-2016-license-standard-edition-4-cpu-10-cores" | "windows-server-2016-license-standard-edition-4-cpu-12-cores" | "windows-server-2016-license-standard-edition-4-cpu-14-cores" | "windows-server-2016-license-standard-edition-4-cpu-16-cores" | "windows-server-2016-license-standard-edition-4-cpu-18-cores" | "windows-server-2016-license-standard-edition-4-cpu-20-cores" | "windows-server-2016-license-standard-edition-4-cpu-22-cores" | "windows-server-2016-license-standard-edition-4-cpu-24-cores" | "windows-server-2016-license-standard-edition-4-cpu-8-cores" | "windows-server-2019-license-datacenter-edition-10-cores" | "windows-server-2019-license-datacenter-edition-12-cores" | "windows-server-2019-license-datacenter-edition-14-cores" | "windows-server-2019-license-datacenter-edition-16-cores" | "windows-server-2019-license-datacenter-edition-18-cores" | "windows-server-2019-license-datacenter-edition-20-cores" | "windows-server-2019-license-datacenter-edition-22-cores" | "windows-server-2019-license-datacenter-edition-24-cores" | "windows-server-2019-license-datacenter-edition-26-cores" | "windows-server-2019-license-datacenter-edition-28-cores" | "windows-server-2019-license-datacenter-edition-30-cores" | "windows-server-2019-license-datacenter-edition-32-cores" | "windows-server-2019-license-datacenter-edition-34-cores" | "windows-server-2019-license-datacenter-edition-36-cores" | "windows-server-2019-license-datacenter-edition-38-cores" | "windows-server-2019-license-datacenter-edition-40-cores" | "windows-server-2019-license-datacenter-edition-42-cores" | "windows-server-2019-license-datacenter-edition-44-cores" | "windows-server-2019-license-datacenter-edition-46-cores" | "windows-server-2019-license-datacenter-edition-48-cores" | "windows-server-2019-license-datacenter-edition-50-cores" | "windows-server-2019-license-datacenter-edition-52-cores" | "windows-server-2019-license-datacenter-edition-54-cores" | "windows-server-2019-license-datacenter-edition-56-cores" | "windows-server-2019-license-datacenter-edition-58-cores" | "windows-server-2019-license-datacenter-edition-60-cores" | "windows-server-2019-license-datacenter-edition-62-cores" | "windows-server-2019-license-datacenter-edition-64-cores" | "windows-server-2019-license-datacenter-edition-8-cores" | "windows-server-2019-license-standard-edition-10-cores" | "windows-server-2019-license-standard-edition-12-cores" | "windows-server-2019-license-standard-edition-14-cores" | "windows-server-2019-license-standard-edition-16-cores" | "windows-server-2019-license-standard-edition-18-cores" | "windows-server-2019-license-standard-edition-20-cores" | "windows-server-2019-license-standard-edition-22-cores" | "windows-server-2019-license-standard-edition-24-cores" | "windows-server-2019-license-standard-edition-26-cores" | "windows-server-2019-license-standard-edition-28-cores" | "windows-server-2019-license-standard-edition-30-cores" | "windows-server-2019-license-standard-edition-32-cores" | "windows-server-2019-license-standard-edition-34-cores" | "windows-server-2019-license-standard-edition-36-cores" | "windows-server-2019-license-standard-edition-38-cores" | "windows-server-2019-license-standard-edition-40-cores" | "windows-server-2019-license-standard-edition-42-cores" | "windows-server-2019-license-standard-edition-44-cores" | "windows-server-2019-license-standard-edition-46-cores" | "windows-server-2019-license-standard-edition-48-cores" | "windows-server-2019-license-standard-edition-50-cores" | "windows-server-2019-license-standard-edition-52-cores" | "windows-server-2019-license-standard-edition-54-cores" | "windows-server-2019-license-standard-edition-56-cores" | "windows-server-2019-license-standard-edition-58-cores" | "windows-server-2019-license-standard-edition-60-cores" | "windows-server-2019-license-standard-edition-62-cores" | "windows-server-2019-license-standard-edition-64-cores" | "windows-server-2019-license-standard-edition-8-cores";
    type WindowsSqlVersionEnum = "SQL_SERVER_2008_STANDARD_EDITION" | "SQL_SERVER_2008_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2008_WEB_EDITION" | "SQL_SERVER_2008_WEB_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION" | "SQL_SERVER_2012_STANDARD_EDITION_12_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_16_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_18_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_20_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_24_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_2_CPU" | "SQL_SERVER_2012_STANDARD_EDITION_32_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_4_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_6_CORES" | "SQL_SERVER_2012_STANDARD_EDITION_8_CORES" | "SQL_SERVER_2012_WEB_EDITION_12_CORES" | "SQL_SERVER_2012_WEB_EDITION_16_CORES" | "SQL_SERVER_2012_WEB_EDITION_18_CORES" | "SQL_SERVER_2012_WEB_EDITION_20_CORES" | "SQL_SERVER_2012_WEB_EDITION_24_CORES" | "SQL_SERVER_2012_WEB_EDITION_32_CORES" | "SQL_SERVER_2012_WEB_EDITION_4_CORES" | "SQL_SERVER_2012_WEB_EDITION_6_CORES" | "SQL_SERVER_2012_WEB_EDITION_8_CORES";
}
export declare namespace nichandle {
    type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS";
}
export declare namespace secondaryDns {
    interface SecondaryDNS {
        creationDate: string;
        dns: string;
        domain: string;
        ipMaster: string;
    }
    interface SecondaryDNSCheckField {
        fieldType: zone.NamedResolutionFieldTypeEnum;
        fieldValue: string;
        subDomain: string;
    }
    interface SecondaryDNSNameServer {
        hostname: string;
        ip: string;
        ipv6?: string;
    }
}
export declare namespace service {
    interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option";
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
}
export declare namespace services {
    interface Service {
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
export declare namespace support {
    interface NewMessageInfo {
        messageId: number;
        ticketId: number;
        ticketNumber: number;
    }
}
export declare namespace vrack {
    interface Task {
        function: string;
        id: number;
        lastUpdate?: string;
        orderId?: number;
        serviceName?: string;
        status: vrack.TaskStatusEnum;
        targetDomain?: string;
        todoDate?: string;
    }
    type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo";
    interface dedicatedServer {
        dedicatedServer: string;
        vrack: string;
    }
}
export declare namespace zone {
    type NamedResolutionFieldTypeEnum = "A" | "AAAA" | "CAA" | "CNAME" | "DKIM" | "DMARC" | "LOC" | "MX" | "NAPTR" | "NS" | "PTR" | "SPF" | "SRV" | "SSHFP" | "TLSA" | "TXT";
}
/**
 * END API /dedicated/server Models
 */
export declare function proxyDedicatedServer(ovhEngine: OvhRequestable): Dedicated;
export default proxyDedicatedServer;
/**
 * Api Proxy model
 */ export interface Dedicated {
    server: {
        $get(): Promise<string[]>;
        availabilities: {
            $get(params: {
                country: nichandle.OvhSubsidiaryEnum;
                hardware?: string;
            }): Promise<dedicated.Availabilities[]>;
            raw: {
                $get(): Promise<dedicated.AvailabilitiesRaw[]>;
            };
        };
        datacenter: {
            availabilities: {
                $get(params?: {
                    datacenters?: string;
                    excludeDatacenters?: boolean;
                    memory?: string;
                    planCode?: string;
                    server?: string;
                    storage?: string;
                }): Promise<dedicated.DatacenterAvailability[]>;
            };
        };
        osAvailabilities: {
            $get(params: {
                hardware: string;
            }): Promise<dedicated.OsAvailabilitiesEnum[]>;
        };
        virtualNetworkInterface: {
            $(uuid: string): {
                $get(): Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
            };
        };
        $(serviceName: string): {
            $get(): Promise<dedicated.server.Dedicated>;
            $put(params?: {
                bootId?: number;
                commercialRange?: string;
                datacenter?: dedicated.DatacenterEnum;
                ip?: string;
                linkSpeed?: number;
                monitoring?: boolean;
                name?: string;
                os?: string;
                professionalUse?: boolean;
                rack?: string;
                rescueMail?: string;
                reverse?: string;
                rootDevice?: string;
                serverId?: number;
                state?: dedicated.server.StateEnum;
                supportLevel?: dedicated.server.SupportLevelEnum;
            }): Promise<void>;
            authenticationSecret: {
                $post(): Promise<dedicated.server.Access[]>;
            };
            backupCloudOfferDetails: {
                $get(): Promise<dedicated.server.backup.BackupOffer>;
            };
            biosSettings: {
                $get(): Promise<dedicated.biosSettings.BiosSettings>;
                sgx: {
                    $get(): Promise<dedicated.biosSettingsSgx.BiosSettingsSgx>;
                    configure: {
                        $post(params?: {
                            prmrr?: dedicated.server.BiosSettingsSgxPrmrrEnum;
                            status?: dedicated.server.BiosSettingsSgxStatusEnum;
                        }): Promise<dedicated.server.Task>;
                    };
                };
            };
            boot: {
                $get(params?: {
                    bootType?: dedicated.server.BootTypeEnum;
                }): Promise<number[]>;
                $(bootId: number): {
                    $get(): Promise<dedicated.server.Netboot>;
                    option: {
                        $get(): Promise<dedicated.server.BootOptionEnum[]>;
                        $(option: dedicated.server.BootOptionEnum): {
                            $get(): Promise<dedicated.server.netbootOption>;
                        };
                    };
                };
            };
            burst: {
                $get(): Promise<dedicated.server.ServerBurst>;
                $put(params?: {
                    capacity?: complexType.UnitAndValue<number>;
                    status?: dedicated.server.BurstStatusEnum;
                }): Promise<void>;
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            features: {
                backupCloud: {
                    $delete(): Promise<void>;
                    $get(): Promise<dedicated.server.BackupCloud>;
                    $post(params?: {
                        cloudProjectId?: string;
                        projectDescription?: string;
                    }): Promise<dedicated.server.BackupCloud>;
                    password: {
                        $post(): Promise<dedicated.server.backup.BackupPassword>;
                    };
                };
                backupFTP: {
                    $delete(): Promise<dedicated.server.Task>;
                    $get(): Promise<dedicated.server.BackupFtp>;
                    $post(): Promise<dedicated.server.Task>;
                    access: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            cifs: boolean;
                            ftp?: boolean;
                            ipBlock: string;
                            nfs: boolean;
                        }): Promise<dedicated.server.Task>;
                        $(ipBlock: string): {
                            $delete(): Promise<dedicated.server.Task>;
                            $get(): Promise<dedicated.server.BackupFtpAcl>;
                            $put(params?: {
                                cifs?: boolean;
                                ftp?: boolean;
                                ipBlock?: string;
                                isApplied?: boolean;
                                lastUpdate?: string;
                                nfs?: boolean;
                            }): Promise<void>;
                        };
                    };
                    authorizableBlocks: {
                        $get(): Promise<string[]>;
                    };
                    password: {
                        $post(): Promise<dedicated.server.Task>;
                    };
                };
                firewall: {
                    $get(): Promise<dedicated.server.Firewall>;
                    $put(params?: {
                        enabled?: boolean;
                        firewall?: string;
                        ip?: string;
                        mode?: dedicated.server.FirewallModeEnum;
                        model?: dedicated.server.FirewallModelEnum;
                    }): Promise<void>;
                };
                ipmi: {
                    $get(): Promise<dedicated.server.Ipmi>;
                    access: {
                        $get(params: {
                            type: dedicated.server.IpmiAccessTypeEnum;
                        }): Promise<dedicated.server.IpmiAccessValue>;
                        $post(params: {
                            ipToAllow?: string;
                            sshKey?: string;
                            ttl: dedicated.server.CacheTTLEnum;
                            type: dedicated.server.IpmiAccessTypeEnum;
                        }): Promise<dedicated.server.Task>;
                    };
                    resetInterface: {
                        $post(): Promise<dedicated.server.Task>;
                    };
                    resetSessions: {
                        $post(): Promise<dedicated.server.Task>;
                    };
                    test: {
                        $get(params: {
                            type: dedicated.server.IpmiTestTypeEnum;
                        }): Promise<dedicated.server.IpmiTestResult>;
                        $post(params: {
                            ttl: dedicated.server.CacheTTLEnum;
                            type: dedicated.server.IpmiTestTypeEnum;
                        }): Promise<dedicated.server.Task>;
                    };
                };
                kvm: {
                    $get(): Promise<dedicated.server.kvm>;
                };
            };
            firewall: {
                binary: {
                    compatible: {
                        $get(): Promise<dedicated.BinaryFirewall>;
                    };
                    link: {
                        $get(params: {
                            binaryName: string;
                        }): Promise<dedicated.BinaryFirewallLink>;
                    };
                };
            };
            install: {
                compatibleTemplatePartitionSchemes: {
                    $get(params: {
                        templateName: string;
                    }): Promise<string[]>;
                };
                compatibleTemplates: {
                    $get(): Promise<dedicated.server.InstallTemplate>;
                };
                hardwareRaidProfile: {
                    $get(): Promise<dedicated.server.HardwareRaidProfile>;
                };
                hardwareRaidSize: {
                    $get(params: {
                        partitionSchemeName: string;
                        templateName: string;
                    }): Promise<dedicated.server.HardwareRaidSize>;
                };
                start: {
                    $post(params: {
                        details?: dedicated.server.InstallCustom;
                        partitionSchemeName?: string;
                        templateName: string;
                    }): Promise<dedicated.server.Task>;
                };
                status: {
                    $get(): Promise<dedicated.server.InstallationProgressStatus>;
                };
                templateCapabilities: {
                    $get(params: {
                        templateName: string;
                    }): Promise<dedicated.server.TemplateCaps>;
                };
            };
            intervention: {
                $get(): Promise<number[]>;
                $(interventionId: number): {
                    $get(): Promise<dedicated.server.Intervention>;
                };
            };
            ipBlockMerge: {
                $post(params: {
                    block: string;
                }): Promise<dedicated.server.Task>;
            };
            ipCanBeMovedTo: {
                $get(params: {
                    ip: string;
                }): Promise<void>;
            };
            ipCountryAvailable: {
                $get(): Promise<dedicated.server.IpCountryEnum[]>;
            };
            ipMove: {
                $post(params: {
                    ip: string;
                }): Promise<dedicated.server.Task>;
            };
            ips: {
                $get(): Promise<string[]>;
            };
            license: {
                compliantWindows: {
                    $get(): Promise<license.WindowsOsVersionEnum[]>;
                };
                compliantWindowsSqlServer: {
                    $get(): Promise<license.WindowsSqlVersionEnum[]>;
                };
                windows: {
                    $post(params: {
                        licenseId: string;
                        version: license.WindowsOsVersionEnum;
                    }): Promise<dedicated.server.Task>;
                };
            };
            mrtg: {
                $get(params: {
                    period: dedicated.server.MrtgPeriodEnum;
                    type: dedicated.server.MrtgTypeEnum;
                }): Promise<dedicated.server.MrtgTimestampValue[]>;
            };
            networkInterfaceController: {
                $get(params?: {
                    linkType?: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum;
                }): Promise<string[]>;
                $(mac: string): {
                    $get(): Promise<dedicated.networkInterfaceController.NetworkInterfaceController>;
                    mrtg: {
                        $get(params: {
                            period: dedicated.server.MrtgPeriodEnum;
                            type: dedicated.server.MrtgTypeEnum;
                        }): Promise<dedicated.server.MrtgTimestampValue[]>;
                    };
                };
            };
            ola: {
                group: {
                    $post(params: {
                        name: string;
                        virtualNetworkInterfaces: string[];
                    }): Promise<dedicated.server.Task>;
                };
                ungroup: {
                    $post(params: {
                        virtualNetworkInterface: string;
                    }): Promise<dedicated.server.Task[]>;
                };
            };
            option: {
                $get(): Promise<dedicated.server.OptionEnum[]>;
                $(option: dedicated.server.OptionEnum): {
                    $delete(): Promise<void>;
                    $get(): Promise<dedicated.server.Option>;
                };
            };
            orderable: {
                backupStorage: {
                    $get(): Promise<dedicated.server.BackupStorageOrderable>;
                };
                bandwidth: {
                    $get(): Promise<dedicated.server.BandwidthOrderable>;
                };
                bandwidthvRack: {
                    $get(): Promise<dedicated.server.BandwidthvRackOrderable>;
                };
                feature: {
                    $get(params: {
                        feature: dedicated.server.OrderableSysFeatureEnum;
                    }): Promise<boolean>;
                };
                ip: {
                    $get(): Promise<dedicated.server.IpOrderable>;
                };
                kvm: {
                    $get(): Promise<boolean>;
                };
                kvmExpress: {
                    $get(): Promise<boolean>;
                };
                professionalUse: {
                    $get(): Promise<boolean>;
                };
                traffic: {
                    $get(): Promise<dedicated.server.TrafficOrderable>;
                };
                usbKey: {
                    $get(): Promise<dedicated.server.UsbKeyOrderableDetails>;
                };
            };
            reboot: {
                $post(): Promise<dedicated.server.Task>;
            };
            secondaryDnsDomains: {
                $get(): Promise<string[]>;
                $post(params: {
                    domain: string;
                    ip?: string;
                }): Promise<void>;
                $(domain: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<secondaryDns.SecondaryDNS>;
                    $put(params?: {
                        creationDate?: string;
                        dns?: string;
                        domain?: string;
                        ipMaster?: string;
                    }): Promise<void>;
                    dnsServer: {
                        $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                    };
                };
            };
            secondaryDnsNameDomainToken: {
                $get(params: {
                    domain: string;
                }): Promise<secondaryDns.SecondaryDNSCheckField>;
            };
            secondaryDnsNameServerAvailable: {
                $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
            };
            serviceInfos: {
                $get(): Promise<services.Service>;
                $put(params?: {
                    canDeleteAtExpiration?: boolean;
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                    creation?: string;
                    domain?: string;
                    engagedUpTo?: string;
                    expiration?: string;
                    possibleRenewPeriod?: number[];
                    renew?: service.RenewType;
                    renewalType?: service.RenewalTypeEnum;
                    serviceId?: number;
                    status?: service.StateEnum;
                }): Promise<void>;
            };
            serviceMonitoring: {
                $get(): Promise<number[]>;
                $post(params: {
                    challengeText?: string;
                    enabled: boolean;
                    interval: dedicated.server.MonitoringIntervalEnum;
                    ip: string;
                    port: number;
                    protocol: dedicated.server.MonitoringProtocolEnum;
                    url?: string;
                }): Promise<dedicated.server.serviceMonitoring>;
                $(monitoringId: number): {
                    $delete(): Promise<void>;
                    $get(): Promise<dedicated.server.serviceMonitoring>;
                    $put(params?: {
                        challengeText?: string;
                        enabled?: boolean;
                        interval?: dedicated.server.MonitoringIntervalEnum;
                        ip?: string;
                        monitoringId?: number;
                        port?: number;
                        protocol?: dedicated.server.MonitoringProtocolEnum;
                        url?: string;
                    }): Promise<void>;
                    alert: {
                        email: {
                            $get(): Promise<number[]>;
                            $post(params: {
                                email: string;
                                language: dedicated.server.AlertLanguageEnum;
                            }): Promise<dedicated.server.emailAlert>;
                            $(alertId: number): {
                                $delete(): Promise<void>;
                                $get(): Promise<dedicated.server.emailAlert>;
                                $put(params?: {
                                    alertId?: number;
                                    email?: string;
                                    enabled?: boolean;
                                    language?: dedicated.server.AlertLanguageEnum;
                                }): Promise<void>;
                            };
                        };
                        sms: {
                            $get(): Promise<number[]>;
                            $post(params: {
                                fromHour?: number;
                                language: dedicated.server.AlertLanguageEnum;
                                phoneNumberTo: string;
                                smsAccount: string;
                                toHour?: number;
                            }): Promise<dedicated.server.smsAlert>;
                            $(alertId: number): {
                                $delete(): Promise<void>;
                                $get(): Promise<dedicated.server.smsAlert>;
                                $put(params?: {
                                    alertId?: number;
                                    enabled?: boolean;
                                    fromHour?: number;
                                    language?: dedicated.server.AlertLanguageEnum;
                                    phoneNumberTo?: string;
                                    smsAccount?: string;
                                    toHour?: number;
                                }): Promise<void>;
                            };
                        };
                    };
                };
            };
            specifications: {
                hardware: {
                    $get(): Promise<dedicated.server.HardwareSpecifications>;
                };
                ip: {
                    $get(): Promise<dedicated.server.IpOrderable>;
                };
                network: {
                    $get(): Promise<dedicated.server.NetworkSpecifications>;
                };
            };
            spla: {
                $get(params?: {
                    status?: dedicated.server.SplaStatusEnum;
                    type?: dedicated.server.SplaTypeEnum;
                }): Promise<number[]>;
                $post(params: {
                    serialNumber: string;
                    type: dedicated.server.SplaTypeEnum;
                }): Promise<number>;
                $(id: number): {
                    $get(): Promise<dedicated.server.spla>;
                    $put(params?: {
                        id?: number;
                        lastUpdate?: string;
                        serialNumber?: string;
                        status?: dedicated.server.SplaStatusEnum;
                        type?: dedicated.server.SplaTypeEnum;
                    }): Promise<void>;
                    revoke: {
                        $post(): Promise<void>;
                    };
                };
            };
            statistics: {
                $get(): Promise<dedicated.server.Rtm>;
                chart: {
                    $get(params: {
                        period: dedicated.server.RtmChartPeriodEnum;
                        type: dedicated.server.RtmChartTypeEnum;
                    }): Promise<complexType.ChartReturn>;
                };
                connection: {
                    $get(): Promise<dedicated.server.RtmConnection[]>;
                };
                cpu: {
                    $get(): Promise<dedicated.server.RtmCpu>;
                };
                disk: {
                    $get(): Promise<string[]>;
                    $(disk: string): {
                        $get(): Promise<dedicated.server.RtmDisk>;
                        smart: {
                            $get(): Promise<dedicated.server.RtmDiskSmart>;
                        };
                    };
                };
                load: {
                    $get(): Promise<dedicated.server.RtmLoad>;
                };
                memory: {
                    $get(): Promise<dedicated.server.RtmMemory[]>;
                };
                motherboard: {
                    $get(): Promise<dedicated.server.RtmMotherboardHw>;
                };
                os: {
                    $get(): Promise<dedicated.server.RtmOs>;
                };
                partition: {
                    $get(): Promise<string[]>;
                    $(partition: string): {
                        $get(): Promise<dedicated.server.RtmPartition>;
                        chart: {
                            $get(params: {
                                period: dedicated.server.RtmChartPeriodEnum;
                            }): Promise<complexType.ChartReturn>;
                        };
                    };
                };
                pci: {
                    $get(): Promise<dedicated.server.RtmPci[]>;
                };
                process: {
                    $get(): Promise<dedicated.server.RtmCommandSize[]>;
                };
                raid: {
                    $get(): Promise<string[]>;
                    $(unit: string): {
                        $get(): Promise<dedicated.server.RtmRaid>;
                        volume: {
                            $get(): Promise<string[]>;
                            $(volume: string): {
                                $get(): Promise<dedicated.server.RtmRaidVolume>;
                                port: {
                                    $get(): Promise<string[]>;
                                    $(port: string): {
                                        $get(): Promise<dedicated.server.RtmRaidVolumePort>;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            support: {
                replace: {
                    hardDiskDrive: {
                        $post(params: {
                            comment: string;
                            disks: dedicated.server.SupportReplaceHddInfo[];
                            inverse: boolean;
                        }): Promise<support.NewMessageInfo>;
                    };
                };
            };
            task: {
                $get(params?: {
                    function_?: dedicated.TaskFunctionEnum;
                    status?: dedicated.TaskStatusEnum;
                }): Promise<number[]>;
                $(taskId: number): {
                    $get(): Promise<dedicated.server.Task>;
                    cancel: {
                        $post(): Promise<void>;
                    };
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
            virtualMac: {
                $get(): Promise<string[]>;
                $post(params: {
                    ipAddress: string;
                    type: dedicated.server.VmacTypeEnum;
                    virtualMachineName: string;
                }): Promise<dedicated.server.Task>;
                $(macAddress: string): {
                    $get(): Promise<dedicated.server.VirtualMac>;
                    virtualAddress: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            ipAddress: string;
                            virtualMachineName: string;
                        }): Promise<dedicated.server.Task>;
                        $(ipAddress: string): {
                            $delete(): Promise<dedicated.server.Task>;
                            $get(): Promise<dedicated.server.VirtualMacManagement>;
                        };
                    };
                };
            };
            virtualNetworkInterface: {
                $get(params?: {
                    enabled?: boolean;
                    mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
                    name?: string;
                    vrack?: string;
                }): Promise<string[]>;
                $(uuid: string): {
                    $get(): Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
                    $put(params?: {
                        enabled?: boolean;
                        mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
                        name?: string;
                        networkInterfaceController?: string[];
                        serverName?: string;
                        uuid?: string;
                        vrack?: string;
                    }): Promise<void>;
                    disable: {
                        $post(): Promise<dedicated.server.Task>;
                    };
                    enable: {
                        $post(): Promise<dedicated.server.Task>;
                    };
                };
            };
            vrack: {
                $get(): Promise<string[]>;
                $(vrack: string): {
                    $delete(): Promise<vrack.Task>;
                    $get(): Promise<vrack.dedicatedServer>;
                    mrtg: {
                        $get(params: {
                            period: dedicated.server.MrtgPeriodEnum;
                            type: dedicated.server.MrtgTypeEnum;
                        }): Promise<dedicated.server.MrtgTimestampValue[]>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the DEDICATED service
     * List available services
     */
    get(path: '/dedicated/server'): () => Promise<string[]>;
    /**
     * Server informations
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Dedicated>;
    /**
     * backupCloudOfferDetails operations
     * Get details on offered backup cloud if available for the current server
     */
    get(path: '/dedicated/server/{serviceName}/backupCloudOfferDetails'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.backup.BackupOffer>;
    /**
     * Your BiosSettings
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/biosSettings'): (params: {
        serviceName: string;
    }) => Promise<dedicated.biosSettings.BiosSettings>;
    /**
     * Your BiosSettings for SGX feature
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/biosSettings/sgx'): (params: {
        serviceName: string;
    }) => Promise<dedicated.biosSettingsSgx.BiosSettingsSgx>;
    /**
     * List the dedicated.server.Netboot objects
     * Server compatibles netboots
     */
    get(path: '/dedicated/server/{serviceName}/boot'): (params: {
        serviceName: string;
        bootType?: dedicated.server.BootTypeEnum;
    }) => Promise<number[]>;
    /**
     * Available boots
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/boot/{bootId}'): (params: {
        bootId: number;
        serviceName: string;
    }) => Promise<dedicated.server.Netboot>;
    /**
     * List the dedicated.server.netbootOption objects
     * Option used on this netboot
     */
    get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option'): (params: {
        bootId: number;
        serviceName: string;
    }) => Promise<dedicated.server.BootOptionEnum[]>;
    /**
     * Available boot options
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/boot/{bootId}/option/{option}'): (params: {
        bootId: number;
        option: dedicated.server.BootOptionEnum;
        serviceName: string;
    }) => Promise<dedicated.server.netbootOption>;
    /**
     * Server bandwidth burst details
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/burst'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.ServerBurst>;
    /**
     * Backup Cloud assigned to this server
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/features/backupCloud'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.BackupCloud>;
    /**
     * Backup Ftp assigned to this server
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/features/backupFTP'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.BackupFtp>;
    /**
     * List the dedicated.server.BackupFtpAcl objects
     * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
     */
    get(path: '/dedicated/server/{serviceName}/features/backupFTP/access'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Backup Ftp ACL for this server and Backup Ftp
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {
        ipBlock: string;
        serviceName: string;
    }) => Promise<dedicated.server.BackupFtpAcl>;
    /**
     * authorizableBlocks operations
     * Get all IP blocks that can be used in the ACL
     */
    get(path: '/dedicated/server/{serviceName}/features/backupFTP/authorizableBlocks'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Firewall attached to this server
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/features/firewall'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Firewall>;
    /**
     * Server IPMI interface
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/features/ipmi'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Ipmi>;
    /**
     * access operations
     * IPMI access method
     */
    get(path: '/dedicated/server/{serviceName}/features/ipmi/access'): (params: {
        serviceName: string;
        type: dedicated.server.IpmiAccessTypeEnum;
    }) => Promise<dedicated.server.IpmiAccessValue>;
    /**
     * test operations
     * Result of http, ping and identification tests on IPMI interface
     */
    get(path: '/dedicated/server/{serviceName}/features/ipmi/test'): (params: {
        serviceName: string;
        type: dedicated.server.IpmiTestTypeEnum;
    }) => Promise<dedicated.server.IpmiTestResult>;
    /**
     * Physical KVM
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/features/kvm'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.kvm>;
    /**
     * compatible operations
     * Get name binary for asa
     */
    get(path: '/dedicated/server/{serviceName}/firewall/binary/compatible'): (params: {
        serviceName: string;
    }) => Promise<dedicated.BinaryFirewall>;
    /**
     * link operations
     * Get url of binary to update firewall asa
     */
    get(path: '/dedicated/server/{serviceName}/firewall/binary/link'): (params: {
        serviceName: string;
        binaryName: string;
    }) => Promise<dedicated.BinaryFirewallLink>;
    /**
     * compatibleTemplatePartitionSchemes operations
     * Retrieve compatible  install template partitions scheme
     */
    get(path: '/dedicated/server/{serviceName}/install/compatibleTemplatePartitionSchemes'): (params: {
        serviceName: string;
        templateName: string;
    }) => Promise<string[]>;
    /**
     * compatibleTemplates operations
     * Retrieve compatible  install templates names
     */
    get(path: '/dedicated/server/{serviceName}/install/compatibleTemplates'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.InstallTemplate>;
    /**
     * hardwareRaidProfile operations
     * Retrieve hardware RAID profile
     */
    get(path: '/dedicated/server/{serviceName}/install/hardwareRaidProfile'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.HardwareRaidProfile>;
    /**
     * hardwareRaidSize operations
     * Get hardware RAID size for a given configuration
     */
    get(path: '/dedicated/server/{serviceName}/install/hardwareRaidSize'): (params: {
        serviceName: string;
        partitionSchemeName: string;
        templateName: string;
    }) => Promise<dedicated.server.HardwareRaidSize>;
    /**
     * status operations
     * Get installation status
     */
    get(path: '/dedicated/server/{serviceName}/install/status'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.InstallationProgressStatus>;
    /**
     * templateCapabilities operations
     * Gives some capabilities regarding the template for the current dedicated server.
     */
    get(path: '/dedicated/server/{serviceName}/install/templateCapabilities'): (params: {
        serviceName: string;
        templateName: string;
    }) => Promise<dedicated.server.TemplateCaps>;
    /**
     * List the dedicated.server.Intervention objects
     * technical intervention history
     */
    get(path: '/dedicated/server/{serviceName}/intervention'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Intervention made on this server
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/intervention/{interventionId}'): (params: {
        interventionId: number;
        serviceName: string;
    }) => Promise<dedicated.server.Intervention>;
    /**
     * ipCanBeMovedTo operations
     * Check if given IP can be moved to this server
     */
    get(path: '/dedicated/server/{serviceName}/ipCanBeMovedTo'): (params: {
        serviceName: string;
        ip: string;
    }) => Promise<void>;
    /**
     * ipCountryAvailable operations
     * Retrieve available country for IP order
     */
    get(path: '/dedicated/server/{serviceName}/ipCountryAvailable'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.IpCountryEnum[]>;
    /**
     * ips operations
     * List all ip from server
     */
    get(path: '/dedicated/server/{serviceName}/ips'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * compliantWindows operations
     * Get the windows license compliant with your server.
     */
    get(path: '/dedicated/server/{serviceName}/license/compliantWindows'): (params: {
        serviceName: string;
    }) => Promise<license.WindowsOsVersionEnum[]>;
    /**
     * compliantWindowsSqlServer operations
     * Get the windows SQL server license compliant with your server.
     */
    get(path: '/dedicated/server/{serviceName}/license/compliantWindowsSqlServer'): (params: {
        serviceName: string;
    }) => Promise<license.WindowsSqlVersionEnum[]>;
    /**
     * mrtg operations
     * Retrieve traffic graph values
     */
    get(path: '/dedicated/server/{serviceName}/mrtg'): (params: {
        serviceName: string;
        period: dedicated.server.MrtgPeriodEnum;
        type: dedicated.server.MrtgTypeEnum;
    }) => Promise<dedicated.server.MrtgTimestampValue[]>;
    /**
     * List the dedicated.networkInterfaceController.NetworkInterfaceController objects
     * List server networkInterfaceController
     */
    get(path: '/dedicated/server/{serviceName}/networkInterfaceController'): (params: {
        serviceName: string;
        linkType?: dedicated.networkInterfaceController.NetworkInterfaceControllerLinkTypeEnum;
    }) => Promise<string[]>;
    /**
     * Your networkInterfaceController
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}'): (params: {
        mac: string;
        serviceName: string;
    }) => Promise<dedicated.networkInterfaceController.NetworkInterfaceController>;
    /**
     * mrtg operations
     * Retrieve traffic graph values
     */
    get(path: '/dedicated/server/{serviceName}/networkInterfaceController/{mac}/mrtg'): (params: {
        mac: string;
        serviceName: string;
        period: dedicated.server.MrtgPeriodEnum;
        type: dedicated.server.MrtgTypeEnum;
    }) => Promise<dedicated.server.MrtgTimestampValue[]>;
    /**
     * List the dedicated.server.Option objects
     * List of dedicated server options
     */
    get(path: '/dedicated/server/{serviceName}/option'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.OptionEnum[]>;
    /**
     * Information about the options of a dedicated server
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/option/{option}'): (params: {
        option: dedicated.server.OptionEnum;
        serviceName: string;
    }) => Promise<dedicated.server.Option>;
    /**
     * backupStorage operations
     * Get the backup storage orderable with your server.
     */
    get(path: '/dedicated/server/{serviceName}/orderable/backupStorage'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.BackupStorageOrderable>;
    /**
     * bandwidth operations
     * Get bandwidth orderable with your server.
     */
    get(path: '/dedicated/server/{serviceName}/orderable/bandwidth'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.BandwidthOrderable>;
    /**
     * bandwidthvRack operations
     * Get vRack bandwidth orderable with your server.
     */
    get(path: '/dedicated/server/{serviceName}/orderable/bandwidthvRack'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.BandwidthvRackOrderable>;
    /**
     * feature operations
     * Is this feature orderable with your server
     */
    get(path: '/dedicated/server/{serviceName}/orderable/feature'): (params: {
        serviceName: string;
        feature: dedicated.server.OrderableSysFeatureEnum;
    }) => Promise<boolean>;
    /**
     * ip operations
     * Get IP orderable with your server.
     */
    get(path: '/dedicated/server/{serviceName}/orderable/ip'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.IpOrderable>;
    /**
     * kvm operations
     * Is a KVM orderable with your server
     */
    get(path: '/dedicated/server/{serviceName}/orderable/kvm'): (params: {
        serviceName: string;
    }) => Promise<boolean>;
    /**
     * kvmExpress operations
     * Is a KVM express orderable with your server
     */
    get(path: '/dedicated/server/{serviceName}/orderable/kvmExpress'): (params: {
        serviceName: string;
    }) => Promise<boolean>;
    /**
     * professionalUse operations
     * Is professional use orderable with your server
     */
    get(path: '/dedicated/server/{serviceName}/orderable/professionalUse'): (params: {
        serviceName: string;
    }) => Promise<boolean>;
    /**
     * traffic operations
     * Get orderable traffic with your server.
     */
    get(path: '/dedicated/server/{serviceName}/orderable/traffic'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.TrafficOrderable>;
    /**
     * usbKey operations
     * Get USB keys orderable with your server
     */
    get(path: '/dedicated/server/{serviceName}/orderable/usbKey'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.UsbKeyOrderableDetails>;
    /**
     * List the secondaryDns.SecondaryDNS objects
     * List of secondary dns domain name
     */
    get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Secondary dns infos
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<secondaryDns.SecondaryDNS>;
    /**
     * dnsServer operations
     * domain name server informations
     */
    get(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}/dnsServer'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<secondaryDns.SecondaryDNSNameServer>;
    /**
     * secondaryDnsNameDomainToken operations
     * DNS field to temporarily add to your zone so that we can verify you are the owner of this domain
     */
    get(path: '/dedicated/server/{serviceName}/secondaryDnsNameDomainToken'): (params: {
        serviceName: string;
        domain: string;
    }) => Promise<secondaryDns.SecondaryDNSCheckField>;
    /**
     * secondaryDnsNameServerAvailable operations
     * Secondary nameServer available for your Server
     */
    get(path: '/dedicated/server/{serviceName}/secondaryDnsNameServerAvailable'): (params: {
        serviceName: string;
    }) => Promise<secondaryDns.SecondaryDNSNameServer>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the dedicated.server.serviceMonitoring objects
     * Service monitoring details
     */
    get(path: '/dedicated/server/{serviceName}/serviceMonitoring'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Service monitoring details
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}'): (params: {
        monitoringId: number;
        serviceName: string;
    }) => Promise<dedicated.server.serviceMonitoring>;
    /**
     * List the dedicated.server.emailAlert objects
     * Service monitoring alert by email
     */
    get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email'): (params: {
        monitoringId: number;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Service monitoring Email alert
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}'): (params: {
        alertId: number;
        monitoringId: number;
        serviceName: string;
    }) => Promise<dedicated.server.emailAlert>;
    /**
     * List the dedicated.server.smsAlert objects
     * Service monitoring alert by SMS
     */
    get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms'): (params: {
        monitoringId: number;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Monitoring SMS alert details, This service is currently not supported for servers at BHS
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}'): (params: {
        alertId: number;
        monitoringId: number;
        serviceName: string;
    }) => Promise<dedicated.server.smsAlert>;
    /**
     * hardware operations
     * Retrieve hardware informations about this dedicated server
     */
    get(path: '/dedicated/server/{serviceName}/specifications/hardware'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.HardwareSpecifications>;
    /**
     * ip operations
     * Retrieve IP capabilities about this dedicated server
     */
    get(path: '/dedicated/server/{serviceName}/specifications/ip'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.IpOrderable>;
    /**
     * network operations
     * Retrieve network informations about this dedicated server
     */
    get(path: '/dedicated/server/{serviceName}/specifications/network'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.NetworkSpecifications>;
    /**
     * List the dedicated.server.spla objects
     * Your own SPLA licenses attached to this dedicated server
     */
    get(path: '/dedicated/server/{serviceName}/spla'): (params: {
        serviceName: string;
        status?: dedicated.server.SplaStatusEnum;
        type?: dedicated.server.SplaTypeEnum;
    }) => Promise<number[]>;
    /**
     * SPLA licenses management
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/spla/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<dedicated.server.spla>;
    /**
     * Servers statistics sent by RTM (Real Time Monitoring)
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/statistics'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Rtm>;
    /**
     * chart operations
     * Retrieve RTM graph values
     */
    get(path: '/dedicated/server/{serviceName}/statistics/chart'): (params: {
        serviceName: string;
        period: dedicated.server.RtmChartPeriodEnum;
        type: dedicated.server.RtmChartTypeEnum;
    }) => Promise<complexType.ChartReturn>;
    /**
     * connection operations
     * Get server opened connections
     */
    get(path: '/dedicated/server/{serviceName}/statistics/connection'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmConnection[]>;
    /**
     * cpu operations
     * Get server cpu informations
     */
    get(path: '/dedicated/server/{serviceName}/statistics/cpu'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmCpu>;
    /**
     * List the dedicated.server.RtmDisk objects
     * Server disks
     */
    get(path: '/dedicated/server/{serviceName}/statistics/disk'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Server disks informations
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}'): (params: {
        disk: string;
        serviceName: string;
    }) => Promise<dedicated.server.RtmDisk>;
    /**
     * smart operations
     * Get disk smart informations
     */
    get(path: '/dedicated/server/{serviceName}/statistics/disk/{disk}/smart'): (params: {
        disk: string;
        serviceName: string;
    }) => Promise<dedicated.server.RtmDiskSmart>;
    /**
     * load operations
     * Get server load
     */
    get(path: '/dedicated/server/{serviceName}/statistics/load'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmLoad>;
    /**
     * memory operations
     * Get server memory informations
     */
    get(path: '/dedicated/server/{serviceName}/statistics/memory'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmMemory[]>;
    /**
     * motherboard operations
     * Get server motherboard hardware informations
     */
    get(path: '/dedicated/server/{serviceName}/statistics/motherboard'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmMotherboardHw>;
    /**
     * os operations
     * Get server os informations
     */
    get(path: '/dedicated/server/{serviceName}/statistics/os'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmOs>;
    /**
     * List the dedicated.server.RtmPartition objects
     * Server partitions
     */
    get(path: '/dedicated/server/{serviceName}/statistics/partition'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Server partitions informations
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}'): (params: {
        partition: string;
        serviceName: string;
    }) => Promise<dedicated.server.RtmPartition>;
    /**
     * chart operations
     * Retrieve partition charts
     */
    get(path: '/dedicated/server/{serviceName}/statistics/partition/{partition}/chart'): (params: {
        partition: string;
        serviceName: string;
        period: dedicated.server.RtmChartPeriodEnum;
    }) => Promise<complexType.ChartReturn>;
    /**
     * pci operations
     * Get server PCI devices informations
     */
    get(path: '/dedicated/server/{serviceName}/statistics/pci'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmPci[]>;
    /**
     * process operations
     * Get server process
     */
    get(path: '/dedicated/server/{serviceName}/statistics/process'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.RtmCommandSize[]>;
    /**
     * List the dedicated.server.RtmRaid objects
     * Server raid informations
     */
    get(path: '/dedicated/server/{serviceName}/statistics/raid'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Server raid informations
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}'): (params: {
        serviceName: string;
        unit: string;
    }) => Promise<dedicated.server.RtmRaid>;
    /**
     * List the dedicated.server.RtmRaidVolume objects
     * Raid unit volumes
     */
    get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume'): (params: {
        serviceName: string;
        unit: string;
    }) => Promise<string[]>;
    /**
     * Server raid volume information
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}'): (params: {
        serviceName: string;
        unit: string;
        volume: string;
    }) => Promise<dedicated.server.RtmRaidVolume>;
    /**
     * List the dedicated.server.RtmRaidVolumePort objects
     * Raid unit volume ports
     */
    get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port'): (params: {
        serviceName: string;
        unit: string;
        volume: string;
    }) => Promise<string[]>;
    /**
     * Server raid volume port informations
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/statistics/raid/{unit}/volume/{volume}/port/{port}'): (params: {
        port: string;
        serviceName: string;
        unit: string;
        volume: string;
    }) => Promise<dedicated.server.RtmRaidVolumePort>;
    /**
     * List the dedicated.server.Task objects
     * Dedicated server todos
     */
    get(path: '/dedicated/server/{serviceName}/task'): (params: {
        serviceName: string;
        function_?: dedicated.TaskFunctionEnum;
        status?: dedicated.TaskStatusEnum;
    }) => Promise<number[]>;
    /**
     * Server tasks
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<dedicated.server.Task>;
    /**
     * List the dedicated.server.VirtualMac objects
     * Virtual MAC addresses of the server
     */
    get(path: '/dedicated/server/{serviceName}/virtualMac'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * A virtual MAC address associated to one or more IPs
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}'): (params: {
        macAddress: string;
        serviceName: string;
    }) => Promise<dedicated.server.VirtualMac>;
    /**
     * List the dedicated.server.VirtualMacManagement objects
     * List of IPs associated to this Virtual MAC
     */
    get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress'): (params: {
        macAddress: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     *  ip address linked with this virtual mac address
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}'): (params: {
        ipAddress: string;
        macAddress: string;
        serviceName: string;
    }) => Promise<dedicated.server.VirtualMacManagement>;
    /**
     * List the dedicated.virtualNetworkInterface.VirtualNetworkInterface objects
     * List server VirtualNetworkInterfaces
     */
    get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface'): (params: {
        serviceName: string;
        enabled?: boolean;
        mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
        name?: string;
        vrack?: string;
    }) => Promise<string[]>;
    /**
     * Your VirtualNetworkInterface
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}'): (params: {
        serviceName: string;
        uuid: string;
    }) => Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
    /**
     * List the vrack.dedicatedServer objects
     * Server Vracks
     */
    get(path: '/dedicated/server/{serviceName}/vrack'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * vrack dedicated server interfaces
     * Get this object properties
     */
    get(path: '/dedicated/server/{serviceName}/vrack/{vrack}'): (params: {
        serviceName: string;
        vrack: string;
    }) => Promise<vrack.dedicatedServer>;
    /**
     * mrtg operations
     * Retrieve vrack traffic graph values
     */
    get(path: '/dedicated/server/{serviceName}/vrack/{vrack}/mrtg'): (params: {
        serviceName: string;
        vrack: string;
        period: dedicated.server.MrtgPeriodEnum;
        type: dedicated.server.MrtgTypeEnum;
    }) => Promise<dedicated.server.MrtgTimestampValue[]>;
    /**
     * List the availability of dedicated server
     * List the availability of dedicated server
     */
    get(path: '/dedicated/server/availabilities'): (params: {
        country: nichandle.OvhSubsidiaryEnum;
        hardware?: string;
    }) => Promise<dedicated.Availabilities[]>;
    /**
     * List the availability of dedicated server (RAW)
     * List the availability of dedicated server
     */
    get(path: '/dedicated/server/availabilities/raw'): () => Promise<dedicated.AvailabilitiesRaw[]>;
    /**
     * List the availability of dedicated server
     * List the availability of dedicated server
     */
    get(path: '/dedicated/server/datacenter/availabilities'): (params?: {
        datacenters?: string;
        excludeDatacenters?: boolean;
        memory?: string;
        planCode?: string;
        server?: string;
        storage?: string;
    }) => Promise<dedicated.DatacenterAvailability[]>;
    /**
     * List the operating systems available for a specified hardware reference
     * List the os available for a specified hardware reference
     */
    get(path: '/dedicated/server/osAvailabilities'): (params: {
        hardware: string;
    }) => Promise<dedicated.OsAvailabilitiesEnum[]>;
    /**
     * Get a VirtualNetworkInterface details
     * Get VirtualNetworkInterface details
     */
    get(path: '/dedicated/server/virtualNetworkInterface/{uuid}'): (params: {
        uuid: string;
    }) => Promise<dedicated.virtualNetworkInterface.VirtualNetworkInterface>;
    /**
     * Server informations
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}'): (params: {
        serviceName: string;
        bootId?: number;
        commercialRange?: string;
        datacenter?: dedicated.DatacenterEnum;
        ip?: string;
        linkSpeed?: number;
        monitoring?: boolean;
        name?: string;
        os?: string;
        professionalUse?: boolean;
        rack?: string;
        rescueMail?: string;
        reverse?: string;
        rootDevice?: string;
        serverId?: number;
        state?: dedicated.server.StateEnum;
        supportLevel?: dedicated.server.SupportLevelEnum;
    }) => Promise<void>;
    /**
     * Server bandwidth burst details
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/burst'): (params: {
        serviceName: string;
        capacity?: complexType.UnitAndValue<number>;
        status?: dedicated.server.BurstStatusEnum;
    }) => Promise<void>;
    /**
     * Backup Ftp ACL for this server and Backup Ftp
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {
        ipBlock: string;
        serviceName: string;
        cifs?: boolean;
        ftp?: boolean;
        isApplied?: boolean;
        lastUpdate?: string;
        nfs?: boolean;
    }) => Promise<void>;
    /**
     * Firewall attached to this server
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/features/firewall'): (params: {
        serviceName: string;
        enabled?: boolean;
        firewall?: string;
        ip?: string;
        mode?: dedicated.server.FirewallModeEnum;
        model?: dedicated.server.FirewallModelEnum;
    }) => Promise<void>;
    /**
     * Secondary dns infos
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {
        domain: string;
        serviceName: string;
        creationDate?: string;
        dns?: string;
        ipMaster?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: service.RenewType;
        renewalType?: service.RenewalTypeEnum;
        serviceId?: number;
        status?: service.StateEnum;
    }) => Promise<void>;
    /**
     * Service monitoring details
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}'): (params: {
        monitoringId: number;
        serviceName: string;
        challengeText?: string;
        enabled?: boolean;
        interval?: dedicated.server.MonitoringIntervalEnum;
        ip?: string;
        port?: number;
        protocol?: dedicated.server.MonitoringProtocolEnum;
        url?: string;
    }) => Promise<void>;
    /**
     * Service monitoring Email alert
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}'): (params: {
        alertId: number;
        monitoringId: number;
        serviceName: string;
        email?: string;
        enabled?: boolean;
        language?: dedicated.server.AlertLanguageEnum;
    }) => Promise<void>;
    /**
     * Monitoring SMS alert details, This service is currently not supported for servers at BHS
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}'): (params: {
        alertId: number;
        monitoringId: number;
        serviceName: string;
        enabled?: boolean;
        fromHour?: number;
        language?: dedicated.server.AlertLanguageEnum;
        phoneNumberTo?: string;
        smsAccount?: string;
        toHour?: number;
    }) => Promise<void>;
    /**
     * SPLA licenses management
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/spla/{id}'): (params: {
        id: number;
        serviceName: string;
        lastUpdate?: string;
        serialNumber?: string;
        status?: dedicated.server.SplaStatusEnum;
        type?: dedicated.server.SplaTypeEnum;
    }) => Promise<void>;
    /**
     * Your VirtualNetworkInterface
     * Alter this object properties
     */
    put(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}'): (params: {
        serviceName: string;
        uuid: string;
        enabled?: boolean;
        mode?: dedicated.virtualNetworkInterface.VirtualNetworkInterfaceModeEnum;
        name?: string;
        networkInterfaceController?: string[];
        serverName?: string;
        vrack?: string;
    }) => Promise<void>;
    /**
     * authenticationSecret operations
     * Retrieve secret to connect to the server / application
     */
    post(path: '/dedicated/server/{serviceName}/authenticationSecret'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Access[]>;
    /**
     * configure operations
     * Configure SGX feature
     */
    post(path: '/dedicated/server/{serviceName}/biosSettings/sgx/configure'): (params: {
        serviceName: string;
        prmrr?: dedicated.server.BiosSettingsSgxPrmrrEnum;
        status?: dedicated.server.BiosSettingsSgxStatusEnum;
    }) => Promise<dedicated.server.Task>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/dedicated/server/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/dedicated/server/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * Backup Cloud assigned to this server
     * Create a new storage backup space associated to server
     */
    post(path: '/dedicated/server/{serviceName}/features/backupCloud'): (params: {
        serviceName: string;
        cloudProjectId?: string;
        projectDescription?: string;
    }) => Promise<dedicated.server.BackupCloud>;
    /**
     * password operations
     * Change your cloud account password
     */
    post(path: '/dedicated/server/{serviceName}/features/backupCloud/password'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.backup.BackupPassword>;
    /**
     * Backup Ftp assigned to this server
     * Create a new Backup FTP space
     */
    post(path: '/dedicated/server/{serviceName}/features/backupFTP'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * List the dedicated.server.BackupFtpAcl objects
     * Create a new Backup FTP ACL
     */
    post(path: '/dedicated/server/{serviceName}/features/backupFTP/access'): (params: {
        serviceName: string;
        cifs: boolean;
        ftp?: boolean;
        ipBlock: string;
        nfs: boolean;
    }) => Promise<dedicated.server.Task>;
    /**
     * password operations
     * Change your Backup FTP password
     */
    post(path: '/dedicated/server/{serviceName}/features/backupFTP/password'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * access operations
     * Request an acces on KVM IPMI interface
     */
    post(path: '/dedicated/server/{serviceName}/features/ipmi/access'): (params: {
        serviceName: string;
        ipToAllow?: string;
        sshKey?: string;
        ttl: dedicated.server.CacheTTLEnum;
        type: dedicated.server.IpmiAccessTypeEnum;
    }) => Promise<dedicated.server.Task>;
    /**
     * resetInterface operations
     * Reset KVM IPMI interface
     */
    post(path: '/dedicated/server/{serviceName}/features/ipmi/resetInterface'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * resetSessions operations
     * Reset KVM IPMI sessions
     */
    post(path: '/dedicated/server/{serviceName}/features/ipmi/resetSessions'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * test operations
     * Launch test on KVM IPMI interface
     */
    post(path: '/dedicated/server/{serviceName}/features/ipmi/test'): (params: {
        serviceName: string;
        ttl: dedicated.server.CacheTTLEnum;
        type: dedicated.server.IpmiTestTypeEnum;
    }) => Promise<dedicated.server.Task>;
    /**
     * start operations
     * Start an install
     */
    post(path: '/dedicated/server/{serviceName}/install/start'): (params: {
        serviceName: string;
        details?: dedicated.server.InstallCustom;
        partitionSchemeName?: string;
        templateName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * ipBlockMerge operations
     * Merge a splitted block and route it to the choosen server. You cannot undo this operation
     */
    post(path: '/dedicated/server/{serviceName}/ipBlockMerge'): (params: {
        serviceName: string;
        block: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * ipMove operations
     * Move an Ip failover to this server
     */
    post(path: '/dedicated/server/{serviceName}/ipMove'): (params: {
        serviceName: string;
        ip: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * windows operations
     * Add your existing windows license serial to this dedicated server. Will be manageable in /license/windows.
     */
    post(path: '/dedicated/server/{serviceName}/license/windows'): (params: {
        serviceName: string;
        licenseId: string;
        version: license.WindowsOsVersionEnum;
    }) => Promise<dedicated.server.Task>;
    /**
     * group operations
     * OLA : Group interfaces into an aggregation
     */
    post(path: '/dedicated/server/{serviceName}/ola/group'): (params: {
        serviceName: string;
        name: string;
        virtualNetworkInterfaces: string[];
    }) => Promise<dedicated.server.Task>;
    /**
     * ungroup operations
     * OLA : Ungroup interfaces
     */
    post(path: '/dedicated/server/{serviceName}/ola/ungroup'): (params: {
        serviceName: string;
        virtualNetworkInterface: string;
    }) => Promise<dedicated.server.Task[]>;
    /**
     * reboot operations
     * Hard reboot this server
     */
    post(path: '/dedicated/server/{serviceName}/reboot'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * List the secondaryDns.SecondaryDNS objects
     * add a domain on secondary dns
     */
    post(path: '/dedicated/server/{serviceName}/secondaryDnsDomains'): (params: {
        serviceName: string;
        domain: string;
        ip?: string;
    }) => Promise<void>;
    /**
     * List the dedicated.server.serviceMonitoring objects
     * Add a new service monitoring
     */
    post(path: '/dedicated/server/{serviceName}/serviceMonitoring'): (params: {
        serviceName: string;
        challengeText?: string;
        enabled: boolean;
        interval: dedicated.server.MonitoringIntervalEnum;
        ip: string;
        port: number;
        protocol: dedicated.server.MonitoringProtocolEnum;
        url?: string;
    }) => Promise<dedicated.server.serviceMonitoring>;
    /**
     * List the dedicated.server.emailAlert objects
     * Add a new email alert
     */
    post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email'): (params: {
        monitoringId: number;
        serviceName: string;
        email: string;
        language: dedicated.server.AlertLanguageEnum;
    }) => Promise<dedicated.server.emailAlert>;
    /**
     * List the dedicated.server.smsAlert objects
     * Create a SMS alert
     */
    post(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms'): (params: {
        monitoringId: number;
        serviceName: string;
        fromHour?: number;
        language: dedicated.server.AlertLanguageEnum;
        phoneNumberTo: string;
        smsAccount: string;
        toHour?: number;
    }) => Promise<dedicated.server.smsAlert>;
    /**
     * List the dedicated.server.spla objects
     * Add a new SPLA license
     */
    post(path: '/dedicated/server/{serviceName}/spla'): (params: {
        serviceName: string;
        serialNumber: string;
        type: dedicated.server.SplaTypeEnum;
    }) => Promise<number>;
    /**
     * revoke operations
     * Revoke an SPLA license
     */
    post(path: '/dedicated/server/{serviceName}/spla/{id}/revoke'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * hardDiskDrive operations
     * Ask for a broken HDD replacement
     */
    post(path: '/dedicated/server/{serviceName}/support/replace/hardDiskDrive'): (params: {
        serviceName: string;
        comment: string;
        disks: dedicated.server.SupportReplaceHddInfo[];
        inverse: boolean;
    }) => Promise<support.NewMessageInfo>;
    /**
     * cancel operations
     * this action stop the task progression if it's possible
     */
    post(path: '/dedicated/server/{serviceName}/task/{taskId}/cancel'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<void>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/dedicated/server/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the dedicated.server.VirtualMac objects
     * Add a virtual mac to an IP address
     */
    post(path: '/dedicated/server/{serviceName}/virtualMac'): (params: {
        serviceName: string;
        ipAddress: string;
        type: dedicated.server.VmacTypeEnum;
        virtualMachineName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * List the dedicated.server.VirtualMacManagement objects
     * Add an IP to this Virtual MAC
     */
    post(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress'): (params: {
        macAddress: string;
        serviceName: string;
        ipAddress: string;
        virtualMachineName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * disable operations
     * Disable this VirtualNetworkInterface
     */
    post(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/disable'): (params: {
        serviceName: string;
        uuid: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * enable operations
     * Enable this VirtualNetworkInterface
     */
    post(path: '/dedicated/server/{serviceName}/virtualNetworkInterface/{uuid}/enable'): (params: {
        serviceName: string;
        uuid: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * Backup Cloud assigned to this server
     * Deactivate the cloud backup associated to the server. This does not delete container data.
     */
    delete(path: '/dedicated/server/{serviceName}/features/backupCloud'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * Backup Ftp assigned to this server
     * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
     */
    delete(path: '/dedicated/server/{serviceName}/features/backupFTP'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * Backup Ftp ACL for this server and Backup Ftp
     * Revoke this ACL
     */
    delete(path: '/dedicated/server/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {
        ipBlock: string;
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * Information about the options of a dedicated server
     * Release a given option
     */
    delete(path: '/dedicated/server/{serviceName}/option/{option}'): (params: {
        option: dedicated.server.OptionEnum;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Secondary dns infos
     * remove this domain
     */
    delete(path: '/dedicated/server/{serviceName}/secondaryDnsDomains/{domain}'): (params: {
        domain: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Service monitoring details
     * Remove this service monitoring
     */
    delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}'): (params: {
        monitoringId: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Service monitoring Email alert
     * Remove this Email alert monitoring
     */
    delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/email/{alertId}'): (params: {
        alertId: number;
        monitoringId: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Monitoring SMS alert details, This service is currently not supported for servers at BHS
     * Remove this SMS alert
     */
    delete(path: '/dedicated/server/{serviceName}/serviceMonitoring/{monitoringId}/alert/sms/{alertId}'): (params: {
        alertId: number;
        monitoringId: number;
        serviceName: string;
    }) => Promise<void>;
    /**
     *  ip address linked with this virtual mac address
     * Remove this ip from virtual mac , if you remove the last linked Ip, virtualmac will be deleted
     */
    delete(path: '/dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}'): (params: {
        ipAddress: string;
        macAddress: string;
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * vrack dedicated server interfaces
     * remove this server from this vrack
     */
    delete(path: '/dedicated/server/{serviceName}/vrack/{vrack}'): (params: {
        serviceName: string;
        vrack: string;
    }) => Promise<vrack.Task>;
}
