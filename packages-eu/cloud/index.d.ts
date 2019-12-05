import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /cloud Models
 */
export declare namespace cloud {
    type AccessTypeEnum = "full" | "restricted";
    interface Acl {
        accountId: string;
        type: cloud.AclTypeEnum;
    }
    type AclTypeEnum = "readOnly" | "readWrite";
    interface Alerting {
        creationDate: string;
        delay: cloud.AlertingDelayEnum;
        email: string;
        formattedMonthlyThreshold: orderPrice;
        id: string;
        monthlyThreshold: number;
    }
    interface AlertingAlert {
        alertDate: string;
        alertId: number;
        emails: string[];
    }
    type AlertingDelayEnum = 10800 | 172800 | 21600 | 259200 | 3600 | 43200 | 604800 | 86400;
    interface ArchiveStoragePrice {
        monthlyPrice: orderPrice;
        region: string;
    }
    interface AvailableRegion {
        continentCode: cloud.RegionContinent;
        datacenterLocation: string;
        name: string;
    }
    interface Backup {
        backupName: string;
        createdAt: string;
        cron: string;
        executions?: cloud.Execution[];
        id: string;
        instanceId: string;
        name: string;
    }
    interface BandwidthStoragePrice {
        price: orderPrice;
        region: string;
    }
    interface Component {
        name: string;
        status: cloud.ServiceStatus;
    }
    interface Credit {
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
    interface Execution {
        executedAt: string;
        state: cloud.ExecutionState;
        stateInfo: string;
    }
    type ExecutionState = "IDLE" | "RUNNING" | "SUCCESS" | "ERROR" | "PAUSED";
    interface FlavorPrice {
        flavorId: string;
        flavorName: string;
        monthlyPrice?: orderPrice;
        price: orderPrice;
        region: string;
    }
    type IpCountryEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us";
    interface Lab {
        id: string;
        name: string;
        status: cloud.LabStatus;
    }
    interface LabAgreements {
        accepted: number[];
        toAccept: number[];
    }
    type LabStatus = "open" | "activating" | "activated" | "closed";
    interface Operation {
        action: string;
        completedAt?: string;
        createdAt: string;
        id: string;
        progress: number;
        regions?: string[];
        startedAt?: string;
        status: cloud.OperationStatus;
    }
    type OperationStatus = "created" | "in-progress" | "completed" | "in-error" | "unknown";
    interface Price {
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
    interface Project {
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
    interface ProjectActivateMonthlyBillingCreation {
        instances: cloud.instance.MonthlyInstanceBulkParams[];
    }
    interface ProjectContainerRegistryCreation {
        name: string;
        region: string;
    }
    interface ProjectContainerRegistryUpdate {
        name: string;
    }
    interface ProjectContainerRegistryUsersCreation {
        email?: string;
        login?: string;
    }
    interface ProjectInstanceBulkCreation {
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
    interface ProjectInstanceCreation {
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
    interface ProjectInstanceGroupCreation {
        name: string;
        region: string;
        type: cloud.instancegroup.InstanceGroupTypeEnum;
    }
    interface ProjectInstanceInterfaceCreation {
        ip?: string;
        networkId: string;
    }
    interface ProjectInstanceRebootCreation {
        type: cloud.instance.RebootTypeEnum;
    }
    interface ProjectInstanceReinstallCreation {
        imageId: string;
    }
    interface ProjectInstanceRescueModeCreation {
        imageId?: string;
        rescue: boolean;
    }
    interface ProjectInstanceResizeCreation {
        flavorId: string;
    }
    interface ProjectInstanceSnapshotCreation {
        snapshotName: string;
    }
    interface ProjectInstanceUpdate {
        instanceName: string;
    }
    interface ProjectIpFailoverAttachCreation {
        instanceId: string;
    }
    interface ProjectKubeCreation {
        name?: string;
        region: cloud.kube.Region;
        version?: cloud.kube.Version;
    }
    interface ProjectKubeNodeCreation {
        flavorName: string;
        name?: string;
    }
    interface ProjectKubeResetCreation {
        version?: cloud.kube.Version;
        workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicy;
    }
    interface ProjectKubeUpdate {
        name: string;
    }
    interface ProjectKubeUpdateCreation {
        strategy?: cloud.kube.UpdateStrategy;
    }
    interface ProjectKubeUpdatePolicyUpdate {
        updatePolicy: cloud.kube.UpdatePolicy;
    }
    interface ProjectMigrationUpdate {
        date: string;
    }
    interface ProjectNetworkPrivateCreation {
        name: string;
        regions?: string[];
        vlanId?: number;
    }
    interface ProjectNetworkPrivateRegionCreation {
        region: string;
    }
    interface ProjectNetworkPrivateSubnetCreation {
        dhcp: boolean;
        end: string;
        network: string;
        noGateway: boolean;
        region: string;
        start: string;
    }
    interface ProjectNetworkPrivateSubnetUpdate {
        dhcp: boolean;
        disableGateway: boolean;
        gatewayIp?: string;
    }
    interface ProjectNetworkPrivateUpdate {
        name: string;
    }
    interface ProjectRegionCreation {
        region: string;
    }
    interface ProjectRegionQuotaCreation {
        name: string;
    }
    interface ProjectRegionWorkflowBackupCreation {
        cron: string;
        instanceId: string;
        maxExecutionCount?: number;
        name: string;
        rotation: number;
    }
    interface ProjectSshkeyCreation {
        name: string;
        publicKey: string;
        region?: string;
    }
    interface ProjectStorageCorsCreation {
        origin: string;
    }
    interface ProjectStorageCreation {
        archive: boolean;
        containerName: string;
        region: string;
    }
    interface ProjectStoragePublicUrlCreation {
        expirationDate: string;
        objectName: string;
    }
    interface ProjectStorageUpdate {
        containerType?: cloud.storage.TypeEnum;
    }
    interface ProjectStorageUserCreation {
        description?: string;
        right: cloud.storage.RightEnum;
    }
    interface ProjectUserCreation {
        description?: string;
        role?: cloud.user.RoleEnum;
        roles?: cloud.user.RoleEnum[];
    }
    interface ProjectUserRoleCreation {
        roleId: string;
    }
    interface ProjectUserRoleUpdate {
        rolesIds: string[];
    }
    interface ProjectUserTokenCreation {
        password: string;
    }
    interface ProjectVolumeAttachCreation {
        instanceId: string;
    }
    interface ProjectVolumeCreation {
        description?: string;
        imageId?: string;
        name?: string;
        region: string;
        size: number;
        snapshotId?: string;
        type: cloud.volume.VolumeTypeEnum;
    }
    interface ProjectVolumeDetachCreation {
        instanceId: string;
    }
    interface ProjectVolumeSnapshotCreation {
        description?: string;
        name?: string;
    }
    interface ProjectVolumeUpdate {
        description?: string;
        name?: string;
    }
    interface ProjectVolumeUpsizeCreation {
        size: number;
    }
    interface Region {
        continentCode: cloud.RegionContinent;
        datacenterLocation: string;
        ipCountries: cloud.IpCountryEnum[];
        name: string;
        services: cloud.Component[];
        status: cloud.RegionStatus;
    }
    type RegionContinent = "EU" | "NA" | "US" | "ASIA";
    type RegionStatus = "UP" | "DOWN" | "MAINTENANCE";
    type ServiceStatus = "UP" | "DOWN";
    interface SnapshotPrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    interface StoragePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
    }
    interface VolumePrice {
        monthlyPrice: orderPrice;
        price: orderPrice;
        region: string;
        volumeName: string;
    }
    interface Vrack {
        description: string;
        id: string;
        name: string;
    }
    namespace authentication {
        interface Catalog {
            endpoints: cloud.authentication.Endpoint[];
            id: string;
            type: string;
        }
        interface Domain {
            name: string;
        }
        interface Endpoint {
            id: string;
            interface: string;
            legacy_endpoint_id: string;
            region_id: string;
            service_id: string;
            url: string;
        }
        interface OpenstackToken {
            catalog: cloud.authentication.Catalog[];
            expires_at: string;
            issued_at: string;
            methods: string[];
            project: cloud.authentication.TokenProject;
            roles: cloud.authentication.Role[];
            user: cloud.authentication.UserToken;
        }
        interface Role {
            id: string;
            name: string;
        }
        interface Token {
            'X-Auth-Token': string;
            token: cloud.authentication.OpenstackToken;
        }
        interface TokenProject {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
        interface UserToken {
            domain: cloud.authentication.Domain;
            id: string;
            name: string;
        }
    }
    namespace billingView {
        interface BandwidthInstance {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        interface BandwidthStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        interface HourlyInstance {
            details: cloud.billingView.HourlyInstanceDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        interface HourlyInstanceBandwidth {
            incomingBandwidth?: cloud.billingView.BandwidthInstance;
            outgoingBandwidth?: cloud.billingView.BandwidthInstance;
            region: string;
            totalPrice: number;
        }
        interface HourlyInstanceDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        interface HourlyInstanceOption {
            details: cloud.billingView.HourlyInstanceOptionDetail[];
            quantity: cloud.billingView.Quantity;
            reference: string;
            region: string;
            totalPrice: number;
        }
        interface HourlyInstanceOptionDetail {
            instanceId: string;
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        interface HourlyResources {
            instance: cloud.billingView.HourlyInstance[];
            instanceBandwidth: cloud.billingView.HourlyInstanceBandwidth[];
            instanceOption: cloud.billingView.HourlyInstanceOption[];
            snapshot: cloud.billingView.HourlySnapshot[];
            storage: cloud.billingView.HourlyStorage[];
            volume: cloud.billingView.HourlyVolume[];
        }
        interface HourlySnapshot {
            instance?: cloud.billingView.InstanceSnapshot;
            region: string;
            totalPrice: number;
            volume?: cloud.billingView.VolumeSnapshot;
        }
        interface HourlyStorage {
            incomingBandwidth?: cloud.billingView.BandwidthStorage;
            outgoingBandwidth?: cloud.billingView.BandwidthStorage;
            region: string;
            stored?: cloud.billingView.StoredStorage;
            totalPrice: number;
            type: cloud.billingView.StorageTypeEnum;
        }
        interface HourlyVolume {
            details: cloud.billingView.HourlyVolumeDetail[];
            quantity: cloud.billingView.Quantity;
            region: string;
            totalPrice: number;
            type: string;
        }
        interface HourlyVolumeDetail {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
            volumeId: string;
        }
        interface InstanceSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        interface MonthlyInstance {
            details: cloud.billingView.MonthlyInstanceDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        interface MonthlyInstanceDetail {
            activation: string;
            instanceId: string;
            totalPrice: number;
        }
        interface MonthlyInstanceOption {
            details: cloud.billingView.MonthlyInstanceOptionDetail[];
            reference: string;
            region: string;
            totalPrice: number;
        }
        interface MonthlyInstanceOptionDetail {
            instanceId: string;
            totalPrice: number;
        }
        interface MonthlyResources {
            instance: cloud.billingView.MonthlyInstance[];
            instanceOption: cloud.billingView.MonthlyInstanceOption[];
        }
        interface Quantity {
            unit: cloud.billingView.UnitQuantity;
            value: number;
        }
        type StorageTypeEnum = "pcs" | "pca";
        interface StoredStorage {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
        type UnitQuantity = "GiB" | "GiBh" | "Hour";
        interface UsedCredit {
            description: string;
            id: number;
            usedAmount: number;
        }
        interface UsedCredits {
            details: cloud.billingView.UsedCredit[];
            totalCredit: number;
        }
        interface VolumeSnapshot {
            quantity: cloud.billingView.Quantity;
            totalPrice: number;
        }
    }
    namespace capabilities {
        interface Capability {
            enabled: boolean;
            name: string;
        }
    }
    namespace common {
        interface VoucherValidity {
            from?: string;
            to?: string;
        }
    }
    namespace containerRegistry {
        interface Capability {
            plans: cloud.containerRegistry.Plan[];
            regionName: string;
        }
        interface Features {
            vulnerability: boolean;
        }
        interface Limits {
            imageStorage: number;
            parallelRequest: number;
        }
        interface Plan {
            createdAt: string;
            features: cloud.containerRegistry.Features;
            id: string;
            name: string;
            registryLimits: cloud.containerRegistry.Limits;
            updatedAt: string;
        }
        interface Registry {
            createdAt: string;
            id: string;
            name: string;
            projectID: string;
            region: string;
            status: cloud.containerRegistry.StatusEnum;
            updatedAt: string;
            url: string;
            version: string;
        }
        type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING";
        interface User {
            email: string;
            id: string;
            password?: string;
            user: string;
        }
        namespace registry {
            type RegionEnum = "GRA7";
            interface Registry {
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
            type StatusEnum = "ERROR" | "READY" | "DELETED" | "SUSPENDED" | "INSTALLING" | "UPDATING" | "RESTORING" | "SUSPENDING" | "DELETING";
        }
        namespace user {
            interface User {
                email: string;
                id: string;
                password?: string;
                user: string;
            }
        }
    }
    namespace flavor {
        interface Capability {
            enabled: boolean;
            name: cloud.flavor.CapabilityNameEnum;
        }
        type CapabilityNameEnum = "resize" | "snapshot" | "volume" | "failoverip";
        interface Flavor {
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
        interface FlavorPlanCodes {
            hourly?: string;
            monthly?: string;
        }
    }
    namespace forecast {
        interface ProjectForecast {
            lastMetric: string;
            projectForecast: orderPrice;
        }
    }
    namespace image {
        interface Image {
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
        type OSTypeEnum = "linux" | "bsd" | "windows";
    }
    namespace instance {
        interface Access {
            login: string;
            password: string;
            type: string;
            url: string;
        }
        interface ApplicationAccess {
            accesses: cloud.instance.Access[];
            status: cloud.instance.ApplicationAccessStateEnum;
        }
        type ApplicationAccessStateEnum = "installing" | "ok";
        interface AutoBackup {
            cron: string;
            rotation: number;
        }
        interface Instance {
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
        interface InstanceDetail {
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
        interface InstanceMetrics {
            unit: string;
            values: cloud.instance.InstanceMetricsValue[];
        }
        interface InstanceMetricsValue {
            timestamp: number;
            value: number;
        }
        type InstanceStatusEnum = "ACTIVE" | "BUILDING" | "DELETED" | "DELETING" | "ERROR" | "HARD_REBOOT" | "PASSWORD" | "PAUSED" | "REBOOT" | "REBUILD" | "RESCUED" | "RESIZED" | "REVERT_RESIZE" | "SOFT_DELETED" | "STOPPED" | "SUSPENDED" | "UNKNOWN" | "VERIFY_RESIZE" | "MIGRATING" | "RESIZE" | "BUILD" | "SHUTOFF" | "RESCUE" | "SHELVED" | "SHELVED_OFFLOADED" | "RESCUING" | "UNRESCUING" | "SNAPSHOTTING" | "RESUMING";
        interface InstanceVnc {
            type: string;
            url: string;
        }
        interface IpAddress {
            gatewayIp?: string;
            ip: string;
            networkId: string;
            type: string;
            version: number;
        }
        type MetricsPeriod = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today";
        type MetricsType = "mem:used" | "mem:max" | "cpu:used" | "cpu:max" | "net:tx" | "net:rx";
        interface MonthlyBilling {
            since: string;
            status: cloud.instance.MonthlyBillingStatusEnum;
        }
        type MonthlyBillingStatusEnum = "activationPending" | "ok";
        interface MonthlyInstanceBulkParams {
            instanceId: string;
            region: string;
        }
        interface NetworkBulkParams {
            networkId: string;
        }
        interface NetworkParams {
            ip?: string;
            networkId: string;
        }
        type RebootTypeEnum = "soft" | "hard";
        interface RescueAdminPassword {
            adminPassword?: string;
        }
    }
    namespace instanceInterface {
        interface FixedIp {
            ip: string;
            subnetId: string;
        }
        interface Interface {
            fixedIps: cloud.instanceInterface.FixedIp[];
            id: string;
            macAddress: string;
            networkId: string;
            state: string;
            type: string;
        }
    }
    namespace instancegroup {
        interface InstanceGroup {
            id: string;
            instance_ids: string[];
            name: string;
            region: string;
            type: cloud.instancegroup.InstanceGroupTypeEnum;
        }
        type InstanceGroupTypeEnum = "affinity" | "anti-affinity";
    }
    namespace ip {
        interface CloudIp {
            id: string;
            ip?: string;
            status: cloud.ip.IpStatusEnum;
            type: string;
        }
        interface FailoverIp {
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
        type IpStatusEnum = "ok" | "operationPending";
        type IpSubTypeEnum = "cloud" | "ovh";
    }
    namespace kube {
        interface Cluster {
            controlPlaneIsUpToDate: boolean;
            createdAt: string;
            id: string;
            isUpToDate: boolean;
            name: string;
            nextUpgradeVersions?: cloud.kube.UpgradeVersion[];
            nodesUrl: string;
            region: cloud.kube.Region;
            status: cloud.kube.ClusterStatus;
            updatePolicy: string;
            updatedAt: string;
            url: string;
            version: string;
        }
        type ClusterStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "READY";
        interface Flavor {
            category: cloud.kube.FlavorCategory;
            id: string;
            name: string;
            state: cloud.kube.FlavorState;
        }
        type FlavorCategory = "c" | "g" | "t" | "b" | "r" | "i";
        type FlavorState = "available" | "unavailable";
        interface Kubeconfig {
            content: string;
        }
        interface Node {
            createdAt: string;
            flavor: string;
            id: string;
            instanceId?: string;
            isUpToDate: boolean;
            name?: string;
            projectId: string;
            status: cloud.kube.NodeStatus;
            updatedAt: string;
            version: string;
        }
        type NodeStatus = "INSTALLING" | "UPDATING" | "RESETTING" | "SUSPENDING" | "REOPENING" | "DELETING" | "SUSPENDED" | "ERROR" | "USER_ERROR" | "USER_QUOTA_ERROR" | "USER_NODE_NOT_FOUND_ERROR" | "USER_NODE_SUSPENDED_SERVICE" | "READY";
        type Region = "GRA5" | "GRA7" | "BHS5";
        type ResetWorkerNodesPolicy = "reinstall" | "delete";
        type UpdatePolicy = "ALWAYS_UPDATE" | "MINIMAL_DOWNTIME" | "NEVER_UPDATE";
        type UpdateStrategy = "LATEST_PATCH" | "NEXT_MINOR";
        type UpgradeVersion = "1.12" | "1.13" | "1.14" | "1.15" | "1.16";
        type Version = "1.14" | "1.15" | "1.16";
    }
    namespace migration {
        interface Migration {
            date: string;
            migrationId: string;
            resourceId: string;
            resourceType: cloud.migration.ResourceTypeEnum;
        }
        type ResourceTypeEnum = "instance";
    }
    namespace network {
        interface IPPool {
            dhcp: boolean;
            end: string;
            network: string;
            region: string;
            start: string;
        }
        interface Network {
            id: string;
            name: string;
            regions: cloud.network.NetworkRegion[];
            status: cloud.network.NetworkStatusEnum;
            type?: cloud.network.NetworkTypeEnum;
            vlanId: number;
        }
        interface NetworkRegion {
            region: string;
            status: cloud.network.NetworkRegionStatusEnum;
        }
        type NetworkRegionStatusEnum = "ACTIVE" | "BUILDING";
        type NetworkStatusEnum = "BUILDING" | "ACTIVE" | "DELETING";
        type NetworkTypeEnum = "public" | "private";
        interface Subnet {
            cidr: string;
            gatewayIp?: string;
            id: string;
            ipPools: cloud.network.IPPool[];
        }
    }
    namespace openstackClient {
        interface Profile {
            name: string;
        }
        interface Session {
            expires: string;
            id: string;
            profile: cloud.openstackClient.Profile;
            websocket: string;
        }
    }
    namespace order {
        interface Order {
            date: string;
            orderId: number;
            planCode: string;
            serviceName?: string;
            status: cloud.order.StatusEnum;
        }
        type StatusEnum = "unpaid" | "delivering" | "delivered" | "unknown";
    }
    namespace pca {
        type BillingRefEnum = "backup" | "delete" | "restore";
        interface DownloadCredentials {
            authEndpoint: string;
            container: string;
            login: string;
            password: string;
            region: string;
            storageEndpoint: string;
            tenantId: string;
            tenantName: string;
        }
        type FunctionTypeEnum = "createUser" | "delete" | "restore" | "setPassword" | "setSessionName" | "setSshKey";
        type SessionStateEnum = "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore";
        type TaskStateEnum = "cancelled" | "deleted" | "doing" | "doingBackup" | "doingDelete" | "doingRestore" | "done" | "error" | "failedDelete" | "failedRestore" | "new" | "tagging" | "toBackup" | "toDelete" | "toRestore" | "todo";
        type TaskTypeEnum = "delete" | "restore";
        interface TransferState {
            agreements?: number[];
            projectId: string;
            state: cloud.pca.TransferStateEnum;
            transferDate?: string;
        }
        type TransferStateEnum = "deleted" | "transferred" | "untransferred" | "waitingAgreementsValidation";
    }
    namespace project {
        interface BandwidthStorageUsage {
            downloadedBytes: number;
            region: string;
            total: orderPrice;
        }
        interface Bill {
            billId: string;
            type: cloud.project.BillTypeEnum;
        }
        type BillTypeEnum = "creditPurchased" | "monthlyConsumption" | "monthlyInstanceActivation";
        interface CurrentUsage {
            instances: cloud.project.InstancesUsage;
            snapshots: cloud.project.SnapshotsUsage;
            storage: cloud.project.StorageUsage;
            total: orderPrice;
            volumeSnapshots: cloud.project.SnapshotsUsage;
            volumes: cloud.project.VolumesUsage;
        }
        type EligibilityAction = "addPaymentMethod" | "askIncreaseProjectsQuota" | "challengePaymentMethod" | "verifyPaypal";
        interface EligibilityInfo {
            actionsRequired?: cloud.project.EligibilityAction[];
            minimumCredit?: orderPrice;
            paymentMethodsAuthorized?: cloud.project.PaymentMethodAuthorized[];
            voucher?: cloud.project.NewProjectInfoVoucher;
        }
        interface InstanceMonthlyBilling {
            activatedOn: string;
            cost: orderPrice;
        }
        interface InstanceUsageDetail {
            hourly?: orderPrice;
            instanceId: string;
            monthly?: cloud.project.InstanceMonthlyBilling;
            monthlyBilling: boolean;
            reference: string;
        }
        interface InstancesUsage {
            detail: cloud.project.InstanceUsageDetail[];
            total: orderPrice;
        }
        interface NewProject {
            agreements?: number[];
            credit?: cloud.project.NewProjectCredit;
            description?: string;
            orderId?: number;
            project?: string;
            status: cloud.project.NewProjectStatusEnum;
        }
        interface NewProjectCredit {
            description?: string;
            id: number;
            products?: string[];
            total_credit: orderPrice;
            validity?: cloud.common.VoucherValidity;
        }
        interface NewProjectInfo {
            agreements?: number[];
            error?: cloud.project.NewProjectInfoError;
            order?: orderPrice;
            voucher?: cloud.project.NewProjectInfoVoucher;
        }
        interface NewProjectInfoError {
            code: cloud.project.NewProjectInfoErrorCodeEnum;
            message: string;
        }
        type NewProjectInfoErrorCodeEnum = "accountNotEligible" | "challengePaymentMethodRequested" | "invalidPaymentMean" | "maxProjectsLimitReached" | "paypalAccountNotVerified" | "unpaidDebts";
        interface NewProjectInfoVoucher {
            credit: orderPrice;
            paymentMethodRequired: boolean;
        }
        type NewProjectStatusEnum = "creating" | "ok" | "validationPending" | "waitingAgreementsValidation";
        type PaymentMethodAuthorized = "bankAccount" | "credit" | "creditCard" | "paypal";
        interface ProductAgreements {
            agreementsToValidate?: number[];
            agreementsValidated?: number[];
        }
        type ProductNameEnum = "registry";
        type ProjectStatus = "creating" | "deleted" | "deleting" | "ok" | "suspended";
        interface ProjectUsage {
            current: cloud.project.CurrentUsage;
        }
        interface SnapshotUsageDetail {
            price: orderPrice;
            region: string;
            storedSize: complexType.UnitAndValue<number>;
        }
        interface SnapshotsUsage {
            detail: cloud.project.SnapshotUsageDetail[];
            total: orderPrice;
        }
        interface StorageUsage {
            bandwidth: cloud.project.BandwidthStorageUsage[];
            total: orderPrice;
            volume: cloud.project.StorageVolumeUsage[];
        }
        interface StorageVolumeUsage {
            region: string;
            storedBytes: number;
            total: orderPrice;
        }
        type VolumeType = "classic" | "high-speed";
        interface VolumeUsageDetail {
            price: orderPrice;
            volumeCapacity: complexType.UnitAndValue<number>;
            volumeId: string;
            volumeType: cloud.project.VolumeType;
        }
        interface VolumesUsage {
            detail: cloud.project.VolumeUsageDetail[];
            total: orderPrice;
        }
        namespace io {
            interface Stream {
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
            interface StreamCreation {
                description: string;
                kind: cloud.project.io.StreamKindEnum;
                name: string;
                region: string;
            }
            type StreamKindEnum = "NON_PERSISTENT" | "PERSISTENT";
            interface StreamStats {
                usage: number;
            }
            type StreamStatusEnum = "INSTALLING" | "RUNNING" | "ERROR";
            namespace stream {
                interface Region {
                    endpoint: cloud.project.io.stream.RegionEndpoint;
                    region: string;
                }
                interface RegionEndpoint {
                    pulsar: string;
                }
                interface Subscription {
                    id: string;
                    kind: cloud.project.io.stream.SubscriptionKindEnum;
                    name: string;
                }
                interface SubscriptionCreation {
                    name: string;
                }
                type SubscriptionKindEnum = "SHARED" | "KEY_SHARED" | "EXCLUSIVE" | "FAILOVER";
                interface SubscriptionStats {
                    lag: number;
                }
                interface Token {
                    action: cloud.project.io.stream.TokenActionEnum;
                    id: string;
                    token: string;
                }
                type TokenActionEnum = "CONSUME" | "PRODUCE" | "BOTH";
                interface TokenCreation {
                    action: cloud.project.io.stream.TokenActionEnum;
                }
            }
        }
    }
    namespace quota {
        interface AllowedQuota {
            compute: cloud.quota.ComputeQuota;
            name: string;
            network: cloud.quota.NetworkQuota;
            volume: cloud.quota.VolumeQuota;
        }
        interface ComputeQuota {
            cores: number;
            instances: number;
            ram: number;
        }
        interface InstanceUsageQuotas {
            maxCores: number;
            maxInstances: number;
            maxRam: number;
            usedCores: number;
            usedInstances: number;
            usedRAM: number;
        }
        interface KeypairQuotas {
            maxCount: number;
        }
        interface NetworkQuota {
            networks: number;
            ports: number;
            subnets: number;
        }
        interface Quotas {
            instance?: cloud.quota.InstanceUsageQuotas;
            keypair?: cloud.quota.KeypairQuotas;
            region: string;
            volume?: cloud.quota.VolumeUsageQuotas;
        }
        interface VolumeQuota {
            gigabytes: number;
            snapshots: number;
            volumes: number;
        }
        interface VolumeUsageQuotas {
            maxGigabytes: number;
            usedGigabytes: number;
            volumeCount: number;
        }
    }
    namespace role {
        interface Permission {
            label: string;
            roles: string[];
        }
        interface Role {
            description: string;
            id: string;
            name: string;
            permissions: string[];
        }
        interface Roles {
            roles: cloud.role.Role[];
            services: cloud.role.Service[];
        }
        interface Service {
            name: string;
            permissions: cloud.role.Permission[];
        }
    }
    namespace sshkey {
        interface SshKey {
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
        interface SshKeyDetail {
            fingerPrint: string;
            id: string;
            name: string;
            publicKey: string;
            regions: string[];
        }
    }
    namespace stack {
        interface Content {
            content: string;
            type: string;
        }
        interface InstructionGuide {
            content: cloud.stack.Content[];
            language: string;
            sections: cloud.stack.Section[];
            title: string;
        }
        interface Section {
            content: cloud.stack.Content[];
            steps: cloud.stack.Step[];
            title: string;
        }
        interface Stack {
            commit: string;
            description: string;
            gitRepository: string;
            instructions: cloud.stack.InstructionGuide[];
            name: string;
            release: string;
            uuid: string;
        }
        interface Step {
            content: cloud.stack.Content[];
            title: string;
        }
    }
    namespace storage {
        interface Container {
            id: string;
            name: string;
            region: string;
            storedBytes: number;
            storedObjects: number;
        }
        interface ContainerAccess {
            endpoints: cloud.storage.Endpoint[];
            token: string;
        }
        interface ContainerDetail {
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
        interface ContainerObject {
            contentType: string;
            lastModified: string;
            name: string;
            retrievalDelay: number;
            retrievalState: cloud.storage.RetrievalStateEnum;
            size: number;
        }
        interface ContainerObjectTempURL {
            expirationDate: string;
            getURL: string;
        }
        interface Endpoint {
            region: string;
            url: string;
        }
        type RetrievalStateEnum = "sealed" | "unsealing" | "unsealed";
        type RightEnum = "all" | "read" | "write";
        type TypeEnum = "static" | "public" | "private";
    }
    namespace usage {
        type PaymentTypeEnum = "pre" | "post";
        interface Period {
            from: string;
            to: string;
        }
        interface UsageBill {
            bill_id: string;
            credit: number;
            part: number;
            payment_type: cloud.usage.PaymentTypeEnum;
            total: number;
        }
        interface UsageCurrent {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
        }
        interface UsageCurrentBills {
            bills: cloud.usage.UsageBill[];
        }
        interface UsageForecast {
            hourlyUsage?: cloud.billingView.HourlyResources;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
            usableCredits?: cloud.billingView.UsedCredits;
        }
        interface UsageHistory {
            id: string;
            lastUpdate: string;
            period: cloud.usage.Period;
        }
        interface UsageHistoryDetail {
            hourlyUsage?: cloud.billingView.HourlyResources;
            id: string;
            lastUpdate: string;
            monthlyUsage?: cloud.billingView.MonthlyResources;
            period: cloud.usage.Period;
        }
        interface UsageHistoryDetailBills {
            bills: cloud.usage.UsageBill[];
        }
    }
    namespace user {
        interface Openrc {
            content: string;
        }
        type OpenrcVersionEnum = "v2.0" | "v3";
        interface Rclone {
            content: string;
        }
        type RoleEnum = "admin" | "authentication" | "administrator" | "compute_operator" | "infrastructure_supervisor" | "network_security_operator" | "network_operator" | "backup_operator" | "image_operator" | "volume_operator" | "objectstore_operator";
        interface User {
            creationDate: string;
            description: string;
            id: number;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        interface UserDetail {
            creationDate: string;
            description: string;
            id: number;
            password: string;
            roles: cloud.role.Role[];
            status: cloud.user.UserStatusEnum;
            username: string;
        }
        type UserStatusEnum = "creating" | "ok" | "deleting" | "deleted";
    }
    namespace volume {
        interface Snapshot {
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
        type SnapshotStatusEnum = "creating" | "available" | "deleting" | "error" | "error_deleting";
        interface Volume {
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
        type VolumeTypeEnum = "classic" | "high-speed";
    }
}
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace nichandle {
    type OvhSubsidiaryEnum = "ASIA" | "AU" | "CA" | "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "QC" | "SG" | "SN" | "TN" | "US" | "WE" | "WS";
}
export declare namespace order {
    type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points";
    interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export declare namespace pca {
    interface Account {
        domain: string;
        host: string;
        login: string;
        password: string;
        sshkey?: string;
    }
    interface Billing {
        billed: boolean;
        date: string;
        id: number;
        quantity: number;
        reference: cloud.pca.BillingRefEnum;
        total: number;
    }
    interface File {
        MD5: string;
        SHA1: string;
        SHA256: string;
        id: string;
        name: string;
        size: number;
        state: string;
        type: string;
    }
    interface Session {
        endDate?: string;
        id: string;
        login: string;
        name: string;
        size: number;
        srcIp?: string;
        startDate: string;
        state: cloud.pca.SessionStateEnum;
    }
    interface Task {
        comment?: string;
        function: cloud.pca.FunctionTypeEnum;
        id: string;
        ipAddress?: string;
        login: string;
        status: cloud.pca.TaskStateEnum;
        todoDate: string;
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
/**
 * END API /cloud Models
 */
export declare function proxyCloud(ovhEngine: OvhRequestable): Cloud;
export default proxyCloud;
/**
 * Api Proxy model
 */ export interface Cloud {
    $get(): Promise<string[]>;
    agreements: {
        $get(params: {
            product: cloud.project.ProductNameEnum;
        }): Promise<cloud.project.ProductAgreements>;
    };
    createProject: {
        $post(params?: {
            credit?: number;
            description?: string;
            voucher?: string;
        }): Promise<cloud.project.NewProject>;
    };
    createProjectInfo: {
        $get(params?: {
            voucher?: string;
        }): Promise<cloud.project.NewProjectInfo>;
    };
    order: {
        $get(params?: {
            planCode?: string;
        }): Promise<cloud.order.Order[]>;
    };
    price: {
        $get(params?: {
            flavorId?: string;
            region?: string;
        }): Promise<cloud.Price>;
    };
    project: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<cloud.Project>;
            $put(params?: {
                access?: cloud.AccessTypeEnum;
                creationDate?: string;
                description?: string;
                expiration?: string;
                orderId?: number;
                planCode?: string;
                project_id?: string;
                status?: cloud.project.ProjectStatus;
                unleash?: boolean;
            }): Promise<void>;
            acl: {
                $get(params?: {
                    type?: cloud.AclTypeEnum;
                }): Promise<string[]>;
                $post(params: {
                    accountId: string;
                    type: cloud.AclTypeEnum;
                }): Promise<cloud.Acl>;
                $(accountId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.Acl>;
                };
            };
            activateMonthlyBilling: {
                $post(params: {
                    instances: cloud.instance.MonthlyInstanceBulkParams[];
                }): Promise<cloud.instance.InstanceDetail[]>;
            };
            alerting: {
                $get(): Promise<string[]>;
                $post(params: {
                    delay: cloud.AlertingDelayEnum;
                    email: string;
                    monthlyThreshold: number;
                }): Promise<cloud.Alerting>;
                $(id: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.Alerting>;
                    $put(params?: {
                        creationDate?: string;
                        delay?: cloud.AlertingDelayEnum;
                        email?: string;
                        formattedMonthlyThreshold?: orderPrice;
                        id?: string;
                        monthlyThreshold?: number;
                    }): Promise<void>;
                    alert: {
                        $get(): Promise<number[]>;
                        $(alertId: number): {
                            $get(): Promise<cloud.AlertingAlert>;
                        };
                    };
                };
            };
            bill: {
                $get(params: {
                    from: string;
                    to: string;
                }): Promise<cloud.project.Bill[]>;
            };
            cancel: {
                $post(): Promise<void>;
            };
            capabilities: {
                containerRegistry: {
                    $get(): Promise<cloud.containerRegistry.Capability[]>;
                };
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            consumption: {
                $get(params: {
                    from: string;
                    to: string;
                }): Promise<cloud.project.ProjectUsage>;
            };
            containerRegistry: {
                $get(): Promise<cloud.containerRegistry.Registry[]>;
                $post(params: {
                    name: string;
                    region: string;
                }): Promise<cloud.containerRegistry.Registry>;
                $(registryID: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.containerRegistry.Registry>;
                    $put(params: {
                        name: string;
                    }): Promise<void>;
                    users: {
                        $get(): Promise<cloud.containerRegistry.User[]>;
                        $post(params?: {
                            email?: string;
                            login?: string;
                        }): Promise<cloud.containerRegistry.User>;
                        $(userID: string): {
                            $delete(): Promise<void>;
                        };
                    };
                };
            };
            credit: {
                $get(): Promise<number[]>;
                $post(params: {
                    code: string;
                }): Promise<void>;
                $(id: number): {
                    $get(): Promise<cloud.Credit>;
                };
            };
            flavor: {
                $get(params?: {
                    region?: string;
                }): Promise<cloud.flavor.Flavor[]>;
                $(flavorId: string): {
                    $get(): Promise<cloud.flavor.Flavor>;
                };
            };
            forecast: {
                $get(params: {
                    toDate: string;
                }): Promise<cloud.forecast.ProjectForecast>;
            };
            image: {
                $get(params?: {
                    flavorType?: string;
                    osType?: cloud.image.OSTypeEnum;
                    region?: string;
                }): Promise<cloud.image.Image[]>;
                $(imageId: string): {
                    $get(): Promise<cloud.image.Image>;
                };
            };
            instance: {
                $get(params?: {
                    region?: string;
                }): Promise<cloud.instance.Instance[]>;
                $post(params: {
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
                }): Promise<cloud.instance.InstanceDetail>;
                bulk: {
                    $post(params: {
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
                    }): Promise<cloud.instance.Instance[]>;
                };
                group: {
                    $get(params?: {
                        region?: string;
                    }): Promise<cloud.instancegroup.InstanceGroup[]>;
                    $post(params: {
                        name: string;
                        region: string;
                        type: cloud.instancegroup.InstanceGroupTypeEnum;
                    }): Promise<cloud.instancegroup.InstanceGroup>;
                    $(groupId: string): {
                        $delete(): Promise<void>;
                        $get(params?: {
                            region?: string;
                        }): Promise<cloud.instancegroup.InstanceGroup>;
                    };
                };
                $(instanceId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.instance.InstanceDetail>;
                    $put(params: {
                        instanceName: string;
                    }): Promise<void>;
                    activeMonthlyBilling: {
                        $post(): Promise<cloud.instance.InstanceDetail>;
                    };
                    applicationAccess: {
                        $post(): Promise<cloud.instance.ApplicationAccess>;
                    };
                    interface: {
                        $get(): Promise<cloud.instanceInterface.Interface[]>;
                        $post(params: {
                            ip?: string;
                            networkId: string;
                        }): Promise<cloud.instanceInterface.Interface>;
                        $(interfaceId: string): {
                            $delete(): Promise<void>;
                            $get(): Promise<cloud.instanceInterface.Interface>;
                        };
                    };
                    monitoring: {
                        $get(params: {
                            period: cloud.instance.MetricsPeriod;
                            type: cloud.instance.MetricsType;
                        }): Promise<cloud.instance.InstanceMetrics>;
                    };
                    reboot: {
                        $post(params: {
                            type: cloud.instance.RebootTypeEnum;
                        }): Promise<void>;
                    };
                    reinstall: {
                        $post(params: {
                            imageId: string;
                        }): Promise<cloud.instance.InstanceDetail>;
                    };
                    rescueMode: {
                        $post(params: {
                            imageId?: string;
                            rescue: boolean;
                        }): Promise<cloud.instance.RescueAdminPassword>;
                    };
                    resize: {
                        $post(params: {
                            flavorId: string;
                        }): Promise<cloud.instance.InstanceDetail>;
                    };
                    resume: {
                        $post(): Promise<void>;
                    };
                    snapshot: {
                        $post(params: {
                            snapshotName: string;
                        }): Promise<void>;
                    };
                    start: {
                        $post(): Promise<void>;
                    };
                    stop: {
                        $post(): Promise<void>;
                    };
                    vnc: {
                        $post(): Promise<cloud.instance.InstanceVnc>;
                    };
                };
            };
            io: {
                capabilities: {
                    stream: {
                        region: {
                            $get(): Promise<string[]>;
                            $(regionName: string): {
                                $get(): Promise<cloud.project.io.stream.Region>;
                            };
                        };
                    };
                };
                stream: {
                    $get(): Promise<string[]>;
                    $post(params: {
                        description: string;
                        kind: cloud.project.io.StreamKindEnum;
                        name: string;
                        region: string;
                    }): Promise<cloud.project.io.Stream>;
                    $(streamId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloud.project.io.Stream>;
                        $put(params?: {
                            backlog?: string;
                            description?: string;
                            id?: string;
                            kind?: cloud.project.io.StreamKindEnum;
                            name?: string;
                            regions?: string[];
                            retention?: string;
                            status?: cloud.project.io.StreamStatusEnum;
                            throttling?: number;
                        }): Promise<cloud.project.io.Stream>;
                        stats: {
                            $get(): Promise<cloud.project.io.StreamStats>;
                        };
                        subscription: {
                            $get(): Promise<string[]>;
                            $post(params: {
                                name: string;
                            }): Promise<cloud.project.io.stream.Subscription>;
                            $(subscriptionId: string): {
                                $delete(): Promise<void>;
                                $get(): Promise<cloud.project.io.stream.Subscription>;
                                resetCursor: {
                                    $post(): Promise<void>;
                                };
                                stats: {
                                    $get(): Promise<cloud.project.io.stream.SubscriptionStats>;
                                };
                            };
                        };
                        token: {
                            $get(): Promise<string[]>;
                            $post(params: {
                                action: cloud.project.io.stream.TokenActionEnum;
                            }): Promise<cloud.project.io.stream.Token>;
                            $(tokenId: string): {
                                $delete(): Promise<void>;
                                $get(): Promise<cloud.project.io.stream.Token>;
                            };
                        };
                    };
                };
            };
            ip: {
                $get(): Promise<cloud.ip.CloudIp[]>;
                failover: {
                    $get(): Promise<cloud.ip.FailoverIp[]>;
                    $(id: string): {
                        $get(): Promise<cloud.ip.FailoverIp>;
                        attach: {
                            $post(params: {
                                instanceId: string;
                            }): Promise<cloud.ip.FailoverIp>;
                        };
                    };
                };
            };
            kube: {
                $get(): Promise<string[]>;
                $post(params: {
                    name?: string;
                    region: cloud.kube.Region;
                    version?: cloud.kube.Version;
                }): Promise<cloud.kube.Cluster>;
                regions: {
                    $get(): Promise<cloud.kube.Region[]>;
                };
                $(kubeId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.kube.Cluster>;
                    $put(params: {
                        name: string;
                    }): Promise<void>;
                    flavors: {
                        $get(): Promise<cloud.kube.Flavor[]>;
                    };
                    kubeconfig: {
                        $post(): Promise<cloud.kube.Kubeconfig>;
                    };
                    node: {
                        $get(): Promise<cloud.kube.Node[]>;
                        $post(params: {
                            flavorName: string;
                            name?: string;
                        }): Promise<cloud.kube.Node>;
                        $(nodeId: string): {
                            $delete(): Promise<void>;
                            $get(): Promise<cloud.kube.Node>;
                        };
                    };
                    reset: {
                        $post(params?: {
                            version?: cloud.kube.Version;
                            workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicy;
                        }): Promise<void>;
                    };
                    update: {
                        $post(params?: {
                            strategy?: cloud.kube.UpdateStrategy;
                        }): Promise<void>;
                    };
                    updatePolicy: {
                        $put(params: {
                            updatePolicy: cloud.kube.UpdatePolicy;
                        }): Promise<void>;
                    };
                };
            };
            lab: {
                $get(): Promise<cloud.Lab[]>;
                $(labId: string): {
                    $get(): Promise<cloud.Lab>;
                    $post(): Promise<cloud.Operation>;
                    agreement: {
                        $get(): Promise<cloud.LabAgreements>;
                    };
                };
            };
            migration: {
                $get(): Promise<cloud.migration.Migration[]>;
                $(migrationId: string): {
                    $get(): Promise<cloud.migration.Migration>;
                    $put(params: {
                        date: string;
                    }): Promise<cloud.migration.Migration>;
                };
            };
            network: {
                private: {
                    $get(): Promise<cloud.network.Network[]>;
                    $post(params: {
                        name: string;
                        regions?: string[];
                        vlanId?: number;
                    }): Promise<cloud.network.Network>;
                    $(networkId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloud.network.Network>;
                        $put(params: {
                            name: string;
                        }): Promise<void>;
                        region: {
                            $post(params: {
                                region: string;
                            }): Promise<cloud.network.Network>;
                        };
                        subnet: {
                            $get(): Promise<cloud.network.Subnet[]>;
                            $post(params: {
                                dhcp: boolean;
                                end: string;
                                network: string;
                                noGateway: boolean;
                                region: string;
                                start: string;
                            }): Promise<cloud.network.Subnet>;
                            $(subnetId: string): {
                                $delete(): Promise<void>;
                            };
                        };
                    };
                };
                public: {
                    $get(): Promise<cloud.network.Network[]>;
                };
            };
            openstackClient: {
                $post(): Promise<cloud.openstackClient.Session>;
            };
            operation: {
                $get(): Promise<cloud.Operation[]>;
                $(operationId: string): {
                    $get(): Promise<cloud.Operation>;
                };
            };
            quota: {
                $get(): Promise<cloud.quota.Quotas[]>;
            };
            region: {
                $get(): Promise<string[]>;
                $post(params: {
                    region: string;
                }): Promise<cloud.Region>;
                $(regionName: string): {
                    $get(): Promise<cloud.Region>;
                    quota: {
                        $get(): Promise<cloud.quota.Quotas>;
                        $post(params: {
                            name: string;
                        }): Promise<cloud.Operation>;
                        allowed: {
                            $get(): Promise<cloud.quota.AllowedQuota[]>;
                        };
                    };
                    workflow: {
                        backup: {
                            $get(): Promise<cloud.Backup[]>;
                            $post(params: {
                                cron: string;
                                instanceId: string;
                                maxExecutionCount?: number;
                                name: string;
                                rotation: number;
                            }): Promise<cloud.Backup>;
                            $(backupWorkflowId: string): {
                                $delete(): Promise<void>;
                                $get(): Promise<cloud.Backup>;
                            };
                        };
                    };
                };
            };
            regionAvailable: {
                $get(): Promise<cloud.AvailableRegion[]>;
            };
            retain: {
                $post(): Promise<void>;
            };
            role: {
                $get(): Promise<cloud.role.Roles>;
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
            snapshot: {
                $get(params?: {
                    flavorType?: string;
                    region?: string;
                }): Promise<cloud.image.Image[]>;
                $(imageId: string): {
                    $delete(): Promise<cloud.image.Image>;
                    $get(): Promise<cloud.image.Image>;
                };
            };
            sshkey: {
                $get(params?: {
                    region?: string;
                }): Promise<cloud.sshkey.SshKey[]>;
                $post(params: {
                    name: string;
                    publicKey: string;
                    region?: string;
                }): Promise<cloud.sshkey.SshKeyDetail>;
                $(keyId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.sshkey.SshKeyDetail>;
                };
            };
            stack: {
                $get(): Promise<cloud.stack.Stack[]>;
                $(stackId: string): {
                    $get(): Promise<cloud.stack.Stack>;
                    client: {
                        $post(): Promise<cloud.openstackClient.Session>;
                    };
                };
            };
            storage: {
                $get(): Promise<cloud.storage.Container[]>;
                $post(params: {
                    archive: boolean;
                    containerName: string;
                    region: string;
                }): Promise<cloud.storage.Container>;
                access: {
                    $get(): Promise<cloud.storage.ContainerAccess>;
                    $post(): Promise<cloud.storage.ContainerAccess>;
                };
                $(containerId: string): {
                    $delete(): Promise<void>;
                    $get(params?: {
                        noObjects?: boolean;
                    }): Promise<cloud.storage.ContainerDetail>;
                    $put(params?: {
                        containerType?: cloud.storage.TypeEnum;
                    }): Promise<void>;
                    cors: {
                        $delete(params: {
                            origin: string;
                        }): Promise<void>;
                        $post(params: {
                            origin: string;
                        }): Promise<void>;
                    };
                    publicUrl: {
                        $post(params: {
                            expirationDate: string;
                            objectName: string;
                        }): Promise<cloud.storage.ContainerObjectTempURL>;
                    };
                    static: {
                        $post(): Promise<void>;
                    };
                    user: {
                        $post(params: {
                            description?: string;
                            right: cloud.storage.RightEnum;
                        }): Promise<cloud.user.UserDetail>;
                    };
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
            unleash: {
                $post(): Promise<void>;
            };
            usage: {
                current: {
                    $get(): Promise<cloud.usage.UsageCurrent>;
                };
                forecast: {
                    $get(): Promise<cloud.usage.UsageForecast>;
                };
                history: {
                    $get(params?: {
                        from?: string;
                        to?: string;
                    }): Promise<cloud.usage.UsageHistory[]>;
                    $(usageId: string): {
                        $get(): Promise<cloud.usage.UsageHistoryDetail>;
                    };
                };
            };
            user: {
                $get(): Promise<cloud.user.User[]>;
                $post(params?: {
                    description?: string;
                    role?: cloud.user.RoleEnum;
                    roles?: cloud.user.RoleEnum[];
                }): Promise<cloud.user.UserDetail>;
                $(userId: number): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.user.User>;
                    openrc: {
                        $get(params: {
                            region: string;
                            version?: cloud.user.OpenrcVersionEnum;
                        }): Promise<cloud.user.Openrc>;
                    };
                    rclone: {
                        $get(params: {
                            region: string;
                        }): Promise<cloud.user.Rclone>;
                    };
                    regeneratePassword: {
                        $post(): Promise<cloud.user.UserDetail>;
                    };
                    role: {
                        $get(): Promise<cloud.role.Role[]>;
                        $post(params: {
                            roleId: string;
                        }): Promise<cloud.user.UserDetail>;
                        $put(params: {
                            rolesIds: string[];
                        }): Promise<cloud.user.UserDetail>;
                        $(roleId: string): {
                            $delete(): Promise<void>;
                            $get(): Promise<cloud.role.Role>;
                        };
                    };
                    token: {
                        $post(params: {
                            password: string;
                        }): Promise<cloud.authentication.Token>;
                    };
                };
            };
            volume: {
                $get(params?: {
                    region?: string;
                }): Promise<cloud.volume.Volume[]>;
                $post(params: {
                    description?: string;
                    imageId?: string;
                    name?: string;
                    region: string;
                    size: number;
                    snapshotId?: string;
                    type: cloud.volume.VolumeTypeEnum;
                }): Promise<cloud.volume.Volume>;
                snapshot: {
                    $get(params?: {
                        region?: string;
                    }): Promise<cloud.volume.Snapshot[]>;
                    $(snapshotId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<cloud.volume.Snapshot>;
                    };
                };
                $(volumeId: string): {
                    $delete(): Promise<void>;
                    $get(): Promise<cloud.volume.Volume>;
                    $put(params?: {
                        description?: string;
                        name?: string;
                    }): Promise<cloud.volume.Volume>;
                    attach: {
                        $post(params: {
                            instanceId: string;
                        }): Promise<cloud.volume.Volume>;
                    };
                    detach: {
                        $post(params: {
                            instanceId: string;
                        }): Promise<cloud.volume.Volume>;
                    };
                    snapshot: {
                        $post(params?: {
                            description?: string;
                            name?: string;
                        }): Promise<cloud.volume.Snapshot>;
                    };
                    upsize: {
                        $post(params: {
                            size: number;
                        }): Promise<cloud.volume.Volume>;
                    };
                };
            };
            vrack: {
                $get(): Promise<cloud.Vrack>;
                $post(): Promise<cloud.Operation>;
            };
        };
    };
    subsidiaryPrice: {
        $get(params: {
            flavorId?: string;
            ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
            region?: string;
        }): Promise<cloud.Price>;
    };
    $(serviceName: string | number): {
        pca: {
            $get(): Promise<string[]>;
            $(pcaServiceName: string): {
                $get(): Promise<pca.Account>;
                $put(params?: {
                    domain?: string;
                    host?: string;
                    login?: string;
                    password?: string;
                    sshkey?: string;
                }): Promise<void>;
                billing: {
                    $get(params?: {
                        billed?: boolean;
                        date_from?: string;
                        date_to?: string;
                    }): Promise<number[]>;
                    $(billingId: number): {
                        $get(): Promise<pca.Billing>;
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
                sessions: {
                    $get(params?: {
                        name?: string;
                    }): Promise<string[]>;
                    $(sessionId: string): {
                        $delete(): Promise<pca.Task>;
                        $get(): Promise<pca.Session>;
                        $put(params?: {
                            endDate?: string;
                            id?: string;
                            login?: string;
                            name?: string;
                            size?: number;
                            srcIp?: string;
                            startDate?: string;
                            state?: cloud.pca.SessionStateEnum;
                        }): Promise<void>;
                        files: {
                            $get(params?: {
                                name?: string;
                            }): Promise<string[]>;
                            $(fileId: string): {
                                $get(): Promise<pca.File>;
                            };
                        };
                        restore: {
                            $post(): Promise<pca.Task>;
                        };
                    };
                };
                tasks: {
                    $get(params?: {
                        function_?: cloud.pca.FunctionTypeEnum;
                        status?: cloud.pca.TaskStateEnum;
                        todoDate_from?: string;
                        todoDate_to?: string;
                    }): Promise<string[]>;
                    $post(params: {
                        fileIds: string[];
                        sessionId: string;
                        taskFunction: cloud.pca.TaskTypeEnum;
                    }): Promise<pca.Task>;
                    $(taskId: string): {
                        $get(): Promise<pca.Task>;
                    };
                };
                usage: {
                    $get(): Promise<number>;
                };
            };
        };
    };
    /**
     * Operations about the PUBLICCLOUD service
     * List available services
     */
    get(path: '/cloud'): () => Promise<string[]>;
    /**
     * Operations about the PUBLICCLOUD service
     * List available services
     */
    get(path: '/cloud/{serviceName}/pca'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Cloud Archives Account
     * Get this object properties
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}'): (params: {
        pcaServiceName: string;
        serviceName: string;
    }) => Promise<pca.Account>;
    /**
     * List the pca.Billing objects
     * cloud Archives billing items
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing'): (params: {
        pcaServiceName: string;
        serviceName: string;
        billed?: boolean;
        date_from?: string;
        date_to?: string;
    }) => Promise<number[]>;
    /**
     * cloud archives billing
     * Get this object properties
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/billing/{billingId}'): (params: {
        billingId: number;
        pcaServiceName: string;
        serviceName: string;
    }) => Promise<pca.Billing>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos'): (params: {
        pcaServiceName: string;
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the pca.Session objects
     * cloud archives sessions for account
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions'): (params: {
        pcaServiceName: string;
        serviceName: string;
        name?: string;
    }) => Promise<string[]>;
    /**
     * cloud archives sessions
     * Get this object properties
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}'): (params: {
        pcaServiceName: string;
        serviceName: string;
        sessionId: string;
    }) => Promise<pca.Session>;
    /**
     * List the pca.File objects
     * cloud archives files in session
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files'): (params: {
        pcaServiceName: string;
        serviceName: string;
        sessionId: string;
        name?: string;
    }) => Promise<string[]>;
    /**
     * cloud archives files
     * Get this object properties
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/files/{fileId}'): (params: {
        fileId: string;
        pcaServiceName: string;
        serviceName: string;
        sessionId: string;
    }) => Promise<pca.File>;
    /**
     * List the pca.Task objects
     * cloud archives tasks for account
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks'): (params: {
        pcaServiceName: string;
        serviceName: string;
        function_?: cloud.pca.FunctionTypeEnum;
        status?: cloud.pca.TaskStateEnum;
        todoDate_from?: string;
        todoDate_to?: string;
    }) => Promise<string[]>;
    /**
     * cloud archives tasks
     * Get this object properties
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks/{taskId}'): (params: {
        pcaServiceName: string;
        serviceName: string;
        taskId: string;
    }) => Promise<pca.Task>;
    /**
     * usage operations
     * View account current total sessions usage (bytes)
     */
    get(path: '/cloud/{serviceName}/pca/{pcaServiceName}/usage'): (params: {
        pcaServiceName: string;
        serviceName: string;
    }) => Promise<number>;
    /**
     * Get agreements related to a product
     * Get agreements related to a product
     */
    get(path: '/cloud/agreements'): (params: {
        product: cloud.project.ProductNameEnum;
    }) => Promise<cloud.project.ProductAgreements>;
    /**
     * Get information about a cloud project creation
     * Get information about a cloud project creation
     */
    get(path: '/cloud/createProjectInfo'): (params?: {
        voucher?: string;
    }) => Promise<cloud.project.NewProjectInfo>;
    /**
     * Missing description
     * Get all cloud pending orders
     */
    get(path: '/cloud/order'): (params?: {
        planCode?: string;
    }) => Promise<cloud.order.Order[]>;
    /**
     * Get services prices
     * Get services prices
     */
    get(path: '/cloud/price'): (params?: {
        flavorId?: string;
        region?: string;
    }) => Promise<cloud.Price>;
    /**
     * Operations about the PUBLICCLOUD service
     * List available services
     */
    get(path: '/cloud/project'): () => Promise<string[]>;
    /**
     * Operations about the PUBLICCLOUD service
     * Get this object properties
     */
    get(path: '/cloud/project/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<cloud.Project>;
    /**
     * List the cloud.Acl objects
     * Get ACL on your cloud project
     */
    get(path: '/cloud/project/{serviceName}/acl'): (params: {
        serviceName: string;
        type?: cloud.AclTypeEnum;
    }) => Promise<string[]>;
    /**
     * Cloud ACL
     * Get this object properties
     */
    get(path: '/cloud/project/{serviceName}/acl/{accountId}'): (params: {
        accountId: string;
        serviceName: string;
    }) => Promise<cloud.Acl>;
    /**
     * List the cloud.Alerting objects
     * Manage alerts on your consumption
     */
    get(path: '/cloud/project/{serviceName}/alerting'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Cloud alerting consumption
     * Get this object properties
     */
    get(path: '/cloud/project/{serviceName}/alerting/{id}'): (params: {
        id: string;
        serviceName: string;
    }) => Promise<cloud.Alerting>;
    /**
     * List the cloud.AlertingAlert objects
     * See alerts
     */
    get(path: '/cloud/project/{serviceName}/alerting/{id}/alert'): (params: {
        id: string;
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Cloud alert on your consumption
     * Get this object properties
     */
    get(path: '/cloud/project/{serviceName}/alerting/{id}/alert/{alertId}'): (params: {
        alertId: number;
        id: string;
        serviceName: string;
    }) => Promise<cloud.AlertingAlert>;
    /**
     * bill operations
     * Get your project bills
     */
    get(path: '/cloud/project/{serviceName}/bill'): (params: {
        serviceName: string;
        from: string;
        to: string;
    }) => Promise<cloud.project.Bill[]>;
    /**
     *
     * List container registry capabilities per region
     */
    get(path: '/cloud/project/{serviceName}/capabilities/containerRegistry'): (params: {
        serviceName: string;
    }) => Promise<cloud.containerRegistry.Capability[]>;
    /**
     * consumption operations
     * Get your project consumption
     */
    get(path: '/cloud/project/{serviceName}/consumption'): (params: {
        serviceName: string;
        from: string;
        to: string;
    }) => Promise<cloud.project.ProjectUsage>;
    /**
     * Manage registries
     * List registries of the project
     */
    get(path: '/cloud/project/{serviceName}/containerRegistry'): (params: {
        serviceName: string;
    }) => Promise<cloud.containerRegistry.Registry[]>;
    /**
     * Manage registries
     * Get the registry information
     */
    get(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}'): (params: {
        registryID: string;
        serviceName: string;
    }) => Promise<cloud.containerRegistry.Registry>;
    /**
     * Manage users
     * List registry user
     */
    get(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users'): (params: {
        registryID: string;
        serviceName: string;
    }) => Promise<cloud.containerRegistry.User[]>;
    /**
     * List the cloud.Credit objects
     * Get your credit
     */
    get(path: '/cloud/project/{serviceName}/credit'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * Cloud credit
     * Get this object properties
     */
    get(path: '/cloud/project/{serviceName}/credit/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<cloud.Credit>;
    /**
     * Missing description
     * Get flavors
     */
    get(path: '/cloud/project/{serviceName}/flavor'): (params: {
        serviceName: string;
        region?: string;
    }) => Promise<cloud.flavor.Flavor[]>;
    /**
     * Missing description
     * Get flavor
     */
    get(path: '/cloud/project/{serviceName}/flavor/{flavorId}'): (params: {
        flavorId: string;
        serviceName: string;
    }) => Promise<cloud.flavor.Flavor>;
    /**
     * Missing description
     * Get your consumption forecast
     */
    get(path: '/cloud/project/{serviceName}/forecast'): (params: {
        serviceName: string;
        toDate: string;
    }) => Promise<cloud.forecast.ProjectForecast>;
    /**
     * Missing description
     * Get images
     */
    get(path: '/cloud/project/{serviceName}/image'): (params: {
        serviceName: string;
        flavorType?: string;
        osType?: cloud.image.OSTypeEnum;
        region?: string;
    }) => Promise<cloud.image.Image[]>;
    /**
     * Missing description
     * Get image
     */
    get(path: '/cloud/project/{serviceName}/image/{imageId}'): (params: {
        imageId: string;
        serviceName: string;
    }) => Promise<cloud.image.Image>;
    /**
     * Missing description
     * Get instance
     */
    get(path: '/cloud/project/{serviceName}/instance'): (params: {
        serviceName: string;
        region?: string;
    }) => Promise<cloud.instance.Instance[]>;
    /**
     * Missing description
     * Get instance
     */
    get(path: '/cloud/project/{serviceName}/instance/{instanceId}'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<cloud.instance.InstanceDetail>;
    /**
     * Missing description
     * Get interfaces
     */
    get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<cloud.instanceInterface.Interface[]>;
    /**
     * Missing description
     * Get interface
     */
    get(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}'): (params: {
        instanceId: string;
        interfaceId: string;
        serviceName: string;
    }) => Promise<cloud.instanceInterface.Interface>;
    /**
     * Missing description
     * Return many statistics about the virtual machine for a given period
     */
    get(path: '/cloud/project/{serviceName}/instance/{instanceId}/monitoring'): (params: {
        instanceId: string;
        serviceName: string;
        period: cloud.instance.MetricsPeriod;
        type: cloud.instance.MetricsType;
    }) => Promise<cloud.instance.InstanceMetrics>;
    /**
     * Missing description
     * Get the detail of a group
     */
    get(path: '/cloud/project/{serviceName}/instance/group'): (params: {
        serviceName: string;
        region?: string;
    }) => Promise<cloud.instancegroup.InstanceGroup[]>;
    /**
     * Missing description
     * Get all groups
     */
    get(path: '/cloud/project/{serviceName}/instance/group/{groupId}'): (params: {
        groupId: string;
        serviceName: string;
        region?: string;
    }) => Promise<cloud.instancegroup.InstanceGroup>;
    /**
     *
     * List all available regions
     */
    get(path: '/cloud/project/{serviceName}/io/capabilities/stream/region'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     *
     * Get connection information from a region
     */
    get(path: '/cloud/project/{serviceName}/io/capabilities/stream/region/{regionName}'): (params: {
        regionName: string;
        serviceName: string;
    }) => Promise<cloud.project.io.stream.Region>;
    /**
     *
     * List all stream for a tenant
     */
    get(path: '/cloud/project/{serviceName}/io/stream'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     *
     * Get a stream
     */
    get(path: '/cloud/project/{serviceName}/io/stream/{streamId}'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<cloud.project.io.Stream>;
    /**
     *
     * Retrieve statistics of the stream
     */
    get(path: '/cloud/project/{serviceName}/io/stream/{streamId}/stats'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<cloud.project.io.StreamStats>;
    /**
     *
     * List all subscriptions for a stream
     */
    get(path: '/cloud/project/{serviceName}/io/stream/{streamId}/subscription'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<string[]>;
    /**
     *
     * Get a subscription
     */
    get(path: '/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}'): (params: {
        serviceName: string;
        streamId: string;
        subscriptionId: string;
    }) => Promise<cloud.project.io.stream.Subscription>;
    /**
     *
     * Retrieve statistics of the subscription
     */
    get(path: '/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/stats'): (params: {
        serviceName: string;
        streamId: string;
        subscriptionId: string;
    }) => Promise<cloud.project.io.stream.SubscriptionStats>;
    /**
     *
     * List all tokens for a stream
     */
    get(path: '/cloud/project/{serviceName}/io/stream/{streamId}/token'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<string[]>;
    /**
     *
     * Get token
     */
    get(path: '/cloud/project/{serviceName}/io/stream/{streamId}/token/{tokenId}'): (params: {
        serviceName: string;
        streamId: string;
        tokenId: string;
    }) => Promise<cloud.project.io.stream.Token>;
    /**
     * Missing description
     * Get ips
     */
    get(path: '/cloud/project/{serviceName}/ip'): (params: {
        serviceName: string;
    }) => Promise<cloud.ip.CloudIp[]>;
    /**
     * Missing description
     * Get failover ips
     */
    get(path: '/cloud/project/{serviceName}/ip/failover'): (params: {
        serviceName: string;
    }) => Promise<cloud.ip.FailoverIp[]>;
    /**
     * Missing description
     * Get failover ip
     */
    get(path: '/cloud/project/{serviceName}/ip/failover/{id}'): (params: {
        id: string;
        serviceName: string;
    }) => Promise<cloud.ip.FailoverIp>;
    /**
     * Manage your clusters
     * List your managed Kubernetes clusters
     */
    get(path: '/cloud/project/{serviceName}/kube'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Manage your clusters
     * Get information about your managed Kubernetes cluster
     */
    get(path: '/cloud/project/{serviceName}/kube/{kubeId}'): (params: {
        kubeId: string;
        serviceName: string;
    }) => Promise<cloud.kube.Cluster>;
    /**
     * List all flavors available
     * List all flavors available
     */
    get(path: '/cloud/project/{serviceName}/kube/{kubeId}/flavors'): (params: {
        kubeId: string;
        serviceName: string;
    }) => Promise<cloud.kube.Flavor[]>;
    /**
     * Manage your nodes
     * List your nodes
     */
    get(path: '/cloud/project/{serviceName}/kube/{kubeId}/node'): (params: {
        kubeId: string;
        serviceName: string;
    }) => Promise<cloud.kube.Node[]>;
    /**
     * Manage your nodes
     * Get information on a specific node on your cluster
     */
    get(path: '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}'): (params: {
        kubeId: string;
        nodeId: string;
        serviceName: string;
    }) => Promise<cloud.kube.Node>;
    /**
     * List Kubernetes available regions
     * List Kubernetes available regions
     */
    get(path: '/cloud/project/{serviceName}/kube/regions'): (params: {
        serviceName: string;
    }) => Promise<cloud.kube.Region[]>;
    /**
     * Manage labs on your Cloud Project
     * List available public cloud labs
     */
    get(path: '/cloud/project/{serviceName}/lab'): (params: {
        serviceName: string;
    }) => Promise<cloud.Lab[]>;
    /**
     * Manage labs on your Cloud Project
     * Get details of a public cloud lab
     */
    get(path: '/cloud/project/{serviceName}/lab/{labId}'): (params: {
        labId: string;
        serviceName: string;
    }) => Promise<cloud.Lab>;
    /**
     * Manage lab agreements
     * List required agreements to active this lab
     */
    get(path: '/cloud/project/{serviceName}/lab/{labId}/agreement'): (params: {
        labId: string;
        serviceName: string;
    }) => Promise<cloud.LabAgreements>;
    /**
     * Missing description
     * Get planned migrations
     */
    get(path: '/cloud/project/{serviceName}/migration'): (params: {
        serviceName: string;
    }) => Promise<cloud.migration.Migration[]>;
    /**
     * Missing description
     * Get planned migration
     */
    get(path: '/cloud/project/{serviceName}/migration/{migrationId}'): (params: {
        migrationId: string;
        serviceName: string;
    }) => Promise<cloud.migration.Migration>;
    /**
     * Missing description
     * Get private networks
     */
    get(path: '/cloud/project/{serviceName}/network/private'): (params: {
        serviceName: string;
    }) => Promise<cloud.network.Network[]>;
    /**
     * Missing description
     * Get private network
     */
    get(path: '/cloud/project/{serviceName}/network/private/{networkId}'): (params: {
        networkId: string;
        serviceName: string;
    }) => Promise<cloud.network.Network>;
    /**
     * Missing description
     * Get network subnets
     */
    get(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet'): (params: {
        networkId: string;
        serviceName: string;
    }) => Promise<cloud.network.Subnet[]>;
    /**
     * Missing description
     * Get public networks
     */
    get(path: '/cloud/project/{serviceName}/network/public'): (params: {
        serviceName: string;
    }) => Promise<cloud.network.Network[]>;
    /**
     * Manage the operations on your Cloud Project
     * List your operations
     */
    get(path: '/cloud/project/{serviceName}/operation'): (params: {
        serviceName: string;
    }) => Promise<cloud.Operation[]>;
    /**
     * Manage the operations on your Cloud Project
     * Get information about one operation
     */
    get(path: '/cloud/project/{serviceName}/operation/{operationId}'): (params: {
        operationId: string;
        serviceName: string;
    }) => Promise<cloud.Operation>;
    /**
     * List your quota
     * List quotas
     */
    get(path: '/cloud/project/{serviceName}/quota'): (params: {
        serviceName: string;
    }) => Promise<cloud.quota.Quotas[]>;
    /**
     * Manage your regions
     * List your regions
     */
    get(path: '/cloud/project/{serviceName}/region'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Manage your regions
     * Get information about your region
     */
    get(path: '/cloud/project/{serviceName}/region/{regionName}'): (params: {
        regionName: string;
        serviceName: string;
    }) => Promise<cloud.Region>;
    /**
     * Consult quotas
     * List quotas
     */
    get(path: '/cloud/project/{serviceName}/region/{regionName}/quota'): (params: {
        regionName: string;
        serviceName: string;
    }) => Promise<cloud.quota.Quotas>;
    /**
     * Get allowed quotas
     * Get allowed quotas on region
     */
    get(path: '/cloud/project/{serviceName}/region/{regionName}/quota/allowed'): (params: {
        regionName: string;
        serviceName: string;
    }) => Promise<cloud.quota.AllowedQuota[]>;
    /**
     * Manage your automated backups
     * List your automated backups
     */
    get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup'): (params: {
        regionName: string;
        serviceName: string;
    }) => Promise<cloud.Backup[]>;
    /**
     * Manage your automated backups
     * Get details about a backup workflow process
     */
    get(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}'): (params: {
        backupWorkflowId: string;
        regionName: string;
        serviceName: string;
    }) => Promise<cloud.Backup>;
    /**
     * Manage the regions you can add on your project
     * List the regions on which you can ask an access to
     */
    get(path: '/cloud/project/{serviceName}/regionAvailable'): (params: {
        serviceName: string;
    }) => Promise<cloud.AvailableRegion[]>;
    /**
     * Missing description
     * Get all Roles
     */
    get(path: '/cloud/project/{serviceName}/role'): (params: {
        serviceName: string;
    }) => Promise<cloud.role.Roles>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/cloud/project/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Missing description
     * Get snapshots
     */
    get(path: '/cloud/project/{serviceName}/snapshot'): (params: {
        serviceName: string;
        flavorType?: string;
        region?: string;
    }) => Promise<cloud.image.Image[]>;
    /**
     * Missing description
     * Get snapshot details
     */
    get(path: '/cloud/project/{serviceName}/snapshot/{imageId}'): (params: {
        imageId: string;
        serviceName: string;
    }) => Promise<cloud.image.Image>;
    /**
     * Missing description
     * Get SSH keys
     */
    get(path: '/cloud/project/{serviceName}/sshkey'): (params: {
        serviceName: string;
        region?: string;
    }) => Promise<cloud.sshkey.SshKey[]>;
    /**
     * Missing description
     * Get SSH key
     */
    get(path: '/cloud/project/{serviceName}/sshkey/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
    }) => Promise<cloud.sshkey.SshKeyDetail>;
    /**
     * Missing description
     * Get stacks
     */
    get(path: '/cloud/project/{serviceName}/stack'): (params: {
        serviceName: string;
    }) => Promise<cloud.stack.Stack[]>;
    /**
     * Missing description
     * Get stack
     */
    get(path: '/cloud/project/{serviceName}/stack/{stackId}'): (params: {
        serviceName: string;
        stackId: string;
    }) => Promise<cloud.stack.Stack>;
    /**
     * Missing description
     * Get storage containers
     */
    get(path: '/cloud/project/{serviceName}/storage'): (params: {
        serviceName: string;
    }) => Promise<cloud.storage.Container[]>;
    /**
     * Missing description
     * Get storage container
     */
    get(path: '/cloud/project/{serviceName}/storage/{containerId}'): (params: {
        containerId: string;
        serviceName: string;
        noObjects?: boolean;
    }) => Promise<cloud.storage.ContainerDetail>;
    /**
     * Missing description
     * Access to storage API
     */
    get(path: '/cloud/project/{serviceName}/storage/access'): (params: {
        serviceName: string;
    }) => Promise<cloud.storage.ContainerAccess>;
    /**
     * Missing description
     * Get current usage
     */
    get(path: '/cloud/project/{serviceName}/usage/current'): (params: {
        serviceName: string;
    }) => Promise<cloud.usage.UsageCurrent>;
    /**
     * Missing description
     * Get usage forecast
     */
    get(path: '/cloud/project/{serviceName}/usage/forecast'): (params: {
        serviceName: string;
    }) => Promise<cloud.usage.UsageForecast>;
    /**
     * Missing description
     * Usage information details
     */
    get(path: '/cloud/project/{serviceName}/usage/history'): (params: {
        serviceName: string;
        from?: string;
        to?: string;
    }) => Promise<cloud.usage.UsageHistory[]>;
    /**
     * Missing description
     * Usage information details
     */
    get(path: '/cloud/project/{serviceName}/usage/history/{usageId}'): (params: {
        serviceName: string;
        usageId: string;
    }) => Promise<cloud.usage.UsageHistoryDetail>;
    /**
     * Missing description
     * Get all users
     */
    get(path: '/cloud/project/{serviceName}/user'): (params: {
        serviceName: string;
    }) => Promise<cloud.user.User[]>;
    /**
     * Missing description
     * Get user details
     */
    get(path: '/cloud/project/{serviceName}/user/{userId}'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<cloud.user.User>;
    /**
     * Missing description
     * Get RC file of OpenStack
     */
    get(path: '/cloud/project/{serviceName}/user/{userId}/openrc'): (params: {
        serviceName: string;
        userId: number;
        region: string;
        version?: cloud.user.OpenrcVersionEnum;
    }) => Promise<cloud.user.Openrc>;
    /**
     * Missing description
     * Get rclone configuration file
     */
    get(path: '/cloud/project/{serviceName}/user/{userId}/rclone'): (params: {
        serviceName: string;
        userId: number;
        region: string;
    }) => Promise<cloud.user.Rclone>;
    /**
     * Missing description
     * Get user roles
     */
    get(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<cloud.role.Role[]>;
    /**
     * Missing description
     * Get role detail
     */
    get(path: '/cloud/project/{serviceName}/user/{userId}/role/{roleId}'): (params: {
        roleId: string;
        serviceName: string;
        userId: number;
    }) => Promise<cloud.role.Role>;
    /**
     * Missing description
     * Get volumes
     */
    get(path: '/cloud/project/{serviceName}/volume'): (params: {
        serviceName: string;
        region?: string;
    }) => Promise<cloud.volume.Volume[]>;
    /**
     * Missing description
     * Get volume details
     */
    get(path: '/cloud/project/{serviceName}/volume/{volumeId}'): (params: {
        serviceName: string;
        volumeId: string;
    }) => Promise<cloud.volume.Volume>;
    /**
     * Missing description
     * Get volume snapshots
     */
    get(path: '/cloud/project/{serviceName}/volume/snapshot'): (params: {
        serviceName: string;
        region?: string;
    }) => Promise<cloud.volume.Snapshot[]>;
    /**
     * Missing description
     * Get volume snapshot details
     */
    get(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}'): (params: {
        serviceName: string;
        snapshotId: string;
    }) => Promise<cloud.volume.Snapshot>;
    /**
     * Manage the vRack on your Cloud Project
     * Get the linked vRack on your project
     */
    get(path: '/cloud/project/{serviceName}/vrack'): (params: {
        serviceName: string;
    }) => Promise<cloud.Vrack>;
    /**
     * Get services prices for a subsidiary
     * Get services prices for a subsidiary
     */
    get(path: '/cloud/subsidiaryPrice'): (params: {
        flavorId?: string;
        ovhSubsidiary: nichandle.OvhSubsidiaryEnum;
        region?: string;
    }) => Promise<cloud.Price>;
    /**
     * Cloud Archives Account
     * Alter this object properties
     */
    put(path: '/cloud/{serviceName}/pca/{pcaServiceName}'): (params: {
        pcaServiceName: string;
        serviceName: string;
        domain?: string;
        host?: string;
        login?: string;
        password?: string;
        sshkey?: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/serviceInfos'): (params: {
        pcaServiceName: string;
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
     * cloud archives sessions
     * Alter this object properties
     */
    put(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}'): (params: {
        pcaServiceName: string;
        serviceName: string;
        sessionId: string;
        endDate?: string;
        id?: string;
        login?: string;
        name?: string;
        size?: number;
        srcIp?: string;
        startDate?: string;
        state?: cloud.pca.SessionStateEnum;
    }) => Promise<void>;
    /**
     * Operations about the PUBLICCLOUD service
     * Alter this object properties
     */
    put(path: '/cloud/project/{serviceName}'): (params: {
        serviceName: string;
        access?: cloud.AccessTypeEnum;
        creationDate?: string;
        description?: string;
        expiration?: string;
        orderId?: number;
        planCode?: string;
        project_id?: string;
        status?: cloud.project.ProjectStatus;
        unleash?: boolean;
    }) => Promise<void>;
    /**
     * Cloud alerting consumption
     * Alter this object properties
     */
    put(path: '/cloud/project/{serviceName}/alerting/{id}'): (params: {
        id: string;
        serviceName: string;
        creationDate?: string;
        delay?: cloud.AlertingDelayEnum;
        email?: string;
        formattedMonthlyThreshold?: orderPrice;
        monthlyThreshold?: number;
    }) => Promise<void>;
    /**
     * Manage registries
     * Update the registry
     */
    put(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}'): (params: {
        registryID: string;
        serviceName: string;
        name: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Alter an instance
     */
    put(path: '/cloud/project/{serviceName}/instance/{instanceId}'): (params: {
        instanceId: string;
        serviceName: string;
        instanceName: string;
    }) => Promise<void>;
    /**
     *
     * Update a stream
     */
    put(path: '/cloud/project/{serviceName}/io/stream/{streamId}'): (params: {
        serviceName: string;
        streamId: string;
        backlog?: string;
        description?: string;
        id?: string;
        kind?: cloud.project.io.StreamKindEnum;
        name?: string;
        regions?: string[];
        retention?: string;
        status?: cloud.project.io.StreamStatusEnum;
        throttling?: number;
    }) => Promise<cloud.project.io.Stream>;
    /**
     * Manage your clusters
     * Update information about your managed Kubernetes cluster
     */
    put(path: '/cloud/project/{serviceName}/kube/{kubeId}'): (params: {
        kubeId: string;
        serviceName: string;
        name: string;
    }) => Promise<void>;
    /**
     * Manage the update policy of your cluster
     * Change the update policy of your cluster
     */
    put(path: '/cloud/project/{serviceName}/kube/{kubeId}/updatePolicy'): (params: {
        kubeId: string;
        serviceName: string;
        updatePolicy: cloud.kube.UpdatePolicy;
    }) => Promise<void>;
    /**
     * Missing description
     * Update planned migration
     */
    put(path: '/cloud/project/{serviceName}/migration/{migrationId}'): (params: {
        migrationId: string;
        serviceName: string;
        date: string;
    }) => Promise<cloud.migration.Migration>;
    /**
     * Missing description
     * Rename private network
     */
    put(path: '/cloud/project/{serviceName}/network/private/{networkId}'): (params: {
        networkId: string;
        serviceName: string;
        name: string;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/cloud/project/{serviceName}/serviceInfos'): (params: {
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
     * Missing description
     * Update your storage container
     */
    put(path: '/cloud/project/{serviceName}/storage/{containerId}'): (params: {
        containerId: string;
        serviceName: string;
        containerType?: cloud.storage.TypeEnum;
    }) => Promise<void>;
    /**
     * Missing description
     * Update roles of a user
     */
    put(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {
        serviceName: string;
        userId: number;
        rolesIds: string[];
    }) => Promise<cloud.user.UserDetail>;
    /**
     * Missing description
     * Update a volume
     */
    put(path: '/cloud/project/{serviceName}/volume/{volumeId}'): (params: {
        serviceName: string;
        volumeId: string;
        description?: string;
        name?: string;
    }) => Promise<cloud.volume.Volume>;
    /**
     * restore operations
     * Create a restore task for session
     */
    post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}/restore'): (params: {
        pcaServiceName: string;
        serviceName: string;
        sessionId: string;
    }) => Promise<pca.Task>;
    /**
     * List the pca.Task objects
     * Create a cloud archives task
     */
    post(path: '/cloud/{serviceName}/pca/{pcaServiceName}/tasks'): (params: {
        pcaServiceName: string;
        serviceName: string;
        fileIds: string[];
        sessionId: string;
        taskFunction: cloud.pca.TaskTypeEnum;
    }) => Promise<pca.Task>;
    /**
     * Start a new cloud project
     * Start a new cloud project
     */
    post(path: '/cloud/createProject'): (params?: {
        credit?: number;
        description?: string;
        voucher?: string;
    }) => Promise<cloud.project.NewProject>;
    /**
     * List the cloud.Acl objects
     * Create new ACL
     */
    post(path: '/cloud/project/{serviceName}/acl'): (params: {
        serviceName: string;
        accountId: string;
        type: cloud.AclTypeEnum;
    }) => Promise<cloud.Acl>;
    /**
     * Missing description
     * Activate monthly billing on multiple instances
     */
    post(path: '/cloud/project/{serviceName}/activateMonthlyBilling'): (params: {
        serviceName: string;
        instances: cloud.instance.MonthlyInstanceBulkParams[];
    }) => Promise<cloud.instance.InstanceDetail[]>;
    /**
     * List the cloud.Alerting objects
     * Add new alert
     */
    post(path: '/cloud/project/{serviceName}/alerting'): (params: {
        serviceName: string;
        delay: cloud.AlertingDelayEnum;
        email: string;
        monthlyThreshold: number;
    }) => Promise<cloud.Alerting>;
    /**
     * cancel operations
     * Cancel project creation
     */
    post(path: '/cloud/project/{serviceName}/cancel'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/cloud/project/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/cloud/project/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * Manage registries
     * Create a new registry
     */
    post(path: '/cloud/project/{serviceName}/containerRegistry'): (params: {
        serviceName: string;
        name: string;
        region: string;
    }) => Promise<cloud.containerRegistry.Registry>;
    /**
     * Manage users
     * Create a new registry user
     */
    post(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users'): (params: {
        registryID: string;
        serviceName: string;
        email?: string;
        login?: string;
    }) => Promise<cloud.containerRegistry.User>;
    /**
     * List the cloud.Credit objects
     * Add credit to your project
     */
    post(path: '/cloud/project/{serviceName}/credit'): (params: {
        serviceName: string;
        code: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Create a new instance
     */
    post(path: '/cloud/project/{serviceName}/instance'): (params: {
        serviceName: string;
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
    }) => Promise<cloud.instance.InstanceDetail>;
    /**
     * Missing description
     * Activate monthly billing on instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<cloud.instance.InstanceDetail>;
    /**
     * Missing description
     * Return initial credentials of applications installed from public image
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/applicationAccess'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<cloud.instance.ApplicationAccess>;
    /**
     * Missing description
     * Create interface on an instance and attached it to a network
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface'): (params: {
        instanceId: string;
        serviceName: string;
        ip?: string;
        networkId: string;
    }) => Promise<cloud.instanceInterface.Interface>;
    /**
     * Missing description
     * Reboot an instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reboot'): (params: {
        instanceId: string;
        serviceName: string;
        type: cloud.instance.RebootTypeEnum;
    }) => Promise<void>;
    /**
     * Missing description
     * Reinstall an instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/reinstall'): (params: {
        instanceId: string;
        serviceName: string;
        imageId: string;
    }) => Promise<cloud.instance.InstanceDetail>;
    /**
     * Missing description
     * Enable or disable rescue mode
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/rescueMode'): (params: {
        instanceId: string;
        serviceName: string;
        imageId?: string;
        rescue: boolean;
    }) => Promise<cloud.instance.RescueAdminPassword>;
    /**
     * Missing description
     * Migrate your instance to another flavor
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resize'): (params: {
        instanceId: string;
        serviceName: string;
        flavorId: string;
    }) => Promise<cloud.instance.InstanceDetail>;
    /**
     * Missing description
     * Resume a suspended instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/resume'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Snapshot an instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/snapshot'): (params: {
        instanceId: string;
        serviceName: string;
        snapshotName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Start an instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/start'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Stop an instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/stop'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Get VNC access to your instance
     */
    post(path: '/cloud/project/{serviceName}/instance/{instanceId}/vnc'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<cloud.instance.InstanceVnc>;
    /**
     * Missing description
     * Create multiple instances
     */
    post(path: '/cloud/project/{serviceName}/instance/bulk'): (params: {
        serviceName: string;
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
    }) => Promise<cloud.instance.Instance[]>;
    /**
     * Missing description
     * Create a group
     */
    post(path: '/cloud/project/{serviceName}/instance/group'): (params: {
        serviceName: string;
        name: string;
        region: string;
        type: cloud.instancegroup.InstanceGroupTypeEnum;
    }) => Promise<cloud.instancegroup.InstanceGroup>;
    /**
     *
     * Create a stream
     */
    post(path: '/cloud/project/{serviceName}/io/stream'): (params: {
        serviceName: string;
        description: string;
        kind: cloud.project.io.StreamKindEnum;
        name: string;
        region: string;
    }) => Promise<cloud.project.io.Stream>;
    /**
     *
     * Create a new subscription
     */
    post(path: '/cloud/project/{serviceName}/io/stream/{streamId}/subscription'): (params: {
        serviceName: string;
        streamId: string;
        name: string;
    }) => Promise<cloud.project.io.stream.Subscription>;
    /**
     *
     * Reset a cursor
     */
    post(path: '/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}/resetCursor'): (params: {
        serviceName: string;
        streamId: string;
        subscriptionId: string;
    }) => Promise<void>;
    /**
     *
     * Create a token
     */
    post(path: '/cloud/project/{serviceName}/io/stream/{streamId}/token'): (params: {
        serviceName: string;
        streamId: string;
        action: cloud.project.io.stream.TokenActionEnum;
    }) => Promise<cloud.project.io.stream.Token>;
    /**
     * Missing description
     * Attach failover ip to an instance
     */
    post(path: '/cloud/project/{serviceName}/ip/failover/{id}/attach'): (params: {
        id: string;
        serviceName: string;
        instanceId: string;
    }) => Promise<cloud.ip.FailoverIp>;
    /**
     * Manage your clusters
     * Create a new managed Kubernetes cluster
     */
    post(path: '/cloud/project/{serviceName}/kube'): (params: {
        serviceName: string;
        name?: string;
        region: cloud.kube.Region;
        version?: cloud.kube.Version;
    }) => Promise<cloud.kube.Cluster>;
    /**
     * Get your cluster configuration
     * Generate kubeconfig file
     */
    post(path: '/cloud/project/{serviceName}/kube/{kubeId}/kubeconfig'): (params: {
        kubeId: string;
        serviceName: string;
    }) => Promise<cloud.kube.Kubeconfig>;
    /**
     * Manage your nodes
     * Deploy a node for your cluster
     */
    post(path: '/cloud/project/{serviceName}/kube/{kubeId}/node'): (params: {
        kubeId: string;
        serviceName: string;
        flavorName: string;
        name?: string;
    }) => Promise<cloud.kube.Node>;
    /**
     * Reset your cluster
     * Reset cluster: all Kubernetes data will be erased (pods, services, configuration, etc), nodes will be either deleted or reinstalled
     */
    post(path: '/cloud/project/{serviceName}/kube/{kubeId}/reset'): (params: {
        kubeId: string;
        serviceName: string;
        version?: cloud.kube.Version;
        workerNodesPolicy?: cloud.kube.ResetWorkerNodesPolicy;
    }) => Promise<void>;
    /**
     * Update cluster
     * Force cluster and node update to the latest patch within minor version or next minor version
     */
    post(path: '/cloud/project/{serviceName}/kube/{kubeId}/update'): (params: {
        kubeId: string;
        serviceName: string;
        strategy?: cloud.kube.UpdateStrategy;
    }) => Promise<void>;
    /**
     * Manage labs on your Cloud Project
     * Activate a lab on your Cloud Project
     */
    post(path: '/cloud/project/{serviceName}/lab/{labId}'): (params: {
        labId: string;
        serviceName: string;
    }) => Promise<cloud.Operation>;
    /**
     * Missing description
     * Create a new network
     */
    post(path: '/cloud/project/{serviceName}/network/private'): (params: {
        serviceName: string;
        name: string;
        regions?: string[];
        vlanId?: number;
    }) => Promise<cloud.network.Network>;
    /**
     * Missing description
     * Activate private network in a new region
     */
    post(path: '/cloud/project/{serviceName}/network/private/{networkId}/region'): (params: {
        networkId: string;
        serviceName: string;
        region: string;
    }) => Promise<cloud.network.Network>;
    /**
     * Missing description
     * Create a new network subnet
     */
    post(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet'): (params: {
        networkId: string;
        serviceName: string;
        dhcp: boolean;
        end: string;
        network: string;
        noGateway: boolean;
        region: string;
        start: string;
    }) => Promise<cloud.network.Subnet>;
    /**
     * Missing description
     * Get OVH playground session to use the openstack terminal
     */
    post(path: '/cloud/project/{serviceName}/openstackClient'): (params: {
        serviceName: string;
    }) => Promise<cloud.openstackClient.Session>;
    /**
     * Manage your regions
     * Request access to a region
     */
    post(path: '/cloud/project/{serviceName}/region'): (params: {
        serviceName: string;
        region: string;
    }) => Promise<cloud.Region>;
    /**
     * Consult quotas
     * Change project quotas on region
     */
    post(path: '/cloud/project/{serviceName}/region/{regionName}/quota'): (params: {
        regionName: string;
        serviceName: string;
        name: string;
    }) => Promise<cloud.Operation>;
    /**
     * Manage your automated backups
     * Create a new automated backup
     */
    post(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup'): (params: {
        regionName: string;
        serviceName: string;
        cron: string;
        instanceId: string;
        maxExecutionCount?: number;
        name: string;
        rotation: number;
    }) => Promise<cloud.Backup>;
    /**
     * retain operations
     * Do not expire the project, and retain it. You will have to pay for the resources you will use after using this call
     */
    post(path: '/cloud/project/{serviceName}/retain'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Create SSH key
     */
    post(path: '/cloud/project/{serviceName}/sshkey'): (params: {
        serviceName: string;
        name: string;
        publicKey: string;
        region?: string;
    }) => Promise<cloud.sshkey.SshKeyDetail>;
    /**
     * Missing description
     * Get OVH playground session with a stack installed to use the openstack terminal
     */
    post(path: '/cloud/project/{serviceName}/stack/{stackId}/client'): (params: {
        serviceName: string;
        stackId: string;
    }) => Promise<cloud.openstackClient.Session>;
    /**
     * Missing description
     * Create container
     */
    post(path: '/cloud/project/{serviceName}/storage'): (params: {
        serviceName: string;
        archive: boolean;
        containerName: string;
        region: string;
    }) => Promise<cloud.storage.Container>;
    /**
     * Missing description
     * Add CORS support on your container
     */
    post(path: '/cloud/project/{serviceName}/storage/{containerId}/cors'): (params: {
        containerId: string;
        serviceName: string;
        origin: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Get a public temporary URL to access to one of your object
     */
    post(path: '/cloud/project/{serviceName}/storage/{containerId}/publicUrl'): (params: {
        containerId: string;
        serviceName: string;
        expirationDate: string;
        objectName: string;
    }) => Promise<cloud.storage.ContainerObjectTempURL>;
    /**
     * Missing description
     * Deploy your container files as a static web site
     */
    post(path: '/cloud/project/{serviceName}/storage/{containerId}/static'): (params: {
        containerId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Create openstack user with only access to this container
     */
    post(path: '/cloud/project/{serviceName}/storage/{containerId}/user'): (params: {
        containerId: string;
        serviceName: string;
        description?: string;
        right: cloud.storage.RightEnum;
    }) => Promise<cloud.user.UserDetail>;
    /**
     * Missing description
     * Access to storage API
     */
    post(path: '/cloud/project/{serviceName}/storage/access'): (params: {
        serviceName: string;
    }) => Promise<cloud.storage.ContainerAccess>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/cloud/project/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * unleash operations
     * Request more quota on your /cloud project
     */
    post(path: '/cloud/project/{serviceName}/unleash'): (params: {
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Create user
     */
    post(path: '/cloud/project/{serviceName}/user'): (params: {
        serviceName: string;
        description?: string;
        role?: cloud.user.RoleEnum;
        roles?: cloud.user.RoleEnum[];
    }) => Promise<cloud.user.UserDetail>;
    /**
     * Missing description
     * Regenerate user password
     */
    post(path: '/cloud/project/{serviceName}/user/{userId}/regeneratePassword'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<cloud.user.UserDetail>;
    /**
     * Missing description
     * Add a role to a user
     */
    post(path: '/cloud/project/{serviceName}/user/{userId}/role'): (params: {
        serviceName: string;
        userId: number;
        roleId: string;
    }) => Promise<cloud.user.UserDetail>;
    /**
     * Missing description
     * Get token for user
     */
    post(path: '/cloud/project/{serviceName}/user/{userId}/token'): (params: {
        serviceName: string;
        userId: number;
        password: string;
    }) => Promise<cloud.authentication.Token>;
    /**
     * Missing description
     * Create a volume
     */
    post(path: '/cloud/project/{serviceName}/volume'): (params: {
        serviceName: string;
        description?: string;
        imageId?: string;
        name?: string;
        region: string;
        size: number;
        snapshotId?: string;
        type: cloud.volume.VolumeTypeEnum;
    }) => Promise<cloud.volume.Volume>;
    /**
     * Missing description
     * Attach a volume on an instance
     */
    post(path: '/cloud/project/{serviceName}/volume/{volumeId}/attach'): (params: {
        serviceName: string;
        volumeId: string;
        instanceId: string;
    }) => Promise<cloud.volume.Volume>;
    /**
     * Missing description
     * Detach a volume from an instance
     */
    post(path: '/cloud/project/{serviceName}/volume/{volumeId}/detach'): (params: {
        serviceName: string;
        volumeId: string;
        instanceId: string;
    }) => Promise<cloud.volume.Volume>;
    /**
     * Missing description
     * Snapshot a volume
     */
    post(path: '/cloud/project/{serviceName}/volume/{volumeId}/snapshot'): (params: {
        serviceName: string;
        volumeId: string;
        description?: string;
        name?: string;
    }) => Promise<cloud.volume.Snapshot>;
    /**
     * Missing description
     * Extend a volume
     */
    post(path: '/cloud/project/{serviceName}/volume/{volumeId}/upsize'): (params: {
        serviceName: string;
        volumeId: string;
        size: number;
    }) => Promise<cloud.volume.Volume>;
    /**
     * Manage the vRack on your Cloud Project
     * Order and attach a new vRack on your project
     */
    post(path: '/cloud/project/{serviceName}/vrack'): (params: {
        serviceName: string;
    }) => Promise<cloud.Operation>;
    /**
     * cloud archives sessions
     * Create a delete task for all files in session
     */
    delete(path: '/cloud/{serviceName}/pca/{pcaServiceName}/sessions/{sessionId}'): (params: {
        pcaServiceName: string;
        serviceName: string;
        sessionId: string;
    }) => Promise<pca.Task>;
    /**
     * Cloud ACL
     * Delete ACL
     */
    delete(path: '/cloud/project/{serviceName}/acl/{accountId}'): (params: {
        accountId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Cloud alerting consumption
     * Delete alerting
     */
    delete(path: '/cloud/project/{serviceName}/alerting/{id}'): (params: {
        id: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Manage registries
     * Delete a registry
     */
    delete(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}'): (params: {
        registryID: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Manage users
     * Delete a registry user
     */
    delete(path: '/cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}'): (params: {
        registryID: string;
        serviceName: string;
        userID: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete an instance
     */
    delete(path: '/cloud/project/{serviceName}/instance/{instanceId}'): (params: {
        instanceId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete an interface
     */
    delete(path: '/cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}'): (params: {
        instanceId: string;
        interfaceId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete a group
     */
    delete(path: '/cloud/project/{serviceName}/instance/group/{groupId}'): (params: {
        groupId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     *
     * Delete a stream
     */
    delete(path: '/cloud/project/{serviceName}/io/stream/{streamId}'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<void>;
    /**
     *
     * Delete a subscription
     */
    delete(path: '/cloud/project/{serviceName}/io/stream/{streamId}/subscription/{subscriptionId}'): (params: {
        serviceName: string;
        streamId: string;
        subscriptionId: string;
    }) => Promise<void>;
    /**
     *
     * Delete a token
     */
    delete(path: '/cloud/project/{serviceName}/io/stream/{streamId}/token/{tokenId}'): (params: {
        serviceName: string;
        streamId: string;
        tokenId: string;
    }) => Promise<void>;
    /**
     * Manage your clusters
     * Delete your managed Kubernetes cluster
     */
    delete(path: '/cloud/project/{serviceName}/kube/{kubeId}'): (params: {
        kubeId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Manage your nodes
     * Delete a node on your cluster
     */
    delete(path: '/cloud/project/{serviceName}/kube/{kubeId}/node/{nodeId}'): (params: {
        kubeId: string;
        nodeId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete private network
     */
    delete(path: '/cloud/project/{serviceName}/network/private/{networkId}'): (params: {
        networkId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete a network subnet
     */
    delete(path: '/cloud/project/{serviceName}/network/private/{networkId}/subnet/{subnetId}'): (params: {
        networkId: string;
        serviceName: string;
        subnetId: string;
    }) => Promise<void>;
    /**
     * Manage your automated backups
     * Delete a backup workflow process
     */
    delete(path: '/cloud/project/{serviceName}/region/{regionName}/workflow/backup/{backupWorkflowId}'): (params: {
        backupWorkflowId: string;
        regionName: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete a snapshot
     */
    delete(path: '/cloud/project/{serviceName}/snapshot/{imageId}'): (params: {
        imageId: string;
        serviceName: string;
    }) => Promise<cloud.image.Image>;
    /**
     * Missing description
     * Delete SSH key
     */
    delete(path: '/cloud/project/{serviceName}/sshkey/{keyId}'): (params: {
        keyId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete container
     */
    delete(path: '/cloud/project/{serviceName}/storage/{containerId}'): (params: {
        containerId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete CORS support on your container
     */
    delete(path: '/cloud/project/{serviceName}/storage/{containerId}/cors'): (params: {
        containerId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete user
     */
    delete(path: '/cloud/project/{serviceName}/user/{userId}'): (params: {
        serviceName: string;
        userId: number;
    }) => Promise<void>;
    /**
     * Missing description
     * Remove role for a user
     */
    delete(path: '/cloud/project/{serviceName}/user/{userId}/role/{roleId}'): (params: {
        roleId: string;
        serviceName: string;
        userId: number;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete a volume
     */
    delete(path: '/cloud/project/{serviceName}/volume/{volumeId}'): (params: {
        serviceName: string;
        volumeId: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete a volume snapshot
     */
    delete(path: '/cloud/project/{serviceName}/volume/snapshot/{snapshotId}'): (params: {
        serviceName: string;
        snapshotId: string;
    }) => Promise<void>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type orderPrice = order.Price;
