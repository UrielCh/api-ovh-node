import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace docker {
    export namespace framework {
        //docker.framework.password
        // fullName: docker.framework.password.password
        export interface password {
            password?: string;
        }
    }
    //docker.slave
    // fullName: docker.slave.slave
    export interface slave {
        createdAt?: string;
        flavorId?: string;
        id?: string;
        metrics?: OVH.docker.slave.metrics;
        name?: string;
        region?: string;
        stack?: string;
        state?: OVH.docker.slave.status;
        updatedAt?: string;
    }
    export namespace slave {
        //docker.slave.flavor
        // fullName: docker.slave.flavor.flavor
        export interface flavor {
            bandwidth?: number;
            cpus?: number;
            disk?: number;
            diskHa?: boolean;
            id?: string;
            isVm?: boolean;
            ram?: number;
        }
        export namespace framework {
            //docker.slave.framework.app
            // fullName: docker.slave.framework.app.app
            export interface app {
                cpu?: number;
                env?: OVH.docker.slave.framework.app.environment[];
                id?: string;
                image?: string;
                instances?: number;
                mem?: number;
                ports?: OVH.docker.slave.framework.app.port[];
                status?: string;
                volumes?: OVH.docker.slave.framework.app.volume[];
            }
            export namespace app {
                //docker.slave.framework.app.environment
                // fullName: docker.slave.framework.app.environment.environment
                export interface environment {
                    key?: string;
                    value?: string;
                }
                //docker.slave.framework.app.port
                // fullName: docker.slave.framework.app.port.port
                export interface port {
                    containerPort?: number;
                    hostPort?: number;
                    protocol?: string;
                }
                //docker.slave.framework.app.volume
                // fullName: docker.slave.framework.app.volume.volume
                export interface volume {
                    containerPath?: number;
                    hostPath?: number;
                    mode?: string;
                }
            }
        }
        //docker.slave.metrics
        // fullName: docker.slave.metrics.metrics
        export interface metrics {
            resources?: OVH.docker.slave.metrics.resources;
            usedResources?: OVH.docker.slave.metrics.usedResources;
        }
        export namespace metrics {
            //docker.slave.metrics.resources
            // fullName: docker.slave.metrics.resources.resources
            export interface resources {
                cpu?: number;
                mem?: number;
            }
            //docker.slave.metrics.usedResources
            // fullName: docker.slave.metrics.usedResources.usedResources
            export interface usedResources {
                cpu?: number;
                mem?: number;
            }
        }
        //docker.slave.status
        export type status = "blocked" | "created" | "creating"
    }
    //docker.stack
    // fullName: docker.stack.stack
    export interface stack {
        cluster?: string;
        createdAt?: string;
        loadBalancer?: string;
        metrics?: OVH.docker.slave.metrics;
        name?: string;
        slaves?: string[];
        updatedAt?: string;
    }
    export namespace stack {
        //docker.stack.customSsl
        // fullName: docker.stack.customSsl.customSsl
        export interface customSsl {
            certificate?: string;
            createdAt?: string;
            updatedAt?: string;
        }
        //docker.stack.customSslMessage
        // fullName: docker.stack.customSslMessage.customSslMessage
        export interface customSslMessage {
            message?: string;
        }
        //docker.stack.inputCustomSsl
        // fullName: docker.stack.inputCustomSsl.inputCustomSsl
        export interface inputCustomSsl {
            certificate?: string;
            key?: string;
        }
        //docker.stack.registryCredentials
        // fullName: docker.stack.registryCredentials.registryCredentials
        export interface registryCredentials {
            createdAt?: string;
            registryUrl?: string;
            updatedAt?: string;
            username?: string;
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
export namespace stack {
    //stack.framework
    // fullName: stack.framework.framework
    export interface framework {
        accessUrl?: string;
        createdAt?: string;
        id?: string;
        name?: string;
        updatedAt?: string;
    }
    export namespace framework {
        //stack.framework.application
        // fullName: stack.framework.application.application
        export interface application {
            apps?: OVH.docker.slave.framework.app[];
        }
    }
}
// Apis harmony
// path /caas
export interface Caas {
    containers:  {
        // GET /caas/containers
        GET(): Promise<string[]>;
        slaves:  {
            flavors:  {
                // GET /caas/containers/slaves/flavors
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /caas/containers/slaves/flavors/{flavorId}
                    GET(): Promise<docker.slave.flavor>;
                } | any
            }
        }
        [keys: string]: {
            // GET /caas/containers/{serviceName}
            GET(): Promise<docker.stack>;
            registry:  {
                credentials:  {
                    // POST /caas/containers/{serviceName}/registry/credentials
                    POST(body?: {body: docker.stack.inputCustomSsl}): Promise<docker.stack.registryCredentials>;
                    // GET /caas/containers/{serviceName}/registry/credentials
                    GET(): Promise<string[]>;
                    [keys: string]: {
                        // PUT /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        PUT(body?: {body: docker.stack.inputCustomSsl}): Promise<docker.stack.registryCredentials>;
                        // GET /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        GET(): Promise<docker.stack.registryCredentials>;
                        // DELETE /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        DELETE(): Promise<void>;
                    } | any
                }
            }
            frameworks:  {
                // GET /caas/containers/{serviceName}/frameworks
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /caas/containers/{serviceName}/frameworks/{frameworkId}
                    GET(): Promise<stack.framework>;
                    apps:  {
                        // GET /caas/containers/{serviceName}/frameworks/{frameworkId}/apps
                        GET(): Promise<stack.framework.application>;
                    }
                    password:  {
                        // PUT /caas/containers/{serviceName}/frameworks/{frameworkId}/password
                        PUT(body?: {body: docker.framework.password}): Promise<void>;
                    }
                } | any
            }
            ssl:  {
                // PUT /caas/containers/{serviceName}/ssl
                PUT(body?: {body: docker.stack.inputCustomSsl}): Promise<docker.stack.customSslMessage>;
                // DELETE /caas/containers/{serviceName}/ssl
                DELETE(): Promise<docker.stack.customSslMessage>;
                // GET /caas/containers/{serviceName}/ssl
                GET(): Promise<docker.stack.customSsl>;
            }
            availableFrameworks:  {
                // GET /caas/containers/{serviceName}/availableFrameworks
                GET(): Promise<string[]>;
            }
            serviceInfos:  {
                // GET /caas/containers/{serviceName}/serviceInfos
                GET(): Promise<services.Service>;
                // PUT /caas/containers/{serviceName}/serviceInfos
                PUT(body?: {body: services.Service}): Promise<void>;
            }
            slaves:  {
                // GET /caas/containers/{serviceName}/slaves
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /caas/containers/{serviceName}/slaves/{slaveId}
                    GET(): Promise<docker.slave>;
                } | any
            }
            changeContact:  {
                // POST /caas/containers/{serviceName}/changeContact
                POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
            }
        } | any
    }
}
// Api
type PathsCaasContainersGET = '/caas/containers/slaves/flavors' |
  '/caas/containers/slaves/flavors/{flavorId}' |
  '/caas/containers' |
  '/caas/containers/{serviceName}/registry/credentials' |
  '/caas/containers/{serviceName}/registry/credentials/{credentialsId}' |
  '/caas/containers/{serviceName}/frameworks' |
  '/caas/containers/{serviceName}/frameworks/{frameworkId}/apps' |
  '/caas/containers/{serviceName}/frameworks/{frameworkId}' |
  '/caas/containers/{serviceName}/ssl' |
  '/caas/containers/{serviceName}/availableFrameworks' |
  '/caas/containers/{serviceName}/serviceInfos' |
  '/caas/containers/{serviceName}/slaves' |
  '/caas/containers/{serviceName}/slaves/{slaveId}' |
  '/caas/containers/{serviceName}';

type PathsCaasContainersPUT = '/caas/containers/{serviceName}/registry/credentials/{credentialsId}' |
  '/caas/containers/{serviceName}/frameworks/{frameworkId}/password' |
  '/caas/containers/{serviceName}/ssl' |
  '/caas/containers/{serviceName}/serviceInfos';

type PathsCaasContainersPOST = '/caas/containers/{serviceName}/registry/credentials' |
  '/caas/containers/{serviceName}/changeContact';

type PathsCaasContainersDELETE = '/caas/containers/{serviceName}/registry/credentials/{credentialsId}' |
  '/caas/containers/{serviceName}/ssl';

export class ApiCaasContainers extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the DOCKER service
   * List available services
   */
  public get(path: '/caas/containers'): Promise<string[]>;
  /**
   * Missing description
   * Inspect the argument stack
   */
  public get(path: '/caas/containers/{serviceName}', params: {serviceName: string}): Promise<docker.stack>;
  /**
   * Missing description
   * List all the installable Mesos frameworks
   */
  public get(path: '/caas/containers/{serviceName}/availableFrameworks', params: {serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * List the frameworks installed on the argument stack
   */
  public get(path: '/caas/containers/{serviceName}/frameworks', params: {serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect the stack framework
   */
  public get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}', params: {frameworkId: string, serviceName: string}): Promise<stack.framework>;
  /**
   * Missing description
   * List apps in the framework
   */
  public get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/apps', params: {frameworkId: string, serviceName: string}): Promise<stack.framework.application>;
  /**
   * Missing description
   * List the registry credentials associated to the stack.
   */
  public get(path: '/caas/containers/{serviceName}/registry/credentials', params: {serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect the image registry credentials associated to the stack
   */
  public get(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', params: {credentialsId: string, serviceName: string}): Promise<docker.stack.registryCredentials>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/caas/containers/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Missing description
   * List the id of the registered slave instances
   */
  public get(path: '/caas/containers/{serviceName}/slaves', params: {serviceName: string}): Promise<string[]>;
  /**
   * Missing description
   * Inspect the argument user slave instance
   */
  public get(path: '/caas/containers/{serviceName}/slaves/{slaveId}', params: {slaveId: string, serviceName: string}): Promise<docker.slave>;
  /**
   * Missing description
   * Inspect the custom SSL certificate and private
   */
  public get(path: '/caas/containers/{serviceName}/ssl', params: {serviceName: string}): Promise<docker.stack.customSsl>;
  /**
   * Missing description
   * List the /cloud flavors available for the Docker PaaS slaves
   */
  public get(path: '/caas/containers/slaves/flavors'): Promise<string[]>;
  /**
   * Missing description
   * Inspect the argument slave flavor
   */
  public get(path: '/caas/containers/slaves/flavors/{flavorId}', params: {flavorId: string}): Promise<docker.slave.flavor>;
  public get(path: PathsCaasContainersGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * Missing description
   * Update the framework access password
   */
  public put(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/password', params: {frameworkId: string, serviceName: string, password?: string}): Promise<void>;
  /**
   * Missing description
   * Update the registry credentials.
   */
  public put(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', params: {credentialsId: string, serviceName: string, certificate?: string, key?: string}): Promise<docker.stack.registryCredentials>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/caas/containers/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Missing description
   * Update the custom SSL certificate and private
   */
  public put(path: '/caas/containers/{serviceName}/ssl', params: {serviceName: string, certificate?: string, key?: string}): Promise<docker.stack.customSslMessage>;
  public put(path: PathsCaasContainersPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/caas/containers/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Missing description
   * Associate the stack with some credentials to an authenticated registry.
   */
  public post(path: '/caas/containers/{serviceName}/registry/credentials', params: {serviceName: string, certificate?: string, key?: string}): Promise<docker.stack.registryCredentials>;
  public post(path: PathsCaasContainersPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Missing description
   * Delete the registry credentials.
   */
  public delete(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', params: {credentialsId: string, serviceName: string}): Promise<void>;
  /**
   * Missing description
   * Delete the custom SSL certificate and private key associated to the stack
   */
  public delete(path: '/caas/containers/{serviceName}/ssl', params: {serviceName: string}): Promise<docker.stack.customSslMessage>;
  public delete(path: PathsCaasContainersDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}