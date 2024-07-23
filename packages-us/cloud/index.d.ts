import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

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
        type: cloud.RegionTypeEnum;
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
        id: string;
        state: cloud.ExecutionStateEnum;
        stateInfo: string;
    }
    /**
     * Enum values for State
     * type fullname: cloud.ExecutionStateEnum
     */
    export type ExecutionStateEnum = "CANCELED" | "ERROR" | "IDLE" | "PAUSED" | "RUNNING" | "SUCCESS"
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
     * type fullname: cloud.LabStatusEnum
     */
    export type LabStatusEnum = "activated" | "activating" | "closed" | "open"
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
        resourceId?: string;
        startedAt?: string;
        status: cloud.OperationStatusEnum;
        subOperations?: cloud.SubOperation[];
    }
    /**
     * Enum values for Status
     * type fullname: cloud.OperationStatusEnum
     */
    export type OperationStatusEnum = "completed" | "created" | "in-error" | "in-progress" | "unknown"
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
        customization?: cloud.ProjectKubeCustomization;
        kubeProxyMode: cloud.kube.KubeProxyModeEnum;
        loadBalancersSubnetId: string;
        name: string;
        nodepool: cloud.ProjectKubeCreationNodePool;
        nodesSubnetId: string;
        privateNetworkConfiguration: cloud.kube.PrivateNetworkConfiguration;
        privateNetworkId: string;
        region: string;
        updatePolicy?: cloud.kube.UpdatePolicyEnum;
        version: cloud.kube.VersionEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeCreationNodePool.ProjectKubeCreationNodePool
     */
    export interface ProjectKubeCreationNodePool {
        antiAffinity?: boolean;
        autoscale?: boolean;
        desiredNodes: number;
        flavorName: string;
        maxNodes: number;
        minNodes: number;
        monthlyBilled?: boolean;
        name: string;
        template: cloud.kube.NodePoolTemplate;
    }
    /**
     * Cluster customization
     * interface fullName: cloud.ProjectKubeCustomization.ProjectKubeCustomization
     */
    export interface ProjectKubeCustomization {
        apiServer?: cloud.ProjectKubeCustomizationAPIServer;
        kubeProxy?: cloud.ProjectKubeCustomizationKubeProxy;
    }
    /**
     * Cluster API server customization
     * interface fullName: cloud.ProjectKubeCustomizationAPIServer.ProjectKubeCustomizationAPIServer
     */
    export interface ProjectKubeCustomizationAPIServer {
        admissionPlugins?: cloud.ProjectKubeCustomizationAPIServerAdmissionPlugins;
    }
    /**
     * Cluster API server admission plugins customization
     * interface fullName: cloud.ProjectKubeCustomizationAPIServerAdmissionPlugins.ProjectKubeCustomizationAPIServerAdmissionPlugins
     */
    export interface ProjectKubeCustomizationAPIServerAdmissionPlugins {
        disabled?: cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[];
        enabled?: cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[];
    }
    /**
     * Enum admission plugins
     * type fullname: cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum
     */
    export type ProjectKubeCustomizationAPIServerAdmissionPluginsEnum = "AlwaysPullImages" | "NodeRestriction"
    /**
     * Cluster kube-proxy customization: iptables and ipvs configurations can both be set at the same time, kube-proxy will use the one according to the cluster's kubeProxyMode value
     * interface fullName: cloud.ProjectKubeCustomizationKubeProxy.ProjectKubeCustomizationKubeProxy
     */
    export interface ProjectKubeCustomizationKubeProxy {
        iptables?: cloud.ProjectKubeCustomizationKubeProxyIptables;
        ipvs?: cloud.ProjectKubeCustomizationKubeProxyIpvs;
    }
    /**
     * Configuration used when kube-proxy is configured with iptables mode (durations format is RFC3339 duration, e.g. 'PT60S')
     * interface fullName: cloud.ProjectKubeCustomizationKubeProxyIptables.ProjectKubeCustomizationKubeProxyIptables
     */
    export interface ProjectKubeCustomizationKubeProxyIptables {
        minSyncPeriod?: string;
        syncPeriod?: string;
    }
    /**
     * Configuration used when kube-proxy is configured with ipvs mode (durations format is RFC3339 duration, e.g. 'PT60S')
     * interface fullName: cloud.ProjectKubeCustomizationKubeProxyIpvs.ProjectKubeCustomizationKubeProxyIpvs
     */
    export interface ProjectKubeCustomizationKubeProxyIpvs {
        minSyncPeriod?: string;
        scheduler?: cloud.kube.KubeProxyIpvsSchedulerEnum;
        syncPeriod?: string;
        tcpFinTimeout?: string;
        tcpTimeout?: string;
        udpTimeout?: string;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeIpRestrictionUpsert.ProjectKubeIpRestrictionUpsert
     */
    export interface ProjectKubeIpRestrictionUpsert {
        ips: string[];
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeNodePoolAutoscalingParams.ProjectKubeNodePoolAutoscalingParams
     */
    export interface ProjectKubeNodePoolAutoscalingParams {
        scaleDownUnneededTimeSeconds: number;
        scaleDownUnreadyTimeSeconds: number;
        scaleDownUtilizationThreshold: number;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeNodePoolCreation.ProjectKubeNodePoolCreation
     */
    export interface ProjectKubeNodePoolCreation {
        antiAffinity?: boolean;
        autoscale?: boolean;
        autoscaling: cloud.ProjectKubeNodePoolAutoscalingParams;
        desiredNodes: number;
        flavorName: string;
        maxNodes: number;
        minNodes: number;
        monthlyBilled?: boolean;
        name: string;
        template: cloud.kube.NodePoolTemplate;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeNodePoolUpdate.ProjectKubeNodePoolUpdate
     */
    export interface ProjectKubeNodePoolUpdate {
        autoscale?: boolean;
        autoscaling: cloud.ProjectKubeNodePoolAutoscalingParams;
        desiredNodes: number;
        maxNodes: number;
        minNodes: number;
        nodesToRemove: string[];
        template: cloud.kube.NodePoolTemplate;
    }
    /**
     * Creation model for OIDC
     * interface fullName: cloud.ProjectKubeOpenIdConnectCreation.ProjectKubeOpenIdConnectCreation
     */
    export interface ProjectKubeOpenIdConnectCreation {
        caContent?: string;
        clientId: string;
        groupsClaim?: string[];
        groupsPrefix?: string;
        issuerUrl: string;
        requiredClaim?: string[];
        signingAlgorithms?: cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
        usernameClaim?: string;
        usernamePrefix?: string;
    }
    /**
     * Update model for OIDC
     * interface fullName: cloud.ProjectKubeOpenIdConnectUpdate.ProjectKubeOpenIdConnectUpdate
     */
    export interface ProjectKubeOpenIdConnectUpdate {
        caContent?: string;
        clientId: string;
        groupsClaim?: string[];
        groupsPrefix?: string;
        issuerUrl: string;
        requiredClaim?: string[];
        signingAlgorithms?: cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
        usernameClaim?: string;
        usernamePrefix?: string;
    }
    /**
     * Model object to reset kube cluster
     * interface fullName: cloud.ProjectKubeResetCreation.ProjectKubeResetCreation
     */
    export interface ProjectKubeResetCreation {
        customization: cloud.ProjectKubeCustomization;
        kubeProxyMode: cloud.kube.KubeProxyModeEnum;
        loadBalancersSubnetId: string;
        name: string;
        nodesSubnetId: string;
        privateNetworkConfiguration: cloud.kube.PrivateNetworkConfiguration;
        privateNetworkId: string;
        updatePolicy: cloud.kube.UpdatePolicyEnum;
        version: cloud.kube.VersionEnum;
        workerNodesPolicy: cloud.kube.ResetWorkerNodesPolicyEnum;
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
        updatePolicy: cloud.kube.UpdatePolicyEnum;
    }
    /**
     * Missing description
     * interface fullName: cloud.ProjectKubeUpdateCreation.ProjectKubeUpdateCreation
     */
    export interface ProjectKubeUpdateCreation {
        force?: boolean;
        strategy: cloud.kube.UpdateStrategyEnum;
    }
    /**
     * Model object to update loadBalancersSubnetId property of a kube cluster
     * interface fullName: cloud.ProjectKubeUpdateLoadBalancersSubnetId.ProjectKubeUpdateLoadBalancersSubnetId
     */
    export interface ProjectKubeUpdateLoadBalancersSubnetId {
        loadBalancersSubnetId: string;
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
     * Project
     * interface fullName: cloud.ProjectWithIAM.ProjectWithIAM
     */
    export interface ProjectWithIAM {
        access: cloud.AccessTypeEnum;
        creationDate: string;
        description?: string;
        expiration?: string;
        iam?: iam.ResourceMetadata;
        manualQuota: boolean;
        orderId?: number;
        planCode: string;
        projectName?: string;
        project_id: string;
        status: cloud.project.ProjectStatusEnum;
        unleash: boolean;
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
        type: cloud.RegionTypeEnum;
    }
    /**
     * Enum values for ContinentCode
     * type fullname: cloud.RegionContinentEnum
     */
    export type RegionContinentEnum = "ASIA" | "EU" | "NA" | "US"
    /**
     * Enum values for Status
     * type fullname: cloud.RegionStatusEnum
     */
    export type RegionStatusEnum = "DOWN" | "MAINTENANCE" | "UP"
    /**
     * Enum values for region type
     * type fullname: cloud.RegionTypeEnum
     */
    export type RegionTypeEnum = "localzone" | "region"
    /**
     * Enum values for Status
     * type fullname: cloud.ServiceStatusEnum
     */
    export type ServiceStatusEnum = "DOWN" | "UP"
    /**
     * Container
     * interface fullName: cloud.StorageContainer.StorageContainer
     */
    export interface StorageContainer {
        createdAt: string;
        encryption?: cloud.StorageEncryptionObject;
        name: string;
        objects: cloud.StorageObject[];
        objectsCount: number;
        objectsSize: number;
        ownerId: number;
        region: string;
        versioning?: cloud.StorageVersioningObject;
        virtualHost: string;
    }
    /**
     * Create a container
     * interface fullName: cloud.StorageContainerCreation.StorageContainerCreation
     */
    export interface StorageContainerCreation {
        encryption?: cloud.StorageEncryptionObject;
        name: string;
        ownerId?: number;
        versioning?: cloud.StorageVersioningObject;
    }
    /**
     * Object
     * interface fullName: cloud.StorageEncryptionObject.StorageEncryptionObject
     */
    export interface StorageEncryptionObject {
        sseAlgorithm?: cloud.storage.EncryptionAlgorithmEnum;
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
        storageClass: cloud.storage.StorageClassEnum;
    }
    /**
     * Object
     * interface fullName: cloud.StorageVersioningObject.StorageVersioningObject
     */
    export interface StorageVersioningObject {
        status?: cloud.storage.VersioningStatusEnum;
    }
    /**
     * A sub-operation is a child of an operation on your Project
     * interface fullName: cloud.SubOperation.SubOperation
     */
    export interface SubOperation {
        action: string;
        completedAt?: string;
        id: string;
        progress: number;
        regions?: string[];
        resourceId?: string;
        startedAt?: string;
        status: cloud.OperationStatusEnum;
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
            type: cloud.RegionTypeEnum;
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
         * Container registry Get IP Restrictions
         * interface fullName: cloud.containerRegistry.IPRestrictions.IPRestrictions
         */
        export interface IPRestrictions {
            createdAt: string;
            description: string;
            ipBlock: string;
            updatedAt: string;
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
         * Docker registry OIDC Configuration
         * interface fullName: cloud.containerRegistry.OIDCConfiguration.OIDCConfiguration
         */
        export interface OIDCConfiguration {
            adminGroup?: string;
            autoOnboard?: boolean;
            clientId: string;
            clientSecret: string;
            createdAt: string;
            endpoint: string;
            groupsClaim?: string;
            id: string;
            name: string;
            scope: string;
            status: cloud.containerRegistry.OIDCStatusEnum;
            updatedAt?: string;
            userClaim?: string;
            verifyCert?: boolean;
        }
        /**
         * Docker registry Post OIDC configuration
         * interface fullName: cloud.containerRegistry.OIDCPost.OIDCPost
         */
        export interface OIDCPost {
            deleteUsers?: boolean;
            provider: cloud.containerRegistry.OIDCConfiguration;
        }
        /**
         * Docker registry Put OIDC Configuration
         * interface fullName: cloud.containerRegistry.OIDCPut.OIDCPut
         */
        export interface OIDCPut {
            adminGroup?: string;
            autoOnboard?: boolean;
            clientId?: string;
            clientSecret?: string;
            endpoint?: string;
            groupsClaim?: string;
            name?: string;
            scope?: string;
            userClaim?: string;
            verifyCert?: boolean;
        }
        /**
         * Status of the registry's oidc configuration
         * type fullname: cloud.containerRegistry.OIDCStatusEnum
         */
        export type OIDCStatusEnum = "DELETING" | "ERROR" | "INSTALLING" | "PATCHING" | "READY" | "UPDATING"
        /**
         * Plan of the registry
         * interface fullName: cloud.containerRegistry.Plan.Plan
         */
        export interface Plan {
            code: string;
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
        export type StatusEnum = "DELETED" | "DELETING" | "ERROR" | "INSTALLING" | "READY" | "RESTORING" | "SUSPENDED" | "SUSPENDING" | "UPDATING"
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
        export type CapabilityNameEnum = "failoverip" | "resize" | "snapshot" | "volume"
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
        export type OSTypeEnum = "baremetal-linux" | "bsd" | "linux" | "windows"
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
         * Parameters to associate an existing floating IP to an instance
         * interface fullName: cloud.instance.AssociateFloatingIp.AssociateFloatingIp
         */
        export interface AssociateFloatingIp {
            floatingIpId: string;
            gateway?: cloud.network.CreateGatewaySummary;
            ip: string;
        }
        /**
         * Autobackup params at instance creation
         * interface fullName: cloud.instance.AutoBackup.AutoBackup
         */
        export interface AutoBackup {
            cron: string;
            rotation: number;
        }
        /**
         * Parameters to create a floating IP for an instance
         * interface fullName: cloud.instance.CreateFloatingIp.CreateFloatingIp
         */
        export interface CreateFloatingIp {
            gateway?: cloud.network.CreateGatewaySummary;
            ip: string;
        }
        /**
         * Instance creation input
         * interface fullName: cloud.instance.CreateInput.CreateInput
         */
        export interface CreateInput {
            autobackup?: cloud.instance.CreateInput.Autobackup;
            billingPeriod: cloud.instance.CreateInput.BillingPeriodEnum;
            bootFrom: cloud.instance.CreateInput.BootFrom;
            bulk: number;
            flavor: cloud.instance.CreateInput.Flavor;
            group?: cloud.instance.CreateInput.Group;
            name: string;
            network: cloud.instance.CreateInput.Network;
            sshKey?: cloud.instance.CreateInput.SshKey;
            sshKeyCreate?: cloud.instance.CreateInput.SshKeyCreate;
            userData?: string;
        }
        export namespace CreateInput {
            /**
             * Create an autobackup workflow after instance start up
             * interface fullName: cloud.instance.CreateInput.Autobackup.Autobackup
             */
            export interface Autobackup {
                cron: string;
                rotation: number;
            }
            /**
             * Billing period
             * type fullname: cloud.instance.CreateInput.BillingPeriodEnum
             */
            export type BillingPeriodEnum = "hourly" | "monthly"
            /**
             * Boot the instance from an image or a volume
             * interface fullName: cloud.instance.CreateInput.BootFrom.BootFrom
             */
            export interface BootFrom {
                imageId?: string;
                volumeId?: string;
            }
            /**
             * Flavor information
             * interface fullName: cloud.instance.CreateInput.Flavor.Flavor
             */
            export interface Flavor {
                id: string;
            }
            /**
             * Start instance in group
             * interface fullName: cloud.instance.CreateInput.Group.Group
             */
            export interface Group {
                id: string;
            }
            /**
             * Networks information
             * interface fullName: cloud.instance.CreateInput.Network.Network
             */
            export interface Network {
                private?: cloud.instance.CreateInput.Network.Private;
                public: boolean;
            }
            export namespace Network {
                /**
                 * Private network information
                 * interface fullName: cloud.instance.CreateInput.Network.Private.Private
                 */
                export interface Private {
                    floatingIp?: cloud.instance.CreateInput.Network.Private.FloatingIp;
                    floatingIpCreate?: cloud.instance.CreateInput.Network.Private.FloatingIpCreate;
                    gateway?: cloud.instance.CreateInput.Network.Private.Gateway;
                    gatewayCreate?: cloud.instance.CreateInput.Network.Private.GatewayCreate;
                    ip?: string;
                    network?: cloud.instance.CreateInput.Network.Private.Network;
                    networkCreate?: cloud.instance.CreateInput.Network.Private.NetworkCreate;
                }
                export namespace Private {
                    /**
                     * Existing floating IP
                     * interface fullName: cloud.instance.CreateInput.Network.Private.FloatingIp.FloatingIp
                     */
                    export interface FloatingIp {
                        id: string;
                    }
                    /**
                     * Information to create a new floating IP
                     * interface fullName: cloud.instance.CreateInput.Network.Private.FloatingIpCreate.FloatingIpCreate
                     */
                    export interface FloatingIpCreate {
                        description: string;
                    }
                    /**
                     * Existing gateway
                     * interface fullName: cloud.instance.CreateInput.Network.Private.Gateway.Gateway
                     */
                    export interface Gateway {
                        id: string;
                    }
                    /**
                     * Information to create a new gateway
                     * interface fullName: cloud.instance.CreateInput.Network.Private.GatewayCreate.GatewayCreate
                     */
                    export interface GatewayCreate {
                        model: cloud.instance.CreateInput.Network.Private.GatewayCreate.ModelEnum;
                        name: string;
                    }
                    export namespace GatewayCreate {
                        /**
                         * Gateway model
                         * type fullname: cloud.instance.CreateInput.Network.Private.GatewayCreate.ModelEnum
                         */
                        export type ModelEnum = "l" | "m" | "s"
                    }
                    /**
                     * Existing private network
                     * interface fullName: cloud.instance.CreateInput.Network.Private.Network.Network
                     */
                    export interface Network {
                        id: string;
                        subnetId: string;
                    }
                    /**
                     * Information to create a new private network
                     * interface fullName: cloud.instance.CreateInput.Network.Private.NetworkCreate.NetworkCreate
                     */
                    export interface NetworkCreate {
                        name: string;
                        subnet: cloud.instance.CreateInput.Network.Private.NetworkCreate.Subnet;
                        vlanId?: number;
                    }
                    export namespace NetworkCreate {
                        /**
                         * New subnet information
                         * interface fullName: cloud.instance.CreateInput.Network.Private.NetworkCreate.Subnet.Subnet
                         */
                        export interface Subnet {
                            cidr: string;
                            enableDhcp: boolean;
                            ipVersion: number;
                        }
                    }
                }
            }
            /**
             * Existing SSH Keypair
             * interface fullName: cloud.instance.CreateInput.SshKey.SshKey
             */
            export interface SshKey {
                name: string;
            }
            /**
             * Information to create a new SSH Keypair
             * interface fullName: cloud.instance.CreateInput.SshKeyCreate.SshKeyCreate
             */
            export interface SshKeyCreate {
                name: string;
                publicKey: string;
            }
        }
        /**
         * Instance
         * interface fullName: cloud.instance.Instance.Instance
         */
        export interface Instance {
            created: string;
            currentMonthOutgoingTraffic?: number;
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
         * IP address
         * interface fullName: cloud.instance.InstanceAddress.InstanceAddress
         */
        export interface InstanceAddress {
            ip: string;
            version: number;
        }
        /**
         * InstanceDetail
         * interface fullName: cloud.instance.InstanceDetail.InstanceDetail
         */
        export interface InstanceDetail {
            created: string;
            currentMonthOutgoingTraffic?: number;
            flavor: cloud.flavor.Flavor;
            id: string;
            image: cloud.image.Image;
            ipAddresses: cloud.instance.IpAddress[];
            monthlyBilling?: cloud.instance.MonthlyBilling;
            name: string;
            operationIds: string[];
            planCode?: string;
            region: string;
            rescuePassword?: string;
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
        export type InstanceStatusEnum = "ACTIVE" | "BUILD" | "BUILDING" | "DELETED" | "DELETING" | "ERROR" | "HARD_REBOOT" | "MIGRATING" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUE" | "RESCUED" | "RESCUING" | "RESIZE" | "RESIZED" | "RESUMING" | "REVERT_RESIZE" | "SHELVED" | "SHELVED_OFFLOADED" | "SHELVING" | "SHUTOFF" | "SNAPSHOTTING" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "UNRESCUING" | "UNSHELVING" | "VERIFY_RESIZE"
        /**
         * Instance
         * interface fullName: cloud.instance.InstanceSummary.InstanceSummary
         */
        export interface InstanceSummary {
            addresses: cloud.instance.InstanceAddress[];
            attachedVolumes: cloud.instance.InstanceSummaryVolumeValue[];
            flavorId: string;
            flavorName: string;
            id: string;
            imageId: string;
            name: string;
            region: string;
            sshKey: string;
            taskState: cloud.instance.InstanceSummaryTaskStateEnum;
        }
        /**
         * Enum values for taskState of an instance
         * type fullname: cloud.instance.InstanceSummaryTaskStateEnum
         */
        export type InstanceSummaryTaskStateEnum = "" | "BlockDeviceMapping" | "Deleting" | "ImagePendingUpload" | "ImageSnapshot" | "ImageUpload" | "Migrating" | "Networking" | "Pausing" | "PoweringOff" | "PoweringOn" | "Rebooting" | "RebootingHard" | "RebuildBlockDeviceMapping" | "RebuildSpawning" | "Rebuilding" | "Rescuing" | "ResizeConfirming" | "ResizeFinish" | "ResizeMigrated" | "ResizeMigrating" | "ResizePrep" | "ResizeReverting" | "Resuming" | "Scheduling" | "Spawning" | "Starting" | "Stopping" | "Suspending" | "Unknown" | "Unpausing" | "Unrescuing" | "UpdatingPassword"
        /**
         * Volumes attached to your instance
         * interface fullName: cloud.instance.InstanceSummaryVolumeValue.InstanceSummaryVolumeValue
         */
        export interface InstanceSummaryVolumeValue {
            id: string;
        }
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
         * type fullname: cloud.instance.MetricsPeriodEnum
         */
        export type MetricsPeriodEnum = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        /**
         * MetricsType
         * type fullname: cloud.instance.MetricsTypeEnum
         */
        export type MetricsTypeEnum = "cpu:max" | "cpu:used" | "mem:max" | "mem:used" | "net:rx" | "net:tx"
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
        export type RebootTypeEnum = "hard" | "soft"
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
    export namespace keymanager {
        /**
         * Key-manager certificate secret container
         * interface fullName: cloud.keymanager.Certificate.Certificate
         */
        export interface Certificate {
            id: string;
            name: string;
            region: string;
            secrets: cloud.keymanager.SecretRef[];
        }
        /**
         * Input to create a certificate
         * interface fullName: cloud.keymanager.CertificateCreate.CertificateCreate
         */
        export interface CertificateCreate {
            certificate: string;
            intermediates: string;
            name: string;
            privateKey: string;
            privateKeyPassphrase: string;
        }
        /**
         * secret
         * interface fullName: cloud.keymanager.Secret.Secret
         */
        export interface Secret {
            id: string;
            name: string;
            region: string;
        }
        /**
         * Secret reference
         * interface fullName: cloud.keymanager.SecretRef.SecretRef
         */
        export interface SecretRef {
            id: string;
            name: string;
        }
    }
    export namespace kube {
        /**
         * Managed Kubernetes cluster description
         * interface fullName: cloud.kube.Cluster.Cluster
         */
        export interface Cluster {
            auditLogsSubscribed: boolean;
            controlPlaneIsUpToDate: boolean;
            createdAt: string;
            customization?: cloud.ProjectKubeCustomization;
            id: string;
            isUpToDate: boolean;
            kubeProxyMode: cloud.kube.KubeProxyModeEnum;
            loadBalancersSubnetId?: string;
            name: string;
            nextUpgradeVersions?: string[];
            nodesSubnetId?: string;
            nodesUrl: string;
            privateNetworkConfiguration?: cloud.kube.PrivateNetworkConfiguration;
            privateNetworkId?: string;
            region: string;
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
        export type ClusterStatusEnum = "DELETED" | "DELETING" | "ERROR" | "INSTALLING" | "MAINTENANCE" | "READY" | "REDEPLOYING" | "REOPENING" | "RESETTING" | "SUSPENDED" | "SUSPENDING" | "UPDATING" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
        /**
         * Etcd usage and quota for a given cluster
         * interface fullName: cloud.kube.EtcdUsage.EtcdUsage
         */
        export interface EtcdUsage {
            quota: number;
            usage: number;
        }
        /**
         * a flavor kind
         * interface fullName: cloud.kube.Flavor.Flavor
         */
        export interface Flavor {
            category: cloud.kube.FlavorCategoryEnum;
            gpus: number;
            name: string;
            ram: number;
            state: cloud.kube.FlavorStateEnum;
            vCPUs: number;
        }
        /**
         * Enum values for category
         * type fullname: cloud.kube.FlavorCategoryEnum
         */
        export type FlavorCategoryEnum = "a" | "b" | "c" | "d" | "g" | "h" | "i" | "l" | "r" | "t"
        /**
         * Enum values for State
         * type fullname: cloud.kube.FlavorStateEnum
         */
        export type FlavorStateEnum = "available" | "unavailable"
        /**
         * Enum values for scheduler parameter of cluster kubeProxy custom ipvs config
         * type fullname: cloud.kube.KubeProxyIpvsSchedulerEnum
         */
        export type KubeProxyIpvsSchedulerEnum = "dh" | "lc" | "nq" | "rr" | "sed" | "sh"
        /**
         * Enum values for cluster kubeProxyMode
         * type fullname: cloud.kube.KubeProxyModeEnum
         */
        export type KubeProxyModeEnum = "iptables" | "ipvs"
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
            name: string;
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
            autoscaling: cloud.kube.NodePoolAutoscaling;
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
            template: cloud.kube.NodePoolTemplate;
            upToDateNodes: number;
            updatedAt: string;
        }
        /**
         * Autoscaling customization parameters
         * interface fullName: cloud.kube.NodePoolAutoscaling.NodePoolAutoscaling
         */
        export interface NodePoolAutoscaling {
            scaleDownUnneededTimeSeconds: number;
            scaleDownUnreadyTimeSeconds: number;
            scaleDownUtilizationThreshold: number;
        }
        /**
         * Enum values for NodePool size Status
         * type fullname: cloud.kube.NodePoolSizeStatusEnum
         */
        export type NodePoolSizeStatusEnum = "CAPACITY_OK" | "OVER_CAPACITY" | "UNDER_CAPACITY"
        /**
         * Enum values for NodePool Status
         * type fullname: cloud.kube.NodePoolStatusEnum
         */
        export type NodePoolStatusEnum = "DELETED" | "DELETING" | "DOWNSCALING" | "ERROR" | "INSTALLING" | "MAINTENANCE" | "READY" | "REDEPLOYING" | "REOPENING" | "RESETTING" | "SUSPENDED" | "SUSPENDING" | "UPDATING" | "UPSCALING" | "USER_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "USER_QUOTA_ERROR" | "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
        /**
         * Managed Kubernetes nodepool template
         * interface fullName: cloud.kube.NodePoolTemplate.NodePoolTemplate
         */
        export interface NodePoolTemplate {
            metadata: cloud.kube.NodePoolTemplateMetadata;
            spec: cloud.kube.NodePoolTemplateSpec;
        }
        /**
         * Metadata of each nodes in the pool
         * interface fullName: cloud.kube.NodePoolTemplateMetadata.NodePoolTemplateMetadata
         */
        export interface NodePoolTemplateMetadata {
            annotations: { [key: string]: string };
            finalizers: string[];
            labels: { [key: string]: string };
        }
        /**
         * Spec of each nodes in the pool
         * interface fullName: cloud.kube.NodePoolTemplateSpec.NodePoolTemplateSpec
         */
        export interface NodePoolTemplateSpec {
            taints: cloud.kube.Taint[];
            unschedulable: boolean;
        }
        /**
         * Enum values for Status
         * type fullname: cloud.kube.NodeStatusEnum
         */
        export type NodeStatusEnum = "DELETED" | "DELETING" | "ERROR" | "FLAVOR_OUT_OF_STOCK_ERROR" | "INSTALLING" | "MAINTENANCE" | "READY" | "REDEPLOYING" | "REOPENING" | "RESETTING" | "SUSPENDED" | "SUSPENDING" | "UPDATING" | "USER_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "USER_QUOTA_ERROR" | "USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR"
        /**
         * Managed Kubernetes oidc integration
         * interface fullName: cloud.kube.OpenIdConnect.OpenIdConnect
         */
        export interface OpenIdConnect {
            caContent?: string;
            clientId: string;
            groupsClaim?: string[];
            groupsPrefix?: string;
            issuerUrl: string;
            requiredClaim?: string[];
            signingAlgorithms?: cloud.kube.OpenIdConnectSigningAlgorithmsEnum[];
            usernameClaim?: string;
            usernamePrefix?: string;
        }
        /**
         * Enum values for OpenIdConnect signing algorithms
         * type fullname: cloud.kube.OpenIdConnectSigningAlgorithmsEnum
         */
        export type OpenIdConnectSigningAlgorithmsEnum = "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "RS256" | "RS384" | "RS512"
        /**
         * Managed Kubernetes cluster private networking configuration
         * interface fullName: cloud.kube.PrivateNetworkConfiguration.PrivateNetworkConfiguration
         */
        export interface PrivateNetworkConfiguration {
            defaultVrackGateway: string;
            privateNetworkRoutingAsDefault?: boolean;
        }
        /**
         * Enum values for worker nodes reset policy
         * type fullname: cloud.kube.ResetWorkerNodesPolicyEnum
         */
        export type ResetWorkerNodesPolicyEnum = "delete" | "reinstall"
        /**
         * A generic object for response message
         * interface fullName: cloud.kube.ResponseMessage.ResponseMessage
         */
        export interface ResponseMessage {
            message: string;
        }
        /**
         * Kubernetes taint object
         * interface fullName: cloud.kube.Taint.Taint
         */
        export interface Taint {
            effect: cloud.kube.TaintEffectEnum;
            key: string;
            value: string;
        }
        /**
         * Enum values for taint effects
         * type fullname: cloud.kube.TaintEffectEnum
         */
        export type TaintEffectEnum = "NoExecute" | "NoSchedule" | "PreferNoSchedule"
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
         * List of available versions for installation
         * type fullname: cloud.kube.VersionEnum
         */
        export type VersionEnum = "1.26" | "1.27" | "1.28" | "1.29"
    }
    export namespace loadbalancing {
        /**
         * Parameters to associate an existing floating IP to a loadbalancer
         * interface fullName: cloud.loadbalancing.AssociateFloatingIp.AssociateFloatingIp
         */
        export interface AssociateFloatingIp {
            floatingIpId: string;
            gateway?: cloud.network.CreateGatewaySummary;
            ip: string;
        }
        /**
         * Parameters to create a floating IP for a loadbalancer
         * interface fullName: cloud.loadbalancing.CreateFloatingIp.CreateFloatingIp
         */
        export interface CreateFloatingIp {
            gateway?: cloud.network.CreateGatewaySummary;
            ip: string;
        }
        /**
         * Input to create a loadbalancer listener
         * interface fullName: cloud.loadbalancing.CreateListener.CreateListener
         */
        export interface CreateListener {
            allowedCidrs: string[];
            certificateId: string;
            defaultPoolId: string;
            description: string;
            loadbalancerId: string;
            name: string;
            port: number;
            protocol: cloud.loadbalancing.ListenerProtocolEnum;
            timeoutClientData: number;
            timeoutMemberData: number;
            tlsVersions: cloud.loadbalancing.ListenerTlsVersionEnum[];
        }
        /**
         * Edit a loadbalancer listener
         * interface fullName: cloud.loadbalancing.EditListener.EditListener
         */
        export interface EditListener {
            allowedCidrs: string[];
            certificateId: string;
            defaultPoolId: string;
            description: string;
            name: string;
        }
        /**
         * Flavor
         * interface fullName: cloud.loadbalancing.Flavor.Flavor
         */
        export interface Flavor {
            id: string;
            name: string;
            region: string;
        }
        /**
         * HealthMonitor
         * interface fullName: cloud.loadbalancing.HealthMonitor.HealthMonitor
         */
        export interface HealthMonitor {
            delay: number;
            httpConfiguration?: cloud.loadbalancing.HealthMonitorHTTPConfiguration;
            id: string;
            maxRetries: number;
            maxRetriesDown?: number;
            monitorType: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum;
            name: string;
            operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
            poolId: string;
            provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            timeout: number;
        }
        /**
         * Create a health monitor on loadbalancer creation
         * interface fullName: cloud.loadbalancing.HealthMonitorCreate.HealthMonitorCreate
         */
        export interface HealthMonitorCreate {
            delay: number;
            httpConfiguration?: cloud.loadbalancing.HealthMonitorHTTPConfiguration;
            maxRetries: number;
            maxRetriesDown?: number;
            monitorType: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum;
            name: string;
            operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
            provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            timeout: number;
        }
        /**
         * HTTP configuration for loadbalancer health monitor
         * interface fullName: cloud.loadbalancing.HealthMonitorHTTPConfiguration.HealthMonitorHTTPConfiguration
         */
        export interface HealthMonitorHTTPConfiguration {
            domainName: string;
            expectedCodes: string;
            httpMethod: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPMethodEnum;
            httpVersion?: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPVersionEnum;
            urlPath: string;
        }
        /**
         * L7 policy
         * interface fullName: cloud.loadbalancing.L7Policy.L7Policy
         */
        export interface L7Policy {
            action: cloud.loadbalancing.L7PolicyActionEnum;
            description: string;
            id: string;
            listenerId: string;
            name: string;
            operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
            position: number;
            provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            redirectHttpCode?: cloud.loadbalancing.L7PolicyRedirectHTTPCodeEnum;
            redirectPoolId?: string;
            redirectPrefix?: string;
            redirectUrl?: string;
        }
        /**
         * Loadbalancer L7 policy
         * type fullname: cloud.loadbalancing.L7PolicyActionEnum
         */
        export type L7PolicyActionEnum = "redirectPrefix" | "redirectToPool" | "redirectToURL" | "reject"
        /**
         * Loadbalancer L7 policy redirect HTTP code
         * type fullname: cloud.loadbalancing.L7PolicyRedirectHTTPCodeEnum
         */
        export type L7PolicyRedirectHTTPCodeEnum = 301 | 302 | 303 | 307 | 308
        /**
         * L7 policy
         * interface fullName: cloud.loadbalancing.L7PolicyUpdate.L7PolicyUpdate
         */
        export interface L7PolicyUpdate {
            action: cloud.loadbalancing.L7PolicyActionEnum;
            description: string;
            listenerId: string;
            name: string;
            position: number;
            redirectHttpCode?: number;
            redirectPoolId?: string;
            redirectPrefix?: string;
            redirectUrl?: string;
        }
        /**
         * L7 rule
         * interface fullName: cloud.loadbalancing.L7Rule.L7Rule
         */
        export interface L7Rule {
            compareType: cloud.loadbalancing.L7RuleCompareTypeEnum;
            id: string;
            invert: boolean;
            key: string;
            operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
            provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            ruleType: cloud.loadbalancing.L7RuleTypeEnum;
            value: string;
        }
        /**
         * Loadbalancer L7 rule compare type
         * type fullname: cloud.loadbalancing.L7RuleCompareTypeEnum
         */
        export type L7RuleCompareTypeEnum = "contains" | "endsWith" | "equalTo" | "regex" | "startsWith"
        /**
         * Loadbalancer L7 rule type
         * type fullname: cloud.loadbalancing.L7RuleTypeEnum
         */
        export type L7RuleTypeEnum = "cookie" | "fileType" | "header" | "hostName" | "path" | "sslConnHasCert" | "sslDNField" | "sslVerifyResult"
        /**
         * Listener
         * interface fullName: cloud.loadbalancing.Listener.Listener
         */
        export interface Listener {
            allowedCidrs?: string[];
            certificateId?: string;
            defaultPoolId?: string;
            description?: string;
            id: string;
            loadBalancerIds: string[];
            name: string;
            operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
            port: number;
            protocol: cloud.loadbalancing.ListenerProtocolEnum;
            provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            timeoutClientData?: number;
            timeoutMemberData?: number;
            tlsVersions?: cloud.loadbalancing.ListenerTlsVersionEnum[];
        }
        /**
         * Loadbalancer listener protocol
         * type fullname: cloud.loadbalancing.ListenerProtocolEnum
         */
        export type ListenerProtocolEnum = "http" | "https" | "prometheus" | "sctp" | "tcp" | "terminatedHTTPS" | "udp"
        /**
         * Loadbalancer listener TLS versions
         * type fullname: cloud.loadbalancing.ListenerTlsVersionEnum
         */
        export type ListenerTlsVersionEnum = "SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3"
        /**
         * LoadBalancer
         * interface fullName: cloud.loadbalancing.LoadBalancer.LoadBalancer
         */
        export interface LoadBalancer {
            createdAt: string;
            flavorId: string;
            floatingIp?: cloud.loadbalancing.LoadBalancer.FloatingIp;
            id: string;
            name: string;
            operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
            provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            region: string;
            updatedAt: string;
            vipAddress: string;
            vipNetworkId: string;
            vipSubnetId: string;
        }
        export namespace LoadBalancer {
            /**
             * LoadBalancerFloatingIp
             * interface fullName: cloud.loadbalancing.LoadBalancer.FloatingIp.FloatingIp
             */
            export interface FloatingIp {
                id: string;
                ip: string;
            }
        }
        /**
         * Load balancer Healthmonitor HTTP Method
         * type fullname: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPMethodEnum
         */
        export type LoadBalancerHealthMonitorHTTPMethodEnum = "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | "TRACE"
        /**
         * Load balancer Healthmonitor HTTP Version
         * type fullname: cloud.loadbalancing.LoadBalancerHealthMonitorHTTPVersionEnum
         */
        export type LoadBalancerHealthMonitorHTTPVersionEnum = "1.0" | "1.1"
        /**
         * Load balancer Healthmonitor type
         * type fullname: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum
         */
        export type LoadBalancerHealthMonitorTypeEnum = "http" | "https" | "ping" | "sctp" | "tcp" | "tls-hello" | "udp-connect"
        /**
         * Load balancer operating status
         * type fullname: cloud.loadbalancing.LoadBalancerOperatingStatusEnum
         */
        export type LoadBalancerOperatingStatusEnum = "degraded" | "draining" | "error" | "noMonitor" | "offline" | "online"
        /**
         * Load balancer provisioning status
         * type fullname: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum
         */
        export type LoadBalancerProvisioningStatusEnum = "active" | "creating" | "deleted" | "deleting" | "error" | "updating"
        export namespace Loadbalancer {
            /**
             * Create a loadbalancer
             * interface fullName: cloud.loadbalancing.Loadbalancer.CreateInput.CreateInput
             */
            export interface CreateInput {
                flavorId: string;
                listeners: cloud.loadbalancing.loadbalancer.ListenerCreate[];
                name: string;
                network: cloud.loadbalancing.loadbalancer.CreateInput.Network;
            }
        }
        /**
         * Edit a loadbalancer
         * interface fullName: cloud.loadbalancing.LoadbalancerEdit.LoadbalancerEdit
         */
        export interface LoadbalancerEdit {
            description: string;
            name: string;
        }
        /**
         * Pool
         * interface fullName: cloud.loadbalancing.Pool.Pool
         */
        export interface Pool {
            algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
            id: string;
            listenerId?: string;
            loadbalancerId: string;
            name: string;
            operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
            protocol: cloud.loadbalancing.PoolProtocolEnum;
            provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
            sessionPersistence?: cloud.loadbalancing.PoolSessionPersistence;
        }
        /**
         * Pool algorithm
         * type fullname: cloud.loadbalancing.PoolAlgorithmEnum
         */
        export type PoolAlgorithmEnum = "leastConnections" | "roundRobin" | "sourceIP"
        /**
         * Pool
         * interface fullName: cloud.loadbalancing.PoolCreate.PoolCreate
         */
        export interface PoolCreate {
            algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
            listenerId: string;
            loadbalancerId: string;
            name: string;
            protocol: cloud.loadbalancing.PoolProtocolEnum;
            sessionPersistence?: cloud.loadbalancing.PoolSessionPersistence;
        }
        /**
         * Pool protocol
         * type fullname: cloud.loadbalancing.PoolProtocolEnum
         */
        export type PoolProtocolEnum = "http" | "https" | "proxy" | "proxyV2" | "sctp" | "tcp" | "udp"
        /**
         * PoolSessionPersistence
         * interface fullName: cloud.loadbalancing.PoolSessionPersistence.PoolSessionPersistence
         */
        export interface PoolSessionPersistence {
            cookieName: string;
            type: cloud.loadbalancing.PoolSessionPersistenceTypeEnum;
        }
        /**
         * Pool session persistence type
         * type fullname: cloud.loadbalancing.PoolSessionPersistenceTypeEnum
         */
        export type PoolSessionPersistenceTypeEnum = "appCookie" | "disabled" | "httpCookie" | "sourceIP"
        /**
         * Parameters to update a load balancer pool
         * interface fullName: cloud.loadbalancing.PoolUpdate.PoolUpdate
         */
        export interface PoolUpdate {
            algorithm?: cloud.loadbalancing.PoolAlgorithmEnum;
            name?: string;
            sessionPersistence?: cloud.loadbalancing.PoolSessionPersistence;
        }
        /**
         * Health monitor for LoadBalancer
         * interface fullName: cloud.loadbalancing.UpdateHealthMonitor.UpdateHealthMonitor
         */
        export interface UpdateHealthMonitor {
            delay: number;
            httpConfiguration: cloud.loadbalancing.HealthMonitorHTTPConfiguration;
            maxRetries: number;
            maxRetriesDown: number;
            name: string;
            timeout: number;
        }
        export namespace loadbalancer {
            export namespace CreateInput {
                /**
                 * Network information to create a loadbalancer
                 * interface fullName: cloud.loadbalancing.loadbalancer.CreateInput.Network.Network
                 */
                export interface Network {
                    private: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private;
                }
                export namespace Network {
                    /**
                     * Network information to create a loadbalancer
                     * interface fullName: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.Private
                     */
                    export interface Private {
                        floatingIp: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.FloatingIp;
                        floatingIpCreate: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.FloatingIpCreate;
                        gateway: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.Gateway;
                        gatewayCreate: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.GatewayCreate;
                        network: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.Network;
                    }
                    export namespace Private {
                        /**
                         * Information to attach floatingIp
                         * interface fullName: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.FloatingIp.FloatingIp
                         */
                        export interface FloatingIp {
                            id: string;
                        }
                        /**
                         * Information to create floatingIp
                         * interface fullName: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.FloatingIpCreate.FloatingIpCreate
                         */
                        export interface FloatingIpCreate {
                            description: string;
                        }
                        /**
                         * Information to attach Gateway
                         * interface fullName: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.Gateway.Gateway
                         */
                        export interface Gateway {
                            id: string;
                        }
                        /**
                         * Information to create a Gateway
                         * interface fullName: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.GatewayCreate.GatewayCreate
                         */
                        export interface GatewayCreate {
                            model: cloud.network.GatewayModelEnum;
                            name: string;
                        }
                        /**
                         * Network information to associate a network
                         * interface fullName: cloud.loadbalancing.loadbalancer.CreateInput.Network.Private.Network.Network
                         */
                        export interface Network {
                            id: string;
                            subnetId: string;
                        }
                    }
                }
            }
            /**
             * Create a listener on loadbalancer creation
             * interface fullName: cloud.loadbalancing.loadbalancer.ListenerCreate.ListenerCreate
             */
            export interface ListenerCreate {
                allowedCidrs: string[];
                description: string;
                name: string;
                pool: cloud.loadbalancing.loadbalancer.PoolCreate;
                port: number;
                protocol: cloud.loadbalancing.ListenerProtocolEnum;
                secretId: string;
                timeoutClientData: number;
                timeoutMemberData: number;
                tlsVersions: cloud.loadbalancing.ListenerTlsVersionEnum[];
            }
            /**
             * Create a member on loadbalancer creation
             * interface fullName: cloud.loadbalancing.loadbalancer.MemberCreate.MemberCreate
             */
            export interface MemberCreate {
                address: string;
                name: string;
                protocolPort: number;
                weight?: number;
            }
            /**
             * Create a pool on loadbalancer creation
             * interface fullName: cloud.loadbalancing.loadbalancer.PoolCreate.PoolCreate
             */
            export interface PoolCreate {
                algorithm: cloud.loadbalancing.PoolAlgorithmEnum;
                healthMonitor?: cloud.loadbalancing.HealthMonitorCreate;
                members: cloud.loadbalancing.loadbalancer.MemberCreate[];
                name: string;
                protocol: cloud.loadbalancing.PoolProtocolEnum;
                sessionPersistence: cloud.loadbalancing.PoolSessionPersistence;
            }
            /**
             * Loadbalancer statistics
             * interface fullName: cloud.loadbalancing.loadbalancer.Stats.Stats
             */
            export interface Stats {
                activeConnections: number;
                bytesIn: number;
                bytesOut: number;
                requestErrors: number;
                totalConnections: number;
            }
        }
        export namespace pool {
            /**
             * Pool Members
             * interface fullName: cloud.loadbalancing.pool.CreateMembers.CreateMembers
             */
            export interface CreateMembers {
                members: cloud.loadbalancing.pool.Member[];
            }
            /**
             * Member
             * interface fullName: cloud.loadbalancing.pool.Member.Member
             */
            export interface Member {
                address: string;
                id: string;
                name: string;
                operatingStatus: cloud.loadbalancing.LoadBalancerOperatingStatusEnum;
                protocolPort: number;
                provisioningStatus: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum;
                weight?: number;
            }
            /**
             * Parameters to update a pool member
             * interface fullName: cloud.loadbalancing.pool.MemberUpdate.MemberUpdate
             */
            export interface MemberUpdate {
                name?: string;
                weight?: number;
            }
        }
    }
    export namespace network {
        /**
         * Input to create a gateway
         * interface fullName: cloud.network.CreateGateway.CreateGateway
         */
        export interface CreateGateway {
            model: cloud.network.GatewayModelEnum;
            name: string;
            network: cloud.network.CreateNetworkForGatewaySummary;
        }
        /**
         * Parameters to create a gateway from another resource creation
         * interface fullName: cloud.network.CreateGatewaySummary.CreateGatewaySummary
         */
        export interface CreateGatewaySummary {
            model: cloud.network.GatewayModelEnum;
            name: string;
        }
        /**
         * Parameters to create a network with a gateway
         * interface fullName: cloud.network.CreateNetwork.CreateNetwork
         */
        export interface CreateNetwork {
            gateway?: cloud.network.CreateGatewaySummary;
            name: string;
            subnet: cloud.network.CreateSubnetSummary;
            vlanId: number;
        }
        /**
         * Parameters to create a network from another resource creation
         * interface fullName: cloud.network.CreateNetworkForGatewaySummary.CreateNetworkForGatewaySummary
         */
        export interface CreateNetworkForGatewaySummary {
            name: string;
            subnet: cloud.network.CreateSubnetForGatewaySummary;
            vlanId: number;
        }
        /**
         * Parameters to create a subnet from another resource creation
         * interface fullName: cloud.network.CreateSubnetForGatewaySummary.CreateSubnetForGatewaySummary
         */
        export interface CreateSubnetForGatewaySummary {
            cidr: string;
            enableDhcp: boolean;
            ipVersion: number;
        }
        /**
         * Parameters to create a subnet from another resource creation
         * interface fullName: cloud.network.CreateSubnetSummary.CreateSubnetSummary
         */
        export interface CreateSubnetSummary {
            cidr: string;
            enableDhcp: boolean;
            enableGatewayIp: boolean;
            ipVersion: number;
        }
        /**
         * Gateway
         * interface fullName: cloud.network.Gateway.Gateway
         */
        export interface Gateway {
            externalInformation?: cloud.network.gateway.ExternalInformation;
            id: string;
            interfaces: cloud.network.gateway.Interface[];
            model: cloud.network.GatewayModelEnum;
            name: string;
            region: string;
            status: cloud.network.GatewayStatusEnum;
        }
        /**
         * GatewayModelEnum
         * type fullname: cloud.network.GatewayModelEnum
         */
        export type GatewayModelEnum = "2xl" | "3xl" | "l" | "m" | "s" | "xl"
        /**
         * GatewayStatusEnum
         * type fullname: cloud.network.GatewayStatusEnum
         */
        export type GatewayStatusEnum = "active" | "building" | "down" | "error"
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
        export type NetworkStatusEnum = "ACTIVE" | "BUILDING" | "DELETING"
        /**
         * NetworkTypeEnum
         * type fullname: cloud.network.NetworkTypeEnum
         */
        export type NetworkTypeEnum = "private" | "public"
        /**
         * NetworkVisibilityEnum
         * type fullname: cloud.network.NetworkVisibilityEnum
         */
        export type NetworkVisibilityEnum = "private" | "public"
        /**
         * Subnet
         * interface fullName: cloud.network.Subnet.Subnet
         */
        export interface Subnet {
            cidr: string;
            dhcpEnabled: boolean;
            gatewayIp?: string;
            id: string;
            ipPools: cloud.network.IPPool[];
        }
        /**
         * Input to update a gateway
         * interface fullName: cloud.network.UpdateGateway.UpdateGateway
         */
        export interface UpdateGateway {
            model: cloud.network.GatewayModelEnum;
            name: string;
        }
        export namespace gateway {
            /**
             * Input to create a new interface for a gateway
             * interface fullName: cloud.network.gateway.CreateInterface.CreateInterface
             */
            export interface CreateInterface {
                subnetId: string;
            }
            /**
             * External information of the gateway
             * interface fullName: cloud.network.gateway.ExternalInformation.ExternalInformation
             */
            export interface ExternalInformation {
                ips: cloud.network.gateway.IpSubnet[];
                networkId: string;
            }
            /**
             * Interface of the gateway
             * interface fullName: cloud.network.gateway.Interface.Interface
             */
            export interface Interface {
                id: string;
                ip: string;
                networkId: string;
                subnetId: string;
            }
            /**
             * IP and subnet information
             * interface fullName: cloud.network.gateway.IpSubnet.IpSubnet
             */
            export interface IpSubnet {
                ip: string;
                subnetId: string;
            }
        }
    }
    export namespace order {
        /**
         * Cloud Order
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
         * Order status
         * type fullname: cloud.order.StatusEnum
         */
        export type StatusEnum = "delivered" | "delivering" | "unknown" | "unpaid"
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
            /**
             * Public Cloud instance categories
             * interface fullName: cloud.order.rule.InstanceCategories.InstanceCategories
             */
            export interface InstanceCategories {
                categories: cloud.order.rule.InstanceCategory[];
                defaultCategory: string;
            }
            /**
             * Public Cloud instance category
             * interface fullName: cloud.order.rule.InstanceCategory.InstanceCategory
             */
            export interface InstanceCategory {
                category: cloud.order.rule.InstanceCategoryTypeEnum;
                isNew?: boolean;
                kinds: string[];
                title: string;
            }
            /**
             * InstanceCategoryTypeEnum
             * type fullname: cloud.order.rule.InstanceCategoryTypeEnum
             */
            export type InstanceCategoryTypeEnum = "accelerated" | "balanced" | "baremetal" | "discovery" | "iops" | "ram" | "vps"
        }
    }
    export namespace project {
        /**
         * AllocationPool
         * interface fullName: cloud.project.AllocationPool.AllocationPool
         */
        export interface AllocationPool {
            end: string;
            start: string;
        }
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
        export type CertificateStatusEnum = "EXPIRED" | "NOT_YET_VALID" | "OK" | "REVOKED"
        /**
         * A floating ip
         * interface fullName: cloud.project.FloatingIp.FloatingIp
         */
        export interface FloatingIp {
            associatedEntity?: cloud.project.floatingIp.AssociatedEntity;
            id: string;
            ip: string;
            networkId: string;
            region?: string;
            status: cloud.project.floatingIp.StatusEnum;
        }
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
         * Network
         * interface fullName: cloud.project.Network.Network
         */
        export interface Network {
            id: string;
            name: string;
            region?: string;
            visibility: cloud.network.NetworkVisibilityEnum;
            vlanId?: number;
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
        /**
         * Subnet
         * interface fullName: cloud.project.Subnet.Subnet
         */
        export interface Subnet {
            allocationPools: cloud.project.AllocationPool[];
            cidr: string;
            dhcpEnabled: boolean;
            gatewayIp?: string;
            id: string;
            ipVersion: number;
            name: string;
        }
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
            export type ServerAlternativeNameKindEnum = "DNS" | "EMAIL" | "IP" | "URI"
        }
        export namespace database {
            /**
             * Availability of databases engines on cloud projects
             * interface fullName: cloud.project.database.Availability.Availability
             */
            export interface Availability {
                backup: cloud.project.database.BackupTypeEnum;
                backupRetentionDays: number;
                backups: cloud.project.database.availability.Backups;
                category: cloud.project.database.engine.CategoryEnum;
                default: boolean;
                endOfLife?: string;
                engine: string;
                flavor: string;
                lifecycle: cloud.project.database.availability.Lifecycle;
                maxDiskSize: number;
                maxNodeNumber: number;
                minDiskSize: number;
                minNodeNumber: number;
                network: cloud.project.database.NetworkTypeEnum;
                plan: string;
                region: string;
                specifications: cloud.project.database.availability.Specifications;
                startDate: string;
                status: cloud.project.database.availability.StatusEnum;
                stepDiskSize: number;
                upstreamEndOfLife?: string;
                version: string;
            }
            /**
             * Cloud database backup definition
             * interface fullName: cloud.project.database.Backup.Backup
             */
            export interface Backup {
                createdAt: string;
                description: string;
                id: string;
                region: string;
                regions: cloud.project.database.backup.Region[];
                size: complexType.UnitAndValue<number>;
                status: cloud.project.database.StatusEnum;
                type: cloud.project.database.BackupTypeEnum;
            }
            /**
             * Type of backup for the cluster
             * type fullname: cloud.project.database.BackupTypeEnum
             */
            export type BackupTypeEnum = "automatic" | "manual" | "none" | "pitr" | "snapshot"
            /**
             * Capabilities available for the databases engines on cloud projects
             * interface fullName: cloud.project.database.Capabilities.Capabilities
             */
            export interface Capabilities {
                disks: string[];
                engines: cloud.project.database.capabilities.Engine[];
                flavors: cloud.project.database.capabilities.Flavor[];
                options: cloud.project.database.capabilities.Option[];
                plans: cloud.project.database.capabilities.Plan[];
                regions: string[];
            }
            /**
             * Possible names of the engines
             * type fullname: cloud.project.database.EngineEnum
             */
            export type EngineEnum = "cassandra" | "grafana" | "kafka" | "kafkaConnect" | "kafkaMirrorMaker" | "m3aggregator" | "m3db" | "mongodb" | "mysql" | "opensearch" | "postgresql" | "redis"
            /**
             * Ip Restriction definition for cloud project databases (DEPRECATED)
             * interface fullName: cloud.project.database.IpRestriction.IpRestriction
             */
            export interface IpRestriction {
                description: string;
                ip: string;
                status: cloud.project.database.StatusEnum;
            }
            /**
             * Ip Restriction creation definition for cloud project databases (DEPRECATED)
             * interface fullName: cloud.project.database.IpRestrictionCreation.IpRestrictionCreation
             */
            export interface IpRestrictionCreation {
                description: string;
                ip: string;
            }
            /**
             * Type of network in which the databases cluster are
             * type fullname: cloud.project.database.NetworkTypeEnum
             */
            export type NetworkTypeEnum = "private" | "public"
            /**
             * Cloud database service definition
             * interface fullName: cloud.project.database.Service.Service
             */
            export interface Service {
                backupTime: string;
                backups?: cloud.project.database.service.Backup;
                capabilities: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions };
                category: cloud.project.database.engine.CategoryEnum;
                createdAt: string;
                description: string;
                disk: cloud.project.database.service.Disk;
                endpoints: cloud.project.database.service.Endpoint[];
                engine: cloud.project.database.EngineEnum;
                flavor: string;
                id: string;
                ipRestrictions: cloud.project.database.service.IpRestriction[];
                maintenanceTime: string;
                networkId?: string;
                networkType: cloud.project.database.NetworkTypeEnum;
                nodeNumber: number;
                nodes: cloud.project.database.service.Node[];
                plan: string;
                region?: string;
                status: cloud.project.database.StatusEnum;
                storage?: cloud.project.database.service.Storage;
                subnetId?: string;
                version: string;
            }
            /**
             * Cloud databases cluster definition
             * interface fullName: cloud.project.database.ServiceCreation.ServiceCreation
             */
            export interface ServiceCreation {
                backup?: cloud.project.database.service.creation.BackupFork;
                backupTime?: string;
                backups?: cloud.project.database.service.Backup;
                description: string;
                disk: cloud.project.database.service.Disk;
                forkFrom?: cloud.project.database.service.creation.ForkFrom;
                ipRestrictions: cloud.project.database.service.IpRestriction[];
                maintenanceTime?: string;
                networkId?: string;
                nodesList?: cloud.project.database.service.NodeCreation[];
                nodesPattern?: cloud.project.database.service.NodePattern;
                plan: string;
                subnetId?: string;
                version: string;
            }
            /**
             * Possible state of the job
             * type fullname: cloud.project.database.StatusEnum
             */
            export type StatusEnum = "CREATING" | "DELETING" | "ERROR" | "ERROR_INCONSISTENT_SPEC" | "LOCKED" | "LOCKED_PENDING" | "LOCKED_UPDATING" | "PENDING" | "READY" | "SHELVED" | "UPDATING"
            /**
             * Cloud databases temporary write deadline definition
             * interface fullName: cloud.project.database.TemporaryWriteDeadline.TemporaryWriteDeadline
             */
            export interface TemporaryWriteDeadline {
                until: string;
            }
            /**
             * Type of data returned in the capabilities options
             * type fullname: cloud.project.database.TypeEnum
             */
            export type TypeEnum = "boolean" | "double" | "duration" | "long" | "string"
            export namespace availability {
                /**
                 * Possible action to restrict availabilities
                 * type fullname: cloud.project.database.availability.ActionEnum
                 */
                export type ActionEnum = "fork" | "read" | "update"
                /**
                 * Backups availability of databases engines on cloud projects
                 * interface fullName: cloud.project.database.availability.Backups.Backups
                 */
                export interface Backups {
                    available: boolean;
                    retentionDays?: number;
                }
                /**
                 * Availability of databases engines on cloud projects
                 * interface fullName: cloud.project.database.availability.Lifecycle.Lifecycle
                 */
                export interface Lifecycle {
                    endOfLife?: string;
                    endOfSale?: string;
                    startDate: string;
                    status: cloud.project.database.availability.StatusEnum;
                }
                /**
                 * Specifications of the availability of databases engines on cloud projects
                 * interface fullName: cloud.project.database.availability.Specifications.Specifications
                 */
                export interface Specifications {
                    flavor: string;
                    network: cloud.project.database.NetworkTypeEnum;
                    nodes: cloud.project.database.availability.specifications.Nodes;
                    storage?: cloud.project.database.availability.specifications.Storage;
                }
                /**
                 * Possible status for the availability
                 * type fullname: cloud.project.database.availability.StatusEnum
                 */
                export type StatusEnum = "BETA" | "DEPRECATED" | "END_OF_LIFE" | "END_OF_SALE" | "STABLE" | "UNAVAILABLE"
                /**
                 * Possible target to restrict availabilities
                 * type fullname: cloud.project.database.availability.TargetEnum
                 */
                export type TargetEnum = "flavor" | "plan" | "self" | "version"
                export namespace specifications {
                    /**
                     * Specifications of the nodes for availabilities of databases engines on cloud projects
                     * interface fullName: cloud.project.database.availability.specifications.Nodes.Nodes
                     */
                    export interface Nodes {
                        maximum: number;
                        minimum: number;
                    }
                    /**
                     * Specifications of the storage for availabilities of databases engines on cloud projects
                     * interface fullName: cloud.project.database.availability.specifications.Storage.Storage
                     */
                    export interface Storage {
                        maximum: complexType.UnitAndValue<number>;
                        minimum: complexType.UnitAndValue<number>;
                        step?: complexType.UnitAndValue<number>;
                    }
                }
            }
            export namespace backup {
                /**
                 * Cloud database backup region definition
                 * interface fullName: cloud.project.database.backup.Region.Region
                 */
                export interface Region {
                    name: string;
                }
            }
            export namespace capabilities {
                /**
                 * Specific database engine capability
                 * interface fullName: cloud.project.database.capabilities.Engine.Engine
                 */
                export interface Engine {
                    category: cloud.project.database.engine.CategoryEnum;
                    defaultVersion: string;
                    description: string;
                    name: string;
                    sslModes: string[];
                    storage: cloud.project.database.capabilities.engine.storage.StrategyEnum;
                    versions: string[];
                }
                /**
                 * Cloud Database flavor definition
                 * interface fullName: cloud.project.database.capabilities.Flavor.Flavor
                 */
                export interface Flavor {
                    core: number;
                    lifecycle: cloud.project.database.availability.Lifecycle;
                    memory: number;
                    name: string;
                    order: number;
                    specifications: cloud.project.database.capabilities.flavor.Specifications;
                    storage: number;
                    tags: string[];
                }
                /**
                 * Integration capability between database engines
                 * interface fullName: cloud.project.database.capabilities.Integration.Integration
                 */
                export interface Integration {
                    destinationEngine: cloud.project.database.EngineEnum;
                    parameters?: cloud.project.database.capabilities.integration.Parameter[];
                    sourceEngine: cloud.project.database.EngineEnum;
                    type: cloud.project.database.service.integration.TypeEnum;
                }
                /**
                 * Cloud Database option definition
                 * interface fullName: cloud.project.database.capabilities.Option.Option
                 */
                export interface Option {
                    name: string;
                    type: cloud.project.database.TypeEnum;
                }
                /**
                 * Cloud Database plan definition
                 * interface fullName: cloud.project.database.capabilities.Plan.Plan
                 */
                export interface Plan {
                    backupRetention: string;
                    description: string;
                    lifecycle: cloud.project.database.availability.Lifecycle;
                    name: string;
                    order: number;
                    tags: string[];
                }
                export namespace advancedConfiguration {
                    /**
                     * Specific database engine capability
                     * interface fullName: cloud.project.database.capabilities.advancedConfiguration.Property.Property
                     */
                    export interface Property {
                        description: string;
                        maximum?: number;
                        minimum?: number;
                        name: string;
                        type: cloud.project.database.capabilities.advancedConfiguration.property.TypeEnum;
                        values?: string[];
                    }
                    export namespace property {
                        /**
                         * Possible type of the advanced configuration properties
                         * type fullname: cloud.project.database.capabilities.advancedConfiguration.property.TypeEnum
                         */
                        export type TypeEnum = "boolean" | "double" | "long" | "string"
                    }
                }
                export namespace engine {
                    export namespace storage {
                        /**
                         * Possible storage strategy for an engine
                         * type fullname: cloud.project.database.capabilities.engine.storage.StrategyEnum
                         */
                        export type StrategyEnum = "distributed" | "n/a" | "replicated"
                    }
                }
                export namespace flavor {
                    /**
                     * Cloud Database flavor specifications definition
                     * interface fullName: cloud.project.database.capabilities.flavor.Specifications.Specifications
                     */
                    export interface Specifications {
                        core: number;
                        memory: complexType.UnitAndValue<number>;
                        storage: complexType.UnitAndValue<number>;
                    }
                }
                export namespace integration {
                    /**
                     * Integration capability parameter
                     * interface fullName: cloud.project.database.capabilities.integration.Parameter.Parameter
                     */
                    export interface Parameter {
                        name: string;
                        type: cloud.project.database.capabilities.integration.parameter.TypeEnum;
                    }
                    export namespace parameter {
                        /**
                         * Possible type of an integration capability parameter
                         * type fullname: cloud.project.database.capabilities.integration.parameter.TypeEnum
                         */
                        export type TypeEnum = "integer" | "string"
                    }
                }
            }
            export namespace engine {
                /**
                 * Different categories of engines
                 * type fullname: cloud.project.database.engine.CategoryEnum
                 */
                export type CategoryEnum = "analysis" | "operational" | "streaming"
            }
            export namespace kafka {
                /**
                 * Cloud databases kafka permissions definition
                 * interface fullName: cloud.project.database.kafka.Permissions.Permissions
                 */
                export interface Permissions {
                    names: string[];
                    schemaRegistry: string[];
                    topic: string[];
                }
                /**
                 * Cloud databases kafka schema registry acl definition
                 * interface fullName: cloud.project.database.kafka.SchemaRegistryAcl.SchemaRegistryAcl
                 */
                export interface SchemaRegistryAcl {
                    id: string;
                    permission: string;
                    resource: string;
                    username: string;
                }
                /**
                 * Cloud database kafka service definition
                 * interface fullName: cloud.project.database.kafka.Service.Service
                 */
                export interface Service {
                    backupTime: string;
                    capabilities: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions };
                    category: cloud.project.database.engine.CategoryEnum;
                    createdAt: string;
                    description: string;
                    disk: cloud.project.database.service.Disk;
                    endpoints: cloud.project.database.service.Endpoint[];
                    engine: cloud.project.database.EngineEnum;
                    flavor: string;
                    id: string;
                    ipRestrictions: cloud.project.database.service.IpRestriction[];
                    maintenanceTime: string;
                    networkId?: string;
                    networkType: cloud.project.database.NetworkTypeEnum;
                    nodeNumber: number;
                    nodes: cloud.project.database.service.Node[];
                    plan: string;
                    restApi: boolean;
                    schemaRegistry: boolean;
                    status: cloud.project.database.StatusEnum;
                    storage?: cloud.project.database.service.Storage;
                    subnetId?: string;
                    version: string;
                }
                /**
                 * Cloud database kafka topic definition
                 * interface fullName: cloud.project.database.kafka.Topic.Topic
                 */
                export interface Topic {
                    id: string;
                    minInsyncReplicas: number;
                    name: string;
                    partitions: number;
                    replication: number;
                    retentionBytes: number;
                    retentionHours: number;
                }
                /**
                 * Cloud databases kafka topic acl definition
                 * interface fullName: cloud.project.database.kafka.TopicAcl.TopicAcl
                 */
                export interface TopicAcl {
                    id: string;
                    permission: string;
                    topic: string;
                    username: string;
                }
                /**
                 * Cloud database kafka topic creation definition
                 * interface fullName: cloud.project.database.kafka.TopicCreation.TopicCreation
                 */
                export interface TopicCreation {
                    id: string;
                    minInsyncReplicas: number;
                    name: string;
                    partitions: number;
                    replication: number;
                    retentionBytes: number;
                    retentionHours: number;
                }
                export namespace user {
                    /**
                     * Cloud databases kafka user access definition
                     * interface fullName: cloud.project.database.kafka.user.Access.Access
                     */
                    export interface Access {
                        cert: string;
                        key: string;
                    }
                }
            }
            export namespace kafkaConnect {
                /**
                 * KafkaConnect connector definition
                 * interface fullName: cloud.project.database.kafkaConnect.Connector.Connector
                 */
                export interface Connector {
                    configuration: { [key: string]: string };
                    connectorId: string;
                    id: string;
                    name: string;
                    status: cloud.project.database.kafkaConnect.connector.StatusEnum;
                }
                /**
                 * KafkaConnect connector definition
                 * interface fullName: cloud.project.database.kafkaConnect.ConnectorCreation.ConnectorCreation
                 */
                export interface ConnectorCreation {
                    configuration: { [key: string]: string };
                    connectorId: string;
                    name: string;
                }
                export namespace capabilities {
                    /**
                     * KafkaConnect connector capability definition
                     * interface fullName: cloud.project.database.kafkaConnect.capabilities.Connector.Connector
                     */
                    export interface Connector {
                        author: string;
                        documentationUrl: string;
                        id: string;
                        latest: boolean;
                        name: string;
                        preview: boolean;
                        type: cloud.project.database.kafkaConnect.capabilities.connector.TypeEnum;
                        version: string;
                    }
                    export namespace connector {
                        /**
                         * KafkaConnect connector transform definition
                         * interface fullName: cloud.project.database.kafkaConnect.capabilities.connector.Transform.Transform
                         */
                        export interface Transform {
                            description: string;
                            displayName: string;
                            name: string;
                            required: boolean;
                            transformType: string;
                            type: cloud.project.database.kafkaConnect.connector.property.TypeEnum;
                            values?: string[];
                        }
                        /**
                         * Possible types for the kafka connectors
                         * type fullname: cloud.project.database.kafkaConnect.capabilities.connector.TypeEnum
                         */
                        export type TypeEnum = "sink" | "source"
                        export namespace configuration {
                            /**
                             * KafkaConnect connector config property definition
                             * interface fullName: cloud.project.database.kafkaConnect.capabilities.connector.configuration.Property.Property
                             */
                            export interface Property {
                                defaultValue?: string;
                                description: string;
                                displayName: string;
                                group: string;
                                importance: cloud.project.database.kafkaConnect.capabilities.connector.property.ImportanceEnum;
                                name: string;
                                required: boolean;
                                type: cloud.project.database.kafkaConnect.connector.property.TypeEnum;
                                values?: string[];
                            }
                        }
                        export namespace property {
                            /**
                             * Possible importance for the kafka connectors properties
                             * type fullname: cloud.project.database.kafkaConnect.capabilities.connector.property.ImportanceEnum
                             */
                            export type ImportanceEnum = "high" | "low" | "medium"
                        }
                    }
                }
                export namespace connector {
                    /**
                     * Possible state of connector
                     * type fullname: cloud.project.database.kafkaConnect.connector.StatusEnum
                     */
                    export type StatusEnum = "CREATING" | "FAILED" | "PAUSED" | "RUNNING" | "UNASSIGNED"
                    /**
                     * KafkaConnect connector definition
                     * interface fullName: cloud.project.database.kafkaConnect.connector.Task.Task
                     */
                    export interface Task {
                        id: number;
                        status: cloud.project.database.kafkaConnect.connector.task.StatusEnum;
                        trace: string;
                    }
                    export namespace property {
                        /**
                         * Possible types for the kafka connectors properties
                         * type fullname: cloud.project.database.kafkaConnect.connector.property.TypeEnum
                         */
                        export type TypeEnum = "boolean" | "class" | "double" | "int16" | "int32" | "int64" | "list" | "password" | "string" | "transform"
                    }
                    export namespace task {
                        /**
                         * Possible state of connector task
                         * type fullname: cloud.project.database.kafkaConnect.connector.task.StatusEnum
                         */
                        export type StatusEnum = "FAILED" | "PAUSED" | "RUNNING"
                    }
                }
            }
            export namespace m3db {
                /**
                 * M3db Namespace definition
                 * interface fullName: cloud.project.database.m3db.Namespace.Namespace
                 */
                export interface Namespace {
                    id: string;
                    name: string;
                    resolution?: string;
                    retention: cloud.project.database.m3db.namespace.Retention;
                    snapshotEnabled: boolean;
                    type: cloud.project.database.m3db.namespace.TypeEnum;
                    writesToCommitLogEnabled: boolean;
                }
                /**
                 * M3db Namespace creation definition
                 * interface fullName: cloud.project.database.m3db.NamespaceCreation.NamespaceCreation
                 */
                export interface NamespaceCreation {
                    id: string;
                    name: string;
                    resolution: string;
                    retention: cloud.project.database.m3db.namespace.Retention;
                    snapshotEnabled: boolean;
                    type: cloud.project.database.m3db.namespace.TypeEnum;
                    writesToCommitLogEnabled: boolean;
                }
                /**
                 * M3db User definition
                 * interface fullName: cloud.project.database.m3db.User.User
                 */
                export interface User {
                    createdAt: string;
                    group: string;
                    id: string;
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                /**
                 * User creation definition
                 * interface fullName: cloud.project.database.m3db.UserCreation.UserCreation
                 */
                export interface UserCreation {
                    group: string;
                    name: string;
                }
                /**
                 * M3db User definition
                 * interface fullName: cloud.project.database.m3db.UserWithPassword.UserWithPassword
                 */
                export interface UserWithPassword {
                    createdAt: string;
                    group: string;
                    id: string;
                    password: string;
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                export namespace namespace {
                    /**
                     * M3db namespace retention definition
                     * interface fullName: cloud.project.database.m3db.namespace.Retention.Retention
                     */
                    export interface Retention {
                        blockDataExpirationDuration?: string;
                        blockSizeDuration?: string;
                        bufferFutureDuration?: string;
                        bufferPastDuration?: string;
                        periodDuration: string;
                    }
                    /**
                     * Possible type of the service integration
                     * type fullname: cloud.project.database.m3db.namespace.TypeEnum
                     */
                    export type TypeEnum = "aggregated" | "unaggregated"
                }
            }
            export namespace mysql {
                /**
                 * Cloud database mysql query statistics response body definition
                 * interface fullName: cloud.project.database.mysql.QueryStatistics.QueryStatistics
                 */
                export interface QueryStatistics {
                    queries: cloud.project.database.mysql.querystatistics.Query[];
                }
                export namespace querystatistics {
                    /**
                     * Cloud database mysql single query statistic definition
                     * interface fullName: cloud.project.database.mysql.querystatistics.Query.Query
                     */
                    export interface Query {
                        avgTimerWait: number;
                        countStar: number;
                        digest: string;
                        digestText: string;
                        firstSeen: string;
                        lastSeen: string;
                        maxTimerWait: number;
                        minTimerWait: number;
                        quantile95: number;
                        quantile99: number;
                        quantile999: number;
                        querySampleSeen: string;
                        querySampleText: string;
                        querySampleTimerWait: number;
                        schemaName: string;
                        sumCreatedTmpDiskTables: number;
                        sumCreatedTmpTables: number;
                        sumErrors: number;
                        sumLockTime: number;
                        sumNoGoodIndexUsed: number;
                        sumNoIndexUsed: number;
                        sumRowsAffected: number;
                        sumRowsExamined: number;
                        sumRowsSent: number;
                        sumSelectFullJoin: number;
                        sumSelectFullRangeJoin: number;
                        sumSelectRange: number;
                        sumSelectRangeCheck: number;
                        sumSelectScan: number;
                        sumSortMergePasses: number;
                        sumSortRange: number;
                        sumSortRows: number;
                        sumSortScan: number;
                        sumTimerWait: number;
                        sumWarnings: number;
                    }
                }
            }
            export namespace opensearch {
                /**
                 * Cloud database opensearch index definition
                 * interface fullName: cloud.project.database.opensearch.Index.Index
                 */
                export interface Index {
                    createdAt: string;
                    documents: number;
                    id: string;
                    name: string;
                    replicasNumber: number;
                    shardsNumber: number;
                    size: number;
                }
                /**
                 * Cloud database opensearch pattern definition
                 * interface fullName: cloud.project.database.opensearch.Pattern.Pattern
                 */
                export interface Pattern {
                    id: string;
                    maxIndexCount: number;
                    pattern: string;
                }
                /**
                 * Cloud database opensearch permissions definition
                 * interface fullName: cloud.project.database.opensearch.Permissions.Permissions
                 */
                export interface Permissions {
                    names: string[];
                }
                /**
                 * Cloud database opensearch service definition
                 * interface fullName: cloud.project.database.opensearch.Service.Service
                 */
                export interface Service {
                    aclsEnabled: boolean;
                    backupTime: string;
                    backups?: cloud.project.database.service.Backup;
                    capabilities: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions };
                    category: cloud.project.database.engine.CategoryEnum;
                    createdAt: string;
                    description: string;
                    disk: cloud.project.database.service.Disk;
                    endpoints: cloud.project.database.service.Endpoint[];
                    engine: cloud.project.database.EngineEnum;
                    flavor: string;
                    id: string;
                    ipRestrictions: cloud.project.database.service.IpRestriction[];
                    maintenanceTime: string;
                    networkId?: string;
                    networkType: cloud.project.database.NetworkTypeEnum;
                    nodeNumber: number;
                    nodes: cloud.project.database.service.Node[];
                    plan: string;
                    status: cloud.project.database.StatusEnum;
                    storage?: cloud.project.database.service.Storage;
                    subnetId?: string;
                    version: string;
                }
                /**
                 * Opensearch user definition
                 * interface fullName: cloud.project.database.opensearch.User.User
                 */
                export interface User {
                    acls: cloud.project.database.opensearch.UserAcl[];
                    createdAt: string;
                    id: string;
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                /**
                 * Opensearch user acl definition
                 * interface fullName: cloud.project.database.opensearch.UserAcl.UserAcl
                 */
                export interface UserAcl {
                    pattern: string;
                    permission: string;
                }
                /**
                 * Opensearch user creation definition
                 * interface fullName: cloud.project.database.opensearch.UserCreation.UserCreation
                 */
                export interface UserCreation {
                    acls: cloud.project.database.opensearch.UserAcl[];
                    name: string;
                }
                /**
                 * Opensearch user definition
                 * interface fullName: cloud.project.database.opensearch.UserWithPassword.UserWithPassword
                 */
                export interface UserWithPassword {
                    acls: cloud.project.database.opensearch.UserAcl[];
                    createdAt: string;
                    id: string;
                    password: string;
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
            }
            export namespace postgresql {
                /**
                 * Cloud database postgresql connection pool response body definition
                 * interface fullName: cloud.project.database.postgresql.ConnectionPool.ConnectionPool
                 */
                export interface ConnectionPool {
                    databaseId: string;
                    id: string;
                    mode: cloud.project.database.postgresql.connectionpool.ModeEnum;
                    name: string;
                    port: number;
                    size: number;
                    sslMode?: cloud.project.database.postgresql.connectionpool.SslModeEnum;
                    uri: string;
                    userId?: string;
                }
                /**
                 * Cloud database postgresql connection pool creation body definition
                 * interface fullName: cloud.project.database.postgresql.ConnectionPoolCreation.ConnectionPoolCreation
                 */
                export interface ConnectionPoolCreation {
                    databaseId: string;
                    mode: cloud.project.database.postgresql.connectionpool.ModeEnum;
                    name: string;
                    size: number;
                    userId?: string;
                }
                /**
                 * Cloud database postgresql query statistics response body definition
                 * interface fullName: cloud.project.database.postgresql.QueryStatistics.QueryStatistics
                 */
                export interface QueryStatistics {
                    queries: cloud.project.database.postgresql.querystatistics.Query[];
                }
                export namespace connectionpool {
                    /**
                     * Possible modes for the connection pools
                     * type fullname: cloud.project.database.postgresql.connectionpool.ModeEnum
                     */
                    export type ModeEnum = "session" | "statement" | "transaction"
                    /**
                     * Possible ssl modes for the connection pools
                     * type fullname: cloud.project.database.postgresql.connectionpool.SslModeEnum
                     */
                    export type SslModeEnum = "require"
                }
                export namespace querystatistics {
                    /**
                     * Cloud database postgresql single query statistic definition
                     * interface fullName: cloud.project.database.postgresql.querystatistics.Query.Query
                     */
                    export interface Query {
                        blkReadTime: number;
                        blkWriteTime: number;
                        calls: number;
                        databaseName: string;
                        localBlksDirtied: number;
                        localBlksHit: number;
                        localBlksRead: number;
                        localBlksWritten: number;
                        maxPlanTime: number;
                        maxTime: number;
                        meanPlanTime: number;
                        meanTime: number;
                        minPlanTime: number;
                        minTime: number;
                        query: string;
                        rows: number;
                        sharedBlksDirtied: number;
                        sharedBlksHit: number;
                        sharedBlksRead: number;
                        sharedBlksWritten: number;
                        stddevPlanTime: number;
                        stddevTime: number;
                        tempBlksRead: number;
                        tempBlksWritten: number;
                        totalPlanTime: number;
                        totalTime: number;
                        username: string;
                        walBytes: complexType.UnitAndValue<number>;
                        walFpi: number;
                        walRecords: number;
                    }
                }
            }
            export namespace redis {
                /**
                 * Redis user definition
                 * interface fullName: cloud.project.database.redis.User.User
                 */
                export interface User {
                    categories: string[];
                    channels: string[];
                    commands: string[];
                    createdAt: string;
                    id: string;
                    keys: string[];
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                /**
                 * Redis user definition
                 * interface fullName: cloud.project.database.redis.UserCreation.UserCreation
                 */
                export interface UserCreation {
                    categories: string[];
                    channels: string[];
                    commands: string[];
                    keys: string[];
                    name: string;
                }
                /**
                 * Redis user with password definition
                 * interface fullName: cloud.project.database.redis.UserWithPassword.UserWithPassword
                 */
                export interface UserWithPassword {
                    categories: string[];
                    channels: string[];
                    commands: string[];
                    createdAt: string;
                    id: string;
                    keys: string[];
                    password: string;
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
            }
            export namespace service {
                /**
                 * Cloud database service backups definition
                 * interface fullName: cloud.project.database.service.Backup.Backup
                 */
                export interface Backup {
                    pitr?: string;
                    regions: string[];
                    retentionDays?: number;
                    time: string;
                }
                /**
                 * Cloud database service capability actions definition
                 * interface fullName: cloud.project.database.service.CapabilityActions.CapabilityActions
                 */
                export interface CapabilityActions {
                    create?: cloud.project.database.service.capability.StateEnum;
                    delete?: cloud.project.database.service.capability.StateEnum;
                    read?: cloud.project.database.service.capability.StateEnum;
                    update?: cloud.project.database.service.capability.StateEnum;
                }
                /**
                 * List of capabilities available for services
                 * type fullname: cloud.project.database.service.CapabilityEnum
                 */
                export type CapabilityEnum = "advancedConfiguration" | "backupRestore" | "backupTime" | "backups" | "certificates" | "connectionPools" | "currentQueries" | "currentQueriesCancel" | "databases" | "enableWrites" | "fork" | "integrations" | "ipRestrictions" | "maintenanceApply" | "maintenanceTime" | "maintenances" | "namespaces" | "nodes" | "queryStatistics" | "queryStatisticsReset" | "service" | "userCredentialsReset" | "users"
                /**
                 * Certificates definition for cloud project databases
                 * interface fullName: cloud.project.database.service.Certificates.Certificates
                 */
                export interface Certificates {
                    ca: string;
                }
                /**
                 * Cloud database current queries
                 * interface fullName: cloud.project.database.service.CurrentQueries.CurrentQueries
                 */
                export interface CurrentQueries {
                    queries: cloud.project.database.service.currentqueries.Query[];
                }
                /**
                 * A single value from a metric
                 * interface fullName: cloud.project.database.service.DataPoint.DataPoint
                 */
                export interface DataPoint {
                    timestamp: number;
                    value: number;
                }
                /**
                 * Defines the database object in a cluster
                 * interface fullName: cloud.project.database.service.Database.Database
                 */
                export interface Database {
                    default: boolean;
                    id: string;
                    name: string;
                }
                /**
                 * Defines the disk attributes of a service
                 * interface fullName: cloud.project.database.service.Disk.Disk
                 */
                export interface Disk {
                    size: number;
                    type: string;
                }
                /**
                 * Defines the endpoint object in a cluster
                 * interface fullName: cloud.project.database.service.Endpoint.Endpoint
                 */
                export interface Endpoint {
                    component: cloud.project.database.service.endpoint.ComponentEnum;
                    domain: string;
                    path?: string;
                    port?: number;
                    scheme?: string;
                    ssl: boolean;
                    sslMode?: string;
                    uri?: string;
                }
                /**
                 * Metrics datapoints from a specific host
                 * interface fullName: cloud.project.database.service.HostMetric.HostMetric
                 */
                export interface HostMetric {
                    dataPoints: cloud.project.database.service.DataPoint[];
                    hostname: string;
                }
                /**
                 * Cloud database service integration definition
                 * interface fullName: cloud.project.database.service.Integration.Integration
                 */
                export interface Integration {
                    destinationServiceId: string;
                    id: string;
                    parameters?: { [key: string]: string };
                    sourceServiceId: string;
                    status: cloud.project.database.service.integration.StatusEnum;
                    type: cloud.project.database.service.integration.TypeEnum;
                }
                /**
                 * Ip Restriction definition for cloud project databases
                 * interface fullName: cloud.project.database.service.IpRestriction.IpRestriction
                 */
                export interface IpRestriction {
                    description: string;
                    ip: string;
                    status: cloud.project.database.StatusEnum;
                }
                /**
                 * A single log entry
                 * interface fullName: cloud.project.database.service.LogEntry.LogEntry
                 */
                export interface LogEntry {
                    hostname: string;
                    message: string;
                    timestamp: number;
                }
                /**
                 * Cloud database service maintenance definition
                 * interface fullName: cloud.project.database.service.Maintenance.Maintenance
                 */
                export interface Maintenance {
                    appliedAt?: string;
                    description: string;
                    id: string;
                    scheduledAt?: string;
                    status: cloud.project.database.service.maintenance.StatusEnum;
                }
                /**
                 * Metric definition for cloud project databases
                 * interface fullName: cloud.project.database.service.Metric.Metric
                 */
                export interface Metric {
                    metrics: cloud.project.database.service.HostMetric[];
                    name: string;
                    units: cloud.project.database.service.MetricUnitEnum;
                }
                /**
                 * Supported metrics query period
                 * type fullname: cloud.project.database.service.MetricPeriodEnum
                 */
                export type MetricPeriodEnum = "lastDay" | "lastHour" | "lastMonth" | "lastWeek" | "lastYear"
                /**
                 * Supported unit types for metrics
                 * type fullname: cloud.project.database.service.MetricUnitEnum
                 */
                export type MetricUnitEnum = "BYTES" | "BYTES_PER_SECOND" | "GIGABYTES" | "GIGABYTES_PER_HOUR" | "MEGABYTES" | "MEGABYTES_PER_SECOND" | "MILLISECONDS" | "PERCENT" | "SCALAR" | "SCALAR_PER_SECOND" | "SECONDS" | "UNKNOWN"
                /**
                 * Cloud databases cluster node definition
                 * interface fullName: cloud.project.database.service.Node.Node
                 */
                export interface Node {
                    createdAt: string;
                    flavor: string;
                    id: string;
                    name: string;
                    port: number;
                    region: string;
                    role?: cloud.project.database.service.node.RoleEnum;
                    status: cloud.project.database.StatusEnum;
                }
                /**
                 * Cloud databases cluster new node definition
                 * interface fullName: cloud.project.database.service.NodeCreation.NodeCreation
                 */
                export interface NodeCreation {
                    createdAt: string;
                    flavor: string;
                    id: string;
                    name: string;
                    port: number;
                    region: string;
                    role?: cloud.project.database.service.node.RoleEnum;
                    status: cloud.project.database.StatusEnum;
                }
                /**
                 * Node pattern definition
                 * interface fullName: cloud.project.database.service.NodePattern.NodePattern
                 */
                export interface NodePattern {
                    flavor: string;
                    number: number;
                    region: string;
                }
                /**
                 * Cloud database service replication definition
                 * interface fullName: cloud.project.database.service.Replication.Replication
                 */
                export interface Replication {
                    emitHeartbeats: boolean;
                    enabled: boolean;
                    id: string;
                    replicationPolicyClass: cloud.project.database.service.replication.PolicyClassEnum;
                    sourceIntegration: string;
                    syncGroupOffsets: boolean;
                    syncInterval: number;
                    targetIntegration: string;
                    topicExcludeList: string[];
                    topics: string[];
                }
                /**
                 * Cloud database service replication definition
                 * interface fullName: cloud.project.database.service.ReplicationCreation.ReplicationCreation
                 */
                export interface ReplicationCreation {
                    emitHeartbeats: boolean;
                    enabled: boolean;
                    replicationPolicyClass: cloud.project.database.service.replication.PolicyClassEnum;
                    sourceIntegration: string;
                    syncGroupOffsets: boolean;
                    syncInterval: number;
                    targetIntegration: string;
                    topicExcludeList: string[];
                    topics: string[];
                }
                /**
                 * Defines the storage attributes of a service
                 * interface fullName: cloud.project.database.service.Storage.Storage
                 */
                export interface Storage {
                    size: complexType.UnitAndValue<number>;
                    type: string;
                }
                /**
                 * User definition
                 * interface fullName: cloud.project.database.service.User.User
                 */
                export interface User {
                    createdAt: string;
                    id: string;
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                /**
                 * User creation definition
                 * interface fullName: cloud.project.database.service.UserCreation.UserCreation
                 */
                export interface UserCreation {
                    name: string;
                }
                /**
                 * User with password definition
                 * interface fullName: cloud.project.database.service.UserWithPassword.UserWithPassword
                 */
                export interface UserWithPassword {
                    createdAt: string;
                    id: string;
                    password: string;
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                /**
                 * User with password definition
                 * interface fullName: cloud.project.database.service.UserWithPasswordAndRoles.UserWithPasswordAndRoles
                 */
                export interface UserWithPasswordAndRoles {
                    createdAt: string;
                    id: string;
                    password: string;
                    roles: string[];
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                /**
                 * User definition
                 * interface fullName: cloud.project.database.service.UserWithRoles.UserWithRoles
                 */
                export interface UserWithRoles {
                    createdAt: string;
                    id: string;
                    roles: string[];
                    status: cloud.project.database.StatusEnum;
                    username: string;
                }
                /**
                 * User creation definition
                 * interface fullName: cloud.project.database.service.UserWithRolesCreation.UserWithRolesCreation
                 */
                export interface UserWithRolesCreation {
                    name: string;
                    roles: string[];
                }
                export namespace capability {
                    /**
                     * State of the service capability for the service
                     * type fullname: cloud.project.database.service.capability.StateEnum
                     */
                    export type StateEnum = "disabled" | "enabled"
                }
                export namespace creation {
                    /**
                     * Defines the source to fork a cluster from a backup. DEPRECATED: use forkFrom
                     * interface fullName: cloud.project.database.service.creation.BackupFork.BackupFork
                     */
                    export interface BackupFork {
                        id: string;
                        pointInTime: string;
                        serviceId: string;
                    }
                    /**
                     * Defines the source to fork a cluster from a backup
                     * interface fullName: cloud.project.database.service.creation.ForkFrom.ForkFrom
                     */
                    export interface ForkFrom {
                        backupId: string;
                        pointInTime: string;
                        serviceId: string;
                    }
                }
                export namespace currentqueries {
                    /**
                     * Cloud database service current queries query definition
                     * interface fullName: cloud.project.database.service.currentqueries.Query.Query
                     */
                    export interface Query {
                        applicationName: string;
                        backendStart?: string;
                        backendType?: string;
                        backendXid?: number;
                        backendXmin?: number;
                        clientHostname?: string;
                        clientIp?: string;
                        clientPort?: number;
                        databaseId?: number;
                        databaseName: string;
                        leaderPid?: number;
                        pid: number;
                        query: string;
                        queryDuration: number;
                        queryStart?: string;
                        state: cloud.project.database.service.currentqueries.StateEnum;
                        stateChange?: string;
                        transactionStart?: string;
                        userId?: number;
                        userName: string;
                        waitEvent?: string;
                        waitEventType?: cloud.project.database.service.currentqueries.WaitEventTypeEnum;
                    }
                    /**
                     * Possible state of a query
                     * type fullname: cloud.project.database.service.currentqueries.StateEnum
                     */
                    export type StateEnum = "ACTIVE" | "DISABLED" | "FASTPATH_FUNCTION_CALL" | "IDLE" | "IDLE_IN_TRANSACTION" | "IDLE_IN_TRANSACTION_ABORTED"
                    /**
                     * Possible event type on which the backend is waiting
                     * type fullname: cloud.project.database.service.currentqueries.WaitEventTypeEnum
                     */
                    export type WaitEventTypeEnum = "ACTIVITY" | "BUFFER_PIN" | "CLIENT" | "EXTENSION" | "IO" | "IPC" | "LOCK" | "LWLOCK" | "TIMEOUT"
                    export namespace query {
                        /**
                         * Cloud database service current queries query cancel request
                         * interface fullName: cloud.project.database.service.currentqueries.query.CancelRequest.CancelRequest
                         */
                        export interface CancelRequest {
                            pid: number;
                            terminate: boolean;
                        }
                        /**
                         * Cloud database service current queries query cancel response
                         * interface fullName: cloud.project.database.service.currentqueries.query.CancelResponse.CancelResponse
                         */
                        export interface CancelResponse {
                            success: boolean;
                        }
                    }
                }
                export namespace endpoint {
                    /**
                     * Defines all the values for the component in the service endpoints
                     * type fullname: cloud.project.database.service.endpoint.ComponentEnum
                     */
                    export type ComponentEnum = "cassandra" | "grafana" | "graphite" | "influxdb" | "kafka" | "kafkaConnect" | "kafkaRestApi" | "kafkaSASL" | "kafkaSchemaRegistry" | "kibana" | "m3coordinator" | "mongodb" | "mongodbAnalytics" | "mongodbSrv" | "mongodbSrvAnalytics" | "mysql" | "mysqlRead" | "mysqlx" | "opensearch" | "postgresql" | "postgresqlRead" | "postgresqlReadReplica" | "prometheusRead" | "prometheusWrite" | "redis"
                }
                export namespace integration {
                    /**
                     * Possible state of the integration
                     * type fullname: cloud.project.database.service.integration.StatusEnum
                     */
                    export type StatusEnum = "READY"
                    /**
                     * Possible type of the service integration
                     * type fullname: cloud.project.database.service.integration.TypeEnum
                     */
                    export type TypeEnum = "grafanaDashboard" | "grafanaDatasource" | "kafkaConnect" | "kafkaLogs" | "kafkaMirrorMaker" | "m3aggregator" | "m3dbMetrics" | "opensearchLogs" | "postgresqlMetrics"
                }
                export namespace maintenance {
                    /**
                     * Possible status of a service maintenance
                     * type fullname: cloud.project.database.service.maintenance.StatusEnum
                     */
                    export type StatusEnum = "APPLIED" | "APPLYING" | "ERROR" | "PENDING" | "SCHEDULED"
                }
                export namespace node {
                    /**
                     * Node role values
                     * type fullname: cloud.project.database.service.node.RoleEnum
                     */
                    export type RoleEnum = "ANALYTICS" | "STANDARD"
                }
                export namespace replication {
                    /**
                     * Possible type of the service integration
                     * type fullname: cloud.project.database.service.replication.PolicyClassEnum
                     */
                    export type PolicyClassEnum = "org.apache.kafka.connect.mirror.DefaultReplicationPolicy" | "org.apache.kafka.connect.mirror.IdentityReplicationPolicy"
                }
            }
        }
        export namespace floatingIp {
            /**
             * Associated entity with a floating ip
             * interface fullName: cloud.project.floatingIp.AssociatedEntity.AssociatedEntity
             */
            export interface AssociatedEntity {
                gatewayId: string;
                id: string;
                ip: string;
                type: cloud.project.floatingIp.associatedEntity.TypeEnum;
            }
            /**
             * Status of a floating ip
             * type fullname: cloud.project.floatingIp.StatusEnum
             */
            export type StatusEnum = "active" | "down" | "error"
            export namespace associatedEntity {
                /**
                 * Type of the associated entity
                 * type fullname: cloud.project.floatingIp.associatedEntity.TypeEnum
                 */
                export type TypeEnum = "dhcp" | "instance" | "loadbalancer" | "routerInterface" | "unknown"
            }
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
            export type SizeEnum = "L" | "M" | "S"
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
            export type StatusEnum = "APPLYING" | "CREATED" | "DELETING" | "ERROR" | "FROZEN" | "RUNNING"
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
                export type BalancerAlgorithmEnum = "first" | "leastconn" | "roundrobin" | "source" | "static-rr"
                /**
                 * Available load balancer backend proxy-protocol
                 * type fullname: cloud.project.loadbalancer.backend.ProxyProtocolEnum
                 */
                export type ProxyProtocolEnum = "v1" | "v2" | "v2-cn" | "v2-ssl"
            }
            export namespace condition {
                /**
                 * Matching operator
                 * type fullname: cloud.project.loadbalancer.condition.MatchEnum
                 */
                export type MatchEnum = "end-with" | "exists" | "is" | "regex" | "start-with"
                /**
                 * Matching field
                 * type fullname: cloud.project.loadbalancer.condition.TypeEnum
                 */
                export type TypeEnum = "cookie" | "header" | "host" | "method" | "path" | "query-param" | "source"
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
                        export type StatusEnum = "ERROR" | "HEALTHY" | "INIT" | "L4_CONNECTION_ERROR" | "L4_TIMEOUT_ERROR" | "L7_PROTOCOL_ERROR" | "L7_RESPONSE_ERROR" | "L7_TIMEOUT" | "UNKNOWN"
                    }
                }
            }
            export namespace target {
                /**
                 * Available load balancer target balancer algorithm
                 * type fullname: cloud.project.loadbalancer.target.BalancerAlgorithmEnum
                 */
                export type BalancerAlgorithmEnum = "first" | "leastconn" | "roundrobin" | "source" | "static-rr"
                /**
                 * Available load balancer target proxy-protocol
                 * type fullname: cloud.project.loadbalancer.target.ProxyProtocolEnum
                 */
                export type ProxyProtocolEnum = "v1" | "v2" | "v2-cn" | "v2-ssl"
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
        export namespace region {
            /**
             * Possible values for image os type
             * type fullname: cloud.project.region.ImageOsTypeEnum
             */
            export type ImageOsTypeEnum = "baremetal-linux" | "linux" | "windows"
            /**
             * Possible values for image status
             * type fullname: cloud.project.region.ImageStatusEnum
             */
            export type ImageStatusEnum = "active" | "deleted" | "error" | "queued" | "saving"
            /**
             * Possible values for image visibility
             * type fullname: cloud.project.region.ImageVisibilityEnum
             */
            export type ImageVisibilityEnum = "community" | "private" | "public" | "shared"
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
         * Quotas on keymanager
         * interface fullName: cloud.quota.KeymanagerQuotas.KeymanagerQuotas
         */
        export interface KeymanagerQuotas {
            maxSecrets: number;
            usedSecrets: number;
        }
        /**
         * Quotas on keypairs
         * interface fullName: cloud.quota.KeypairQuotas.KeypairQuotas
         */
        export interface KeypairQuotas {
            maxCount: number;
        }
        /**
         * Quotas on loadbalancer
         * interface fullName: cloud.quota.LoadbalancerQuotas.LoadbalancerQuotas
         */
        export interface LoadbalancerQuotas {
            maxLoadbalancers: number;
            usedLoadbalancers: number;
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
         * Quotas on network
         * interface fullName: cloud.quota.NetworkQuotas.NetworkQuotas
         */
        export interface NetworkQuotas {
            maxFloatingIPs: number;
            maxGateways: number;
            maxNetworks: number;
            maxSubnets: number;
            usedFloatingIPs: number;
            usedGateways: number;
            usedNetworks: number;
            usedSubnets: number;
        }
        /**
         * Quotas
         * interface fullName: cloud.quota.Quotas.Quotas
         */
        export interface Quotas {
            instance?: cloud.quota.InstanceUsageQuotas;
            keymanager?: cloud.quota.KeymanagerQuotas;
            keypair?: cloud.quota.KeypairQuotas;
            loadbalancer?: cloud.quota.LoadbalancerQuotas;
            network?: cloud.quota.NetworkQuotas;
            region: string;
            share?: cloud.quota.share.Quota;
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
            maxBackupGigabytes: number;
            maxGigabytes: number;
            maxVolumeBackupCount: number;
            maxVolumeCount: number;
            usedBackupGigabytes: number;
            usedGigabytes: number;
            volumeBackupCount: number;
            volumeCount: number;
        }
        export namespace share {
            /**
             * Share Quota
             * interface fullName: cloud.quota.share.Quota.Quota
             */
            export interface Quota {
                maxShareSizePerShare: number;
                maxShareSizeTotal: number;
                maxShareSnapshots: number;
                maxSharesNumber: number;
                usedShareSizeTotal: number;
                usedShareSnapshots: number;
                usedSharesNumber: number;
            }
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
    export namespace region {
        /**
         * Region flavor
         * interface fullName: cloud.region.Flavor.Flavor
         */
        export interface Flavor {
            disk: number;
            id: string;
            name: string;
            ram: number;
            region: string;
            vcpus: number;
        }
        /**
         * Region image
         * interface fullName: cloud.region.Image.Image
         */
        export interface Image {
            baseImageRef: string;
            createdAt: string;
            id: string;
            name: string;
            osType: cloud.project.region.ImageOsTypeEnum;
            region: string;
            size: number;
            status: cloud.project.region.ImageStatusEnum;
            visibility: cloud.project.region.ImageVisibilityEnum;
        }
        /**
         * Region SSHKey
         * interface fullName: cloud.region.SSHKey.SSHKey
         */
        export interface SSHKey {
            fingerPrint: string;
            id: string;
            name: string;
            publicKey: string;
            region: string;
        }
        /**
         * Region volume
         * interface fullName: cloud.region.Volume.Volume
         */
        export interface Volume {
            id: string;
            name: string;
            size: number;
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
    export namespace share {
        /**
         * Capability
         * interface fullName: cloud.share.Capability.Capability
         */
        export interface Capability {
            enabled: boolean;
            name: string;
        }
        /**
         * Object
         * interface fullName: cloud.share.ExportLocationObject.ExportLocationObject
         */
        export interface ExportLocationObject {
            id: string;
            path: string;
        }
        /**
         * Share protocol
         * type fullname: cloud.share.ProtocolEnum
         */
        export type ProtocolEnum = "NFS"
        /**
         * Share
         * interface fullName: cloud.share.Share.Share
         */
        export interface Share {
            capabilities?: cloud.share.Capability[];
            createdAt: string;
            description?: string;
            exportLocations?: cloud.share.ExportLocationObject[];
            id: string;
            isPublic: boolean;
            name?: string;
            protocol: cloud.share.ProtocolEnum;
            region: string;
            size: number;
            status: cloud.share.StatusEnum;
            updatedAt: string;
        }
        /**
         * Input Object used to create a share
         * interface fullName: cloud.share.ShareUpdate.ShareUpdate
         */
        export interface ShareUpdate {
            description: string;
            name: string;
            newSize: number;
        }
        /**
         * Share status
         * type fullname: cloud.share.StatusEnum
         */
        export type StatusEnum = "available" | "awaiting_transfer" | "backup_creating" | "backup_restoring" | "backup_restoring_error" | "creating" | "creating_from_snapshot" | "deleted" | "deleting" | "error" | "error_deleting" | "extending" | "extending_error" | "inactive" | "manage_error" | "manage_starting" | "migrating" | "migrating_to" | "replication_change" | "reverting" | "reverting_error" | "shrinking" | "shrinking_error" | "shrinking_possible_data_loss_error" | "unmanage_error" | "unmanage_starting" | "unmanaged"
        export namespace acl {
            /**
             * Share ACL
             * interface fullName: cloud.share.acl.ACL.ACL
             */
            export interface ACL {
                accessLevel: cloud.share.acl.AccessLevelEnum;
                accessTo: string;
                accessType: cloud.share.acl.AccessTypeEnum;
                createdAt: string;
                id: string;
                status: cloud.share.acl.StatusEnum;
                updatedAt: string;
            }
            /**
             * Share ACL
             * interface fullName: cloud.share.acl.ACLCreate.ACLCreate
             */
            export interface ACLCreate {
                accessLevel: cloud.share.acl.AccessLevelEnum;
                accessTo: string;
                accessType: cloud.share.acl.AccessTypeEnum;
            }
            /**
             * ACL Access Level
             * type fullname: cloud.share.acl.AccessLevelEnum
             */
            export type AccessLevelEnum = "ro" | "rw"
            /**
             * ACL Access Type
             * type fullname: cloud.share.acl.AccessTypeEnum
             */
            export type AccessTypeEnum = "cert" | "ip" | "user"
            /**
             * ACL Status
             * type fullname: cloud.share.acl.StatusEnum
             */
            export type StatusEnum = "active" | "applying" | "denying" | "error" | "queued_to_apply" | "queued_to_deny"
        }
        export namespace snapshot {
            /**
             * Share snapshot
             * interface fullName: cloud.share.snapshot.Snapshot.Snapshot
             */
            export interface Snapshot {
                createdAt: string;
                description?: string;
                id: string;
                name?: string;
                shareId: string;
                shareProtocol?: cloud.share.ProtocolEnum;
                shareSize: number;
                size: number;
                status: cloud.share.snapshot.StatusEnum;
            }
            /**
             * Snapshot Status
             * type fullname: cloud.share.snapshot.StatusEnum
             */
            export type StatusEnum = "available" | "creating" | "deleting" | "error" | "error_deleting" | "manage_error" | "manage_starting" | "restoring" | "unmanage_error" | "unmanage_starting"
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
            archive?: boolean;
            containerType?: cloud.storage.TypeEnum;
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
         * Encryption algorithm
         * type fullname: cloud.storage.EncryptionAlgorithmEnum
         */
        export type EncryptionAlgorithmEnum = "AES256" | "plaintext"
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
            signedHeaders: { [key: string]: string };
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
            storageClass: cloud.storage.StorageClassEnum;
        }
        /**
         * Presigned URL method
         * type fullname: cloud.storage.PresignedURLMethodEnum
         */
        export type PresignedURLMethodEnum = "DELETE" | "GET" | "PUT"
        /**
         * Cloud Storage Quota
         * interface fullName: cloud.storage.Quota.Quota
         */
        export interface Quota {
            buckets: number;
            maxBuckets: number;
        }
        /**
         * RetrievalStateEnum
         * type fullname: cloud.storage.RetrievalStateEnum
         */
        export type RetrievalStateEnum = "sealed" | "unsealed" | "unsealing"
        /**
         * RightEnum
         * type fullname: cloud.storage.RightEnum
         */
        export type RightEnum = "all" | "read" | "write"
        /**
         * Storage class
         * type fullname: cloud.storage.StorageClassEnum
         */
        export type StorageClassEnum = "HIGH_PERF" | "STANDARD"
        /**
         * TypeEnum
         * type fullname: cloud.storage.TypeEnum
         */
        export type TypeEnum = "private" | "public" | "static"
        /**
         * Versioning status
         * type fullname: cloud.storage.VersioningStatusEnum
         */
        export type VersioningStatusEnum = "disabled" | "enabled" | "suspended"
    }
    export namespace user {
        /**
         * Client Cloud Configuration
         * interface fullName: cloud.user.Configuration.Configuration
         */
        export interface Configuration {
            content: string;
        }
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
         * RCloneServiceEnum
         * type fullname: cloud.user.RCloneServiceEnum
         */
        export type RCloneServiceEnum = "storage" | "storage-s3"
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
        export type RoleEnum = "admin" | "administrator" | "ai_training_operator" | "ai_training_read" | "authentication" | "backup_operator" | "compute_operator" | "image_operator" | "infrastructure_supervisor" | "network_operator" | "network_security_operator" | "objectstore_operator" | "volume_operator"
        /**
         * S3Credentials
         * interface fullName: cloud.user.S3Credentials.S3Credentials
         */
        export interface S3Credentials {
            access: string;
            tenantId: string;
            userId: string;
        }
        /**
         * S3CredentialsSecretOnly
         * interface fullName: cloud.user.S3CredentialsSecretOnly.S3CredentialsSecretOnly
         */
        export interface S3CredentialsSecretOnly {
            secret: string;
        }
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
        export type UserStatusEnum = "creating" | "deleted" | "deleting" | "ok"
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
        export type SnapshotStatusEnum = "available" | "creating" | "deleting" | "error" | "error_deleting"
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
            status: cloud.volume.VolumeStatusEnum;
            type: cloud.volume.VolumeTypeEnum;
        }
        /**
         * VolumeStatusEnum
         * type fullname: cloud.volume.VolumeStatusEnum
         */
        export type VolumeStatusEnum = "attaching" | "available" | "awaiting-transfer" | "backing-up" | "creating" | "deleting" | "detaching" | "downloading" | "error" | "error_backing-up" | "error_deleting" | "error_extending" | "error_restoring" | "extending" | "in-use" | "maintenance" | "reserved" | "restoring-backup" | "retyping" | "uploading"
        /**
         * VolumeTypeEnum
         * type fullname: cloud.volume.VolumeTypeEnum
         */
        export type VolumeTypeEnum = "classic" | "high-speed" | "high-speed-gen2"
    }
    export namespace volumeBackup {
        /**
         * A volume backup
         * interface fullName: cloud.volumeBackup.VolumeBackup.VolumeBackup
         */
        export interface VolumeBackup {
            creationDate: string;
            id: string;
            name: string;
            region: string;
            size: number;
            status: cloud.volumeBackup.VolumeBackupStatusEnum;
            volumeId: string;
        }
        /**
         * Create a volume backup
         * interface fullName: cloud.volumeBackup.VolumeBackupCreation.VolumeBackupCreation
         */
        export interface VolumeBackupCreation {
            name: string;
            volumeId: string;
        }
        /**
         * Restore a volume backup on a volume
         * interface fullName: cloud.volumeBackup.VolumeBackupRestore.VolumeBackupRestore
         */
        export interface VolumeBackupRestore {
            volumeId: string;
        }
        /**
         * VolumeBackupStatusEnum
         * type fullname: cloud.volumeBackup.VolumeBackupStatusEnum
         */
        export type VolumeBackupStatusEnum = "creating" | "deleting" | "error" | "ok" | "restoring"
        /**
         * Create a volume from a volume backup
         * interface fullName: cloud.volumeBackup.VolumeCreationFromBackup.VolumeCreationFromBackup
         */
        export interface VolumeCreationFromBackup {
            name: string;
        }
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
export namespace dbaas {
    export namespace logs {
        /**
         * Log kind
         * interface fullName: dbaas.logs.LogKind.LogKind
         */
        export interface LogKind {
            additionalReturnedFields: string[];
            createdAt: string;
            displayName: string;
            kindId: string;
            name: string;
            updatedAt: string;
        }
        /**
         * Log temporary URL creation payload
         * interface fullName: dbaas.logs.LogUrlCreation.LogUrlCreation
         */
        export interface LogUrlCreation {
            kind: string;
        }
        /**
         * Temporary url information
         * interface fullName: dbaas.logs.TemporaryLogsLink.TemporaryLogsLink
         */
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
    }
}
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
export namespace nichandle {
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
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
        $cache(param?: ICacheOptions | CacheAction): void;
        rule: {
            availability: {
                /**
                 * Get product availability
                 * GET /cloud/order/rule/availability
                 */
                $get(params: { addonFamily?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, planCode?: string }): Promise<cloud.order.rule.Availability>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            instanceCategory: {
                /**
                 * Get instance categories
                 * GET /cloud/order/rule/instanceCategory
                 */
                $get(): Promise<cloud.order.rule.InstanceCategories>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        }
    }
    project: {
        /**
         * List available services
         * GET /cloud/project
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
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
            $cache(param?: ICacheOptions | CacheAction): void;
            activateMonthlyBilling: {
                /**
                 * Activate monthly billing on multiple instances
                 * POST /cloud/project/{serviceName}/activateMonthlyBilling
                 */
                $post(params: { instances: cloud.instance.MonthlyInstanceBulkParams[] }): Promise<cloud.instance.InstanceDetail[]>;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                kube: {
                    admissionplugins: {
                        /**
                         * List of admissionPlugins managed by MKS product that can be enabled or disabled.
                         * GET /cloud/project/{serviceName}/capabilities/kube/admissionplugins
                         */
                        $get(): Promise<cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    flavors: {
                        /**
                         * List Kubernetes available flavors for a region
                         * GET /cloud/project/{serviceName}/capabilities/kube/flavors
                         */
                        $get(params?: { region?: string }): Promise<cloud.kube.Flavor[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    log: {
                        kind: {
                            /**
                             * List available log kinds
                             * GET /cloud/project/{serviceName}/capabilities/kube/log/kind
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(name: string): {
                                /**
                                 * Get a log kind
                                 * GET /cloud/project/{serviceName}/capabilities/kube/log/kind/{name}
                                 */
                                $get(): Promise<dbaas.logs.LogKind>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                    }
                    regions: {
                        /**
                         * List Kubernetes regions where cluster creation is possible.
                         * GET /cloud/project/{serviceName}/capabilities/kube/regions
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(regionName: string): {
                            /**
                             * Get specific information of a region
                             * GET /cloud/project/{serviceName}/capabilities/loadbalancer/region/{regionName}
                             */
                            $get(): Promise<cloud.project.loadbalancer.Region>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        };
                    }
                }
                productAvailability: {
                    /**
                     * List product availability
                     * GET /cloud/project/{serviceName}/capabilities/productAvailability
                     */
                    $get(params: { addonFamily?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, planCode?: string, planFamily?: string, product?: string }): Promise<cloud.capabilities.Availability>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
            }
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /cloud/project/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                    }
                    ipRestrictions: {
                        management: {
                            /**
                             * List your IP restrictions applied on Harbor UI and API
                             * GET /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/management
                             */
                            $get(): Promise<cloud.containerRegistry.IPRestrictions[]>;
                            /**
                             * Replace IP restrictions applied on Harbor UI and API
                             * PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/management
                             */
                            $put(): Promise<cloud.containerRegistry.IPRestrictions[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        registry: {
                            /**
                             * List your IP restrictions applied on artifact manager component
                             * GET /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/registry
                             */
                            $get(): Promise<cloud.containerRegistry.IPRestrictions[]>;
                            /**
                             * Replace IP restrictions applied on artifact manager component (Docker, Helm, etc...)
                             * PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/registry
                             */
                            $put(): Promise<cloud.containerRegistry.IPRestrictions[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                    }
                    openIdConnect: {
                        /**
                         * Delete the registry's OIDC Configuration
                         * DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get the registry's OIDC configuration
                         * GET /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect
                         */
                        $get(): Promise<cloud.containerRegistry.OIDCConfiguration>;
                        /**
                         * Add or replace the registry's OIDC configuration
                         * POST /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect
                         */
                        $post(params: { deleteUsers?: boolean, provider: cloud.containerRegistry.OIDCConfiguration }): Promise<void>;
                        /**
                         * Edit the registry's OIDC configuration
                         * PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect
                         */
                        $put(params?: { adminGroup?: string, autoOnboard?: boolean, clientId?: string, clientSecret?: string, endpoint?: string, groupsClaim?: string, name?: string, scope?: string, userClaim?: string, verifyCert?: boolean }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(userID: string): {
                            /**
                             * Delete a registry user
                             * DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get registry user
                             * GET /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}
                             */
                            $get(): Promise<cloud.containerRegistry.User>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            setAsAdmin: {
                                /**
                                 * Set the user as Admin
                                 * PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}/setAsAdmin
                                 */
                                $put(): Promise<void>;
                            }
                        };
                    }
                };
            }
            database: {
                availability: {
                    /**
                     * Get database engines availability
                     * GET /cloud/project/{serviceName}/database/availability
                     */
                    $get(params?: { action?: cloud.project.database.availability.ActionEnum, clusterId?: string, target?: cloud.project.database.availability.TargetEnum }): Promise<cloud.project.database.Availability[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                capabilities: {
                    /**
                     * Get database engines capabilities
                     * GET /cloud/project/{serviceName}/database/capabilities
                     */
                    $get(): Promise<cloud.project.database.Capabilities>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                cassandra: {
                    /**
                     * List all the cassandra clusters of the project
                     * GET /cloud/project/{serviceName}/database/cassandra
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new cassandra cluster
                     * POST /cloud/project/{serviceName}/database/cassandra
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a cassandra cluster
                         * DELETE /cloud/project/{serviceName}/database/cassandra/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get cassandra cluster properties
                         * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing cassandra cluster
                         * PUT /cloud/project/{serviceName}/database/cassandra/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get cassandra advanced configuration
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update cassandra advanced configuration
                             * PUT /cloud/project/{serviceName}/database/cassandra/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        backup: {
                            /**
                             * List backups of the cassandra
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/backup
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(backupId: string): {
                                /**
                                 * Get cassandra backups
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/backup/{backupId}
                                 */
                                $get(): Promise<cloud.project.database.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get cassandra advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the cassandra service
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        certificates: {
                            /**
                             * Retrieve the certificates of the cassandra cluster
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/certificates
                             */
                            $get(): Promise<cloud.project.database.service.Certificates>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/cassandra/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/cassandra/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List cassandra ip restrictions
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the cassandra
                             * POST /cloud/project/{serviceName}/database/cassandra/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the cassandra
                                 * DELETE /cloud/project/{serviceName}/database/cassandra/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get cassandra ip restrictions
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the cassandra
                                 * PUT /cloud/project/{serviceName}/database/cassandra/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent cassandra log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the cassandra cluster
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the cassandra cluster
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/cassandra/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the cassandra cluster
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the cassandra cluster
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the cassandra
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get cassandra nodes
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        user: {
                            /**
                             * List users of the cassandra
                             * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the cassandra cluster
                             * POST /cloud/project/{serviceName}/database/cassandra/{clusterId}/user
                             */
                            $post(params?: { name?: string }): Promise<cloud.project.database.service.UserWithPassword>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete a cassandra user
                                 * DELETE /cloud/project/{serviceName}/database/cassandra/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get cassandra users
                                 * GET /cloud/project/{serviceName}/database/cassandra/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.service.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/cassandra/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.service.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                grafana: {
                    /**
                     * List all the grafana of the project
                     * GET /cloud/project/{serviceName}/database/grafana
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new grafana cluster
                     * POST /cloud/project/{serviceName}/database/grafana
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a grafana cluster
                         * DELETE /cloud/project/{serviceName}/database/grafana/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get grafana cluster properties
                         * GET /cloud/project/{serviceName}/database/grafana/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing grafana cluster
                         * PUT /cloud/project/{serviceName}/database/grafana/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get grafana advanced configuration
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update grafana advanced configuration
                             * PUT /cloud/project/{serviceName}/database/grafana/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        backup: {
                            /**
                             * List backups of the grafana
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/backup
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(backupId: string): {
                                /**
                                 * Get grafana backups
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/backup/{backupId}
                                 */
                                $get(): Promise<cloud.project.database.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get grafana advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the grafana service
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/grafana/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/grafana/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List grafana ip restrictions
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the grafana
                             * POST /cloud/project/{serviceName}/database/grafana/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the grafana
                                 * DELETE /cloud/project/{serviceName}/database/grafana/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get grafana ip restrictions
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the grafana
                                 * PUT /cloud/project/{serviceName}/database/grafana/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent grafana log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the grafana cluster
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the grafana cluster
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/grafana/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the grafana cluster
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the grafana cluster
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the grafana
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get grafana nodes
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        user: {
                            /**
                             * List users of the grafana
                             * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Get grafana users
                                 * GET /cloud/project/{serviceName}/database/grafana/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.service.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/grafana/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.service.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                kafka: {
                    /**
                     * List all the kafka of the project
                     * GET /cloud/project/{serviceName}/database/kafka
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new kafka cluster
                     * POST /cloud/project/{serviceName}/database/kafka
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a kafka cluster
                         * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get kafka cluster properties
                         * GET /cloud/project/{serviceName}/database/kafka/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.kafka.Service>;
                        /**
                         * Update an existing kafka cluster
                         * PUT /cloud/project/{serviceName}/database/kafka/{clusterId}
                         */
                        $put(params?: { backupTime?: string, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, restApi?: boolean, schemaRegistry?: boolean, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.kafka.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        acl: {
                            /**
                             * List acls of the kafka
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/acl
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new acl on the kafka cluster
                             * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/acl
                             */
                            $post(params: { id?: string, permission: string, topic: string, username: string }): Promise<cloud.project.database.kafka.TopicAcl>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(aclId: string): {
                                /**
                                 * Delete a kafka acl
                                 * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}/acl/{aclId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafka acls
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/acl/{aclId}
                                 */
                                $get(): Promise<cloud.project.database.kafka.TopicAcl>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        advancedConfiguration: {
                            /**
                             * Get kafka advanced configuration
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update kafka advanced configuration
                             * PUT /cloud/project/{serviceName}/database/kafka/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get kafka advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the kafka service
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        certificates: {
                            /**
                             * Retrieve the certificates of the kafka cluster
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/certificates
                             */
                            $get(): Promise<cloud.project.database.service.Certificates>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List kafka ip restrictions
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the kafka
                             * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the kafka
                                 * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafka ip restrictions
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the kafka
                                 * PUT /cloud/project/{serviceName}/database/kafka/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent kafka log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the kafka cluster
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the kafka cluster
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the kafka cluster
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the kafka cluster
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the kafka
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get kafka nodes
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        permissions: {
                            /**
                             * Retrieve the permissions available on the cluster
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/permissions
                             */
                            $get(): Promise<cloud.project.database.kafka.Permissions>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        schemaRegistryAcl: {
                            /**
                             * List schema registry acls of the kafka
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/schemaRegistryAcl
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new schema registry acl on the kafka cluster
                             * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/schemaRegistryAcl
                             */
                            $post(params: { id?: string, permission: string, resource: string, username: string }): Promise<cloud.project.database.kafka.SchemaRegistryAcl>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(aclId: string): {
                                /**
                                 * Delete a kafka schema registry acl
                                 * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}/schemaRegistryAcl/{aclId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafka schema registry acls
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/schemaRegistryAcl/{aclId}
                                 */
                                $get(): Promise<cloud.project.database.kafka.SchemaRegistryAcl>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        topic: {
                            /**
                             * List topics of the kafka
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/topic
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new topic on the kafka cluster
                             * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/topic
                             */
                            $post(params: { id?: string, minInsyncReplicas?: number, name: string, partitions?: number, replication?: number, retentionBytes?: number, retentionHours?: number }): Promise<cloud.project.database.kafka.Topic>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(topicId: string): {
                                /**
                                 * Delete a kafka topic
                                 * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}/topic/{topicId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafka topics
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/topic/{topicId}
                                 */
                                $get(): Promise<cloud.project.database.kafka.Topic>;
                                /**
                                 * Updates the topic on the kafka cluster
                                 * PUT /cloud/project/{serviceName}/database/kafka/{clusterId}/topic/{topicId}
                                 */
                                $put(params?: { id?: string, minInsyncReplicas?: number, name?: string, partitions?: number, replication?: number, retentionBytes?: number, retentionHours?: number }): Promise<cloud.project.database.kafka.Topic>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        topicAcl: {
                            /**
                             * List topic acls of the kafka
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/topicAcl
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new topic acl on the kafka cluster
                             * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/topicAcl
                             */
                            $post(params: { id?: string, permission: string, topic: string, username: string }): Promise<cloud.project.database.kafka.TopicAcl>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(aclId: string): {
                                /**
                                 * Delete a kafka topic acl
                                 * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}/topicAcl/{aclId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafka topic acls
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/topicAcl/{aclId}
                                 */
                                $get(): Promise<cloud.project.database.kafka.TopicAcl>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        user: {
                            /**
                             * List users of the kafka
                             * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the kafka cluster
                             * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/user
                             */
                            $post(params?: { name?: string }): Promise<cloud.project.database.service.UserWithPassword>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete a kafka user
                                 * DELETE /cloud/project/{serviceName}/database/kafka/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafka users
                                 * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.service.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                access: {
                                    /**
                                     * Retrieve the user acces for the cluster
                                     * GET /cloud/project/{serviceName}/database/kafka/{clusterId}/user/{userId}/access
                                     */
                                    $get(): Promise<cloud.project.database.kafka.user.Access>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                }
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/kafka/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.service.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                kafkaConnect: {
                    /**
                     * List all the kafkaConnect of the project
                     * GET /cloud/project/{serviceName}/database/kafkaConnect
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new kafkaConnect cluster
                     * POST /cloud/project/{serviceName}/database/kafkaConnect
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a kafkaConnect cluster
                         * DELETE /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get kafkaConnect cluster properties
                         * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing kafkaConnect cluster
                         * PUT /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get kafkaConnect advanced configuration
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update kafkaConnect advanced configuration
                             * PUT /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get kafkaConnect advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            connector: {
                                /**
                                 * List Kafka Connect connectors
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/capabilities/connector
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                $(connectorId: string): {
                                    /**
                                     * Get Kafka Connect connector capability
                                     * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/capabilities/connector/{connectorId}
                                     */
                                    $get(): Promise<cloud.project.database.kafkaConnect.capabilities.Connector>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                    configuration: {
                                        /**
                                         * Get Kafka Connect connector configuration
                                         * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/capabilities/connector/{connectorId}/configuration
                                         */
                                        $get(): Promise<cloud.project.database.kafkaConnect.capabilities.connector.configuration.Property[]>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): void;
                                    }
                                    transforms: {
                                        /**
                                         * Get Kafka Connect connector transforms
                                         * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/capabilities/connector/{connectorId}/transforms
                                         */
                                        $get(): Promise<cloud.project.database.kafkaConnect.capabilities.connector.Transform[]>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): void;
                                    }
                                };
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the kafkaConnect service
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        connector: {
                            /**
                             * List the connectors
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new connector
                             * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector
                             */
                            $post(params: { configuration: { [key: string]: string }, connectorId: string, name: string }): Promise<cloud.project.database.kafkaConnect.Connector>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(connectorId: string): {
                                /**
                                 * Delete a connector
                                 * DELETE /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get connector
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}
                                 */
                                $get(): Promise<cloud.project.database.kafkaConnect.Connector>;
                                /**
                                 * Update a connector
                                 * PUT /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}
                                 */
                                $put(params: { configuration: { [key: string]: string }, connectorId?: string, id?: string, name?: string, status?: cloud.project.database.kafkaConnect.connector.StatusEnum }): Promise<cloud.project.database.kafkaConnect.Connector>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                pause: {
                                    /**
                                     * Pause the kafka connector execution
                                     * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}/pause
                                     */
                                    $post(): Promise<void>;
                                }
                                restart: {
                                    /**
                                     * Restart the kafka connector execution
                                     * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}/restart
                                     */
                                    $post(): Promise<void>;
                                }
                                resume: {
                                    /**
                                     * Resume the kafka connector execution
                                     * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}/resume
                                     */
                                    $post(): Promise<void>;
                                }
                                task: {
                                    /**
                                     * List the connector tasks
                                     * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}/task
                                     */
                                    $get(): Promise<number[]>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                    $(taskId: number): {
                                        /**
                                         * Get connector task
                                         * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}/task/{taskId}
                                         */
                                        $get(): Promise<cloud.project.database.kafkaConnect.connector.Task>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): void;
                                        restart: {
                                            /**
                                             * Restart the kafka connector task execution
                                             * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}/task/{taskId}/restart
                                             */
                                            $post(): Promise<void>;
                                        }
                                    };
                                }
                            };
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List kafkaConnect ip restrictions
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the kafkaConnect
                             * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the kafkaConnect
                                 * DELETE /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafkaConnect ip restrictions
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the kafkaConnect
                                 * PUT /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent kafkaConnect log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the kafka connect cluster
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the kafka connect cluster
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the kafkaConnect cluster
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the kafkaConnect cluster
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the kafkaConnect
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get kafkaConnect nodes
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        user: {
                            /**
                             * List users of the kafkaConnect
                             * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the kafkaConnect cluster
                             * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/user
                             */
                            $post(params?: { name?: string }): Promise<cloud.project.database.service.UserWithPassword>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete a kafkaConnect user
                                 * DELETE /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafkaConnect users
                                 * GET /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.service.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.service.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                kafkaMirrorMaker: {
                    /**
                     * List all the kafkaMirrorMaker of the project
                     * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new kafkaMirrorMaker
                     * POST /cloud/project/{serviceName}/database/kafkaMirrorMaker
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a kafkaMirrorMaker
                         * DELETE /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get kafkaMirrorMaker properties
                         * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing kafkaMirrorMaker
                         * PUT /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        capabilities: {
                            integration: {
                                /**
                                 * Get integration capabilities related to the kafkaMirrorMaker service
                                 * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent kafkaMirrorMaker log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the kafka mirror maker cluster
                             * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the kafka mirror maker cluster
                                 * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the kafkaMirrorMaker
                             * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the kafkaMirrorMaker
                                 * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the kafkaMirrorMaker
                             * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get kafkaMirrorMaker nodes
                                 * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        replication: {
                            /**
                             * List replication of the kafkaMirrorMaker
                             * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/replication
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new replication
                             * POST /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/replication
                             */
                            $post(params: { emitHeartbeats?: boolean, enabled: boolean, replicationPolicyClass?: cloud.project.database.service.replication.PolicyClassEnum, sourceIntegration: string, syncGroupOffsets?: boolean, syncInterval?: number, targetIntegration: string, topicExcludeList?: string[], topics?: string[] }): Promise<cloud.project.database.service.Replication>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(replicationId: string): {
                                /**
                                 * Delete an replication
                                 * DELETE /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/replication/{replicationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get kafkaMirrorMaker replication
                                 * GET /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/replication/{replicationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Replication>;
                                /**
                                 * Updates a replication
                                 * PUT /cloud/project/{serviceName}/database/kafkaMirrorMaker/{clusterId}/replication/{replicationId}
                                 */
                                $put(params: { emitHeartbeats?: boolean, enabled: boolean, id?: string, replicationPolicyClass?: cloud.project.database.service.replication.PolicyClassEnum, sourceIntegration?: string, syncGroupOffsets?: boolean, syncInterval?: number, targetIntegration?: string, topicExcludeList?: string[], topics?: string[] }): Promise<cloud.project.database.service.Replication>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                    };
                }
                m3aggregator: {
                    /**
                     * List all the m3aggregator of the project
                     * GET /cloud/project/{serviceName}/database/m3aggregator
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new m3aggregator
                     * POST /cloud/project/{serviceName}/database/m3aggregator
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a m3aggregator
                         * DELETE /cloud/project/{serviceName}/database/m3aggregator/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get m3aggregator properties
                         * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing m3aggregator
                         * PUT /cloud/project/{serviceName}/database/m3aggregator/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        capabilities: {
                            integration: {
                                /**
                                 * Get integration capabilities related to the m3aggregator service
                                 * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent m3aggregator log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the m3aggregator cluster
                             * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the m3aggregator cluster
                                 * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the m3aggregator
                             * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the m3aggregator
                                 * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the m3aggregator
                             * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get m3aggregator nodes
                                 * GET /cloud/project/{serviceName}/database/m3aggregator/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                    };
                }
                m3db: {
                    /**
                     * List all the m3db clusters of the project
                     * GET /cloud/project/{serviceName}/database/m3db
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new m3db cluster
                     * POST /cloud/project/{serviceName}/database/m3db
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a m3db cluster
                         * DELETE /cloud/project/{serviceName}/database/m3db/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get m3db cluster properties
                         * GET /cloud/project/{serviceName}/database/m3db/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing m3db cluster
                         * PUT /cloud/project/{serviceName}/database/m3db/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get m3db advanced configuration
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update m3db advanced configuration
                             * PUT /cloud/project/{serviceName}/database/m3db/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        backup: {
                            /**
                             * List backups of the m3db
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/backup
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(backupId: string): {
                                /**
                                 * Get m3db backups
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/backup/{backupId}
                                 */
                                $get(): Promise<cloud.project.database.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get m3db advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the m3db service
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/m3db/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/m3db/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List m3db ip restrictions
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the m3db
                             * POST /cloud/project/{serviceName}/database/m3db/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the m3db
                                 * DELETE /cloud/project/{serviceName}/database/m3db/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get m3db ip restrictions
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the m3db
                                 * PUT /cloud/project/{serviceName}/database/m3db/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent m3db log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the m3db cluster
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the m3db cluster
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/m3db/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the m3db cluster
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the m3db cluster
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        namespace: {
                            /**
                             * List namespaces of the m3db
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/namespace
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new namespace on the m3db cluster
                             * POST /cloud/project/{serviceName}/database/m3db/{clusterId}/namespace
                             */
                            $post(params: { id?: string, name: string, resolution?: string, retention?: cloud.project.database.m3db.namespace.Retention, snapshotEnabled?: boolean, type: cloud.project.database.m3db.namespace.TypeEnum, writesToCommitLogEnabled?: boolean }): Promise<cloud.project.database.m3db.Namespace>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(namespaceId: string): {
                                /**
                                 * Delete m3db namespace
                                 * DELETE /cloud/project/{serviceName}/database/m3db/{clusterId}/namespace/{namespaceId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get m3db namespaces
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/namespace/{namespaceId}
                                 */
                                $get(): Promise<cloud.project.database.m3db.Namespace>;
                                /**
                                 * Updates the namespace on the m3db cluster
                                 * PUT /cloud/project/{serviceName}/database/m3db/{clusterId}/namespace/{namespaceId}
                                 */
                                $put(params?: { id?: string, name?: string, resolution?: string, retention?: cloud.project.database.m3db.namespace.Retention, snapshotEnabled?: boolean, type?: cloud.project.database.m3db.namespace.TypeEnum, writesToCommitLogEnabled?: boolean }): Promise<cloud.project.database.m3db.Namespace>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the m3db
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get m3db nodes
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        user: {
                            /**
                             * List users of the m3db
                             * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the m3db cluster
                             * POST /cloud/project/{serviceName}/database/m3db/{clusterId}/user
                             */
                            $post(params: { group?: string, name: string }): Promise<cloud.project.database.m3db.UserWithPassword>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete m3db user
                                 * DELETE /cloud/project/{serviceName}/database/m3db/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get m3db users
                                 * GET /cloud/project/{serviceName}/database/m3db/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.m3db.User>;
                                /**
                                 * Updates the user on the m3db cluster
                                 * PUT /cloud/project/{serviceName}/database/m3db/{clusterId}/user/{userId}
                                 */
                                $put(params?: { createdAt?: string, group?: string, id?: string, status?: cloud.project.database.StatusEnum, username?: string }): Promise<cloud.project.database.m3db.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/m3db/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.m3db.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                mysql: {
                    /**
                     * List all the mysql of the project
                     * GET /cloud/project/{serviceName}/database/mysql
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new mysql cluster
                     * POST /cloud/project/{serviceName}/database/mysql
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a mysql cluster
                         * DELETE /cloud/project/{serviceName}/database/mysql/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get mysql cluster properties
                         * GET /cloud/project/{serviceName}/database/mysql/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing mysql cluster
                         * PUT /cloud/project/{serviceName}/database/mysql/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get mysql advanced configuration
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update mysql advanced configuration
                             * PUT /cloud/project/{serviceName}/database/mysql/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        backup: {
                            /**
                             * List backups of the mysql
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/backup
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(backupId: string): {
                                /**
                                 * Get mysql backups
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/backup/{backupId}
                                 */
                                $get(): Promise<cloud.project.database.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get mysql advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the mysql service
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        certificates: {
                            /**
                             * Retrieve the certificates of the mysql cluster
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/certificates
                             */
                            $get(): Promise<cloud.project.database.service.Certificates>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        currentQueries: {
                            /**
                             * Retrieve the current queries for the cluster
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/currentQueries
                             */
                            $get(params?: { limit?: number, offset?: number }): Promise<cloud.project.database.service.CurrentQueries>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            cancel: {
                                /**
                                 * Cancel the given current query of the cluster
                                 * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/currentQueries/cancel
                                 */
                                $post(params?: { pid?: number, terminate?: boolean }): Promise<cloud.project.database.service.currentqueries.query.CancelResponse>;
                            }
                        }
                        database: {
                            /**
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/database
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new database on the mysql cluster
                             * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/database
                             */
                            $post(params: { default_?: boolean, id?: string, name: string }): Promise<cloud.project.database.service.Database>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(databaseId: string): {
                                /**
                                 * Delete a mysql database
                                 * DELETE /cloud/project/{serviceName}/database/mysql/{clusterId}/database/{databaseId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get the database for the mysql cluster
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/database/{databaseId}
                                 */
                                $get(): Promise<cloud.project.database.service.Database>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        enableWrites: {
                            /**
                             * Enable temporary write permission on readonly lock mysql service
                             * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/enableWrites
                             */
                            $post(): Promise<cloud.project.database.TemporaryWriteDeadline>;
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/mysql/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List mysql ip restrictions
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the mysql
                             * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the mysql
                                 * DELETE /cloud/project/{serviceName}/database/mysql/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get mysql ip restrictions
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the mysql
                                 * PUT /cloud/project/{serviceName}/database/mysql/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent mysql log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the mysql cluster
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the mysql cluster
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the mysql cluster
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the mysql cluster
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the mysql
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get mysql nodes
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        queryStatistics: {
                            /**
                             * Retrieve the query statistics for the cluster
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/queryStatistics
                             */
                            $get(params?: { limit?: number, offset?: number }): Promise<cloud.project.database.mysql.QueryStatistics>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            reset: {
                                /**
                                 * Reset the query statistics of the cluster
                                 * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/queryStatistics/reset
                                 */
                                $post(): Promise<void>;
                            }
                        }
                        user: {
                            /**
                             * List users of the mysql
                             * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the mysql cluster
                             * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/user
                             */
                            $post(params?: { name?: string }): Promise<cloud.project.database.service.UserWithPassword>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete a mysql user
                                 * DELETE /cloud/project/{serviceName}/database/mysql/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get mysql users
                                 * GET /cloud/project/{serviceName}/database/mysql/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.service.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/mysql/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.service.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                opensearch: {
                    /**
                     * List all the opensearch of the project
                     * GET /cloud/project/{serviceName}/database/opensearch
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new opensearch cluster
                     * POST /cloud/project/{serviceName}/database/opensearch
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a opensearch cluster
                         * DELETE /cloud/project/{serviceName}/database/opensearch/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get opensearch cluster properties
                         * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.opensearch.Service>;
                        /**
                         * Update an existing opensearch cluster
                         * PUT /cloud/project/{serviceName}/database/opensearch/{clusterId}
                         */
                        $put(params?: { aclsEnabled?: boolean, backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.opensearch.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get opensearch advanced configuration
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update opensearch advanced configuration
                             * PUT /cloud/project/{serviceName}/database/opensearch/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        backup: {
                            /**
                             * List backups of the opensearch
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/backup
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(backupId: string): {
                                /**
                                 * Get opensearch backups
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/backup/{backupId}
                                 */
                                $get(): Promise<cloud.project.database.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get opensearch advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the opensearch service
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        index: {
                            /**
                             * List indexes of the opensearch
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/index
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(indexId: string): {
                                /**
                                 * Delete an opensearch index
                                 * DELETE /cloud/project/{serviceName}/database/opensearch/{clusterId}/index/{indexId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get opensearch index
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/index/{indexId}
                                 */
                                $get(): Promise<cloud.project.database.opensearch.Index>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/opensearch/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List opensearch ip restrictions
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the opensearch
                             * POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the opensearch
                                 * DELETE /cloud/project/{serviceName}/database/opensearch/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get opensearch ip restrictions
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the opensearch
                                 * PUT /cloud/project/{serviceName}/database/opensearch/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent opensearch log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the opensearch cluster
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the opensearch cluster
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the opensearch cluster
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the opensearch cluster
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the opensearch
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get opensearch nodes
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        pattern: {
                            /**
                             * List patterns of the opensearch
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/pattern
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new pattern on the opensearch cluster
                             * POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/pattern
                             */
                            $post(params: { id?: string, maxIndexCount?: number, pattern: string }): Promise<cloud.project.database.opensearch.Pattern>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(patternId: string): {
                                /**
                                 * Delete an opensearch pattern
                                 * DELETE /cloud/project/{serviceName}/database/opensearch/{clusterId}/pattern/{patternId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get opensearch patterns
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/pattern/{patternId}
                                 */
                                $get(): Promise<cloud.project.database.opensearch.Pattern>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        permissions: {
                            /**
                             * Retrieve the opensearch permissions values
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/permissions
                             */
                            $get(): Promise<cloud.project.database.opensearch.Permissions>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        user: {
                            /**
                             * List users of the opensearch
                             * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the opensearch cluster
                             * POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/user
                             */
                            $post(params: { acls?: cloud.project.database.opensearch.UserAcl[], name: string }): Promise<cloud.project.database.opensearch.UserWithPassword>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete a opensearch user
                                 * DELETE /cloud/project/{serviceName}/database/opensearch/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get opensearch users
                                 * GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.opensearch.User>;
                                /**
                                 * Update a user on the opensearch cluster
                                 * PUT /cloud/project/{serviceName}/database/opensearch/{clusterId}/user/{userId}
                                 */
                                $put(params?: { acls?: cloud.project.database.opensearch.UserAcl[], createdAt?: string, id?: string, status?: cloud.project.database.StatusEnum, username?: string }): Promise<cloud.project.database.opensearch.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.opensearch.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                postgresql: {
                    /**
                     * List all the postgresql of the project
                     * GET /cloud/project/{serviceName}/database/postgresql
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new postgresql cluster
                     * POST /cloud/project/{serviceName}/database/postgresql
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a postgresql cluster
                         * DELETE /cloud/project/{serviceName}/database/postgresql/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get postgresql cluster properties
                         * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing postgresql cluster
                         * PUT /cloud/project/{serviceName}/database/postgresql/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get postgresql advanced configuration
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update postgresql advanced configuration
                             * PUT /cloud/project/{serviceName}/database/postgresql/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        backup: {
                            /**
                             * List backups of the postgresql
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/backup
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(backupId: string): {
                                /**
                                 * Get postgresql backups
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/backup/{backupId}
                                 */
                                $get(): Promise<cloud.project.database.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get postgresql advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the postgresql service
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        certificates: {
                            /**
                             * Retrieve the certificates of the postgresql cluster
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/certificates
                             */
                            $get(): Promise<cloud.project.database.service.Certificates>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        connectionPool: {
                            /**
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/connectionPool
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new connectionPool on the postgresql cluster
                             * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/connectionPool
                             */
                            $post(params: { databaseId: string, mode: cloud.project.database.postgresql.connectionpool.ModeEnum, name: string, size: number, userId?: string }): Promise<cloud.project.database.postgresql.ConnectionPool>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(connectionPoolId: string): {
                                /**
                                 * Delete a postgresql connectionPool
                                 * DELETE /cloud/project/{serviceName}/database/postgresql/{clusterId}/connectionPool/{connectionPoolId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get the connectionPool for the postgresql cluster
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/connectionPool/{connectionPoolId}
                                 */
                                $get(): Promise<cloud.project.database.postgresql.ConnectionPool>;
                                /**
                                 * Update a connectionPool on the postgresql cluster
                                 * PUT /cloud/project/{serviceName}/database/postgresql/{clusterId}/connectionPool/{connectionPoolId}
                                 */
                                $put(params?: { databaseId?: string, id?: string, mode?: cloud.project.database.postgresql.connectionpool.ModeEnum, name?: string, port?: number, size?: number, sslMode?: cloud.project.database.postgresql.connectionpool.SslModeEnum, uri?: string, userId?: string }): Promise<cloud.project.database.postgresql.ConnectionPool>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        currentQueries: {
                            /**
                             * Retrieve the current queries for the cluster
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/currentQueries
                             */
                            $get(params?: { limit?: number, offset?: number }): Promise<cloud.project.database.service.CurrentQueries>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            cancel: {
                                /**
                                 * Cancel the given current query of the cluster
                                 * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/currentQueries/cancel
                                 */
                                $post(params?: { pid?: number, terminate?: boolean }): Promise<cloud.project.database.service.currentqueries.query.CancelResponse>;
                            }
                        }
                        database: {
                            /**
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/database
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new database on the postgresql cluster
                             * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/database
                             */
                            $post(params: { default_?: boolean, id?: string, name: string }): Promise<cloud.project.database.service.Database>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(databaseId: string): {
                                /**
                                 * Delete a postgresql database
                                 * DELETE /cloud/project/{serviceName}/database/postgresql/{clusterId}/database/{databaseId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get the database for the postgresql cluster
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/database/{databaseId}
                                 */
                                $get(): Promise<cloud.project.database.service.Database>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        enableWrites: {
                            /**
                             * Enable temporary write permission on readonly lock postgresql service
                             * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/enableWrites
                             */
                            $post(): Promise<cloud.project.database.TemporaryWriteDeadline>;
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/postgresql/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List postgresql ip restrictions
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the postgresql
                             * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the postgresql
                                 * DELETE /cloud/project/{serviceName}/database/postgresql/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get postgresql ip restrictions
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the postgresql
                                 * PUT /cloud/project/{serviceName}/database/postgresql/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent postgresql log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the postgresql cluster
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the postgresql cluster
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the postgresql cluster
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the postgresql cluster
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the postgresql
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get postgresql nodes
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        queryStatistics: {
                            /**
                             * Retrieve the query statistics for the cluster
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/queryStatistics
                             */
                            $get(params?: { limit?: number, offset?: number }): Promise<cloud.project.database.postgresql.QueryStatistics>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            reset: {
                                /**
                                 * Reset the query statistics of the cluster
                                 * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/queryStatistics/reset
                                 */
                                $post(): Promise<void>;
                            }
                        }
                        roles: {
                            /**
                             * Get postgresql roles
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/roles
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        user: {
                            /**
                             * List users of the postgresql
                             * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the postgresql cluster
                             * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/user
                             */
                            $post(params?: { name?: string, roles?: string[] }): Promise<cloud.project.database.service.UserWithPasswordAndRoles>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete a postgresql user
                                 * DELETE /cloud/project/{serviceName}/database/postgresql/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get postgresql users
                                 * GET /cloud/project/{serviceName}/database/postgresql/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.service.UserWithRoles>;
                                /**
                                 * Updates the user on the postgresql cluster
                                 * PUT /cloud/project/{serviceName}/database/postgresql/{clusterId}/user/{userId}
                                 */
                                $put(params?: { createdAt?: string, id?: string, roles?: string[], status?: cloud.project.database.StatusEnum, username?: string }): Promise<cloud.project.database.service.UserWithRoles>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/postgresql/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.service.UserWithPasswordAndRoles>;
                                    }
                                }
                            };
                        }
                    };
                }
                redis: {
                    /**
                     * List all the redis of the project
                     * GET /cloud/project/{serviceName}/database/redis
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Create a new redis cluster
                     * POST /cloud/project/{serviceName}/database/redis
                     */
                    $post(params?: { backup?: cloud.project.database.service.creation.BackupFork, backupTime?: string, backups?: cloud.project.database.service.Backup, description?: string, disk?: cloud.project.database.service.Disk, forkFrom?: cloud.project.database.service.creation.ForkFrom, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, nodesList?: cloud.project.database.service.NodeCreation[], nodesPattern?: cloud.project.database.service.NodePattern, plan?: string, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Delete a redis cluster
                         * DELETE /cloud/project/{serviceName}/database/redis/{clusterId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get redis cluster properties
                         * GET /cloud/project/{serviceName}/database/redis/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Update an existing redis cluster
                         * PUT /cloud/project/{serviceName}/database/redis/{clusterId}
                         */
                        $put(params?: { backupTime?: string, backups?: cloud.project.database.service.Backup, capabilities?: { [key in cloud.project.database.service.CapabilityEnum]: cloud.project.database.service.CapabilityActions }, category?: cloud.project.database.engine.CategoryEnum, createdAt?: string, description?: string, disk?: cloud.project.database.service.Disk, endpoints?: cloud.project.database.service.Endpoint[], engine?: cloud.project.database.EngineEnum, flavor?: string, id?: string, ipRestrictions?: cloud.project.database.service.IpRestriction[], maintenanceTime?: string, networkId?: string, networkType?: cloud.project.database.NetworkTypeEnum, nodeNumber?: number, nodes?: cloud.project.database.service.Node[], plan?: string, region?: string, status?: cloud.project.database.StatusEnum, storage?: cloud.project.database.service.Storage, subnetId?: string, version?: string }): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        advancedConfiguration: {
                            /**
                             * Get redis advanced configuration
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/advancedConfiguration
                             */
                            $get(): Promise<{ [key: string]: string }>;
                            /**
                             * Update redis advanced configuration
                             * PUT /cloud/project/{serviceName}/database/redis/{clusterId}/advancedConfiguration
                             */
                            $put(): Promise<{ [key: string]: string }>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        backup: {
                            /**
                             * List backups of the redis
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/backup
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(backupId: string): {
                                /**
                                 * Get redis backups
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/backup/{backupId}
                                 */
                                $get(): Promise<cloud.project.database.Backup>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        capabilities: {
                            advancedConfiguration: {
                                /**
                                 * Get redis advanced configuration fields
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/capabilities/advancedConfiguration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.advancedConfiguration.Property[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            categories: {
                                /**
                                 * Get available categories in the redis service
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/capabilities/categories
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            commands: {
                                /**
                                 * Get available commands in the redis service
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/capabilities/commands
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                            integration: {
                                /**
                                 * Get integration capabilities related to the redis service
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/capabilities/integration
                                 */
                                $get(): Promise<cloud.project.database.capabilities.Integration[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        }
                        integration: {
                            /**
                             * List integrations
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/integration
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new integration
                             * POST /cloud/project/{serviceName}/database/redis/{clusterId}/integration
                             */
                            $post(params: { destinationServiceId: string, id?: string, parameters?: { [key: string]: string }, sourceServiceId: string, status?: cloud.project.database.service.integration.StatusEnum, type?: cloud.project.database.service.integration.TypeEnum }): Promise<cloud.project.database.service.Integration>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(integrationId: string): {
                                /**
                                 * Delete an integration
                                 * DELETE /cloud/project/{serviceName}/database/redis/{clusterId}/integration/{integrationId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get an integration
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/integration/{integrationId}
                                 */
                                $get(): Promise<cloud.project.database.service.Integration>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        ipRestriction: {
                            /**
                             * List redis ip restrictions
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/ipRestriction
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Add ip restrictions to the redis
                             * POST /cloud/project/{serviceName}/database/redis/{clusterId}/ipRestriction
                             */
                            $post(params?: { description?: string, ip?: string }): Promise<cloud.project.database.IpRestriction>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(ipBlock: string): {
                                /**
                                 * Deletes the given IP from the restricted IPs of the redis
                                 * DELETE /cloud/project/{serviceName}/database/redis/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get redis ip restrictions
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $get(): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Changes the list of ip restrictions to the redis
                                 * PUT /cloud/project/{serviceName}/database/redis/{clusterId}/ipRestriction/{ipBlock}
                                 */
                                $put(params?: { description?: string, ip?: string, status?: cloud.project.database.StatusEnum }): Promise<cloud.project.database.IpRestriction>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        logs: {
                            /**
                             * Retrieve the most recent redis log messages (limited to 1000)
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/logs
                             */
                            $get(): Promise<cloud.project.database.service.LogEntry[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                        maintenance: {
                            /**
                             * List maintenances for the redis cluster
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/maintenance
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(maintenanceId: string): {
                                /**
                                 * Get the maintenance for the redis cluster
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/maintenance/{maintenanceId}
                                 */
                                $get(): Promise<cloud.project.database.service.Maintenance>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                apply: {
                                    /**
                                     * Apply the maintenance
                                     * POST /cloud/project/{serviceName}/database/redis/{clusterId}/maintenance/{maintenanceId}/apply
                                     */
                                    $post(): Promise<cloud.project.database.service.Maintenance>;
                                }
                            };
                        }
                        metric: {
                            /**
                             * List available metrics for the redis cluster
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/metric
                             */
                            $get(params?: { extended?: boolean }): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(metricName: string): {
                                /**
                                 * Get the metric values for the redis cluster
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/metric/{metricName}
                                 */
                                $get(params: { period: cloud.project.database.service.MetricPeriodEnum }): Promise<cloud.project.database.service.Metric>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        node: {
                            /**
                             * List nodes of the redis
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/node
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(nodeId: string): {
                                /**
                                 * Get redis nodes
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/node/{nodeId}
                                 */
                                $get(): Promise<cloud.project.database.service.Node>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        user: {
                            /**
                             * List users of the redis
                             * GET /cloud/project/{serviceName}/database/redis/{clusterId}/user
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Create a new user on the redis cluster
                             * POST /cloud/project/{serviceName}/database/redis/{clusterId}/user
                             */
                            $post(params: { categories?: string[], channels?: string[], commands?: string[], keys?: string[], name: string }): Promise<cloud.project.database.redis.UserWithPassword>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(userId: string): {
                                /**
                                 * Delete a redis user
                                 * DELETE /cloud/project/{serviceName}/database/redis/{clusterId}/user/{userId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get redis users
                                 * GET /cloud/project/{serviceName}/database/redis/{clusterId}/user/{userId}
                                 */
                                $get(): Promise<cloud.project.database.redis.User>;
                                /**
                                 * Update a user on the redis cluster
                                 * PUT /cloud/project/{serviceName}/database/redis/{clusterId}/user/{userId}
                                 */
                                $put(params?: { categories?: string[], channels?: string[], commands?: string[], createdAt?: string, id?: string, keys?: string[], status?: cloud.project.database.StatusEnum, username?: string }): Promise<cloud.project.database.redis.User>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                credentials: {
                                    reset: {
                                        /**
                                         * Resets the password of a user
                                         * POST /cloud/project/{serviceName}/database/redis/{clusterId}/user/{userId}/credentials/reset
                                         */
                                        $post(): Promise<cloud.project.database.redis.UserWithPassword>;
                                    }
                                }
                            };
                        }
                    };
                }
                service: {
                    /**
                     * List database services of the project
                     * GET /cloud/project/{serviceName}/database/service
                     */
                    $get(params?: { category?: cloud.project.database.engine.CategoryEnum }): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(clusterId: string): {
                        /**
                         * Get service cluster properties
                         * GET /cloud/project/{serviceName}/database/service/{clusterId}
                         */
                        $get(): Promise<cloud.project.database.Service>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    };
                }
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
                $cache(param?: ICacheOptions | CacheAction): void;
                $(flavorId: string): {
                    /**
                     * Get flavor
                     * GET /cloud/project/{serviceName}/flavor/{flavorId}
                     */
                    $get(): Promise<cloud.flavor.Flavor>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
                $(imageId: string): {
                    /**
                     * Get image
                     * GET /cloud/project/{serviceName}/image/{imageId}
                     */
                    $get(): Promise<cloud.image.Image>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                            $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                         * Shelve an instance
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
                         * Stop an instance
                         * POST /cloud/project/{serviceName}/instance/{instanceId}/stop
                         */
                        $post(): Promise<void>;
                    }
                    unshelve: {
                        /**
                         * Unshelve an instance
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
                $cache(param?: ICacheOptions | CacheAction): void;
                failover: {
                    /**
                     * Get failover ips
                     * GET /cloud/project/{serviceName}/ip/failover
                     */
                    $get(): Promise<cloud.ip.FailoverIp[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    $(id: string): {
                        /**
                         * Get failover ip
                         * GET /cloud/project/{serviceName}/ip/failover/{id}
                         */
                        $get(): Promise<cloud.ip.FailoverIp>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                $post(params: { customization?: cloud.ProjectKubeCustomization, kubeProxyMode?: cloud.kube.KubeProxyModeEnum, loadBalancersSubnetId?: string, name?: string, nodepool?: cloud.ProjectKubeCreationNodePool, nodesSubnetId?: string, privateNetworkConfiguration?: cloud.kube.PrivateNetworkConfiguration, privateNetworkId?: string, region: string, updatePolicy?: cloud.kube.UpdatePolicyEnum, version?: cloud.kube.VersionEnum }): Promise<cloud.kube.Cluster>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                regions: {
                    /**
                     * List Kubernetes available regions
                     * GET /cloud/project/{serviceName}/kube/regions
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                    $put(params?: { name?: string, updatePolicy?: cloud.kube.UpdatePolicyEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    auditLogs: {
                        /**
                         * Generate a temporary URL to retrieve audit logs
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/auditLogs
                         */
                        $post(): Promise<dbaas.logs.TemporaryLogsLink>;
                    }
                    customization: {
                        /**
                         * Get cluster customization
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/customization
                         */
                        $get(): Promise<cloud.ProjectKubeCustomization>;
                        /**
                         * Update cluster customization
                         * PUT /cloud/project/{serviceName}/kube/{kubeId}/customization
                         */
                        $put(params?: { apiServer?: cloud.ProjectKubeCustomizationAPIServer, kubeProxy?: cloud.ProjectKubeCustomizationKubeProxy }): Promise<cloud.kube.ResponseMessage>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                    log: {
                        url: {
                            /**
                             * Generate a temporary URL to retrieve logs
                             * POST /cloud/project/{serviceName}/kube/{kubeId}/log/url
                             */
                            $post(params: { kind: string }): Promise<dbaas.logs.TemporaryLogsLink>;
                        }
                    }
                    metrics: {
                        etcdUsage: {
                            /**
                             * List available metrics for this cluster
                             * GET /cloud/project/{serviceName}/kube/{kubeId}/metrics/etcdUsage
                             */
                            $get(): Promise<cloud.kube.EtcdUsage>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                    }
                    node: {
                        /**
                         * List your nodes
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/node
                         */
                        $get(): Promise<cloud.kube.Node[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(nodeId: string): {
                            /**
                             * Delete a specific node on your cluster
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
                            $cache(param?: ICacheOptions | CacheAction): void;
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
                        $post(params: { antiAffinity?: boolean, autoscale?: boolean, autoscaling?: cloud.ProjectKubeNodePoolAutoscalingParams, desiredNodes?: number, flavorName: string, maxNodes?: number, minNodes?: number, monthlyBilled?: boolean, name?: string, template?: cloud.kube.NodePoolTemplate }): Promise<cloud.kube.NodePool>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                             * Update your nodepool information
                             * PUT /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}
                             */
                            $put(params?: { autoscale?: boolean, autoscaling?: cloud.ProjectKubeNodePoolAutoscalingParams, desiredNodes?: number, maxNodes?: number, minNodes?: number, nodesToRemove?: string[], template?: cloud.kube.NodePoolTemplate }): Promise<void>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            nodes: {
                                /**
                                 * List all nodes contained in a nodepool
                                 * GET /cloud/project/{serviceName}/kube/{kubeId}/nodepool/{nodePoolId}/nodes
                                 */
                                $get(): Promise<cloud.kube.Node[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            }
                        };
                    }
                    openIdConnect: {
                        /**
                         * Remove OpenIdConnect integration from APIServer
                         * DELETE /cloud/project/{serviceName}/kube/{kubeId}/openIdConnect
                         */
                        $delete(): Promise<void>;
                        /**
                         * Get openIdConnect integration parameters
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/openIdConnect
                         */
                        $get(): Promise<cloud.kube.OpenIdConnect>;
                        /**
                         * Configure APIServer for OpenIdConnect
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/openIdConnect
                         */
                        $post(params: { caContent?: string, clientId: string, groupsClaim?: string[], groupsPrefix?: string, issuerUrl: string, requiredClaim?: string[], signingAlgorithms?: cloud.kube.OpenIdConnectSigningAlgorithmsEnum[], usernameClaim?: string, usernamePrefix?: string }): Promise<cloud.kube.OpenIdConnect>;
                        /**
                         * Update parameters and reconfigure APIServer
                         * PUT /cloud/project/{serviceName}/kube/{kubeId}/openIdConnect
                         */
                        $put(params?: { caContent?: string, clientId?: string, groupsClaim?: string[], groupsPrefix?: string, issuerUrl?: string, requiredClaim?: string[], signingAlgorithms?: cloud.kube.OpenIdConnectSigningAlgorithmsEnum[], usernameClaim?: string, usernamePrefix?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    privateNetworkConfiguration: {
                        /**
                         * Get private network configuration
                         * GET /cloud/project/{serviceName}/kube/{kubeId}/privateNetworkConfiguration
                         */
                        $get(): Promise<cloud.kube.PrivateNetworkConfiguration>;
                        /**
                         * Update private network configuration
                         * PUT /cloud/project/{serviceName}/kube/{kubeId}/privateNetworkConfiguration
                         */
                        $put(params?: { defaultVrackGateway?: string, privateNetworkRoutingAsDefault?: boolean }): Promise<cloud.kube.ResponseMessage>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    reset: {
                        /**
                         * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
                         * POST /cloud/project/{serviceName}/kube/{kubeId}/reset
                         */
                        $post(params?: { customization?: cloud.ProjectKubeCustomization, kubeProxyMode?: cloud.kube.KubeProxyModeEnum, loadBalancersSubnetId?: string, name?: string, nodesSubnetId?: string, privateNetworkConfiguration?: cloud.kube.PrivateNetworkConfiguration, privateNetworkId?: string, updatePolicy?: cloud.kube.UpdatePolicyEnum, version?: cloud.kube.VersionEnum, workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicyEnum }): Promise<void>;
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
                        $post(params?: { force?: boolean, strategy?: cloud.kube.UpdateStrategyEnum }): Promise<void>;
                    }
                    updateLoadBalancersSubnetId: {
                        /**
                         * Updates the load balancers subnet ID
                         * PUT /cloud/project/{serviceName}/kube/{kubeId}/updateLoadBalancersSubnetId
                         */
                        $put(params: { loadBalancersSubnetId: string }): Promise<void>;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
                    agreement: {
                        /**
                         * List required agreements to active this lab
                         * GET /cloud/project/{serviceName}/lab/{labId}/agreement
                         */
                        $get(): Promise<cloud.LabAgreements>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                            $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                            $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
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
                $cache(param?: ICacheOptions | CacheAction): void;
                $(operationId: string): {
                    /**
                     * Get information about one operation
                     * GET /cloud/project/{serviceName}/operation/{operationId}
                     */
                    $get(): Promise<cloud.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
                $(regionName: string): {
                    /**
                     * Get information about your region
                     * GET /cloud/project/{serviceName}/region/{regionName}
                     */
                    $get(): Promise<cloud.Region>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    floatingip: {
                        /**
                         * Get floating ips
                         * GET /cloud/project/{serviceName}/region/{regionName}/floatingip
                         */
                        $get(): Promise<cloud.project.FloatingIp[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(floatingIpId: string): {
                            /**
                             * Delete a floating ip
                             * DELETE /cloud/project/{serviceName}/region/{regionName}/floatingip/{floatingIpId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get a floating ip
                             * GET /cloud/project/{serviceName}/region/{regionName}/floatingip/{floatingIpId}
                             */
                            $get(): Promise<cloud.project.FloatingIp>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            detach: {
                                /**
                                 * Detach your floating ip
                                 * POST /cloud/project/{serviceName}/region/{regionName}/floatingip/{floatingIpId}/detach
                                 */
                                $post(): Promise<void>;
                            }
                        };
                    }
                    gateway: {
                        /**
                         * List gateways
                         * GET /cloud/project/{serviceName}/region/{regionName}/gateway
                         */
                        $get(params?: { subnetId?: string }): Promise<cloud.network.Gateway[]>;
                        /**
                         * Create new Gateway and new Private Network with new Subnet
                         * POST /cloud/project/{serviceName}/region/{regionName}/gateway
                         */
                        $post(params: { model: cloud.network.GatewayModelEnum, name: string, network: cloud.network.CreateNetworkForGatewaySummary }): Promise<cloud.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(id: string): {
                            /**
                             * Delete gateway
                             * DELETE /cloud/project/{serviceName}/region/{regionName}/gateway/{id}
                             */
                            $delete(): Promise<cloud.Operation>;
                            /**
                             * Get gateway
                             * GET /cloud/project/{serviceName}/region/{regionName}/gateway/{id}
                             */
                            $get(): Promise<cloud.network.Gateway>;
                            /**
                             * Update a gateway
                             * PUT /cloud/project/{serviceName}/region/{regionName}/gateway/{id}
                             */
                            $put(params: { model: cloud.network.GatewayModelEnum, name: string }): Promise<cloud.network.Gateway>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            expose: {
                                /**
                                 * Expose gateway to public network by adding a public port on it.
                                 * POST /cloud/project/{serviceName}/region/{regionName}/gateway/{id}/expose
                                 */
                                $post(): Promise<cloud.network.Gateway>;
                            }
                            interface: {
                                /**
                                 * List interfaces
                                 * GET /cloud/project/{serviceName}/region/{regionName}/gateway/{id}/interface
                                 */
                                $get(): Promise<cloud.network.gateway.Interface[]>;
                                /**
                                 * Create gateway interface
                                 * POST /cloud/project/{serviceName}/region/{regionName}/gateway/{id}/interface
                                 */
                                $post(params: { subnetId: string }): Promise<cloud.network.gateway.Interface>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                $(interfaceId: string): {
                                    /**
                                     * Delete gateway interface
                                     * DELETE /cloud/project/{serviceName}/region/{regionName}/gateway/{id}/interface/{interfaceId}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Get interface
                                     * GET /cloud/project/{serviceName}/region/{regionName}/gateway/{id}/interface/{interfaceId}
                                     */
                                    $get(): Promise<cloud.network.gateway.Interface>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                };
                            }
                        };
                    }
                    instance: {
                        $(instanceId: string | number): {
                            abortSnapshot: {
                                /**
                                 * Abort an instance snapshot creation
                                 * POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/abortSnapshot
                                 */
                                $post(): Promise<cloud.Operation>;
                            }
                            associateFloatingIp: {
                                /**
                                 * Associate an existing floating IP to an instance
                                 * POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/associateFloatingIp
                                 */
                                $post(params: { floatingIpId: string, gateway?: cloud.network.CreateGatewaySummary, ip: string }): Promise<cloud.Operation>;
                            }
                            floatingIp: {
                                /**
                                 * Create a floating IP and attach it to an instance
                                 * POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/floatingIp
                                 */
                                $post(params: { gateway?: cloud.network.CreateGatewaySummary, ip: string }): Promise<cloud.Operation>;
                            }
                        };
                    }
                    keymanager: {
                        certificate: {
                            /**
                             * List certificates
                             * GET /cloud/project/{serviceName}/region/{regionName}/keymanager/certificate
                             */
                            $get(): Promise<cloud.keymanager.Certificate[]>;
                            /**
                             * Create a new certificate
                             * POST /cloud/project/{serviceName}/region/{regionName}/keymanager/certificate
                             */
                            $post(params: { certificate: string, intermediates?: string, name: string, privateKey: string, privateKeyPassphrase?: string }): Promise<cloud.keymanager.Certificate>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(certificateId: string): {
                                /**
                                 * Delete a certificate
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/keymanager/certificate/{certificateId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get details about a certificate
                                 * GET /cloud/project/{serviceName}/region/{regionName}/keymanager/certificate/{certificateId}
                                 */
                                $get(): Promise<cloud.keymanager.Certificate>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        secret: {
                            /**
                             * List secrets
                             * GET /cloud/project/{serviceName}/region/{regionName}/keymanager/secret
                             */
                            $get(): Promise<cloud.keymanager.Secret[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(secretId: string): {
                                /**
                                 * Delete a secret
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/keymanager/secret/{secretId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get details about a secret
                                 * GET /cloud/project/{serviceName}/region/{regionName}/keymanager/secret/{secretId}
                                 */
                                $get(): Promise<cloud.keymanager.Secret>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                    }
                    loadbalancing: {
                        flavor: {
                            /**
                             * List flavors
                             * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/flavor
                             */
                            $get(): Promise<cloud.loadbalancing.Flavor[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(flavorId: string): {
                                /**
                                 * Get details about a load balancing flavor
                                 * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/flavor/{flavorId}
                                 */
                                $get(): Promise<cloud.loadbalancing.Flavor>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        healthMonitor: {
                            /**
                             * List health monitors
                             * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/healthMonitor
                             */
                            $get(params?: { poolId?: string }): Promise<cloud.loadbalancing.HealthMonitor[]>;
                            /**
                             * Create health monitor
                             * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/healthMonitor
                             */
                            $post(params: { delay: number, httpConfiguration?: cloud.loadbalancing.HealthMonitorHTTPConfiguration, id?: string, maxRetries: number, maxRetriesDown?: number, monitorType: cloud.loadbalancing.LoadBalancerHealthMonitorTypeEnum, name: string, operatingStatus?: cloud.loadbalancing.LoadBalancerOperatingStatusEnum, poolId: string, provisioningStatus?: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum, timeout: number }): Promise<cloud.loadbalancing.HealthMonitor>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(healthMonitorId: string): {
                                /**
                                 * Delete health monitor
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/healthMonitor/{healthMonitorId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get details about a loadbalancer health monitor
                                 * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/healthMonitor/{healthMonitorId}
                                 */
                                $get(): Promise<cloud.loadbalancing.HealthMonitor>;
                                /**
                                 * Update a health monitor
                                 * PUT /cloud/project/{serviceName}/region/{regionName}/loadbalancing/healthMonitor/{healthMonitorId}
                                 */
                                $put(params?: { delay?: number, httpConfiguration?: cloud.loadbalancing.HealthMonitorHTTPConfiguration, maxRetries?: number, maxRetriesDown?: number, name?: string, timeout?: number }): Promise<cloud.loadbalancing.HealthMonitor>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        l7Policy: {
                            /**
                             * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy
                             */
                            $get(params?: { listenerId?: string }): Promise<cloud.loadbalancing.L7Policy[]>;
                            /**
                             * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy
                             */
                            $post(params: { action: cloud.loadbalancing.L7PolicyActionEnum, description?: string, id?: string, listenerId: string, name?: string, operatingStatus?: cloud.loadbalancing.LoadBalancerOperatingStatusEnum, position?: number, provisioningStatus?: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum, redirectHttpCode?: cloud.loadbalancing.L7PolicyRedirectHTTPCodeEnum, redirectPoolId?: string, redirectPrefix?: string, redirectUrl?: string }): Promise<cloud.loadbalancing.L7Policy>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(l7PolicyId: string): {
                                /**
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}
                                 */
                                $get(): Promise<cloud.loadbalancing.L7Policy>;
                                /**
                                 * PUT /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}
                                 */
                                $put(params: { action: cloud.loadbalancing.L7PolicyActionEnum, description?: string, listenerId?: string, name?: string, position?: number, redirectHttpCode?: number, redirectPoolId?: string, redirectPrefix?: string, redirectUrl?: string }): Promise<cloud.loadbalancing.L7Policy>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                l7Rule: {
                                    /**
                                     * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}/l7Rule
                                     */
                                    $get(): Promise<cloud.loadbalancing.L7Rule[]>;
                                    /**
                                     * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}/l7Rule
                                     */
                                    $post(params: { compareType: cloud.loadbalancing.L7RuleCompareTypeEnum, id?: string, invert?: boolean, key?: string, operatingStatus?: cloud.loadbalancing.LoadBalancerOperatingStatusEnum, provisioningStatus?: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum, ruleType: cloud.loadbalancing.L7RuleTypeEnum, value: string }): Promise<cloud.loadbalancing.L7Rule>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                    $(l7RuleId: string): {
                                        /**
                                         * DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}/l7Rule/{l7RuleId}
                                         */
                                        $delete(): Promise<void>;
                                        /**
                                         * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}/l7Rule/{l7RuleId}
                                         */
                                        $get(): Promise<cloud.loadbalancing.L7Rule>;
                                        /**
                                         * PUT /cloud/project/{serviceName}/region/{regionName}/loadbalancing/l7Policy/{l7PolicyId}/l7Rule/{l7RuleId}
                                         */
                                        $put(params: { compareType: cloud.loadbalancing.L7RuleCompareTypeEnum, id?: string, invert?: boolean, key?: string, operatingStatus?: cloud.loadbalancing.LoadBalancerOperatingStatusEnum, provisioningStatus?: cloud.loadbalancing.LoadBalancerProvisioningStatusEnum, ruleType: cloud.loadbalancing.L7RuleTypeEnum, value: string }): Promise<cloud.loadbalancing.L7Rule>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): void;
                                    };
                                }
                            };
                        }
                        listener: {
                            /**
                             * List your loadbalancer listeners
                             * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/listener
                             */
                            $get(params?: { loadbalancerId?: string }): Promise<cloud.loadbalancing.Listener[]>;
                            /**
                             * Create a loadbalancer listener
                             * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/listener
                             */
                            $post(params: { allowedCidrs?: string[], certificateId?: string, defaultPoolId?: string, description?: string, loadbalancerId: string, name: string, port: number, protocol: cloud.loadbalancing.ListenerProtocolEnum, timeoutClientData?: number, timeoutMemberData?: number, tlsVersions?: cloud.loadbalancing.ListenerTlsVersionEnum[] }): Promise<cloud.loadbalancing.Listener>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(listenerId: string): {
                                /**
                                 * Delete loadbalancer listener
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/listener/{listenerId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get details about a loadbalancer listener
                                 * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/listener/{listenerId}
                                 */
                                $get(): Promise<cloud.loadbalancing.Listener>;
                                /**
                                 * Edit a loadbalancer listener
                                 * PUT /cloud/project/{serviceName}/region/{regionName}/loadbalancing/listener/{listenerId}
                                 */
                                $put(params?: { allowedCidrs?: string[], certificateId?: string, defaultPoolId?: string, description?: string, name?: string }): Promise<cloud.loadbalancing.Listener>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                            };
                        }
                        loadbalancer: {
                            /**
                             * List your load balancers
                             * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer
                             */
                            $get(): Promise<cloud.loadbalancing.LoadBalancer[]>;
                            /**
                             * Create a loadbalancer
                             * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer
                             */
                            $post(params: { flavorId: string, listeners?: cloud.loadbalancing.loadbalancer.ListenerCreate[], name?: string, network: cloud.loadbalancing.loadbalancer.CreateInput.Network }): Promise<cloud.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(loadBalancerId: string): {
                                /**
                                 * Delete loadbalancer
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get details about a load balancer
                                 * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}
                                 */
                                $get(): Promise<cloud.loadbalancing.LoadBalancer>;
                                /**
                                 * Edit a loadbalancer
                                 * PUT /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}
                                 */
                                $put(params?: { description?: string, name?: string }): Promise<cloud.loadbalancing.LoadBalancer>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                associateFloatingIp: {
                                    /**
                                     * Associate an existing floating IP to a loadbalancer
                                     * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/associateFloatingIp
                                     */
                                    $post(params: { floatingIpId: string, gateway?: cloud.network.CreateGatewaySummary, ip: string }): Promise<cloud.Operation>;
                                }
                                floatingIp: {
                                    /**
                                     * Create a floating IP and attach it to a loadbalancer
                                     * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/floatingIp
                                     */
                                    $post(params: { gateway?: cloud.network.CreateGatewaySummary, ip: string }): Promise<cloud.Operation>;
                                }
                                stats: {
                                    /**
                                     * Get loadbalancer statistics
                                     * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/stats
                                     */
                                    $get(): Promise<cloud.loadbalancing.loadbalancer.Stats>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                }
                            };
                        }
                        pool: {
                            /**
                             * List your loadbalancer pools
                             * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool
                             */
                            $get(params?: { loadbalancerId?: string }): Promise<cloud.loadbalancing.Pool[]>;
                            /**
                             * Create a loadbalancer pool
                             * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool
                             */
                            $post(params: { algorithm: cloud.loadbalancing.PoolAlgorithmEnum, listenerId?: string, loadbalancerId?: string, name?: string, protocol: cloud.loadbalancing.PoolProtocolEnum, sessionPersistence?: cloud.loadbalancing.PoolSessionPersistence }): Promise<cloud.loadbalancing.Pool>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            $(poolId: string): {
                                /**
                                 * Delete a loadbalancer pool
                                 * DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}
                                 */
                                $delete(): Promise<void>;
                                /**
                                 * Get details about a loadbalancer pool
                                 * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}
                                 */
                                $get(): Promise<cloud.loadbalancing.Pool>;
                                /**
                                 * Update a loadbalancer pool
                                 * PUT /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}
                                 */
                                $put(params?: { algorithm?: cloud.loadbalancing.PoolAlgorithmEnum, name?: string, sessionPersistence?: cloud.loadbalancing.PoolSessionPersistence }): Promise<cloud.loadbalancing.Pool>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                member: {
                                    /**
                                     * List your pool members
                                     * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}/member
                                     */
                                    $get(): Promise<cloud.loadbalancing.pool.Member[]>;
                                    /**
                                     * Create pool members
                                     * POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}/member
                                     */
                                    $post(params: { members: cloud.loadbalancing.pool.Member[] }): Promise<cloud.loadbalancing.pool.Member[]>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                    $(memberId: string): {
                                        /**
                                         * Delete a pool member
                                         * DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}/member/{memberId}
                                         */
                                        $delete(): Promise<void>;
                                        /**
                                         * Get details about a pool member
                                         * GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}/member/{memberId}
                                         */
                                        $get(): Promise<cloud.loadbalancing.pool.Member>;
                                        /**
                                         * Update a pool member
                                         * PUT /cloud/project/{serviceName}/region/{regionName}/loadbalancing/pool/{poolId}/member/{memberId}
                                         */
                                        $put(params?: { name?: string, weight?: number }): Promise<cloud.loadbalancing.pool.Member>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): void;
                                    };
                                }
                            };
                        }
                    }
                    network: {
                        /**
                         * List networks
                         * GET /cloud/project/{serviceName}/region/{regionName}/network
                         */
                        $get(): Promise<cloud.project.Network[]>;
                        /**
                         * Create a network with a gateway
                         * POST /cloud/project/{serviceName}/region/{regionName}/network
                         */
                        $post(params: { gateway?: cloud.network.CreateGatewaySummary, name: string, subnet: cloud.network.CreateSubnetSummary, vlanId?: number }): Promise<cloud.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(networkId: string): {
                            /**
                             * Delete network
                             * DELETE /cloud/project/{serviceName}/region/{regionName}/network/{networkId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get network
                             * GET /cloud/project/{serviceName}/region/{regionName}/network/{networkId}
                             */
                            $get(): Promise<cloud.project.Network>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            subnet: {
                                /**
                                 * List subnets
                                 * GET /cloud/project/{serviceName}/region/{regionName}/network/{networkId}/subnet
                                 */
                                $get(): Promise<cloud.project.Subnet[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): void;
                                $(subnetId: string): {
                                    /**
                                     * Delete subnet
                                     * DELETE /cloud/project/{serviceName}/region/{regionName}/network/{networkId}/subnet/{subnetId}
                                     */
                                    $delete(): Promise<void>;
                                    /**
                                     * Get subnet
                                     * GET /cloud/project/{serviceName}/region/{regionName}/network/{networkId}/subnet/{subnetId}
                                     */
                                    $get(): Promise<cloud.project.Subnet>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): void;
                                    gateway: {
                                        /**
                                         * Create Gateway for existing subnet
                                         * POST /cloud/project/{serviceName}/region/{regionName}/network/{networkId}/subnet/{subnetId}/gateway
                                         */
                                        $post(params: { model: cloud.network.GatewayModelEnum, name: string }): Promise<cloud.Operation>;
                                    }
                                };
                            }
                        };
                    }
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
                        $cache(param?: ICacheOptions | CacheAction): void;
                        allowed: {
                            /**
                             * Get allowed quotas on region
                             * GET /cloud/project/{serviceName}/region/{regionName}/quota/allowed
                             */
                            $get(): Promise<cloud.quota.AllowedQuota[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
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
                            $cache(param?: ICacheOptions | CacheAction): void;
                        }
                    }
                    storage: {
                        /**
                         * Get S3 storage containers
                         * GET /cloud/project/{serviceName}/region/{regionName}/storage
                         */
                        $get(): Promise<cloud.StorageContainer[]>;
                        /**
                         * Create S3 storage container
                         * POST /cloud/project/{serviceName}/region/{regionName}/storage
                         */
                        $post(params: { encryption?: cloud.StorageEncryptionObject, name: string, ownerId?: number, versioning?: cloud.StorageVersioningObject }): Promise<cloud.StorageContainer>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(name: string): {
                            /**
                             * Delete S3 storage container
                             * DELETE /cloud/project/{serviceName}/region/{regionName}/storage/{name}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get S3 storage container
                             * GET /cloud/project/{serviceName}/region/{regionName}/storage/{name}
                             */
                            $get(params?: { limit?: number, marker?: string, prefix?: string }): Promise<cloud.StorageContainer>;
                            /**
                             * Update S3 storage container
                             * PUT /cloud/project/{serviceName}/region/{regionName}/storage/{name}
                             */
                            $put(params?: { createdAt?: string, encryption?: cloud.StorageEncryptionObject, name?: string, objects?: cloud.StorageObject[], objectsCount?: number, objectsSize?: number, ownerId?: number, region?: string, versioning?: cloud.StorageVersioningObject, virtualHost?: string }): Promise<cloud.StorageContainer>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            object: {
                                $(objectKey: string): {
                                    /**
                                     * Delete S3 storage container object
                                     * DELETE /cloud/project/{serviceName}/region/{regionName}/storage/{name}/object/{objectKey}
                                     */
                                    $delete(): Promise<void>;
                                };
                            }
                            policy: {
                                $(userId: string): {
                                    /**
                                     * Add S3 storage container policy
                                     * POST /cloud/project/{serviceName}/region/{regionName}/storage/{name}/policy/{userId}
                                     */
                                    $post(params: { objectKey?: string, roleName: cloud.storage.PolicyRoleEnum }): Promise<void>;
                                };
                            }
                            presign: {
                                /**
                                 * Generate S3 presigned URLs to download or upload objects
                                 * POST /cloud/project/{serviceName}/region/{regionName}/storage/{name}/presign
                                 */
                                $post(params?: { expire?: number, method?: cloud.storage.PresignedURLMethodEnum, object?: string, storageClass?: cloud.storage.StorageClassEnum }): Promise<cloud.storage.PresignedURL>;
                            }
                        };
                    }
                    volumeBackup: {
                        /**
                         * List volume backups
                         * GET /cloud/project/{serviceName}/region/{regionName}/volumeBackup
                         */
                        $get(): Promise<cloud.volumeBackup.VolumeBackup[]>;
                        /**
                         * Create a volume backup
                         * POST /cloud/project/{serviceName}/region/{regionName}/volumeBackup
                         */
                        $post(params: { name?: string, volumeId: string }): Promise<cloud.volumeBackup.VolumeBackup>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                        $(volumeBackupId: string): {
                            /**
                             * Delete volume backup
                             * DELETE /cloud/project/{serviceName}/region/{regionName}/volumeBackup/{volumeBackupId}
                             */
                            $delete(): Promise<void>;
                            /**
                             * Get volume backup
                             * GET /cloud/project/{serviceName}/region/{regionName}/volumeBackup/{volumeBackupId}
                             */
                            $get(): Promise<cloud.volumeBackup.VolumeBackup>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            restore: {
                                /**
                                 * Restore a volume backup on a volume
                                 * POST /cloud/project/{serviceName}/region/{regionName}/volumeBackup/{volumeBackupId}/restore
                                 */
                                $post(params: { volumeId: string }): Promise<cloud.volumeBackup.VolumeBackup>;
                            }
                            volume: {
                                /**
                                 * Create a volume from a volume backup
                                 * POST /cloud/project/{serviceName}/region/{regionName}/volumeBackup/{volumeBackupId}/volume
                                 */
                                $post(params?: { name?: string }): Promise<cloud.volume.Volume>;
                            }
                        };
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
                            $cache(param?: ICacheOptions | CacheAction): void;
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
                                $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /cloud/project/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /cloud/project/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
                $(stackId: string): {
                    /**
                     * Get stack
                     * GET /cloud/project/{serviceName}/stack/{stackId}
                     */
                    $get(): Promise<cloud.stack.Stack>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            storage: {
                /**
                 * Get SWIFT storage containers
                 * GET /cloud/project/{serviceName}/storage
                 */
                $get(params?: { includeType?: boolean }): Promise<cloud.storage.Container[]>;
                /**
                 * Create SWIFT container
                 * POST /cloud/project/{serviceName}/storage
                 */
                $post(params: { archive: boolean, containerName: string, region: string }): Promise<cloud.storage.Container>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                access: {
                    /**
                     * Access to SWIFT storage API
                     * POST /cloud/project/{serviceName}/storage/access
                     */
                    $post(): Promise<cloud.storage.ContainerAccess>;
                }
                quota: {
                    /**
                     * List storage quotas
                     * GET /cloud/project/{serviceName}/storage/quota
                     */
                    $get(): Promise<cloud.storage.Quota>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                }
                $(containerId: string): {
                    /**
                     * Delete SWIFT container
                     * DELETE /cloud/project/{serviceName}/storage/{containerId}
                     */
                    $delete(params?: { recursive?: boolean }): Promise<void>;
                    /**
                     * Get SWIFT storage container
                     * GET /cloud/project/{serviceName}/storage/{containerId}
                     */
                    $get(params?: { noObjects?: boolean, prefix?: string }): Promise<cloud.storage.ContainerDetail>;
                    /**
                     * Update SWIFT storage container
                     * PUT /cloud/project/{serviceName}/storage/{containerId}
                     */
                    $put(params?: { containerType?: cloud.storage.TypeEnum }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                    cors: {
                        /**
                         * Delete CORS support on SWIFT container
                         * DELETE /cloud/project/{serviceName}/storage/{containerId}/cors
                         */
                        $delete(params: { origin: string }): Promise<void>;
                        /**
                         * Add CORS support on SWIFT container
                         * POST /cloud/project/{serviceName}/storage/{containerId}/cors
                         */
                        $post(params: { origin: string }): Promise<void>;
                    }
                    publicUrl: {
                        /**
                         * Get a public temporary URL to access one of your SWIFT object
                         * POST /cloud/project/{serviceName}/storage/{containerId}/publicUrl
                         */
                        $post(params: { expirationDate: string, objectName: string }): Promise<cloud.storage.ContainerObjectTempURL>;
                    }
                    static: {
                        /**
                         * Deploy your SWIFT container files as a static web site
                         * POST /cloud/project/{serviceName}/storage/{containerId}/static
                         */
                        $post(): Promise<void>;
                    }
                    user: {
                        /**
                         * Create openstack user with only access to this SWIFT container
                         * POST /cloud/project/{serviceName}/storage/{containerId}/user
                         */
                        $post(params: { description?: string, right: cloud.storage.RightEnum }): Promise<cloud.user.UserDetail>;
                    }
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
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
                $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
                    configuration: {
                        /**
                         * Get your client configuration
                         * GET /cloud/project/{serviceName}/user/{userId}/configuration
                         */
                        $get(params?: { region?: string }): Promise<cloud.user.Configuration>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    openrc: {
                        /**
                         * Get RC file of OpenStack
                         * GET /cloud/project/{serviceName}/user/{userId}/openrc
                         */
                        $get(params: { region: string, version?: cloud.user.OpenrcVersionEnum }): Promise<cloud.user.Openrc>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    policy: {
                        /**
                         * Export user storage policy
                         * GET /cloud/project/{serviceName}/user/{userId}/policy
                         */
                        $get(): Promise<cloud.storage.PolicyRaw>;
                        /**
                         * Import user storage policy
                         * POST /cloud/project/{serviceName}/user/{userId}/policy
                         */
                        $post(params?: { policy?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
                    }
                    rclone: {
                        /**
                         * Get rclone configuration file
                         * GET /cloud/project/{serviceName}/user/{userId}/rclone
                         */
                        $get(params: { region: string, service?: cloud.user.RCloneServiceEnum }): Promise<cloud.user.Rclone>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                            $cache(param?: ICacheOptions | CacheAction): void;
                        };
                    }
                    s3Credentials: {
                        /**
                         * List your S3 credentials
                         * GET /cloud/project/{serviceName}/user/{userId}/s3Credentials
                         */
                        $get(): Promise<cloud.user.S3Credentials[]>;
                        /**
                         * Create a new S3 credentials for an user
                         * POST /cloud/project/{serviceName}/user/{userId}/s3Credentials
                         */
                        $post(): Promise<cloud.user.S3CredentialsWithSecret>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                            $get(): Promise<cloud.user.S3Credentials>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): void;
                            secret: {
                                /**
                                 * Display secret from a S3 credential
                                 * POST /cloud/project/{serviceName}/user/{userId}/s3Credentials/{access}/secret
                                 */
                                $post(): Promise<cloud.user.S3CredentialsSecretOnly>;
                            }
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
                $cache(param?: ICacheOptions | CacheAction): void;
                snapshot: {
                    /**
                     * Get volume snapshots
                     * GET /cloud/project/{serviceName}/volume/snapshot
                     */
                    $get(params?: { region?: string }): Promise<cloud.volume.Snapshot[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                        $cache(param?: ICacheOptions | CacheAction): void;
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
                    $cache(param?: ICacheOptions | CacheAction): void;
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
                $cache(param?: ICacheOptions | CacheAction): void;
            }
        };
    }
}

export declare function proxyCloud(ovhEngine: OvhRequestable): Cloud;
export default proxyCloud;
