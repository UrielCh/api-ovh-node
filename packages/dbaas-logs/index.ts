import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace dbaas {
    export namespace logs {
        //dbaas.logs.Alias
        // fullName: dbaas.logs.Alias.Alias
        export interface Alias {
            aliasId?: string;
            createdAt?: string;
            description?: string;
            isEditable?: boolean;
            isShareable?: boolean;
            name?: string;
            optionId?: string;
            updatedAt?: string;
        }
        //dbaas.logs.AllowedNetwork
        // fullName: dbaas.logs.AllowedNetwork.AllowedNetwork
        export interface AllowedNetwork {
            allowedNetworkId?: string;
            network?: string;
        }
        //dbaas.logs.Archive
        // fullName: dbaas.logs.Archive.Archive
        export interface Archive {
            archiveId?: string;
            createdAt?: string;
            filename?: string;
            md5?: string;
            retrievalDelay?: number;
            retrievalState?: OVH.dbaas.logs.ArchiveRetrievalStateEnum;
            sha256?: string;
            size?: number;
        }
        //dbaas.logs.ArchiveRetrievalStateEnum
        export type ArchiveRetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        //dbaas.logs.ArchiveUrl
        // fullName: dbaas.logs.ArchiveUrl.ArchiveUrl
        export interface ArchiveUrl {
            expirationDate?: string;
            url?: string;
        }
        //dbaas.logs.Cluster
        // fullName: dbaas.logs.Cluster.Cluster
        export interface Cluster {
            clusterId?: string;
            clusterType?: OVH.dbaas.logs.ClusterClusterTypeEnum;
            dedicatedInputPEM?: string;
            directInputPEM?: string;
            hostname?: string;
            isDefault?: boolean;
            isUnlocked?: boolean;
            region?: OVH.dbaas.logs.ClusterRegionEnum;
        }
        //dbaas.logs.ClusterAllowedNetwork
        // fullName: dbaas.logs.ClusterAllowedNetwork.ClusterAllowedNetwork
        export interface ClusterAllowedNetwork {
            allowedNetworkId?: string;
            flowType?: OVH.dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
            network?: string;
        }
        //dbaas.logs.ClusterAllowedNetworkCreation
        // fullName: dbaas.logs.ClusterAllowedNetworkCreation.ClusterAllowedNetworkCreation
        export interface ClusterAllowedNetworkCreation {
            flowType: OVH.dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
            network: string;
        }
        //dbaas.logs.ClusterAllowedNetworkFlowTypeEnum
        export type ClusterAllowedNetworkFlowTypeEnum = "QUERY" | "DIRECT_INPUT" | "ALL"
        //dbaas.logs.ClusterClusterTypeEnum
        export type ClusterClusterTypeEnum = "TRIAL" | "PRO" | "DEDICATED"
        //dbaas.logs.ClusterRegionEnum
        export type ClusterRegionEnum = "GRA" | "RBX" | "BHS" | "SBG" | "P-19"
        //dbaas.logs.Dashboard
        // fullName: dbaas.logs.Dashboard.Dashboard
        export interface Dashboard {
            createdAt?: string;
            dashboardId?: string;
            description?: string;
            isEditable?: boolean;
            isShareable?: boolean;
            optionId?: string;
            title?: string;
            updatedAt?: string;
        }
        //dbaas.logs.Engine
        // fullName: dbaas.logs.Engine.Engine
        export interface Engine {
            engineId?: string;
            isDeprecated?: boolean;
            name?: OVH.dbaas.logs.EngineNameEnum;
            version?: string;
        }
        //dbaas.logs.EngineNameEnum
        export type EngineNameEnum = "FLOWGGER" | "LOGSTASH" | "TEST"
        //dbaas.logs.FlowggerConfiguration
        // fullName: dbaas.logs.FlowggerConfiguration.FlowggerConfiguration
        export interface FlowggerConfiguration {
            logFormat?: OVH.dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming?: OVH.dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        //dbaas.logs.FlowggerConfigurationLogFormatEnum
        export type FlowggerConfigurationLogFormatEnum = "RFC5424" | "LTSV" | "GELF" | "CAPNP"
        //dbaas.logs.FlowggerConfigurationLogFramingEnum
        export type FlowggerConfigurationLogFramingEnum = "LINE" | "NUL" | "SYSLEN" | "CAPNP"
        //dbaas.logs.Index
        // fullName: dbaas.logs.Index.Index
        export interface Index {
            alertNotifyEnabled?: boolean;
            createdAt?: string;
            description?: string;
            indexId?: string;
            isEditable?: boolean;
            isShareable?: boolean;
            maxSize?: number;
            name?: string;
            optionId?: string;
            updatedAt?: string;
        }
        //dbaas.logs.Input
        // fullName: dbaas.logs.Input.Input
        export interface Input {
            autoSelectOption?: boolean;
            createdAt?: string;
            description?: string;
            engineId?: string;
            exposedPort?: string;
            hostname?: string;
            inputId?: string;
            isRestartRequired?: boolean;
            optionId?: string;
            publicAddress?: string;
            singleInstanceEnabled?: boolean;
            sslCertificate?: string;
            status?: OVH.dbaas.logs.InputStatusEnum;
            streamId?: string;
            title?: string;
            updatedAt?: string;
        }
        //dbaas.logs.InputAction
        // fullName: dbaas.logs.InputAction.InputAction
        export interface InputAction {
            isAllowed?: boolean;
            type?: OVH.dbaas.logs.InputActionTypeEnum;
        }
        //dbaas.logs.InputActionTypeEnum
        export type InputActionTypeEnum = "END" | "LOG" | "START" | "TEST" | "DESTROY" | "RESTART"
        //dbaas.logs.InputAllowedNetworkCreation
        // fullName: dbaas.logs.InputAllowedNetworkCreation.InputAllowedNetworkCreation
        export interface InputAllowedNetworkCreation {
            network: string;
        }
        //dbaas.logs.InputConfigurationFlowggerUpdate
        // fullName: dbaas.logs.InputConfigurationFlowggerUpdate.InputConfigurationFlowggerUpdate
        export interface InputConfigurationFlowggerUpdate {
            logFormat: OVH.dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: OVH.dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        //dbaas.logs.InputConfigurationLogstashUpdate
        // fullName: dbaas.logs.InputConfigurationLogstashUpdate.InputConfigurationLogstashUpdate
        export interface InputConfigurationLogstashUpdate {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        //dbaas.logs.InputCreation
        // fullName: dbaas.logs.InputCreation.InputCreation
        export interface InputCreation {
            autoSelectOption?: boolean;
            description: string;
            engineId: string;
            exposedPort?: string;
            optionId?: string;
            singleInstanceEnabled?: boolean;
            streamId: string;
            title: string;
        }
        //dbaas.logs.InputStatusEnum
        export type InputStatusEnum = "INIT" | "PENDING" | "RUNNING" | "PROCESSING"
        //dbaas.logs.InputUpdate
        // fullName: dbaas.logs.InputUpdate.InputUpdate
        export interface InputUpdate {
            description: string;
            engineId: string;
            exposedPort?: string;
            optionId?: string;
            singleInstanceEnabled?: boolean;
            streamId: string;
            title: string;
        }
        //dbaas.logs.LogstashConfiguration
        // fullName: dbaas.logs.LogstashConfiguration.LogstashConfiguration
        export interface LogstashConfiguration {
            filterSection?: string;
            inputSection?: string;
            patternSection?: string;
        }
        //dbaas.logs.Member
        // fullName: dbaas.logs.Member.Member
        export interface Member {
            createdAt?: string;
            note?: string;
            username?: string;
        }
        //dbaas.logs.Offer
        // fullName: dbaas.logs.Offer.Offer
        export interface Offer {
            curNbAlias?: number;
            curNbDashboard?: number;
            curNbIndex?: number;
            curNbInput?: number;
            curNbRole?: number;
            curNbStream?: number;
            esStorage?: number;
            maxNbAlias?: number;
            maxNbDashboard?: number;
            maxNbIndex?: number;
            maxNbInput?: number;
            maxNbRole?: number;
            maxNbStream?: number;
            reference?: string;
            retention?: number;
        }
        //dbaas.logs.Operation
        // fullName: dbaas.logs.Operation.Operation
        export interface Operation {
            aliasId?: string;
            createdAt?: string;
            dashboardId?: string;
            indexId?: string;
            inputId?: string;
            operationId?: string;
            optionId?: string;
            roleId?: string;
            state?: OVH.dbaas.logs.OperationStateEnum;
            streamId?: string;
            updatedAt?: string;
        }
        //dbaas.logs.OperationStateEnum
        export type OperationStateEnum = "PENDING" | "RECEIVED" | "STARTED" | "SUCCESS" | "FAILURE" | "REVOKED" | "RETRY" | "RUNNING"
        //dbaas.logs.Option
        // fullName: dbaas.logs.Option.Option
        export interface Option {
            createdAt?: string;
            curNbAlias?: number;
            curNbDashboard?: number;
            curNbIndex?: number;
            curNbInput?: number;
            curNbRole?: number;
            curNbStream?: number;
            indexSize?: number;
            maxNbAlias?: number;
            maxNbDashboard?: number;
            maxNbIndex?: number;
            maxNbInput?: number;
            maxNbRole?: number;
            maxNbStream?: number;
            optionId?: string;
            reference?: string;
            state?: OVH.dbaas.logs.OptionStateEnum;
            updatedAt?: string;
        }
        //dbaas.logs.OptionStateEnum
        export type OptionStateEnum = "ENABLED" | "DISABLED"
        //dbaas.logs.OutputElasticsearchAliasCreation
        // fullName: dbaas.logs.OutputElasticsearchAliasCreation.OutputElasticsearchAliasCreation
        export interface OutputElasticsearchAliasCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            suffix: string;
        }
        //dbaas.logs.OutputElasticsearchAliasIndexCreation
        // fullName: dbaas.logs.OutputElasticsearchAliasIndexCreation.OutputElasticsearchAliasIndexCreation
        export interface OutputElasticsearchAliasIndexCreation {
            indexId: string;
        }
        //dbaas.logs.OutputElasticsearchAliasStreamCreation
        // fullName: dbaas.logs.OutputElasticsearchAliasStreamCreation.OutputElasticsearchAliasStreamCreation
        export interface OutputElasticsearchAliasStreamCreation {
            streamId: string;
        }
        //dbaas.logs.OutputElasticsearchAliasUpdate
        // fullName: dbaas.logs.OutputElasticsearchAliasUpdate.OutputElasticsearchAliasUpdate
        export interface OutputElasticsearchAliasUpdate {
            description: string;
            optionId?: string;
        }
        //dbaas.logs.OutputElasticsearchIndexCreation
        // fullName: dbaas.logs.OutputElasticsearchIndexCreation.OutputElasticsearchIndexCreation
        export interface OutputElasticsearchIndexCreation {
            alertNotifyEnabled?: boolean;
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            suffix: string;
        }
        //dbaas.logs.OutputElasticsearchIndexUpdate
        // fullName: dbaas.logs.OutputElasticsearchIndexUpdate.OutputElasticsearchIndexUpdate
        export interface OutputElasticsearchIndexUpdate {
            alertNotifyEnabled?: boolean;
            description: string;
        }
        //dbaas.logs.OutputGraylogDashboardCreation
        // fullName: dbaas.logs.OutputGraylogDashboardCreation.OutputGraylogDashboardCreation
        export interface OutputGraylogDashboardCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            title: string;
        }
        //dbaas.logs.OutputGraylogDashboardDuplicateCreation
        // fullName: dbaas.logs.OutputGraylogDashboardDuplicateCreation.OutputGraylogDashboardDuplicateCreation
        export interface OutputGraylogDashboardDuplicateCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            streamId?: string;
            title: string;
        }
        //dbaas.logs.OutputGraylogDashboardUpdate
        // fullName: dbaas.logs.OutputGraylogDashboardUpdate.OutputGraylogDashboardUpdate
        export interface OutputGraylogDashboardUpdate {
            description: string;
            optionId?: string;
            title: string;
        }
        //dbaas.logs.OutputGraylogStreamAlertCreation
        // fullName: dbaas.logs.OutputGraylogStreamAlertCreation.OutputGraylogStreamAlertCreation
        export interface OutputGraylogStreamAlertCreation {
            backlog: number;
            conditionType?: OVH.dbaas.logs.StreamAlertConditionConditionTypeEnum;
            constraintType?: OVH.dbaas.logs.StreamAlertConditionConstraintTypeEnum;
            field?: string;
            grace: number;
            queryFilter?: string;
            repeatNotificationsEnabled?: boolean;
            threshold?: number;
            thresholdType?: OVH.dbaas.logs.StreamAlertConditionThresholdTypeEnum;
            time?: number;
            title: string;
            value?: string;
        }
        //dbaas.logs.OutputGraylogStreamAlertUpdate
        // fullName: dbaas.logs.OutputGraylogStreamAlertUpdate.OutputGraylogStreamAlertUpdate
        export interface OutputGraylogStreamAlertUpdate {
            backlog: number;
            conditionType?: OVH.dbaas.logs.StreamAlertConditionConditionTypeEnum;
            constraintType?: OVH.dbaas.logs.StreamAlertConditionConstraintTypeEnum;
            field?: string;
            grace: number;
            queryFilter?: string;
            repeatNotificationsEnabled?: boolean;
            threshold?: number;
            thresholdType?: OVH.dbaas.logs.StreamAlertConditionThresholdTypeEnum;
            time?: number;
            title: string;
            value?: string;
        }
        //dbaas.logs.OutputGraylogStreamCreation
        // fullName: dbaas.logs.OutputGraylogStreamCreation.OutputGraylogStreamCreation
        export interface OutputGraylogStreamCreation {
            autoSelectOption?: boolean;
            coldStorageCompression?: OVH.dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: OVH.dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: OVH.dbaas.logs.StreamColdStorageTargetEnum;
            description: string;
            indexingEnabled?: boolean;
            optionId?: string;
            parentStreamId?: string;
            title: string;
            webSocketEnabled?: boolean;
        }
        //dbaas.logs.OutputGraylogStreamRuleCreation
        // fullName: dbaas.logs.OutputGraylogStreamRuleCreation.OutputGraylogStreamRuleCreation
        export interface OutputGraylogStreamRuleCreation {
            field: string;
            isInverted?: boolean;
            operator: OVH.dbaas.logs.StreamRuleOperatorEnum;
            value: string;
        }
        //dbaas.logs.OutputGraylogStreamUpdate
        // fullName: dbaas.logs.OutputGraylogStreamUpdate.OutputGraylogStreamUpdate
        export interface OutputGraylogStreamUpdate {
            coldStorageCompression?: OVH.dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: OVH.dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: OVH.dbaas.logs.StreamColdStorageTargetEnum;
            description: string;
            indexingEnabled?: boolean;
            optionId?: string;
            title: string;
            webSocketEnabled?: boolean;
        }
        //dbaas.logs.Permission
        // fullName: dbaas.logs.Permission.Permission
        export interface Permission {
            aliasId?: string;
            dashboardId?: string;
            indexId?: string;
            permissionId?: string;
            streamId?: string;
        }
        //dbaas.logs.PermissionDashboardPermissionTypeEnum
        export type PermissionDashboardPermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        //dbaas.logs.PermissionIndexPermissionTypeEnum
        export type PermissionIndexPermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        //dbaas.logs.PublicOffer
        // fullName: dbaas.logs.PublicOffer.PublicOffer
        export interface PublicOffer {
            esStorage?: number;
            maxNbAlias?: number;
            maxNbDashboard?: number;
            maxNbIndex?: number;
            maxNbInput?: number;
            maxNbRole?: number;
            maxNbStream?: number;
            reference?: string;
        }
        //dbaas.logs.Quota
        // fullName: dbaas.logs.Quota.Quota
        export interface Quota {
            curNbAlias?: number;
            curNbDashboard?: number;
            curNbIndex?: number;
            curNbInput?: number;
            curNbRole?: number;
            curNbStream?: number;
            maxNbAlias?: number;
            maxNbDashboard?: number;
            maxNbIndex?: number;
            maxNbInput?: number;
            maxNbRole?: number;
            maxNbStream?: number;
        }
        //dbaas.logs.Role
        // fullName: dbaas.logs.Role.Role
        export interface Role {
            createdAt?: string;
            description?: string;
            name?: string;
            optionId?: string;
            roleId?: string;
            updatedAt?: string;
        }
        //dbaas.logs.RoleCreation
        // fullName: dbaas.logs.RoleCreation.RoleCreation
        export interface RoleCreation {
            autoSelectOption?: boolean;
            description: string;
            name: string;
            optionId?: string;
        }
        //dbaas.logs.RoleMemberCreation
        // fullName: dbaas.logs.RoleMemberCreation.RoleMemberCreation
        export interface RoleMemberCreation {
            note?: string;
            username: string;
        }
        //dbaas.logs.RoleMemberUpdate
        // fullName: dbaas.logs.RoleMemberUpdate.RoleMemberUpdate
        export interface RoleMemberUpdate {
            note?: string;
        }
        //dbaas.logs.RolePermissionAliasCreation
        // fullName: dbaas.logs.RolePermissionAliasCreation.RolePermissionAliasCreation
        export interface RolePermissionAliasCreation {
            aliasId: string;
        }
        //dbaas.logs.RolePermissionDashboardCreation
        // fullName: dbaas.logs.RolePermissionDashboardCreation.RolePermissionDashboardCreation
        export interface RolePermissionDashboardCreation {
            dashboardId: string;
            permissionType?: OVH.dbaas.logs.PermissionDashboardPermissionTypeEnum;
        }
        //dbaas.logs.RolePermissionIndexCreation
        // fullName: dbaas.logs.RolePermissionIndexCreation.RolePermissionIndexCreation
        export interface RolePermissionIndexCreation {
            indexId: string;
            permissionType?: OVH.dbaas.logs.PermissionIndexPermissionTypeEnum;
        }
        //dbaas.logs.RolePermissionStreamCreation
        // fullName: dbaas.logs.RolePermissionStreamCreation.RolePermissionStreamCreation
        export interface RolePermissionStreamCreation {
            streamId: string;
        }
        //dbaas.logs.RoleUpdate
        // fullName: dbaas.logs.RoleUpdate.RoleUpdate
        export interface RoleUpdate {
            description: string;
            name: string;
            optionId?: string;
        }
        //dbaas.logs.Service
        // fullName: dbaas.logs.Service.Service
        export interface Service {
            createdAt?: string;
            displayName?: string;
            isCapped?: boolean;
            serviceName?: string;
            state?: OVH.dbaas.logs.ServiceStateEnum;
            updatedAt?: string;
            username?: string;
        }
        //dbaas.logs.ServiceMetric
        // fullName: dbaas.logs.ServiceMetric.ServiceMetric
        export interface ServiceMetric {
            host?: string;
            token?: string;
        }
        //dbaas.logs.ServiceStateEnum
        export type ServiceStateEnum = "INIT" | "TO_CONFIG" | "ENABLED" | "DISABLED"
        //dbaas.logs.Stream
        // fullName: dbaas.logs.Stream.Stream
        export interface Stream {
            canAlert?: boolean;
            coldStorageCompression?: OVH.dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: OVH.dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: OVH.dbaas.logs.StreamColdStorageTargetEnum;
            createdAt?: string;
            description?: string;
            indexingEnabled?: boolean;
            isEditable?: boolean;
            isShareable?: boolean;
            nbArchive?: number;
            optionId?: string;
            parentStreamId?: string;
            streamId?: string;
            title?: string;
            updatedAt?: string;
            webSocketEnabled?: boolean;
        }
        //dbaas.logs.StreamAlertCondition
        // fullName: dbaas.logs.StreamAlertCondition.StreamAlertCondition
        export interface StreamAlertCondition {
            alertId?: string;
            backlog?: number;
            conditionType?: OVH.dbaas.logs.StreamAlertConditionConditionTypeEnum;
            constraintType?: OVH.dbaas.logs.StreamAlertConditionConstraintTypeEnum;
            field?: string;
            grace?: number;
            queryFilter?: string;
            repeatNotificationsEnabled?: boolean;
            threshold?: number;
            thresholdType?: OVH.dbaas.logs.StreamAlertConditionThresholdTypeEnum;
            time?: number;
            title?: string;
            value?: string;
        }
        //dbaas.logs.StreamAlertConditionConditionTypeEnum
        export type StreamAlertConditionConditionTypeEnum = "MESSAGE_COUNT" | "FIELD_VALUE" | "FIELD_CONTENT_VALUE"
        //dbaas.logs.StreamAlertConditionConstraintTypeEnum
        export type StreamAlertConditionConstraintTypeEnum = "MEAN" | "MIN" | "MAX" | "SUM" | "STDDEV"
        //dbaas.logs.StreamAlertConditionThresholdTypeEnum
        export type StreamAlertConditionThresholdTypeEnum = "MORE" | "LESS" | "LOWER" | "HIGHER"
        //dbaas.logs.StreamColdStorageCompressionEnum
        export type StreamColdStorageCompressionEnum = "LZMA" | "GZIP" | "DEFLATED" | "ZSTD"
        //dbaas.logs.StreamColdStorageContentEnum
        export type StreamColdStorageContentEnum = "ALL" | "GELF" | "PLAIN"
        //dbaas.logs.StreamColdStorageTargetEnum
        export type StreamColdStorageTargetEnum = "PCA" | "PCS"
        //dbaas.logs.StreamRule
        // fullName: dbaas.logs.StreamRule.StreamRule
        export interface StreamRule {
            field?: string;
            isInverted?: boolean;
            operator?: OVH.dbaas.logs.StreamRuleOperatorEnum;
            ruleId?: string;
            value?: string;
        }
        //dbaas.logs.StreamRuleOperatorEnum
        export type StreamRuleOperatorEnum = "MATCH_EXACTLY" | "GREATER_THAN" | "SMALLER_THAN" | "FIELD_PRESENCE"
        //dbaas.logs.TemporaryLogsLink
        // fullName: dbaas.logs.TemporaryLogsLink.TemporaryLogsLink
        export interface TemporaryLogsLink {
            expirationDate?: string;
            url?: string;
        }
        //dbaas.logs.TestResult
        // fullName: dbaas.logs.TestResult.TestResult
        export interface TestResult {
            stderr?: string;
            stdout?: string;
            updatedAt?: string;
        }
        //dbaas.logs.Token
        // fullName: dbaas.logs.Token.Token
        export interface Token {
            clusterId?: string;
            createdAt?: string;
            name?: string;
            tokenId?: string;
            updatedAt?: string;
            value?: string;
        }
        //dbaas.logs.TokenCreation
        // fullName: dbaas.logs.TokenCreation.TokenCreation
        export interface TokenCreation {
            clusterId?: string;
            name: string;
        }
        //dbaas.logs.Update
        // fullName: dbaas.logs.Update.Update
        export interface Update {
            displayName?: string;
            isCapped?: boolean;
        }
        //dbaas.logs.Url
        // fullName: dbaas.logs.Url.Url
        export interface Url {
            address?: string;
            type?: OVH.dbaas.logs.UrlTypeEnum;
        }
        //dbaas.logs.UrlTypeEnum
        export type UrlTypeEnum = "GRAYLOG_WEBUI" | "GRAYLOG_API" | "ELASTICSEARCH_API" | "KIBANA_WEBUI" | "CONSOLE" | "WEB_SOCKET" | "SERVICE_DOMAIN" | "TCP_TLS_GELF" | "TCP_GELF" | "UDP_GELF" | "TCP_TLS_RFC5424" | "TCP_RFC5424" | "UDP_RFC5424" | "TCP_TLS_LTSV_LINE" | "TCP_TLS_LTSV_NUL" | "TCP_LTSV_LINE" | "TCP_LTSV_NUL" | "TCP_TLS_CAP_N_PROTO" | "TCP_CAP_N_PROTO" | "UDP_LTSV_NUL" | "UDP_LTSV_LINE" | "UDP_CAP_N_PROTO" | "HTTP_GELF" | "HTTP_TLS_GELF" | "TCP_BEATS" | "TCP_TLS_BEATS"
        //dbaas.logs.UserChangePasswordCreation
        // fullName: dbaas.logs.UserChangePasswordCreation.UserChangePasswordCreation
        export interface UserChangePasswordCreation {
            password: string;
        }
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
// path /dbaas
export interface Dbaas {
    logs:  {
        // GET /dbaas/logs
        GET(): Promise<string[]>;
        input:  {
            engine:  {
                // GET /dbaas/logs/input/engine
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /dbaas/logs/input/engine/{engineId}
                    GET(): Promise<dbaas.logs.Engine>;
                } | any
            }
        }
        offer:  {
            [keys: string]: {
                // GET /dbaas/logs/offer/{reference}
                GET(): Promise<dbaas.logs.PublicOffer>;
            } | any
        }
        [keys: string]: {
            // GET /dbaas/logs/{serviceName}
            GET(): Promise<dbaas.logs.Service>;
            // PUT /dbaas/logs/{serviceName}
            PUT(body?: {body: dbaas.logs.Update}): Promise<dbaas.logs.Operation>;
            changeContact:  {
                // POST /dbaas/logs/{serviceName}/changeContact
                POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
            }
            cluster:  {
                // GET /dbaas/logs/{serviceName}/cluster
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /dbaas/logs/{serviceName}/cluster/{clusterId}
                    GET(): Promise<dbaas.logs.Cluster>;
                    allowedNetwork:  {
                        // GET /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork
                        GET(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork
                        POST(body?: {body: dbaas.logs.ClusterAllowedNetworkCreation}): Promise<dbaas.logs.Operation>;
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}
                            GET(): Promise<dbaas.logs.ClusterAllowedNetwork>;
                        } | any
                    }
                } | any
            }
            input:  {
                // GET /dbaas/logs/{serviceName}/input
                GET(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/input
                POST(body?: {body: dbaas.logs.InputCreation}): Promise<dbaas.logs.Operation>;
                [keys: string]: {
                    // DELETE /dbaas/logs/{serviceName}/input/{inputId}
                    DELETE(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/input/{inputId}
                    GET(): Promise<dbaas.logs.Input>;
                    // PUT /dbaas/logs/{serviceName}/input/{inputId}
                    PUT(body?: {body: dbaas.logs.InputUpdate}): Promise<dbaas.logs.Operation>;
                    action:  {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/action
                        GET(): Promise<dbaas.logs.InputAction[]>;
                    }
                    allowedNetwork:  {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork
                        GET(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork
                        POST(body?: {body: dbaas.logs.InputAllowedNetworkCreation}): Promise<dbaas.logs.Operation>;
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}
                            GET(): Promise<dbaas.logs.AllowedNetwork>;
                        } | any
                    }
                    configtest:  {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/configtest
                        POST(): Promise<dbaas.logs.Operation>;
                        result:  {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configtest/result
                            GET(): Promise<dbaas.logs.TestResult>;
                        }
                    }
                    configuration:  {
                        flowgger:  {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                            GET(): Promise<dbaas.logs.FlowggerConfiguration>;
                            // PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                            PUT(body?: {body: dbaas.logs.InputConfigurationFlowggerUpdate}): Promise<dbaas.logs.Operation>;
                        }
                        logstash:  {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                            GET(): Promise<dbaas.logs.LogstashConfiguration>;
                            // PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                            PUT(body?: {body: dbaas.logs.InputConfigurationLogstashUpdate}): Promise<dbaas.logs.Operation>;
                        }
                    }
                    end:  {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/end
                        POST(): Promise<dbaas.logs.Operation>;
                    }
                    logs:  {
                        url:  {
                            // POST /dbaas/logs/{serviceName}/input/{inputId}/logs/url
                            POST(): Promise<dbaas.logs.TemporaryLogsLink>;
                        }
                    }
                    restart:  {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/restart
                        POST(): Promise<dbaas.logs.Operation>;
                    }
                    start:  {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/start
                        POST(): Promise<dbaas.logs.Operation>;
                    }
                    url:  {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/url
                        GET(): Promise<dbaas.logs.Url[]>;
                    }
                } | any
            }
            metrics:  {
                // GET /dbaas/logs/{serviceName}/metrics
                GET(): Promise<dbaas.logs.ServiceMetric>;
            }
            offer:  {
                // GET /dbaas/logs/{serviceName}/offer
                GET(): Promise<dbaas.logs.Offer>;
            }
            operation:  {
                // GET /dbaas/logs/{serviceName}/operation
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /dbaas/logs/{serviceName}/operation/{operationId}
                    GET(): Promise<dbaas.logs.Operation>;
                } | any
            }
            option:  {
                // GET /dbaas/logs/{serviceName}/option
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /dbaas/logs/{serviceName}/option/{optionId}
                    GET(): Promise<dbaas.logs.Option>;
                    terminate:  {
                        // POST /dbaas/logs/{serviceName}/option/{optionId}/terminate
                        POST(): Promise<dbaas.logs.Operation>;
                    }
                } | any
            }
            output:  {
                elasticsearch:  {
                    alias:  {
                        // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias
                        GET(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias
                        POST(body?: {body: dbaas.logs.OutputElasticsearchAliasCreation}): Promise<dbaas.logs.Operation>;
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            GET(): Promise<dbaas.logs.Alias>;
                            // PUT /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            PUT(body?: {body: dbaas.logs.OutputElasticsearchAliasUpdate}): Promise<dbaas.logs.Operation>;
                            index:  {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                GET(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                POST(body?: {body: dbaas.logs.OutputElasticsearchAliasIndexCreation}): Promise<dbaas.logs.Operation>;
                                [keys: string]: {
                                    // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}
                                    DELETE(): Promise<dbaas.logs.Operation>;
                                } | any
                            }
                            stream:  {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                GET(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                POST(body?: {body: dbaas.logs.OutputElasticsearchAliasStreamCreation}): Promise<dbaas.logs.Operation>;
                                [keys: string]: {
                                    // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}
                                    DELETE(): Promise<dbaas.logs.Operation>;
                                } | any
                            }
                            url:  {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url
                                GET(): Promise<dbaas.logs.Url[]>;
                            }
                        } | any
                    }
                    index:  {
                        // GET /dbaas/logs/{serviceName}/output/elasticsearch/index
                        GET(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/elasticsearch/index
                        POST(body?: {body: dbaas.logs.OutputElasticsearchIndexCreation}): Promise<dbaas.logs.Operation>;
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            GET(): Promise<dbaas.logs.Index>;
                            // PUT /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            PUT(body?: {body: dbaas.logs.OutputElasticsearchIndexUpdate}): Promise<dbaas.logs.Operation>;
                            url:  {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url
                                GET(): Promise<dbaas.logs.Url[]>;
                            }
                        } | any
                    }
                }
                graylog:  {
                    dashboard:  {
                        // GET /dbaas/logs/{serviceName}/output/graylog/dashboard
                        GET(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/graylog/dashboard
                        POST(body?: {body: dbaas.logs.OutputGraylogDashboardCreation}): Promise<dbaas.logs.Operation>;
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            GET(): Promise<dbaas.logs.Dashboard>;
                            // PUT /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            PUT(body?: {body: dbaas.logs.OutputGraylogDashboardUpdate}): Promise<dbaas.logs.Operation>;
                            duplicate:  {
                                // POST /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate
                                POST(body?: {body: dbaas.logs.OutputGraylogDashboardDuplicateCreation}): Promise<dbaas.logs.Operation>;
                            }
                            url:  {
                                // GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url
                                GET(): Promise<dbaas.logs.Url[]>;
                            }
                        } | any
                    }
                    stream:  {
                        // GET /dbaas/logs/{serviceName}/output/graylog/stream
                        GET(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/graylog/stream
                        POST(body?: {body: dbaas.logs.OutputGraylogStreamCreation}): Promise<dbaas.logs.Operation>;
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            GET(): Promise<dbaas.logs.Stream>;
                            // PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            PUT(body?: {body: dbaas.logs.OutputGraylogStreamUpdate}): Promise<dbaas.logs.Operation>;
                            alert:  {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                GET(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                POST(body?: {body: dbaas.logs.OutputGraylogStreamAlertCreation}): Promise<dbaas.logs.Operation>;
                                [keys: string]: {
                                    // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    DELETE(): Promise<dbaas.logs.Operation>;
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    GET(): Promise<dbaas.logs.StreamAlertCondition>;
                                    // PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    PUT(body?: {body: dbaas.logs.OutputGraylogStreamAlertUpdate}): Promise<dbaas.logs.Operation>;
                                } | any
                            }
                            archive:  {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive
                                GET(): Promise<string[]>;
                                [keys: string]: {
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}
                                    GET(): Promise<dbaas.logs.Archive>;
                                    url:  {
                                        // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url
                                        POST(): Promise<dbaas.logs.ArchiveUrl>;
                                    }
                                } | any
                            }
                            rule:  {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                GET(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                POST(body?: {body: dbaas.logs.OutputGraylogStreamRuleCreation}): Promise<dbaas.logs.Operation>;
                                [keys: string]: {
                                    // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                    DELETE(): Promise<dbaas.logs.Operation>;
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                    GET(): Promise<dbaas.logs.StreamRule[]>;
                                } | any
                            }
                            url:  {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url
                                GET(): Promise<dbaas.logs.Url[]>;
                            }
                        } | any
                    }
                }
            }
            quota:  {
                // GET /dbaas/logs/{serviceName}/quota
                GET(): Promise<dbaas.logs.Quota>;
            }
            role:  {
                // GET /dbaas/logs/{serviceName}/role
                GET(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/role
                POST(body?: {body: dbaas.logs.RoleCreation}): Promise<dbaas.logs.Operation>;
                [keys: string]: {
                    // DELETE /dbaas/logs/{serviceName}/role/{roleId}
                    DELETE(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/role/{roleId}
                    GET(): Promise<dbaas.logs.Role>;
                    // PUT /dbaas/logs/{serviceName}/role/{roleId}
                    PUT(body?: {body: dbaas.logs.RoleUpdate}): Promise<dbaas.logs.Operation>;
                    member:  {
                        // GET /dbaas/logs/{serviceName}/role/{roleId}/member
                        GET(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/role/{roleId}/member
                        POST(body?: {body: dbaas.logs.RoleMemberCreation}): Promise<dbaas.logs.Operation>;
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            GET(): Promise<dbaas.logs.Member>;
                            // PUT /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            PUT(body?: {body: dbaas.logs.RoleMemberUpdate}): Promise<dbaas.logs.Operation>;
                        } | any
                    }
                    permission:  {
                        // GET /dbaas/logs/{serviceName}/role/{roleId}/permission
                        GET(): Promise<string[]>;
                        alias:  {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/alias
                            POST(body?: {body: dbaas.logs.RolePermissionAliasCreation}): Promise<dbaas.logs.Operation>;
                        }
                        dashboard:  {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard
                            POST(body?: {body: dbaas.logs.RolePermissionDashboardCreation}): Promise<dbaas.logs.Operation>;
                        }
                        index:  {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/index
                            POST(body?: {body: dbaas.logs.RolePermissionIndexCreation}): Promise<dbaas.logs.Operation>;
                        }
                        stream:  {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/stream
                            POST(body?: {body: dbaas.logs.RolePermissionStreamCreation}): Promise<dbaas.logs.Operation>;
                        }
                        [keys: string]: {
                            // DELETE /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                            DELETE(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                            GET(): Promise<dbaas.logs.Permission[]>;
                        } | any
                    }
                } | any
            }
            serviceInfos:  {
                // GET /dbaas/logs/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /dbaas/logs/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            token:  {
                // GET /dbaas/logs/{serviceName}/token
                GET(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/token
                POST(body?: {body: dbaas.logs.TokenCreation}): Promise<dbaas.logs.Operation>;
                [keys: string]: {
                    // DELETE /dbaas/logs/{serviceName}/token/{tokenId}
                    DELETE(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/token/{tokenId}
                    GET(): Promise<dbaas.logs.Token>;
                } | any
            }
            url:  {
                // GET /dbaas/logs/{serviceName}/url
                GET(): Promise<dbaas.logs.Url[]>;
            }
            user:  {
                changePassword:  {
                    // POST /dbaas/logs/{serviceName}/user/changePassword
                    POST(body?: {body: dbaas.logs.UserChangePasswordCreation}): Promise<dbaas.logs.Operation>;
                }
            }
        } | any
    }
}
// Api
type PathsDbaasLogsGET = '/dbaas/logs' |
  '/dbaas/logs/input/engine' |
  '/dbaas/logs/input/engine/{engineId}' |
  '/dbaas/logs/offer/{reference}' |
  '/dbaas/logs/{serviceName}' |
  '/dbaas/logs/{serviceName}/cluster' |
  '/dbaas/logs/{serviceName}/cluster/{clusterId}' |
  '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork' |
  '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}' |
  '/dbaas/logs/{serviceName}/input' |
  '/dbaas/logs/{serviceName}/input/{inputId}' |
  '/dbaas/logs/{serviceName}/input/{inputId}/action' |
  '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork' |
  '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}' |
  '/dbaas/logs/{serviceName}/input/{inputId}/configtest/result' |
  '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger' |
  '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash' |
  '/dbaas/logs/{serviceName}/input/{inputId}/url' |
  '/dbaas/logs/{serviceName}/metrics' |
  '/dbaas/logs/{serviceName}/offer' |
  '/dbaas/logs/{serviceName}/operation' |
  '/dbaas/logs/{serviceName}/operation/{operationId}' |
  '/dbaas/logs/{serviceName}/option' |
  '/dbaas/logs/{serviceName}/option/{optionId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/index' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url' |
  '/dbaas/logs/{serviceName}/output/graylog/dashboard' |
  '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}' |
  '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url' |
  '/dbaas/logs/{serviceName}/output/graylog/stream' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url' |
  '/dbaas/logs/{serviceName}/quota' |
  '/dbaas/logs/{serviceName}/role' |
  '/dbaas/logs/{serviceName}/role/{roleId}' |
  '/dbaas/logs/{serviceName}/role/{roleId}/member' |
  '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}' |
  '/dbaas/logs/{serviceName}/role/{roleId}/permission' |
  '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}' |
  '/dbaas/logs/{serviceName}/serviceInfos' |
  '/dbaas/logs/{serviceName}/token' |
  '/dbaas/logs/{serviceName}/token/{tokenId}' |
  '/dbaas/logs/{serviceName}/url';

type PathsDbaasLogsPUT = '/dbaas/logs/{serviceName}' |
  '/dbaas/logs/{serviceName}/input/{inputId}' |
  '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger' |
  '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}' |
  '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}' |
  '/dbaas/logs/{serviceName}/role/{roleId}' |
  '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}' |
  '/dbaas/logs/{serviceName}/serviceInfos';

type PathsDbaasLogsPOST = '/dbaas/logs/{serviceName}/changeContact' |
  '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork' |
  '/dbaas/logs/{serviceName}/input' |
  '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork' |
  '/dbaas/logs/{serviceName}/input/{inputId}/configtest' |
  '/dbaas/logs/{serviceName}/input/{inputId}/end' |
  '/dbaas/logs/{serviceName}/input/{inputId}/logs/url' |
  '/dbaas/logs/{serviceName}/input/{inputId}/restart' |
  '/dbaas/logs/{serviceName}/input/{inputId}/start' |
  '/dbaas/logs/{serviceName}/option/{optionId}/terminate' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/index' |
  '/dbaas/logs/{serviceName}/output/graylog/dashboard' |
  '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate' |
  '/dbaas/logs/{serviceName}/output/graylog/stream' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule' |
  '/dbaas/logs/{serviceName}/role' |
  '/dbaas/logs/{serviceName}/role/{roleId}/member' |
  '/dbaas/logs/{serviceName}/role/{roleId}/permission/alias' |
  '/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard' |
  '/dbaas/logs/{serviceName}/role/{roleId}/permission/index' |
  '/dbaas/logs/{serviceName}/role/{roleId}/permission/stream' |
  '/dbaas/logs/{serviceName}/token' |
  '/dbaas/logs/{serviceName}/user/changePassword';

type PathsDbaasLogsDELETE = '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}' |
  '/dbaas/logs/{serviceName}/input/{inputId}' |
  '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}' |
  '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}' |
  '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}' |
  '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}' |
  '/dbaas/logs/{serviceName}/role/{roleId}' |
  '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}' |
  '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}' |
  '/dbaas/logs/{serviceName}/token/{tokenId}';

export class ApiDbaasLogs extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the DBAAS-LOGS service
   * List available services
   */
  public get(path: '/dbaas/logs'): Promise<string[]>;
  /**
   * Operations about the DBAAS-LOGS service
   * Returns the service object of connected identity.
   */
  public get(path: '/dbaas/logs/{serviceName}', params: {serviceName: string}): Promise<dbaas.logs.Service>;
  /**
   * Service Clusters
   * Returns the list of allowed cluster
   */
  public get(path: '/dbaas/logs/{serviceName}/cluster', params: {serviceName: string}): Promise<string[]>;
  /**
   * Service Clusters
   * Returns details of an allowed cluster
   */
  public get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}', params: {serviceName: string, clusterId: string}): Promise<dbaas.logs.Cluster>;
  /**
   * Cluster allowed networks
   * List all the network ID allowed to contact given cluster
   */
  public get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork', params: {serviceName: string, clusterId: string}): Promise<string[]>;
  /**
   * Cluster allowed networks
   * Returns details of an allowed network
   */
  public get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}', params: {serviceName: string, clusterId: string, allowedNetworkId: string}): Promise<dbaas.logs.ClusterAllowedNetwork>;
  /**
   * Inputs
   * Returns the list of registered input attached to the logged user
   */
  public get(path: '/dbaas/logs/{serviceName}/input', params: {serviceName: string}): Promise<string[]>;
  /**
   * Input
   * Returns details of specified input
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.Input>;
  /**
   * InputActions
   * Returns actions of specified input
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/action', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.InputAction[]>;
  /**
   * InputAllowedNetworks
   * List all network ID allowed to join input
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork', params: {serviceName: string, inputId: string}): Promise<string[]>;
  /**
   * InputAllowedNetwork
   * List all network ID allowed to join input
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}', params: {serviceName: string, inputId: string, allowedNetworkId: string}): Promise<dbaas.logs.AllowedNetwork>;
  /**
   * InputConfigtestResult
   * Returns the config test operation result
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest/result', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.TestResult>;
  /**
   * FlowggerConfiguration
   * Returns the flowgger configuration
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.FlowggerConfiguration>;
  /**
   * LogstashConfiguration
   * Returns the logstash configuration
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.LogstashConfiguration>;
  /**
   * InputUrls
   * Returns the list of urls of specified input
   */
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/url', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.Url[]>;
  /**
   * Service Metrics
   * Returns Metrics credentials
   */
  public get(path: '/dbaas/logs/{serviceName}/metrics', params: {serviceName: string}): Promise<dbaas.logs.ServiceMetric>;
  /**
   * ServiceOffer
   * Returns the subscribed offer
   */
  public get(path: '/dbaas/logs/{serviceName}/offer', params: {serviceName: string}): Promise<dbaas.logs.Offer>;
  /**
   * Operations
   * Latest operations
   */
  public get(path: '/dbaas/logs/{serviceName}/operation', params: {serviceName: string}): Promise<string[]>;
  /**
   * Operation
   * Returns details of specified operation
   */
  public get(path: '/dbaas/logs/{serviceName}/operation/{operationId}', params: {operationId: string, serviceName: string}): Promise<dbaas.logs.Operation>;
  /**
   * ServiceOptions
   * Returns the subscribed additional options
   */
  public get(path: '/dbaas/logs/{serviceName}/option', params: {serviceName: string}): Promise<string[]>;
  /**
   * ServiceOption
   * Returns details of a subscribed option
   */
  public get(path: '/dbaas/logs/{serviceName}/option/{optionId}', params: {serviceName: string, optionId: string}): Promise<dbaas.logs.Option>;
  /**
   * Aliases
   * Returns the list of alias for connected user
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias', params: {serviceName: string}): Promise<string[]>;
  /**
   * Alias
   * Returns specified elasticsearch alias
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}', params: {serviceName: string, aliasId: string}): Promise<dbaas.logs.Alias>;
  /**
   * AliasStreams
   * Returns the list of elasticsearch indexes attached to specified
        elasticsearch alias
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index', params: {serviceName: string, aliasId: string}): Promise<string[]>;
  /**
   * AliasStreams
   * Returns the list of graylog streams attached to specified
        elasticsearch alias
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream', params: {serviceName: string, aliasId: string}): Promise<string[]>;
  /**
   * StreamUrls
   * Returns the list of urls of specified graylog stream
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url', params: {serviceName: string, aliasId: string}): Promise<dbaas.logs.Url[]>;
  /**
   * Indexes
   * Returns the list of elasticsearch indexes
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index', params: {serviceName: string}): Promise<string[]>;
  /**
   * Index
   * Returns specified elasticsearch index
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}', params: {serviceName: string, indexId: string}): Promise<dbaas.logs.Index>;
  /**
   * StreamUrls
   * Returns the list of urls of specified graylog stream
   */
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url', params: {indexId: string, serviceName: string}): Promise<dbaas.logs.Url[]>;
  /**
   * Dashboards
   * Returns the list of graylog dashboards
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard', params: {serviceName: string}): Promise<string[]>;
  /**
   * Dashboard
   * Returns details of specified graylog dashboard
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}', params: {serviceName: string, dashboardId: string}): Promise<dbaas.logs.Dashboard>;
  /**
   * DashboardUrls
   * Returns the list of urls of specified graylog dashboard
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url', params: {serviceName: string, dashboardId: string}): Promise<dbaas.logs.Url[]>;
  /**
   * Streams
   * Returns the list of graylog streams
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream', params: {serviceName: string}): Promise<string[]>;
  /**
   * Stream
   * Returns details of specified graylog stream
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}', params: {serviceName: string, streamId: string}): Promise<dbaas.logs.Stream>;
  /**
   * StreamAlerts
   * Returns the list of configured alerts of specified graylog stream
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert', params: {serviceName: string, streamId: string}): Promise<string[]>;
  /**
   * StreamAlert
   * Returns details of specified graylog stream alert
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}', params: {serviceName: string, streamId: string, alertId: string}): Promise<dbaas.logs.StreamAlertCondition>;
  /**
   * StreamArchives
   * Returns the list of archives
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive', params: {serviceName: string, streamId: string}): Promise<string[]>;
  /**
   * StreamArchive
   * Returns details of specified archive
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}', params: {archiveId: string, serviceName: string, streamId: string}): Promise<dbaas.logs.Archive>;
  /**
   * StreamRules
   * Returns the list of rules of specified graylog stream
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule', params: {serviceName: string, streamId: string}): Promise<string[]>;
  /**
   * StreamRule
   * Returns details of specified graylog stream rule
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}', params: {serviceName: string, streamId: string, ruleId: string}): Promise<dbaas.logs.StreamRule[]>;
  /**
   * StreamUrls
   * Returns the list of urls of specified graylog stream
   */
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url', params: {serviceName: string, streamId: string}): Promise<dbaas.logs.Url[]>;
  /**
   * ServiceQuota
   * Returns the overall quota limits
   */
  public get(path: '/dbaas/logs/{serviceName}/quota', params: {serviceName: string}): Promise<dbaas.logs.Quota>;
  /**
   * Roles
   * Returns the list of roles
   */
  public get(path: '/dbaas/logs/{serviceName}/role', params: {serviceName: string}): Promise<string[]>;
  /**
   * Role
   * Returns details of specified role
   */
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}', params: {serviceName: string, roleId: string}): Promise<dbaas.logs.Role>;
  /**
   * RoleMembers
   * Returns the member list of specified role
   */
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member', params: {roleId: string, serviceName: string}): Promise<string[]>;
  /**
   * RoleMember
   * Returns the member metadata
   */
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}', params: {roleId: string, username: string, serviceName: string}): Promise<dbaas.logs.Member>;
  /**
   * RolePermissions
   * Returns the list of permissions of specified role
   */
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission', params: {serviceName: string, roleId: string}): Promise<string[]>;
  /**
   * RolePermission
   * Returns details of specified permission
   */
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}', params: {serviceName: string, roleId: string, permissionId: string}): Promise<dbaas.logs.Permission[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/dbaas/logs/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Tokens
   * Returns the list of service tokens
   */
  public get(path: '/dbaas/logs/{serviceName}/token', params: {serviceName: string}): Promise<string[]>;
  /**
   * Token
   * Returns the specified token
   */
  public get(path: '/dbaas/logs/{serviceName}/token/{tokenId}', params: {serviceName: string, tokenId: string}): Promise<dbaas.logs.Token>;
  /**
   * ServiceUrls
   * Returns platform useful urls.
   */
  public get(path: '/dbaas/logs/{serviceName}/url', params: {serviceName: string}): Promise<dbaas.logs.Url[]>;
  /**
   * Engines
   * Returns the list of available input engines
   */
  public get(path: '/dbaas/logs/input/engine'): Promise<string[]>;
  /**
   * Engine
   * Returns details of specified input engine
   */
  public get(path: '/dbaas/logs/input/engine/{engineId}', params: {engineId: string}): Promise<dbaas.logs.Engine>;
  /**
   * Offer
   * Display specified offer
   */
  public get(path: '/dbaas/logs/offer/{reference}', params: {reference: string}): Promise<dbaas.logs.PublicOffer>;
  public get(path: PathsDbaasLogsGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Operations about the DBAAS-LOGS service
   * Update the service properties
   */
  public put(path: '/dbaas/logs/{serviceName}', params: {serviceName: string, displayName?: string, isCapped?: boolean}): Promise<dbaas.logs.Operation>;
  /**
   * Input
   * Update information of specified input object
   */
  public put(path: '/dbaas/logs/{serviceName}/input/{inputId}', params: {serviceName: string, inputId: string, description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}): Promise<dbaas.logs.Operation>;
  /**
   * FlowggerConfiguration
   * Update the flowgger configuration
   */
  public put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger', params: {serviceName: string, inputId: string, logFormat: OVH.dbaas.logs.FlowggerConfigurationLogFormatEnum, logFraming: OVH.dbaas.logs.FlowggerConfigurationLogFramingEnum}): Promise<dbaas.logs.Operation>;
  /**
   * LogstashConfiguration
   * Update the logstash configuration
   */
  public put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash', params: {serviceName: string, inputId: string, filterSection?: string, inputSection: string, patternSection?: string}): Promise<dbaas.logs.Operation>;
  /**
   * Alias
   * Update specified elasticsearch alias
   */
  public put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}', params: {serviceName: string, aliasId: string, description: string, optionId?: string}): Promise<dbaas.logs.Operation>;
  /**
   * Index
   * Update specified elasticsearch index
   */
  public put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}', params: {serviceName: string, indexId: string, alertNotifyEnabled?: boolean, description: string}): Promise<dbaas.logs.Operation>;
  /**
   * Dashboard
   * Update information of specified graylog dashboard
   */
  public put(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}', params: {serviceName: string, dashboardId: string, description: string, optionId?: string, title: string}): Promise<dbaas.logs.Operation>;
  /**
   * Stream
   * Update information of specified graylog stream
   */
  public put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}', params: {serviceName: string, streamId: string, coldStorageCompression?: OVH.dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: OVH.dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: OVH.dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, title: string, webSocketEnabled?: boolean}): Promise<dbaas.logs.Operation>;
  /**
   * StreamAlert
   * Update alert information of specified graylog stream
   */
  public put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}', params: {serviceName: string, streamId: string, alertId: string, backlog: number, conditionType?: OVH.dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: OVH.dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: OVH.dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}): Promise<dbaas.logs.Operation>;
  /**
   * Role
   * Update information of specified role
   */
  public put(path: '/dbaas/logs/{serviceName}/role/{roleId}', params: {serviceName: string, roleId: string, description: string, name: string, optionId?: string}): Promise<dbaas.logs.Operation>;
  /**
   * RoleMember
   * Update the member metadata
   */
  public put(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}', params: {serviceName: string, roleId: string, username: string, note?: string}): Promise<dbaas.logs.Operation>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/dbaas/logs/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsDbaasLogsPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/dbaas/logs/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Cluster allowed networks
   * Allow an IP to contact cluster
   */
  public post(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork', params: {serviceName: string, clusterId: string, flowType: OVH.dbaas.logs.ClusterAllowedNetworkFlowTypeEnum, network: string}): Promise<dbaas.logs.Operation>;
  /**
   * Inputs
   * Register a new input object
   */
  public post(path: '/dbaas/logs/{serviceName}/input', params: {serviceName: string, autoSelectOption?: boolean, description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}): Promise<dbaas.logs.Operation>;
  /**
   * InputAllowedNetworks
   * Allow an ip to join input
   */
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork', params: {inputId: string, serviceName: string, network: string}): Promise<dbaas.logs.Operation>;
  /**
   * InputConfigtest
   * Validate configuration of specified input
   */
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest', params: {inputId: string, serviceName: string}): Promise<dbaas.logs.Operation>;
  /**
   * InputEnd
   * Schedule the end of specified input
   */
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/end', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.Operation>;
  /**
   * InputLogs
   * Generate a temporary url to retrieve input logs
   */
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/logs/url', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.TemporaryLogsLink>;
  /**
   * InputRestart
   * Schedule the restart of specified input
   */
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/restart', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.Operation>;
  /**
   * InputStart
   * Schedule the start of specified input
   */
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/start', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.Operation>;
  /**
   * ServiceOption
   * Remove the specified subscribed option
   */
  public post(path: '/dbaas/logs/{serviceName}/option/{optionId}/terminate', params: {serviceName: string, optionId: string}): Promise<dbaas.logs.Operation>;
  /**
   * Aliases
   * Register a new elasticsearch alias
   */
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias', params: {serviceName: string, autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}): Promise<dbaas.logs.Operation>;
  /**
   * AliasStreams
   * Attach a elasticsearch index to specified elasticsearch alias
   */
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index', params: {serviceName: string, aliasId: string, indexId: string}): Promise<dbaas.logs.Operation>;
  /**
   * AliasStreams
   * Attach a graylog stream to specified elasticsearch alias
   */
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream', params: {serviceName: string, aliasId: string, streamId: string}): Promise<dbaas.logs.Operation>;
  /**
   * Indexes
   * Register a new elasticsearch index
   */
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index', params: {serviceName: string, alertNotifyEnabled?: boolean, autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}): Promise<dbaas.logs.Operation>;
  /**
   * Dashboards
   * Register a new graylog dashboard
   */
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard', params: {serviceName: string, autoSelectOption?: boolean, description: string, optionId?: string, title: string}): Promise<dbaas.logs.Operation>;
  /**
   * DashboardClone
   * Copy all widgets from specified dashboard to a new one
   */
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate', params: {serviceName: string, dashboardId: string, autoSelectOption?: boolean, description: string, optionId?: string, streamId?: string, title: string}): Promise<dbaas.logs.Operation>;
  /**
   * Streams
   * Register a new graylog stream
   */
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream', params: {serviceName: string, autoSelectOption?: boolean, coldStorageCompression?: OVH.dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: OVH.dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: OVH.dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, parentStreamId?: string, title: string, webSocketEnabled?: boolean}): Promise<dbaas.logs.Operation>;
  /**
   * StreamAlerts
   * Register a new alert on specified graylog stream
   */
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert', params: {serviceName: string, streamId: string, backlog: number, conditionType?: OVH.dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: OVH.dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: OVH.dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}): Promise<dbaas.logs.Operation>;
  /**
   * Streams
   * Get a public temporary URL to access the archive
   */
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url', params: {streamId: string, archiveId: string, serviceName: string}): Promise<dbaas.logs.ArchiveUrl>;
  /**
   * StreamRules
   * Register a new rule on specified graylog stream
   */
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule', params: {serviceName: string, streamId: string, field: string, isInverted?: boolean, operator: OVH.dbaas.logs.StreamRuleOperatorEnum, value: string}): Promise<dbaas.logs.Operation>;
  /**
   * Roles
   * Register a new role
   */
  public post(path: '/dbaas/logs/{serviceName}/role', params: {serviceName: string, autoSelectOption?: boolean, description: string, name: string, optionId?: string}): Promise<dbaas.logs.Operation>;
  /**
   * RoleMembers
   * Append user into the member list of specified role
   */
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/member', params: {serviceName: string, roleId: string, note?: string, username: string}): Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionAlias
   * Append a elasticsearch alias permission to role
   */
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/alias', params: {serviceName: string, roleId: string, aliasId: string}): Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionIndex
   * Append a graylog dashboard permission to role
   */
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard', params: {roleId: string, serviceName: string, dashboardId: string, permissionType?: OVH.dbaas.logs.PermissionDashboardPermissionTypeEnum}): Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionIndex
   * Append a elasticsearch index permission to role
   */
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/index', params: {serviceName: string, roleId: string, indexId: string, permissionType?: OVH.dbaas.logs.PermissionIndexPermissionTypeEnum}): Promise<dbaas.logs.Operation>;
  /**
   * RolePermissionIndex
   * Append a graylog stream permission to role
   */
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/stream', params: {serviceName: string, roleId: string, streamId: string}): Promise<dbaas.logs.Operation>;
  /**
   * Tokens
   * Add a new token
   */
  public post(path: '/dbaas/logs/{serviceName}/token', params: {serviceName: string, clusterId?: string, name: string}): Promise<dbaas.logs.Operation>;
  /**
   * ServiceChangePassword
   * Initiate a password change procedure.
   */
  public post(path: '/dbaas/logs/{serviceName}/user/changePassword', params: {serviceName: string, password: string}): Promise<dbaas.logs.Operation>;
  public post(path: PathsDbaasLogsPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Cluster allowed networks
   * Remove the specified IP from the list of allowed networks
   */
  public delete(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}', params: {serviceName: string, clusterId: string, allowedNetworkId: string}): Promise<dbaas.logs.Operation>;
  /**
   * Input
   * Remove the specified input object
   */
  public delete(path: '/dbaas/logs/{serviceName}/input/{inputId}', params: {serviceName: string, inputId: string}): Promise<dbaas.logs.Operation>;
  /**
   * InputAllowedNetwork
   * Remove the specified IP from the list of allowed networks
   */
  public delete(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}', params: {inputId: string, allowedNetworkId: string, serviceName: string}): Promise<dbaas.logs.Operation>;
  /**
   * Alias
   * Remove specified elasticsearch alias
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}', params: {aliasId: string, serviceName: string}): Promise<dbaas.logs.Operation>;
  /**
   * AliasStream
   * Detach a elasticsearch index from specified elasticsearch alias
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}', params: {serviceName: string, aliasId: string, indexId: string}): Promise<dbaas.logs.Operation>;
  /**
   * AliasStream
   * Detach a graylog stream from specified elasticsearch alias
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}', params: {aliasId: string, streamId: string, serviceName: string}): Promise<dbaas.logs.Operation>;
  /**
   * Index
   * Remove specified elasticsearch index
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}', params: {serviceName: string, indexId: string}): Promise<dbaas.logs.Operation>;
  /**
   * Dashboard
   * Remove specified graylog dashboard
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}', params: {serviceName: string, dashboardId: string}): Promise<dbaas.logs.Operation>;
  /**
   * Stream
   * Remove specified graylog stream
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}', params: {serviceName: string, streamId: string}): Promise<dbaas.logs.Operation>;
  /**
   * StreamAlert
   * Remove alert from specified graylog stream
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}', params: {alertId: string, serviceName: string, streamId: string}): Promise<dbaas.logs.Operation>;
  /**
   * StreamRule
   * Remove specified graylog stream rule
   */
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}', params: {streamId: string, ruleId: string, serviceName: string}): Promise<dbaas.logs.Operation>;
  /**
   * Role
   * Remove specified role
   */
  public delete(path: '/dbaas/logs/{serviceName}/role/{roleId}', params: {roleId: string, serviceName: string}): Promise<dbaas.logs.Operation>;
  /**
   * RoleMember
   * Remove user from the member list of specified role
   */
  public delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}', params: {username: string, serviceName: string, roleId: string}): Promise<dbaas.logs.Operation>;
  /**
   * RolePermission
   * Remove specified permission
   */
  public delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}', params: {serviceName: string, roleId: string, permissionId: string}): Promise<dbaas.logs.Operation>;
  /**
   * Token
   * Delete the specified token
   */
  public delete(path: '/dbaas/logs/{serviceName}/token/{tokenId}', params: {serviceName: string, tokenId: string}): Promise<dbaas.logs.Operation>;
  public delete(path: PathsDbaasLogsDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}