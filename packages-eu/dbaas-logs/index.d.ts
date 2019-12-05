import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dbaas/logs Models
 */
export declare namespace dbaas {
    namespace logs {
        interface Alias {
            aliasId: string;
            createdAt: string;
            description?: string;
            isEditable: boolean;
            isShareable: boolean;
            name: string;
            optionId?: string;
            updatedAt?: string;
        }
        interface AllowedNetwork {
            allowedNetworkId: string;
            network: string;
        }
        interface Archive {
            archiveId: string;
            createdAt?: string;
            filename: string;
            md5: string;
            retrievalDelay: number;
            retrievalState: dbaas.logs.ArchiveRetrievalStateEnum;
            sha256: string;
            size: number;
        }
        type ArchiveRetrievalStateEnum = "sealed" | "unsealing" | "unsealed";
        interface ArchiveUrl {
            expirationDate: string;
            url: string;
        }
        interface Cluster {
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
        interface ClusterAllowedNetwork {
            allowedNetworkId: string;
            flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
            network: string;
        }
        interface ClusterAllowedNetworkCreation {
            flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
            network: string;
        }
        type ClusterAllowedNetworkFlowTypeEnum = "QUERY" | "DIRECT_INPUT" | "ALL";
        interface ClusterAllowedNetworks {
            directInputAllowedNetworks: string[];
            queryAllowedNetworks: string[];
        }
        type ClusterClusterTypeEnum = "TRIAL" | "PRO" | "DEDICATED";
        type ClusterRegionEnum = "GRA" | "RBX" | "BHS" | "SBG" | "P-19";
        interface Dashboard {
            createdAt: string;
            dashboardId: string;
            description: string;
            isEditable: boolean;
            isShareable: boolean;
            optionId?: string;
            title: string;
            updatedAt?: string;
        }
        interface Engine {
            engineId: string;
            isDeprecated: boolean;
            name: dbaas.logs.EngineNameEnum;
            version: string;
        }
        type EngineNameEnum = "FLOWGGER" | "LOGSTASH" | "TEST";
        interface FlowggerConfiguration {
            logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        type FlowggerConfigurationLogFormatEnum = "RFC5424" | "LTSV" | "GELF" | "CAPNP";
        type FlowggerConfigurationLogFramingEnum = "LINE" | "NUL" | "SYSLEN" | "CAPNP";
        interface Helper {
            description: string;
            engineId: string;
            helperId: string;
            sections: dbaas.logs.HelperSection[];
            title: string;
        }
        interface HelperSection {
            content: string;
            name: dbaas.logs.HelperSectionNameEnum;
        }
        type HelperSectionNameEnum = "LOGSTASH_INPUT" | "LOGSTASH_FILTER" | "LOGSTASH_PATTERN";
        interface Index {
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
        interface Input {
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
        interface InputAction {
            isAllowed: boolean;
            type: dbaas.logs.InputActionTypeEnum;
        }
        type InputActionTypeEnum = "END" | "LOG" | "START" | "TEST" | "DESTROY" | "RESTART";
        interface InputAllowedNetworkCreation {
            network: string;
        }
        interface InputConfigurationFlowggerUpdate {
            logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
            logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
        }
        interface InputConfigurationLogstashUpdate {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        interface InputCreation {
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
        type InputStatusEnum = "INIT" | "PENDING" | "RUNNING" | "PROCESSING";
        interface InputUpdate {
            allowedNetworks?: string[];
            description: string;
            engineId: string;
            exposedPort?: string;
            optionId?: string;
            singleInstanceEnabled?: boolean;
            streamId: string;
            title: string;
        }
        interface LogstashConfiguration {
            filterSection?: string;
            inputSection: string;
            patternSection?: string;
        }
        interface Member {
            createdAt: string;
            note?: string;
            username: string;
        }
        interface Offer {
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
        interface Operation {
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
        type OperationStateEnum = "PENDING" | "RECEIVED" | "STARTED" | "SUCCESS" | "FAILURE" | "REVOKED" | "RETRY" | "RUNNING";
        interface Option {
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
        type OptionStateEnum = "ENABLED" | "DISABLED";
        interface OutputElasticsearchAliasCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            suffix: string;
        }
        interface OutputElasticsearchAliasIndexCreation {
            indexId: string;
        }
        interface OutputElasticsearchAliasStreamCreation {
            streamId: string;
        }
        interface OutputElasticsearchAliasUpdate {
            description: string;
            optionId?: string;
        }
        interface OutputElasticsearchIndexCreation {
            alertNotifyEnabled?: boolean;
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            suffix: string;
        }
        interface OutputElasticsearchIndexUpdate {
            alertNotifyEnabled?: boolean;
            description: string;
        }
        interface OutputGraylogDashboardCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            title: string;
        }
        interface OutputGraylogDashboardDuplicateCreation {
            autoSelectOption?: boolean;
            description: string;
            optionId?: string;
            streamId?: string;
            title: string;
        }
        interface OutputGraylogDashboardUpdate {
            description: string;
            optionId?: string;
            title: string;
        }
        interface OutputGraylogStreamAlertCreation {
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
        interface OutputGraylogStreamAlertUpdate {
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
        interface OutputGraylogStreamCreation {
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
        interface OutputGraylogStreamRuleCreation {
            field: string;
            isInverted?: boolean;
            operator: dbaas.logs.StreamRuleOperatorEnum;
            value: string;
        }
        interface OutputGraylogStreamUpdate {
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
        interface Permission {
            aliasId?: string;
            dashboardId?: string;
            indexId?: string;
            permissionId: string;
            permissionType?: dbaas.logs.PermissionTypeEnum;
            streamId?: string;
        }
        type PermissionDashboardPermissionTypeEnum = "READ_ONLY" | "READ_WRITE";
        type PermissionIndexPermissionTypeEnum = "READ_ONLY" | "READ_WRITE";
        type PermissionTypeEnum = "READ_ONLY" | "READ_WRITE";
        interface PublicOffer {
            esStorage: number;
            maxNbAlias: number;
            maxNbDashboard: number;
            maxNbIndex: number;
            maxNbInput: number;
            maxNbRole: number;
            maxNbStream: number;
            reference: string;
        }
        interface Quota {
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
        interface Role {
            createdAt: string;
            description: string;
            name: string;
            optionId?: string;
            roleId: string;
            updatedAt?: string;
        }
        interface RoleCreation {
            autoSelectOption?: boolean;
            description: string;
            name: string;
            optionId?: string;
        }
        interface RoleMemberCreation {
            note?: string;
            username: string;
        }
        interface RoleMemberUpdate {
            note?: string;
        }
        interface RolePermissionAliasCreation {
            aliasId: string;
        }
        interface RolePermissionDashboardCreation {
            dashboardId: string;
            permissionType?: dbaas.logs.PermissionDashboardPermissionTypeEnum;
        }
        interface RolePermissionIndexCreation {
            indexId: string;
            permissionType?: dbaas.logs.PermissionIndexPermissionTypeEnum;
        }
        interface RolePermissionStreamCreation {
            streamId: string;
        }
        interface RoleUpdate {
            description: string;
            name: string;
            optionId?: string;
        }
        interface Service {
            createdAt: string;
            displayName?: string;
            isCapped: boolean;
            serviceName: string;
            state?: dbaas.logs.ServiceStateEnum;
            updatedAt?: string;
            username: string;
        }
        interface ServiceMetric {
            host: string;
            token: string;
        }
        type ServiceStateEnum = "INIT" | "TO_CONFIG" | "ENABLED" | "DISABLED";
        interface Stream {
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
        interface StreamAlertCondition {
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
        type StreamAlertConditionConditionTypeEnum = "MESSAGE_COUNT" | "FIELD_VALUE" | "FIELD_CONTENT_VALUE";
        type StreamAlertConditionConstraintTypeEnum = "MEAN" | "MIN" | "MAX" | "SUM" | "STDDEV";
        type StreamAlertConditionThresholdTypeEnum = "MORE" | "LESS" | "LOWER" | "HIGHER";
        type StreamColdStorageCompressionEnum = "LZMA" | "GZIP" | "DEFLATED" | "ZSTD";
        type StreamColdStorageContentEnum = "ALL" | "GELF" | "PLAIN";
        type StreamColdStorageTargetEnum = "PCA" | "PCS";
        interface StreamRule {
            field: string;
            isInverted?: boolean;
            operator?: dbaas.logs.StreamRuleOperatorEnum;
            ruleId: string;
            value: string;
        }
        type StreamRuleOperatorEnum = "MATCH_EXACTLY" | "GREATER_THAN" | "SMALLER_THAN" | "FIELD_PRESENCE";
        interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        interface TestResult {
            stderr?: string;
            stdout?: string;
            updatedAt?: string;
        }
        interface Token {
            clusterId?: string;
            createdAt: string;
            name: string;
            tokenId: string;
            updatedAt?: string;
            value: string;
        }
        interface TokenCreation {
            clusterId?: string;
            name: string;
        }
        interface Update {
            displayName?: string;
            isCapped?: boolean;
        }
        interface Url {
            address: string;
            type: dbaas.logs.UrlTypeEnum;
        }
        type UrlTypeEnum = "GRAYLOG_WEBUI" | "GRAYLOG_API" | "ELASTICSEARCH_API" | "KIBANA_WEBUI" | "CONSOLE" | "WEB_SOCKET" | "SERVICE_DOMAIN" | "TCP_TLS_GELF" | "TCP_GELF" | "UDP_GELF" | "TCP_TLS_RFC5424" | "TCP_RFC5424" | "UDP_RFC5424" | "TCP_TLS_LTSV_LINE" | "TCP_TLS_LTSV_NUL" | "TCP_LTSV_LINE" | "TCP_LTSV_NUL" | "TCP_TLS_CAP_N_PROTO" | "TCP_CAP_N_PROTO" | "UDP_LTSV_NUL" | "UDP_LTSV_LINE" | "UDP_CAP_N_PROTO" | "HTTP_GELF" | "HTTP_TLS_GELF" | "TCP_BEATS" | "TCP_TLS_BEATS";
        interface UserChangePasswordCreation {
            password: string;
        }
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
 * END API /dbaas/logs Models
 */
export declare function proxyDbaasLogs(ovhEngine: OvhRequestable): Dbaas;
export default proxyDbaasLogs;
/**
 * Api Proxy model
 */ export interface Dbaas {
    logs: {
        $get(): Promise<string[]>;
        input: {
            engine: {
                $get(): Promise<string[]>;
                $(engineId: string): {
                    $get(): Promise<dbaas.logs.Engine>;
                    helper: {
                        $get(): Promise<string[]>;
                        $(helperId: string): {
                            $get(): Promise<dbaas.logs.Helper>;
                        };
                    };
                };
            };
        };
        offer: {
            $(reference: string): {
                $get(): Promise<dbaas.logs.PublicOffer>;
            };
        };
        $(serviceName: string): {
            $get(): Promise<dbaas.logs.Service>;
            $put(params?: {
                displayName?: string;
                isCapped?: boolean;
            }): Promise<dbaas.logs.Operation>;
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            cluster: {
                $get(): Promise<string[]>;
                $(clusterId: string): {
                    $get(): Promise<dbaas.logs.Cluster>;
                    $put(params?: {
                        directInputAllowedNetworks?: string[];
                        queryAllowedNetworks?: string[];
                    }): Promise<dbaas.logs.Operation>;
                    allowedNetwork: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
                            network: string;
                        }): Promise<dbaas.logs.Operation>;
                        $(allowedNetworkId: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.ClusterAllowedNetwork>;
                        };
                    };
                };
            };
            input: {
                $get(): Promise<string[]>;
                $post(params: {
                    allowedNetworks?: string[];
                    autoSelectOption?: boolean;
                    description: string;
                    engineId: string;
                    exposedPort?: string;
                    optionId?: string;
                    singleInstanceEnabled?: boolean;
                    streamId: string;
                    title: string;
                }): Promise<dbaas.logs.Operation>;
                $(inputId: string): {
                    $delete(): Promise<dbaas.logs.Operation>;
                    $get(): Promise<dbaas.logs.Input>;
                    $put(params: {
                        allowedNetworks?: string[];
                        description: string;
                        engineId: string;
                        exposedPort?: string;
                        optionId?: string;
                        singleInstanceEnabled?: boolean;
                        streamId: string;
                        title: string;
                    }): Promise<dbaas.logs.Operation>;
                    action: {
                        $get(): Promise<dbaas.logs.InputAction[]>;
                    };
                    allowedNetwork: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            network: string;
                        }): Promise<dbaas.logs.Operation>;
                        $(allowedNetworkId: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.AllowedNetwork>;
                        };
                    };
                    configtest: {
                        $post(): Promise<dbaas.logs.Operation>;
                        result: {
                            $get(): Promise<dbaas.logs.TestResult>;
                        };
                    };
                    configuration: {
                        flowgger: {
                            $get(): Promise<dbaas.logs.FlowggerConfiguration>;
                            $put(params: {
                                logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
                                logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
                            }): Promise<dbaas.logs.Operation>;
                        };
                        logstash: {
                            $get(): Promise<dbaas.logs.LogstashConfiguration>;
                            $put(params: {
                                filterSection?: string;
                                inputSection: string;
                                patternSection?: string;
                            }): Promise<dbaas.logs.Operation>;
                        };
                    };
                    end: {
                        $post(): Promise<dbaas.logs.Operation>;
                    };
                    logs: {
                        url: {
                            $post(): Promise<dbaas.logs.TemporaryLogsLink>;
                        };
                    };
                    restart: {
                        $post(): Promise<dbaas.logs.Operation>;
                    };
                    start: {
                        $post(): Promise<dbaas.logs.Operation>;
                    };
                    url: {
                        $get(): Promise<dbaas.logs.Url[]>;
                    };
                };
            };
            metrics: {
                $get(): Promise<dbaas.logs.ServiceMetric>;
            };
            offer: {
                $get(): Promise<dbaas.logs.Offer>;
            };
            operation: {
                $get(): Promise<string[]>;
                $(operationId: string): {
                    $get(): Promise<dbaas.logs.Operation>;
                };
            };
            option: {
                $get(): Promise<string[]>;
                $(optionId: string): {
                    $get(): Promise<dbaas.logs.Option>;
                    terminate: {
                        $post(): Promise<dbaas.logs.Operation>;
                    };
                };
            };
            output: {
                elasticsearch: {
                    alias: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            autoSelectOption?: boolean;
                            description: string;
                            optionId?: string;
                            suffix: string;
                        }): Promise<dbaas.logs.Operation>;
                        $(aliasId: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.Alias>;
                            $put(params: {
                                description: string;
                                optionId?: string;
                            }): Promise<dbaas.logs.Operation>;
                            index: {
                                $get(): Promise<string[]>;
                                $post(params: {
                                    indexId: string;
                                }): Promise<dbaas.logs.Operation>;
                                $(indexId: string): {
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            };
                            stream: {
                                $get(): Promise<string[]>;
                                $post(params: {
                                    streamId: string;
                                }): Promise<dbaas.logs.Operation>;
                                $(streamId: string): {
                                    $delete(): Promise<dbaas.logs.Operation>;
                                };
                            };
                            url: {
                                $get(): Promise<dbaas.logs.Url[]>;
                            };
                        };
                    };
                    index: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            alertNotifyEnabled?: boolean;
                            autoSelectOption?: boolean;
                            description: string;
                            optionId?: string;
                            suffix: string;
                        }): Promise<dbaas.logs.Operation>;
                        $(indexId: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.Index>;
                            $put(params: {
                                alertNotifyEnabled?: boolean;
                                description: string;
                            }): Promise<dbaas.logs.Operation>;
                            url: {
                                $get(): Promise<dbaas.logs.Url[]>;
                            };
                        };
                    };
                };
                graylog: {
                    dashboard: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            autoSelectOption?: boolean;
                            description: string;
                            optionId?: string;
                            title: string;
                        }): Promise<dbaas.logs.Operation>;
                        $(dashboardId: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.Dashboard>;
                            $put(params: {
                                description: string;
                                optionId?: string;
                                title: string;
                            }): Promise<dbaas.logs.Operation>;
                            duplicate: {
                                $post(params: {
                                    autoSelectOption?: boolean;
                                    description: string;
                                    optionId?: string;
                                    streamId?: string;
                                    title: string;
                                }): Promise<dbaas.logs.Operation>;
                            };
                            url: {
                                $get(): Promise<dbaas.logs.Url[]>;
                            };
                        };
                    };
                    stream: {
                        $get(): Promise<string[]>;
                        $post(params: {
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
                        }): Promise<dbaas.logs.Operation>;
                        $(streamId: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.Stream>;
                            $put(params: {
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
                            }): Promise<dbaas.logs.Operation>;
                            alert: {
                                $get(): Promise<string[]>;
                                $post(params: {
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
                                }): Promise<dbaas.logs.Operation>;
                                $(alertId: string): {
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    $get(): Promise<dbaas.logs.StreamAlertCondition>;
                                    $put(params: {
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
                                    }): Promise<dbaas.logs.Operation>;
                                };
                            };
                            archive: {
                                $get(): Promise<string[]>;
                                $(archiveId: string): {
                                    $get(): Promise<dbaas.logs.Archive>;
                                    url: {
                                        $post(): Promise<dbaas.logs.ArchiveUrl>;
                                    };
                                };
                            };
                            rule: {
                                $get(): Promise<string[]>;
                                $post(params: {
                                    field: string;
                                    isInverted?: boolean;
                                    operator: dbaas.logs.StreamRuleOperatorEnum;
                                    value: string;
                                }): Promise<dbaas.logs.Operation>;
                                $(ruleId: string): {
                                    $delete(): Promise<dbaas.logs.Operation>;
                                    $get(): Promise<dbaas.logs.StreamRule[]>;
                                };
                            };
                            url: {
                                $get(): Promise<dbaas.logs.Url[]>;
                            };
                        };
                    };
                };
            };
            quota: {
                $get(): Promise<dbaas.logs.Quota>;
            };
            role: {
                $get(): Promise<string[]>;
                $post(params: {
                    autoSelectOption?: boolean;
                    description: string;
                    name: string;
                    optionId?: string;
                }): Promise<dbaas.logs.Operation>;
                $(roleId: string): {
                    $delete(): Promise<dbaas.logs.Operation>;
                    $get(): Promise<dbaas.logs.Role>;
                    $put(params: {
                        description: string;
                        name: string;
                        optionId?: string;
                    }): Promise<dbaas.logs.Operation>;
                    member: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            note?: string;
                            username: string;
                        }): Promise<dbaas.logs.Operation>;
                        $(username: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.Member>;
                            $put(params?: {
                                note?: string;
                            }): Promise<dbaas.logs.Operation>;
                        };
                    };
                    permission: {
                        $get(): Promise<string[]>;
                        alias: {
                            $post(params: {
                                aliasId: string;
                            }): Promise<dbaas.logs.Operation>;
                        };
                        dashboard: {
                            $post(params: {
                                dashboardId: string;
                                permissionType?: dbaas.logs.PermissionDashboardPermissionTypeEnum;
                            }): Promise<dbaas.logs.Operation>;
                        };
                        index: {
                            $post(params: {
                                indexId: string;
                                permissionType?: dbaas.logs.PermissionIndexPermissionTypeEnum;
                            }): Promise<dbaas.logs.Operation>;
                        };
                        stream: {
                            $post(params: {
                                streamId: string;
                            }): Promise<dbaas.logs.Operation>;
                        };
                        $(permissionId: string): {
                            $delete(): Promise<dbaas.logs.Operation>;
                            $get(): Promise<dbaas.logs.Permission>;
                        };
                    };
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
            token: {
                $get(): Promise<string[]>;
                $post(params: {
                    clusterId?: string;
                    name: string;
                }): Promise<dbaas.logs.Operation>;
                $(tokenId: string): {
                    $delete(): Promise<dbaas.logs.Operation>;
                    $get(): Promise<dbaas.logs.Token>;
                };
            };
            url: {
                $get(): Promise<dbaas.logs.Url[]>;
            };
            user: {
                changePassword: {
                    $post(params: {
                        password: string;
                    }): Promise<dbaas.logs.Operation>;
                };
            };
        };
    };
    /**
     * Operations about the DBAAS-LOGS service
     * List available services
     */
    get(path: '/dbaas/logs'): () => Promise<string[]>;
    /**
     * Operations about the DBAAS-LOGS service
     * Returns the service object of connected identity.
     */
    get(path: '/dbaas/logs/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dbaas.logs.Service>;
    /**
     * Service Clusters
     * Returns the list of allowed cluster
     */
    get(path: '/dbaas/logs/{serviceName}/cluster'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Service Clusters
     * Returns details of an allowed cluster
     */
    get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}'): (params: {
        clusterId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Cluster>;
    /**
     * Cluster allowed networks
     * List all the network ID allowed to contact given cluster
     */
    get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork'): (params: {
        clusterId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Cluster allowed networks
     * Returns details of an allowed network
     */
    get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}'): (params: {
        allowedNetworkId: string;
        clusterId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.ClusterAllowedNetwork>;
    /**
     * Inputs
     * Returns the list of registered input attached to the logged user
     */
    get(path: '/dbaas/logs/{serviceName}/input'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Input
     * Returns details of specified input
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Input>;
    /**
     * InputActions
     * Returns actions of specified input
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}/action'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.InputAction[]>;
    /**
     * InputAllowedNetworks
     * List all network ID allowed to join input
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * InputAllowedNetwork
     * List all network ID allowed to join input
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}'): (params: {
        allowedNetworkId: string;
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.AllowedNetwork>;
    /**
     * InputConfigtestResult
     * Returns the config test operation result
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest/result'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.TestResult>;
    /**
     * FlowggerConfiguration
     * Returns the flowgger configuration
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.FlowggerConfiguration>;
    /**
     * LogstashConfiguration
     * Returns the logstash configuration
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.LogstashConfiguration>;
    /**
     * InputUrls
     * Returns the list of urls of specified input
     */
    get(path: '/dbaas/logs/{serviceName}/input/{inputId}/url'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Url[]>;
    /**
     * Service Metrics
     * Returns Metrics credentials
     */
    get(path: '/dbaas/logs/{serviceName}/metrics'): (params: {
        serviceName: string;
    }) => Promise<dbaas.logs.ServiceMetric>;
    /**
     * ServiceOffer
     * Returns the subscribed offer
     */
    get(path: '/dbaas/logs/{serviceName}/offer'): (params: {
        serviceName: string;
    }) => Promise<dbaas.logs.Offer>;
    /**
     * Operations
     * Latest operations
     */
    get(path: '/dbaas/logs/{serviceName}/operation'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Operation
     * Returns details of specified operation
     */
    get(path: '/dbaas/logs/{serviceName}/operation/{operationId}'): (params: {
        operationId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * ServiceOptions
     * Returns the subscribed additional options
     */
    get(path: '/dbaas/logs/{serviceName}/option'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * ServiceOption
     * Returns details of a subscribed option
     */
    get(path: '/dbaas/logs/{serviceName}/option/{optionId}'): (params: {
        optionId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Option>;
    /**
     * Aliases
     * Returns the list of alias for connected user
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Alias
     * Returns specified elasticsearch alias
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}'): (params: {
        aliasId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Alias>;
    /**
     * AliasStreams
     * Returns the list of elasticsearch indexes attached to specified
          elasticsearch alias
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index'): (params: {
        aliasId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * AliasStreams
     * Returns the list of graylog streams attached to specified
          elasticsearch alias
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream'): (params: {
        aliasId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * StreamUrls
     * Returns the list of urls of specified graylog stream
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url'): (params: {
        aliasId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Url[]>;
    /**
     * Indexes
     * Returns the list of elasticsearch indexes
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Index
     * Returns specified elasticsearch index
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}'): (params: {
        indexId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Index>;
    /**
     * StreamUrls
     * Returns the list of urls of specified graylog stream
     */
    get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url'): (params: {
        indexId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Url[]>;
    /**
     * Dashboards
     * Returns the list of graylog dashboards
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Dashboard
     * Returns details of specified graylog dashboard
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}'): (params: {
        dashboardId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Dashboard>;
    /**
     * DashboardUrls
     * Returns the list of urls of specified graylog dashboard
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url'): (params: {
        dashboardId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Url[]>;
    /**
     * Streams
     * Returns the list of graylog streams
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Stream
     * Returns details of specified graylog stream
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Stream>;
    /**
     * StreamAlerts
     * Returns the list of configured alerts of specified graylog stream
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<string[]>;
    /**
     * StreamAlert
     * Returns details of specified graylog stream alert
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}'): (params: {
        alertId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.StreamAlertCondition>;
    /**
     * StreamArchives
     * Returns the list of archives
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<string[]>;
    /**
     * StreamArchive
     * Returns details of specified archive
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}'): (params: {
        archiveId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Archive>;
    /**
     * StreamRules
     * Returns the list of rules of specified graylog stream
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<string[]>;
    /**
     * StreamRule
     * Returns details of specified graylog stream rule
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}'): (params: {
        ruleId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.StreamRule[]>;
    /**
     * StreamUrls
     * Returns the list of urls of specified graylog stream
     */
    get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Url[]>;
    /**
     * ServiceQuota
     * Returns the overall quota limits
     */
    get(path: '/dbaas/logs/{serviceName}/quota'): (params: {
        serviceName: string;
    }) => Promise<dbaas.logs.Quota>;
    /**
     * Roles
     * Returns the list of roles
     */
    get(path: '/dbaas/logs/{serviceName}/role'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Role
     * Returns details of specified role
     */
    get(path: '/dbaas/logs/{serviceName}/role/{roleId}'): (params: {
        roleId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Role>;
    /**
     * RoleMembers
     * Returns the member list of specified role
     */
    get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member'): (params: {
        roleId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * RoleMember
     * Returns the member metadata
     */
    get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}'): (params: {
        roleId: string;
        serviceName: string;
        username: string;
    }) => Promise<dbaas.logs.Member>;
    /**
     * RolePermissions
     * Returns the list of permissions of specified role
     */
    get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission'): (params: {
        roleId: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * RolePermission
     * Returns details of specified permission
     */
    get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}'): (params: {
        permissionId: string;
        roleId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Permission>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dbaas/logs/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Tokens
     * Returns the list of service tokens
     */
    get(path: '/dbaas/logs/{serviceName}/token'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Token
     * Returns the specified token
     */
    get(path: '/dbaas/logs/{serviceName}/token/{tokenId}'): (params: {
        serviceName: string;
        tokenId: string;
    }) => Promise<dbaas.logs.Token>;
    /**
     * ServiceUrls
     * Returns platform useful urls.
     */
    get(path: '/dbaas/logs/{serviceName}/url'): (params: {
        serviceName: string;
    }) => Promise<dbaas.logs.Url[]>;
    /**
     * Engines
     * Returns the list of available input engines
     */
    get(path: '/dbaas/logs/input/engine'): () => Promise<string[]>;
    /**
     * Engine
     * Returns details of specified input engine
     */
    get(path: '/dbaas/logs/input/engine/{engineId}'): (params: {
        engineId: string;
    }) => Promise<dbaas.logs.Engine>;
    /**
     * Input engine helpers
     * Return the list of available helpers for the given input engine
     */
    get(path: '/dbaas/logs/input/engine/{engineId}/helper'): (params: {
        engineId: string;
    }) => Promise<string[]>;
    /**
     * Input engine helpers
     * Returns details of specified input engine helper
     */
    get(path: '/dbaas/logs/input/engine/{engineId}/helper/{helperId}'): (params: {
        engineId: string;
        helperId: string;
    }) => Promise<dbaas.logs.Helper>;
    /**
     * Offer
     * Display specified offer
     */
    get(path: '/dbaas/logs/offer/{reference}'): (params: {
        reference: string;
    }) => Promise<dbaas.logs.PublicOffer>;
    /**
     * Operations about the DBAAS-LOGS service
     * Update the service properties
     */
    put(path: '/dbaas/logs/{serviceName}'): (params: {
        serviceName: string;
        displayName?: string;
        isCapped?: boolean;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Service Clusters
     * Update details of an allowed cluster
     */
    put(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}'): (params: {
        clusterId: string;
        serviceName: string;
        directInputAllowedNetworks?: string[];
        queryAllowedNetworks?: string[];
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Input
     * Update information of specified input object
     */
    put(path: '/dbaas/logs/{serviceName}/input/{inputId}'): (params: {
        inputId: string;
        serviceName: string;
        allowedNetworks?: string[];
        description: string;
        engineId: string;
        exposedPort?: string;
        optionId?: string;
        singleInstanceEnabled?: boolean;
        streamId: string;
        title: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * FlowggerConfiguration
     * Update the flowgger configuration
     */
    put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger'): (params: {
        inputId: string;
        serviceName: string;
        logFormat: dbaas.logs.FlowggerConfigurationLogFormatEnum;
        logFraming: dbaas.logs.FlowggerConfigurationLogFramingEnum;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * LogstashConfiguration
     * Update the logstash configuration
     */
    put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash'): (params: {
        inputId: string;
        serviceName: string;
        filterSection?: string;
        inputSection: string;
        patternSection?: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Alias
     * Update specified elasticsearch alias
     */
    put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}'): (params: {
        aliasId: string;
        serviceName: string;
        description: string;
        optionId?: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Index
     * Update specified elasticsearch index
     */
    put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}'): (params: {
        indexId: string;
        serviceName: string;
        alertNotifyEnabled?: boolean;
        description: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Dashboard
     * Update information of specified graylog dashboard
     */
    put(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}'): (params: {
        dashboardId: string;
        serviceName: string;
        description: string;
        optionId?: string;
        title: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Stream
     * Update information of specified graylog stream
     */
    put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}'): (params: {
        serviceName: string;
        streamId: string;
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
    }) => Promise<dbaas.logs.Operation>;
    /**
     * StreamAlert
     * Update alert information of specified graylog stream
     */
    put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}'): (params: {
        alertId: string;
        serviceName: string;
        streamId: string;
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
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Role
     * Update information of specified role
     */
    put(path: '/dbaas/logs/{serviceName}/role/{roleId}'): (params: {
        roleId: string;
        serviceName: string;
        description: string;
        name: string;
        optionId?: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RoleMember
     * Update the member metadata
     */
    put(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}'): (params: {
        roleId: string;
        serviceName: string;
        username: string;
        note?: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dbaas/logs/{serviceName}/serviceInfos'): (params: {
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
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/dbaas/logs/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Cluster allowed networks
     * Allow an IP to contact cluster
     */
    post(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork'): (params: {
        clusterId: string;
        serviceName: string;
        flowType: dbaas.logs.ClusterAllowedNetworkFlowTypeEnum;
        network: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Inputs
     * Register a new input object
     */
    post(path: '/dbaas/logs/{serviceName}/input'): (params: {
        serviceName: string;
        allowedNetworks?: string[];
        autoSelectOption?: boolean;
        description: string;
        engineId: string;
        exposedPort?: string;
        optionId?: string;
        singleInstanceEnabled?: boolean;
        streamId: string;
        title: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * InputAllowedNetworks
     * Allow an ip to join input
     */
    post(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork'): (params: {
        inputId: string;
        serviceName: string;
        network: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * InputConfigtest
     * Validate configuration of specified input
     */
    post(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * InputEnd
     * Schedule the end of specified input
     */
    post(path: '/dbaas/logs/{serviceName}/input/{inputId}/end'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * InputLogs
     * Generate a temporary url to retrieve input logs
     */
    post(path: '/dbaas/logs/{serviceName}/input/{inputId}/logs/url'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.TemporaryLogsLink>;
    /**
     * InputRestart
     * Schedule the restart of specified input
     */
    post(path: '/dbaas/logs/{serviceName}/input/{inputId}/restart'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * InputStart
     * Schedule the start of specified input
     */
    post(path: '/dbaas/logs/{serviceName}/input/{inputId}/start'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * ServiceOption
     * Remove the specified subscribed option
     */
    post(path: '/dbaas/logs/{serviceName}/option/{optionId}/terminate'): (params: {
        optionId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Aliases
     * Register a new elasticsearch alias
     */
    post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias'): (params: {
        serviceName: string;
        autoSelectOption?: boolean;
        description: string;
        optionId?: string;
        suffix: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * AliasStreams
     * Attach a elasticsearch index to specified elasticsearch alias
     */
    post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index'): (params: {
        aliasId: string;
        serviceName: string;
        indexId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * AliasStreams
     * Attach a graylog stream to specified elasticsearch alias
     */
    post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream'): (params: {
        aliasId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Indexes
     * Register a new elasticsearch index
     */
    post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index'): (params: {
        serviceName: string;
        alertNotifyEnabled?: boolean;
        autoSelectOption?: boolean;
        description: string;
        optionId?: string;
        suffix: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Dashboards
     * Register a new graylog dashboard
     */
    post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard'): (params: {
        serviceName: string;
        autoSelectOption?: boolean;
        description: string;
        optionId?: string;
        title: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * DashboardClone
     * Copy all widgets from specified dashboard to a new one
     */
    post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate'): (params: {
        dashboardId: string;
        serviceName: string;
        autoSelectOption?: boolean;
        description: string;
        optionId?: string;
        streamId?: string;
        title: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Streams
     * Register a new graylog stream
     */
    post(path: '/dbaas/logs/{serviceName}/output/graylog/stream'): (params: {
        serviceName: string;
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
    }) => Promise<dbaas.logs.Operation>;
    /**
     * StreamAlerts
     * Register a new alert on specified graylog stream
     */
    post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert'): (params: {
        serviceName: string;
        streamId: string;
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
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Streams
     * Get a public temporary URL to access the archive
     */
    post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url'): (params: {
        archiveId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.ArchiveUrl>;
    /**
     * StreamRules
     * Register a new rule on specified graylog stream
     */
    post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule'): (params: {
        serviceName: string;
        streamId: string;
        field: string;
        isInverted?: boolean;
        operator: dbaas.logs.StreamRuleOperatorEnum;
        value: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Roles
     * Register a new role
     */
    post(path: '/dbaas/logs/{serviceName}/role'): (params: {
        serviceName: string;
        autoSelectOption?: boolean;
        description: string;
        name: string;
        optionId?: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RoleMembers
     * Append user into the member list of specified role
     */
    post(path: '/dbaas/logs/{serviceName}/role/{roleId}/member'): (params: {
        roleId: string;
        serviceName: string;
        note?: string;
        username: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RolePermissionAlias
     * Append a elasticsearch alias permission to role
     */
    post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/alias'): (params: {
        roleId: string;
        serviceName: string;
        aliasId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RolePermissionIndex
     * Append a graylog dashboard permission to role
     */
    post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard'): (params: {
        roleId: string;
        serviceName: string;
        dashboardId: string;
        permissionType?: dbaas.logs.PermissionDashboardPermissionTypeEnum;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RolePermissionIndex
     * Append a elasticsearch index permission to role
     */
    post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/index'): (params: {
        roleId: string;
        serviceName: string;
        indexId: string;
        permissionType?: dbaas.logs.PermissionIndexPermissionTypeEnum;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RolePermissionIndex
     * Append a graylog stream permission to role
     */
    post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/stream'): (params: {
        roleId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Tokens
     * Add a new token
     */
    post(path: '/dbaas/logs/{serviceName}/token'): (params: {
        serviceName: string;
        clusterId?: string;
        name: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * ServiceChangePassword
     * Initiate a password change procedure.
     */
    post(path: '/dbaas/logs/{serviceName}/user/changePassword'): (params: {
        serviceName: string;
        password: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Cluster allowed networks
     * Remove the specified IP from the list of allowed networks
     */
    delete(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}'): (params: {
        allowedNetworkId: string;
        clusterId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Input
     * Remove the specified input object
     */
    delete(path: '/dbaas/logs/{serviceName}/input/{inputId}'): (params: {
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * InputAllowedNetwork
     * Remove the specified IP from the list of allowed networks
     */
    delete(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}'): (params: {
        allowedNetworkId: string;
        inputId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Alias
     * Remove specified elasticsearch alias
     */
    delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}'): (params: {
        aliasId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * AliasStream
     * Detach a elasticsearch index from specified elasticsearch alias
     */
    delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}'): (params: {
        aliasId: string;
        indexId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * AliasStream
     * Detach a graylog stream from specified elasticsearch alias
     */
    delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}'): (params: {
        aliasId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Index
     * Remove specified elasticsearch index
     */
    delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}'): (params: {
        indexId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Dashboard
     * Remove specified graylog dashboard
     */
    delete(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}'): (params: {
        dashboardId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Stream
     * Remove specified graylog stream
     */
    delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}'): (params: {
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * StreamAlert
     * Remove alert from specified graylog stream
     */
    delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}'): (params: {
        alertId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * StreamRule
     * Remove specified graylog stream rule
     */
    delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}'): (params: {
        ruleId: string;
        serviceName: string;
        streamId: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Role
     * Remove specified role
     */
    delete(path: '/dbaas/logs/{serviceName}/role/{roleId}'): (params: {
        roleId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RoleMember
     * Remove user from the member list of specified role
     */
    delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}'): (params: {
        roleId: string;
        serviceName: string;
        username: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * RolePermission
     * Remove specified permission
     */
    delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}'): (params: {
        permissionId: string;
        roleId: string;
        serviceName: string;
    }) => Promise<dbaas.logs.Operation>;
    /**
     * Token
     * Delete the specified token
     */
    delete(path: '/dbaas/logs/{serviceName}/token/{tokenId}'): (params: {
        serviceName: string;
        tokenId: string;
    }) => Promise<dbaas.logs.Operation>;
}
