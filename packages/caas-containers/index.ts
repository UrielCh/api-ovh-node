import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /caas/containers Models
 */
export namespace docker {
    export namespace framework {
        //docker.framework.password
        // fullName: docker.framework.password.password
        export interface password {
            password: string;
        }
    }
    //docker.slave
    // fullName: docker.slave.slave
    export interface slave {
        createdAt: string;
        flavorId: string;
        id: string;
        metrics: docker.slave.metrics;
        name: string;
        region: string;
        stack: string;
        state: docker.slave.status;
        updatedAt: string;
    }
    export namespace slave {
        //docker.slave.flavor
        // fullName: docker.slave.flavor.flavor
        export interface flavor {
            bandwidth: number;
            cpus: number;
            disk: number;
            diskHa: boolean;
            id: string;
            isVm: boolean;
            ram: number;
        }
        export namespace framework {
            //docker.slave.framework.app
            // fullName: docker.slave.framework.app.app
            export interface app {
                cpu?: number;
                env: docker.slave.framework.app.environment[];
                id?: string;
                image?: string;
                instances?: number;
                mem?: number;
                ports: docker.slave.framework.app.port[];
                status?: string;
                volumes: docker.slave.framework.app.volume[];
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
            resources: docker.slave.metrics.resources;
            usedResources: docker.slave.metrics.usedResources;
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
        createdAt: string;
        loadBalancer: string;
        metrics: docker.slave.metrics;
        name: string;
        slaves: string[];
        updatedAt: string;
    }
    export namespace stack {
        //docker.stack.customSsl
        // fullName: docker.stack.customSsl.customSsl
        export interface customSsl {
            certificate: string;
            createdAt: string;
            updatedAt: string;
        }
        //docker.stack.customSslMessage
        // fullName: docker.stack.customSslMessage.customSslMessage
        export interface customSslMessage {
            message: string;
        }
        //docker.stack.inputCustomSsl
        // fullName: docker.stack.inputCustomSsl.inputCustomSsl
        export interface inputCustomSsl {
            certificate: string;
            key: string;
        }
        //docker.stack.registryCredentials
        // fullName: docker.stack.registryCredentials.registryCredentials
        export interface registryCredentials {
            createdAt: string;
            registryUrl: string;
            updatedAt: string;
            username: string;
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
        renew?: service.RenewType;
        renewalType: service.RenewalTypeEnum;
        serviceId: number;
        status: service.StateEnum;
    }
}
export namespace stack {
    //stack.framework
    // fullName: stack.framework.framework
    export interface framework {
        accessUrl: string;
        createdAt: string;
        id: string;
        name: string;
        updatedAt: string;
    }
    export namespace framework {
        //stack.framework.application
        // fullName: stack.framework.application.application
        export interface application {
            apps: docker.slave.framework.app[];
        }
    }
}

/**
 * END API /caas/containers Models
 */
export function proxyCaasContainers(ovhEngine: OvhRequestable): Caas {
    return buildOvhProxy(ovhEngine, '/caas');
}
export default proxyCaasContainers;
/**
 * Api Proxy model
 */// Apis harmony
// path /caas
export interface Caas{
    containers: {
        // GET /caas/containers
        $get(): Promise<string[]>;
        slaves: {
            flavors: {
                // GET /caas/containers/slaves/flavors
                $get(): Promise<string[]>;
                $(flavorId: string): {
                    // GET /caas/containers/slaves/flavors/{flavorId}
                    $get(): Promise<docker.slave.flavor>;
                };
            }
        }
        $(serviceName: string): {
            // GET /caas/containers/{serviceName}
            $get(): Promise<docker.stack>;
            availableFrameworks: {
                // GET /caas/containers/{serviceName}/availableFrameworks
                $get(): Promise<string[]>;
            }
            changeContact: {
                // POST /caas/containers/{serviceName}/changeContact
                $post(body?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            frameworks: {
                // GET /caas/containers/{serviceName}/frameworks
                $get(): Promise<string[]>;
                $(frameworkId: string): {
                    // GET /caas/containers/{serviceName}/frameworks/{frameworkId}
                    $get(): Promise<stack.framework>;
                    apps: {
                        // GET /caas/containers/{serviceName}/frameworks/{frameworkId}/apps
                        $get(): Promise<stack.framework.application>;
                    }
                    password: {
                        // PUT /caas/containers/{serviceName}/frameworks/{frameworkId}/password
                        $put(body?: {password?: string}): Promise<void>;
                    }
                };
            }
            registry: {
                credentials: {
                    // GET /caas/containers/{serviceName}/registry/credentials
                    $get(): Promise<string[]>;
                    // POST /caas/containers/{serviceName}/registry/credentials
                    $post(body?: {certificate?: string, key?: string}): Promise<docker.stack.registryCredentials>;
                    $(credentialsId: string): {
                        // DELETE /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        $delete(): Promise<void>;
                        // GET /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        $get(): Promise<docker.stack.registryCredentials>;
                        // PUT /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        $put(body?: {certificate?: string, key?: string}): Promise<docker.stack.registryCredentials>;
                    };
                }
            }
            serviceInfos: {
                // GET /caas/containers/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /caas/containers/{serviceName}/serviceInfos
                $put(body?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
            }
            slaves: {
                // GET /caas/containers/{serviceName}/slaves
                $get(): Promise<string[]>;
                $(slaveId: string): {
                    // GET /caas/containers/{serviceName}/slaves/{slaveId}
                    $get(): Promise<docker.slave>;
                };
            }
            ssl: {
                // DELETE /caas/containers/{serviceName}/ssl
                $delete(): Promise<docker.stack.customSslMessage>;
                // GET /caas/containers/{serviceName}/ssl
                $get(): Promise<docker.stack.customSsl>;
                // PUT /caas/containers/{serviceName}/ssl
                $put(body?: {certificate?: string, key?: string}): Promise<docker.stack.customSslMessage>;
            }
        };
    }
// Api
  /**
   * Operations about the DOCKER service
   * List available services
   */
  get(path: '/caas/containers'): () => Promise<string[]>;
  /**
   * Missing description
   * Inspect the argument stack
   */
  get(path: '/caas/containers/{serviceName}'): (params: {serviceName: string}) => Promise<docker.stack>;
  /**
   * Missing description
   * List all the installable Mesos frameworks
   */
  get(path: '/caas/containers/{serviceName}/availableFrameworks'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * List the frameworks installed on the argument stack
   */
  get(path: '/caas/containers/{serviceName}/frameworks'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect the stack framework
   */
  get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}'): (params: {frameworkId: string, serviceName: string}) => Promise<stack.framework>;
  /**
   * Missing description
   * List apps in the framework
   */
  get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/apps'): (params: {frameworkId: string, serviceName: string}) => Promise<stack.framework.application>;
  /**
   * Missing description
   * List the registry credentials associated to the stack.
   */
  get(path: '/caas/containers/{serviceName}/registry/credentials'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect the image registry credentials associated to the stack
   */
  get(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}'): (params: {credentialsId: string, serviceName: string}) => Promise<docker.stack.registryCredentials>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/caas/containers/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * Missing description
   * List the id of the registered slave instances
   */
  get(path: '/caas/containers/{serviceName}/slaves'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Missing description
   * Inspect the argument user slave instance
   */
  get(path: '/caas/containers/{serviceName}/slaves/{slaveId}'): (params: {serviceName: string, slaveId: string}) => Promise<docker.slave>;
  /**
   * Missing description
   * Inspect the custom SSL certificate and private
   */
  get(path: '/caas/containers/{serviceName}/ssl'): (params: {serviceName: string}) => Promise<docker.stack.customSsl>;
  /**
   * Missing description
   * List the /cloud flavors available for the Docker PaaS slaves
   */
  get(path: '/caas/containers/slaves/flavors'): () => Promise<string[]>;
  /**
   * Missing description
   * Inspect the argument slave flavor
   */
  get(path: '/caas/containers/slaves/flavors/{flavorId}'): (params: {flavorId: string}) => Promise<docker.slave.flavor>;
  /**
   * Missing description
   * Update the framework access password
   */
  put(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/password'): (params: {frameworkId: string, serviceName: string, password?: string}) => Promise<void>;
  /**
   * Missing description
   * Update the registry credentials.
   */
  put(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}'): (params: {credentialsId: string, serviceName: string, certificate?: string, key?: string}) => Promise<docker.stack.registryCredentials>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/caas/containers/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * Missing description
   * Update the custom SSL certificate and private
   */
  put(path: '/caas/containers/{serviceName}/ssl'): (params: {serviceName: string, certificate?: string, key?: string}) => Promise<docker.stack.customSslMessage>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/caas/containers/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * Missing description
   * Associate the stack with some credentials to an authenticated registry.
   */
  post(path: '/caas/containers/{serviceName}/registry/credentials'): (params: {serviceName: string, certificate?: string, key?: string}) => Promise<docker.stack.registryCredentials>;
  /**
   * Missing description
   * Delete the registry credentials.
   */
  delete(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}'): (params: {credentialsId: string, serviceName: string}) => Promise<void>;
  /**
   * Missing description
   * Delete the custom SSL certificate and private key associated to the stack
   */
  delete(path: '/caas/containers/{serviceName}/ssl'): (params: {serviceName: string}) => Promise<docker.stack.customSslMessage>;
}
/**
 * classic Model
 */