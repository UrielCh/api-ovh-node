import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicatedCloud Models
 * Source: https://ca.api.ovh.com/1.0/dedicatedCloud.json
 */
export namespace complexType {
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
export namespace dedicatedCloud {
    /**
     * Network allowed to connect to the Private Cloud management interface
     * interface fullName: dedicatedCloud.AllowedNetwork.AllowedNetwork
     */
    export interface AllowedNetwork {
        description?: string;
        network: string;
        networkAccessId: number;
        state: dedicatedCloudAllowedNetworkStateEnum;
    }
    /**
     * All states an Allowed Network can be in
     * type fullname: dedicatedCloud.AllowedNetworkStateEnum
     */
    export type AllowedNetworkStateEnum = "allowed" | "toDelete" | "toUpdate"
    /**
     * AutoScale configuration
     * interface fullName: dedicatedCloud.AutoScaleConfig.AutoScaleConfig
     */
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
    /**
     * Private Cloud AutoScale option
     * interface fullName: dedicatedCloud.AutoScaleVirtual.AutoScaleVirtual
     */
    export interface AutoScaleVirtual {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Backup configured on a given Datacenter
     * interface fullName: dedicatedCloud.Backup.Backup
     */
    export interface Backup {
        backupDurationInReport?: boolean;
        backupOffer?: dedicatedCloudbackupOfferTypeEnum;
        backupSizeInReport?: boolean;
        diskSizeInReport?: boolean;
        encryption?: boolean;
        fullDayInReport?: boolean;
        hostname?: string;
        mailAddress?: string;
        replicationZone?: string;
        restorePointInReport?: boolean;
        scheduleHour?: string;
        state: dedicatedCloudBackupStateEnum;
        vmwareVmId?: string;
    }
    /**
     * Private Cloud Backup Job
     * interface fullName: dedicatedCloud.BackupJob.BackupJob
     */
    export interface BackupJob {
        allocatedDisk?: number;
        backupDays?: dedicatedCloudbackupBackupDaysEnum[];
        encryption?: boolean;
        offerType?: dedicatedCloudbackupOfferTypeEnum;
        retentionTime?: number;
        state: dedicatedCloudbackupStateEnum;
        vmName?: string;
    }
    /**
     * All states a Dedicated Cloud Backup can be in
     * type fullname: dedicatedCloud.BackupStateEnum
     */
    export type BackupStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "migrating" | "removing"
    /**
     * The billing type of this Dedicated Cloud
     * type fullname: dedicatedCloud.BillingTypeEnum
     */
    export type BillingTypeEnum = "demo" | "monthly"
    /**
     * The Regional Internet Registry of this IP block
     * type fullname: dedicatedCloud.BlockRegisterEnum
     */
    export type BlockRegisterEnum = "arin" | "ripe"
    /**
     * The features available in your Private Cloud
     * interface fullName: dedicatedCloud.Capabilities.Capabilities
     */
    export interface Capabilities {
        addRessourceRightStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        backupStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        canAddUser: boolean;
        fullAdminRoUserStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        nexus1000vStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        upgradable: boolean;
        userAccessPolicyStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
    }
    /**
     * Private Cloud Cluster
     * interface fullName: dedicatedCloud.Cluster.Cluster
     */
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
    /**
     * The commercial name component
     * type fullname: dedicatedCloud.CommercialNameEnum
     */
    export type CommercialNameEnum = "DC" | "DC-ANCIENT" | "DC-ANCIENT-HDS" | "DC-ANCIENT-HIPAA" | "DC-ANCIENT-NSX" | "DC-ANCIENT-NSX-VROPS" | "DC-ANCIENT-PCIDSS" | "DC-ANCIENT-UNKNOWN" | "DC-ANCIENT-VROPS" | "DC-HDS" | "DC-HIPAA" | "DC-LEGACY" | "DC-LEGACY-HDS" | "DC-LEGACY-HIPAA" | "DC-LEGACY-NSX" | "DC-LEGACY-NSX-VROPS" | "DC-LEGACY-PCIDSS" | "DC-LEGACY-UNKNOWN" | "DC-LEGACY-VROPS" | "DC-NSX" | "DC-NSX-VROPS" | "DC-PCIDSS" | "DC-UNKNOWN" | "DC-VROPS" | "SDDC" | "SDDC-HDS" | "SDDC-HIPAA" | "SDDC-LEGACY" | "SDDC-LEGACY-HDS" | "SDDC-LEGACY-HIPAA" | "SDDC-LEGACY-PCIDSS" | "SDDC-LEGACY-UNKNOWN" | "SDDC-LEGACY-VROPS" | "SDDC-LEGACY-VROPS-WITHOUT-NSX" | "SDDC-LEGACY-WITHOUT-NSX" | "SDDC-PCIDSS" | "SDDC-UNKNOWN" | "SDDC-VROPS" | "SDDC-VROPS-WITHOUT-NSX" | "SDDC-WITHOUT-NSX" | "UNKNOWN" | "UNKNOWN-HDS" | "UNKNOWN-HIPAA" | "UNKNOWN-NSX" | "UNKNOWN-NSX-VROPS" | "UNKNOWN-PCIDSS" | "UNKNOWN-UNKNOWN" | "UNKNOWN-VROPS"
    /**
     * The commercial ranges actually available in your Private Cloud
     * interface fullName: dedicatedCloud.CommercialRange.CommercialRange
     */
    export interface CommercialRange {
        allowedHypervisorVersions: dedicatedCloudHypervisorVersionEnum[];
        allowedNetworkRoles: dedicatedCloudrightNetworkRoleEnum[];
        commercialRangeName: string;
        dedicatedCloudVersion: string;
        range?: string;
    }
    /**
     * Private Cloud Datacenter
     * interface fullName: dedicatedCloud.Datacenter.Datacenter
     */
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
    /**
     * Private Cloud Active Directory Federation option
     * interface fullName: dedicatedCloud.Federation.Federation
     */
    export interface Federation {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Private Cloud federation option access network
     * interface fullName: dedicatedCloud.FederationAccessNetwork.FederationAccessNetwork
     */
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
    /**
     * Private Cloud Filer
     * interface fullName: dedicatedCloud.Filer.Filer
     */
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
    /**
     * The generation of a Private Cloud
     * type fullname: dedicatedCloud.GenerationEnum
     */
    export type GenerationEnum = "1.0" | "2.0"
    /**
     * Private Cloud VMware Hybrid Cloud Extension option
     * interface fullName: dedicatedCloud.Hcx.Hcx
     */
    export interface Hcx {
        build?: string;
        state: dedicatedCloudoptionStateEnum;
        version?: string;
    }
    /**
     * The Private Cloud Hds option
     * interface fullName: dedicatedCloud.Hds.Hds
     */
    export interface Hds {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * The Private Cloud Hipaa option
     * interface fullName: dedicatedCloud.Hipaa.Hipaa
     */
    export interface Hipaa {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Private Cloud Host
     * interface fullName: dedicatedCloud.Host.Host
     */
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
    /**
     * Host profiles actually available in Private Cloud
     * interface fullName: dedicatedCloud.HostProfile.HostProfile
     */
    export interface HostProfile {
        id: number;
        name: string;
    }
    /**
     * Hypervisor and their availability
     * interface fullName: dedicatedCloud.HostStockHypervisor.HostStockHypervisor
     */
    export interface HostStockHypervisor {
        value: number;
        version: string;
    }
    /**
     * Processor generation and their availability
     * interface fullName: dedicatedCloud.HostStockProcGen.HostStockProcGen
     */
    export interface HostStockProcGen {
        cpuGeneration: string;
        value: dedicatedCloudHostStockHypervisor[];
    }
    /**
     * HostProfiles and their availability
     * interface fullName: dedicatedCloud.HostStockProfile.HostStockProfile
     */
    export interface HostStockProfile {
        id: number;
        name: string;
        ref: string;
        value: dedicatedCloudHostStockProcGen[];
    }
    /**
     * The Hypervisor version of this Dedicated Cloud component
     * type fullname: dedicatedCloud.HypervisorVersionEnum
     */
    export type HypervisorVersionEnum = "4.1" | "5.0" | "5.1" | "5.5" | "6.0" | "6.5" | "hv3.1" | "hvdc3.1" | "nc1.0"
    /**
     * IP Blocks associated with a Private Cloud
     * interface fullName: dedicatedCloud.Ip.Ip
     */
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
    /**
     * All countries in which an Ip Block may be ordered
     * type fullname: dedicatedCloud.IpCountriesEnum
     */
    export type IpCountriesEnum = "be" | "ca" | "ch" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "us"
    /**
     * Details about an Ip
     * interface fullName: dedicatedCloud.IpDetails.IpDetails
     */
    export interface IpDetails {
        ip: string;
        reverse?: string;
        usage: dedicatedCloudipUsageEnum;
        usageDetails?: string;
    }
    /**
     * The management interface of this Dedicated Cloud
     * type fullname: dedicatedCloud.ManagementInterfaceEnum
     */
    export type ManagementInterfaceEnum = "azure" | "openstack" | "systemcenter" | "vcloud" | "vcsa" | "vsphere"
    /**
     * The Private Cloud Nsx option
     * interface fullName: dedicatedCloud.Nsx.Nsx
     */
    export interface Nsx {
        state: dedicatedCloudoptionStateEnum;
        url?: string;
    }
    /**
     * Private Cloud User object right
     * interface fullName: dedicatedCloud.ObjectRight.ObjectRight
     */
    export interface ObjectRight {
        name: string;
        objectRightId: number;
        propagate: boolean;
        right: dedicatedCloudrightRightEnum;
        type: dedicatedCloudrightUserObjectRightTypeEnum;
        vmwareObjectId: string;
    }
    /**
     * Hypervisors actually available in Private Cloud
     * interface fullName: dedicatedCloud.Os.Os
     */
    export interface Os {
        fullName: string;
        lastModificationDate: string;
        shortName: string;
    }
    /**
     * PCC and their availability
     * interface fullName: dedicatedCloud.PccStockProfile.PccStockProfile
     */
    export interface PccStockProfile {
        count: number;
        mode: string;
        realVersion: string;
    }
    /**
     * PccZones actually available in Private Cloud
     * interface fullName: dedicatedCloud.PccZone.PccZone
     */
    export interface PccZone {
        city: string;
        countryCode: nichandle.CountryEnum;
        id: number;
        pccZone: string;
    }
    /**
     * The Private Cloud PCI-DSS option
     * interface fullName: dedicatedCloud.PciDss.PciDss
     */
    export interface PciDss {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Private management gateway deployed in your Private Cloud to block all public access
     * interface fullName: dedicatedCloud.PrivateGateway.PrivateGateway
     */
    export interface PrivateGateway {
        customerIp?: string;
        customerNetmask?: string;
        customerPortGroup?: string;
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Private Cloud Restore Point
     * interface fullName: dedicatedCloud.RestorePoint.RestorePoint
     */
    export interface RestorePoint {
        creationTime?: string;
        isCorrupted: boolean;
        restorePointId: number;
        restorePointSize: complexType.UnitAndValue<number>;
        type?: dedicatedCloudbackupBackupTypeEnum;
    }
    /**
     * Private Cloud User right
     * interface fullName: dedicatedCloud.Right.Right
     */
    export interface Right {
        canAddRessource: boolean;
        datacenterId: number;
        networkRole: dedicatedCloudrightNetworkRoleEnum;
        right: dedicatedCloudrightRightEnum;
        rightId: number;
        vmNetworkRole: dedicatedCloudrightVmNetworkRoleEnum;
    }
    /**
     * The robots used in Private Cloud
     * interface fullName: dedicatedCloud.Robot.Robot
     */
    export interface Robot {
        criticity: string;
        description?: string;
        enabled: boolean;
        name: string;
        type: string;
    }
    /**
     * List of Service Pack compliant with the current Private Cloud
     * interface fullName: dedicatedCloud.ServicePack.ServicePack
     */
    export interface ServicePack {
        name: string;
        options: string[];
    }
    /**
     * All states a Dedicated Cloud can be in
     * type fullname: dedicatedCloud.StateEnum
     */
    export type StateEnum = "available" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "provisionning" | "recycling" | "reserved" | "toDisable" | "toProvision" | "toRecycle" | "toRemove" | "toUnprovision" | "unprovisionning"
    /**
     * Operation on a Private Cloud component
     * interface fullName: dedicatedCloud.Task.Task
     */
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
    /**
     * All states a Dedicated Cloud Task can be in
     * type fullname: dedicatedCloud.TaskStateEnum
     */
    export type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo"
    /**
     * All states a Dedicated Cloud two factor authentication whitelist can be in
     * type fullname: dedicatedCloud.TwoFAWhitelistStateEnum
     */
    export type TwoFAWhitelistStateEnum = "enabled" | "enabling" | "error" | "migrating" | "removed" | "removing"
    /**
     * Private Cloud User
     * interface fullName: dedicatedCloud.User.User
     */
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
    /**
     * Open or restricted access to management interface ?
     * type fullname: dedicatedCloud.UserAccessPolicyEnum
     */
    export type UserAccessPolicyEnum = "filtered" | "open"
    /**
     * Which user will be disconnected first in case of quota of maximum connection is reached
     * type fullname: dedicatedCloud.UserLogoutPolicyEnum
     */
    export type UserLogoutPolicyEnum = "first" | "last"
    /**
     * Private Cloud VM Encryption option
     * interface fullName: dedicatedCloud.VMEncryption.VMEncryption
     */
    export interface VMEncryption {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Private Cloud VM Encryption option access network
     * interface fullName: dedicatedCloud.VMEncryptionAccessNetwork.VMEncryptionAccessNetwork
     */
    export interface VMEncryptionAccessNetwork {
        description: string;
        ip: string;
        kmsId: number;
        kmsTcpPort: number;
        sslThumbprint: string;
        state: dedicatedCloudoptionAccessNetworkStateEnum;
    }
    /**
     * The Private Cloud Vendor option
     * interface fullName: dedicatedCloud.Vendor.Vendor
     */
    export interface Vendor {
        vendorName: string;
    }
    /**
     * Dedicated Cloud vendors objects types
     * type fullname: dedicatedCloud.VendorObjectTypeEnum
     */
    export type VendorObjectTypeEnum = "cluster" | "datacenter" | "filer" | "host" | "vm"
    /**
     * Detailed version
     * interface fullName: dedicatedCloud.Version.Version
     */
    export interface Version {
        build: string;
        major: string;
        minor: string;
    }
    /**
     * Private Cloud Vlan
     * interface fullName: dedicatedCloud.Vlan.Vlan
     */
    export interface Vlan {
        name: string;
        routingRateLimit: string;
        state: dedicatedCloudvlanStateEnum;
        type: dedicatedCloudvlanTypeEnum;
        vlanId: number;
        vlanNumber: number;
    }
    /**
     * Private Cloud Virtual Machine
     * interface fullName: dedicatedCloud.Vm.Vm
     */
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
    /**
     * The Private Cloud vRealize Operations option
     * interface fullName: dedicatedCloud.Vrops.Vrops
     */
    export interface Vrops {
        state: dedicatedCloudoptionStateEnum;
        url?: string;
    }
    /**
     * Zpool and their availability
     * interface fullName: dedicatedCloud.ZpoolStockProfile.ZpoolStockProfile
     */
    export interface ZpoolStockProfile {
        minimumAvailability: string;
        profile: string;
        realCount: number;
    }
    export namespace backup {
        /**
         * Details about a backup
         * interface fullName: dedicatedCloud.backup.Backup.Backup
         */
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
        /**
         * Details about BackupCapabilities
         * interface fullName: dedicatedCloud.backup.BackupCapabilities.BackupCapabilities
         */
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
        /**
         * All the possible Days of Backup
         * type fullname: dedicatedCloud.backup.BackupDaysEnum
         */
        export type BackupDaysEnum = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"
        /**
         * All the type of a restore point
         * type fullname: dedicatedCloud.backup.BackupTypeEnum
         */
        export type BackupTypeEnum = "full" | "incremental"
        /**
         * State of the backup job
         * type fullname: dedicatedCloud.backup.JobStateEnum
         */
        export type JobStateEnum = "failed" | "running" | "stopped" | "stopping" | "success" | "unknown" | "warning"
        /**
         * All the offer type of the backup
         * type fullname: dedicatedCloud.backup.OfferTypeEnum
         */
        export type OfferTypeEnum = "advanced" | "backup" | "classic" | "legacy" | "premium"
        /**
         * All messages descriptions for the proxies optimization
         * type fullname: dedicatedCloud.backup.OptimizeMessageEnum
         */
        export type OptimizeMessageEnum = "hasMoreBackupJobs" | "hasMoreProxies" | "hasSufficientProxies" | "noBackupJobs"
        /**
         * Details about proxies Optimization
         * interface fullName: dedicatedCloud.backup.OptimizeProxies.OptimizeProxies
         */
        export interface OptimizeProxies {
            message: dedicatedCloudbackupOptimizeMessageEnum;
            numberOfProxiesDeployed: number;
            numberOfProxiesImpact: number;
            recommendation: dedicatedCloudbackupOptimizeRecommendationEnum;
        }
        /**
         * All recommendations for the proxies optimization
         * type fullname: dedicatedCloud.backup.OptimizeRecommendationEnum
         */
        export type OptimizeRecommendationEnum = "add" | "optimized" | "remove"
        /**
         * Details about a restore point
         * interface fullName: dedicatedCloud.backup.RestorePoint.RestorePoint
         */
        export interface RestorePoint {
            creationTime?: string;
            isCorrupted?: boolean;
            restorePointId: number;
            size?: complexType.UnitAndValue<number>;
            type?: dedicatedCloudbackupBackupTypeEnum;
        }
        /**
         * All the state of the backup
         * type fullname: dedicatedCloud.backup.StateEnum
         */
        export type StateEnum = "deleting" | "delivered" | "disabled" | "disabling" | "enabling" | "error" | "migrating" | "pending" | "removed" | "stopping" | "toCreate" | "toDelete" | "toDisable" | "toEnable" | "toStop" | "unknown"
    }
    export namespace capabilities {
        /**
         * All Dedicated Cloud feature status available
         * type fullname: dedicatedCloud.capabilities.FeatureStatusEnum
         */
        export type FeatureStatusEnum = "active" | "comingSoon" | "no"
    }
    export namespace cluster {
        /**
         * Details about AutoScale
         * interface fullName: dedicatedCloud.cluster.AutoScale.AutoScale
         */
        export interface AutoScale {
            autoScaleInHost: dedicatedCloudclusterAutoScaleModeEnum;
            autoScaleOutHost: dedicatedCloudclusterAutoScaleModeEnum;
            autoScaleOutStorage: dedicatedCloudclusterAutoScaleModeEnum;
            configId: number;
            id: number;
            inMaintenanceMode: boolean;
            state: dedicatedCloudoptionStateEnum;
        }
        /**
         * Modes of the AutoScale service
         * type fullname: dedicatedCloud.cluster.AutoScaleModeEnum
         */
        export type AutoScaleModeEnum = "automatic" | "manual"
        /**
         * Config status of the cluster
         * type fullname: dedicatedCloud.cluster.ClusterConfigsStatusEnum
         */
        export type ClusterConfigsStatusEnum = "disabled" | "enabled" | "unknown"
        /**
         * Config status of the cluster
         * type fullname: dedicatedCloud.cluster.ClusterDrsModeEnum
         */
        export type ClusterDrsModeEnum = "fullyAutomated" | "manual" | "partiallyAutomated"
    }
    /**
     * Private Cloud
     * interface fullName: dedicatedCloud.dedicatedCloud.dedicatedCloud
     */
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
        /**
         * Disaster Recovery Plan Types
         * type fullname: dedicatedCloud.disasterRecovery.DrpTypeEnum
         */
        export type DrpTypeEnum = "onPremise" | "ovh"
        /**
         * Information on the local datacenter
         * interface fullName: dedicatedCloud.disasterRecovery.LocalSiteDetails.LocalSiteDetails
         */
        export interface LocalSiteDetails {
            role: dedicatedClouddisasterRecoverySiteRoleEnum;
            state?: dedicatedCloudStateEnum;
            type: dedicatedClouddisasterRecoverySiteTypeEnum;
            zertoVersion: string;
            zvmIp?: string;
        }
        /**
         * State of the disaster recovery option
         * interface fullName: dedicatedCloud.disasterRecovery.Profile.Profile
         */
        export interface Profile {
            drpType?: dedicatedClouddisasterRecoveryDrpTypeEnum;
            localSiteInformation?: dedicatedClouddisasterRecoveryLocalSiteDetails;
            remoteSiteInformation?: dedicatedClouddisasterRecoveryRemoteSiteDetails;
            state: dedicatedCloudStateEnum;
            systemVersion: string;
        }
        /**
         * Information on the remote datacenter linked to the local one
         * interface fullName: dedicatedCloud.disasterRecovery.RemoteSiteDetails.RemoteSiteDetails
         */
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
        /**
         * Site manager configured mode
         * type fullname: dedicatedCloud.disasterRecovery.SiteRoleEnum
         */
        export type SiteRoleEnum = "primary" | "secondary" | "single"
        /**
         * Site manager hosting type
         * type fullname: dedicatedCloud.disasterRecovery.SiteTypeEnum
         */
        export type SiteTypeEnum = "onPremise" | "ovhPrivateCloud"
        /**
         * Zerto VPN configuration state
         * type fullname: dedicatedCloud.disasterRecovery.VpnConfigStateEnum
         */
        export type VpnConfigStateEnum = "configured" | "configuring" | "error" | "notConfigured" | "tunnelError"
    }
    export namespace filer {
        /**
         * Hourly consumption of a filer
         * interface fullName: dedicatedCloud.filer.HourlyConsumption.HourlyConsumption
         */
        export interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        /**
         * A Filer profile
         * interface fullName: dedicatedCloud.filer.Profile.Profile
         */
        export interface Profile {
            fullName: string;
            name: string;
            size: complexType.UnitAndValue<number>;
        }
        /**
         * All states a Dedicated Cloud Filer can be in
         * type fullname: dedicatedCloud.filer.StateEnum
         */
        export type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown"
    }
    export namespace host {
        /**
         * Hourly consumption of a host
         * interface fullName: dedicatedCloud.host.HourlyConsumption.HourlyConsumption
         */
        export interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        /**
         * A Host profile
         * interface fullName: dedicatedCloud.host.Profile.Profile
         */
        export interface Profile {
            core: string;
            cpu: complexType.UnitAndValue<number>;
            name: string;
            ram: complexType.UnitAndValue<number>;
        }
        /**
         * All states a Dedicated Cloud Host can be in
         * type fullname: dedicatedCloud.host.StateEnum
         */
        export type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown"
    }
    /**
     * The connection state of the host
     * type fullname: dedicatedCloud.hostSystemConnectionState
     */
    export type hostSystemConnectionState = "connected" | "disconnected" | "notResponding"
    /**
     * IP address usage
     * type fullname: dedicatedCloud.ipUsageEnum
     */
    export type ipUsageEnum = "reserved" | "vm"
    /**
     * A structure describing metrics token for vScope graphs data
     * interface fullName: dedicatedCloud.metricsToken.metricsToken
     */
    export interface metricsToken {
        opentsdbEndpoint: string;
        token: string;
        warpEndpoint: string;
    }
    export namespace option {
        /**
         * States of a Private Cloud option
         * type fullname: dedicatedCloud.option.StateEnum
         */
        export type StateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "migrating" | "unknown"
    }
    export namespace optionAccessNetwork {
        /**
         * States of a Private Cloud option
         * type fullname: dedicatedCloud.optionAccessNetwork.StateEnum
         */
        export type StateEnum = "creating" | "deleting" | "delivered" | "error" | "toCreate" | "toDelete" | "toUpdate" | "unknown" | "updating"
    }
    /**
     * A structure describing option compatibility
     * interface fullName: dedicatedCloud.optionCompatibility.optionCompatibility
     */
    export interface optionCompatibility {
        newCommercialVersion: string;
        oldCommercialVersion: string;
    }
    /**
     * A structure describing the current password policy for your Dedicated Cloud
     * interface fullName: dedicatedCloud.passwordPolicy.passwordPolicy
     */
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
    /**
     * All vCenter upgrade possibility
     * type fullname: dedicatedCloud.releaseEnum
     */
    export type releaseEnum = "major" | "minor"
    /**
     * A structure describing the Resource's new price
     * interface fullName: dedicatedCloud.resourceNewPrices.resourceNewPrices
     */
    export interface resourceNewPrices {
        resources?: dedicatedCloudresourceNewPricesEntry[];
    }
    /**
     * A structure describing the Resource's new price
     * interface fullName: dedicatedCloud.resourceNewPricesEntry.resourceNewPricesEntry
     */
    export interface resourceNewPricesEntry {
        billingType: dedicatedCloudressourcesBillingTypeEnum;
        changed: boolean;
        name: string;
        newPrice: order.Price;
        oldPrice: order.Price;
        resourceType: dedicatedCloudressourcesResourceTypeEnum;
    }
    export namespace ressources {
        /**
         * The billing type of this Dedicated Cloud ressource
         * type fullname: dedicatedCloud.ressources.BillingTypeEnum
         */
        export type BillingTypeEnum = "freeSpare" | "hourly" | "monthly" | "undefined"
        /**
         * The resource type of this Dedicated Cloud ressource
         * type fullname: dedicatedCloud.ressources.ResourceTypeEnum
         */
        export type ResourceTypeEnum = "host" | "storage"
    }
    export namespace right {
        /**
         * Determine how this user can act on the Dedicated Cloud vLans or vxLans
         * type fullname: dedicatedCloud.right.NetworkRoleEnum
         */
        export type NetworkRoleEnum = "admin" | "manager" | "noAccess" | "readonly"
        /**
         * All rights a Dedicated Cloud user may be associated with
         * type fullname: dedicatedCloud.right.RightEnum
         */
        export type RightEnum = "admin" | "disabled" | "readonly" | "readwrite"
        /**
         * All types of objects handled in objectRights
         * type fullname: dedicatedCloud.right.UserObjectRightTypeEnum
         */
        export type UserObjectRightTypeEnum = "cluster" | "datastore" | "dvportgroup" | "folder" | "pool" | "vm"
        /**
         * Determine how this user can act on the Dedicated Cloud vmNetwork
         * type fullname: dedicatedCloud.right.VmNetworkRoleEnum
         */
        export type VmNetworkRoleEnum = "admin" | "noAccess" | "readonly"
    }
    /**
     * List of possible service pack
     * type fullname: dedicatedCloud.servicePackEnum
     */
    export type servicePackEnum = "default" | "hds" | "hipaa" | "legacy" | "nsx" | "nsx-and-vrops" | "pcidss" | "vrops"
    /**
     * List of possible state of the service pack
     * type fullname: dedicatedCloud.servicePackStateEnum
     */
    export type servicePackStateEnum = "activating" | "active" | "error" | "waitingForCustomer"
    /**
     * Service pack informations
     * interface fullName: dedicatedCloud.servicePackStatus.servicePackStatus
     */
    export interface servicePackStatus {
        name: dedicatedCloudservicePackEnum;
        state: dedicatedCloudservicePackStateEnum;
    }
    /**
     * Trust IP which can bypass the two factor authentication
     * interface fullName: dedicatedCloud.twoFAWhitelist.twoFAWhitelist
     */
    export interface twoFAWhitelist {
        description: string;
        id: number;
        ip: string;
        state: dedicatedCloudTwoFAWhitelistStateEnum;
    }
    export namespace user {
        /**
         * All activation states a Dedicated Cloud User can have
         * type fullname: dedicatedCloud.user.ActivationStateEnum
         */
        export type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable"
        /**
         * All states a Dedicated Cloud User can be in
         * type fullname: dedicatedCloud.user.StateEnum
         */
        export type StateEnum = "creating" | "deleting" | "delivered" | "error"
    }
    /**
     * A structure describing the vCenter available upgrade for your Dedicated Cloud
     * interface fullName: dedicatedCloud.vcenter.vcenter
     */
    export interface vcenter {
        currentVersion: dedicatedCloudVersion;
        lastMajor: dedicatedCloudVersion;
        lastMinor: dedicatedCloudVersion;
    }
    export namespace vendor {
        /**
         * Representation of a Vendor object in OVH API
         * interface fullName: dedicatedCloud.vendor.OvhId.OvhId
         */
        export interface OvhId {
            datacenterId?: number;
            filerId?: number;
            hostId?: number;
            vmId?: number;
        }
    }
    /**
     * The connectable virtual device status
     * type fullname: dedicatedCloud.virtualDeviceConnectInfoStatus
     */
    export type virtualDeviceConnectInfoStatus = "ok" | "recoverableError" | "unrecoverableError" | "untried"
    /**
     * A structure describing the cdrom configuration of a virtual machine
     * interface fullName: dedicatedCloud.virtualMachineCdrom.virtualMachineCdrom
     */
    export interface virtualMachineCdrom {
        connected?: boolean;
        iso?: string;
    }
    /**
     * The fault tolerance state of the virtual machine
     * type fullname: dedicatedCloud.virtualMachineFaultToleranceState
     */
    export type virtualMachineFaultToleranceState = "disabled" | "enabled" | "needSecondary" | "notConfigured" | "running" | "starting"
    /**
     * The power state of the virtual machine
     * type fullname: dedicatedCloud.virtualMachinePowerState
     */
    export type virtualMachinePowerState = "deleted" | "poweredOff" | "poweredOn" | "suspended"
    export namespace vlan {
        /**
         * All states a Dedicated Cloud Vlan can be in
         * type fullname: dedicatedCloud.vlan.StateEnum
         */
        export type StateEnum = "available" | "delivered" | "disabled" | "error" | "removing" | "reserved"
        /**
         * This Dedicated Cloud vlan type
         * type fullname: dedicatedCloud.vlan.TypeEnum
         */
        export type TypeEnum = "admin" | "free" | "paid"
    }
    /**
     * A structure describing filers of a the virtual machine
     * interface fullName: dedicatedCloud.vmFiler.vmFiler
     */
    export interface vmFiler {
        committed: number;
        disks: dedicatedCloudvmFilerDisk[];
        name: string;
    }
    /**
     * A structure describing filer disks of a the virtual machine
     * interface fullName: dedicatedCloud.vmFilerDisk.vmFilerDisk
     */
    export interface vmFilerDisk {
        capacity: number;
        id: string;
    }
    /**
     * A structure describing the network of a the virtual machine
     * interface fullName: dedicatedCloud.vmNetwork.vmNetwork
     */
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
    /**
     * A structure describing the backing network of a the virtual machine
     * interface fullName: dedicatedCloud.vmNetworkBacking.vmNetworkBacking
     */
    export interface vmNetworkBacking {
        deviceName?: string;
        portGroupKey?: string;
        portKey?: string;
        switchUuid?: string;
        type: dedicatedCloudvmNetworkBackingTypeEnum;
        useAutoDetect?: boolean;
        valueMoref?: string;
    }
    /**
     * The type of the network backing
     * type fullname: dedicatedCloud.vmNetworkBackingTypeEnum
     */
    export type vmNetworkBackingTypeEnum = "DVS" | "VSS"
}
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
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
     * vrack dedicated cloud interface
     * interface fullName: vrack.dedicatedCloud.dedicatedCloud
     */
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
 * Api model for /dedicatedCloud
 */
export interface DedicatedCloud {
    /**
     * List available services
     * GET /dedicatedCloud
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    commercialRange: {
        /**
         * List of commercial Ranges available in a Dedicated Cloud
         * GET /dedicatedCloud/commercialRange
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(commercialRangeName: string): {
            /**
             * Get this object properties
             * GET /dedicatedCloud/commercialRange/{commercialRangeName}
             */
            $get(): Promise<dedicatedCloud.CommercialRange>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        };
    }
    location: {
        /**
         * List of locations available in a Dedicated Cloud
         * GET /dedicatedCloud/location
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        $(pccZone: string): {
            /**
             * Get this object properties
             * GET /dedicatedCloud/location/{pccZone}
             */
            $get(): Promise<dedicatedCloud.PccZone>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            hostProfile: {
                /**
                 * Offered host profile
                 * GET /dedicatedCloud/location/{pccZone}/hostProfile
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /dedicatedCloud/location/{pccZone}/hostProfile/{id}
                     */
                    $get(): Promise<dedicatedCloud.HostProfile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            hypervisor: {
                /**
                 * Offered hypervisor version
                 * GET /dedicatedCloud/location/{pccZone}/hypervisor
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(shortName: string): {
                    /**
                     * Get this object properties
                     * GET /dedicatedCloud/location/{pccZone}/hypervisor/{shortName}
                     */
                    $get(): Promise<dedicatedCloud.Os>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            stock: {
                host: {
                    /**
                     * Available host stock
                     * GET /dedicatedCloud/location/{pccZone}/stock/host
                     */
                    $get(params?: { minYear?: number }): Promise<dedicatedCloud.HostStockProfile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                pcc: {
                    /**
                     * Available PCC stock
                     * GET /dedicatedCloud/location/{pccZone}/stock/pcc
                     */
                    $get(): Promise<dedicatedCloud.PccStockProfile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                zpool: {
                    /**
                     * Available zpool stock
                     * GET /dedicatedCloud/location/{pccZone}/stock/zpool
                     */
                    $get(params?: { profileFilter?: string }): Promise<dedicatedCloud.ZpoolStockProfile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
        };
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /dedicatedCloud/{serviceName}
         */
        $get(): Promise<dedicatedCloud.dedicatedCloud>;
        /**
         * Alter this object properties
         * PUT /dedicatedCloud/{serviceName}
         */
        $put(params?: { advancedSecurity?: boolean, bandwidth?: string, billingType?: dedicatedCloudBillingTypeEnum, certifiedInterfaceUrl?: string, commercialRange?: string, description?: string, generation?: dedicatedCloudGenerationEnum, location?: string, managementInterface?: dedicatedCloudManagementInterfaceEnum, serviceName?: string, servicePackName?: string, spla?: boolean, sslV3?: boolean, state?: dedicatedCloudStateEnum, userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number, vScopeUrl?: string, version?: dedicatedCloudVersion, webInterfaceUrl?: string }): Promise<dedicatedCloud.Task>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        allowedNetwork: {
            /**
             * Networks allowed to access to this Private Cloud management interface
             * GET /dedicatedCloud/{serviceName}/allowedNetwork
             */
            $get(): Promise<number[]>;
            /**
             * Create a new Allowed network for your dedicatedCloud
             * POST /dedicatedCloud/{serviceName}/allowedNetwork
             */
            $post(params: { description?: string, network: string }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(networkAccessId: number): {
                /**
                 * Remove this network from your Private Cloud
                 * DELETE /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                 */
                $get(): Promise<dedicatedCloud.AllowedNetwork>;
                /**
                 * Alter this object properties
                 * PUT /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                 */
                $put(params?: { description?: string, network?: string, networkAccessId?: number, state?: dedicatedCloudAllowedNetworkStateEnum }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                task: {
                    /**
                     * Tasks associated with this allowed network
                     * GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                             * POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        resetTaskState: {
                            /**
                             * Restart task in error.
                             * POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        capabilities: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/capabilities
             */
            $get(): Promise<dedicatedCloud.Capabilities>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        changeProperties: {
            /**
             * Update this Private Cloud properties.
             * POST /dedicatedCloud/{serviceName}/changeProperties
             */
            $post(params?: { description?: string, sslV3?: boolean, userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        commercialRange: {
            compliance: {
                /**
                 * Get the name of the commercial ranges compliant with your Private Cloud
                 * GET /dedicatedCloud/{serviceName}/commercialRange/compliance
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            orderable: {
                /**
                 * Get the name of the commercial ranges orderable in your Private Cloud
                 * GET /dedicatedCloud/{serviceName}/commercialRange/orderable
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /dedicatedCloud/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        datacenter: {
            /**
             * Datacenters associated with this Private Cloud
             * GET /dedicatedCloud/{serviceName}/datacenter
             */
            $get(): Promise<number[]>;
            /**
             * Add a new Datacenter in your Private Cloud
             * POST /dedicatedCloud/{serviceName}/datacenter
             */
            $post(params: { commercialRangeName: string, vrackName?: string }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(datacenterId: number): {
                /**
                 * Remove this Datacenter from your Private Cloud. (It has to be empty in order to be removable)
                 * DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                 */
                $get(): Promise<dedicatedCloud.Datacenter>;
                /**
                 * Alter this object properties
                 * PUT /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                 */
                $put(params?: { commercialName?: dedicatedCloudCommercialNameEnum, commercialRangeName?: string, datacenterId?: number, description?: string, horizonViewName?: string, isRemovable?: boolean, name?: string, version?: string }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                backup: {
                    /**
                     * Get this object properties
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup
                     */
                    $get(): Promise<dedicatedCloud.Backup>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    canOptimizeProxies: {
                        /**
                         * Generates recommendation for Backup Proxies optimization
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/canOptimizeProxies
                         */
                        $get(): Promise<dedicatedCloud.backup.OptimizeProxies>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    changeProperties: {
                        /**
                         * Edit the backup on a Private Cloud
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties
                         */
                        $post(params: { backupDurationInReport: boolean, backupOffer: dedicatedCloudbackupOfferTypeEnum, backupSizeInReport: boolean, diskSizeInReport: boolean, fullDayInReport: boolean, mailAddress?: string, restorePointInReport: boolean, scheduleHour?: string }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    disable: {
                        /**
                         * Disable backup solution on a Private Cloud
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
                         */
                        $post(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    enable: {
                        /**
                         * Enable backup solution on a Private Cloud
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable
                         */
                        $post(params?: { backupOffer?: dedicatedCloudbackupOfferTypeEnum }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    offerCapabilities: {
                        /**
                         * List backup offer capabilities
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/offerCapabilities
                         */
                        $get(): Promise<dedicatedCloud.backup.BackupCapabilities[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    optimizeProxies: {
                        /**
                         * Optimizes number of Backup Proxies required for given Datacenter
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/optimizeProxies
                         */
                        $post(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                checkBackupJobs: {
                    /**
                     * Check whether your backup jobs are correctly set in your current datacenter, use this when your virtual machines have been migrated through another datacenter
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                disasterRecovery: {
                    zerto: {
                        disable: {
                            /**
                             * Disable Zerto
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable
                             */
                            $post(params: { secondaryDatacenterId: number, secondaryServiceName: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        enable: {
                            /**
                             * Enable Zerto replication between 2 OVH dedicated Clouds
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable
                             */
                            $post(params: { primaryEndpointIp: string, secondaryDatacenterId: number, secondaryEndpointIp: string, secondaryServiceName: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        generateZsspPassword: {
                            /**
                             * Generate a new password for Zerto Self Service Portal and receive it by email.
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        state: {
                            /**
                             * Get the current state of Zerto deployment on your dedicated Cloud.
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state
                             */
                            $post(): Promise<dedicatedCloud.disasterRecovery.Profile>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        status: {
                            /**
                             * Get the current state of Zerto deployment on your dedicated Cloud.
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/status
                             */
                            $get(): Promise<dedicatedCloud.disasterRecovery.Profile>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    }
                    zertoSingle: {
                        configureVpn: {
                            /**
                             * Configure vpn between your OVH Private Cloud and your onsite infrastructure
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn
                             */
                            $post(params: { preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteVraNetwork?: string, remoteZvmInternalIp: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        defaultLocalVraNetwork: {
                            /**
                             * Get the default localVraNetwork subnet suggested by OVH
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork
                             */
                            $get(): Promise<string>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        disable: {
                            /**
                             * Disable Single site Zerto
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        enable: {
                            /**
                             * Enable Zerto replication between your OVH Private Cloud and your onsite infrastructure
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable
                             */
                            $post(params: { localVraNetwork: string, ovhEndpointIp: string, remoteVraNetwork: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    }
                }
                filer: {
                    /**
                     * Filers associated with this Datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(filerId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
                         */
                        $get(): Promise<dedicatedCloud.Filer>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        hourlyConsumption: {
                            /**
                             * Hourly consumption associated with this Filer
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption
                             */
                            $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        remove: {
                            /**
                             * Remove the filer from your Private Cloud.
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        task: {
                            /**
                             * Tasks associated with this Filer
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task
                             */
                            $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(taskId: number): {
                                /**
                                 * Get this object properties
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}
                                 */
                                $get(): Promise<dedicatedCloud.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                changeMaintenanceExecutionDate: {
                                    /**
                                     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate
                                     */
                                    $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                }
                                resetTaskState: {
                                    /**
                                     * Restart task in error.
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState
                                     */
                                    $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                }
                            };
                        }
                    };
                }
                host: {
                    /**
                     * Hosts associated with this Datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(hostId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
                         */
                        $get(): Promise<dedicatedCloud.Host>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        addHostSpare: {
                            /**
                             * Add a spare host to your Private Cloud.
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        hourlyConsumption: {
                            /**
                             * Hourly consumption associated with this host.
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption
                             */
                            $get(): Promise<dedicatedCloud.host.HourlyConsumption>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        remove: {
                            /**
                             * Remove the host from your Private Cloud.
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        task: {
                            /**
                             * Tasks associated with this Host
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task
                             */
                            $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(taskId: number): {
                                /**
                                 * Get this object properties
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}
                                 */
                                $get(): Promise<dedicatedCloud.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                changeMaintenanceExecutionDate: {
                                    /**
                                     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate
                                     */
                                    $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                }
                                resetTaskState: {
                                    /**
                                     * Restart task in error.
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState
                                     */
                                    $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                }
                            };
                        }
                    };
                }
                orderNewFilerHourly: {
                    /**
                     * Order a new hourly Filer in a given Datacenter
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly
                     */
                    $post(params: { name: string }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                orderNewHostHourly: {
                    /**
                     * Order a new hourly Host in a given Datacenter
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly
                     */
                    $post(params: { name: string, vmwareClusterId?: string }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                orderableFilerProfiles: {
                    /**
                     * List available filers in a given Private Cloud Datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles
                     */
                    $get(): Promise<dedicatedCloud.filer.Profile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                orderableHostProfiles: {
                    /**
                     * List available hosts in a given Private Cloud Datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles
                     */
                    $get(): Promise<dedicatedCloud.host.Profile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                privateGateway: {
                    /**
                     * Get this object properties
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway
                     */
                    $get(): Promise<dedicatedCloud.PrivateGateway>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    disable: {
                        /**
                         * Remove the private gateway in your Private Cloud and open public access.
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable
                         */
                        $post(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    enable: {
                        /**
                         * Deploy a private gateway on your Private Cloud to block all public access
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable
                         */
                        $post(params: { ip: string, netmask: string, portgroup: string }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                task: {
                    /**
                     * Tasks associated with this Datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        resetTaskState: {
                            /**
                             * Restart task in error.
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
                vm: {
                    /**
                     * Virtual machiness associated with this Datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(vmId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
                         */
                        $get(): Promise<dedicatedCloud.Vm>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        backupJob: {
                            /**
                             * Get this object properties
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob
                             */
                            $get(): Promise<dedicatedCloud.BackupJob>;
                            /**
                             * Edit a backup job
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob
                             */
                            $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            disable: {
                                /**
                                 * Disable backup solution on this virtual Machine
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable
                                 */
                                $post(): Promise<dedicatedCloud.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            enable: {
                                /**
                                 * Enable backup solution on this virtual Machine
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable
                                 */
                                $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            restorePoints: {
                                /**
                                 * Restore point associated to this Backup Job
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(restorePointId: number): {
                                    /**
                                     * Get this object properties
                                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}
                                     */
                                    $get(): Promise<dedicatedCloud.RestorePoint>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    restore: {
                                        /**
                                         * Restore this restore point
                                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore
                                         */
                                        $post(params: { filerId: number }): Promise<dedicatedCloud.Task>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    }
                                };
                            }
                        }
                        disableBackup: {
                            /**
                             * Disable backup on this virtual Machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        editBackup: {
                            /**
                             * Edit backup on this virtual Machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup
                             */
                            $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        enableBackup: {
                            /**
                             * Enable backup on this virtual Machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup
                             */
                            $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        restoreBackup: {
                            /**
                             * Restore this restore point
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup
                             */
                            $post(params: { filerId: number, restorePointId: number }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        federation: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/federation
             */
            $get(): Promise<dedicatedCloud.Federation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            activeDirectory: {
                /**
                 * Active Directories linked to this Private Cloud
                 * GET /dedicatedCloud/{serviceName}/federation/activeDirectory
                 */
                $get(): Promise<number[]>;
                /**
                 * Add a new option user access
                 * POST /dedicatedCloud/{serviceName}/federation/activeDirectory
                 */
                $post(params: { baseDnForGroups: string, baseDnForUsers: string, description?: string, domainAlias: string, domainName: string, ip: string, password: string, username: string }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(activeDirectoryId: number): {
                    /**
                     * Remove an option user access
                     * DELETE /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}
                     */
                    $delete(): Promise<dedicatedCloud.Task>;
                    /**
                     * Get this object properties
                     * GET /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}
                     */
                    $get(): Promise<dedicatedCloud.FederationAccessNetwork>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changeProperties: {
                        /**
                         * Change Active Directory properties
                         * POST /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties
                         */
                        $post(params: { description?: string, password: string, username: string }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    grantActiveDirectoryUser: {
                        /**
                         * Grant Active Directory user
                         * POST /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser
                         */
                        $post(params: { username: string }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
        }
        filer: {
            /**
             * Filers mounted on all Datacenters of your Private Cloud Vsphere
             * GET /dedicatedCloud/{serviceName}/filer
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(filerId: number): {
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/filer/{filerId}
                 */
                $get(): Promise<dedicatedCloud.Filer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                hourlyConsumption: {
                    /**
                     * Hourly consumption associated with this Filer
                     * GET /dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption
                     */
                    $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                remove: {
                    /**
                     * Remove the filer from your Private Cloud.
                     * POST /dedicatedCloud/{serviceName}/filer/{filerId}/remove
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                task: {
                    /**
                     * Tasks associated with this Filer
                     * GET /dedicatedCloud/{serviceName}/filer/{filerId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                             * POST /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        resetTaskState: {
                            /**
                             * Restart task in error.
                             * POST /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        globalTasks: {
            /**
             * Get filtered tasks associated with this Private Cloud
             * GET /dedicatedCloud/{serviceName}/globalTasks
             */
            $get(params?: { datacenterId?: number, endDate_from?: string, endDate_to?: string, executionDate_from?: string, executionDate_to?: string, filerId?: number, hostId?: number, lastModificationDate_from?: string, lastModificationDate_to?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: dedicatedCloudTaskStateEnum[], userId?: number, vlanId?: number }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        hcx: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/hcx
             */
            $get(): Promise<dedicatedCloud.Hcx>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            canBeDisabled: {
                /**
                 * Check if VMware Hybrid Cloud Extension option can be disabled
                 * GET /dedicatedCloud/{serviceName}/hcx/canBeDisabled
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canBeEnabled: {
                /**
                 * Check if VMware Hybrid Cloud Extension option can be enabled
                 * GET /dedicatedCloud/{serviceName}/hcx/canBeEnabled
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            disable: {
                /**
                 * Disable VMware Hybrid Cloud Extension option
                 * POST /dedicatedCloud/{serviceName}/hcx/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enable: {
                /**
                 * Enable VMware Hybrid Cloud Extension option
                 * POST /dedicatedCloud/{serviceName}/hcx/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        hds: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/hds
             */
            $get(): Promise<dedicatedCloud.Hds>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            canBeDisabled: {
                /**
                 * Check if Hds option can be disabled
                 * GET /dedicatedCloud/{serviceName}/hds/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canBeEnabled: {
                /**
                 * Check if Hds option can be enabled
                 * GET /dedicatedCloud/{serviceName}/hds/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            disable: {
                /**
                 * Disable Hds option
                 * POST /dedicatedCloud/{serviceName}/hds/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enable: {
                /**
                 * Enable Hds option
                 * POST /dedicatedCloud/{serviceName}/hds/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        hipaa: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/hipaa
             */
            $get(): Promise<dedicatedCloud.Hipaa>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            canBeDisabled: {
                /**
                 * Check if Hipaa option can be disabled
                 * GET /dedicatedCloud/{serviceName}/hipaa/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canBeEnabled: {
                /**
                 * Check if Hipaa option can be enabled
                 * GET /dedicatedCloud/{serviceName}/hipaa/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            disable: {
                /**
                 * Disable Hipaa option
                 * POST /dedicatedCloud/{serviceName}/hipaa/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enable: {
                /**
                 * Enable Hipaa option
                 * POST /dedicatedCloud/{serviceName}/hipaa/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        ip: {
            /**
             * Ip Blocks attached to this Private Cloud
             * GET /dedicatedCloud/{serviceName}/ip
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(network: string): {
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/ip/{network}
                 */
                $get(): Promise<dedicatedCloud.Ip>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                details: {
                    /**
                     * List details about this IP Block
                     * GET /dedicatedCloud/{serviceName}/ip/{network}/details
                     */
                    $get(): Promise<dedicatedCloud.IpDetails[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                task: {
                    /**
                     * Tasks associated with this IP Block
                     * GET /dedicatedCloud/{serviceName}/ip/{network}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                             * POST /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        resetTaskState: {
                            /**
                             * Restart task in error.
                             * POST /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        newPrices: {
            /**
             * Get the new Prices for your Private Cloud
             * GET /dedicatedCloud/{serviceName}/newPrices
             */
            $get(): Promise<dedicatedCloud.resourceNewPrices>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        nsx: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/nsx
             */
            $get(): Promise<dedicatedCloud.Nsx>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            canBeDisabled: {
                /**
                 * Check if Nsx option can be disabled
                 * GET /dedicatedCloud/{serviceName}/nsx/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canBeEnabled: {
                /**
                 * Check if Nsx option can be enabled
                 * GET /dedicatedCloud/{serviceName}/nsx/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            disable: {
                /**
                 * Disable Nsx option
                 * POST /dedicatedCloud/{serviceName}/nsx/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enable: {
                /**
                 * Enable Nsx option
                 * POST /dedicatedCloud/{serviceName}/nsx/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        orderNewFilerHourly: {
            /**
             * Order a new hourly Filer mounted in every Datacenter of a given Private Cloud
             * POST /dedicatedCloud/{serviceName}/orderNewFilerHourly
             */
            $post(params: { name: string }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        orderableIpCountries: {
            /**
             * Get the countries you can select in /order/dedicatedCloud/{serviceName}/ip
             * GET /dedicatedCloud/{serviceName}/orderableIpCountries
             */
            $get(): Promise<dedicatedCloud.IpCountriesEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        passwordPolicy: {
            /**
             * Get the current password policy for your Private Cloud
             * GET /dedicatedCloud/{serviceName}/passwordPolicy
             */
            $get(): Promise<dedicatedCloud.passwordPolicy>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        pcidss: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/pcidss
             */
            $get(): Promise<dedicatedCloud.PciDss>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            canBeDisabled: {
                /**
                 * Check if PCI-DSS option can be disabled
                 * GET /dedicatedCloud/{serviceName}/pcidss/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canBeEnabled: {
                /**
                 * Check if PCI-DSS option can be enabled
                 * GET /dedicatedCloud/{serviceName}/pcidss/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            disable: {
                /**
                 * Disable PCI-DSS option
                 * POST /dedicatedCloud/{serviceName}/pcidss/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enable: {
                /**
                 * Enable PCI-DSS option
                 * POST /dedicatedCloud/{serviceName}/pcidss/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        resetTriggeredAlarm: {
            /**
             * Reset all triggered alarms on PCC
             * POST /dedicatedCloud/{serviceName}/resetTriggeredAlarm
             */
            $post(): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        robot: {
            /**
             * Robots that can run on this Private Cloud
             * GET /dedicatedCloud/{serviceName}/robot
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(name: string): {
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/robot/{name}
                 */
                $get(): Promise<dedicatedCloud.Robot>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /dedicatedCloud/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        servicePack: {
            /**
             * Retrieve the service pack informations
             * GET /dedicatedCloud/{serviceName}/servicePack
             */
            $get(): Promise<dedicatedCloud.servicePackStatus>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        servicePacks: {
            /**
             * Service Pack compliant with the current Private Cloud
             * GET /dedicatedCloud/{serviceName}/servicePacks
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(name: string): {
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/servicePacks/{name}
                 */
                $get(): Promise<dedicatedCloud.ServicePack>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        task: {
            /**
             * Tasks associated with this Private Cloud
             * GET /dedicatedCloud/{serviceName}/task
             */
            $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(taskId: number): {
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/task/{taskId}
                 */
                $get(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changeMaintenanceExecutionDate: {
                    /**
                     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                     * POST /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
                     */
                    $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                resetTaskState: {
                    /**
                     * Restart task in error.
                     * POST /dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState
                     */
                    $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
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
             * POST /dedicatedCloud/{serviceName}/terminate
             */
            $post(): Promise<string>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        twoFAWhitelist: {
            /**
             * Ip allowed to bypass the two factor authentication on this Private Cloud management interface
             * GET /dedicatedCloud/{serviceName}/twoFAWhitelist
             */
            $get(): Promise<number[]>;
            /**
             * Add a whitelisted ip on the two factor authentication
             * POST /dedicatedCloud/{serviceName}/twoFAWhitelist
             */
            $post(params: { description: string, ip: string }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Remove a whitelisted ip on the two factor authentication
                 * DELETE /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
                 */
                $get(): Promise<dedicatedCloud.twoFAWhitelist>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changeProperties: {
                    /**
                     * Change Private Cloud Two facter authentication whitelist properties
                     * POST /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties
                     */
                    $post(params?: { description?: string }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        upgradeHypervisor: {
            /**
             * Upgrade your hypervisor to the next released version
             * POST /dedicatedCloud/{serviceName}/upgradeHypervisor
             */
            $post(): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        upgradeVcenter: {
            /**
             * Upgrade your vCenter to the next released version
             * POST /dedicatedCloud/{serviceName}/upgradeVcenter
             */
            $post(params?: { release?: dedicatedCloud.releaseEnum }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        user: {
            /**
             * Private Cloud users
             * GET /dedicatedCloud/{serviceName}/user
             */
            $get(params?: { name?: string }): Promise<number[]>;
            /**
             * Create a new User in your Private Cloud
             * POST /dedicatedCloud/{serviceName}/user
             */
            $post(params: { canAddRessource?: boolean, canManageRights?: boolean, email?: string, expirationDate?: string, firstName?: string, lastName?: string, name: string, networkRole?: dedicatedCloudrightNetworkRoleEnum, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: dedicatedCloudrightRightEnum, tokenValidator?: boolean, vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(userId: number): {
                /**
                 * Remove a given user from your Private Cloud
                 * DELETE /dedicatedCloud/{serviceName}/user/{userId}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/user/{userId}
                 */
                $get(): Promise<dedicatedCloud.User>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                changePassword: {
                    /**
                     * Change Private Cloud user password
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/changePassword
                     */
                    $post(params?: { password?: string }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                changeProperties: {
                    /**
                     * Change Private Cloud user properties
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/changeProperties
                     */
                    $post(params?: { canManageIpFailOvers?: boolean, canManageNetwork?: boolean, canManageRights?: boolean, email?: string, firstName?: string, fullAdminRo?: boolean, lastName?: string, nsxRight?: boolean, phoneNumber?: string, receiveAlerts?: boolean, tokenValidator?: boolean }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                disable: {
                    /**
                     * Disable the given Private Cloud user 
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/disable
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                enable: {
                    /**
                     * Enable the given Private Cloud user 
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/enable
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                metricsToken: {
                    /**
                     * Get Metrics Token to query vScope Graphs data 
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/metricsToken
                     */
                    $post(): Promise<dedicatedCloud.metricsToken>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                objectRight: {
                    /**
                     * User rights on an object
                     * GET /dedicatedCloud/{serviceName}/user/{userId}/objectRight
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add a new object right to user in datacenter on Private Cloud
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/objectRight
                     */
                    $post(params: { propagate?: boolean, right: dedicatedCloudrightRightEnum, type: dedicatedCloudrightUserObjectRightTypeEnum, vmwareObjectId: string }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(objectRightId: number): {
                        /**
                         * Remove an object right from user in datacenter on Private Cloud
                         * DELETE /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}
                         */
                        $delete(): Promise<dedicatedCloud.Task>;
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}
                         */
                        $get(): Promise<dedicatedCloud.ObjectRight>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                right: {
                    /**
                     * User rights in a given Datacenters
                     * GET /dedicatedCloud/{serviceName}/user/{userId}/right
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(rightId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
                         */
                        $get(): Promise<dedicatedCloud.Right>;
                        /**
                         * Alter this object properties
                         * PUT /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
                         */
                        $put(params?: { canAddRessource?: boolean, datacenterId?: number, networkRole?: dedicatedCloudrightNetworkRoleEnum, right?: dedicatedCloudrightRightEnum, rightId?: number, vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
                task: {
                    /**
                     * Tasks associated with this User
                     * GET /dedicatedCloud/{serviceName}/user/{userId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(taskId: number): {
                        /**
                         * Get this object properties
                         * GET /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
                             * POST /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        resetTaskState: {
                            /**
                             * Restart task in error.
                             * POST /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
            };
        }
        vcenterVersion: {
            /**
             * Get available upgrade for your vCenter
             * GET /dedicatedCloud/{serviceName}/vcenterVersion
             */
            $get(): Promise<dedicatedCloud.vcenter>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        vendor: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/vendor
             */
            $get(): Promise<dedicatedCloud.Vendor>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            objectType: {
                /**
                 * Get available object types
                 * POST /dedicatedCloud/{serviceName}/vendor/objectType
                 */
                $post(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            ovhId: {
                /**
                 * Get ovh id from object type
                 * POST /dedicatedCloud/{serviceName}/vendor/ovhId
                 */
                $post(params: { objectType: dedicatedCloud.VendorObjectTypeEnum, vendorId: string }): Promise<dedicatedCloud.vendor.OvhId>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        vlan: {
            /**
             * Private Cloud vlans
             * GET /dedicatedCloud/{serviceName}/vlan
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(vlanId: number): {
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/vlan/{vlanId}
                 */
                $get(): Promise<dedicatedCloud.Vlan>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        vmEncryption: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/vmEncryption
             */
            $get(): Promise<dedicatedCloud.VMEncryption>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            kms: {
                /**
                 * VM Encryption KMS linked to this Private Cloud
                 * GET /dedicatedCloud/{serviceName}/vmEncryption/kms
                 */
                $get(): Promise<number[]>;
                /**
                 * Add a new option user access
                 * POST /dedicatedCloud/{serviceName}/vmEncryption/kms
                 */
                $post(params: { description?: string, ip: string, sslThumbprint: string }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(kmsId: number): {
                    /**
                     * Remove an option user access
                     * DELETE /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
                     */
                    $delete(): Promise<dedicatedCloud.Task>;
                    /**
                     * Get this object properties
                     * GET /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
                     */
                    $get(): Promise<dedicatedCloud.VMEncryptionAccessNetwork>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changeProperties: {
                        /**
                         * Change option user access properties
                         * POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties
                         */
                        $post(params: { description?: string, sslThumbprint: string }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
        }
        vrack: {
            /**
             * This Private Cloud vrack
             * GET /dedicatedCloud/{serviceName}/vrack
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(vrack: string): {
                /**
                 * remove this dedicatedCloud (VmNetwork) from this vrack
                 * DELETE /dedicatedCloud/{serviceName}/vrack/{vrack}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get this object properties
                 * GET /dedicatedCloud/{serviceName}/vrack/{vrack}
                 */
                $get(): Promise<vrack.dedicatedCloud>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        vrops: {
            /**
             * Get this object properties
             * GET /dedicatedCloud/{serviceName}/vrops
             */
            $get(): Promise<dedicatedCloud.Vrops>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            canBeDisabled: {
                /**
                 * Check if vRealize Operations option can be disabled
                 * GET /dedicatedCloud/{serviceName}/vrops/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            canBeEnabled: {
                /**
                 * Check if vRealize Operations option can be enabled
                 * GET /dedicatedCloud/{serviceName}/vrops/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            disable: {
                /**
                 * Disable vRealize Operations option
                 * POST /dedicatedCloud/{serviceName}/vrops/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            enable: {
                /**
                 * Enable vRealize Operations option
                 * POST /dedicatedCloud/{serviceName}/vrops/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
type dedicatedCloudbackupOptimizeMessageEnum = dedicatedCloud.backup.OptimizeMessageEnum;
type dedicatedCloudbackupOptimizeRecommendationEnum = dedicatedCloud.backup.OptimizeRecommendationEnum;
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
