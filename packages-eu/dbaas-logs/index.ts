import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dbaas/logs Models
 * Source: https://eu.api.ovh.com/1.0/dbaas/logs.json
 */
export namespace dbaas {
    export namespace logs {
        // interface fullName: dbaas.logs.Alias.Alias
        export interface Alias {
            aliasId: string;
            createdAt: string;
            description?: string;
            isEditable: boolean;
            isShareable: boolean;
            name: string;
            optionId?: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.AllowedNetwork.AllowedNetwork
        export interface AllowedNetwork {
            allowedNetworkId: string;
            network: string;
        }
        // interface fullName: dbaas.logs.Archive.Archive
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
        // type fullname: dbaas.logs.ArchiveRetrievalStateEnum
        export type ArchiveRetrievalStateEnum = "sealed" | "unsealing" | "unsealed"
        // interface fullName: dbaas.logs.ArchiveUrl.ArchiveUrl
        export interface ArchiveUrl {
            expirationDate: string;
            url: string;
        }
        // interface fullName: dbaas.logs.Cluster.Cluster
        export interface Cluster {
            clusterId: string;
            clusterType: dbaas.logs.ClusterClusterTypeEnum;
            dedicatedInputPEM: string;
            directInputAllowedNetworks: string[];
            directInputPEM: string;
            hostname: string;
            isDefault: boolean;
            isUnlocked: boolean;
            queryAllowedNetworks: string[];
            region: dbaas.logs.ClusterRegionEnum;
        }
        // interface fullName: dbaas.logs.ClusterAllowedNetwork.ClusterAllowedNetwork
        export interface ClusterAllowedNetwork {
            allowedNetworkId: string;
            flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
            network: string;
        }
        // interface fullName: dbaas.logs.ClusterAllowedNetworkCreation.ClusterAllowedNetworkCreation
        export interface ClusterAllowedNetworkCreation {
            flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
            network: string;
        }
        // type fullname: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum
        export type ClusterAllowedNetworkFlowTypeEnum = "QUERY" | "DIRECT_INPUT" | "ALL"
        // interface fullName: dbaas.logs.ClusterAllowedNetworks.ClusterAllowedNetworks
        export interface ClusterAllowedNetworks {
            directInputAllowedNetworks?: string[];
            queryAllowedNetworks?: string[];
        }
        // type fullname: dbaas.logs.ClusterClusterTypeEnum
        export type ClusterClusterTypeEnum = "TRIAL" | "PRO" | "DEDICATED"
        // type fullname: dbaas.logs.ClusterRegionEnum
        export type ClusterRegionEnum = "GRA" | "RBX" | "BHS" | "SBG" | "P-19"
        // interface fullName: dbaas.logs.Dashboard.Dashboard
        export interface Dashboard {
            createdAt: string;
            dashboardId: string;
            description: string;
            isEditable: boolean;
            isShareable: boolean;
            optionId?: string;
            title: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.Engine.Engine
        export interface Engine {
            engineId: string;
            isDeprecated: boolean;
            name: dbaas.logs.EngineNameEnum;
            version: string;
        }
        // type fullname: dbaas.logs.EngineNameEnum
        export type EngineNameEnum = "FLOWGGER" | "LOGSTASH" | "TEST"
        // interface fullName: dbaas.logs.FlowggerConfiguration.FlowggerConfiguration
        export interface FlowggerConfiguration {
            logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        // type fullname: dbaas.logs.FlowggerConfigurationLogFormatEnum
        export type FlowggerConfigurationLogFormatEnum = "RFC5424" | "LTSV" | "GELF" | "CAPNP"
        // type fullname: dbaas.logs.FlowggerConfigurationLogFramingEnum
        export type FlowggerConfigurationLogFramingEnum = "LINE" | "NUL" | "SYSLEN" | "CAPNP"
        // interface fullName: dbaas.logs.Helper.Helper
        export interface Helper {
            description: string;
            engineId: string;
            helperId: string;
            sections: dbaas.logs.HelperSection[];
            title: string;
        }
        // interface fullName: dbaas.logs.HelperSection.HelperSection
        export interface HelperSection {
            content: string;
            name: dbaas.logs.HelperSectionNameEnum;
        }
        // type fullname: dbaas.logs.HelperSectionNameEnum
        export type HelperSectionNameEnum = "LOGSTASH_INPUT" | "LOGSTASH_FILTER" | "LOGSTASH_PATTERN"
        // interface fullName: dbaas.logs.Index.Index
        export interface Index {
            alertNotifyEnabled?: boolean;
            createdAt: string;
            description?: string;
            indexId: string;
            isEditable: boolean;
            isShareable: boolean;
            maxSize: number;
            name: string;
            optionId?: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.Input.Input
        export interface Input {
            allowedNetworks?: string[];
            autoSelectOption?: boolean;
            createdAt: string;
            description: string;
            engineId: string;
            exposedPort?: string;
            hostname: string;
            inputId: string;
            isRestartRequired: boolean;
            optionId?: string;
            publicAddress: string;
            singleInstanceEnabled?: boolean;
            sslCertificate: string;
            status: dbaas.logs.InputStatusEnum;
            streamId: string;
            title: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.InputAction.InputAction
        export interface InputAction {
            isAllowed: boolean;
            type: dbaas.logs.InputActionTypeEnum;
        }
        // type fullname: dbaas.logs.InputActionTypeEnum
        export type InputActionTypeEnum = "END" | "LOG" | "START" | "TEST" | "DESTROY" | "RESTART"
        // interface fullName: dbaas.logs.InputAllowedNetworkCreation.InputAllowedNetworkCreation
        export interface InputAllowedNetworkCreation {
            network: string;
        }
        // interface fullName: dbaas.logs.InputConfigurationFlowggerUpdate.InputConfigurationFlowggerUpdate
        export interface InputConfigurationFlowggerUpdate {
            logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        // interface fullName: dbaas.logs.InputConfigurationLogstashUpdate.InputConfigurationLogstashUpdate
        export interface InputConfigurationLogstashUpdate {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        // interface fullName: dbaas.logs.InputCreation.InputCreation
        export interface InputCreation {
            allowedNetworks?: string[];
            autoSelectOption?: boolean;
            description: string;
            engineId: string;
            exposedPort?: string;
            optionId?: string;
            singleInstanceEnabled?: boolean;
            streamId: string;
            title: string;
        }
        // type fullname: dbaas.logs.InputStatusEnum
        export type InputStatusEnum = "INIT" | "PENDING" | "RUNNING" | "PROCESSING"
        // interface fullName: dbaas.logs.InputUpdate.InputUpdate
        export interface InputUpdate {
            allowedNetworks?: string[];
            description: string;
            engineId: string;
            exposedPort?: string;
            optionId?: string;
            singleInstanceEnabled?: boolean;
            streamId: string;
            title: string;
        }
        // interface fullName: dbaas.logs.LogstashConfiguration.LogstashConfiguration
        export interface LogstashConfiguration {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        // interface fullName: dbaas.logs.Member.Member
        export interface Member {
            createdAt: string;
            note?: string;
            username: string;
        }
        // interface fullName: dbaas.logs.Offer.Offer
        export interface Offer {
            curNbAlias: number;
            curNbDashboard: number;
            curNbIndex: number;
            curNbInput: number;
            curNbRole: number;
            curNbStream: number;
            esStorage?: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
            reference: string;
            retention?: number;
        }
        // interface fullName: dbaas.logs.Operation.Operation
        export interface Operation {
            aliasId?: string;
            createdAt: string;
            dashboardId?: string;
            indexId?: string;
            inputId?: string;
            operationId: string;
            optionId?: string;
            roleId?: string;
            state: dbaas.logs.OperationStateEnum;
            streamId?: string;
            updatedAt?: string;
        }
        // type fullname: dbaas.logs.OperationStateEnum
        export type OperationStateEnum = "PENDING" | "RECEIVED" | "STARTED" | "SUCCESS" | "FAILURE" | "REVOKED" | "RETRY" | "RUNNING"
        // interface fullName: dbaas.logs.Option.Option
        export interface Option {
            createdAt: string;
            curNbAlias: number;
            curNbDashboard: number;
            curNbIndex: number;
            curNbInput: number;
            curNbRole: number;
            curNbStream: number;
            indexSize?: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
            optionId: string;
            reference: string;
            state: dbaas.logs.OptionStateEnum;
            updatedAt?: string;
        }
        // type fullname: dbaas.logs.OptionStateEnum
        export type OptionStateEnum = "ENABLED" | "DISABLED"
        // interface fullName: dbaas.logs.OutputElasticsearchAliasCreation.OutputElasticsearchAliasCreation
        export interface OutputElasticsearchAliasCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            suffix: string;
        }
        // interface fullName: dbaas.logs.OutputElasticsearchAliasIndexCreation.OutputElasticsearchAliasIndexCreation
        export interface OutputElasticsearchAliasIndexCreation {
            indexId: string;
        }
        // interface fullName: dbaas.logs.OutputElasticsearchAliasStreamCreation.OutputElasticsearchAliasStreamCreation
        export interface OutputElasticsearchAliasStreamCreation {
            streamId: string;
        }
        // interface fullName: dbaas.logs.OutputElasticsearchAliasUpdate.OutputElasticsearchAliasUpdate
        export interface OutputElasticsearchAliasUpdate {
            description: string;
            optionId?: string;
        }
        // interface fullName: dbaas.logs.OutputElasticsearchIndexCreation.OutputElasticsearchIndexCreation
        export interface OutputElasticsearchIndexCreation {
            alertNotifyEnabled?: boolean;
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            suffix: string;
        }
        // interface fullName: dbaas.logs.OutputElasticsearchIndexUpdate.OutputElasticsearchIndexUpdate
        export interface OutputElasticsearchIndexUpdate {
            alertNotifyEnabled?: boolean;
            description: string;
        }
        // interface fullName: dbaas.logs.OutputGraylogDashboardCreation.OutputGraylogDashboardCreation
        export interface OutputGraylogDashboardCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            title: string;
        }
        // interface fullName: dbaas.logs.OutputGraylogDashboardDuplicateCreation.OutputGraylogDashboardDuplicateCreation
        export interface OutputGraylogDashboardDuplicateCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            streamId?: string;
            title: string;
        }
        // interface fullName: dbaas.logs.OutputGraylogDashboardUpdate.OutputGraylogDashboardUpdate
        export interface OutputGraylogDashboardUpdate {
            description: string;
            optionId?: string;
            title: string;
        }
        // interface fullName: dbaas.logs.OutputGraylogStreamAlertCreation.OutputGraylogStreamAlertCreation
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
        // interface fullName: dbaas.logs.OutputGraylogStreamAlertUpdate.OutputGraylogStreamAlertUpdate
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
        // interface fullName: dbaas.logs.OutputGraylogStreamCreation.OutputGraylogStreamCreation
        export interface OutputGraylogStreamCreation {
            autoSelectOption?: boolean;
            coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum;
            description: string;
            indexingEnabled?: boolean;
            optionId?: string;
            parentStreamId?: string;
            title: string;
            webSocketEnabled?: boolean;
        }
        // interface fullName: dbaas.logs.OutputGraylogStreamRuleCreation.OutputGraylogStreamRuleCreation
        export interface OutputGraylogStreamRuleCreation {
            field: string;
            isInverted?: boolean;
            operator: dbaas.logs.StreamRuleOperatorEnum;
            value: string;
        }
        // interface fullName: dbaas.logs.OutputGraylogStreamUpdate.OutputGraylogStreamUpdate
        export interface OutputGraylogStreamUpdate {
            coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum;
            coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum;
            coldStorageEnabled?: boolean;
            coldStorageNotifyEnabled?: boolean;
            coldStorageRetention?: number;
            coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum;
            description: string;
            indexingEnabled?: boolean;
            optionId?: string;
            title: string;
            webSocketEnabled?: boolean;
        }
        // interface fullName: dbaas.logs.Permission.Permission
        export interface Permission {
            aliasId?: string;
            dashboardId?: string;
            indexId?: string;
            permissionId: string;
            permissionType?: dbaas.logs.PermissionTypeEnum;
            streamId?: string;
        }
        // type fullname: dbaas.logs.PermissionDashboardPermissionTypeEnum
        export type PermissionDashboardPermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        // type fullname: dbaas.logs.PermissionIndexPermissionTypeEnum
        export type PermissionIndexPermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        // type fullname: dbaas.logs.PermissionTypeEnum
        export type PermissionTypeEnum = "READ_ONLY" | "READ_WRITE"
        // interface fullName: dbaas.logs.PublicOffer.PublicOffer
        export interface PublicOffer {
            esStorage: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
            reference: string;
        }
        // interface fullName: dbaas.logs.Quota.Quota
        export interface Quota {
            curNbAlias: number;
            curNbDashboard: number;
            curNbIndex: number;
            curNbInput: number;
            curNbRole: number;
            curNbStream: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
        }
        // interface fullName: dbaas.logs.Role.Role
        export interface Role {
            createdAt: string;
            description: string;
            name: string;
            optionId?: string;
            roleId: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.RoleCreation.RoleCreation
        export interface RoleCreation {
            autoSelectOption?: boolean;
            description: string;
            name: string;
            optionId?: string;
        }
        // interface fullName: dbaas.logs.RoleMemberCreation.RoleMemberCreation
        export interface RoleMemberCreation {
            note?: string;
            username: string;
        }
        // interface fullName: dbaas.logs.RoleMemberUpdate.RoleMemberUpdate
        export interface RoleMemberUpdate {
            note?: string;
        }
        // interface fullName: dbaas.logs.RolePermissionAliasCreation.RolePermissionAliasCreation
        export interface RolePermissionAliasCreation {
            aliasId: string;
        }
        // interface fullName: dbaas.logs.RolePermissionDashboardCreation.RolePermissionDashboardCreation
        export interface RolePermissionDashboardCreation {
            dashboardId: string;
            permissionType?: dbaas.logs.PermissionDashboardPermissionTypeEnum;
        }
        // interface fullName: dbaas.logs.RolePermissionIndexCreation.RolePermissionIndexCreation
        export interface RolePermissionIndexCreation {
            indexId: string;
            permissionType?: dbaas.logs.PermissionIndexPermissionTypeEnum;
        }
        // interface fullName: dbaas.logs.RolePermissionStreamCreation.RolePermissionStreamCreation
        export interface RolePermissionStreamCreation {
            streamId: string;
        }
        // interface fullName: dbaas.logs.RoleUpdate.RoleUpdate
        export interface RoleUpdate {
            description: string;
            name: string;
            optionId?: string;
        }
        // interface fullName: dbaas.logs.Service.Service
        export interface Service {
            createdAt: string;
            displayName?: string;
            isCapped: boolean;
            serviceName: string;
            state?: dbaas.logs.ServiceStateEnum;
            updatedAt?: string;
            username: string;
        }
        // interface fullName: dbaas.logs.ServiceMetric.ServiceMetric
        export interface ServiceMetric {
            host: string;
            token: string;
        }
        // type fullname: dbaas.logs.ServiceStateEnum
        export type ServiceStateEnum = "INIT" | "TO_CONFIG" | "ENABLED" | "DISABLED"
        // interface fullName: dbaas.logs.Stream.Stream
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
            indexingEnabled?: boolean;
            isEditable: boolean;
            isShareable: boolean;
            nbArchive: number;
            optionId?: string;
            parentStreamId?: string;
            streamId: string;
            title: string;
            updatedAt?: string;
            webSocketEnabled?: boolean;
        }
        // interface fullName: dbaas.logs.StreamAlertCondition.StreamAlertCondition
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
        // type fullname: dbaas.logs.StreamAlertConditionConditionTypeEnum
        export type StreamAlertConditionConditionTypeEnum = "MESSAGE_COUNT" | "FIELD_VALUE" | "FIELD_CONTENT_VALUE"
        // type fullname: dbaas.logs.StreamAlertConditionConstraintTypeEnum
        export type StreamAlertConditionConstraintTypeEnum = "MEAN" | "MIN" | "MAX" | "SUM" | "STDDEV"
        // type fullname: dbaas.logs.StreamAlertConditionThresholdTypeEnum
        export type StreamAlertConditionThresholdTypeEnum = "MORE" | "LESS" | "LOWER" | "HIGHER"
        // type fullname: dbaas.logs.StreamColdStorageCompressionEnum
        export type StreamColdStorageCompressionEnum = "LZMA" | "GZIP" | "DEFLATED" | "ZSTD"
        // type fullname: dbaas.logs.StreamColdStorageContentEnum
        export type StreamColdStorageContentEnum = "ALL" | "GELF" | "PLAIN"
        // type fullname: dbaas.logs.StreamColdStorageTargetEnum
        export type StreamColdStorageTargetEnum = "PCA" | "PCS"
        // interface fullName: dbaas.logs.StreamRule.StreamRule
        export interface StreamRule {
            field: string;
            isInverted?: boolean;
            operator?: dbaas.logs.StreamRuleOperatorEnum;
            ruleId: string;
            value: string;
        }
        // type fullname: dbaas.logs.StreamRuleOperatorEnum
        export type StreamRuleOperatorEnum = "MATCH_EXACTLY" | "GREATER_THAN" | "SMALLER_THAN" | "FIELD_PRESENCE"
        // interface fullName: dbaas.logs.TemporaryLogsLink.TemporaryLogsLink
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        // interface fullName: dbaas.logs.TestResult.TestResult
        export interface TestResult {
            stderr?: string;
            stdout?: string;
            updatedAt?: string;
        }
        // interface fullName: dbaas.logs.Token.Token
        export interface Token {
            clusterId?: string;
            createdAt: string;
            name: string;
            tokenId: string;
            updatedAt?: string;
            value: string;
        }
        // interface fullName: dbaas.logs.TokenCreation.TokenCreation
        export interface TokenCreation {
            clusterId?: string;
            name: string;
        }
        // interface fullName: dbaas.logs.Update.Update
        export interface Update {
            displayName?: string;
            isCapped?: boolean;
        }
        // interface fullName: dbaas.logs.Url.Url
        export interface Url {
            address: string;
            type: dbaas.logs.UrlTypeEnum;
        }
        // type fullname: dbaas.logs.UrlTypeEnum
        export type UrlTypeEnum = "GRAYLOG_WEBUI" | "GRAYLOG_API" | "ELASTICSEARCH_API" | "KIBANA_WEBUI" | "CONSOLE" | "WEB_SOCKET" | "SERVICE_DOMAIN" | "TCP_TLS_GELF" | "TCP_GELF" | "UDP_GELF" | "TCP_TLS_RFC5424" | "TCP_RFC5424" | "UDP_RFC5424" | "TCP_TLS_LTSV_LINE" | "TCP_TLS_LTSV_NUL" | "TCP_LTSV_LINE" | "TCP_LTSV_NUL" | "TCP_TLS_CAP_N_PROTO" | "TCP_CAP_N_PROTO" | "UDP_LTSV_NUL" | "UDP_LTSV_LINE" | "UDP_CAP_N_PROTO" | "HTTP_GELF" | "HTTP_TLS_GELF" | "TCP_BEATS" | "TCP_TLS_BEATS"
        // interface fullName: dbaas.logs.UserChangePasswordCreation.UserChangePasswordCreation
        export interface UserChangePasswordCreation {
            password: string;
        }
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
 * END API /dbaas/logs Models
 */
export function proxyDbaasLogs(ovhEngine: OvhRequestable): Dbaas {
    return buildOvhProxy(ovhEngine, '/dbaas');
}
export default proxyDbaasLogs;
/**
 * Api Proxy model
 */// Apis harmony
// path /dbaas
export interface Dbaas{
    logs: {
        // GET /dbaas/logs
        $get(): Promise<string[]>;
        input: {
            engine: {
                // GET /dbaas/logs/input/engine
                $get(): Promise<string[]>;
                $(engineId: string): {
                    // GET /dbaas/logs/input/engine/{engineId}
                    $get(): Promise<dbaas.logs.Engine>;
                    helper: {
                        // GET /dbaas/logs/input/engine/{engineId}/helper
                        $get(): Promise<string[]>;
                        $(helperId: string): {
                            // GET /dbaas/logs/input/engine/{engineId}/helper/{helperId}
                            $get(): Promise<dbaas.logs.Helper>;
                        };
                    }
                };
            }
        }
        offer: {
            $(reference: string): {
                // GET /dbaas/logs/offer/{reference}
                $get(): Promise<dbaas.logs.PublicOffer>;
            };
        }
        $(serviceName: string): {
            // GET /dbaas/logs/{serviceName}
            $get(): Promise<dbaas.logs.Service>;
            // PUT /dbaas/logs/{serviceName}
            $put(params?: {displayName?: string, isCapped?: boolean}): Promise<dbaas.logs.Operation>;
            changeContact: {
                // POST /dbaas/logs/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            cluster: {
                // GET /dbaas/logs/{serviceName}/cluster
                $get(): Promise<string[]>;
                $(clusterId: string): {
                    // GET /dbaas/logs/{serviceName}/cluster/{clusterId}
                    $get(): Promise<dbaas.logs.Cluster>;
                    // PUT /dbaas/logs/{serviceName}/cluster/{clusterId}
                    $put(params?: {directInputAllowedNetworks?: string[], queryAllowedNetworks?: string[]}): Promise<dbaas.logs.Operation>;
                    allowedNetwork: {
                        // GET /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork
                        $post(params: {flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum, network: string}): Promise<dbaas.logs.Operation>;
                        $(allowedNetworkId: string): {
                            // DELETE /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}
                            $get(): Promise<dbaas.logs.ClusterAllowedNetwork>;
                        };
                    }
                };
            }
            input: {
                // GET /dbaas/logs/{serviceName}/input
                $get(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/input
                $post(params: {allowedNetworks?: string[], autoSelectOption?: boolean, description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}): Promise<dbaas.logs.Operation>;
                $(inputId: string): {
                    // DELETE /dbaas/logs/{serviceName}/input/{inputId}
                    $delete(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/input/{inputId}
                    $get(): Promise<dbaas.logs.Input>;
                    // PUT /dbaas/logs/{serviceName}/input/{inputId}
                    $put(params: {allowedNetworks?: string[], description: string, engineId: string, exposedPort?: string, optionId?: string, singleInstanceEnabled?: boolean, streamId: string, title: string}): Promise<dbaas.logs.Operation>;
                    action: {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/action
                        $get(): Promise<dbaas.logs.InputAction[]>;
                    }
                    allowedNetwork: {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork
                        $post(params: {network: string}): Promise<dbaas.logs.Operation>;
                        $(allowedNetworkId: string): {
                            // DELETE /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}
                            $get(): Promise<dbaas.logs.AllowedNetwork>;
                        };
                    }
                    configtest: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/configtest
                        $post(): Promise<dbaas.logs.Operation>;
                        result: {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configtest/result
                            $get(): Promise<dbaas.logs.TestResult>;
                        }
                    }
                    configuration: {
                        flowgger: {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                            $get(): Promise<dbaas.logs.FlowggerConfiguration>;
                            // PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger
                            $put(params: {logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum, logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum}): Promise<dbaas.logs.Operation>;
                        }
                        logstash: {
                            // GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                            $get(): Promise<dbaas.logs.LogstashConfiguration>;
                            // PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash
                            $put(params: {filterSection?: string, inputSection: string, patternSection?: string}): Promise<dbaas.logs.Operation>;
                        }
                    }
                    end: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/end
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    logs: {
                        url: {
                            // POST /dbaas/logs/{serviceName}/input/{inputId}/logs/url
                            $post(): Promise<dbaas.logs.TemporaryLogsLink>;
                        }
                    }
                    restart: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/restart
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    start: {
                        // POST /dbaas/logs/{serviceName}/input/{inputId}/start
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                    url: {
                        // GET /dbaas/logs/{serviceName}/input/{inputId}/url
                        $get(): Promise<dbaas.logs.Url[]>;
                    }
                };
            }
            metrics: {
                // GET /dbaas/logs/{serviceName}/metrics
                $get(): Promise<dbaas.logs.ServiceMetric>;
            }
            offer: {
                // GET /dbaas/logs/{serviceName}/offer
                $get(): Promise<dbaas.logs.Offer>;
            }
            operation: {
                // GET /dbaas/logs/{serviceName}/operation
                $get(): Promise<string[]>;
                $(operationId: string): {
                    // GET /dbaas/logs/{serviceName}/operation/{operationId}
                    $get(): Promise<dbaas.logs.Operation>;
                };
            }
            option: {
                // GET /dbaas/logs/{serviceName}/option
                $get(): Promise<string[]>;
                $(optionId: string): {
                    // GET /dbaas/logs/{serviceName}/option/{optionId}
                    $get(): Promise<dbaas.logs.Option>;
                    terminate: {
                        // POST /dbaas/logs/{serviceName}/option/{optionId}/terminate
                        $post(): Promise<dbaas.logs.Operation>;
                    }
                };
            }
            output: {
                elasticsearch: {
                    alias: {
                        // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias
                        $post(params: {autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}): Promise<dbaas.logs.Operation>;
                        $(aliasId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            $get(): Promise<dbaas.logs.Alias>;
                            // PUT /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}
                            $put(params: {description: string, optionId?: string}): Promise<dbaas.logs.Operation>;
                            index: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index
                                $post(params: {indexId: string}): Promise<dbaas.logs.Operation>;
                                $(indexId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            stream: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream
                                $post(params: {streamId: string}): Promise<dbaas.logs.Operation>;
                                $(streamId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            }
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                    index: {
                        // GET /dbaas/logs/{serviceName}/output/elasticsearch/index
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/elasticsearch/index
                        $post(params: {alertNotifyEnabled?: boolean, autoSelectOption?: boolean, description: string, optionId?: string, suffix: string}): Promise<dbaas.logs.Operation>;
                        $(indexId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            $get(): Promise<dbaas.logs.Index>;
                            // PUT /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}
                            $put(params: {alertNotifyEnabled?: boolean, description: string}): Promise<dbaas.logs.Operation>;
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                }
                graylog: {
                    dashboard: {
                        // GET /dbaas/logs/{serviceName}/output/graylog/dashboard
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/graylog/dashboard
                        $post(params: {autoSelectOption?: boolean, description: string, optionId?: string, title: string}): Promise<dbaas.logs.Operation>;
                        $(dashboardId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            $get(): Promise<dbaas.logs.Dashboard>;
                            // PUT /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}
                            $put(params: {description: string, optionId?: string, title: string}): Promise<dbaas.logs.Operation>;
                            duplicate: {
                                // POST /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate
                                $post(params: {autoSelectOption?: boolean, description: string, optionId?: string, streamId?: string, title: string}): Promise<dbaas.logs.Operation>;
                            }
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                    stream: {
                        // GET /dbaas/logs/{serviceName}/output/graylog/stream
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/output/graylog/stream
                        $post(params: {autoSelectOption?: boolean, coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, parentStreamId?: string, title: string, webSocketEnabled?: boolean}): Promise<dbaas.logs.Operation>;
                        $(streamId: string): {
                            // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            $get(): Promise<dbaas.logs.Stream>;
                            // PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
                            $put(params: {coldStorageCompression?: dbaas.logs.StreamColdStorageCompressionEnum, coldStorageContent?: dbaas.logs.StreamColdStorageContentEnum, coldStorageEnabled?: boolean, coldStorageNotifyEnabled?: boolean, coldStorageRetention?: number, coldStorageTarget?: dbaas.logs.StreamColdStorageTargetEnum, description: string, indexingEnabled?: boolean, optionId?: string, title: string, webSocketEnabled?: boolean}): Promise<dbaas.logs.Operation>;
                            alert: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert
                                $post(params: {backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}): Promise<dbaas.logs.Operation>;
                                $(alertId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    $get(): Promise<dbaas.logs.StreamAlertCondition>;
                                    // PUT /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}
                                    $put(params: {backlog: number, conditionType?: dbaas.logs.StreamAlertConditionConditionTypeEnum, constraintType?: dbaas.logs.StreamAlertConditionConstraintTypeEnum, field?: string, grace: number, queryFilter?: string, repeatNotificationsEnabled?: boolean, threshold?: number, thresholdType?: dbaas.logs.StreamAlertConditionThresholdTypeEnum, time?: number, title: string, value?: string}): Promise<dbaas.logs.Operation>;
                                };
                            }
                            archive: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive
                                $get(): Promise<string[]>;
                                $(archiveId: string): {
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}
                                    $get(): Promise<dbaas.logs.Archive>;
                                    url: {
                                        // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url
                                        $post(): Promise<dbaas.logs.ArchiveUrl>;
                                    }
                                };
                            }
                            rule: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                $get(): Promise<string[]>;
                                // POST /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule
                                $post(params: {field: string, isInverted?: boolean, operator: dbaas.logs.StreamRuleOperatorEnum, value: string}): Promise<dbaas.logs.Operation>;
                                $(ruleId: string): {
                                    // DELETE /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}
                                    $get(): Promise<dbaas.logs.StreamRule[]>;
                                };
                            }
                            url: {
                                // GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url
                                $get(): Promise<dbaas.logs.Url[]>;
                            }
                        };
                    }
                }
            }
            quota: {
                // GET /dbaas/logs/{serviceName}/quota
                $get(): Promise<dbaas.logs.Quota>;
            }
            role: {
                // GET /dbaas/logs/{serviceName}/role
                $get(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/role
                $post(params: {autoSelectOption?: boolean, description: string, name: string, optionId?: string}): Promise<dbaas.logs.Operation>;
                $(roleId: string): {
                    // DELETE /dbaas/logs/{serviceName}/role/{roleId}
                    $delete(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/role/{roleId}
                    $get(): Promise<dbaas.logs.Role>;
                    // PUT /dbaas/logs/{serviceName}/role/{roleId}
                    $put(params: {description: string, name: string, optionId?: string}): Promise<dbaas.logs.Operation>;
                    member: {
                        // GET /dbaas/logs/{serviceName}/role/{roleId}/member
                        $get(): Promise<string[]>;
                        // POST /dbaas/logs/{serviceName}/role/{roleId}/member
                        $post(params: {note?: string, username: string}): Promise<dbaas.logs.Operation>;
                        $(username: string): {
                            // DELETE /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            $get(): Promise<dbaas.logs.Member>;
                            // PUT /dbaas/logs/{serviceName}/role/{roleId}/member/{username}
                            $put(params?: {note?: string}): Promise<dbaas.logs.Operation>;
                        };
                    }
                    permission: {
                        // GET /dbaas/logs/{serviceName}/role/{roleId}/permission
                        $get(): Promise<string[]>;
                        alias: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/alias
                            $post(params: {aliasId: string}): Promise<dbaas.logs.Operation>;
                        }
                        dashboard: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard
                            $post(params: {dashboardId: string, permissionType?: dbaas.logs.PermissionDashboardPermissionTypeEnum}): Promise<dbaas.logs.Operation>;
                        }
                        index: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/index
                            $post(params: {indexId: string, permissionType?: dbaas.logs.PermissionIndexPermissionTypeEnum}): Promise<dbaas.logs.Operation>;
                        }
                        stream: {
                            // POST /dbaas/logs/{serviceName}/role/{roleId}/permission/stream
                            $post(params: {streamId: string}): Promise<dbaas.logs.Operation>;
                        }
                        $(permissionId: string): {
                            // DELETE /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                            $delete(): Promise<dbaas.logs.Operation>;
                            // GET /dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}
                            $get(): Promise<dbaas.logs.Permission>;
                        };
                    }
                };
            }
            serviceInfos: {
                // GET /dbaas/logs/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /dbaas/logs/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            token: {
                // GET /dbaas/logs/{serviceName}/token
                $get(): Promise<string[]>;
                // POST /dbaas/logs/{serviceName}/token
                $post(params: {clusterId?: string, name: string}): Promise<dbaas.logs.Operation>;
                $(tokenId: string): {
                    // DELETE /dbaas/logs/{serviceName}/token/{tokenId}
                    $delete(): Promise<dbaas.logs.Operation>;
                    // GET /dbaas/logs/{serviceName}/token/{tokenId}
                    $get(): Promise<dbaas.logs.Token>;
                };
            }
            url: {
                // GET /dbaas/logs/{serviceName}/url
                $get(): Promise<dbaas.logs.Url[]>;
            }
            user: {
                changePassword: {
                    // POST /dbaas/logs/{serviceName}/user/changePassword
                    $post(params: {password: string}): Promise<dbaas.logs.Operation>;
                }
            }
        };
    }
}
