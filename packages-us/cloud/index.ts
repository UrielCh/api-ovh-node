import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /cloud Models
 * Source: https://api.us.ovhcloud.com/1.0/cloud.json
 */
export namespace cloud {
    /**
     * Possible values for project access type
     * type fullname: cloud.AccessTypeEnum
     */
    export type AccessTypeEnum = "full" | "restricted"
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
     * Information about the different components available in the region
     * interface fullName: cloud.Component.Component
     */
    export interface Component {
        endpoint: string;
        name: string;
        status: cloud.ServiceStatusEnum;
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
     * Project
     * interface fullName: cloud.Project.Project
     */
    export interface Project {
        access: cloud.AccessTypeEnum;
        creationDate: string;
        description?: string;
        expiration?: string;
        manualQuota: boolean;
        orderId?: number;
        planCode: string;
        projectName?: string;
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
        nodepool?: cloud.ProjectKubeCreationNodePool;
        privateNetworkId?: string;
        region: string;
        version?: cloud.kube.VersionEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeCreationNodePool.ProjectKubeCreationNodePool
     */
    export interface ProjectKubeCreationNodePool {
        antiAffinity?: boolean;
        autoscale?: boolean;
        desiredNodes?: number;
        flavorName?: string;
        maxNodes?: number;
        minNodes?: number;
        monthlyBilled?: boolean;
        name?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeIpRestrictionUpsert.ProjectKubeIpRestrictionUpsert
     */
    export interface ProjectKubeIpRestrictionUpsert {
        ips?: string[];
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
        antiAffinity?: boolean;
        autoscale?: boolean;
        desiredNodes?: number;
        flavorName: string;
        maxNodes?: number;
        minNodes?: number;
        monthlyBilled?: boolean;
        name?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeNodePoolUpdate.ProjectKubeNodePoolUpdate
     */
    export interface ProjectKubeNodePoolUpdate {
        autoscale?: boolean;
        desiredNodes?: number;
        maxNodes?: number;
        minNodes?: number;
        nodesToRemove?: string[];
    }
    /**
     * Creation model for OIDC
     * interface fullName: cloud.ProjectKubeOpenIdConnectCreation.ProjectKubeOpenIdConnectCreation
     */
    export interface ProjectKubeOpenIdConnectCreation {
        clientId: string;
        issuerUrl: string;
    }
    /**
     * Update model for OIDC
     * interface fullName: cloud.ProjectKubeOpenIdConnectUpdate.ProjectKubeOpenIdConnectUpdate
     */
    export interface ProjectKubeOpenIdConnectUpdate {
        clientId: string;
        issuerUrl: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeResetCreation.ProjectKubeResetCreation
     */
    export interface ProjectKubeResetCreation {
        privateNetworkId?: string;
        version?: cloud.kube.VersionEnum;
        workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicyEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeRestart.ProjectKubeRestart
     */
    export interface ProjectKubeRestart {
        force?: boolean;
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
     * Container
     * interface fullName: cloud.StorageContainer.StorageContainer
     */
    export interface StorageContainer {
        name: string;
        objects: cloud.StorageObject[];
        objectsCount: number;
        objectsSize: number;
    }
    /**
     * Create a container
     * interface fullName: cloud.StorageContainerCreation.StorageContainerCreation
     */
    export interface StorageContainerCreation {
        name: string;
    }
    /**
     * Object
     * interface fullName: cloud.StorageObject.StorageObject
     */
    export interface StorageObject {
        etag: string;
        key: string;
        lastModified: string;
        size: number;
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
    export namespace capabilities {
        /**
         * Public Cloud products availability
         * interface fullName: cloud.capabilities.Availability.Availability
         */
        export interface Availability {
            plans: cloud.capabilities.AvailabilityPlan[];
            products: cloud.capabilities.AvailabilityProduct[];
        }
        /**
         * Public Cloud plan availability
         * interface fullName: cloud.capabilities.AvailabilityPlan.AvailabilityPlan
         */
        export interface AvailabilityPlan {
            code: string;
            regions: cloud.capabilities.AvailabilityRegion[];
        }
        /**
         * Public Cloud product availability
         * interface fullName: cloud.capabilities.AvailabilityProduct.AvailabilityProduct
         */
        export interface AvailabilityProduct {
            name: string;
            regions: cloud.capabilities.AvailabilityRegion[];
        }
        /**
         * Details about a region
         * interface fullName: cloud.capabilities.AvailabilityRegion.AvailabilityRegion
         */
        export interface AvailabilityRegion {
            continentCode: cloud.RegionContinentEnum;
            datacenter: string;
            enabled: boolean;
            name: string;
        }
        /**
         * Capability
         * interface fullName: cloud.capabilities.Capability.Capability
         */
        export interface Capability {
            enabled: boolean;
            name: string;
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
            quota: number;
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
        export type OSTypeEnum = "linux" | "bsd" | "windows" | "baremetal-linux"
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
        export type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "DELETING" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING" | "SHELVING" | "UNSHELVING"
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
         * Managed Kubernetes Audit Logs
         * interface fullName: cloud.kube.AuditLogs.AuditLogs
         */
        export interface AuditLogs {
            expirationDate: string;
            url: string;
        }
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
            privateNetworkId?: string;
            region: cloud.kube.RegionEnum;
            status: cloud.kube.ClusterStatusEnum;
            updatePolicy: string;
            updatedAt: string;
            url: string;
            version: string;
        }
        /**
         * Enum values for Status
         * type fullname: cloud.kube.ClusterStatusEnum
         */
        export type ClusterStatusEnum = "DELETED" | "DELETING" | "ERROR" | "INSTALLING" | "MAINTENANCE" | "READY" | "REDEPLOYING" | "REOPENING" | "RESETTING" | "RESIZING" | "SUSPENDED" | "SUSPENDING" | "UPDATING" | "USER_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "USER_QUOTA_ERROR"
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
         * type fullname: cloud.kube.FlavorCategoryEnum
         */
        export type FlavorCategoryEnum = "b" | "c" | "d" | "g" | "i" | "r" | "t"
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
            antiAffinity: boolean;
            autoscale: boolean;
            availableNodes: number;
            createdAt: string;
            currentNodes: number;
            desiredNodes: number;
            flavor: string;
            id: string;
            maxNodes: number;
            minNodes: number;
            monthlyBilled: boolean;
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
        export type NodePoolStatusEnum = "DELETED" | "DELETING" | "ERROR" | "INSTALLING" | "MAINTENANCE" | "READY" | "REDEPLOYING" | "REOPENING" | "RESETTING" | "RESIZING" | "SUSPENDED" | "SUSPENDING" | "UPDATING" | "USER_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "USER_QUOTA_ERROR"
        /**
         * Enum values for Status
         * type fullname: cloud.kube.NodeStatusEnum
         */
        export type NodeStatusEnum = "DELETED" | "DELETING" | "ERROR" | "INSTALLING" | "MAINTENANCE" | "READY" | "REDEPLOYING" | "REOPENING" | "RESETTING" | "RESIZING" | "SUSPENDED" | "SUSPENDING" | "UPDATING" | "USER_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "USER_QUOTA_ERROR"
        /**
         * Managed Kubernetes oidc integration
         * interface fullName: cloud.kube.OpenIdConnect.OpenIdConnect
         */
        export interface OpenIdConnect {
            clientId: string;
            issuerUrl: string;
        }
        /**
         * Enum values for available regions
         * type fullname: cloud.kube.RegionEnum
         */
        export type RegionEnum = "GRA5" | "GRA7" | "BHS5" | "SBG5" | "WAW1" | "SGP1" | "SYD1" | "US-EAST-VA-1" | "US-WEST-OR-1"
        /**
         * Enum values for worker nodes reset policy
         * type fullname: cloud.kube.ResetWorkerNodesPolicyEnum
         */
        export type ResetWorkerNodesPolicyEnum = "reinstall" | "delete"
        /**
         * Enum values for UpdatePolicy
         * type fullname: cloud.kube.UpdatePolicyEnum
         */
        export type UpdatePolicyEnum = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
        /**
         * Enum values for UpdateStrategy
         * type fullname: cloud.kube.UpdateStrategyEnum
         */
        export type UpdateStrategyEnum = "LATEST_PATCH" | "NEXT_MINOR"
        /**
         * List of available versions for upgrade
         * type fullname: cloud.kube.UpgradeVersionEnum
         */
        export type UpgradeVersionEnum = "1.16" | "1.17" | "1.18" | "1.19" | "1.20"
        /**
         * List of available versions for installation
         * type fullname: cloud.kube.VersionEnum
         */
        export type VersionEnum = "1.17" | "1.18" | "1.19" | "1.20"
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
            openstackId?: string;
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
        export namespace rule {
            /**
             * Public Cloud products availability
             * interface fullName: cloud.order.rule.Availability.Availability
             */
            export interface Availability {
                plans: cloud.order.rule.AvailabilityPlan[];
                products: cloud.order.rule.AvailabilityProduct[];
            }
            /**
             * Public Cloud plan availability
             * interface fullName: cloud.order.rule.AvailabilityPlan.AvailabilityPlan
             */
            export interface AvailabilityPlan {
                code: string;
                regions: string[];
            }
            /**
             * Public Cloud product availability
             * interface fullName: cloud.order.rule.AvailabilityProduct.AvailabilityProduct
             */
            export interface AvailabilityProduct {
                name: string;
                regions: string[];
            }
        }
    }
    export namespace project {
        /**
         * A load balancer to handle application workload
         * interface fullName: cloud.project.ApplicationLoadBalancer.ApplicationLoadBalancer
         */
        export interface ApplicationLoadBalancer {
            address: cloud.project.loadbalancer.Address;
            configuration: cloud.project.loadbalancer.ConfigurationVersion;
            createdAt: string;
            description?: string;
            egressAddress: cloud.project.loadbalancer.Addresses;
            id: string;
            name?: string;
            openstackRegion: string;
            region: string;
            size: cloud.project.loadbalancer.SizeEnum;
            status: cloud.project.loadbalancer.StatusEnum;
        }
        /**
         * A load balancer to handle application workload
         * interface fullName: cloud.project.ApplicationLoadBalancerCreation.ApplicationLoadBalancerCreation
         */
        export interface ApplicationLoadBalancerCreation {
            description?: string;
            id: string;
            name?: string;
            networking?: cloud.project.loadbalancer.networking.NetworkingCreation;
            openstackRegion: string;
            region: string;
            size?: cloud.project.loadbalancer.SizeEnum;
        }
        /**
         * A Certificate to use in your NFVs
         * interface fullName: cloud.project.Certificate.Certificate
         */
        export interface Certificate {
            expireAt: string;
            fingerprint: string;
            id: string;
            issuer: string;
            kind: cloud.project.CertificateKindEnum;
            name: string;
            serialNumber: string;
            serverAlternativeNames: cloud.project.certificate.ServerAlternativeName[];
            status: cloud.project.CertificateStatusEnum;
            subject: string;
            validAt: string;
            version: number;
        }
        /**
         * Add a new certificate
         * interface fullName: cloud.project.CertificateAdd.CertificateAdd
         */
        export interface CertificateAdd {
            import?: cloud.project.certificate.Import;
            name: string;
        }
        /**
         * Certificate kind
         * type fullname: cloud.project.CertificateKindEnum
         */
        export type CertificateKindEnum = "IMPORTED"
        /**
         * Certificate status
         * type fullname: cloud.project.CertificateStatusEnum
         */
        export type CertificateStatusEnum = "OK" | "EXPIRED" | "NOT_YET_VALID" | "REVOKED"
        /**
         * A load balancer to handle workload
         * interface fullName: cloud.project.LoadBalancer.LoadBalancer
         */
        export interface LoadBalancer {
            address: cloud.project.loadbalancer.Address;
            configuration: cloud.project.loadbalancer.ConfigurationVersion;
            createdAt: string;
            description?: string;
            egressAddress: cloud.project.loadbalancer.Addresses;
            id: string;
            name?: string;
            networking: cloud.project.loadbalancer.networking.Networking;
            openstackRegion: string;
            region: string;
            size: cloud.project.loadbalancer.SizeEnum;
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
            networking?: cloud.project.loadbalancer.networking.NetworkingCreation;
            openstackRegion: string;
            region: string;
            size?: cloud.project.loadbalancer.SizeEnum;
        }
        /**
         * A network load balancer for TCP/UDP workloads
         * interface fullName: cloud.project.NetworkLoadBalancer.NetworkLoadBalancer
         */
        export interface NetworkLoadBalancer {
            address: cloud.project.loadbalancer.Address;
            configuration: cloud.project.loadbalancer.ConfigurationVersion;
            createdAt: string;
            description?: string;
            egressAddress: cloud.project.loadbalancer.Addresses;
            id: string;
            name?: string;
            openstackRegion: string;
            region: string;
            size: cloud.project.loadbalancer.SizeEnum;
            status: cloud.project.loadbalancer.StatusEnum;
        }
        /**
         * A network load balancer for TCP/UDP workloads
         * interface fullName: cloud.project.NetworkLoadBalancerCreation.NetworkLoadBalancerCreation
         */
        export interface NetworkLoadBalancerCreation {
            description?: string;
            id: string;
            name?: string;
            networking?: cloud.project.loadbalancer.networking.NetworkingCreation;
            openstackRegion: string;
            region: string;
            size?: cloud.project.loadbalancer.SizeEnum;
        }
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
        export namespace certificate {
            /**
             * Import external certificate
             * interface fullName: cloud.project.certificate.Import.Import
             */
            export interface Import {
                cert: string;
                chain?: string;
                key: string;
            }
            /**
             * Certificate SAN
             * interface fullName: cloud.project.certificate.ServerAlternativeName.ServerAlternativeName
             */
            export interface ServerAlternativeName {
                kind: cloud.project.certificate.ServerAlternativeNameKindEnum;
                name: string;
            }
            /**
             * SAN kind
             * type fullname: cloud.project.certificate.ServerAlternativeNameKindEnum
             */
            export type ServerAlternativeNameKindEnum = "EMAIL" | "DNS" | "URI" | "IP"
        }
        export namespace loadbalancer {
            /**
             * HTTP load balancer dispatch action
             * interface fullName: cloud.project.loadbalancer.ActionDispatch.ActionDispatch
             */
            export interface ActionDispatch {
                name: string;
                target: string;
            }
            /**
             * HTTP load balancer redirect action
             * interface fullName: cloud.project.loadbalancer.ActionRedirect.ActionRedirect
             */
            export interface ActionRedirect {
                location: string;
                name: string;
                statusCode: cloud.project.loadbalancer.action.RedirectStatusCodeEnum;
            }
            /**
             * HTTP load balancer reject action
             * interface fullName: cloud.project.loadbalancer.ActionReject.ActionReject
             */
            export interface ActionReject {
                name: string;
                statusCode: cloud.project.loadbalancer.action.RejectStatusCodeEnum;
            }
            /**
             * HTTP load balancer rewrite action
             * interface fullName: cloud.project.loadbalancer.ActionRewrite.ActionRewrite
             */
            export interface ActionRewrite {
                location: string;
                name: string;
            }
            /**
             * HTTP load balancer actions
             * interface fullName: cloud.project.loadbalancer.Actions.Actions
             */
            export interface Actions {
                dispatch?: cloud.project.loadbalancer.ActionDispatch[];
                redirect?: cloud.project.loadbalancer.ActionRedirect[];
                reject?: cloud.project.loadbalancer.ActionReject[];
                rewrite?: cloud.project.loadbalancer.ActionRewrite[];
            }
            /**
             * Address to reach the load balancer
             * interface fullName: cloud.project.loadbalancer.Address.Address
             */
            export interface Address {
                ipv4: string;
                ipv6?: string;
            }
            /**
             * IP list split in version 4 and 6
             * interface fullName: cloud.project.loadbalancer.Addresses.Addresses
             */
            export interface Addresses {
                ipv4: string[];
                ipv6?: string[];
            }
            /**
             * An application load balancer configuration
             * interface fullName: cloud.project.loadbalancer.ApplicationConfiguration.ApplicationConfiguration
             */
            export interface ApplicationConfiguration {
                actions?: cloud.project.loadbalancer.Actions;
                certificates: string[];
                conditions?: cloud.project.loadbalancer.Condition[];
                entryPoints: cloud.project.loadbalancer.EntryPoint[];
                networking: cloud.project.loadbalancer.configuration.networking.Networking;
                targets?: cloud.project.loadbalancer.Target[];
                version: number;
            }
            /**
             * An application load balancer configuration
             * interface fullName: cloud.project.loadbalancer.ApplicationConfigurationCreation.ApplicationConfigurationCreation
             */
            export interface ApplicationConfigurationCreation {
                actions?: cloud.project.loadbalancer.Actions;
                certificates: string[];
                conditions?: cloud.project.loadbalancer.Condition[];
                entryPoints: cloud.project.loadbalancer.EntryPoint[];
                networking?: cloud.project.loadbalancer.configuration.networking.Networking;
                targets?: cloud.project.loadbalancer.Target[];
                version: number;
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
                sticky?: boolean;
            }
            /**
             * Select a load balancer backend
             * interface fullName: cloud.project.loadbalancer.BackendSelector.BackendSelector
             */
            export interface BackendSelector {
                name: string;
            }
            /**
             * A condition
             * interface fullName: cloud.project.loadbalancer.Condition.Condition
             */
            export interface Condition {
                key?: string;
                match: cloud.project.loadbalancer.condition.MatchEnum;
                name: string;
                negate?: boolean;
                type: cloud.project.loadbalancer.condition.TypeEnum;
                values: string[];
            }
            /**
             * A load balancer configuration
             * interface fullName: cloud.project.loadbalancer.Configuration.Configuration
             */
            export interface Configuration {
                backends: cloud.project.loadbalancer.Backend[];
                certificates: string[];
                frontends: cloud.project.loadbalancer.Frontend[];
                networking: cloud.project.loadbalancer.configuration.networking.Networking;
                version: number;
            }
            /**
             * A load balancer configuration
             * interface fullName: cloud.project.loadbalancer.ConfigurationCreation.ConfigurationCreation
             */
            export interface ConfigurationCreation {
                backends: cloud.project.loadbalancer.Backend[];
                certificates: string[];
                frontends: cloud.project.loadbalancer.Frontend[];
                networking?: cloud.project.loadbalancer.configuration.networking.Networking;
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
             * A load balancer entryPoint
             * interface fullName: cloud.project.loadbalancer.EntryPoint.EntryPoint
             */
            export interface EntryPoint {
                defaultTarget?: string;
                disableH2?: boolean;
                name: string;
                portRanges?: cloud.project.loadbalancer.PortRange[];
                ports?: number[];
                rules: cloud.project.loadbalancer.Rule[];
                tls: boolean;
            }
            /**
             * A load balancer frontend
             * interface fullName: cloud.project.loadbalancer.Frontend.Frontend
             */
            export interface Frontend {
                backends: cloud.project.loadbalancer.BackendSelector[];
                mode?: cloud.project.loadbalancer.frontend.ModeEnum;
                name: string;
                port?: number;
                portRanges?: cloud.project.loadbalancer.PortRange[];
                ports?: number[];
                tls: boolean;
                whitelist: string[];
            }
            /**
             * Network load balancer size capability
             * interface fullName: cloud.project.loadbalancer.LoadBalancerSizeCapability.LoadBalancerSizeCapability
             */
            export interface LoadBalancerSizeCapability {
                bandwidth: number;
                maximumConnection: number;
                newConnectionPerSecond: number;
                size: cloud.project.loadbalancer.SizeEnum;
            }
            /**
             * A port range
             * interface fullName: cloud.project.loadbalancer.PortRange.PortRange
             */
            export interface PortRange {
                end: number;
                start: number;
            }
            /**
             * Region information
             * interface fullName: cloud.project.loadbalancer.Region.Region
             */
            export interface Region {
                region: string;
            }
            /**
             * A entrypoint rule
             * interface fullName: cloud.project.loadbalancer.Rule.Rule
             */
            export interface Rule {
                action: string;
                conditions?: string[];
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
             * Size of the load balancer
             * type fullname: cloud.project.loadbalancer.SizeEnum
             */
            export type SizeEnum = "S" | "M" | "L"
            /**
             * Loadbalancer stats
             * interface fullName: cloud.project.loadbalancer.Stats.Stats
             */
            export interface Stats {
                concurrentFlows: number;
                httpRequestsPerSecond?: number;
                status: cloud.project.loadbalancer.stats.StatusEnum;
                targets: cloud.project.loadbalancer.stats.Target[];
                tcpConnectionsPerSecond: number;
                throughput: cloud.project.loadbalancer.stats.Throughput;
            }
            /**
             * Status of a load balancer
             * type fullname: cloud.project.loadbalancer.StatusEnum
             */
            export type StatusEnum = "CREATED" | "APPLYING" | "RUNNING" | "DELETING" | "ERROR" | "FROZEN"
            /**
             * A load balancer target
             * interface fullName: cloud.project.loadbalancer.Target.Target
             */
            export interface Target {
                balancer?: cloud.project.loadbalancer.target.BalancerAlgorithmEnum;
                name: string;
                proxyProtocol?: cloud.project.loadbalancer.target.ProxyProtocolEnum;
                servers: cloud.project.loadbalancer.Server[];
                sticky?: boolean;
            }
            export namespace action {
                /**
                 * Available status code for Redirect action
                 * type fullname: cloud.project.loadbalancer.action.RedirectStatusCodeEnum
                 */
                export type RedirectStatusCodeEnum = "301" | "302" | "303" | "307" | "308"
                /**
                 * Available status code for Reject action
                 * type fullname: cloud.project.loadbalancer.action.RejectStatusCodeEnum
                 */
                export type RejectStatusCodeEnum = "200" | "400" | "403" | "405" | "408" | "429" | "500" | "502" | "503" | "504"
            }
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
            export namespace condition {
                /**
                 * Matching operator
                 * type fullname: cloud.project.loadbalancer.condition.MatchEnum
                 */
                export type MatchEnum = "is" | "start-with" | "end-with" | "regex" | "exists"
                /**
                 * Matching field
                 * type fullname: cloud.project.loadbalancer.condition.TypeEnum
                 */
                export type TypeEnum = "method" | "cookie" | "path" | "host" | "header" | "source" | "query-param"
            }
            export namespace configuration {
                export namespace networking {
                    /**
                     * Networking configuration egress definition
                     * interface fullName: cloud.project.loadbalancer.configuration.networking.Egress.Egress
                     */
                    export interface Egress {
                        id?: string;
                        kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                    }
                    /**
                     * Networking configuration ingress definition
                     * interface fullName: cloud.project.loadbalancer.configuration.networking.Ingress.Ingress
                     */
                    export interface Ingress {
                        kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                    }
                    /**
                     * Networking configuration object
                     * interface fullName: cloud.project.loadbalancer.configuration.networking.Networking.Networking
                     */
                    export interface Networking {
                        egress?: cloud.project.loadbalancer.configuration.networking.Egress;
                        ingress?: cloud.project.loadbalancer.configuration.networking.Ingress;
                    }
                }
            }
            export namespace frontend {
                /**
                 * Available load balancer frontend mode
                 * type fullname: cloud.project.loadbalancer.frontend.ModeEnum
                 */
                export type ModeEnum = "TCP"
            }
            export namespace networking {
                /**
                 * Networking Egress definition
                 * interface fullName: cloud.project.loadbalancer.networking.Egress.Egress
                 */
                export interface Egress {
                    id?: string;
                    kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                }
                /**
                 * Networking Egress definition
                 * interface fullName: cloud.project.loadbalancer.networking.EgressCreation.EgressCreation
                 */
                export interface EgressCreation {
                    kind: cloud.project.loadbalancer.networking.egress.KindEnum;
                }
                /**
                 * Networking Ingress definition
                 * interface fullName: cloud.project.loadbalancer.networking.Ingress.Ingress
                 */
                export interface Ingress {
                    kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                }
                /**
                 * Networking Ingress definition
                 * interface fullName: cloud.project.loadbalancer.networking.IngressCreation.IngressCreation
                 */
                export interface IngressCreation {
                    kind: cloud.project.loadbalancer.networking.ingress.KindEnum;
                }
                /**
                 * Networking object
                 * interface fullName: cloud.project.loadbalancer.networking.Networking.Networking
                 */
                export interface Networking {
                    egress: cloud.project.loadbalancer.networking.Egress;
                    ingress: cloud.project.loadbalancer.networking.Ingress;
                }
                /**
                 * Networking creation object
                 * interface fullName: cloud.project.loadbalancer.networking.NetworkingCreation.NetworkingCreation
                 */
                export interface NetworkingCreation {
                    egress?: cloud.project.loadbalancer.networking.EgressCreation;
                    ingress?: cloud.project.loadbalancer.networking.IngressCreation;
                }
                export namespace egress {
                    /**
                     * Networking kind
                     * type fullname: cloud.project.loadbalancer.networking.egress.KindEnum
                     */
                    export type KindEnum = "public" | "vrack"
                }
                export namespace ingress {
                    /**
                     * Networking kind
                     * type fullname: cloud.project.loadbalancer.networking.ingress.KindEnum
                     */
                    export type KindEnum = "public"
                }
            }
            export namespace stats {
                /**
                 * Status of availability of loadbalancer
                 * type fullname: cloud.project.loadbalancer.stats.StatusEnum
                 */
                export type StatusEnum = "HEALTHY" | "NOT_AVAILABLE"
                /**
                 * Loadbalancer target stats
                 * interface fullName: cloud.project.loadbalancer.stats.Target.Target
                 */
                export interface Target {
                    name: string;
                    servers: cloud.project.loadbalancer.stats.target.Server[];
                }
                /**
                 * Loadbalancer bandwidth stats
                 * interface fullName: cloud.project.loadbalancer.stats.Throughput.Throughput
                 */
                export interface Throughput {
                    in: number;
                    out: number;
                }
                export namespace target {
                    /**
                     * Loadbalancer target server stats
                     * interface fullName: cloud.project.loadbalancer.stats.target.Server.Server
                     */
                    export interface Server {
                        name: string;
                        status: cloud.project.loadbalancer.stats.target.server.StatusEnum;
                    }
                    export namespace server {
                        /**
                         * Status of target's server
                         * type fullname: cloud.project.loadbalancer.stats.target.server.StatusEnum
                         */
                        export type StatusEnum = "UNKNOWN" | "INIT" | "HEALTHY" | "L4_TIMEOUT_ERROR" | "L4_CONNECTION_ERROR" | "L7_TIMEOUT" | "L7_PROTOCOL_ERROR" | "L7_RESPONSE_ERROR" | "ERROR"
                    }
                }
            }
            export namespace target {
                /**
                 * Available load balancer target balancer algorithm
                 * type fullname: cloud.project.loadbalancer.target.BalancerAlgorithmEnum
                 */
                export type BalancerAlgorithmEnum = "roundrobin" | "static-rr" | "leastconn" | "first" | "source"
                /**
                 * Available load balancer target proxy-protocol
                 * type fullname: cloud.project.loadbalancer.target.ProxyProtocolEnum
                 */
                export type ProxyProtocolEnum = "v1" | "v2" | "v2-ssl" | "v2-cn"
            }
        }
        export namespace networkloadbalancer {
            /**
             * network load balancer reject action
             * interface fullName: cloud.project.networkloadbalancer.ActionReject.ActionReject
             */
            export interface ActionReject {
                name: string;
                type: cloud.project.networkloadbalancer.action.RejectTypeEnum;
            }
            /**
             * Network Loadbalancer action
             * interface fullName: cloud.project.networkloadbalancer.Actions.Actions
             */
            export interface Actions {
                dispatch?: cloud.project.loadbalancer.ActionDispatch[];
                reject?: cloud.project.networkloadbalancer.ActionReject[];
            }
            /**
             * A condition
             * interface fullName: cloud.project.networkloadbalancer.Condition.Condition
             */
            export interface Condition {
                key?: string;
                match: cloud.project.loadbalancer.condition.MatchEnum;
                name: string;
                negate?: boolean;
                type: cloud.project.networkloadbalancer.condition.TypeEnum;
                values: string[];
            }
            /**
             * A network load balancer configuration
             * interface fullName: cloud.project.networkloadbalancer.Configuration.Configuration
             */
            export interface Configuration {
                actions?: cloud.project.networkloadbalancer.Actions;
                conditions?: cloud.project.networkloadbalancer.Condition[];
                entryPoints: cloud.project.networkloadbalancer.EntryPoint[];
                networking: cloud.project.loadbalancer.configuration.networking.Networking;
                targets?: cloud.project.loadbalancer.Target[];
                version: number;
            }
            /**
             * A network load balancer configuration
             * interface fullName: cloud.project.networkloadbalancer.ConfigurationCreation.ConfigurationCreation
             */
            export interface ConfigurationCreation {
                actions?: cloud.project.networkloadbalancer.Actions;
                conditions?: cloud.project.networkloadbalancer.Condition[];
                entryPoints: cloud.project.networkloadbalancer.EntryPoint[];
                networking?: cloud.project.loadbalancer.configuration.networking.Networking;
                targets?: cloud.project.loadbalancer.Target[];
                version: number;
            }
            /**
             * A network load balancer entryPoint
             * interface fullName: cloud.project.networkloadbalancer.EntryPoint.EntryPoint
             */
            export interface EntryPoint {
                defaultTarget?: string;
                name: string;
                portRanges?: cloud.project.loadbalancer.PortRange[];
                ports?: number[];
                rules: cloud.project.loadbalancer.Rule[];
            }
            export namespace action {
                /**
                 * Available type of Reject action
                 * type fullname: cloud.project.networkloadbalancer.action.RejectTypeEnum
                 */
                export type RejectTypeEnum = "deny" | "drop"
            }
            export namespace condition {
                /**
                 * Matching field
                 * type fullname: cloud.project.networkloadbalancer.condition.TypeEnum
                 */
                export type TypeEnum = "source"
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
        export namespace storage {
            /**
             * Cloud Storage Quota
             * interface fullName: cloud.quota.storage.Quota.Quota
             */
            export interface Quota {
                bytesUsed: number;
                containerCount: number;
                objectCount: number;
                quotaBytes?: number;
            }
            /**
             * Update storage quota
             * interface fullName: cloud.quota.storage.QuotaUpdate.QuotaUpdate
             */
            export interface QuotaUpdate {
                quotaBytes: number;
            }
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
         * Add storage policy for container
         * interface fullName: cloud.storage.AddContainerPolicy.AddContainerPolicy
         */
        export interface AddContainerPolicy {
            objectKey: string;
            roleName: cloud.storage.PolicyRoleEnum;
        }
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
         * Raw storage policy
         * interface fullName: cloud.storage.PolicyRaw.PolicyRaw
         */
        export interface PolicyRaw {
            policy: string;
        }
        /**
         * Storage policy role
         * type fullname: cloud.storage.PolicyRoleEnum
         */
        export type PolicyRoleEnum = "admin" | "deny" | "readOnly" | "readWrite"
        /**
         * Presigned URL
         * interface fullName: cloud.storage.PresignedURL.PresignedURL
         */
        export interface PresignedURL {
            method: cloud.storage.PresignedURLMethodEnum;
            url: string;
        }
        /**
         * Inputs to generate a presigned URL
         * interface fullName: cloud.storage.PresignedURLInput.PresignedURLInput
         */
        export interface PresignedURLInput {
            expire: number;
            method: cloud.storage.PresignedURLMethodEnum;
            object: string;
        }
        /**
         * Presigned URL method
         * type fullname: cloud.storage.PresignedURLMethodEnum
         */
        export type PresignedURLMethodEnum = "GET" | "PUT"
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
        export type RoleEnum = "admin" | "authentication" | "administrator" | "compute_operator" | "infrastructure_supervisor" | "network_security_operator" | "network_operator" | "backup_operator" | "image_operator" | "volume_operator" | "objectstore_operator" | "ai_training_operator" | "ai_training_read"
        /**
         * S3CredentialsWithSecret
         * interface fullName: cloud.user.S3CredentialsWithSecret.S3CredentialsWithSecret
         */
        export interface S3CredentialsWithSecret {
            access: string;
            secret: string;
            tenantId: string;
            userId: string;
        }
        /**
         * User
         * interface fullName: cloud.user.User.User
         */
        export interface User {
            creationDate: string;
            description: string;
            id: number;
            openstackId?: string;
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
            openstackId?: string;
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
        export type VolumeTypeEnum = "classic" | "high-speed" | "high-speed-gen2"
    }
}
export namespace nichandle {
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN" | "ASIA" | "AU" | "CA" | "QC" | "SG" | "WE" | "WS" | "US"
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
    order: {
        /**
         * Get all cloud pending orders
         * GET /cloud/order
         */
        $get(params?: { planCode?: string }): Promise<cloud.order.Order[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        rule: {
            availability: {
                /**
                 * Get product availability
                 * GET /cloud/order/rule/availability
                 */
                $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum, planCode?: string }): Promise<cloud.order.rule.Availability>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
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
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
            $put(params?: { access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, manualQuota?: boolean, orderId?: number, planCode?: string, projectName?: string, project_id?: string, status?: cloud.project.ProjectStatusEnum, unleash?: boolean }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            activateMonthlyBilling: {
                /**
                 * Activate monthly billing on multiple instances
                 * POST /cloud/project/{serviceName}/activateMonthlyBilling
                 */
                $post(params: { instances: cloud.instance.MonthlyInstanceBulkParams[] }): Promise<cloud.instance.InstanceDetail[]>;
            }
            capabilities: {
                kube: {
                    flavors: {
                        /**
                         * List Kubernetes available flavors for a region
                         * GET /cloud/project/{serviceName}/capabilities/kube/flavors
                         */
                        $get(params?: { region?: cloud.kube.RegionEnum }): Promise<cloud.kube.Flavor[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    regions: {
                        /**
                         * List Kubernetes available regions
                         * GET /cloud/project/{serviceName}/capabilities/kube/regions
                         */
                        $get(): Promise<cloud.kube.RegionEnum[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                }
                loadbalancer: {
                    region: {
                        /**
                         * List all available regions
                         * GET /cloud/project/{serviceName}/capabilities/loadbalancer/region
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(regionName: string): {
                            /**
                             * Get specific information of a region
                             * GET /cloud/project/{serviceName}/capabilities/loadbalancer/region/{regionName}
                             */
                            $get(): Promise<cloud.project.loadbalancer.Region>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                }
                productAvailability: {
                    /**
                     * List product availability
                     * GET /cloud/project/{serviceName}/capabilities/productAvailability
                     */
                    $get(params: { ovhSubsidiary: nichandle.OvhSubsidiaryEnum, planCode?: string, planFamily?: string, product?: string }): Promise<cloud.capabilities.Availability>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /cloud/project/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(flavorId: string): {
                    /**
                     * Get flavor
                     * GET /cloud/project/{serviceName}/flavor/{flavorId}
                     */
                    $get(): Promise<cloud.flavor.Flavor>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(imageId: string): {
                    /**
                     * Get image
                     * GET /cloud/project/{serviceName}/image/{imageId}
                     */
                    $get(): Promise<cloud.image.Image>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                bulk: {
                    /**
                     * Create multiple instances
                     * POST /cloud/project/{serviceName}/instance/bulk
                     */
                    $post(params: { autobackup?: cloud.instance.AutoBackup, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string }): Promise<cloud.instance.Instance[]>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    activeMonthlyBilling: {
                        /**
                         * Activate monthly billing on instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
                         */
                        $post(): Promise<cloud.instance.InstanceDetail>;
                    }
                    applicationAccess: {
                        /**
                         * Return initial credentials of applications installed from public image
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
                         */
                        $post(): Promise<cloud.instance.ApplicationAccess>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    reboot: {
                        /**
                         * Reboot an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/reboot
                         */
                        $post(params: { type: cloud.instance.RebootTypeEnum }): Promise<void>;
                    }
                    reinstall: {
                        /**
                         * Reinstall an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/reinstall
                         */
                        $post(params: { imageId: string }): Promise<cloud.instance.InstanceDetail>;
                    }
                    rescueMode: {
                        /**
                         * Enable or disable rescue mode
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/rescueMode
                         */
                        $post(params: { imageId?: string, rescue: boolean }): Promise<cloud.instance.RescueAdminPassword>;
                    }
                    resize: {
                        /**
                         * Migrate your instance to another flavor
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/resize
                         */
                        $post(params: { flavorId: string }): Promise<cloud.instance.InstanceDetail>;
                    }
                    resume: {
                        /**
                         * Resume a suspended instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/resume
                         */
                        $post(): Promise<void>;
                    }
                    shelve: {
                        /**
                         * Shelve an instance. The resources dedicated to the Public Cloud instance are released. The data of the local storage will be stored, the duration of the operation depends on the size of the local disk. The instance can be unshelved at any time. Meanwhile hourly instances will not be billed. The Snapshot Storage used to store the instance's data will be billed.
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/shelve
                         */
                        $post(): Promise<void>;
                    }
                    snapshot: {
                        /**
                         * Snapshot an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/snapshot
                         */
                        $post(params: { snapshotName: string }): Promise<void>;
                    }
                    start: {
                        /**
                         * Start an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/start
                         */
                        $post(): Promise<void>;
                    }
                    stop: {
                        /**
                         * Stop an instance. The resources dedicated to the Public Cloud instances are still reserved. The instance can be restarted at any time. Meanwhile, the same price is charged for the instance.
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/stop
                         */
                        $post(): Promise<void>;
                    }
                    unshelve: {
                        /**
                         * Unshelve an instance. The resources dedicated to the Public Cloud instance are restored. The duration of the operation depends on the size of the local disk. Instance billing will get back to normal and the snapshot used to store the instance's data will be deleted.
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/unshelve
                         */
                        $post(): Promise<void>;
                    }
                    vnc: {
                        /**
                         * Get VNC access to your instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/vnc
                         */
                        $post(): Promise<cloud.instance.InstanceVnc>;
                    }
                };
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                failover: {
                    /**
                     * Get failover ips
                     * GET /cloud/project/{serviceName}/ip/failover
                     */
                    $get(): Promise<cloud.ip.FailoverIp[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(id: string): {
                        /**
                         * Get failover ip
                         * GET /cloud/project/{serviceName}/ip/failover/{id}
                         */
                        $get(): Promise<cloud.ip.FailoverIp>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        attach: {
                            /**
                             * Attach failover ip to an instance
                             * POST /cloud/project/{serviceName}/ip/failover/{id}/attach
                             */
                            $post(params: { instanceId: string }): Promise<cloud.ip.FailoverIp>;
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
                $post(params: { name?: string, nodepool?: cloud.ProjectKubeCreationNodePool, privateNetworkId?: string, region: string, version?: cloud.kube.VersionEnum }): Promise<cloud.kube.Cluster>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                regions: {
                    /**
                     * List Kubernetes available regions
                     * GET /cloud/project/{serviceName}/kube/regions
                     */
                    $get(): Promise<cloud.kube.RegionEnum[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    auditLogs: {
                        /**
                         * Generate a temporary url to retrieve auditlogs
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/auditLogs
                         */
                        $post(): Promise<cloud.kube.AuditLogs>;
                    }
                    flavors: {
                        /**
                         * List all flavors available
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/flavors
                         */
                        $get(): Promise<cloud.kube.Flavor[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    ipRestrictions: {
                        /**
                         * List your ip restrictions on your cluster
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/ipRestrictions
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Append a list of ip restrictions on your cluster
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/ipRestrictions
                         */
                        $post(params?: { ips?: string[] }): Promise<string[]>;
                        /**
                         * Remove the current list and add a list of ip restrictions on your cluster
                         * PUT /cloud/project/{serviceName}/kube/{kubeId}/ipRestrictions
                         */
                        $put(params?: { ips?: string[] }): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(ip: string): {
                            /**
                             * Delete an ip restriction from your cluster
                             * DELETE /cloud/project/{serviceName}/kube/{kubeId}/ipRestrictions/{ip}
                             */
                            $delete(): Promise<void>;
                        };
                    }
                    kubeconfig: {
                        /**
                         * Generate kubeconfig file
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig
                         */
                        $post(): Promise<cloud.kube.Kubeconfig>;
                        reset: {
                            /**
                             * Reset kubeconfig: Certificates will be regenerated, nodes will be reinstalled
                             * POST /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig/reset
                             */
                            $post(): Promise<void>;
                        }
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    nodepool: {
                        /**
                         * List your nodepools
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool
                         */
                        $get(): Promise<cloud.kube.NodePool[]>;
                        /**
                         * Create a nodepool on your cluster
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/nodepool
                         */
                        $post(params: { antiAffinity?: boolean, autoscale?: boolean, desiredNodes?: number, flavorName: string, maxNodes?: number, minNodes?: number, monthlyBilled?: boolean, name?: string }): Promise<cloud.kube.NodePool>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(nodePoolId: string): {
                            /**
                             * Delete a nodepool from your cluster
                             * DELETE /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get information on a specific nodepool on your cluster
                             * GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
                             */
                            $get(): Promise<cloud.kube.NodePool>;
                            /**
                             * Update your nodepool (quota or size)
                             * PUT /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
                             */
                            $put(params?: { autoscale?: boolean, desiredNodes?: number, maxNodes?: number, minNodes?: number, nodesToRemove?: string[] }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            nodes: {
                                /**
                                 * List all nodes contained in a nodepool
                                 * GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}/nodes
                                 */
                                $get(): Promise<cloud.kube.Node[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    reset: {
                        /**
                         * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/reset
                         */
                        $post(params?: { privateNetworkId?: string, version?: cloud.kube.VersionEnum, workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicyEnum }): Promise<void>;
                    }
                    restart: {
                        /**
                         * Restarting your control plane apiserver to invalidate cache without downtime (using force will create a slight downtime)
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/restart
                         */
                        $post(params?: { force?: boolean }): Promise<void>;
                    }
                    update: {
                        /**
                         * Force cluster and node update to the latest patch within minor version or next minor version
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/update
                         */
                        $post(params?: { strategy?: cloud.kube.UpdateStrategyEnum }): Promise<void>;
                    }
                    updatePolicy: {
                        /**
                         * Change the update policy of your cluster
                         * PUT /cloud/project/{serviceName}/kube/{kubeId}/updatePolicy
                         */
                        $put(params: { updatePolicy: cloud.kube.UpdatePolicyEnum }): Promise<void>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    agreement: {
                        /**
                         * List required agreements to active this lab
                         * GET /cloud/project/{serviceName}/lab/{labId}/agreement
                         */
                        $get(): Promise<cloud.LabAgreements>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            loadbalancer: {
                /**
                 * List all load balancer for a tenant
                 * GET /cloud/project/{serviceName}/loadbalancer
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a load balancer
                 * POST /cloud/project/{serviceName}/loadbalancer
                 */
                $post(params: { description?: string, id?: string, name?: string, networking?: cloud.project.loadbalancer.networking.NetworkingCreation, openstackRegion?: string, region: string, size?: cloud.project.loadbalancer.SizeEnum }): Promise<cloud.project.LoadBalancer>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(loadBalancerId: string): {
                    /**
                     * Delete a load balancer
                     * DELETE /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}
                     */
                    $delete(): Promise<void>;
                    /**
                     * Get a load balancer
                     * GET /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}
                     */
                    $get(): Promise<cloud.project.LoadBalancer>;
                    /**
                     * Update a load balancer
                     * PUT /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}
                     */
                    $put(params?: { address?: cloud.project.loadbalancer.Address, configuration?: cloud.project.loadbalancer.ConfigurationVersion, createdAt?: string, description?: string, egressAddress?: cloud.project.loadbalancer.Addresses, id?: string, name?: string, networking?: cloud.project.loadbalancer.networking.Networking, openstackRegion?: string, region?: string, size?: cloud.project.loadbalancer.SizeEnum, status?: cloud.project.loadbalancer.StatusEnum }): Promise<cloud.project.LoadBalancer>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    configuration: {
                        /**
                         * List all versions of the configuration
                         * GET /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration
                         */
                        $get(): Promise<number[]>;
                        /**
                         * Create a configuration
                         * POST /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration
                         */
                        $post(params?: { backends?: cloud.project.loadbalancer.Backend[], certificates?: string[], frontends?: cloud.project.loadbalancer.Frontend[], networking?: cloud.project.loadbalancer.configuration.networking.Networking, version?: number }): Promise<cloud.project.loadbalancer.Configuration>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(version: number): {
                            /**
                             * Delete a configuration
                             * DELETE /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration/{version}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get a configuration
                             * GET /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration/{version}
                             */
                            $get(): Promise<cloud.project.loadbalancer.Configuration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            apply: {
                                /**
                                 * Apply a configuration
                                 * POST /cloud/project/{serviceName}/loadbalancer/{loadBalancerId}/configuration/{version}/apply
                                 */
                                $post(): Promise<cloud.project.loadbalancer.Configuration>;
                            }
                        };
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        region: {
                            /**
                             * Activate private network in a new region
                             * POST /cloud/project/{serviceName}/network/private/{networkId}/region
                             */
                            $post(params: { region: string }): Promise<cloud.network.Network>;
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
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(subnetId: string): {
                                /**
                                 * Delete a network subnet
                                 * DELETE /cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}
                                 */
                                $delete(): Promise<void>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            openstackClient: {
                /**
                 * Get OVH playground session to use the openstack terminal
                 * POST /cloud/project/{serviceName}/openstackClient
                 */
                $post(): Promise<cloud.openstackClient.Session>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(operationId: string): {
                    /**
                     * Get information about one operation
                     * GET /cloud/project/{serviceName}/operation/{operationId}
                     */
                    $get(): Promise<cloud.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(regionName: string): {
                    /**
                     * Get information about your region
                     * GET /cloud/project/{serviceName}/region/{regionName}
                     */
                    $get(): Promise<cloud.Region>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        allowed: {
                            /**
                             * Get allowed quotas on region
                             * GET /cloud/project/{serviceName}/region/{regionName}/quota/allowed
                             */
                            $get(): Promise<cloud.quota.AllowedQuota[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        storage: {
                            /**
                             * Delete storage quota on region
                             * DELETE /cloud/project/{serviceName}/region/{regionName}/quota/storage
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get storage quotas on region
                             * GET /cloud/project/{serviceName}/region/{regionName}/quota/storage
                             */
                            $get(): Promise<cloud.quota.storage.Quota>;
                            /**
                             * Update storage quota on region
                             * PUT /cloud/project/{serviceName}/region/{regionName}/quota/storage
                             */
                            $put(params: { quotaBytes: number }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(stackId: string): {
                    /**
                     * Get stack
                     * GET /cloud/project/{serviceName}/stack/{stackId}
                     */
                    $get(): Promise<cloud.stack.Stack>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    client: {
                        /**
                         * Get OVH playground session with a stack installed to use the openstack terminal
                         * POST /cloud/project/{serviceName}/stack/{stackId}/client
                         */
                        $post(): Promise<cloud.openstackClient.Session>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                $(containerId: string): {
                    /**
                     * Delete container
                     * DELETE /cloud/project/{serviceName}/storage/{containerId}
                     */
                    $delete(params?: { recursive?: boolean }): Promise<void>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    }
                    publicUrl: {
                        /**
                         * Get a public temporary URL to access to one of your object
                         * POST /cloud/project/{serviceName}/storage/{containerId}/publicUrl
                         */
                        $post(params: { expirationDate: string, objectName: string }): Promise<cloud.storage.ContainerObjectTempURL>;
                    }
                    static: {
                        /**
                         * Deploy your container files as a static web site
                         * POST /cloud/project/{serviceName}/storage/{containerId}/static
                         */
                        $post(): Promise<void>;
                    }
                    user: {
                        /**
                         * Create openstack user with only access to this container
                         * POST /cloud/project/{serviceName}/storage/{containerId}/user
                         */
                        $post(params: { description?: string, right: cloud.storage.RightEnum }): Promise<cloud.user.UserDetail>;
                    }
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /cloud/project/{serviceName}/terminate
                 */
                $post(): Promise<string>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    openrc: {
                        /**
                         * Get RC file of OpenStack
                         * GET /cloud/project/{serviceName}/user/{userId}/openrc
                         */
                        $get(params: { region: string, version?: cloud.user.OpenrcVersionEnum }): Promise<cloud.user.Openrc>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    regeneratePassword: {
                        /**
                         * Regenerate user password
                         * POST /cloud/project/{serviceName}/user/{userId}/regeneratePassword
                         */
                        $post(): Promise<cloud.user.UserDetail>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    s3Credentials: {
                        /**
                         * List your S3 credentials
                         * GET /cloud/project/{serviceName}/user/{userId}/s3Credentials
                         */
                        $get(): Promise<cloud.user.S3CredentialsWithSecret[]>;
                        /**
                         * Create a new S3 credentials for an user
                         * POST /cloud/project/{serviceName}/user/{userId}/s3Credentials
                         */
                        $post(): Promise<cloud.user.S3CredentialsWithSecret>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(access: string): {
                            /**
                             * Delete an S3 credential
                             * DELETE /cloud/project/{serviceName}/user/{userId}/s3Credentials/{access}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get details about an S3 credential
                             * GET /cloud/project/{serviceName}/user/{userId}/s3Credentials/{access}
                             */
                            $get(): Promise<cloud.user.S3CredentialsWithSecret>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    token: {
                        /**
                         * Get token for user
                         * POST /cloud/project/{serviceName}/user/{userId}/token
                         */
                        $post(params: { password: string }): Promise<cloud.authentication.Token>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                snapshot: {
                    /**
                     * Get volume snapshots
                     * GET /cloud/project/{serviceName}/volume/snapshot
                     */
                    $get(params?: { region?: string }): Promise<cloud.volume.Snapshot[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    attach: {
                        /**
                         * Attach a volume on an instance
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/attach
                         */
                        $post(params: { instanceId: string }): Promise<cloud.volume.Volume>;
                    }
                    detach: {
                        /**
                         * Detach a volume from an instance
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/detach
                         */
                        $post(params: { instanceId: string }): Promise<cloud.volume.Volume>;
                    }
                    snapshot: {
                        /**
                         * Snapshot a volume
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/snapshot
                         */
                        $post(params?: { description?: string, name?: string }): Promise<cloud.volume.Snapshot>;
                    }
                    upsize: {
                        /**
                         * Extend a volume
                         * POST /cloud/project/{serviceName}/volume/{volumeId}/upsize
                         */
                        $post(params: { size: number }): Promise<cloud.volume.Volume>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}
