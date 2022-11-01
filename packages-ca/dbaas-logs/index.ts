import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dbaas/logs Models
 * Source: https://ca.api.ovh.com/1.0/dbaas/logs.json
 */
export namespace dbaas {
    export namespace logs {
        /**
         * Alias
         * interface fullName: dbaas.logs.Alias.Alias
         */
        export interface Alias {
            aliasId: string;
            createdAt: string;
            description?: string;
            isEditable: boolean;
            name: string;
            updatedAt?: string;
        }
        /**
         * Stream archive
         * interface fullName: dbaas.logs.Archive.Archive
         */
        export interface Archive {
            archiveId: string;
            createdAt?: string;
            filename: string;
            md5: string;
            retrievalDelay: number;
            retrievalState: dbaas.logs.ArchiveRetrievalStateEnum;
            sha256: string;
            size: number;
        }
        /**
         * Possible values for ArchiveRetrievalStateEnum
         * type fullname: dbaas.logs.ArchiveRetrievalStateEnum
         */
        export type ArchiveRetrievalStateEnum = "sealed" | "unsealed" | "unsealing"
        /**
         * Stream archive url
         * interface fullName: dbaas.logs.ArchiveUrl.ArchiveUrl
         */
        export interface ArchiveUrl {
            expirationDate: string;
            url: string;
        }
        /**
         * Cluster
         * interface fullName: dbaas.logs.Cluster.Cluster
         */
        export interface Cluster {
            archiveAllowedNetworks: string[];
            clusterId: string;
            clusterType: dbaas.logs.ClusterClusterTypeEnum;
            dedicatedInputPEM: string;
            defaultRetentionId: string;
            directInputAllowedNetworks: string[];
            directInputPEM: string;
            hostname: string;
            isDefault: boolean;
            isUnlocked: boolean;
            queryAllowedNetworks: string[];
            region: dbaas.logs.ClusterRegionEnum;
        }
        /**
         * Possible values for ClusterClusterTypeEnum
         * type fullname: dbaas.logs.ClusterClusterTypeEnum
         */
        export type ClusterClusterTypeEnum = "DEDICATED" | "PRO" | "TRIAL"
        /**
         * Possible values for ClusterRegionEnum
         * type fullname: dbaas.logs.ClusterRegionEnum
         */
        export type ClusterRegionEnum = "BHS" | "GRA" | "P-19" | "RBX" | "SBG"
        /**
         * Cluster retention
         * interface fullName: dbaas.logs.ClusterRetention.ClusterRetention
         */
        export interface ClusterRetention {
            duration?: string;
            isSupported: boolean;
            retentionId: string;
        }
        /**
         * Cluster network acls
         * interface fullName: dbaas.logs.ClusterUpdate.ClusterUpdate
         */
        export interface ClusterUpdate {
            archiveAllowedNetworks?: string[];
            directInputAllowedNetworks?: string[];
            queryAllowedNetworks?: string[];
        }
        /**
         * Graylog dashboard
         * interface fullName: dbaas.logs.Dashboard.Dashboard
         */
        export interface Dashboard {
            createdAt: string;
            dashboardId: string;
            description: string;
            isEditable: boolean;
            title: string;
            updatedAt?: string;
        }
        /**
         * Possible values for DeliveryStatusEnum
         * type fullname: dbaas.logs.DeliveryStatusEnum
         */
        export type DeliveryStatusEnum = "DELETING" | "DELIVERING" | "READY"
        /**
         * Encryption key
         * interface fullName: dbaas.logs.EncryptionKey.EncryptionKey
         */
        export interface EncryptionKey {
            algorithm: dbaas.logs.EncryptionKeyAlgorithmEnum;
            content: string;
            createdAt: string;
            encryptionKeyId: string;
            fingerprint: string;
            isEditable: boolean;
            nbArchive?: number;
            title: string;
            uid: string;
        }
        /**
         * Possible values for EncryptionKeyAlgorithmEnum
         * type fullname: dbaas.logs.EncryptionKeyAlgorithmEnum
         */
        export type EncryptionKeyAlgorithmEnum = "ECC25519" | "RSA4096"
        /**
         * Input engine
         * interface fullName: dbaas.logs.Engine.Engine
         */
        export interface Engine {
            engineId: string;
            isDeprecated: boolean;
            name: dbaas.logs.EngineNameEnum;
            version: string;
        }
        /**
         * Possible values for EngineNameEnum
         * type fullname: dbaas.logs.EngineNameEnum
         */
        export type EngineNameEnum = "FLOWGGER" | "LOGSTASH" | "TEST"
        /**
         * Flowgger configuration
         * interface fullName: dbaas.logs.FlowggerConfiguration.FlowggerConfiguration
         */
        export interface FlowggerConfiguration {
            logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        /**
         * Possible values for FlowggerConfigurationLogFormatEnum
         * type fullname: dbaas.logs.FlowggerConfigurationLogFormatEnum
         */
        export type FlowggerConfigurationLogFormatEnum = "CAPNP" | "GELF" | "LTSV" | "RFC5424"
        /**
         * Possible values for FlowggerConfigurationLogFramingEnum
         * type fullname: dbaas.logs.FlowggerConfigurationLogFramingEnum
         */
        export type FlowggerConfigurationLogFramingEnum = "CAPNP" | "LINE" | "NUL" | "SYSLEN"
        /**
         * Helper
         * interface fullName: dbaas.logs.Helper.Helper
         */
        export interface Helper {
            description: string;
            engineId: string;
            helperId: string;
            sections: dbaas.logs.HelperSection[];
            title: string;
        }
        /**
         * Helper section
         * interface fullName: dbaas.logs.HelperSection.HelperSection
         */
        export interface HelperSection {
            content: string;
            name: dbaas.logs.HelperSectionNameEnum;
        }
        /**
         * Possible values for HelperSectionName
         * type fullname: dbaas.logs.HelperSectionNameEnum
         */
        export type HelperSectionNameEnum = "LOGSTASH_FILTER" | "LOGSTASH_INPUT" | "LOGSTASH_PATTERN"
        /**
         * Index
         * interface fullName: dbaas.logs.Index.Index
         */
        export interface Index {
            alertNotifyEnabled?: boolean;
            createdAt: string;
            description?: string;
            indexId: string;
            isEditable: boolean;
            maxSize: number;
            name: string;
            nbShard?: number;
            updatedAt?: string;
        }
        /**
         * Input
         * interface fullName: dbaas.logs.Input.Input
         */
        export interface Input {
            allowedNetworks?: string[];
            createdAt: string;
            description: string;
            engineId: string;
            exposedPort?: string;
            hostname: string;
            inputId: string;
            isRestartRequired: boolean;
            nbInstance?: number;
            publicAddress: string;
            sslCertificate: string;
            status: dbaas.logs.InputStatusEnum;
            streamId: string;
            title: string;
            updatedAt?: string;
        }
        /**
         * Action on input
         * interface fullName: dbaas.logs.InputAction.InputAction
         */
        export interface InputAction {
            isAllowed: boolean;
            type: dbaas.logs.InputActionTypeEnum;
        }
        /**
         * Possible values for InputActionTypeEnum
         * type fullname: dbaas.logs.InputActionTypeEnum
         */
        export type InputActionTypeEnum = "DESTROY" | "END" | "LOG" | "RESTART" | "START" | "TEST"
        /**
         * Flowgger configuration
         * interface fullName: dbaas.logs.InputConfigurationFlowggerUpdate.InputConfigurationFlowggerUpdate
         */
        export interface InputConfigurationFlowggerUpdate {
            logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        /**
         * Logstash configuration
         * interface fullName: dbaas.logs.InputConfigurationLogstashUpdate.InputConfigurationLogstashUpdate
         */
        export interface InputConfigurationLogstashUpdate {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        /**
         * Input configuration
         * interface fullName: dbaas.logs.InputCreation.InputCreation
         */
        export interface InputCreation {
            allowedNetworks?: string[];
            description: string;
            engineId: string;
            exposedPort?: string;
            nbInstance?: number;
            streamId: string;
            title: string;
        }
        /**
         * Possible values for InputStatusEnum
         * type fullname: dbaas.logs.InputStatusEnum
         */
        export type InputStatusEnum = "INIT" | "PENDING" | "PROCESSING" | "RUNNING"
        /**
         * Input configuration update
         * interface fullName: dbaas.logs.InputUpdate.InputUpdate
         */
        export interface InputUpdate {
            allowedNetworks?: string[];
            description: string;
            engineId: string;
            exposedPort?: string;
            nbInstance?: number;
            streamId: string;
            title: string;
        }
        /**
         * Kibana instance
         * interface fullName: dbaas.logs.Kibana.Kibana
         */
        export interface Kibana {
            createdAt: string;
            deliveryStatus: dbaas.logs.DeliveryStatusEnum;
            description: string;
            isEditable: boolean;
            kibanaId: string;
            name: string;
            updatedAt?: string;
        }
        /**
         * New Kibana instance
         * interface fullName: dbaas.logs.KibanaCreation.KibanaCreation
         */
        export interface KibanaCreation {
            description: string;
        }
        /**
         * Kibana update
         * interface fullName: dbaas.logs.KibanaUpdate.KibanaUpdate
         */
        export interface KibanaUpdate {
            description: string;
        }
        /**
         * Logstash configuration
         * interface fullName: dbaas.logs.LogstashConfiguration.LogstashConfiguration
         */
        export interface LogstashConfiguration {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        /**
         * Member
         * interface fullName: dbaas.logs.Member.Member
         */
        export interface Member {
            createdAt: string;
            note?: string;
            username: string;
        }
        /**
         * Asynchronous operation
         * interface fullName: dbaas.logs.Operation.Operation
         */
        export interface Operation {
            aliasId?: string;
            createdAt: string;
            dashboardId?: string;
            indexId?: string;
            inputId?: string;
            kibanaId?: string;
            operationId: string;
            osdId?: string;
            roleId?: string;
            state: dbaas.logs.OperationStateEnum;
            streamId?: string;
            updatedAt?: string;
        }
        /**
         * Possible values for OperationStateEnum
         * type fullname: dbaas.logs.OperationStateEnum
         */
        export type OperationStateEnum = "FAILURE" | "PENDING" | "RECEIVED" | "RETRY" | "REVOKED" | "RUNNING" | "STARTED" | "SUCCESS"
        /**
         * OpenSearch Dashboards instance
         * interface fullName: dbaas.logs.Osd.Osd
         */
        export interface Osd {
            createdAt: string;
            deliveryStatus: dbaas.logs.DeliveryStatusEnum;
            description: string;
            isEditable: boolean;
            name: string;
            osdId: string;
            updatedAt?: string;
        }
        /**
         * Osd creation body
         * interface fullName: dbaas.logs.OsdCreation.OsdCreation
         */
        export interface OsdCreation {
            description: string;
        }
        /**
         * OpenSearch Dashboards update
         * interface fullName: dbaas.logs.OsdUpdate.OsdUpdate
         */
        export interface OsdUpdate {
            description: string;
        }
        /**
         * New Elasticsearch alias
         * interface fullName: dbaas.logs.OutputElasticsearchAliasCreation.OutputElasticsearchAliasCreation
         */
        export interface OutputElasticsearchAliasCreation {
            description: string;
            suffix: string;
        }
        /**
         * Link given Elasticsearch index to alias
         * interface fullName: dbaas.logs.OutputElasticsearchAliasIndexCreation.OutputElasticsearchAliasIndexCreation
         */
        export interface OutputElasticsearchAliasIndexCreation {
            indexId: string;
        }
        /**
         * Link given Graylog stream to Elasticsearch alias
         * interface fullName: dbaas.logs.OutputElasticsearchAliasStreamCreation.OutputElasticsearchAliasStreamCreation
         */
        export interface OutputElasticsearchAliasStreamCreation {
            streamId: string;
        }
        /**
         * Elasticsearch alias update
         * interface fullName: dbaas.logs.OutputElasticsearchAliasUpdate.OutputElasticsearchAliasUpdate
         */
        export interface OutputElasticsearchAliasUpdate {
            description: string;
        }
        /**
         * New Elasticsearch index
         * interface fullName: dbaas.logs.OutputElasticsearchIndexCreation.OutputElasticsearchIndexCreation
         */
        export interface OutputElasticsearchIndexCreation {
            alertNotifyEnabled?: boolean;
            description: string;
            nbShard?: number;
            suffix: string;
        }
        /**
         * Elasticsearch index update
         * interface fullName: dbaas.logs.OutputElasticsearchIndexUpdate.OutputElasticsearchIndexUpdate
         */
        export interface OutputElasticsearchIndexUpdate {
            alertNotifyEnabled?: boolean;
            description: string;
        }
        /**
         * New Graylog dashboard
         * interface fullName: dbaas.logs.OutputGraylogDashboardCreation.OutputGraylogDashboardCreation
         */
        export interface OutputGraylogDashboardCreation {
            description: string;
            title: string;
        }
        /**
         * Clone given Graylog dashboard
         * interface fullName: dbaas.logs.OutputGraylogDashboardDuplicateCreation.OutputGraylogDashboardDuplicateCreation
         */
        export interface OutputGraylogDashboardDuplicateCreation {
            description: string;
            streamId?: string;
            title: string;
        }
        /**
         * Graylog dahsboard update
         * interface fullName: dbaas.logs.OutputGraylogDashboardUpdate.OutputGraylogDashboardUpdate
         */
        export interface OutputGraylogDashboardUpdate {
            description: string;
            title: string;
        }
        /**
         * New Graylog alert
         * interface fullName: dbaas.logs.OutputGraylogStreamAlertCreation.OutputGraylogStreamAlertCreation
         */
        export interface OutputGraylogStreamAlertCreation {
            backlog: number;
            conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum;
            constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum;
            field?: string;
            grace: number;
            queryFilter?: string;
            repeatNotificationsEnabled?: boolean;
            threshold?: number;
            thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum;
            time?: number;
            title: string;
            value?: string;
        }
        /**
         * Graylog alert update
         * interface fullName: dbaas.logs.OutputGraylogStreamAlertUpdate.OutputGraylogStreamAlertUpdate
         */
        export interface OutputGraylogStreamAlertUpdate {
            backlog: number;
            conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum;
            constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum;
            field?: string;
            grace: number;
            queryFilter?: string;
            repeatNotificationsEnabled?: boolean;
            threshold?: number;
            thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum;
            time?: number;
            title: string;
            value?: string;
        }
        /**
         * New Graylog stream
         * interface fullName: dbaas.logs.OutputGraylogStreamCreation.OutputGraylogStreamCreation
         */
        export interface OutputGraylogStreamCreation {
            coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum;
            description: string;
            encryptionKeysIds?: string[];
            indexingEnabled?: boolean;
            indexingMaxSize?: number;
            indexingNotifyEnabled?: boolean;
            parentStreamId?: string;
            pauseIndexingOnMaxSize?: boolean;
            retentionId?: string;
            title: string;
            webSocketEnabled?: boolean;
        }
        /**
         * New rule on Graylog stream
         * interface fullName: dbaas.logs.OutputGraylogStreamRuleCreation.OutputGraylogStreamRuleCreation
         */
        export interface OutputGraylogStreamRuleCreation {
            field: string;
            isInverted?: boolean;
            operator: dbaas.logs.StreamRuleOperatorEnum;
            value: string;
        }
        /**
         * Graylog stream update
         * interface fullName: dbaas.logs.OutputGraylogStreamUpdate.OutputGraylogStreamUpdate
         */
        export interface OutputGraylogStreamUpdate {
            coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum;
            description: string;
            encryptionKeysIds?: string[];
            indexingEnabled?: boolean;
            indexingMaxSize?: number;
            indexingNotifyEnabled?: boolean;
            pauseIndexingOnMaxSize?: boolean;
            title: string;
            webSocketEnabled?: boolean;
        }
        /**
         * New OpenSearch alias
         * interface fullName: dbaas.logs.OutputOpenSearchAliasCreation.OutputOpenSearchAliasCreation
         */
        export interface OutputOpenSearchAliasCreation {
            description: string;
            suffix: string;
        }
        /**
         * Link given OpenSearch index to alias
         * interface fullName: dbaas.logs.OutputOpenSearchAliasIndexCreation.OutputOpenSearchAliasIndexCreation
         */
        export interface OutputOpenSearchAliasIndexCreation {
            indexId: string;
        }
        /**
         * Link given Graylog stream to alias
         * interface fullName: dbaas.logs.OutputOpenSearchAliasStreamCreation.OutputOpenSearchAliasStreamCreation
         */
        export interface OutputOpenSearchAliasStreamCreation {
            streamId: string;
        }
        /**
         * OpenSearch alias update
         * interface fullName: dbaas.logs.OutputOpenSearchAliasUpdate.OutputOpenSearchAliasUpdate
         */
        export interface OutputOpenSearchAliasUpdate {
            description: string;
        }
        /**
         * OpenSearch index update
         * interface fullName: dbaas.logs.OutputOpenSearchIndexCreation.OutputOpenSearchIndexCreation
         */
        export interface OutputOpenSearchIndexCreation {
            alertNotifyEnabled?: boolean;
            description: string;
            nbShard?: number;
            suffix: string;
        }
        /**
         * OpenSearch index update
         * interface fullName: dbaas.logs.OutputOpenSearchIndexUpdate.OutputOpenSearchIndexUpdate
         */
        export interface OutputOpenSearchIndexUpdate {
            alertNotifyEnabled?: boolean;
            description: string;
        }
        /**
         * Role permission
         * interface fullName: dbaas.logs.Permission.Permission
         */
        export interface Permission {
            aliasId?: string;
            dashboardId?: string;
            indexId?: string;
            kibanaId?: string;
            osdId?: string;
            permissionId: string;
            permissionType?: dbaas.logs.PermissionTypeEnum;
            streamId?: string;
        }
        /**
         * Possible values for PermissionTypeEnum
         * type fullname: dbaas.logs.PermissionTypeEnum
         */
        export type PermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        /**
         * Role
         * interface fullName: dbaas.logs.Role.Role
         */
        export interface Role {
            createdAt: string;
            description: string;
            name: string;
            roleId: string;
            updatedAt?: string;
        }
        /**
         * New role
         * interface fullName: dbaas.logs.RoleCreation.RoleCreation
         */
        export interface RoleCreation {
            description: string;
            name: string;
        }
        /**
         * Add given LDP account to role
         * interface fullName: dbaas.logs.RoleMemberCreation.RoleMemberCreation
         */
        export interface RoleMemberCreation {
            note?: string;
            username: string;
        }
        /**
         * Update given role member
         * interface fullName: dbaas.logs.RoleMemberUpdate.RoleMemberUpdate
         */
        export interface RoleMemberUpdate {
            note?: string;
        }
        /**
         * Attach given alias to role
         * interface fullName: dbaas.logs.RolePermissionAliasCreation.RolePermissionAliasCreation
         */
        export interface RolePermissionAliasCreation {
            aliasId: string;
        }
        /**
         * Attach given Graylog dashboard to role
         * interface fullName: dbaas.logs.RolePermissionDashboardCreation.RolePermissionDashboardCreation
         */
        export interface RolePermissionDashboardCreation {
            dashboardId: string;
            permissionType?: dbaas.logs.PermissionTypeEnum;
        }
        /**
         * Attach given index to role
         * interface fullName: dbaas.logs.RolePermissionIndexCreation.RolePermissionIndexCreation
         */
        export interface RolePermissionIndexCreation {
            indexId: string;
            permissionType?: dbaas.logs.PermissionTypeEnum;
        }
        /**
         * Attach given Kibana instance to role
         * interface fullName: dbaas.logs.RolePermissionKibanaCreation.RolePermissionKibanaCreation
         */
        export interface RolePermissionKibanaCreation {
            kibanaId: string;
            permissionType?: dbaas.logs.PermissionTypeEnum;
        }
        /**
         * Attach given OpenSearch Dashboards to role
         * interface fullName: dbaas.logs.RolePermissionOsdCreation.RolePermissionOsdCreation
         */
        export interface RolePermissionOsdCreation {
            osdId: string;
            permissionType?: dbaas.logs.PermissionTypeEnum;
        }
        /**
         * Attach given Graylog stream to role
         * interface fullName: dbaas.logs.RolePermissionStreamCreation.RolePermissionStreamCreation
         */
        export interface RolePermissionStreamCreation {
            streamId: string;
        }
        /**
         * Role update
         * interface fullName: dbaas.logs.RoleUpdate.RoleUpdate
         */
        export interface RoleUpdate {
            description: string;
            name: string;
        }
        /**
         * Service
         * interface fullName: dbaas.logs.Service.Service
         */
        export interface Service {
            createdAt: string;
            displayName?: string;
            isClusterOwner: boolean;
            plan: dbaas.logs.ServicePlanEnum;
            serviceName: string;
            state: dbaas.logs.ServiceStateEnum;
            updatedAt?: string;
            username: string;
        }
        /**
         * Metrics access
         * interface fullName: dbaas.logs.ServiceMetric.ServiceMetric
         */
        export interface ServiceMetric {
            host: string;
            token: string;
        }
        /**
         * Possible values for ServicePlanEnum
         * type fullname: dbaas.logs.ServicePlanEnum
         */
        export type ServicePlanEnum = "ENTERPRISE" | "STANDARD"
        /**
         * Possible values for ServiceStateEnum
         * type fullname: dbaas.logs.ServiceStateEnum
         */
        export type ServiceStateEnum = "DISABLED" | "ENABLED" | "INIT" | "TO_CONFIG"
        /**
         * Graylog stream
         * interface fullName: dbaas.logs.Stream.Stream
         */
        export interface Stream {
            canAlert: boolean;
            coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum;
            createdAt: string;
            description: string;
            encryptionKeysIds?: string[];
            indexingEnabled?: boolean;
            indexingMaxSize?: number;
            indexingNotifyEnabled?: boolean;
            isEditable: boolean;
            nbAlertCondition: number;
            nbArchive: number;
            parentStreamId?: string;
            pauseIndexingOnMaxSize?: boolean;
            retentionId: string;
            streamId: string;
            title: string;
            updatedAt?: string;
            webSocketEnabled?: boolean;
        }
        /**
         * Alert condition
         * interface fullName: dbaas.logs.StreamAlertCondition.StreamAlertCondition
         */
        export interface StreamAlertCondition {
            alertId: string;
            backlog: number;
            conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum;
            constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum;
            field?: string;
            grace: number;
            queryFilter?: string;
            repeatNotificationsEnabled?: boolean;
            threshold?: number;
            thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum;
            time?: number;
            title: string;
            value?: string;
        }
        /**
         * Possible values for StreamAlertConditionConditionTypeEnum
         * type fullname: dbaas.logs.StreamAlertConditionConditionTypeEnum
         */
        export type StreamAlertConditionConditionTypeEnum = "FIELD_CONTENT_VALUE" | "FIELD_VALUE" | "MESSAGE_COUNT"
        /**
         * Possible values for StreamAlertConditionConstraintTypeEnum
         * type fullname: dbaas.logs.StreamAlertConditionConstraintTypeEnum
         */
        export type StreamAlertConditionConstraintTypeEnum = "MAX" | "MEAN" | "MIN" | "STDLABEU" | "SUM"
        /**
         * Possible values for StreamAlertConditionThresholdTypeEnum
         * type fullname: dbaas.logs.StreamAlertConditionThresholdTypeEnum
         */
        export type StreamAlertConditionThresholdTypeEnum = "HIGHER" | "LESS" | "LOWER" | "MORE"
        /**
         * Possible values for StreamColdStorageCompressionEnum
         * type fullname: dbaas.logs.StreamColdStorageCompressionEnum
         */
        export type StreamColdStorageCompressionEnum = "DEFLATED" | "GZIP" | "LZMA" | "ZSTD"
        /**
         * Possible values for StreamColdStorageContentEnum
         * type fullname: dbaas.logs.StreamColdStorageContentEnum
         */
        export type StreamColdStorageContentEnum = "ALL" | "GELF" | "PLAIN"
        /**
         * Possible values for StreamColdStorageTargetEnum
         * type fullname: dbaas.logs.StreamColdStorageTargetEnum
         */
        export type StreamColdStorageTargetEnum = "PCA" | "PCI_DSS" | "PCS"
        /**
         * Stream rule
         * interface fullName: dbaas.logs.StreamRule.StreamRule
         */
        export interface StreamRule {
            field: string;
            isInverted?: boolean;
            operator?: dbaas.logs.StreamRuleOperatorEnum;
            ruleId: string;
            value: string;
        }
        /**
         * Possible values for StreamRuleOperatorEnum
         * type fullname: dbaas.logs.StreamRuleOperatorEnum
         */
        export type StreamRuleOperatorEnum = "FIELD_PRESENCE" | "GREATER_THAN" | "MATCH_EXACTLY" | "SMALLER_THAN"
        /**
         * Temporary url informations
         * interface fullName: dbaas.logs.TemporaryLogsLink.TemporaryLogsLink
         */
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        /**
         * Config test results
         * interface fullName: dbaas.logs.TestResult.TestResult
         */
        export interface TestResult {
            stderr?: string;
            stdout?: string;
            updatedAt?: string;
        }
        /**
         * Token
         * interface fullName: dbaas.logs.Token.Token
         */
        export interface Token {
            clusterId?: string;
            createdAt: string;
            name: string;
            tokenId: string;
            updatedAt?: string;
            value: string;
        }
        /**
         * New token
         * interface fullName: dbaas.logs.TokenCreation.TokenCreation
         */
        export interface TokenCreation {
            clusterId?: string;
            name: string;
        }
        /**
         * Service update
         * interface fullName: dbaas.logs.Update.Update
         */
        export interface Update {
            displayName?: string;
        }
        /**
         * Web address
         * interface fullName: dbaas.logs.Url.Url
         */
        export interface Url {
            address: string;
            type: dbaas.logs.UrlTypeEnum;
        }
        /**
         * Possible values for UrlTypeEnum
         * type fullname: dbaas.logs.UrlTypeEnum
         */
        export type UrlTypeEnum = "CONSOLE" | "ELASTICSEARCH_API" | "GRAYLOG_API" | "GRAYLOG_WEBUI" | "HTTP_GELF" | "HTTP_TLS_GELF" | "KIBANA_WEBUI" | "OPENSEARCH_API" | "OSD_WEBUI" | "SERVICE_DOMAIN" | "TCP_BEATS" | "TCP_CAP_N_PROTO" | "TCP_GELF" | "TCP_LTSV_LINE" | "TCP_LTSV_NUL" | "TCP_RFC5424" | "TCP_TLS_BEATS" | "TCP_TLS_CAP_N_PROTO" | "TCP_TLS_GELF" | "TCP_TLS_LTSV_LINE" | "TCP_TLS_LTSV_NUL" | "TCP_TLS_RFC5424" | "UDP_CAP_N_PROTO" | "UDP_GELF" | "UDP_LTSV_LINE" | "UDP_LTSV_NUL" | "UDP_RFC5424" | "WEB_SOCKET"
        /**
         * Reset service password
         * interface fullName: dbaas.logs.UserChangePasswordCreation.UserChangePasswordCreation
         */
        export interface UserChangePasswordCreation {
            password: string;
        }
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
 * END API /dbaas/logs Models
 */
export function proxyDbaasLogs(ovhEngine: OvhRequestable): Dbaas {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
export default proxyDbaasLogs;
/**
 * Api model for /dbaas/logs
 */
export interface Dbaas {
    logs: {
        /**
         * List available services
         * GET /dbaas/logs
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        input: {
            engine: {
                /**
                 * Returns the list of available input engines
                 * GET /dbaas/logs/input/engine
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(engineId: string): {
                    /**
                     * Returns details of specified input engine
                     * GET /dbaas/logs/input/engine/{engineId}
                     */
                    $get(): Promise<dbaas.logs.Engine>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    helper: {
                        /**
                         * Return the list of available helpers for the given input engine
                         * GET /dbaas/logs/input/engine/{engineId}/helper
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(helperId: string): {
                            /**
                             * Returns details of specified input engine helper
                             * GET /dbaas/logs/input/engine/{engineId}/helper/{helperId}
                             */
                            $get(): Promise<dbaas.logs.Helper>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
        }
        $(serviceName: string): {
            /**
             * Returns the service object of connected identity.
             * GET /dbaas/logs/{serviceName}
             */
            $get(): Promise<dbaas.logs.Service>;
            /**
             * Update the service properties
             * PUT /dbaas/logs/{serviceName}
             */
            $put(params?: { displayName?: string }): Promise<dbaas.logs.Operation>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /dbaas/logs/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            cluster: {
                /**
                 * Returns the list of allowed cluster
                 * GET /dbaas/logs/{serviceName}/cluster
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(clusterId: string): {
                    /**
                     * Returns details of an allowed cluster
                     * GET /dbaas/logs/{serviceName}/cluster/{clusterId}
                     */
                    $get(): Promise<dbaas.logs.Cluster>;
                    /**
                     * Update details of an allowed cluster
                     * PUT /dbaas/logs/{serviceName}/cluster/{clusterId}
                     */
                    $put(params?: { archiveAllowedNetworks?: string[], directInputAllowedNetworks?: string[], queryAllowedNetworks?: string[] }): Promise<dbaas.logs.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    retention: {
                        /**
                         * List all the retention ID available for a given cluster
                         * GET /dbaas/logs/{serviceName}/cluster/{clusterId}/retention
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(retentionId: string): {
                            /**
                             * Returns details of a retention
                             * GET /dbaas/logs/{serviceName}/cluster/{clusterId}/retention/{retentionId}
                             */
                            $get(): Promise<dbaas.logs.ClusterRetention>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            encryptionKey: {
                /**
                 * Return the list of registred encryption keys
                 * GET /dbaas/logs/{serviceName}/encryptionKey
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a new encryption key
                 * POST /dbaas/logs/{serviceName}/encryptionKey
                 */
                $post(params: { algorithm?: dbaas.logs.EncryptionKeyAlgorithmEnum, content: string, createdAt?: string, encryptionKeyId?: string, fingerprint: string, isEditable?: boolean, nbArchive?: number, title: string, uid?: string }): Promise<dbaas.logs.Operation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(encryptionKeyId: string): {
                    /**
                     * Delete the specified encryption key
                     * DELETE /dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}
                     */
                    $delete(): Promise<dbaas.logs.Operation>;
                    /**
                     * Return details of an encryption key
                     * GET /dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}
                     */
                    $get(): Promise<dbaas.logs.EncryptionKey>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            input: {
                /**
                 * Returns the list of registered input attached to the logged user
                 * GET /dbaas/logs/{serviceName}/input
                 */
                $get(): Promise<string[]>;
                /**
                 * Register a new input object
                 * POST /dbaas/logs/{serviceName}/input
                 */
                $post(params: { allowedNetworks?: string[], description: string, engineId: string, exposedPort?: string, nbInstance?: number, streamId: string, title: string }): Promise<dbaas.logs.Operation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                engine: {
                    /**
                     * Returns the list of available input engines
                     * GET /dbaas/logs/{serviceName}/input/engine
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(engineId: string): {
                        /**
                         * Returns details of specified input engine
                         * GET /dbaas/logs/{serviceName}/input/engine/{engineId}
                         */
                        $get(): Promise<dbaas.logs.Engine>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        helper: {
                            /**
                             * Return the list of available helpers for the given input engine
                             * GET /dbaas/logs/{serviceName}/input/engine/{engineId}/helper
                             */
                            $get(): Promise<string[]>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            $(helperId: string): {
                                /**
                                 * Returns details of specified input engine helper
                                 * GET /dbaas/logs/{serviceName}/input/engine/{engineId}/helper/{helperId}
                                 */
                                $get(): Promise<dbaas.logs.Helper>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            };
                        }
                    };
                }
                $(inputId: string): {
                    /**
                     * Remove the specified input object
                     * DELETE /dbaas/logs/{serviceName}/input/{inputId}
                     */
                    $delete(): Promise<dbaas.logs.Operation>;
                    /**
                     * Returns details of specified input
                     * GET /dbaas/logs/{serviceName}/input/{inputId}
                     */
                    $get(): Promise<dbaas.logs.Input>;
                    /**
                     * Update information of specified input object
                     * PUT /dbaas/logs/{serviceName}/input/{inputId}
                     */
                    $put(params: { allowedNetworks?: string[], description: string, engineId: string, exposedPort?: string, nbInstance?: number, streamId: string, title: string }): Promise<dbaas.logs.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    action: {
                        /**
                         * Returns actions of specified input
                         * GET /dbaas/logs/{serviceName}/input/{inputId}/action
                         */
                        $get(): Promise<dbaas.logs.InputAction[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    configtest: {
                        /**
                         * Validate configuration of specified input
                         * POST /dbaas/logs/{serviceName}/input/{inputId}/configtest
                         */
                        $post(): Promise<dbaas.logs.Operation>;
                        result: {
                            /**
                             * Returns the config test operation result
                             * GET /dbaas/logs/{serviceName}/input/{inputId}/configtest/result
                             */
                            $get(): Promise<dbaas.logs.TestResult>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    }
                    configuration: {
                        flowgger: {
                            /**
                             * Returns the flowgger configuration
                             * GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                             */
                            $get(): Promise<dbaas.logs.FlowggerConfiguration>;
                            /**
                             * Update the flowgger configuration
                             * PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                             */
                            $put(params: { logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum, logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                        logstash: {
                            /**
                             * Returns the logstash configuration
                             * GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                             */
                            $get(): Promise<dbaas.logs.LogstashConfiguration>;
                            /**
                             * Update the logstash configuration
                             * PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                             */
                            $put(params: { filterSection?: string, inputSection: string, patternSection?: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        }
                    }
                    end: {
                        /**
                         * Schedule the end of specified input
                         * POST /dbaas/logs/{serviceName}/input/{inputId}/end
                         */
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    logs: {
                        url: {
                            /**
                             * Generate a temporary url to retrieve input logs
                             * POST /dbaas/logs/{serviceName}/input/{inputId}/logs/url
                             */
                            $post(): Promise<dbaas.logs.TemporaryLogsLink>;
                        }
                    }
                    restart: {
                        /**
                         * Schedule the restart of specified input
                         * POST /dbaas/logs/{serviceName}/input/{inputId}/restart
                         */
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    start: {
                        /**
                         * Schedule the start of specified input
                         * POST /dbaas/logs/{serviceName}/input/{inputId}/start
                         */
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    url: {
                        /**
                         * Returns the list of urls of specified input
                         * GET /dbaas/logs/{serviceName}/input/{inputId}/url
                         */
                        $get(): Promise<dbaas.logs.Url[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            metrics: {
                /**
                 * Returns Metrics credentials
                 * GET /dbaas/logs/{serviceName}/metrics
                 */
                $get(): Promise<dbaas.logs.ServiceMetric>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            operation: {
                /**
                 * Latest operations
                 * GET /dbaas/logs/{serviceName}/operation
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(operationId: string): {
                    /**
                     * Returns details of specified operation
                     * GET /dbaas/logs/{serviceName}/operation/{operationId}
                     */
                    $get(): Promise<dbaas.logs.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            output: {
                elasticsearch: {
                    alias: {
                        /**
                         * Returns the list of alias for connected user
                         * GET /dbaas/logs/{serviceName}/output/elasticsearch/alias
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new elasticsearch alias
                         * POST /dbaas/logs/{serviceName}/output/elasticsearch/alias
                         */
                        $post(params: { description: string, suffix: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(aliasId: string): {
                            /**
                             * Remove specified elasticsearch alias
                             * DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns specified elasticsearch alias
                             * GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                             */
                            $get(): Promise<dbaas.logs.Alias>;
                            /**
                             * Update specified elasticsearch alias
                             * PUT /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                             */
                            $put(params: { description: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            index: {
                                /**
                                 * Returns the list of Elasticsearch indexes attached to specified Elasticsearch alias
                                 * GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Attach a elasticsearch index to specified elasticsearch alias
                                 * POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                 */
                                $post(params: { indexId: string }): Promise<dbaas.logs.Operation>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(indexId: string): {
                                    /**
                                     * Detach a elasticsearch index from specified elasticsearch alias
                                     * DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}
                                     */
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            stream: {
                                /**
                                 * Returns the list of Graylog streams attached to specified Elasticsearch alias
                                 * GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Attach a graylog stream to specified elasticsearch alias
                                 * POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                 */
                                $post(params: { streamId: string }): Promise<dbaas.logs.Operation>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(streamId: string): {
                                    /**
                                     * Detach a graylog stream from specified elasticsearch alias
                                     * DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}
                                     */
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            url: {
                                /**
                                 * Returns the list of urls of specified alias
                                 * GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    index: {
                        /**
                         * Returns the list of elasticsearch indexes
                         * GET /dbaas/logs/{serviceName}/output/elasticsearch/index
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new elasticsearch index
                         * POST /dbaas/logs/{serviceName}/output/elasticsearch/index
                         */
                        $post(params: { alertNotifyEnabled?: boolean, description: string, nbShard?: number, suffix: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(indexId: string): {
                            /**
                             * Remove specified elasticsearch index
                             * DELETE /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns specified elasticsearch index
                             * GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                             */
                            $get(): Promise<dbaas.logs.Index>;
                            /**
                             * Update specified elasticsearch index
                             * PUT /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                             */
                            $put(params: { alertNotifyEnabled?: boolean, description: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            url: {
                                /**
                                 * Returns the list of urls of specified index
                                 * GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    kibana: {
                        /**
                         * Returns the list of Kibana instances
                         * GET /dbaas/logs/{serviceName}/output/elasticsearch/kibana
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new Kibana instance
                         * POST /dbaas/logs/{serviceName}/output/elasticsearch/kibana
                         */
                        $post(params: { description: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(kibanaId: string): {
                            /**
                             * Remove specified Kibana instance
                             * DELETE /dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns specified Kibana instance
                             * GET /dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}
                             */
                            $get(): Promise<dbaas.logs.Kibana>;
                            /**
                             * Update specified Kibana instance
                             * PUT /dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}
                             */
                            $put(params: { description: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            url: {
                                /**
                                 * Returns the list of urls of specified Kibana
                                 * GET /dbaas/logs/{serviceName}/output/elasticsearch/kibana/{kibanaId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                }
                graylog: {
                    dashboard: {
                        /**
                         * Returns the list of graylog dashboards
                         * GET /dbaas/logs/{serviceName}/output/graylog/dashboard
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new graylog dashboard
                         * POST /dbaas/logs/{serviceName}/output/graylog/dashboard
                         */
                        $post(params: { description: string, title: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(dashboardId: string): {
                            /**
                             * Remove specified graylog dashboard
                             * DELETE /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns details of specified graylog dashboard
                             * GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                             */
                            $get(): Promise<dbaas.logs.Dashboard>;
                            /**
                             * Update information of specified graylog dashboard
                             * PUT /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                             */
                            $put(params: { description: string, title: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            duplicate: {
                                /**
                                 * Copy all widgets from specified dashboard to a new one
                                 * POST /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate
                                 */
                                $post(params: { description: string, streamId?: string, title: string }): Promise<dbaas.logs.Operation>;
                            }
                            url: {
                                /**
                                 * Returns the list of urls of specified graylog dashboard
                                 * GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    stream: {
                        /**
                         * Returns the list of graylog streams
                         * GET /dbaas/logs/{serviceName}/output/graylog/stream
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new graylog stream
                         * POST /dbaas/logs/{serviceName}/output/graylog/stream
                         */
                        $post(params: { coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, encryptionKeysIds?: string[], indexingEnabled?: boolean, indexingMaxSize?: number, indexingNotifyEnabled?: boolean, parentStreamId?: string, pauseIndexingOnMaxSize?: boolean, retentionId?: string, title: string, webSocketEnabled?: boolean }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(streamId: string): {
                            /**
                             * Remove specified graylog stream
                             * DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns details of specified graylog stream
                             * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                             */
                            $get(): Promise<dbaas.logs.Stream>;
                            /**
                             * Update information of specified graylog stream
                             * PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                             */
                            $put(params: { coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, encryptionKeysIds?: string[], indexingEnabled?: boolean, indexingMaxSize?: number, indexingNotifyEnabled?: boolean, pauseIndexingOnMaxSize?: boolean, title: string, webSocketEnabled?: boolean }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            alert: {
                                /**
                                 * Returns the list of configured alerts of specified graylog stream
                                 * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Register a new alert on specified graylog stream
                                 * POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                 */
                                $post(params: { backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string }): Promise<dbaas.logs.Operation>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(alertId: string): {
                                    /**
                                     * Remove alert from specified graylog stream
                                     * DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                     */
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    /**
                                     * Returns details of specified graylog stream alert
                                     * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                     */
                                    $get(): Promise<dbaas.logs.StreamAlertCondition>;
                                    /**
                                     * Update alert information of specified graylog stream
                                     * PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                     */
                                    $put(params: { backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string }): Promise<dbaas.logs.Operation>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            archive: {
                                /**
                                 * Returns the list of archives
                                 * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(archiveId: string): {
                                    /**
                                     * Returns details of specified archive
                                     * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}
                                     */
                                    $get(): Promise<dbaas.logs.Archive>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    encryptionKey: {
                                        /**
                                         * Get the list of encryption keys used to encrypt the archive
                                         * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/encryptionKey
                                         */
                                        $get(): Promise<string[]>;
                                        /**
                                         * Controle cache
                                         */
                                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                    }
                                    url: {
                                        /**
                                         * Get a public temporary URL to access the archive
                                         * POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url
                                         */
                                        $post(): Promise<dbaas.logs.ArchiveUrl>;
                                    }
                                };
                            }
                            rule: {
                                /**
                                 * Returns the list of rules of specified graylog stream
                                 * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Register a new rule on specified graylog stream
                                 * POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                 */
                                $post(params: { field: string, isInverted?: boolean, operator: dbaas.logs.StreamRuleOperatorEnum, value: string }): Promise<dbaas.logs.Operation>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(ruleId: string): {
                                    /**
                                     * Remove specified graylog stream rule
                                     * DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                     */
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    /**
                                     * Returns details of specified graylog stream rule
                                     * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                     */
                                    $get(): Promise<dbaas.logs.StreamRule>;
                                    /**
                                     * Controle cache
                                     */
                                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                };
                            }
                            url: {
                                /**
                                 * Returns the list of urls of specified graylog stream
                                 * GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                }
                opensearch: {
                    alias: {
                        /**
                         * Returns the list of alias for connected user
                         * GET /dbaas/logs/{serviceName}/output/opensearch/alias
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new OpenSearch alias
                         * POST /dbaas/logs/{serviceName}/output/opensearch/alias
                         */
                        $post(params: { description: string, suffix: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(aliasId: string): {
                            /**
                             * Remove specified OpenSearch alias
                             * DELETE /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns specified OpenSearch alias
                             * GET /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}
                             */
                            $get(): Promise<dbaas.logs.Alias>;
                            /**
                             * Update specified OpenSearch alias
                             * PUT /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}
                             */
                            $put(params: { description: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            index: {
                                /**
                                 * Returns the list of OpenSearch indexes attached to specified OpenSearch alias
                                 * GET /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Attach a OpenSearch index to specified OpenSearch alias
                                 * POST /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index
                                 */
                                $post(params: { indexId: string }): Promise<dbaas.logs.Operation>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(indexId: string): {
                                    /**
                                     * Detach a OpenSearch index from specified OpenSearch alias
                                     * DELETE /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index/{indexId}
                                     */
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            stream: {
                                /**
                                 * Returns the list of Graylog streams attached to specified OpenSearch alias
                                 * GET /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream
                                 */
                                $get(): Promise<string[]>;
                                /**
                                 * Attach a Graylog stream to specified OpenSearch alias
                                 * POST /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream
                                 */
                                $post(params: { streamId: string }): Promise<dbaas.logs.Operation>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                                $(streamId: string): {
                                    /**
                                     * Detach a Graylog stream from specified OpenSearch alias
                                     * DELETE /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/stream/{streamId}
                                     */
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            url: {
                                /**
                                 * Returns the list of urls of specified alias
                                 * GET /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    index: {
                        /**
                         * Returns the list of OpenSearch indexes
                         * GET /dbaas/logs/{serviceName}/output/opensearch/index
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new OpenSearch index
                         * POST /dbaas/logs/{serviceName}/output/opensearch/index
                         */
                        $post(params: { alertNotifyEnabled?: boolean, description: string, nbShard?: number, suffix: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(indexId: string): {
                            /**
                             * Remove specified OpenSearch index
                             * DELETE /dbaas/logs/{serviceName}/output/opensearch/index/{indexId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns specified OpenSearch index
                             * GET /dbaas/logs/{serviceName}/output/opensearch/index/{indexId}
                             */
                            $get(): Promise<dbaas.logs.Index>;
                            /**
                             * Update specified OpenSearch index
                             * PUT /dbaas/logs/{serviceName}/output/opensearch/index/{indexId}
                             */
                            $put(params: { alertNotifyEnabled?: boolean, description: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            url: {
                                /**
                                 * Returns the list of urls of specified index
                                 * GET /dbaas/logs/{serviceName}/output/opensearch/index/{indexId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    osd: {
                        /**
                         * Returns the list of OpenSearch Dashboards instances
                         * GET /dbaas/logs/{serviceName}/output/opensearch/osd
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Register a new OpenSearch Dashboards instance
                         * POST /dbaas/logs/{serviceName}/output/opensearch/osd
                         */
                        $post(params: { description: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(osdId: string): {
                            /**
                             * Remove specified OpenSearch Dashboards instance
                             * DELETE /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns specified OpenSearch Dashboards instance
                             * GET /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}
                             */
                            $get(): Promise<dbaas.logs.Osd>;
                            /**
                             * Update specified OpenSearch Dashboards instance
                             * PUT /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}
                             */
                            $put(params: { description: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            url: {
                                /**
                                 * Returns the list of urls of specified OpenSearch Dashboards
                                 * GET /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}/url
                                 */
                                $get(): Promise<dbaas.logs.Url[]>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                }
            }
            role: {
                /**
                 * Returns the list of roles
                 * GET /dbaas/logs/{serviceName}/role
                 */
                $get(): Promise<string[]>;
                /**
                 * Register a new role
                 * POST /dbaas/logs/{serviceName}/role
                 */
                $post(params: { description: string, name: string }): Promise<dbaas.logs.Operation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(roleId: string): {
                    /**
                     * Remove specified role
                     * DELETE /dbaas/logs/{serviceName}/role/{roleId}
                     */
                    $delete(): Promise<dbaas.logs.Operation>;
                    /**
                     * Returns details of specified role
                     * GET /dbaas/logs/{serviceName}/role/{roleId}
                     */
                    $get(): Promise<dbaas.logs.Role>;
                    /**
                     * Update information of specified role
                     * PUT /dbaas/logs/{serviceName}/role/{roleId}
                     */
                    $put(params: { description: string, name: string }): Promise<dbaas.logs.Operation>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    member: {
                        /**
                         * Returns the member list of specified role
                         * GET /dbaas/logs/{serviceName}/role/{roleId}/member
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Append user into the member list of specified role
                         * POST /dbaas/logs/{serviceName}/role/{roleId}/member
                         */
                        $post(params: { note?: string, username: string }): Promise<dbaas.logs.Operation>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(username: string): {
                            /**
                             * Remove user from the member list of specified role
                             * DELETE /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns the member metadata
                             * GET /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                             */
                            $get(): Promise<dbaas.logs.Member>;
                            /**
                             * Update the member metadata
                             * PUT /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                             */
                            $put(params?: { note?: string }): Promise<dbaas.logs.Operation>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    permission: {
                        /**
                         * Returns the list of permissions of specified role
                         * GET /dbaas/logs/{serviceName}/role/{roleId}/permission
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        alias: {
                            /**
                             * Append a elasticsearch alias permission to role
                             * POST /dbaas/logs/{serviceName}/role/{roleId}/permission/alias
                             */
                            $post(params: { aliasId: string }): Promise<dbaas.logs.Operation>;
                        }
                        dashboard: {
                            /**
                             * Append a graylog dashboard permission to role
                             * POST /dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard
                             */
                            $post(params: { dashboardId: string, permissionType?: dbaas.logs.PermissionTypeEnum }): Promise<dbaas.logs.Operation>;
                        }
                        index: {
                            /**
                             * Append a elasticsearch index permission to role
                             * POST /dbaas/logs/{serviceName}/role/{roleId}/permission/index
                             */
                            $post(params: { indexId: string, permissionType?: dbaas.logs.PermissionTypeEnum }): Promise<dbaas.logs.Operation>;
                        }
                        kibana: {
                            /**
                             * Append a kibana permission to role
                             * POST /dbaas/logs/{serviceName}/role/{roleId}/permission/kibana
                             */
                            $post(params: { kibanaId: string, permissionType?: dbaas.logs.PermissionTypeEnum }): Promise<dbaas.logs.Operation>;
                        }
                        osd: {
                            /**
                             * Append a OpenSearch Dashboards permission to role
                             * POST /dbaas/logs/{serviceName}/role/{roleId}/permission/osd
                             */
                            $post(params: { osdId: string, permissionType?: dbaas.logs.PermissionTypeEnum }): Promise<dbaas.logs.Operation>;
                        }
                        stream: {
                            /**
                             * Append a graylog stream permission to role
                             * POST /dbaas/logs/{serviceName}/role/{roleId}/permission/stream
                             */
                            $post(params: { streamId: string }): Promise<dbaas.logs.Operation>;
                        }
                        $(permissionId: string): {
                            /**
                             * Remove specified permission
                             * DELETE /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                             */
                            $delete(): Promise<dbaas.logs.Operation>;
                            /**
                             * Returns details of specified permission
                             * GET /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                             */
                            $get(): Promise<dbaas.logs.Permission>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /dbaas/logs/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /dbaas/logs/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            token: {
                /**
                 * Returns the list of service tokens
                 * GET /dbaas/logs/{serviceName}/token
                 */
                $get(): Promise<string[]>;
                /**
                 * Add a new token
                 * POST /dbaas/logs/{serviceName}/token
                 */
                $post(params: { clusterId?: string, name: string }): Promise<dbaas.logs.Operation>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(tokenId: string): {
                    /**
                     * Delete the specified token
                     * DELETE /dbaas/logs/{serviceName}/token/{tokenId}
                     */
                    $delete(): Promise<dbaas.logs.Operation>;
                    /**
                     * Returns the specified token
                     * GET /dbaas/logs/{serviceName}/token/{tokenId}
                     */
                    $get(): Promise<dbaas.logs.Token>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            url: {
                /**
                 * Returns platform useful urls
                 * GET /dbaas/logs/{serviceName}/url
                 */
                $get(): Promise<dbaas.logs.Url[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            user: {
                changePassword: {
                    /**
                     * Initiate a password change procedure.
                     * POST /dbaas/logs/{serviceName}/user/changePassword
                     */
                    $post(params: { password: string }): Promise<dbaas.logs.Operation>;
                }
            }
        };
    }
}
