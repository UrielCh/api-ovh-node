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
        continentCode: cloud.RegionContinent;
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
        name: string;
        status: cloud.ServiceStatus;
    }
    /**
     * An execution of the backup workflow
     * interface fullName: cloud.Execution.Execution
     */
    export interface Execution {
        executedAt: string;
        state: cloud.ExecutionState;
        stateInfo: string;
    }
    /**
     * Enum values for State
     * type fullname: cloud.ExecutionState
     */
    export type ExecutionState = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
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
        status: cloud.LabStatus;
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
        status: cloud.OperationStatus;
    }
    /**
     * Enum values for Status
     * type fullname: cloud.OperationStatus
     */
    export type OperationStatus = "created" | "in-progress" | "completed" | "in-error" | "unknown"
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
        status: cloud.project.ProjectStatus;
        unleash: boolean;
    }
    /**
     * Details about your region
     * interface fullName: cloud.Region.Region
     */
    export interface Region {
        continentCode: cloud.RegionContinent;
        datacenterLocation: string;
        ipCountries: cloud.IpCountryEnum[];
        name: string;
        services: cloud.Component[];
        status: cloud.RegionStatus;
    }
    /**
     * Enum values for ContinentCode
     * type fullname: cloud.RegionContinent
     */
    export type RegionContinent = "EU" | "NA" | "US" | "ASIA"
    /**
     * Enum values for Status
     * type fullname: cloud.RegionStatus
     */
    export type RegionStatus = "UP" | "DOWN" | "MAINTENANCE"
    /**
     * Enum values for Status
     * type fullname: cloud.ServiceStatus
     */
    export type ServiceStatus = "UP" | "DOWN"
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
         * Flavor
         * interface fullName: cloud.flavor.Flavor.Flavor
         */
        export interface Flavor {
            available: boolean;
            capabilities: cloud.capabilities.Capability[];
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
        export type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING"
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
         * MetricsType
         * type fullname: cloud.instance.MetricsType
         */
        export type MetricsType = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
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
    export namespace project {
        /**
         * Possible values for project status
         * type fullname: cloud.project.ProjectStatus
         */
        export type ProjectStatus = "creating" | "deleted" | "deleting" | "ok" | "suspended"
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
            $put(params?: { access?: cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: cloud.project.ProjectStatus, unleash?: boolean }): Promise<void>;
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
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                 * Get instances
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
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $get(params: { period: cloud.instance.MetricsPeriod, type: cloud.instance.MetricsType }): Promise<cloud.instance.InstanceMetrics>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    };
                }
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
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                    token: {
                        /**
                         * Get token for user
                         * POST /cloud/project/{serviceName}/user/{userId}/token
                         */
                        $post(params: { password: string }): Promise<cloud.authentication.Token>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
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
