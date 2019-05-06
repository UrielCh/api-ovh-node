import { ApiCommon } from '@ovh-api/common';
/**
 * Possible values for server status
 */
export type IpLoadbalancingBackendCustomerServerStatusEnum = 'active' | 'inactive';
/**
 * Probe used to determine if a backend is alive and can handle requests
 */
export interface IpLoadbalancingBackendProbe {
  /**
   * Force probe to run over a SSL layer. Defaults to false
   *
   */
  forceSsl?: boolean;
  /**
   * Seconds between each probe check. Must be > 30sec. Defaults to 30
   *
   */
  interval?: Number;
  /**
   * Matcher to use to valide "expect". "default" uses HAProxy's default behavior for this type of check. "status" is only supported for HTTP probes
   *
   */
  match?: IpLoadbalancingProbeExpectMatchEnum;
  /**
   * HTTP method to use with "http" probe. Consider using HEAD to save bandwidth when possible. Defaults to "GET"
   *
   */
  method?: IpLoadbalancingProbeMethodEnum;
  /**
   * Invert the matching operator effect
   *
   */
  negate?: boolean;
  /**
   * Server response expected when UP. Empty for "default", comma delimited list of statuses for "status", string for "contains", regex for "matches"
   *
   */
  pattern?: string;
  /**
   * Port used to probe your backend. Equal to farm port if null. Ignored for oco probe type
   *
   */
  port?: Number;
  /**
   * Probe type. "tcp" if null
   *
   */
  type?: IpLoadbalancingProbeTypeEnum;
  /**
   * URL to use for HTTP probes of the form [www.example.com]/path/to/check. Protocol will be ignored. Defaults to "/"
   *
   */
  url?: string;
}
/**
 * Possible values for load balancing balance algorithm
 */
export type IpLoadbalancingBalanceHTTPEnum = 'first' | 'leastconn' | 'roundrobin' | 'source' | 'uri';
/**
 * Possible values for load balancing balance algorithm
 */
export type IpLoadbalancingBalanceTCPEnum = 'first' | 'leastconn' | 'roundrobin' | 'source';
/**
 * a list of { type => [ Farm ids ] }
 */
export interface IpLoadbalancingDefinedFarm {
  /**
   */
  id?: Number;
  /**
   */
  type?: string;
}
/**
 * a list of {type=>[Frontend ids]}
 */
export interface IpLoadbalancingDefinedFrontend {
  /**
   */
  id?: Number;
  /**
   */
  type?: string;
}
/**
 * Defined routes name, type and id. Typically used to generate autocomplete lists.
 */
export interface IpLoadbalancingDefinedRoute {
  /**
   * Human readable name for your route
   *
   */
  displayName?: string;
  /**
   * Id of your route
   *
   */
  routeId?: Number;
  /**
   * Protocol supported by this route
   *
   */
  type?: string;
}
/**
 * Available farm probes options
 */
export interface IpLoadbalancingFarmAvailableProbe {
  /**
   * List of possible probe result checkers for this type of probe
   *
   */
  matches?: string[];
  /**
   * List of available HTTP method, if available
   *
   */
  method?: string[];
  /**
   * List of matches operators that accept the negate option for this type of probe
   *
   */
  negatableMatches?: string[];
  /**
   * True is this probe type supports a custom port
   *
   */
  port?: boolean;
  /**
   * Probe protocol name. See probe "type" field in the farm probe
   *
   */
  type?: string;
  /**
   * True is this probe type supports a URL
   *
   */
  url?: boolean;
}
/**
 * A structure describing the current state of an IPLB instances
 */
export interface IpLoadbalancingInstancesState {
  /**
   * Internal ID of this IPLB instance
   *
   */
  internalId?: Number;
  /**
   * Last update date
   *
   */
  lastUpdateDate?: string;
  /**
   * Current state of this IPLB instance
   *
   */
  state?: string;
  /**
   * zone of this IPLB instance
   *
   */
  zone?: string;
}
/**
 * Your IP load balancing
 */
export interface IpLoadbalancingIp {
  /**
   * Set the name displayed in ManagerV6 for your iplb (max 50 chars)
   *
   */
  displayName?: string;
  /**
   * Your IP load balancing
   *
   */
  ipLoadbalancing?: string;
  /**
   * The IPV4 associated to your IP load balancing
   *
   */
  ipv4?: string;
  /**
   * The IPV6 associated to your IP load balancing
   *
   */
  ipv6?: string;
  /**
   * The metrics token associated with your IP load balancing
   *
   */
  metricsToken?: string;
  /**
   * The offer of your IP load balancing
   *
   */
  offer?: string;
  /**
   * Available additional zone for your Load Balancer
   *
   */
  orderableZone?: IpLoadbalancingOrderableZone[];
  /**
   * The internal name of your IP load balancing
   *
   */
  serviceName?: string;
  /**
   * Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null.
   *
   */
  sslConfiguration?: IpLoadbalancingSslConfigurationEnum;
  /**
   * Current state of your IP
   *
   */
  state?: IpLoadbalancingIpStateEnum;
  /**
   * Vrack eligibility
   *
   */
  vrackEligibility?: boolean;
  /**
   * Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product
   *
   */
  vrackName?: string;
  /**
   * Location where your service is
   *
   */
  zone?: string[];
}
/**
 * Possible values for load balancing IP state
 */
export type IpLoadbalancingIpStateEnum = 'blacklisted' | 'deleted' | 'free' | 'ok' | 'quarantined' | 'suspended';
/**
 * a list of {zone, nat Ip}
 */
export interface IpLoadbalancingNatIps {
  /**
   */
  ip?: string[];
  /**
   */
  zone?: string;
}
/**
 * Available additional zone to order for a Load Balancer
 */
export interface IpLoadbalancingOrderableZone {
  /**
   * The zone three letter code
   *
   */
  name?: string;
  /**
   * The billing planCode for this zone
   *
   */
  planCode?: string;
}
/**
 * The pending changes for a Load Balancer zone
 */
export interface IpLoadbalancingPendingChanges {
  /**
   * The number of changes waiting to be applied
   *
   */
  number?: Number;
  /**
   * The Load Balancer zone with pending changes
   *
   */
  zone?: string;
}
/**
 * List of possible probe result matches. "status" is only supported for HTTP probes
 */
export type IpLoadbalancingProbeExpectMatchEnum = 'contains' | 'default' | 'internal' | 'matches' | 'status';
/**
 * List of possible method for HTTP probes. Consider using HEAD to save bandwidth when possible.
 */
export type IpLoadbalancingProbeMethodEnum = 'GET' | 'HEAD' | 'OPTIONS' | 'internal';
/**
 * Possible values for farm probe
 */
export type IpLoadbalancingProbeTypeEnum = 'http' | 'internal' | 'mysql' | 'oco' | 'pgsql' | 'smtp' | 'tcp';
/**
 * Possible values for proxy type
 */
export type IpLoadbalancingProxyProtocolVersionEnum = 'v1' | 'v2' | 'v2-ssl' | 'v2-ssl-cn';
/**
 * Quota informations for current billing period for this zone
 */
export interface IpLoadbalancingQuotaQuota {
  /**
   * Quota alert value in bytes. When reached, we will send you an alert. Default : included quota with your offer
   *
   */
  alert?: Number;
  /**
   * Included quota value with your offer, in bytes
   *
   */
  included?: Number;
  /**
   * The last time your quota was updated from your Load Balancer instance
   *
   */
  lastUpdateDate?: string;
  /**
   * The last time your quota was resetted (billed)
   *
   */
  resetDate?: string;
  /**
   * Total used quota value in bytes
   *
   */
  total?: Number;
  /**
   * Zone of your quota
   *
   */
  zone?: string;
}
/**
 * QuotaHistory
 */
export interface IpLoadbalancingQuotaHistoryQuotaHistory {
  /**
   * Historized date for this quota entry
   *
   */
  historizedDate?: string;
  /**
   * Id of your quota
   *
   */
  id?: Number;
  /**
   * The last time your quota was updated from your Load Balancer instance
   *
   */
  lastUpdateDate?: string;
  /**
   * The last time your quota was resetted (billed)
   *
   */
  resetDate?: string;
  /**
   * Total used quota value in bytes
   *
   */
  total?: Number;
  /**
   * Zone of your quota
   *
   */
  zone?: string;
}
/**
 * Available route actions options
 */
export interface IpLoadbalancingRouteAvailableAction {
  /**
   * Type of the destination for this action
   *
   */
  destination?: string;
  /**
   * Action name
   *
   */
  name?: string;
  /**
   * List of available HTTP status code if applicable
   *
   */
  status?: Number[];
  /**
   * Protocol supported by this action
   *
   */
  type?: string;
}
/**
 * Match rule to combine to build routes
 */
export interface IpLoadbalancingRouteAvailableRule {
  /**
   * If pattern is "enum", list of available options
   *
   */
  enum?: string[];
  /**
   * If true, this rule needs a subfield. Typically a cookie or header name
   *
   */
  hasSubField?: boolean;
  /**
   * List of match operators compatible with this rule
   *
   */
  matches?: string[];
  /**
   * Rule name
   *
   */
  name?: string;
  /**
   * Expected type for the pattern. Like "enum", "backend", "cidr", ...
   *
   */
  pattern?: string;
  /**
   * Protocol supported by this action
   *
   */
  type?: string;
}
/**
 * HTTP Route
 */
export interface IpLoadbalancingRouteHttpRouteHttp {
  /**
   * Action triggered when all rules match
   *
   */
  action?: IpLoadbalancingRouteHttpAction;
  /**
   * Human readable name for your route, this field is for you
   *
   */
  displayName?: string;
  /**
   * Route traffic for this frontend
   *
   */
  frontendId?: Number;
  /**
   * Id of your route
   *
   */
  routeId?: Number;
  /**
   * List of rules to match to trigger action
   *
   */
  rules?: IpLoadbalancingRouteRule[];
  /**
   * Route status. Routes in "ok" state are ready to operate
   *
   */
  status?: IpLoadbalancingRouteStatusEnum;
  /**
   * Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action
   *
   */
  weight?: Number;
}
/**
 * Action triggered when all rules from route match
 */
export interface IpLoadbalancingRouteHttpAction {
  /**
   * HTTP status code for "redirect" and "reject" actions
   *
   */
  status?: Number;
  /**
   * Farm ID for "farm" action type or URL template for "redirect" action. You may use ${uri}, ${protocol}, ${host}, ${port} and ${path} variables in redirect target
   *
   */
  target?: string;
  /**
   * Action to trigger if all the rules of this route matches
   *
   */
  type?: string;
}
/**
 * Match rule to combine to build routes
 */
export interface IpLoadbalancingRouteRule {
  /**
   * Name of the field to match like "protocol" or "host". See "/ipLoadbalancing/{serviceName}/route/availableRules" for a list of available rules
   *
   */
  field?: string;
  /**
   * Matching operator. Not all operators are available for all fields. See "/availableRules"
   *
   */
  match?: IpLoadbalancingRouteRuleMatchesEnum;
  /**
   * Invert the matching operator effect
   *
   */
  negate?: boolean;
  /**
   * Value to match against this match. Interpretation if this field depends on the match and field
   *
   */
  pattern?: string;
  /**
   * Id of your rule
   *
   */
  ruleId?: Number;
  /**
   * Name of sub-field, if applicable. This may be a Cookie or Header name for instance
   *
   */
  subField?: string;
}
/**
 * Rule of a route
 */
export interface IpLoadbalancingRouteRuleRouteRule {
  /**
   * Human readable name for your rule
   *
   */
  displayName?: string;
  /**
   * Name of the field to match like "protocol" or "host". See "/ipLoadbalancing/{serviceName}/availableRouteRules" for a list of available rules
   *
   */
  field?: string;
  /**
   * Matching operator. Not all operators are available for all fields. See "/ipLoadbalancing/{serviceName}/availableRouteRules"
   *
   */
  match?: IpLoadbalancingRouteRuleMatchesEnum;
  /**
   * Invert the matching operator effect
   *
   */
  negate?: boolean;
  /**
   * Value to match against this match. Interpretation if this field depends on the match and field
   *
   */
  pattern?: string;
  /**
   * Id of your rule
   *
   */
  ruleId?: Number;
  /**
   * Name of sub-field, if applicable. This may be a Cookie or Header name for instance
   *
   */
  subField?: string;
}
/**
 * List of possible route rule matches
 */
export type IpLoadbalancingRouteRuleMatchesEnum = 'contains' | 'endswith' | 'exists' | 'in' | 'internal' | 'is' | 'matches' | 'startswith';
/**
 * Route configuration status
 */
export type IpLoadbalancingRouteStatusEnum = 'creating' | 'deleting' | 'internal' | 'ok' | 'updating';
/**
 * TCP Route
 */
export interface IpLoadbalancingRouteTcpRouteTcp {
  /**
   * Action triggered when all rules match
   *
   */
  action?: IpLoadbalancingRouteTcpAction;
  /**
   * Human readable name for your route, this field is for you
   *
   */
  displayName?: string;
  /**
   * Route traffic for this frontend
   *
   */
  frontendId?: Number;
  /**
   * Id of your route
   *
   */
  routeId?: Number;
  /**
   * List of rules to match to trigger action
   *
   */
  rules?: IpLoadbalancingRouteRule[];
  /**
   * Route status. Routes in "ok" state are ready to operate
   *
   */
  status?: IpLoadbalancingRouteStatusEnum;
  /**
   * Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action
   *
   */
  weight?: Number;
}
/**
 * Action triggered when all rules from route match
 */
export interface IpLoadbalancingRouteTcpAction {
  /**
   * Farm ID for "farm" action type, empty for others
   *
   */
  target?: string;
  /**
   * Action to trigger if all the rules of this route matches
   *
   */
  type?: string;
}
/**
 * Available servers states
 */
export interface IpLoadbalancingServerState {
  /**
   * Layer5-7 code, if available
   *
   */
  checkCode?: string;
  /**
   * Status of last health check
   *
   */
  checkStatus?: string;
  /**
   * Time of last health check
   *
   */
  checkTime?: string;
  /**
   * Id of your instance
   *
   */
  instanceId?: Number;
  /**
   * Last health check contents or textual error
   *
   */
  lastCheckContent?: string;
  /**
   * Status
   *
   */
  status?: string;
}
/**
 * Ssl
 */
export interface IpLoadbalancingSslSsl {
  /**
   * Human readable name for your ssl certificate, this field is for you
   *
   */
  displayName?: string;
  /**
   * Expire date of your SSL certificate
   *
   */
  expireDate?: string;
  /**
   * Fingerprint of your SSL certificate
   *
   */
  fingerprint?: string;
  /**
   * Id of your SSL certificate
   *
   */
  id?: Number;
  /**
   * Subject Alternative Name of your SSL certificate
   *
   */
  san?: string[];
  /**
   * Serial of your SSL certificate (Deprecated, use fingerprint instead !)
   *
   */
  serial?: string;
  /**
   * Subject of your SSL certificate
   *
   */
  subject?: string;
  /**
   * Type of your SSL certificate.
'built' for SSL certificates managed by the IP Load Balancing. 'custom' for user manager certificates.
   *
   */
  type?: IpLoadbalancingSslTypeEnum;
}
/**
 * Possible values for ssl ciphers
 */
export type IpLoadbalancingSslConfigurationEnum = 'intermediate' | 'modern';
/**
 * Possible values for ssl type
 */
export type IpLoadbalancingSslTypeEnum = 'built' | 'built_not_routed' | 'custom';
/**
 * The global status of a Load Balancer
 */
export interface IpLoadbalancingStatus {
  /**
   * The Load Balancer farms status informations
   *
   */
  farms?: IpLoadbalancingStatusComponent;
  /**
   * The Load Balancer frontends status informations
   *
   */
  frontends?: IpLoadbalancingStatusComponent;
  /**
   * The Load Balancer servers status informations
   *
   */
  servers?: IpLoadbalancingStatusComponent;
  /**
   * The Load Balancer service status informations
   *
   */
  service?: IpLoadbalancingStatusService;
}
/**
 * Possible values for HTTP backend stickiness
 */
export type IpLoadbalancingStickinessHTTPEnum = 'cookie' | 'sourceIp';
/**
 * Possible values for TCP backend stickiness
 */
export type IpLoadbalancingStickinessTCPEnum = 'sourceIp';
/**
 * IP Load Balancing Operations
 */
export interface IpLoadbalancingTaskTask {
  /**
   * Operation type
   *
   */
  action?: IpLoadbalancingTaskActionEnum;
  /**
   * Creation date of your operation
   *
   */
  creationDate?: string;
  /**
   * Done date of your operation
   *
   */
  doneDate?: string;
  /**
   * Id of the operation
   *
   */
  id?: Number;
  /**
   * Operation progress percentage
   *
   */
  progress?: Number;
  /**
   * Current status of your operation
   *
   */
  status?: IpLoadbalancingTaskStatusEnum;
  /**
   * Zone of your Load Balancer which are updated by current Task
   *
   */
  zones?: string[];
}
/**
 * Possible task action
 */
export type IpLoadbalancingTaskActionEnum = 'deleteIplb' | 'deployIplb' | 'install' | 'installIplb' | 'installZone' | 'orderFreeCertificate' | 'orderPaidCertificate' | 'orderSsl' | 'refreshIplb' | 'releaseIplb' | 'releaseIplbZone' | 'reopenIplb' | 'suspendIplb' | 'suspendZone' | 'switchToIplbNextGenerationApi' | 'vrackAttach' | 'vrackDetach';
/**
 * Possible task status
 */
export type IpLoadbalancingTaskStatusEnum = 'blocked' | 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * Information about vRack for your Load Balancer
 */
export interface IpLoadbalancingVrackInformation {
  /**
   * State of the vRack link to your Load Balancer
   *
   */
  state?: IpLoadbalancingVrackStateEnum;
  /**
   * Ongoing task related to vRack installation or uninstallation on your Load Balancer
   *
   */
  task?: Number[];
  /**
   * Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product
   *
   */
  vrackName?: string;
}
/**
 * Represents a private network in the vRack
 */
export interface IpLoadbalancingVrackNetworkVrackNetwork {
  /**
   * Human readable name for your vrack network
   *
   */
  displayName?: string;
  /**
   * Farm Id your vrack network is attached to and their type
   *
   */
  farmId?: IpLoadbalancingDefinedFarm[];
  /**
   * An IP block used as a pool of IPs by this Load Balancer to connect to the servers in this private network. The block must be in the private network and reserved for the Load Balancer
   *
   */
  natIp?: string;
  /**
   * IP block of the private network in the vRack
   *
   */
  subnet?: string;
  /**
   * VLAN of the private network in the vRack. 0 if the private network is not in a VLAN
   *
   */
  vlan?: Number;
  /**
   * Internal Load Balancer identifier of the vRack private network description
   *
   */
  vrackNetworkId?: Number;
}
/**
 * Rules to create a new description of a private network in the vRack
 */
export interface IpLoadbalancingVrackNetworkCreationRules {
  /**
   * Minimum number of IPs needed to forward requests to your servers using NAT in your private network behind the current Load Balancer. Ip Block given on Load Balancer vRack network must contain at least this number of IP.
   *
   */
  minNatIps?: Number;
  /**
   * Number of remaining private network descriptions available for creation for this Load Balancer
   *
   */
  remainingNetworks?: Number;
  /**
   * Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product
   *
   */
  vrackName?: string;
}
/**
 * Possible values for load balancing vRack state
 */
export type IpLoadbalancingVrackStateEnum = 'activating' | 'active' | 'deactivating' | 'inactive';
/**
 * Aims to help you configure needed transparent interfaces
 */
export interface IpLoadbalancingVrackTransparentGateways {
  /**
   * address
   *
   */
  address?: string;
  /**
   * gateway
   *
   */
  gateway?: string;
  /**
   * vlan
   *
   */
  vlan?: Number;
}
/**
 * Server's vrack transparent ip
 */
export interface IpLoadbalancingVrackTransparentIpVrackTransparentIp {
  /**
   */
  address?: string;
  /**
   */
  farmId?: Number;
  /**
   */
  id?: Number;
  /**
   */
  serverId?: Number;
  /**
   */
  slotId?: Number;
}
/**
 * IP Load Balancing Zone
 */
export interface IpLoadbalancingZoneZone {
  /**
   * Name of your zone
   *
   */
  name?: string;
  /**
   * State of your zone
   *
   */
  state?: string;
}
/**
 * HTTP Farm
 */
export interface IpLoadbalancingBackendHttpBackendHttp {
  /**
   * Load balancing algorithm. 'roundrobin' if null
   *
   */
  balance?: IpLoadbalancingBalanceHTTPEnum;
  /**
   * Human readable name for your backend, this field is for you
   *
   */
  displayName?: string;
  /**
   * Id of your farm
   *
   */
  farmId?: Number;
  /**
   * Port attached to your farm. Inherited from frontend if null
   *
   */
  port?: Number;
  /**
   * Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm
   *
   */
  probe?: IpLoadbalancingBackendProbe;
  /**
   * Stickiness type. No stickiness if null
   *
   */
  stickiness?: IpLoadbalancingStickinessHTTPEnum;
  /**
   * Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack
   *
   */
  vrackNetworkId?: Number;
  /**
   * Zone of you farm
   *
   */
  zone?: string;
}
/**
 * HTTP Farm's Server
 */
export interface IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer {
  /**
   * Address of your server
   *
   */
  address?: string;
  /**
   * farm id
   *
   */
  backendId?: Number;
  /**
   * Backup state. Default: 'false'
   *
   */
  backup?: boolean;
  /**
   * Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)
   *
   */
  chain?: string;
  /**
   * Server cookie value configured for cookie stickiness
   *
   */
  cookie?: string;
  /**
   * Human readable name for your server, this field is for you
   *
   */
  displayName?: string;
  /**
   * Port attached to your server. Inherited from farm if null
   *
   */
  port?: Number;
  /**
   * Probe state. Default: 'false'
   *
   */
  probe?: boolean;
  /**
   * Disabled if null. Send PROXY protocol header. Requires a compatible server.
   *
   */
  proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersionEnum;
  /**
   * Id of your server
   *
   */
  serverId?: Number;
  /**
   * Server state
   *
   */
  serverState?: IpLoadbalancingServerState[];
  /**
   * SSL ciphering. Probes will also be sent ciphered. Default: 'false'
   *
   */
  ssl?: boolean;
  /**
   * Status attached to your server
   *
   */
  status?: IpLoadbalancingBackendCustomerServerStatusEnum;
  /**
   * Weight value. Defaults to 1. 0 if not used in load balancing. Servers with higher weight get more requests.
   *
   */
  weight?: Number;
}
/**
 * TCP Farm
 */
export interface IpLoadbalancingBackendTcpBackendTcp {
  /**
   * Load balancing algorithm. 'roundrobin' if null
   *
   */
  balance?: IpLoadbalancingBalanceTCPEnum;
  /**
   * Human readable name for your backend, this field is for you
   *
   */
  displayName?: string;
  /**
   * Id of your farm
   *
   */
  farmId?: Number;
  /**
   * Port attached to your farm. Inherited from frontend if null
   *
   */
  port?: Number;
  /**
   * Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm
   *
   */
  probe?: IpLoadbalancingBackendProbe;
  /**
   * Stickiness type. No stickiness if null
   *
   */
  stickiness?: IpLoadbalancingStickinessTCPEnum;
  /**
   * Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack
   *
   */
  vrackNetworkId?: Number;
  /**
   * Zone of you farm
   *
   */
  zone?: string;
}
/**
 * TCP Farm's Server
 */
export interface IpLoadbalancingBackendTcpCustomerServerBackendTCPServer {
  /**
   * Address of your server
   *
   */
  address?: string;
  /**
   * Farm id
   *
   */
  backendId?: Number;
  /**
   * Backup state. Default: 'false'
   *
   */
  backup?: boolean;
  /**
   * Certificate chain. Allow server certificate verification (Avoid man-in-the-middle attacks)
   *
   */
  chain?: string;
  /**
   * Human readable name for your server, this field is for you
   *
   */
  displayName?: string;
  /**
   * Port attached to your server. Inherited from farm if null
   *
   */
  port?: Number;
  /**
   * Probe state. Default: 'false'
   *
   */
  probe?: boolean;
  /**
   * Disabled if null. Send PROXY protocol header. Requires a compatible server.
   *
   */
  proxyProtocolVersion?: IpLoadbalancingProxyProtocolVersionEnum;
  /**
   * Id of your server
   *
   */
  serverId?: Number;
  /**
   * Server state
   *
   */
  serverState?: IpLoadbalancingServerState[];
  /**
   * SSL ciphering. Probes will also be sent ciphered
   *
   */
  ssl?: boolean;
  /**
   * Status attached to your server
   *
   */
  status?: IpLoadbalancingBackendCustomerServerStatusEnum;
  /**
   * Weight value. Defaults to 1. 0 if not used in load balancing. Servers with higher weight get more requests.
   *
   */
  weight?: Number;
}
/**
 * UDP Farm
 */
export interface IpLoadbalancingBackendUdpBackendUdp {
  /**
   * Human readable name for your backend, this field is for you
   *
   */
  displayName?: string;
  /**
   * Id of your farm
   *
   */
  farmId?: Number;
  /**
   * Port attached to your farm. Inherited from frontend if null
   *
   */
  port?: Number;
  /**
   * Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack
   *
   */
  vrackNetworkId?: Number;
  /**
   * Zone of you farm
   *
   */
  zone?: string;
}
/**
 * UDP Farm's Server
 */
export interface IpLoadbalancingBackendUdpCustomerServerBackendUDPServer {
  /**
   * Address of your server
   *
   */
  address?: string;
  /**
   * farm id
   *
   */
  backendId?: Number;
  /**
   * Human readable name for your server, this field is for you
   *
   */
  displayName?: string;
  /**
   * Port attached to your server. Inherited from farm if null
   *
   */
  port?: Number;
  /**
   * Id of your server
   *
   */
  serverId?: Number;
  /**
   * Status attached to your server
   *
   */
  status?: IpLoadbalancingBackendCustomerServerStatusEnum;
}
/**
 * Frontend HTTP
 */
export interface IpLoadbalancingFrontendHttpFrontendHttp {
  /**
   * Restrict IP Load Balancing access to these ip block. No restriction if null
   *
   */
  allowedSource?: string[];
  /**
   * Only attach frontend on these ip. No restriction if null
   *
   */
  dedicatedIpfo?: string[];
  /**
   * Default HTTP Farm of your frontend
   *
   */
  defaultFarmId?: Number;
  /**
   * Default ssl served to your customer
   *
   */
  defaultSslId?: Number;
  /**
   * Disable frontend. Default: 'false'
   *
   */
  disabled?: boolean;
  /**
   * Human readable name for your frontend, this field is for you
   *
   */
  displayName?: string;
  /**
   * Id of your frontend
   *
   */
  frontendId?: Number;
  /**
   * HTTP Strict Transport Security. Default: 'false'
   *
   */
  hsts?: boolean;
  /**
   * Add header to your frontend. Useful variables admitted : %ci <=> client_ip, %cp <=> client_port
   *
   */
  httpHeader?: string[];
  /**
   * Listening port(s) on the server
   *
   */
  port?: string;
  /**
   * HTTP redirection (Ex : http://www.ovh.com)
   *
   */
  redirectLocation?: string;
  /**
   * SSL deciphering. Default: 'false'
   *
   */
  ssl?: boolean;
  /**
   * Zone of you frontend
   *
   */
  zone?: string;
}
/**
 * Frontend TCP
 */
export interface IpLoadbalancingFrontendTcpFrontendTcp {
  /**
   * Restrict IP Load Balancing access to these ip block. No restriction if null
   *
   */
  allowedSource?: string[];
  /**
   * Only attach frontend on these ip. No restriction if null
   *
   */
  dedicatedIpfo?: string[];
  /**
   * Default TCP Farm of your frontend
   *
   */
  defaultFarmId?: Number;
  /**
   * Default ssl served to your customer
   *
   */
  defaultSslId?: Number;
  /**
   * Disable frontend. Default: 'false'
   *
   */
  disabled?: boolean;
  /**
   * Human readable name for your frontend, this field is for you
   *
   */
  displayName?: string;
  /**
   * Id of your frontend
   *
   */
  frontendId?: Number;
  /**
   * Listening port(s) on the server
   *
   */
  port?: string;
  /**
   * SSL deciphering. Default: 'false'
   *
   */
  ssl?: boolean;
  /**
   * Zone of you frontend
   *
   */
  zone?: string;
}
/**
 * Frontend UDP
 */
export interface IpLoadbalancingFrontendUdpFrontendUdp {
  /**
   * Only attach frontend on these ip. No restriction if null
   *
   */
  dedicatedIpfo?: string[];
  /**
   * Default UDP Farm of your frontend
   *
   */
  defaultFarmId?: Number;
  /**
   * Disable frontend. Default: 'false'
   *
   */
  disabled?: boolean;
  /**
   * Human readable name for your frontend, this field is for you
   *
   */
  displayName?: string;
  /**
   * Id of your frontend
   *
   */
  frontendId?: Number;
  /**
   * Listening port(s) on the server
   *
   */
  port?: string;
  /**
   * Zone of you frontend
   *
   */
  zone?: string;
}
/**
 * The global status of a Load Balancer component
 */
export interface IpLoadbalancingStatusComponent {
  /**
   * The global status of your Load Balancer component
   *
   */
  status?: IpLoadbalancingStatusComponentStatus;
  /**
   * The Load Balancer total component count
   *
   */
  total?: Number;
}
/**
 * The statuses of a Load Balancer component
 */
export interface IpLoadbalancingStatusComponentStatus {
  /**
   * The number of component with status error
   *
   */
  error?: Number;
  /**
   * The number of component with status ok
   *
   */
  ok?: Number;
  /**
   * The number of component with status unknown
   *
   */
  unknown?: Number;
  /**
   * The number of component with status warn
   *
   */
  warn?: Number;
}
/**
 * Possible values for a Load Balancer status
 */
export type IpLoadbalancingStatusEnum = 'error' | 'ok' | 'unknown' | 'warn';
/**
 * The status of a Load Balancer service
 */
export interface IpLoadbalancingStatusService {
  /**
   * The status of your Load Balancer billing domain
   *
   */
  status?: IpLoadbalancingStatusEnum;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
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
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * All future uses you can provide for a service termination
 */
export type ServiceTerminationFutureUseEnum = 'NOT_REPLACING_SERVICE' | 'OTHER' | 'SUBSCRIBE_AN_OTHER_SERVICE' | 'SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR' | 'SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR';
/**
 * All reasons you can provide for a service termination
 */
export type ServiceTerminationReasonEnum = 'FEATURES_DONT_SUIT_ME' | 'LACK_OF_PERFORMANCES' | 'MIGRATED_TO_ANOTHER_OVH_PRODUCT' | 'MIGRATED_TO_COMPETITOR' | 'NOT_NEEDED_ANYMORE' | 'NOT_RELIABLE' | 'NO_ANSWER' | 'OTHER' | 'TOO_EXPENSIVE' | 'TOO_HARD_TO_USE' | 'UNSATIFIED_BY_CUSTOMER_SUPPORT';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsIpLoadbalancingGET = '/ipLoadbalancing' | 
'/ipLoadbalancing/availableZones' | 
'/ipLoadbalancing/{serviceName}' | 
'/ipLoadbalancing/{serviceName}/availableFarmProbes' | 
'/ipLoadbalancing/{serviceName}/availableFarmType' | 
'/ipLoadbalancing/{serviceName}/availableFrontendType' | 
'/ipLoadbalancing/{serviceName}/availableRouteActions' | 
'/ipLoadbalancing/{serviceName}/availableRouteRules' | 
'/ipLoadbalancing/{serviceName}/definedFarms' | 
'/ipLoadbalancing/{serviceName}/definedFrontends' | 
'/ipLoadbalancing/{serviceName}/definedRoutes' | 
'/ipLoadbalancing/{serviceName}/failover' | 
'/ipLoadbalancing/{serviceName}/http/farm' | 
'/ipLoadbalancing/{serviceName}/http/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server' | 
'/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/http/frontend' | 
'/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/http/route' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}' | 
'/ipLoadbalancing/{serviceName}/instancesState' | 
'/ipLoadbalancing/{serviceName}/natIp' | 
'/ipLoadbalancing/{serviceName}/pendingChanges' | 
'/ipLoadbalancing/{serviceName}/quota' | 
'/ipLoadbalancing/{serviceName}/quota/{zone}' | 
'/ipLoadbalancing/{serviceName}/quotaHistory' | 
'/ipLoadbalancing/{serviceName}/quotaHistory/{id}' | 
'/ipLoadbalancing/{serviceName}/serviceInfos' | 
'/ipLoadbalancing/{serviceName}/ssl' | 
'/ipLoadbalancing/{serviceName}/ssl/{id}' | 
'/ipLoadbalancing/{serviceName}/status' | 
'/ipLoadbalancing/{serviceName}/task' | 
'/ipLoadbalancing/{serviceName}/task/{id}' | 
'/ipLoadbalancing/{serviceName}/tcp/farm' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/tcp/frontend' | 
'/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/tcp/route' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}' | 
'/ipLoadbalancing/{serviceName}/udp/farm' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/udp/frontend' | 
'/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/vrack/network' | 
'/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}' | 
'/ipLoadbalancing/{serviceName}/vrack/networkCreationRules' | 
'/ipLoadbalancing/{serviceName}/vrack/status' | 
'/ipLoadbalancing/{serviceName}/zone' | 
'/ipLoadbalancing/{serviceName}/zone/{name}';

type PathsIpLoadbalancingPUT = '/ipLoadbalancing/{serviceName}' | 
'/ipLoadbalancing/{serviceName}/http/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}' | 
'/ipLoadbalancing/{serviceName}/quota/{zone}' | 
'/ipLoadbalancing/{serviceName}/serviceInfos' | 
'/ipLoadbalancing/{serviceName}/ssl/{id}' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}';

type PathsIpLoadbalancingPOST = '/ipLoadbalancing/{serviceName}/changeContact' | 
'/ipLoadbalancing/{serviceName}/confirmTermination' | 
'/ipLoadbalancing/{serviceName}/freeCertificate' | 
'/ipLoadbalancing/{serviceName}/http/farm' | 
'/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server' | 
'/ipLoadbalancing/{serviceName}/http/frontend' | 
'/ipLoadbalancing/{serviceName}/http/route' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule' | 
'/ipLoadbalancing/{serviceName}/refresh' | 
'/ipLoadbalancing/{serviceName}/ssl' | 
'/ipLoadbalancing/{serviceName}/tcp/farm' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server' | 
'/ipLoadbalancing/{serviceName}/tcp/frontend' | 
'/ipLoadbalancing/{serviceName}/tcp/route' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule' | 
'/ipLoadbalancing/{serviceName}/terminate' | 
'/ipLoadbalancing/{serviceName}/udp/farm' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server' | 
'/ipLoadbalancing/{serviceName}/udp/frontend' | 
'/ipLoadbalancing/{serviceName}/vrack/network' | 
'/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId' | 
'/ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination' | 
'/ipLoadbalancing/{serviceName}/zone/{name}/terminate';

type PathsIpLoadbalancingDELETE = '/ipLoadbalancing/{serviceName}/http/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}' | 
'/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}' | 
'/ipLoadbalancing/{serviceName}/ssl/{id}' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}' | 
'/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}' | 
'/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}' | 
'/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}' | 
'/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}';

export class ApiIpLoadbalancing extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Operations about the IPLB service
  List available services
  **/
  public get(path: '/ipLoadbalancing'): Promise<string[]>;
  /**
  List of zone available for an IP load balancing
  List of zone available for an IP load balancing
  **/
  public get(path: '/ipLoadbalancing/availableZones'): Promise<string[]>;
  /**
  Your IP load balancing
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}', pathParams: {serviceName: string}): Promise<IpLoadbalancingIp>;
  /**
  availableFarmProbes operations
  Available farm probes for health checks
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/availableFarmProbes', pathParams: {serviceName: string}): Promise<IpLoadbalancingFarmAvailableProbe[]>;
  /**
  availableFarmType operations
  Available farm types
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/availableFarmType', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  availableFrontendType operations
  Available frontend type
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/availableFrontendType', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  availableRouteActions operations
  Available route actions
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/availableRouteActions', pathParams: {serviceName: string}): Promise<IpLoadbalancingRouteAvailableAction[]>;
  /**
  availableRouteRules operations
  Available route match rules
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/availableRouteRules', pathParams: {serviceName: string}): Promise<IpLoadbalancingRouteAvailableRule[]>;
  /**
  definedFarms operations
  List of defined farms, and whether they are HTTP, TCP or UDP
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/definedFarms', pathParams: {serviceName: string}, queryParams: {vrackNetworkId?: Number}): Promise<IpLoadbalancingDefinedFarm[]>;
  /**
  definedFrontends operations
  List of defined frontends, and whether they are HTTP, TCP or UDP
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/definedFrontends', pathParams: {serviceName: string}): Promise<IpLoadbalancingDefinedFrontend[]>;
  /**
  definedRoutes operations
  List of defined routes, and whether they are HTTP or TCP
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/definedRoutes', pathParams: {serviceName: string}): Promise<IpLoadbalancingDefinedRoute[]>;
  /**
  failover operations
  List all failover ip routed to this IPLB
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/failover', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  List the ipLoadbalancing.backendHttp.BackendHttp objects
  HTTP Farm for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm', pathParams: {serviceName: string}, queryParams: {vrackNetworkId?: Number, zone?: string}): Promise<Number[]>;
  /**
  HTTP Farm
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<IpLoadbalancingBackendHttpBackendHttp>;
  /**
  List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects
  HTTP Farm's Servers
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server', pathParams: {serviceName: string, farmId: Number}, queryParams: {address?: string, cookie?: string, status?: IpLoadbalancingBackendCustomerServerStatusEnum}): Promise<Number[]>;
  /**
  HTTP Farm's Server
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer>;
  /**
  List the ipLoadbalancing.frontendHttp.FrontendHttp objects
  HTTP frontends for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/frontend', pathParams: {serviceName: string}, queryParams: {defaultFarmId?: Number, port?: string, zone?: string}): Promise<Number[]>;
  /**
  Frontend HTTP
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<IpLoadbalancingFrontendHttpFrontendHttp>;
  /**
  List the ipLoadbalancing.RouteHttp.RouteHttp objects
  HTTP routes for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/route', pathParams: {serviceName: string}, queryParams: {frontendId?: Number}): Promise<Number[]>;
  /**
  HTTP Route
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}', pathParams: {serviceName: string, routeId: Number}): Promise<IpLoadbalancingRouteHttpRouteHttp>;
  /**
  List the ipLoadbalancing.RouteRule.RouteRule objects
  HTTP routes for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule', pathParams: {serviceName: string, routeId: Number}): Promise<Number[]>;
  /**
  Rule of a route
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}', pathParams: {serviceName: string, routeId: Number, ruleId: Number}): Promise<IpLoadbalancingRouteRuleRouteRule>;
  /**
  instancesState operations
  Get the effective state of your IPLB instances on IPLB servers
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/instancesState', pathParams: {serviceName: string}): Promise<IpLoadbalancingInstancesState[]>;
  /**
  natIp operations
  Ip subnet used by OVH to nat requests on your IPLB to your backends. You must ensure that your backends are not part of a network that overlap with this one
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/natIp', pathParams: {serviceName: string}): Promise<IpLoadbalancingNatIps[]>;
  /**
  pendingChanges operations
  List the pending changes on your Load Balancer configuration, per zone
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/pendingChanges', pathParams: {serviceName: string}): Promise<IpLoadbalancingPendingChanges[]>;
  /**
  List the ipLoadbalancing.Quota.Quota objects
  Available quota informations for current billing period per zone
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/quota', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Quota informations for current billing period for this zone
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/quota/{zone}', pathParams: {serviceName: string, zone: string}): Promise<IpLoadbalancingQuotaQuota>;
  /**
  List the ipLoadbalancing.QuotaHistory.QuotaHistory objects
  Quota history informations, per month
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/quotaHistory', pathParams: {serviceName: string}, queryParams: {'historizedDate.from'?: string, 'historizedDate.to'?: string, zone?: string}): Promise<Number[]>;
  /**
  QuotaHistory
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/quotaHistory/{id}', pathParams: {serviceName: string, id: Number}): Promise<IpLoadbalancingQuotaHistoryQuotaHistory>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the ipLoadbalancing.Ssl.Ssl objects
  Ssl for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/ssl', pathParams: {serviceName: string}, queryParams: {fingerprint?: string, serial?: string, type?: IpLoadbalancingSslTypeEnum}): Promise<Number[]>;
  /**
  Ssl
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/ssl/{id}', pathParams: {serviceName: string, id: Number}): Promise<IpLoadbalancingSslSsl>;
  /**
  status operations
  Get the global status of your IPLB
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/status', pathParams: {serviceName: string}): Promise<IpLoadbalancingStatus>;
  /**
  List the ipLoadbalancing.Task.Task objects
  Task for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/task', pathParams: {serviceName: string}, queryParams: {action?: IpLoadbalancingTaskActionEnum, 'creationDate.from'?: string, 'creationDate.to'?: string, 'doneDate.from'?: string, 'doneDate.to'?: string, status?: IpLoadbalancingTaskStatusEnum}): Promise<Number[]>;
  /**
  IP Load Balancing Operations
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/task/{id}', pathParams: {serviceName: string, id: Number}): Promise<IpLoadbalancingTaskTask>;
  /**
  List the ipLoadbalancing.backendTcp.BackendTcp objects
  TCP Farm for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm', pathParams: {serviceName: string}, queryParams: {vrackNetworkId?: Number, zone?: string}): Promise<Number[]>;
  /**
  TCP Farm
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<IpLoadbalancingBackendTcpBackendTcp>;
  /**
  List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects
  TCP Farm's Servers
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server', pathParams: {serviceName: string, farmId: Number}, queryParams: {address?: string, status?: IpLoadbalancingBackendCustomerServerStatusEnum}): Promise<Number[]>;
  /**
  TCP Farm's Server
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<IpLoadbalancingBackendTcpCustomerServerBackendTCPServer>;
  /**
  List the ipLoadbalancing.frontendTcp.FrontendTcp objects
  TCP frontends for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/frontend', pathParams: {serviceName: string}, queryParams: {defaultFarmId?: Number, port?: string, zone?: string}): Promise<Number[]>;
  /**
  Frontend TCP
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<IpLoadbalancingFrontendTcpFrontendTcp>;
  /**
  List the ipLoadbalancing.RouteTcp.RouteTcp objects
  TCP routes for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route', pathParams: {serviceName: string}, queryParams: {frontendId?: Number}): Promise<Number[]>;
  /**
  TCP Route
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}', pathParams: {serviceName: string, routeId: Number}): Promise<IpLoadbalancingRouteTcpRouteTcp>;
  /**
  List the ipLoadbalancing.RouteRule.RouteRule objects
  HTTP routes for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule', pathParams: {serviceName: string, routeId: Number}): Promise<Number[]>;
  /**
  Rule of a route
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}', pathParams: {serviceName: string, routeId: Number, ruleId: Number}): Promise<IpLoadbalancingRouteRuleRouteRule>;
  /**
  List the ipLoadbalancing.backendUdp.BackendUdp objects
  UDP Farm for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm', pathParams: {serviceName: string}, queryParams: {vrackNetworkId?: Number, zone?: string}): Promise<Number[]>;
  /**
  UDP Farm
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<IpLoadbalancingBackendUdpBackendUdp>;
  /**
  List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects
  UDP Farm's Servers
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server', pathParams: {serviceName: string, farmId: Number}, queryParams: {address?: string, status?: IpLoadbalancingBackendCustomerServerStatusEnum}): Promise<Number[]>;
  /**
  UDP Farm's Server
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<IpLoadbalancingBackendUdpCustomerServerBackendUDPServer>;
  /**
  List the ipLoadbalancing.frontendUdp.FrontendUdp objects
  UDP frontends for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/udp/frontend', pathParams: {serviceName: string}, queryParams: {defaultFarmId?: Number, port?: string, zone?: string}): Promise<Number[]>;
  /**
  Frontend UDP
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<IpLoadbalancingFrontendUdpFrontendUdp>;
  /**
  List the ipLoadbalancing.VrackNetwork.VrackNetwork objects
  Descriptions of private networks in the vRack attached to this Load Balancer
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/network', pathParams: {serviceName: string}, queryParams: {subnet?: string, vlan?: Number}): Promise<Number[]>;
  /**
  Represents a private network in the vRack
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}', pathParams: {serviceName: string, vrackNetworkId: Number}): Promise<IpLoadbalancingVrackNetworkVrackNetwork>;
  /**
  networkCreationRules operations
  Rules to create a network attached to a vrack
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/networkCreationRules', pathParams: {serviceName: string}): Promise<IpLoadbalancingVrackNetworkCreationRules>;
  /**
  status operations
  Information about vRack for your Load Balancer
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/vrack/status', pathParams: {serviceName: string}): Promise<IpLoadbalancingVrackInformation>;
  /**
  List the ipLoadbalancing.Zone.Zone objects
  Zone for this iplb
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/zone', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  IP Load Balancing Zone
  Get this object properties
  **/
  public get(path: '/ipLoadbalancing/{serviceName}/zone/{name}', pathParams: {serviceName: string, name: string}): Promise<IpLoadbalancingZoneZone>;
  public get(path: PathsIpLoadbalancingGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Your IP load balancing
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  HTTP Farm
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<void>;
  /**
  HTTP Farm's Server
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<void>;
  /**
  Frontend HTTP
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<void>;
  /**
  HTTP Route
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}', pathParams: {serviceName: string, routeId: Number}): Promise<void>;
  /**
  Rule of a route
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}', pathParams: {serviceName: string, routeId: Number, ruleId: Number}): Promise<void>;
  /**
  Quota informations for current billing period for this zone
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/quota/{zone}', pathParams: {serviceName: string, zone: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Ssl
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/ssl/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  TCP Farm
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<void>;
  /**
  TCP Farm's Server
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<void>;
  /**
  Frontend TCP
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<void>;
  /**
  TCP Route
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}', pathParams: {serviceName: string, routeId: Number}): Promise<void>;
  /**
  Rule of a route
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}', pathParams: {serviceName: string, routeId: Number, ruleId: Number}): Promise<void>;
  /**
  UDP Farm
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<void>;
  /**
  UDP Farm's Server
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<void>;
  /**
  Frontend UDP
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<void>;
  /**
  Represents a private network in the vRack
  Alter this object properties
  **/
  public put(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}', pathParams: {serviceName: string, vrackNetworkId: Number}): Promise<void>;
  public put(path: PathsIpLoadbalancingPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  freeCertificate operations
  Order a free certificate. We order and deliver it for you
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/freeCertificate', pathParams: {serviceName: string}): Promise<IpLoadbalancingTaskTask>;
  /**
  List the ipLoadbalancing.backendHttp.BackendHttp objects
  Add a new HTTP Farm on your IP Load Balancing
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/http/farm', pathParams: {serviceName: string}): Promise<IpLoadbalancingBackendHttpBackendHttp>;
  /**
  List the ipLoadbalancing.backendHttpCustomerServer.BackendHTTPServer objects
  Add a server to an HTTP Farm
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server', pathParams: {serviceName: string, farmId: Number}): Promise<IpLoadbalancingBackendHttpCustomerServerBackendHTTPServer>;
  /**
  List the ipLoadbalancing.frontendHttp.FrontendHttp objects
  Add a new http frontend on your IP Load Balancing
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/http/frontend', pathParams: {serviceName: string}): Promise<IpLoadbalancingFrontendHttpFrontendHttp>;
  /**
  List the ipLoadbalancing.RouteHttp.RouteHttp objects
  Add a new HTTP route to your frontend
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/http/route', pathParams: {serviceName: string}): Promise<IpLoadbalancingRouteHttpRouteHttp>;
  /**
  List the ipLoadbalancing.RouteRule.RouteRule objects
  Add a new rule to your route
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule', pathParams: {serviceName: string, routeId: Number}): Promise<IpLoadbalancingRouteRuleRouteRule>;
  /**
  refresh operations
  Apply the configuration to your iplb
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/refresh', pathParams: {serviceName: string}): Promise<IpLoadbalancingTaskTask>;
  /**
  List the ipLoadbalancing.Ssl.Ssl objects
  Add a new custom SSL certificate on your IP Load Balancing
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<IpLoadbalancingSslSsl>;
  /**
  List the ipLoadbalancing.backendTcp.BackendTcp objects
  Add a new TCP Farm on your IP Load Balancing
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/farm', pathParams: {serviceName: string}): Promise<IpLoadbalancingBackendTcpBackendTcp>;
  /**
  List the ipLoadbalancing.backendTcpCustomerServer.BackendTCPServer objects
  Add a server to a TCP Farm
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server', pathParams: {serviceName: string, farmId: Number}): Promise<IpLoadbalancingBackendTcpCustomerServerBackendTCPServer>;
  /**
  List the ipLoadbalancing.frontendTcp.FrontendTcp objects
  Add a new TCP frontend on your IP Load Balancing
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/frontend', pathParams: {serviceName: string}): Promise<IpLoadbalancingFrontendTcpFrontendTcp>;
  /**
  List the ipLoadbalancing.RouteTcp.RouteTcp objects
  Add a new TCP route to your frontend
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/route', pathParams: {serviceName: string}): Promise<IpLoadbalancingRouteTcpRouteTcp>;
  /**
  List the ipLoadbalancing.RouteRule.RouteRule objects
  Add a new rule to your route
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule', pathParams: {serviceName: string, routeId: Number}): Promise<IpLoadbalancingRouteRuleRouteRule>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  List the ipLoadbalancing.backendUdp.BackendUdp objects
  Add a new UDP Farm on your IP Load Balancing
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/udp/farm', pathParams: {serviceName: string}): Promise<IpLoadbalancingBackendUdpBackendUdp>;
  /**
  List the ipLoadbalancing.backendUdpCustomerServer.BackendUDPServer objects
  Add a server to an UDP Farm
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server', pathParams: {serviceName: string, farmId: Number}): Promise<IpLoadbalancingBackendUdpCustomerServerBackendUDPServer>;
  /**
  List the ipLoadbalancing.frontendUdp.FrontendUdp objects
  Add a new UDP frontend on your IP Load Balancing
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/udp/frontend', pathParams: {serviceName: string}): Promise<IpLoadbalancingFrontendUdpFrontendUdp>;
  /**
  List the ipLoadbalancing.VrackNetwork.VrackNetwork objects
  Add a description of a private network in the attached vRack
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/vrack/network', pathParams: {serviceName: string}): Promise<IpLoadbalancingVrackNetworkVrackNetwork>;
  /**
  updateFarmId operations
  Update farm attached to that vrack network id
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId', pathParams: {serviceName: string, vrackNetworkId: Number}): Promise<IpLoadbalancingVrackNetworkVrackNetwork>;
  /**
  cancelTermination operations
  Cancel the termination request of your service zone option
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination', pathParams: {serviceName: string, name: string}): Promise<void>;
  /**
  terminate operations
  Terminate your service zone option
  **/
  public post(path: '/ipLoadbalancing/{serviceName}/zone/{name}/terminate', pathParams: {serviceName: string, name: string}): Promise<void>;
  public post(path: PathsIpLoadbalancingPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  HTTP Farm
  Delete an HTTP Farm
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<void>;
  /**
  HTTP Farm's Server
  Delete a server from an HTTP Farm
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<void>;
  /**
  Frontend HTTP
  Delete an HTTP frontend
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/http/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<void>;
  /**
  HTTP Route
  Delete this HTTP route
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}', pathParams: {serviceName: string, routeId: Number}): Promise<void>;
  /**
  Rule of a route
  Delete this rule from the route
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}', pathParams: {serviceName: string, routeId: Number, ruleId: Number}): Promise<void>;
  /**
  Ssl
  Delete a custom SSL certificate
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/ssl/{id}', pathParams: {serviceName: string, id: Number}): Promise<void>;
  /**
  TCP Farm
  Delete a TCP Farm
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<void>;
  /**
  TCP Farm's Server
  Delete a server from a TCP Farm
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<void>;
  /**
  Frontend TCP
  Delete an TCP frontend
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<void>;
  /**
  TCP Route
  Delete this TCP route
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}', pathParams: {serviceName: string, routeId: Number}): Promise<void>;
  /**
  Rule of a route
  Delete this rule from the route
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}', pathParams: {serviceName: string, routeId: Number, ruleId: Number}): Promise<void>;
  /**
  UDP Farm
  Delete an UDP Farm
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}', pathParams: {serviceName: string, farmId: Number}): Promise<void>;
  /**
  UDP Farm's Server
  Delete a server from an UDP Farm
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}', pathParams: {serviceName: string, farmId: Number, serverId: Number}): Promise<void>;
  /**
  Frontend UDP
  Delete an UDP frontend
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}', pathParams: {serviceName: string, frontendId: Number}): Promise<void>;
  /**
  Represents a private network in the vRack
  Delete this description of a private network in the vRack. It must not be used by any farm server
  **/
  public delete(path: '/ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}', pathParams: {serviceName: string, vrackNetworkId: Number}): Promise<void>;
  public delete(path: PathsIpLoadbalancingDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
