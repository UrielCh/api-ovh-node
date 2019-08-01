import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicatedCloud Models
 */
export namespace complexType {
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
export namespace dedicatedCloud {
    //dedicatedCloud.AllowedNetwork
    // fullName: dedicatedCloud.AllowedNetwork.AllowedNetwork
    export interface AllowedNetwork {
        description?: string;
        network: string;
        networkAccessId: number;
        state: dedicatedCloud.AllowedNetworkStateEnum;
    }
    //dedicatedCloud.AllowedNetworkStateEnum
    export type AllowedNetworkStateEnum = "allowed" | "toDelete" | "toUpdate"
    //dedicatedCloud.Backup
    // fullName: dedicatedCloud.Backup.Backup
    export interface Backup {
        backupDurationInReport?: boolean;
        backupOffer?: dedicatedCloud.backup.OfferTypeEnum;
        backupSizeInReport?: boolean;
        diskSizeInReport?: boolean;
        encryption?: boolean;
        fullDayInReport?: boolean;
        hostname?: string;
        mailAddress?: string;
        restorePointInReport?: boolean;
        scheduleHour?: string;
        state: dedicatedCloud.BackupStateEnum;
        vmwareVmId?: string;
    }
    //dedicatedCloud.BackupJob
    // fullName: dedicatedCloud.BackupJob.BackupJob
    export interface BackupJob {
        allocatedDisk?: number;
        backupDays?: dedicatedCloud.backup.BackupDaysEnum[];
        encryption?: boolean;
        offerType?: dedicatedCloud.backup.OfferTypeEnum;
        retentionTime?: number;
        state: dedicatedCloud.backup.StateEnum;
        vmName?: string;
    }
    //dedicatedCloud.BackupStateEnum
    export type BackupStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "removing"
    //dedicatedCloud.BillingTypeEnum
    export type BillingTypeEnum = "demo" | "monthly"
    //dedicatedCloud.BlockRegisterEnum
    export type BlockRegisterEnum = "arin" | "ripe"
    //dedicatedCloud.Capabilities
    // fullName: dedicatedCloud.Capabilities.Capabilities
    export interface Capabilities {
        addRessourceRightStatus: dedicatedCloud.capabilities.FeatureStatusEnum;
        backupStatus: dedicatedCloud.capabilities.FeatureStatusEnum;
        canAddUser: boolean;
        fullAdminRoUserStatus: dedicatedCloud.capabilities.FeatureStatusEnum;
        nexus1000vStatus: dedicatedCloud.capabilities.FeatureStatusEnum;
        upgradable: boolean;
        userAccessPolicyStatus: dedicatedCloud.capabilities.FeatureStatusEnum;
    }
    //dedicatedCloud.CommercialNameEnum
    export type CommercialNameEnum = "DC" | "DC-ANCIENT" | "DC-ANCIENT-HDS" | "DC-ANCIENT-HIPAA" | "DC-ANCIENT-NSX" | "DC-ANCIENT-NSX-VROPS" | "DC-ANCIENT-PCIDSS" | "DC-ANCIENT-UNKNOWN" | "DC-ANCIENT-VROPS" | "DC-HDS" | "DC-HIPAA" | "DC-LEGACY" | "DC-LEGACY-HDS" | "DC-LEGACY-HIPAA" | "DC-LEGACY-NSX" | "DC-LEGACY-NSX-VROPS" | "DC-LEGACY-PCIDSS" | "DC-LEGACY-UNKNOWN" | "DC-LEGACY-VROPS" | "DC-NSX" | "DC-NSX-VROPS" | "DC-PCIDSS" | "DC-UNKNOWN" | "DC-VROPS" | "SDDC" | "SDDC-HDS" | "SDDC-HIPAA" | "SDDC-LEGACY" | "SDDC-LEGACY-HDS" | "SDDC-LEGACY-HIPAA" | "SDDC-LEGACY-PCIDSS" | "SDDC-LEGACY-UNKNOWN" | "SDDC-LEGACY-VROPS" | "SDDC-LEGACY-VROPS-WITHOUT-NSX" | "SDDC-LEGACY-WITHOUT-NSX" | "SDDC-PCIDSS" | "SDDC-UNKNOWN" | "SDDC-VROPS" | "SDDC-VROPS-WITHOUT-NSX" | "SDDC-WITHOUT-NSX" | "UNKNOWN" | "UNKNOWN-HDS" | "UNKNOWN-HIPAA" | "UNKNOWN-NSX" | "UNKNOWN-NSX-VROPS" | "UNKNOWN-PCIDSS" | "UNKNOWN-UNKNOWN" | "UNKNOWN-VROPS"
    //dedicatedCloud.CommercialRange
    // fullName: dedicatedCloud.CommercialRange.CommercialRange
    export interface CommercialRange {
        allowedHypervisorVersions: dedicatedCloud.HypervisorVersionEnum[];
        allowedNetworkRoles: dedicatedCloud.right.NetworkRoleEnum[];
        commercialRangeName: string;
        dedicatedCloudVersion: string;
        range?: string;
    }
    //dedicatedCloud.Datacenter
    // fullName: dedicatedCloud.Datacenter.Datacenter
    export interface Datacenter {
        commercialName: dedicatedCloud.CommercialNameEnum;
        commercialRangeName: string;
        datacenterId: number;
        description: string;
        horizonViewName?: string;
        isRemovable: boolean;
        name: string;
        version: string;
    }
    //dedicatedCloud.Federation
    // fullName: dedicatedCloud.Federation.Federation
    export interface Federation {
        state: dedicatedCloud.option.StateEnum;
    }
    //dedicatedCloud.FederationAccessNetwork
    // fullName: dedicatedCloud.FederationAccessNetwork.FederationAccessNetwork
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
        state: dedicatedCloud.optionAccessNetwork.StateEnum;
        username: string;
    }
    //dedicatedCloud.Filer
    // fullName: dedicatedCloud.Filer.Filer
    export interface Filer {
        billingType: dedicatedCloud.ressources.BillingTypeEnum;
        filerId: number;
        fullProfile: string;
        name: string;
        profile: string;
        size: complexType.UnitAndValue<number>;
        spaceFree?: number;
        spaceProvisionned?: number;
        spaceUsed?: number;
        state: dedicatedCloud.filer.StateEnum;
        vmTotal?: number;
    }
    //dedicatedCloud.GenerationEnum
    export type GenerationEnum = "1.0" | "2.0"
    //dedicatedCloud.Hcx
    // fullName: dedicatedCloud.Hcx.Hcx
    export interface Hcx {
        build?: string;
        state: dedicatedCloud.option.StateEnum;
        version?: string;
    }
    //dedicatedCloud.Hds
    // fullName: dedicatedCloud.Hds.Hds
    export interface Hds {
        state: dedicatedCloud.option.StateEnum;
    }
    //dedicatedCloud.Hipaa
    // fullName: dedicatedCloud.Hipaa.Hipaa
    export interface Hipaa {
        state: dedicatedCloud.option.StateEnum;
    }
    //dedicatedCloud.Host
    // fullName: dedicatedCloud.Host.Host
    export interface Host {
        billingType: dedicatedCloud.ressources.BillingTypeEnum;
        clusterName?: string;
        connectionState?: dedicatedCloud.hostSystemConnectionState;
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
        state: dedicatedCloud.host.StateEnum;
        uptime?: number;
        vmTotal?: number;
        vmVcpuTotal?: number;
    }
    //dedicatedCloud.HostProfile
    // fullName: dedicatedCloud.HostProfile.HostProfile
    export interface HostProfile {
        id: number;
        name: string;
    }
    //dedicatedCloud.HostStockHypervisor
    // fullName: dedicatedCloud.HostStockHypervisor.HostStockHypervisor
    export interface HostStockHypervisor {
        value: number;
        version: string;
    }
    //dedicatedCloud.HostStockProcGen
    // fullName: dedicatedCloud.HostStockProcGen.HostStockProcGen
    export interface HostStockProcGen {
        cpuGeneration: string;
        value: dedicatedCloud.HostStockHypervisor[];
    }
    //dedicatedCloud.HostStockProfile
    // fullName: dedicatedCloud.HostStockProfile.HostStockProfile
    export interface HostStockProfile {
        id: number;
        name: string;
        ref: string;
        value: dedicatedCloud.HostStockProcGen[];
    }
    //dedicatedCloud.HypervisorVersionEnum
    export type HypervisorVersionEnum = "4.1" | "5.0" | "5.1" | "5.5" | "6.0" | "6.5" | "hv3.1" | "hvdc3.1" | "nc1.0"
    //dedicatedCloud.Ip
    // fullName: dedicatedCloud.Ip.Ip
    export interface Ip {
        country: string;
        description: string;
        network: string;
        networkName: string;
        register: dedicatedCloud.BlockRegisterEnum;
        vlanNumber: number;
    }
    //dedicatedCloud.IpCountriesEnum
    export type IpCountriesEnum = "be" | "ca" | "ch" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "us"
    //dedicatedCloud.IpDetails
    // fullName: dedicatedCloud.IpDetails.IpDetails
    export interface IpDetails {
        ip: string;
        reverse?: string;
        usage: dedicatedCloud.ipUsageEnum;
        usageDetails?: string;
    }
    //dedicatedCloud.ManagementInterfaceEnum
    export type ManagementInterfaceEnum = "azure" | "openstack" | "systemcenter" | "vcloud" | "vcsa" | "vsphere"
    //dedicatedCloud.Nsx
    // fullName: dedicatedCloud.Nsx.Nsx
    export interface Nsx {
        state: dedicatedCloud.option.StateEnum;
        url?: string;
    }
    //dedicatedCloud.ObjectRight
    // fullName: dedicatedCloud.ObjectRight.ObjectRight
    export interface ObjectRight {
        name: string;
        objectRightId: number;
        propagate: boolean;
        right: dedicatedCloud.right.RightEnum;
        type: dedicatedCloud.right.UserObjectRightTypeEnum;
        vmwareObjectId: string;
    }
    //dedicatedCloud.Os
    // fullName: dedicatedCloud.Os.Os
    export interface Os {
        fullName: string;
        lastModificationDate: string;
        shortName: string;
    }
    //dedicatedCloud.PccStockProfile
    // fullName: dedicatedCloud.PccStockProfile.PccStockProfile
    export interface PccStockProfile {
        count: number;
        mode: string;
        realVersion: string;
    }
    //dedicatedCloud.PccZone
    // fullName: dedicatedCloud.PccZone.PccZone
    export interface PccZone {
        id: number;
        pccZone: string;
    }
    //dedicatedCloud.PciDss
    // fullName: dedicatedCloud.PciDss.PciDss
    export interface PciDss {
        state: dedicatedCloud.option.StateEnum;
    }
    //dedicatedCloud.RestorePoint
    // fullName: dedicatedCloud.RestorePoint.RestorePoint
    export interface RestorePoint {
        creationTime?: string;
        isCorrupted: boolean;
        restorePointId: number;
        restorePointSize: complexType.UnitAndValue<number>;
        type?: dedicatedCloud.backup.BackupTypeEnum;
    }
    //dedicatedCloud.Right
    // fullName: dedicatedCloud.Right.Right
    export interface Right {
        canAddRessource: boolean;
        datacenterId: number;
        networkRole: dedicatedCloud.right.NetworkRoleEnum;
        right: dedicatedCloud.right.RightEnum;
        rightId: number;
        vmNetworkRole: dedicatedCloud.right.VmNetworkRoleEnum;
    }
    //dedicatedCloud.Robot
    // fullName: dedicatedCloud.Robot.Robot
    export interface Robot {
        criticity: string;
        description?: string;
        enabled: boolean;
        name: string;
        type: string;
    }
    //dedicatedCloud.ServicePack
    // fullName: dedicatedCloud.ServicePack.ServicePack
    export interface ServicePack {
        name: string;
        options: string[];
    }
    //dedicatedCloud.StateEnum
    export type StateEnum = "available" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "provisionning" | "recycling" | "reserved" | "toDisable" | "toProvision" | "toRecycle" | "toUnprovision" | "unprovisionning"
    //dedicatedCloud.Task
    // fullName: dedicatedCloud.Task.Task
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
        state: dedicatedCloud.TaskStateEnum;
        taskId: number;
        type: string;
        userId?: number;
        vlanId?: number;
    }
    //dedicatedCloud.TaskStateEnum
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    //dedicatedCloud.TwoFAWhitelistStateEnum
    export type TwoFAWhitelistStateEnum = "enabled" | "enabling" | "error" | "migrating" | "removed" | "removing"
    //dedicatedCloud.User
    // fullName: dedicatedCloud.User.User
    export interface User {
        activationState?: dedicatedCloud.user.ActivationStateEnum;
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
        state: dedicatedCloud.user.StateEnum;
        userId: number;
    }
    //dedicatedCloud.UserAccessPolicyEnum
    export type UserAccessPolicyEnum = "filtered" | "open"
    //dedicatedCloud.UserLogoutPolicyEnum
    export type UserLogoutPolicyEnum = "first" | "last"
    //dedicatedCloud.VMEncryption
    // fullName: dedicatedCloud.VMEncryption.VMEncryption
    export interface VMEncryption {
        state: dedicatedCloud.option.StateEnum;
    }
    //dedicatedCloud.VMEncryptionAccessNetwork
    // fullName: dedicatedCloud.VMEncryptionAccessNetwork.VMEncryptionAccessNetwork
    export interface VMEncryptionAccessNetwork {
        description: string;
        ip: string;
        kmsId: number;
        kmsTcpPort: number;
        sslThumbprint: string;
        state: dedicatedCloud.optionAccessNetwork.StateEnum;
    }
    //dedicatedCloud.Vendor
    // fullName: dedicatedCloud.Vendor.Vendor
    export interface Vendor {
        vendorName: string;
    }
    //dedicatedCloud.VendorObjectTypeEnum
    export type VendorObjectTypeEnum = "cluster" | "datacenter" | "filer" | "host" | "vm"
    //dedicatedCloud.Version
    // fullName: dedicatedCloud.Version.Version
    export interface Version {
        build: string;
        major: string;
        minor: string;
    }
    //dedicatedCloud.Vlan
    // fullName: dedicatedCloud.Vlan.Vlan
    export interface Vlan {
        name: string;
        routingRateLimit: string;
        state: dedicatedCloud.vlan.StateEnum;
        type: dedicatedCloud.vlan.TypeEnum;
        vlanId: number;
        vlanNumber: number;
    }
    //dedicatedCloud.Vm
    // fullName: dedicatedCloud.Vm.Vm
    export interface Vm {
        backup?: dedicatedCloud.backup.Backup;
        cdroms?: dedicatedCloud.virtualMachineCdrom[];
        clusterName?: string;
        cpuMax?: number;
        cpuNum?: number;
        cpuReady?: number;
        cpuReadyPercent?: number;
        cpuUsed?: number;
        filers?: dedicatedCloud.vmFiler[];
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
        networks?: dedicatedCloud.vmNetwork[];
        powerState: dedicatedCloud.virtualMachinePowerState;
        readLatency?: number;
        readPerSecond?: number;
        readRate?: number;
        roleFt?: string;
        snapshotNum?: number;
        stateFt?: dedicatedCloud.virtualMachineFaultToleranceState;
        vmId: number;
        vmwareTools?: string;
        vmwareToolsVersion?: string;
        writeLatency?: number;
        writePerSecond?: number;
        writeRate?: number;
    }
    //dedicatedCloud.Vrops
    // fullName: dedicatedCloud.Vrops.Vrops
    export interface Vrops {
        state: dedicatedCloud.option.StateEnum;
        url?: string;
    }
    //dedicatedCloud.ZpoolStockProfile
    // fullName: dedicatedCloud.ZpoolStockProfile.ZpoolStockProfile
    export interface ZpoolStockProfile {
        minimumAvailability: string;
        profile: string;
        realCount: number;
    }
    export namespace backup {
        //dedicatedCloud.backup.Backup
        // fullName: dedicatedCloud.backup.Backup.Backup
        export interface Backup {
            allocatedDisk?: number;
            backupDays?: dedicatedCloud.backup.BackupDaysEnum[];
            encryption?: boolean;
            lastCreationTime?: string;
            lastDuration?: complexType.UnitAndValue<number>;
            lastResult?: dedicatedCloud.backup.JobStateEnum;
            lastSuccessfulCreationTime?: string;
            lastSuccessfulDuration?: complexType.UnitAndValue<number>;
            offerType?: dedicatedCloud.backup.OfferTypeEnum;
            restorePoints?: dedicatedCloud.backup.RestorePoint[];
            retentionTime?: number;
            state?: dedicatedCloud.backup.StateEnum;
        }
        //dedicatedCloud.backup.BackupDaysEnum
        export type BackupDaysEnum = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"
        //dedicatedCloud.backup.BackupTypeEnum
        export type BackupTypeEnum = "full" | "incremental"
        //dedicatedCloud.backup.JobStateEnum
        export type JobStateEnum = "failed" | "running" | "stopped" | "stopping" | "success" | "unknown" | "warning"
        //dedicatedCloud.backup.OfferTypeEnum
        export type OfferTypeEnum = "advanced" | "backup" | "classic" | "legacy"
        //dedicatedCloud.backup.RestorePoint
        // fullName: dedicatedCloud.backup.RestorePoint.RestorePoint
        export interface RestorePoint {
            creationTime?: string;
            isCorrupted?: boolean;
            restorePointId: number;
            size?: complexType.UnitAndValue<number>;
            type?: dedicatedCloud.backup.BackupTypeEnum;
        }
        //dedicatedCloud.backup.StateEnum
        export type StateEnum = "deleting" | "delivered" | "disabled" | "disabling" | "enabling" | "error" | "migrating" | "pending" | "removed" | "stopping" | "toCreate" | "toDelete" | "toDisable" | "toEnable" | "toStop" | "unknown"
    }
    export namespace capabilities {
        //dedicatedCloud.capabilities.FeatureStatusEnum
        export type FeatureStatusEnum = "active" | "comingSoon" | "no"
    }
    //dedicatedCloud.dedicatedCloud
    // fullName: dedicatedCloud.dedicatedCloud.dedicatedCloud
    export interface dedicatedCloud {
        advancedSecurity: boolean;
        bandwidth: string;
        billingType: dedicatedCloud.BillingTypeEnum;
        certifiedInterfaceUrl: string;
        commercialRange: string;
        description: string;
        generation: dedicatedCloud.GenerationEnum;
        location: string;
        managementInterface: dedicatedCloud.ManagementInterfaceEnum;
        serviceName: string;
        servicePackName?: string;
        spla: boolean;
        sslV3?: boolean;
        state: dedicatedCloud.StateEnum;
        userAccessPolicy: dedicatedCloud.UserAccessPolicyEnum;
        userLimitConcurrentSession: number;
        userLogoutPolicy: dedicatedCloud.UserLogoutPolicyEnum;
        userSessionTimeout: number;
        vScopeUrl: string;
        version: dedicatedCloud.Version;
        webInterfaceUrl: string;
    }
    export namespace disasterRecovery {
        //dedicatedCloud.disasterRecovery.DrpTypeEnum
        export type DrpTypeEnum = "onPremise" | "ovh"
        //dedicatedCloud.disasterRecovery.LocalSiteDetails
        // fullName: dedicatedCloud.disasterRecovery.LocalSiteDetails.LocalSiteDetails
        export interface LocalSiteDetails {
            role: dedicatedCloud.disasterRecovery.SiteRoleEnum;
            type: dedicatedCloud.disasterRecovery.SiteTypeEnum;
            zertoVersion: string;
            zvmIp?: string;
        }
        //dedicatedCloud.disasterRecovery.Profile
        // fullName: dedicatedCloud.disasterRecovery.Profile.Profile
        export interface Profile {
            drpType?: dedicatedCloud.disasterRecovery.DrpTypeEnum;
            localSiteInformation?: dedicatedCloud.disasterRecovery.LocalSiteDetails;
            remoteSiteInformation?: dedicatedCloud.disasterRecovery.RemoteSiteDetails;
            state: dedicatedCloud.StateEnum;
            systemVersion: string;
        }
        //dedicatedCloud.disasterRecovery.RemoteSiteDetails
        // fullName: dedicatedCloud.disasterRecovery.RemoteSiteDetails.RemoteSiteDetails
        export interface RemoteSiteDetails {
            datacenterId?: number;
            datacenterName?: string;
            lastVpnConfig?: string;
            remoteEndpointInternalIp?: string;
            remoteEndpointPublicIp?: string;
            remoteZvmInternalIp?: string;
            role?: dedicatedCloud.disasterRecovery.SiteRoleEnum;
            serviceName?: string;
            state?: dedicatedCloud.StateEnum;
            type: dedicatedCloud.disasterRecovery.SiteTypeEnum;
            vpnConfigState?: dedicatedCloud.disasterRecovery.VpnConfigStateEnum;
            zertoVersion?: string;
        }
        //dedicatedCloud.disasterRecovery.SiteRoleEnum
        export type SiteRoleEnum = "primary" | "secondary" | "single"
        //dedicatedCloud.disasterRecovery.SiteTypeEnum
        export type SiteTypeEnum = "onPremise" | "ovhPrivateCloud"
        //dedicatedCloud.disasterRecovery.VpnConfigStateEnum
        export type VpnConfigStateEnum = "configured" | "configuring" | "error" | "notConfigured" | "tunnelError"
    }
    export namespace filer {
        //dedicatedCloud.filer.HourlyConsumption
        // fullName: dedicatedCloud.filer.HourlyConsumption.HourlyConsumption
        export interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        //dedicatedCloud.filer.Profile
        // fullName: dedicatedCloud.filer.Profile.Profile
        export interface Profile {
            fullName: string;
            name: string;
            size: complexType.UnitAndValue<number>;
        }
        //dedicatedCloud.filer.StateEnum
        export type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown"
    }
    export namespace host {
        //dedicatedCloud.host.HourlyConsumption
        // fullName: dedicatedCloud.host.HourlyConsumption.HourlyConsumption
        export interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        //dedicatedCloud.host.Profile
        // fullName: dedicatedCloud.host.Profile.Profile
        export interface Profile {
            core: string;
            cpu: complexType.UnitAndValue<number>;
            name: string;
            ram: complexType.UnitAndValue<number>;
        }
        //dedicatedCloud.host.StateEnum
        export type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown"
    }
    //dedicatedCloud.hostSystemConnectionState
    export type hostSystemConnectionState = "connected" | "disconnected" | "notResponding"
    //dedicatedCloud.ipUsageEnum
    export type ipUsageEnum = "reserved" | "vm"
    //dedicatedCloud.metricsToken
    // fullName: dedicatedCloud.metricsToken.metricsToken
    export interface metricsToken {
        opentsdbEndpoint: string;
        token: string;
        warpEndpoint: string;
    }
    export namespace option {
        //dedicatedCloud.option.StateEnum
        export type StateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "migrating" | "unknown"
    }
    export namespace optionAccessNetwork {
        //dedicatedCloud.optionAccessNetwork.StateEnum
        export type StateEnum = "creating" | "deleting" | "delivered" | "error" | "toCreate" | "toDelete" | "toUpdate" | "unknown" | "updating"
    }
    //dedicatedCloud.optionCompatibility
    // fullName: dedicatedCloud.optionCompatibility.optionCompatibility
    export interface optionCompatibility {
        newCommercialVersion: string;
        oldCommercialVersion: string;
    }
    //dedicatedCloud.passwordPolicy
    // fullName: dedicatedCloud.passwordPolicy.passwordPolicy
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
    //dedicatedCloud.resourceNewPrices
    // fullName: dedicatedCloud.resourceNewPrices.resourceNewPrices
    export interface resourceNewPrices {
        resources?: dedicatedCloud.resourceNewPricesEntry[];
    }
    //dedicatedCloud.resourceNewPricesEntry
    // fullName: dedicatedCloud.resourceNewPricesEntry.resourceNewPricesEntry
    export interface resourceNewPricesEntry {
        billingType: dedicatedCloud.ressources.BillingTypeEnum;
        changed: boolean;
        name: string;
        newPrice: orderPrice;
        oldPrice: orderPrice;
        resourceType: dedicatedCloud.ressources.ResourceTypeEnum;
    }
    export namespace ressources {
        //dedicatedCloud.ressources.BillingTypeEnum
        export type BillingTypeEnum = "freeSpare" | "hourly" | "monthly" | "undefined"
        //dedicatedCloud.ressources.ResourceTypeEnum
        export type ResourceTypeEnum = "host" | "storage"
    }
    export namespace right {
        //dedicatedCloud.right.NetworkRoleEnum
        export type NetworkRoleEnum = "admin" | "manager" | "noAccess" | "readonly"
        //dedicatedCloud.right.RightEnum
        export type RightEnum = "admin" | "disabled" | "readonly" | "readwrite"
        //dedicatedCloud.right.UserObjectRightTypeEnum
        export type UserObjectRightTypeEnum = "cluster" | "datastore" | "dvportgroup" | "folder" | "pool" | "vm"
        //dedicatedCloud.right.VmNetworkRoleEnum
        export type VmNetworkRoleEnum = "admin" | "noAccess" | "readonly"
    }
    //dedicatedCloud.servicePackEnum
    export type servicePackEnum = "default" | "hds" | "hipaa" | "legacy" | "nsx" | "nsx-and-vrops" | "pcidss" | "vrops"
    //dedicatedCloud.servicePackStateEnum
    export type servicePackStateEnum = "activating" | "active" | "error" | "waitingForCustomer"
    //dedicatedCloud.servicePackStatus
    // fullName: dedicatedCloud.servicePackStatus.servicePackStatus
    export interface servicePackStatus {
        name: dedicatedCloud.servicePackEnum;
        state: dedicatedCloud.servicePackStateEnum;
    }
    //dedicatedCloud.twoFAWhitelist
    // fullName: dedicatedCloud.twoFAWhitelist.twoFAWhitelist
    export interface twoFAWhitelist {
        description: string;
        id: number;
        ip: string;
        state: dedicatedCloud.TwoFAWhitelistStateEnum;
    }
    export namespace user {
        //dedicatedCloud.user.ActivationStateEnum
        export type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable"
        //dedicatedCloud.user.StateEnum
        export type StateEnum = "creating" | "deleting" | "delivered" | "error"
    }
    export namespace vendor {
        //dedicatedCloud.vendor.OvhId
        // fullName: dedicatedCloud.vendor.OvhId.OvhId
        export interface OvhId {
            datacenterId?: number;
            filerId?: number;
            hostId?: number;
            vmId?: number;
        }
    }
    //dedicatedCloud.virtualDeviceConnectInfoStatus
    export type virtualDeviceConnectInfoStatus = "ok" | "recoverableError" | "unrecoverableError" | "untried"
    //dedicatedCloud.virtualMachineCdrom
    // fullName: dedicatedCloud.virtualMachineCdrom.virtualMachineCdrom
    export interface virtualMachineCdrom {
        connected?: boolean;
        iso?: string;
    }
    //dedicatedCloud.virtualMachineFaultToleranceState
    export type virtualMachineFaultToleranceState = "disabled" | "enabled" | "needSecondary" | "notConfigured" | "running" | "starting"
    //dedicatedCloud.virtualMachinePowerState
    export type virtualMachinePowerState = "deleted" | "poweredOff" | "poweredOn" | "suspended"
    export namespace vlan {
        //dedicatedCloud.vlan.StateEnum
        export type StateEnum = "available" | "delivered" | "disabled" | "error" | "removing" | "reserved"
        //dedicatedCloud.vlan.TypeEnum
        export type TypeEnum = "admin" | "free" | "paid"
    }
    //dedicatedCloud.vmFiler
    // fullName: dedicatedCloud.vmFiler.vmFiler
    export interface vmFiler {
        committed: number;
        disks: dedicatedCloud.vmFilerDisk[];
        name: string;
    }
    //dedicatedCloud.vmFilerDisk
    // fullName: dedicatedCloud.vmFilerDisk.vmFilerDisk
    export interface vmFilerDisk {
        capacity: number;
        id: string;
    }
    //dedicatedCloud.vmNetwork
    // fullName: dedicatedCloud.vmNetwork.vmNetwork
    export interface vmNetwork {
        allowGuestControl: boolean;
        backing: dedicatedCloud.vmNetworkBacking;
        connected: boolean;
        controler: string;
        label: string;
        macAddress: string;
        startConnected: boolean;
        status: dedicatedCloud.virtualDeviceConnectInfoStatus;
    }
    //dedicatedCloud.vmNetworkBacking
    // fullName: dedicatedCloud.vmNetworkBacking.vmNetworkBacking
    export interface vmNetworkBacking {
        deviceName?: string;
        portGroupKey?: string;
        portKey?: string;
        switchUuid?: string;
        type: dedicatedCloud.vmNetworkBackingTypeEnum;
        useAutoDetect?: boolean;
        valueMoref?: string;
    }
    //dedicatedCloud.vmNetworkBackingTypeEnum
    export type vmNetworkBackingTypeEnum = "DVS" | "VSS"
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
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
    //vrack.dedicatedCloud
    // fullName: vrack.dedicatedCloud.dedicatedCloud
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
export interface DedicatedCloud{
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
        $put(params?: {advancedSecurity?: boolean, bandwidth?: string, billingType?: dedicatedCloud.BillingTypeEnum, certifiedInterfaceUrl?: string, commercialRange?: string, description?: string, generation?: dedicatedCloud.GenerationEnum, location?: string, managementInterface?: dedicatedCloud.ManagementInterfaceEnum, serviceName?: string, servicePackName?: string, spla?: boolean, sslV3?: boolean, state?: dedicatedCloud.StateEnum, userAccessPolicy?: dedicatedCloud.UserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloud.UserLogoutPolicyEnum, userSessionTimeout?: number, vScopeUrl?: string, version?: dedicatedCloud.Version, webInterfaceUrl?: string}): Promise<dedicatedCloud.Task>;
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
                $put(params?: {description?: string, network?: string, networkAccessId?: number, state?: dedicatedCloud.AllowedNetworkStateEnum}): Promise<dedicatedCloud.Task>;
                task: {
                    // GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task
                    $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
        changeContact: {
            // POST /dedicatedCloud/{serviceName}/changeContact
            $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
        }
        changeProperties: {
            // POST /dedicatedCloud/{serviceName}/changeProperties
            $post(params?: {description?: string, sslV3?: boolean, userAccessPolicy?: dedicatedCloud.UserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloud.UserLogoutPolicyEnum, userSessionTimeout?: number}): Promise<dedicatedCloud.Task>;
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
                $put(params?: {commercialName?: dedicatedCloud.CommercialNameEnum, commercialRangeName?: string, datacenterId?: number, description?: string, horizonViewName?: string, isRemovable?: boolean, name?: string, version?: string}): Promise<dedicatedCloud.Task>;
                backup: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup
                    $get(): Promise<dedicatedCloud.Backup>;
                    changeProperties: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties
                        $post(params: {backupDurationInReport: boolean, backupOffer: dedicatedCloud.backup.OfferTypeEnum, backupSizeInReport: boolean, diskSizeInReport: boolean, fullDayInReport: boolean, mailAddress?: string, restorePointInReport: boolean, scheduleHour?: string}): Promise<dedicatedCloud.Task>;
                    }
                    disable: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
                        $post(): Promise<dedicatedCloud.Task>;
                    }
                    enable: {
                        // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable
                        $post(params?: {backupOffer?: dedicatedCloud.backup.OfferTypeEnum}): Promise<dedicatedCloud.Task>;
                    }
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
                            $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
                            $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
                    $post(params: {name: string}): Promise<dedicatedCloud.Task>;
                }
                orderableFilerProfiles: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles
                    $get(): Promise<dedicatedCloud.filer.Profile[]>;
                }
                orderableHostProfiles: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles
                    $get(): Promise<dedicatedCloud.host.Profile[]>;
                }
                task: {
                    // GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task
                    $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
                            $post(params: {backupDays: dedicatedCloud.backup.BackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
                            disable: {
                                // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable
                                $post(): Promise<dedicatedCloud.Task>;
                            }
                            enable: {
                                // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable
                                $post(params: {backupDays: dedicatedCloud.backup.BackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
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
                            $post(params: {backupDays: dedicatedCloud.backup.BackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
                        }
                        enableBackup: {
                            // POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup
                            $post(params: {backupDays: dedicatedCloud.backup.BackupDaysEnum[]}): Promise<dedicatedCloud.Task>;
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
                    $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
            $get(params?: {datacenterId?: number, endDate_from?: string, endDate_to?: string, executionDate_from?: string, executionDate_to?: string, filerId?: number, hostId?: number, lastModificationDate_from?: string, lastModificationDate_to?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: dedicatedCloud.TaskStateEnum[], userId?: number, vlanId?: number}): Promise<number[]>;
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
                    $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
            $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
        user: {
            // GET /dedicatedCloud/{serviceName}/user
            $get(params?: {name?: string}): Promise<number[]>;
            // POST /dedicatedCloud/{serviceName}/user
            $post(params: {canAddRessource?: boolean, canManageRights?: boolean, email?: string, expirationDate?: string, firstName?: string, lastName?: string, name: string, networkRole?: dedicatedCloud.right.NetworkRoleEnum, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: dedicatedCloud.right.RightEnum, tokenValidator?: boolean, vmNetworkRole?: dedicatedCloud.right.VmNetworkRoleEnum}): Promise<dedicatedCloud.Task>;
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
                    $post(params: {propagate?: boolean, right: dedicatedCloud.right.RightEnum, type: dedicatedCloud.right.UserObjectRightTypeEnum, vmwareObjectId: string}): Promise<dedicatedCloud.Task>;
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
                        $put(params?: {canAddRessource?: boolean, datacenterId?: number, networkRole?: dedicatedCloud.right.NetworkRoleEnum, right?: dedicatedCloud.right.RightEnum, rightId?: number, vmNetworkRole?: dedicatedCloud.right.VmNetworkRoleEnum}): Promise<dedicatedCloud.Task>;
                    };
                }
                task: {
                    // GET /dedicatedCloud/{serviceName}/user/{userId}/task
                    $get(params?: {name?: string, state?: dedicatedCloud.TaskStateEnum}): Promise<number[]>;
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
// Api
  /**
   * Operations about the PCC service
   * List available services
   */
  get(path: '/dedicatedCloud'): () => Promise<string[]>;
  /**
   * Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}'): (params: {serviceName: string}) => Promise<dedicatedCloud.dedicatedCloud>;
  /**
   * List the dedicatedCloud.AllowedNetwork objects
   * Networks allowed to access to this Private Cloud management interface
   */
  get(path: '/dedicatedCloud/{serviceName}/allowedNetwork'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Network allowed to connect to the Private Cloud management interface
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}'): (params: {networkAccessId: number, serviceName: string}) => Promise<dedicatedCloud.AllowedNetwork>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this allowed network
   */
  get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task'): (params: {networkAccessId: number, serviceName: string, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}'): (params: {networkAccessId: number, serviceName: string, taskId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * The features available in your Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/capabilities'): (params: {serviceName: string}) => Promise<dedicatedCloud.Capabilities>;
  /**
   * compliance operations
   * Get the name of the commercial ranges compliant with your Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/commercialRange/compliance'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * orderable operations
   * Get the name of the commercial ranges orderable in your Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/commercialRange/orderable'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * List the dedicatedCloud.Datacenter objects
   * Datacenters associated with this Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud Datacenter
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.Datacenter>;
  /**
   * Backup configured on a given Datacenter
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.Backup>;
  /**
   * defaultLocalVraNetwork operations
   * Get the default localVraNetwork subnet suggested by OVH
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork'): (params: {datacenterId: number, serviceName: string}) => Promise<string>;
  /**
   * List the dedicatedCloud.Filer objects
   * Filers associated with this Datacenter
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer'): (params: {datacenterId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud Filer
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}'): (params: {datacenterId: number, filerId: number, serviceName: string}) => Promise<dedicatedCloud.Filer>;
  /**
   * hourlyConsumption operations
   * Hourly consumption associated with this Filer
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption'): (params: {datacenterId: number, filerId: number, serviceName: string}) => Promise<dedicatedCloud.filer.HourlyConsumption>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this Filer
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task'): (params: {datacenterId: number, filerId: number, serviceName: string, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}'): (params: {datacenterId: number, filerId: number, serviceName: string, taskId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * List the dedicatedCloud.Host objects
   * Hosts associated with this Datacenter
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host'): (params: {datacenterId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud Host
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}'): (params: {datacenterId: number, hostId: number, serviceName: string}) => Promise<dedicatedCloud.Host>;
  /**
   * hourlyConsumption operations
   * Hourly consumption associated with this host.
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption'): (params: {datacenterId: number, hostId: number, serviceName: string}) => Promise<dedicatedCloud.host.HourlyConsumption>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this Host
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task'): (params: {datacenterId: number, hostId: number, serviceName: string, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}'): (params: {datacenterId: number, hostId: number, serviceName: string, taskId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * orderableFilerProfiles operations
   * List available filers in a given Private Cloud Datacenter
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.filer.Profile[]>;
  /**
   * orderableHostProfiles operations
   * List available hosts in a given Private Cloud Datacenter
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.host.Profile[]>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this Datacenter
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task'): (params: {datacenterId: number, serviceName: string, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}'): (params: {datacenterId: number, serviceName: string, taskId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * List the dedicatedCloud.Vm objects
   * Virtual machiness associated with this Datacenter
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm'): (params: {datacenterId: number, serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud Virtual Machine
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}'): (params: {datacenterId: number, serviceName: string, vmId: number}) => Promise<dedicatedCloud.Vm>;
  /**
   * Private Cloud Backup Job
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob'): (params: {datacenterId: number, serviceName: string, vmId: number}) => Promise<dedicatedCloud.BackupJob>;
  /**
   * List the dedicatedCloud.RestorePoint objects
   * Restore point associated to this Backup Job
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints'): (params: {datacenterId: number, serviceName: string, vmId: number}) => Promise<number[]>;
  /**
   * Private Cloud Restore Point
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}'): (params: {datacenterId: number, restorePointId: number, serviceName: string, vmId: number}) => Promise<dedicatedCloud.RestorePoint>;
  /**
   * Private Cloud Active Directory Federation option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/federation'): (params: {serviceName: string}) => Promise<dedicatedCloud.Federation>;
  /**
   * List the dedicatedCloud.FederationAccessNetwork objects
   * Active Directories linked to this Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud federation option access network
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}'): (params: {activeDirectoryId: number, serviceName: string}) => Promise<dedicatedCloud.FederationAccessNetwork>;
  /**
   * List the dedicatedCloud.Filer objects
   * Filers mounted on all Datacenters of your Private Cloud Vsphere
   */
  get(path: '/dedicatedCloud/{serviceName}/filer'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud Filer
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}'): (params: {filerId: number, serviceName: string}) => Promise<dedicatedCloud.Filer>;
  /**
   * hourlyConsumption operations
   * Hourly consumption associated with this Filer
   */
  get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption'): (params: {filerId: number, serviceName: string}) => Promise<dedicatedCloud.filer.HourlyConsumption>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this Filer
   */
  get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task'): (params: {filerId: number, serviceName: string, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}'): (params: {filerId: number, serviceName: string, taskId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * globalTasks operations
   * Get filtered tasks associated with this Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/globalTasks'): (params: {serviceName: string, datacenterId?: number, endDate_from?: string, endDate_to?: string, executionDate_from?: string, executionDate_to?: string, filerId?: number, hostId?: number, lastModificationDate_from?: string, lastModificationDate_to?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: dedicatedCloud.TaskStateEnum[], userId?: number, vlanId?: number}) => Promise<number[]>;
  /**
   * Private Cloud VMware Hybrid Cloud Extension option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/hcx'): (params: {serviceName: string}) => Promise<dedicatedCloud.Hcx>;
  /**
   * canBeDisabled operations
   * Check if VMware Hybrid Cloud Extension option can be disabled
   */
  get(path: '/dedicatedCloud/{serviceName}/hcx/canBeDisabled'): (params: {serviceName: string}) => Promise<boolean>;
  /**
   * canBeEnabled operations
   * Check if VMware Hybrid Cloud Extension option can be enabled
   */
  get(path: '/dedicatedCloud/{serviceName}/hcx/canBeEnabled'): (params: {serviceName: string}) => Promise<boolean>;
  /**
   * The Private Cloud Hds option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/hds'): (params: {serviceName: string}) => Promise<dedicatedCloud.Hds>;
  /**
   * canBeDisabled operations
   * Check if Hds option can be disabled
   */
  get(path: '/dedicatedCloud/{serviceName}/hds/canBeDisabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * canBeEnabled operations
   * Check if Hds option can be enabled
   */
  get(path: '/dedicatedCloud/{serviceName}/hds/canBeEnabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * The Private Cloud Hipaa option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/hipaa'): (params: {serviceName: string}) => Promise<dedicatedCloud.Hipaa>;
  /**
   * canBeDisabled operations
   * Check if Hipaa option can be disabled
   */
  get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeDisabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * canBeEnabled operations
   * Check if Hipaa option can be enabled
   */
  get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeEnabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * List the dedicatedCloud.Ip objects
   * Ip Blocks attached to this Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/ip'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * IP Blocks associated with a Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/ip/{network}'): (params: {network: string, serviceName: string}) => Promise<dedicatedCloud.Ip>;
  /**
   * details operations
   * List details about this IP Block
   */
  get(path: '/dedicatedCloud/{serviceName}/ip/{network}/details'): (params: {network: string, serviceName: string}) => Promise<dedicatedCloud.IpDetails[]>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this IP Block
   */
  get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task'): (params: {network: string, serviceName: string, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}'): (params: {network: string, serviceName: string, taskId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * newPrices operations
   * Get the new Prices for your Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/newPrices'): (params: {serviceName: string}) => Promise<dedicatedCloud.resourceNewPrices>;
  /**
   * The Private Cloud Nsx option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/nsx'): (params: {serviceName: string}) => Promise<dedicatedCloud.Nsx>;
  /**
   * canBeDisabled operations
   * Check if Nsx option can be disabled
   */
  get(path: '/dedicatedCloud/{serviceName}/nsx/canBeDisabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * canBeEnabled operations
   * Check if Nsx option can be enabled
   */
  get(path: '/dedicatedCloud/{serviceName}/nsx/canBeEnabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * orderableIpCountries operations
   * Get the countries you can select in /order/dedicatedCloud/{serviceName}/ip
   */
  get(path: '/dedicatedCloud/{serviceName}/orderableIpCountries'): (params: {serviceName: string}) => Promise<dedicatedCloud.IpCountriesEnum[]>;
  /**
   * passwordPolicy operations
   * Get the current password policy for your Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/passwordPolicy'): (params: {serviceName: string}) => Promise<dedicatedCloud.passwordPolicy>;
  /**
   * The Private Cloud PCI-DSS option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/pcidss'): (params: {serviceName: string}) => Promise<dedicatedCloud.PciDss>;
  /**
   * canBeDisabled operations
   * Check if PCI-DSS option can be disabled
   */
  get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeDisabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * canBeEnabled operations
   * Check if PCI-DSS option can be enabled
   */
  get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeEnabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * List the dedicatedCloud.Robot objects
   * Robots that can run on this Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/robot'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * The robots used in Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/robot/{name}'): (params: {name: string, serviceName: string}) => Promise<dedicatedCloud.Robot>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * servicePack operations
   * Retrieve the service pack informations
   */
  get(path: '/dedicatedCloud/{serviceName}/servicePack'): (params: {serviceName: string}) => Promise<dedicatedCloud.servicePackStatus>;
  /**
   * List the dedicatedCloud.ServicePack objects
   * Service Pack compliant with the current Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/servicePacks'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * List of Service Pack compliant with the current Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/servicePacks/{name}'): (params: {name: string, serviceName: string}) => Promise<dedicatedCloud.ServicePack>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/task'): (params: {serviceName: string, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/task/{taskId}'): (params: {serviceName: string, taskId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * List the dedicatedCloud.twoFAWhitelist objects
   * Ip allowed to bypass the two factor authentication on this Private Cloud management interface
   */
  get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Trust IP which can bypass the two factor authentication
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}'): (params: {id: number, serviceName: string}) => Promise<dedicatedCloud.twoFAWhitelist>;
  /**
   * List the dedicatedCloud.User objects
   * Private Cloud users
   */
  get(path: '/dedicatedCloud/{serviceName}/user'): (params: {serviceName: string, name?: string}) => Promise<number[]>;
  /**
   * Private Cloud User
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/user/{userId}'): (params: {serviceName: string, userId: number}) => Promise<dedicatedCloud.User>;
  /**
   * List the dedicatedCloud.ObjectRight objects
   * User rights on an object
   */
  get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight'): (params: {serviceName: string, userId: number}) => Promise<number[]>;
  /**
   * Private Cloud User object right
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}'): (params: {objectRightId: number, serviceName: string, userId: number}) => Promise<dedicatedCloud.ObjectRight>;
  /**
   * List the dedicatedCloud.Right objects
   * User rights in a given Datacenters
   */
  get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right'): (params: {serviceName: string, userId: number}) => Promise<number[]>;
  /**
   * Private Cloud User right
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}'): (params: {rightId: number, serviceName: string, userId: number}) => Promise<dedicatedCloud.Right>;
  /**
   * List the dedicatedCloud.Task objects
   * Tasks associated with this User
   */
  get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task'): (params: {serviceName: string, userId: number, name?: string, state?: dedicatedCloud.TaskStateEnum}) => Promise<number[]>;
  /**
   * Operation on a Private Cloud component
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}'): (params: {serviceName: string, taskId: number, userId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * The Private Cloud Vendor option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/vendor'): (params: {serviceName: string}) => Promise<dedicatedCloud.Vendor>;
  /**
   * List the dedicatedCloud.Vlan objects
   * Private Cloud vlans
   */
  get(path: '/dedicatedCloud/{serviceName}/vlan'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud Vlan
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/vlan/{vlanId}'): (params: {serviceName: string, vlanId: number}) => Promise<dedicatedCloud.Vlan>;
  /**
   * Private Cloud VM Encryption option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/vmEncryption'): (params: {serviceName: string}) => Promise<dedicatedCloud.VMEncryption>;
  /**
   * List the dedicatedCloud.VMEncryptionAccessNetwork objects
   * VM Encryption KMS linked to this Private Cloud
   */
  get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms'): (params: {serviceName: string}) => Promise<number[]>;
  /**
   * Private Cloud VM Encryption option access network
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}'): (params: {kmsId: number, serviceName: string}) => Promise<dedicatedCloud.VMEncryptionAccessNetwork>;
  /**
   * List the vrack.dedicatedCloud objects
   * This Private Cloud vrack
   */
  get(path: '/dedicatedCloud/{serviceName}/vrack'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * vrack dedicated cloud interface
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}'): (params: {serviceName: string, vrack: string}) => Promise<vrack.dedicatedCloud>;
  /**
   * The Private Cloud vRealize Operations option
   * Get this object properties
   */
  get(path: '/dedicatedCloud/{serviceName}/vrops'): (params: {serviceName: string}) => Promise<dedicatedCloud.Vrops>;
  /**
   * canBeDisabled operations
   * Check if vRealize Operations option can be disabled
   */
  get(path: '/dedicatedCloud/{serviceName}/vrops/canBeDisabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * canBeEnabled operations
   * Check if vRealize Operations option can be enabled
   */
  get(path: '/dedicatedCloud/{serviceName}/vrops/canBeEnabled'): (params: {serviceName: string}) => Promise<dedicatedCloud.optionCompatibility>;
  /**
   * List the dedicatedCloud.CommercialRange objects
   * List of commercial Ranges available in a Dedicated Cloud
   */
  get(path: '/dedicatedCloud/commercialRange'): () => Promise<string[]>;
  /**
   * The commercial ranges actually available in your Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/commercialRange/{commercialRangeName}'): (params: {commercialRangeName: string}) => Promise<dedicatedCloud.CommercialRange>;
  /**
   * List the dedicatedCloud.PccZone objects
   * List of locations available in a Dedicated Cloud
   */
  get(path: '/dedicatedCloud/location'): () => Promise<string[]>;
  /**
   * PccZones actually available in Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/location/{pccZone}'): (params: {pccZone: string}) => Promise<dedicatedCloud.PccZone>;
  /**
   * List the dedicatedCloud.HostProfile objects
   * Offered host profile
   */
  get(path: '/dedicatedCloud/location/{pccZone}/hostProfile'): (params: {pccZone: string}) => Promise<number[]>;
  /**
   * Host profiles actually available in Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/location/{pccZone}/hostProfile/{id}'): (params: {id: number, pccZone: string}) => Promise<dedicatedCloud.HostProfile>;
  /**
   * List the dedicatedCloud.Os objects
   * Offered hypervisor version
   */
  get(path: '/dedicatedCloud/location/{pccZone}/hypervisor'): (params: {pccZone: string}) => Promise<string[]>;
  /**
   * Hypervisors actually available in Private Cloud
   * Get this object properties
   */
  get(path: '/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}'): (params: {pccZone: string, shortName: string}) => Promise<dedicatedCloud.Os>;
  /**
   * host operations
   * Available host stock
   */
  get(path: '/dedicatedCloud/location/{pccZone}/stock/host'): (params: {pccZone: string, minYear?: number}) => Promise<dedicatedCloud.HostStockProfile[]>;
  /**
   * pcc operations
   * Available PCC stock
   */
  get(path: '/dedicatedCloud/location/{pccZone}/stock/pcc'): (params: {pccZone: string}) => Promise<dedicatedCloud.PccStockProfile[]>;
  /**
   * zpool operations
   * Available zpool stock
   */
  get(path: '/dedicatedCloud/location/{pccZone}/stock/zpool'): (params: {pccZone: string, profileFilter?: string}) => Promise<dedicatedCloud.ZpoolStockProfile[]>;
  /**
   * Private Cloud
   * Alter this object properties
   */
  put(path: '/dedicatedCloud/{serviceName}'): (params: {serviceName: string, advancedSecurity?: boolean, bandwidth?: string, billingType?: dedicatedCloud.BillingTypeEnum, certifiedInterfaceUrl?: string, commercialRange?: string, description?: string, generation?: dedicatedCloud.GenerationEnum, location?: string, managementInterface?: dedicatedCloud.ManagementInterfaceEnum, servicePackName?: string, spla?: boolean, sslV3?: boolean, state?: dedicatedCloud.StateEnum, userAccessPolicy?: dedicatedCloud.UserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloud.UserLogoutPolicyEnum, userSessionTimeout?: number, vScopeUrl?: string, version?: dedicatedCloud.Version, webInterfaceUrl?: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Network allowed to connect to the Private Cloud management interface
   * Alter this object properties
   */
  put(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}'): (params: {networkAccessId: number, serviceName: string, description?: string, network?: string, state?: dedicatedCloud.AllowedNetworkStateEnum}) => Promise<dedicatedCloud.Task>;
  /**
   * Private Cloud Datacenter
   * Alter this object properties
   */
  put(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}'): (params: {datacenterId: number, serviceName: string, commercialName?: dedicatedCloud.CommercialNameEnum, commercialRangeName?: string, description?: string, horizonViewName?: string, isRemovable?: boolean, name?: string, version?: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/dedicatedCloud/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Private Cloud User right
   * Alter this object properties
   */
  put(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}'): (params: {rightId: number, serviceName: string, userId: number, canAddRessource?: boolean, datacenterId?: number, networkRole?: dedicatedCloud.right.NetworkRoleEnum, right?: dedicatedCloud.right.RightEnum, vmNetworkRole?: dedicatedCloud.right.VmNetworkRoleEnum}) => Promise<dedicatedCloud.Task>;
  /**
   * List the dedicatedCloud.AllowedNetwork objects
   * Create a new Allowed network for your dedicatedCloud
   */
  post(path: '/dedicatedCloud/{serviceName}/allowedNetwork'): (params: {serviceName: string, description?: string, network: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {networkAccessId: number, serviceName: string, taskId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState'): (params: {networkAccessId: number, serviceName: string, taskId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/dedicatedCloud/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * changeProperties operations
   * Update this Private Cloud properties.
   */
  post(path: '/dedicatedCloud/{serviceName}/changeProperties'): (params: {serviceName: string, description?: string, sslV3?: boolean, userAccessPolicy?: dedicatedCloud.UserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloud.UserLogoutPolicyEnum, userSessionTimeout?: number}) => Promise<dedicatedCloud.Task>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/dedicatedCloud/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * List the dedicatedCloud.Datacenter objects
   * Add a new Datacenter in your Private Cloud
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter'): (params: {serviceName: string, commercialRangeName: string, vrackName?: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeProperties operations
   * Edit the backup on a Private Cloud
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties'): (params: {datacenterId: number, serviceName: string, backupDurationInReport: boolean, backupOffer: dedicatedCloud.backup.OfferTypeEnum, backupSizeInReport: boolean, diskSizeInReport: boolean, fullDayInReport: boolean, mailAddress?: string, restorePointInReport: boolean, scheduleHour?: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable backup solution on a Private Cloud
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable backup solution on a Private Cloud
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable'): (params: {datacenterId: number, serviceName: string, backupOffer?: dedicatedCloud.backup.OfferTypeEnum}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable Zerto
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable'): (params: {datacenterId: number, serviceName: string, secondaryDatacenterId: number, secondaryServiceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable Zerto replication between 2 OVH dedicated Clouds
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable'): (params: {datacenterId: number, serviceName: string, primaryEndpointIp: string, secondaryDatacenterId: number, secondaryEndpointIp: string, secondaryServiceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * generateZsspPassword operations
   * Generate a new password for Zerto Self Service Portal and receive it by email.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * state operations
   * Get the current state of Zerto deployment on your dedicated Cloud.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.disasterRecovery.Profile>;
  /**
   * configureVpn operations
   * Configure vpn between your OVH Private Cloud and your onsite infrastructure
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn'): (params: {datacenterId: number, serviceName: string, preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteVraNetwork?: string, remoteZvmInternalIp: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable Single site Zerto
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable Zerto replication between your OVH Private Cloud and your onsite infrastructure
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable'): (params: {datacenterId: number, serviceName: string, localVraNetwork: string, ovhEndpointIp: string, remoteVraNetwork: string}) => Promise<dedicatedCloud.Task>;
  /**
   * remove operations
   * Remove the filer from your Private Cloud.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove'): (params: {datacenterId: number, filerId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {datacenterId: number, filerId: number, serviceName: string, taskId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState'): (params: {datacenterId: number, filerId: number, serviceName: string, taskId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * addHostSpare operations
   * Add a spare host to your Private Cloud.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare'): (params: {datacenterId: number, hostId: number, serviceName: string, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * remove operations
   * Remove the host from your Private Cloud.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove'): (params: {datacenterId: number, hostId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {datacenterId: number, hostId: number, serviceName: string, taskId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState'): (params: {datacenterId: number, hostId: number, serviceName: string, taskId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * orderNewFilerHourly operations
   * Order a new hourly Filer in a given Datacenter
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly'): (params: {datacenterId: number, serviceName: string, name: string}) => Promise<dedicatedCloud.Task>;
  /**
   * orderNewHostHourly operations
   * Order a new hourly Host in a given Datacenter
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly'): (params: {datacenterId: number, serviceName: string, name: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {datacenterId: number, serviceName: string, taskId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState'): (params: {datacenterId: number, serviceName: string, taskId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Private Cloud Backup Job
   * Edit a backup job
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob'): (params: {datacenterId: number, serviceName: string, vmId: number, backupDays: dedicatedCloud.backup.BackupDaysEnum[]}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable backup solution on this virtual Machine
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable'): (params: {datacenterId: number, serviceName: string, vmId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable backup solution on this virtual Machine
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable'): (params: {datacenterId: number, serviceName: string, vmId: number, backupDays: dedicatedCloud.backup.BackupDaysEnum[]}) => Promise<dedicatedCloud.Task>;
  /**
   * restore operations
   * Restore this restore point
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore'): (params: {datacenterId: number, restorePointId: number, serviceName: string, vmId: number, filerId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * disableBackup operations
   * Disable backup on this virtual Machine
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup'): (params: {datacenterId: number, serviceName: string, vmId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * editBackup operations
   * Edit backup on this virtual Machine
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup'): (params: {datacenterId: number, serviceName: string, vmId: number, backupDays: dedicatedCloud.backup.BackupDaysEnum[]}) => Promise<dedicatedCloud.Task>;
  /**
   * enableBackup operations
   * Enable backup on this virtual Machine
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup'): (params: {datacenterId: number, serviceName: string, vmId: number, backupDays: dedicatedCloud.backup.BackupDaysEnum[]}) => Promise<dedicatedCloud.Task>;
  /**
   * restoreBackup operations
   * Restore this restore point
   */
  post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup'): (params: {datacenterId: number, serviceName: string, vmId: number, filerId: number, restorePointId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * List the dedicatedCloud.FederationAccessNetwork objects
   * Add a new option user access
   */
  post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory'): (params: {serviceName: string, baseDnForGroups: string, baseDnForUsers: string, description?: string, domainAlias: string, domainName: string, ip: string, password: string, username: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeProperties operations
   * Change Active Directory properties
   */
  post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties'): (params: {activeDirectoryId: number, serviceName: string, description?: string, password: string, username: string}) => Promise<dedicatedCloud.Task>;
  /**
   * grantActiveDirectoryUser operations
   * Grant Active Directory user
   */
  post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser'): (params: {activeDirectoryId: number, serviceName: string, username: string}) => Promise<dedicatedCloud.Task>;
  /**
   * remove operations
   * Remove the filer from your Private Cloud.
   */
  post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/remove'): (params: {filerId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {filerId: number, serviceName: string, taskId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState'): (params: {filerId: number, serviceName: string, taskId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable VMware Hybrid Cloud Extension option
   */
  post(path: '/dedicatedCloud/{serviceName}/hcx/disable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable VMware Hybrid Cloud Extension option
   */
  post(path: '/dedicatedCloud/{serviceName}/hcx/enable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable Hds option
   */
  post(path: '/dedicatedCloud/{serviceName}/hds/disable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable Hds option
   */
  post(path: '/dedicatedCloud/{serviceName}/hds/enable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable Hipaa option
   */
  post(path: '/dedicatedCloud/{serviceName}/hipaa/disable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable Hipaa option
   */
  post(path: '/dedicatedCloud/{serviceName}/hipaa/enable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {network: string, serviceName: string, taskId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState'): (params: {network: string, serviceName: string, taskId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable Nsx option
   */
  post(path: '/dedicatedCloud/{serviceName}/nsx/disable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable Nsx option
   */
  post(path: '/dedicatedCloud/{serviceName}/nsx/enable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * orderNewFilerHourly operations
   * Order a new hourly Filer mounted in every Datacenter of a given Private Cloud
   */
  post(path: '/dedicatedCloud/{serviceName}/orderNewFilerHourly'): (params: {serviceName: string, name: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable PCI-DSS option
   */
  post(path: '/dedicatedCloud/{serviceName}/pcidss/disable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable PCI-DSS option
   */
  post(path: '/dedicatedCloud/{serviceName}/pcidss/enable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTriggeredAlarm operations
   * Reset all triggered alarms on PCC
   */
  post(path: '/dedicatedCloud/{serviceName}/resetTriggeredAlarm'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {serviceName: string, taskId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState'): (params: {serviceName: string, taskId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/dedicatedCloud/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * List the dedicatedCloud.twoFAWhitelist objects
   * Add a whitelisted ip on the two factor authentication
   */
  post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist'): (params: {serviceName: string, description: string, ip: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeProperties operations
   * Change Private Cloud Two facter authentication whitelist properties
   */
  post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties'): (params: {id: number, serviceName: string, description?: string}) => Promise<dedicatedCloud.Task>;
  /**
   * upgradeHypervisor operations
   * Upgrade your hypervisor to the next released version
   */
  post(path: '/dedicatedCloud/{serviceName}/upgradeHypervisor'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * List the dedicatedCloud.User objects
   * Create a new User in your Private Cloud
   */
  post(path: '/dedicatedCloud/{serviceName}/user'): (params: {serviceName: string, canAddRessource?: boolean, canManageRights?: boolean, email?: string, expirationDate?: string, firstName?: string, lastName?: string, name: string, networkRole?: dedicatedCloud.right.NetworkRoleEnum, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: dedicatedCloud.right.RightEnum, tokenValidator?: boolean, vmNetworkRole?: dedicatedCloud.right.VmNetworkRoleEnum}) => Promise<dedicatedCloud.Task>;
  /**
   * changePassword operations
   * Change Private Cloud user password
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changePassword'): (params: {serviceName: string, userId: number, password?: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeProperties operations
   * Change Private Cloud user properties
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changeProperties'): (params: {serviceName: string, userId: number, canManageIpFailOvers?: boolean, canManageNetwork?: boolean, canManageRights?: boolean, email?: string, firstName?: string, fullAdminRo?: boolean, lastName?: string, nsxRight?: boolean, phoneNumber?: string, receiveAlerts?: boolean, tokenValidator?: boolean}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable the given Private Cloud user 
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/disable'): (params: {serviceName: string, userId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable the given Private Cloud user 
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/enable'): (params: {serviceName: string, userId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * metricsToken operations
   * Get Metrics Token to query vScope Graphs data 
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/metricsToken'): (params: {serviceName: string, userId: number}) => Promise<dedicatedCloud.metricsToken>;
  /**
   * List the dedicatedCloud.ObjectRight objects
   * Add a new object right to user in datacenter on Private Cloud
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight'): (params: {serviceName: string, userId: number, propagate?: boolean, right: dedicatedCloud.right.RightEnum, type: dedicatedCloud.right.UserObjectRightTypeEnum, vmwareObjectId: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeMaintenanceExecutionDate operations
   * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {serviceName: string, taskId: number, userId: number, executionDate: string}) => Promise<dedicatedCloud.Task>;
  /**
   * resetTaskState operations
   * Restart task in error.
   */
  post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState'): (params: {serviceName: string, taskId: number, userId: number, reason: string}) => Promise<dedicatedCloud.Task>;
  /**
   * objectType operations
   * Get available object types
   */
  post(path: '/dedicatedCloud/{serviceName}/vendor/objectType'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * ovhId operations
   * Get ovh id from object type
   */
  post(path: '/dedicatedCloud/{serviceName}/vendor/ovhId'): (params: {serviceName: string, objectType: dedicatedCloud.VendorObjectTypeEnum, vendorId: string}) => Promise<dedicatedCloud.vendor.OvhId>;
  /**
   * List the dedicatedCloud.VMEncryptionAccessNetwork objects
   * Add a new option user access
   */
  post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms'): (params: {serviceName: string, description?: string, ip: string, sslThumbprint: string}) => Promise<dedicatedCloud.Task>;
  /**
   * changeProperties operations
   * Change option user access properties
   */
  post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties'): (params: {kmsId: number, serviceName: string, description?: string, sslThumbprint: string}) => Promise<dedicatedCloud.Task>;
  /**
   * disable operations
   * Disable vRealize Operations option
   */
  post(path: '/dedicatedCloud/{serviceName}/vrops/disable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * enable operations
   * Enable vRealize Operations option
   */
  post(path: '/dedicatedCloud/{serviceName}/vrops/enable'): (params: {serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Network allowed to connect to the Private Cloud management interface
   * Remove this network from your Private Cloud
   */
  delete(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}'): (params: {networkAccessId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Private Cloud Datacenter
   * Remove this Datacenter from your Private Cloud. (It has to be empty in order to be removable)
   */
  delete(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}'): (params: {datacenterId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Private Cloud federation option access network
   * Remove an option user access
   */
  delete(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}'): (params: {activeDirectoryId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Trust IP which can bypass the two factor authentication
   * Remove a whitelisted ip on the two factor authentication
   */
  delete(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}'): (params: {id: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * Private Cloud User
   * Remove a given user from your Private Cloud
   */
  delete(path: '/dedicatedCloud/{serviceName}/user/{userId}'): (params: {serviceName: string, userId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * Private Cloud User object right
   * Remove an object right from user in datacenter on Private Cloud
   */
  delete(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}'): (params: {objectRightId: number, serviceName: string, userId: number}) => Promise<dedicatedCloud.Task>;
  /**
   * Private Cloud VM Encryption option access network
   * Remove an option user access
   */
  delete(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}'): (params: {kmsId: number, serviceName: string}) => Promise<dedicatedCloud.Task>;
  /**
   * vrack dedicated cloud interface
   * remove this dedicatedCloud (VmNetwork) from this vrack
   */
  delete(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}'): (params: {serviceName: string, vrack: string}) => Promise<vrack.Task>;
}
/**
 * classic Model
 */type orderPrice = order.Price;
