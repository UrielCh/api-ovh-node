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
   * IP address hosting the phishing URL
   *
   */
  ipOnAntiphishing?: string;
  /**
   * Phishing URL
   *
   */
  urlPhishing?: string;
  /**
   * Internal ID of the phishing entry
   *
   */
  id?: Number;
  /**
   * Current state of the phishing
   *
   */
  state?: IpAntiphishingStateEnum;
  /**
   * Date of the event
   *
   */
  creationDate?: Date;
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
   * your IP
   *
   */
  ipBlocked?: string;
  /**
   * The last blocking date
   *
   */
  blockedSince?: Date;
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
  /**
   * ARP logs
   *
   */
  logs?: string;
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
   * your IP
   *
   */
  ipBlocked?: string;
  /**
   * The last blocking date
   *
   */
  blockedSince?: Date;
  /**
   * Time (in seconds) remaining before you can request your IP to be unblocked
   *
   */
  time?: Number;
  /**
   * this IP address state
   *
   */
  state?: IpBlockedIpStateEnum;
  /**
   * Logs
   *
   */
  logs?: string;
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
   * Service destination
   *
   */
  service?: string;
  /**
   * Nexthops available on this service
   *
   */
  nexthop?: string[];
}
/**
 * A structure given all services allowed as a destination for this ip
 */
export interface IpDestinations {
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
   * list of vps
   *
   */
  vps?: IpDestination[];
  /**
   * list of hosting reseller services
   *
   */
  hostingReseller?: IpDestination[];
  /**
   * list of public cloud projects
   *
   */
  cloudProject?: IpDestination[];
  /**
   * list of load balancing services
   *
   */
  ipLoadbalancing?: IpDestination[];
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
  ipOnFirewall?: string;
  /**
   * Current state of your ip on firewall
   *
   */
  state?: IpFirewallStateEnum;
  /**
   */
  enabled?: boolean;
}
/**
 * Rule on ip
 */
export interface IpFirewallNetworkRule {
  /**
   * Destination port range for your rule. Only with TCP/UDP protocol
   *
   */
  destinationPort?: string;
  /**
   */
  sequence?: Number;
  /**
   * Source port range for your rule. Only with TCP/UDP protocol
   *
   */
  sourcePort?: string;
  /**
   * Network protocol
   *
   */
  protocol?: IpFirewallProtocolEnum;
  /**
   * TCP option on your rule
   *
   */
  tcpOption?: string;
  /**
   * Destination ip for your rule
   *
   */
  destination?: string;
  /**
   */
  rule?: string;
  /**
   * Action on this rule
   *
   */
  action?: IpFirewallActionEnum;
  /**
   * Fragments option
   *
   */
  fragments?: boolean;
  /**
   * Current state of your rule
   *
   */
  state?: IpFirewallRuleStateEnum;
  /**
   * Source ip for your rule
   *
   */
  source?: string;
  /**
   */
  creationDate?: Date;
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
  state?: IpGameMitigationStateEnum;
  /**
   */
  ipOnGame?: string;
}
/**
 * Rule on ip:ports
 */
export interface IpGameMitigationRule {
  /**
   */
  protocol?: IpGameMitigationRuleProtocolEnum;
  /**
   * ID of the rule
   *
   */
  id?: Number;
  /**
   * Current state of your rule
   *
   */
  state?: IpGameMitigationRuleStateEnum;
  /**
   */
  ports?: ComplexTypeRange<Number>;
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
  ip?: string;
  /**
   * Custom description on your ip
   *
   */
  description?: string;
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
   * last update
   *
   */
  lastUpdate?: Date;
  /**
   * Function name
   *
   */
  function?: IpTaskFunctionEnum;
  /**
   * Destination for moveFloatingIp tasks
   *
   */
  destination?: IpRoutedTo;
  /**
   * Details of this task
   *
   */
  comment?: string;
  /**
   * Completion date
   *
   */
  doneDate?: Date;
  /**
   * Task Creation date
   *
   */
  startDate?: Date;
  /**
   * the id of the task
   *
   */
  taskId?: Number;
  /**
   * Task status
   *
   */
  status?: IpTaskStatusEnum;
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
   * Location where your service is
   *
   */
  zone?: IpLoadBalancingZoneEnum;
  /**
   * Weight of the backend on its zone, must be between 1 and 100, default is 8
   *
   */
  weight?: Number;
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
   * Location where your service is
   *
   */
  zone?: IpLoadBalancingZoneEnum[];
  /**
   * The type of stickiness currently in place on your Ip LoadBalancing
   *
   */
  stickiness?: IpLoadBalancingStickinessEnum;
  /**
   * Your IP load balancing
   *
   */
  ipLoadBalancing?: string;
  /**
   * Current state of your IP
   *
   */
  state?: IpLoadBalancingStateEnum;
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
   * Identifier of your task
   *
   */
  id?: Number;
  /**
   * Creation date of your task
   *
   */
  creationDate?: Date;
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
  endDate?: Date;
  /**
   * Your ip
   *
   */
  ipAttack?: string;
  /**
   * Internal id of your attack
   *
   */
  idAttack?: Number;
  /**
   * Start of the attack
   *
   */
  startDate?: Date;
}
/**
 * Detailed statistics about your traffic
 */
export interface IpMitigationDetailedStats {
  /**
   * ICMP protocol type
   *
   */
  icmpType?: Number;
  /**
   * Used protocol. See RFC5237 for more information
   *
   */
  protocol?: Number;
  /**
   * Traffic dest port
   *
   */
  destPort?: Number;
  /**
   * ICMP protocol code
   *
   */
  icmpCode?: Number;
  /**
   * Traffic in
   *
   */
  in?: IpMitigationTraffic;
  /**
   */
  syn?: boolean;
  /**
   */
  fragments?: boolean;
  /**
   * Traffic source port
   *
   */
  srcPort?: Number;
  /**
   * Traffic out
   *
   */
  out?: IpMitigationTraffic;
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
   */
  ipMitigationProfile?: string;
  /**
   * Current state of your mitigation profile
   *
   */
  state?: IpMitigationProfileStateEnum;
  /**
   * Delay to wait before remove ip from auto mitigation after an attack
   *
   */
  autoMitigationTimeOut?: IpMitigationProfileAutoMitigationTimeOutEnum;
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
   * Traffic timestamp
   *
   */
  timestamp?: Number;
  /**
   * Traffic out
   *
   */
  out?: IpMitigationTraffic;
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
   * Paquets per second
   *
   */
  pps?: Number;
  /**
   * Bits per second
   *
   */
  bps?: Number;
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
  netname?: string;
  /**
   */
  description?: string;
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
  ip?: string;
  /**
   * Custom description on your ip
   *
   */
  description?: string;
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
  date?: Date;
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
   * Number of emails sent
   *
   */
  total?: Number;
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
   * Average spam score.
   *
   */
  averageSpamscore?: Number;
  /**
   * Time when the IP address was blocked
   *
   */
  timestamp?: Number;
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
   * Spam score for the email
   *
   */
  spamscore?: Number;
  /**
   * The message-id of the email
   *
   */
  messageId?: string;
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
   * Operation progress percentage
   *
   */
  progress?: Number;
  /**
   * Id of the operation
   *
   */
  id?: Number;
  /**
   * Zone of your Load Balancer which are updated by current Task
   *
   */
  zones?: string[];
  /**
   * Creation date of your operation
   *
   */
  creationDate?: Date;
  /**
   * Done date of your operation
   *
   */
  doneDate?: Date;
  /**
   * Current status of your operation
   *
   */
  status?: IpLoadbalancingTaskStatusEnum;
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
  contactBilling?: string;
  /**
   */
  contactAdmin?: string;
  /**
   */
  domain?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  serviceId?: Number;
  /**
   */
  creation?: Date;
  /**
   */
  status?: ServiceStateEnum;
}
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
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  status?: ServiceStateEnum;
}
type PathsipGET = '/ip/service/{serviceName}/serviceInfos' | 
'/ip/service/{serviceName}' | 
'/ip/service' | 
'/ip/loadBalancing/{serviceName}/serviceInfos' | 
'/ip/loadBalancing/{serviceName}/portsRedirection' | 
'/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}' | 
'/ip/loadBalancing/{serviceName}/task/{taskId}' | 
'/ip/loadBalancing/{serviceName}/task' | 
'/ip/loadBalancing/{serviceName}/backend' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}' | 
'/ip/loadBalancing/{serviceName}/allowedBackends' | 
'/ip/loadBalancing/{serviceName}/probeIp' | 
'/ip/loadBalancing/{serviceName}/internalNatIp' | 
'/ip/loadBalancing/{serviceName}' | 
'/ip/loadBalancing' | 
'/ip/{ip}/phishing' | 
'/ip/{ip}/phishing/{id}' | 
'/ip/{ip}/reverse/{ipReverse}' | 
'/ip/{ip}/reverse' | 
'/ip/{ip}/ripe' | 
'/ip/{ip}/migrationToken' | 
'/ip/{ip}' | 
'/ip/{ip}/task' | 
'/ip/{ip}/task/{taskId}' | 
'/ip/{ip}/spam' | 
'/ip/{ip}/spam/{ipSpamming}' | 
'/ip/{ip}/spam/{ipSpamming}/stats' | 
'/ip/{ip}/antihack/{ipBlocked}' | 
'/ip/{ip}/antihack' | 
'/ip/{ip}/mitigation/{ipOnMitigation}/topStream' | 
'/ip/{ip}/mitigation/{ipOnMitigation}/stats' | 
'/ip/{ip}/mitigation/{ipOnMitigation}' | 
'/ip/{ip}/mitigation' | 
'/ip/{ip}/license/windows' | 
'/ip/{ip}/license/sqlserver' | 
'/ip/{ip}/license/directadmin' | 
'/ip/{ip}/license/worklight' | 
'/ip/{ip}/license/plesk' | 
'/ip/{ip}/license/virtuozzo' | 
'/ip/{ip}/license/cpanel' | 
'/ip/{ip}/license/cloudLinux' | 
'/ip/{ip}/arp' | 
'/ip/{ip}/arp/{ipBlocked}' | 
'/ip/{ip}/delegation/{target}' | 
'/ip/{ip}/delegation' | 
'/ip/{ip}/move' | 
'/ip/{ip}/firewall/{ipOnFirewall}' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}' | 
'/ip/{ip}/firewall' | 
'/ip/{ip}/mitigationProfiles' | 
'/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' | 
'/ip/{ip}/game/{ipOnGame}/rule' | 
'/ip/{ip}/game/{ipOnGame}/rule/{id}' | 
'/ip/{ip}/game/{ipOnGame}' | 
'/ip/{ip}/game' | 
'/ip';

type PathsipPUT = '/ip/service/{serviceName}' | 
'/ip/loadBalancing/{serviceName}/serviceInfos' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}' | 
'/ip/{ip}/ripe' | 
'/ip/{ip}' | 
'/ip/{ip}/mitigation/{ipOnMitigation}' | 
'/ip/{ip}/firewall/{ipOnFirewall}' | 
'/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' | 
'/ip/{ip}/game/{ipOnGame}';

type PathsipPOST = '/ip/service/{serviceName}/confirmTermination' | 
'/ip/service/{serviceName}/changeContact' | 
'/ip/service/{serviceName}/terminate' | 
'/ip/loadBalancing/{serviceName}/portsRedirection' | 
'/ip/loadBalancing/{serviceName}/restoreSsl' | 
'/ip/loadBalancing/{serviceName}/backend' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}/backupState' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight' | 
'/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi' | 
'/ip/loadBalancing/{serviceName}/importCustomSsl' | 
'/ip/loadBalancing/{serviceName}/stickiness' | 
'/ip/{ip}/reverse' | 
'/ip/{ip}/migrationToken' | 
'/ip/{ip}/park' | 
'/ip/{ip}/spam/{ipSpamming}/unblock' | 
'/ip/{ip}/antihack/{ipBlocked}/unblock' | 
'/ip/{ip}/mitigation' | 
'/ip/{ip}/terminate' | 
'/ip/{ip}/arp/{ipBlocked}/unblock' | 
'/ip/{ip}/delegation' | 
'/ip/{ip}/move' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule' | 
'/ip/{ip}/firewall' | 
'/ip/{ip}/mitigationProfiles' | 
'/ip/{ip}/game/{ipOnGame}/rule' | 
'/ip/{ip}/changeOrg';

type PathsipDELETE = '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}' | 
'/ip/loadBalancing/{serviceName}/backend/{backend}' | 
'/ip/{ip}/reverse/{ipReverse}' | 
'/ip/{ip}/mitigation/{ipOnMitigation}' | 
'/ip/{ip}/delegation/{target}' | 
'/ip/{ip}/firewall/{ipOnFirewall}' | 
'/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}' | 
'/ip/{ip}/mitigationProfiles/{ipMitigationProfile}' | 
'/ip/{ip}/game/{ipOnGame}/rule/{id}';

class Apiip extends ApiCommon {
  /**
  Details about a non-expiring Service
  Get this object properties
  **/
  public get(path: '/ip/service/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesNonExpiringService>;
  /**
  Your IP linked to service
  Get this object properties
  **/
  public get(path: '/ip/service/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<IpServiceIp>;
  /**
  Operations about the IP service
  List available services
  **/
  public get(path: '/ip/service', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, queryParams: null): Promise<ServicesService>;
  /**
  List the portsRedirection objects
  Get all srcPort
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/portsRedirection', pathParams: {serviceName?: string}, queryParams: null): Promise<IpLoadBalancingAdditionalPortEnum[]>;
  /**
  Port redirections
  Get the value for the given srcPort
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}', pathParams: {serviceName?: string, srcPort?: IpLoadBalancingAdditionalPortEnum}, queryParams: null): Promise<IpLoadBalancingIpLoadBalancingPort>;
  /**
  List of tasks associated with your IP load balancing
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/task/{taskId}', pathParams: {serviceName?: string, taskId?: Number}, queryParams: null): Promise<IpLoadBalancingTask>;
  /**
  List the ip.LoadBalancingTask objects
  Task list associated with this IP
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/task', pathParams: {serviceName?: string}, queryParams: null): Promise<Number[]>;
  /**
  List the ip.LoadBalancingBackendIp objects
  Backends for this IP load balancing
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/backend', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  Backends attached to your IP load balancing
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', pathParams: {serviceName?: string, backend?: string}, queryParams: null): Promise<IpLoadBalancingBackendIp>;
  /**
  allowedBackends operations
  List of backends you can attach to your IP
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/allowedBackends', pathParams: {serviceName?: string}, queryParams: null): Promise<string[]>;
  /**
  probeIp operations
  Ip subnet used to send probes to your backends
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/probeIp', pathParams: {serviceName?: string}, queryParams: {zone?: IpLoadBalancingZoneEnum}): Promise<string[]>;
  /**
  internalNatIp operations
  Ip subnet used by OVH to nat requests on your ip lb to your backends. You must ensure that your backends are not part of a network that overlap with this one.
  **/
  public get(path: '/ip/loadBalancing/{serviceName}/internalNatIp', pathParams: {serviceName?: string}, queryParams: {zone?: IpLoadBalancingZoneEnum}): Promise<string>;
  /**
  Your load balancing IP
  Get this object properties
  **/
  public get(path: '/ip/loadBalancing/{serviceName}', pathParams: {serviceName?: string}, queryParams: null): Promise<IpLoadBalancingIp>;
  /**
  Operations about the IP service
  List available services
  **/
  public get(path: '/ip/loadBalancing', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the ip.Antiphishing objects
  Ip under anti-phishing
  **/
  public get(path: '/ip/{ip}/phishing', pathParams: {ip?: string}, queryParams: {ipOnAntiphishing?: string, state?: IpAntiphishingStateEnum}): Promise<Number[]>;
  /**
  Phishing URLs hosted on your IP
  Get this object properties
  **/
  public get(path: '/ip/{ip}/phishing/{id}', pathParams: {ip?: string, id?: Number}, queryParams: null): Promise<IpAntiphishing>;
  /**
  Your reverse records on IP
  Get this object properties
  **/
  public get(path: '/ip/{ip}/reverse/{ipReverse}', pathParams: {ip?: string, ipReverse?: string}, queryParams: null): Promise<IpReverseIp>;
  /**
  List the ip.ReverseIp objects
  Reverse on your ip
  **/
  public get(path: '/ip/{ip}/reverse', pathParams: {ip?: string}, queryParams: null): Promise<string[]>;
  /**
  IP block RIPE informations
  Get this object properties
  **/
  public get(path: '/ip/{ip}/ripe', pathParams: {ip?: string}, queryParams: null): Promise<IpRipeInfos>;
  /**
  IP migration to OVH
  Get this object properties
  **/
  public get(path: '/ip/{ip}/migrationToken', pathParams: {ip?: string}, queryParams: null): Promise<IpIpMigrationToken>;
  /**
  Your IP
  Get this object properties
  **/
  public get(path: '/ip/{ip}', pathParams: {ip?: string}, queryParams: null): Promise<IpIp>;
  /**
  List the ip.IpTask objects
  IP tasks
  **/
  public get(path: '/ip/{ip}/task', pathParams: {ip?: string}, queryParams: {status?: IpTaskStatusEnum, function?: IpTaskFunctionEnum}): Promise<Number[]>;
  /**
  IP tasks
  Get this object properties
  **/
  public get(path: '/ip/{ip}/task/{taskId}', pathParams: {ip?: string, taskId?: Number}, queryParams: null): Promise<IpIpTask>;
  /**
  List the ip.SpamIp objects
  Ip spamming
  **/
  public get(path: '/ip/{ip}/spam', pathParams: {ip?: string}, queryParams: {state?: IpSpamStateEnum}): Promise<string[]>;
  /**
  Your IP spam stats
  Get this object properties
  **/
  public get(path: '/ip/{ip}/spam/{ipSpamming}', pathParams: {ip?: string, ipSpamming?: string}, queryParams: null): Promise<IpSpamIp>;
  /**
  stats operations
  Get statistics about the email traffic
  **/
  public get(path: '/ip/{ip}/spam/{ipSpamming}/stats', pathParams: {ip?: string, ipSpamming?: string}, queryParams: {from?: Date, to?: Date}): Promise<IpSpamStats[]>;
  /**
  Blocked IP information
  Get this object properties
  **/
  public get(path: '/ip/{ip}/antihack/{ipBlocked}', pathParams: {ip?: string, ipBlocked?: string}, queryParams: null): Promise<IpBlockedIp>;
  /**
  List the ip.BlockedIp objects
  Anti-Hack blocked IP
  **/
  public get(path: '/ip/{ip}/antihack', pathParams: {ip?: string}, queryParams: {state?: IpBlockedIpStateEnum}): Promise<string[]>;
  /**
  topStream operations
  AntiDDOS option. Get top stream on your ip on a specific timestamp
  **/
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}/topStream', pathParams: {ip?: string, ipOnMitigation?: string}, queryParams: {date?: Date, scale?: IpMitigationStatsScaleEnum}): Promise<IpMitigationDetailedStats[]>;
  /**
  stats operations
  AntiDDOS option. Get statistics about your traffic in and out during this mitigation
  **/
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}/stats', pathParams: {ip?: string, ipOnMitigation?: string}, queryParams: {to?: Date, scale?: IpMitigationStatsScaleEnum, from?: Date}): Promise<IpMitigationStats[]>;
  /**
  Your IP on mitigation
  Get this object properties
  **/
  public get(path: '/ip/{ip}/mitigation/{ipOnMitigation}', pathParams: {ip?: string, ipOnMitigation?: string}, queryParams: null): Promise<IpMitigationIp>;
  /**
  List the ip.MitigationIp objects
  Ip under mitigation
  **/
  public get(path: '/ip/{ip}/mitigation', pathParams: {ip?: string}, queryParams: {auto?: boolean, state?: IpMitigationStateEnum}): Promise<string[]>;
  /**
  List the license.windows.Windows objects
  Windows licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/windows', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.sqlserver.SqlServer objects
  SQL Server licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/sqlserver', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.directadmin.DirectAdmin objects
  DirectAdmin licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/directadmin', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.worklight.WorkLight objects
  WorkLight licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/worklight', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.plesk.Plesk objects
  Plesk licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/plesk', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.virtuozzo.Virtuozzo objects
  Virtuozzo licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/virtuozzo', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.cpanel.Cpanel objects
  Cpanel licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/cpanel', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the license.cloudLinux.CloudLinux objects
  Cloud Linux licenses associated to this IP
  **/
  public get(path: '/ip/{ip}/license/cloudLinux', pathParams: {ip?: string}, queryParams: {ipAddress?: string}): Promise<string[]>;
  /**
  List the ip.ArpBlockedIp objects
  ARP blocked IP
  **/
  public get(path: '/ip/{ip}/arp', pathParams: {ip?: string}, queryParams: {state?: IpArpStateEnum}): Promise<string[]>;
  /**
  ARP blocked IP information
  Get this object properties
  **/
  public get(path: '/ip/{ip}/arp/{ipBlocked}', pathParams: {ip?: string, ipBlocked?: string}, queryParams: null): Promise<IpArpBlockedIp>;
  /**
  Your reverse delegations on IPv6 subnet
  Get this object properties
  **/
  public get(path: '/ip/{ip}/delegation/{target}', pathParams: {ip?: string, target?: string}, queryParams: null): Promise<IpReverseDelegation>;
  /**
  List the ip.ReverseDelegation objects
  Reverse delegation on IPv6 subnet
  **/
  public get(path: '/ip/{ip}/delegation', pathParams: {ip?: string}, queryParams: null): Promise<string[]>;
  /**
  move operations
  List services available as a destination
  **/
  public get(path: '/ip/{ip}/move', pathParams: {ip?: string}, queryParams: null): Promise<IpDestinations>;
  /**
  Your IP on firewall
  Get this object properties
  **/
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}', pathParams: {ip?: string, ipOnFirewall?: string}, queryParams: null): Promise<IpFirewallIp>;
  /**
  List the ip.FirewallNetworkRule objects
  Rules for this IP
  **/
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule', pathParams: {ip?: string, ipOnFirewall?: string}, queryParams: {state?: IpFirewallRuleStateEnum}): Promise<Number[]>;
  /**
  Rule on ip
  Get this object properties
  **/
  public get(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}', pathParams: {ip?: string, ipOnFirewall?: string, sequence?: Number}, queryParams: null): Promise<IpFirewallNetworkRule>;
  /**
  List the ip.FirewallIp objects
  Ip under firewall
  **/
  public get(path: '/ip/{ip}/firewall', pathParams: {ip?: string}, queryParams: {state?: IpFirewallStateEnum, enabled?: boolean}): Promise<string[]>;
  /**
  List the ip.MitigationProfile objects
  Manage mitigation profile on your IPs
  **/
  public get(path: '/ip/{ip}/mitigationProfiles', pathParams: {ip?: string}, queryParams: null): Promise<string[]>;
  /**
  Mitigation profile for your ip
  Get this object properties
  **/
  public get(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', pathParams: {ip?: string, ipMitigationProfile?: string}, queryParams: null): Promise<IpMitigationProfile>;
  /**
  List the ip.GameMitigationRule objects
  IDs of rules configured for this IP
  **/
  public get(path: '/ip/{ip}/game/{ipOnGame}/rule', pathParams: {ip?: string, ipOnGame?: string}, queryParams: null): Promise<Number[]>;
  /**
  Rule on ip:ports
  Get this object properties
  **/
  public get(path: '/ip/{ip}/game/{ipOnGame}/rule/{id}', pathParams: {ip?: string, ipOnGame?: string, id?: Number}, queryParams: null): Promise<IpGameMitigationRule>;
  /**
  GAME Anti-DDoS
  Get this object properties
  **/
  public get(path: '/ip/{ip}/game/{ipOnGame}', pathParams: {ip?: string, ipOnGame?: string}, queryParams: null): Promise<IpGameMitigation>;
  /**
  List the ip.GameMitigation objects
  Ip under game anti-ddos
  **/
  public get(path: '/ip/{ip}/game', pathParams: {ip?: string}, queryParams: null): Promise<string[]>;
  /**
  List the ip.Ip objects
  Your OVH IPs
  **/
  public get(path: '/ip', pathParams: null, queryParams: {type?: IpIpTypeEnum, description?: string, ip?: string, 'routedTo.serviceName'?: string}): Promise<string[]>;
  public get(path: PathsipGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Your IP linked to service
  Alter this object properties
  **/
  public put(path: '/ip/service/{serviceName}', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/ip/loadBalancing/{serviceName}/serviceInfos', pathParams: {serviceName?: string}, bodyParams: null): Promise<void>;
  /**
  Backends attached to your IP load balancing
  Alter this object properties
  **/
  public put(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', pathParams: {serviceName?: string, backend?: string}, bodyParams: null): Promise<void>;
  /**
  IP block RIPE informations
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/ripe', pathParams: {ip?: string}, bodyParams: null): Promise<void>;
  /**
  Your IP
  Alter this object properties
  **/
  public put(path: '/ip/{ip}', pathParams: {ip?: string}, bodyParams: null): Promise<void>;
  /**
  Your IP on mitigation
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/mitigation/{ipOnMitigation}', pathParams: {ip?: string, ipOnMitigation?: string}, bodyParams: null): Promise<void>;
  /**
  Your IP on firewall
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/firewall/{ipOnFirewall}', pathParams: {ip?: string, ipOnFirewall?: string}, bodyParams: null): Promise<void>;
  /**
  Mitigation profile for your ip
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', pathParams: {ip?: string, ipMitigationProfile?: string}, bodyParams: null): Promise<void>;
  /**
  GAME Anti-DDoS
  Alter this object properties
  **/
  public put(path: '/ip/{ip}/game/{ipOnGame}', pathParams: {ip?: string, ipOnGame?: string}, bodyParams: null): Promise<void>;
  public put(path: PathsipPUT, pathParams?: any, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Confirm termination of your service
  Confirm termination of your service
  **/
  public post(path: '/ip/service/{serviceName}/confirmTermination', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/ip/service/{serviceName}/changeContact', pathParams: {serviceName?: string}, bodyParams: null): Promise<Number[]>;
  /**
  Terminate your service
  Terminate your service
  **/
  public post(path: '/ip/service/{serviceName}/terminate', pathParams: {serviceName?: string}, bodyParams: null): Promise<string>;
  /**
  List the portsRedirection objects
  Add a new port redirection
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/portsRedirection', pathParams: {serviceName?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  restoreSsl operations
  Restore OVH' ssl certificate on your IP load balancing. Ssl option is needed to use this url. (A DCV mail will be sent to postmaster@your-domain.abc)
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/restoreSsl', pathParams: {serviceName?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  List the ip.LoadBalancingBackendIp objects
  Add a new backend on your IP load balancing
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/backend', pathParams: {serviceName?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  backupState operations
  Set or unset the backend as a backup of another backend. Requests will be directed to the backup only if the main backend is in probe fail
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/backend/{backend}/backupState', pathParams: {serviceName?: string, backend?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  setWeight operations
  Set the weight of a backend. For instance, if backend A has a weight of 8 and backup B was a weight of 16, backend B will receive twice more connections as backend A. Backends must be on the same POP for the weight parameter to take effect between them.
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/backend/{backend}/setWeight', pathParams: {serviceName?: string, backend?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  switchToIplbNextGenerationApi operations
  Switch to ipLoadbalancing next-gen API. Benefits : additionnals probes, DDOS protection.
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/switchToIplbNextGenerationApi', pathParams: {serviceName?: string}, bodyParams: null): Promise<IpLoadbalancingTaskTask>;
  /**
  importCustomSsl operations
  Import your own ssl certificate on your IP load balancing. Ssl option is needed to use this url.
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/importCustomSsl', pathParams: {serviceName?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  stickiness operations
  Set Stickiness type. 'ipSource' will stick clients to a backend by their source ip, 'cookie' will stick them by inserting a cookie, 'none' is to set no stickiness
  **/
  public post(path: '/ip/loadBalancing/{serviceName}/stickiness', pathParams: {serviceName?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  List the ip.ReverseIp objects
  Add reverse on an ip
  **/
  public post(path: '/ip/{ip}/reverse', pathParams: {ip?: string}, bodyParams: null): Promise<IpReverseIp>;
  /**
  IP migration to OVH
  Generate a migration token
  **/
  public post(path: '/ip/{ip}/migrationToken', pathParams: {ip?: string}, bodyParams: null): Promise<IpIpMigrationToken>;
  /**
  park operations
  Park this IP
  **/
  public post(path: '/ip/{ip}/park', pathParams: {ip?: string}, bodyParams: null): Promise<IpIpTask>;
  /**
  unblock operations
  Release the ip from anti-spam system
  **/
  public post(path: '/ip/{ip}/spam/{ipSpamming}/unblock', pathParams: {ip?: string, ipSpamming?: string}, bodyParams: null): Promise<IpSpamIp>;
  /**
  unblock operations
  Unblock this IP
  **/
  public post(path: '/ip/{ip}/antihack/{ipBlocked}/unblock', pathParams: {ip?: string, ipBlocked?: string}, bodyParams: null): Promise<void>;
  /**
  List the ip.MitigationIp objects
  AntiDDOS option. Add new IP on permanent mitigation
  **/
  public post(path: '/ip/{ip}/mitigation', pathParams: {ip?: string}, bodyParams: null): Promise<IpMitigationIp>;
  /**
  terminate operations
  Delete a failover IP
  **/
  public post(path: '/ip/{ip}/terminate', pathParams: {ip?: string}, bodyParams: null): Promise<IpIpTask>;
  /**
  unblock operations
  Unblock this IP
  **/
  public post(path: '/ip/{ip}/arp/{ipBlocked}/unblock', pathParams: {ip?: string, ipBlocked?: string}, bodyParams: null): Promise<void>;
  /**
  List the ip.ReverseDelegation objects
  Add target for reverse delegation on IPv6 subnet
  **/
  public post(path: '/ip/{ip}/delegation', pathParams: {ip?: string}, bodyParams: null): Promise<IpReverseDelegation>;
  /**
  move operations
  Move this IP to another service
  **/
  public post(path: '/ip/{ip}/move', pathParams: {ip?: string}, bodyParams: null): Promise<IpIpTask>;
  /**
  List the ip.FirewallNetworkRule objects
  AntiDDOS option. Add new rule on your IP
  **/
  public post(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule', pathParams: {ip?: string, ipOnFirewall?: string}, bodyParams: null): Promise<IpFirewallNetworkRule>;
  /**
  List the ip.FirewallIp objects
  AntiDDOS option. Add new IP on firewall
  **/
  public post(path: '/ip/{ip}/firewall', pathParams: {ip?: string}, bodyParams: null): Promise<IpFirewallIp>;
  /**
  List the ip.MitigationProfile objects
  Create new profile for one of your ip
  **/
  public post(path: '/ip/{ip}/mitigationProfiles', pathParams: {ip?: string}, bodyParams: null): Promise<IpMitigationProfile>;
  /**
  List the ip.GameMitigationRule objects
  Add new rule on your IP
  **/
  public post(path: '/ip/{ip}/game/{ipOnGame}/rule', pathParams: {ip?: string, ipOnGame?: string}, bodyParams: null): Promise<IpGameMitigationRule>;
  /**
  changeOrg operations
  Change organisation of this IP
  **/
  public post(path: '/ip/{ip}/changeOrg', pathParams: {ip?: string}, bodyParams: null): Promise<IpIpTask>;
  public post(path: PathsipPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Port redirections
  Delete a port redirection
  **/
  public delete(path: '/ip/loadBalancing/{serviceName}/portsRedirection/{srcPort}', pathParams: {serviceName?: string, srcPort?: IpLoadBalancingAdditionalPortEnum}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  Backends attached to your IP load balancing
  Remove a backend IP
  **/
  public delete(path: '/ip/loadBalancing/{serviceName}/backend/{backend}', pathParams: {serviceName?: string, backend?: string}, bodyParams: null): Promise<IpLoadBalancingTask>;
  /**
  Your reverse records on IP
  Delete a reverse on one IP
  **/
  public delete(path: '/ip/{ip}/reverse/{ipReverse}', pathParams: {ip?: string, ipReverse?: string}, bodyParams: null): Promise<void>;
  /**
  Your IP on mitigation
  AntiDDOS option. Delete IP from mitigation
  **/
  public delete(path: '/ip/{ip}/mitigation/{ipOnMitigation}', pathParams: {ip?: string, ipOnMitigation?: string}, bodyParams: null): Promise<IpMitigationIp>;
  /**
  Your reverse delegations on IPv6 subnet
  Delete a target for reverse delegation on IPv6 subnet
  **/
  public delete(path: '/ip/{ip}/delegation/{target}', pathParams: {ip?: string, target?: string}, bodyParams: null): Promise<void>;
  /**
  Your IP on firewall
  AntiDDOS option. Delete IP and rules from firewall
  **/
  public delete(path: '/ip/{ip}/firewall/{ipOnFirewall}', pathParams: {ip?: string, ipOnFirewall?: string}, bodyParams: null): Promise<string>;
  /**
  Rule on ip
  AntiDDOS option. Delete rule
  **/
  public delete(path: '/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}', pathParams: {ip?: string, ipOnFirewall?: string, sequence?: Number}, bodyParams: null): Promise<IpFirewallNetworkRule>;
  /**
  Mitigation profile for your ip
  Delete mitigation profile
  **/
  public delete(path: '/ip/{ip}/mitigationProfiles/{ipMitigationProfile}', pathParams: {ip?: string, ipMitigationProfile?: string}, bodyParams: null): Promise<void>;
  /**
  Rule on ip:ports
  Delete rule
  **/
  public delete(path: '/ip/{ip}/game/{ipOnGame}/rule/{id}', pathParams: {ip?: string, ipOnGame?: string, id?: Number}, bodyParams: null): Promise<IpGameMitigationRule>;
  public delete(path: PathsipDELETE, pathParams?: any, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
