import { ApiCommon } from '@ovh-api/common';
/**
 * Possible values for StreamRuleOperatorEnum
 */
export type DbaasLogsStreamRuleOperatorEnum = 'MATCH_EXACTLY' | 'GREATER_THAN' | 'SMALLER_THAN' | 'FIELD_PRESENCE';
/**
 * Stream rule
 */
export interface DbaasLogsStreamRule {
  /**
   * Field name
   *
   */
  field?: string;
  /**
   * Stream rule UUID
   *
   */
  ruleId?: string;
  /**
   * Field value
   *
   */
  value?: string;
  /**
   * Field operator
   *
   */
  operator?: DbaasLogsStreamRuleOperatorEnum;
  /**
   * Invert condition
   *
   */
  isInverted?: boolean;
}
/**
 * Stream archive
 */
export interface DbaasLogsArchive {
  /**
   * Create date
   *
   */
  createdAt?: Date;
  /**
   * Filename
   *
   */
  filename?: string;
  /**
   * sha256 checksum
   *
   */
  sha256?: string;
  /**
   * Retrieval delay
   *
   */
  retrievalDelay?: Number;
  /**
   * File size in bytes
   *
   */
  size?: Number;
  /**
   * Retrieval state
   *
   */
  retrievalState?: DbaasLogsArchiveRetrievalStateEnum;
  /**
   * Archive UUID
   *
   */
  archiveId?: string;
  /**
   * MD5 checksum
   *
   */
  md5?: string;
}
/**
 * Logstash configuration
 */
export interface DbaasLogsLogstashConfiguration {
  /**
   * The filter section of logstash.conf
   *
   */
  inputSection?: string;
  /**
   * The filter section of logstash.conf
   *
   */
  filterSection?: string;
  /**
   * The list of customs Grok patterns
   *
   */
  patternSection?: string;
}
/**
 * Action on input
 */
export interface DbaasLogsInputAction {
  /**
   * Indicates if action is allowed
   *
   */
  isAllowed?: boolean;
  /**
   * Action type
   *
   */
  type?: DbaasLogsInputActionTypeEnum;
}
/**
 * Possible values for InputStatusEnum
 */
export type DbaasLogsInputStatusEnum = 'INIT' | 'PENDING' | 'RUNNING' | 'PROCESSING';
/**
 * Possible values for StreamAlertConditionThresholdTypeEnum
 */
export type DbaasLogsStreamAlertConditionThresholdTypeEnum = 'MORE' | 'LESS' | 'LOWER' | 'HIGHER';
/**
 * Config test results
 */
export interface DbaasLogsTestResult {
  /**
   * Standard output
   *
   */
  stdout?: string;
  /**
   * Standard error
   *
   */
  stderr?: string;
  /**
   * Last config test update
   *
   */
  updatedAt?: Date;
}
/**
 * Asynchronous operation
 */
export interface DbaasLogsOperation {
  /**
   * Input used
   *
   */
  inputId?: string;
  /**
   * Operation creation
   *
   */
  createdAt?: Date;
  /**
   * Stream used
   *
   */
  streamId?: string;
  /**
   * Dashboard used
   *
   */
  dashboardId?: string;
  /**
   * Role used
   *
   */
  roleId?: string;
  /**
   * Alias used
   *
   */
  aliasId?: string;
  /**
   * Operation UUID
   *
   */
  operationId?: string;
  /**
   * Index used
   *
   */
  indexId?: string;
  /**
   * Option used
   *
   */
  optionId?: string;
  /**
   * Operation status
   *
   */
  state?: DbaasLogsOperationStateEnum;
  /**
   * Operation last update
   *
   */
  updatedAt?: Date;
}
/**
 * Graylog dashboard
 */
export interface DbaasLogsDashboard {
  /**
   * Dashboard creation
   *
   */
  createdAt?: Date;
  /**
   * Indicates if you are allowed to edit entry
   *
   */
  isEditable?: boolean;
  /**
   * Dashboard UUID
   *
   */
  dashboardId?: string;
  /**
   * Indicates if you are allowed to share entry
   *
   */
  isShareable?: boolean;
  /**
   * Dashboard description
   *
   */
  description?: string;
  /**
   * Associated DBaaS Logs option
   *
   */
  optionId?: string;
  /**
   * Dashboard description
   *
   */
  title?: string;
  /**
   * Dashboard last update
   *
   */
  updatedAt?: Date;
}
/**
 * Possible values for ServiceStateEnum
 */
export type DbaasLogsServiceStateEnum = 'INIT' | 'TO_CONFIG' | 'ENABLED' | 'DISABLED';
/**
 * Graylog stream
 */
export interface DbaasLogsStream {
  /**
   * Indicates if the current user can create alert on the stream
   *
   */
  canAlert?: boolean;
  /**
   * Enable Websocket
   *
   */
  webSocketEnabled?: boolean;
  /**
   * Stream UUID
   *
   */
  streamId?: string;
  /**
   * Stream description
   *
   */
  description?: string;
  /**
   * Parent stream id
   *
   */
  parentStreamId?: string;
  /**
   * Stream description
   *
   */
  title?: string;
  /**
   * Cold storage retention in year
   *
   */
  coldStorageRetention?: Number;
  /**
   * Stream creation
   *
   */
  createdAt?: Date;
  /**
   * Number of coldstored archives
   *
   */
  nbArchive?: Number;
  /**
   * ColdStorage destination
   *
   */
  coldStorageTarget?: DbaasLogsStreamColdStorageTargetEnum;
  /**
   * Indicates if you are allowed to edit entry
   *
   */
  isEditable?: boolean;
  /**
   * Notify on new Cold storage archive
   *
   */
  coldStorageNotifyEnabled?: boolean;
  /**
   * Indicates if you are allowed to share entry
   *
   */
  isShareable?: boolean;
  /**
   * Associated DBaaS Logs option
   *
   */
  optionId?: string;
  /**
   * Is Cold storage enabled?
   *
   */
  coldStorageEnabled?: boolean;
  /**
   * ColdStorage content
   *
   */
  coldStorageContent?: DbaasLogsStreamColdStorageContentEnum;
  /**
   * Cold storage compression method
   *
   */
  coldStorageCompression?: DbaasLogsStreamColdStorageCompressionEnum;
  /**
   * Enable ES indexing
   *
   */
  indexingEnabled?: boolean;
  /**
   * Stream last update
   *
   */
  updatedAt?: Date;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
}
/**
 * Elasticsearch alias
 */
export interface DbaasLogsAlias {
  /**
   * Input creation
   *
   */
  createdAt?: Date;
  /**
   * Indicates if you are allowed to edit entry
   *
   */
  isEditable?: boolean;
  /**
   * Alias UUID
   *
   */
  aliasId?: string;
  /**
   * Indicates if you are allowed to share entry
   *
   */
  isShareable?: boolean;
  /**
   * Alias name
   *
   */
  name?: string;
  /**
   * Alias description
   *
   */
  description?: string;
  /**
   * Associated DBaaS Logs option
   *
   */
  optionId?: string;
  /**
   * Input last update
   *
   */
  updatedAt?: Date;
}
/**
 * Input engine
 */
export interface DbaasLogsEngine {
  /**
   * Indicates if engine will soon not be supported
   *
   */
  isDeprecated?: boolean;
  /**
   * Software name
   *
   */
  name?: DbaasLogsEngineNameEnum;
  /**
   * Software version
   *
   */
  version?: string;
  /**
   * Input engine UUID
   *
   */
  engineId?: string;
}
/**
 * Possible values for ClusterClusterTypeEnum
 */
export type DbaasLogsClusterClusterTypeEnum = 'TRIAL' | 'PRO' | 'DEDICATED';
/**
 * Possible values for PermissionIndexPermissionTypeEnum
 */
export type DbaasLogsPermissionIndexPermissionTypeEnum = 'READ_ONLY' | 'READ_WRITE';
/**
 * Member
 */
export interface DbaasLogsMember {
  /**
   * Custom note
   *
   */
  note?: string;
  /**
   * Username on DBaaS Logs
   *
   */
  username?: string;
}
/**
 * DBaaS Logs quota
 */
export interface DbaasLogsQuota {
  /**
   * Current number of index booked
   *
   */
  curNbIndex?: Number;
  /**
   * Maximum number of index allowed
   *
   */
  maxNbIndex?: Number;
  /**
   * Current number of role booked
   *
   */
  curNbRole?: Number;
  /**
   * Current number of stream booked
   *
   */
  curNbStream?: Number;
  /**
   * Current number of alias booked
   *
   */
  curNbAlias?: Number;
  /**
   * Maximum number of stream allowed
   *
   */
  maxNbStream?: Number;
  /**
   * Maximum number of role allowed
   *
   */
  maxNbRole?: Number;
  /**
   * Current number of input booked
   *
   */
  curNbInput?: Number;
  /**
   * Current number of dashboard booked
   *
   */
  curNbDashboard?: Number;
  /**
   * Maximum number of input allowed
   *
   */
  maxNbInput?: Number;
  /**
   * Maximum number of dashboard allowed
   *
   */
  maxNbDashboard?: Number;
  /**
   * Maximum number of alias allowed
   *
   */
  maxNbAlias?: Number;
}
/**
 * Possible values for UrlTypeEnum
 */
export type DbaasLogsUrlTypeEnum = 'GRAYLOG_WEBUI' | 'GRAYLOG_API' | 'ELASTICSEARCH_API' | 'KIBANA_WEBUI' | 'CONSOLE' | 'WEB_SOCKET' | 'SERVICE_DOMAIN' | 'TCP_TLS_GELF' | 'TCP_GELF' | 'UDP_GELF' | 'TCP_TLS_RFC5424' | 'TCP_RFC5424' | 'UDP_RFC5424' | 'TCP_TLS_LTSV_LINE' | 'TCP_TLS_LTSV_NUL' | 'TCP_LTSV_LINE' | 'TCP_LTSV_NUL' | 'TCP_TLS_CAP_N_PROTO' | 'TCP_CAP_N_PROTO' | 'UDP_LTSV_NUL' | 'UDP_LTSV_LINE' | 'UDP_CAP_N_PROTO' | 'HTTP_GELF' | 'HTTP_TLS_GELF' | 'TCP_BEATS' | 'TCP_TLS_BEATS';
/**
 * Possible values for StreamAlertConditionConstraintTypeEnum
 */
export type DbaasLogsStreamAlertConditionConstraintTypeEnum = 'MEAN' | 'MIN' | 'MAX' | 'SUM' | 'STDDEV';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  engagedUpTo?: Date;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactAdmin?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  expiration?: Date;
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   */
  status?: ServiceStateEnum;
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
}
/**
 * Possible values for StreamColdStorageContentEnum
 */
export type DbaasLogsStreamColdStorageContentEnum = 'ALL' | 'GELF' | 'PLAIN';
/**
 * DBaaS Logs offer
 */
export interface DbaasLogsPublicOffer {
  /**
   * Option unique reference
   *
   */
  reference?: string;
  /**
   * Number of GB stored per month included
   *
   */
  esStorage?: Number;
  /**
   * Maximum number of index allowed
   *
   */
  maxNbIndex?: Number;
  /**
   * Maximum number of stream allowed
   *
   */
  maxNbStream?: Number;
  /**
   * Maximum number of role allowed
   *
   */
  maxNbRole?: Number;
  /**
   * Maximum number of input allowed
   *
   */
  maxNbInput?: Number;
  /**
   * Maximum number of dashboard allowed
   *
   */
  maxNbDashboard?: Number;
  /**
   * Maximum number of alias allowed
   *
   */
  maxNbAlias?: Number;
}
/**
 * Possible values for ArchiveRetrievalStateEnum
 */
export type DbaasLogsArchiveRetrievalStateEnum = 'sealed' | 'unsealing' | 'unsealed';
/**
 * Web address
 */
export interface DbaasLogsUrl {
  /**
   * Web URI
   *
   */
  address?: string;
  /**
   * Service type
   *
   */
  type?: DbaasLogsUrlTypeEnum;
}
/**
 * Possible values for OperationStateEnum
 */
export type DbaasLogsOperationStateEnum = 'PENDING' | 'RECEIVED' | 'STARTED' | 'SUCCESS' | 'FAILURE' | 'REVOKED' | 'RETRY' | 'RUNNING';
/**
 * Temporary url informations
 */
export interface DbaasLogsTemporaryLogsLink {
  /**
   * Temporary url
   *
   */
  url?: string;
  /**
   * Temporary url expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * Network allowed to join input
 */
export interface DbaasLogsAllowedNetwork {
  /**
   * Network UUID
   *
   */
  allowedNetworkId?: string;
  /**
   * IP block
   *
   */
  network?: string;
}
/**
 * Possible values for InputActionTypeEnum
 */
export type DbaasLogsInputActionTypeEnum = 'END' | 'LOG' | 'START' | 'TEST' | 'DESTROY' | 'RESTART';
/**
 * Role
 */
export interface DbaasLogsRole {
  /**
   * Role UUID
   *
   */
  roleId?: string;
  /**
   * Role name
   *
   */
  name?: string;
  /**
   * Role description
   *
   */
  description?: string;
  /**
   * Associated DBaaS Logs option
   *
   */
  optionId?: string;
}
/**
 * Stream archive url
 */
export interface DbaasLogsArchiveUrl {
  /**
   * Temporary URL to get archive
   *
   */
  url?: string;
  /**
   * Temporary URL expiration date
   *
   */
  expirationDate?: Date;
}
/**
 * Possible values for FlowggerConfigurationLogFormatEnum
 */
export type DbaasLogsFlowggerConfigurationLogFormatEnum = 'RFC5424' | 'LTSV' | 'GELF' | 'CAPNP';
/**
 * Possible values for StreamAlertConditionConditionTypeEnum
 */
export type DbaasLogsStreamAlertConditionConditionTypeEnum = 'MESSAGE_COUNT' | 'FIELD_VALUE' | 'FIELD_CONTENT_VALUE';
/**
 * Input
 */
export interface DbaasLogsInput {
  /**
   * Input ID
   *
   */
  inputId?: string;
  /**
   * Indicate if input need to be restarted
   *
   */
  isRestartRequired?: boolean;
  /**
   * Associated Graylog stream
   *
   */
  streamId?: string;
  /**
   * Port
   *
   */
  exposedPort?: string;
  /**
   * Input description
   *
   */
  description?: string;
  /**
   * Input IP address
   *
   */
  publicAddress?: string;
  /**
   * Input title
   *
   */
  title?: string;
  /**
   * Input creation
   *
   */
  createdAt?: Date;
  /**
   * Hostname
   *
   */
  hostname?: string;
  /**
   * Input SSL certificate
   *
   */
  sslCertificate?: string;
  /**
   * Associated DBaaS Logs option
   *
   */
  optionId?: string;
  /**
   * Force only one instance
   *
   */
  singleInstanceEnabled?: boolean;
  /**
   * Input last update
   *
   */
  updatedAt?: Date;
  /**
   * Input engine UUID
   *
   */
  engineId?: string;
  /**
   * init: configuration required, pending: ready to start, running: available
   *
   */
  status?: DbaasLogsInputStatusEnum;
}
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Metrics access
 */
export interface DbaasLogsServiceMetric {
  /**
   * Metrics server url
   *
   */
  host?: string;
  /**
   * Metrics credentials
   *
   */
  token?: string;
}
/**
 * Elasticsearch index
 */
export interface DbaasLogsIndex {
  /**
   * Index creation
   *
   */
  createdAt?: Date;
  /**
   * Notify if size is near 80, 90 or 100 %
   *
   */
  alertNotifyEnabled?: boolean;
  /**
   * Indicates if you are allowed to edit entry
   *
   */
  isEditable?: boolean;
  /**
   * Indicates if you are allowed to share entry
   *
   */
  isShareable?: boolean;
  /**
   * Index name
   *
   */
  name?: string;
  /**
   * Index UUID
   *
   */
  indexId?: string;
  /**
   * Index description
   *
   */
  description?: string;
  /**
   * Associated DBaaS Logs option
   *
   */
  optionId?: string;
  /**
   * Maximum index size (in bytes)
   *
   */
  maxSize?: Number;
  /**
   * Index last update
   *
   */
  updatedAt?: Date;
}
/**
 * Token
 */
export interface DbaasLogsToken {
  /**
   * Token creation
   *
   */
  createdAt?: Date;
  /**
   * Token UUID
   *
   */
  tokenId?: string;
  /**
   * Token name
   *
   */
  name?: string;
  /**
   * Cluster UUID
   *
   */
  clusterId?: string;
  /**
   * Token value
   *
   */
  value?: string;
  /**
   * Token last update
   *
   */
  updatedAt?: Date;
}
/**
 * Cluster allowed network
 */
export interface DbaasLogsClusterAllowedNetwork {
  /**
   * Network UUID
   *
   */
  allowedNetworkId?: string;
  /**
   * IP block
   *
   */
  network?: string;
  /**
   * Flow type
   *
   */
  flowType?: DbaasLogsClusterAllowedNetworkFlowTypeEnum;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * Role permission
 */
export interface DbaasLogsPermission {
  /**
   * Permission UUID
   *
   */
  permissionId?: string;
  /**
   * Associated Graylog stream
   *
   */
  streamId?: string;
  /**
   * Associated Graylog dashboard
   *
   */
  dashboardId?: string;
  /**
   * Associated Elasticsearch alias
   *
   */
  aliasId?: string;
  /**
   * Associated Elasticsearch index
   *
   */
  indexId?: string;
}
/**
 * DBaaS Logs option
 */
export interface DbaasLogsOption {
  /**
   * Maximum number of index allowed
   *
   */
  maxNbIndex?: Number;
  /**
   * Current number of role booked
   *
   */
  curNbRole?: Number;
  /**
   * Current number of stream booked
   *
   */
  curNbStream?: Number;
  /**
   * Current number of alias booked
   *
   */
  curNbAlias?: Number;
  /**
   * Maximum number of role allowed
   *
   */
  maxNbRole?: Number;
  /**
   * Current number of dashboard booked
   *
   */
  curNbDashboard?: Number;
  /**
   * Maximum number of input allowed
   *
   */
  maxNbInput?: Number;
  /**
   * Index size in bytes
   *
   */
  indexSize?: Number;
  /**
   * Option unique reference
   *
   */
  reference?: string;
  /**
   * Service creation
   *
   */
  createdAt?: Date;
  /**
   * Current number of index booked
   *
   */
  curNbIndex?: Number;
  /**
   * Maximum number of stream allowed
   *
   */
  maxNbStream?: Number;
  /**
   * Option UUID
   *
   */
  optionId?: string;
  /**
   * Current number of input booked
   *
   */
  curNbInput?: Number;
  /**
   * Option state
   *
   */
  state?: DbaasLogsOptionStateEnum;
  /**
   * Maximum number of dashboard allowed
   *
   */
  maxNbDashboard?: Number;
  /**
   * Service last update
   *
   */
  updatedAt?: Date;
  /**
   * Maximum number of alias allowed
   *
   */
  maxNbAlias?: Number;
}
/**
 * Possible values for EngineNameEnum
 */
export type DbaasLogsEngineNameEnum = 'FLOWGGER' | 'LOGSTASH' | 'TEST';
/**
 * Possible values for OptionStateEnum
 */
export type DbaasLogsOptionStateEnum = 'ENABLED' | 'DISABLED';
/**
 * Possible values for ClusterRegionEnum
 */
export type DbaasLogsClusterRegionEnum = 'GRA' | 'RBX' | 'BHS' | 'SBG' | 'P-19';
/**
 * Alert condition
 */
export interface DbaasLogsStreamAlertCondition {
  /**
   * Query filter
   *
   */
  queryFilter?: string;
  /**
   * Threshold
   *
   */
  threshold?: Number;
  /**
   * Condition label
   *
   */
  title?: string;
  /**
   * Constraint type
   *
   */
  constraintType?: DbaasLogsStreamAlertConditionConstraintTypeEnum;
  /**
   * Backlog size
   *
   */
  backlog?: Number;
  /**
   * Field name
   *
   */
  field?: string;
  /**
   * Grace period in minutes
   *
   */
  grace?: Number;
  /**
   * Alert condition type
   *
   */
  conditionType?: DbaasLogsStreamAlertConditionConditionTypeEnum;
  /**
   * Stream alert condition UUID
   *
   */
  alertId?: string;
  /**
   * Time lapse in minutes
   *
   */
  time?: Number;
  /**
   * Field value
   *
   */
  value?: string;
  /**
   * Repeat notifications
   *
   */
  repeatNotificationsEnabled?: boolean;
  /**
   * Threshold condition
   *
   */
  thresholdType?: DbaasLogsStreamAlertConditionThresholdTypeEnum;
}
/**
 * Possible values for StreamColdStorageCompressionEnum
 */
export type DbaasLogsStreamColdStorageCompressionEnum = 'LZMA' | 'GZIP' | 'DEFLATED' | 'ZSTD';
/**
 * Possible values for ClusterAllowedNetworkFlowTypeEnum
 */
export type DbaasLogsClusterAllowedNetworkFlowTypeEnum = 'QUERY' | 'DIRECT_INPUT' | 'ALL';
/**
 * Cluster
 */
export interface DbaasLogsCluster {
  /**
   * Cluster type
   *
   */
  clusterType?: DbaasLogsClusterClusterTypeEnum;
  /**
   * All content generated by given service will be placed on this cluster
   *
   */
  isDefault?: boolean;
  /**
   * Hostname
   *
   */
  hostname?: string;
  /**
   * PEM for dedicated inputs
   *
   */
  dedicatedInputPEM?: string;
  /**
   * Allow given service to perform advanced operations on cluster
   *
   */
  isUnlocked?: boolean;
  /**
   * Cluster UUID
   *
   */
  clusterId?: string;
  /**
   * Data center localization
   *
   */
  region?: DbaasLogsClusterRegionEnum;
  /**
   * PEM for direct inputs
   *
   */
  directInputPEM?: string;
}
/**
 * Possible values for FlowggerConfigurationLogFramingEnum
 */
export type DbaasLogsFlowggerConfigurationLogFramingEnum = 'LINE' | 'NUL' | 'SYSLEN' | 'CAPNP';
/**
 * DBaaS Logs offer
 */
export interface DbaasLogsOffer {
  /**
   * Number of GB stored per month included
   *
   */
  esStorage?: Number;
  /**
   * Maximum number of index allowed
   *
   */
  maxNbIndex?: Number;
  /**
   * Current number of role booked
   *
   */
  curNbRole?: Number;
  /**
   * Current number of stream booked
   *
   */
  curNbStream?: Number;
  /**
   * Current number of alias booked
   *
   */
  curNbAlias?: Number;
  /**
   * Maximum number of role allowed
   *
   */
  maxNbRole?: Number;
  /**
   * Current number of dashboard booked
   *
   */
  curNbDashboard?: Number;
  /**
   * Maximum number of input allowed
   *
   */
  maxNbInput?: Number;
  /**
   * Option unique reference
   *
   */
  reference?: string;
  /**
   * Current number of index booked
   *
   */
  curNbIndex?: Number;
  /**
   * Maximum number of stream allowed
   *
   */
  maxNbStream?: Number;
  /**
   * Current number of input booked
   *
   */
  curNbInput?: Number;
  /**
   * Maximum number of dashboard allowed
   *
   */
  maxNbDashboard?: Number;
  /**
   * Data retention in hours
   *
   */
  retention?: Number;
  /**
   * Maximum number of alias allowed
   *
   */
  maxNbAlias?: Number;
}
/**
 * Possible values for PermissionDashboardPermissionTypeEnum
 */
export type DbaasLogsPermissionDashboardPermissionTypeEnum = 'READ_ONLY' | 'READ_WRITE';
/**
 * Flowgger configuration
 */
export interface DbaasLogsFlowggerConfiguration {
  /**
   * Indicates how messages are delimited
   *
   */
  logFraming?: DbaasLogsFlowggerConfigurationLogFramingEnum;
  /**
   * Type of format to decode
   *
   */
  logFormat?: DbaasLogsFlowggerConfigurationLogFormatEnum;
}
/**
 * Possible values for StreamColdStorageTargetEnum
 */
export type DbaasLogsStreamColdStorageTargetEnum = 'PCA' | 'PCS';
/**
 * Service
 */
export interface DbaasLogsService {
  /**
   * Service creation
   *
   */
  createdAt?: Date;
  /**
   * Service custom name
   *
   */
  displayName?: string;
  /**
   * Service state
   *
   */
  state?: DbaasLogsServiceStateEnum;
  /**
   * Service name
   *
   */
  serviceName?: string;
  /**
   * Is capped plan enabled?
   *
   */
  isCapped?: boolean;
  /**
   * Service last update
   *
   */
  updatedAt?: Date;
  /**
   * Username on DBaaS Logs
   *
   */
  username?: string;
}
type PathsdbaaslogsGET = '/dbaas/logs/input/engine' | 
'/dbaas/logs/input/engine/{engineId}' | 
'/dbaas/logs/offer/{reference}' | 
'/dbaas/logs/{serviceName}' | 
'/dbaas/logs/{serviceName}/cluster/{clusterId}' | 
'/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork' | 
'/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}' | 
'/dbaas/logs/{serviceName}/cluster' | 
'/dbaas/logs/{serviceName}/serviceInfos' | 
'/dbaas/logs/{serviceName}/url' | 
'/dbaas/logs/{serviceName}/role' | 
'/dbaas/logs/{serviceName}/role/{roleId}/member/{username}' | 
'/dbaas/logs/{serviceName}/role/{roleId}/member' | 
'/dbaas/logs/{serviceName}/role/{roleId}' | 
'/dbaas/logs/{serviceName}/role/{roleId}/permission' | 
'/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}' | 
'/dbaas/logs/{serviceName}/input' | 
'/dbaas/logs/{serviceName}/input/{inputId}/action' | 
'/dbaas/logs/{serviceName}/input/{inputId}/url' | 
'/dbaas/logs/{serviceName}/input/{inputId}' | 
'/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork' | 
'/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}' | 
'/dbaas/logs/{serviceName}/input/{inputId}/configtest/result' | 
'/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger' | 
'/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash' | 
'/dbaas/logs/{serviceName}/quota' | 
'/dbaas/logs/{serviceName}/offer' | 
'/dbaas/logs/{serviceName}/token' | 
'/dbaas/logs/{serviceName}/token/{tokenId}' | 
'/dbaas/logs/{serviceName}/operation/{operationId}' | 
'/dbaas/logs/{serviceName}/operation' | 
'/dbaas/logs/{serviceName}/option' | 
'/dbaas/logs/{serviceName}/option/{optionId}' | 
'/dbaas/logs/{serviceName}/metrics' | 
'/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url' | 
'/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}' | 
'/dbaas/logs/{serviceName}/output/graylog/dashboard' | 
'/dbaas/logs/{serviceName}/output/graylog/stream' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/index' | 
'/dbaas/logs';

type PathsdbaaslogsPUT = '/dbaas/logs/{serviceName}' | 
'/dbaas/logs/{serviceName}/serviceInfos' | 
'/dbaas/logs/{serviceName}/role/{roleId}/member/{username}' | 
'/dbaas/logs/{serviceName}/role/{roleId}' | 
'/dbaas/logs/{serviceName}/input/{inputId}' | 
'/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger' | 
'/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash' | 
'/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}';

type PathsdbaaslogsPOST = '/dbaas/logs/{serviceName}/changeContact' | 
'/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork' | 
'/dbaas/logs/{serviceName}/role' | 
'/dbaas/logs/{serviceName}/role/{roleId}/member' | 
'/dbaas/logs/{serviceName}/role/{roleId}/permission/stream' | 
'/dbaas/logs/{serviceName}/role/{roleId}/permission/index' | 
'/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard' | 
'/dbaas/logs/{serviceName}/role/{roleId}/permission/alias' | 
'/dbaas/logs/{serviceName}/input' | 
'/dbaas/logs/{serviceName}/input/{inputId}/start' | 
'/dbaas/logs/{serviceName}/input/{inputId}/logs/url' | 
'/dbaas/logs/{serviceName}/input/{inputId}/restart' | 
'/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork' | 
'/dbaas/logs/{serviceName}/input/{inputId}/configtest' | 
'/dbaas/logs/{serviceName}/input/{inputId}/end' | 
'/dbaas/logs/{serviceName}/token' | 
'/dbaas/logs/{serviceName}/user/changePassword' | 
'/dbaas/logs/{serviceName}/option/{optionId}/terminate' | 
'/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate' | 
'/dbaas/logs/{serviceName}/output/graylog/dashboard' | 
'/dbaas/logs/{serviceName}/output/graylog/stream' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/index';

type PathsdbaaslogsDELETE = '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}' | 
'/dbaas/logs/{serviceName}/role/{roleId}/member/{username}' | 
'/dbaas/logs/{serviceName}/role/{roleId}' | 
'/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}' | 
'/dbaas/logs/{serviceName}/input/{inputId}' | 
'/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}' | 
'/dbaas/logs/{serviceName}/token/{tokenId}' | 
'/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}' | 
'/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}' | 
'/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}';

class Apidbaaslogs extends ApiCommon {
  /**
  Engines
  Returns the list of available input engines
  **/
  public get(path: '/dbaas/logs/input/engine', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Engine
  Returns details of specified input engine
  **/
  public get(path: '/dbaas/logs/input/engine/{engineId}', pathParams: {engineId?: string}, queryParams: null): Promise<DbaasLogsEngine>;
  /**
  Offer
  Display specified offer
  **/
  public get(path: '/dbaas/logs/offer/{reference}', pathParams: {reference?: string}, queryParams: null): Promise<DbaasLogsPublicOffer>;
  /**
  Service
  Returns the service object of connected identity.
  **/
  public get(path: '/dbaas/logs/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<DbaasLogsService>;
  /**
  Service Clusters
  Returns details of an allowed cluster
  **/
  public get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}', pathParams: {serviceName?: string, clusterId?: string}, queryParams: null): Promise<DbaasLogsCluster>;
  /**
  Cluster allowed networks
  List all the network UUID allowed to contact given cluster
  **/
  public get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork', pathParams: {serviceName?: string, clusterId?: string}, queryParams: null): Promise<string[]>;
  /**
  Cluster allowed networks
  Returns details of an allowed network
  **/
  public get(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}', pathParams: {serviceName?: string, clusterId?: string, allowedNetworkId?: string}, queryParams: null): Promise<DbaasLogsClusterAllowedNetwork>;
  /**
  Service Clusters
  Returns the list of allowed cluster
  **/
  public get(path: '/dbaas/logs/{serviceName}/cluster', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/dbaas/logs/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  ServiceUrls
  Returns platform useful urls.
  **/
  public get(path: '/dbaas/logs/{serviceName}/url', pathParams: {serviceName?: string}, queryParams: null): Promise<DbaasLogsUrl[]>;
  /**
  Roles
  Returns the list of roles
  **/
  public get(path: '/dbaas/logs/{serviceName}/role', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  RoleMember
  Returns the member metadata
  **/
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}', pathParams: {serviceName?: string, roleId?: string, username?: string}, queryParams: null): Promise<DbaasLogsMember>;
  /**
  RoleMembers
  Returns the member list of specified role
  **/
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/member', pathParams: {serviceName?: string, roleId?: string}, queryParams: null): Promise<string[]>;
  /**
  Role
  Returns details of specified role
  **/
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}', pathParams: {serviceName?: string, roleId?: string}, queryParams: null): Promise<DbaasLogsRole>;
  /**
  RolePermissions
  Returns the list of permissions of specified role
  **/
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission', pathParams: {serviceName?: string, roleId?: string}, queryParams: null): Promise<string[]>;
  /**
  RolePermission
  Returns details of specified permission
  **/
  public get(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}', pathParams: {serviceName?: string, roleId?: string, permissionId?: string}, queryParams: null): Promise<DbaasLogsPermission[]>;
  /**
  Inputs
  Returns the list of registered input attached to the logged user
  **/
  public get(path: '/dbaas/logs/{serviceName}/input', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  InputActions
  Returns actions of specified input
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/action', pathParams: {serviceName?: string, inputId?: string}, queryParams: null): Promise<DbaasLogsInputAction[]>;
  /**
  InputUrls
  Returns the list of urls of specified input
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/url', pathParams: {serviceName?: string, inputId?: string}, queryParams: null): Promise<DbaasLogsUrl[]>;
  /**
  Input
  Returns details of specified input
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}', pathParams: {serviceName?: string, inputId?: string}, queryParams: null): Promise<DbaasLogsInput>;
  /**
  InputAllowedNetworks
  List all network UUID allowed to join input
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork', pathParams: {serviceName?: string, inputId?: string}, queryParams: null): Promise<string[]>;
  /**
  InputAllowedNetworkDetails
  List all network UUID allowed to join input
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}', pathParams: {serviceName?: string, inputId?: string, allowedNetworkId?: string}, queryParams: null): Promise<DbaasLogsAllowedNetwork>;
  /**
  InputConfigtestResult
  Returns the config test operation result
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest/result', pathParams: {serviceName?: string, inputId?: string}, queryParams: null): Promise<DbaasLogsTestResult>;
  /**
  FlowggerConfiguration
  Returns the flowgger configuration
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger', pathParams: {serviceName?: string, inputId?: string}, queryParams: null): Promise<DbaasLogsFlowggerConfiguration>;
  /**
  LogstashConfiguration
  Returns the logstash configuration
  **/
  public get(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash', pathParams: {serviceName?: string, inputId?: string}, queryParams: null): Promise<DbaasLogsLogstashConfiguration>;
  /**
  ServiceQuota
  Returns the overall quota limits
  **/
  public get(path: '/dbaas/logs/{serviceName}/quota', pathParams: {serviceName?: string}, queryParams: null): Promise<DbaasLogsQuota>;
  /**
  ServiceOffer
  Returns the subscribed offer
  **/
  public get(path: '/dbaas/logs/{serviceName}/offer', pathParams: {serviceName?: string}, queryParams: null): Promise<DbaasLogsOffer>;
  /**
  Tokens
  Returns the list of service tokens
  **/
  public get(path: '/dbaas/logs/{serviceName}/token', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Token
  Returns the specified token
  **/
  public get(path: '/dbaas/logs/{serviceName}/token/{tokenId}', pathParams: {serviceName?: string, tokenId?: string}, queryParams: null): Promise<DbaasLogsToken>;
  /**
  Operation
  Returns details of specified operation
  **/
  public get(path: '/dbaas/logs/{serviceName}/operation/{operationId}', pathParams: {serviceName?: string, operationId?: string}, queryParams: null): Promise<DbaasLogsOperation>;
  /**
  Operations
  Latest operations
  **/
  public get(path: '/dbaas/logs/{serviceName}/operation', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  ServiceOptions
  Returns the subscribed additional options
  **/
  public get(path: '/dbaas/logs/{serviceName}/option', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  ServiceOption
  Returns details of a subscribed option
  **/
  public get(path: '/dbaas/logs/{serviceName}/option/{optionId}', pathParams: {serviceName?: string, optionId?: string}, queryParams: null): Promise<DbaasLogsOption>;
  /**
  Service Metrics
  Returns Metrics credentials
  **/
  public get(path: '/dbaas/logs/{serviceName}/metrics', pathParams: {serviceName?: string}, queryParams: null): Promise<DbaasLogsServiceMetric>;
  /**
  DashboardUrls
  Returns the list of urls of specified graylog dashboard
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/url', pathParams: {serviceName?: string, dashboardId?: string}, queryParams: null): Promise<DbaasLogsUrl[]>;
  /**
  Dashboard
  Returns details of specified graylog dashboard
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}', pathParams: {serviceName?: string, dashboardId?: string}, queryParams: null): Promise<DbaasLogsDashboard>;
  /**
  Dashboards
  Returns the list of graylog dashboards
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Streams
  Returns the list of graylog streams
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  StreamRule
  Returns details of specified graylog stream rule
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}', pathParams: {serviceName?: string, streamId?: string, ruleId?: string}, queryParams: null): Promise<DbaasLogsStreamRule[]>;
  /**
  StreamRules
  Returns the list of rules of specified graylog stream
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule', pathParams: {serviceName?: string, streamId?: string}, queryParams: null): Promise<string[]>;
  /**
  StreamUrls
  Returns the list of urls of specified graylog stream
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/url', pathParams: {serviceName?: string, streamId?: string}, queryParams: null): Promise<DbaasLogsUrl[]>;
  /**
  Stream
  Returns details of specified graylog stream
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}', pathParams: {serviceName?: string, streamId?: string}, queryParams: null): Promise<DbaasLogsStream>;
  /**
  Streams
  Returns details of specified archive
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}', pathParams: {serviceName?: string, streamId?: string, archiveId?: string}, queryParams: null): Promise<DbaasLogsArchive>;
  /**
  Streams
  Returns the list of archives
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive', pathParams: {serviceName?: string, streamId?: string}, queryParams: null): Promise<string[]>;
  /**
  StreamAlerts
  Returns the list of configured alerts of specified graylog stream
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert', pathParams: {serviceName?: string, streamId?: string}, queryParams: null): Promise<string[]>;
  /**
  StreamAlert
  Returns details of specified graylog stream alert
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}', pathParams: {serviceName?: string, streamId?: string, alertId?: string}, queryParams: null): Promise<DbaasLogsStreamAlertCondition>;
  /**
  StreamUrls
  Returns the list of urls of specified graylog stream
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/url', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null): Promise<DbaasLogsUrl[]>;
  /**
  AliasStreams
  Returns the list of graylog streams attached to specified
        elasticsearch alias
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null): Promise<string[]>;
  /**
  Alias
  Returns specified elasticsearch alias
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null): Promise<DbaasLogsAlias>;
  /**
  AliasStreams
  Returns the list of elasticsearch indexes attached to specified
        elasticsearch alias
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null): Promise<string[]>;
  /**
  Aliases
  Returns the list of alias for connected user
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  StreamUrls
  Returns the list of urls of specified graylog stream
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}/url', pathParams: {serviceName?: string, indexId?: string}, queryParams: null): Promise<DbaasLogsUrl[]>;
  /**
  Index
  Returns specified elasticsearch index
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}', pathParams: {serviceName?: string, indexId?: string}, queryParams: null): Promise<DbaasLogsIndex>;
  /**
  Indexes
  Returns the list of elasticsearch indexes
  **/
  public get(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Operations about the DBAAS-LOGS service
  List available services
  **/
  public get(path: '/dbaas/logs', pathParams: null, queryParams: null): Promise<string[]>;
  public get(path: PathsdbaaslogsGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Service
  Update the service properties
  **/
  public put(path: '/dbaas/logs/{serviceName}', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/dbaas/logs/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<void>;
  /**
  RoleMember
  Update the member metadata
  **/
  public put(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}', pathParams: {serviceName?: string, roleId?: string, username?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Role
  Update information of specified role
  **/
  public put(path: '/dbaas/logs/{serviceName}/role/{roleId}', pathParams: {serviceName?: string, roleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Input
  Update information of specified input object
  **/
  public put(path: '/dbaas/logs/{serviceName}/input/{inputId}', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  FlowggerConfiguration
  Update the flowgger configuration
  **/
  public put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  LogstashConfiguration
  Update the logstash configuration
  **/
  public put(path: '/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Dashboard
  Update information of specified graylog dashboard
  **/
  public put(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}', pathParams: {serviceName?: string, dashboardId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Stream
  Update information of specified graylog stream
  **/
  public put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}', pathParams: {serviceName?: string, streamId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  StreamAlert
  Update alert information of specified graylog stream
  **/
  public put(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}', pathParams: {serviceName?: string, streamId?: string, alertId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Alias
  Update specified elasticsearch alias
  **/
  public put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Index
  Update specified elasticsearch index
  **/
  public put(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}', pathParams: {serviceName?: string, indexId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  public put(path: PathsdbaaslogsPUT, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.put(path, pathParams, queryParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/dbaas/logs/{serviceName}/changeContact', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<Number[]>;
  /**
  Cluster allowed networks
  Allow an IP to contact cluster
  **/
  public post(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork', pathParams: {serviceName?: string, clusterId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Roles
  Register a new role
  **/
  public post(path: '/dbaas/logs/{serviceName}/role', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  RoleMembers
  Append user into the member list of specified role
  **/
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/member', pathParams: {serviceName?: string, roleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  RolePermissionIndex
  Append a graylog stream permission to role
  **/
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/stream', pathParams: {serviceName?: string, roleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  RolePermissionIndex
  Append a elasticsearch index permission to role
  **/
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/index', pathParams: {serviceName?: string, roleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  RolePermissionIndex
  Append a graylog dashboard permission to role
  **/
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/dashboard', pathParams: {serviceName?: string, roleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  RolePermissionAlias
  Append a elasticsearch alias permission to role
  **/
  public post(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/alias', pathParams: {serviceName?: string, roleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Inputs
  Register a new input object
  **/
  public post(path: '/dbaas/logs/{serviceName}/input', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  InputStart
  Schedule the start of specified input
  **/
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/start', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  InputLogs
  Generate a temporary url to retrieve input logs
  **/
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/logs/url', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsTemporaryLogsLink>;
  /**
  InputRestart
  Schedule the restart of specified input
  **/
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/restart', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  InputAllowedNetworks
  Allow an ip to join input
  **/
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  InputConfigtest
  Validate configuration of specified input
  **/
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/configtest', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  InputEnd
  Schedule the end of specified input
  **/
  public post(path: '/dbaas/logs/{serviceName}/input/{inputId}/end', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Tokens
  Add a new token
  **/
  public post(path: '/dbaas/logs/{serviceName}/token', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  ServiceChangePassword
  Initiate a password change procedure.
  **/
  public post(path: '/dbaas/logs/{serviceName}/user/changePassword', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  ServiceOption
  Remove the specified subscribed option
  **/
  public post(path: '/dbaas/logs/{serviceName}/option/{optionId}/terminate', pathParams: {serviceName?: string, optionId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  DashboardClone
  Copy all widgets from specified dashboard to a new one
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}/duplicate', pathParams: {serviceName?: string, dashboardId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Dashboards
  Register a new graylog dashboard
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Streams
  Register a new graylog stream
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  StreamRules
  Register a new rule on specified graylog stream
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule', pathParams: {serviceName?: string, streamId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Streams
  Get a public temporary URL to access the archive
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/archive/{archiveId}/url', pathParams: {serviceName?: string, streamId?: string, archiveId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsArchiveUrl>;
  /**
  StreamAlerts
  Register a new alert on specified graylog stream
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert', pathParams: {serviceName?: string, streamId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  AliasStreams
  Attach a graylog stream to specified elasticsearch alias
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  AliasStreams
  Attach a elasticsearch index to specified elasticsearch alias
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Aliases
  Register a new elasticsearch alias
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Indexes
  Register a new elasticsearch index
  **/
  public post(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index', pathParams: {serviceName?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  public post(path: PathsdbaaslogsPOST, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.post(path, pathParams, queryParams, bodyParams);}
  /**
  Cluster allowed networks
  Remove the specified IP from the list of allowed networks
  **/
  public delete(path: '/dbaas/logs/{serviceName}/cluster/{clusterId}/allowedNetwork/{allowedNetworkId}', pathParams: {serviceName?: string, clusterId?: string, allowedNetworkId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  RoleMember
  Remove user from the member list of specified role
  **/
  public delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/member/{username}', pathParams: {serviceName?: string, roleId?: string, username?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Role
  Remove specified role
  **/
  public delete(path: '/dbaas/logs/{serviceName}/role/{roleId}', pathParams: {serviceName?: string, roleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  RolePermission
  Remove specified permission
  **/
  public delete(path: '/dbaas/logs/{serviceName}/role/{roleId}/permission/{permissionId}', pathParams: {serviceName?: string, roleId?: string, permissionId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Input
  Remove the specified input object
  **/
  public delete(path: '/dbaas/logs/{serviceName}/input/{inputId}', pathParams: {serviceName?: string, inputId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  InputAllowedNetworkDetails
  Remove the specified IP from the list of allowed networks
  **/
  public delete(path: '/dbaas/logs/{serviceName}/input/{inputId}/allowedNetwork/{allowedNetworkId}', pathParams: {serviceName?: string, inputId?: string, allowedNetworkId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Token
  Delete the specified token
  **/
  public delete(path: '/dbaas/logs/{serviceName}/token/{tokenId}', pathParams: {serviceName?: string, tokenId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Dashboard
  Remove specified graylog dashboard
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/dashboard/{dashboardId}', pathParams: {serviceName?: string, dashboardId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  StreamRule
  Remove specified graylog stream rule
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/rule/{ruleId}', pathParams: {serviceName?: string, streamId?: string, ruleId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Stream
  Remove specified graylog stream
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}', pathParams: {serviceName?: string, streamId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  StreamAlert
  Remove alert from specified graylog stream
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/alert/{alertId}', pathParams: {serviceName?: string, streamId?: string, alertId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  AliasStream
  Detach a graylog stream from specified elasticsearch alias
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/stream/{streamId}', pathParams: {serviceName?: string, aliasId?: string, streamId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Alias
  Remove specified elasticsearch alias
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}', pathParams: {serviceName?: string, aliasId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  AliasStream
  Detach a elasticsearch index from specified elasticsearch alias
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/alias/{aliasId}/index/{indexId}', pathParams: {serviceName?: string, aliasId?: string, indexId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  /**
  Index
  Remove specified elasticsearch index
  **/
  public delete(path: '/dbaas/logs/{serviceName}/output/elasticsearch/index/{indexId}', pathParams: {serviceName?: string, indexId?: string}, queryParams: null, bodyParams: null): Promise<DbaasLogsOperation>;
  public delete(path: PathsdbaaslogsDELETE, pathParams?: any, queryParams?: any, bodyParams?:any) : Promise<any> {return super.delete(path, pathParams, queryParams, bodyParams);}
}
