import { ApiCommon } from '@ovh-api/common';
/**
 * Start and end points (inclusive) of a range
 */
export interface ComplexTypeRange<T> {
  /**
   * Start point of the range
   *
   */
  from?: T;
  /**
   * End point of the range
   *
   */
  to?: T;
}
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Phishing URLs hosted on your IP
 */
export interface IpAntiphishing {
  /**
   * Date of the event
   *
   */
  creationDate?: string;
  /**
   * Internal ID of the phishing entry
   *
   */
  id?: Number;
  /**
   * IP address hosting the phishing URL
   *
   */
  ipOnAntiphishing?: string;
  /**
   * Current state of the phishing
   *
   */
  state?: IpAntiphishingStateEnum;
  /**
   * Phishing URL
   *
   */
  urlPhishing?: string;
}
/**
 * Possible values for antiphishing state
 */
export type IpAntiphishingStateEnum = 'blocked' | 'blocking' | 'unblocked' | 'unblocking';
/**
 * ARP blocked IP information
 */
export interface IpArpBlockedIp {
  /**
   * The last blocking date
   *
   */
  blockedSince?: string;
  /**
   * your IP
   *
   */
  ipBlocked?: string;
  /**
   * ARP logs
   *
   */
  logs?: string;
  /**
   * this IP address state
   *
   */
  state?: IpArpStateEnum;
  /**
   * Time (in seconds) remaining before you can request your IP to be unblocked
   *
   */
  time?: Number;
}
/**
 * Possible values for IP state
 */
export type IpArpStateEnum = 'blocked' | 'unblocking';
/**
 * Blocked IP information
 */
export interface IpBlockedIp {
  /**
   * The last blocking date
   *
   */
  blockedSince?: string;
  /**
   * your IP
   *
   */
  ipBlocked?: string;
  /**
   * Logs
   *
   */
  logs?: string;
  /**
   * this IP address state
   *
   */
  state?: IpBlockedIpStateEnum;
  /**
   * Time (in seconds) remaining before you can request your IP to be unblocked
   *
   */
  time?: Number;
}
/**
 * Possible values for IP state
 */
export type IpBlockedIpStateEnum = 'blocked' | 'unblocking';
/**
 * A structure given service and its nexthops as a destination for failover ips
 */
export interface IpDestination {
  /**
   * Nexthops available on this service
   *
   */
  nexthop?: string[];
  /**
   * Service destination
   *
   */
  service?: string;
}
/**
 * A structure given all services allowed as a destination for this ip
 */
export interface IpDestinations {
  /**
   * list of public cloud projects
   *
   */
  cloudProject?: IpDestination[];
  /**
   * list of dedicated clouds
   *
   */
  dedicatedCloud?: IpDestination[];
  /**
   * list of dedicated servers
   *
   */
  dedicatedServer?: IpDestination[];
  /**
   * list of hosting reseller services
   *
   */
  hostingReseller?: IpDestination[];
  /**
   * list of load balancing services
   *
   */
  ipLoadbalancing?: IpDestination[];
  /**
   * list of vps
   *
   */
  vps?: IpDestination[];
}
/**
 * Possible values for action
 */
export type IpFirewallActionEnum = 'deny' | 'permit';
/**
 * Your IP on firewall
 */
export interface IpFirewallIp {
  /**
   */
  enabled?: boolean;
  /**
   */
  ipOnFirewall?: string;
  /**
   * Current state of your ip on firewall
   *
   */
  state?: IpFirewallStateEnum;
}
/**
 * Rule on ip
 */
export interface IpFirewallNetworkRule {
  /**
   * Action on this rule
   *
   */
  action?: IpFirewallActionEnum;
  /**
   */
  creationDate?: string;
  /**
   * Destination ip for your rule
   *
   */
  destination?: string;
  /**
   * Destination port range for your rule. Only with TCP/UDP protocol
   *
   */
  destinationPort?: string;
  /**
   * Fragments option
   *
   */
  fragments?: boolean;
  /**
   * Network protocol
   *
   */
  protocol?: IpFirewallProtocolEnum;
  /**
   */
  rule?: string;
  /**
   */
  sequence?: Number;
  /**
   * Source ip for your rule
   *
   */
  source?: string;
  /**
   * Source port range for your rule. Only with TCP/UDP protocol
   *
   */
  sourcePort?: string;
  /**
   * Current state of your rule
   *
   */
  state?: IpFirewallRuleStateEnum;
  /**
   * TCP option on your rule
   *
   */
  tcpOption?: string;
}
/**
 * Possible option for TCP
 */
export interface IpFirewallOptionTCP {
  /**
   * TCP fragments
   *
   */
  fragments?: boolean;
  /**
   * TCP option
   *
   */
  option?: IpFirewallTCPOptionEnum;
}
/**
 * Possible values for protocol
 */
export type IpFirewallProtocolEnum = 'ah' | 'esp' | 'gre' | 'icmp' | 'ipv4' | 'tcp' | 'udp';
/**
 * Possible values for firewall rule state
 */
export type IpFirewallRuleStateEnum = 'creationPending' | 'ok' | 'removalPending';
/**
 * Possible values for action
 */
export type IpFirewallSequenceRangeEnum = 0 | 1 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * Possible values for firewall ip state
 */
export type IpFirewallStateEnum = 'disableFirewallPending' | 'enableFirewallPending' | 'ok';
/**
 * Possible values for TCP option - only for TCP protocol
 */
export type IpFirewallTCPOptionEnum = 'established' | 'syn';
/**
 * GAME Anti-DDoS
 */
export interface IpGameMitigation {
  /**
   * Firewall mode : in UDP, only allow traffic matching your rules (as well as established traffic). If not enabled, traffic to ports not defined in your rules will be permited. TCP traffic is unaffected by this.
   *
   */
  firewallModeEnabled?: boolean;
  /**
   */
  ipOnGame?: string;
  /**
   */
  state?: IpGameMitigationStateEnum;
}
/**
 * Rule on ip:ports
 */
export interface IpGameMitigationRule {
  /**
   * ID of the rule
   *
   */
  id?: Number;
  /**
   */
  ports?: ComplexTypeRange<Number>;
  /**
   */
  protocol?: IpGameMitigationRuleProtocolEnum;
  /**
   * Current state of your rule
   *
   */
  state?: IpGameMitigationRuleStateEnum;
}
/**
 * Possible values for game rule protocol
 */
export type IpGameMitigationRuleProtocolEnum = 'arkSurvivalEvolved' | 'arma' | 'gtaMultiTheftAutoSanAndreas' | 'gtaSanAndreasMultiplayerMod' | 'hl2Source' | 'minecraftPocketEdition' | 'minecraftQuery' | 'mumble' | 'other' | 'rust' | 'teamspeak2' | 'teamspeak3' | 'trackmaniaShootmania';
/**
 * Possible values for game mitigation rule state
 */
export type IpGameMitigationRuleStateEnum = 'createRulePending' | 'deleteRulePending' | 'ok';
/**
 * Possible values for udp mitigation rule state
 */
export type IpGameMitigationStateEnum = 'firewallModeDisablePending' | 'firewallModeEnablePending' | 'ok';
/**
 * Your IP
 */
export interface IpIp {
  /**
   */
  canBeTerminated?: boolean;
  /**
   */
  country?: CoreTypesCountryEnum;
  /**
   * Custom description on your ip
   *
   */
  description?: string;
  /**
   */
  ip?: string;
  /**
   * IP block organisation Id
   *
   */
  organisationId?: string;
  /**
   * Routage information
   *
   */
  routedTo?: IpRoutedTo;
  /**
   */
  type?: IpIpTypeEnum;
}
/**
 * IP migration to OVH
 */
export interface IpIpMigrationToken {
  /**
   * destination customer ID
   *
   */
  customerId?: string;
  /**
   * migration token
   *
   */
  token?: string;
}
/**
 * IP tasks
 */
export interface IpIpTask {
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Destination for moveFloatingIp tasks
   *
   */
  destination?: IpRoutedTo;
  /**
   * Completion date
   *
   */
  doneDate?: string;
  /**
   * Function name
   *
   */
  function?: IpTaskFunctionEnum;
  /**
   * last update
   *
   */
  lastUpdate?: string;
  /**
   * Task Creation date
   *
   */
  startDate?: string;
  /**
   * Task status
   *
   */
  status?: IpTaskStatusEnum;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
}
/**
 * Possible values for ip type
 */
export type IpIpTypeEnum = 'cdn' | 'cloud' | 'dedicated' | 'failover' | 'hosted_ssl' | 'housing' | 'loadBalancing' | 'mail' | 'overthebox' | 'pcc' | 'pci' | 'private' | 'vpn' | 'vps' | 'vrack' | 'xdsl';
/**
 * Additional available ports for ip loadbalancing
 */
export type IpLoadBalancingAdditionalPortEnum = 3306 | 443 | 5432 | 80;
/**
 * Backends attached to your IP load balancing
 */
export interface IpLoadBalancingBackendIp {
  /**
   * IP of your backend
   *
   */
  backend?: string;
  /**
   * If the backend has been configured as backup, this field contains the ip of the main backend
   *
   */
  mainBackendIp?: string;
  /**
   * Probe used for your backend
   *
   */
  probe?: IpLoadBalancingBackendProbeEnum;
  /**
   * Weight of the backend on its zone, must be between 1 and 100, default is 8
   *
   */
  weight?: Number;
  /**
   * Location where your service is
   *
   */
  zone?: IpLoadBalancingZoneEnum;
}
/**
 * Possible values for your IP load balancing backend probe
 */
export type IpLoadBalancingBackendProbeEnum = 'http' | 'icmp' | 'none' | 'oco';
/**
 * Your load balancing IP
 */
export interface IpLoadBalancingIp {
  /**
   * Your IP load balancing
   *
   */
  ipLoadBalancing?: string;
  /**
   * The internal name of your IP load balancing
   *
   */
  serviceName?: string;
  /**
   * Ssl activation state
   *
   */
  ssl?: IpLoadBalancingSslEnum;
  /**
   * Current state of your IP
   *
   */
  state?: IpLoadBalancingStateEnum;
  /**
   * The type of stickiness currently in place on your Ip LoadBalancing
   *
   */
  stickiness?: IpLoadBalancingStickinessEnum;
  /**
   * Location where your service is
   *
   */
  zone?: IpLoadBalancingZoneEnum[];
}
/**
 * LoadBalancingPort mapping
 */
export interface IpLoadBalancingIpLoadBalancingPort {
  /**
   */
  dstPort?: Number;
  /**
   */
  srcPort?: IpLoadBalancingAdditionalPortEnum;
}
/**
 * Possible values for ssl state
 */
export type IpLoadBalancingSslEnum = 'customer' | 'none' | 'ovh';
/**
 * Possible values for load balancing IP state
 */
export type IpLoadBalancingStateEnum = 'blacklisted' | 'deleted' | 'free' | 'ok' | 'quarantined' | 'suspended';
/**
 * Possible values for load balancing IP stickiness
 */
export type IpLoadBalancingStickinessEnum = 'cookie' | 'none' | 'sourceIp';
/**
 * List of tasks associated with your IP load balancing
 */
export interface IpLoadBalancingTask {
  /**
   * The action made
   *
   */
  action?: IpLoadBalancingTaskActionEnum;
  /**
   * Creation date of your task
   *
   */
  creationDate?: string;
  /**
   * Identifier of your task
   *
   */
  id?: Number;
  /**
   * Current status of your task
   *
   */
  status?: string;
}
/**
 * Possible values for load balancing task action
 */
export type IpLoadBalancingTaskActionEnum = 'activateSsl' | 'addBackend' | 'addIpToBackend' | 'announceIpLoadBalancing' | 'backupStateSet' | 'backupStateUnset' | 'changeProbe' | 'delBackend' | 'desactivateSsl' | 'removeIpFromBackend' | 'setPortRedirection' | 'setStickiness' | 'setWeight' | 'unannounceIpLoadBalancing' | 'unsetPortRedirection';
/**
 * Possible values for load balancing IP service location
 */
export type IpLoadBalancingZoneEnum = 'bhs' | 'gra' | 'rbx' | 'sbg';
/**
 * Mitigation attack on your ip
 */
export interface IpMitigationAttack {
  /**
   * End of the attack
   *
   */
  endDate?: string;
  /**
   * Internal id of your attack
   *
   */
  idAttack?: Number;
  /**
   * Your ip
   *
   */
  ipAttack?: string;
  /**
   * Start of the attack
   *
   */
  startDate?: string;
}
/**
 * Detailed statistics about your traffic
 */
export interface IpMitigationDetailedStats {
  /**
   * Traffic dest port
   *
   */
  destPort?: Number;
  /**
   */
  fragments?: boolean;
  /**
   * ICMP protocol code
   *
   */
  icmpCode?: Number;
  /**
   * ICMP protocol type
   *
   */
  icmpType?: Number;
  /**
   * Traffic in
   *
   */
  in?: IpMitigationTraffic;
  /**
   * Traffic out
   *
   */
  out?: IpMitigationTraffic;
  /**
   * Used protocol. See RFC5237 for more information
   *
   */
  protocol?: Number;
  /**
   * Traffic source port
   *
   */
  srcPort?: Number;
  /**
   */
  syn?: boolean;
}
/**
 * Your IP on mitigation
 */
export interface IpMitigationIp {
  /**
   * Set on true if your ip is on auto-mitigation
   *
   */
  auto?: boolean;
  /**
   */
  ipOnMitigation?: string;
  /**
   * Set on true if your ip is on permanent mitigation
   *
   */
  permanent?: boolean;
  /**
   * Current state of your ip on mitigation
   *
   */
  state?: IpMitigationStateEnum;
}
/**
 * Mitigation profile for your ip
 */
export interface IpMitigationProfile {
  /**
   * Delay to wait before remove ip from auto mitigation after an attack
   *
   */
  autoMitigationTimeOut?: IpMitigationProfileAutoMitigationTimeOutEnum;
  /**
   */
  ipMitigationProfile?: string;
  /**
   * Current state of your mitigation profile
   *
   */
  state?: IpMitigationProfileStateEnum;
}
/**
 * Possible values for auto mitigation timeout (minutes)
 */
export type IpMitigationProfileAutoMitigationTimeOutEnum = 0 | 15 | 1560 | 360 | 60;
/**
 * Possible values for mitigation profile state
 */
export type IpMitigationProfileStateEnum = 'ok' | 'tasksPending';
/**
 * Possible values for mitigation state
 */
export type IpMitigationStateEnum = 'creationPending' | 'ok' | 'removalPending';
/**
 * Traffic statistics in and out on a mitigated ip
 */
export interface IpMitigationStats {
  /**
   * Traffic in
   *
   */
  in?: IpMitigationTraffic;
  /**
   * Traffic out
   *
   */
  out?: IpMitigationTraffic;
  /**
   * Traffic timestamp
   *
   */
  timestamp?: Number;
}
/**
 * Possible aggregation scale on statistics
 */
export type IpMitigationStatsScaleEnum = '10s' | '1m' | '5m';
/**
 * Traffic on mitigation
 */
export interface IpMitigationTraffic {
  /**
   * Bits per second
   *
   */
  bps?: Number;
  /**
   * Paquets per second
   *
   */
  pps?: Number;
}
/**
 * Your reverse delegations on IPv6 subnet
 */
export interface IpReverseDelegation {
  /**
   * NS target for delegation
   *
   */
  target?: string;
}
/**
 * Your reverse records on IP
 */
export interface IpReverseIp {
  /**
   */
  ipReverse?: string;
  /**
   */
  reverse?: string;
}
/**
 * IP block RIPE informations
 */
export interface IpRipeInfos {
  /**
   */
  description?: string;
  /**
   */
  netname?: string;
}
/**
 * Information about routing
 */
export interface IpRoutedTo {
  /**
   * Service where ip is routed to
   *
   */
  serviceName?: string;
}
/**
 * Your IP linked to service
 */
export interface IpServiceIp {
  /**
   */
  canBeTerminated?: boolean;
  /**
   */
  country?: CoreTypesCountryEnum;
  /**
   * Custom description on your ip
   *
   */
  description?: string;
  /**
   */
  ip?: string;
  /**
   * IP block organisation Id
   *
   */
  organisationId?: string;
  /**
   * Routage information
   *
   */
  routedTo?: IpRoutedTo;
  /**
   */
  type?: IpIpTypeEnum;
}
/**
 * Your IP spam stats
 */
export interface IpSpamIp {
  /**
   * Last date the ip was blocked
   *
   */
  date?: string;
  /**
   * IP address which is sending spam
   *
   */
  ipSpamming?: string;
  /**
   * Current state of the ip
   *
   */
  state?: IpSpamStateEnum;
  /**
   * Time (in seconds) while the IP will be blocked
   *
   */
  time?: Number;
}
/**
 * Possible values for spam state
 */
export type IpSpamStateEnum = 'blockedForSpam' | 'unblocked' | 'unblocking';
/**
 * Spam statistics about an IP address
 */
export interface IpSpamStats {
  /**
   * Average spam score.
   *
   */
  averageSpamscore?: Number;
  /**
   * Detailed list of the spams
   *
   */
  detectedSpams?: IpSpamTarget[];
  /**
   * Number of spams sent
   *
   */
  numberOfSpams?: Number;
  /**
   * Time when the IP address was blocked
   *
   */
  timestamp?: Number;
  /**
   * Number of emails sent
   *
   */
  total?: Number;
}
/**
 * Spam's target information
 */
export interface IpSpamTarget {
  /**
   * Timestamp when the email was sent
   *
   */
  date?: Number;
  /**
   * IP address of the target
   *
   */
  destinationIp?: string;
  /**
   * The message-id of the email
   *
   */
  messageId?: string;
  /**
   * Spam score for the email
   *
   */
  spamscore?: Number;
}
/**
 * different task operation
 */
export type IpTaskFunctionEnum = 'arinBlockReassign' | 'changeRipeOrg' | 'checkAndReleaseIp' | 'genericMoveFloatingIp';
/**
 * different task status
 */
export type IpTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
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
 * Details about a non-expiring Service
 */
export interface ServicesNonExpiringService {
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
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
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
type PathsIpGET = '/ip' | 
'/ip/loadBalancing' | 
'/ip/loadBalancing/{serviceName}' | 
'/ip/loadBalancing/{serviceName}/allowedBackends' | 
'/ip/loadBalancing/{serviceName}/backend' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}' | 
'/ip/loadBalancing/{serviceName}/internalNatIp' | 
'/ip/loadBalancing/{serviceName}/portsRedirection' | 
'/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}' | 
'/ip/loadBalancing/{serviceName}/probeIp' | 
'/ip/loadBalancing/{serviceName}/serviceInfos' | 
'/ip/loadBalancing/{serviceName}/task' | 
'/ip/loadBalancing/{serviceName}/task/{taskId}' | 
'/ip/service' | 
'/ip/service/{serviceName}' | 
'/ip/service/{serviceName}/serviceInfos' | 
'/ip/{ip}' | 
'/ip/{ip}/antihack' | 
'/ip/{ip}/antihack/{ipBlocked}' | 
'/ip/{ip}/arp' | 
'/ip/{ip}/arp/{ipBlocked}' | 
'/ip/{ip}/delegation' | 
'/ip/{ip}/delegation/{target}' | 
'/ip/{ip}/firewall' | 
'/ip/{ip}/firewall/{ipOnFirewall}' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}' | 
'/ip/{ip}/game' | 
'/ip/{ip}/game/{ipOnGame}' | 
'/ip/{ip}/game/{ipOnGame}/rule' | 
'/ip/{ip}/game/{ipOnGame}/rule/{id}' | 
'/ip/{ip}/license/cloudLinux' | 
'/ip/{ip}/license/cpanel' | 
'/ip/{ip}/license/directadmin' | 
'/ip/{ip}/license/plesk' | 
'/ip/{ip}/license/sqlserver' | 
'/ip/{ip}/license/virtuozzo' | 
'/ip/{ip}/license/windows' | 
'/ip/{ip}/license/worklight' | 
'/ip/{ip}/migrationToken' | 
'/ip/{ip}/mitigation' | 
'/ip/{ip}/mitigation/{ipOnMitigation}' | 
'/ip/{ip}/mitigation/{ipOnMitigation}/stats' | 
'/ip/{ip}/mitigation/{ipOnMitigation}/topStream' | 
'/ip/{ip}/mitigationProfiles' | 
'/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' | 
'/ip/{ip}/move' | 
'/ip/{ip}/phishing' | 
'/ip/{ip}/phishing/{id}' | 
'/ip/{ip}/reverse' | 
'/ip/{ip}/reverse/{ipReverse}' | 
'/ip/{ip}/ripe' | 
'/ip/{ip}/spam' | 
'/ip/{ip}/spam/{ipSpamming}' | 
'/ip/{ip}/spam/{ipSpamming}/stats' | 
'/ip/{ip}/task' | 
'/ip/{ip}/task/{taskId}';

type PathsIpPUT = '/ip/loadBalancing/{serviceName}/backend/{backend}' | 
'/ip/loadBalancing/{serviceName}/serviceInfos' | 
'/ip/service/{serviceName}' | 
'/ip/{ip}' | 
'/ip/{ip}/firewall/{ipOnFirewall}' | 
'/ip/{ip}/game/{ipOnGame}' | 
'/ip/{ip}/mitigation/{ipOnMitigation}' | 
'/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' | 
'/ip/{ip}/ripe';

type PathsIpPOST = '/ip/loadBalancing/{serviceName}/backend' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}/backupState' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight' | 
'/ip/loadBalancing/{serviceName}/importCustomSsl' | 
'/ip/loadBalancing/{serviceName}/portsRedirection' | 
'/ip/loadBalancing/{serviceName}/restoreSsl' | 
'/ip/loadBalancing/{serviceName}/stickiness' | 
'/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi' | 
'/ip/service/{serviceName}/changeContact' | 
'/ip/service/{serviceName}/confirmTermination' | 
'/ip/service/{serviceName}/terminate' | 
'/ip/{ip}/antihack/{ipBlocked}/unblock' | 
'/ip/{ip}/arp/{ipBlocked}/unblock' | 
'/ip/{ip}/changeOrg' | 
'/ip/{ip}/delegation' | 
'/ip/{ip}/firewall' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule' | 
'/ip/{ip}/game/{ipOnGame}/rule' | 
'/ip/{ip}/migrationToken' | 
'/ip/{ip}/mitigation' | 
'/ip/{ip}/mitigationProfiles' | 
'/ip/{ip}/move' | 
'/ip/{ip}/park' | 
'/ip/{ip}/reverse' | 
'/ip/{ip}/spam/{ipSpamming}/unblock' | 
'/ip/{ip}/terminate';

type PathsIpDELETE = '/ip/loadBalancing/{serviceName}/backend/{backend}' | 
'/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}' | 
'/ip/{ip}/delegation/{target}' | 
'/ip/{ip}/firewall/{ipOnFirewall}' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}' | 
'/ip/{ip}/game/{ipOnGame}/rule/{id}' | 
'/ip/{ip}/mitigation/{ipOnMitigation}' | 
'/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' | 
'/ip/{ip}/reverse/{ipReverse}';

export class ApiIp extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  List the ip.Ip objects
  Your OVH IPs
  **/
  public get(path: '/ip', queryParams?: {description?: string, ip?: string, 'routedTo.serviceName'?: string, type?: IpIpTypeEnum}): Promise<string[]>;
  /**
  Operations about the IP service
  List available services
  **/
  public get(path: '/ip/loadBalancing'): Promise<string[]>;
  /**
  Your load balancing IP
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}', pathParams: {serviceName: string}): Promise<IpLoadBalancingIp>;
  /**
  allowedBackends operations
  List of backends you can attach to your IP
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/allowedBackends', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  List the ip.LoadBalancingBackendIp objects
  Backends for this IP load balancing
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/backend', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Backends attached to your IP load balancing
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', pathParams: {serviceName: string, backend: string}): Promise<IpLoadBalancingBackendIp>;
  /**
  internalNatIp operations
  Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one.
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/internalNatIp', pathParams: {serviceName: string}, queryParams?: {zone?: IpLoadBalancingZoneEnum}): Promise<string>;
  /**
  List the portsRedirection objects
  Get all srcPort
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/portsRedirection', pathParams: {serviceName: string}): Promise<IpLoadBalancingAdditionalPortEnum[]>;
  /**
  Port redirections
  Get the value for the given srcPort
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}', pathParams: {serviceName: string, srcPort: IpLoadBalancingAdditionalPortEnum}): Promise<IpLoadBalancingIpLoadBalancingPort>;
  /**
  probeIp operations
  Ip subnet used to send probes to your backends
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/probeIp', pathParams: {serviceName: string}, queryParams?: {zone?: IpLoadBalancingZoneEnum}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  List the ip.LoadBalancingTask objects
  Task list associated with this IP
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/task', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  List of tasks associated with your IP load balancing
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/task/{taskId}', pathParams: {serviceName: string, taskId: Number}): Promise<IpLoadBalancingTask>;
  /**
  Operations about the IP service
  List available services
  **/
  public get(path: '/ip/service'): Promise<string[]>;
  /**
  Your IP linked to service
  Get this object properties
  **/
  public get(path: '/ip/service/{serviceName}', pathParams: {serviceName: string}): Promise<IpServiceIp>;
  /**
  Details about a non-expiring Service
  Get this object properties
  **/
  public get(path: '/ip/service/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesNonExpiringService>;
  /**
  Your IP
  Get this object properties
  **/
  public get(path: '/ip/{ip}', pathParams: {ip: string}): Promise<IpIp>;
  /**
  List the ip.BlockedIp objects
  Anti-Hack blocked IP
  **/
  public get(path: '/ip/{ip}/antihack', pathParams: {ip: string}, queryParams?: {state?: IpBlockedIpStateEnum}): Promise<string[]>;
  /**
  Blocked IP information
  Get this object properties
  **/
  public get(path: '/ip/{ip}/antihack/{ipBlocked}', pathParams: {ip: string, ipBlocked: string}): Promise<IpBlockedIp>;
  /**
  List the ip.ArpBlockedIp objects
  ARP blocked IP
  **/
  public get(path: '/ip/{ip}/arp', pathParams: {ip: string}, queryParams?: {state?: IpArpStateEnum}): Promise<string[]>;
  /**
  ARP blocked IP information
  Get this object properties
  **/
  public get(path: '/ip/{ip}/arp/{ipBlocked}', pathParams: {ip: string, ipBlocked: string}): Promise<IpArpBlockedIp>;
  /**
  List the ip.ReverseDelegation objects
  Reverse delegation on IPv6 subnet
  **/
  public get(path: '/ip/{ip}/delegation', pathParams: {ip: string}): Promise<string[]>;
  /**
  Your reverse delegations on IPv6 subnet
  Get this object properties
  **/
  public get(path: '/ip/{ip}/delegation/{target}', pathParams: {ip: string, target: string}): Promise<IpReverseDelegation>;
  /**
  List the ip.FirewallIp objects
  Ip under firewall
  **/
  public get(path: '/ip/{ip}/firewall', pathParams: {ip: string}, queryParams?: {enabled?: boolean, state?: IpFirewallStateEnum}): Promise<string[]>;
  /**
  Your IP on firewall
  Get this object properties
  **/
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}', pathParams: {ip: string, ipOnFirewall: string}): Promise<IpFirewallIp>;
  /**
  List the ip.FirewallNetworkRule objects
  Rules for this IP
  **/
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule', pathParams: {ip: string, ipOnFirewall: string}, queryParams?: {state?: IpFirewallRuleStateEnum}): Promise<Number[]>;
  /**
  Rule on ip
  Get this object properties
  **/
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}', pathParams: {ip: string, ipOnFirewall: string, sequence: Number}): Promise<IpFirewallNetworkRule>;
  /**
  List the ip.GameMitigation objects
  Ip under game anti-ddos
  **/
  public get(path: '/ip/{ip}/game', pathParams: {ip: string}): Promise<string[]>;
  /**
  GAME Anti-DDoS
  Get this object properties
  **/
  public get(path: '/ip/{ip}/game/{ipOnGame}', pathParams: {ip: string, ipOnGame: string}): Promise<IpGameMitigation>;
  /**
  List the ip.GameMitigationRule objects
  IDs of rules configured for this IP
  **/
  public get(path: '/ip/{ip}/game/{ipOnGame}/rule', pathParams: {ip: string, ipOnGame: string}): Promise<Number[]>;
  /**
  Rule on ip:ports
  Get this object properties
  **/
  public get(path: '/ip/{ip}/game/{ipOnGame}/rule/{id}', pathParams: {ip: string, ipOnGame: string, id: Number}): Promise<IpGameMitigationRule>;
  /**
  List the license.cloudLinux.CloudLinux objects
  Cloud Linux licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/cloudLinux', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.cpanel.Cpanel objects
  Cpanel licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/cpanel', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.directadmin.DirectAdmin objects
  DirectAdmin licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/directadmin', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.plesk.Plesk objects
  Plesk licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/plesk', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.sqlserver.SqlServer objects
  SQL Server licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/sqlserver', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.virtuozzo.Virtuozzo objects
  Virtuozzo licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/virtuozzo', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.windows.Windows objects
  Windows licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/windows', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.worklight.WorkLight objects
  WorkLight licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/worklight', pathParams: {ip: string}, queryParams?: {ipAddress?: string}): Promise<string[]>;
  /**
  IP migration to OVH
  Get this object properties
  **/
  public get(path: '/ip/{ip}/migrationToken', pathParams: {ip: string}): Promise<IpIpMigrationToken>;
  /**
  List the ip.MitigationIp objects
  Ip under mitigation
  **/
  public get(path: '/ip/{ip}/mitigation', pathParams: {ip: string}, queryParams?: {auto?: boolean, state?: IpMitigationStateEnum}): Promise<string[]>;
  /**
  Your IP on mitigation
  Get this object properties
  **/
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}', pathParams: {ip: string, ipOnMitigation: string}): Promise<IpMitigationIp>;
  /**
  stats operations
  AntiDDOS option. Get statistics about your traffic in and out during this mitigation
  **/
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}/stats', pathParams: {ip: string, ipOnMitigation: string}, queryParams?: {from?: string, scale?: IpMitigationStatsScaleEnum, to?: string}): Promise<IpMitigationStats[]>;
  /**
  topStream operations
  AntiDDOS option. Get top stream on your ip on a specific timestamp
  **/
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}/topStream', pathParams: {ip: string, ipOnMitigation: string}, queryParams?: {date?: string, scale?: IpMitigationStatsScaleEnum}): Promise<IpMitigationDetailedStats[]>;
  /**
  List the ip.MitigationProfile objects
  Manage mitigation profile on your IPs
  **/
  public get(path: '/ip/{ip}/mitigationProfiles', pathParams: {ip: string}): Promise<string[]>;
  /**
  Mitigation profile for your ip
  Get this object properties
  **/
  public get(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', pathParams: {ip: string, ipMitigationProfile: string}): Promise<IpMitigationProfile>;
  /**
  move operations
  List services available as a destination
  **/
  public get(path: '/ip/{ip}/move', pathParams: {ip: string}): Promise<IpDestinations>;
  /**
  List the ip.Antiphishing objects
  Ip under anti-phishing
  **/
  public get(path: '/ip/{ip}/phishing', pathParams: {ip: string}, queryParams?: {ipOnAntiphishing?: string, state?: IpAntiphishingStateEnum}): Promise<Number[]>;
  /**
  Phishing URLs hosted on your IP
  Get this object properties
  **/
  public get(path: '/ip/{ip}/phishing/{id}', pathParams: {ip: string, id: Number}): Promise<IpAntiphishing>;
  /**
  List the ip.ReverseIp objects
  Reverse on your ip
  **/
  public get(path: '/ip/{ip}/reverse', pathParams: {ip: string}): Promise<string[]>;
  /**
  Your reverse records on IP
  Get this object properties
  **/
  public get(path: '/ip/{ip}/reverse/{ipReverse}', pathParams: {ip: string, ipReverse: string}): Promise<IpReverseIp>;
  /**
  IP block RIPE informations
  Get this object properties
  **/
  public get(path: '/ip/{ip}/ripe', pathParams: {ip: string}): Promise<IpRipeInfos>;
  /**
  List the ip.SpamIp objects
  Ip spamming
  **/
  public get(path: '/ip/{ip}/spam', pathParams: {ip: string}, queryParams?: {state?: IpSpamStateEnum}): Promise<string[]>;
  /**
  Your IP spam stats
  Get this object properties
  **/
  public get(path: '/ip/{ip}/spam/{ipSpamming}', pathParams: {ip: string, ipSpamming: string}): Promise<IpSpamIp>;
  /**
  stats operations
  Get statistics about the email traffic
  **/
  public get(path: '/ip/{ip}/spam/{ipSpamming}/stats', pathParams: {ip: string, ipSpamming: string}, queryParams?: {from?: string, to?: string}): Promise<IpSpamStats[]>;
  /**
  List the ip.IpTask objects
  IP tasks
  **/
  public get(path: '/ip/{ip}/task', pathParams: {ip: string}, queryParams?: {function?: IpTaskFunctionEnum, status?: IpTaskStatusEnum}): Promise<Number[]>;
  /**
  IP tasks
  Get this object properties
  **/
  public get(path: '/ip/{ip}/task/{taskId}', pathParams: {ip: string, taskId: Number}): Promise<IpIpTask>;
  public get(path: PathsIpGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Backends attached to your IP load balancing
  Alter this object properties
  **/
  public put(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', pathParams: {serviceName: string, backend: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/ip/loadBalancing/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Your IP linked to service
  Alter this object properties
  **/
  public put(path: '/ip/service/{serviceName}', pathParams: {serviceName: string}): Promise<void>;
  /**
  Your IP
  Alter this object properties
  **/
  public put(path: '/ip/{ip}', pathParams: {ip: string}): Promise<void>;
  /**
  Your IP on firewall
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/firewall/{ipOnFirewall}', pathParams: {ip: string, ipOnFirewall: string}): Promise<void>;
  /**
  GAME Anti-DDoS
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/game/{ipOnGame}', pathParams: {ip: string, ipOnGame: string}): Promise<void>;
  /**
  Your IP on mitigation
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/mitigation/{ipOnMitigation}', pathParams: {ip: string, ipOnMitigation: string}): Promise<void>;
  /**
  Mitigation profile for your ip
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', pathParams: {ip: string, ipMitigationProfile: string}): Promise<void>;
  /**
  IP block RIPE informations
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/ripe', pathParams: {ip: string}): Promise<void>;
  public put(path: PathsIpPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  List the ip.LoadBalancingBackendIp objects
  Add a new backend on your IP load balancing
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/backend', pathParams: {serviceName: string}): Promise<IpLoadBalancingTask>;
  /**
  backupState operations
  Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/backend/{backend}/backupState', pathParams: {serviceName: string, backend: string}): Promise<IpLoadBalancingTask>;
  /**
  setWeight operations
  Set the weight of a backend. For instance, if backend A has a weight of 8 and backup B was a weight of 16, backend B will receive twice more connections as backend A. Backends must be on the same POP for the weight parameter to take effect between them.
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight', pathParams: {serviceName: string, backend: string}): Promise<IpLoadBalancingTask>;
  /**
  importCustomSsl operations
  Import your own ssl certificate on your IP load balancing. Ssl option is needed to use this url.
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/importCustomSsl', pathParams: {serviceName: string}): Promise<IpLoadBalancingTask>;
  /**
  List the portsRedirection objects
  Add a new port redirection
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/portsRedirection', pathParams: {serviceName: string}): Promise<IpLoadBalancingTask>;
  /**
  restoreSsl operations
  Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc)
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/restoreSsl', pathParams: {serviceName: string}): Promise<IpLoadBalancingTask>;
  /**
  stickiness operations
  Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/stickiness', pathParams: {serviceName: string}): Promise<IpLoadBalancingTask>;
  /**
  switchToIplbNextGenerationApi operations
  Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection.
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi', pathParams: {serviceName: string}): Promise<IpLoadbalancingTaskTask>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/ip/service/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/ip/service/{serviceName}/confirmTermination', pathParams: {serviceName: string}): Promise<string>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/ip/service/{serviceName}/terminate', pathParams: {serviceName: string}): Promise<string>;
  /**
  unblock operations
  Unblock this IP
  **/
  public post(path: '/ip/{ip}/antihack/{ipBlocked}/unblock', pathParams: {ip: string, ipBlocked: string}): Promise<void>;
  /**
  unblock operations
  Unblock this IP
  **/
  public post(path: '/ip/{ip}/arp/{ipBlocked}/unblock', pathParams: {ip: string, ipBlocked: string}): Promise<void>;
  /**
  changeOrg operations
  Change organisation of this IP
  **/
  public post(path: '/ip/{ip}/changeOrg', pathParams: {ip: string}): Promise<IpIpTask>;
  /**
  List the ip.ReverseDelegation objects
  Add target for reverse delegation on IPv6 subnet
  **/
  public post(path: '/ip/{ip}/delegation', pathParams: {ip: string}): Promise<IpReverseDelegation>;
  /**
  List the ip.FirewallIp objects
  AntiDDOS option. Add new IP on firewall
  **/
  public post(path: '/ip/{ip}/firewall', pathParams: {ip: string}): Promise<IpFirewallIp>;
  /**
  List the ip.FirewallNetworkRule objects
  AntiDDOS option. Add new rule on your IP
  **/
  public post(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule', pathParams: {ip: string, ipOnFirewall: string}): Promise<IpFirewallNetworkRule>;
  /**
  List the ip.GameMitigationRule objects
  Add new rule on your IP
  **/
  public post(path: '/ip/{ip}/game/{ipOnGame}/rule', pathParams: {ip: string, ipOnGame: string}): Promise<IpGameMitigationRule>;
  /**
  IP migration to OVH
  Generate a migration token
  **/
  public post(path: '/ip/{ip}/migrationToken', pathParams: {ip: string}): Promise<IpIpMigrationToken>;
  /**
  List the ip.MitigationIp objects
  AntiDDOS option. Add new IP on permanent mitigation
  **/
  public post(path: '/ip/{ip}/mitigation', pathParams: {ip: string}): Promise<IpMitigationIp>;
  /**
  List the ip.MitigationProfile objects
  Create new profile for one of your ip
  **/
  public post(path: '/ip/{ip}/mitigationProfiles', pathParams: {ip: string}): Promise<IpMitigationProfile>;
  /**
  move operations
  Move this IP to another service
  **/
  public post(path: '/ip/{ip}/move', pathParams: {ip: string}): Promise<IpIpTask>;
  /**
  park operations
  Park this IP
  **/
  public post(path: '/ip/{ip}/park', pathParams: {ip: string}): Promise<IpIpTask>;
  /**
  List the ip.ReverseIp objects
  Add reverse on an ip
  **/
  public post(path: '/ip/{ip}/reverse', pathParams: {ip: string}): Promise<IpReverseIp>;
  /**
  unblock operations
  Release the ip from anti-spam system
  **/
  public post(path: '/ip/{ip}/spam/{ipSpamming}/unblock', pathParams: {ip: string, ipSpamming: string}): Promise<IpSpamIp>;
  /**
  terminate operations
  Delete a failover IP
  **/
  public post(path: '/ip/{ip}/terminate', pathParams: {ip: string}): Promise<IpIpTask>;
  public post(path: PathsIpPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Backends attached to your IP load balancing
  Remove a backend IP
  **/
  public delete(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', pathParams: {serviceName: string, backend: string}): Promise<IpLoadBalancingTask>;
  /**
  Port redirections
  Delete a port redirection
  **/
  public delete(path: '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}', pathParams: {serviceName: string, srcPort: IpLoadBalancingAdditionalPortEnum}): Promise<IpLoadBalancingTask>;
  /**
  Your reverse delegations on IPv6 subnet
  Delete a target for reverse delegation on IPv6 subnet
  **/
  public delete(path: '/ip/{ip}/delegation/{target}', pathParams: {ip: string, target: string}): Promise<void>;
  /**
  Your IP on firewall
  AntiDDOS option. Delete IP and rules from firewall
  **/
  public delete(path: '/ip/{ip}/firewall/{ipOnFirewall}', pathParams: {ip: string, ipOnFirewall: string}): Promise<string>;
  /**
  Rule on ip
  AntiDDOS option. Delete rule
  **/
  public delete(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}', pathParams: {ip: string, ipOnFirewall: string, sequence: Number}): Promise<IpFirewallNetworkRule>;
  /**
  Rule on ip:ports
  Delete rule
  **/
  public delete(path: '/ip/{ip}/game/{ipOnGame}/rule/{id}', pathParams: {ip: string, ipOnGame: string, id: Number}): Promise<IpGameMitigationRule>;
  /**
  Your IP on mitigation
  AntiDDOS option. Delete IP from mitigation
  **/
  public delete(path: '/ip/{ip}/mitigation/{ipOnMitigation}', pathParams: {ip: string, ipOnMitigation: string}): Promise<IpMitigationIp>;
  /**
  Mitigation profile for your ip
  Delete mitigation profile
  **/
  public delete(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', pathParams: {ip: string, ipMitigationProfile: string}): Promise<void>;
  /**
  Your reverse records on IP
  Delete a reverse on one IP
  **/
  public delete(path: '/ip/{ip}/reverse/{ipReverse}', pathParams: {ip: string, ipReverse: string}): Promise<void>;
  public delete(path: PathsIpDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
