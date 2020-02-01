import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /cloud Models
 * Source: https://ca.api.ovh.com/1.0/cloud.json
 */
export namespace cloud {
    // type fullname: cloud.AccessTypeEnum
    export type AccessTypeEnum = "full" | "restricted"
    // interface fullName: cloud.Acl.Acl
    export interface Acl {
        accountId: string;
        type: cloud.AclTypeEnum;
    }
    // type fullname: cloud.AclTypeEnum
    export type AclTypeEnum = "readOnly" | "readWrite"
    // interface fullName: cloud.Alerting.Alerting
    export interface Alerting {
        creationDate: string;
        delay: cloud.AlertingDelayEnum;
        email: string;
        formattedMonthlyThreshold: orderPrice;
        id: string;
        monthlyThreshold: number;
    }
    // interface fullName: cloud.AlertingAlert.AlertingAlert
    export interface AlertingAlert {
        alertDate: string;
        alertId: number;
        emails: string[];
    }
    // type fullname: cloud.AlertingDelayEnum
    export type AlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400
    // interface fullName: cloud.ArchiveStoragePrice.ArchiveStoragePrice
    export interface ArchiveStoragePrice {
        monthlyPrice: orderPrice;
        region: string;
    }
    // interface fullName: cloud.AvailableRegion.AvailableRegion
    export interface AvailableRegion {
        continentCode: cloud.RegionContinentEnum;
        datacenterLocation: string;
        name: string;
    }
    // interface fullName: cloud.Backup.Backup
    export interface Backup {
        backupName: string;
        createdAt: string;
        cron: string;
        executions?: cloud.Execution[];
        id: string;
        instanceId: string;
        name: string;
    }
    // interface fullName: cloud.BandwidthStoragePrice.BandwidthStoragePrice
    export interface BandwidthStoragePrice {
        price: orderPrice;
        region: string;
    }
    // interface fullName: cloud.Component.Component
    export interface Component {
        name: string;
        status: cloud.ServiceStatusEnum;
    }
    // interface fullName: cloud.Credit.Credit
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
    // interface fullName: cloud.Execution.Execution
    export interface Execution {
        executedAt: string;
        state: cloud.ExecutionStateEnum;
        stateInfo: string;
    }
    // type fullname: cloud.ExecutionState
    export type ExecutionState = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
    // type fullname: cloud.ExecutionStateEnum
    export type ExecutionStateEnum = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
    // interface fullName: cloud.FlavorPrice.FlavorPrice
    export interface FlavorPrice {
        flavorId: string;
        flavorName: string;
        monthlyPrice?: orderPrice;
        price: orderPrice;
        region: string;
    }
    // type fullname: cloud.IpCountryEnum
    export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    // interface fullName: cloud.Lab.Lab
    export interface Lab {
        id: string;
        name: string;
        status: cloud.LabStatusEnum;
    }
    // interface fullName: cloud.LabAgreements.LabAgreements
    export interface LabAgreements {
        accepted: number[];
        toAccept: number[];
    }
    // type fullname: cloud.LabStatus
    export type LabStatus = "open" | "activating" | "activated" | "closed"
    // type fullname: cloud.LabStatusEnum
    export type LabStatusEnum = "open" | "activating" | "activated" | "closed"
    // interface fullName: cloud.Operation.Operation
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
    // type fullname: cloud.OperationStatus
    export type OperationStatus = "created" | "in-progress" | "completed" | "in-error" | "unknown"
    // type fullname: cloud.OperationStatusEnum
    export type OperationStatusEnum = "created" | "in-progress" | "completed" | "in-error" | "unknown"
    // interface fullName: cloud.Price.Price
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
    // interface fullName: cloud.Project.Project
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
    // interface fullName: cloud.ProjectActivateMonthlyBillingCreation.ProjectActivateMonthlyBillingCreation
    export interface ProjectActivateMonthlyBillingCreation {
        instances: cloud.instance.MonthlyInstanceBulkParams[];
    }
    // interface fullName: cloud.ProjectContainerRegistryCreation.ProjectContainerRegistryCreation
    export interface ProjectContainerRegistryCreation {
        name: string;
        planID: string;
        region: string;
    }
    // interface fullName: cloud.ProjectContainerRegistryUpdate.ProjectContainerRegistryUpdate
    export interface ProjectContainerRegistryUpdate {
        name: string;
    }
    // interface fullName: cloud.ProjectContainerRegistryUsersCreation.ProjectContainerRegistryUsersCreation
    export interface ProjectContainerRegistryUsersCreation {
        email?: string;
        login?: string;
    }
    // interface fullName: cloud.ProjectInstanceBulkCreation.ProjectInstanceBulkCreation
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
    // interface fullName: cloud.ProjectInstanceCreation.ProjectInstanceCreation
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
    // interface fullName: cloud.ProjectInstanceGroupCreation.ProjectInstanceGroupCreation
    export interface ProjectInstanceGroupCreation {
        name: string;
        region: string;
        type: cloud.instancegroup.InstanceGroupTypeEnum;
    }
    // interface fullName: cloud.ProjectInstanceInterfaceCreation.ProjectInstanceInterfaceCreation
    export interface ProjectInstanceInterfaceCreation {
        ip?: string;
        networkId: string;
    }
    // interface fullName: cloud.ProjectInstanceRebootCreation.ProjectInstanceRebootCreation
    export interface ProjectInstanceRebootCreation {
        type: cloud.instance.RebootTypeEnum;
    }
    // interface fullName: cloud.ProjectInstanceReinstallCreation.ProjectInstanceReinstallCreation
    export interface ProjectInstanceReinstallCreation {
        imageId: string;
    }
    // interface fullName: cloud.ProjectInstanceRescueModeCreation.ProjectInstanceRescueModeCreation
    export interface ProjectInstanceRescueModeCreation {
        imageId?: string;
        rescue: boolean;
    }
    // interface fullName: cloud.ProjectInstanceResizeCreation.ProjectInstanceResizeCreation
    export interface ProjectInstanceResizeCreation {
        flavorId: string;
    }
    // interface fullName: cloud.ProjectInstanceSnapshotCreation.ProjectInstanceSnapshotCreation
    export interface ProjectInstanceSnapshotCreation {
        snapshotName: string;
    }
    // interface fullName: cloud.ProjectInstanceUpdate.ProjectInstanceUpdate
    export interface ProjectInstanceUpdate {
        instanceName: string;
    }
    // interface fullName: cloud.ProjectIpFailoverAttachCreation.ProjectIpFailoverAttachCreation
    export interface ProjectIpFailoverAttachCreation {
        instanceId: string;
    }
    // interface fullName: cloud.ProjectKubeCreation.ProjectKubeCreation
    export interface ProjectKubeCreation {
        name?: string;
        region: cloud.kube.RegionEnum;
        version?: cloud.kube.VersionEnum;
    }
    // interface fullName: cloud.ProjectKubeNodeCreation.ProjectKubeNodeCreation
    export interface ProjectKubeNodeCreation {
        flavorName: string;
        name?: string;
    }
    // interface fullName: cloud.ProjectKubeNodePoolCreation.ProjectKubeNodePoolCreation
    export interface ProjectKubeNodePoolCreation {
        desiredNodes?: number;
        flavorName: string;
        maxNodes?: number;
        minNodes?: number;
        name?: string;
    }
    // interface fullName: cloud.ProjectKubeNodePoolUpdate.ProjectKubeNodePoolUpdate
    export interface ProjectKubeNodePoolUpdate {
        desiredNodes?: number;
        maxNodes?: number;
        minNodes?: number;
    }
    // interface fullName: cloud.ProjectKubeResetCreation.ProjectKubeResetCreation
    export interface ProjectKubeResetCreation {
        version?: cloud.kube.VersionEnum;
        workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicyEnum;
    }
    // interface fullName: cloud.ProjectKubeUpdate.ProjectKubeUpdate
    export interface ProjectKubeUpdate {
        name: string;
    }
    // interface fullName: cloud.ProjectKubeUpdateCreation.ProjectKubeUpdateCreation
    export interface ProjectKubeUpdateCreation {
        strategy?: cloud.kube.UpdateStrategyEnum;
    }
    // interface fullName: cloud.ProjectKubeUpdatePolicyUpdate.ProjectKubeUpdatePolicyUpdate
    export interface ProjectKubeUpdatePolicyUpdate {
        updatePolicy: cloud.kube.UpdatePolicyEnum;
    }
    // interface fullName: cloud.ProjectMigrationUpdate.ProjectMigrationUpdate
    export interface ProjectMigrationUpdate {
        date: string;
    }
    // interface fullName: cloud.ProjectNetworkPrivateCreation.ProjectNetworkPrivateCreation
    export interface ProjectNetworkPrivateCreation {
        name: string;
        regions?: string[];
        vlanId?: number;
    }
    // interface fullName: cloud.ProjectNetworkPrivateRegionCreation.ProjectNetworkPrivateRegionCreation
    export interface ProjectNetworkPrivateRegionCreation {
        region: string;
    }
    // interface fullName: cloud.ProjectNetworkPrivateSubnetCreation.ProjectNetworkPrivateSubnetCreation
    export interface ProjectNetworkPrivateSubnetCreation {
        dhcp: boolean;
        end: string;
        network: string;
        noGateway: boolean;
        region: string;
        start: string;
    }
    // interface fullName: cloud.ProjectNetworkPrivateSubnetUpdate.ProjectNetworkPrivateSubnetUpdate
    export interface ProjectNetworkPrivateSubnetUpdate {
        dhcp: boolean;
        disableGateway: boolean;
        gatewayIp?: string;
    }
    // interface fullName: cloud.ProjectNetworkPrivateUpdate.ProjectNetworkPrivateUpdate
    export interface ProjectNetworkPrivateUpdate {
        name: string;
    }
    // interface fullName: cloud.ProjectRegionCreation.ProjectRegionCreation
    export interface ProjectRegionCreation {
        region: string;
    }
    // interface fullName: cloud.ProjectRegionQuotaCreation.ProjectRegionQuotaCreation
    export interface ProjectRegionQuotaCreation {
        name: string;
    }
    // interface fullName: cloud.ProjectRegionWorkflowBackupCreation.ProjectRegionWorkflowBackupCreation
    export interface ProjectRegionWorkflowBackupCreation {
        cron: string;
        instanceId: string;
        maxExecutionCount?: number;
        name: string;
        rotation: number;
    }
    // interface fullName: cloud.ProjectSshkeyCreation.ProjectSshkeyCreation
    export interface ProjectSshkeyCreation {
        name: string;
        publicKey: string;
        region?: string;
    }
    // interface fullName: cloud.ProjectStorageCorsCreation.ProjectStorageCorsCreation
    export interface ProjectStorageCorsCreation {
        origin: string;
    }
    // interface fullName: cloud.ProjectStorageCreation.ProjectStorageCreation
    export interface ProjectStorageCreation {
        archive: boolean;
        containerName: string;
        region: string;
    }
    // interface fullName: cloud.ProjectStoragePublicUrlCreation.ProjectStoragePublicUrlCreation
    export interface ProjectStoragePublicUrlCreation {
        expirationDate: string;
        objectName: string;
    }
    // interface fullName: cloud.ProjectStorageUpdate.ProjectStorageUpdate
    export interface ProjectStorageUpdate {
        containerType?: cloud.storage.TypeEnum;
    }
    // interface fullName: cloud.ProjectStorageUserCreation.ProjectStorageUserCreation
    export interface ProjectStorageUserCreation {
        description?: string;
        right: cloud.storage.RightEnum;
    }
    // interface fullName: cloud.ProjectUserCreation.ProjectUserCreation
    export interface ProjectUserCreation {
        description?: string;
        role?: cloud.user.RoleEnum;
        roles?: cloud.user.RoleEnum[];
    }
    // interface fullName: cloud.ProjectUserRoleCreation.ProjectUserRoleCreation
    export interface ProjectUserRoleCreation {
        roleId: string;
    }
    // interface fullName: cloud.ProjectUserRoleUpdate.ProjectUserRoleUpdate
    export interface ProjectUserRoleUpdate {
        rolesIds: string[];
    }
    // interface fullName: cloud.ProjectUserTokenCreation.ProjectUserTokenCreation
    export interface ProjectUserTokenCreation {
        password: string;
    }
    // interface fullName: cloud.ProjectVolumeAttachCreation.ProjectVolumeAttachCreation
    export interface ProjectVolumeAttachCreation {
        instanceId: string;
    }
    // interface fullName: cloud.ProjectVolumeCreation.ProjectVolumeCreation
    export interface ProjectVolumeCreation {
        description?: string;
        imageId?: string;
        name?: string;
        region: string;
        size: number;
        snapshotId?: string;
        type: cloud.volume.VolumeTypeEnum;
    }
    // interface fullName: cloud.ProjectVolumeDetachCreation.ProjectVolumeDetachCreation
    export interface ProjectVolumeDetachCreation {
        instanceId: string;
    }
    // interface fullName: cloud.ProjectVolumeSnapshotCreation.ProjectVolumeSnapshotCreation
    export interface ProjectVolumeSnapshotCreation {
        description?: string;
        name?: string;
    }
    // interface fullName: cloud.ProjectVolumeUpdate.ProjectVolumeUpdate
    export interface ProjectVolumeUpdate {
        description?: string;
        name?: string;
    }
    // interface fullName: cloud.ProjectVolumeUpsizeCreation.ProjectVolumeUpsizeCreation
    export interface ProjectVolumeUpsizeCreation {
        size: number;
    }
    // interface fullName: cloud.Region.Region
    export interface Region {
        continentCode: cloud.RegionContinentEnum;
        datacenterLocation: string;
        ipCountries: cloud.IpCountryEnum[];
        name: string;
        services: cloud.Component[];
        status: cloud.RegionStatusEnum;
    }
    // type fullname: cloud.RegionContinent
    export type RegionContinent = "EU" | "NA" | "US" | "ASIA"
    // type fullname: cloud.RegionContinentEnum
    export type RegionContinentEnum = "EU" | "NA" | "US" | "ASIA"
    // type fullname: cloud.RegionStatus
    export type RegionStatus = "UP" | "DOWN" | "MAINTENANCE"
    // type fullname: cloud.RegionStatusEnum
    export type RegionStatusEnum = "UP" | "DOWN" | "MAINTENANCE"
    // type fullname: cloud.ServiceStatus
    export type ServiceStatus = "UP" | "DOWN"
    // type fullname: cloud.ServiceStatusEnum
    export type ServiceStatusEnum = "UP" | "DOWN"
    // interface fullName: cloud.SnapshotPrice.SnapshotPrice
    export interface SnapshotPrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    // interface fullName: cloud.StoragePrice.StoragePrice
    export interface StoragePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    // interface fullName: cloud.VolumePrice.VolumePrice
    export interface VolumePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
        volumeName: string;
    }
    // interface fullName: cloud.Vrack.Vrack
    export interface Vrack {
        description: string;
        id: string;
        name: string;
    }
    export namespace authentication {
        // interface fullName: cloud.authentication.Catalog.Catalog
        export interface Catalog {
            endpoints: cloud.authentication.Endpoint[];
            id: string;
            type: string;
        }
        // interface fullName: cloud.authentication.Domain.Domain
        export interface Domain {
            name: string;
        }
        // interface fullName: cloud.authentication.Endpoint.Endpoint
        export interface Endpoint {
            id: string;
            interface: string;
            legacy_endpoint_id: string;
            region_id: string;
            service_id: string;
            url: string;
        }
        // interface fullName: cloud.authentication.OpenstackToken.OpenstackToken
        export interface OpenstackToken {
            catalog: cloud.authentication.Catalog[];
            expires_at: string;
            issued_at: string;
            methods: string[];
            project: cloud.authentication.TokenProject;
            roles: cloud.authentication.Role[];
            user: cloud.authentication.UserToken;
        }
        // interface fullName: cloud.authentication.Role.Role
        export interface Role {
            id: string;
            name: string;
        }
        // interface fullName: cloud.authentication.Token.Token
        export interface Token {
            'X-Auth-Token': string;
            token: cloud.authentication.OpenstackToken;
        }
        // interface fullName: cloud.authentication.TokenProject.TokenProject
        export interface TokenProject {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
        // interface fullName: cloud.authentication.UserToken.UserToken
        export interface UserToken {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
    }
    export namespace billingView {
        // interface fullName: cloud.billingView.BandwidthInstance.BandwidthInstance
        export interface BandwidthInstance {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.BandwidthStorage.BandwidthStorage
        export interface BandwidthStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.Component.Component
        export interface Component {
            name: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.HourlyInstance.HourlyInstance
        export interface HourlyInstance {
            details: cloud.billingView.HourlyInstanceDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.HourlyInstanceBandwidth.HourlyInstanceBandwidth
        export interface HourlyInstanceBandwidth {
            incomingBandwidth?: cloud.billingView.BandwidthInstance;
            outgoingBandwidth?: cloud.billingView.BandwidthInstance;
            region: string;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.HourlyInstanceDetail.HourlyInstanceDetail
        export interface HourlyInstanceDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.HourlyInstanceOption.HourlyInstanceOption
        export interface HourlyInstanceOption {
            details: cloud.billingView.HourlyInstanceOptionDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.HourlyInstanceOptionDetail.HourlyInstanceOptionDetail
        export interface HourlyInstanceOptionDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.HourlyResources.HourlyResources
        export interface HourlyResources {
            instance: cloud.billingView.HourlyInstance[];
            instanceBandwidth: cloud.billingView.HourlyInstanceBandwidth[];
            instanceOption: cloud.billingView.HourlyInstanceOption[];
            snapshot: cloud.billingView.HourlySnapshot[];
            storage: cloud.billingView.HourlyStorage[];
            volume: cloud.billingView.HourlyVolume[];
        }
        // interface fullName: cloud.billingView.HourlySnapshot.HourlySnapshot
        export interface HourlySnapshot {
            instance?: cloud.billingView.InstanceSnapshot;
            region: string;
            totalPrice: number;
            volume?: cloud.billingView.VolumeSnapshot;
        }
        // interface fullName: cloud.billingView.HourlyStorage.HourlyStorage
        export interface HourlyStorage {
            incomingBandwidth?: cloud.billingView.BandwidthStorage;
            outgoingBandwidth?: cloud.billingView.BandwidthStorage;
            region: string;
            stored?: cloud.billingView.StoredStorage;
            totalPrice: number;
            type: cloud.billingView.StorageTypeEnum;
        }
        // interface fullName: cloud.billingView.HourlyVolume.HourlyVolume
        export interface HourlyVolume {
            details: cloud.billingView.HourlyVolumeDetail[];
            quantity: cloud.billingView.Quantity;
            region: string;
            totalPrice: number;
            type: string;
        }
        // interface fullName: cloud.billingView.HourlyVolumeDetail.HourlyVolumeDetail
        export interface HourlyVolumeDetail {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
            volumeId: string;
        }
        // interface fullName: cloud.billingView.InstanceSnapshot.InstanceSnapshot
        export interface InstanceSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.MonthlyInstance.MonthlyInstance
        export interface MonthlyInstance {
            details: cloud.billingView.MonthlyInstanceDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.MonthlyInstanceDetail.MonthlyInstanceDetail
        export interface MonthlyInstanceDetail {
            activation: string;
            instanceId: string;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.MonthlyInstanceOption.MonthlyInstanceOption
        export interface MonthlyInstanceOption {
            details: cloud.billingView.MonthlyInstanceOptionDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.MonthlyInstanceOptionDetail.MonthlyInstanceOptionDetail
        export interface MonthlyInstanceOptionDetail {
            instanceId: string;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.MonthlyResources.MonthlyResources
        export interface MonthlyResources {
            instance: cloud.billingView.MonthlyInstance[];
            instanceOption: cloud.billingView.MonthlyInstanceOption[];
        }
        // interface fullName: cloud.billingView.Quantity.Quantity
        export interface Quantity {
            unit: cloud.billingView.UnitQuantityEnum;
            value: number;
        }
        // interface fullName: cloud.billingView.RegionalizedResource.RegionalizedResource
        export interface RegionalizedResource {
            components: cloud.billingView.Component[];
            region: string;
        }
        // type fullname: cloud.billingView.StorageTypeEnum
        export type StorageTypeEnum = "pcs" | "pca"
        // interface fullName: cloud.billingView.StoredStorage.StoredStorage
        export interface StoredStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        // interface fullName: cloud.billingView.TypedResources.TypedResources
        export interface TypedResources {
            resources: cloud.billingView.RegionalizedResource[];
            totalPrice: number;
            type: string;
        }
        // type fullname: cloud.billingView.UnitQuantity
        export type UnitQuantity = "GiB" | "GiBh" | "Hour"
        // type fullname: cloud.billingView.UnitQuantityEnum
        export type UnitQuantityEnum = "GiB" | "GiBh" | "Hour" | "Minute" | "Second"
        // interface fullName: cloud.billingView.UsedCredit.UsedCredit
        export interface UsedCredit {
            description: string;
            id: number;
            usedAmount: number;
        }
        // interface fullName: cloud.billingView.UsedCredits.UsedCredits
        export interface UsedCredits {
            details: cloud.billingView.UsedCredit[];
            totalCredit: number;
        }
        // interface fullName: cloud.billingView.VolumeSnapshot.VolumeSnapshot
        export interface VolumeSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
    }
    export namespace capabilities {
        // interface fullName: cloud.capabilities.Capability.Capability
        export interface Capability {
            enabled: boolean;
            name: string;
        }
    }
    export namespace common {
        // interface fullName: cloud.common.VoucherValidity.VoucherValidity
        export interface VoucherValidity {
            from?: string;
            to?: string;
        }
    }
    export namespace containerRegistry {
        // interface fullName: cloud.containerRegistry.Capability.Capability
        export interface Capability {
            plans: cloud.containerRegistry.Plan[];
            regionName: string;
        }
        // interface fullName: cloud.containerRegistry.Features.Features
        export interface Features {
            vulnerability: boolean;
        }
        // interface fullName: cloud.containerRegistry.Limits.Limits
        export interface Limits {
            imageStorage: number;
            parallelRequest: number;
        }
        // interface fullName: cloud.containerRegistry.Plan.Plan
        export interface Plan {
            createdAt: string;
            features: cloud.containerRegistry.Features;
            id: string;
            name: string;
            registryLimits: cloud.containerRegistry.Limits;
            updatedAt: string;
        }
        // interface fullName: cloud.containerRegistry.PlanUpdate.PlanUpdate
        export interface PlanUpdate {
            planID: string;
        }
        // interface fullName: cloud.containerRegistry.Registry.Registry
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
        // type fullname: cloud.containerRegistry.StatusEnum
        export type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING"
        // interface fullName: cloud.containerRegistry.User.User
        export interface User {
            email: string;
            id: string;
            password?: string;
            user: string;
        }
        export namespace registry {
            // type fullname: cloud.containerRegistry.registry.RegionEnum
            export type RegionEnum = "GRA7"
            // interface fullName: cloud.containerRegistry.registry.Registry.Registry
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
            // type fullname: cloud.containerRegistry.registry.StatusEnum
            export type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING"
        }
        export namespace user {
            // interface fullName: cloud.containerRegistry.user.User.User
            export interface User {
                email: string;
                id: string;
                password?: string;
                user: string;
            }
        }
    }
    export namespace flavor {
        // interface fullName: cloud.flavor.Capability.Capability
        export interface Capability {
            enabled: boolean;
            name: cloud.flavor.CapabilityNameEnum;
        }
        // type fullname: cloud.flavor.CapabilityNameEnum
        export type CapabilityNameEnum = "resize" | "snapshot" | "volume" | "failoverip"
        // interface fullName: cloud.flavor.Flavor.Flavor
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
        // interface fullName: cloud.flavor.FlavorPlanCodes.FlavorPlanCodes
        export interface FlavorPlanCodes {
            hourly?: string;
            monthly?: string;
        }
    }
    export namespace forecast {
        // interface fullName: cloud.forecast.ProjectForecast.ProjectForecast
        export interface ProjectForecast {
            lastMetric: string;
            projectForecast: orderPrice;
        }
    }
    export namespace image {
        // interface fullName: cloud.image.Image.Image
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
        // type fullname: cloud.image.OSTypeEnum
        export type OSTypeEnum = "linux" | "bsd" | "windows"
    }
    export namespace instance {
        // interface fullName: cloud.instance.Access.Access
        export interface Access {
            login: string;
            password: string;
            type: string;
            url: string;
        }
        // interface fullName: cloud.instance.ApplicationAccess.ApplicationAccess
        export interface ApplicationAccess {
            accesses: cloud.instance.Access[];
            status: cloud.instance.ApplicationAccessStateEnum;
        }
        // type fullname: cloud.instance.ApplicationAccessStateEnum
        export type ApplicationAccessStateEnum = "installing" | "ok"
        // interface fullName: cloud.instance.AutoBackup.AutoBackup
        export interface AutoBackup {
            cron: string;
            rotation: number;
        }
        // interface fullName: cloud.instance.Instance.Instance
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
        // interface fullName: cloud.instance.InstanceDetail.InstanceDetail
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
        // interface fullName: cloud.instance.InstanceMetrics.InstanceMetrics
        export interface InstanceMetrics {
            unit: string;
            values: cloud.instance.InstanceMetricsValue[];
        }
        // interface fullName: cloud.instance.InstanceMetricsValue.InstanceMetricsValue
        export interface InstanceMetricsValue {
            timestamp: number;
            value: number;
        }
        // type fullname: cloud.instance.InstanceStatusEnum
        export type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "DELETING" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING"
        // interface fullName: cloud.instance.InstanceVnc.InstanceVnc
        export interface InstanceVnc {
            type: string;
            url: string;
        }
        // interface fullName: cloud.instance.IpAddress.IpAddress
        export interface IpAddress {
            gatewayIp?: string;
            ip: string;
            networkId: string;
            type: string;
            version: number;
        }
        // type fullname: cloud.instance.MetricsPeriod
        export type MetricsPeriod = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        // type fullname: cloud.instance.MetricsPeriodEnum
        export type MetricsPeriodEnum = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        // type fullname: cloud.instance.MetricsType
        export type MetricsType = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
        // type fullname: cloud.instance.MetricsTypeEnum
        export type MetricsTypeEnum = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
        // interface fullName: cloud.instance.MonthlyBilling.MonthlyBilling
        export interface MonthlyBilling {
            since: string;
            status: cloud.instance.MonthlyBillingStatusEnum;
        }
        // type fullname: cloud.instance.MonthlyBillingStatusEnum
        export type MonthlyBillingStatusEnum = "activationPending" | "ok"
        // interface fullName: cloud.instance.MonthlyInstanceBulkParams.MonthlyInstanceBulkParams
        export interface MonthlyInstanceBulkParams {
            instanceId: string;
            region: string;
        }
        // interface fullName: cloud.instance.NetworkBulkParams.NetworkBulkParams
        export interface NetworkBulkParams {
            networkId: string;
        }
        // interface fullName: cloud.instance.NetworkParams.NetworkParams
        export interface NetworkParams {
            ip?: string;
            networkId: string;
        }
        // type fullname: cloud.instance.RebootTypeEnum
        export type RebootTypeEnum = "soft" | "hard"
        // interface fullName: cloud.instance.RescueAdminPassword.RescueAdminPassword
        export interface RescueAdminPassword {
            adminPassword?: string;
        }
    }
    export namespace instanceInterface {
        // interface fullName: cloud.instanceInterface.FixedIp.FixedIp
        export interface FixedIp {
            ip: string;
            subnetId: string;
        }
        // interface fullName: cloud.instanceInterface.Interface.Interface
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
        // interface fullName: cloud.instancegroup.InstanceGroup.InstanceGroup
        export interface InstanceGroup {
            id: string;
            instance_ids: string[];
            name: string;
            region: string;
            type: cloud.instancegroup.InstanceGroupTypeEnum;
        }
        // type fullname: cloud.instancegroup.InstanceGroupTypeEnum
        export type InstanceGroupTypeEnum = "affinity" | "anti-affinity"
    }
    export namespace ip {
        // interface fullName: cloud.ip.CloudIp.CloudIp
        export interface CloudIp {
            id: string;
            ip?: string;
            status: cloud.ip.IpStatusEnum;
            type: string;
        }
        // interface fullName: cloud.ip.FailoverIp.FailoverIp
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
        // type fullname: cloud.ip.IpStatusEnum
        export type IpStatusEnum = "ok" | "operationPending"
        // type fullname: cloud.ip.IpSubTypeEnum
        export type IpSubTypeEnum = "cloud" | "ovh"
    }
    export namespace kube {
        // interface fullName: cloud.kube.Cluster.Cluster
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
        // type fullname: cloud.kube.ClusterStatus
        export type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
        // type fullname: cloud.kube.ClusterStatusEnum
        export type ClusterStatusEnum = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
        // interface fullName: cloud.kube.Flavor.Flavor
        export interface Flavor {
            category: cloud.kube.FlavorCategoryEnum;
            name: string;
            state: cloud.kube.FlavorStateEnum;
        }
        // type fullname: cloud.kube.FlavorCategory
        export type FlavorCategory = "c" | "g" | "t" | "b" | "r"
        // type fullname: cloud.kube.FlavorCategoryEnum
        export type FlavorCategoryEnum = "c" | "g" | "t" | "b" | "r" | "i"
        // type fullname: cloud.kube.FlavorState
        export type FlavorState = "available" | "unavailable"
        // type fullname: cloud.kube.FlavorStateEnum
        export type FlavorStateEnum = "available" | "unavailable"
        // interface fullName: cloud.kube.Kubeconfig.Kubeconfig
        export interface Kubeconfig {
            content: string;
        }
        // interface fullName: cloud.kube.Node.Node
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
        // interface fullName: cloud.kube.NodePool.NodePool
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
        // type fullname: cloud.kube.NodePoolSizeStatusEnum
        export type NodePoolSizeStatusEnum = "UNDER_CAPACITY" | "CAPACITY_OK" | "OVER_CAPACITY"
        // type fullname: cloud.kube.NodePoolStatusEnum
        export type NodePoolStatusEnum = "INSTALLING" | "UPDATING" | "REDEPLOYING" | "RESIZING" | "RESETTING" | "DELETING" | "ERROR" | "READY"
        // type fullname: cloud.kube.NodeStatus
        export type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
        // type fullname: cloud.kube.NodeStatusEnum
        export type NodeStatusEnum = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
        // type fullname: cloud.kube.Region
        export type Region = "GRA5" | "GRA7" | "BHS5"
        // type fullname: cloud.kube.RegionEnum
        export type RegionEnum = "GRA5" | "GRA7" | "BHS5"
        // type fullname: cloud.kube.ResetWorkerNodesPolicy
        export type ResetWorkerNodesPolicy = "reinstall" | "delete"
        // type fullname: cloud.kube.ResetWorkerNodesPolicyEnum
        export type ResetWorkerNodesPolicyEnum = "reinstall" | "delete"
        // type fullname: cloud.kube.UpdatePolicy
        export type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
        // type fullname: cloud.kube.UpdatePolicyEnum
        export type UpdatePolicyEnum = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
        // type fullname: cloud.kube.UpdateStrategy
        export type UpdateStrategy = "LATEST_PATCH" | "NEXT_MINOR"
        // type fullname: cloud.kube.UpdateStrategyEnum
        export type UpdateStrategyEnum = "LATEST_PATCH" | "NEXT_MINOR"
        // type fullname: cloud.kube.UpgradeVersion
        export type UpgradeVersion = "1.12" | "1.13" | "1.14" | "1.15" | "1.16"
        // type fullname: cloud.kube.UpgradeVersionEnum
        export type UpgradeVersionEnum = "1.12" | "1.13" | "1.14" | "1.15" | "1.16" | "1.17"
        // type fullname: cloud.kube.Version
        export type Version = "1.13" | "1.14" | "1.15"
        // type fullname: cloud.kube.VersionEnum
        export type VersionEnum = "1.14" | "1.15" | "1.16" | "1.17"
    }
    export namespace migration {
        // interface fullName: cloud.migration.Migration.Migration
        export interface Migration {
            date: string;
            migrationId: string;
            resourceId: string;
            resourceType: cloud.migration.ResourceTypeEnum;
        }
        // type fullname: cloud.migration.ResourceTypeEnum
        export type ResourceTypeEnum = "instance"
    }
    export namespace network {
        // interface fullName: cloud.network.IPPool.IPPool
        export interface IPPool {
            dhcp: boolean;
            end: string;
            network: string;
            region: string;
            start: string;
        }
        // interface fullName: cloud.network.Network.Network
        export interface Network {
            id: string;
            name: string;
            regions: cloud.network.NetworkRegion[];
            status: cloud.network.NetworkStatusEnum;
            type?: cloud.network.NetworkTypeEnum;
            vlanId: number;
        }
        // interface fullName: cloud.network.NetworkRegion.NetworkRegion
        export interface NetworkRegion {
            region: string;
            status: cloud.network.NetworkRegionStatusEnum;
        }
        // type fullname: cloud.network.NetworkRegionStatusEnum
        export type NetworkRegionStatusEnum = "ACTIVE" | "BUILDING"
        // type fullname: cloud.network.NetworkStatusEnum
        export type NetworkStatusEnum = "BUILDING" | "ACTIVE" | "DELETING"
        // type fullname: cloud.network.NetworkTypeEnum
        export type NetworkTypeEnum = "public" | "private"
        // interface fullName: cloud.network.Subnet.Subnet
        export interface Subnet {
            cidr: string;
            gatewayIp?: string;
            id: string;
            ipPools: cloud.network.IPPool[];
        }
    }
    export namespace openstackClient {
        // interface fullName: cloud.openstackClient.Profile.Profile
        export interface Profile {
            name: string;
        }
        // interface fullName: cloud.openstackClient.Session.Session
        export interface Session {
            expires: string;
            id: string;
            profile: cloud.openstackClient.Profile;
            websocket: string;
        }
    }
    export namespace order {
        // interface fullName: cloud.order.Order.Order
        export interface Order {
            date: string;
            orderId: number;
            planCode: string;
            serviceName?: string;
            status: cloud.order.StatusEnum;
        }
        // type fullname: cloud.order.StatusEnum
        export type StatusEnum = "unpaid" | "delivering" | "delivered" | "unknown"
    }
    export namespace pca {
        // type fullname: cloud.pca.BillingRefEnum
        export type BillingRefEnum = "backup" | "delete" | "restore"
        // interface fullName: cloud.pca.DownloadCredentials.DownloadCredentials
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
        // type fullname: cloud.pca.FunctionTypeEnum
        export type FunctionTypeEnum = "createUser" | "delete" | "restore" | "setPassword" | "setSessionName" | "setSshKey"
        // type fullname: cloud.pca.SessionStateEnum
        export type SessionStateEnum = "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore"
        // type fullname: cloud.pca.TaskStateEnum
        export type TaskStateEnum = "cancelled" | "deleted" | "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore" | "todo"
        // type fullname: cloud.pca.TaskTypeEnum
        export type TaskTypeEnum = "delete" | "restore"
        // interface fullName: cloud.pca.TransferState.TransferState
        export interface TransferState {
            agreements?: number[];
            projectId: string;
            state: cloud.pca.TransferStateEnum;
            transferDate?: string;
        }
        // type fullname: cloud.pca.TransferStateEnum
        export type TransferStateEnum = "deleted" | "transferred" | "untransferred" | "waitingAgreementsValidation"
    }
    export namespace project {
        // interface fullName: cloud.project.BandwidthStorageUsage.BandwidthStorageUsage
        export interface BandwidthStorageUsage {
            downloadedBytes: number;
            region: string;
            total: orderPrice;
        }
        // interface fullName: cloud.project.Bill.Bill
        export interface Bill {
            billId: string;
            type: cloud.project.BillTypeEnum;
        }
        // type fullname: cloud.project.BillTypeEnum
        export type BillTypeEnum = "creditPurchased" | "monthlyConsumption" | "monthlyInstanceActivation"
        // interface fullName: cloud.project.CurrentUsage.CurrentUsage
        export interface CurrentUsage {
            instances: cloud.project.InstancesUsage;
            snapshots: cloud.project.SnapshotsUsage;
            storage: cloud.project.StorageUsage;
            total: orderPrice;
            volumeSnapshots: cloud.project.SnapshotsUsage;
            volumes: cloud.project.VolumesUsage;
        }
        // type fullname: cloud.project.EligibilityAction
        export type EligibilityAction = "addPaymentMethod" | "askIncreaseProjectsQuota" | "challengePaymentMethod" | "verifyPaypal"
        // interface fullName: cloud.project.EligibilityInfo.EligibilityInfo
        export interface EligibilityInfo {
            actionsRequired?: cloud.project.EligibilityAction[];
            minimumCredit?: orderPrice;
            paymentMethodsAuthorized?: cloud.project.PaymentMethodAuthorized[];
            voucher?: cloud.project.NewProjectInfoVoucher;
        }
        // interface fullName: cloud.project.InstanceMonthlyBilling.InstanceMonthlyBilling
        export interface InstanceMonthlyBilling {
            activatedOn: string;
            cost: orderPrice;
        }
        // interface fullName: cloud.project.InstanceUsageDetail.InstanceUsageDetail
        export interface InstanceUsageDetail {
            hourly?: orderPrice;
            instanceId: string;
            monthly?: cloud.project.InstanceMonthlyBilling;
            monthlyBilling: boolean;
            reference: string;
        }
        // interface fullName: cloud.project.InstancesUsage.InstancesUsage
        export interface InstancesUsage {
            detail: cloud.project.InstanceUsageDetail[];
            total: orderPrice;
        }
        // interface fullName: cloud.project.NewProject.NewProject
        export interface NewProject {
            agreements?: number[];
            credit?: cloud.project.NewProjectCredit;
            description?: string;
            orderId?: number;
            project?: string;
            status: cloud.project.NewProjectStatusEnum;
        }
        // interface fullName: cloud.project.NewProjectCredit.NewProjectCredit
        export interface NewProjectCredit {
            description?: string;
            id: number;
            products?: string[];
            total_credit: orderPrice;
            validity?: cloud.common.VoucherValidity;
        }
        // interface fullName: cloud.project.NewProjectInfo.NewProjectInfo
        export interface NewProjectInfo {
            agreements?: number[];
            error?: cloud.project.NewProjectInfoError;
            order?: orderPrice;
            voucher?: cloud.project.NewProjectInfoVoucher;
        }
        // interface fullName: cloud.project.NewProjectInfoError.NewProjectInfoError
        export interface NewProjectInfoError {
            code: cloud.project.NewProjectInfoErrorCodeEnum;
            message: string;
        }
        // type fullname: cloud.project.NewProjectInfoErrorCodeEnum
        export type NewProjectInfoErrorCodeEnum = "accountNotEligible" | "challengePaymentMethodRequested" | "invalidPaymentMean" | "maxProjectsLimitReached" | "paypalAccountNotVerified" | "unpaidDebts"
        // interface fullName: cloud.project.NewProjectInfoVoucher.NewProjectInfoVoucher
        export interface NewProjectInfoVoucher {
            credit: orderPrice;
            paymentMethodRequired: boolean;
        }
        // type fullname: cloud.project.NewProjectStatusEnum
        export type NewProjectStatusEnum = "creating" | "ok" | "validationPending" | "waitingAgreementsValidation"
        // type fullname: cloud.project.PaymentMethodAuthorized
        export type PaymentMethodAuthorized = "bankAccount" | "credit" | "creditCard" | "paypal"
        // interface fullName: cloud.project.ProductAgreements.ProductAgreements
        export interface ProductAgreements {
            agreementsToValidate?: number[];
            agreementsValidated?: number[];
        }
        // type fullname: cloud.project.ProductNameEnum
        export type ProductNameEnum = "registry"
        // type fullname: cloud.project.ProjectStatus
        export type ProjectStatus = "creating" | "deleted" | "deleting" | "ok" | "suspended"
        // type fullname: cloud.project.ProjectStatusEnum
        export type ProjectStatusEnum = "creating" | "deleted" | "deleting" | "ok" | "suspended"
        // interface fullName: cloud.project.ProjectUsage.ProjectUsage
        export interface ProjectUsage {
            current: cloud.project.CurrentUsage;
        }
        // interface fullName: cloud.project.SnapshotUsageDetail.SnapshotUsageDetail
        export interface SnapshotUsageDetail {
            price: orderPrice;
            region: string;
            storedSize: complexType.UnitAndValue<number>;
        }
        // interface fullName: cloud.project.SnapshotsUsage.SnapshotsUsage
        export interface SnapshotsUsage {
            detail: cloud.project.SnapshotUsageDetail[];
            total: orderPrice;
        }
        // interface fullName: cloud.project.StorageUsage.StorageUsage
        export interface StorageUsage {
            bandwidth: cloud.project.BandwidthStorageUsage[];
            total: orderPrice;
            volume: cloud.project.StorageVolumeUsage[];
        }
        // interface fullName: cloud.project.StorageVolumeUsage.StorageVolumeUsage
        export interface StorageVolumeUsage {
            region: string;
            storedBytes: number;
            total: orderPrice;
        }
        // type fullname: cloud.project.VolumeType
        export type VolumeType = "classic" | "high-speed"
        // interface fullName: cloud.project.VolumeUsageDetail.VolumeUsageDetail
        export interface VolumeUsageDetail {
            price: orderPrice;
            volumeCapacity: complexType.UnitAndValue<number>;
            volumeId: string;
            volumeType: cloud.project.VolumeType;
        }
        // interface fullName: cloud.project.VolumesUsage.VolumesUsage
        export interface VolumesUsage {
            detail: cloud.project.VolumeUsageDetail[];
            total: orderPrice;
        }
    }
    export namespace quota {
        // interface fullName: cloud.quota.AllowedQuota.AllowedQuota
        export interface AllowedQuota {
            compute: cloud.quota.ComputeQuota;
            name: string;
            network: cloud.quota.NetworkQuota;
            volume: cloud.quota.VolumeQuota;
        }
        // interface fullName: cloud.quota.ComputeQuota.ComputeQuota
        export interface ComputeQuota {
            cores: number;
            instances: number;
            ram: number;
        }
        // interface fullName: cloud.quota.InstanceUsageQuotas.InstanceUsageQuotas
        export interface InstanceUsageQuotas {
            maxCores: number;
            maxInstances: number;
            maxRam: number;
            usedCores: number;
            usedInstances: number;
            usedRAM: number;
        }
        // interface fullName: cloud.quota.KeypairQuotas.KeypairQuotas
        export interface KeypairQuotas {
            maxCount: number;
        }
        // interface fullName: cloud.quota.NetworkQuota.NetworkQuota
        export interface NetworkQuota {
            networks: number;
            ports: number;
            subnets: number;
        }
        // interface fullName: cloud.quota.Quotas.Quotas
        export interface Quotas {
            instance?: cloud.quota.InstanceUsageQuotas;
            keypair?: cloud.quota.KeypairQuotas;
            region: string;
            volume?: cloud.quota.VolumeUsageQuotas;
        }
        // interface fullName: cloud.quota.VolumeQuota.VolumeQuota
        export interface VolumeQuota {
            gigabytes: number;
            snapshots: number;
            volumes: number;
        }
        // interface fullName: cloud.quota.VolumeUsageQuotas.VolumeUsageQuotas
        export interface VolumeUsageQuotas {
            maxGigabytes: number;
            usedGigabytes: number;
            volumeCount: number;
        }
    }
    export namespace role {
        // interface fullName: cloud.role.Permission.Permission
        export interface Permission {
            label: string;
            roles: string[];
        }
        // interface fullName: cloud.role.Role.Role
        export interface Role {
            description: string;
            id: string;
            name: string;
            permissions: string[];
        }
        // interface fullName: cloud.role.Roles.Roles
        export interface Roles {
            roles: cloud.role.Role[];
            services: cloud.role.Service[];
        }
        // interface fullName: cloud.role.Service.Service
        export interface Service {
            name: string;
            permissions: cloud.role.Permission[];
        }
    }
    export namespace sshkey {
        // interface fullName: cloud.sshkey.SshKey.SshKey
        export interface SshKey {
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
        // interface fullName: cloud.sshkey.SshKeyDetail.SshKeyDetail
        export interface SshKeyDetail {
            fingerPrint: string;
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
    }
    export namespace stack {
        // interface fullName: cloud.stack.Content.Content
        export interface Content {
            content: string;
            type: string;
        }
        // interface fullName: cloud.stack.InstructionGuide.InstructionGuide
        export interface InstructionGuide {
            content: cloud.stack.Content[];
            language: string;
            sections: cloud.stack.Section[];
            title: string;
        }
        // interface fullName: cloud.stack.Section.Section
        export interface Section {
            content: cloud.stack.Content[];
            steps: cloud.stack.Step[];
            title: string;
        }
        // interface fullName: cloud.stack.Stack.Stack
        export interface Stack {
            commit: string;
            description: string;
            gitRepository: string;
            instructions: cloud.stack.InstructionGuide[];
            name: string;
            release: string;
            uuid: string;
        }
        // interface fullName: cloud.stack.Step.Step
        export interface Step {
            content: cloud.stack.Content[];
            title: string;
        }
    }
    export namespace storage {
        // interface fullName: cloud.storage.Container.Container
        export interface Container {
            id: string;
            name: string;
            region: string;
            storedBytes: number;
            storedObjects: number;
        }
        // interface fullName: cloud.storage.ContainerAccess.ContainerAccess
        export interface ContainerAccess {
            endpoints: cloud.storage.Endpoint[];
            token: string;
        }
        // interface fullName: cloud.storage.ContainerDetail.ContainerDetail
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
        // interface fullName: cloud.storage.ContainerObject.ContainerObject
        export interface ContainerObject {
            contentType: string;
            lastModified: string;
            name: string;
            retrievalDelay: number;
            retrievalState: cloud.storage.RetrievalStateEnum;
            size: number;
        }
        // interface fullName: cloud.storage.ContainerObjectTempURL.ContainerObjectTempURL
        export interface ContainerObjectTempURL {
            expirationDate: string;
            getURL: string;
        }
        // interface fullName: cloud.storage.Endpoint.Endpoint
        export interface Endpoint {
            region: string;
            url: string;
        }
        // type fullname: cloud.storage.RetrievalStateEnum
        export type RetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        // type fullname: cloud.storage.RightEnum
        export type RightEnum = "all" | "read" | "write"
        // type fullname: cloud.storage.TypeEnum
        export type TypeEnum = "static" | "public" | "private"
    }
    export namespace usage {
        // type fullname: cloud.usage.PaymentTypeEnum
        export type PaymentTypeEnum = "pre" | "post"
        // interface fullName: cloud.usage.Period.Period
        export interface Period {
            from: string;
            to: string;
        }
        // interface fullName: cloud.usage.UsageBill.UsageBill
        export interface UsageBill {
            bill_id: string;
            credit: number;
            part: number;
            payment_type: cloud.usage.PaymentTypeEnum;
            total: number;
        }
        // interface fullName: cloud.usage.UsageCurrent.UsageCurrent
        export interface UsageCurrent {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            resourcesUsage?: cloud.billingView.TypedResources[];
        }
        // interface fullName: cloud.usage.UsageCurrentBills.UsageCurrentBills
        export interface UsageCurrentBills {
            bills: cloud.usage.UsageBill[];
        }
        // interface fullName: cloud.usage.UsageForecast.UsageForecast
        export interface UsageForecast {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            resourcesUsage?: cloud.billingView.TypedResources[];
            usableCredits?: cloud.billingView.UsedCredits;
        }
        // interface fullName: cloud.usage.UsageHistory.UsageHistory
        export interface UsageHistory {
            id: string;
            lastUpdate: string;
            period: cloud.usage.Period;
        }
        // interface fullName: cloud.usage.UsageHistoryDetail.UsageHistoryDetail
        export interface UsageHistoryDetail {
            hourlyUsage?: cloud.billingView.HourlyResources;
            id: string;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            resourcesUsage?: cloud.billingView.TypedResources[];
        }
        // interface fullName: cloud.usage.UsageHistoryDetailBills.UsageHistoryDetailBills
        export interface UsageHistoryDetailBills {
            bills: cloud.usage.UsageBill[];
        }
    }
    export namespace user {
        // interface fullName: cloud.user.Openrc.Openrc
        export interface Openrc {
            content: string;
        }
        // type fullname: cloud.user.OpenrcVersionEnum
        export type OpenrcVersionEnum = "v2.0" | "v3"
        // interface fullName: cloud.user.Rclone.Rclone
        export interface Rclone {
            content: string;
        }
        // type fullname: cloud.user.RoleEnum
        export type RoleEnum = "admin" | "authentication" | "administrator" | "compute_operator" | "infrastructure_supervisor" | "network_security_operator" | "network_operator" | "backup_operator" | "image_operator" | "volume_operator" | "objectstore_operator"
        // interface fullName: cloud.user.User.User
        export interface User {
            creationDate: string;
            description: string;
            id: number;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        // interface fullName: cloud.user.UserDetail.UserDetail
        export interface UserDetail {
            creationDate: string;
            description: string;
            id: number;
            password: string;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        // type fullname: cloud.user.UserStatusEnum
        export type UserStatusEnum = "creating" | "ok" | "deleting" | "deleted"
    }
    export namespace volume {
        // interface fullName: cloud.volume.Snapshot.Snapshot
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
        // type fullname: cloud.volume.SnapshotStatusEnum
        export type SnapshotStatusEnum = "creating" | "available" | "deleting" | "error" | "error_deleting"
        // interface fullName: cloud.volume.Volume.Volume
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
        // type fullname: cloud.volume.VolumeTypeEnum
        export type VolumeTypeEnum = "classic" | "high-speed"
    }
}
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace nichandle {
    // type fullname: nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
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
export namespace pca {
    // interface fullName: pca.Account.Account
    export interface Account {
        domain: string;
        host: string;
        login: string;
        password: string;
        sshkey?: string;
    }
    // interface fullName: pca.Billing.Billing
    export interface Billing {
        billed: boolean;
        date: string;
        id: number;
        quantity: number;
        reference: cloud.pca.BillingRefEnum;
        total: number;
    }
    // interface fullName: pca.File.File
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
    // interface fullName: pca.Session.Session
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
    // interface fullName: pca.Task.Task
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

/**
 * END API /cloud Models
 */
export function proxyCloud(ovhEngine: OvhRequestable): Cloud {
    return buildOvhProxy(ovhEngine, '/cloud');
}
export default proxyCloud;
/**
 * Api Proxy model
 */// Apis harmony
// path /cloud
export interface Cloud {
    // GET /cloud
    $get(): Promise<string[]>;
    agreements: {
        // GET /cloud/agreements
        $get(params: { product: cloud.project.ProductNameEnum }): Promise<cloud.project.ProductAgreements>;
    }
    createProject: {
        // POST /cloud/createProject
        $post(params?: { credit?: number, description?: string, voucher?: string }): Promise<cloud.project.NewProject>;
    }
    createProjectInfo: {
        // GET /cloud/createProjectInfo
        $get(params?: { voucher?: string }): Promise<cloud.project.NewProjectInfo>;
    }
    eligibility: {
        // GET /cloud/eligibility
        $get(params?: { voucher?: string }): Promise<cloud.project.EligibilityInfo>;
    }
    order: {
        // GET /cloud/order
        $get(params?: { planCode?: string }): Promise<cloud.order.Order[]>;
    }
    price: {
        // GET /cloud/price
        $get(params?: { flavorId?: string, region?: string }): Promise<cloud.Price>;
    }
    project: {
        // GET /cloud/project
        $get(): Promise<string[]>;
        $(serviceName: string): {
            // GET /cloud/project/{serviceName}
            $get(): Promise<cloud.Project>;
            // PUT /cloud/project/{serviceName}
            $put(params?: { access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: cloud.project.ProjectStatusEnum, unleash?: boolean }): Promise<void>;
            acl: {
                // GET /cloud/project/{serviceName}/acl
                $get(params?: { type?: cloud.AclTypeEnum }): Promise<string[]>;
                // POST /cloud/project/{serviceName}/acl
                $post(params: { accountId: string, type: cloud.AclTypeEnum }): Promise<cloud.Acl>;
                $(accountId: string): {
                    // DELETE /cloud/project/{serviceName}/acl/{accountId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/acl/{accountId}
                    $get(): Promise<cloud.Acl>;
                };
            }
            activateMonthlyBilling: {
                // POST /cloud/project/{serviceName}/activateMonthlyBilling
                $post(params: { instances: cloud.instance.MonthlyInstanceBulkParams[] }): Promise<cloud.instance.InstanceDetail[]>;
            }
            alerting: {
                // GET /cloud/project/{serviceName}/alerting
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/alerting
                $post(params: { delay: cloud.AlertingDelayEnum, email: string, monthlyThreshold: number }): Promise<cloud.Alerting>;
                $(id: string): {
                    // DELETE /cloud/project/{serviceName}/alerting/{id}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/alerting/{id}
                    $get(): Promise<cloud.Alerting>;
                    // PUT /cloud/project/{serviceName}/alerting/{id}
                    $put(params?: { creationDate?: string, delay?: cloud.AlertingDelayEnum, email?: string, formattedMonthlyThreshold?: orderPrice, id?: string, monthlyThreshold?: number }): Promise<void>;
                    alert: {
                        // GET /cloud/project/{serviceName}/alerting/{id}/alert
                        $get(): Promise<number[]>;
                        $(alertId: number): {
                            // GET /cloud/project/{serviceName}/alerting/{id}/alert/{alertId}
                            $get(): Promise<cloud.AlertingAlert>;
                        };
                    }
                };
            }
            bill: {
                // GET /cloud/project/{serviceName}/bill
                $get(params: { from: string, to: string }): Promise<cloud.project.Bill[]>;
            }
            cancel: {
                // POST /cloud/project/{serviceName}/cancel
                $post(): Promise<void>;
            }
            capabilities: {
                containerRegistry: {
                    // GET /cloud/project/{serviceName}/capabilities/containerRegistry
                    $get(): Promise<cloud.containerRegistry.Capability[]>;
                }
            }
            confirmTermination: {
                // POST /cloud/project/{serviceName}/confirmTermination
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            consumption: {
                // GET /cloud/project/{serviceName}/consumption
                $get(params: { from: string, to: string }): Promise<cloud.project.ProjectUsage>;
            }
            containerRegistry: {
                // GET /cloud/project/{serviceName}/containerRegistry
                $get(): Promise<cloud.containerRegistry.Registry[]>;
                // POST /cloud/project/{serviceName}/containerRegistry
                $post(params: { name: string, planID?: string, region: string }): Promise<cloud.containerRegistry.Registry>;
                $(registryID: string): {
                    // DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $get(): Promise<cloud.containerRegistry.Registry>;
                    // PUT /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $put(params: { name: string }): Promise<void>;
                    capabilities: {
                        plan: {
                            // GET /cloud/project/{serviceName}/containerRegistry/{registryID}/capabilities/plan
                            $get(): Promise<cloud.containerRegistry.Plan[]>;
                        }
                    }
                    plan: {
                        // GET /cloud/project/{serviceName}/containerRegistry/{registryID}/plan
                        $get(): Promise<cloud.containerRegistry.Plan>;
                        // PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/plan
                        $put(params: { planID: string }): Promise<void>;
                    }
                    users: {
                        // GET /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                        $get(): Promise<cloud.containerRegistry.User[]>;
                        // POST /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                        $post(params?: { email?: string, login?: string }): Promise<cloud.containerRegistry.User>;
                        $(userID: string): {
                            // DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}
                            $delete(): Promise<void>;
                        };
                    }
                };
            }
            credit: {
                // GET /cloud/project/{serviceName}/credit
                $get(): Promise<number[]>;
                // POST /cloud/project/{serviceName}/credit
                $post(params: { code: string }): Promise<void>;
                $(id: number): {
                    // GET /cloud/project/{serviceName}/credit/{id}
                    $get(): Promise<cloud.Credit>;
                };
            }
            flavor: {
                // GET /cloud/project/{serviceName}/flavor
                $get(params?: { region?: string }): Promise<cloud.flavor.Flavor[]>;
                $(flavorId: string): {
                    // GET /cloud/project/{serviceName}/flavor/{flavorId}
                    $get(): Promise<cloud.flavor.Flavor>;
                };
            }
            forecast: {
                // GET /cloud/project/{serviceName}/forecast
                $get(params: { toDate: string }): Promise<cloud.forecast.ProjectForecast>;
            }
            image: {
                // GET /cloud/project/{serviceName}/image
                $get(params?: { flavorType?: string, osType?: cloud.image.OSTypeEnum, region?: string }): Promise<cloud.image.Image[]>;
                $(imageId: string): {
                    // GET /cloud/project/{serviceName}/image/{imageId}
                    $get(): Promise<cloud.image.Image>;
                };
            }
            instance: {
                // GET /cloud/project/{serviceName}/instance
                $get(params?: { region?: string }): Promise<cloud.instance.Instance[]>;
                // POST /cloud/project/{serviceName}/instance
                $post(params: { autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string }): Promise<cloud.instance.InstanceDetail>;
                bulk: {
                    // POST /cloud/project/{serviceName}/instance/bulk
                    $post(params: { autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string }): Promise<cloud.instance.Instance[]>;
                }
                group: {
                    // GET /cloud/project/{serviceName}/instance/group
                    $get(params?: { region?: string }): Promise<cloud.instancegroup.InstanceGroup[]>;
                    // POST /cloud/project/{serviceName}/instance/group
                    $post(params: { name: string, region: string, type: cloud.instancegroup.InstanceGroupTypeEnum }): Promise<cloud.instancegroup.InstanceGroup>;
                    $(groupId: string): {
                        // DELETE /cloud/project/{serviceName}/instance/group/{groupId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/instance/group/{groupId}
                        $get(params?: { region?: string }): Promise<cloud.instancegroup.InstanceGroup>;
                    };
                }
                $(instanceId: string): {
                    // DELETE /cloud/project/{serviceName}/instance/{instanceId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/instance/{instanceId}
                    $get(): Promise<cloud.instance.InstanceDetail>;
                    // PUT /cloud/project/{serviceName}/instance/{instanceId}
                    $put(params: { instanceName: string }): Promise<void>;
                    activeMonthlyBilling: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
                        $post(): Promise<cloud.instance.InstanceDetail>;
                    }
                    applicationAccess: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
                        $post(): Promise<cloud.instance.ApplicationAccess>;
                    }
                    interface: {
                        // GET /cloud/project/{serviceName}/instance/{instanceId}/interface
                        $get(): Promise<cloud.instanceInterface.Interface[]>;
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/interface
                        $post(params: { ip?: string, networkId: string }): Promise<cloud.instanceInterface.Interface>;
                        $(interfaceId: string): {
                            // DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                            $get(): Promise<cloud.instanceInterface.Interface>;
                        };
                    }
                    monitoring: {
                        // GET /cloud/project/{serviceName}/instance/{instanceId}/monitoring
                        $get(params: { period: cloud.instance.MetricsPeriodEnum, type: cloud.instance.MetricsTypeEnum }): Promise<cloud.instance.InstanceMetrics>;
                    }
                    reboot: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/reboot
                        $post(params: { type: cloud.instance.RebootTypeEnum }): Promise<void>;
                    }
                    reinstall: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/reinstall
                        $post(params: { imageId: string }): Promise<cloud.instance.InstanceDetail>;
                    }
                    rescueMode: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/rescueMode
                        $post(params: { imageId?: string, rescue: boolean }): Promise<cloud.instance.RescueAdminPassword>;
                    }
                    resize: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/resize
                        $post(params: { flavorId: string }): Promise<cloud.instance.InstanceDetail>;
                    }
                    resume: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/resume
                        $post(): Promise<void>;
                    }
                    snapshot: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/snapshot
                        $post(params: { snapshotName: string }): Promise<void>;
                    }
                    start: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/start
                        $post(): Promise<void>;
                    }
                    stop: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/stop
                        $post(): Promise<void>;
                    }
                    vnc: {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/vnc
                        $post(): Promise<cloud.instance.InstanceVnc>;
                    }
                };
            }
            ip: {
                // GET /cloud/project/{serviceName}/ip
                $get(): Promise<cloud.ip.CloudIp[]>;
                failover: {
                    // GET /cloud/project/{serviceName}/ip/failover
                    $get(): Promise<cloud.ip.FailoverIp[]>;
                    $(id: string): {
                        // GET /cloud/project/{serviceName}/ip/failover/{id}
                        $get(): Promise<cloud.ip.FailoverIp>;
                        attach: {
                            // POST /cloud/project/{serviceName}/ip/failover/{id}/attach
                            $post(params: { instanceId: string }): Promise<cloud.ip.FailoverIp>;
                        }
                    };
                }
            }
            kube: {
                // GET /cloud/project/{serviceName}/kube
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/kube
                $post(params: { name?: string, region: cloud.kube.RegionEnum, version?: cloud.kube.VersionEnum }): Promise<cloud.kube.Cluster>;
                regions: {
                    // GET /cloud/project/{serviceName}/kube/regions
                    $get(): Promise<cloud.kube.RegionEnum[]>;
                }
                $(kubeId: string): {
                    // DELETE /cloud/project/{serviceName}/kube/{kubeId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/kube/{kubeId}
                    $get(): Promise<cloud.kube.Cluster>;
                    // PUT /cloud/project/{serviceName}/kube/{kubeId}
                    $put(params: { name: string }): Promise<void>;
                    flavors: {
                        // GET /cloud/project/{serviceName}/kube/{kubeId}/flavors
                        $get(): Promise<cloud.kube.Flavor[]>;
                    }
                    kubeconfig: {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig
                        $post(): Promise<cloud.kube.Kubeconfig>;
                    }
                    node: {
                        // GET /cloud/project/{serviceName}/kube/{kubeId}/node
                        $get(): Promise<cloud.kube.Node[]>;
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/node
                        $post(params: { flavorName: string, name?: string }): Promise<cloud.kube.Node>;
                        $(nodeId: string): {
                            // DELETE /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                            $get(): Promise<cloud.kube.Node>;
                        };
                    }
                    reset: {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/reset
                        $post(params?: { version?: cloud.kube.VersionEnum, workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicyEnum }): Promise<void>;
                    }
                    update: {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/update
                        $post(params?: { strategy?: cloud.kube.UpdateStrategyEnum }): Promise<void>;
                    }
                    updatePolicy: {
                        // PUT /cloud/project/{serviceName}/kube/{kubeId}/updatePolicy
                        $put(params: { updatePolicy: cloud.kube.UpdatePolicyEnum }): Promise<void>;
                    }
                };
            }
            lab: {
                // GET /cloud/project/{serviceName}/lab
                $get(): Promise<cloud.Lab[]>;
                $(labId: string): {
                    // GET /cloud/project/{serviceName}/lab/{labId}
                    $get(): Promise<cloud.Lab>;
                    // POST /cloud/project/{serviceName}/lab/{labId}
                    $post(): Promise<cloud.Operation>;
                    agreement: {
                        // GET /cloud/project/{serviceName}/lab/{labId}/agreement
                        $get(): Promise<cloud.LabAgreements>;
                    }
                };
            }
            migration: {
                // GET /cloud/project/{serviceName}/migration
                $get(): Promise<cloud.migration.Migration[]>;
                $(migrationId: string): {
                    // GET /cloud/project/{serviceName}/migration/{migrationId}
                    $get(): Promise<cloud.migration.Migration>;
                    // PUT /cloud/project/{serviceName}/migration/{migrationId}
                    $put(params: { date: string }): Promise<cloud.migration.Migration>;
                };
            }
            network: {
                private: {
                    // GET /cloud/project/{serviceName}/network/private
                    $get(): Promise<cloud.network.Network[]>;
                    // POST /cloud/project/{serviceName}/network/private
                    $post(params: { name: string, regions?: string[], vlanId?: number }): Promise<cloud.network.Network>;
                    $(networkId: string): {
                        // DELETE /cloud/project/{serviceName}/network/private/{networkId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/network/private/{networkId}
                        $get(): Promise<cloud.network.Network>;
                        // PUT /cloud/project/{serviceName}/network/private/{networkId}
                        $put(params: { name: string }): Promise<void>;
                        region: {
                            // POST /cloud/project/{serviceName}/network/private/{networkId}/region
                            $post(params: { region: string }): Promise<cloud.network.Network>;
                        }
                        subnet: {
                            // GET /cloud/project/{serviceName}/network/private/{networkId}/subnet
                            $get(): Promise<cloud.network.Subnet[]>;
                            // POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
                            $post(params: { dhcp: boolean, end: string, network: string, noGateway: boolean, region: string, start: string }): Promise<cloud.network.Subnet>;
                            $(subnetId: string): {
                                // DELETE /cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}
                                $delete(): Promise<void>;
                            };
                        }
                    };
                }
                public: {
                    // GET /cloud/project/{serviceName}/network/public
                    $get(): Promise<cloud.network.Network[]>;
                }
            }
            openstackClient: {
                // POST /cloud/project/{serviceName}/openstackClient
                $post(): Promise<cloud.openstackClient.Session>;
            }
            operation: {
                // GET /cloud/project/{serviceName}/operation
                $get(): Promise<cloud.Operation[]>;
                $(operationId: string): {
                    // GET /cloud/project/{serviceName}/operation/{operationId}
                    $get(): Promise<cloud.Operation>;
                };
            }
            quota: {
                // GET /cloud/project/{serviceName}/quota
                $get(): Promise<cloud.quota.Quotas[]>;
            }
            region: {
                // GET /cloud/project/{serviceName}/region
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/region
                $post(params: { region: string }): Promise<cloud.Region>;
                $(regionName: string): {
                    // GET /cloud/project/{serviceName}/region/{regionName}
                    $get(): Promise<cloud.Region>;
                    quota: {
                        // GET /cloud/project/{serviceName}/region/{regionName}/quota
                        $get(): Promise<cloud.quota.Quotas>;
                        // POST /cloud/project/{serviceName}/region/{regionName}/quota
                        $post(params: { name: string }): Promise<cloud.Operation>;
                        allowed: {
                            // GET /cloud/project/{serviceName}/region/{regionName}/quota/allowed
                            $get(): Promise<cloud.quota.AllowedQuota[]>;
                        }
                    }
                    workflow: {
                        backup: {
                            // GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                            $get(): Promise<cloud.Backup[]>;
                            // POST /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                            $post(params: { cron: string, instanceId: string, maxExecutionCount?: number, name: string, rotation: number }): Promise<cloud.Backup>;
                            $(backupWorkflowId: string): {
                                // DELETE /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                $delete(): Promise<void>;
                                // GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                $get(): Promise<cloud.Backup>;
                            };
                        }
                    }
                };
            }
            regionAvailable: {
                // GET /cloud/project/{serviceName}/regionAvailable
                $get(): Promise<cloud.AvailableRegion[]>;
            }
            retain: {
                // POST /cloud/project/{serviceName}/retain
                $post(): Promise<void>;
            }
            role: {
                // GET /cloud/project/{serviceName}/role
                $get(): Promise<cloud.role.Roles>;
            }
            serviceInfos: {
                // GET /cloud/project/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cloud/project/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
            snapshot: {
                // GET /cloud/project/{serviceName}/snapshot
                $get(params?: { flavorType?: string, region?: string }): Promise<cloud.image.Image[]>;
                $(imageId: string): {
                    // DELETE /cloud/project/{serviceName}/snapshot/{imageId}
                    $delete(): Promise<cloud.image.Image>;
                    // GET /cloud/project/{serviceName}/snapshot/{imageId}
                    $get(): Promise<cloud.image.Image>;
                };
            }
            sshkey: {
                // GET /cloud/project/{serviceName}/sshkey
                $get(params?: { region?: string }): Promise<cloud.sshkey.SshKey[]>;
                // POST /cloud/project/{serviceName}/sshkey
                $post(params: { name: string, publicKey: string, region?: string }): Promise<cloud.sshkey.SshKeyDetail>;
                $(keyId: string): {
                    // DELETE /cloud/project/{serviceName}/sshkey/{keyId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/sshkey/{keyId}
                    $get(): Promise<cloud.sshkey.SshKeyDetail>;
                };
            }
            stack: {
                // GET /cloud/project/{serviceName}/stack
                $get(): Promise<cloud.stack.Stack[]>;
                $(stackId: string): {
                    // GET /cloud/project/{serviceName}/stack/{stackId}
                    $get(): Promise<cloud.stack.Stack>;
                    client: {
                        // POST /cloud/project/{serviceName}/stack/{stackId}/client
                        $post(): Promise<cloud.openstackClient.Session>;
                    }
                };
            }
            storage: {
                // GET /cloud/project/{serviceName}/storage
                $get(): Promise<cloud.storage.Container[]>;
                // POST /cloud/project/{serviceName}/storage
                $post(params: { archive: boolean, containerName: string, region: string }): Promise<cloud.storage.Container>;
                access: {
                    // GET /cloud/project/{serviceName}/storage/access
                    $get(): Promise<cloud.storage.ContainerAccess>;
                    // POST /cloud/project/{serviceName}/storage/access
                    $post(): Promise<cloud.storage.ContainerAccess>;
                }
                $(containerId: string): {
                    // DELETE /cloud/project/{serviceName}/storage/{containerId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/storage/{containerId}
                    $get(params?: { noObjects?: boolean }): Promise<cloud.storage.ContainerDetail>;
                    // PUT /cloud/project/{serviceName}/storage/{containerId}
                    $put(params?: { containerType?: cloud.storage.TypeEnum }): Promise<void>;
                    cors: {
                        // DELETE /cloud/project/{serviceName}/storage/{containerId}/cors
                        $delete(params: { origin: string }): Promise<void>;
                        // POST /cloud/project/{serviceName}/storage/{containerId}/cors
                        $post(params: { origin: string }): Promise<void>;
                    }
                    publicUrl: {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/publicUrl
                        $post(params: { expirationDate: string, objectName: string }): Promise<cloud.storage.ContainerObjectTempURL>;
                    }
                    static: {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/static
                        $post(): Promise<void>;
                    }
                    user: {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/user
                        $post(params: { description?: string, right: cloud.storage.RightEnum }): Promise<cloud.user.UserDetail>;
                    }
                };
            }
            terminate: {
                // POST /cloud/project/{serviceName}/terminate
                $post(): Promise<string>;
            }
            unleash: {
                // POST /cloud/project/{serviceName}/unleash
                $post(): Promise<void>;
            }
            usage: {
                current: {
                    // GET /cloud/project/{serviceName}/usage/current
                    $get(): Promise<cloud.usage.UsageCurrent>;
                }
                forecast: {
                    // GET /cloud/project/{serviceName}/usage/forecast
                    $get(): Promise<cloud.usage.UsageForecast>;
                }
                history: {
                    // GET /cloud/project/{serviceName}/usage/history
                    $get(params?: { from?: string, to?: string }): Promise<cloud.usage.UsageHistory[]>;
                    $(usageId: string): {
                        // GET /cloud/project/{serviceName}/usage/history/{usageId}
                        $get(): Promise<cloud.usage.UsageHistoryDetail>;
                    };
                }
            }
            user: {
                // GET /cloud/project/{serviceName}/user
                $get(): Promise<cloud.user.User[]>;
                // POST /cloud/project/{serviceName}/user
                $post(params?: { description?: string, role?: cloud.user.RoleEnum, roles?: cloud.user.RoleEnum[] }): Promise<cloud.user.UserDetail>;
                $(userId: number): {
                    // DELETE /cloud/project/{serviceName}/user/{userId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/user/{userId}
                    $get(): Promise<cloud.user.User>;
                    openrc: {
                        // GET /cloud/project/{serviceName}/user/{userId}/openrc
                        $get(params: { region: string, version?: cloud.user.OpenrcVersionEnum }): Promise<cloud.user.Openrc>;
                    }
                    rclone: {
                        // GET /cloud/project/{serviceName}/user/{userId}/rclone
                        $get(params: { region: string }): Promise<cloud.user.Rclone>;
                    }
                    regeneratePassword: {
                        // POST /cloud/project/{serviceName}/user/{userId}/regeneratePassword
                        $post(): Promise<cloud.user.UserDetail>;
                    }
                    role: {
                        // GET /cloud/project/{serviceName}/user/{userId}/role
                        $get(): Promise<cloud.role.Role[]>;
                        // POST /cloud/project/{serviceName}/user/{userId}/role
                        $post(params: { roleId: string }): Promise<cloud.user.UserDetail>;
                        // PUT /cloud/project/{serviceName}/user/{userId}/role
                        $put(params: { rolesIds: string[] }): Promise<cloud.user.UserDetail>;
                        $(roleId: string): {
                            // DELETE /cloud/project/{serviceName}/user/{userId}/role/{roleId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/user/{userId}/role/{roleId}
                            $get(): Promise<cloud.role.Role>;
                        };
                    }
                    token: {
                        // POST /cloud/project/{serviceName}/user/{userId}/token
                        $post(params: { password: string }): Promise<cloud.authentication.Token>;
                    }
                };
            }
            volume: {
                // GET /cloud/project/{serviceName}/volume
                $get(params?: { region?: string }): Promise<cloud.volume.Volume[]>;
                // POST /cloud/project/{serviceName}/volume
                $post(params: { description?: string, imageId?: string, name?: string, region: string, size: number, snapshotId?: string, type: cloud.volume.VolumeTypeEnum }): Promise<cloud.volume.Volume>;
                snapshot: {
                    // GET /cloud/project/{serviceName}/volume/snapshot
                    $get(params?: { region?: string }): Promise<cloud.volume.Snapshot[]>;
                    $(snapshotId: string): {
                        // DELETE /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                        $get(): Promise<cloud.volume.Snapshot>;
                    };
                }
                $(volumeId: string): {
                    // DELETE /cloud/project/{serviceName}/volume/{volumeId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/volume/{volumeId}
                    $get(): Promise<cloud.volume.Volume>;
                    // PUT /cloud/project/{serviceName}/volume/{volumeId}
                    $put(params?: { description?: string, name?: string }): Promise<cloud.volume.Volume>;
                    attach: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/attach
                        $post(params: { instanceId: string }): Promise<cloud.volume.Volume>;
                    }
                    detach: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/detach
                        $post(params: { instanceId: string }): Promise<cloud.volume.Volume>;
                    }
                    snapshot: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/snapshot
                        $post(params?: { description?: string, name?: string }): Promise<cloud.volume.Snapshot>;
                    }
                    upsize: {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/upsize
                        $post(params: { size: number }): Promise<cloud.volume.Volume>;
                    }
                };
            }
            vrack: {
                // GET /cloud/project/{serviceName}/vrack
                $get(): Promise<cloud.Vrack>;
                // POST /cloud/project/{serviceName}/vrack
                $post(): Promise<cloud.Operation>;
            }
        };
    }
    subsidiaryPrice: {
        // GET /cloud/subsidiaryPrice
        $get(params: { flavorId?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, region?: string }): Promise<cloud.Price>;
    }
    $(serviceName: string | number): {
        pca: {
            // GET /cloud/{serviceName}/pca
            $get(): Promise<string[]>;
            $(pcaServiceName: string): {
                // GET /cloud/{serviceName}/pca/{pcaServiceName}
                $get(): Promise<pca.Account>;
                // PUT /cloud/{serviceName}/pca/{pcaServiceName}
                $put(params?: { domain?: string, host?: string, login?: string, password?: string, sshkey?: string }): Promise<void>;
                billing: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/billing
                    $get(params?: { billed?: boolean, date_from?: string, date_to?: string }): Promise<number[]>;
                    $(billingId: number): {
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}
                        $get(): Promise<pca.Billing>;
                    };
                }
                serviceInfos: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                    $get(): Promise<services.Service>;
                    // PUT /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                    $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                }
                sessions: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions
                    $get(params?: { name?: string }): Promise<string[]>;
                    $(sessionId: string): {
                        // DELETE /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $delete(): Promise<pca.Task>;
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $get(): Promise<pca.Session>;
                        // PUT /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $put(params?: { endDate?: string, id?: string, login?: string, name?: string, size?: number, srcIp?: string, startDate?: string, state?: cloud.pca.SessionStateEnum }): Promise<void>;
                        files: {
                            // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files
                            $get(params?: { name?: string }): Promise<string[]>;
                            $(fileId: string): {
                                // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}
                                $get(): Promise<pca.File>;
                            };
                        }
                        restore: {
                            // POST /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore
                            $post(): Promise<pca.Task>;
                        }
                    };
                }
                tasks: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                    $get(params?: { function_?: cloud.pca.FunctionTypeEnum, status?: cloud.pca.TaskStateEnum, todoDate_from?: string, todoDate_to?: string }): Promise<string[]>;
                    // POST /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                    $post(params: { fileIds: string[], sessionId: string, taskFunction: cloud.pca.TaskTypeEnum }): Promise<pca.Task>;
                    $(taskId: string): {
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}
                        $get(): Promise<pca.Task>;
                    };
                }
                usage: {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/usage
                    $get(): Promise<number>;
                }
            };
        }
    };
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type orderPrice = order.Price;
