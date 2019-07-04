import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace cloud {
    //cloud.AccessTypeEnum
    export type AccessTypeEnum = "full" | "restricted"
    //cloud.Acl
    // fullName: cloud.Acl.Acl
    export interface Acl {
        accountId?: string;
        type?: OVH.cloud.AclTypeEnum;
    }
    //cloud.AclTypeEnum
    export type AclTypeEnum = "readOnly" | "readWrite"
    //cloud.Alerting
    // fullName: cloud.Alerting.Alerting
    export interface Alerting {
        creationDate?: string;
        delay?: OVH.cloud.AlertingDelayEnum;
        email?: string;
        formattedMonthlyThreshold?: OVH.order.Price;
        id?: string;
        monthlyThreshold?: number;
    }
    //cloud.AlertingAlert
    // fullName: cloud.AlertingAlert.AlertingAlert
    export interface AlertingAlert {
        alertDate?: string;
        alertId?: number;
        emails?: string[];
    }
    //cloud.AlertingDelayEnum
    export type AlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400
    //cloud.ArchiveStoragePrice
    // fullName: cloud.ArchiveStoragePrice.ArchiveStoragePrice
    export interface ArchiveStoragePrice {
        monthlyPrice?: OVH.order.Price;
        region?: string;
    }
    //cloud.AvailableRegion
    // fullName: cloud.AvailableRegion.AvailableRegion
    export interface AvailableRegion {
        continentCode?: OVH.cloud.RegionContinent;
        datacenterLocation?: string;
        name?: string;
    }
    //cloud.Backup
    // fullName: cloud.Backup.Backup
    export interface Backup {
        backupName?: string;
        createdAt?: string;
        cron?: string;
        executions?: OVH.cloud.Execution[];
        id?: string;
        instanceId?: string;
        name?: string;
    }
    //cloud.BandwidthStoragePrice
    // fullName: cloud.BandwidthStoragePrice.BandwidthStoragePrice
    export interface BandwidthStoragePrice {
        price?: OVH.order.Price;
        region?: string;
    }
    //cloud.Component
    // fullName: cloud.Component.Component
    export interface Component {
        name?: string;
        status?: OVH.cloud.ServiceStatus;
    }
    //cloud.Credit
    // fullName: cloud.Credit.Credit
    export interface Credit {
        available_credit?: OVH.order.Price;
        bill?: string;
        description?: string;
        id?: number;
        products?: string[];
        total_credit?: OVH.order.Price;
        used_credit?: OVH.order.Price;
        validity?: OVH.cloud.common.VoucherValidity;
        voucher?: string;
    }
    //cloud.Execution
    // fullName: cloud.Execution.Execution
    export interface Execution {
        executedAt?: string;
        state?: OVH.cloud.ExecutionState;
        stateInfo?: string;
    }
    //cloud.ExecutionState
    export type ExecutionState = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED"
    //cloud.FlavorPrice
    // fullName: cloud.FlavorPrice.FlavorPrice
    export interface FlavorPrice {
        flavorId?: string;
        flavorName?: string;
        monthlyPrice?: OVH.order.Price;
        price?: OVH.order.Price;
        region?: string;
    }
    //cloud.IpCountryEnum
    export type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
    //cloud.Operation
    // fullName: cloud.Operation.Operation
    export interface Operation {
        action?: string;
        completedAt?: string;
        createdAt?: string;
        id?: string;
        progress?: number;
        regions?: string[];
        startedAt?: string;
        status?: OVH.cloud.OperationStatus;
    }
    //cloud.OperationStatus
    export type OperationStatus = "created" | "in-progress" | "completed" | "in-error" | "unknown"
    //cloud.Price
    // fullName: cloud.Price.Price
    export interface Price {
        archive?: OVH.cloud.ArchiveStoragePrice[];
        bandwidthArchiveIn?: OVH.cloud.BandwidthStoragePrice[];
        bandwidthArchiveOut?: OVH.cloud.BandwidthStoragePrice[];
        bandwidthStorage?: OVH.cloud.BandwidthStoragePrice[];
        instances?: OVH.cloud.FlavorPrice[];
        projectCreation?: OVH.order.Price;
        snapshots?: OVH.cloud.SnapshotPrice[];
        storage?: OVH.cloud.StoragePrice[];
        volumes?: OVH.cloud.VolumePrice[];
    }
    //cloud.Project
    // fullName: cloud.Project.Project
    export interface Project {
        access?: OVH.cloud.AccessTypeEnum;
        creationDate?: string;
        description?: string;
        expiration?: string;
        orderId?: number;
        planCode?: string;
        project_id?: string;
        status?: OVH.cloud.project.ProjectStatus;
        unleash?: boolean;
    }
    //cloud.Region
    // fullName: cloud.Region.Region
    export interface Region {
        continentCode?: OVH.cloud.RegionContinent;
        datacenterLocation?: string;
        ipCountries?: OVH.cloud.IpCountryEnum[];
        name?: string;
        services?: OVH.cloud.Component[];
        status?: OVH.cloud.RegionStatus;
    }
    //cloud.RegionContinent
    export type RegionContinent = "EU" | "NA" | "US" | "ASIA"
    //cloud.RegionStatus
    export type RegionStatus = "UP" | "DOWN" | "MAINTENANCE"
    //cloud.ServiceStatus
    export type ServiceStatus = "UP" | "DOWN"
    //cloud.SnapshotPrice
    // fullName: cloud.SnapshotPrice.SnapshotPrice
    export interface SnapshotPrice {
        monthlyPrice?: OVH.order.Price;
        price?: OVH.order.Price;
        region?: string;
    }
    //cloud.StoragePrice
    // fullName: cloud.StoragePrice.StoragePrice
    export interface StoragePrice {
        monthlyPrice?: OVH.order.Price;
        price?: OVH.order.Price;
        region?: string;
    }
    //cloud.VolumePrice
    // fullName: cloud.VolumePrice.VolumePrice
    export interface VolumePrice {
        monthlyPrice?: OVH.order.Price;
        price?: OVH.order.Price;
        region?: string;
        volumeName?: string;
    }
    //cloud.Vrack
    // fullName: cloud.Vrack.Vrack
    export interface Vrack {
        description?: string;
        id?: string;
        name?: string;
    }
    export namespace authentication {
        //cloud.authentication.Catalog
        // fullName: cloud.authentication.Catalog.Catalog
        export interface Catalog {
            endpoints?: OVH.cloud.authentication.Endpoint[];
            id?: string;
            type?: string;
        }
        //cloud.authentication.Domain
        // fullName: cloud.authentication.Domain.Domain
        export interface Domain {
            name?: string;
        }
        //cloud.authentication.Endpoint
        // fullName: cloud.authentication.Endpoint.Endpoint
        export interface Endpoint {
            id?: string;
            interface?: string;
            legacy_endpoint_id?: string;
            region_id?: string;
            service_id?: string;
            url?: string;
        }
        //cloud.authentication.OpenstackToken
        // fullName: cloud.authentication.OpenstackToken.OpenstackToken
        export interface OpenstackToken {
            catalog?: OVH.cloud.authentication.Catalog[];
            expires_at?: string;
            issued_at?: string;
            methods?: string[];
            project?: OVH.cloud.authentication.TokenProject;
            roles?: OVH.cloud.authentication.Role[];
            user?: OVH.cloud.authentication.UserToken;
        }
        //cloud.authentication.Role
        // fullName: cloud.authentication.Role.Role
        export interface Role {
            id?: string;
            name?: string;
        }
        //cloud.authentication.Token
        // fullName: cloud.authentication.Token.Token
        export interface Token {
            'X-Auth-Token'?: string;
            token?: OVH.cloud.authentication.OpenstackToken;
        }
        //cloud.authentication.TokenProject
        // fullName: cloud.authentication.TokenProject.TokenProject
        export interface TokenProject {
            domain?: OVH.cloud.authentication.Domain;
            id?: string;
            name?: string;
        }
        //cloud.authentication.UserToken
        // fullName: cloud.authentication.UserToken.UserToken
        export interface UserToken {
            domain?: OVH.cloud.authentication.Domain;
            id?: string;
            name?: string;
        }
    }
    export namespace billingView {
        //cloud.billingView.BandwidthInstance
        // fullName: cloud.billingView.BandwidthInstance.BandwidthInstance
        export interface BandwidthInstance {
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
        }
        //cloud.billingView.BandwidthStorage
        // fullName: cloud.billingView.BandwidthStorage.BandwidthStorage
        export interface BandwidthStorage {
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
        }
        //cloud.billingView.HourlyInstance
        // fullName: cloud.billingView.HourlyInstance.HourlyInstance
        export interface HourlyInstance {
            details?: OVH.cloud.billingView.HourlyInstanceDetail[];
            quantity?: OVH.cloud.billingView.Quantity;
            reference?: string;
            region?: string;
            totalPrice?: number;
        }
        //cloud.billingView.HourlyInstanceBandwidth
        // fullName: cloud.billingView.HourlyInstanceBandwidth.HourlyInstanceBandwidth
        export interface HourlyInstanceBandwidth {
            incomingBandwidth?: OVH.cloud.billingView.BandwidthInstance;
            outgoingBandwidth?: OVH.cloud.billingView.BandwidthInstance;
            region?: string;
            totalPrice?: number;
        }
        //cloud.billingView.HourlyInstanceDetail
        // fullName: cloud.billingView.HourlyInstanceDetail.HourlyInstanceDetail
        export interface HourlyInstanceDetail {
            instanceId?: string;
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
        }
        //cloud.billingView.HourlyInstanceOption
        // fullName: cloud.billingView.HourlyInstanceOption.HourlyInstanceOption
        export interface HourlyInstanceOption {
            details?: OVH.cloud.billingView.HourlyInstanceOptionDetail[];
            quantity?: OVH.cloud.billingView.Quantity;
            reference?: string;
            region?: string;
            totalPrice?: number;
        }
        //cloud.billingView.HourlyInstanceOptionDetail
        // fullName: cloud.billingView.HourlyInstanceOptionDetail.HourlyInstanceOptionDetail
        export interface HourlyInstanceOptionDetail {
            instanceId?: string;
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
        }
        //cloud.billingView.HourlyResources
        // fullName: cloud.billingView.HourlyResources.HourlyResources
        export interface HourlyResources {
            instance?: OVH.cloud.billingView.HourlyInstance[];
            instanceBandwidth?: OVH.cloud.billingView.HourlyInstanceBandwidth[];
            instanceOption?: OVH.cloud.billingView.HourlyInstanceOption[];
            snapshot?: OVH.cloud.billingView.HourlySnapshot[];
            storage?: OVH.cloud.billingView.HourlyStorage[];
            volume?: OVH.cloud.billingView.HourlyVolume[];
        }
        //cloud.billingView.HourlySnapshot
        // fullName: cloud.billingView.HourlySnapshot.HourlySnapshot
        export interface HourlySnapshot {
            instance?: OVH.cloud.billingView.InstanceSnapshot;
            region?: string;
            totalPrice?: number;
            volume?: OVH.cloud.billingView.VolumeSnapshot;
        }
        //cloud.billingView.HourlyStorage
        // fullName: cloud.billingView.HourlyStorage.HourlyStorage
        export interface HourlyStorage {
            incomingBandwidth?: OVH.cloud.billingView.BandwidthStorage;
            outgoingBandwidth?: OVH.cloud.billingView.BandwidthStorage;
            region?: string;
            stored?: OVH.cloud.billingView.StoredStorage;
            totalPrice?: number;
            type?: OVH.cloud.billingView.StorageTypeEnum;
        }
        //cloud.billingView.HourlyVolume
        // fullName: cloud.billingView.HourlyVolume.HourlyVolume
        export interface HourlyVolume {
            details?: OVH.cloud.billingView.HourlyVolumeDetail[];
            quantity?: OVH.cloud.billingView.Quantity;
            region?: string;
            totalPrice?: number;
            type?: string;
        }
        //cloud.billingView.HourlyVolumeDetail
        // fullName: cloud.billingView.HourlyVolumeDetail.HourlyVolumeDetail
        export interface HourlyVolumeDetail {
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
            volumeId?: string;
        }
        //cloud.billingView.InstanceSnapshot
        // fullName: cloud.billingView.InstanceSnapshot.InstanceSnapshot
        export interface InstanceSnapshot {
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
        }
        //cloud.billingView.MonthlyInstance
        // fullName: cloud.billingView.MonthlyInstance.MonthlyInstance
        export interface MonthlyInstance {
            details?: OVH.cloud.billingView.MonthlyInstanceDetail[];
            reference?: string;
            region?: string;
            totalPrice?: number;
        }
        //cloud.billingView.MonthlyInstanceDetail
        // fullName: cloud.billingView.MonthlyInstanceDetail.MonthlyInstanceDetail
        export interface MonthlyInstanceDetail {
            activation?: string;
            instanceId?: string;
            totalPrice?: number;
        }
        //cloud.billingView.MonthlyInstanceOption
        // fullName: cloud.billingView.MonthlyInstanceOption.MonthlyInstanceOption
        export interface MonthlyInstanceOption {
            details?: OVH.cloud.billingView.MonthlyInstanceOptionDetail[];
            reference?: string;
            region?: string;
            totalPrice?: number;
        }
        //cloud.billingView.MonthlyInstanceOptionDetail
        // fullName: cloud.billingView.MonthlyInstanceOptionDetail.MonthlyInstanceOptionDetail
        export interface MonthlyInstanceOptionDetail {
            instanceId?: string;
            totalPrice?: number;
        }
        //cloud.billingView.MonthlyResources
        // fullName: cloud.billingView.MonthlyResources.MonthlyResources
        export interface MonthlyResources {
            instance?: OVH.cloud.billingView.MonthlyInstance[];
            instanceOption?: OVH.cloud.billingView.MonthlyInstanceOption[];
        }
        //cloud.billingView.Quantity
        // fullName: cloud.billingView.Quantity.Quantity
        export interface Quantity {
            unit?: OVH.cloud.billingView.UnitQuantity;
            value?: number;
        }
        //cloud.billingView.StorageTypeEnum
        export type StorageTypeEnum = "pcs" | "pca"
        //cloud.billingView.StoredStorage
        // fullName: cloud.billingView.StoredStorage.StoredStorage
        export interface StoredStorage {
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
        }
        //cloud.billingView.UnitQuantity
        export type UnitQuantity = "GiB" | "GiBh" | "Hour"
        //cloud.billingView.UsedCredit
        // fullName: cloud.billingView.UsedCredit.UsedCredit
        export interface UsedCredit {
            description?: string;
            id?: number;
            usedAmount?: number;
        }
        //cloud.billingView.UsedCredits
        // fullName: cloud.billingView.UsedCredits.UsedCredits
        export interface UsedCredits {
            details?: OVH.cloud.billingView.UsedCredit[];
            totalCredit?: number;
        }
        //cloud.billingView.VolumeSnapshot
        // fullName: cloud.billingView.VolumeSnapshot.VolumeSnapshot
        export interface VolumeSnapshot {
            quantity?: OVH.cloud.billingView.Quantity;
            totalPrice?: number;
        }
    }
    export namespace common {
        //cloud.common.VoucherValidity
        // fullName: cloud.common.VoucherValidity.VoucherValidity
        export interface VoucherValidity {
            from?: string;
            to?: string;
        }
    }
    export namespace containerRegistry {
        export namespace registry {
            //cloud.containerRegistry.registry.RegionEnum
            export type RegionEnum = "GRA7"
            //cloud.containerRegistry.registry.Registry
            // fullName: cloud.containerRegistry.registry.Registry.Registry
            export interface Registry {
                createdAt?: string;
                id?: string;
                name?: string;
                projectID?: string;
                region?: OVH.cloud.containerRegistry.registry.RegionEnum;
                status?: OVH.cloud.containerRegistry.registry.StatusEnum;
                updatedAt?: string;
                url?: string;
                version?: string;
            }
            //cloud.containerRegistry.registry.StatusEnum
            export type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING"
        }
        export namespace user {
            //cloud.containerRegistry.user.User
            // fullName: cloud.containerRegistry.user.User.User
            export interface User {
                email?: string;
                id?: string;
                password?: string;
                user?: string;
            }
        }
    }
    export namespace flavor {
        //cloud.flavor.Flavor
        // fullName: cloud.flavor.Flavor.Flavor
        export interface Flavor {
            available?: boolean;
            disk?: number;
            id?: string;
            inboundBandwidth?: number;
            name?: string;
            osType?: string;
            outboundBandwidth?: number;
            planCodes?: OVH.cloud.flavor.FlavorPlanCodes;
            ram?: number;
            region?: string;
            type?: string;
            vcpus?: number;
        }
        //cloud.flavor.FlavorPlanCodes
        // fullName: cloud.flavor.FlavorPlanCodes.FlavorPlanCodes
        export interface FlavorPlanCodes {
            hourly?: string;
            monthly?: string;
        }
    }
    export namespace forecast {
        //cloud.forecast.ProjectForecast
        // fullName: cloud.forecast.ProjectForecast.ProjectForecast
        export interface ProjectForecast {
            lastMetric?: string;
            projectForecast?: OVH.order.Price;
        }
    }
    export namespace image {
        //cloud.image.Image
        // fullName: cloud.image.Image.Image
        export interface Image {
            creationDate?: string;
            flavorType?: string;
            id?: string;
            minDisk?: number;
            minRam?: number;
            name?: string;
            planCode?: string;
            region?: string;
            size?: number;
            status?: string;
            tags?: string[];
            type?: string;
            user?: string;
            visibility?: string;
        }
        //cloud.image.OSTypeEnum
        export type OSTypeEnum = "linux" | "bsd" | "windows"
    }
    export namespace instance {
        //cloud.instance.Access
        // fullName: cloud.instance.Access.Access
        export interface Access {
            login?: string;
            password?: string;
            type?: string;
            url?: string;
        }
        //cloud.instance.ApplicationAccess
        // fullName: cloud.instance.ApplicationAccess.ApplicationAccess
        export interface ApplicationAccess {
            accesses?: OVH.cloud.instance.Access[];
            status?: OVH.cloud.instance.ApplicationAccessStateEnum;
        }
        //cloud.instance.ApplicationAccessStateEnum
        export type ApplicationAccessStateEnum = "installing" | "ok"
        //cloud.instance.Instance
        // fullName: cloud.instance.Instance.Instance
        export interface Instance {
            created?: string;
            flavorId?: string;
            id?: string;
            imageId?: string;
            ipAddresses?: OVH.cloud.instance.IpAddress[];
            monthlyBilling?: OVH.cloud.instance.MonthlyBilling;
            name?: string;
            planCode?: string;
            region?: string;
            sshKeyId?: string;
            status?: OVH.cloud.instance.InstanceStatusEnum;
        }
        //cloud.instance.InstanceDetail
        // fullName: cloud.instance.InstanceDetail.InstanceDetail
        export interface InstanceDetail {
            created?: string;
            flavor?: OVH.cloud.flavor.Flavor;
            id?: string;
            image?: OVH.cloud.image.Image;
            ipAddresses?: OVH.cloud.instance.IpAddress[];
            monthlyBilling?: OVH.cloud.instance.MonthlyBilling;
            name?: string;
            planCode?: string;
            region?: string;
            sshKey?: OVH.cloud.sshkey.SshKeyDetail;
            status?: OVH.cloud.instance.InstanceStatusEnum;
        }
        //cloud.instance.InstanceMetrics
        // fullName: cloud.instance.InstanceMetrics.InstanceMetrics
        export interface InstanceMetrics {
            unit?: string;
            values?: OVH.cloud.instance.InstanceMetricsValue[];
        }
        //cloud.instance.InstanceMetricsValue
        // fullName: cloud.instance.InstanceMetricsValue.InstanceMetricsValue
        export interface InstanceMetricsValue {
            timestamp?: number;
            value?: number;
        }
        //cloud.instance.InstanceStatusEnum
        export type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING"
        //cloud.instance.InstanceVnc
        // fullName: cloud.instance.InstanceVnc.InstanceVnc
        export interface InstanceVnc {
            type?: string;
            url?: string;
        }
        //cloud.instance.IpAddress
        // fullName: cloud.instance.IpAddress.IpAddress
        export interface IpAddress {
            gatewayIp?: string;
            ip?: string;
            networkId?: string;
            type?: string;
            version?: number;
        }
        //cloud.instance.MetricsPeriod
        export type MetricsPeriod = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
        //cloud.instance.MetricsType
        export type MetricsType = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx"
        //cloud.instance.MonthlyBilling
        // fullName: cloud.instance.MonthlyBilling.MonthlyBilling
        export interface MonthlyBilling {
            since?: string;
            status?: OVH.cloud.instance.MonthlyBillingStatusEnum;
        }
        //cloud.instance.MonthlyBillingStatusEnum
        export type MonthlyBillingStatusEnum = "activationPending" | "ok"
        //cloud.instance.NetworkBulkParams
        // fullName: cloud.instance.NetworkBulkParams.NetworkBulkParams
        export interface NetworkBulkParams {
            networkId?: string;
        }
        //cloud.instance.NetworkParams
        // fullName: cloud.instance.NetworkParams.NetworkParams
        export interface NetworkParams {
            ip?: string;
            networkId?: string;
        }
        //cloud.instance.RebootTypeEnum
        export type RebootTypeEnum = "soft" | "hard"
        //cloud.instance.RescueAdminPassword
        // fullName: cloud.instance.RescueAdminPassword.RescueAdminPassword
        export interface RescueAdminPassword {
            adminPassword?: string;
        }
    }
    export namespace instanceInterface {
        //cloud.instanceInterface.FixedIp
        // fullName: cloud.instanceInterface.FixedIp.FixedIp
        export interface FixedIp {
            ip?: string;
            subnetId?: string;
        }
        //cloud.instanceInterface.Interface
        // fullName: cloud.instanceInterface.Interface.Interface
        export interface Interface {
            fixedIps?: OVH.cloud.instanceInterface.FixedIp[];
            id?: string;
            macAddress?: string;
            networkId?: string;
            state?: string;
            type?: string;
        }
    }
    export namespace instancegroup {
        //cloud.instancegroup.InstanceGroup
        // fullName: cloud.instancegroup.InstanceGroup.InstanceGroup
        export interface InstanceGroup {
            id?: string;
            instance_ids?: string[];
            name?: string;
            region?: string;
            type?: OVH.cloud.instancegroup.InstanceGroupTypeEnum;
        }
        //cloud.instancegroup.InstanceGroupTypeEnum
        export type InstanceGroupTypeEnum = "affinity" | "anti-affinity"
    }
    export namespace ip {
        //cloud.ip.CloudIp
        // fullName: cloud.ip.CloudIp.CloudIp
        export interface CloudIp {
            id?: string;
            ip?: string;
            status?: OVH.cloud.ip.IpStatusEnum;
            type?: string;
        }
        //cloud.ip.FailoverIp
        // fullName: cloud.ip.FailoverIp.FailoverIp
        export interface FailoverIp {
            block?: string;
            continentCode?: string;
            geoloc?: string;
            id?: string;
            ip?: string;
            progress?: number;
            routedTo?: string;
            status?: OVH.cloud.ip.IpStatusEnum;
            subType?: OVH.cloud.ip.IpSubTypeEnum;
        }
        //cloud.ip.IpStatusEnum
        export type IpStatusEnum = "ok" | "operationPending"
        //cloud.ip.IpSubTypeEnum
        export type IpSubTypeEnum = "cloud" | "ovh"
    }
    export namespace kube {
        //cloud.kube.Cluster
        // fullName: cloud.kube.Cluster.Cluster
        export interface Cluster {
            controlPlaneIsUpToDate?: boolean;
            createdAt?: string;
            id?: string;
            isUpToDate?: boolean;
            name?: string;
            nodesUrl?: string;
            status?: OVH.cloud.kube.ClusterStatus;
            updatePolicy?: string;
            updatedAt?: string;
            url?: string;
            version?: string;
        }
        //cloud.kube.ClusterStatus
        export type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY"
        //cloud.kube.Kubeconfig
        // fullName: cloud.kube.Kubeconfig.Kubeconfig
        export interface Kubeconfig {
            content?: string;
        }
        //cloud.kube.Node
        // fullName: cloud.kube.Node.Node
        export interface Node {
            createdAt?: string;
            flavor?: string;
            id?: string;
            instanceId?: string;
            isUpToDate?: boolean;
            name?: string;
            status?: OVH.cloud.kube.NodeStatus;
            updatedAt?: string;
            version?: string;
        }
        //cloud.kube.NodeStatus
        export type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY"
        //cloud.kube.Region
        export type Region = "GRA5"
        //cloud.kube.ResetWorkerNodesPolicy
        export type ResetWorkerNodesPolicy = "reinstall" | "delete"
        //cloud.kube.UpdatePolicy
        export type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE"
        //cloud.kube.Version
        export type Version = "1.11" | "1.12" | "1.13" | "1.14"
    }
    export namespace migration {
        //cloud.migration.Migration
        // fullName: cloud.migration.Migration.Migration
        export interface Migration {
            date?: string;
            migrationId?: string;
            resourceId?: string;
            resourceType?: OVH.cloud.migration.ResourceTypeEnum;
        }
        //cloud.migration.ResourceTypeEnum
        export type ResourceTypeEnum = "instance"
    }
    export namespace network {
        //cloud.network.IPPool
        // fullName: cloud.network.IPPool.IPPool
        export interface IPPool {
            dhcp?: boolean;
            end?: string;
            network?: string;
            region?: string;
            start?: string;
        }
        //cloud.network.Network
        // fullName: cloud.network.Network.Network
        export interface Network {
            id?: string;
            name?: string;
            regions?: OVH.cloud.network.NetworkRegion[];
            status?: OVH.cloud.network.NetworkStatusEnum;
            type?: OVH.cloud.network.NetworkTypeEnum;
            vlanId?: number;
        }
        //cloud.network.NetworkRegion
        // fullName: cloud.network.NetworkRegion.NetworkRegion
        export interface NetworkRegion {
            region?: string;
            status?: OVH.cloud.network.NetworkRegionStatusEnum;
        }
        //cloud.network.NetworkRegionStatusEnum
        export type NetworkRegionStatusEnum = "ACTIVE" | "BUILDING"
        //cloud.network.NetworkStatusEnum
        export type NetworkStatusEnum = "BUILDING" | "ACTIVE" | "DELETING"
        //cloud.network.NetworkTypeEnum
        export type NetworkTypeEnum = "public" | "private"
        //cloud.network.Subnet
        // fullName: cloud.network.Subnet.Subnet
        export interface Subnet {
            cidr?: string;
            gatewayIp?: string;
            id?: string;
            ipPools?: OVH.cloud.network.IPPool[];
        }
    }
    export namespace openstackClient {
        //cloud.openstackClient.Profile
        // fullName: cloud.openstackClient.Profile.Profile
        export interface Profile {
            name?: string;
        }
        //cloud.openstackClient.Session
        // fullName: cloud.openstackClient.Session.Session
        export interface Session {
            expires?: string;
            id?: string;
            profile?: OVH.cloud.openstackClient.Profile;
            websocket?: string;
        }
    }
    export namespace order {
        //cloud.order.Order
        // fullName: cloud.order.Order.Order
        export interface Order {
            date?: string;
            orderId?: number;
            planCode?: string;
            serviceName?: string;
            status?: OVH.cloud.order.StatusEnum;
        }
        //cloud.order.StatusEnum
        export type StatusEnum = "unpaid" | "delivering" | "delivered" | "unknown"
    }
    export namespace pca {
        //cloud.pca.BillingRefEnum
        export type BillingRefEnum = "backup" | "delete" | "restore"
        //cloud.pca.DownloadCredentials
        // fullName: cloud.pca.DownloadCredentials.DownloadCredentials
        export interface DownloadCredentials {
            authEndpoint?: string;
            container?: string;
            login?: string;
            password?: string;
            region?: string;
            storageEndpoint?: string;
            tenantId?: string;
            tenantName?: string;
        }
        //cloud.pca.FunctionTypeEnum
        export type FunctionTypeEnum = "createUser" | "delete" | "restore" | "setPassword" | "setSessionName" | "setSshKey"
        //cloud.pca.SessionStateEnum
        export type SessionStateEnum = "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore"
        //cloud.pca.TaskStateEnum
        export type TaskStateEnum = "cancelled" | "deleted" | "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore" | "todo"
        //cloud.pca.TaskTypeEnum
        export type TaskTypeEnum = "delete" | "restore"
        //cloud.pca.TransferState
        // fullName: cloud.pca.TransferState.TransferState
        export interface TransferState {
            agreements?: number[];
            projectId?: string;
            state?: OVH.cloud.pca.TransferStateEnum;
            transferDate?: string;
        }
        //cloud.pca.TransferStateEnum
        export type TransferStateEnum = "deleted" | "transferred" | "untransferred" | "waitingAgreementsValidation"
    }
    export namespace project {
        //cloud.project.BandwidthStorageUsage
        // fullName: cloud.project.BandwidthStorageUsage.BandwidthStorageUsage
        export interface BandwidthStorageUsage {
            downloadedBytes?: number;
            region?: string;
            total?: OVH.order.Price;
        }
        //cloud.project.Bill
        // fullName: cloud.project.Bill.Bill
        export interface Bill {
            billId?: string;
            type?: OVH.cloud.project.BillTypeEnum;
        }
        //cloud.project.BillTypeEnum
        export type BillTypeEnum = "creditPurchased" | "monthlyConsumption" | "monthlyInstanceActivation"
        //cloud.project.CurrentUsage
        // fullName: cloud.project.CurrentUsage.CurrentUsage
        export interface CurrentUsage {
            instances?: OVH.cloud.project.InstancesUsage;
            snapshots?: OVH.cloud.project.SnapshotsUsage;
            storage?: OVH.cloud.project.StorageUsage;
            total?: OVH.order.Price;
            volumeSnapshots?: OVH.cloud.project.SnapshotsUsage;
            volumes?: OVH.cloud.project.VolumesUsage;
        }
        //cloud.project.InstanceMonthlyBilling
        // fullName: cloud.project.InstanceMonthlyBilling.InstanceMonthlyBilling
        export interface InstanceMonthlyBilling {
            activatedOn?: string;
            cost?: OVH.order.Price;
        }
        //cloud.project.InstanceUsageDetail
        // fullName: cloud.project.InstanceUsageDetail.InstanceUsageDetail
        export interface InstanceUsageDetail {
            hourly?: OVH.order.Price;
            instanceId?: string;
            monthly?: OVH.cloud.project.InstanceMonthlyBilling;
            monthlyBilling?: boolean;
            reference?: string;
        }
        //cloud.project.InstancesUsage
        // fullName: cloud.project.InstancesUsage.InstancesUsage
        export interface InstancesUsage {
            detail?: OVH.cloud.project.InstanceUsageDetail[];
            total?: OVH.order.Price;
        }
        //cloud.project.NewProject
        // fullName: cloud.project.NewProject.NewProject
        export interface NewProject {
            agreements?: number[];
            credit?: OVH.cloud.project.NewProjectCredit;
            description?: string;
            orderId?: number;
            project?: string;
            status?: OVH.cloud.project.NewProjectStatusEnum;
        }
        //cloud.project.NewProjectCredit
        // fullName: cloud.project.NewProjectCredit.NewProjectCredit
        export interface NewProjectCredit {
            description?: string;
            id?: number;
            products?: string[];
            total_credit?: OVH.order.Price;
            validity?: OVH.cloud.common.VoucherValidity;
        }
        //cloud.project.NewProjectInfo
        // fullName: cloud.project.NewProjectInfo.NewProjectInfo
        export interface NewProjectInfo {
            agreements?: number[];
            error?: OVH.cloud.project.NewProjectInfoError;
            order?: OVH.order.Price;
            voucher?: OVH.cloud.project.NewProjectInfoVoucher;
        }
        //cloud.project.NewProjectInfoError
        // fullName: cloud.project.NewProjectInfoError.NewProjectInfoError
        export interface NewProjectInfoError {
            code?: OVH.cloud.project.NewProjectInfoErrorCodeEnum;
            message?: string;
        }
        //cloud.project.NewProjectInfoErrorCodeEnum
        export type NewProjectInfoErrorCodeEnum = "accountNotEligible" | "challengePaymentMethodRequested" | "invalidPaymentMean" | "maxProjectsLimitReached" | "paypalAccountNotVerified" | "unpaidDebts"
        //cloud.project.NewProjectInfoVoucher
        // fullName: cloud.project.NewProjectInfoVoucher.NewProjectInfoVoucher
        export interface NewProjectInfoVoucher {
            credit?: OVH.order.Price;
            paymentMethodRequired?: boolean;
        }
        //cloud.project.NewProjectStatusEnum
        export type NewProjectStatusEnum = "creating" | "ok" | "validationPending" | "waitingAgreementsValidation"
        //cloud.project.ProductAgreements
        // fullName: cloud.project.ProductAgreements.ProductAgreements
        export interface ProductAgreements {
            agreementsToValidate?: number[];
            agreementsValidated?: number[];
        }
        //cloud.project.ProductNameEnum
        export type ProductNameEnum = "registry"
        //cloud.project.ProjectStatus
        export type ProjectStatus = "creating" | "deleted" | "deleting" | "ok" | "suspended"
        //cloud.project.ProjectUsage
        // fullName: cloud.project.ProjectUsage.ProjectUsage
        export interface ProjectUsage {
            current?: OVH.cloud.project.CurrentUsage;
        }
        //cloud.project.SnapshotUsageDetail
        // fullName: cloud.project.SnapshotUsageDetail.SnapshotUsageDetail
        export interface SnapshotUsageDetail {
            price?: OVH.order.Price;
            region?: string;
            storedSize?: OVH.complexType.UnitAndValue<number>;
        }
        //cloud.project.SnapshotsUsage
        // fullName: cloud.project.SnapshotsUsage.SnapshotsUsage
        export interface SnapshotsUsage {
            detail?: OVH.cloud.project.SnapshotUsageDetail[];
            total?: OVH.order.Price;
        }
        //cloud.project.StorageUsage
        // fullName: cloud.project.StorageUsage.StorageUsage
        export interface StorageUsage {
            bandwidth?: OVH.cloud.project.BandwidthStorageUsage[];
            total?: OVH.order.Price;
            volume?: OVH.cloud.project.StorageVolumeUsage[];
        }
        //cloud.project.StorageVolumeUsage
        // fullName: cloud.project.StorageVolumeUsage.StorageVolumeUsage
        export interface StorageVolumeUsage {
            region?: string;
            storedBytes?: number;
            total?: OVH.order.Price;
        }
        //cloud.project.VolumeType
        export type VolumeType = "classic" | "high-speed"
        //cloud.project.VolumeUsageDetail
        // fullName: cloud.project.VolumeUsageDetail.VolumeUsageDetail
        export interface VolumeUsageDetail {
            price?: OVH.order.Price;
            volumeCapacity?: OVH.complexType.UnitAndValue<number>;
            volumeId?: string;
            volumeType?: OVH.cloud.project.VolumeType;
        }
        //cloud.project.VolumesUsage
        // fullName: cloud.project.VolumesUsage.VolumesUsage
        export interface VolumesUsage {
            detail?: OVH.cloud.project.VolumeUsageDetail[];
            total?: OVH.order.Price;
        }
    }
    export namespace quota {
        //cloud.quota.InstanceQuotas
        // fullName: cloud.quota.InstanceQuotas.InstanceQuotas
        export interface InstanceQuotas {
            maxCores?: number;
            maxInstances?: number;
            maxRam?: number;
            usedCores?: number;
            usedInstances?: number;
            usedRAM?: number;
        }
        //cloud.quota.KeypairQuotas
        // fullName: cloud.quota.KeypairQuotas.KeypairQuotas
        export interface KeypairQuotas {
            maxCount?: number;
        }
        //cloud.quota.Quotas
        // fullName: cloud.quota.Quotas.Quotas
        export interface Quotas {
            instance?: OVH.cloud.quota.InstanceQuotas;
            keypair?: OVH.cloud.quota.KeypairQuotas;
            region?: string;
            volume?: OVH.cloud.quota.VolumeQuotas;
        }
        //cloud.quota.VolumeQuotas
        // fullName: cloud.quota.VolumeQuotas.VolumeQuotas
        export interface VolumeQuotas {
            maxGigabytes?: number;
            usedGigabytes?: number;
            volumeCount?: number;
        }
    }
    export namespace role {
        //cloud.role.Permission
        // fullName: cloud.role.Permission.Permission
        export interface Permission {
            label?: string;
            roles?: string[];
        }
        //cloud.role.Role
        // fullName: cloud.role.Role.Role
        export interface Role {
            description?: string;
            id?: string;
            name?: string;
            permissions?: string[];
        }
        //cloud.role.Roles
        // fullName: cloud.role.Roles.Roles
        export interface Roles {
            roles?: OVH.cloud.role.Role[];
            services?: OVH.cloud.role.Service[];
        }
        //cloud.role.Service
        // fullName: cloud.role.Service.Service
        export interface Service {
            name?: string;
            permissions?: OVH.cloud.role.Permission[];
        }
    }
    export namespace sshkey {
        //cloud.sshkey.SshKey
        // fullName: cloud.sshkey.SshKey.SshKey
        export interface SshKey {
            id?: string;
            name?: string;
            publicKey?: string;
            regions?: string[];
        }
        //cloud.sshkey.SshKeyDetail
        // fullName: cloud.sshkey.SshKeyDetail.SshKeyDetail
        export interface SshKeyDetail {
            fingerPrint?: string;
            id?: string;
            name?: string;
            publicKey?: string;
            regions?: string[];
        }
    }
    export namespace stack {
        //cloud.stack.Content
        // fullName: cloud.stack.Content.Content
        export interface Content {
            content?: string;
            type?: string;
        }
        //cloud.stack.InstructionGuide
        // fullName: cloud.stack.InstructionGuide.InstructionGuide
        export interface InstructionGuide {
            content?: OVH.cloud.stack.Content[];
            language?: string;
            sections?: OVH.cloud.stack.Section[];
            title?: string;
        }
        //cloud.stack.Section
        // fullName: cloud.stack.Section.Section
        export interface Section {
            content?: OVH.cloud.stack.Content[];
            steps?: OVH.cloud.stack.Step[];
            title?: string;
        }
        //cloud.stack.Stack
        // fullName: cloud.stack.Stack.Stack
        export interface Stack {
            commit?: string;
            description?: string;
            gitRepository?: string;
            instructions?: OVH.cloud.stack.InstructionGuide[];
            name?: string;
            release?: string;
            uuid?: string;
        }
        //cloud.stack.Step
        // fullName: cloud.stack.Step.Step
        export interface Step {
            content?: OVH.cloud.stack.Content[];
            title?: string;
        }
    }
    export namespace storage {
        //cloud.storage.Container
        // fullName: cloud.storage.Container.Container
        export interface Container {
            id?: string;
            name?: string;
            region?: string;
            storedBytes?: number;
            storedObjects?: number;
        }
        //cloud.storage.ContainerAccess
        // fullName: cloud.storage.ContainerAccess.ContainerAccess
        export interface ContainerAccess {
            endpoints?: OVH.cloud.storage.Endpoint[];
            token?: string;
        }
        //cloud.storage.ContainerDetail
        // fullName: cloud.storage.ContainerDetail.ContainerDetail
        export interface ContainerDetail {
            archive?: boolean;
            containerType?: OVH.cloud.storage.TypeEnum;
            cors?: string[];
            name?: string;
            objects?: OVH.cloud.storage.ContainerObject[];
            public?: boolean;
            region?: string;
            staticUrl?: string;
            storedBytes?: number;
            storedObjects?: number;
        }
        //cloud.storage.ContainerObject
        // fullName: cloud.storage.ContainerObject.ContainerObject
        export interface ContainerObject {
            contentType?: string;
            lastModified?: string;
            name?: string;
            retrievalDelay?: number;
            retrievalState?: OVH.cloud.storage.RetrievalStateEnum;
            size?: number;
        }
        //cloud.storage.ContainerObjectTempURL
        // fullName: cloud.storage.ContainerObjectTempURL.ContainerObjectTempURL
        export interface ContainerObjectTempURL {
            expirationDate?: string;
            getURL?: string;
        }
        //cloud.storage.Endpoint
        // fullName: cloud.storage.Endpoint.Endpoint
        export interface Endpoint {
            region?: string;
            url?: string;
        }
        //cloud.storage.RetrievalStateEnum
        export type RetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        //cloud.storage.RightEnum
        export type RightEnum = "all" | "read" | "write"
        //cloud.storage.TypeEnum
        export type TypeEnum = "static" | "public" | "private"
    }
    export namespace usage {
        //cloud.usage.PaymentTypeEnum
        export type PaymentTypeEnum = "pre" | "post"
        //cloud.usage.Period
        // fullName: cloud.usage.Period.Period
        export interface Period {
            from?: string;
            to?: string;
        }
        //cloud.usage.UsageBill
        // fullName: cloud.usage.UsageBill.UsageBill
        export interface UsageBill {
            bill_id?: string;
            credit?: number;
            part?: number;
            payment_type?: OVH.cloud.usage.PaymentTypeEnum;
            total?: number;
        }
        //cloud.usage.UsageCurrent
        // fullName: cloud.usage.UsageCurrent.UsageCurrent
        export interface UsageCurrent {
            hourlyUsage?: OVH.cloud.billingView.HourlyResources;
            lastUpdate?: string;
            monthlyUsage?: OVH.cloud.billingView.MonthlyResources;
            period?: OVH.cloud.usage.Period;
        }
        //cloud.usage.UsageCurrentBills
        // fullName: cloud.usage.UsageCurrentBills.UsageCurrentBills
        export interface UsageCurrentBills {
            bills?: OVH.cloud.usage.UsageBill[];
        }
        //cloud.usage.UsageForecast
        // fullName: cloud.usage.UsageForecast.UsageForecast
        export interface UsageForecast {
            hourlyUsage?: OVH.cloud.billingView.HourlyResources;
            lastUpdate?: string;
            monthlyUsage?: OVH.cloud.billingView.MonthlyResources;
            period?: OVH.cloud.usage.Period;
            usableCredits?: OVH.cloud.billingView.UsedCredits;
        }
        //cloud.usage.UsageHistory
        // fullName: cloud.usage.UsageHistory.UsageHistory
        export interface UsageHistory {
            id?: string;
            lastUpdate?: string;
            period?: OVH.cloud.usage.Period;
        }
        //cloud.usage.UsageHistoryDetail
        // fullName: cloud.usage.UsageHistoryDetail.UsageHistoryDetail
        export interface UsageHistoryDetail {
            hourlyUsage?: OVH.cloud.billingView.HourlyResources;
            id?: string;
            lastUpdate?: string;
            monthlyUsage?: OVH.cloud.billingView.MonthlyResources;
            period?: OVH.cloud.usage.Period;
        }
        //cloud.usage.UsageHistoryDetailBills
        // fullName: cloud.usage.UsageHistoryDetailBills.UsageHistoryDetailBills
        export interface UsageHistoryDetailBills {
            bills?: OVH.cloud.usage.UsageBill[];
        }
    }
    export namespace user {
        //cloud.user.Openrc
        // fullName: cloud.user.Openrc.Openrc
        export interface Openrc {
            content?: string;
        }
        //cloud.user.OpenrcVersionEnum
        export type OpenrcVersionEnum = "v2.0" | "v3"
        //cloud.user.Rclone
        // fullName: cloud.user.Rclone.Rclone
        export interface Rclone {
            content?: string;
        }
        //cloud.user.RoleEnum
        export type RoleEnum = "admin" | "authentication" | "administrator" | "compute_operator" | "infrastructure_supervisor" | "network_security_operator" | "network_operator" | "backup_operator" | "image_operator" | "volume_operator" | "objectstore_operator"
        //cloud.user.User
        // fullName: cloud.user.User.User
        export interface User {
            creationDate?: string;
            description?: string;
            id?: number;
            status?: OVH.cloud.user.UserStatusEnum;
            username?: string;
        }
        //cloud.user.UserDetail
        // fullName: cloud.user.UserDetail.UserDetail
        export interface UserDetail {
            creationDate?: string;
            description?: string;
            id?: number;
            password?: string;
            status?: OVH.cloud.user.UserStatusEnum;
            username?: string;
        }
        //cloud.user.UserStatusEnum
        export type UserStatusEnum = "creating" | "ok" | "deleting" | "deleted"
    }
    export namespace volume {
        //cloud.volume.Snapshot
        // fullName: cloud.volume.Snapshot.Snapshot
        export interface Snapshot {
            creationDate?: string;
            description?: string;
            id?: string;
            name?: string;
            planCode?: string;
            region?: string;
            size?: number;
            status?: OVH.cloud.volume.SnapshotStatusEnum;
            volumeId?: string;
        }
        //cloud.volume.SnapshotStatusEnum
        export type SnapshotStatusEnum = "creating" | "available" | "deleting" | "error" | "error_deleting"
        //cloud.volume.Volume
        // fullName: cloud.volume.Volume.Volume
        export interface Volume {
            attachedTo?: string[];
            bootable?: boolean;
            creationDate?: string;
            description?: string;
            id?: string;
            name?: string;
            planCode?: string;
            region?: string;
            size?: number;
            status?: string;
            type?: OVH.cloud.volume.VolumeTypeEnum;
        }
        //cloud.volume.VolumeTypeEnum
        export type VolumeTypeEnum = "classic" | "high-speed"
    }
}
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace nichandle {
    //nichandle.OvhSubsidiaryEnum
    export type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS"
}
export namespace order {
    //order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    //order.Price
    // fullName: order.Price.Price
    export interface Price {
        currencyCode?: OVH.order.CurrencyCodeEnum;
        text?: string;
        value?: number;
    }
}
export namespace pca {
    //pca.Account
    // fullName: pca.Account.Account
    export interface Account {
        domain?: string;
        host?: string;
        login?: string;
        password?: string;
        sshkey?: string;
    }
    //pca.Billing
    // fullName: pca.Billing.Billing
    export interface Billing {
        billed?: boolean;
        date?: string;
        id?: number;
        quantity?: number;
        reference?: OVH.cloud.pca.BillingRefEnum;
        total?: number;
    }
    //pca.File
    // fullName: pca.File.File
    export interface File {
        MD5?: string;
        SHA1?: string;
        SHA256?: string;
        id?: string;
        name?: string;
        size?: number;
        state?: string;
        type?: string;
    }
    //pca.Session
    // fullName: pca.Session.Session
    export interface Session {
        endDate?: string;
        id?: string;
        login?: string;
        name?: string;
        size?: number;
        srcIp?: string;
        startDate?: string;
        state?: OVH.cloud.pca.SessionStateEnum;
    }
    //pca.Task
    // fullName: pca.Task.Task
    export interface Task {
        comment?: string;
        function?: OVH.cloud.pca.FunctionTypeEnum;
        id?: string;
        ipAddress?: string;
        login?: string;
        status?: OVH.cloud.pca.TaskStateEnum;
        todoDate?: string;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /cloud
export interface Cloud {
    // GET /cloud
    $get(): Promise<string[]>;
    [keys: string]: {
        pca:  {
            // GET /cloud/{serviceName}/pca
            $get(): Promise<string[]>;
            [keys: string]: {
                // GET /cloud/{serviceName}/pca/{pcaServiceName}
                $get(): Promise<pca.Account>;
                // PUT /cloud/{serviceName}/pca/{pcaServiceName}
                $put(body?: {body: pca.Account}): Promise<void>;
                sessions:  {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions
                    $get(param?: {name?: string}): Promise<string[]>;
                    [keys: string]: {
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $get(): Promise<pca.Session>;
                        // PUT /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $put(body?: {body: pca.Session}): Promise<void>;
                        // DELETE /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}
                        $delete(): Promise<pca.Task>;
                        files:  {
                            // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files
                            $get(param?: {name?: string}): Promise<string[]>;
                            [keys: string]: {
                                // GET /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}
                                $get(): Promise<pca.File>;
                            } | any
                        }
                        restore:  {
                            // POST /cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore
                            $post(): Promise<pca.Task>;
                        }
                    } | any
                }
                tasks:  {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                    $get(param?: {status?: cloud.pca.TaskStateEnum, todoDate_from?: string, todoDate_to?: string, function_?: cloud.pca.FunctionTypeEnum}): Promise<string[]>;
                    // POST /cloud/{serviceName}/pca/{pcaServiceName}/tasks
                    $post(body?: {fileIds: string[], sessionId: string, taskFunction: cloud.pca.TaskTypeEnum}): Promise<pca.Task>;
                    [keys: string]: {
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}
                        $get(): Promise<pca.Task>;
                    } | any
                }
                serviceInfos:  {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                    $get(): Promise<services.Service>;
                    // PUT /cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos
                    $put(body?: {body: services.Service}): Promise<void>;
                }
                usage:  {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/usage
                    $get(): Promise<number>;
                }
                billing:  {
                    // GET /cloud/{serviceName}/pca/{pcaServiceName}/billing
                    $get(param?: {date_to?: string, billed?: boolean, date_from?: string}): Promise<number[]>;
                    [keys: string]: {
                        // GET /cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}
                        $get(): Promise<pca.Billing>;
                    } | any
                }
            } | any
        }
    } | any
    order:  {
        // GET /cloud/order
        $get(param?: {planCode?: string}): Promise<cloud.order.Order[]>;
    }
    createProject:  {
        // POST /cloud/createProject
        $post(body?: {credit?: number, description?: string, voucher?: string}): Promise<cloud.project.NewProject>;
    }
    subsidiaryPrice:  {
        // GET /cloud/subsidiaryPrice
        $get(param?: {flavorId?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, region?: string}): Promise<cloud.Price>;
    }
    project:  {
        // GET /cloud/project
        $get(): Promise<string[]>;
        [keys: string]: {
            // GET /cloud/project/{serviceName}
            $get(): Promise<cloud.Project>;
            // PUT /cloud/project/{serviceName}
            $put(body?: {body: cloud.Project}): Promise<void>;
            region:  {
                // GET /cloud/project/{serviceName}/region
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/region
                $post(body?: {region: string}): Promise<cloud.Region>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/region/{regionName}
                    $get(): Promise<cloud.Region>;
                    workflow:  {
                        backup:  {
                            // GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                            $get(): Promise<cloud.Backup[]>;
                            // POST /cloud/project/{serviceName}/region/{regionName}/workflow/backup
                            $post(body?: {cron: string, instanceId: string, maxExecutionCount?: number, name: string, rotation: number}): Promise<cloud.Backup>;
                            [keys: string]: {
                                // DELETE /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                $delete(): Promise<void>;
                                // GET /cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}
                                $get(): Promise<cloud.Backup>;
                            } | any
                        }
                    }
                } | any
            }
            confirmTermination:  {
                // POST /cloud/project/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            snapshot:  {
                // GET /cloud/project/{serviceName}/snapshot
                $get(param?: {flavorType?: string, region?: string}): Promise<cloud.image.Image[]>;
                [keys: string]: {
                    // DELETE /cloud/project/{serviceName}/snapshot/{snapshotId}
                    $delete(): Promise<cloud.image.Image>;
                    // GET /cloud/project/{serviceName}/snapshot/{snapshotId}
                    $get(): Promise<cloud.image.Image>;
                } | any
            }
            migration:  {
                // GET /cloud/project/{serviceName}/migration
                $get(): Promise<cloud.migration.Migration[]>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/migration/{migrationId}
                    $get(): Promise<cloud.migration.Migration>;
                    // PUT /cloud/project/{serviceName}/migration/{migrationId}
                    $put(body?: {date: string}): Promise<cloud.migration.Migration>;
                } | any
            }
            acl:  {
                // GET /cloud/project/{serviceName}/acl
                $get(param?: {type?: cloud.AclTypeEnum}): Promise<string[]>;
                // POST /cloud/project/{serviceName}/acl
                $post(body?: {accountId: string, type: cloud.AclTypeEnum}): Promise<cloud.Acl>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/acl/{accountId}
                    $get(): Promise<cloud.Acl>;
                    // DELETE /cloud/project/{serviceName}/acl/{accountId}
                    $delete(): Promise<void>;
                } | any
            }
            forecast:  {
                // GET /cloud/project/{serviceName}/forecast
                $get(param?: {toDate: string}): Promise<cloud.forecast.ProjectForecast>;
            }
            sshkey:  {
                // GET /cloud/project/{serviceName}/sshkey
                $get(param?: {region?: string}): Promise<cloud.sshkey.SshKey[]>;
                // POST /cloud/project/{serviceName}/sshkey
                $post(body?: {name: string, publicKey: string, region?: string}): Promise<cloud.sshkey.SshKeyDetail>;
                [keys: string]: {
                    // DELETE /cloud/project/{serviceName}/sshkey/{keyId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/sshkey/{keyId}
                    $get(): Promise<cloud.sshkey.SshKeyDetail>;
                } | any
            }
            usage:  {
                current:  {
                    // GET /cloud/project/{serviceName}/usage/current
                    $get(): Promise<cloud.usage.UsageCurrent>;
                }
                forecast:  {
                    // GET /cloud/project/{serviceName}/usage/forecast
                    $get(): Promise<cloud.usage.UsageForecast>;
                }
                history:  {
                    // GET /cloud/project/{serviceName}/usage/history
                    $get(param?: {from?: string, to?: string}): Promise<cloud.usage.UsageHistory[]>;
                    [keys: string]: {
                        // GET /cloud/project/{serviceName}/usage/history/{usageId}
                        $get(): Promise<cloud.usage.UsageHistoryDetail>;
                    } | any
                }
            }
            bill:  {
                // GET /cloud/project/{serviceName}/bill
                $get(param?: {to: string, from: string}): Promise<cloud.project.Bill[]>;
            }
            instance:  {
                // GET /cloud/project/{serviceName}/instance
                $get(param?: {region?: string}): Promise<cloud.instance.Instance[]>;
                // POST /cloud/project/{serviceName}/instance
                $post(body?: {flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.InstanceDetail>;
                group:  {
                    // GET /cloud/project/{serviceName}/instance/group
                    $get(param?: {region?: string}): Promise<cloud.instancegroup.InstanceGroup[]>;
                    // POST /cloud/project/{serviceName}/instance/group
                    $post(body?: {name: string, region: string, type: cloud.instancegroup.InstanceGroupTypeEnum}): Promise<cloud.instancegroup.InstanceGroup>;
                    [keys: string]: {
                        // DELETE /cloud/project/{serviceName}/instance/group/{groupId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/instance/group/{groupId}
                        $get(param?: {region?: string}): Promise<cloud.instancegroup.InstanceGroup>;
                    } | any
                }
                bulk:  {
                    // POST /cloud/project/{serviceName}/instance/bulk
                    $post(body?: {flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.Instance[]>;
                }
                [keys: string]: {
                    // DELETE /cloud/project/{serviceName}/instance/{instanceId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/instance/{instanceId}
                    $get(): Promise<cloud.instance.InstanceDetail>;
                    // PUT /cloud/project/{serviceName}/instance/{instanceId}
                    $put(body?: {instanceName: string}): Promise<void>;
                    reboot:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/reboot
                        $post(body?: {type: cloud.instance.RebootTypeEnum}): Promise<void>;
                    }
                    applicationAccess:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
                        $post(): Promise<cloud.instance.ApplicationAccess>;
                    }
                    rescueMode:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/rescueMode
                        $post(body?: {imageId?: string, rescue: boolean}): Promise<cloud.instance.RescueAdminPassword>;
                    }
                    activeMonthlyBilling:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
                        $post(): Promise<cloud.instance.InstanceDetail>;
                    }
                    interface:  {
                        // GET /cloud/project/{serviceName}/instance/{instanceId}/interface
                        $get(): Promise<cloud.instanceInterface.Interface[]>;
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/interface
                        $post(body?: {ip?: string, networkId: string}): Promise<cloud.instanceInterface.Interface>;
                        [keys: string]: {
                            // DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
                            $get(): Promise<cloud.instanceInterface.Interface>;
                        } | any
                    }
                    stop:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/stop
                        $post(): Promise<void>;
                    }
                    start:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/start
                        $post(): Promise<void>;
                    }
                    vnc:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/vnc
                        $post(): Promise<cloud.instance.InstanceVnc>;
                    }
                    monitoring:  {
                        // GET /cloud/project/{serviceName}/instance/{instanceId}/monitoring
                        $get(param?: {period: cloud.instance.MetricsPeriod, type: cloud.instance.MetricsType}): Promise<cloud.instance.InstanceMetrics>;
                    }
                    resize:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/resize
                        $post(body?: {flavorId: string}): Promise<cloud.instance.InstanceDetail>;
                    }
                    reinstall:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/reinstall
                        $post(body?: {imageId: string}): Promise<cloud.instance.InstanceDetail>;
                    }
                    snapshot:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/snapshot
                        $post(body?: {snapshotName: string}): Promise<void>;
                    }
                    resume:  {
                        // POST /cloud/project/{serviceName}/instance/{instanceId}/resume
                        $post(): Promise<void>;
                    }
                } | any
            }
            consumption:  {
                // GET /cloud/project/{serviceName}/consumption
                $get(param?: {to: string, from: string}): Promise<cloud.project.ProjectUsage>;
            }
            vrack:  {
                // GET /cloud/project/{serviceName}/vrack
                $get(): Promise<cloud.Vrack>;
                // POST /cloud/project/{serviceName}/vrack
                $post(): Promise<cloud.Operation>;
            }
            terminate:  {
                // POST /cloud/project/{serviceName}/terminate
                $post(): Promise<string>;
            }
            flavor:  {
                // GET /cloud/project/{serviceName}/flavor
                $get(param?: {region?: string}): Promise<cloud.flavor.Flavor[]>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/flavor/{flavorId}
                    $get(): Promise<cloud.flavor.Flavor>;
                } | any
            }
            alerting:  {
                // GET /cloud/project/{serviceName}/alerting
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/alerting
                $post(body?: {delay: cloud.AlertingDelayEnum, email: string, monthlyThreshold: number}): Promise<cloud.Alerting>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/alerting/{id}
                    $get(): Promise<cloud.Alerting>;
                    // PUT /cloud/project/{serviceName}/alerting/{id}
                    $put(body?: {body: cloud.Alerting}): Promise<void>;
                    // DELETE /cloud/project/{serviceName}/alerting/{id}
                    $delete(): Promise<void>;
                    alert:  {
                        // GET /cloud/project/{serviceName}/alerting/{id}/alert
                        $get(): Promise<number[]>;
                        [keys: string]: {
                            // GET /cloud/project/{serviceName}/alerting/{id}/alert/{alertId}
                            $get(): Promise<cloud.AlertingAlert>;
                        } | any
                    }
                } | any
            }
            user:  {
                // GET /cloud/project/{serviceName}/user
                $get(): Promise<cloud.user.User[]>;
                // POST /cloud/project/{serviceName}/user
                $post(body?: {description?: string, role?: cloud.user.RoleEnum}): Promise<cloud.user.UserDetail>;
                [keys: string]: {
                    // DELETE /cloud/project/{serviceName}/user/{userId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/user/{userId}
                    $get(): Promise<cloud.user.User>;
                    regeneratePassword:  {
                        // POST /cloud/project/{serviceName}/user/{userId}/regeneratePassword
                        $post(): Promise<cloud.user.UserDetail>;
                    }
                    rclone:  {
                        // GET /cloud/project/{serviceName}/user/{userId}/rclone
                        $get(param?: {region: string}): Promise<cloud.user.Rclone>;
                    }
                    openrc:  {
                        // GET /cloud/project/{serviceName}/user/{userId}/openrc
                        $get(param?: {region: string, version?: cloud.user.OpenrcVersionEnum}): Promise<cloud.user.Openrc>;
                    }
                    token:  {
                        // POST /cloud/project/{serviceName}/user/{userId}/token
                        $post(body?: {password: string}): Promise<cloud.authentication.Token>;
                    }
                } | any
            }
            credit:  {
                // GET /cloud/project/{serviceName}/credit
                $get(): Promise<number[]>;
                // POST /cloud/project/{serviceName}/credit
                $post(body?: {code: string}): Promise<void>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/credit/{id}
                    $get(): Promise<cloud.Credit>;
                } | any
            }
            volume:  {
                // GET /cloud/project/{serviceName}/volume
                $get(param?: {region?: string}): Promise<cloud.volume.Volume[]>;
                // POST /cloud/project/{serviceName}/volume
                $post(body?: {description?: string, imageId?: string, name?: string, region: string, size: number, snapshotId?: string, type: cloud.volume.VolumeTypeEnum}): Promise<cloud.volume.Volume>;
                [keys: string]: {
                    // DELETE /cloud/project/{serviceName}/volume/{volumeId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/volume/{volumeId}
                    $get(): Promise<cloud.volume.Volume>;
                    // PUT /cloud/project/{serviceName}/volume/{volumeId}
                    $put(body?: {description?: string, name?: string}): Promise<cloud.volume.Volume>;
                    upsize:  {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/upsize
                        $post(body?: {size: number}): Promise<cloud.volume.Volume>;
                    }
                    detach:  {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/detach
                        $post(body?: {instanceId: string}): Promise<cloud.volume.Volume>;
                    }
                    attach:  {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/attach
                        $post(body?: {instanceId: string}): Promise<cloud.volume.Volume>;
                    }
                    snapshot:  {
                        // POST /cloud/project/{serviceName}/volume/{volumeId}/snapshot
                        $post(body?: {description?: string, name?: string}): Promise<cloud.volume.Snapshot>;
                    }
                } | any
                snapshot:  {
                    // GET /cloud/project/{serviceName}/volume/snapshot
                    $get(param?: {region?: string}): Promise<cloud.volume.Snapshot[]>;
                    [keys: string]: {
                        // DELETE /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/volume/snapshot/{snapshotId}
                        $get(): Promise<cloud.volume.Snapshot>;
                    } | any
                }
            }
            changeContact:  {
                // POST /cloud/project/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            regionAvailable:  {
                // GET /cloud/project/{serviceName}/regionAvailable
                $get(): Promise<cloud.AvailableRegion[]>;
            }
            network:  {
                public:  {
                    // GET /cloud/project/{serviceName}/network/public
                    $get(): Promise<cloud.network.Network[]>;
                }
                private:  {
                    // GET /cloud/project/{serviceName}/network/private
                    $get(): Promise<cloud.network.Network[]>;
                    // POST /cloud/project/{serviceName}/network/private
                    $post(body?: {name: string, regions?: string[], vlanId?: number}): Promise<cloud.network.Network>;
                    [keys: string]: {
                        // DELETE /cloud/project/{serviceName}/network/private/{networkId}
                        $delete(): Promise<void>;
                        // GET /cloud/project/{serviceName}/network/private/{networkId}
                        $get(): Promise<cloud.network.Network>;
                        // PUT /cloud/project/{serviceName}/network/private/{networkId}
                        $put(body?: {name: string}): Promise<void>;
                        subnet:  {
                            // GET /cloud/project/{serviceName}/network/private/{networkId}/subnet
                            $get(): Promise<cloud.network.Subnet[]>;
                            // POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
                            $post(body?: {dhcp: boolean, end: string, network: string, noGateway: boolean, region: string, start: string}): Promise<cloud.network.Subnet>;
                            [keys: string]: {
                                // DELETE /cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}
                                $delete(): Promise<void>;
                            } | any
                        }
                        region:  {
                            // POST /cloud/project/{serviceName}/network/private/{networkId}/region
                            $post(body?: {region: string}): Promise<cloud.network.Network>;
                        }
                    } | any
                }
            }
            ip:  {
                // GET /cloud/project/{serviceName}/ip
                $get(): Promise<cloud.ip.CloudIp[]>;
                failover:  {
                    // GET /cloud/project/{serviceName}/ip/failover
                    $get(): Promise<cloud.ip.FailoverIp[]>;
                    [keys: string]: {
                        // GET /cloud/project/{serviceName}/ip/failover/{id}
                        $get(): Promise<cloud.ip.FailoverIp>;
                        attach:  {
                            // POST /cloud/project/{serviceName}/ip/failover/{id}/attach
                            $post(body?: {instanceId: string}): Promise<cloud.ip.FailoverIp>;
                        }
                    } | any
                }
            }
            storage:  {
                // GET /cloud/project/{serviceName}/storage
                $get(): Promise<cloud.storage.Container[]>;
                // POST /cloud/project/{serviceName}/storage
                $post(body?: {archive: boolean, containerName: string, region: string}): Promise<cloud.storage.Container>;
                [keys: string]: {
                    // DELETE /cloud/project/{serviceName}/storage/{containerId}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/storage/{containerId}
                    $get(param?: {noObjects?: boolean}): Promise<cloud.storage.ContainerDetail>;
                    // PUT /cloud/project/{serviceName}/storage/{containerId}
                    $put(body?: {containerType?: cloud.storage.TypeEnum}): Promise<void>;
                    publicUrl:  {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/publicUrl
                        $post(body?: {expirationDate: string, objectName: string}): Promise<cloud.storage.ContainerObjectTempURL>;
                    }
                    cors:  {
                        // DELETE /cloud/project/{serviceName}/storage/{containerId}/cors
                        $delete(): Promise<void>;
                        // POST /cloud/project/{serviceName}/storage/{containerId}/cors
                        $post(body?: {origin: string}): Promise<void>;
                    }
                    user:  {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/user
                        $post(body?: {description?: string, right: cloud.storage.RightEnum}): Promise<cloud.user.UserDetail>;
                    }
                    static:  {
                        // POST /cloud/project/{serviceName}/storage/{containerId}/static
                        $post(): Promise<void>;
                    }
                } | any
                access:  {
                    // GET /cloud/project/{serviceName}/storage/access
                    $get(): Promise<cloud.storage.ContainerAccess>;
                    // POST /cloud/project/{serviceName}/storage/access
                    $post(): Promise<cloud.storage.ContainerAccess>;
                }
            }
            image:  {
                // GET /cloud/project/{serviceName}/image
                $get(param?: {flavorType?: string, osType?: cloud.image.OSTypeEnum, region?: string}): Promise<cloud.image.Image[]>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/image/{imageId}
                    $get(): Promise<cloud.image.Image>;
                } | any
            }
            cancel:  {
                // POST /cloud/project/{serviceName}/cancel
                $post(): Promise<void>;
            }
            serviceInfos:  {
                // GET /cloud/project/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /cloud/project/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            operation:  {
                // GET /cloud/project/{serviceName}/operation
                $get(): Promise<cloud.Operation[]>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/operation/{operationId}
                    $get(): Promise<cloud.Operation>;
                } | any
            }
            unleash:  {
                // POST /cloud/project/{serviceName}/unleash
                $post(): Promise<void>;
            }
            quota:  {
                // GET /cloud/project/{serviceName}/quota
                $get(): Promise<cloud.quota.Quotas[]>;
            }
            kube:  {
                // GET /cloud/project/{serviceName}/kube
                $get(): Promise<string[]>;
                // POST /cloud/project/{serviceName}/kube
                $post(body?: {name?: string, region: cloud.kube.Region, version?: cloud.kube.Version}): Promise<cloud.kube.Cluster>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/kube/{kubeId}
                    $get(): Promise<cloud.kube.Cluster>;
                    // PUT /cloud/project/{serviceName}/kube/{kubeId}
                    $put(body?: {name: string}): Promise<void>;
                    // DELETE /cloud/project/{serviceName}/kube/{kubeId}
                    $delete(): Promise<void>;
                    node:  {
                        // GET /cloud/project/{serviceName}/kube/{kubeId}/node
                        $get(): Promise<cloud.kube.Node[]>;
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/node
                        $post(body?: {flavorName: string, name?: string}): Promise<cloud.kube.Node>;
                        [keys: string]: {
                            // DELETE /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                            $delete(): Promise<void>;
                            // GET /cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}
                            $get(): Promise<cloud.kube.Node>;
                        } | any
                    }
                    kubeconfig:  {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/kubeconfig
                        $post(): Promise<cloud.kube.Kubeconfig>;
                    }
                    updatePolicy:  {
                        // PUT /cloud/project/{serviceName}/kube/{kubeId}/updatePolicy
                        $put(body?: {updatePolicy: cloud.kube.UpdatePolicy}): Promise<void>;
                    }
                    update:  {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/update
                        $post(): Promise<void>;
                    }
                    reset:  {
                        // POST /cloud/project/{serviceName}/kube/{kubeId}/reset
                        $post(body?: {version?: cloud.kube.Version, workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicy}): Promise<void>;
                    }
                } | any
                regions:  {
                    // GET /cloud/project/{serviceName}/kube/regions
                    $get(): Promise<cloud.kube.Region[]>;
                }
            }
            openstackClient:  {
                // POST /cloud/project/{serviceName}/openstackClient
                $post(): Promise<cloud.openstackClient.Session>;
            }
            containerRegistry:  {
                // GET /cloud/project/{serviceName}/containerRegistry
                $get(): Promise<cloud.containerRegistry.registry.Registry[]>;
                // POST /cloud/project/{serviceName}/containerRegistry
                $post(body?: {name: string, region: cloud.containerRegistry.registry.RegionEnum}): Promise<cloud.containerRegistry.registry.Registry>;
                [keys: string]: {
                    // DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $delete(): Promise<void>;
                    // GET /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $get(): Promise<cloud.containerRegistry.registry.Registry>;
                    // PUT /cloud/project/{serviceName}/containerRegistry/{registryID}
                    $put(body?: {name: string}): Promise<void>;
                    users:  {
                        // GET /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                        $get(): Promise<cloud.containerRegistry.user.User[]>;
                        // POST /cloud/project/{serviceName}/containerRegistry/{registryID}/users
                        $post(body?: {email?: string, login?: string}): Promise<cloud.containerRegistry.user.User>;
                        [keys: string]: {
                            // DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}
                            $delete(): Promise<void>;
                        } | any
                    }
                } | any
            }
            retain:  {
                // POST /cloud/project/{serviceName}/retain
                $post(): Promise<void>;
            }
            stack:  {
                // GET /cloud/project/{serviceName}/stack
                $get(): Promise<cloud.stack.Stack[]>;
                [keys: string]: {
                    // GET /cloud/project/{serviceName}/stack/{stackId}
                    $get(): Promise<cloud.stack.Stack>;
                    client:  {
                        // POST /cloud/project/{serviceName}/stack/{stackId}/client
                        $post(): Promise<cloud.openstackClient.Session>;
                    }
                } | any
            }
        } | any
    }
    price:  {
        // GET /cloud/price
        $get(param?: {flavorId?: string, region?: string}): Promise<cloud.Price>;
    }
    createProjectInfo:  {
        // GET /cloud/createProjectInfo
        $get(param?: {voucher?: string}): Promise<cloud.project.NewProjectInfo>;
    }
    agreements:  {
        // GET /cloud/agreements
        $get(param?: {product: cloud.project.ProductNameEnum}): Promise<cloud.project.ProductAgreements>;
    }
}
// Api
type PathsCloudGET = '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/sessions' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/tasks' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos' |
  '/cloud/{serviceName}/pca/{pcaServiceName}' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/usage' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/billing' |
  '/cloud/{serviceName}/pca' |
  '/cloud/order' |
  '/cloud/subsidiaryPrice' |
  '/cloud/project/{serviceName}' |
  '/cloud/project/{serviceName}/region' |
  '/cloud/project/{serviceName}/region/{regionName}/workflow/backup' |
  '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}' |
  '/cloud/project/{serviceName}/region/{regionName}' |
  '/cloud/project/{serviceName}/snapshot' |
  '/cloud/project/{serviceName}/snapshot/{snapshotId}' |
  '/cloud/project/{serviceName}/migration/{migrationId}' |
  '/cloud/project/{serviceName}/migration' |
  '/cloud/project/{serviceName}/acl/{accountId}' |
  '/cloud/project/{serviceName}/acl' |
  '/cloud/project/{serviceName}/forecast' |
  '/cloud/project/{serviceName}/sshkey/{keyId}' |
  '/cloud/project/{serviceName}/sshkey' |
  '/cloud/project/{serviceName}/usage/current' |
  '/cloud/project/{serviceName}/usage/forecast' |
  '/cloud/project/{serviceName}/usage/history' |
  '/cloud/project/{serviceName}/usage/history/{usageId}' |
  '/cloud/project/{serviceName}/bill' |
  '/cloud/project/{serviceName}/instance/group' |
  '/cloud/project/{serviceName}/instance/group/{groupId}' |
  '/cloud/project/{serviceName}/instance' |
  '/cloud/project/{serviceName}/instance/{instanceId}/interface' |
  '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}' |
  '/cloud/project/{serviceName}/instance/{instanceId}' |
  '/cloud/project/{serviceName}/instance/{instanceId}/monitoring' |
  '/cloud/project/{serviceName}/consumption' |
  '/cloud/project/{serviceName}/vrack' |
  '/cloud/project/{serviceName}/flavor/{flavorId}' |
  '/cloud/project/{serviceName}/flavor' |
  '/cloud/project/{serviceName}/alerting/{id}' |
  '/cloud/project/{serviceName}/alerting/{id}/alert' |
  '/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}' |
  '/cloud/project/{serviceName}/alerting' |
  '/cloud/project/{serviceName}/user' |
  '/cloud/project/{serviceName}/user/{userId}/rclone' |
  '/cloud/project/{serviceName}/user/{userId}' |
  '/cloud/project/{serviceName}/user/{userId}/openrc' |
  '/cloud/project/{serviceName}/credit/{id}' |
  '/cloud/project/{serviceName}/credit' |
  '/cloud/project/{serviceName}/volume/{volumeId}' |
  '/cloud/project/{serviceName}/volume' |
  '/cloud/project/{serviceName}/volume/snapshot' |
  '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}' |
  '/cloud/project/{serviceName}/regionAvailable' |
  '/cloud/project/{serviceName}/network/public' |
  '/cloud/project/{serviceName}/network/private/{networkId}/subnet' |
  '/cloud/project/{serviceName}/network/private/{networkId}' |
  '/cloud/project/{serviceName}/network/private' |
  '/cloud/project/{serviceName}/ip' |
  '/cloud/project/{serviceName}/ip/failover' |
  '/cloud/project/{serviceName}/ip/failover/{id}' |
  '/cloud/project/{serviceName}/storage/{containerId}' |
  '/cloud/project/{serviceName}/storage' |
  '/cloud/project/{serviceName}/storage/access' |
  '/cloud/project/{serviceName}/image/{imageId}' |
  '/cloud/project/{serviceName}/image' |
  '/cloud/project/{serviceName}/serviceInfos' |
  '/cloud/project/{serviceName}/operation/{operationId}' |
  '/cloud/project/{serviceName}/operation' |
  '/cloud/project/{serviceName}/quota' |
  '/cloud/project/{serviceName}/kube/{kubeId}/node' |
  '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}' |
  '/cloud/project/{serviceName}/kube/{kubeId}' |
  '/cloud/project/{serviceName}/kube/regions' |
  '/cloud/project/{serviceName}/kube' |
  '/cloud/project/{serviceName}/containerRegistry' |
  '/cloud/project/{serviceName}/containerRegistry/{registryID}' |
  '/cloud/project/{serviceName}/containerRegistry/{registryID}/users' |
  '/cloud/project/{serviceName}/stack' |
  '/cloud/project/{serviceName}/stack/{stackId}' |
  '/cloud/project' |
  '/cloud' |
  '/cloud/price' |
  '/cloud/createProjectInfo' |
  '/cloud/agreements';

type PathsCloudPUT = '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos' |
  '/cloud/{serviceName}/pca/{pcaServiceName}' |
  '/cloud/project/{serviceName}' |
  '/cloud/project/{serviceName}/migration/{migrationId}' |
  '/cloud/project/{serviceName}/instance/{instanceId}' |
  '/cloud/project/{serviceName}/alerting/{id}' |
  '/cloud/project/{serviceName}/volume/{volumeId}' |
  '/cloud/project/{serviceName}/network/private/{networkId}' |
  '/cloud/project/{serviceName}/storage/{containerId}' |
  '/cloud/project/{serviceName}/serviceInfos' |
  '/cloud/project/{serviceName}/kube/{kubeId}/updatePolicy' |
  '/cloud/project/{serviceName}/kube/{kubeId}' |
  '/cloud/project/{serviceName}/containerRegistry/{registryID}';

type PathsCloudPOST = '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore' |
  '/cloud/{serviceName}/pca/{pcaServiceName}/tasks' |
  '/cloud/createProject' |
  '/cloud/project/{serviceName}/region' |
  '/cloud/project/{serviceName}/region/{regionName}/workflow/backup' |
  '/cloud/project/{serviceName}/confirmTermination' |
  '/cloud/project/{serviceName}/acl' |
  '/cloud/project/{serviceName}/sshkey' |
  '/cloud/project/{serviceName}/instance/group' |
  '/cloud/project/{serviceName}/instance' |
  '/cloud/project/{serviceName}/instance/bulk' |
  '/cloud/project/{serviceName}/instance/{instanceId}/reboot' |
  '/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess' |
  '/cloud/project/{serviceName}/instance/{instanceId}/rescueMode' |
  '/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling' |
  '/cloud/project/{serviceName}/instance/{instanceId}/interface' |
  '/cloud/project/{serviceName}/instance/{instanceId}/stop' |
  '/cloud/project/{serviceName}/instance/{instanceId}/start' |
  '/cloud/project/{serviceName}/instance/{instanceId}/vnc' |
  '/cloud/project/{serviceName}/instance/{instanceId}/resize' |
  '/cloud/project/{serviceName}/instance/{instanceId}/reinstall' |
  '/cloud/project/{serviceName}/instance/{instanceId}/snapshot' |
  '/cloud/project/{serviceName}/instance/{instanceId}/resume' |
  '/cloud/project/{serviceName}/vrack' |
  '/cloud/project/{serviceName}/terminate' |
  '/cloud/project/{serviceName}/alerting' |
  '/cloud/project/{serviceName}/user' |
  '/cloud/project/{serviceName}/user/{userId}/regeneratePassword' |
  '/cloud/project/{serviceName}/user/{userId}/token' |
  '/cloud/project/{serviceName}/credit' |
  '/cloud/project/{serviceName}/volume/{volumeId}/upsize' |
  '/cloud/project/{serviceName}/volume/{volumeId}/detach' |
  '/cloud/project/{serviceName}/volume/{volumeId}/attach' |
  '/cloud/project/{serviceName}/volume/{volumeId}/snapshot' |
  '/cloud/project/{serviceName}/volume' |
  '/cloud/project/{serviceName}/changeContact' |
  '/cloud/project/{serviceName}/network/private/{networkId}/subnet' |
  '/cloud/project/{serviceName}/network/private/{networkId}/region' |
  '/cloud/project/{serviceName}/network/private' |
  '/cloud/project/{serviceName}/ip/failover/{id}/attach' |
  '/cloud/project/{serviceName}/storage/{containerId}/publicUrl' |
  '/cloud/project/{serviceName}/storage/{containerId}/cors' |
  '/cloud/project/{serviceName}/storage/{containerId}/user' |
  '/cloud/project/{serviceName}/storage/{containerId}/static' |
  '/cloud/project/{serviceName}/storage' |
  '/cloud/project/{serviceName}/storage/access' |
  '/cloud/project/{serviceName}/cancel' |
  '/cloud/project/{serviceName}/unleash' |
  '/cloud/project/{serviceName}/kube/{kubeId}/node' |
  '/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig' |
  '/cloud/project/{serviceName}/kube/{kubeId}/update' |
  '/cloud/project/{serviceName}/kube/{kubeId}/reset' |
  '/cloud/project/{serviceName}/kube' |
  '/cloud/project/{serviceName}/openstackClient' |
  '/cloud/project/{serviceName}/containerRegistry' |
  '/cloud/project/{serviceName}/containerRegistry/{registryID}/users' |
  '/cloud/project/{serviceName}/retain' |
  '/cloud/project/{serviceName}/stack/{stackId}/client';

type PathsCloudDELETE = '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}' |
  '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}' |
  '/cloud/project/{serviceName}/snapshot/{snapshotId}' |
  '/cloud/project/{serviceName}/acl/{accountId}' |
  '/cloud/project/{serviceName}/sshkey/{keyId}' |
  '/cloud/project/{serviceName}/instance/group/{groupId}' |
  '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}' |
  '/cloud/project/{serviceName}/instance/{instanceId}' |
  '/cloud/project/{serviceName}/alerting/{id}' |
  '/cloud/project/{serviceName}/user/{userId}' |
  '/cloud/project/{serviceName}/volume/{volumeId}' |
  '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}' |
  '/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}' |
  '/cloud/project/{serviceName}/network/private/{networkId}' |
  '/cloud/project/{serviceName}/storage/{containerId}' |
  '/cloud/project/{serviceName}/storage/{containerId}/cors' |
  '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}' |
  '/cloud/project/{serviceName}/kube/{kubeId}' |
  '/cloud/project/{serviceName}/containerRegistry/{registryID}' |
  '/cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}';

export class ApiCloud extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  public get(path: '/cloud'): Promise<string[]>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  public get(path: '/cloud/{serviceName}/pca', params: {serviceName: string}): Promise<string[]>;
  /**
   * Cloud Archives Account
   * Get this object properties
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}', params: {serviceName: string, pcaServiceName: string}): Promise<pca.Account>;
  /**
   * List the pca.Billing objects
   * cloud Archives billing items
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing', params: {serviceName: string, pcaServiceName: string, billed?: boolean, date_from?: string, date_to?: string}): Promise<number[]>;
  /**
   * cloud archives billing
   * Get this object properties
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}', params: {serviceName: string, pcaServiceName: string, billingId: string}): Promise<pca.Billing>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos', params: {serviceName: string, pcaServiceName: string}): Promise<services.Service>;
  /**
   * List the pca.Session objects
   * cloud archives sessions for account
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions', params: {serviceName: string, pcaServiceName: string, name?: string}): Promise<string[]>;
  /**
   * cloud archives sessions
   * Get this object properties
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', params: {serviceName: string, pcaServiceName: string, sessionId: string}): Promise<pca.Session>;
  /**
   * List the pca.File objects
   * cloud archives files in session
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files', params: {serviceName: string, pcaServiceName: string, sessionId: string, name?: string}): Promise<string[]>;
  /**
   * cloud archives files
   * Get this object properties
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}', params: {serviceName: string, pcaServiceName: string, sessionId: string, fileId: string}): Promise<pca.File>;
  /**
   * List the pca.Task objects
   * cloud archives tasks for account
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks', params: {serviceName: string, pcaServiceName: string, function_?: OVH.cloud.pca.FunctionTypeEnum, status?: OVH.cloud.pca.TaskStateEnum, todoDate_from?: string, todoDate_to?: string}): Promise<string[]>;
  /**
   * cloud archives tasks
   * Get this object properties
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}', params: {serviceName: string, pcaServiceName: string, taskId: string}): Promise<pca.Task>;
  /**
   * usage operations
   * View account current total sessions usage (bytes)
   */
  public get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/usage', params: {serviceName: string, pcaServiceName: string}): Promise<number>;
  /**
   * Get agreements related to a product
   * Get agreements related to a product
   */
  public get(path: '/cloud/agreements', params: {product: OVH.cloud.project.ProductNameEnum}): Promise<cloud.project.ProductAgreements>;
  /**
   * Get information about a cloud project creation
   * Get information about a cloud project creation
   */
  public get(path: '/cloud/createProjectInfo', params: {voucher?: string}): Promise<cloud.project.NewProjectInfo>;
  /**
   * Missing description
   * Get all cloud pending orders
   */
  public get(path: '/cloud/order', params: {planCode?: string}): Promise<cloud.order.Order[]>;
  /**
   * Get services prices
   * Get services prices
   */
  public get(path: '/cloud/price', params: {flavorId?: string, region?: string}): Promise<cloud.Price>;
  /**
   * Operations about the PUBLICCLOUD service
   * List available services
   */
  public get(path: '/cloud/project'): Promise<string[]>;
  /**
   * Project
   * Get this object properties
   */
  public get(path: '/cloud/project/{serviceName}', params: {serviceName: string}): Promise<cloud.Project>;
  /**
   * List the cloud.Acl objects
   * Get ACL on your cloud project
   */
  public get(path: '/cloud/project/{serviceName}/acl', params: {serviceName: string, type?: OVH.cloud.AclTypeEnum}): Promise<string[]>;
  /**
   * Cloud ACL
   * Get this object properties
   */
  public get(path: '/cloud/project/{serviceName}/acl/{accountId}', params: {serviceName: string, accountId: string}): Promise<cloud.Acl>;
  /**
   * List the cloud.Alerting objects
   * Manage alerts on your consumption
   */
  public get(path: '/cloud/project/{serviceName}/alerting', params: {serviceName: string}): Promise<string[]>;
  /**
   * Cloud alerting consumption
   * Get this object properties
   */
  public get(path: '/cloud/project/{serviceName}/alerting/{id}', params: {serviceName: string, id: string}): Promise<cloud.Alerting>;
  /**
   * List the cloud.AlertingAlert objects
   * See alerts
   */
  public get(path: '/cloud/project/{serviceName}/alerting/{id}/alert', params: {serviceName: string, id: string}): Promise<number[]>;
  /**
   * Cloud alert on your consumption
   * Get this object properties
   */
  public get(path: '/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}', params: {serviceName: string, id: string, alertId: string}): Promise<cloud.AlertingAlert>;
  /**
   * bill operations
   * Get your project bills
   */
  public get(path: '/cloud/project/{serviceName}/bill', params: {serviceName: string, from: string, to: string}): Promise<cloud.project.Bill[]>;
  /**
   * consumption operations
   * Get your project consumption
   */
  public get(path: '/cloud/project/{serviceName}/consumption', params: {serviceName: string, from: string, to: string}): Promise<cloud.project.ProjectUsage>;
  /**
   * Manage registries
   * List registries of the project
   */
  public get(path: '/cloud/project/{serviceName}/containerRegistry', params: {serviceName: string}): Promise<cloud.containerRegistry.registry.Registry[]>;
  /**
   * Manage a Docker registry
   * Get the registry information
   */
  public get(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}', params: {registryID: string, serviceName: string}): Promise<cloud.containerRegistry.registry.Registry>;
  /**
   * Manage users
   * List registry user
   */
  public get(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users', params: {registryID: string, serviceName: string}): Promise<cloud.containerRegistry.user.User[]>;
  /**
   * List the cloud.Credit objects
   * Get your credit
   */
  public get(path: '/cloud/project/{serviceName}/credit', params: {serviceName: string}): Promise<number[]>;
  /**
   * Cloud credit
   * Get this object properties
   */
  public get(path: '/cloud/project/{serviceName}/credit/{id}', params: {serviceName: string, id: string}): Promise<cloud.Credit>;
  /**
   * Missing description
   * Get flavors
   */
  public get(path: '/cloud/project/{serviceName}/flavor', params: {serviceName: string, region?: string}): Promise<cloud.flavor.Flavor[]>;
  /**
   * Missing description
   * Get flavor
   */
  public get(path: '/cloud/project/{serviceName}/flavor/{flavorId}', params: {flavorId: string, serviceName: string}): Promise<cloud.flavor.Flavor>;
  /**
   * Missing description
   * Get your consumption forecast
   */
  public get(path: '/cloud/project/{serviceName}/forecast', params: {serviceName: string, toDate: string}): Promise<cloud.forecast.ProjectForecast>;
  /**
   * Missing description
   * Get images
   */
  public get(path: '/cloud/project/{serviceName}/image', params: {serviceName: string, flavorType?: string, osType?: OVH.cloud.image.OSTypeEnum, region?: string}): Promise<cloud.image.Image[]>;
  /**
   * Missing description
   * Get image
   */
  public get(path: '/cloud/project/{serviceName}/image/{imageId}', params: {imageId: string, serviceName: string}): Promise<cloud.image.Image>;
  /**
   * Missing description
   * Get instances
   */
  public get(path: '/cloud/project/{serviceName}/instance', params: {serviceName: string, region?: string}): Promise<cloud.instance.Instance[]>;
  /**
   * Missing description
   * Get instance
   */
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}', params: {instanceId: string, serviceName: string}): Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Get interfaces
   */
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface', params: {instanceId: string, serviceName: string}): Promise<cloud.instanceInterface.Interface[]>;
  /**
   * Missing description
   * Get interface
   */
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}', params: {instanceId: string, interfaceId: string, serviceName: string}): Promise<cloud.instanceInterface.Interface>;
  /**
   * Missing description
   * Return many statistics about the virtual machine for a given period
   */
  public get(path: '/cloud/project/{serviceName}/instance/{instanceId}/monitoring', params: {instanceId: string, serviceName: string, period: OVH.cloud.instance.MetricsPeriod, type: OVH.cloud.instance.MetricsType}): Promise<cloud.instance.InstanceMetrics>;
  /**
   * Missing description
   * Get the detail of a group
   */
  public get(path: '/cloud/project/{serviceName}/instance/group', params: {serviceName: string, region?: string}): Promise<cloud.instancegroup.InstanceGroup[]>;
  /**
   * Missing description
   * Get all groups
   */
  public get(path: '/cloud/project/{serviceName}/instance/group/{groupId}', params: {groupId: string, serviceName: string, region?: string}): Promise<cloud.instancegroup.InstanceGroup>;
  /**
   * Missing description
   * Get ips
   */
  public get(path: '/cloud/project/{serviceName}/ip', params: {serviceName: string}): Promise<cloud.ip.CloudIp[]>;
  /**
   * Missing description
   * Get failover ips
   */
  public get(path: '/cloud/project/{serviceName}/ip/failover', params: {serviceName: string}): Promise<cloud.ip.FailoverIp[]>;
  /**
   * Missing description
   * Get failover ip
   */
  public get(path: '/cloud/project/{serviceName}/ip/failover/{id}', params: {id: string, serviceName: string}): Promise<cloud.ip.FailoverIp>;
  /**
   * Manage your clusters
   * List your managed Kubernetes clusters
   */
  public get(path: '/cloud/project/{serviceName}/kube', params: {serviceName: string}): Promise<string[]>;
  /**
   * Manage your cluster
   * Get information about your managed Kubernetes cluster
   */
  public get(path: '/cloud/project/{serviceName}/kube/{kubeId}', params: {serviceName: string, kubeId: string}): Promise<cloud.kube.Cluster>;
  /**
   * Manage your nodes
   * List your nodes
   */
  public get(path: '/cloud/project/{serviceName}/kube/{kubeId}/node', params: {serviceName: string, kubeId: string}): Promise<cloud.kube.Node[]>;
  /**
   * Manage a single node on your cluster
   * Get information on a specific node on your cluster
   */
  public get(path: '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}', params: {serviceName: string, nodeId: string, kubeId: string}): Promise<cloud.kube.Node>;
  /**
   * List Kubernetes available regions
   * List Kubernetes available regions
   */
  public get(path: '/cloud/project/{serviceName}/kube/regions', params: {serviceName: string}): Promise<cloud.kube.Region[]>;
  /**
   * Missing description
   * Get planned migrations
   */
  public get(path: '/cloud/project/{serviceName}/migration', params: {serviceName: string}): Promise<cloud.migration.Migration[]>;
  /**
   * Missing description
   * Get planned migration
   */
  public get(path: '/cloud/project/{serviceName}/migration/{migrationId}', params: {migrationId: string, serviceName: string}): Promise<cloud.migration.Migration>;
  /**
   * Missing description
   * Get private networks
   */
  public get(path: '/cloud/project/{serviceName}/network/private', params: {serviceName: string}): Promise<cloud.network.Network[]>;
  /**
   * Missing description
   * Get private network
   */
  public get(path: '/cloud/project/{serviceName}/network/private/{networkId}', params: {networkId: string, serviceName: string}): Promise<cloud.network.Network>;
  /**
   * Missing description
   * Get network subnets
   */
  public get(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet', params: {networkId: string, serviceName: string}): Promise<cloud.network.Subnet[]>;
  /**
   * Missing description
   * Get public networks
   */
  public get(path: '/cloud/project/{serviceName}/network/public', params: {serviceName: string}): Promise<cloud.network.Network[]>;
  /**
   * Manage the operations on your Cloud Project
   * List your operations
   */
  public get(path: '/cloud/project/{serviceName}/operation', params: {serviceName: string}): Promise<cloud.Operation[]>;
  /**
   * Manage one of your operations
   * Get information about one operation
   */
  public get(path: '/cloud/project/{serviceName}/operation/{operationId}', params: {operationId: string, serviceName: string}): Promise<cloud.Operation>;
  /**
   * Missing description
   * Get project quotas
   */
  public get(path: '/cloud/project/{serviceName}/quota', params: {serviceName: string}): Promise<cloud.quota.Quotas[]>;
  /**
   * Manage your regions
   * List your regions
   */
  public get(path: '/cloud/project/{serviceName}/region', params: {serviceName: string}): Promise<string[]>;
  /**
   * Manage one of your region
   * Get information about your region
   */
  public get(path: '/cloud/project/{serviceName}/region/{regionName}', params: {regionName: string, serviceName: string}): Promise<cloud.Region>;
  /**
   * Manage your automated backups
   * List your automated backups
   */
  public get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup', params: {regionName: string, serviceName: string}): Promise<cloud.Backup[]>;
  /**
   * Manage a backup workflow process
   * Get details about a backup workflow process
   */
  public get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}', params: {backupWorkflowId: string, regionName: string, serviceName: string}): Promise<cloud.Backup>;
  /**
   * Manage the regions you can add on your project
   * List the regions on which you can ask an access to
   */
  public get(path: '/cloud/project/{serviceName}/regionAvailable', params: {serviceName: string}): Promise<cloud.AvailableRegion[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/cloud/project/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Missing description
   * Get snapshots
   */
  public get(path: '/cloud/project/{serviceName}/snapshot', params: {serviceName: string, flavorType?: string, region?: string}): Promise<cloud.image.Image[]>;
  /**
   * Missing description
   * Get snapshot details
   */
  public get(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}', params: {serviceName: string, snapshotId: string}): Promise<cloud.image.Image>;
  /**
   * Missing description
   * Get SSH keys
   */
  public get(path: '/cloud/project/{serviceName}/sshkey', params: {serviceName: string, region?: string}): Promise<cloud.sshkey.SshKey[]>;
  /**
   * Missing description
   * Get SSH key
   */
  public get(path: '/cloud/project/{serviceName}/sshkey/{keyId}', params: {keyId: string, serviceName: string}): Promise<cloud.sshkey.SshKeyDetail>;
  /**
   * Missing description
   * Get stacks
   */
  public get(path: '/cloud/project/{serviceName}/stack', params: {serviceName: string}): Promise<cloud.stack.Stack[]>;
  /**
   * Missing description
   * Get stack
   */
  public get(path: '/cloud/project/{serviceName}/stack/{stackId}', params: {serviceName: string, stackId: string}): Promise<cloud.stack.Stack>;
  /**
   * Missing description
   * Get storage containers
   */
  public get(path: '/cloud/project/{serviceName}/storage', params: {serviceName: string}): Promise<cloud.storage.Container[]>;
  /**
   * Missing description
   * Get storage container
   */
  public get(path: '/cloud/project/{serviceName}/storage/{containerId}', params: {containerId: string, serviceName: string, noObjects?: boolean}): Promise<cloud.storage.ContainerDetail>;
  /**
   * Missing description
   * Access to storage API
   */
  public get(path: '/cloud/project/{serviceName}/storage/access', params: {serviceName: string}): Promise<cloud.storage.ContainerAccess>;
  /**
   * Missing description
   * Get current usage
   */
  public get(path: '/cloud/project/{serviceName}/usage/current', params: {serviceName: string}): Promise<cloud.usage.UsageCurrent>;
  /**
   * Missing description
   * Get usage forecast
   */
  public get(path: '/cloud/project/{serviceName}/usage/forecast', params: {serviceName: string}): Promise<cloud.usage.UsageForecast>;
  /**
   * Missing description
   * Usage information on your project
   */
  public get(path: '/cloud/project/{serviceName}/usage/history', params: {serviceName: string, from?: string, to?: string}): Promise<cloud.usage.UsageHistory[]>;
  /**
   * Missing description
   * Usage information details
   */
  public get(path: '/cloud/project/{serviceName}/usage/history/{usageId}', params: {serviceName: string, usageId: string}): Promise<cloud.usage.UsageHistoryDetail>;
  /**
   * Missing description
   * Get all users
   */
  public get(path: '/cloud/project/{serviceName}/user', params: {serviceName: string}): Promise<cloud.user.User[]>;
  /**
   * Missing description
   * Get user details
   */
  public get(path: '/cloud/project/{serviceName}/user/{userId}', params: {serviceName: string, userId: string}): Promise<cloud.user.User>;
  /**
   * Missing description
   * Get RC file of OpenStack
   */
  public get(path: '/cloud/project/{serviceName}/user/{userId}/openrc', params: {serviceName: string, userId: string, region: string, version?: OVH.cloud.user.OpenrcVersionEnum}): Promise<cloud.user.Openrc>;
  /**
   * Missing description
   * Get rclone configuration file
   */
  public get(path: '/cloud/project/{serviceName}/user/{userId}/rclone', params: {serviceName: string, userId: string, region: string}): Promise<cloud.user.Rclone>;
  /**
   * Missing description
   * Get volumes
   */
  public get(path: '/cloud/project/{serviceName}/volume', params: {serviceName: string, region?: string}): Promise<cloud.volume.Volume[]>;
  /**
   * Missing description
   * Get volume details
   */
  public get(path: '/cloud/project/{serviceName}/volume/{volumeId}', params: {serviceName: string, volumeId: string}): Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Get volume snapshots
   */
  public get(path: '/cloud/project/{serviceName}/volume/snapshot', params: {serviceName: string, region?: string}): Promise<cloud.volume.Snapshot[]>;
  /**
   * Missing description
   * Get volume snapshot details
   */
  public get(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}', params: {serviceName: string, snapshotId: string}): Promise<cloud.volume.Snapshot>;
  /**
   * Manage the vRack on your Cloud Project
   * Get the linked vRack on your project
   */
  public get(path: '/cloud/project/{serviceName}/vrack', params: {serviceName: string}): Promise<cloud.Vrack>;
  /**
   * Get services prices for a subsidiary
   * Get services prices for a subsidiary
   */
  public get(path: '/cloud/subsidiaryPrice', params: {flavorId?: string, ovhSubsidiary: OVH.nichandle.OvhSubsidiaryEnum, region?: string}): Promise<cloud.Price>;
  public get(path: PathsCloudGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Cloud Archives Account
   * Alter this object properties
   */
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}', params: {serviceName: string, pcaServiceName: string, domain?: string, host?: string, login?: string, password?: string, sshkey?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos', params: {serviceName: string, pcaServiceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * cloud archives sessions
   * Alter this object properties
   */
  public put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', params: {serviceName: string, pcaServiceName: string, sessionId: string, endDate?: string, id?: string, login?: string, name?: string, size?: number, srcIp?: string, startDate?: string, state?: OVH.cloud.pca.SessionStateEnum}): Promise<void>;
  /**
   * Project
   * Alter this object properties
   */
  public put(path: '/cloud/project/{serviceName}', params: {serviceName: string, access?: OVH.cloud.AccessTypeEnum, creationDate?: string, description?: string, expiration?: string, orderId?: number, planCode?: string, project_id?: string, status?: OVH.cloud.project.ProjectStatus, unleash?: boolean}): Promise<void>;
  /**
   * Cloud alerting consumption
   * Alter this object properties
   */
  public put(path: '/cloud/project/{serviceName}/alerting/{id}', params: {serviceName: string, id: string, creationDate?: string, delay?: OVH.cloud.AlertingDelayEnum, email?: string, formattedMonthlyThreshold?: OVH.order.Price, monthlyThreshold?: number}): Promise<void>;
  /**
   * Manage a Docker registry
   * Update the registry
   */
  public put(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}', params: {registryID: string, serviceName: string, name: string}): Promise<void>;
  /**
   * Missing description
   * Alter an instance
   */
  public put(path: '/cloud/project/{serviceName}/instance/{instanceId}', params: {instanceId: string, serviceName: string, instanceName: string}): Promise<void>;
  /**
   * Manage your cluster
   * Update information about your managed Kubernetes cluster
   */
  public put(path: '/cloud/project/{serviceName}/kube/{kubeId}', params: {serviceName: string, kubeId: string, name: string}): Promise<void>;
  /**
   * Manage the update policy of your cluster
   * Change the update policy of your cluster
   */
  public put(path: '/cloud/project/{serviceName}/kube/{kubeId}/updatePolicy', params: {serviceName: string, kubeId: string, updatePolicy: OVH.cloud.kube.UpdatePolicy}): Promise<void>;
  /**
   * Missing description
   * Update planned migration
   */
  public put(path: '/cloud/project/{serviceName}/migration/{migrationId}', params: {migrationId: string, serviceName: string, date: string}): Promise<cloud.migration.Migration>;
  /**
   * Missing description
   * Rename private network
   */
  public put(path: '/cloud/project/{serviceName}/network/private/{networkId}', params: {networkId: string, serviceName: string, name: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/cloud/project/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Missing description
   * Update your storage container
   */
  public put(path: '/cloud/project/{serviceName}/storage/{containerId}', params: {containerId: string, serviceName: string, containerType?: OVH.cloud.storage.TypeEnum}): Promise<void>;
  /**
   * Missing description
   * Update a volume
   */
  public put(path: '/cloud/project/{serviceName}/volume/{volumeId}', params: {serviceName: string, volumeId: string, description?: string, name?: string}): Promise<cloud.volume.Volume>;
  public put(path: PathsCloudPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * restore operations
   * Create a restore task for session
   */
  public post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore', params: {serviceName: string, pcaServiceName: string, sessionId: string}): Promise<pca.Task>;
  /**
   * List the pca.Task objects
   * Create a cloud archives task
   */
  public post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks', params: {serviceName: string, pcaServiceName: string, fileIds: string[], sessionId: string, taskFunction: OVH.cloud.pca.TaskTypeEnum}): Promise<pca.Task>;
  /**
   * Start a new cloud project
   * Start a new cloud project
   */
  public post(path: '/cloud/createProject', params: {credit?: number, description?: string, voucher?: string}): Promise<cloud.project.NewProject>;
  /**
   * List the cloud.Acl objects
   * Create new ACL
   */
  public post(path: '/cloud/project/{serviceName}/acl', params: {serviceName: string, accountId: string, type: OVH.cloud.AclTypeEnum}): Promise<cloud.Acl>;
  /**
   * List the cloud.Alerting objects
   * Add new alert
   */
  public post(path: '/cloud/project/{serviceName}/alerting', params: {serviceName: string, delay: OVH.cloud.AlertingDelayEnum, email: string, monthlyThreshold: number}): Promise<cloud.Alerting>;
  /**
   * cancel operations
   * Cancel project creation
   */
  public post(path: '/cloud/project/{serviceName}/cancel', params: {serviceName: string}): Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/cloud/project/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/cloud/project/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * Manage registries
   * Create a new registry
   */
  public post(path: '/cloud/project/{serviceName}/containerRegistry', params: {serviceName: string, name: string, region: OVH.cloud.containerRegistry.registry.RegionEnum}): Promise<cloud.containerRegistry.registry.Registry>;
  /**
   * Manage users
   * Create a new registry user
   */
  public post(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users', params: {registryID: string, serviceName: string, email?: string, login?: string}): Promise<cloud.containerRegistry.user.User>;
  /**
   * List the cloud.Credit objects
   * Add credit to your project
   */
  public post(path: '/cloud/project/{serviceName}/credit', params: {serviceName: string, code: string}): Promise<void>;
  /**
   * Missing description
   * Create a new instance
   */
  public post(path: '/cloud/project/{serviceName}/instance', params: {serviceName: string, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: OVH.cloud.instance.NetworkParams[], region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Active monthly billing on instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling', params: {instanceId: string, serviceName: string}): Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Return initial credentials of applications installed from public image
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess', params: {instanceId: string, serviceName: string}): Promise<cloud.instance.ApplicationAccess>;
  /**
   * Missing description
   * Create interface on an instance and attached it to a network
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface', params: {instanceId: string, serviceName: string, ip?: string, networkId: string}): Promise<cloud.instanceInterface.Interface>;
  /**
   * Missing description
   * Reboot an instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reboot', params: {instanceId: string, serviceName: string, type: OVH.cloud.instance.RebootTypeEnum}): Promise<void>;
  /**
   * Missing description
   * Reinstall an instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reinstall', params: {instanceId: string, serviceName: string, imageId: string}): Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Enable or disable rescue mode
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/rescueMode', params: {instanceId: string, serviceName: string, imageId?: string, rescue: boolean}): Promise<cloud.instance.RescueAdminPassword>;
  /**
   * Missing description
   * Migrate your instance to another flavor
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resize', params: {instanceId: string, serviceName: string, flavorId: string}): Promise<cloud.instance.InstanceDetail>;
  /**
   * Missing description
   * Resume a suspended instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resume', params: {instanceId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Snapshot an instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/snapshot', params: {instanceId: string, serviceName: string, snapshotName: string}): Promise<void>;
  /**
   * Missing description
   * Start an instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/start', params: {instanceId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Stop an instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/stop', params: {instanceId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Get VNC access to your instance
   */
  public post(path: '/cloud/project/{serviceName}/instance/{instanceId}/vnc', params: {instanceId: string, serviceName: string}): Promise<cloud.instance.InstanceVnc>;
  /**
   * Missing description
   * Create multiple instances
   */
  public post(path: '/cloud/project/{serviceName}/instance/bulk', params: {serviceName: string, flavorId: string, groupId?: string, imageId?: string, monthlyBilling?: boolean, name: string, networks?: OVH.cloud.instance.NetworkBulkParams[], number: number, region: string, sshKeyId?: string, userData?: string, volumeId?: string}): Promise<cloud.instance.Instance[]>;
  /**
   * Missing description
   * Create a group
   */
  public post(path: '/cloud/project/{serviceName}/instance/group', params: {serviceName: string, name: string, region: string, type: OVH.cloud.instancegroup.InstanceGroupTypeEnum}): Promise<cloud.instancegroup.InstanceGroup>;
  /**
   * Missing description
   * Attach failover ip to an instance
   */
  public post(path: '/cloud/project/{serviceName}/ip/failover/{id}/attach', params: {id: string, serviceName: string, instanceId: string}): Promise<cloud.ip.FailoverIp>;
  /**
   * Manage your clusters
   * Create a new managed Kubernetes cluster
   */
  public post(path: '/cloud/project/{serviceName}/kube', params: {serviceName: string, name?: string, region: OVH.cloud.kube.Region, version?: OVH.cloud.kube.Version}): Promise<cloud.kube.Cluster>;
  /**
   * Get your cluster configuration
   * Generate kubeconfig file
   */
  public post(path: '/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig', params: {serviceName: string, kubeId: string}): Promise<cloud.kube.Kubeconfig>;
  /**
   * Manage your nodes
   * Deploy a node for your cluster
   */
  public post(path: '/cloud/project/{serviceName}/kube/{kubeId}/node', params: {serviceName: string, kubeId: string, flavorName: string, name?: string}): Promise<cloud.kube.Node>;
  /**
   * Reset your cluster
   * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
   */
  public post(path: '/cloud/project/{serviceName}/kube/{kubeId}/reset', params: {serviceName: string, kubeId: string, version?: OVH.cloud.kube.Version, workerNodesPolicy?: OVH.cloud.kube.ResetWorkerNodesPolicy}): Promise<void>;
  /**
   * Update cluster
   * Update cluster to the latest patch version
   */
  public post(path: '/cloud/project/{serviceName}/kube/{kubeId}/update', params: {serviceName: string, kubeId: string}): Promise<void>;
  /**
   * Missing description
   * Create a new network
   */
  public post(path: '/cloud/project/{serviceName}/network/private', params: {serviceName: string, name: string, regions?: string[], vlanId?: number}): Promise<cloud.network.Network>;
  /**
   * Missing description
   * Activate private network in a new region
   */
  public post(path: '/cloud/project/{serviceName}/network/private/{networkId}/region', params: {networkId: string, serviceName: string, region: string}): Promise<cloud.network.Network>;
  /**
   * Missing description
   * Create a new network subnet
   */
  public post(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet', params: {networkId: string, serviceName: string, dhcp: boolean, end: string, network: string, noGateway: boolean, region: string, start: string}): Promise<cloud.network.Subnet>;
  /**
   * Missing description
   * Get OVH playground session to use the openstack terminal
   */
  public post(path: '/cloud/project/{serviceName}/openstackClient', params: {serviceName: string}): Promise<cloud.openstackClient.Session>;
  /**
   * Manage your regions
   * Request access to a region
   */
  public post(path: '/cloud/project/{serviceName}/region', params: {serviceName: string, region: string}): Promise<cloud.Region>;
  /**
   * Manage your automated backups
   * Create a new automated backup
   */
  public post(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup', params: {regionName: string, serviceName: string, cron: string, instanceId: string, maxExecutionCount?: number, name: string, rotation: number}): Promise<cloud.Backup>;
  /**
   * retain operations
   * Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call
   */
  public post(path: '/cloud/project/{serviceName}/retain', params: {serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Create SSH key
   */
  public post(path: '/cloud/project/{serviceName}/sshkey', params: {serviceName: string, name: string, publicKey: string, region?: string}): Promise<cloud.sshkey.SshKeyDetail>;
  /**
   * Missing description
   * Get OVH playground session with a stack installed to use the openstack terminal
   */
  public post(path: '/cloud/project/{serviceName}/stack/{stackId}/client', params: {serviceName: string, stackId: string}): Promise<cloud.openstackClient.Session>;
  /**
   * Missing description
   * Create container
   */
  public post(path: '/cloud/project/{serviceName}/storage', params: {serviceName: string, archive: boolean, containerName: string, region: string}): Promise<cloud.storage.Container>;
  /**
   * Missing description
   * Add CORS support on your container
   */
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/cors', params: {containerId: string, serviceName: string, origin: string}): Promise<void>;
  /**
   * Missing description
   * Get a public temporary URL to access to one of your object
   */
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/publicUrl', params: {containerId: string, serviceName: string, expirationDate: string, objectName: string}): Promise<cloud.storage.ContainerObjectTempURL>;
  /**
   * Missing description
   * Deploy your container files as a static web site
   */
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/static', params: {containerId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Create openstack user with only access to this container
   */
  public post(path: '/cloud/project/{serviceName}/storage/{containerId}/user', params: {containerId: string, serviceName: string, description?: string, right: OVH.cloud.storage.RightEnum}): Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Access to storage API
   */
  public post(path: '/cloud/project/{serviceName}/storage/access', params: {serviceName: string}): Promise<cloud.storage.ContainerAccess>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/cloud/project/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * unleash operations
   * Request more quota on your /cloud project
   */
  public post(path: '/cloud/project/{serviceName}/unleash', params: {serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Create user
   */
  public post(path: '/cloud/project/{serviceName}/user', params: {serviceName: string, description?: string, role?: OVH.cloud.user.RoleEnum}): Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Regenerate user password
   */
  public post(path: '/cloud/project/{serviceName}/user/{userId}/regeneratePassword', params: {serviceName: string, userId: string}): Promise<cloud.user.UserDetail>;
  /**
   * Missing description
   * Get token for user
   */
  public post(path: '/cloud/project/{serviceName}/user/{userId}/token', params: {serviceName: string, userId: string, password: string}): Promise<cloud.authentication.Token>;
  /**
   * Missing description
   * Create a volume
   */
  public post(path: '/cloud/project/{serviceName}/volume', params: {serviceName: string, description?: string, imageId?: string, name?: string, region: string, size: number, snapshotId?: string, type: OVH.cloud.volume.VolumeTypeEnum}): Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Attach a volume on an instance
   */
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/attach', params: {serviceName: string, volumeId: string, instanceId: string}): Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Detach a volume from an instance
   */
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/detach', params: {serviceName: string, volumeId: string, instanceId: string}): Promise<cloud.volume.Volume>;
  /**
   * Missing description
   * Snapshot a volume
   */
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/snapshot', params: {serviceName: string, volumeId: string, description?: string, name?: string}): Promise<cloud.volume.Snapshot>;
  /**
   * Missing description
   * Extend a volume
   */
  public post(path: '/cloud/project/{serviceName}/volume/{volumeId}/upsize', params: {serviceName: string, volumeId: string, size: number}): Promise<cloud.volume.Volume>;
  /**
   * Manage the vRack on your Cloud Project
   * Order and attach a new vRack on your project
   */
  public post(path: '/cloud/project/{serviceName}/vrack', params: {serviceName: string}): Promise<cloud.Operation>;
  public post(path: PathsCloudPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * cloud archives sessions
   * Create a delete task for all files in session
   */
  public delete(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}', params: {serviceName: string, pcaServiceName: string, sessionId: string}): Promise<pca.Task>;
  /**
   * Cloud ACL
   * Delete ACL
   */
  public delete(path: '/cloud/project/{serviceName}/acl/{accountId}', params: {serviceName: string, accountId: string}): Promise<void>;
  /**
   * Cloud alerting consumption
   * Delete alerting
   */
  public delete(path: '/cloud/project/{serviceName}/alerting/{id}', params: {serviceName: string, id: string}): Promise<void>;
  /**
   * Manage a Docker registry
   * Delete a registry
   */
  public delete(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}', params: {registryID: string, serviceName: string}): Promise<void>;
  /**
   * Manage users
   * Delete a registry user
   */
  public delete(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}', params: {registryID: string, serviceName: string, userID: string}): Promise<void>;
  /**
   * Missing description
   * Delete an instance
   */
  public delete(path: '/cloud/project/{serviceName}/instance/{instanceId}', params: {instanceId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete an interface
   */
  public delete(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}', params: {instanceId: string, interfaceId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete a group
   */
  public delete(path: '/cloud/project/{serviceName}/instance/group/{groupId}', params: {groupId: string, serviceName: string}): Promise<void>;
  /**
   * Manage your cluster
   * Delete your managed Kubernetes cluster
   */
  public delete(path: '/cloud/project/{serviceName}/kube/{kubeId}', params: {serviceName: string, kubeId: string}): Promise<void>;
  /**
   * Manage a single node on your cluster
   * Delete a node on your cluster
   */
  public delete(path: '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}', params: {serviceName: string, nodeId: string, kubeId: string}): Promise<void>;
  /**
   * Missing description
   * Delete private network
   */
  public delete(path: '/cloud/project/{serviceName}/network/private/{networkId}', params: {networkId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete a network subnet
   */
  public delete(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}', params: {networkId: string, serviceName: string, subnetId: string}): Promise<void>;
  /**
   * Manage a backup workflow process
   * Delete a backup workflow process
   */
  public delete(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}', params: {backupWorkflowId: string, regionName: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete a snapshot
   */
  public delete(path: '/cloud/project/{serviceName}/snapshot/{snapshotId}', params: {serviceName: string, snapshotId: string}): Promise<cloud.image.Image>;
  /**
   * Missing description
   * Delete SSH key
   */
  public delete(path: '/cloud/project/{serviceName}/sshkey/{keyId}', params: {keyId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete container
   */
  public delete(path: '/cloud/project/{serviceName}/storage/{containerId}', params: {containerId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete CORS support on your container
   */
  public delete(path: '/cloud/project/{serviceName}/storage/{containerId}/cors', params: {containerId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete user
   */
  public delete(path: '/cloud/project/{serviceName}/user/{userId}', params: {serviceName: string, userId: string}): Promise<void>;
  /**
   * Missing description
   * Delete a volume
   */
  public delete(path: '/cloud/project/{serviceName}/volume/{volumeId}', params: {serviceName: string, volumeId: string}): Promise<void>;
  /**
   * Missing description
   * Delete a volume snapshot
   */
  public delete(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}', params: {serviceName: string, snapshotId: string}): Promise<void>;
  public delete(path: PathsCloudDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}