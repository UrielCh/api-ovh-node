import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace analytics {
    //analytics.Cluster
    // fullName: analytics.Cluster.Cluster
    export interface Cluster {
        analyticsProjectId?: string;
        clusterName?: string;
        clusterType?: string;
        deploymentEndDate?: string;
        deploymentStartDate?: string;
        domain?: string;
        nodes?: OVH.analytics.cluster.Node[];
        osProjectId?: string;
        osRegion?: string;
        serviceName: string;
        status: OVH.analytics.Status;
    }
    //analytics.Component
    // fullName: analytics.Component.Component
    export interface Component {
        name: string;
        version: string;
    }
    //analytics.Status
    export type Status = "PENDING" | "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | "DONE" | "ERROR" | "UNKNOWN" | "OK" | "TO_DEPLOY" | "DEPLOYING" | "DEPLOYED" | "TO_DESTROY" | "DESTROYED" | "INITIALIZED"
    export namespace cluster {
        //analytics.cluster.Activity
        // fullName: analytics.cluster.Activity.Activity
        export interface Activity {
            description: string;
            status: OVH.analytics.Status;
            timestamp: string;
            user?: string;
        }
        //analytics.cluster.Deploy
        // fullName: analytics.cluster.Deploy.Deploy
        export interface Deploy {
            clusterName: string;
            clusterType: string;
            edgeNodeStorage: number;
            hdfsEffectiveStorage: number;
            hdfsReplicationFactor: number;
            masterNodeStorage: number;
            masterPassword: string;
            nodes: OVH.analytics.node.Deploy[];
            osProjectId: string;
            osProjectName: string;
            osRegion: string;
            osToken: string;
            sshPublicKey: string;
        }
        //analytics.cluster.Node
        // fullName: analytics.cluster.Node.Node
        export interface Node {
            deploymentEndDate?: string;
            deploymentStartDate?: string;
            flavor?: string;
            hostname?: string;
            ip?: string;
            nodeId: string;
            nodeType: OVH.analytics.node.Type;
            osRegion?: string;
            status: OVH.analytics.Status;
            storage?: number;
        }
        export namespace deploy {
            //analytics.cluster.deploy.Status
            // fullName: analytics.cluster.deploy.Status.Status
            export interface Status {
                percentage: number;
                status: OVH.analytics.Status;
                task: string;
            }
        }
    }
    export namespace node {
        //analytics.node.Capability
        // fullName: analytics.node.Capability.Capability
        export interface Capability {
            instanceMax: number;
            instanceMin: number;
            instanceType: string[];
            rawStorageMaxGb: number;
            rawStorageMinGb: number;
        }
        //analytics.node.Deploy
        // fullName: analytics.node.Deploy.Deploy
        export interface Deploy {
            nodeFlavor: string;
            nodeType: OVH.analytics.node.Type;
        }
        //analytics.node.Type
        export type Type = "MASTER" | "SLAVE" | "EDGE" | "UTILITY"
    }
    export namespace platform {
        //analytics.platform.Capability
        // fullName: analytics.platform.Capability.Capability
        export interface Capability {
            availableRegion: string[];
            bastionNode: OVH.analytics.node.Capability;
            components: OVH.analytics.Component[];
            edgeNode: OVH.analytics.node.Capability;
            hdfsReplicationFactor: number;
            masterNode: OVH.analytics.node.Capability;
            requirements?: OVH.analytics.platform.Capability.Requirement[];
            utilityNode: OVH.analytics.node.Capability;
            version: string;
            versionDescription: string;
            workerNode: OVH.analytics.node.Capability;
        }
        export namespace Capability {
            //analytics.platform.Capability.Requirement
            // fullName: analytics.platform.Capability.Requirement.Requirement
            export interface Requirement {
                display: boolean;
                fieldName: string;
            }
        }
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
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
        canDeleteAtExpiration: boolean;
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        engagedUpTo?: string;
        expiration: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType: OVH.service.RenewalTypeEnum;
        serviceId: number;
        status: OVH.service.StateEnum;
    }
}
// Apis harmony
// path /analytics
export interface Analytics{
    capabilities: {
        platforms: {
            // GET /analytics/capabilities/platforms
            $get(): Promise<analytics.platform.Capability[]>;
        }
    }
    platforms: {
        // GET /analytics/platforms
        $get(): Promise<string[]>;
        [keys: string]:{
            // GET /analytics/platforms/{serviceName}
            $get(): Promise<analytics.Cluster>;
            activity: {
                // GET /analytics/platforms/{serviceName}/activity
                $get(): Promise<analytics.cluster.Activity[]>;
            }
            changeContact: {
                // POST /analytics/platforms/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            confirmTermination: {
                // POST /analytics/platforms/{serviceName}/confirmTermination
                $post(body?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            deploy: {
                // POST /analytics/platforms/{serviceName}/deploy
                $post(body?: {body: analytics.cluster.Deploy}): Promise<analytics.cluster.Deploy>;
            }
            nodes: {
                // GET /analytics/platforms/{serviceName}/nodes
                $get(): Promise<string[]>;
                [keys: string]:{
                    // GET /analytics/platforms/{serviceName}/nodes/{nodeId}
                    $get(): Promise<analytics.cluster.Node>;
                } | any
            }
            serviceInfos: {
                // GET /analytics/platforms/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /analytics/platforms/{serviceName}/serviceInfos
                $put(body?: {body: services.Service}): Promise<void>;
            }
            status: {
                // GET /analytics/platforms/{serviceName}/status
                $get(): Promise<analytics.cluster.deploy.Status[]>;
            }
            terminate: {
                // POST /analytics/platforms/{serviceName}/terminate
                $post(): Promise<string>;
            }
        } | any
    }
}
// Api
type PathsAnalyticsGET = '/analytics/capabilities/platforms' |
  '/analytics/platforms' |
  '/analytics/platforms/{serviceName}' |
  '/analytics/platforms/{serviceName}/activity' |
  '/analytics/platforms/{serviceName}/nodes' |
  '/analytics/platforms/{serviceName}/nodes/{nodeId}' |
  '/analytics/platforms/{serviceName}/serviceInfos' |
  '/analytics/platforms/{serviceName}/status';

type PathsAnalyticsPUT = '/analytics/platforms/{serviceName}/serviceInfos';

type PathsAnalyticsPOST = '/analytics/platforms/{serviceName}/changeContact' |
  '/analytics/platforms/{serviceName}/confirmTermination' |
  '/analytics/platforms/{serviceName}/deploy' |
  '/analytics/platforms/{serviceName}/terminate';

export class ApiAnalytics extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * 
   * Platform capabilities
   */
  public get(path: '/analytics/capabilities/platforms'): Promise<analytics.platform.Capability[]>;
  /**
   * 
   * List available services
   */
  public get(path: '/analytics/platforms'): Promise<string[]>;
  /**
   * 
   * Get details about a service
   */
  public get(path: '/analytics/platforms/{serviceName}', params: {serviceName: string}): Promise<analytics.Cluster>;
  /**
   * 
   * Get activity logs
   */
  public get(path: '/analytics/platforms/{serviceName}/activity', params: {serviceName: string}): Promise<analytics.cluster.Activity[]>;
  /**
   * 
   * List available nodes
   */
  public get(path: '/analytics/platforms/{serviceName}/nodes', params: {serviceName: string}): Promise<string[]>;
  /**
   * 
   * Get details about nodes
   */
  public get(path: '/analytics/platforms/{serviceName}/nodes/{nodeId}', params: {nodeId: string, serviceName: string}): Promise<analytics.cluster.Node>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/analytics/platforms/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * 
   * Get cluster deployment status
   */
  public get(path: '/analytics/platforms/{serviceName}/status', params: {serviceName: string}): Promise<analytics.cluster.deploy.Status[]>;
  public get(path: PathsAnalyticsGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/analytics/platforms/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  public put(path: PathsAnalyticsPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/analytics/platforms/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/analytics/platforms/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * 
   * Deploy an Analytics Data Platform
   */
  public post(path: '/analytics/platforms/{serviceName}/deploy', params: {serviceName: string, clusterName: string, clusterType: string, edgeNodeStorage: number, hdfsEffectiveStorage: number, hdfsReplicationFactor: number, masterNodeStorage: number, masterPassword: string, nodes: OVH.analytics.node.Deploy[], osProjectId: string, osProjectName: string, osRegion: string, osToken: string, sshPublicKey: string}): Promise<analytics.cluster.Deploy>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/analytics/platforms/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  public post(path: PathsAnalyticsPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
}
}