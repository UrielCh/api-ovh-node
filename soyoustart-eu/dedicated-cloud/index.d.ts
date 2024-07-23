import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicatedCloud Models
 * Source: https://eu.api.soyoustart.com/1.0/dedicatedCloud.json
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
export namespace dedicated {
    /**
     * ovh datacenter
     * type fullname: dedicated.DatacenterEnum
     */
    export type DatacenterEnum = "bhs1" | "bhs2" | "bhs3" | "bhs4" | "bhs5" | "bhs6" | "bhs7" | "bhs8" | "cch01" | "crx1" | "crx2" | "dc1" | "eri1" | "eri2" | "gra04" | "gra1" | "gra2" | "gra3" | "gsw" | "hil1" | "ieb01" | "lil1-int1" | "lim1" | "lim2" | "lim3" | "mr901" | "p19" | "rbx" | "rbx-hz" | "rbx1" | "rbx10" | "rbx2" | "rbx3" | "rbx4" | "rbx5" | "rbx6" | "rbx7" | "rbx8" | "rbx9" | "sbg1" | "sbg2" | "sbg3" | "sbg4" | "sbg5" | "sgp02" | "sgp1" | "syd03" | "syd1" | "syd2" | "vin1" | "waw1" | "ynm1" | "yyz01"
}
export namespace dedicatedCloud {
    /**
     * Network allowed on infrastructure firewall
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
     * Autoscale configuration
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
     * Autoscale option
     * interface fullName: dedicatedCloud.AutoScaleVirtual.AutoScaleVirtual
     */
    export interface AutoScaleVirtual {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Backup option
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
     * Backup job
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
     * Backup repository
     * interface fullName: dedicatedCloud.BackupRepository.BackupRepository
     */
    export interface BackupRepository {
        lastSuccessfulReplicationDate?: string;
        replication?: dedicatedCloudoptionStateEnum;
        replicationZone?: string;
        repositoryId: number;
        repositoryName: string;
        syncStatus?: dedicatedCloudbackupReplicationSyncStatus;
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
     * Available features
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
     * Cluster
     * interface fullName: dedicatedCloud.Cluster.Cluster
     */
    export interface Cluster {
        autoscale?: dedicatedCloudclusterAutoScale;
        clusterId: number;
        drsMode: dedicatedCloudclusterClusterDrsModeEnum;
        drsStatus: dedicatedCloudclusterClusterConfigsStatusEnum;
        evcMode: string;
        haStatus: dedicatedCloudclusterClusterConfigsStatusEnum;
        name: string;
        vmwareClusterId: string;
    }
    /**
     * The commercial name component
     * type fullname: dedicatedCloud.CommercialNameEnum
     */
    export type CommercialNameEnum = "CDI" | "CDI-HDS" | "CDI-HIPAA" | "CDI-NSX" | "CDI-NSX-T" | "CDI-NSX-VROPS" | "CDI-PCIDSS" | "CDI-UNKNOWN" | "CDI-VROPS" | "DC" | "DC-ANCIENT" | "DC-ANCIENT-HDS" | "DC-ANCIENT-HIPAA" | "DC-ANCIENT-NSX" | "DC-ANCIENT-NSX-T" | "DC-ANCIENT-NSX-VROPS" | "DC-ANCIENT-PCIDSS" | "DC-ANCIENT-UNKNOWN" | "DC-ANCIENT-VROPS" | "DC-HDS" | "DC-HIPAA" | "DC-LEGACY" | "DC-LEGACY-HDS" | "DC-LEGACY-HIPAA" | "DC-LEGACY-NSX" | "DC-LEGACY-NSX-T" | "DC-LEGACY-NSX-VROPS" | "DC-LEGACY-PCIDSS" | "DC-LEGACY-UNKNOWN" | "DC-LEGACY-VROPS" | "DC-NSX" | "DC-NSX-T" | "DC-NSX-VROPS" | "DC-PCIDSS" | "DC-UNKNOWN" | "DC-VROPS" | "ESSENTIALS" | "ESSENTIALS-HDS" | "ESSENTIALS-HIPAA" | "ESSENTIALS-NSX" | "ESSENTIALS-NSX-T" | "ESSENTIALS-NSX-VROPS" | "ESSENTIALS-PCIDSS" | "ESSENTIALS-UNKNOWN" | "ESSENTIALS-VROPS" | "NSX-T" | "NSX-T-DEFAULT" | "NSX-T-HDS" | "NSX-T-NSX" | "NSX-T-NSX-VROPS" | "NSX-T-PCIDSS" | "NSX-T-VROPS" | "NSX-T-VROPS-WITHOUT-NSX" | "NSX-T-WITHOUT-NSX" | "PREMIER" | "PREMIER-DEFAULT" | "PREMIER-HDS" | "PREMIER-HIPAA" | "PREMIER-NSX" | "PREMIER-NSX-T" | "PREMIER-NSX-VROPS" | "PREMIER-PCIDSS" | "PREMIER-UNKNOWN" | "PREMIER-VROPS" | "SDDC" | "SDDC-DEFAULT" | "SDDC-HDS" | "SDDC-HIPAA" | "SDDC-LEGACY" | "SDDC-LEGACY-HDS" | "SDDC-LEGACY-HIPAA" | "SDDC-LEGACY-PCIDSS" | "SDDC-LEGACY-UNKNOWN" | "SDDC-LEGACY-VROPS" | "SDDC-LEGACY-VROPS-WITHOUT-NSX" | "SDDC-LEGACY-WITHOUT-NSX" | "SDDC-PCIDSS" | "SDDC-UNKNOWN" | "SDDC-VROPS" | "SDDC-VROPS-WITHOUT-NSX" | "SDDC-WITHOUT-NSX" | "UNKNOWN" | "UNKNOWN-HDS" | "UNKNOWN-HIPAA" | "UNKNOWN-NSX" | "UNKNOWN-NSX-T" | "UNKNOWN-NSX-VROPS" | "UNKNOWN-PCIDSS" | "UNKNOWN-UNKNOWN" | "UNKNOWN-VROPS" | "UNKNOWN-VSPHERE" | "VSPHERE" | "VSPHERE-DEFAULT" | "VSPHERE-HDS" | "VSPHERE-NSX" | "VSPHERE-NSX-VROPS" | "VSPHERE-PCIDSS" | "VSPHERE-VROPS" | "VSPHERE-VROPS-WITHOUT-NSX" | "VSPHERE-WITHOUT-NSX"
    /**
     * Commercial ranges
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
     * Virtual datacenter
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
     * A structure describing the vmware DVSSecurityPolicy data object
     * interface fullName: dedicatedCloud.DvsSecurityPolicy.DvsSecurityPolicy
     */
    export interface DvsSecurityPolicy {
        allowPromiscuous: dedicatedCloudvmwareBoolPolicy;
        forgedTransmits: dedicatedCloudvmwareBoolPolicy;
        macChanges: dedicatedCloudvmwareBoolPolicy;
    }
    /**
     * Active Directory federation option
     * interface fullName: dedicatedCloud.Federation.Federation
     */
    export interface Federation {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Federated Active Directory
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
        ldapHostname?: string;
        ldapTcpPort: number;
        noSsl: boolean;
        sslThumbprint?: string;
        state: dedicatedCloudoptionAccessNetworkStateEnum;
        username: string;
    }
    /**
     * Datastore
     * interface fullName: dedicatedCloud.Filer.Filer
     */
    export interface Filer {
        activeNode?: dedicatedCloudfilerNodeTypeEnum;
        billingType?: dedicatedCloudressourcesBillingTypeEnum;
        connectionState?: dedicatedCloudfilerConnexionStateEnum;
        filerId: number;
        fullProfile: string;
        isManagedByOvh: boolean;
        master: string;
        name: string;
        profile: string;
        resourceName?: string;
        size: complexType.UnitAndValue<number>;
        slave?: string;
        spaceFree?: number;
        spaceProvisionned?: number;
        spaceUsed?: number;
        state: dedicatedCloudfilerStateEnum;
        vmTotal?: number;
    }
    /**
     * The generation of a Dedicated Cloud
     * type fullname: dedicatedCloud.GenerationEnum
     */
    export type GenerationEnum = "1.0" | "2.0"
    /**
     * VMware Hybrid Cloud Extension option
     * interface fullName: dedicatedCloud.Hcx.Hcx
     */
    export interface Hcx {
        build?: string;
        state: dedicatedCloudoptionStateEnum;
        version?: string;
    }
    /**
     * HDS certification option
     * interface fullName: dedicatedCloud.Hds.Hds
     */
    export interface Hds {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * HIPAA certification option
     * interface fullName: dedicatedCloud.Hipaa.Hipaa
     */
    export interface Hipaa {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Host
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
        resourceName?: string;
        state: dedicatedCloudhostStateEnum;
        uptime?: number;
        vmTotal?: number;
        vmVcpuTotal?: number;
    }
    /**
     * Host profile
     * interface fullName: dedicatedCloud.HostProfile.HostProfile
     */
    export interface HostProfile {
        id: number;
        name: string;
    }
    /**
     * Host resilience test status
     * interface fullName: dedicatedCloud.HostResilience.HostResilience
     */
    export interface HostResilience {
        state: dedicatedCloudoptionStateEnum;
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
    export type HypervisorVersionEnum = "4.1" | "5.0" | "5.1" | "5.5" | "6.0" | "6.5" | "6.7" | "7.0" | "8.0" | "hv3.1" | "hvdc3.1" | "nc1.0"
    /**
     * OVHcloud IAM option
     * interface fullName: dedicatedCloud.Iam.Iam
     */
    export interface Iam {
        identityProviderId?: number;
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * IP block
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
     * Log subscription resource
     * interface fullName: dedicatedCloud.LogSubscriptionResource.LogSubscriptionResource
     */
    export interface LogSubscriptionResource {
        name: string;
        type: string;
    }
    /**
     * synchronous operation after subscribing or unsubscribing to a resource logs
     * interface fullName: dedicatedCloud.LogSubscriptionResponse.LogSubscriptionResponse
     */
    export interface LogSubscriptionResponse {
        operationId: string;
        serviceName: string;
    }
    /**
     * The management interface of this Dedicated Cloud
     * type fullname: dedicatedCloud.ManagementInterfaceEnum
     */
    export type ManagementInterfaceEnum = "azure" | "openstack" | "systemcenter" | "vcloud" | "vcsa" | "vsphere"
    /**
     * VMware NSX-V option
     * interface fullName: dedicatedCloud.Nsx.Nsx
     */
    export interface Nsx {
        state: dedicatedCloudoptionStateEnum;
        url?: string;
    }
    /**
     * VMware NSX-T option
     * interface fullName: dedicatedCloud.Nsxt.Nsxt
     */
    export interface Nsxt {
        datacentersState?: dedicatedCloudoptionDatacenterOptionState[];
        state: dedicatedCloudoptionStateEnum;
        url?: string;
        version?: string;
    }
    /**
     * NSX Edge
     * interface fullName: dedicatedCloud.NsxtEdge.NsxtEdge
     */
    export interface NsxtEdge {
        diskLocation?: string;
        ip: string;
        moRef?: string;
        name: string;
        nsxtEdgeId: number;
        size: dedicatedCloudnsxtNsxtEdgeSizeEnum;
        state: dedicatedCloudStateEnum;
    }
    /**
     * NSX Edge resilience test status
     * interface fullName: dedicatedCloud.NsxtEdgeResilience.NsxtEdgeResilience
     */
    export interface NsxtEdgeResilience {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * User object right
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
     * Hypervisor
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
     * Hosting location
     * interface fullName: dedicatedCloud.PccZone.PccZone
     */
    export interface PccZone {
        city: string;
        countryCode: nichandle.CountryEnum;
        id: number;
        pccZone: string;
    }
    /**
     * PCI-DSS certification option
     * interface fullName: dedicatedCloud.PciDss.PciDss
     */
    export interface PciDss {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Private management gateway
     * interface fullName: dedicatedCloud.PrivateGateway.PrivateGateway
     */
    export interface PrivateGateway {
        customerIp?: string;
        customerNetmask?: string;
        customerPortGroup?: string;
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Restore point
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
     * User datacenter right
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
     * Robot
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
     * Security option
     * interface fullName: dedicatedCloud.SecurityOption.SecurityOption
     */
    export interface SecurityOption {
        state: dedicatedCloudsecurityOptionStateEnum;
    }
    /**
     * Service pack
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
    export type StateEnum = "available" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "provisionning" | "recycling" | "reserved" | "toDisable" | "toProvision" | "toRecycle" | "toRemove" | "toUnprovision" | "unprovisionning" | "upgrading"
    /**
     * Log forward to syslog option
     * interface fullName: dedicatedCloud.SyslogForward.SyslogForward
     */
    export interface SyslogForward {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Forward logs from your PCC infrastructure to your syslog
     * interface fullName: dedicatedCloud.SyslogForwardAccessNetwork.SyslogForwardAccessNetwork
     */
    export interface SyslogForwardAccessNetwork {
        description: string;
        ip: string;
        logForwardId: number;
        logLevel: dedicatedCloudsyslogForwardLogLevelEnum;
        noSsl: boolean;
        servicePort: number;
        sourceType: dedicatedCloudsyslogForwardSourceTypeEnum[];
        sslThumbprint?: string;
        state: dedicatedCloudoptionAccessNetworkStateEnum;
    }
    /**
     * Operation
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
     * User
     * interface fullName: dedicatedCloud.User.User
     */
    export interface User {
        activationState?: dedicatedClouduserActivationStateEnum;
        activeDirectoryId?: number;
        activeDirectoryType?: dedicatedClouduserTypeEnum;
        canManageIpFailOvers: boolean;
        canManageNetwork: boolean;
        canManageRights: boolean;
        email?: string;
        encryptionRight: boolean;
        firstName?: string;
        fullAdminRo: boolean;
        identityProviderId?: number;
        identityProviderType?: dedicatedClouduserIdentityProviderTypeEnum;
        isEnableManageable: boolean;
        isTokenValidator: boolean;
        lastName?: string;
        login: string;
        name: string;
        nsxRight: boolean;
        phoneNumber?: string;
        receiveAlerts: boolean;
        state: dedicatedClouduserStateEnum;
        type?: dedicatedClouduserTypeEnum;
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
     * Virtual machine encryption option
     * interface fullName: dedicatedCloud.VMEncryption.VMEncryption
     */
    export interface VMEncryption {
        state: dedicatedCloudoptionStateEnum;
    }
    /**
     * Virtual machine encryption KMS server
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
     * Vendor information
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
     * vLAN
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
     * Virtual machine
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
        guestOsFamily?: string;
        hostName?: string;
        license?: dedicatedCloudsplaKmsLicenseIncludingLegacyEnum;
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
     * VMware Aria Operations option
     * interface fullName: dedicatedCloud.Vrops.Vrops
     */
    export interface Vrops {
        state: dedicatedCloudoptionStateEnum;
        upgrades?: string[];
        url?: string;
        vROpsPublicIP?: string;
        version?: string;
    }
    /**
     * VMware Aria Operations outgoing flows
     * interface fullName: dedicatedCloud.VropsOutgoingFlow.VropsOutgoingFlow
     */
    export interface VropsOutgoingFlow {
        description: string;
        ip: string;
        outgoingFlowId: number;
        servicePort: number;
        state: dedicatedCloudoptionAccessNetworkStateEnum;
    }
    /**
     * vSAN datastore
     * interface fullName: dedicatedCloud.VsanDatastore.VsanDatastore
     */
    export interface VsanDatastore {
        clusterId: number;
        connectionState?: dedicatedCloudfilerConnexionStateEnum;
        datacenterId: number;
        datastoreId: number;
        datastoreName: string;
        spaceFree?: number;
        spaceProvisioned?: number;
        spaceUsed?: number;
        vmTotal?: number;
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
            backupRepositoryId?: number;
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
         * All possible replication sync status
         * type fullname: dedicatedCloud.backup.ReplicationSyncStatus
         */
        export type ReplicationSyncStatus = "ok" | "out-of-sync" | "sync-required" | "unknown"
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
     * compliant range information
     * interface fullName: dedicatedCloud.compliantRanges.compliantRanges
     */
    export interface compliantRanges {
        addons?: dedicatedCloudrequiredAddon[];
        estimateRequired: boolean;
        name: string;
        upgradeCode?: string;
        upgradeRequired: boolean;
    }
    /**
     * VMware on OVHcloud
     * interface fullName: dedicatedCloud.dedicatedCloud.dedicatedCloud
     */
    export interface dedicatedCloud {
        advancedSecurity: boolean;
        bandwidth: string;
        billingType: dedicatedCloudBillingTypeEnum;
        canMigrateToVCD: boolean;
        certifiedInterfaceUrl: string;
        commercialRange: string;
        description: string;
        generation: dedicatedCloudGenerationEnum;
        location: string;
        managementInterface: dedicatedCloudManagementInterfaceEnum;
        productReference: dedicatedCloudproductReferenceEnum;
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
            endpointPublicIp?: string;
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
        /**
         * Information on virtual machine protected by Zerto
         * interface fullName: dedicatedCloud.disasterRecovery.ZertoProtectedVm.ZertoProtectedVm
         */
        export interface ZertoProtectedVm {
            fromDate: string;
            protectedSite: string;
            recoverySite: string;
            vmId: string;
            vmName: string;
            vpgName: string;
        }
        /**
         * Zerto disaster recovery remote site
         * interface fullName: dedicatedCloud.disasterRecovery.ZertoRemoteVra.ZertoRemoteVra
         */
        export interface ZertoRemoteVra {
            id: number;
            label: string;
            remoteEndpointPublicIp: string;
            remoteVraNetwork: string;
            remoteZvmInternalIp: string;
        }
    }
    export namespace filer {
        /**
         * Connexion states for a Dedicated Cloud Filer.
         * type fullname: dedicatedCloud.filer.ConnexionStateEnum
         */
        export type ConnexionStateEnum = "offline" | "online"
        /**
         * All types of filer that are available for restoring a VM
         * type fullname: dedicatedCloud.filer.FilerTypeEnum
         */
        export type FilerTypeEnum = "nas" | "vsan"
        /**
         * Hourly consumption of a filer
         * interface fullName: dedicatedCloud.filer.HourlyConsumption.HourlyConsumption
         */
        export interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        /**
         * Location of the Filer
         * interface fullName: dedicatedCloud.filer.Location.Location
         */
        export interface Location {
            datacenter: dedicated.DatacenterEnum;
            rack: string;
            room: string;
        }
        /**
         * All nodes types for a Filer
         * type fullname: dedicatedCloud.filer.NodeTypeEnum
         */
        export type NodeTypeEnum = "master" | "slave"
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
         * Location of the Host
         * interface fullName: dedicatedCloud.host.Location.Location
         */
        export interface Location {
            datacenter: dedicated.DatacenterEnum;
            rack: string;
            room: string;
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
    export type ipUsageEnum = "nsxt" | "reserved" | "vm"
    /**
     * Log kind for your dedicated cloud
     * interface fullName: dedicatedCloud.ldpKind.ldpKind
     */
    export interface ldpKind {
        additionalReturnedFields: string[];
        createdAt: string;
        displayName: string;
        kindId: string;
        name: string;
        updatedAt: string;
    }
    /**
     * Log subscription for your dedicated cloud
     * interface fullName: dedicatedCloud.ldpSubscription.ldpSubscription
     */
    export interface ldpSubscription {
        createdAt: string;
        kind: string;
        resource: dedicatedCloudLogSubscriptionResource;
        serviceName: string;
        streamId: string;
        subscriptionId: string;
        updatedAt: string;
    }
    export namespace nsxt {
        /**
         * Maximum number of NSX-T Edges supported in datacenter
         * interface fullName: dedicatedCloud.nsxt.NsxtEdgeScalingCapability.NsxtEdgeScalingCapability
         */
        export interface NsxtEdgeScalingCapability {
            number?: number;
        }
        /**
         * Sizes of NSX-T Edges
         * type fullname: dedicatedCloud.nsxt.NsxtEdgeSizeEnum
         */
        export type NsxtEdgeSizeEnum = "LARGE" | "MEDIUM" | "XLARGE"
        /**
         * Available sizing of NSX-T Edges supported in datacenter
         * interface fullName: dedicatedCloud.nsxt.NsxtEdgeSizingCapability.NsxtEdgeSizingCapability
         */
        export interface NsxtEdgeSizingCapability {
            size: string[];
        }
    }
    export namespace option {
        /**
         * States of a Dedicated Cloud Datacenter Option
         * interface fullName: dedicatedCloud.option.DatacenterOptionState.DatacenterOptionState
         */
        export interface DatacenterOptionState {
            id: number;
            state: dedicatedCloudoptionStateEnum;
        }
        /**
         * States of a Dedicated Cloud option
         * type fullname: dedicatedCloud.option.StateEnum
         */
        export type StateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "migrating" | "unknown"
    }
    export namespace optionAccessNetwork {
        /**
         * States of a Dedicated Cloud option
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
     * The reference universe information for your Dedicated Cloud
     * type fullname: dedicatedCloud.productReferenceEnum
     */
    export type productReferenceEnum = "EPCC" | "MBM"
    /**
     * All vCenter upgrade possibility
     * type fullname: dedicatedCloud.releaseEnum
     */
    export type releaseEnum = "major" | "minor"
    /**
     * required addon information
     * interface fullName: dedicatedCloud.requiredAddon.requiredAddon
     */
    export interface requiredAddon {
        planCode: string;
        quantity: number;
    }
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
    export namespace securityOption {
        /**
         * Representation of a security option
         * interface fullName: dedicatedCloud.securityOption.CompatibilityMatrixEntry.CompatibilityMatrixEntry
         */
        export interface CompatibilityMatrixEntry {
            compatible: boolean;
            description: string;
            enabled: boolean;
            name: dedicatedCloudsecurityOptionSecurityOptionEnum;
            reason?: dedicatedCloudsecurityOptionErrorMessage;
            state: dedicatedCloudsecurityOptionStateEnum;
        }
        /**
         * Display requirements, conflicts and dependencies of a security option
         * interface fullName: dedicatedCloud.securityOption.DependenciesTree.DependenciesTree
         */
        export interface DependenciesTree {
            conflicts: dedicatedCloudsecurityOptionSecurityOptionEnum[];
            depends: dedicatedCloudsecurityOptionSecurityOptionEnum[];
            requires: dedicatedCloudsecurityOptionSecurityOptionEnum[];
        }
        /**
         * Security option management errors
         * type fullname: dedicatedCloud.securityOption.ErrorEnum
         */
        export type ErrorEnum = "ACTION_IMPOSSIBLE" | "ALREADY_DISABLED" | "ALREADY_ENABLED" | "BAD_ZONE" | "BREAKING_REQUIREMENTS" | "CONFLICTING_OPTIONS" | "DEFINITIVE_OPTION" | "GENERIC_ERROR" | "HAS_UNSUPPORTED_DEPENDENCIES" | "MISSING_REQUIREMENTS_OPTIONS" | "NOT_ENABLED" | "NOT_MANAGEABLE_DIRECTLY" | "SERVICE_SUSPENDED"
        /**
         * Security option code
         * interface fullName: dedicatedCloud.securityOption.ErrorMessage.ErrorMessage
         */
        export interface ErrorMessage {
            code: dedicatedCloudsecurityOptionErrorEnum;
            message: string;
        }
        /**
         * Security option identifiers
         * type fullname: dedicatedCloud.securityOption.SecurityOptionEnum
         */
        export type SecurityOptionEnum = "accessNetworkFiltered" | "advancedSecurity" | "base" | "contentLibrary" | "grsecKernel" | "hds" | "hids" | "hipaa" | "nids" | "pcidss" | "privateCustomerVlan" | "privateGw" | "sendLogToCustomer" | "sessionTimeout" | "sftp" | "snc" | "spla" | "sslV3" | "tls1.2" | "tokenValidation" | "twoFa" | "twoFaFail2ban" | "vrliForwarder" | "waf"
        /**
         * Security option detailed states
         * type fullname: dedicatedCloud.securityOption.StateEnum
         */
        export type StateEnum = "creating" | "deleted" | "deleting" | "delivered" | "disabled" | "pending" | "toCreate" | "updating"
    }
    /**
     * List of possible service pack
     * type fullname: dedicatedCloud.servicePackEnum
     */
    export type servicePackEnum = "default" | "default-nsxt" | "hds" | "hds-nsxt" | "hipaa" | "legacy" | "nsx" | "nsx-and-vrops" | "nsxt" | "pcidss" | "pcidss-nsxt" | "vrops" | "vrops-nsxt"
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
    export namespace spla {
        /**
         * Managed license identifiers
         * type fullname: dedicatedCloud.spla.KmsLicenseEnum
         */
        export type KmsLicenseEnum = "windows 2016 Datacenter" | "windows 2016 Standard" | "windows 2016 Standard SQL2016 Standard" | "windows 2016 Standard SQL2016 Web" | "windows 2019 Datacenter" | "windows 2019 Datacenter Core" | "windows 2019 Standard" | "windows 2019 Standard Core" | "windows 2019 Standard SQL2019 Standard" | "windows 2019 Standard SQL2019 Web" | "windows 2019 Standard SQL2022 Standard" | "windows 2019 Standard SQL2022 Web" | "windows 2022 Datacenter" | "windows 2022 Datacenter Core" | "windows 2022 Datacenter SQL2019 Standard" | "windows 2022 Datacenter SQL2019 Web" | "windows 2022 Datacenter SQL2022 Standard" | "windows 2022 Datacenter SQL2022 Web" | "windows 2022 Standard" | "windows 2022 Standard Core" | "windows 2022 Standard SQL2019 Standard" | "windows 2022 Standard SQL2019 Web" | "windows 2022 Standard SQL2022 Standard" | "windows 2022 Standard SQL2022 Web"
        /**
         * Managed license identifiers (including legacy ones)
         * type fullname: dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum
         */
        export type KmsLicenseIncludingLegacyEnum = "unknown or unsupported license" | "windows 2008 R2 Datacenter" | "windows 2008 R2 Enterprise" | "windows 2008 R2 Standard" | "windows 2008 R2 Web" | "windows 2012 Datacenter" | "windows 2012 R2 Datacenter" | "windows 2012 R2 Standard" | "windows 2012 R2 Standard SQL2016 Standard" | "windows 2012 R2 Standard SQL2016 Web" | "windows 2012 Standard" | "windows 2016 Datacenter" | "windows 2016 Standard" | "windows 2016 Standard SQL2016 Standard" | "windows 2016 Standard SQL2016 Web" | "windows 2019 Datacenter" | "windows 2019 Datacenter Core" | "windows 2019 Standard" | "windows 2019 Standard Core" | "windows 2019 Standard SQL2019 Standard" | "windows 2019 Standard SQL2019 Web" | "windows 2019 Standard SQL2022 Standard" | "windows 2019 Standard SQL2022 Web" | "windows 2022 Datacenter" | "windows 2022 Datacenter Core" | "windows 2022 Datacenter SQL2019 Standard" | "windows 2022 Datacenter SQL2019 Web" | "windows 2022 Datacenter SQL2022 Standard" | "windows 2022 Datacenter SQL2022 Web" | "windows 2022 Standard" | "windows 2022 Standard Core" | "windows 2022 Standard SQL2019 Standard" | "windows 2022 Standard SQL2019 Web" | "windows 2022 Standard SQL2022 Standard" | "windows 2022 Standard SQL2022 Web"
    }
    export namespace syslogForward {
        /**
         * All possible log levels
         * type fullname: dedicatedCloud.syslogForward.LogLevelEnum
         */
        export type LogLevelEnum = "alert" | "critical" | "emergency" | "error" | "info" | "notice" | "warning"
        /**
         * Log possible sources
         * type fullname: dedicatedCloud.syslogForward.SourceTypeEnum
         */
        export type SourceTypeEnum = "nsxtEdge"
    }
    /**
     * Two factor authentication whitelisted network
     * interface fullName: dedicatedCloud.twoFAWhitelist.twoFAWhitelist
     */
    export interface twoFAWhitelist {
        cidrNetmask: number;
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
         * The type of the identity provider
         * type fullname: dedicatedCloud.user.IdentityProviderTypeEnum
         */
        export type IdentityProviderTypeEnum = "federation" | "iam"
        /**
         * All states a Dedicated Cloud User can be in
         * type fullname: dedicatedCloud.user.StateEnum
         */
        export type StateEnum = "creating" | "deleting" | "delivered" | "error"
        /**
         * The type of the user
         * type fullname: dedicatedCloud.user.TypeEnum
         */
        export type TypeEnum = "group" | "user"
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
     * A structure describing the licensing of a virtual machine
     * interface fullName: dedicatedCloud.virtualMachineLicensingSummary.virtualMachineLicensingSummary
     */
    export interface virtualMachineLicensingSummary {
        guestOsFamily?: string;
        license: dedicatedCloudsplaKmsLicenseIncludingLegacyEnum;
        moRef: string;
        name: string;
        vmId: number;
    }
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
        carpState?: string;
        deviceName?: string;
        portGroupKey?: string;
        portKey?: string;
        portKeySecurityPolicy?: dedicatedCloudDvsSecurityPolicy;
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
    /**
     * A structure describing the vmware bool policy data object
     * interface fullName: dedicatedCloud.vmwareBoolPolicy.vmwareBoolPolicy
     */
    export interface vmwareBoolPolicy {
        inherited: boolean;
        value: boolean;
    }
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
     * VMware on OVHcloud vRack link
     * interface fullName: vrack.dedicatedCloud.dedicatedCloud
     */
    export interface dedicatedCloud {
        dedicatedCloud: string;
        vlanId?: number;
        vrack: string;
    }
}
/**
 * Api model for /dedicatedCloud
 */
export interface DedicatedCloud {
    /**
     * List VMware on OVHcloud infrastructures
     * GET /dedicatedCloud
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): void;
    commercialRange: {
        /**
         * List commercial ranges
         * GET /dedicatedCloud/commercialRange
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        $(commercialRangeName: string): {
            /**
             * Get commercial range
             * GET /dedicatedCloud/commercialRange/{commercialRangeName}
             */
            $get(): Promise<dedicatedCloud.CommercialRange>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        };
    }
    location: {
        /**
         * List hosting locations
         * GET /dedicatedCloud/location
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        $(pccZone: string): {
            /**
             * Get hosting location
             * GET /dedicatedCloud/location/{pccZone}
             */
            $get(): Promise<dedicatedCloud.PccZone>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            hostProfile: {
                /**
                 * List host profiles on hosting location
                 * GET /dedicatedCloud/location/{pccZone}/hostProfile
                 */
                $get(): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(id: number): {
                    /**
                     * Get host profile
                     * GET /dedicatedCloud/location/{pccZone}/hostProfile/{id}
                     */
                    $get(): Promise<dedicatedCloud.HostProfile>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            hypervisor: {
                /**
                 * List hypervisor versions on hosting location
                 * GET /dedicatedCloud/location/{pccZone}/hypervisor
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(shortName: string): {
                    /**
                     * Get hypervisor
                     * GET /dedicatedCloud/location/{pccZone}/hypervisor/{shortName}
                     */
                    $get(): Promise<dedicatedCloud.Os>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            stock: {
                host: {
                    /**
                     * Get hosts stock
                     * GET /dedicatedCloud/location/{pccZone}/stock/host
                     */
                    $get(params?: { minYear?: number }): Promise<dedicatedCloud.HostStockProfile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                pcc: {
                    /**
                     * Get hypervisors stock
                     * GET /dedicatedCloud/location/{pccZone}/stock/pcc
                     */
                    $get(): Promise<dedicatedCloud.PccStockProfile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                zpool: {
                    /**
                     * Get datastores stock
                     * GET /dedicatedCloud/location/{pccZone}/stock/zpool
                     */
                    $get(params?: { profileFilter?: string }): Promise<dedicatedCloud.ZpoolStockProfile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
            }
        };
    }
    $(serviceName: string): {
        /**
         * Get VMware on OVHcloud
         * GET /dedicatedCloud/{serviceName}
         */
        $get(): Promise<dedicatedCloud.dedicatedCloud>;
        /**
         * Update VMware on OVHcloud
         * PUT /dedicatedCloud/{serviceName}
         */
        $put(params?: { advancedSecurity?: boolean, bandwidth?: string, billingType?: dedicatedCloudBillingTypeEnum, canMigrateToVCD?: boolean, certifiedInterfaceUrl?: string, commercialRange?: string, description?: string, generation?: dedicatedCloudGenerationEnum, location?: string, managementInterface?: dedicatedCloudManagementInterfaceEnum, productReference?: dedicatedCloudproductReferenceEnum, serviceName?: string, servicePackName?: string, spla?: boolean, sslV3?: boolean, state?: dedicatedCloudStateEnum, userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number, vScopeUrl?: string, version?: dedicatedCloudVersion, webInterfaceUrl?: string }): Promise<dedicatedCloud.Task>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        allowedNetwork: {
            /**
             * List networks allowed on infrastructure firewall
             * GET /dedicatedCloud/{serviceName}/allowedNetwork
             */
            $get(): Promise<number[]>;
            /**
             * Create network allowed on infrastructure firewall
             * POST /dedicatedCloud/{serviceName}/allowedNetwork
             */
            $post(params: { description?: string, network: string }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(networkAccessId: number): {
                /**
                 * Remove network allowed on infrastructure firewall
                 * DELETE /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Get network allowed on infrastructure firewall
                 * GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                 */
                $get(): Promise<dedicatedCloud.AllowedNetwork>;
                /**
                 * Update network allowed on infrastructure firewall
                 * PUT /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
                 */
                $put(params?: { description?: string, network?: string, networkAccessId?: number, state?: dedicatedCloudAllowedNetworkStateEnum }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                task: {
                    /**
                     * List operations associated to a network allowed on infrastructure firewall
                     * GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(taskId: number): {
                        /**
                         * Get operation
                         * GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance operation
                             * POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            /**
                             * Relaunch operation currently in error state
                             * POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        backupRepository: {
            /**
             * List backup repositories
             * GET /dedicatedCloud/{serviceName}/backupRepository
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(repositoryId: number): {
                /**
                 * Get backup repository
                 * GET /dedicatedCloud/{serviceName}/backupRepository/{repositoryId}
                 */
                $get(): Promise<dedicatedCloud.BackupRepository>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        canDeployNsxtEdgesOnGlobalDatastores: {
            /**
             * Check if global datastore have enough free space to host NSX-T edges
             * GET /dedicatedCloud/{serviceName}/canDeployNsxtEdgesOnGlobalDatastores
             */
            $get(params?: { count?: number, size?: dedicatedCloudnsxtNsxtEdgeSizeEnum }): Promise<boolean>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        capabilities: {
            /**
             * Get available features
             * GET /dedicatedCloud/{serviceName}/capabilities
             */
            $get(): Promise<dedicatedCloud.Capabilities>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        changeProperties: {
            /**
             * Update VMware on OVHcloud
             * POST /dedicatedCloud/{serviceName}/changeProperties
             */
            $post(params?: { description?: string, sslV3?: boolean, userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum, userLimitConcurrentSession?: number, userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum, userSessionTimeout?: number }): Promise<dedicatedCloud.Task>;
        }
        commercialRange: {
            compliance: {
                /**
                 * Get compliant commercial ranges
                 * GET /dedicatedCloud/{serviceName}/commercialRange/compliance
                 */
                $get(): Promise<dedicatedCloud.compliantRanges[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            orderable: {
                /**
                 * Get orderable commercial ranges
                 * GET /dedicatedCloud/{serviceName}/commercialRange/orderable
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        }
        confirmTermination: {
            /**
             * Confirm service termination
             * POST /dedicatedCloud/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
        }
        datacenter: {
            /**
             * List virtual datacenters
             * GET /dedicatedCloud/{serviceName}/datacenter
             */
            $get(): Promise<number[]>;
            /**
             * Create virtual datacenter
             * POST /dedicatedCloud/{serviceName}/datacenter
             */
            $post(params: { commercialRangeName: string, vrackName?: string }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(datacenterId: number): {
                /**
                 * Remove virtual datacenter
                 * DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Get virtual datacenter
                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                 */
                $get(): Promise<dedicatedCloud.Datacenter>;
                /**
                 * Update virtual datacenter
                 * PUT /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
                 */
                $put(params?: { commercialName?: dedicatedCloudCommercialNameEnum, commercialRangeName?: string, datacenterId?: number, description?: string, horizonViewName?: string, isRemovable?: boolean, name?: string, version?: string }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                backup: {
                    /**
                     * Get backup option
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup
                     */
                    $get(): Promise<dedicatedCloud.Backup>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    batchRestore: {
                        /**
                         * Restore from last point for each backup job
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
                         */
                        $post(params: { backupJobName?: string, backupRepositoryName: string }): Promise<dedicatedCloud.Task>;
                    }
                    canOptimizeProxies: {
                        /**
                         * Generate recommendations for backup proxies optimization
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/canOptimizeProxies
                         */
                        $get(): Promise<dedicatedCloud.backup.OptimizeProxies>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    changeProperties: {
                        /**
                         * Update backup option
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties
                         */
                        $post(params: { backupDurationInReport: boolean, backupOffer: dedicatedCloudbackupOfferTypeEnum, backupSizeInReport: boolean, diskSizeInReport: boolean, fullDayInReport: boolean, mailAddress?: string, restorePointInReport: boolean, scheduleHour?: string }): Promise<dedicatedCloud.Task>;
                    }
                    disable: {
                        /**
                         * Disable backup option
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
                         */
                        $post(): Promise<dedicatedCloud.Task>;
                    }
                    enable: {
                        /**
                         * Enable backup option
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable
                         */
                        $post(params?: { backupOffer?: dedicatedCloudbackupOfferTypeEnum }): Promise<dedicatedCloud.Task>;
                    }
                    generateReport: {
                        /**
                         * Generate email report with all backup information
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport
                         */
                        $post(): Promise<dedicatedCloud.Task>;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    optimizeProxies: {
                        /**
                         * Optimize number of backup proxies
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/optimizeProxies
                         */
                        $post(): Promise<dedicatedCloud.Task>;
                    }
                }
                backupRepository: {
                    /**
                     * List backup repositories in virtual datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backupRepository
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(repositoryId: number): {
                        /**
                         * Get backup repository
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backupRepository/{repositoryId}
                         */
                        $get(): Promise<dedicatedCloud.BackupRepository>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    };
                }
                checkBackupJobs: {
                    /**
                     * Check if backup jobs are correctly set in virtual datacenter (when vms have been moved to another virtual datacenter)
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                }
                cluster: {
                    /**
                     * List clusters within virtual datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: number): {
                        /**
                         * Get cluster
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}
                         */
                        $get(): Promise<dedicatedCloud.Cluster>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        nsxt: {
                            /**
                             * Unconfigure NSX-T on cluster
                             * DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt
                             */
                            $delete(): Promise<dedicatedCloud.Task>;
                            /**
                             * Configure NSX-T on cluster
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                            /**
                             * Update NSX-T configuration on cluster
                             * PUT /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt
                             */
                            $put(): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
                disasterRecovery: {
                    zerto: {
                        disable: {
                            /**
                             * Disable Zerto disaster recovery between two VMware on OVHcloud infrastructures
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable
                             */
                            $post(params: { secondaryDatacenterId: number, secondaryServiceName: string }): Promise<dedicatedCloud.Task>;
                        }
                        enable: {
                            /**
                             * Enable Zerto disaster recovery between two VMware on OVHcloud infrastructures
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable
                             */
                            $post(params: { primaryEndpointIp: string, secondaryDatacenterId: number, secondaryEndpointIp: string, secondaryServiceName: string }): Promise<dedicatedCloud.Task>;
                        }
                        endMigration: {
                            /**
                             * Unlink migration source virtual datacenter from Zerto disaster recovery
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endMigration
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        endpointPublicIp: {
                            /**
                             * Change the IP address used by Zerto disaster recovery endpoint for public network access
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endpointPublicIp
                             */
                            $post(params: { newEndpointPublicIp: string }): Promise<dedicatedCloud.Task>;
                        }
                        remoteSites: {
                            /**
                             * Remove Zerto disaster recovery remote site
                             * DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/remoteSites
                             */
                            $delete(params: { id: number }): Promise<dedicatedCloud.Task>;
                            /**
                             * List Zerto disaster recovery remote sites
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/remoteSites
                             */
                            $get(): Promise<dedicatedCloud.disasterRecovery.ZertoRemoteVra[]>;
                            /**
                             * Create Zerto disaster recovery remote site on VPN endpoint
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/remoteSites
                             */
                            $post(params: { label: string, preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteVraNetwork: string, remoteZvmInternalIp: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        startMigration: {
                            /**
                             * Link migration target virtual datacenter to Zerto disaster recovery
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/startMigration
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        status: {
                            /**
                             * Get Zerto disaster recovery option status
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/status
                             */
                            $get(): Promise<dedicatedCloud.disasterRecovery.Profile>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        usageReport: {
                            /**
                             * List Zerto disaster recovery protected virtual machines
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/usageReport
                             */
                            $get(params: { month: number, year: number }): Promise<dedicatedCloud.disasterRecovery.ZertoProtectedVm[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                    }
                    zertoSingle: {
                        configureVpn: {
                            /**
                             * Configure VPN for Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn
                             */
                            $post(params: { preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteVraNetwork?: string, remoteZvmInternalIp: string }): Promise<dedicatedCloud.Task>;
                        }
                        defaultLocalVraNetwork: {
                            /**
                             * Get Zerto disaster recovery default suggested local VRA subnet
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork
                             */
                            $get(): Promise<string>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        disable: {
                            /**
                             * Disable Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        enable: {
                            /**
                             * Enable Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable
                             */
                            $post(params: { localVraNetwork: string, ovhEndpointIp: string, remoteVraNetwork: string }): Promise<dedicatedCloud.Task>;
                        }
                        endpointPublicIp: {
                            /**
                             * Change the IP address used by Zerto disaster recovery endpoint for public network access
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/endpointPublicIp
                             */
                            $post(params: { newEndpointPublicIp: string }): Promise<dedicatedCloud.Task>;
                        }
                        remoteSites: {
                            /**
                             * Remove Zerto disaster recovery remote site
                             * DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/remoteSites
                             */
                            $delete(params: { id: number }): Promise<dedicatedCloud.Task>;
                            /**
                             * List Zerto disaster recovery remote sites
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/remoteSites
                             */
                            $get(): Promise<dedicatedCloud.disasterRecovery.ZertoRemoteVra[]>;
                            /**
                             * Create Zerto disaster recovery remote site on VPN endpoint
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/remoteSites
                             */
                            $post(params: { label: string, preSharedKey: string, remoteEndpointInternalIp: string, remoteEndpointPublicIp: string, remoteVraNetwork: string, remoteZvmInternalIp: string }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        requestPairingToken: {
                            /**
                             * Request Zerto disaster recovery pairing token for onsite infrastructure
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/requestPairingToken
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                    }
                }
                filer: {
                    /**
                     * List datastores in virtual datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(filerId: number): {
                        /**
                         * Get datastore
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
                         */
                        $get(): Promise<dedicatedCloud.Filer>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        checkGlobalCompatible: {
                            /**
                             * Check ability to convert datastore to global datastore
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/checkGlobalCompatible
                             */
                            $get(): Promise<boolean>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        convertToGlobal: {
                            /**
                             * Convert datastore to global datastore
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/convertToGlobal
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        hourlyConsumption: {
                            /**
                             * Get datastore hourly consumption
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption
                             */
                            $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        location: {
                            /**
                             * Get datastore location
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/location
                             */
                            $get(params?: { node?: dedicatedCloudfilerNodeTypeEnum }): Promise<dedicatedCloud.filer.Location>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        remove: {
                            /**
                             * Remove datastore
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        task: {
                            /**
                             * List operations associated to datastore
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task
                             */
                            $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(taskId: number): {
                                /**
                                 * Get operation
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}
                                 */
                                $get(): Promise<dedicatedCloud.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                changeMaintenanceExecutionDate: {
                                    /**
                                     * Change the execution date of a maintenance operation
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate
                                     */
                                    $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                                }
                                resetTaskState: {
                                    /**
                                     * Relaunch operation currently in error state
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState
                                     */
                                    $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                                }
                            };
                        }
                    };
                }
                host: {
                    /**
                     * List hosts in virtual datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(hostId: number): {
                        /**
                         * Get host
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
                         */
                        $get(): Promise<dedicatedCloud.Host>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        addHostSpare: {
                            /**
                             * Request host replacement
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                        }
                        hourlyConsumption: {
                            /**
                             * Get host hourly consumption
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption
                             */
                            $get(): Promise<dedicatedCloud.host.HourlyConsumption>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        location: {
                            /**
                             * Get host location
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/location
                             */
                            $get(): Promise<dedicatedCloud.host.Location>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        remove: {
                            /**
                             * Remove host
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        resilience: {
                            /**
                             * Get host resilience test status
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience
                             */
                            $get(): Promise<dedicatedCloud.HostResilience>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            canBeEnabled: {
                                /**
                                 * Check if resilience test can be performed
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled
                                 */
                                $get(): Promise<boolean>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            disable: {
                                /**
                                 * Stop resilience test
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable
                                 */
                                $post(): Promise<dedicatedCloud.Task>;
                            }
                            enable: {
                                /**
                                 * Start resilience test (will cut host network access)
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable
                                 */
                                $post(params?: { duration?: number }): Promise<dedicatedCloud.Task>;
                            }
                        }
                        task: {
                            /**
                             * List operations associated to host
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task
                             */
                            $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(taskId: number): {
                                /**
                                 * Get operation
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}
                                 */
                                $get(): Promise<dedicatedCloud.Task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                changeMaintenanceExecutionDate: {
                                    /**
                                     * Change the execution date of a maintenance operation
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate
                                     */
                                    $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                                }
                                resetTaskState: {
                                    /**
                                     * Relaunch operation currently in error state
                                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState
                                     */
                                    $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                                }
                            };
                        }
                    };
                }
                nsxtEdge: {
                    /**
                     * List NSX Edges within virtual datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Add a NSX-T Edge in the virtual datacenter
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(nsxtEdgeId: number): {
                        /**
                         * Remove NSX-T Edge from the virtual datacenter
                         * DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}
                         */
                        $delete(): Promise<dedicatedCloud.Task>;
                        /**
                         * Get NSX-T Edge details
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}
                         */
                        $get(): Promise<dedicatedCloud.NsxtEdge>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        relocateEdge: {
                            /**
                             * Relocate NSX Edge disks
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/relocateEdge
                             */
                            $post(params: { datastore: string }): Promise<dedicatedCloud.Task>;
                        }
                        resilience: {
                            /**
                             * Get NSX Edge resilience test status
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience
                             */
                            $get(): Promise<dedicatedCloud.NsxtEdgeResilience>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            canBeEnabled: {
                                /**
                                 * Check if resilience test can be performed
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/canBeEnabled
                                 */
                                $get(): Promise<boolean>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            disable: {
                                /**
                                 * Stop resilience test
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/disable
                                 */
                                $post(): Promise<dedicatedCloud.Task>;
                            }
                            enable: {
                                /**
                                 * Start resilience test (will put NSX Edge in maintenance mode)
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/resilience/enable
                                 */
                                $post(params?: { duration?: number }): Promise<dedicatedCloud.Task>;
                            }
                        }
                    };
                }
                nsxtEdgesResizingCapabilities: {
                    /**
                     * Resizing Capabilities of NSX-T edges cluster on specified datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdgesResizingCapabilities
                     */
                    $get(): Promise<dedicatedCloud.nsxt.NsxtEdgeSizingCapability>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                nsxtEdgesScalingCapabilities: {
                    /**
                     * Scaling Capabilities of NSX-T edges cluster on specified datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdgesScalingCapabilities
                     */
                    $get(): Promise<dedicatedCloud.nsxt.NsxtEdgeScalingCapability>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                orderNewFilerHourly: {
                    /**
                     * Order hourly datastore
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly
                     */
                    $post(params: { name: string }): Promise<dedicatedCloud.Task>;
                }
                orderNewHostHourly: {
                    /**
                     * Order hourly host
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly
                     */
                    $post(params: { name: string, vmwareClusterId?: string }): Promise<dedicatedCloud.Task>;
                }
                orderableFilerProfiles: {
                    /**
                     * List available datastore profiles
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles
                     */
                    $get(): Promise<dedicatedCloud.filer.Profile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                orderableHostProfiles: {
                    /**
                     * List available host profiles
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles
                     */
                    $get(): Promise<dedicatedCloud.host.Profile[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                privateGateway: {
                    /**
                     * Get private management gateway
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway
                     */
                    $get(): Promise<dedicatedCloud.PrivateGateway>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    disable: {
                        /**
                         * Remove the private management gateway
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable
                         */
                        $post(): Promise<dedicatedCloud.Task>;
                    }
                    enable: {
                        /**
                         * Deploy private management gateway
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable
                         */
                        $post(params: { ip: string, netmask: string, portgroup: string }): Promise<dedicatedCloud.Task>;
                    }
                    reconfigure: {
                        /**
                         * Reconfigure private management gateway
                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/reconfigure
                         */
                        $post(params?: { ip?: string, netmask?: string, newDatacenterId?: number, portgroup?: string }): Promise<dedicatedCloud.Task>;
                    }
                }
                resizeNsxtEdgeCluster: {
                    /**
                     * Resize NSX-T edges on specified datacenter
                     * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/resizeNsxtEdgeCluster
                     */
                    $post(params: { size: dedicatedCloudnsxtNsxtEdgeSizeEnum }): Promise<dedicatedCloud.Task>;
                }
                task: {
                    /**
                     * List operations associated to virtual datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(taskId: number): {
                        /**
                         * Get operation
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance operation
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            /**
                             * Relaunch operation currently in error state
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
                vm: {
                    /**
                     * List virtual machines within virtual datacenter
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(vmId: number): {
                        /**
                         * Get virtual machines
                         * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
                         */
                        $get(): Promise<dedicatedCloud.Vm>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        backupJob: {
                            /**
                             * Get virtual machine backup job
                             * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob
                             */
                            $get(): Promise<dedicatedCloud.BackupJob>;
                            /**
                             * Update backup job
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob
                             */
                            $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            disable: {
                                /**
                                 * Disable backup job
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable
                                 */
                                $post(): Promise<dedicatedCloud.Task>;
                            }
                            enable: {
                                /**
                                 * Enable backup job
                                 * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable
                                 */
                                $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                            }
                            restorePoints: {
                                /**
                                 * List restore points
                                 * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints
                                 */
                                $get(): Promise<number[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                $(restorePointId: number): {
                                    /**
                                     * Get restore point
                                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}
                                     */
                                    $get(): Promise<dedicatedCloud.RestorePoint>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                    restore: {
                                        /**
                                         * Restore from point
                                         * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore
                                         */
                                        $post(params: { filerId: number }): Promise<dedicatedCloud.Task>;
                                    }
                                };
                            }
                        }
                        disableBackup: {
                            /**
                             * Deactivate backup on virtual machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        disableCarp: {
                            /**
                             * Disable CARP on virtual machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableCarp
                             */
                            $post(params: { macAddress: string }): Promise<dedicatedCloud.Task>;
                        }
                        editBackup: {
                            /**
                             * Update backup configuration
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup
                             */
                            $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                        }
                        enableBackup: {
                            /**
                             * Activate backup on virtual machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup
                             */
                            $post(params: { backupDays: dedicatedCloudbackupBackupDaysEnum[] }): Promise<dedicatedCloud.Task>;
                        }
                        enableCarp: {
                            /**
                             * Enable CARP on virtual machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableCarp
                             */
                            $post(params: { macAddress: string }): Promise<dedicatedCloud.Task>;
                        }
                        removeLicense: {
                            /**
                             * Remove a managed license from virtual machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/removeLicense
                             */
                            $post(): Promise<dedicatedCloud.Task>;
                        }
                        restoreBackup: {
                            /**
                             * Restore backup
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup
                             */
                            $post(params: { filerId: number, filerType?: dedicatedCloud.filer.FilerTypeEnum, restorePointId: number }): Promise<dedicatedCloud.Task>;
                        }
                        setLicense: {
                            /**
                             * Set a managed license on virtual machine
                             * POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/setLicense
                             */
                            $post(params: { bypassGuestOsFamilyCheck: boolean, kmsLicense: dedicatedCloud.spla.KmsLicenseEnum }): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
                vmLicensed: {
                    /**
                     * Get virtual machines with managed license
                     * GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vmLicensed
                     */
                    $get(params?: { kmsLicense?: dedicatedCloudsplaKmsLicenseIncludingLegacyEnum }): Promise<dedicatedCloud.virtualMachineLicensingSummary[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
            };
        }
        federation: {
            /**
             * Get Active Directory federation option
             * GET /dedicatedCloud/{serviceName}/federation
             */
            $get(): Promise<dedicatedCloud.Federation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            activeDirectory: {
                /**
                 * List federated Active Directories
                 * GET /dedicatedCloud/{serviceName}/federation/activeDirectory
                 */
                $get(): Promise<number[]>;
                /**
                 * Create federated Active Directory
                 * POST /dedicatedCloud/{serviceName}/federation/activeDirectory
                 */
                $post(params: { baseDnForGroups: string, baseDnForUsers: string, description?: string, domainAlias: string, domainName: string, ip: string, ldapHostname?: string, ldapTcpPort?: number, noSsl?: boolean, password: string, sslThumbprint?: string, username: string }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(activeDirectoryId: number): {
                    /**
                     * Remove federated Active Directory
                     * DELETE /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}
                     */
                    $delete(): Promise<dedicatedCloud.Task>;
                    /**
                     * Get federated Active Directory
                     * GET /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}
                     */
                    $get(): Promise<dedicatedCloud.FederationAccessNetwork>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    changeProperties: {
                        /**
                         * Update federated Active Directory
                         * POST /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties
                         */
                        $post(params: { description?: string, password: string, sslThumbprint?: string, username: string }): Promise<dedicatedCloud.Task>;
                    }
                    grantActiveDirectoryGroup: {
                        /**
                         * Grant Active Directory group
                         * POST /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryGroup
                         */
                        $post(params: { groupName: string }): Promise<dedicatedCloud.Task>;
                    }
                    grantActiveDirectoryUser: {
                        /**
                         * Grant Active Directory user
                         * POST /dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser
                         */
                        $post(params: { username: string }): Promise<dedicatedCloud.Task>;
                    }
                };
            }
        }
        filer: {
            /**
             * List global datastores mounted on all virtual datacenters
             * GET /dedicatedCloud/{serviceName}/filer
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(filerId: number): {
                /**
                 * Get datastore
                 * GET /dedicatedCloud/{serviceName}/filer/{filerId}
                 */
                $get(): Promise<dedicatedCloud.Filer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                checkGlobalCompatible: {
                    /**
                     * Check ability to convert datastore to global datastore
                     * GET /dedicatedCloud/{serviceName}/filer/{filerId}/checkGlobalCompatible
                     */
                    $get(): Promise<boolean>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                convertToGlobal: {
                    /**
                     * Convert datastore to global datastore
                     * POST /dedicatedCloud/{serviceName}/filer/{filerId}/convertToGlobal
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                }
                hourlyConsumption: {
                    /**
                     * Get datastore hourly consumption
                     * GET /dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption
                     */
                    $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                location: {
                    /**
                     * Get datastore location
                     * GET /dedicatedCloud/{serviceName}/filer/{filerId}/location
                     */
                    $get(params?: { node?: dedicatedCloudfilerNodeTypeEnum }): Promise<dedicatedCloud.filer.Location>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                remove: {
                    /**
                     * Remove datastore
                     * POST /dedicatedCloud/{serviceName}/filer/{filerId}/remove
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                }
                task: {
                    /**
                     * List operations associated to datastore
                     * GET /dedicatedCloud/{serviceName}/filer/{filerId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(taskId: number): {
                        /**
                         * Get operation
                         * GET /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance operation
                             * POST /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            /**
                             * Relaunch operation currently in error state
                             * POST /dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        generateNsxvInventory: {
            /**
             * Generate a NSX-V inventory
             * POST /dedicatedCloud/{serviceName}/generateNsxvInventory
             */
            $post(): Promise<dedicatedCloud.Task>;
        }
        generateVxlanToVrackMapping: {
            /**
             * Generate a NSX-V VXLAN to vRack mapping
             * POST /dedicatedCloud/{serviceName}/generateVxlanToVrackMapping
             */
            $post(): Promise<dedicatedCloud.Task>;
        }
        globalTasks: {
            /**
             * List filtered operations
             * GET /dedicatedCloud/{serviceName}/globalTasks
             */
            $get(params?: { datacenterId?: number, 'endDate.from'?: string, 'endDate.to'?: string, 'executionDate.from'?: string, 'executionDate.to'?: string, filerId?: number, hostId?: number, 'lastModificationDate.from'?: string, 'lastModificationDate.to'?: string, name?: string, networkAccessId?: number, orderId?: number, parentTaskId?: number, state?: dedicatedCloudTaskStateEnum[], userId?: number, vlanId?: number }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        hcx: {
            /**
             * Get VMware Hybrid Cloud Extension option
             * GET /dedicatedCloud/{serviceName}/hcx
             */
            $get(): Promise<dedicatedCloud.Hcx>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            canBeDisabled: {
                /**
                 * Check if VMware Hybrid Cloud Extension option can be disabled
                 * GET /dedicatedCloud/{serviceName}/hcx/canBeDisabled
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            disable: {
                /**
                 * Disable VMware Hybrid Cloud Extension option
                 * POST /dedicatedCloud/{serviceName}/hcx/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                /**
                 * Enable VMware Hybrid Cloud Extension option
                 * POST /dedicatedCloud/{serviceName}/hcx/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        hds: {
            /**
             * Get HDS certification option
             * GET /dedicatedCloud/{serviceName}/hds
             */
            $get(): Promise<dedicatedCloud.Hds>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            canBeDisabled: {
                /**
                 * Check if HDS certification option can be disabled
                 * GET /dedicatedCloud/{serviceName}/hds/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canBeEnabled: {
                /**
                 * Check if HDS certification option can be enabled
                 * GET /dedicatedCloud/{serviceName}/hds/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            disable: {
                /**
                 * Disable HDS certification option
                 * POST /dedicatedCloud/{serviceName}/hds/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                /**
                 * Enable HDS certification option
                 * POST /dedicatedCloud/{serviceName}/hds/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        hipaa: {
            /**
             * Get HIPAA certification option
             * GET /dedicatedCloud/{serviceName}/hipaa
             */
            $get(): Promise<dedicatedCloud.Hipaa>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            canBeDisabled: {
                /**
                 * Check if HIPAA certification option can be disabled
                 * GET /dedicatedCloud/{serviceName}/hipaa/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canBeEnabled: {
                /**
                 * Check if HIPAA certification option can be enabled
                 * GET /dedicatedCloud/{serviceName}/hipaa/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            disable: {
                /**
                 * Disable HIPAA certification option
                 * POST /dedicatedCloud/{serviceName}/hipaa/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                /**
                 * Enable HIPAA certification option
                 * POST /dedicatedCloud/{serviceName}/hipaa/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        iam: {
            /**
             * Get OVHcloud IAM option
             * GET /dedicatedCloud/{serviceName}/iam
             */
            $get(): Promise<dedicatedCloud.Iam>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            addRole: {
                /**
                 * Create IAM role
                 * POST /dedicatedCloud/{serviceName}/iam/addRole
                 */
                $post(params: { name: string }): Promise<dedicatedCloud.Task>;
            }
            canBeDisabled: {
                /**
                 * Check if OVHcloud IAM option can be disabled
                 * GET /dedicatedCloud/{serviceName}/iam/canBeDisabled
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canBeEnabled: {
                /**
                 * Check if OVHcloud IAM option can be enabled
                 * GET /dedicatedCloud/{serviceName}/iam/canBeEnabled
                 */
                $get(): Promise<boolean>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            disable: {
                /**
                 * Disable OVHcloud IAM option
                 * POST /dedicatedCloud/{serviceName}/iam/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                /**
                 * Enable OVHcloud IAM option
                 * POST /dedicatedCloud/{serviceName}/iam/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        ip: {
            /**
             * List IP blocks
             * GET /dedicatedCloud/{serviceName}/ip
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(network: string): {
                /**
                 * Get IP block
                 * GET /dedicatedCloud/{serviceName}/ip/{network}
                 */
                $get(): Promise<dedicatedCloud.Ip>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                details: {
                    /**
                     * Get details about this IP Block
                     * GET /dedicatedCloud/{serviceName}/ip/{network}/details
                     */
                    $get(): Promise<dedicatedCloud.IpDetails[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                task: {
                    /**
                     * List operations associated to IP block
                     * GET /dedicatedCloud/{serviceName}/ip/{network}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(taskId: number): {
                        /**
                         * Get operation
                         * GET /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance operation
                             * POST /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            /**
                             * Relaunch operation currently in error state
                             * POST /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        newPrices: {
            /**
             * Get new prices
             * GET /dedicatedCloud/{serviceName}/newPrices
             */
            $get(): Promise<dedicatedCloud.resourceNewPrices>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        nsx: {
            /**
             * Get VMware NSX-V option
             * GET /dedicatedCloud/{serviceName}/nsx
             */
            $get(): Promise<dedicatedCloud.Nsx>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            canBeDisabled: {
                /**
                 * Check if VMware NSX-V option can be disabled
                 * GET /dedicatedCloud/{serviceName}/nsx/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canBeEnabled: {
                /**
                 * Check if VMware NSX-V option can be enabled
                 * GET /dedicatedCloud/{serviceName}/nsx/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            disable: {
                /**
                 * Disable VMware NSX-V option
                 * POST /dedicatedCloud/{serviceName}/nsx/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                /**
                 * Enable VMware NSX-V option
                 * POST /dedicatedCloud/{serviceName}/nsx/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        nsxt: {
            /**
             * Get VMware NSX-T option
             * GET /dedicatedCloud/{serviceName}/nsxt
             */
            $get(): Promise<dedicatedCloud.Nsxt>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        orderNewFilerHourly: {
            /**
             * Order hourly global datastore mounted on all virtual datacenters
             * POST /dedicatedCloud/{serviceName}/orderNewFilerHourly
             */
            $post(params: { name: string }): Promise<dedicatedCloud.Task>;
        }
        orderableIpCountries: {
            /**
             * Get orderable IP blocks countries
             * GET /dedicatedCloud/{serviceName}/orderableIpCountries
             */
            $get(): Promise<dedicatedCloud.IpCountriesEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        passwordPolicy: {
            /**
             * Get password policy
             * GET /dedicatedCloud/{serviceName}/passwordPolicy
             */
            $get(): Promise<dedicatedCloud.passwordPolicy>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        pcidss: {
            /**
             * Get PCI-DSS certification option
             * GET /dedicatedCloud/{serviceName}/pcidss
             */
            $get(): Promise<dedicatedCloud.PciDss>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            canBeDisabled: {
                /**
                 * Check if PCI-DSS certification option can be disabled
                 * GET /dedicatedCloud/{serviceName}/pcidss/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canBeEnabled: {
                /**
                 * Check if PCI-DSS certification option can be enabled
                 * GET /dedicatedCloud/{serviceName}/pcidss/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            disable: {
                /**
                 * Disable PCI-DSS certification option
                 * POST /dedicatedCloud/{serviceName}/pcidss/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                /**
                 * Enable PCI-DSS certification option
                 * POST /dedicatedCloud/{serviceName}/pcidss/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
        }
        resetTriggeredAlarm: {
            /**
             * Reset all hypervisor triggered alarms
             * POST /dedicatedCloud/{serviceName}/resetTriggeredAlarm
             */
            $post(): Promise<dedicatedCloud.Task>;
        }
        robot: {
            /**
             * List robots
             * GET /dedicatedCloud/{serviceName}/robot
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(name: string): {
                /**
                 * Get robot
                 * GET /dedicatedCloud/{serviceName}/robot/{name}
                 */
                $get(): Promise<dedicatedCloud.Robot>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        securityOptions: {
            /**
             * Get security options
             * GET /dedicatedCloud/{serviceName}/securityOptions
             */
            $get(): Promise<dedicatedCloud.SecurityOption>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            compatibilityMatrix: {
                /**
                 * Get security options compatibility matrix
                 * GET /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix
                 */
                $get(params?: { showIncompatible?: boolean, showInternal?: boolean }): Promise<dedicatedCloud.securityOption.CompatibilityMatrixEntry[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            dependenciesTree: {
                /**
                 * Get security options dependencies tree
                 * GET /dedicatedCloud/{serviceName}/securityOptions/dependenciesTree
                 */
                $get(params: { option: dedicatedCloudsecurityOptionSecurityOptionEnum }): Promise<dedicatedCloud.securityOption.DependenciesTree>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            pendingOptions: {
                /**
                 * Get pending activation security options
                 * GET /dedicatedCloud/{serviceName}/securityOptions/pendingOptions
                 */
                $get(): Promise<dedicatedCloud.securityOption.SecurityOptionEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            resumePendingEnabling: {
                /**
                 * Retry pending security option activation
                 * POST /dedicatedCloud/{serviceName}/securityOptions/resumePendingEnabling
                 */
                $post(params: { option: dedicatedCloudsecurityOptionSecurityOptionEnum }): Promise<dedicatedCloud.Task>;
            }
        }
        serviceInfos: {
            /**
             * Get service information
             * GET /dedicatedCloud/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Update service information
             * PUT /dedicatedCloud/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        servicePack: {
            /**
             * Get service pack information
             * GET /dedicatedCloud/{serviceName}/servicePack
             */
            $get(): Promise<dedicatedCloud.servicePackStatus>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        servicePacks: {
            /**
             * List service packs
             * GET /dedicatedCloud/{serviceName}/servicePacks
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(name: string): {
                /**
                 * Get service pack
                 * GET /dedicatedCloud/{serviceName}/servicePacks/{name}
                 */
                $get(): Promise<dedicatedCloud.ServicePack>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        task: {
            /**
             * List operations
             * GET /dedicatedCloud/{serviceName}/task
             */
            $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(taskId: number): {
                /**
                 * Get operation
                 * GET /dedicatedCloud/{serviceName}/task/{taskId}
                 */
                $get(): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                changeMaintenanceExecutionDate: {
                    /**
                     * Change the execution date of a maintenance operation
                     * POST /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
                     */
                    $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                }
                resetTaskState: {
                    /**
                     * Relaunch operation currently in error state
                     * POST /dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState
                     */
                    $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                }
            };
        }
        terminate: {
            /**
             * Ask for the termination of your service
             * POST /dedicatedCloud/{serviceName}/terminate
             */
            $post(): Promise<string>;
        }
        twoFAWhitelist: {
            /**
             * List two factor authentication whitelisted networks
             * GET /dedicatedCloud/{serviceName}/twoFAWhitelist
             */
            $get(): Promise<number[]>;
            /**
             * Create two factor authentication whitelisted network
             * POST /dedicatedCloud/{serviceName}/twoFAWhitelist
             */
            $post(params: { description: string, ip: string }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(id: number): {
                /**
                 * Remove two factor authentication whitelisted network
                 * DELETE /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Get two factor authentication whitelisted network
                 * GET /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
                 */
                $get(): Promise<dedicatedCloud.twoFAWhitelist>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                changeProperties: {
                    /**
                     * Update two factor authentication whitelisted network
                     * POST /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties
                     */
                    $post(params?: { description?: string }): Promise<dedicatedCloud.Task>;
                }
            };
        }
        upgradeHypervisor: {
            /**
             * Upgrade hypervisor to next version
             * POST /dedicatedCloud/{serviceName}/upgradeHypervisor
             */
            $post(): Promise<dedicatedCloud.Task>;
        }
        upgradeVcenter: {
            /**
             * Upgrade hypervisor to next version
             * POST /dedicatedCloud/{serviceName}/upgradeVcenter
             */
            $post(params?: { release?: dedicatedCloud.releaseEnum }): Promise<dedicatedCloud.Task>;
        }
        user: {
            /**
             * List users
             * GET /dedicatedCloud/{serviceName}/user
             */
            $get(params?: { name?: string }): Promise<number[]>;
            /**
             * Create user
             * POST /dedicatedCloud/{serviceName}/user
             */
            $post(params: { canAddRessource?: boolean, canManageRights?: boolean, email?: string, encryptionRight?: boolean, expirationDate?: string, firstName?: string, lastName?: string, name: string, networkRole?: dedicatedCloudrightNetworkRoleEnum, nsxRight?: boolean, password?: string, phoneNumber?: string, receiveAlerts?: boolean, right?: dedicatedCloudrightRightEnum, tokenValidator?: boolean, vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum }): Promise<dedicatedCloud.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(userId: number): {
                /**
                 * Remove user
                 * DELETE /dedicatedCloud/{serviceName}/user/{userId}
                 */
                $delete(): Promise<dedicatedCloud.Task>;
                /**
                 * Update user
                 * GET /dedicatedCloud/{serviceName}/user/{userId}
                 */
                $get(): Promise<dedicatedCloud.User>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                changePassword: {
                    /**
                     * Change user password
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/changePassword
                     */
                    $post(params?: { password?: string }): Promise<dedicatedCloud.Task>;
                }
                changeProperties: {
                    /**
                     * Update user
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/changeProperties
                     */
                    $post(params?: { canManageIpFailOvers?: boolean, canManageNetwork?: boolean, canManageRights?: boolean, email?: string, encryptionRight?: boolean, firstName?: string, fullAdminRo?: boolean, lastName?: string, nsxRight?: boolean, phoneNumber?: string, receiveAlerts?: boolean, tokenValidator?: boolean }): Promise<dedicatedCloud.Task>;
                }
                confirmPhoneNumber: {
                    /**
                     * Confirm user phone number
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/confirmPhoneNumber
                     */
                    $post(params: { token: string }): Promise<dedicatedCloud.Task>;
                }
                disable: {
                    /**
                     * Disable user
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/disable
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                }
                enable: {
                    /**
                     * Enable user
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/enable
                     */
                    $post(): Promise<dedicatedCloud.Task>;
                }
                objectRight: {
                    /**
                     * List user object rights
                     * GET /dedicatedCloud/{serviceName}/user/{userId}/objectRight
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Create user object right
                     * POST /dedicatedCloud/{serviceName}/user/{userId}/objectRight
                     */
                    $post(params: { propagate?: boolean, right: dedicatedCloudrightRightEnum, type: dedicatedCloudrightUserObjectRightTypeEnum, vmwareObjectId: string }): Promise<dedicatedCloud.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(objectRightId: number): {
                        /**
                         * Remove user object right
                         * DELETE /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}
                         */
                        $delete(): Promise<dedicatedCloud.Task>;
                        /**
                         * Get user object right
                         * GET /dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}
                         */
                        $get(): Promise<dedicatedCloud.ObjectRight>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    };
                }
                right: {
                    /**
                     * List user datacenter rights
                     * GET /dedicatedCloud/{serviceName}/user/{userId}/right
                     */
                    $get(): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(rightId: number): {
                        /**
                         * Get user datacenter right
                         * GET /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
                         */
                        $get(): Promise<dedicatedCloud.Right>;
                        /**
                         * Update user datacenter right
                         * PUT /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
                         */
                        $put(params?: { canAddRessource?: boolean, datacenterId?: number, networkRole?: dedicatedCloudrightNetworkRoleEnum, right?: dedicatedCloudrightRightEnum, rightId?: number, vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum }): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    };
                }
                task: {
                    /**
                     * List operations associated to user
                     * GET /dedicatedCloud/{serviceName}/user/{userId}/task
                     */
                    $get(params?: { name?: string, state?: dedicatedCloudTaskStateEnum }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(taskId: number): {
                        /**
                         * Get operation
                         * GET /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}
                         */
                        $get(): Promise<dedicatedCloud.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        changeMaintenanceExecutionDate: {
                            /**
                             * Change the execution date of a maintenance operation
                             * POST /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate
                             */
                            $post(params: { executionDate: string }): Promise<dedicatedCloud.Task>;
                        }
                        resetTaskState: {
                            /**
                             * Relaunch operation currently in error state
                             * POST /dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState
                             */
                            $post(params: { reason: string }): Promise<dedicatedCloud.Task>;
                        }
                    };
                }
            };
        }
        vcenterVersion: {
            /**
             * Get available upgrades for hypervisor
             * GET /dedicatedCloud/{serviceName}/vcenterVersion
             */
            $get(): Promise<dedicatedCloud.vcenter>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        vendor: {
            /**
             * Get vendor information
             * GET /dedicatedCloud/{serviceName}/vendor
             */
            $get(): Promise<dedicatedCloud.Vendor>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            objectType: {
                /**
                 * Get vendor object types
                 * POST /dedicatedCloud/{serviceName}/vendor/objectType
                 */
                $post(): Promise<string[]>;
            }
            ovhId: {
                /**
                 * Get OVHcloud API id for object
                 * POST /dedicatedCloud/{serviceName}/vendor/ovhId
                 */
                $post(params: { objectType: dedicatedCloud.VendorObjectTypeEnum, vendorId: string }): Promise<dedicatedCloud.vendor.OvhId>;
            }
        }
        vlan: {
            /**
             * List vLANs
             * GET /dedicatedCloud/{serviceName}/vlan
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(vlanId: number): {
                /**
                 * Get vLAN
                 * GET /dedicatedCloud/{serviceName}/vlan/{vlanId}
                 */
                $get(): Promise<dedicatedCloud.Vlan>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        vmEncryption: {
            /**
             * Get virtual machine encryption option
             * GET /dedicatedCloud/{serviceName}/vmEncryption
             */
            $get(): Promise<dedicatedCloud.VMEncryption>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            kms: {
                /**
                 * List virtual machine encryption KMS servers
                 * GET /dedicatedCloud/{serviceName}/vmEncryption/kms
                 */
                $get(): Promise<number[]>;
                /**
                 * Create virtual machine encryption KMS server
                 * POST /dedicatedCloud/{serviceName}/vmEncryption/kms
                 */
                $post(params: { description?: string, ip: string, sslThumbprint: string }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(kmsId: number): {
                    /**
                     * Remove virtual machine encryption KMS server
                     * DELETE /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
                     */
                    $delete(): Promise<dedicatedCloud.Task>;
                    /**
                     * Get virtual machine encryption KMS server
                     * GET /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
                     */
                    $get(): Promise<dedicatedCloud.VMEncryptionAccessNetwork>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    changeProperties: {
                        /**
                         * Update virtual machine encryption KMS server
                         * POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties
                         */
                        $post(params: { description?: string, sslThumbprint: string }): Promise<dedicatedCloud.Task>;
                    }
                };
            }
        }
        vrack: {
            /**
             * List vRacks
             * GET /dedicatedCloud/{serviceName}/vrack
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            $(vrack: string): {
                /**
                 * Remove VMware on OVHcloud from vRack
                 * DELETE /dedicatedCloud/{serviceName}/vrack/{vrack}
                 */
                $delete(): Promise<vrack.Task>;
                /**
                 * Get vRack
                 * GET /dedicatedCloud/{serviceName}/vrack/{vrack}
                 */
                $get(): Promise<vrack.dedicatedCloud>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            };
        }
        vrops: {
            /**
             * Get VMware Aria Operations option
             * GET /dedicatedCloud/{serviceName}/vrops
             */
            $get(): Promise<dedicatedCloud.Vrops>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            canBeDisabled: {
                /**
                 * Check if VMware Aria Operations option can be disabled
                 * GET /dedicatedCloud/{serviceName}/vrops/canBeDisabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            canBeEnabled: {
                /**
                 * Check if VMware Aria Operations option can be enabled
                 * GET /dedicatedCloud/{serviceName}/vrops/canBeEnabled
                 */
                $get(): Promise<dedicatedCloud.optionCompatibility>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            disable: {
                /**
                 * Disable VMware Aria Operations option
                 * POST /dedicatedCloud/{serviceName}/vrops/disable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            enable: {
                /**
                 * Enable VMware Aria Operations option
                 * POST /dedicatedCloud/{serviceName}/vrops/enable
                 */
                $post(): Promise<dedicatedCloud.Task>;
            }
            outgoingFlow: {
                /**
                 * List VMware Aria Operations outgoing flows
                 * GET /dedicatedCloud/{serviceName}/vrops/outgoingFlow
                 */
                $get(): Promise<number[]>;
                /**
                 * Create VMware Aria Operations outgoing flow
                 * POST /dedicatedCloud/{serviceName}/vrops/outgoingFlow
                 */
                $post(params: { description?: string, ip: string, servicePort: number }): Promise<dedicatedCloud.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(outgoingFlowId: number): {
                    /**
                     * Remove VMware Aria Operations outgoing flow
                     * DELETE /dedicatedCloud/{serviceName}/vrops/outgoingFlow/{outgoingFlowId}
                     */
                    $delete(): Promise<dedicatedCloud.Task>;
                    /**
                     * Get VMware Aria Operations outgoing flows
                     * GET /dedicatedCloud/{serviceName}/vrops/outgoingFlow/{outgoingFlowId}
                     */
                    $get(): Promise<dedicatedCloud.VropsOutgoingFlow>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    changeProperties: {
                        /**
                         * Update VMware Aria Operations outgoing flow
                         * POST /dedicatedCloud/{serviceName}/vrops/outgoingFlow/{outgoingFlowId}/changeProperties
                         */
                        $post(params?: { description?: string }): Promise<dedicatedCloud.Task>;
                    }
                };
            }
            upgrade: {
                /**
                 * Upgrade VMware Aria Operations
                 * POST /dedicatedCloud/{serviceName}/vrops/upgrade
                 */
                $post(params?: { version?: string }): Promise<dedicatedCloud.Task>;
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
type dedicatedCloudbackupReplicationSyncStatus = dedicatedCloud.backup.ReplicationSyncStatus;
type dedicatedCloudcapabilitiesFeatureStatusEnum = dedicatedCloud.capabilities.FeatureStatusEnum;
type dedicatedCloudclusterAutoScale = dedicatedCloud.cluster.AutoScale;
type dedicatedCloudclusterClusterDrsModeEnum = dedicatedCloud.cluster.ClusterDrsModeEnum;
type dedicatedCloudclusterClusterConfigsStatusEnum = dedicatedCloud.cluster.ClusterConfigsStatusEnum;
type dedicatedCloudHypervisorVersionEnum = dedicatedCloud.HypervisorVersionEnum;
type dedicatedCloudrightNetworkRoleEnum = dedicatedCloud.right.NetworkRoleEnum;
type dedicatedCloudCommercialNameEnum = dedicatedCloud.CommercialNameEnum;
type dedicatedCloudvmwareBoolPolicy = dedicatedCloud.vmwareBoolPolicy;
type dedicatedCloudoptionAccessNetworkStateEnum = dedicatedCloud.optionAccessNetwork.StateEnum;
type dedicatedCloudfilerNodeTypeEnum = dedicatedCloud.filer.NodeTypeEnum;
type dedicatedCloudressourcesBillingTypeEnum = dedicatedCloud.ressources.BillingTypeEnum;
type dedicatedCloudfilerConnexionStateEnum = dedicatedCloud.filer.ConnexionStateEnum;
type dedicatedCloudfilerStateEnum = dedicatedCloud.filer.StateEnum;
type dedicatedCloudhostSystemConnectionState = dedicatedCloud.hostSystemConnectionState;
type dedicatedCloudhostStateEnum = dedicatedCloud.host.StateEnum;
type dedicatedCloudHostStockHypervisor = dedicatedCloud.HostStockHypervisor;
type dedicatedCloudHostStockProcGen = dedicatedCloud.HostStockProcGen;
type dedicatedCloudBlockRegisterEnum = dedicatedCloud.BlockRegisterEnum;
type dedicatedCloudipUsageEnum = dedicatedCloud.ipUsageEnum;
type dedicatedCloudoptionDatacenterOptionState = dedicatedCloud.option.DatacenterOptionState;
type dedicatedCloudnsxtNsxtEdgeSizeEnum = dedicatedCloud.nsxt.NsxtEdgeSizeEnum;
type dedicatedCloudStateEnum = dedicatedCloud.StateEnum;
type dedicatedCloudrightRightEnum = dedicatedCloud.right.RightEnum;
type dedicatedCloudrightUserObjectRightTypeEnum = dedicatedCloud.right.UserObjectRightTypeEnum;
type dedicatedCloudbackupBackupTypeEnum = dedicatedCloud.backup.BackupTypeEnum;
type dedicatedCloudrightVmNetworkRoleEnum = dedicatedCloud.right.VmNetworkRoleEnum;
type dedicatedCloudsecurityOptionStateEnum = dedicatedCloud.securityOption.StateEnum;
type dedicatedCloudsyslogForwardLogLevelEnum = dedicatedCloud.syslogForward.LogLevelEnum;
type dedicatedCloudsyslogForwardSourceTypeEnum = dedicatedCloud.syslogForward.SourceTypeEnum;
type dedicatedCloudTaskStateEnum = dedicatedCloud.TaskStateEnum;
type dedicatedClouduserActivationStateEnum = dedicatedCloud.user.ActivationStateEnum;
type dedicatedClouduserTypeEnum = dedicatedCloud.user.TypeEnum;
type dedicatedClouduserIdentityProviderTypeEnum = dedicatedCloud.user.IdentityProviderTypeEnum;
type dedicatedClouduserStateEnum = dedicatedCloud.user.StateEnum;
type dedicatedCloudvlanStateEnum = dedicatedCloud.vlan.StateEnum;
type dedicatedCloudvlanTypeEnum = dedicatedCloud.vlan.TypeEnum;
type dedicatedCloudbackupBackup = dedicatedCloud.backup.Backup;
type dedicatedCloudvirtualMachineCdrom = dedicatedCloud.virtualMachineCdrom;
type dedicatedCloudvmFiler = dedicatedCloud.vmFiler;
type dedicatedCloudsplaKmsLicenseIncludingLegacyEnum = dedicatedCloud.spla.KmsLicenseIncludingLegacyEnum;
type dedicatedCloudvmNetwork = dedicatedCloud.vmNetwork;
type dedicatedCloudvirtualMachinePowerState = dedicatedCloud.virtualMachinePowerState;
type dedicatedCloudvirtualMachineFaultToleranceState = dedicatedCloud.virtualMachineFaultToleranceState;
type dedicatedCloudbackupJobStateEnum = dedicatedCloud.backup.JobStateEnum;
type dedicatedCloudbackupRestorePoint = dedicatedCloud.backup.RestorePoint;
type dedicatedCloudbackupOptimizeMessageEnum = dedicatedCloud.backup.OptimizeMessageEnum;
type dedicatedCloudbackupOptimizeRecommendationEnum = dedicatedCloud.backup.OptimizeRecommendationEnum;
type dedicatedCloudclusterAutoScaleModeEnum = dedicatedCloud.cluster.AutoScaleModeEnum;
type dedicatedCloudrequiredAddon = dedicatedCloud.requiredAddon;
type dedicatedCloudBillingTypeEnum = dedicatedCloud.BillingTypeEnum;
type dedicatedCloudGenerationEnum = dedicatedCloud.GenerationEnum;
type dedicatedCloudManagementInterfaceEnum = dedicatedCloud.ManagementInterfaceEnum;
type dedicatedCloudproductReferenceEnum = dedicatedCloud.productReferenceEnum;
type dedicatedCloudUserAccessPolicyEnum = dedicatedCloud.UserAccessPolicyEnum;
type dedicatedCloudUserLogoutPolicyEnum = dedicatedCloud.UserLogoutPolicyEnum;
type dedicatedCloudVersion = dedicatedCloud.Version;
type dedicatedClouddisasterRecoverySiteRoleEnum = dedicatedCloud.disasterRecovery.SiteRoleEnum;
type dedicatedClouddisasterRecoverySiteTypeEnum = dedicatedCloud.disasterRecovery.SiteTypeEnum;
type dedicatedClouddisasterRecoveryDrpTypeEnum = dedicatedCloud.disasterRecovery.DrpTypeEnum;
type dedicatedClouddisasterRecoveryLocalSiteDetails = dedicatedCloud.disasterRecovery.LocalSiteDetails;
type dedicatedClouddisasterRecoveryRemoteSiteDetails = dedicatedCloud.disasterRecovery.RemoteSiteDetails;
type dedicatedClouddisasterRecoveryVpnConfigStateEnum = dedicatedCloud.disasterRecovery.VpnConfigStateEnum;
type dedicatedCloudLogSubscriptionResource = dedicatedCloud.LogSubscriptionResource;
type dedicatedCloudresourceNewPricesEntry = dedicatedCloud.resourceNewPricesEntry;
type dedicatedCloudressourcesResourceTypeEnum = dedicatedCloud.ressources.ResourceTypeEnum;
type dedicatedCloudsecurityOptionSecurityOptionEnum = dedicatedCloud.securityOption.SecurityOptionEnum;
type dedicatedCloudsecurityOptionErrorMessage = dedicatedCloud.securityOption.ErrorMessage;
type dedicatedCloudsecurityOptionErrorEnum = dedicatedCloud.securityOption.ErrorEnum;
type dedicatedCloudservicePackEnum = dedicatedCloud.servicePackEnum;
type dedicatedCloudservicePackStateEnum = dedicatedCloud.servicePackStateEnum;
type dedicatedCloudTwoFAWhitelistStateEnum = dedicatedCloud.TwoFAWhitelistStateEnum;
type dedicatedCloudvmFilerDisk = dedicatedCloud.vmFilerDisk;
type dedicatedCloudvmNetworkBacking = dedicatedCloud.vmNetworkBacking;
type dedicatedCloudvirtualDeviceConnectInfoStatus = dedicatedCloud.virtualDeviceConnectInfoStatus;
type dedicatedCloudDvsSecurityPolicy = dedicatedCloud.DvsSecurityPolicy;
type dedicatedCloudvmNetworkBackingTypeEnum = dedicatedCloud.vmNetworkBackingTypeEnum;

export declare function proxyDedicatedCloud(ovhEngine: OvhRequestable): DedicatedCloud;
export default proxyDedicatedCloud;
