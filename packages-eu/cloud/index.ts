import { buildOvhProxy, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cloud Models
 * Source: https://eu.api.ovh.com/1.0/cloud.json
 */
export namespace cloud {
    /**
     * Possible values for project access type
     * type fullname: cloud.AccessTypeEnum
     */
    export type AccessTypeEnum = "full" | "restricted"
    /**
     * Cloud ACL
     * interface fullName: cloud.Acl.Acl
     */
    export interface Acl {
        accountId: string;
        type: cloud.AclTypeEnum;
    }
    /**
     * Possible values for ACL type
     * type fullname: cloud.AclTypeEnum
     */
    export type AclTypeEnum = "readOnly" | "readWrite"
    /**
     * Cloud alerting consumption
     * interface fullName: cloud.Alerting.Alerting
     */
    export interface Alerting {
        creationDate: string;
        delay: cloud.AlertingDelayEnum;
        email: string;
        formattedMonthlyThreshold: orderPrice;
        id: string;
        monthlyThreshold: number;
    }
    /**
     * Cloud alert on your consumption
     * interface fullName: cloud.AlertingAlert.AlertingAlert
     */
    export interface AlertingAlert {
        alertDate: string;
        alertId: number;
        emails: string[];
    }
    /**
     * Possible values for delay between two alerts in seconds
     * type fullname: cloud.AlertingDelayEnum
     */
    export type AlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400
    /**
     * Details about archive storage pricing
     * interface fullName: cloud.ArchiveStoragePrice.ArchiveStoragePrice
     */
    export interface ArchiveStoragePrice {
        monthlyPrice: orderPrice;
        region: string;
    }
    /**
     * Details about an available region that can be activated on your project
     * interface fullName: cloud.AvailableRegion.AvailableRegion
     */
    export interface AvailableRegion {
        continentCode: cloud.RegionContinentEnum;
        datacenterLocation: string;
        name: string;
    }
    /**
     * List your automated backups
     * interface fullName: cloud.Backup.Backup
     */
    export interface Backup {
        backupName: string;
        createdAt: string;
        cron: string;
        executions?: cloud.Execution[];
        id: string;
        instanceId: string;
        name: string;
    }
    /**
     * Details about bandwidth storage pricing
     * interface fullName: cloud.BandwidthStoragePrice.BandwidthStoragePrice
     */
    export interface BandwidthStoragePrice {
        price: orderPrice;
        region: string;
    }
    /**
     * Information about the different components available in the region
     * interface fullName: cloud.Component.Component
     */
    export interface Component {
        name: string;
        status: cloud.ServiceStatusEnum;
    }
    /**
     * Cloud credit
     * interface fullName: cloud.Credit.Credit
     */
    export interface Credit {
        available_credit: orderPrice;
        bill?: string;
        description?: string;
        id: number;
        products?: string[];
        total_credit: orderPrice;
        used_credit: orderPrice;
        validity?: cloud.common.VoucherValidity;
        voucher?: string;
    }
    /**
     * An execution of the backup workflow
     * interface fullName: cloud.Execution.Execution
     */
    export interface Execution {
        executedAt: string;
        state: cloud.ExecutionStateEnum;
        stateInfo: string;
    }
    /**
     * Enum values for State
     * type fullname: cloud.ExecutionState
     */
    export type ExecutionState = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
    /**
     * Enum values for State
     * type fullname: cloud.ExecutionStateEnum
     */
    export type ExecutionStateEnum = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
    /**
     * Details about flavor pricing
     * interface fullName: cloud.FlavorPrice.FlavorPrice
     */
    export interface FlavorPrice {
        flavorId: string;
        flavorName: string;
        monthlyPrice?: orderPrice;
        price: orderPrice;
        region: string;
    }
    /**
     * Enum values for IpCountry
     * type fullname: cloud.IpCountryEnum
     */
    export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    /**
     * A public cloud lab permits to activate a feature in beta
     * interface fullName: cloud.Lab.Lab
     */
    export interface Lab {
        id: string;
        name: string;
        status: cloud.LabStatusEnum;
    }
    /**
     * List of required agreements to activate the lab
     * interface fullName: cloud.LabAgreements.LabAgreements
     */
    export interface LabAgreements {
        accepted: number[];
        toAccept: number[];
    }
    /**
     * Enum values for Status
     * type fullname: cloud.LabStatus
     */
    export type LabStatus = "open" | "activating" | "activated" | "closed"
    /**
     * Enum values for Status
     * type fullname: cloud.LabStatusEnum
     */
    export type LabStatusEnum = "open" | "activating" | "activated" | "closed"
    /**
     * An operation is an async process on your Project
     * interface fullName: cloud.Operation.Operation
     */
    export interface Operation {
        action: string;
        completedAt?: string;
        createdAt: string;
        id: string;
        progress: number;
        regions?: string[];
        startedAt?: string;
        status: cloud.OperationStatusEnum;
    }
    /**
     * Enum values for Status
     * type fullname: cloud.OperationStatus
     */
    export type OperationStatus = "created" | "in-progress" | "completed" | "in-error" | "unknown"
    /**
     * Enum values for Status
     * type fullname: cloud.OperationStatusEnum
     */
    export type OperationStatusEnum = "created" | "in-progress" | "completed" | "in-error" | "unknown"
    /**
     * A structure defining prices for cloud services
     * interface fullName: cloud.Price.Price
     */
    export interface Price {
        archive: cloud.ArchiveStoragePrice[];
        bandwidthArchiveIn: cloud.BandwidthStoragePrice[];
        bandwidthArchiveOut: cloud.BandwidthStoragePrice[];
        bandwidthStorage: cloud.BandwidthStoragePrice[];
        instances: cloud.FlavorPrice[];
        projectCreation: orderPrice;
        snapshots: cloud.SnapshotPrice[];
        storage: cloud.StoragePrice[];
        volumes: cloud.VolumePrice[];
    }
    /**
     * Project
     * interface fullName: cloud.Project.Project
     */
    export interface Project {
        access: cloud.AccessTypeEnum;
        creationDate: string;
        description?: string;
        expiration?: string;
        orderId?: number;
        planCode: string;
        project_id: string;
        status: cloud.project.ProjectStatusEnum;
        unleash: boolean;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectActivateMonthlyBillingCreation.ProjectActivateMonthlyBillingCreation
     */
    export interface ProjectActivateMonthlyBillingCreation {
        instances: cloud.instance.MonthlyInstanceBulkParams[];
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectContainerRegistryCreation.ProjectContainerRegistryCreation
     */
    export interface ProjectContainerRegistryCreation {
        name: string;
        planID: string;
        region: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectContainerRegistryUpdate.ProjectContainerRegistryUpdate
     */
    export interface ProjectContainerRegistryUpdate {
        name: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectContainerRegistryUsersCreation.ProjectContainerRegistryUsersCreation
     */
    export interface ProjectContainerRegistryUsersCreation {
        email?: string;
        login?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceBulkCreation.ProjectInstanceBulkCreation
     */
    export interface ProjectInstanceBulkCreation {
        autobackup?: cloud.instance.AutoBackup;
        flavorId: string;
        groupId?: string;
        imageId?: string;
        monthlyBilling?: boolean;
        name: string;
        networks?: cloud.instance.NetworkBulkParams[];
        number: number;
        region: string;
        sshKeyId?: string;
        userData?: string;
        volumeId?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceCreation.ProjectInstanceCreation
     */
    export interface ProjectInstanceCreation {
        autobackup?: cloud.instance.AutoBackup;
        flavorId: string;
        groupId?: string;
        imageId?: string;
        monthlyBilling?: boolean;
        name: string;
        networks?: cloud.instance.NetworkParams[];
        region: string;
        sshKeyId?: string;
        userData?: string;
        volumeId?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceGroupCreation.ProjectInstanceGroupCreation
     */
    export interface ProjectInstanceGroupCreation {
        name: string;
        region: string;
        type: cloud.instancegroup.InstanceGroupTypeEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceInterfaceCreation.ProjectInstanceInterfaceCreation
     */
    export interface ProjectInstanceInterfaceCreation {
        ip?: string;
        networkId: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceRebootCreation.ProjectInstanceRebootCreation
     */
    export interface ProjectInstanceRebootCreation {
        type: cloud.instance.RebootTypeEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceReinstallCreation.ProjectInstanceReinstallCreation
     */
    export interface ProjectInstanceReinstallCreation {
        imageId: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceRescueModeCreation.ProjectInstanceRescueModeCreation
     */
    export interface ProjectInstanceRescueModeCreation {
        imageId?: string;
        rescue: boolean;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceResizeCreation.ProjectInstanceResizeCreation
     */
    export interface ProjectInstanceResizeCreation {
        flavorId: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceSnapshotCreation.ProjectInstanceSnapshotCreation
     */
    export interface ProjectInstanceSnapshotCreation {
        snapshotName: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectInstanceUpdate.ProjectInstanceUpdate
     */
    export interface ProjectInstanceUpdate {
        instanceName: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectIpFailoverAttachCreation.ProjectIpFailoverAttachCreation
     */
    export interface ProjectIpFailoverAttachCreation {
        instanceId: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeCreation.ProjectKubeCreation
     */
    export interface ProjectKubeCreation {
        name?: string;
        region: cloud.kube.RegionEnum;
        version?: cloud.kube.VersionEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeNodeCreation.ProjectKubeNodeCreation
     */
    export interface ProjectKubeNodeCreation {
        flavorName: string;
        name?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeNodePoolCreation.ProjectKubeNodePoolCreation
     */
    export interface ProjectKubeNodePoolCreation {
        desiredNodes?: number;
        flavorName: string;
        maxNodes?: number;
        minNodes?: number;
        name?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeNodePoolUpdate.ProjectKubeNodePoolUpdate
     */
    export interface ProjectKubeNodePoolUpdate {
        desiredNodes?: number;
        maxNodes?: number;
        minNodes?: number;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeResetCreation.ProjectKubeResetCreation
     */
    export interface ProjectKubeResetCreation {
        version?: cloud.kube.VersionEnum;
        workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicyEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeUpdate.ProjectKubeUpdate
     */
    export interface ProjectKubeUpdate {
        name: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeUpdateCreation.ProjectKubeUpdateCreation
     */
    export interface ProjectKubeUpdateCreation {
        strategy?: cloud.kube.UpdateStrategyEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeUpdatePolicyUpdate.ProjectKubeUpdatePolicyUpdate
     */
    export interface ProjectKubeUpdatePolicyUpdate {
        updatePolicy: cloud.kube.UpdatePolicyEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectMigrationUpdate.ProjectMigrationUpdate
     */
    export interface ProjectMigrationUpdate {
        date: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectNetworkPrivateCreation.ProjectNetworkPrivateCreation
     */
    export interface ProjectNetworkPrivateCreation {
        name: string;
        regions?: string[];
        vlanId?: number;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectNetworkPrivateRegionCreation.ProjectNetworkPrivateRegionCreation
     */
    export interface ProjectNetworkPrivateRegionCreation {
        region: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectNetworkPrivateSubnetCreation.ProjectNetworkPrivateSubnetCreation
     */
    export interface ProjectNetworkPrivateSubnetCreation {
        dhcp: boolean;
        end: string;
        network: string;
        noGateway: boolean;
        region: string;
        start: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectNetworkPrivateSubnetUpdate.ProjectNetworkPrivateSubnetUpdate
     */
    export interface ProjectNetworkPrivateSubnetUpdate {
        dhcp: boolean;
        disableGateway: boolean;
        gatewayIp?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectNetworkPrivateUpdate.ProjectNetworkPrivateUpdate
     */
    export interface ProjectNetworkPrivateUpdate {
        name: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectRegionCreation.ProjectRegionCreation
     */
    export interface ProjectRegionCreation {
        region: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectRegionQuotaCreation.ProjectRegionQuotaCreation
     */
    export interface ProjectRegionQuotaCreation {
        name: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectRegionWorkflowBackupCreation.ProjectRegionWorkflowBackupCreation
     */
    export interface ProjectRegionWorkflowBackupCreation {
        cron: string;
        instanceId: string;
        maxExecutionCount?: number;
        name: string;
        rotation: number;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectSshkeyCreation.ProjectSshkeyCreation
     */
    export interface ProjectSshkeyCreation {
        name: string;
        publicKey: string;
        region?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectStorageCorsCreation.ProjectStorageCorsCreation
     */
    export interface ProjectStorageCorsCreation {
        origin: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectStorageCreation.ProjectStorageCreation
     */
    export interface ProjectStorageCreation {
        archive: boolean;
        containerName: string;
        region: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectStoragePublicUrlCreation.ProjectStoragePublicUrlCreation
     */
    export interface ProjectStoragePublicUrlCreation {
        expirationDate: string;
        objectName: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectStorageUpdate.ProjectStorageUpdate
     */
    export interface ProjectStorageUpdate {
        containerType?: cloud.storage.TypeEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectStorageUserCreation.ProjectStorageUserCreation
     */
    export interface ProjectStorageUserCreation {
        description?: string;
        right: cloud.storage.RightEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectUserCreation.ProjectUserCreation
     */
    export interface ProjectUserCreation {
        description?: string;
        role?: cloud.user.RoleEnum;
        roles?: cloud.user.RoleEnum[];
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectUserRoleCreation.ProjectUserRoleCreation
     */
    export interface ProjectUserRoleCreation {
        roleId: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectUserRoleUpdate.ProjectUserRoleUpdate
     */
    export interface ProjectUserRoleUpdate {
        rolesIds: string[];
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectUserTokenCreation.ProjectUserTokenCreation
     */
    export interface ProjectUserTokenCreation {
        password: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectVolumeAttachCreation.ProjectVolumeAttachCreation
     */
    export interface ProjectVolumeAttachCreation {
        instanceId: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectVolumeCreation.ProjectVolumeCreation
     */
    export interface ProjectVolumeCreation {
        description?: string;
        imageId?: string;
        name?: string;
        region: string;
        size: number;
        snapshotId?: string;
        type: cloud.volume.VolumeTypeEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectVolumeDetachCreation.ProjectVolumeDetachCreation
     */
    export interface ProjectVolumeDetachCreation {
        instanceId: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectVolumeSnapshotCreation.ProjectVolumeSnapshotCreation
     */
    export interface ProjectVolumeSnapshotCreation {
        description?: string;
        name?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectVolumeUpdate.ProjectVolumeUpdate
     */
    export interface ProjectVolumeUpdate {
        description?: string;
        name?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectVolumeUpsizeCreation.ProjectVolumeUpsizeCreation
     */
    export interface ProjectVolumeUpsizeCreation {
        size: number;
    }
    /**
     * Details about your region
     * interface fullName: cloud.Region.Region
     */
    export interface Region {
        continentCode: cloud.RegionContinentEnum;
        datacenterLocation: string;
        ipCountries: cloud.IpCountryEnum[];
        name: string;
        services: cloud.Component[];
        status: cloud.RegionStatusEnum;
    }
    /**
     * Enum values for ContinentCode
     * type fullname: cloud.RegionContinent
     */
    export type RegionContinent = "EU" | "NA" | "US" | "ASIA"
    /**
     * Enum values for ContinentCode
     * type fullname: cloud.RegionContinentEnum
     */
    export type RegionContinentEnum = "EU" | "NA" | "US" | "ASIA"
    /**
     * Enum values for Status
     * type fullname: cloud.RegionStatus
     */
    export type RegionStatus = "UP" | "DOWN" | "MAINTENANCE"
    /**
     * Enum values for Status
     * type fullname: cloud.RegionStatusEnum
     */
    export type RegionStatusEnum = "UP" | "DOWN" | "MAINTENANCE"
    /**
     * Enum values for Status
     * type fullname: cloud.ServiceStatus
     */
    export type ServiceStatus = "UP" | "DOWN"
    /**
     * Enum values for Status
     * type fullname: cloud.ServiceStatusEnum
     */
    export type ServiceStatusEnum = "UP" | "DOWN"
    /**
     * Details about snapshot pricing
     * interface fullName: cloud.SnapshotPrice.SnapshotPrice
     */
    export interface SnapshotPrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    /**
     * Details about storage pricing
     * interface fullName: cloud.StoragePrice.StoragePrice
     */
    export interface StoragePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    /**
     * Details about volume pricing
     * interface fullName: cloud.VolumePrice.VolumePrice
     */
    export interface VolumePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
        volumeName: string;
    }
    /**
     * A vRack allows to connect your OVH infrastructures accross products and datacenters
     * interface fullName: cloud.Vrack.Vrack
     */
    export interface Vrack {
        description: string;
        id: string;
        name: string;
    }
    export namespace authentication {
        /**
         * Catalog
         * interface fullName: cloud.authentication.Catalog.Catalog
         */
        export interface Catalog {
            endpoints: cloud.authentication.Endpoint[];
            id: string;
            type: string;
        }
        /**
         * Domain
         * interface fullName: cloud.authentication.Domain.Domain
         */
        export interface Domain {
            name: string;
        }
        /**
         * Endpoint
         * interface fullName: cloud.authentication.Endpoint.Endpoint
         */
        export interface Endpoint {
            id: string;
            interface: string;
            legacy_endpoint_id: string;
            region_id: string;
            service_id: string;
            url: string;
        }
        /**
         * OpenstackToken
         * interface fullName: cloud.authentication.OpenstackToken.OpenstackToken
         */
        export interface OpenstackToken {
            catalog: cloud.authentication.Catalog[];
            expires_at: string;
            issued_at: string;
            methods: string[];
            project: cloud.authentication.TokenProject;
            roles: cloud.authentication.Role[];
            user: cloud.authentication.UserToken;
        }
        /**
         * Role
         * interface fullName: cloud.authentication.Role.Role
         */
        export interface Role {
            id: string;
            name: string;
        }
        /**
         * Token
         * interface fullName: cloud.authentication.Token.Token
         */
        export interface Token {
            'X-Auth-Token': string;
            token: cloud.authentication.OpenstackToken;
        }
        /**
         * TokenProject
         * interface fullName: cloud.authentication.TokenProject.TokenProject
         */
        export interface TokenProject {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
        /**
         * UserToken
         * interface fullName: cloud.authentication.UserToken.UserToken
         */
        export interface UserToken {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
    }
    export namespace billingView {
        /**
         * BandwidthInstance
         * interface fullName: cloud.billingView.BandwidthInstance.BandwidthInstance
         */
        export interface BandwidthInstance {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        /**
         * BandwidthStorage
         * interface fullName: cloud.billingView.BandwidthStorage.BandwidthStorage
         */
        export interface BandwidthStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        /**
         * Component
         * interface fullName: cloud.billingView.Component.Component
         */
        export interface Component {
            name: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        /**
         * HourlyInstance
         * interface fullName: cloud.billingView.HourlyInstance.HourlyInstance
         */
        export interface HourlyInstance {
            details: cloud.billingView.HourlyInstanceDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        /**
         * HourlyInstanceBandwidth
         * interface fullName: cloud.billingView.HourlyInstanceBandwidth.HourlyInstanceBandwidth
         */
        export interface HourlyInstanceBandwidth {
            incomingBandwidth?: cloud.billingView.BandwidthInstance;
            outgoingBandwidth?: cloud.billingView.BandwidthInstance;
            region: string;
            totalPrice: number;
        }
        /**
         * HourlyInstanceDetail
         * interface fullName: cloud.billingView.HourlyInstanceDetail.HourlyInstanceDetail
         */
        export interface HourlyInstanceDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        /**
         * HourlyInstanceOption
         * interface fullName: cloud.billingView.HourlyInstanceOption.HourlyInstanceOption
         */
        export interface HourlyInstanceOption {
            details: cloud.billingView.HourlyInstanceOptionDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        /**
         * HourlyInstanceOptionDetail
         * interface fullName: cloud.billingView.HourlyInstanceOptionDetail.HourlyInstanceOptionDetail
         */
        export interface HourlyInstanceOptionDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        /**
         * HourlyResources
         * interface fullName: cloud.billingView.HourlyResources.HourlyResources
         */
        export interface HourlyResources {
            instance: cloud.billingView.HourlyInstance[];
            instanceBandwidth: cloud.billingView.HourlyInstanceBandwidth[];
            instanceOption: cloud.billingView.HourlyInstanceOption[];
            snapshot: cloud.billingView.HourlySnapshot[];
            storage: cloud.billingView.HourlyStorage[];
            volume: cloud.billingView.HourlyVolume[];
        }
        /**
         * HourlySnapshot
         * interface fullName: cloud.billingView.HourlySnapshot.HourlySnapshot
         */
        export interface HourlySnapshot {
            instance?: cloud.billingView.InstanceSnapshot;
            region: string;
            totalPrice: number;
            volume?: cloud.billingView.VolumeSnapshot;
        }
        /**
         * HourlyStorage
         * interface fullName: cloud.billingView.HourlyStorage.HourlyStorage
         */
        export interface HourlyStorage {
            incomingBandwidth?: cloud.billingView.BandwidthStorage;
            outgoingBandwidth?: cloud.billingView.BandwidthStorage;
            region: string;
            stored?: cloud.billingView.StoredStorage;
            totalPrice: number;
            type: cloud.billingView.StorageTypeEnum;
        }
        /**
         * HourlyVolume
         * interface fullName: cloud.billingView.HourlyVolume.HourlyVolume
         */
        export interface HourlyVolume {
            details: cloud.billingView.HourlyVolumeDetail[];
            quantity: cloud.billingView.Quantity;
            region: string;
            totalPrice: number;
            type: string;
        }
        /**
         * HourlyVolumeDetail
         * interface fullName: cloud.billingView.HourlyVolumeDetail.HourlyVolumeDetail
         */
        export interface HourlyVolumeDetail {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
            volumeId: string;
        }
        /**
         * InstanceSnapshot
         * interface fullName: cloud.billingView.InstanceSnapshot.InstanceSnapshot
         */
        export interface InstanceSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        /**
         * MonthlyInstance
         * interface fullName: cloud.billingView.MonthlyInstance.MonthlyInstance
         */
        export interface MonthlyInstance {
            details: cloud.billingView.MonthlyInstanceDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        /**
         * MonthlyInstanceDetail
         * interface fullName: cloud.billingView.MonthlyInstanceDetail.MonthlyInstanceDetail
         */
        export interface MonthlyInstanceDetail {
            activation: string;
            instanceId: string;
            totalPrice: number;
        }
        /**
         * MonthlyInstanceOption
         * interface fullName: cloud.billingView.MonthlyInstanceOption.MonthlyInstanceOption
         */
        export interface MonthlyInstanceOption {
            details: cloud.billingView.MonthlyInstanceOptionDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        /**
         * MonthlyInstanceOptionDetail
         * interface fullName: cloud.billingView.MonthlyInstanceOptionDetail.MonthlyInstanceOptionDetail
         */
        export interface MonthlyInstanceOptionDetail {
            instanceId: string;
            totalPrice: number;
        }
        /**
         * MonthlyResources
         * interface fullName: cloud.billingView.MonthlyResources.MonthlyResources
         */
        export interface MonthlyResources {
            instance: cloud.billingView.MonthlyInstance[];
            instanceOption: cloud.billingView.MonthlyInstanceOption[];
        }
        /**
         * Quantity
         * interface fullName: cloud.billingView.Quantity.Quantity
         */
        export interface Quantity {
            unit: cloud.billingView.UnitQuantityEnum;
            value: number;
        }
        /**
         * RegionalizedResource
         * interface fullName: cloud.billingView.RegionalizedResource.RegionalizedResource
         */
        export interface RegionalizedResource {
            components: cloud.billingView.Component[];
            region: string;
        }
        /**
         * StorageTypeEnum
         * type fullname: cloud.billingView.StorageTypeEnum
         */
        export type StorageTypeEnum = "pcs" | "pca"
        /**
         * StoredStorage
         * interface fullName: cloud.billingView.StoredStorage.StoredStorage
         */
        export interface StoredStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        /**
         * TypedResources
         * interface fullName: cloud.billingView.TypedResources.TypedResources
         */
        export interface TypedResources {
            resources: cloud.billingView.RegionalizedResource[];
            totalPrice: number;
            type: string;
        }
        /**
         * UnitQuantity
         * type fullname: cloud.billingView.UnitQuantity
         */
        export type UnitQuantity = "GiB" | "GiBh" | "Hour"
        /**
         * UnitQuantity
         * type fullname: cloud.billingView.UnitQuantityEnum
         */
        export type UnitQuantityEnum = "GiB" | "GiBh" | "Hour" | "Minute" | "Second"
        /**
         * UsedCredit
         * interface fullName: cloud.billingView.UsedCredit.UsedCredit
         */
        export interface UsedCredit {
            description: string;
            id: number;
            usedAmount: number;
        }
        /**
         * UsedCredits
         * interface fullName: cloud.billingView.UsedCredits.UsedCredits
         */
        export interface UsedCredits {
            details: cloud.billingView.UsedCredit[];
            totalCredit: number;
        }
        /**
         * VolumeSnapshot
         * interface fullName: cloud.billingView.VolumeSnapshot.VolumeSnapshot
         */
        export interface VolumeSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
    }
    export namespace capabilities {
        /**
         * Capability
         * interface fullName: cloud.capabilities.Capability.Capability
         */
        export interface Capability {
            enabled: boolean;
            name: string;
        }
    }
    export namespace common {
        /**
         * Voucher validity range
         * interface fullName: cloud.common.VoucherValidity.VoucherValidity
         */
        export interface VoucherValidity {
            from?: string;
            to?: string;
        }
    }
    export namespace containerRegistry {
        /**
         * The container registry capability for a single region
         * interface fullName: cloud.containerRegistry.Capability.Capability
         */
        export interface Capability {
            plans: cloud.containerRegistry.Plan[];
            regionName: string;
        }
        /**
         * Features list, enabled or not
         * interface fullName: cloud.containerRegistry.Features.Features
         */
        export interface Features {
            vulnerability: boolean;
        }
        /**
         * Limitation of a docker registry
         * interface fullName: cloud.containerRegistry.Limits.Limits
         */
        export interface Limits {
            imageStorage: number;
            parallelRequest: number;
        }
        /**
         * Plan of the registry
         * interface fullName: cloud.containerRegistry.Plan.Plan
         */
        export interface Plan {
            createdAt: string;
            features: cloud.containerRegistry.Features;
            id: string;
            name: string;
            registryLimits: cloud.containerRegistry.Limits;
            updatedAt: string;
        }
        /**
         * Missing description
         * interface fullName: cloud.containerRegistry.PlanUpdate.PlanUpdate
         */
        export interface PlanUpdate {
            planID: string;
        }
        /**
         * Managed docker registry
         * interface fullName: cloud.containerRegistry.Registry.Registry
         */
        export interface Registry {
            createdAt: string;
            id: string;
            name: string;
            projectID: string;
            region: string;
            size: number;
            status: cloud.containerRegistry.StatusEnum;
            updatedAt: string;
            url: string;
            version: string;
        }
        /**
         * Status of the registry
         * type fullname: cloud.containerRegistry.StatusEnum
         */
        export type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING"
        /**
         * Docker registry user
         * interface fullName: cloud.containerRegistry.User.User
         */
        export interface User {
            email: string;
            id: string;
            password?: string;
            user: string;
        }
        export namespace registry {
            /**
             * Region of the registry
             * type fullname: cloud.containerRegistry.registry.RegionEnum
             */
            export type RegionEnum = "GRA7"
            /**
             * Managed docker registry
             * interface fullName: cloud.containerRegistry.registry.Registry.Registry
             */
            export interface Registry {
                createdAt: string;
                id: string;
                name: string;
                projectID: string;
                region: cloud.containerRegistry.registry.RegionEnum;
                status: cloud.containerRegistry.registry.StatusEnum;
                updatedAt: string;
                url: string;
                version: string;
            }
            /**
             * Status of the registry
             * type fullname: cloud.containerRegistry.registry.StatusEnum
             */
            export type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING"
        }
        export namespace user {
            /**
             * Docker registry user
             * interface fullName: cloud.containerRegistry.user.User.User
             */
            export interface User {
                email: string;
                id: string;
                password?: string;
                user: string;
            }
        }
    }
    export namespace flavor {
        /**
         * Flavor capability
         * interface fullName: cloud.flavor.Capability.Capability
         */
        export interface Capability {
            enabled: boolean;
            name: cloud.flavor.CapabilityNameEnum;
        }
        /**
         * Enum values for flavor capabilities names
         * type fullname: cloud.flavor.CapabilityNameEnum
         */
        export type CapabilityNameEnum = "resize" | "snapshot" | "volume" | "failoverip"
        /**
         * Flavor
         * interface fullName: cloud.flavor.Flavor.Flavor
         */
        export interface Flavor {
            available: boolean;
            capabilities: cloud.flavor.Capability[];
            disk: number;
            id: string;
            inboundBandwidth?: number;
            name: string;
            osType: string;
            outboundBandwidth?: number;
            planCodes: cloud.flavor.FlavorPlanCodes;
            ram: number;
            region: string;
            type: string;
            vcpus: number;
        }
        /**
         * FlavorPlanCodes
         * interface fullName: cloud.flavor.FlavorPlanCodes.FlavorPlanCodes
         */
        export interface FlavorPlanCodes {
            hourly?: string;
            monthly?: string;
        }
    }
    export namespace forecast {
        /**
         * ProjectForecast
         * interface fullName: cloud.forecast.ProjectForecast.ProjectForecast
         */
        export interface ProjectForecast {
            lastMetric: string;
            projectForecast: orderPrice;
        }
    }
    export namespace image {
        /**
         * Image
         * interface fullName: cloud.image.Image.Image
         */
        export interface Image {
            creationDate: string;
            flavorType?: string;
            id: string;
            minDisk: number;
            minRam: number;
            name: string;
            planCode?: string;
            region: string;
            size: number;
            status: string;
            tags?: string[];
            type: string;
            user: string;
            visibility: string;
        }
        /**
         * OSTypeEnum
         * type fullname: cloud.image.OSTypeEnum
         */
        export type OSTypeEnum = "linux" | "bsd" | "windows"
    }
    export namespace instance {
        /**
         * Access
         * interface fullName: cloud.instance.Access.Access
         */
        export interface Access {
            login: string;
            password: string;
            type: string;
            url: string;
        }
        /**
         * ApplicationAccess
         * interface fullName: cloud.instance.ApplicationAccess.ApplicationAccess
         */
        export interface ApplicationAccess {
            accesses: cloud.instance.Access[];
            status: cloud.instance.ApplicationAccessStateEnum;
        }
        /**
         * ApplicationAccessStateEnum
         * type fullname: cloud.instance.ApplicationAccessStateEnum
         */
        export type ApplicationAccessStateEnum = "installing" | "ok"
        /**
         * Autobackup params at instance creation
         * interface fullName: cloud.instance.AutoBackup.AutoBackup
         */
        export interface AutoBackup {
            cron: string;
            rotation: number;
        }
        /**
         * Instance
         * interface fullName: cloud.instance.Instance.Instance
         */
        export interface Instance {
            created: string;
            flavorId: string;
            id: string;
            imageId: string;
            ipAddresses: cloud.instance.IpAddress[];
            monthlyBilling?: cloud.instance.MonthlyBilling;
            name: string;
            operationIds: string[];
            planCode?: string;
            region: string;
            sshKeyId?: string;
            status: cloud.instance.InstanceStatusEnum;
        }
        /**
         * InstanceDetail
         * interface fullName: cloud.instance.InstanceDetail.InstanceDetail
         */
        export interface InstanceDetail {
            created: string;
            flavor: cloud.flavor.Flavor;
            id: string;
            image: cloud.image.Image;
            ipAddresses: cloud.instance.IpAddress[];
            monthlyBilling?: cloud.instance.MonthlyBilling;
            name: string;
            operationIds: string[];
            planCode?: string;
            region: string;
            sshKey?: cloud.sshkey.SshKeyDetail;
            status: cloud.instance.InstanceStatusEnum;
        }
        /**
         * InstanceMetrics
         * interface fullName: cloud.instance.InstanceMetrics.InstanceMetrics
         */
        export interface InstanceMetrics {
            unit: string;
            values: cloud.instance.InstanceMetricsValue[];
        }
        /**
         * InstanceMetricsValue
         * interface fullName: cloud.instance.InstanceMetricsValue.InstanceMetricsValue
         */
        export interface InstanceMetricsValue {
            timestamp: number;
            value: number;
        }
        /**
         * InstanceStatusEnum
         * type fullname: cloud.instance.InstanceStatusEnum
         */
        export type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "DELETING" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING"
        /**
         * InstanceVnc
         * interface fullName: cloud.instance.InstanceVnc.InstanceVnc
         */
        export interface InstanceVnc {
            type: string;
            url: string;
        }
        /**
         * IpAddress
         * interface fullName: cloud.instance.IpAddress.IpAddress
         */
        export interface IpAddress {
            gatewayIp?: string;
            ip: string;
            networkId: string;
            type: string;
            version: number;
        }
        /**
         * MetricsPeriod
         * type fullname: cloud.instance.MetricsPeriod
         */
        export type MetricsPeriod = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        /**
         * MetricsPeriod
         * type fullname: cloud.instance.MetricsPeriodEnum
         */
        export type MetricsPeriodEnum = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        /**
         * MetricsType
         * type fullname: cloud.instance.MetricsType
         */
        export type MetricsType = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
        /**
         * MetricsType
         * type fullname: cloud.instance.MetricsTypeEnum
         */
        export type MetricsTypeEnum = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
        /**
         * MonthlyBilling
         * interface fullName: cloud.instance.MonthlyBilling.MonthlyBilling
         */
        export interface MonthlyBilling {
            since: string;
            status: cloud.instance.MonthlyBillingStatusEnum;
        }
        /**
         * MonthlyBillingStatusEnum
         * type fullname: cloud.instance.MonthlyBillingStatusEnum
         */
        export type MonthlyBillingStatusEnum = "activationPending" | "ok"
        /**
         * Instance with region to set as monthly billing
         * interface fullName: cloud.instance.MonthlyInstanceBulkParams.MonthlyInstanceBulkParams
         */
        export interface MonthlyInstanceBulkParams {
            instanceId: string;
            region: string;
        }
        /**
         * NetworkBulkParams
         * interface fullName: cloud.instance.NetworkBulkParams.NetworkBulkParams
         */
        export interface NetworkBulkParams {
            networkId: string;
        }
        /**
         * NetworkParams
         * interface fullName: cloud.instance.NetworkParams.NetworkParams
         */
        export interface NetworkParams {
            ip?: string;
            networkId: string;
        }
        /**
         * RebootTypeEnum
         * type fullname: cloud.instance.RebootTypeEnum
         */
        export type RebootTypeEnum = "soft" | "hard"
        /**
         * RescueAdminPassword
         * interface fullName: cloud.instance.RescueAdminPassword.RescueAdminPassword
         */
        export interface RescueAdminPassword {
            adminPassword?: string;
        }
    }
    export namespace instanceInterface {
        /**
         * FixedIp
         * interface fullName: cloud.instanceInterface.FixedIp.FixedIp
         */
        export interface FixedIp {
            ip: string;
            subnetId: string;
        }
        /**
         * Interface
         * interface fullName: cloud.instanceInterface.Interface.Interface
         */
        export interface Interface {
            fixedIps: cloud.instanceInterface.FixedIp[];
            id: string;
            macAddress: string;
            networkId: string;
            state: string;
            type: string;
        }
    }
    export namespace instancegroup {
        /**
         * InstanceGroup
         * interface fullName: cloud.instancegroup.InstanceGroup.InstanceGroup
         */
        export interface InstanceGroup {
            id: string;
            instance_ids: string[];
            name: string;
            region: string;
            type: cloud.instancegroup.InstanceGroupTypeEnum;
        }
        /**
         * InstanceGroupTypeEnum
         * type fullname: cloud.instancegroup.InstanceGroupTypeEnum
         */
        export type InstanceGroupTypeEnum = "affinity" | "anti-affinity"
    }
    export namespace ip {
        /**
         * CloudIp
         * interface fullName: cloud.ip.CloudIp.CloudIp
         */
        export interface CloudIp {
            id: string;
            ip?: string;
            status: cloud.ip.IpStatusEnum;
            type: string;
        }
        /**
         * FailoverIp
         * interface fullName: cloud.ip.FailoverIp.FailoverIp
         */
        export interface FailoverIp {
            block?: string;
            continentCode?: string;
            geoloc?: string;
            id: string;
            ip?: string;
            progress: number;
            routedTo: string;
            status: cloud.ip.IpStatusEnum;
            subType: cloud.ip.IpSubTypeEnum;
        }
        /**
         * IpStatusEnum
         * type fullname: cloud.ip.IpStatusEnum
         */
        export type IpStatusEnum = "ok" | "operationPending"
        /**
         * IpSubTypeEnum
         * type fullname: cloud.ip.IpSubTypeEnum
         */
        export type IpSubTypeEnum = "cloud" | "ovh"
    }
    export namespace kube {
        /**
         * Managed Kubernetes cluster description
         * interface fullName: cloud.kube.Cluster.Cluster
         */
        export interface Cluster {
            controlPlaneIsUpToDate: boolean;
            createdAt: string;
            id: string;
            isUpToDate: boolean;
            name: string;
            nextUpgradeVersions?: cloud.kube.UpgradeVersionEnum[];
            nodesUrl: string;
            region: cloud.kube.RegionEnum;
            status: cloud.kube.ClusterStatusEnum;
            updatePolicy: string;
            updatedAt: string;
            url: string;
            version: string;
        }
        /**
         * Enum values for Status
         * type fullname: cloud.kube.ClusterStatus
         */
        export type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
        /**
         * Enum values for Status
         * type fullname: cloud.kube.ClusterStatusEnum
         */
        export type ClusterStatusEnum = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
        /**
         * a flavor kind
         * interface fullName: cloud.kube.Flavor.Flavor
         */
        export interface Flavor {
            category: cloud.kube.FlavorCategoryEnum;
            name: string;
            state: cloud.kube.FlavorStateEnum;
        }
        /**
         * Enum values for category
         * type fullname: cloud.kube.FlavorCategory
         */
        export type FlavorCategory = "c" | "g" | "t" | "b" | "r"
        /**
         * Enum values for category
         * type fullname: cloud.kube.FlavorCategoryEnum
         */
        export type FlavorCategoryEnum = "c" | "g" | "t" | "b" | "r" | "i"
        /**
         * Enum values for State
         * type fullname: cloud.kube.FlavorState
         */
        export type FlavorState = "available" | "unavailable"
        /**
         * Enum values for State
         * type fullname: cloud.kube.FlavorStateEnum
         */
        export type FlavorStateEnum = "available" | "unavailable"
        /**
         * Kubeconfig description
         * interface fullName: cloud.kube.Kubeconfig.Kubeconfig
         */
        export interface Kubeconfig {
            content: string;
        }
        /**
         * Node installed on your cluster
         * interface fullName: cloud.kube.Node.Node
         */
        export interface Node {
            createdAt: string;
            deployedAt?: string;
            flavor: string;
            id: string;
            instanceId?: string;
            isUpToDate: boolean;
            name?: string;
            nodePoolId: string;
            projectId: string;
            status: cloud.kube.NodeStatusEnum;
            updatedAt: string;
            version: string;
        }
        /**
         * NodePool created on your cluster to manage your nodes
         * interface fullName: cloud.kube.NodePool.NodePool
         */
        export interface NodePool {
            availableNodes: number;
            createdAt: string;
            currentNodes: number;
            desiredNodes: number;
            flavor: string;
            id: string;
            maxNodes: number;
            minNodes: number;
            name: string;
            projectId: string;
            sizeStatus: cloud.kube.NodePoolSizeStatusEnum;
            status: cloud.kube.NodePoolStatusEnum;
            upToDateNodes: number;
            updatedAt: string;
        }
        /**
         * Enum values for NodePool size Status
         * type fullname: cloud.kube.NodePoolSizeStatusEnum
         */
        export type NodePoolSizeStatusEnum = "UNDER_CAPACITY" | "CAPACITY_OK" | "OVER_CAPACITY"
        /**
         * Enum values for NodePool Status
         * type fullname: cloud.kube.NodePoolStatusEnum
         */
        export type NodePoolStatusEnum = "INSTALLING" | "UPDATING" | "REDEPLOYING" | "RESIZING" | "RESETTING" | "DELETING" | "ERROR" | "READY"
        /**
         * Enum values for Status
         * type fullname: cloud.kube.NodeStatus
         */
        export type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
        /**
         * Enum values for Status
         * type fullname: cloud.kube.NodeStatusEnum
         */
        export type NodeStatusEnum = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
        /**
         * Enum values for available regions
         * type fullname: cloud.kube.Region
         */
        export type Region = "GRA5" | "GRA7" | "BHS5"
        /**
         * Enum values for available regions
         * type fullname: cloud.kube.RegionEnum
         */
        export type RegionEnum = "GRA5" | "GRA7" | "BHS5"
        /**
         * Enum values for worker nodes reset policy
         * type fullname: cloud.kube.ResetWorkerNodesPolicy
         */
        export type ResetWorkerNodesPolicy = "reinstall" | "delete"
        /**
         * Enum values for worker nodes reset policy
         * type fullname: cloud.kube.ResetWorkerNodesPolicyEnum
         */
        export type ResetWorkerNodesPolicyEnum = "reinstall" | "delete"
        /**
         * Enum values for UpdatePolicy
         * type fullname: cloud.kube.UpdatePolicy
         */
        export type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
        /**
         * Enum values for UpdatePolicy
         * type fullname: cloud.kube.UpdatePolicyEnum
         */
        export type UpdatePolicyEnum = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
        /**
         * Enum values for UpdateStrategy
         * type fullname: cloud.kube.UpdateStrategy
         */
        export type UpdateStrategy = "LATEST_PATCH" | "NEXT_MINOR"
        /**
         * Enum values for UpdateStrategy
         * type fullname: cloud.kube.UpdateStrategyEnum
         */
        export type UpdateStrategyEnum = "LATEST_PATCH" | "NEXT_MINOR"
        /**
         * List of available versions for upgrade
         * type fullname: cloud.kube.UpgradeVersion
         */
        export type UpgradeVersion = "1.12" | "1.13" | "1.14" | "1.15" | "1.16"
        /**
         * List of available versions for upgrade
         * type fullname: cloud.kube.UpgradeVersionEnum
         */
        export type UpgradeVersionEnum = "1.12" | "1.13" | "1.14" | "1.15" | "1.16" | "1.17"
        /**
         * List of available versions for installation
         * type fullname: cloud.kube.Version
         */
        export type Version = "1.13" | "1.14" | "1.15"
        /**
         * List of available versions for installation
         * type fullname: cloud.kube.VersionEnum
         */
        export type VersionEnum = "1.14" | "1.15" | "1.16" | "1.17"
    }
    export namespace migration {
        /**
         * Migration
         * interface fullName: cloud.migration.Migration.Migration
         */
        export interface Migration {
            date: string;
            migrationId: string;
            resourceId: string;
            resourceType: cloud.migration.ResourceTypeEnum;
        }
        /**
         * ResourceTypeEnum
         * type fullname: cloud.migration.ResourceTypeEnum
         */
        export type ResourceTypeEnum = "instance"
    }
    export namespace network {
        /**
         * IPPool
         * interface fullName: cloud.network.IPPool.IPPool
         */
        export interface IPPool {
            dhcp: boolean;
            end: string;
            network: string;
            region: string;
            start: string;
        }
        /**
         * Network
         * interface fullName: cloud.network.Network.Network
         */
        export interface Network {
            id: string;
            name: string;
            regions: cloud.network.NetworkRegion[];
            status: cloud.network.NetworkStatusEnum;
            type?: cloud.network.NetworkTypeEnum;
            vlanId: number;
        }
        /**
         * NetworkRegion
         * interface fullName: cloud.network.NetworkRegion.NetworkRegion
         */
        export interface NetworkRegion {
            region: string;
            status: cloud.network.NetworkRegionStatusEnum;
        }
        /**
         * NetworkRegionStatusEnum
         * type fullname: cloud.network.NetworkRegionStatusEnum
         */
        export type NetworkRegionStatusEnum = "ACTIVE" | "BUILDING"
        /**
         * NetworkStatusEnum
         * type fullname: cloud.network.NetworkStatusEnum
         */
        export type NetworkStatusEnum = "BUILDING" | "ACTIVE" | "DELETING"
        /**
         * NetworkTypeEnum
         * type fullname: cloud.network.NetworkTypeEnum
         */
        export type NetworkTypeEnum = "public" | "private"
        /**
         * Subnet
         * interface fullName: cloud.network.Subnet.Subnet
         */
        export interface Subnet {
            cidr: string;
            gatewayIp?: string;
            id: string;
            ipPools: cloud.network.IPPool[];
        }
    }
    export namespace openstackClient {
        /**
         * Profile
         * interface fullName: cloud.openstackClient.Profile.Profile
         */
        export interface Profile {
            name: string;
        }
        /**
         * Session
         * interface fullName: cloud.openstackClient.Session.Session
         */
        export interface Session {
            expires: string;
            id: string;
            profile: cloud.openstackClient.Profile;
            websocket: string;
        }
    }
    export namespace order {
        /**
         * Order
         * interface fullName: cloud.order.Order.Order
         */
        export interface Order {
            date: string;
            orderId: number;
            planCode: string;
            serviceName?: string;
            status: cloud.order.StatusEnum;
        }
        /**
         * StatusEnum
         * type fullname: cloud.order.StatusEnum
         */
        export type StatusEnum = "unpaid" | "delivering" | "delivered" | "unknown"
    }
    export namespace pca {
        /**
         * Task type available for cloud archives
         * type fullname: cloud.pca.BillingRefEnum
         */
        export type BillingRefEnum = "backup" | "delete" | "restore"
        /**
         * Openstack swift credentials for your PCA offer
         * interface fullName: cloud.pca.DownloadCredentials.DownloadCredentials
         */
        export interface DownloadCredentials {
            authEndpoint: string;
            container: string;
            login: string;
            password: string;
            region: string;
            storageEndpoint: string;
            tenantId: string;
            tenantName: string;
        }
        /**
         * Task types for cloud archives
         * type fullname: cloud.pca.FunctionTypeEnum
         */
        export type FunctionTypeEnum = "createUser" | "delete" | "restore" | "setPassword" | "setSessionName" | "setSshKey"
        /**
         * Session state available for cloud archives
         * type fullname: cloud.pca.SessionStateEnum
         */
        export type SessionStateEnum = "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore"
        /**
         * Task status for cloud archives
         * type fullname: cloud.pca.TaskStateEnum
         */
        export type TaskStateEnum = "cancelled" | "deleted" | "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore" | "todo"
        /**
         * Task type available for cloud archives
         * type fullname: cloud.pca.TaskTypeEnum
         */
        export type TaskTypeEnum = "delete" | "restore"
        /**
         * State of the request to transfer a PCA offer to Object Storage
         * interface fullName: cloud.pca.TransferState.TransferState
         */
        export interface TransferState {
            agreements?: number[];
            projectId: string;
            state: cloud.pca.TransferStateEnum;
            transferDate?: string;
        }
        /**
         * Transfer states
         * type fullname: cloud.pca.TransferStateEnum
         */
        export type TransferStateEnum = "deleted" | "transferred" | "untransferred" | "waitingAgreementsValidation"
    }
    export namespace project {
        /**
         * Usage information for current month on your project
         * interface fullName: cloud.project.BandwidthStorageUsage.BandwidthStorageUsage
         */
        export interface BandwidthStorageUsage {
            downloadedBytes: number;
            region: string;
            total: orderPrice;
        }
        /**
         * Project bill
         * interface fullName: cloud.project.Bill.Bill
         */
        export interface Bill {
            billId: string;
            type: cloud.project.BillTypeEnum;
        }
        /**
         * Possible values for bill type
         * type fullname: cloud.project.BillTypeEnum
         */
        export type BillTypeEnum = "creditPurchased" | "monthlyConsumption" | "monthlyInstanceActivation"
        /**
         * Usage information for current month on your project
         * interface fullName: cloud.project.CurrentUsage.CurrentUsage
         */
        export interface CurrentUsage {
            instances: cloud.project.InstancesUsage;
            snapshots: cloud.project.SnapshotsUsage;
            storage: cloud.project.StorageUsage;
            total: orderPrice;
            volumeSnapshots: cloud.project.SnapshotsUsage;
            volumes: cloud.project.VolumesUsage;
        }
        /**
         * Possible eligibility actions
         * type fullname: cloud.project.EligibilityAction
         */
        export type EligibilityAction = "addPaymentMethod" | "askIncreaseProjectsQuota" | "challengePaymentMethod" | "verifyPaypal"
        /**
         * Eligibility information
         * interface fullName: cloud.project.EligibilityInfo.EligibilityInfo
         */
        export interface EligibilityInfo {
            actionsRequired?: cloud.project.EligibilityAction[];
            minimumCredit?: orderPrice;
            paymentMethodsAuthorized?: cloud.project.PaymentMethodAuthorized[];
            voucher?: cloud.project.NewProjectInfoVoucher;
        }
        /**
         * Instance monthly billing details
         * interface fullName: cloud.project.InstanceMonthlyBilling.InstanceMonthlyBilling
         */
        export interface InstanceMonthlyBilling {
            activatedOn: string;
            cost: orderPrice;
        }
        /**
         * Instance usage
         * interface fullName: cloud.project.InstanceUsageDetail.InstanceUsageDetail
         */
        export interface InstanceUsageDetail {
            hourly?: orderPrice;
            instanceId: string;
            monthly?: cloud.project.InstanceMonthlyBilling;
            monthlyBilling: boolean;
            reference: string;
        }
        /**
         * Instances usage for current month
         * interface fullName: cloud.project.InstancesUsage.InstancesUsage
         */
        export interface InstancesUsage {
            detail: cloud.project.InstanceUsageDetail[];
            total: orderPrice;
        }
        /**
         * A load balancer to handle workload
         * interface fullName: cloud.project.LoadBalancer.LoadBalancer
         */
        export interface LoadBalancer {
            address: cloud.project.loadbalancer.Address;
            configuration: cloud.project.loadbalancer.ConfigurationVersion;
            description?: string;
            id: string;
            name?: string;
            region: string;
            status: cloud.project.loadbalancer.StatusEnum;
        }
        /**
         * A load balancer to handle workload
         * interface fullName: cloud.project.LoadBalancerCreation.LoadBalancerCreation
         */
        export interface LoadBalancerCreation {
            description?: string;
            id: string;
            name?: string;
            region: string;
        }
        /**
         * New cloud project
         * interface fullName: cloud.project.NewProject.NewProject
         */
        export interface NewProject {
            agreements?: number[];
            credit?: cloud.project.NewProjectCredit;
            description?: string;
            orderId?: number;
            project?: string;
            status: cloud.project.NewProjectStatusEnum;
        }
        /**
         * Credit details
         * interface fullName: cloud.project.NewProjectCredit.NewProjectCredit
         */
        export interface NewProjectCredit {
            description?: string;
            id: number;
            products?: string[];
            total_credit: orderPrice;
            validity?: cloud.common.VoucherValidity;
        }
        /**
         * New cloud project informations
         * interface fullName: cloud.project.NewProjectInfo.NewProjectInfo
         */
        export interface NewProjectInfo {
            agreements?: number[];
            error?: cloud.project.NewProjectInfoError;
            order?: orderPrice;
            voucher?: cloud.project.NewProjectInfoVoucher;
        }
        /**
         * Error that can occur when creating a Public Cloud project
         * interface fullName: cloud.project.NewProjectInfoError.NewProjectInfoError
         */
        export interface NewProjectInfoError {
            code: cloud.project.NewProjectInfoErrorCodeEnum;
            message: string;
        }
        /**
         * Possible values for error code on project creation
         * type fullname: cloud.project.NewProjectInfoErrorCodeEnum
         */
        export type NewProjectInfoErrorCodeEnum = "accountNotEligible" | "challengePaymentMethodRequested" | "invalidPaymentMean" | "maxProjectsLimitReached" | "paypalAccountNotVerified" | "unpaidDebts"
        /**
         * Information about voucher
         * interface fullName: cloud.project.NewProjectInfoVoucher.NewProjectInfoVoucher
         */
        export interface NewProjectInfoVoucher {
            credit: orderPrice;
            paymentMethodRequired: boolean;
        }
        /**
         * Possible values for new project status
         * type fullname: cloud.project.NewProjectStatusEnum
         */
        export type NewProjectStatusEnum = "creating" | "ok" | "validationPending" | "waitingAgreementsValidation"
        /**
         * List of accepted payment methods
         * type fullname: cloud.project.PaymentMethodAuthorized
         */
        export type PaymentMethodAuthorized = "bankAccount" | "credit" | "creditCard" | "paypal"
        /**
         * Product agreements
         * interface fullName: cloud.project.ProductAgreements.ProductAgreements
         */
        export interface ProductAgreements {
            agreementsToValidate?: number[];
            agreementsValidated?: number[];
        }
        /**
         * Possible values for cloud project product name
         * type fullname: cloud.project.ProductNameEnum
         */
        export type ProductNameEnum = "registry"
        /**
         * Possible values for project status
         * type fullname: cloud.project.ProjectStatus
         */
        export type ProjectStatus = "creating" | "deleted" | "deleting" | "ok" | "suspended"
        /**
         * Possible values for project status
         * type fullname: cloud.project.ProjectStatusEnum
         */
        export type ProjectStatusEnum = "creating" | "deleted" | "deleting" | "ok" | "suspended"
        /**
         * Usage information on your project
         * interface fullName: cloud.project.ProjectUsage.ProjectUsage
         */
        export interface ProjectUsage {
            current: cloud.project.CurrentUsage;
        }
        /**
         * Snapshot usage
         * interface fullName: cloud.project.SnapshotUsageDetail.SnapshotUsageDetail
         */
        export interface SnapshotUsageDetail {
            price: orderPrice;
            region: string;
            storedSize: complexType.UnitAndValue<number>;
        }
        /**
         * Snapshots usage for current month
         * interface fullName: cloud.project.SnapshotsUsage.SnapshotsUsage
         */
        export interface SnapshotsUsage {
            detail: cloud.project.SnapshotUsageDetail[];
            total: orderPrice;
        }
        /**
         * Usage information for current month on your project
         * interface fullName: cloud.project.StorageUsage.StorageUsage
         */
        export interface StorageUsage {
            bandwidth: cloud.project.BandwidthStorageUsage[];
            total: orderPrice;
            volume: cloud.project.StorageVolumeUsage[];
        }
        /**
         * Storage volume used on your project
         * interface fullName: cloud.project.StorageVolumeUsage.StorageVolumeUsage
         */
        export interface StorageVolumeUsage {
            region: string;
            storedBytes: number;
            total: orderPrice;
        }
        /**
         * Possible values for volume type
         * type fullname: cloud.project.VolumeType
         */
        export type VolumeType = "classic" | "high-speed"
        /**
         * Volume usage
         * interface fullName: cloud.project.VolumeUsageDetail.VolumeUsageDetail
         */
        export interface VolumeUsageDetail {
            price: orderPrice;
            volumeCapacity: complexType.UnitAndValue<number>;
            volumeId: string;
            volumeType: cloud.project.VolumeType;
        }
        /**
         * Volumes usage for current month
         * interface fullName: cloud.project.VolumesUsage.VolumesUsage
         */
        export interface VolumesUsage {
            detail: cloud.project.VolumeUsageDetail[];
            total: orderPrice;
        }
        export namespace ai {
            export namespace serving {
                /**
                 * Status of API
                 * type fullname: cloud.project.ai.serving.APIStatusEnum
                 */
                export type APIStatusEnum = "pending" | "starting" | "running" | "scaling" | "waking" | "sleeping"
                /**
                 * Compute Flavor for the Serving Engine
                 * interface fullName: cloud.project.ai.serving.Flavor.Flavor
                 */
                export interface Flavor {
                    description: string;
                    id: string;
                }
                /**
                 * A deployed machine learning model
                 * interface fullName: cloud.project.ai.serving.Model.Model
                 */
                export interface Model {
                    apiStatus: cloud.project.ai.serving.APIStatusEnum;
                    createdAt: string;
                    id: string;
                    replicas?: number;
                    url?: string;
                    version?: number;
                    versionStatus: cloud.project.ai.serving.VersionStatusEnum;
                    workflowTemplate?: cloud.project.ai.serving.WorkflowTemplateEnum;
                    workflowTemplateParameters: cloud.project.ai.serving.ModelWorkflowTemplateParameter;
                }
                /**
                 * Missing description
                 * interface fullName: cloud.project.ai.serving.ModelDefinition.ModelDefinition
                 */
                export interface ModelDefinition {
                    flavor: string;
                    id: string;
                    imageId?: string;
                    storagePath?: string;
                    workflowTemplate?: cloud.project.ai.serving.WorkflowTemplateEnum;
                }
                /**
                 * Parameters of the Workflow that build
                 * interface fullName: cloud.project.ai.serving.ModelWorkflowTemplateParameter.ModelWorkflowTemplateParameter
                 */
                export interface ModelWorkflowTemplateParameter {
                    imageId?: string;
                    storagePath?: string;
                }
                /**
                 * A serving engine namespace
                 * interface fullName: cloud.project.ai.serving.Namespace.Namespace
                 */
                export interface Namespace {
                    clusterId: string;
                    container: string;
                    containerId: string;
                    createdAt: string;
                    description: string;
                    hubUrl: string;
                    id: string;
                    region: string;
                    url: string;
                }
                /**
                 * Missing description
                 * interface fullName: cloud.project.ai.serving.NamespaceCreation.NamespaceCreation
                 */
                export interface NamespaceCreation {
                    container: string;
                    description: string;
                    region: string;
                }
                /**
                 * A Image of a built serving model
                 * interface fullName: cloud.project.ai.serving.PresetImage.PresetImage
                 */
                export interface PresetImage {
                    description: string;
                    id: string;
                    link?: string;
                    name: string;
                }
                /**
                 * Representation of a registry
                 * interface fullName: cloud.project.ai.serving.Registry.Registry
                 */
                export interface Registry {
                    custom: boolean;
                    password: string;
                    url: string;
                    username: string;
                }
                /**
                 * Missing description
                 * interface fullName: cloud.project.ai.serving.RegistryResponse.RegistryResponse
                 */
                export interface RegistryResponse {
                    message: string;
                }
                /**
                 * A token to access / manage a machine learning Model
                 * interface fullName: cloud.project.ai.serving.Token.Token
                 */
                export interface Token {
                    createdAt: string;
                    groups: cloud.project.ai.serving.TokenGroupEnum[];
                    id: string;
                    resource: string;
                    token?: string;
                }
                /**
                 * A serving engine access group
                 * type fullname: cloud.project.ai.serving.TokenGroupEnum
                 */
                export type TokenGroupEnum = "model-management" | "model-evaluation"
                /**
                 * Status of current version
                 * type fullname: cloud.project.ai.serving.VersionStatusEnum
                 */
                export type VersionStatusEnum = "pending" | "building" | "built" | "build-error" | "deploying" | "deployed" | "rollback" | "failed"
                /**
                 * The workflow Template to use
                 * type fullname: cloud.project.ai.serving.WorkflowTemplateEnum
                 */
                export type WorkflowTemplateEnum = "build-image" | "preset-image"
            }
        }
        export namespace dataProcessing {
            /**
             * Engine parameters
             * interface fullName: cloud.project.dataProcessing.CapabilitiesEngineParameter.CapabilitiesEngineParameter
             */
            export interface CapabilitiesEngineParameter {
                default?: string;
                description: string;
                mandatory: boolean;
                name: string;
                type: string;
            }
            /**
             * Capabilities of data processing service
             * interface fullName: cloud.project.dataProcessing.Capability.Capability
             */
            export interface Capability {
                availableVersions: cloud.project.dataProcessing.EngineVersion[];
                name: string;
                parameters: cloud.project.dataProcessing.CapabilitiesEngineParameter[];
            }
            /**
             * Parameters of the engine
             * interface fullName: cloud.project.dataProcessing.EngineParameter.EngineParameter
             */
            export interface EngineParameter {
                name: string;
                value: string;
            }
            /**
             * Engine version
             * interface fullName: cloud.project.dataProcessing.EngineVersion.EngineVersion
             */
            export interface EngineVersion {
                availableRegions: string[];
                description: string;
                name: string;
            }
            /**
             * Job information
             * interface fullName: cloud.project.dataProcessing.Job.Job
             */
            export interface Job {
                containerName: string;
                creationDate?: string;
                endDate?: string;
                engine: string;
                engineParameters: cloud.project.dataProcessing.EngineParameter[];
                engineVersion: string;
                id: string;
                name: string;
                region: string;
                startDate?: string;
                status: cloud.project.dataProcessing.StatusEnum;
            }
            /**
             * Job Logs
             * interface fullName: cloud.project.dataProcessing.JobLogs.JobLogs
             */
            export interface JobLogs {
                logs: cloud.project.dataProcessing.LogLine[];
                logsAddress?: string;
                startDate: string;
            }
            /**
             * Log line
             * interface fullName: cloud.project.dataProcessing.LogLine.LogLine
             */
            export interface LogLine {
                content: string;
                id: number;
                timestamp: string;
            }
            /**
             * Metrics information
             * interface fullName: cloud.project.dataProcessing.Metrics.Metrics
             */
            export interface Metrics {
                endpoints: cloud.project.dataProcessing.MetricsEndpoint[];
                token: string;
            }
            /**
             * Job Logs
             * interface fullName: cloud.project.dataProcessing.MetricsEndpoint.MetricsEndpoint
             */
            export interface MetricsEndpoint {
                name: string;
                url: string;
            }
            /**
             * Possible state of the job
             * type fullname: cloud.project.dataProcessing.StatusEnum
             */
            export type StatusEnum = "UNKNOWN" | "PENDING" | "SUBMITTED" | "RUNNING" | "CANCELLING" | "FAILED" | "TERMINATED" | "COMPLETED"
        }
        export namespace io {
            /**
             * A stream to send data
             * interface fullName: cloud.project.io.Stream.Stream
             */
            export interface Stream {
                backlog: string;
                description?: string;
                id: string;
                kind: cloud.project.io.StreamKindEnum;
                name: string;
                regions: string[];
                retention: string;
                status: cloud.project.io.StreamStatusEnum;
                throttling: number;
            }
            /**
             * Create a stream of data
             * interface fullName: cloud.project.io.StreamCreation.StreamCreation
             */
            export interface StreamCreation {
                description: string;
                kind: cloud.project.io.StreamKindEnum;
                name: string;
                region: string;
            }
            /**
             * Kind of persistence for the stream
             * type fullname: cloud.project.io.StreamKindEnum
             */
            export type StreamKindEnum = "NON_PERSISTENT" | "PERSISTENT"
            /**
             * Get statistics of a stream
             * interface fullName: cloud.project.io.StreamStats.StreamStats
             */
            export interface StreamStats {
                usage: number;
            }
            /**
             * Status of the stream
             * type fullname: cloud.project.io.StreamStatusEnum
             */
            export type StreamStatusEnum = "INSTALLING" | "RUNNING" | "ERROR"
            export namespace stream {
                /**
                 * Region information
                 * interface fullName: cloud.project.io.stream.Region.Region
                 */
                export interface Region {
                    endpoint: cloud.project.io.stream.RegionEndpoint;
                    region: string;
                }
                /**
                 * Region information
                 * interface fullName: cloud.project.io.stream.RegionEndpoint.RegionEndpoint
                 */
                export interface RegionEndpoint {
                    pulsar: string;
                }
                /**
                 * Create a consumer on a stream
                 * interface fullName: cloud.project.io.stream.Subscription.Subscription
                 */
                export interface Subscription {
                    id: string;
                    kind: cloud.project.io.stream.SubscriptionKindEnum;
                    name: string;
                }
                /**
                 * Create a subscription on a stream
                 * interface fullName: cloud.project.io.stream.SubscriptionCreation.SubscriptionCreation
                 */
                export interface SubscriptionCreation {
                    name: string;
                }
                /**
                 * Kind of the subscription
                 * type fullname: cloud.project.io.stream.SubscriptionKindEnum
                 */
                export type SubscriptionKindEnum = "SHARED" | "KEY_SHARED" | "EXCLUSIVE" | "FAILOVER"
                /**
                 * Get statistic of a subscription
                 * interface fullName: cloud.project.io.stream.SubscriptionStats.SubscriptionStats
                 */
                export interface SubscriptionStats {
                    lag: number;
                }
                /**
                 * Token to access a stream
                 * interface fullName: cloud.project.io.stream.Token.Token
                 */
                export interface Token {
                    action: cloud.project.io.stream.TokenActionEnum;
                    id: string;
                    token: string;
                }
                /**
                 * Action of the token
                 * type fullname: cloud.project.io.stream.TokenActionEnum
                 */
                export type TokenActionEnum = "CONSUME" | "PRODUCE" | "BOTH"
                /**
                 * Create a token to access a stream
                 * interface fullName: cloud.project.io.stream.TokenCreation.TokenCreation
                 */
                export interface TokenCreation {
                    action: cloud.project.io.stream.TokenActionEnum;
                }
            }
        }
        export namespace loadbalancer {
            /**
             * Address to reach the load balancer
             * interface fullName: cloud.project.loadbalancer.Address.Address
             */
            export interface Address {
                ipv4: string;
                ipv6?: string;
            }
            /**
             * A load balancer backend
             * interface fullName: cloud.project.loadbalancer.Backend.Backend
             */
            export interface Backend {
                balancer?: cloud.project.loadbalancer.backend.BalancerAlgorithmEnum;
                name: string;
                proxyProtocol?: cloud.project.loadbalancer.backend.ProxyProtocolEnum;
                servers: cloud.project.loadbalancer.Server[];
            }
            /**
             * Select a load balancer backend
             * interface fullName: cloud.project.loadbalancer.BackendSelector.BackendSelector
             */
            export interface BackendSelector {
                name: string;
            }
            /**
             * A load balancer configuration
             * interface fullName: cloud.project.loadbalancer.Configuration.Configuration
             */
            export interface Configuration {
                backends: cloud.project.loadbalancer.Backend[];
                frontends: cloud.project.loadbalancer.Frontend[];
                previousVersion?: number;
                version: number;
            }
            /**
             * Information about version of the configuration
             * interface fullName: cloud.project.loadbalancer.ConfigurationVersion.ConfigurationVersion
             */
            export interface ConfigurationVersion {
                applied: number;
                latest: number;
            }
            /**
             * A load balancer frontend
             * interface fullName: cloud.project.loadbalancer.Frontend.Frontend
             */
            export interface Frontend {
                backends: cloud.project.loadbalancer.BackendSelector[];
                mode?: cloud.project.loadbalancer.frontend.ModeEnum;
                name: string;
                port: number;
                whitelist: string[];
            }
            /**
             * Region information
             * interface fullName: cloud.project.loadbalancer.Region.Region
             */
            export interface Region {
                region: string;
            }
            /**
             * A load balancer backend server
             * interface fullName: cloud.project.loadbalancer.Server.Server
             */
            export interface Server {
                ip: string;
                name: string;
                noCheck?: boolean;
                port: number;
                weight?: number;
            }
            /**
             * Status of a load balancer
             * type fullname: cloud.project.loadbalancer.StatusEnum
             */
            export type StatusEnum = "INSTALLING" | "APPLYING" | "RUNNING" | "DELETING" | "ERROR"
            export namespace backend {
                /**
                 * Available load balancer backend balancer algorithm
                 * type fullname: cloud.project.loadbalancer.backend.BalancerAlgorithmEnum
                 */
                export type BalancerAlgorithmEnum = "roundrobin" | "static-rr" | "leastconn" | "first" | "source"
                /**
                 * Available load balancer backend proxy-protocol
                 * type fullname: cloud.project.loadbalancer.backend.ProxyProtocolEnum
                 */
                export type ProxyProtocolEnum = "v1" | "v2" | "v2-ssl" | "v2-cn"
            }
            export namespace frontend {
                /**
                 * Available load balancer frontend mode
                 * type fullname: cloud.project.loadbalancer.frontend.ModeEnum
                 */
                export type ModeEnum = "TCP"
            }
        }
    }
    export namespace quota {
        /**
         * Quotas
         * interface fullName: cloud.quota.AllowedQuota.AllowedQuota
         */
        export interface AllowedQuota {
            compute: cloud.quota.ComputeQuota;
            name: string;
            network: cloud.quota.NetworkQuota;
            volume: cloud.quota.VolumeQuota;
        }
        /**
         * Quotas for compute
         * interface fullName: cloud.quota.ComputeQuota.ComputeQuota
         */
        export interface ComputeQuota {
            cores: number;
            instances: number;
            ram: number;
        }
        /**
         * Quotas on instances
         * interface fullName: cloud.quota.InstanceUsageQuotas.InstanceUsageQuotas
         */
        export interface InstanceUsageQuotas {
            maxCores: number;
            maxInstances: number;
            maxRam: number;
            usedCores: number;
            usedInstances: number;
            usedRAM: number;
        }
        /**
         * Quotas on keypairs
         * interface fullName: cloud.quota.KeypairQuotas.KeypairQuotas
         */
        export interface KeypairQuotas {
            maxCount: number;
        }
        /**
         * Quotas for network
         * interface fullName: cloud.quota.NetworkQuota.NetworkQuota
         */
        export interface NetworkQuota {
            networks: number;
            ports: number;
            subnets: number;
        }
        /**
         * Quotas
         * interface fullName: cloud.quota.Quotas.Quotas
         */
        export interface Quotas {
            instance?: cloud.quota.InstanceUsageQuotas;
            keypair?: cloud.quota.KeypairQuotas;
            region: string;
            volume?: cloud.quota.VolumeUsageQuotas;
        }
        /**
         * Quotas for volume
         * interface fullName: cloud.quota.VolumeQuota.VolumeQuota
         */
        export interface VolumeQuota {
            gigabytes: number;
            snapshots: number;
            volumes: number;
        }
        /**
         * Quotas on volumes
         * interface fullName: cloud.quota.VolumeUsageQuotas.VolumeUsageQuotas
         */
        export interface VolumeUsageQuotas {
            maxGigabytes: number;
            usedGigabytes: number;
            volumeCount: number;
        }
    }
    export namespace role {
        /**
         * Role permissions
         * interface fullName: cloud.role.Permission.Permission
         */
        export interface Permission {
            label: string;
            roles: string[];
        }
        /**
         * Role
         * interface fullName: cloud.role.Role.Role
         */
        export interface Role {
            description: string;
            id: string;
            name: string;
            permissions: string[];
        }
        /**
         * OpenStack role
         * interface fullName: cloud.role.Roles.Roles
         */
        export interface Roles {
            roles: cloud.role.Role[];
            services: cloud.role.Service[];
        }
        /**
         * OpenStack service
         * interface fullName: cloud.role.Service.Service
         */
        export interface Service {
            name: string;
            permissions: cloud.role.Permission[];
        }
    }
    export namespace sshkey {
        /**
         * SshKey
         * interface fullName: cloud.sshkey.SshKey.SshKey
         */
        export interface SshKey {
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
        /**
         * SshKeyDetail
         * interface fullName: cloud.sshkey.SshKeyDetail.SshKeyDetail
         */
        export interface SshKeyDetail {
            fingerPrint: string;
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
    }
    export namespace stack {
        /**
         * Content
         * interface fullName: cloud.stack.Content.Content
         */
        export interface Content {
            content: string;
            type: string;
        }
        /**
         * InstructionGuide
         * interface fullName: cloud.stack.InstructionGuide.InstructionGuide
         */
        export interface InstructionGuide {
            content: cloud.stack.Content[];
            language: string;
            sections: cloud.stack.Section[];
            title: string;
        }
        /**
         * Section
         * interface fullName: cloud.stack.Section.Section
         */
        export interface Section {
            content: cloud.stack.Content[];
            steps: cloud.stack.Step[];
            title: string;
        }
        /**
         * Stack
         * interface fullName: cloud.stack.Stack.Stack
         */
        export interface Stack {
            commit: string;
            description: string;
            gitRepository: string;
            instructions: cloud.stack.InstructionGuide[];
            name: string;
            release: string;
            uuid: string;
        }
        /**
         * Step
         * interface fullName: cloud.stack.Step.Step
         */
        export interface Step {
            content: cloud.stack.Content[];
            title: string;
        }
    }
    export namespace storage {
        /**
         * Container
         * interface fullName: cloud.storage.Container.Container
         */
        export interface Container {
            id: string;
            name: string;
            region: string;
            storedBytes: number;
            storedObjects: number;
        }
        /**
         * ContainerAccess
         * interface fullName: cloud.storage.ContainerAccess.ContainerAccess
         */
        export interface ContainerAccess {
            endpoints: cloud.storage.Endpoint[];
            token: string;
        }
        /**
         * ContainerDetail
         * interface fullName: cloud.storage.ContainerDetail.ContainerDetail
         */
        export interface ContainerDetail {
            archive: boolean;
            containerType: cloud.storage.TypeEnum;
            cors: string[];
            name: string;
            objects: cloud.storage.ContainerObject[];
            public: boolean;
            region: string;
            staticUrl: string;
            storedBytes: number;
            storedObjects: number;
        }
        /**
         * ContainerObject
         * interface fullName: cloud.storage.ContainerObject.ContainerObject
         */
        export interface ContainerObject {
            contentType: string;
            lastModified: string;
            name: string;
            retrievalDelay: number;
            retrievalState: cloud.storage.RetrievalStateEnum;
            size: number;
        }
        /**
         * ContainerObjectTempURL
         * interface fullName: cloud.storage.ContainerObjectTempURL.ContainerObjectTempURL
         */
        export interface ContainerObjectTempURL {
            expirationDate: string;
            getURL: string;
        }
        /**
         * Endpoint
         * interface fullName: cloud.storage.Endpoint.Endpoint
         */
        export interface Endpoint {
            region: string;
            url: string;
        }
        /**
         * RetrievalStateEnum
         * type fullname: cloud.storage.RetrievalStateEnum
         */
        export type RetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        /**
         * RightEnum
         * type fullname: cloud.storage.RightEnum
         */
        export type RightEnum = "all" | "read" | "write"
        /**
         * TypeEnum
         * type fullname: cloud.storage.TypeEnum
         */
        export type TypeEnum = "static" | "public" | "private"
    }
    export namespace usage {
        /**
         * PaymentTypeEnum
         * type fullname: cloud.usage.PaymentTypeEnum
         */
        export type PaymentTypeEnum = "pre" | "post"
        /**
         * Period
         * interface fullName: cloud.usage.Period.Period
         */
        export interface Period {
            from: string;
            to: string;
        }
        /**
         * UsageBill
         * interface fullName: cloud.usage.UsageBill.UsageBill
         */
        export interface UsageBill {
            bill_id: string;
            credit: number;
            part: number;
            payment_type: cloud.usage.PaymentTypeEnum;
            total: number;
        }
        /**
         * UsageCurrent
         * interface fullName: cloud.usage.UsageCurrent.UsageCurrent
         */
        export interface UsageCurrent {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            resourcesUsage?: cloud.billingView.TypedResources[];
        }
        /**
         * UsageCurrentBills
         * interface fullName: cloud.usage.UsageCurrentBills.UsageCurrentBills
         */
        export interface UsageCurrentBills {
            bills: cloud.usage.UsageBill[];
        }
        /**
         * UsageForecast
         * interface fullName: cloud.usage.UsageForecast.UsageForecast
         */
        export interface UsageForecast {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            resourcesUsage?: cloud.billingView.TypedResources[];
            usableCredits?: cloud.billingView.UsedCredits;
        }
        /**
         * UsageHistory
         * interface fullName: cloud.usage.UsageHistory.UsageHistory
         */
        export interface UsageHistory {
            id: string;
            lastUpdate: string;
            period: cloud.usage.Period;
        }
        /**
         * UsageHistoryDetail
         * interface fullName: cloud.usage.UsageHistoryDetail.UsageHistoryDetail
         */
        export interface UsageHistoryDetail {
            hourlyUsage?: cloud.billingView.HourlyResources;
            id: string;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            resourcesUsage?: cloud.billingView.TypedResources[];
        }
        /**
         * UsageHistoryDetailBills
         * interface fullName: cloud.usage.UsageHistoryDetailBills.UsageHistoryDetailBills
         */
        export interface UsageHistoryDetailBills {
            bills: cloud.usage.UsageBill[];
        }
    }
    export namespace user {
        /**
         * Openrc
         * interface fullName: cloud.user.Openrc.Openrc
         */
        export interface Openrc {
            content: string;
        }
        /**
         * OpenrcVersionEnum
         * type fullname: cloud.user.OpenrcVersionEnum
         */
        export type OpenrcVersionEnum = "v2.0" | "v3"
        /**
         * Rclone
         * interface fullName: cloud.user.Rclone.Rclone
         */
        export interface Rclone {
            content: string;
        }
        /**
         * RoleEnum
         * type fullname: cloud.user.RoleEnum
         */
        export type RoleEnum = "admin" | "authentication" | "administrator" | "compute_operator" | "infrastructure_supervisor" | "network_security_operator" | "network_operator" | "backup_operator" | "image_operator" | "volume_operator" | "objectstore_operator"
        /**
         * User
         * interface fullName: cloud.user.User.User
         */
        export interface User {
            creationDate: string;
            description: string;
            id: number;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        /**
         * UserDetail
         * interface fullName: cloud.user.UserDetail.UserDetail
         */
        export interface UserDetail {
            creationDate: string;
            description: string;
            id: number;
            password: string;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        /**
         * UserStatusEnum
         * type fullname: cloud.user.UserStatusEnum
         */
        export type UserStatusEnum = "creating" | "ok" | "deleting" | "deleted"
    }
    export namespace volume {
        /**
         * Snapshot
         * interface fullName: cloud.volume.Snapshot.Snapshot
         */
        export interface Snapshot {
            creationDate: string;
            description: string;
            id: string;
            name: string;
            planCode?: string;
            region: string;
            size: number;
            status: cloud.volume.SnapshotStatusEnum;
            volumeId: string;
        }
        /**
         * SnapshotStatusEnum
         * type fullname: cloud.volume.SnapshotStatusEnum
         */
        export type SnapshotStatusEnum = "creating" | "available" | "deleting" | "error" | "error_deleting"
        /**
         * Volume
         * interface fullName: cloud.volume.Volume.Volume
         */
        export interface Volume {
            attachedTo: string[];
            bootable: boolean;
            creationDate: string;
            description: string;
            id: string;
            name: string;
            planCode?: string;
            region: string;
            size: number;
            status: string;
            type: cloud.volume.VolumeTypeEnum;
        }
        /**
         * VolumeTypeEnum
         * type fullname: cloud.volume.VolumeTypeEnum
         */
        export type VolumeTypeEnum = "classic" | "high-speed"
    }
}
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
export namespace nichandle {
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
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
export namespace pca {
    /**
     * Cloud Archives Account
     * interface fullName: pca.Account.Account
     */
    export interface Account {
        domain: string;
        host: string;
        login: string;
        password: string;
        sshkey?: string;
    }
    /**
     * cloud archives billing
     * interface fullName: pca.Billing.Billing
     */
    export interface Billing {
        billed: boolean;
        date: string;
        id: number;
        quantity: number;
        reference: cloud.pca.BillingRefEnum;
        total: number;
    }
    /**
     * cloud archives files
     * interface fullName: pca.File.File
     */
    export interface File {
        MD5: string;
        SHA1: string;
        SHA256: string;
        id: string;
        name: string;
        size: number;
        state: string;
        type: string;
    }
    /**
     * cloud archives sessions
     * interface fullName: pca.Session.Session
     */
    export interface Session {
        endDate?: string;
        id: string;
        login: string;
        name: string;
        size: number;
        srcIp?: string;
        startDate: string;
        state: cloud.pca.SessionStateEnum;
    }
    /**
     * cloud archives tasks
     * interface fullName: pca.Task.Task
     */
    export interface Task {
        comment?: string;
        function: cloud.pca.FunctionTypeEnum;
        id: string;
        ipAddress?: string;
        login: string;
        status: cloud.pca.TaskStateEnum;
        todoDate: string;
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

/**
 * END API /cloud Models
 */
export function proxyCloud(ovhEngine: OvhRequestable): Cloud {
    return buildOvhProxy(ovhEngine, '/cloud');
}
export default proxyCloud;
/**
 * Api model for /cloud
 */
export interface Cloud {
    /**
     * List available services
     * GET /cloud
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions): Promise<any>;
    agreements: {
        /**
         * Get agreements related to a product
         * GET /cloud/agreements
         */
        $get(params: { product: cloud.project.ProductNameEnum }): Promise<cloud.project.ProductAgreements>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
    }
    createProject: {
        /**
         * Start a new cloud project
         * POST /cloud/createProject
         */
        $post(params?: { credit?: number, description?: string, voucher?: string }): Promise<cloud.project.NewProject>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
    }
    createProjectInfo: {
        /**
         * Get information about a cloud project creation
         * GET /cloud/createProjectInfo
         */
        $get(params?: { voucher?: string }): Promise<cloud.project.NewProjectInfo>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
    }
    eligibility: {
        /**
         * Check your eligibility to create a Public Cloud order
         * GET /cloud/eligibility
         */
        $get(params?: { voucher?: string }): Promise<cloud.project.EligibilityInfo>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
    }
    order: {
        /**
         * Get all cloud pending orders
         * GET /cloud/order
         */
        $get(params?: { planCode?: string }): Promise<cloud.order.Order[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
    }
    price: {
        /**
         * Get services prices
         * GET /cloud/price
         */
        $get(params?: { flavorId?: string, region?: string }): Promise<cloud.Price>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
    }
    project: {
        /**
         * List available services
         * GET /cloud/project
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /cloud/project/{serviceName}
             */
            $get(): Promise<cloud.Project>;
            /**
             * Alter this object properties
             * PUT /cloud/project/{serviceName}
             */
            $put(params?: { access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: cloud.project.ProjectStatusEnum, unleash?: boolean }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            acl: {
                /**
                 * Get ACL on your cloud project
                 * GET /cloud/project/{serviceName}/acl
                 */
                $get(params?: { type?: cloud.AclTypeEnum }): Promise<string[]>;
                /**
                 * Create new ACL
                 * POST /cloud/project/{serviceName}/acl
                 */
                $post(params: { accountId: string, type: cloud.AclTypeEnum }): Promise<cloud.Acl>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(accountId: string): {
                    /**
                     * Delete ACL
                     * DELETE /cloud/project/{serviceName}/acl/{accountId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /cloud/project/{serviceName}/acl/{accountId}
                     */
                    $get(): Promise<cloud.Acl>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            activateMonthlyBilling: {
                /**
                 * Activate monthly billing on multiple instances
                 * POST /cloud/project/{serviceName}/activateMonthlyBilling
                 */
                $post(params: { instances: cloud.instance.MonthlyInstanceBulkParams[] }): Promise<cloud.instance.InstanceDetail[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            alerting: {
                /**
                 * Manage alerts on your consumption
                 * GET /cloud/project/{serviceName}/alerting
                 */
                $get(): Promise<string[]>;
                /**
                 * Add new alert
                 * POST /cloud/project/{serviceName}/alerting
                 */
                $post(params: { delay: cloud.AlertingDelayEnum, email: string, monthlyThreshold: number }): Promise<cloud.Alerting>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(id: string): {
                    /**
                     * Delete alerting
                     * DELETE /cloud/project/{serviceName}/alerting/{id}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get this object properties
                     * GET /cloud/project/{serviceName}/alerting/{id}
                     */
                    $get(): Promise<cloud.Alerting>;
                    /**
                     * Alter this object properties
                     * PUT /cloud/project/{serviceName}/alerting/{id}
                     */
                    $put(params?: { creationDate?: string, delay?: cloud.AlertingDelayEnum, email?: string, formattedMonthlyThreshold?: orderPrice, id?: string, monthlyThreshold?: number }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    alert: {
                        /**
                         * See alerts
                         * GET /cloud/project/{serviceName}/alerting/{id}/alert
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        $(alertId: number): {
                            /**
                             * Get this object properties
                             * GET /cloud/project/{serviceName}/alerting/{id}/alert/{alertId}
                             */
                            $get(): Promise<cloud.AlertingAlert>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        };
                    }
                };
            }
            bill: {
                /**
                 * Get your project bills
                 * GET /cloud/project/{serviceName}/bill
                 */
                $get(params: { from: string, to: string }): Promise<cloud.project.Bill[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            cancel: {
                /**
                 * Cancel project creation
                 * POST /cloud/project/{serviceName}/cancel
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            capabilities: {
                containerRegistry: {
                    /**
                     * List container registry capabilities per region
                     * GET /cloud/project/{serviceName}/capabilities/containerRegistry
                     */
                    $get(): Promise<cloud.containerRegistry.Capability[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /cloud/project/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /cloud/project/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            consumption: {
                /**
                 * Get your project consumption
                 * GET /cloud/project/{serviceName}/consumption
                 */
                $get(params: { from: string, to: string }): Promise<cloud.project.ProjectUsage>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            containerRegistry: {
                /**
                 * List registries of the project
                 * GET /cloud/project/{serviceName}/containerRegistry
                 */
                $get(): Promise<cloud.containerRegistry.Registry[]>;
                /**
                 * Create a new registry
                 * POST /cloud/project/{serviceName}/containerRegistry
                 */
                $post(params: { name: string, planID?: string, region: string }): Promise<cloud.containerRegistry.Registry>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(registryID: string): {
                    /**
                     * Delete a registry
                     * DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get the registry information
                     * GET /cloud/project/{serviceName}/containerRegistry/{registryID}
                     */
                    $get(): Promise<cloud.containerRegistry.Registry>;
                    /**
                     * Update the registry
                     * PUT /cloud/project/{serviceName}/containerRegistry/{registryID}
                     */
                    $put(params: { name: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    capabilities: {
                        plan: {
                            /**
                             * Get available plans for the current registry.
                             * GET /cloud/project/{serviceName}/containerRegistry/{registryID}/capabilities/plan
                             */
                            $get(): Promise<cloud.containerRegistry.Plan[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        }
                    }
                    plan: {
                        /**
                         * Show the actual plan of the registry.
                         * GET /cloud/project/{serviceName}/containerRegistry/{registryID}/plan
                         */
                        $get(): Promise<cloud.containerRegistry.Plan>;
                        /**
                         * Update the plan of a registry.
                         * PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/plan
                         */
                        $put(params: { planID: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    users: {
                        /**
                         * List registry user
                         * GET /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                         */
                        $get(): Promise<cloud.containerRegistry.User[]>;
                        /**
                         * Create a new registry user
                         * POST /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                         */
                        $post(params?: { email?: string, login?: string }): Promise<cloud.containerRegistry.User>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        $(userID: string): {
                            /**
                             * Delete a registry user
                             * DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        };
                    }
                };
            }
            credit: {
                /**
                 * Get your credit
                 * GET /cloud/project/{serviceName}/credit
                 */
                $get(): Promise<number[]>;
                /**
                 * Add credit to your project
                 * POST /cloud/project/{serviceName}/credit
                 */
                $post(params: { code: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /cloud/project/{serviceName}/credit/{id}
                     */
                    $get(): Promise<cloud.Credit>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            flavor: {
                /**
                 * Get flavors
                 * GET /cloud/project/{serviceName}/flavor
                 */
                $get(params?: { region?: string }): Promise<cloud.flavor.Flavor[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(flavorId: string): {
                    /**
                     * Get flavor
                     * GET /cloud/project/{serviceName}/flavor/{flavorId}
                     */
                    $get(): Promise<cloud.flavor.Flavor>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            forecast: {
                /**
                 * Get your consumption forecast
                 * GET /cloud/project/{serviceName}/forecast
                 */
                $get(params: { toDate: string }): Promise<cloud.forecast.ProjectForecast>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            image: {
                /**
                 * Get images
                 * GET /cloud/project/{serviceName}/image
                 */
                $get(params?: { flavorType?: string, osType?: cloud.image.OSTypeEnum, region?: string }): Promise<cloud.image.Image[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(imageId: string): {
                    /**
                     * Get image
                     * GET /cloud/project/{serviceName}/image/{imageId}
                     */
                    $get(): Promise<cloud.image.Image>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            instance: {
                /**
                 * Get instance
                 * GET /cloud/project/{serviceName}/instance
                 */
                $get(params?: { region?: string }): Promise<cloud.instance.Instance[]>;
                /**
                 * Create a new instance
                 * POST /cloud/project/{serviceName}/instance
                 */
                $post(params: { autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string }): Promise<cloud.instance.InstanceDetail>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                bulk: {
                    /**
                     * Create multiple instances
                     * POST /cloud/project/{serviceName}/instance/bulk
                     */
                    $post(params: { autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string }): Promise<cloud.instance.Instance[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                group: {
                    /**
                     * Get the detail of a group
                     * GET /cloud/project/{serviceName}/instance/group
                     */
                    $get(params?: { region?: string }): Promise<cloud.instancegroup.InstanceGroup[]>;
                    /**
                     * Create a group
                     * POST /cloud/project/{serviceName}/instance/group
                     */
                    $post(params: { name: string, region: string, type: cloud.instancegroup.InstanceGroupTypeEnum }): Promise<cloud.instancegroup.InstanceGroup>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(groupId: string): {
                        /**
                         * Delete a group
                         * DELETE /cloud/project/{serviceName}/instance/group/{groupId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get all groups
                         * GET /cloud/project/{serviceName}/instance/group/{groupId}
                         */
                        $get(params?: { region?: string }): Promise<cloud.instancegroup.InstanceGroup>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                $(instanceId: string): {
                    /**
                     * Delete an instance
                     * DELETE /cloud/project/{serviceName}/instance/{instanceId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get instance
                     * GET /cloud/project/{serviceName}/instance/{instanceId}
                     */
                    $get(): Promise<cloud.instance.InstanceDetail>;
                    /**
                     * Alter an instance
                     * PUT /cloud/project/{serviceName}/instance/{instanceId}
                     */
                    $put(params: { instanceName: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    activeMonthlyBilling: {
                        /**
                         * Activate monthly billing on instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
                         */
                        $post(): Promise<cloud.instance.InstanceDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    applicationAccess: {
                        /**
                         * Return initial credentials of applications installed from public image
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
                         */
                        $post(): Promise<cloud.instance.ApplicationAccess>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    interface: {
                        /**
                         * Get interfaces
                         * GET /cloud/project/{serviceName}/instance/{instanceId}/interface
                         */
                        $get(): Promise<cloud.instanceInterface.Interface[]>;
                        /**
                         * Create interface on an instance and attached it to a network
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/interface
                         */
                        $post(params: { ip?: string, networkId: string }): Promise<cloud.instanceInterface.Interface>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        $(interfaceId: string): {
                            /**
                             * Delete an interface
                             * DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get interface
                             * GET /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                             */
                            $get(): Promise<cloud.instanceInterface.Interface>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        };
                    }
                    monitoring: {
                        /**
                         * Return many statistics about the virtual machine for a given period
                         * GET /cloud/project/{serviceName}/instance/{instanceId}/monitoring
                         */
                        $get(params: { period: cloud.instance.MetricsPeriodEnum, type: cloud.instance.MetricsTypeEnum }): Promise<cloud.instance.InstanceMetrics>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    reboot: {
                        /**
                         * Reboot an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/reboot
                         */
                        $post(params: { type: cloud.instance.RebootTypeEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    reinstall: {
                        /**
                         * Reinstall an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/reinstall
                         */
                        $post(params: { imageId: string }): Promise<cloud.instance.InstanceDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    rescueMode: {
                        /**
                         * Enable or disable rescue mode
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/rescueMode
                         */
                        $post(params: { imageId?: string, rescue: boolean }): Promise<cloud.instance.RescueAdminPassword>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    resize: {
                        /**
                         * Migrate your instance to another flavor
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/resize
                         */
                        $post(params: { flavorId: string }): Promise<cloud.instance.InstanceDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    resume: {
                        /**
                         * Resume a suspended instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/resume
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    snapshot: {
                        /**
                         * Snapshot an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/snapshot
                         */
                        $post(params: { snapshotName: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    start: {
                        /**
                         * Start an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/start
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    stop: {
                        /**
                         * Stop an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/stop
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    vnc: {
                        /**
                         * Get VNC access to your instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/vnc
                         */
                        $post(): Promise<cloud.instance.InstanceVnc>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                };
            }
            io: {
                capabilities: {
                    stream: {
                        region: {
                            /**
                             * List all available regions
                             * GET /cloud/project/{serviceName}/io/capabilities/stream/region
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                            $(regionName: string): {
                                /**
                                 * Get connection information from a region
                                 * GET /cloud/project/{serviceName}/io/capabilities/stream/region/{regionName}
                                 */
                                $get(): Promise<cloud.project.io.stream.Region>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions): Promise<any>;
                            };
                        }
                    }
                }
                stream: {
                    /**
                     * List all stream for a tenant
                     * GET /cloud/project/{serviceName}/io/stream
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a stream
                     * POST /cloud/project/{serviceName}/io/stream
                     */
                    $post(params: { description: string, kind: cloud.project.io.StreamKindEnum, name: string, region: string }): Promise<cloud.project.io.Stream>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(streamId: string): {
                        /**
                         * Delete a stream
                         * DELETE /cloud/project/{serviceName}/io/stream/{streamId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get a stream
                         * GET /cloud/project/{serviceName}/io/stream/{streamId}
                         */
                        $get(): Promise<cloud.project.io.Stream>;
                        /**
                         * Update a stream
                         * PUT /cloud/project/{serviceName}/io/stream/{streamId}
                         */
                        $put(params?: { backlog?: string, description?: string, id?: string, kind?: cloud.project.io.StreamKindEnum, name?: string, regions?: string[], retention?: string, status?: cloud.project.io.StreamStatusEnum, throttling?: number }): Promise<cloud.project.io.Stream>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        stats: {
                            /**
                             * Retrieve statistics of the stream
                             * GET /cloud/project/{serviceName}/io/stream/{streamId}/stats
                             */
                            $get(): Promise<cloud.project.io.StreamStats>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        }
                        subscription: {
                            /**
                             * List all subscriptions for a stream
                             * GET /cloud/project/{serviceName}/io/stream/{streamId}/subscription
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new subscription
                             * POST /cloud/project/{serviceName}/io/stream/{streamId}/subscription
                             */
                            $post(params: { name: string }): Promise<cloud.project.io.stream.Subscription>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                            $(subscriptionId: string): {
                                /**
                                 * Delete a subscription
                                 * DELETE /cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get a subscription
                                 * GET /cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}
                                 */
                                $get(): Promise<cloud.project.io.stream.Subscription>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions): Promise<any>;
                                resetCursor: {
                                    /**
                                     * Reset a cursor
                                     * POST /cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/resetCursor
                                     */
                                    $post(): Promise<void>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions): Promise<any>;
                                }
                                stats: {
                                    /**
                                     * Retrieve statistics of the subscription
                                     * GET /cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/stats
                                     */
                                    $get(): Promise<cloud.project.io.stream.SubscriptionStats>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions): Promise<any>;
                                }
                            };
                        }
                        token: {
                            /**
                             * List all tokens for a stream
                             * GET /cloud/project/{serviceName}/io/stream/{streamId}/token
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a token
                             * POST /cloud/project/{serviceName}/io/stream/{streamId}/token
                             */
                            $post(params: { action: cloud.project.io.stream.TokenActionEnum }): Promise<cloud.project.io.stream.Token>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                            $(tokenId: string): {
                                /**
                                 * Delete a token
                                 * DELETE /cloud/project/{serviceName}/io/stream/{streamId}/token/{tokenId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get token
                                 * GET /cloud/project/{serviceName}/io/stream/{streamId}/token/{tokenId}
                                 */
                                $get(): Promise<cloud.project.io.stream.Token>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions): Promise<any>;
                            };
                        }
                    };
                }
            }
            ip: {
                /**
                 * Get ips
                 * GET /cloud/project/{serviceName}/ip
                 */
                $get(): Promise<cloud.ip.CloudIp[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                failover: {
                    /**
                     * Get failover ips
                     * GET /cloud/project/{serviceName}/ip/failover
                     */
                    $get(): Promise<cloud.ip.FailoverIp[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(id: string): {
                        /**
                         * Get failover ip
                         * GET /cloud/project/{serviceName}/ip/failover/{id}
                         */
                        $get(): Promise<cloud.ip.FailoverIp>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        attach: {
                            /**
                             * Attach failover ip to an instance
                             * POST /cloud/project/{serviceName}/ip/failover/{id}/attach
                             */
                            $post(params: { instanceId: string }): Promise<cloud.ip.FailoverIp>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        }
                    };
                }
            }
            kube: {
                /**
                 * List your managed Kubernetes clusters
                 * GET /cloud/project/{serviceName}/kube
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a new managed Kubernetes cluster
                 * POST /cloud/project/{serviceName}/kube
                 */
                $post(params: { name?: string, region: cloud.kube.RegionEnum, version?: cloud.kube.VersionEnum }): Promise<cloud.kube.Cluster>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                regions: {
                    /**
                     * List Kubernetes available regions
                     * GET /cloud/project/{serviceName}/kube/regions
                     */
                    $get(): Promise<cloud.kube.RegionEnum[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                $(kubeId: string): {
                    /**
                     * Delete your managed Kubernetes cluster
                     * DELETE /cloud/project/{serviceName}/kube/{kubeId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get information about your managed Kubernetes cluster
                     * GET /cloud/project/{serviceName}/kube/{kubeId}
                     */
                    $get(): Promise<cloud.kube.Cluster>;
                    /**
                     * Update information about your managed Kubernetes cluster
                     * PUT /cloud/project/{serviceName}/kube/{kubeId}
                     */
                    $put(params: { name: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    flavors: {
                        /**
                         * List all flavors available
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/flavors
                         */
                        $get(): Promise<cloud.kube.Flavor[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    kubeconfig: {
                        /**
                         * Generate kubeconfig file
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig
                         */
                        $post(): Promise<cloud.kube.Kubeconfig>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    node: {
                        /**
                         * List your nodes
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/node
                         */
                        $get(): Promise<cloud.kube.Node[]>;
                        /**
                         * Deploy a node for your cluster. This call is deprecated. In the meantime it will create a new node pool for each call. We encourage you to now either create a new nodepool or change the size on an existing one
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/node
                         */
                        $post(params: { flavorName: string, name?: string }): Promise<cloud.kube.Node>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        $(nodeId: string): {
                            /**
                             * Delete a specific node on your cluster. This will also decrease by one the desirednodes value of its nodepool
                             * DELETE /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get information on a specific node on your cluster
                             * GET /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                             */
                            $get(): Promise<cloud.kube.Node>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        };
                    }
                    reset: {
                        /**
                         * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/reset
                         */
                        $post(params?: { version?: cloud.kube.VersionEnum, workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicyEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    update: {
                        /**
                         * Force cluster and node update to the latest patch within minor version or next minor version
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/update
                         */
                        $post(params?: { strategy?: cloud.kube.UpdateStrategyEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    updatePolicy: {
                        /**
                         * Change the update policy of your cluster
                         * PUT /cloud/project/{serviceName}/kube/{kubeId}/updatePolicy
                         */
                        $put(params: { updatePolicy: cloud.kube.UpdatePolicyEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                };
            }
            lab: {
                /**
                 * List available public cloud labs
                 * GET /cloud/project/{serviceName}/lab
                 */
                $get(): Promise<cloud.Lab[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(labId: string): {
                    /**
                     * Get details of a public cloud lab
                     * GET /cloud/project/{serviceName}/lab/{labId}
                     */
                    $get(): Promise<cloud.Lab>;
                    /**
                     * Activate a lab on your Cloud Project
                     * POST /cloud/project/{serviceName}/lab/{labId}
                     */
                    $post(): Promise<cloud.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    agreement: {
                        /**
                         * List required agreements to active this lab
                         * GET /cloud/project/{serviceName}/lab/{labId}/agreement
                         */
                        $get(): Promise<cloud.LabAgreements>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                };
            }
            migration: {
                /**
                 * Get planned migrations
                 * GET /cloud/project/{serviceName}/migration
                 */
                $get(): Promise<cloud.migration.Migration[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(migrationId: string): {
                    /**
                     * Get planned migration
                     * GET /cloud/project/{serviceName}/migration/{migrationId}
                     */
                    $get(): Promise<cloud.migration.Migration>;
                    /**
                     * Update planned migration
                     * PUT /cloud/project/{serviceName}/migration/{migrationId}
                     */
                    $put(params: { date: string }): Promise<cloud.migration.Migration>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            network: {
                private: {
                    /**
                     * Get private networks
                     * GET /cloud/project/{serviceName}/network/private
                     */
                    $get(): Promise<cloud.network.Network[]>;
                    /**
                     * Create a new network
                     * POST /cloud/project/{serviceName}/network/private
                     */
                    $post(params: { name: string, regions?: string[], vlanId?: number }): Promise<cloud.network.Network>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(networkId: string): {
                        /**
                         * Delete private network
                         * DELETE /cloud/project/{serviceName}/network/private/{networkId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get private network
                         * GET /cloud/project/{serviceName}/network/private/{networkId}
                         */
                        $get(): Promise<cloud.network.Network>;
                        /**
                         * Rename private network
                         * PUT /cloud/project/{serviceName}/network/private/{networkId}
                         */
                        $put(params: { name: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        region: {
                            /**
                             * Activate private network in a new region
                             * POST /cloud/project/{serviceName}/network/private/{networkId}/region
                             */
                            $post(params: { region: string }): Promise<cloud.network.Network>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        }
                        subnet: {
                            /**
                             * Get network subnets
                             * GET /cloud/project/{serviceName}/network/private/{networkId}/subnet
                             */
                            $get(): Promise<cloud.network.Subnet[]>;
                            /**
                             * Create a new network subnet
                             * POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
                             */
                            $post(params: { dhcp: boolean, end: string, network: string, noGateway: boolean, region: string, start: string }): Promise<cloud.network.Subnet>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                            $(subnetId: string): {
                                /**
                                 * Delete a network subnet
                                 * DELETE /cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions): Promise<any>;
                            };
                        }
                    };
                }
                public: {
                    /**
                     * Get public networks
                     * GET /cloud/project/{serviceName}/network/public
                     */
                    $get(): Promise<cloud.network.Network[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
            }
            openstackClient: {
                /**
                 * Get OVH playground session to use the openstack terminal
                 * POST /cloud/project/{serviceName}/openstackClient
                 */
                $post(): Promise<cloud.openstackClient.Session>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            operation: {
                /**
                 * List your operations
                 * GET /cloud/project/{serviceName}/operation
                 */
                $get(): Promise<cloud.Operation[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(operationId: string): {
                    /**
                     * Get information about one operation
                     * GET /cloud/project/{serviceName}/operation/{operationId}
                     */
                    $get(): Promise<cloud.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            quota: {
                /**
                 * List quotas
                 * GET /cloud/project/{serviceName}/quota
                 */
                $get(): Promise<cloud.quota.Quotas[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            region: {
                /**
                 * List your regions
                 * GET /cloud/project/{serviceName}/region
                 */
                $get(): Promise<string[]>;
                /**
                 * Request access to a region
                 * POST /cloud/project/{serviceName}/region
                 */
                $post(params: { region: string }): Promise<cloud.Region>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(regionName: string): {
                    /**
                     * Get information about your region
                     * GET /cloud/project/{serviceName}/region/{regionName}
                     */
                    $get(): Promise<cloud.Region>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    quota: {
                        /**
                         * List quotas
                         * GET /cloud/project/{serviceName}/region/{regionName}/quota
                         */
                        $get(): Promise<cloud.quota.Quotas>;
                        /**
                         * Change project quotas on region
                         * POST /cloud/project/{serviceName}/region/{regionName}/quota
                         */
                        $post(params: { name: string }): Promise<cloud.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        allowed: {
                            /**
                             * Get allowed quotas on region
                             * GET /cloud/project/{serviceName}/region/{regionName}/quota/allowed
                             */
                            $get(): Promise<cloud.quota.AllowedQuota[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        }
                    }
                    workflow: {
                        backup: {
                            /**
                             * List your automated backups
                             * GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                             */
                            $get(): Promise<cloud.Backup[]>;
                            /**
                             * Create a new automated backup
                             * POST /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                             */
                            $post(params: { cron: string, instanceId: string, maxExecutionCount?: number, name: string, rotation: number }): Promise<cloud.Backup>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                            $(backupWorkflowId: string): {
                                /**
                                 * Delete a backup workflow process
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get details about a backup workflow process
                                 * GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                 */
                                $get(): Promise<cloud.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions): Promise<any>;
                            };
                        }
                    }
                };
            }
            regionAvailable: {
                /**
                 * List the regions on which you can ask an access to
                 * GET /cloud/project/{serviceName}/regionAvailable
                 */
                $get(): Promise<cloud.AvailableRegion[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            retain: {
                /**
                 * Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call
                 * POST /cloud/project/{serviceName}/retain
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            role: {
                /**
                 * Get all Roles
                 * GET /cloud/project/{serviceName}/role
                 */
                $get(): Promise<cloud.role.Roles>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /cloud/project/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /cloud/project/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            snapshot: {
                /**
                 * Get snapshots
                 * GET /cloud/project/{serviceName}/snapshot
                 */
                $get(params?: { flavorType?: string, region?: string }): Promise<cloud.image.Image[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(imageId: string): {
                    /**
                     * Delete a snapshot
                     * DELETE /cloud/project/{serviceName}/snapshot/{imageId}
                     */
                    $delete(): Promise<cloud.image.Image>;
                    /**
                     * Get snapshot details
                     * GET /cloud/project/{serviceName}/snapshot/{imageId}
                     */
                    $get(): Promise<cloud.image.Image>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            sshkey: {
                /**
                 * Get SSH keys
                 * GET /cloud/project/{serviceName}/sshkey
                 */
                $get(params?: { region?: string }): Promise<cloud.sshkey.SshKey[]>;
                /**
                 * Create SSH key
                 * POST /cloud/project/{serviceName}/sshkey
                 */
                $post(params: { name: string, publicKey: string, region?: string }): Promise<cloud.sshkey.SshKeyDetail>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(keyId: string): {
                    /**
                     * Delete SSH key
                     * DELETE /cloud/project/{serviceName}/sshkey/{keyId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get SSH key
                     * GET /cloud/project/{serviceName}/sshkey/{keyId}
                     */
                    $get(): Promise<cloud.sshkey.SshKeyDetail>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                };
            }
            stack: {
                /**
                 * Get stacks
                 * GET /cloud/project/{serviceName}/stack
                 */
                $get(): Promise<cloud.stack.Stack[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(stackId: string): {
                    /**
                     * Get stack
                     * GET /cloud/project/{serviceName}/stack/{stackId}
                     */
                    $get(): Promise<cloud.stack.Stack>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    client: {
                        /**
                         * Get OVH playground session with a stack installed to use the openstack terminal
                         * POST /cloud/project/{serviceName}/stack/{stackId}/client
                         */
                        $post(): Promise<cloud.openstackClient.Session>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                };
            }
            storage: {
                /**
                 * Get storage containers
                 * GET /cloud/project/{serviceName}/storage
                 */
                $get(): Promise<cloud.storage.Container[]>;
                /**
                 * Create container
                 * POST /cloud/project/{serviceName}/storage
                 */
                $post(params: { archive: boolean, containerName: string, region: string }): Promise<cloud.storage.Container>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                access: {
                    /**
                     * Access to storage API
                     * GET /cloud/project/{serviceName}/storage/access
                     */
                    $get(): Promise<cloud.storage.ContainerAccess>;
                    /**
                     * Access to storage API
                     * POST /cloud/project/{serviceName}/storage/access
                     */
                    $post(): Promise<cloud.storage.ContainerAccess>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                $(containerId: string): {
                    /**
                     * Delete container
                     * DELETE /cloud/project/{serviceName}/storage/{containerId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get storage container
                     * GET /cloud/project/{serviceName}/storage/{containerId}
                     */
                    $get(params?: { noObjects?: boolean }): Promise<cloud.storage.ContainerDetail>;
                    /**
                     * Update your storage container
                     * PUT /cloud/project/{serviceName}/storage/{containerId}
                     */
                    $put(params?: { containerType?: cloud.storage.TypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    cors: {
                        /**
                         * Delete CORS support on your container
                         * DELETE /cloud/project/{serviceName}/storage/{containerId}/cors
                         */
                        $delete(params: { origin: string }): Promise<void>;
                        /**
                         * Add CORS support on your container
                         * POST /cloud/project/{serviceName}/storage/{containerId}/cors
                         */
                        $post(params: { origin: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    publicUrl: {
                        /**
                         * Get a public temporary URL to access to one of your object
                         * POST /cloud/project/{serviceName}/storage/{containerId}/publicUrl
                         */
                        $post(params: { expirationDate: string, objectName: string }): Promise<cloud.storage.ContainerObjectTempURL>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    static: {
                        /**
                         * Deploy your container files as a static web site
                         * POST /cloud/project/{serviceName}/storage/{containerId}/static
                         */
                        $post(): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    user: {
                        /**
                         * Create openstack user with only access to this container
                         * POST /cloud/project/{serviceName}/storage/{containerId}/user
                         */
                        $post(params: { description?: string, right: cloud.storage.RightEnum }): Promise<cloud.user.UserDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /cloud/project/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            unleash: {
                /**
                 * Request more quota on your /cloud project
                 * POST /cloud/project/{serviceName}/unleash
                 */
                $post(): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
            usage: {
                current: {
                    /**
                     * Get current usage
                     * GET /cloud/project/{serviceName}/usage/current
                     */
                    $get(): Promise<cloud.usage.UsageCurrent>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                forecast: {
                    /**
                     * Get usage forecast
                     * GET /cloud/project/{serviceName}/usage/forecast
                     */
                    $get(): Promise<cloud.usage.UsageForecast>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                history: {
                    /**
                     * Usage information details
                     * GET /cloud/project/{serviceName}/usage/history
                     */
                    $get(params?: { from?: string, to?: string }): Promise<cloud.usage.UsageHistory[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(usageId: string): {
                        /**
                         * Usage information details
                         * GET /cloud/project/{serviceName}/usage/history/{usageId}
                         */
                        $get(): Promise<cloud.usage.UsageHistoryDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
            }
            user: {
                /**
                 * Get all users
                 * GET /cloud/project/{serviceName}/user
                 */
                $get(): Promise<cloud.user.User[]>;
                /**
                 * Create user
                 * POST /cloud/project/{serviceName}/user
                 */
                $post(params?: { description?: string, role?: cloud.user.RoleEnum, roles?: cloud.user.RoleEnum[] }): Promise<cloud.user.UserDetail>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                $(userId: number): {
                    /**
                     * Delete user
                     * DELETE /cloud/project/{serviceName}/user/{userId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get user details
                     * GET /cloud/project/{serviceName}/user/{userId}
                     */
                    $get(): Promise<cloud.user.User>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    openrc: {
                        /**
                         * Get RC file of OpenStack
                         * GET /cloud/project/{serviceName}/user/{userId}/openrc
                         */
                        $get(params: { region: string, version?: cloud.user.OpenrcVersionEnum }): Promise<cloud.user.Openrc>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    rclone: {
                        /**
                         * Get rclone configuration file
                         * GET /cloud/project/{serviceName}/user/{userId}/rclone
                         */
                        $get(params: { region: string }): Promise<cloud.user.Rclone>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    regeneratePassword: {
                        /**
                         * Regenerate user password
                         * POST /cloud/project/{serviceName}/user/{userId}/regeneratePassword
                         */
                        $post(): Promise<cloud.user.UserDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    role: {
                        /**
                         * Get user roles
                         * GET /cloud/project/{serviceName}/user/{userId}/role
                         */
                        $get(): Promise<cloud.role.Role[]>;
                        /**
                         * Add a role to a user
                         * POST /cloud/project/{serviceName}/user/{userId}/role
                         */
                        $post(params: { roleId: string }): Promise<cloud.user.UserDetail>;
                        /**
                         * Update roles of a user
                         * PUT /cloud/project/{serviceName}/user/{userId}/role
                         */
                        $put(params: { rolesIds: string[] }): Promise<cloud.user.UserDetail>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        $(roleId: string): {
                            /**
                             * Remove role for a user
                             * DELETE /cloud/project/{serviceName}/user/{userId}/role/{roleId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get role detail
                             * GET /cloud/project/{serviceName}/user/{userId}/role/{roleId}
                             */
                            $get(): Promise<cloud.role.Role>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        };
                    }
                    token: {
                        /**
                         * Get token for user
                         * POST /cloud/project/{serviceName}/user/{userId}/token
                         */
                        $post(params: { password: string }): Promise<cloud.authentication.Token>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                };
            }
            volume: {
                /**
                 * Get volumes
                 * GET /cloud/project/{serviceName}/volume
                 */
                $get(params?: { region?: string }): Promise<cloud.volume.Volume[]>;
                /**
                 * Create a volume
                 * POST /cloud/project/{serviceName}/volume
                 */
                $post(params: { description?: string, imageId?: string, name?: string, region: string, size: number, snapshotId?: string, type: cloud.volume.VolumeTypeEnum }): Promise<cloud.volume.Volume>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                snapshot: {
                    /**
                     * Get volume snapshots
                     * GET /cloud/project/{serviceName}/volume/snapshot
                     */
                    $get(params?: { region?: string }): Promise<cloud.volume.Snapshot[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(snapshotId: string): {
                        /**
                         * Delete a volume snapshot
                         * DELETE /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get volume snapshot details
                         * GET /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                         */
                        $get(): Promise<cloud.volume.Snapshot>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                $(volumeId: string): {
                    /**
                     * Delete a volume
                     * DELETE /cloud/project/{serviceName}/volume/{volumeId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get volume details
                     * GET /cloud/project/{serviceName}/volume/{volumeId}
                     */
                    $get(): Promise<cloud.volume.Volume>;
                    /**
                     * Update a volume
                     * PUT /cloud/project/{serviceName}/volume/{volumeId}
                     */
                    $put(params?: { description?: string, name?: string }): Promise<cloud.volume.Volume>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    attach: {
                        /**
                         * Attach a volume on an instance
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/attach
                         */
                        $post(params: { instanceId: string }): Promise<cloud.volume.Volume>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    detach: {
                        /**
                         * Detach a volume from an instance
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/detach
                         */
                        $post(params: { instanceId: string }): Promise<cloud.volume.Volume>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    snapshot: {
                        /**
                         * Snapshot a volume
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/snapshot
                         */
                        $post(params?: { description?: string, name?: string }): Promise<cloud.volume.Snapshot>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                    upsize: {
                        /**
                         * Extend a volume
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/upsize
                         */
                        $post(params: { size: number }): Promise<cloud.volume.Volume>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    }
                };
            }
            vrack: {
                /**
                 * Get the linked vRack on your project
                 * GET /cloud/project/{serviceName}/vrack
                 */
                $get(): Promise<cloud.Vrack>;
                /**
                 * Order and attach a new vRack on your project
                 * POST /cloud/project/{serviceName}/vrack
                 */
                $post(): Promise<cloud.Operation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            }
        };
    }
    subsidiaryPrice: {
        /**
         * Get services prices for a subsidiary
         * GET /cloud/subsidiaryPrice
         */
        $get(params: { flavorId?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, region?: string }): Promise<cloud.Price>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions): Promise<any>;
    }
    $(serviceName: string | number): {
        pca: {
            /**
             * List available services
             * GET /cloud/{serviceName}/pca
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(pcaServiceName: string): {
                /**
                 * Get this object properties
                 * GET /cloud/{serviceName}/pca/{pcaServiceName}
                 */
                $get(): Promise<pca.Account>;
                /**
                 * Alter this object properties
                 * PUT /cloud/{serviceName}/pca/{pcaServiceName}
                 */
                $put(params?: { domain?: string, host?: string, login?: string, password?: string, sshkey?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
                billing: {
                    /**
                     * cloud Archives billing items
                     * GET /cloud/{serviceName}/pca/{pcaServiceName}/billing
                     */
                    $get(params?: { billed?: boolean, date_from?: string, date_to?: string }): Promise<number[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(billingId: number): {
                        /**
                         * Get this object properties
                         * GET /cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}
                         */
                        $get(): Promise<pca.Billing>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                serviceInfos: {
                    /**
                     * Get this object properties
                     * GET /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                     */
                    $get(): Promise<services.Service>;
                    /**
                     * Alter this object properties
                     * PUT /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                     */
                    $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
                sessions: {
                    /**
                     * cloud archives sessions for account
                     * GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions
                     */
                    $get(params?: { name?: string }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(sessionId: string): {
                        /**
                         * Create a delete task for all files in session
                         * DELETE /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                         */
                        $delete(): Promise<pca.Task>;
                        /**
                         * Get this object properties
                         * GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                         */
                        $get(): Promise<pca.Session>;
                        /**
                         * Alter this object properties
                         * PUT /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                         */
                        $put(params?: { endDate?: string, id?: string, login?: string, name?: string, size?: number, srcIp?: string, startDate?: string, state?: cloud.pca.SessionStateEnum }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                        files: {
                            /**
                             * cloud archives files in session
                             * GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files
                             */
                            $get(params?: { name?: string }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                            $(fileId: string): {
                                /**
                                 * Get this object properties
                                 * GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}
                                 */
                                $get(): Promise<pca.File>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions): Promise<any>;
                            };
                        }
                        restore: {
                            /**
                             * Create a restore task for session
                             * POST /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore
                             */
                            $post(): Promise<pca.Task>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions): Promise<any>;
                        }
                    };
                }
                tasks: {
                    /**
                     * cloud archives tasks for account
                     * GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                     */
                    $get(params?: { function_?: cloud.pca.FunctionTypeEnum, status?: cloud.pca.TaskStateEnum, todoDate_from?: string, todoDate_to?: string }): Promise<string[]>;
                    /**
                     * Create a cloud archives task
                     * POST /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                     */
                    $post(params: { fileIds: string[], sessionId: string, taskFunction: cloud.pca.TaskTypeEnum }): Promise<pca.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                    $(taskId: string): {
                        /**
                         * Get this object properties
                         * GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}
                         */
                        $get(): Promise<pca.Task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions): Promise<any>;
                    };
                }
                usage: {
                    /**
                     * View account current total sessions usage (bytes)
                     * GET /cloud/{serviceName}/pca/{pcaServiceName}/usage
                     */
                    $get(): Promise<number>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions): Promise<any>;
                }
            };
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type orderPrice = order.Price;
