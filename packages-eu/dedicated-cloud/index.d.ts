import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dedicatedCloud Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace coreTypes {
    type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw";
}
export declare namespace dedicatedCloud {
    interface AllowedNetwork {
        description?: string;
        network: string;
        networkAccessId: number;
        state: dedicatedCloudAllowedNetworkStateEnum;
    }
    type AllowedNetworkStateEnum = "allowed" | "toDelete" | "toUpdate";
    interface AutoScaleConfig {
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
    interface AutoScaleVirtual {
        state: dedicatedCloudoptionStateEnum;
    }
    interface Backup {
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
    interface BackupJob {
        allocatedDisk?: number;
        backupDays?: dedicatedCloudbackupBackupDaysEnum[];
        encryption?: boolean;
        offerType?: dedicatedCloudbackupOfferTypeEnum;
        retentionTime?: number;
        state: dedicatedCloudbackupStateEnum;
        vmName?: string;
    }
    type BackupStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "removing";
    type BillingTypeEnum = "demo" | "monthly";
    type BlockRegisterEnum = "arin" | "ripe";
    interface Capabilities {
        addRessourceRightStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        backupStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        canAddUser: boolean;
        fullAdminRoUserStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        nexus1000vStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
        upgradable: boolean;
        userAccessPolicyStatus: dedicatedCloudcapabilitiesFeatureStatusEnum;
    }
    interface Cluster {
        autoscale?: dedicatedCloudclusterAutoScale;
        drsMode: dedicatedCloudclusterClusterDrsModeEnum;
        drsStatus: dedicatedCloudclusterClusterConfigsStatusEnum;
        evcMode: string;
        haStatus: dedicatedCloudclusterClusterConfigsStatusEnum;
        id: number;
        name: string;
        vmwareClusterId: string;
    }
    type CommercialNameEnum = "DC" | "DC-ANCIENT" | "DC-ANCIENT-HDS" | "DC-ANCIENT-HIPAA" | "DC-ANCIENT-NSX" | "DC-ANCIENT-NSX-VROPS" | "DC-ANCIENT-PCIDSS" | "DC-ANCIENT-UNKNOWN" | "DC-ANCIENT-VROPS" | "DC-HDS" | "DC-HIPAA" | "DC-LEGACY" | "DC-LEGACY-HDS" | "DC-LEGACY-HIPAA" | "DC-LEGACY-NSX" | "DC-LEGACY-NSX-VROPS" | "DC-LEGACY-PCIDSS" | "DC-LEGACY-UNKNOWN" | "DC-LEGACY-VROPS" | "DC-NSX" | "DC-NSX-VROPS" | "DC-PCIDSS" | "DC-UNKNOWN" | "DC-VROPS" | "SDDC" | "SDDC-HDS" | "SDDC-HIPAA" | "SDDC-LEGACY" | "SDDC-LEGACY-HDS" | "SDDC-LEGACY-HIPAA" | "SDDC-LEGACY-PCIDSS" | "SDDC-LEGACY-UNKNOWN" | "SDDC-LEGACY-VROPS" | "SDDC-LEGACY-VROPS-WITHOUT-NSX" | "SDDC-LEGACY-WITHOUT-NSX" | "SDDC-PCIDSS" | "SDDC-UNKNOWN" | "SDDC-VROPS" | "SDDC-VROPS-WITHOUT-NSX" | "SDDC-WITHOUT-NSX" | "UNKNOWN" | "UNKNOWN-HDS" | "UNKNOWN-HIPAA" | "UNKNOWN-NSX" | "UNKNOWN-NSX-VROPS" | "UNKNOWN-PCIDSS" | "UNKNOWN-UNKNOWN" | "UNKNOWN-VROPS";
    interface CommercialRange {
        allowedHypervisorVersions: dedicatedCloudHypervisorVersionEnum[];
        allowedNetworkRoles: dedicatedCloudrightNetworkRoleEnum[];
        commercialRangeName: string;
        dedicatedCloudVersion: string;
        range?: string;
    }
    interface Datacenter {
        commercialName: dedicatedCloudCommercialNameEnum;
        commercialRangeName: string;
        datacenterId: number;
        description: string;
        horizonViewName?: string;
        isRemovable: boolean;
        name: string;
        version: string;
    }
    interface Federation {
        state: dedicatedCloudoptionStateEnum;
    }
    interface FederationAccessNetwork {
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
    interface Filer {
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
    type GenerationEnum = "1.0" | "2.0";
    interface Hcx {
        build?: string;
        state: dedicatedCloudoptionStateEnum;
        version?: string;
    }
    interface Hds {
        state: dedicatedCloudoptionStateEnum;
    }
    interface Hipaa {
        state: dedicatedCloudoptionStateEnum;
    }
    interface Host {
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
    interface HostProfile {
        id: number;
        name: string;
    }
    interface HostStockHypervisor {
        value: number;
        version: string;
    }
    interface HostStockProcGen {
        cpuGeneration: string;
        value: dedicatedCloudHostStockHypervisor[];
    }
    interface HostStockProfile {
        id: number;
        name: string;
        ref: string;
        value: dedicatedCloudHostStockProcGen[];
    }
    type HypervisorVersionEnum = "4.1" | "5.0" | "5.1" | "5.5" | "6.0" | "6.5" | "hv3.1" | "hvdc3.1" | "nc1.0";
    interface Ip {
        country: string;
        description: string;
        network: string;
        networkName: string;
        register: dedicatedCloudBlockRegisterEnum;
        vlanNumber: number;
    }
    type IpCountriesEnum = "be" | "ca" | "ch" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "us";
    interface IpDetails {
        ip: string;
        reverse?: string;
        usage: dedicatedCloudipUsageEnum;
        usageDetails?: string;
    }
    type ManagementInterfaceEnum = "azure" | "openstack" | "systemcenter" | "vcloud" | "vcsa" | "vsphere";
    interface Nsx {
        state: dedicatedCloudoptionStateEnum;
        url?: string;
    }
    interface ObjectRight {
        name: string;
        objectRightId: number;
        propagate: boolean;
        right: dedicatedCloudrightRightEnum;
        type: dedicatedCloudrightUserObjectRightTypeEnum;
        vmwareObjectId: string;
    }
    interface Os {
        fullName: string;
        lastModificationDate: string;
        shortName: string;
    }
    interface PccStockProfile {
        count: number;
        mode: string;
        realVersion: string;
    }
    interface PccZone {
        id: number;
        pccZone: string;
    }
    interface PciDss {
        state: dedicatedCloudoptionStateEnum;
    }
    interface PrivateGateway {
        customerIp?: string;
        customerNetmask?: string;
        customerPortGroup?: string;
        state: dedicatedCloudoptionStateEnum;
    }
    interface RestorePoint {
        creationTime?: string;
        isCorrupted: boolean;
        restorePointId: number;
        restorePointSize: complexType.UnitAndValue<number>;
        type?: dedicatedCloudbackupBackupTypeEnum;
    }
    interface Right {
        canAddRessource: boolean;
        datacenterId: number;
        networkRole: dedicatedCloudrightNetworkRoleEnum;
        right: dedicatedCloudrightRightEnum;
        rightId: number;
        vmNetworkRole: dedicatedCloudrightVmNetworkRoleEnum;
    }
    interface Robot {
        criticity: string;
        description?: string;
        enabled: boolean;
        name: string;
        type: string;
    }
    interface ServicePack {
        name: string;
        options: string[];
    }
    type StateEnum = "available" | "delivered" | "disabled" | "disabling" | "error" | "migrating" | "provisionning" | "recycling" | "reserved" | "toDisable" | "toProvision" | "toRecycle" | "toRemove" | "toUnprovision" | "unprovisionning";
    interface Task {
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
    type TaskStateEnum = "canceled" | "doing" | "done" | "error" | "fixing" | "toCancel" | "toCreate" | "todo" | "unknown" | "waitingForChilds" | "waitingTodo";
    type TwoFAWhitelistStateEnum = "enabled" | "enabling" | "error" | "migrating" | "removed" | "removing";
    interface User {
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
    type UserAccessPolicyEnum = "filtered" | "open";
    type UserLogoutPolicyEnum = "first" | "last";
    interface VMEncryption {
        state: dedicatedCloudoptionStateEnum;
    }
    interface VMEncryptionAccessNetwork {
        description: string;
        ip: string;
        kmsId: number;
        kmsTcpPort: number;
        sslThumbprint: string;
        state: dedicatedCloudoptionAccessNetworkStateEnum;
    }
    interface Vendor {
        vendorName: string;
    }
    type VendorObjectTypeEnum = "cluster" | "datacenter" | "filer" | "host" | "vm";
    interface Version {
        build: string;
        major: string;
        minor: string;
    }
    interface Vlan {
        name: string;
        routingRateLimit: string;
        state: dedicatedCloudvlanStateEnum;
        type: dedicatedCloudvlanTypeEnum;
        vlanId: number;
        vlanNumber: number;
    }
    interface Vm {
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
    interface Vrops {
        state: dedicatedCloudoptionStateEnum;
        url?: string;
    }
    interface ZpoolStockProfile {
        minimumAvailability: string;
        profile: string;
        realCount: number;
    }
    namespace backup {
        interface Backup {
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
        type BackupDaysEnum = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
        type BackupTypeEnum = "full" | "incremental";
        type JobStateEnum = "failed" | "running" | "stopped" | "stopping" | "success" | "unknown" | "warning";
        type OfferTypeEnum = "advanced" | "backup" | "classic" | "legacy";
        interface RestorePoint {
            creationTime?: string;
            isCorrupted?: boolean;
            restorePointId: number;
            size?: complexType.UnitAndValue<number>;
            type?: dedicatedCloudbackupBackupTypeEnum;
        }
        type StateEnum = "deleting" | "delivered" | "disabled" | "disabling" | "enabling" | "error" | "migrating" | "pending" | "removed" | "stopping" | "toCreate" | "toDelete" | "toDisable" | "toEnable" | "toStop" | "unknown";
    }
    namespace capabilities {
        type FeatureStatusEnum = "active" | "comingSoon" | "no";
    }
    namespace cluster {
        interface AutoScale {
            autoScaleInHost: dedicatedCloudclusterAutoScaleModeEnum;
            autoScaleOutHost: dedicatedCloudclusterAutoScaleModeEnum;
            autoScaleOutStorage: dedicatedCloudclusterAutoScaleModeEnum;
            configId: number;
            id: number;
            inMaintenanceMode: boolean;
            state: dedicatedCloudoptionStateEnum;
        }
        type AutoScaleModeEnum = "automatic" | "manual";
        type ClusterConfigsStatusEnum = "disabled" | "enabled" | "unknown";
        type ClusterDrsModeEnum = "fullyAutomated" | "manual" | "partiallyAutomated";
    }
    interface dedicatedCloud {
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
    namespace disasterRecovery {
        type DrpTypeEnum = "onPremise" | "ovh";
        interface LocalSiteDetails {
            role: dedicatedClouddisasterRecoverySiteRoleEnum;
            state?: dedicatedCloudStateEnum;
            type: dedicatedClouddisasterRecoverySiteTypeEnum;
            zertoVersion: string;
            zvmIp?: string;
        }
        interface Profile {
            drpType?: dedicatedClouddisasterRecoveryDrpTypeEnum;
            localSiteInformation?: dedicatedClouddisasterRecoveryLocalSiteDetails;
            remoteSiteInformation?: dedicatedClouddisasterRecoveryRemoteSiteDetails;
            state: dedicatedCloudStateEnum;
            systemVersion: string;
        }
        interface RemoteSiteDetails {
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
        type SiteRoleEnum = "primary" | "secondary" | "single";
        type SiteTypeEnum = "onPremise" | "ovhPrivateCloud";
        type VpnConfigStateEnum = "configured" | "configuring" | "error" | "notConfigured" | "tunnelError";
    }
    namespace filer {
        interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        interface Profile {
            fullName: string;
            name: string;
            size: complexType.UnitAndValue<number>;
        }
        type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown";
    }
    namespace host {
        interface HourlyConsumption {
            consumption: complexType.UnitAndValue<number>;
            lastUpdate: string;
        }
        interface Profile {
            core: string;
            cpu: complexType.UnitAndValue<number>;
            name: string;
            ram: complexType.UnitAndValue<number>;
        }
        type StateEnum = "adding" | "delivered" | "error" | "removing" | "unknown";
    }
    type hostSystemConnectionState = "connected" | "disconnected" | "notResponding";
    type ipUsageEnum = "reserved" | "vm";
    interface metricsToken {
        opentsdbEndpoint: string;
        token: string;
        warpEndpoint: string;
    }
    namespace option {
        type StateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "error" | "migrating" | "unknown";
    }
    namespace optionAccessNetwork {
        type StateEnum = "creating" | "deleting" | "delivered" | "error" | "toCreate" | "toDelete" | "toUpdate" | "unknown" | "updating";
    }
    interface optionCompatibility {
        newCommercialVersion: string;
        oldCommercialVersion: string;
    }
    interface passwordPolicy {
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
    interface resourceNewPrices {
        resources?: dedicatedCloudresourceNewPricesEntry[];
    }
    interface resourceNewPricesEntry {
        billingType: dedicatedCloudressourcesBillingTypeEnum;
        changed: boolean;
        name: string;
        newPrice: order.Price;
        oldPrice: order.Price;
        resourceType: dedicatedCloudressourcesResourceTypeEnum;
    }
    namespace ressources {
        type BillingTypeEnum = "freeSpare" | "hourly" | "monthly" | "undefined";
        type ResourceTypeEnum = "host" | "storage";
    }
    namespace right {
        type NetworkRoleEnum = "admin" | "manager" | "noAccess" | "readonly";
        type RightEnum = "admin" | "disabled" | "readonly" | "readwrite";
        type UserObjectRightTypeEnum = "cluster" | "datastore" | "dvportgroup" | "folder" | "pool" | "vm";
        type VmNetworkRoleEnum = "admin" | "noAccess" | "readonly";
    }
    type servicePackEnum = "default" | "hds" | "hipaa" | "legacy" | "nsx" | "nsx-and-vrops" | "pcidss" | "vrops";
    type servicePackStateEnum = "activating" | "active" | "error" | "waitingForCustomer";
    interface servicePackStatus {
        name: dedicatedCloudservicePackEnum;
        state: dedicatedCloudservicePackStateEnum;
    }
    interface twoFAWhitelist {
        description: string;
        id: number;
        ip: string;
        state: dedicatedCloudTwoFAWhitelistStateEnum;
    }
    namespace user {
        type ActivationStateEnum = "disabled" | "disabling" | "enabled" | "enabling" | "toDisable" | "toEnable";
        type StateEnum = "creating" | "deleting" | "delivered" | "error";
    }
    namespace vendor {
        interface OvhId {
            datacenterId?: number;
            filerId?: number;
            hostId?: number;
            vmId?: number;
        }
    }
    type virtualDeviceConnectInfoStatus = "ok" | "recoverableError" | "unrecoverableError" | "untried";
    interface virtualMachineCdrom {
        connected?: boolean;
        iso?: string;
    }
    type virtualMachineFaultToleranceState = "disabled" | "enabled" | "needSecondary" | "notConfigured" | "running" | "starting";
    type virtualMachinePowerState = "deleted" | "poweredOff" | "poweredOn" | "suspended";
    namespace vlan {
        type StateEnum = "available" | "delivered" | "disabled" | "error" | "removing" | "reserved";
        type TypeEnum = "admin" | "free" | "paid";
    }
    interface vmFiler {
        committed: number;
        disks: dedicatedCloudvmFilerDisk[];
        name: string;
    }
    interface vmFilerDisk {
        capacity: number;
        id: string;
    }
    interface vmNetwork {
        allowGuestControl: boolean;
        backing: dedicatedCloudvmNetworkBacking;
        connected: boolean;
        controler: string;
        label: string;
        macAddress: string;
        startConnected: boolean;
        status: dedicatedCloudvirtualDeviceConnectInfoStatus;
    }
    interface vmNetworkBacking {
        deviceName?: string;
        portGroupKey?: string;
        portKey?: string;
        switchUuid?: string;
        type: dedicatedCloudvmNetworkBackingTypeEnum;
        useAutoDetect?: boolean;
        valueMoref?: string;
    }
    type vmNetworkBackingTypeEnum = "DVS" | "VSS";
}
export declare namespace order {
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
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
    interface dedicatedCloud {
        dedicatedCloud: string;
        vlanId?: number;
        vrack: string;
    }
}
/**
 * END API /dedicatedCloud Models
 */
export declare function proxyDedicatedCloud(ovhEngine: OvhRequestable): DedicatedCloud;
export default proxyDedicatedCloud;
/**
 * Api Proxy model
 */ export interface DedicatedCloud {
    $get(): Promise<string[]>;
    commercialRange: {
        $get(): Promise<string[]>;
        $(commercialRangeName: string): {
            $get(): Promise<dedicatedCloud.CommercialRange>;
        };
    };
    location: {
        $get(): Promise<string[]>;
        $(pccZone: string): {
            $get(): Promise<dedicatedCloud.PccZone>;
            hostProfile: {
                $get(): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<dedicatedCloud.HostProfile>;
                };
            };
            hypervisor: {
                $get(): Promise<string[]>;
                $(shortName: string): {
                    $get(): Promise<dedicatedCloud.Os>;
                };
            };
            stock: {
                host: {
                    $get(params?: {
                        minYear?: number;
                    }): Promise<dedicatedCloud.HostStockProfile[]>;
                };
                pcc: {
                    $get(): Promise<dedicatedCloud.PccStockProfile[]>;
                };
                zpool: {
                    $get(params?: {
                        profileFilter?: string;
                    }): Promise<dedicatedCloud.ZpoolStockProfile[]>;
                };
            };
        };
    };
    $(serviceName: string): {
        $get(): Promise<dedicatedCloud.dedicatedCloud>;
        $put(params?: {
            advancedSecurity?: boolean;
            bandwidth?: string;
            billingType?: dedicatedCloudBillingTypeEnum;
            certifiedInterfaceUrl?: string;
            commercialRange?: string;
            description?: string;
            generation?: dedicatedCloudGenerationEnum;
            location?: string;
            managementInterface?: dedicatedCloudManagementInterfaceEnum;
            serviceName?: string;
            servicePackName?: string;
            spla?: boolean;
            sslV3?: boolean;
            state?: dedicatedCloudStateEnum;
            userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum;
            userLimitConcurrentSession?: number;
            userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum;
            userSessionTimeout?: number;
            vScopeUrl?: string;
            version?: dedicatedCloudVersion;
            webInterfaceUrl?: string;
        }): Promise<dedicatedCloud.Task>;
        allowedNetwork: {
            $get(): Promise<number[]>;
            $post(params: {
                description?: string;
                network: string;
            }): Promise<dedicatedCloud.Task>;
            $(networkAccessId: number): {
                $delete(): Promise<dedicatedCloud.Task>;
                $get(): Promise<dedicatedCloud.AllowedNetwork>;
                $put(params?: {
                    description?: string;
                    network?: string;
                    networkAccessId?: number;
                    state?: dedicatedCloudAllowedNetworkStateEnum;
                }): Promise<dedicatedCloud.Task>;
                task: {
                    $get(params?: {
                        name?: string;
                        state?: dedicatedCloudTaskStateEnum;
                    }): Promise<number[]>;
                    $(taskId: number): {
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            $post(params: {
                                executionDate: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        resetTaskState: {
                            $post(params: {
                                reason: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                    };
                };
            };
        };
        capabilities: {
            $get(): Promise<dedicatedCloud.Capabilities>;
        };
        changeContact: {
            $post(params?: {
                contactAdmin?: string;
                contactBilling?: string;
                contactTech?: string;
            }): Promise<number[]>;
        };
        changeProperties: {
            $post(params?: {
                description?: string;
                sslV3?: boolean;
                userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum;
                userLimitConcurrentSession?: number;
                userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum;
                userSessionTimeout?: number;
            }): Promise<dedicatedCloud.Task>;
        };
        commercialRange: {
            compliance: {
                $get(): Promise<string[]>;
            };
            orderable: {
                $get(): Promise<string[]>;
            };
        };
        confirmTermination: {
            $post(params: {
                commentary?: string;
                futureUse?: service.TerminationFutureUseEnum;
                reason?: service.TerminationReasonEnum;
                token: string;
            }): Promise<string>;
        };
        datacenter: {
            $get(): Promise<number[]>;
            $post(params: {
                commercialRangeName: string;
                vrackName?: string;
            }): Promise<dedicatedCloud.Task>;
            $(datacenterId: number): {
                $delete(): Promise<dedicatedCloud.Task>;
                $get(): Promise<dedicatedCloud.Datacenter>;
                $put(params?: {
                    commercialName?: dedicatedCloudCommercialNameEnum;
                    commercialRangeName?: string;
                    datacenterId?: number;
                    description?: string;
                    horizonViewName?: string;
                    isRemovable?: boolean;
                    name?: string;
                    version?: string;
                }): Promise<dedicatedCloud.Task>;
                backup: {
                    $get(): Promise<dedicatedCloud.Backup>;
                    changeProperties: {
                        $post(params: {
                            backupDurationInReport: boolean;
                            backupOffer: dedicatedCloudbackupOfferTypeEnum;
                            backupSizeInReport: boolean;
                            diskSizeInReport: boolean;
                            fullDayInReport: boolean;
                            mailAddress?: string;
                            restorePointInReport: boolean;
                            scheduleHour?: string;
                        }): Promise<dedicatedCloud.Task>;
                    };
                    disable: {
                        $post(): Promise<dedicatedCloud.Task>;
                    };
                    enable: {
                        $post(params?: {
                            backupOffer?: dedicatedCloudbackupOfferTypeEnum;
                        }): Promise<dedicatedCloud.Task>;
                    };
                };
                checkBackupJobs: {
                    $post(): Promise<dedicatedCloud.Task>;
                };
                disasterRecovery: {
                    zerto: {
                        disable: {
                            $post(params: {
                                secondaryDatacenterId: number;
                                secondaryServiceName: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        enable: {
                            $post(params: {
                                primaryEndpointIp: string;
                                secondaryDatacenterId: number;
                                secondaryEndpointIp: string;
                                secondaryServiceName: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        generateZsspPassword: {
                            $post(): Promise<dedicatedCloud.Task>;
                        };
                        state: {
                            $post(): Promise<dedicatedCloud.disasterRecovery.Profile>;
                        };
                    };
                    zertoSingle: {
                        configureVpn: {
                            $post(params: {
                                preSharedKey: string;
                                remoteEndpointInternalIp: string;
                                remoteEndpointPublicIp: string;
                                remoteVraNetwork?: string;
                                remoteZvmInternalIp: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        defaultLocalVraNetwork: {
                            $get(): Promise<string>;
                        };
                        disable: {
                            $post(): Promise<dedicatedCloud.Task>;
                        };
                        enable: {
                            $post(params: {
                                localVraNetwork: string;
                                ovhEndpointIp: string;
                                remoteVraNetwork: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                    };
                };
                filer: {
                    $get(): Promise<number[]>;
                    $(filerId: number): {
                        $get(): Promise<dedicatedCloud.Filer>;
                        hourlyConsumption: {
                            $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                        };
                        remove: {
                            $post(): Promise<dedicatedCloud.Task>;
                        };
                        task: {
                            $get(params?: {
                                name?: string;
                                state?: dedicatedCloudTaskStateEnum;
                            }): Promise<number[]>;
                            $(taskId: number): {
                                $get(): Promise<dedicatedCloud.Task>;
                                changeMaintenanceExecutionDate: {
                                    $post(params: {
                                        executionDate: string;
                                    }): Promise<dedicatedCloud.Task>;
                                };
                                resetTaskState: {
                                    $post(params: {
                                        reason: string;
                                    }): Promise<dedicatedCloud.Task>;
                                };
                            };
                        };
                    };
                };
                host: {
                    $get(): Promise<number[]>;
                    $(hostId: number): {
                        $get(): Promise<dedicatedCloud.Host>;
                        addHostSpare: {
                            $post(params: {
                                reason: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        hourlyConsumption: {
                            $get(): Promise<dedicatedCloud.host.HourlyConsumption>;
                        };
                        remove: {
                            $post(): Promise<dedicatedCloud.Task>;
                        };
                        task: {
                            $get(params?: {
                                name?: string;
                                state?: dedicatedCloudTaskStateEnum;
                            }): Promise<number[]>;
                            $(taskId: number): {
                                $get(): Promise<dedicatedCloud.Task>;
                                changeMaintenanceExecutionDate: {
                                    $post(params: {
                                        executionDate: string;
                                    }): Promise<dedicatedCloud.Task>;
                                };
                                resetTaskState: {
                                    $post(params: {
                                        reason: string;
                                    }): Promise<dedicatedCloud.Task>;
                                };
                            };
                        };
                    };
                };
                orderNewFilerHourly: {
                    $post(params: {
                        name: string;
                    }): Promise<dedicatedCloud.Task>;
                };
                orderNewHostHourly: {
                    $post(params: {
                        name: string;
                        vmwareClusterId?: string;
                    }): Promise<dedicatedCloud.Task>;
                };
                orderableFilerProfiles: {
                    $get(): Promise<dedicatedCloud.filer.Profile[]>;
                };
                orderableHostProfiles: {
                    $get(): Promise<dedicatedCloud.host.Profile[]>;
                };
                privateGateway: {
                    $get(): Promise<dedicatedCloud.PrivateGateway>;
                    disable: {
                        $post(): Promise<dedicatedCloud.Task>;
                    };
                    enable: {
                        $post(params: {
                            ip: string;
                            netmask: string;
                            portgroup: string;
                        }): Promise<dedicatedCloud.Task>;
                    };
                };
                task: {
                    $get(params?: {
                        name?: string;
                        state?: dedicatedCloudTaskStateEnum;
                    }): Promise<number[]>;
                    $(taskId: number): {
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            $post(params: {
                                executionDate: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        resetTaskState: {
                            $post(params: {
                                reason: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                    };
                };
                vm: {
                    $get(): Promise<number[]>;
                    $(vmId: number): {
                        $get(): Promise<dedicatedCloud.Vm>;
                        backupJob: {
                            $get(): Promise<dedicatedCloud.BackupJob>;
                            $post(params: {
                                backupDays: dedicatedCloudbackupBackupDaysEnum[];
                            }): Promise<dedicatedCloud.Task>;
                            disable: {
                                $post(): Promise<dedicatedCloud.Task>;
                            };
                            enable: {
                                $post(params: {
                                    backupDays: dedicatedCloudbackupBackupDaysEnum[];
                                }): Promise<dedicatedCloud.Task>;
                            };
                            restorePoints: {
                                $get(): Promise<number[]>;
                                $(restorePointId: number): {
                                    $get(): Promise<dedicatedCloud.RestorePoint>;
                                    restore: {
                                        $post(params: {
                                            filerId: number;
                                        }): Promise<dedicatedCloud.Task>;
                                    };
                                };
                            };
                        };
                        disableBackup: {
                            $post(): Promise<dedicatedCloud.Task>;
                        };
                        editBackup: {
                            $post(params: {
                                backupDays: dedicatedCloudbackupBackupDaysEnum[];
                            }): Promise<dedicatedCloud.Task>;
                        };
                        enableBackup: {
                            $post(params: {
                                backupDays: dedicatedCloudbackupBackupDaysEnum[];
                            }): Promise<dedicatedCloud.Task>;
                        };
                        restoreBackup: {
                            $post(params: {
                                filerId: number;
                                restorePointId: number;
                            }): Promise<dedicatedCloud.Task>;
                        };
                    };
                };
            };
        };
        federation: {
            $get(): Promise<dedicatedCloud.Federation>;
            activeDirectory: {
                $get(): Promise<number[]>;
                $post(params: {
                    baseDnForGroups: string;
                    baseDnForUsers: string;
                    description?: string;
                    domainAlias: string;
                    domainName: string;
                    ip: string;
                    password: string;
                    username: string;
                }): Promise<dedicatedCloud.Task>;
                $(activeDirectoryId: number): {
                    $delete(): Promise<dedicatedCloud.Task>;
                    $get(): Promise<dedicatedCloud.FederationAccessNetwork>;
                    changeProperties: {
                        $post(params: {
                            description?: string;
                            password: string;
                            username: string;
                        }): Promise<dedicatedCloud.Task>;
                    };
                    grantActiveDirectoryUser: {
                        $post(params: {
                            username: string;
                        }): Promise<dedicatedCloud.Task>;
                    };
                };
            };
        };
        filer: {
            $get(): Promise<number[]>;
            $(filerId: number): {
                $get(): Promise<dedicatedCloud.Filer>;
                hourlyConsumption: {
                    $get(): Promise<dedicatedCloud.filer.HourlyConsumption>;
                };
                remove: {
                    $post(): Promise<dedicatedCloud.Task>;
                };
                task: {
                    $get(params?: {
                        name?: string;
                        state?: dedicatedCloudTaskStateEnum;
                    }): Promise<number[]>;
                    $(taskId: number): {
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            $post(params: {
                                executionDate: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        resetTaskState: {
                            $post(params: {
                                reason: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                    };
                };
            };
        };
        globalTasks: {
            $get(params?: {
                datacenterId?: number;
                endDate_from?: string;
                endDate_to?: string;
                executionDate_from?: string;
                executionDate_to?: string;
                filerId?: number;
                hostId?: number;
                lastModificationDate_from?: string;
                lastModificationDate_to?: string;
                name?: string;
                networkAccessId?: number;
                orderId?: number;
                parentTaskId?: number;
                state?: dedicatedCloudTaskStateEnum[];
                userId?: number;
                vlanId?: number;
            }): Promise<number[]>;
        };
        hcx: {
            $get(): Promise<dedicatedCloud.Hcx>;
            canBeDisabled: {
                $get(): Promise<boolean>;
            };
            canBeEnabled: {
                $get(): Promise<boolean>;
            };
            disable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
            enable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
        };
        hds: {
            $get(): Promise<dedicatedCloud.Hds>;
            canBeDisabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            canBeEnabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            disable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
            enable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
        };
        hipaa: {
            $get(): Promise<dedicatedCloud.Hipaa>;
            canBeDisabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            canBeEnabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            disable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
            enable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
        };
        ip: {
            $get(): Promise<string[]>;
            $(network: string): {
                $get(): Promise<dedicatedCloud.Ip>;
                details: {
                    $get(): Promise<dedicatedCloud.IpDetails[]>;
                };
                task: {
                    $get(params?: {
                        name?: string;
                        state?: dedicatedCloudTaskStateEnum;
                    }): Promise<number[]>;
                    $(taskId: number): {
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            $post(params: {
                                executionDate: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        resetTaskState: {
                            $post(params: {
                                reason: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                    };
                };
            };
        };
        newPrices: {
            $get(): Promise<dedicatedCloud.resourceNewPrices>;
        };
        nsx: {
            $get(): Promise<dedicatedCloud.Nsx>;
            canBeDisabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            canBeEnabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            disable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
            enable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
        };
        orderNewFilerHourly: {
            $post(params: {
                name: string;
            }): Promise<dedicatedCloud.Task>;
        };
        orderableIpCountries: {
            $get(): Promise<dedicatedCloud.IpCountriesEnum[]>;
        };
        passwordPolicy: {
            $get(): Promise<dedicatedCloud.passwordPolicy>;
        };
        pcidss: {
            $get(): Promise<dedicatedCloud.PciDss>;
            canBeDisabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            canBeEnabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            disable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
            enable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
        };
        resetTriggeredAlarm: {
            $post(): Promise<dedicatedCloud.Task>;
        };
        robot: {
            $get(): Promise<string[]>;
            $(name: string): {
                $get(): Promise<dedicatedCloud.Robot>;
            };
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
        servicePack: {
            $get(): Promise<dedicatedCloud.servicePackStatus>;
        };
        servicePacks: {
            $get(): Promise<string[]>;
            $(name: string): {
                $get(): Promise<dedicatedCloud.ServicePack>;
            };
        };
        task: {
            $get(params?: {
                name?: string;
                state?: dedicatedCloudTaskStateEnum;
            }): Promise<number[]>;
            $(taskId: number): {
                $get(): Promise<dedicatedCloud.Task>;
                changeMaintenanceExecutionDate: {
                    $post(params: {
                        executionDate: string;
                    }): Promise<dedicatedCloud.Task>;
                };
                resetTaskState: {
                    $post(params: {
                        reason: string;
                    }): Promise<dedicatedCloud.Task>;
                };
            };
        };
        terminate: {
            $post(): Promise<string>;
        };
        twoFAWhitelist: {
            $get(): Promise<number[]>;
            $post(params: {
                description: string;
                ip: string;
            }): Promise<dedicatedCloud.Task>;
            $(id: number): {
                $delete(): Promise<dedicatedCloud.Task>;
                $get(): Promise<dedicatedCloud.twoFAWhitelist>;
                changeProperties: {
                    $post(params?: {
                        description?: string;
                    }): Promise<dedicatedCloud.Task>;
                };
            };
        };
        upgradeHypervisor: {
            $post(): Promise<dedicatedCloud.Task>;
        };
        user: {
            $get(params?: {
                name?: string;
            }): Promise<number[]>;
            $post(params: {
                canAddRessource?: boolean;
                canManageRights?: boolean;
                email?: string;
                expirationDate?: string;
                firstName?: string;
                lastName?: string;
                name: string;
                networkRole?: dedicatedCloudrightNetworkRoleEnum;
                nsxRight?: boolean;
                password?: string;
                phoneNumber?: string;
                receiveAlerts?: boolean;
                right?: dedicatedCloudrightRightEnum;
                tokenValidator?: boolean;
                vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum;
            }): Promise<dedicatedCloud.Task>;
            $(userId: number): {
                $delete(): Promise<dedicatedCloud.Task>;
                $get(): Promise<dedicatedCloud.User>;
                changePassword: {
                    $post(params?: {
                        password?: string;
                    }): Promise<dedicatedCloud.Task>;
                };
                changeProperties: {
                    $post(params?: {
                        canManageIpFailOvers?: boolean;
                        canManageNetwork?: boolean;
                        canManageRights?: boolean;
                        email?: string;
                        firstName?: string;
                        fullAdminRo?: boolean;
                        lastName?: string;
                        nsxRight?: boolean;
                        phoneNumber?: string;
                        receiveAlerts?: boolean;
                        tokenValidator?: boolean;
                    }): Promise<dedicatedCloud.Task>;
                };
                disable: {
                    $post(): Promise<dedicatedCloud.Task>;
                };
                enable: {
                    $post(): Promise<dedicatedCloud.Task>;
                };
                metricsToken: {
                    $post(): Promise<dedicatedCloud.metricsToken>;
                };
                objectRight: {
                    $get(): Promise<number[]>;
                    $post(params: {
                        propagate?: boolean;
                        right: dedicatedCloudrightRightEnum;
                        type: dedicatedCloudrightUserObjectRightTypeEnum;
                        vmwareObjectId: string;
                    }): Promise<dedicatedCloud.Task>;
                    $(objectRightId: number): {
                        $delete(): Promise<dedicatedCloud.Task>;
                        $get(): Promise<dedicatedCloud.ObjectRight>;
                    };
                };
                right: {
                    $get(): Promise<number[]>;
                    $(rightId: number): {
                        $get(): Promise<dedicatedCloud.Right>;
                        $put(params?: {
                            canAddRessource?: boolean;
                            datacenterId?: number;
                            networkRole?: dedicatedCloudrightNetworkRoleEnum;
                            right?: dedicatedCloudrightRightEnum;
                            rightId?: number;
                            vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum;
                        }): Promise<dedicatedCloud.Task>;
                    };
                };
                task: {
                    $get(params?: {
                        name?: string;
                        state?: dedicatedCloudTaskStateEnum;
                    }): Promise<number[]>;
                    $(taskId: number): {
                        $get(): Promise<dedicatedCloud.Task>;
                        changeMaintenanceExecutionDate: {
                            $post(params: {
                                executionDate: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                        resetTaskState: {
                            $post(params: {
                                reason: string;
                            }): Promise<dedicatedCloud.Task>;
                        };
                    };
                };
            };
        };
        vendor: {
            $get(): Promise<dedicatedCloud.Vendor>;
            objectType: {
                $post(): Promise<string[]>;
            };
            ovhId: {
                $post(params: {
                    objectType: dedicatedCloud.VendorObjectTypeEnum;
                    vendorId: string;
                }): Promise<dedicatedCloud.vendor.OvhId>;
            };
        };
        vlan: {
            $get(): Promise<number[]>;
            $(vlanId: number): {
                $get(): Promise<dedicatedCloud.Vlan>;
            };
        };
        vmEncryption: {
            $get(): Promise<dedicatedCloud.VMEncryption>;
            kms: {
                $get(): Promise<number[]>;
                $post(params: {
                    description?: string;
                    ip: string;
                    sslThumbprint: string;
                }): Promise<dedicatedCloud.Task>;
                $(kmsId: number): {
                    $delete(): Promise<dedicatedCloud.Task>;
                    $get(): Promise<dedicatedCloud.VMEncryptionAccessNetwork>;
                    changeProperties: {
                        $post(params: {
                            description?: string;
                            sslThumbprint: string;
                        }): Promise<dedicatedCloud.Task>;
                    };
                };
            };
        };
        vrack: {
            $get(): Promise<string[]>;
            $(vrack: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.dedicatedCloud>;
            };
        };
        vrops: {
            $get(): Promise<dedicatedCloud.Vrops>;
            canBeDisabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            canBeEnabled: {
                $get(): Promise<dedicatedCloud.optionCompatibility>;
            };
            disable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
            enable: {
                $post(): Promise<dedicatedCloud.Task>;
            };
        };
    };
    /**
     * Operations about the PCC service
     * List available services
     */
    get(path: '/dedicatedCloud'): () => Promise<string[]>;
    /**
     * Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.dedicatedCloud>;
    /**
     * List the dedicatedCloud.AllowedNetwork objects
     * Networks allowed to access to this Private Cloud management interface
     */
    get(path: '/dedicatedCloud/{serviceName}/allowedNetwork'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Network allowed to connect to the Private Cloud management interface
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}'): (params: {
        networkAccessId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.AllowedNetwork>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this allowed network
     */
    get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task'): (params: {
        networkAccessId: number;
        serviceName: string;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}'): (params: {
        networkAccessId: number;
        serviceName: string;
        taskId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * The features available in your Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/capabilities'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Capabilities>;
    /**
     * compliance operations
     * Get the name of the commercial ranges compliant with your Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/commercialRange/compliance'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * orderable operations
     * Get the name of the commercial ranges orderable in your Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/commercialRange/orderable'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List the dedicatedCloud.Datacenter objects
     * Datacenters associated with this Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud Datacenter
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Datacenter>;
    /**
     * Backup configured on a given Datacenter
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Backup>;
    /**
     * defaultLocalVraNetwork operations
     * Get the default localVraNetwork subnet suggested by OVH
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/defaultLocalVraNetwork'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the dedicatedCloud.Filer objects
     * Filers associated with this Datacenter
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud Filer
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}'): (params: {
        datacenterId: number;
        filerId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Filer>;
    /**
     * hourlyConsumption operations
     * Hourly consumption associated with this Filer
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/hourlyConsumption'): (params: {
        datacenterId: number;
        filerId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.filer.HourlyConsumption>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this Filer
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task'): (params: {
        datacenterId: number;
        filerId: number;
        serviceName: string;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}'): (params: {
        datacenterId: number;
        filerId: number;
        serviceName: string;
        taskId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * List the dedicatedCloud.Host objects
     * Hosts associated with this Datacenter
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud Host
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Host>;
    /**
     * hourlyConsumption operations
     * Hourly consumption associated with this host.
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/hourlyConsumption'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.host.HourlyConsumption>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this Host
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
        taskId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * orderableFilerProfiles operations
     * List available filers in a given Private Cloud Datacenter
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.filer.Profile[]>;
    /**
     * orderableHostProfiles operations
     * List available hosts in a given Private Cloud Datacenter
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.host.Profile[]>;
    /**
     * Private management gateway deployed in your Private Cloud to block all public access
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.PrivateGateway>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this Datacenter
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task'): (params: {
        datacenterId: number;
        serviceName: string;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}'): (params: {
        datacenterId: number;
        serviceName: string;
        taskId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * List the dedicatedCloud.Vm objects
     * Virtual machiness associated with this Datacenter
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud Virtual Machine
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
    }) => Promise<dedicatedCloud.Vm>;
    /**
     * Private Cloud Backup Job
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
    }) => Promise<dedicatedCloud.BackupJob>;
    /**
     * List the dedicatedCloud.RestorePoint objects
     * Restore point associated to this Backup Job
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
    }) => Promise<number[]>;
    /**
     * Private Cloud Restore Point
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}'): (params: {
        datacenterId: number;
        restorePointId: number;
        serviceName: string;
        vmId: number;
    }) => Promise<dedicatedCloud.RestorePoint>;
    /**
     * Private Cloud Active Directory Federation option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/federation'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Federation>;
    /**
     * List the dedicatedCloud.FederationAccessNetwork objects
     * Active Directories linked to this Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud federation option access network
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}'): (params: {
        activeDirectoryId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.FederationAccessNetwork>;
    /**
     * List the dedicatedCloud.Filer objects
     * Filers mounted on all Datacenters of your Private Cloud Vsphere
     */
    get(path: '/dedicatedCloud/{serviceName}/filer'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud Filer
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}'): (params: {
        filerId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Filer>;
    /**
     * hourlyConsumption operations
     * Hourly consumption associated with this Filer
     */
    get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/hourlyConsumption'): (params: {
        filerId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.filer.HourlyConsumption>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this Filer
     */
    get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task'): (params: {
        filerId: number;
        serviceName: string;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}'): (params: {
        filerId: number;
        serviceName: string;
        taskId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * globalTasks operations
     * Get filtered tasks associated with this Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/globalTasks'): (params: {
        serviceName: string;
        datacenterId?: number;
        endDate_from?: string;
        endDate_to?: string;
        executionDate_from?: string;
        executionDate_to?: string;
        filerId?: number;
        hostId?: number;
        lastModificationDate_from?: string;
        lastModificationDate_to?: string;
        name?: string;
        networkAccessId?: number;
        orderId?: number;
        parentTaskId?: number;
        state?: dedicatedCloudTaskStateEnum[];
        userId?: number;
        vlanId?: number;
    }) => Promise<number[]>;
    /**
     * Private Cloud VMware Hybrid Cloud Extension option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/hcx'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Hcx>;
    /**
     * canBeDisabled operations
     * Check if VMware Hybrid Cloud Extension option can be disabled
     */
    get(path: '/dedicatedCloud/{serviceName}/hcx/canBeDisabled'): (params: {
        serviceName: string;
    }) => Promise<boolean>;
    /**
     * canBeEnabled operations
     * Check if VMware Hybrid Cloud Extension option can be enabled
     */
    get(path: '/dedicatedCloud/{serviceName}/hcx/canBeEnabled'): (params: {
        serviceName: string;
    }) => Promise<boolean>;
    /**
     * The Private Cloud Hds option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/hds'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Hds>;
    /**
     * canBeDisabled operations
     * Check if Hds option can be disabled
     */
    get(path: '/dedicatedCloud/{serviceName}/hds/canBeDisabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * canBeEnabled operations
     * Check if Hds option can be enabled
     */
    get(path: '/dedicatedCloud/{serviceName}/hds/canBeEnabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * The Private Cloud Hipaa option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/hipaa'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Hipaa>;
    /**
     * canBeDisabled operations
     * Check if Hipaa option can be disabled
     */
    get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeDisabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * canBeEnabled operations
     * Check if Hipaa option can be enabled
     */
    get(path: '/dedicatedCloud/{serviceName}/hipaa/canBeEnabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * List the dedicatedCloud.Ip objects
     * Ip Blocks attached to this Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/ip'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * IP Blocks associated with a Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/ip/{network}'): (params: {
        network: string;
        serviceName: string;
    }) => Promise<dedicatedCloud.Ip>;
    /**
     * details operations
     * List details about this IP Block
     */
    get(path: '/dedicatedCloud/{serviceName}/ip/{network}/details'): (params: {
        network: string;
        serviceName: string;
    }) => Promise<dedicatedCloud.IpDetails[]>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this IP Block
     */
    get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task'): (params: {
        network: string;
        serviceName: string;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}'): (params: {
        network: string;
        serviceName: string;
        taskId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * newPrices operations
     * Get the new Prices for your Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/newPrices'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.resourceNewPrices>;
    /**
     * The Private Cloud Nsx option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/nsx'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Nsx>;
    /**
     * canBeDisabled operations
     * Check if Nsx option can be disabled
     */
    get(path: '/dedicatedCloud/{serviceName}/nsx/canBeDisabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * canBeEnabled operations
     * Check if Nsx option can be enabled
     */
    get(path: '/dedicatedCloud/{serviceName}/nsx/canBeEnabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * orderableIpCountries operations
     * Get the countries you can select in /order/dedicatedCloud/{serviceName}/ip
     */
    get(path: '/dedicatedCloud/{serviceName}/orderableIpCountries'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.IpCountriesEnum[]>;
    /**
     * passwordPolicy operations
     * Get the current password policy for your Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/passwordPolicy'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.passwordPolicy>;
    /**
     * The Private Cloud PCI-DSS option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/pcidss'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.PciDss>;
    /**
     * canBeDisabled operations
     * Check if PCI-DSS option can be disabled
     */
    get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeDisabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * canBeEnabled operations
     * Check if PCI-DSS option can be enabled
     */
    get(path: '/dedicatedCloud/{serviceName}/pcidss/canBeEnabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * List the dedicatedCloud.Robot objects
     * Robots that can run on this Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/robot'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * The robots used in Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/robot/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<dedicatedCloud.Robot>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * servicePack operations
     * Retrieve the service pack informations
     */
    get(path: '/dedicatedCloud/{serviceName}/servicePack'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.servicePackStatus>;
    /**
     * List the dedicatedCloud.ServicePack objects
     * Service Pack compliant with the current Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/servicePacks'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List of Service Pack compliant with the current Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/servicePacks/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<dedicatedCloud.ServicePack>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/task'): (params: {
        serviceName: string;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * List the dedicatedCloud.twoFAWhitelist objects
     * Ip allowed to bypass the two factor authentication on this Private Cloud management interface
     */
    get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Trust IP which can bypass the two factor authentication
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.twoFAWhitelist>;
    /**
     * List the dedicatedCloud.User objects
     * Private Cloud users
     */
    get(path: '/dedicatedCloud/{serviceName}/user'): (params: {
        serviceName: string;
        name?: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud User
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/user/{userId}'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.User>;
    /**
     * List the dedicatedCloud.ObjectRight objects
     * User rights on an object
     */
    get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<number[]>;
    /**
     * Private Cloud User object right
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}'): (params: {
        objectRightId: number;
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.ObjectRight>;
    /**
     * List the dedicatedCloud.Right objects
     * User rights in a given Datacenters
     */
    get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<number[]>;
    /**
     * Private Cloud User right
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}'): (params: {
        rightId: number;
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.Right>;
    /**
     * List the dedicatedCloud.Task objects
     * Tasks associated with this User
     */
    get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task'): (params: {
        serviceName: string;
        userId: number;
        name?: string;
        state?: dedicatedCloudTaskStateEnum;
    }) => Promise<number[]>;
    /**
     * Operation on a Private Cloud component
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
        userId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * The Private Cloud Vendor option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/vendor'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Vendor>;
    /**
     * List the dedicatedCloud.Vlan objects
     * Private Cloud vlans
     */
    get(path: '/dedicatedCloud/{serviceName}/vlan'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud Vlan
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/vlan/{vlanId}'): (params: {
        serviceName: string;
        vlanId: number;
    }) => Promise<dedicatedCloud.Vlan>;
    /**
     * Private Cloud VM Encryption option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/vmEncryption'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.VMEncryption>;
    /**
     * List the dedicatedCloud.VMEncryptionAccessNetwork objects
     * VM Encryption KMS linked to this Private Cloud
     */
    get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Private Cloud VM Encryption option access network
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}'): (params: {
        kmsId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.VMEncryptionAccessNetwork>;
    /**
     * List the vrack.dedicatedCloud objects
     * This Private Cloud vrack
     */
    get(path: '/dedicatedCloud/{serviceName}/vrack'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * vrack dedicated cloud interface
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}'): (params: {
        serviceName: string;
        vrack: string;
    }) => Promise<vrack.dedicatedCloud>;
    /**
     * The Private Cloud vRealize Operations option
     * Get this object properties
     */
    get(path: '/dedicatedCloud/{serviceName}/vrops'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Vrops>;
    /**
     * canBeDisabled operations
     * Check if vRealize Operations option can be disabled
     */
    get(path: '/dedicatedCloud/{serviceName}/vrops/canBeDisabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * canBeEnabled operations
     * Check if vRealize Operations option can be enabled
     */
    get(path: '/dedicatedCloud/{serviceName}/vrops/canBeEnabled'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.optionCompatibility>;
    /**
     * List the dedicatedCloud.CommercialRange objects
     * List of commercial Ranges available in a Dedicated Cloud
     */
    get(path: '/dedicatedCloud/commercialRange'): () => Promise<string[]>;
    /**
     * The commercial ranges actually available in your Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/commercialRange/{commercialRangeName}'): (params: {
        commercialRangeName: string;
    }) => Promise<dedicatedCloud.CommercialRange>;
    /**
     * List the dedicatedCloud.PccZone objects
     * List of locations available in a Dedicated Cloud
     */
    get(path: '/dedicatedCloud/location'): () => Promise<string[]>;
    /**
     * PccZones actually available in Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/location/{pccZone}'): (params: {
        pccZone: string;
    }) => Promise<dedicatedCloud.PccZone>;
    /**
     * List the dedicatedCloud.HostProfile objects
     * Offered host profile
     */
    get(path: '/dedicatedCloud/location/{pccZone}/hostProfile'): (params: {
        pccZone: string;
    }) => Promise<number[]>;
    /**
     * Host profiles actually available in Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/location/{pccZone}/hostProfile/{id}'): (params: {
        id: number;
        pccZone: string;
    }) => Promise<dedicatedCloud.HostProfile>;
    /**
     * List the dedicatedCloud.Os objects
     * Offered hypervisor version
     */
    get(path: '/dedicatedCloud/location/{pccZone}/hypervisor'): (params: {
        pccZone: string;
    }) => Promise<string[]>;
    /**
     * Hypervisors actually available in Private Cloud
     * Get this object properties
     */
    get(path: '/dedicatedCloud/location/{pccZone}/hypervisor/{shortName}'): (params: {
        pccZone: string;
        shortName: string;
    }) => Promise<dedicatedCloud.Os>;
    /**
     * host operations
     * Available host stock
     */
    get(path: '/dedicatedCloud/location/{pccZone}/stock/host'): (params: {
        pccZone: string;
        minYear?: number;
    }) => Promise<dedicatedCloud.HostStockProfile[]>;
    /**
     * pcc operations
     * Available PCC stock
     */
    get(path: '/dedicatedCloud/location/{pccZone}/stock/pcc'): (params: {
        pccZone: string;
    }) => Promise<dedicatedCloud.PccStockProfile[]>;
    /**
     * zpool operations
     * Available zpool stock
     */
    get(path: '/dedicatedCloud/location/{pccZone}/stock/zpool'): (params: {
        pccZone: string;
        profileFilter?: string;
    }) => Promise<dedicatedCloud.ZpoolStockProfile[]>;
    /**
     * Private Cloud
     * Alter this object properties
     */
    put(path: '/dedicatedCloud/{serviceName}'): (params: {
        serviceName: string;
        advancedSecurity?: boolean;
        bandwidth?: string;
        billingType?: dedicatedCloudBillingTypeEnum;
        certifiedInterfaceUrl?: string;
        commercialRange?: string;
        description?: string;
        generation?: dedicatedCloudGenerationEnum;
        location?: string;
        managementInterface?: dedicatedCloudManagementInterfaceEnum;
        servicePackName?: string;
        spla?: boolean;
        sslV3?: boolean;
        state?: dedicatedCloudStateEnum;
        userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum;
        userLimitConcurrentSession?: number;
        userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum;
        userSessionTimeout?: number;
        vScopeUrl?: string;
        version?: dedicatedCloudVersion;
        webInterfaceUrl?: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Network allowed to connect to the Private Cloud management interface
     * Alter this object properties
     */
    put(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}'): (params: {
        networkAccessId: number;
        serviceName: string;
        description?: string;
        network?: string;
        state?: dedicatedCloudAllowedNetworkStateEnum;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Private Cloud Datacenter
     * Alter this object properties
     */
    put(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}'): (params: {
        datacenterId: number;
        serviceName: string;
        commercialName?: dedicatedCloudCommercialNameEnum;
        commercialRangeName?: string;
        description?: string;
        horizonViewName?: string;
        isRemovable?: boolean;
        name?: string;
        version?: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dedicatedCloud/{serviceName}/serviceInfos'): (params: {
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
     * Private Cloud User right
     * Alter this object properties
     */
    put(path: '/dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}'): (params: {
        rightId: number;
        serviceName: string;
        userId: number;
        canAddRessource?: boolean;
        datacenterId?: number;
        networkRole?: dedicatedCloudrightNetworkRoleEnum;
        right?: dedicatedCloudrightRightEnum;
        vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * List the dedicatedCloud.AllowedNetwork objects
     * Create a new Allowed network for your dedicatedCloud
     */
    post(path: '/dedicatedCloud/{serviceName}/allowedNetwork'): (params: {
        serviceName: string;
        description?: string;
        network: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        networkAccessId: number;
        serviceName: string;
        taskId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState'): (params: {
        networkAccessId: number;
        serviceName: string;
        taskId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/dedicatedCloud/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * changeProperties operations
     * Update this Private Cloud properties.
     */
    post(path: '/dedicatedCloud/{serviceName}/changeProperties'): (params: {
        serviceName: string;
        description?: string;
        sslV3?: boolean;
        userAccessPolicy?: dedicatedCloudUserAccessPolicyEnum;
        userLimitConcurrentSession?: number;
        userLogoutPolicy?: dedicatedCloudUserLogoutPolicyEnum;
        userSessionTimeout?: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/dedicatedCloud/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * List the dedicatedCloud.Datacenter objects
     * Add a new Datacenter in your Private Cloud
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter'): (params: {
        serviceName: string;
        commercialRangeName: string;
        vrackName?: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeProperties operations
     * Edit the backup on a Private Cloud
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties'): (params: {
        datacenterId: number;
        serviceName: string;
        backupDurationInReport: boolean;
        backupOffer: dedicatedCloudbackupOfferTypeEnum;
        backupSizeInReport: boolean;
        diskSizeInReport: boolean;
        fullDayInReport: boolean;
        mailAddress?: string;
        restorePointInReport: boolean;
        scheduleHour?: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable backup solution on a Private Cloud
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable backup solution on a Private Cloud
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable'): (params: {
        datacenterId: number;
        serviceName: string;
        backupOffer?: dedicatedCloudbackupOfferTypeEnum;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * checkBackupJobs operations
     * Check whether your backup jobs are correctly set in your current datacenter, use this when your virtual machines have been migrated through another datacenter
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable Zerto
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable'): (params: {
        datacenterId: number;
        serviceName: string;
        secondaryDatacenterId: number;
        secondaryServiceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable Zerto replication between 2 OVH dedicated Clouds
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable'): (params: {
        datacenterId: number;
        serviceName: string;
        primaryEndpointIp: string;
        secondaryDatacenterId: number;
        secondaryEndpointIp: string;
        secondaryServiceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * generateZsspPassword operations
     * Generate a new password for Zerto Self Service Portal and receive it by email.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/generateZsspPassword'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * state operations
     * Get the current state of Zerto deployment on your dedicated Cloud.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/state'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.disasterRecovery.Profile>;
    /**
     * configureVpn operations
     * Configure vpn between your OVH Private Cloud and your onsite infrastructure
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/configureVpn'): (params: {
        datacenterId: number;
        serviceName: string;
        preSharedKey: string;
        remoteEndpointInternalIp: string;
        remoteEndpointPublicIp: string;
        remoteVraNetwork?: string;
        remoteZvmInternalIp: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable Single site Zerto
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/disable'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable Zerto replication between your OVH Private Cloud and your onsite infrastructure
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zertoSingle/enable'): (params: {
        datacenterId: number;
        serviceName: string;
        localVraNetwork: string;
        ovhEndpointIp: string;
        remoteVraNetwork: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * remove operations
     * Remove the filer from your Private Cloud.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove'): (params: {
        datacenterId: number;
        filerId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        datacenterId: number;
        filerId: number;
        serviceName: string;
        taskId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}/resetTaskState'): (params: {
        datacenterId: number;
        filerId: number;
        serviceName: string;
        taskId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * addHostSpare operations
     * Add a spare host to your Private Cloud.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * remove operations
     * Remove the host from your Private Cloud.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
        taskId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}/resetTaskState'): (params: {
        datacenterId: number;
        hostId: number;
        serviceName: string;
        taskId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * orderNewFilerHourly operations
     * Order a new hourly Filer in a given Datacenter
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly'): (params: {
        datacenterId: number;
        serviceName: string;
        name: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * orderNewHostHourly operations
     * Order a new hourly Host in a given Datacenter
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly'): (params: {
        datacenterId: number;
        serviceName: string;
        name: string;
        vmwareClusterId?: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Remove the private gateway in your Private Cloud and open public access.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Deploy a private gateway on your Private Cloud to block all public access
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable'): (params: {
        datacenterId: number;
        serviceName: string;
        ip: string;
        netmask: string;
        portgroup: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        datacenterId: number;
        serviceName: string;
        taskId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/task/{taskId}/resetTaskState'): (params: {
        datacenterId: number;
        serviceName: string;
        taskId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Private Cloud Backup Job
     * Edit a backup job
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
        backupDays: dedicatedCloudbackupBackupDaysEnum[];
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable backup solution on this virtual Machine
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/disable'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable backup solution on this virtual Machine
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/enable'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
        backupDays: dedicatedCloudbackupBackupDaysEnum[];
    }) => Promise<dedicatedCloud.Task>;
    /**
     * restore operations
     * Restore this restore point
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/backupJob/restorePoints/{restorePointId}/restore'): (params: {
        datacenterId: number;
        restorePointId: number;
        serviceName: string;
        vmId: number;
        filerId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disableBackup operations
     * Disable backup on this virtual Machine
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/disableBackup'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * editBackup operations
     * Edit backup on this virtual Machine
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/editBackup'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
        backupDays: dedicatedCloudbackupBackupDaysEnum[];
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enableBackup operations
     * Enable backup on this virtual Machine
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/enableBackup'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
        backupDays: dedicatedCloudbackupBackupDaysEnum[];
    }) => Promise<dedicatedCloud.Task>;
    /**
     * restoreBackup operations
     * Restore this restore point
     */
    post(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/restoreBackup'): (params: {
        datacenterId: number;
        serviceName: string;
        vmId: number;
        filerId: number;
        restorePointId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * List the dedicatedCloud.FederationAccessNetwork objects
     * Add a new option user access
     */
    post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory'): (params: {
        serviceName: string;
        baseDnForGroups: string;
        baseDnForUsers: string;
        description?: string;
        domainAlias: string;
        domainName: string;
        ip: string;
        password: string;
        username: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeProperties operations
     * Change Active Directory properties
     */
    post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/changeProperties'): (params: {
        activeDirectoryId: number;
        serviceName: string;
        description?: string;
        password: string;
        username: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * grantActiveDirectoryUser operations
     * Grant Active Directory user
     */
    post(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}/grantActiveDirectoryUser'): (params: {
        activeDirectoryId: number;
        serviceName: string;
        username: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * remove operations
     * Remove the filer from your Private Cloud.
     */
    post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/remove'): (params: {
        filerId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        filerId: number;
        serviceName: string;
        taskId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/filer/{filerId}/task/{taskId}/resetTaskState'): (params: {
        filerId: number;
        serviceName: string;
        taskId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable VMware Hybrid Cloud Extension option
     */
    post(path: '/dedicatedCloud/{serviceName}/hcx/disable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable VMware Hybrid Cloud Extension option
     */
    post(path: '/dedicatedCloud/{serviceName}/hcx/enable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable Hds option
     */
    post(path: '/dedicatedCloud/{serviceName}/hds/disable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable Hds option
     */
    post(path: '/dedicatedCloud/{serviceName}/hds/enable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable Hipaa option
     */
    post(path: '/dedicatedCloud/{serviceName}/hipaa/disable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable Hipaa option
     */
    post(path: '/dedicatedCloud/{serviceName}/hipaa/enable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        network: string;
        serviceName: string;
        taskId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}/resetTaskState'): (params: {
        network: string;
        serviceName: string;
        taskId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable Nsx option
     */
    post(path: '/dedicatedCloud/{serviceName}/nsx/disable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable Nsx option
     */
    post(path: '/dedicatedCloud/{serviceName}/nsx/enable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * orderNewFilerHourly operations
     * Order a new hourly Filer mounted in every Datacenter of a given Private Cloud
     */
    post(path: '/dedicatedCloud/{serviceName}/orderNewFilerHourly'): (params: {
        serviceName: string;
        name: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable PCI-DSS option
     */
    post(path: '/dedicatedCloud/{serviceName}/pcidss/disable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable PCI-DSS option
     */
    post(path: '/dedicatedCloud/{serviceName}/pcidss/enable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTriggeredAlarm operations
     * Reset all triggered alarms on PCC
     */
    post(path: '/dedicatedCloud/{serviceName}/resetTriggeredAlarm'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        serviceName: string;
        taskId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/task/{taskId}/resetTaskState'): (params: {
        serviceName: string;
        taskId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/dedicatedCloud/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the dedicatedCloud.twoFAWhitelist objects
     * Add a whitelisted ip on the two factor authentication
     */
    post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist'): (params: {
        serviceName: string;
        description: string;
        ip: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeProperties operations
     * Change Private Cloud Two facter authentication whitelist properties
     */
    post(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties'): (params: {
        id: number;
        serviceName: string;
        description?: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * upgradeHypervisor operations
     * Upgrade your hypervisor to the next released version
     */
    post(path: '/dedicatedCloud/{serviceName}/upgradeHypervisor'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * List the dedicatedCloud.User objects
     * Create a new User in your Private Cloud
     */
    post(path: '/dedicatedCloud/{serviceName}/user'): (params: {
        serviceName: string;
        canAddRessource?: boolean;
        canManageRights?: boolean;
        email?: string;
        expirationDate?: string;
        firstName?: string;
        lastName?: string;
        name: string;
        networkRole?: dedicatedCloudrightNetworkRoleEnum;
        nsxRight?: boolean;
        password?: string;
        phoneNumber?: string;
        receiveAlerts?: boolean;
        right?: dedicatedCloudrightRightEnum;
        tokenValidator?: boolean;
        vmNetworkRole?: dedicatedCloudrightVmNetworkRoleEnum;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changePassword operations
     * Change Private Cloud user password
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changePassword'): (params: {
        serviceName: string;
        userId: number;
        password?: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeProperties operations
     * Change Private Cloud user properties
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/changeProperties'): (params: {
        serviceName: string;
        userId: number;
        canManageIpFailOvers?: boolean;
        canManageNetwork?: boolean;
        canManageRights?: boolean;
        email?: string;
        firstName?: string;
        fullAdminRo?: boolean;
        lastName?: string;
        nsxRight?: boolean;
        phoneNumber?: string;
        receiveAlerts?: boolean;
        tokenValidator?: boolean;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable the given Private Cloud user
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/disable'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable the given Private Cloud user
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/enable'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * metricsToken operations
     * Get Metrics Token to query vScope Graphs data
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/metricsToken'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.metricsToken>;
    /**
     * List the dedicatedCloud.ObjectRight objects
     * Add a new object right to user in datacenter on Private Cloud
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight'): (params: {
        serviceName: string;
        userId: number;
        propagate?: boolean;
        right: dedicatedCloudrightRightEnum;
        type: dedicatedCloudrightUserObjectRightTypeEnum;
        vmwareObjectId: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeMaintenanceExecutionDate operations
     * Change the execution date of a maintenance. Works only if task type is maintenance and if it has not started yet.
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/changeMaintenanceExecutionDate'): (params: {
        serviceName: string;
        taskId: number;
        userId: number;
        executionDate: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * resetTaskState operations
     * Restart task in error.
     */
    post(path: '/dedicatedCloud/{serviceName}/user/{userId}/task/{taskId}/resetTaskState'): (params: {
        serviceName: string;
        taskId: number;
        userId: number;
        reason: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * objectType operations
     * Get available object types
     */
    post(path: '/dedicatedCloud/{serviceName}/vendor/objectType'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * ovhId operations
     * Get ovh id from object type
     */
    post(path: '/dedicatedCloud/{serviceName}/vendor/ovhId'): (params: {
        serviceName: string;
        objectType: dedicatedCloud.VendorObjectTypeEnum;
        vendorId: string;
    }) => Promise<dedicatedCloud.vendor.OvhId>;
    /**
     * List the dedicatedCloud.VMEncryptionAccessNetwork objects
     * Add a new option user access
     */
    post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms'): (params: {
        serviceName: string;
        description?: string;
        ip: string;
        sslThumbprint: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * changeProperties operations
     * Change option user access properties
     */
    post(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties'): (params: {
        kmsId: number;
        serviceName: string;
        description?: string;
        sslThumbprint: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * disable operations
     * Disable vRealize Operations option
     */
    post(path: '/dedicatedCloud/{serviceName}/vrops/disable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * enable operations
     * Enable vRealize Operations option
     */
    post(path: '/dedicatedCloud/{serviceName}/vrops/enable'): (params: {
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Network allowed to connect to the Private Cloud management interface
     * Remove this network from your Private Cloud
     */
    delete(path: '/dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}'): (params: {
        networkAccessId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Private Cloud Datacenter
     * Remove this Datacenter from your Private Cloud. (It has to be empty in order to be removable)
     */
    delete(path: '/dedicatedCloud/{serviceName}/datacenter/{datacenterId}'): (params: {
        datacenterId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Private Cloud federation option access network
     * Remove an option user access
     */
    delete(path: '/dedicatedCloud/{serviceName}/federation/activeDirectory/{activeDirectoryId}'): (params: {
        activeDirectoryId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Trust IP which can bypass the two factor authentication
     * Remove a whitelisted ip on the two factor authentication
     */
    delete(path: '/dedicatedCloud/{serviceName}/twoFAWhitelist/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Private Cloud User
     * Remove a given user from your Private Cloud
     */
    delete(path: '/dedicatedCloud/{serviceName}/user/{userId}'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Private Cloud User object right
     * Remove an object right from user in datacenter on Private Cloud
     */
    delete(path: '/dedicatedCloud/{serviceName}/user/{userId}/objectRight/{objectRightId}'): (params: {
        objectRightId: number;
        serviceName: string;
        userId: number;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * Private Cloud VM Encryption option access network
     * Remove an option user access
     */
    delete(path: '/dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}'): (params: {
        kmsId: number;
        serviceName: string;
    }) => Promise<dedicatedCloud.Task>;
    /**
     * vrack dedicated cloud interface
     * remove this dedicatedCloud (VmNetwork) from this vrack
     */
    delete(path: '/dedicatedCloud/{serviceName}/vrack/{vrack}'): (params: {
        serviceName: string;
        vrack: string;
    }) => Promise<vrack.Task>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type dedicatedCloudAllowedNetworkStateEnum = dedicatedCloud.AllowedNetworkStateEnum;
declare type dedicatedCloudoptionStateEnum = dedicatedCloud.option.StateEnum;
declare type dedicatedCloudbackupOfferTypeEnum = dedicatedCloud.backup.OfferTypeEnum;
declare type dedicatedCloudBackupStateEnum = dedicatedCloud.BackupStateEnum;
declare type dedicatedCloudbackupBackupDaysEnum = dedicatedCloud.backup.BackupDaysEnum;
declare type dedicatedCloudbackupStateEnum = dedicatedCloud.backup.StateEnum;
declare type dedicatedCloudcapabilitiesFeatureStatusEnum = dedicatedCloud.capabilities.FeatureStatusEnum;
declare type dedicatedCloudclusterAutoScale = dedicatedCloud.cluster.AutoScale;
declare type dedicatedCloudclusterClusterDrsModeEnum = dedicatedCloud.cluster.ClusterDrsModeEnum;
declare type dedicatedCloudclusterClusterConfigsStatusEnum = dedicatedCloud.cluster.ClusterConfigsStatusEnum;
declare type dedicatedCloudHypervisorVersionEnum = dedicatedCloud.HypervisorVersionEnum;
declare type dedicatedCloudrightNetworkRoleEnum = dedicatedCloud.right.NetworkRoleEnum;
declare type dedicatedCloudCommercialNameEnum = dedicatedCloud.CommercialNameEnum;
declare type dedicatedCloudoptionAccessNetworkStateEnum = dedicatedCloud.optionAccessNetwork.StateEnum;
declare type dedicatedCloudressourcesBillingTypeEnum = dedicatedCloud.ressources.BillingTypeEnum;
declare type dedicatedCloudfilerStateEnum = dedicatedCloud.filer.StateEnum;
declare type dedicatedCloudhostSystemConnectionState = dedicatedCloud.hostSystemConnectionState;
declare type dedicatedCloudhostStateEnum = dedicatedCloud.host.StateEnum;
declare type dedicatedCloudHostStockHypervisor = dedicatedCloud.HostStockHypervisor;
declare type dedicatedCloudHostStockProcGen = dedicatedCloud.HostStockProcGen;
declare type dedicatedCloudBlockRegisterEnum = dedicatedCloud.BlockRegisterEnum;
declare type dedicatedCloudipUsageEnum = dedicatedCloud.ipUsageEnum;
declare type dedicatedCloudrightRightEnum = dedicatedCloud.right.RightEnum;
declare type dedicatedCloudrightUserObjectRightTypeEnum = dedicatedCloud.right.UserObjectRightTypeEnum;
declare type dedicatedCloudbackupBackupTypeEnum = dedicatedCloud.backup.BackupTypeEnum;
declare type dedicatedCloudrightVmNetworkRoleEnum = dedicatedCloud.right.VmNetworkRoleEnum;
declare type dedicatedCloudTaskStateEnum = dedicatedCloud.TaskStateEnum;
declare type dedicatedClouduserActivationStateEnum = dedicatedCloud.user.ActivationStateEnum;
declare type dedicatedClouduserStateEnum = dedicatedCloud.user.StateEnum;
declare type dedicatedCloudvlanStateEnum = dedicatedCloud.vlan.StateEnum;
declare type dedicatedCloudvlanTypeEnum = dedicatedCloud.vlan.TypeEnum;
declare type dedicatedCloudbackupBackup = dedicatedCloud.backup.Backup;
declare type dedicatedCloudvirtualMachineCdrom = dedicatedCloud.virtualMachineCdrom;
declare type dedicatedCloudvmFiler = dedicatedCloud.vmFiler;
declare type dedicatedCloudvmNetwork = dedicatedCloud.vmNetwork;
declare type dedicatedCloudvirtualMachinePowerState = dedicatedCloud.virtualMachinePowerState;
declare type dedicatedCloudvirtualMachineFaultToleranceState = dedicatedCloud.virtualMachineFaultToleranceState;
declare type dedicatedCloudbackupJobStateEnum = dedicatedCloud.backup.JobStateEnum;
declare type dedicatedCloudbackupRestorePoint = dedicatedCloud.backup.RestorePoint;
declare type dedicatedCloudclusterAutoScaleModeEnum = dedicatedCloud.cluster.AutoScaleModeEnum;
declare type dedicatedCloudBillingTypeEnum = dedicatedCloud.BillingTypeEnum;
declare type dedicatedCloudGenerationEnum = dedicatedCloud.GenerationEnum;
declare type dedicatedCloudManagementInterfaceEnum = dedicatedCloud.ManagementInterfaceEnum;
declare type dedicatedCloudStateEnum = dedicatedCloud.StateEnum;
declare type dedicatedCloudUserAccessPolicyEnum = dedicatedCloud.UserAccessPolicyEnum;
declare type dedicatedCloudUserLogoutPolicyEnum = dedicatedCloud.UserLogoutPolicyEnum;
declare type dedicatedCloudVersion = dedicatedCloud.Version;
declare type dedicatedClouddisasterRecoverySiteRoleEnum = dedicatedCloud.disasterRecovery.SiteRoleEnum;
declare type dedicatedClouddisasterRecoverySiteTypeEnum = dedicatedCloud.disasterRecovery.SiteTypeEnum;
declare type dedicatedClouddisasterRecoveryDrpTypeEnum = dedicatedCloud.disasterRecovery.DrpTypeEnum;
declare type dedicatedClouddisasterRecoveryLocalSiteDetails = dedicatedCloud.disasterRecovery.LocalSiteDetails;
declare type dedicatedClouddisasterRecoveryRemoteSiteDetails = dedicatedCloud.disasterRecovery.RemoteSiteDetails;
declare type dedicatedClouddisasterRecoveryVpnConfigStateEnum = dedicatedCloud.disasterRecovery.VpnConfigStateEnum;
declare type dedicatedCloudresourceNewPricesEntry = dedicatedCloud.resourceNewPricesEntry;
declare type dedicatedCloudressourcesResourceTypeEnum = dedicatedCloud.ressources.ResourceTypeEnum;
declare type dedicatedCloudservicePackEnum = dedicatedCloud.servicePackEnum;
declare type dedicatedCloudservicePackStateEnum = dedicatedCloud.servicePackStateEnum;
declare type dedicatedCloudTwoFAWhitelistStateEnum = dedicatedCloud.TwoFAWhitelistStateEnum;
declare type dedicatedCloudvmFilerDisk = dedicatedCloud.vmFilerDisk;
declare type dedicatedCloudvmNetworkBacking = dedicatedCloud.vmNetworkBacking;
declare type dedicatedCloudvirtualDeviceConnectInfoStatus = dedicatedCloud.virtualDeviceConnectInfoStatus;
declare type dedicatedCloudvmNetworkBackingTypeEnum = dedicatedCloud.vmNetworkBackingTypeEnum;
