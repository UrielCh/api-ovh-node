import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicatedCloud Models
 * Source: https://api.us.ovhcloud.com/1.0/dedicatedCloud.json
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace coreTypes {
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
}
export namespace dedicatedCloud {
    // interface fullName: dedicatedCloud.AllowedNetwork.AllowedNetwork
    export interface AllowedNetwork {
        description?: string;
        network: string;
        networkAccessId: number;
        state: dedicatedCloudAllowedNetworkStateEnum;
    }
    // type fullname: dedicatedCloud.AllowedNetworkStateEnum
    export type AllowedNetworkStateEnum = "allowed" | "toDelete" | "toUpdate"
    // interface fullName: dedicatedCloud.AutoScaleConfig.AutoScaleConfig
    export interface AutoScaleConfig {
        cpuMaxThreshold: number;
        cpuMinThreshold: number;
        description?: string;
        id: number;
        maxNumOfHosts: number;
        memMaxThreshold: number;
        memMinThreshold: number;
        minNumOfHosts: number;
        storageMaxThreshold: number;
        timeDelayScaleIn: number;
        timeDelayScaleOut: number;
        timeDelayStorageScaleOut: number;
    }
    // interface fullName: dedicatedCloud.AutoScaleVirtual.AutoScaleVirtual
    export interface AutoScaleVirtual {
        state: dedicatedCloudoptionStateEnum;
    }
    // interface fullName: dedicatedCloud.Backup.Backup
    export interface Backup {
        backupDurationInReport?: boolean;
        backupOffer?: dedicatedCloudbackupOfferTypeEnum;
        backupSizeInReport?: boolean;
        diskSizeInReport?: boolean;
        encryption?: boolean;
        fullDayInReport?: boolean;
        hostname?: string;
        mailAddress?: string;
        restorePointInReport?: boolean;
        scheduleHour?: string;
        state: dedicatedCloudBackupStateEnum;
        vmwareVmId?: string;
    }
    // interface fullName: dedicatedCloud.BackupJob.BackupJob
    export interface BackupJob {
        allocatedDisk?: number;
        backupDays?: dedicatedCloudbackupBackupDaysEnum[];
        encryption?: boolean;
        offerType?: dedicatedCloudbackupOfferTypeEnum;
        retentionTime?: number;
        state: dedicatedCloudbackupStateEnum;
        vmName?: string;
    }
    // type fullname: dedicatedCloud.BackupStateEnum
    export type BackupStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "removing"
    // type fullname: dedicatedCloud.BillingTypeEnum
    export type BillingTypeEnum = "demo" | "monthly"
    // type fullname: dedicatedCloud.BlockRegisterEnum
    export type BlockRegisterEnum = "arin" | "ripe"
    // interface fullName: dedicatedCloud.Capabilities.Capabilities
    export interface Capabilities {
        addRessourceRightStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        backupStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        canAddUser: boolean;
        fullAdminRoUserStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        nexus1000vStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        upgradable: boolean;
        userAccessPolicyStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
    }
    // interface fullName: dedicatedCloud.Cluster.Cluster
    export interface Cluster {
        autoscale?: dedicatedCloudclusterAutoScale;
        drsMode: dedicatedCloudclusterClusterDrsModeEnum;
        drsStatus: dedicatedCloudclusterClusterConfigsStatusEnum;
        evcMode: string;
        haStatus: dedicatedCloudclusterClusterConfigsStatusEnum;
        id: number;
        name: string;
        vmwareClusterId: string;
    }
    // type fullname: dedicatedCloud.CommercialNameEnum
    export type CommercialNameEnum = "DC" | "DC-ANCIENT" | "DC-ANCIENT-HDS" | "DC-ANCIENT-HIPAA" | "DC-ANCIENT-NSX" | "DC-ANCIENT-NSX-VROPS" | "DC-ANCIENT-PCIDSS" | "DC-ANCIENT-UNKNOWN" | "DC-ANCIENT-VROPS" | "DC-HDS" | "DC-HIPAA" | "DC-LEGACY" | "DC-LEGACY-HDS" | "DC-LEGACY-HIPAA" | "DC-LEGACY-NSX" | "DC-LEGACY-NSX-VROPS" | "DC-LEGACY-PCIDSS" | "DC-LEGACY-UNKNOWN" | "DC-LEGACY-VROPS" | "DC-NSX" | "DC-NSX-VROPS" | "DC-PCIDSS" | "DC-UNKNOWN" | "DC-VROPS" | "SDDC" | "SDDC-HDS" | "SDDC-HIPAA" | "SDDC-LEGACY" | "SDDC-LEGACY-HDS" | "SDDC-LEGACY-HIPAA" | "SDDC-LEGACY-PCIDSS" | "SDDC-LEGACY-UNKNOWN" | "SDDC-LEGACY-VROPS" | "SDDC-LEGACY-VROPS-WITHOUT-NSX" | "SDDC-LEGACY-WITHOUT-NSX" | "SDDC-PCIDSS" | "SDDC-UNKNOWN" | "SDDC-VROPS" | "SDDC-VROPS-WITHOUT-NSX" | "SDDC-WITHOUT-NSX" | "UNKNOWN" | "UNKNOWN-HDS" | "UNKNOWN-HIPAA" | "UNKNOWN-NSX" | "UNKNOWN-NSX-VROPS" | "UNKNOWN-PCIDSS" | "UNKNOWN-UNKNOWN" | "UNKNOWN-VROPS"
    // interface fullName: dedicatedCloud.CommercialRange.CommercialRange
    export interface CommercialRange {
        allowedHypervisorVersions: dedicatedCloudHypervisorVersionEnum[];
        allowedNetworkRoles: dedicatedCloudrightNetworkRoleEnum[];
        commercialRangeName: string;
        dedicatedCloudVersion: string;
        range?: string;
    }
    // interface fullName: dedicatedCloud.Datacenter.Datacenter
    export interface Datacenter {
        commercialName: dedicatedCloudCommercialNameEnum;
        commercialRangeName: string;
        datacenterId: number;
        description: string;
        horizonViewName?: string;
        isRemovable: boolean;
        name: string;
        version: string;
    }
    // interface fullName: dedicatedCloud.Federation.Federation
    export interface Federation {
        state: dedicatedCloudoptionStateEnum;
    }
    // interface fullName: dedicatedCloud.FederationAccessNetwork.FederationAccessNetwork
    export interface FederationAccessNetwork {
        activeDirectoryId: number;
        baseDnForGroups: string;
        baseDnForUsers: string;
        description: string;
        domainAlias: string;
        domainName: string;
        ip: string;
        ldapTcpPort: number;
        sslThumbprint?: string;
        state: dedicatedCloudoptionAccessNetworkStateEnum;
        username: string;
    }
    // interface fullName: dedicatedCloud.Filer.Filer
    export interface Filer {
        billingType: dedicatedCloudressourcesBillingTypeEnum;
        filerId: number;
        fullProfile: string;
        name: string;
        profile: string;
        size: complexType.UnitAndValue<number>;
        spaceFree?: number;
        spaceProvisionned?: number;
        spaceUsed?: number;
        state: dedicatedCloudfilerStateEnum;
        vmTotal?: number;
    }
    // type fullname: dedicatedCloud.GenerationEnum
    export type GenerationEnum = "1.0" | "2.0"
    // interface fullName: dedicatedCloud.Hcx.Hcx
    export interface Hcx {
        build?: string;
        state: dedicatedCloudoptionStateEnum;
        version?: string;
    }
    // interface fullName: dedicatedCloud.Hds.Hds
    export interface Hds {
        state: dedicatedCloudoptionStateEnum;
    }
    // interface fullName: dedicatedCloud.Hipaa.Hipaa
    export interface Hipaa {
        state: dedicatedCloudoptionStateEnum;
    }
    // interface fullName: dedicatedCloud.Host.Host
    export interface Host {
        billingType: dedicatedCloudressourcesBillingTypeEnum;
        clusterName?: string;
        connectionState?: dedicatedCloudhostSystemConnectionState;
        cpu: complexType.UnitAndValue<number>;
        cpuMax?: number;
        cpuMaxCore?: number;
        cpuNum?: number;
        cpuUsed?: number;
        hostId: number;
        inMaintenance?: boolean;
        memoryUsed?: number;
        name: string;
        parentHostId?: number;
        profile: string;
        profileCode: string;
        rack: string;
        ram: complexType.UnitAndValue<number>;
        state: dedicatedCloudhostStateEnum;
        uptime?: number;
        vmTotal?: number;
        vmVcpuTotal?: number;
    }
    // interface fullName: dedicatedCloud.HostProfile.HostProfile
    export interface HostProfile {
        id: number;
        name: string;
    }
    // interface fullName: dedicatedCloud.HostStockHypervisor.HostStockHypervisor
    export interface HostStockHypervisor {
        value: number;
        version: string;
    }
    // interface fullName: dedicatedCloud.HostStockProcGen.HostStockProcGen
    export interface HostStockProcGen {
        cpuGeneration: string;
        value: dedicatedCloudHostStockHypervisor[];
    }
    // interface fullName: dedicatedCloud.HostStockProfile.HostStockProfile
    export interface HostStockProfile {
        id: number;
        name: string;
        ref: string;
        value: dedicatedCloudHostStockProcGen[];
    }
    // type fullname: dedicatedCloud.HypervisorVersionEnum
    export type HypervisorVersionEnum = "4.1" | "5.0" | "5.1" | "5.5" | "6.0" | "6.5" | "hv3.1" | "hvdc3.1" | "nc1.0"
    // interface fullName: dedicatedCloud.Ip.Ip
    export interface Ip {
        country: string;
        description: string;
        gateway: string;
        netmask: string;
        network: string;
        networkName: string;
        register: dedicatedCloudBlockRegisterEnum;
        vlanNumber: number;
    }
    // type fullname: dedicatedCloud.IpCountriesEnum
    export type IpCountriesEnum = "be" | "ca" | "ch" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "us"
    // interface fullName: dedicatedCloud.IpDetails.IpDetails
    export interface IpDetails {
        ip: string;
        reverse?: string;
        usage: dedicatedCloudipUsageEnum;
        usageDetails?: string;
    }
    // type fullname: dedicatedCloud.ManagementInterfaceEnum
    export type ManagementInterfaceEnum = "azure" | "openstack" | "systemcenter" | "vcloud" | "vcsa" | "vsphere"
    // interface fullName: dedicatedCloud.Nsx.Nsx
    export interface Nsx {
        state: dedicatedCloudoptionStateEnum;
        url?: string;
    }
    // interface fullName: dedicatedCloud.ObjectRight.ObjectRight
    export interface ObjectRight {
        name: string;
        objectRightId: number;
        propagate: boolean;
        right: dedicatedCloudrightRightEnum;
        type: dedicatedCloudrightUserObjectRightTypeEnum;
        vmwareObjectId: string;
    }
    // interface fullName: dedicatedCloud.Os.Os
    export interface Os {
        fullName: string;
        lastModificationDate: string;
        shortName: string;
    }
    // interface fullName: dedicatedCloud.PccStockProfile.PccStockProfile
    export interface PccStockProfile {
        count: number;
        mode: string;
        realVersion: string;
    }
    // interface fullName: dedicatedCloud.PccZone.PccZone
    export interface PccZone {
        id: number;
        pccZone: string;
    }
    // interface fullName: dedicatedCloud.PciDss.PciDss
    export interface PciDss {
        state: dedicatedCloudoptionStateEnum;
    }
    // interface fullName: dedicatedCloud.PrivateGateway.PrivateGateway
    export interface PrivateGateway {
        customerIp?: string;
        customerNetmask?: string;
        customerPortGroup?: string;
        state: dedicatedCloudoptionStateEnum;
    }
    // interface fullName: dedicatedCloud.RestorePoint.RestorePoint
    export interface RestorePoint {
        creationTime?: string;
        isCorrupted: boolean;
        restorePointId: number;
        restorePointSize: complexType.UnitAndValue<number>;
        type?: dedicatedCloudbackupBackupTypeEnum;
    }
    // interface fullName: dedicatedCloud.Right.Right
    export interface Right {
        canAddRessource: boolean;
        datacenterId: number;
        networkRole: dedicatedCloudrightNetworkRoleEnum;
        right: dedicatedCloudrightRightEnum;
        rightId: number;
        vmNetworkRole: dedicatedCloudrightVmNetworkRoleEnum;
    }
    // interface fullName: dedicatedCloud.Robot.Robot
    export interface Robot {
        criticity: string;
        description?: string;
        enabled: boolean;
        name: string;
        type: string;
    }
    // interface fullName: dedicatedCloud.ServicePack.ServicePack
    export interface ServicePack {
        name: string;
        options: string[];
    }
    // type fullname: dedicatedCloud.StateEnum
    export type StateEnum = "available" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "provisionning" | "recycling" | "reserved" | "toDisable" | "toProvision" | "toRecycle" | "toRemove" | "toUnprovision" | "unprovisionning"
    // interface fullName: dedicatedCloud.Task.Task
    export interface Task {
        createdBy?: string;
        createdFrom?: string;
        datacenterId?: number;
        description?: string;
        endDate?: string;
        executionDate: string;
        filerId?: number;
        hostId?: number;
        lastModificationDate?: string;
        maintenanceDateFrom?: string;
        maintenanceDateTo?: string;
        name: string;
        network?: string;
        networkAccessId?: number;
        orderId?: number;
        parentTaskId?: number;
        progress: number;
        state: dedicatedCloudTaskStateEnum;
        taskId: number;
        type: string;
        userId?: number;
        vlanId?: number;
    }
    // type fullname: dedicatedCloud.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    // type fullname: dedicatedCloud.TwoFAWhitelistStateEnum
    export type TwoFAWhitelistStateEnum = "enabled" | "enabling" | "error" | "migrating" | "removed" | "removing"
    // interface fullName: dedicatedCloud.User.User
    export interface User {
        activationState?: dedicatedClouduserActivationStateEnum;
        canManageIpFailOvers: boolean;
        canManageNetwork: boolean;
        canManageRights: boolean;
        email?: string;
        firstName?: string;
        fullAdminRo: boolean;
        isEnableManageable: boolean;
        isTokenValidator: boolean;
        lastName?: string;
        login: string;
        name: string;
        nsxRight: boolean;
        phoneNumber?: string;
        receiveAlerts: boolean;
        state: dedicatedClouduserStateEnum;
        userId: number;
    }
    // type fullname: dedicatedCloud.UserAccessPolicyEnum
    export type UserAccessPolicyEnum = "filtered" | "open"
    // type fullname: dedicatedCloud.UserLogoutPolicyEnum
    export type UserLogoutPolicyEnum = "first" | "last"
    // interface fullName: dedicatedCloud.VMEncryption.VMEncryption
    export interface VMEncryption {
        state: dedicatedCloudoptionStateEnum;
    }
    // interface fullName: dedicatedCloud.VMEncryptionAccessNetwork.VMEncryptionAccessNetwork
    export interface VMEncryptionAccessNetwork {
        description: string;
        ip: string;
        kmsId: number;
        kmsTcpPort: number;
        sslThumbprint: string;
        state: dedicatedCloudoptionAccessNetworkStateEnum;
    }
    // interface fullName: dedicatedCloud.Vendor.Vendor
    export interface Vendor {
        vendorName: string;
    }
    // type fullname: dedicatedCloud.VendorObjectTypeEnum
    export type VendorObjectTypeEnum = "cluster" | "datacenter" | "filer" | "host" | "vm"
    // interface fullName: dedicatedCloud.Version.Version
    export interface Version {
        build: string;
        major: string;
        minor: string;
    }
    // interface fullName: dedicatedCloud.Vlan.Vlan
    export interface Vlan {
        name: string;
        routingRateLimit: string;
        state: dedicatedCloudvlanStateEnum;
        type: dedicatedCloudvlanTypeEnum;
        vlanId: number;
        vlanNumber: number;
    }
    // interface fullName: dedicatedCloud.Vm.Vm
    export interface Vm {
        backup?: dedicatedCloudbackupBackup;
        cdroms?: dedicatedCloudvirtualMachineCdrom[];
        clusterName?: string;
        cpuMax?: number;
        cpuNum?: number;
        cpuReady?: number;
        cpuReadyPercent?: number;
        cpuUsed?: number;
        filers?: dedicatedCloudvmFiler[];
        folderName?: string;
        hostName?: string;
        memoryMax?: number;
        memoryTps?: string;
        memoryUsed?: number;
        moRef: string;
        name?: string;
        netPacketRx?: number;
        netPacketTx?: number;
        netRx?: number;
        netTx?: number;
        networks?: dedicatedCloudvmNetwork[];
        powerState: dedicatedCloudvirtualMachinePowerState;
        readLatency?: number;
        readPerSecond?: number;
        readRate?: number;
        roleFt?: string;
        snapshotNum?: number;
        stateFt?: dedicatedCloudvirtualMachineFaultToleranceState;
        vmId: number;
        vmwareTools?: string;
        vmwareToolsVersion?: string;
        writeLatency?: number;
        writePerSecond?: number;
        writeRate?: number;
    }
    // interface fullName: dedicatedCloud.Vrops.Vrops
    export interface Vrops {
        state: dedicatedCloudoptionStateEnum;
        url?: string;
    }
    // interface fullName: dedicatedCloud.ZpoolStockProfile.ZpoolStockProfile
    export interface ZpoolStockProfile {
        minimumAvailability: string;
        profile: string;
        realCount: number;
    }
    export namespace backup {
        // interface fullName: dedicatedCloud.backup.Backup.Backup
        export interface Backup {
            allocatedDisk?: number;
            backupDays?: dedicatedCloudbackupBackupDaysEnum[];
            encryption?: boolean;
            lastCreationTime?: string;
            lastDuration?: complexType.UnitAndValue<number>;
            lastResult?: dedicatedCloudbackupJobStateEnum;
            lastSuccessfulCreationTime?: string;
            lastSuccessfulDuration?: complexType.UnitAndValue<number>;
            offerType?: dedicatedCloudbackupOfferTypeEnum;
            restorePoints?: dedicatedCloudbackupRestorePoint[];
            retentionTime?: number;
            state?: dedicatedCloudbackupStateEnum;
        }
        // interface fullName: dedicatedCloud.backup.BackupCapabilities.BackupCapabilities
        export interface BackupCapabilities {
            backupDays: boolean;
            customReport: boolean;
            dedicatedProxy: boolean;
            encryption: boolean;
            mailAddress: boolean;
            minimumFullBackups: number;
            offerName: string;
            proxyPerHost: boolean;
            replication: boolean;
            retention: number;
            scheduleHour: boolean;
        }
        // type fullname: dedicatedCloud.backup.BackupDaysEnum
        export type BackupDaysEnum = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"
        // type fullname: dedicatedCloud.backup.BackupTypeEnum
        export type BackupTypeEnum = "full" | "incremental"
        // type fullname: dedicatedCloud.backup.JobStateEnum
        export type JobStateEnum = "failed" | "running" | "stopped" | "stopping" | "success" | "unknown" | "warning"
        // type fullname: dedicatedCloud.backup.OfferTypeEnum
        export type OfferTypeEnum = "advanced" | "backup" | "classic" | "legacy" | "premium"
        // interface fullName: dedicatedCloud.backup.RestorePoint.RestorePoint
        export interface RestorePoint {
            creationTime?: string;
            isCorrupted?: boolean;
            restorePointId: number;
            size?: complexType.UnitAndValue<number>;
            type?: dedicatedCloudbackupBackupTypeEnum;
        }
        // type fullname: dedicatedCloud.backup.StateEnum
        export type StateEnum = "deleting" | "delivered" | "disabled" | "disabling" | "enabling" | "error" | "migrating" | "pending" | "removed" | "stopping" | "toCreate" | "toDelete" | "toDisable" | "toEnable" | "toStop" | "unknown"
    }
    export namespace capabilities {
        // type fullname: dedicatedCloud.capabilities.FeatureStatusEnum
        export type FeatureStatusEnum = "active" | "comingSoon" | "no"
    }
    export namespace cluster {
        // interface fullName: dedicatedCloud.cluster.AutoScale.AutoScale
        export interface AutoScale {
            autoScaleInHost: dedicatedCloudclusterAutoScaleModeEnum;
            autoScaleOutHost: dedicatedCloudclusterAutoScaleModeEnum;
            autoScaleOutStorage: dedicatedCloudclusterAutoScaleModeEnum;
            configId: number;
            id: number;
            inMaintenanceMode: boolean;
            state: dedicatedCloudoptionStateEnum;
        }
        // type fullname: dedicatedCloud.cluster.AutoScaleModeEnum
        export type AutoScaleModeEnum = "automatic" | "manual"
        // type fullname: dedicatedCloud.cluster.ClusterConfigsStatusEnum
        export type ClusterConfigsStatusEnum = "disabled" | "enabled" | "unknown"
        // type fullname: dedicatedCloud.cluster.ClusterDrsModeEnum
        export type ClusterDrsModeEnum = "fullyAutomated" | "manual" | "partiallyAutomated"
    }
    // interface fullName: dedicatedCloud.dedicatedCloud.dedicatedCloud
    export interface dedicatedCloud {
        advancedSecurity: boolean;
        bandwidth: string;
        billingType: dedicatedCloudBillingTypeEnum;
        certifiedInterfaceUrl: string;
        commercialRange: string;
        description: string;
        generation: dedicatedCloudGenerationEnum;
        location: string;
        managementInterface: dedicatedCloudManagementInterfaceEnum;
        serviceName: string;
        servicePackName?: string;
        spla: boolean;
        sslV3?: boolean;
        state: dedicatedCloudStateEnum;
        userAccessPolicy: dedicatedCloudUserAccessPolicyEnum;
        userLimitConcurrentSession: number;
        userLogoutPolicy: dedicatedCloudUserLogoutPolicyEnum;
        userSessionTimeout: number;
        vScopeUrl: string;
        version: dedicatedCloudVersion;
        webInterfaceUrl: string;
    }
    export namespace disasterRecovery {
        // type fullname: dedicatedCloud.disasterRecovery.DrpTypeEnum
        export type DrpTypeEnum = "onPremise" | "ovh"
        // interface fullName: dedicatedCloud.disasterRecovery.LocalSiteDetails.LocalSiteDetails
        export interface LocalSiteDetails {
            role: dedicatedClouddisasterRecoverySiteRoleEnum;
            state?: dedicatedCloudStateEnum;
            type: dedicatedClouddisasterRecoverySiteTypeEnum;
            zertoVersion: string;
            zvmIp?: string;
        }
        // interface fullName: dedicatedCloud.disasterRecovery.Profile.Profile
        export interface Profile {
            drpType?: dedicatedClouddisasterRecoveryDrpTypeEnum;
            localSiteInformation?: dedicatedClouddisasterRecoveryLocalSiteDetails;
            remoteSiteInformation?: dedicatedClouddisasterRecoveryRemoteSiteDetails;
            state: dedicatedCloudStateEnum;
            systemVersion: string;
        }
        // interface fullName: dedicatedCloud.disasterRecovery.RemoteSiteDetails.RemoteSiteDetails
        export interface RemoteSiteDetails {
            datacenterId?: number;
            datacenterName?: string;
            lastVpnConfig?: string;
            remoteEndpointInternalIp?: string;
            remoteEndpointPublicIp?: string;
            remoteZvmInternalIp?: string;
            role?: dedicatedClouddisasterRecoverySiteRoleEnum;
            serviceName?: string;
            state?: dedicatedCloudStateEnum;
            type: dedicatedClouddisasterRecoverySiteTypeEnum;
            vpnConfigState?: dedicatedClouddisasterRecoveryVpnConfigStateEnum;
            zertoVersion?: string;
        }
        // type fullname: dedicatedCloud.disasterRecovery.SiteRoleEnum
        export type SiteRoleEnum = "primary" | "secondary" | "single"
        // type fullname: dedicatedCloud.disasterRecovery.SiteTypeEnum
        export type SiteTypeEnum = "onPremise" | "ovhPrivateCloud"
        // type fullname: dedicatedCloud.disasterRecovery.VpnConfigStateEnum
        export type VpnConfigStateEnum = "configured" | "configuring" | "error" | "notConfigured" | "tunnelError"
    }
    export namespace filer {
        // interface fullName: dedicatedCloud.filer.HourlyConsumption.HourlyConsumption
        export interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        // interface fullName: dedicatedCloud.filer.Profile.Profile
        export interface Profile {
            fullName: string;
            name: string;
            size: complexType.UnitAndValue<number>;
        }
        // type fullname: dedicatedCloud.filer.StateEnum
        export type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown"
    }
    export namespace host {
        // interface fullName: dedicatedCloud.host.HourlyConsumption.HourlyConsumption
        export interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        // interface fullName: dedicatedCloud.host.Profile.Profile
        export interface Profile {
            core: string;
            cpu: complexType.UnitAndValue<number>;
            name: string;
            ram: complexType.UnitAndValue<number>;
        }
        // type fullname: dedicatedCloud.host.StateEnum
        export type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown"
    }
    // type fullname: dedicatedCloud.hostSystemConnectionState
    export type hostSystemConnectionState = "connected" | "disconnected" | "notResponding"
    // type fullname: dedicatedCloud.ipUsageEnum
    export type ipUsageEnum = "reserved" | "vm"
    // interface fullName: dedicatedCloud.metricsToken.metricsToken
    export interface metricsToken {
        opentsdbEndpoint: string;
        token: string;
        warpEndpoint: string;
    }
    export namespace option {
        // type fullname: dedicatedCloud.option.StateEnum
        export type StateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "migrating" | "unknown"
    }
    export namespace optionAccessNetwork {
        // type fullname: dedicatedCloud.optionAccessNetwork.StateEnum
        export type StateEnum = "creating" | "deleting" | "delivered" | "error" | "toCreate" | "toDelete" | "toUpdate" | "unknown" | "updating"
    }
    // interface fullName: dedicatedCloud.optionCompatibility.optionCompatibility
    export interface optionCompatibility {
        newCommercialVersion: string;
        oldCommercialVersion: string;
    }
    // interface fullName: dedicatedCloud.passwordPolicy.passwordPolicy
    export interface passwordPolicy {
        deniedChars: string[];
        digitMandatory: boolean;
        historyCheck: number;
        letterMandatory: boolean;
        lowercaseLetterMandatory: boolean;
        maxLength: number;
        minLength: number;
        specialMandatory: boolean;
        uppercaseLetterMandatory: boolean;
        validityPeriod: number;
    }
    // type fullname: dedicatedCloud.releaseEnum
    export type releaseEnum = "major" | "minor"
    // interface fullName: dedicatedCloud.resourceNewPrices.resourceNewPrices
    export interface resourceNewPrices {
        resources?: dedicatedCloudresourceNewPricesEntry[];
    }
    // interface fullName: dedicatedCloud.resourceNewPricesEntry.resourceNewPricesEntry
    export interface resourceNewPricesEntry {
        billingType: dedicatedCloudressourcesBillingTypeEnum;
        changed: boolean;
        name: string;
        newPrice: order.Price;
        oldPrice: order.Price;
        resourceType: dedicatedCloudressourcesResourceTypeEnum;
    }
    export namespace ressources {
        // type fullname: dedicatedCloud.ressources.BillingTypeEnum
        export type BillingTypeEnum = "freeSpare" | "hourly" | "monthly" | "undefined"
        // type fullname: dedicatedCloud.ressources.ResourceTypeEnum
        export type ResourceTypeEnum = "host" | "storage"
    }
    export namespace right {
        // type fullname: dedicatedCloud.right.NetworkRoleEnum
        export type NetworkRoleEnum = "admin" | "manager" | "noAccess" | "readonly"
        // type fullname: dedicatedCloud.right.RightEnum
        export type RightEnum = "admin" | "disabled" | "readonly" | "readwrite"
        // type fullname: dedicatedCloud.right.UserObjectRightTypeEnum
        export type UserObjectRightTypeEnum = "cluster" | "datastore" | "dvportgroup" | "folder" | "pool" | "vm"
        // type fullname: dedicatedCloud.right.VmNetworkRoleEnum
        export type VmNetworkRoleEnum = "admin" | "noAccess" | "readonly"
    }
    // type fullname: dedicatedCloud.servicePackEnum
    export type servicePackEnum = "default" | "hds" | "hipaa" | "legacy" | "nsx" | "nsx-and-vrops" | "pcidss" | "vrops"
    // type fullname: dedicatedCloud.servicePackStateEnum
    export type servicePackStateEnum = "activating" | "active" | "error" | "waitingForCustomer"
    // interface fullName: dedicatedCloud.servicePackStatus.servicePackStatus
    export interface servicePackStatus {
        name: dedicatedCloudservicePackEnum;
        state: dedicatedCloudservicePackStateEnum;
    }
    // interface fullName: dedicatedCloud.twoFAWhitelist.twoFAWhitelist
    export interface twoFAWhitelist {
        description: string;
        id: number;
        ip: string;
        state: dedicatedCloudTwoFAWhitelistStateEnum;
    }
    export namespace user {
        // type fullname: dedicatedCloud.user.ActivationStateEnum
        export type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable"
        // type fullname: dedicatedCloud.user.StateEnum
        export type StateEnum = "creating" | "deleting" | "delivered" | "error"
    }
    // interface fullName: dedicatedCloud.vcenter.vcenter
    export interface vcenter {
        currentVersion: dedicatedCloudVersion;
        lastMajor: dedicatedCloudVersion;
        lastMinor: dedicatedCloudVersion;
    }
    export namespace vendor {
        // interface fullName: dedicatedCloud.vendor.OvhId.OvhId
        export interface OvhId {
            datacenterId?: number;
            filerId?: number;
            hostId?: number;
            vmId?: number;
        }
    }
    // type fullname: dedicatedCloud.virtualDeviceConnectInfoStatus
    export type virtualDeviceConnectInfoStatus = "ok" | "recoverableError" | "unrecoverableError" | "untried"
    // interface fullName: dedicatedCloud.virtualMachineCdrom.virtualMachineCdrom
    export interface virtualMachineCdrom {
        connected?: boolean;
        iso?: string;
    }
    // type fullname: dedicatedCloud.virtualMachineFaultToleranceState
    export type virtualMachineFaultToleranceState = "disabled" | "enabled" | "needSecondary" | "notConfigured" | "running" | "starting"
    // type fullname: dedicatedCloud.virtualMachinePowerState
    export type virtualMachinePowerState = "deleted" | "poweredOff" | "poweredOn" | "suspended"
    export namespace vlan {
        // type fullname: dedicatedCloud.vlan.StateEnum
        export type StateEnum = "available" | "delivered" | "disabled" | "error" | "removing" | "reserved"
        // type fullname: dedicatedCloud.vlan.TypeEnum
        export type TypeEnum = "admin" | "free" | "paid"
    }
    // interface fullName: dedicatedCloud.vmFiler.vmFiler
    export interface vmFiler {
        committed: number;
        disks: dedicatedCloudvmFilerDisk[];
        name: string;
    }
    // interface fullName: dedicatedCloud.vmFilerDisk.vmFilerDisk
    export interface vmFilerDisk {
        capacity: number;
        id: string;
    }
    // interface fullName: dedicatedCloud.vmNetwork.vmNetwork
    export interface vmNetwork {
        allowGuestControl: boolean;
        backing: dedicatedCloudvmNetworkBacking;
        connected: boolean;
        controler: string;
        label: string;
        macAddress: string;
        startConnected: boolean;
        status: dedicatedCloudvirtualDeviceConnectInfoStatus;
    }
    // interface fullName: dedicatedCloud.vmNetworkBacking.vmNetworkBacking
    export interface vmNetworkBacking {
        deviceName?: string;
        portGroupKey?: string;
        portKey?: string;
        switchUuid?: string;
        type: dedicatedCloudvmNetworkBackingTypeEnum;
        useAutoDetect?: boolean;
        valueMoref?: string;
    }
    // type fullname: dedicatedCloud.vmNetworkBackingTypeEnum
    export type vmNetworkBackingTypeEnum = "DVS" | "VSS"
}
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
export namespace service {
    // interface fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    // type fullname: service.RenewalTypeEnum
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    // type fullname: service.StateEnum
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export namespace services {
    // interface fullName: services.Service.Service
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
export namespace vrack {
    // interface fullName: vrack.Task.Task
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
    // type fullname: vrack.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo"
    // interface fullName: vrack.dedicatedCloud.dedicatedCloud
    export interface dedicatedCloud {
        dedicatedCloud: string;
        vlanId?: number;
        vrack: string;
    }
}

/**
 * END API /dedicatedCloud Models
 */
export function proxyDedicatedCloud(ovhEngine: OvhRequestable): DedicatedCloud {
    return buildOvhProxy(ovhEngine, '/dedicatedCloud');
}
export default proxyDedicatedCloud;
/**
 * Api Proxy model
 */// Apis harmony
// path /dedicatedCloud
export interface DedicatedCloud {
    // GET /dedicatedCloud
    $get(): Promise<string[]>;
    commercialRange: {
        // GET /dedicatedCloud/commercialRange
        $get(): Promise<string[]>;
        $(commercialRangeName: string): {
            // GET /dedicatedCloud/commercialRange/{commercialRangeName}
            $get(): Promise<dedicatedCloud.CommercialRange>;
        };
    }
    location: {
        // GET /dedicatedCloud/location
        $get(): Promise<string[]>;
        $(pccZone: string): {
            // GET /dedicatedCloud/location/{pccZone}
            $get(): Promise<dedicatedCloud.PccZone>;
            hostProfile: {
                // GET /dedicatedCloud/location/{pccZone}/hostProfile
                $get(): Promise<number[]>;
                $(id: number): {
                    // GET /dedicatedCloud/location/{pccZone}/hostProfile/{id}
                    $get(): Promise<dedicatedCloud.HostProfile>;
                };
            }
            hypervisor: {
                // GET /dedicatedCloud/location/{pccZone}/hypervisor
                $get(): Promise<string[]>;
                $(shortName: string): {
                    // GET /dedicatedCloud/location/{pccZone}/hypervisor/{shortName}
                    $get(): Promise<dedicatedCloud.Os>;
                };
            }
            stock: {
                host: {
                    // GET /dedicatedCloud/location/{pccZone}/stock/host
                    $get(params?: {minYear?: number}): Promise<dedicatedCloud.HostStockProfile[]>;
                }
                pcc: {
                    // GET /dedicatedCloud/location/{pccZone}/stock/pcc
                    $get(): Promise<dedicatedCloud.PccStockProfile[]>;
                }
                zpool: {
                    // GET /dedicatedCloud/location/{pccZone}/stock/zpool
                    $get(params?: {profileFilter?: string}): Promise<dedicatedCloud.ZpoolStockProfile[]>;
                }
            }
        };
    }
    $(serviceName: string): {
        // GET /dedicatedCloud/{serviceName}
        $get(): Promise<dedicatedCloud.dedicatedCloud>;
        // PUT /dedicatedCloud/{serviceName}
        $put(params?: {advancedSecurity?: boolean, bandwidth?: string, billingType?: dedicatedCloudBillingTypeEnum, certifiedInterfaceUrl?: string, commercialRange?: string, description?: string, generation?: dedicatedCloudGenerationEnum, location?: string, managementInterface?: dedicatedCloudManagementInterfaceEnum, serviceName?: string, servicePackName?: string, spla?: boolean, sslV3?: boolean, state?: dedicatedCloudStateEnum, userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number, vScopeUrl?: string, version?: dedicatedCloudVersion, webInterfaceUrl?: string}): Promise<dedicatedCloud.Task>;
        allowedNetwork: {
            // GET /dedicatedCloud/{serviceName}/allowedNetwork
            $get(): Promise<number[]>;
            // POST /dedicatedCloud/{serviceName}/allowedNetwork
            $post(params: {description?: string, network: string}): Promise<dedicatedCloud.Task>;
            $(networkAccessId: number): {
                // DELETE /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                $delete(): Promise<dedicatedCloud.Task>;
                // GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                $get(): Promise<dedicatedCloud.AllowedNetwork>;
                // PUT /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                $put(params?: {description?: string, network?: string, networkAccessId?: number, state?: dedicatedCloudAllowedNetworkStateEnum}): Promise<dedicatedCloud.Task>;
                task: {
                    // GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task
                    $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            // POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate
                            $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            // POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState
                            $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        capabilities: {
            // GET /dedicatedCloud/{serviceName}/capabilities
            $get(): Promise<dedicatedCloud.Capabilities>;
        }
        changeProperties: {
            // POST /dedicatedCloud/{serviceName}/changeProperties
            $post(params?: {description?: string, sslV3?: boolean, userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number}): Promise<dedicatedCloud.Task>;
        }
        commercialRange: {
            compliance: {
                // GET /dedicatedCloud/{serviceName}/commercialRange/compliance
                $get(): Promise<string[]>;
            }
            orderable: {
                // GET /dedicatedCloud/{serviceName}/commercialRange/orderable
                $get(): Promise<string[]>;
            }
        }
        confirmTermination: {
            // POST /dedicatedCloud/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        datacenter: {
            // GET /dedicatedCloud/{serviceName}/datacenter
            $get(): Promise<number[]>;
            // POST /dedicatedCloud/{serviceName}/datacenter
            $post(params: {commercialRangeName: string, vrackName?: string}): Promise<dedicatedCloud.Task>;
            $(datacenterId: number): {
                // DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                $delete(): Promise<dedicatedCloud.Task>;
                // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                $get(): Promise<dedicatedCloud.Datacenter>;
                // PUT /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                $put(params?: {commercialName?: dedicatedCloudCommercialNameEnum, commercialRangeName?: string, datacenterId?: number, description?: string, horizonViewName?: string, isRemovable?: boolean, name?: string, version?: string}): Promise<dedicatedCloud.Task>;
                backup: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup
                    $get(): Promise<dedicatedCloud.Backup>;
                    changeProperties: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties
                        $post(params: {backupDurationInReport: boolean, backupOffer: dedicatedCloudbackupOfferTypeEnum, backupSizeInReport: boolean, diskSizeInReport: boolean, fullDayInReport: boolean, mailAddress?: string, restorePointInReport: boolean, scheduleHour?: string}): Promise<dedicatedCloud.Task>;
                    }
                    disable: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
                        $post(): Promise<dedicatedCloud.Task>;
                    }
                    enable: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable
                        $post(params?: {backupOffer?: dedicatedCloudbackupOfferTypeEnum}): Promise<dedicatedCloud.Task>;
                    }
                    offerCapabilities: {
                        // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/offerCapabilities
                        $get(): Promise<dedicatedCloud.backup.BackupCapabilities[]>;
                    }
                }
                checkBackupJobs: {
                    // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs
                    $post(): Promise<dedicatedCloud.Task>;
                }
                disasterRecovery: {
                    zerto: {
                        disable: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable
                            $post(params: {secondaryDatacenterId: number, secondaryServiceName: string}): Promise<dedicatedCloud.Task>;
                        }
                        enable: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable
                            $post(params: {primaryEndpointIp: string, secondaryDatacenterId: number, secondaryEndpointIp: string, secondaryServiceName: string}): Promise<dedicatedCloud.Task>;
                        }
                        generateZsspPassword: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        state: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state
                            $post(): Promise<dedicatedCloud.disasterRecovery.Profile>;
                        }
                    }
                    zertoSingle: {
                        configureVpn: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn
                            $post(params: {preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteVraNetwork?: string, remoteZvmInternalIp: string}): Promise<dedicatedCloud.Task>;
                        }
                        defaultLocalVraNetwork: {
                            // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork
                            $get(): Promise<string>;
                        }
                        disable: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        enable: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable
                            $post(params: {localVraNetwork: string, ovhEndpointIp: string, remoteVraNetwork: string}): Promise<dedicatedCloud.Task>;
                        }
                    }
                }
                filer: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
                    $get(): Promise<number[]>;
                    $(filerId: number): {
                        // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
                        $get(): Promise<dedicatedCloud.Filer>;
                        hourlyConsumption: {
                            // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption
                            $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                        }
                        remove: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        task: {
                            // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task
                            $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
                            $(taskId: number): {
                                // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}
                                $get(): Promise<dedicatedCloud.Task>;
                                changeMaintenanceExecutionDate: {
                                    // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate
                                    $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                                }
                                resetTaskState: {
                                    // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState
                                    $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                                }
                            };
                        }
                    };
                }
                host: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
                    $get(): Promise<number[]>;
                    $(hostId: number): {
                        // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
                        $get(): Promise<dedicatedCloud.Host>;
                        addHostSpare: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare
                            $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                        }
                        hourlyConsumption: {
                            // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption
                            $get(): Promise<dedicatedCloud.host.HourlyConsumption>;
                        }
                        remove: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        task: {
                            // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task
                            $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
                            $(taskId: number): {
                                // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}
                                $get(): Promise<dedicatedCloud.Task>;
                                changeMaintenanceExecutionDate: {
                                    // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate
                                    $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                                }
                                resetTaskState: {
                                    // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState
                                    $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                                }
                            };
                        }
                    };
                }
                orderNewFilerHourly: {
                    // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly
                    $post(params: {name: string}): Promise<dedicatedCloud.Task>;
                }
                orderNewHostHourly: {
                    // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly
                    $post(params: {name: string, vmwareClusterId?: string}): Promise<dedicatedCloud.Task>;
                }
                orderableFilerProfiles: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles
                    $get(): Promise<dedicatedCloud.filer.Profile[]>;
                }
                orderableHostProfiles: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles
                    $get(): Promise<dedicatedCloud.host.Profile[]>;
                }
                privateGateway: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway
                    $get(): Promise<dedicatedCloud.PrivateGateway>;
                    disable: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable
                        $post(): Promise<dedicatedCloud.Task>;
                    }
                    enable: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable
                        $post(params: {ip: string, netmask: string, portgroup: string}): Promise<dedicatedCloud.Task>;
                    }
                }
                task: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task
                    $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate
                            $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState
                            $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
                vm: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm
                    $get(): Promise<number[]>;
                    $(vmId: number): {
                        // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
                        $get(): Promise<dedicatedCloud.Vm>;
                        backupJob: {
                            // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob
                            $get(): Promise<dedicatedCloud.BackupJob>;
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob
                            $post(params: {backupDays: dedicatedCloudbackupBackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
                            disable: {
                                // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable
                                $post(): Promise<dedicatedCloud.Task>;
                            }
                            enable: {
                                // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable
                                $post(params: {backupDays: dedicatedCloudbackupBackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
                            }
                            restorePoints: {
                                // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints
                                $get(): Promise<number[]>;
                                $(restorePointId: number): {
                                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}
                                    $get(): Promise<dedicatedCloud.RestorePoint>;
                                    restore: {
                                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore
                                        $post(params: {filerId: number}): Promise<dedicatedCloud.Task>;
                                    }
                                };
                            }
                        }
                        disableBackup: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        editBackup: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup
                            $post(params: {backupDays: dedicatedCloudbackupBackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
                        }
                        enableBackup: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup
                            $post(params: {backupDays: dedicatedCloudbackupBackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
                        }
                        restoreBackup: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup
                            $post(params: {filerId: number, restorePointId: number}): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        federation: {
            // GET /dedicatedCloud/{serviceName}/federation
            $get(): Promise<dedicatedCloud.Federation>;
            activeDirectory: {
                // GET /dedicatedCloud/{serviceName}/federation/activeDirectory
                $get(): Promise<number[]>;
                // POST /dedicatedCloud/{serviceName}/federation/activeDirectory
                $post(params: {baseDnForGroups: string, baseDnForUsers: string, description?: string, domainAlias: string, domainName: string, ip: string, password: string, username: string}): Promise<dedicatedCloud.Task>;
                $(activeDirectoryId: number): {
                    // DELETE /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}
                    $delete(): Promise<dedicatedCloud.Task>;
                    // GET /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}
                    $get(): Promise<dedicatedCloud.FederationAccessNetwork>;
                    changeProperties: {
                        // POST /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties
                        $post(params: {description?: string, password: string, username: string}): Promise<dedicatedCloud.Task>;
                    }
                    grantActiveDirectoryUser: {
                        // POST /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser
                        $post(params: {username: string}): Promise<dedicatedCloud.Task>;
                    }
                };
            }
        }
        filer: {
            // GET /dedicatedCloud/{serviceName}/filer
            $get(): Promise<number[]>;
            $(filerId: number): {
                // GET /dedicatedCloud/{serviceName}/filer/{filerId}
                $get(): Promise<dedicatedCloud.Filer>;
                hourlyConsumption: {
                    // GET /dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption
                    $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                }
                remove: {
                    // POST /dedicatedCloud/{serviceName}/filer/{filerId}/remove
                    $post(): Promise<dedicatedCloud.Task>;
                }
                task: {
                    // GET /dedicatedCloud/{serviceName}/filer/{filerId}/task
                    $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            // POST /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate
                            $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            // POST /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState
                            $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        globalTasks: {
            // GET /dedicatedCloud/{serviceName}/globalTasks
            $get(params?: {datacenterId?: number, endDate_from?: string, endDate_to?: string, executionDate_from?: string, executionDate_to?: string, filerId?: number, hostId?: number, lastModificationDate_from?: string, lastModificationDate_to?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: dedicatedCloudTaskStateEnum[], userId?: number, vlanId?: number}): Promise<number[]>;
        }
        hcx: {
            // GET /dedicatedCloud/{serviceName}/hcx
            $get(): Promise<dedicatedCloud.Hcx>;
            canBeDisabled: {
                // GET /dedicatedCloud/{serviceName}/hcx/canBeDisabled
                $get(): Promise<boolean>;
            }
            canBeEnabled: {
                // GET /dedicatedCloud/{serviceName}/hcx/canBeEnabled
                $get(): Promise<boolean>;
            }
            disable: {
                // POST /dedicatedCloud/{serviceName}/hcx/disable
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                // POST /dedicatedCloud/{serviceName}/hcx/enable
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        hds: {
            // GET /dedicatedCloud/{serviceName}/hds
            $get(): Promise<dedicatedCloud.Hds>;
            canBeDisabled: {
                // GET /dedicatedCloud/{serviceName}/hds/canBeDisabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            canBeEnabled: {
                // GET /dedicatedCloud/{serviceName}/hds/canBeEnabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            disable: {
                // POST /dedicatedCloud/{serviceName}/hds/disable
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                // POST /dedicatedCloud/{serviceName}/hds/enable
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        hipaa: {
            // GET /dedicatedCloud/{serviceName}/hipaa
            $get(): Promise<dedicatedCloud.Hipaa>;
            canBeDisabled: {
                // GET /dedicatedCloud/{serviceName}/hipaa/canBeDisabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            canBeEnabled: {
                // GET /dedicatedCloud/{serviceName}/hipaa/canBeEnabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            disable: {
                // POST /dedicatedCloud/{serviceName}/hipaa/disable
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                // POST /dedicatedCloud/{serviceName}/hipaa/enable
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        ip: {
            // GET /dedicatedCloud/{serviceName}/ip
            $get(): Promise<string[]>;
            $(network: string): {
                // GET /dedicatedCloud/{serviceName}/ip/{network}
                $get(): Promise<dedicatedCloud.Ip>;
                details: {
                    // GET /dedicatedCloud/{serviceName}/ip/{network}/details
                    $get(): Promise<dedicatedCloud.IpDetails[]>;
                }
                task: {
                    // GET /dedicatedCloud/{serviceName}/ip/{network}/task
                    $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            // POST /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate
                            $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            // POST /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState
                            $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        newPrices: {
            // GET /dedicatedCloud/{serviceName}/newPrices
            $get(): Promise<dedicatedCloud.resourceNewPrices>;
        }
        nsx: {
            // GET /dedicatedCloud/{serviceName}/nsx
            $get(): Promise<dedicatedCloud.Nsx>;
            canBeDisabled: {
                // GET /dedicatedCloud/{serviceName}/nsx/canBeDisabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            canBeEnabled: {
                // GET /dedicatedCloud/{serviceName}/nsx/canBeEnabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            disable: {
                // POST /dedicatedCloud/{serviceName}/nsx/disable
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                // POST /dedicatedCloud/{serviceName}/nsx/enable
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        orderNewFilerHourly: {
            // POST /dedicatedCloud/{serviceName}/orderNewFilerHourly
            $post(params: {name: string}): Promise<dedicatedCloud.Task>;
        }
        orderableIpCountries: {
            // GET /dedicatedCloud/{serviceName}/orderableIpCountries
            $get(): Promise<dedicatedCloud.IpCountriesEnum[]>;
        }
        passwordPolicy: {
            // GET /dedicatedCloud/{serviceName}/passwordPolicy
            $get(): Promise<dedicatedCloud.passwordPolicy>;
        }
        pcidss: {
            // GET /dedicatedCloud/{serviceName}/pcidss
            $get(): Promise<dedicatedCloud.PciDss>;
            canBeDisabled: {
                // GET /dedicatedCloud/{serviceName}/pcidss/canBeDisabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            canBeEnabled: {
                // GET /dedicatedCloud/{serviceName}/pcidss/canBeEnabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            disable: {
                // POST /dedicatedCloud/{serviceName}/pcidss/disable
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                // POST /dedicatedCloud/{serviceName}/pcidss/enable
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        resetTriggeredAlarm: {
            // POST /dedicatedCloud/{serviceName}/resetTriggeredAlarm
            $post(): Promise<dedicatedCloud.Task>;
        }
        robot: {
            // GET /dedicatedCloud/{serviceName}/robot
            $get(): Promise<string[]>;
            $(name: string): {
                // GET /dedicatedCloud/{serviceName}/robot/{name}
                $get(): Promise<dedicatedCloud.Robot>;
            };
        }
        serviceInfos: {
            // GET /dedicatedCloud/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /dedicatedCloud/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        servicePack: {
            // GET /dedicatedCloud/{serviceName}/servicePack
            $get(): Promise<dedicatedCloud.servicePackStatus>;
        }
        servicePacks: {
            // GET /dedicatedCloud/{serviceName}/servicePacks
            $get(): Promise<string[]>;
            $(name: string): {
                // GET /dedicatedCloud/{serviceName}/servicePacks/{name}
                $get(): Promise<dedicatedCloud.ServicePack>;
            };
        }
        task: {
            // GET /dedicatedCloud/{serviceName}/task
            $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
            $(taskId: number): {
                // GET /dedicatedCloud/{serviceName}/task/{taskId}
                $get(): Promise<dedicatedCloud.Task>;
                changeMaintenanceExecutionDate: {
                    // POST /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
                    $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                }
                resetTaskState: {
                    // POST /dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState
                    $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                }
            };
        }
        terminate: {
            // POST /dedicatedCloud/{serviceName}/terminate
            $post(): Promise<string>;
        }
        twoFAWhitelist: {
            // GET /dedicatedCloud/{serviceName}/twoFAWhitelist
            $get(): Promise<number[]>;
            // POST /dedicatedCloud/{serviceName}/twoFAWhitelist
            $post(params: {description: string, ip: string}): Promise<dedicatedCloud.Task>;
            $(id: number): {
                // DELETE /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
                $delete(): Promise<dedicatedCloud.Task>;
                // GET /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
                $get(): Promise<dedicatedCloud.twoFAWhitelist>;
                changeProperties: {
                    // POST /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties
                    $post(params?: {description?: string}): Promise<dedicatedCloud.Task>;
                }
            };
        }
        upgradeHypervisor: {
            // POST /dedicatedCloud/{serviceName}/upgradeHypervisor
            $post(): Promise<dedicatedCloud.Task>;
        }
        upgradeVcenter: {
            // POST /dedicatedCloud/{serviceName}/upgradeVcenter
            $post(params?: {release?: dedicatedCloud.releaseEnum}): Promise<dedicatedCloud.Task>;
        }
        user: {
            // GET /dedicatedCloud/{serviceName}/user
            $get(params?: {name?: string}): Promise<number[]>;
            // POST /dedicatedCloud/{serviceName}/user
            $post(params: {canAddRessource?: boolean, canManageRights?: boolean, email?: string, expirationDate?: string, firstName?: string, lastName?: string, name: string, networkRole?: dedicatedCloudrightNetworkRoleEnum, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: dedicatedCloudrightRightEnum, tokenValidator?: boolean, vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum}): Promise<dedicatedCloud.Task>;
            $(userId: number): {
                // DELETE /dedicatedCloud/{serviceName}/user/{userId}
                $delete(): Promise<dedicatedCloud.Task>;
                // GET /dedicatedCloud/{serviceName}/user/{userId}
                $get(): Promise<dedicatedCloud.User>;
                changePassword: {
                    // POST /dedicatedCloud/{serviceName}/user/{userId}/changePassword
                    $post(params?: {password?: string}): Promise<dedicatedCloud.Task>;
                }
                changeProperties: {
                    // POST /dedicatedCloud/{serviceName}/user/{userId}/changeProperties
                    $post(params?: {canManageIpFailOvers?: boolean, canManageNetwork?: boolean, canManageRights?: boolean, email?: string, firstName?: string, fullAdminRo?: boolean, lastName?: string, nsxRight?: boolean, phoneNumber?: string, receiveAlerts?: boolean, tokenValidator?: boolean}): Promise<dedicatedCloud.Task>;
                }
                disable: {
                    // POST /dedicatedCloud/{serviceName}/user/{userId}/disable
                    $post(): Promise<dedicatedCloud.Task>;
                }
                enable: {
                    // POST /dedicatedCloud/{serviceName}/user/{userId}/enable
                    $post(): Promise<dedicatedCloud.Task>;
                }
                metricsToken: {
                    // POST /dedicatedCloud/{serviceName}/user/{userId}/metricsToken
                    $post(): Promise<dedicatedCloud.metricsToken>;
                }
                objectRight: {
                    // GET /dedicatedCloud/{serviceName}/user/{userId}/objectRight
                    $get(): Promise<number[]>;
                    // POST /dedicatedCloud/{serviceName}/user/{userId}/objectRight
                    $post(params: {propagate?: boolean, right: dedicatedCloudrightRightEnum, type: dedicatedCloudrightUserObjectRightTypeEnum, vmwareObjectId: string}): Promise<dedicatedCloud.Task>;
                    $(objectRightId: number): {
                        // DELETE /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}
                        $delete(): Promise<dedicatedCloud.Task>;
                        // GET /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}
                        $get(): Promise<dedicatedCloud.ObjectRight>;
                    };
                }
                right: {
                    // GET /dedicatedCloud/{serviceName}/user/{userId}/right
                    $get(): Promise<number[]>;
                    $(rightId: number): {
                        // GET /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
                        $get(): Promise<dedicatedCloud.Right>;
                        // PUT /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
                        $put(params?: {canAddRessource?: boolean, datacenterId?: number, networkRole?: dedicatedCloudrightNetworkRoleEnum, right?: dedicatedCloudrightRightEnum, rightId?: number, vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum}): Promise<dedicatedCloud.Task>;
                    };
                }
                task: {
                    // GET /dedicatedCloud/{serviceName}/user/{userId}/task
                    $get(params?: {name?: string, state?: dedicatedCloudTaskStateEnum}): Promise<number[]>;
                    $(taskId: number): {
                        // GET /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            // POST /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate
                            $post(params: {executionDate: string}): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            // POST /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState
                            $post(params: {reason: string}): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        vcenterVersion: {
            // GET /dedicatedCloud/{serviceName}/vcenterVersion
            $get(): Promise<dedicatedCloud.vcenter>;
        }
        vendor: {
            // GET /dedicatedCloud/{serviceName}/vendor
            $get(): Promise<dedicatedCloud.Vendor>;
            objectType: {
                // POST /dedicatedCloud/{serviceName}/vendor/objectType
                $post(): Promise<string[]>;
            }
            ovhId: {
                // POST /dedicatedCloud/{serviceName}/vendor/ovhId
                $post(params: {objectType: dedicatedCloud.VendorObjectTypeEnum, vendorId: string}): Promise<dedicatedCloud.vendor.OvhId>;
            }
        }
        vlan: {
            // GET /dedicatedCloud/{serviceName}/vlan
            $get(): Promise<number[]>;
            $(vlanId: number): {
                // GET /dedicatedCloud/{serviceName}/vlan/{vlanId}
                $get(): Promise<dedicatedCloud.Vlan>;
            };
        }
        vmEncryption: {
            // GET /dedicatedCloud/{serviceName}/vmEncryption
            $get(): Promise<dedicatedCloud.VMEncryption>;
            kms: {
                // GET /dedicatedCloud/{serviceName}/vmEncryption/kms
                $get(): Promise<number[]>;
                // POST /dedicatedCloud/{serviceName}/vmEncryption/kms
                $post(params: {description?: string, ip: string, sslThumbprint: string}): Promise<dedicatedCloud.Task>;
                $(kmsId: number): {
                    // DELETE /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
                    $delete(): Promise<dedicatedCloud.Task>;
                    // GET /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
                    $get(): Promise<dedicatedCloud.VMEncryptionAccessNetwork>;
                    changeProperties: {
                        // POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties
                        $post(params: {description?: string, sslThumbprint: string}): Promise<dedicatedCloud.Task>;
                    }
                };
            }
        }
        vrack: {
            // GET /dedicatedCloud/{serviceName}/vrack
            $get(): Promise<string[]>;
            $(vrack: string): {
                // DELETE /dedicatedCloud/{serviceName}/vrack/{vrack}
                $delete(): Promise<vrack.Task>;
                // GET /dedicatedCloud/{serviceName}/vrack/{vrack}
                $get(): Promise<vrack.dedicatedCloud>;
            };
        }
        vrops: {
            // GET /dedicatedCloud/{serviceName}/vrops
            $get(): Promise<dedicatedCloud.Vrops>;
            canBeDisabled: {
                // GET /dedicatedCloud/{serviceName}/vrops/canBeDisabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            canBeEnabled: {
                // GET /dedicatedCloud/{serviceName}/vrops/canBeEnabled
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            }
            disable: {
                // POST /dedicatedCloud/{serviceName}/vrops/disable
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                // POST /dedicatedCloud/{serviceName}/vrops/enable
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type dedicatedCloudAllowedNetworkStateEnum = dedicatedCloud.AllowedNetworkStateEnum;
type dedicatedCloudoptionStateEnum = dedicatedCloud.option.StateEnum;
type dedicatedCloudbackupOfferTypeEnum = dedicatedCloud.backup.OfferTypeEnum;
type dedicatedCloudBackupStateEnum = dedicatedCloud.BackupStateEnum;
type dedicatedCloudbackupBackupDaysEnum = dedicatedCloud.backup.BackupDaysEnum;
type dedicatedCloudbackupStateEnum = dedicatedCloud.backup.StateEnum;
type dedicatedCloudcapabilitiesFeatureStatusEnum = dedicatedCloud.capabilities.FeatureStatusEnum;
type dedicatedCloudclusterAutoScale = dedicatedCloud.cluster.AutoScale;
type dedicatedCloudclusterClusterDrsModeEnum = dedicatedCloud.cluster.ClusterDrsModeEnum;
type dedicatedCloudclusterClusterConfigsStatusEnum = dedicatedCloud.cluster.ClusterConfigsStatusEnum;
type dedicatedCloudHypervisorVersionEnum = dedicatedCloud.HypervisorVersionEnum;
type dedicatedCloudrightNetworkRoleEnum = dedicatedCloud.right.NetworkRoleEnum;
type dedicatedCloudCommercialNameEnum = dedicatedCloud.CommercialNameEnum;
type dedicatedCloudoptionAccessNetworkStateEnum = dedicatedCloud.optionAccessNetwork.StateEnum;
type dedicatedCloudressourcesBillingTypeEnum = dedicatedCloud.ressources.BillingTypeEnum;
type dedicatedCloudfilerStateEnum = dedicatedCloud.filer.StateEnum;
type dedicatedCloudhostSystemConnectionState = dedicatedCloud.hostSystemConnectionState;
type dedicatedCloudhostStateEnum = dedicatedCloud.host.StateEnum;
type dedicatedCloudHostStockHypervisor = dedicatedCloud.HostStockHypervisor;
type dedicatedCloudHostStockProcGen = dedicatedCloud.HostStockProcGen;
type dedicatedCloudBlockRegisterEnum = dedicatedCloud.BlockRegisterEnum;
type dedicatedCloudipUsageEnum = dedicatedCloud.ipUsageEnum;
type dedicatedCloudrightRightEnum = dedicatedCloud.right.RightEnum;
type dedicatedCloudrightUserObjectRightTypeEnum = dedicatedCloud.right.UserObjectRightTypeEnum;
type dedicatedCloudbackupBackupTypeEnum = dedicatedCloud.backup.BackupTypeEnum;
type dedicatedCloudrightVmNetworkRoleEnum = dedicatedCloud.right.VmNetworkRoleEnum;
type dedicatedCloudTaskStateEnum = dedicatedCloud.TaskStateEnum;
type dedicatedClouduserActivationStateEnum = dedicatedCloud.user.ActivationStateEnum;
type dedicatedClouduserStateEnum = dedicatedCloud.user.StateEnum;
type dedicatedCloudvlanStateEnum = dedicatedCloud.vlan.StateEnum;
type dedicatedCloudvlanTypeEnum = dedicatedCloud.vlan.TypeEnum;
type dedicatedCloudbackupBackup = dedicatedCloud.backup.Backup;
type dedicatedCloudvirtualMachineCdrom = dedicatedCloud.virtualMachineCdrom;
type dedicatedCloudvmFiler = dedicatedCloud.vmFiler;
type dedicatedCloudvmNetwork = dedicatedCloud.vmNetwork;
type dedicatedCloudvirtualMachinePowerState = dedicatedCloud.virtualMachinePowerState;
type dedicatedCloudvirtualMachineFaultToleranceState = dedicatedCloud.virtualMachineFaultToleranceState;
type dedicatedCloudbackupJobStateEnum = dedicatedCloud.backup.JobStateEnum;
type dedicatedCloudbackupRestorePoint = dedicatedCloud.backup.RestorePoint;
type dedicatedCloudclusterAutoScaleModeEnum = dedicatedCloud.cluster.AutoScaleModeEnum;
type dedicatedCloudBillingTypeEnum = dedicatedCloud.BillingTypeEnum;
type dedicatedCloudGenerationEnum = dedicatedCloud.GenerationEnum;
type dedicatedCloudManagementInterfaceEnum = dedicatedCloud.ManagementInterfaceEnum;
type dedicatedCloudStateEnum = dedicatedCloud.StateEnum;
type dedicatedCloudUserAccessPolicyEnum = dedicatedCloud.UserAccessPolicyEnum;
type dedicatedCloudUserLogoutPolicyEnum = dedicatedCloud.UserLogoutPolicyEnum;
type dedicatedCloudVersion = dedicatedCloud.Version;
type dedicatedClouddisasterRecoverySiteRoleEnum = dedicatedCloud.disasterRecovery.SiteRoleEnum;
type dedicatedClouddisasterRecoverySiteTypeEnum = dedicatedCloud.disasterRecovery.SiteTypeEnum;
type dedicatedClouddisasterRecoveryDrpTypeEnum = dedicatedCloud.disasterRecovery.DrpTypeEnum;
type dedicatedClouddisasterRecoveryLocalSiteDetails = dedicatedCloud.disasterRecovery.LocalSiteDetails;
type dedicatedClouddisasterRecoveryRemoteSiteDetails = dedicatedCloud.disasterRecovery.RemoteSiteDetails;
type dedicatedClouddisasterRecoveryVpnConfigStateEnum = dedicatedCloud.disasterRecovery.VpnConfigStateEnum;
type dedicatedCloudresourceNewPricesEntry = dedicatedCloud.resourceNewPricesEntry;
type dedicatedCloudressourcesResourceTypeEnum = dedicatedCloud.ressources.ResourceTypeEnum;
type dedicatedCloudservicePackEnum = dedicatedCloud.servicePackEnum;
type dedicatedCloudservicePackStateEnum = dedicatedCloud.servicePackStateEnum;
type dedicatedCloudTwoFAWhitelistStateEnum = dedicatedCloud.TwoFAWhitelistStateEnum;
type dedicatedCloudvmFilerDisk = dedicatedCloud.vmFilerDisk;
type dedicatedCloudvmNetworkBacking = dedicatedCloud.vmNetworkBacking;
type dedicatedCloudvirtualDeviceConnectInfoStatus = dedicatedCloud.virtualDeviceConnectInfoStatus;
type dedicatedCloudvmNetworkBackingTypeEnum = dedicatedCloud.vmNetworkBackingTypeEnum;
