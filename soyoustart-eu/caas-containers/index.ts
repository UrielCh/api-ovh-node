import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /caas/containers Models
 * Source: https://eu.api.soyoustart.com/1.0/caas/containers.json
 */
export namespace docker {
    export namespace framework {
        /**
         * The new framework password
         * interface fullName: docker.framework.password.password
         */
        export interface password {
            password: string;
        }
    }
    /**
     * A host on which containers can be deployed
     * interface fullName: docker.slave.slave
     */
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
        /**
         * Attributes of the slave flavor
         * interface fullName: docker.slave.flavor.flavor
         */
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
            /**
             * Application data
             * interface fullName: docker.slave.framework.app.app
             */
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
                /**
                 * Application environment variable
                 * interface fullName: docker.slave.framework.app.environment.environment
                 */
                export interface environment {
                    key?: string;
                    value?: string;
                }
                /**
                 * Application ports
                 * interface fullName: docker.slave.framework.app.port.port
                 */
                export interface port {
                    containerPort?: number;
                    hostPort?: number;
                    protocol?: string;
                }
                /**
                 * Application volumes
                 * interface fullName: docker.slave.framework.app.volume.volume
                 */
                export interface volume {
                    containerPath?: number;
                    hostPath?: number;
                    mode?: string;
                }
            }
        }
        /**
         * Metrics about slave usage
         * interface fullName: docker.slave.metrics.metrics
         */
        export interface metrics {
            resources: docker.slave.metrics.resources;
            usedResources: docker.slave.metrics.usedResources;
        }
        export namespace metrics {
            /**
             * Metrics about available slave resources
             * interface fullName: docker.slave.metrics.resources.resources
             */
            export interface resources {
                cpu?: number;
                mem?: number;
            }
            /**
             * Metrics about used slave resources
             * interface fullName: docker.slave.metrics.usedResources.usedResources
             */
            export interface usedResources {
                cpu?: number;
                mem?: number;
            }
        }
        /**
         * The state of the slave
         * type fullname: docker.slave.status
         */
        export type status = "blocked" | "created" | "creating"
    }
    /**
     * An isolated client Docker PaaS environment
     * interface fullName: docker.stack.stack
     */
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
        /**
         * A custom SSL certificate associated to a Docker PaaS environment
         * interface fullName: docker.stack.customSsl.customSsl
         */
        export interface customSsl {
            certificate: string;
            createdAt: string;
            updatedAt: string;
        }
        /**
         * Action validation message
         * interface fullName: docker.stack.customSslMessage.customSslMessage
         */
        export interface customSslMessage {
            message: string;
        }
        /**
         * A custom SSL certificate associated to a Docker PaaS environment
         * interface fullName: docker.stack.inputCustomSsl.inputCustomSsl
         */
        export interface inputCustomSsl {
            certificate: string;
            key: string;
        }
        /**
         * Credentials providing authentication to an external registry
         * interface fullName: docker.stack.registryCredentials.registryCredentials
         */
        export interface registryCredentials {
            createdAt: string;
            registryUrl: string;
            updatedAt: string;
            username: string;
        }
    }
}
export namespace service {
    /**
     * Map a possible renew for a specific service
     * interface fullName: service.RenewType.RenewType
     */
    export interface RenewType {
        automatic: boolean;
        deleteAtExpiration: boolean;
        forced: boolean;
        manualPayment?: boolean;
        period?: number;
    }
    /**
     * Detailed renewal type of a service
     * type fullname: service.RenewalTypeEnum
     */
    export type RenewalTypeEnum = "automaticForcedProduct" | "automaticV2012" | "automaticV2014" | "automaticV2016" | "manual" | "oneShot" | "option"
    /**
     * type fullname: service.StateEnum
     */
    export type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid"
}
export namespace services {
    /**
     * Details about a Service
     * interface fullName: services.Service.Service
     */
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
    /**
     * A framework installed for a docker PaaS stack
     * interface fullName: stack.framework.framework
     */
    export interface framework {
        accessUrl: string;
        createdAt: string;
        id: string;
        name: string;
        updatedAt: string;
    }
    export namespace framework {
        /**
         * Application deployed on the framework
         * interface fullName: stack.framework.application.application
         */
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
 * Api model for /caas/containers
 */
export interface Caas {
    containers: {
        /**
         * List available services
         * GET /caas/containers
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        slaves: {
            flavors: {
                /**
                 * List the /cloud flavors available for the Docker PaaS slaves
                 * GET /caas/containers/slaves/flavors
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(flavorId: string): {
                    /**
                     * Inspect the argument slave flavor
                     * GET /caas/containers/slaves/flavors/{flavorId}
                     */
                    $get(): Promise<docker.slave.flavor>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        }
        $(serviceName: string): {
            /**
             * Inspect the argument stack
             * GET /caas/containers/{serviceName}
             */
            $get(): Promise<docker.stack>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            availableFrameworks: {
                /**
                 * List all the installable Mesos frameworks
                 * GET /caas/containers/{serviceName}/availableFrameworks
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /caas/containers/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            frameworks: {
                /**
                 * List the frameworks installed on the argument stack
                 * GET /caas/containers/{serviceName}/frameworks
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(frameworkId: string): {
                    /**
                     * Inspect the stack framework
                     * GET /caas/containers/{serviceName}/frameworks/{frameworkId}
                     */
                    $get(): Promise<stack.framework>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    apps: {
                        /**
                         * List apps in the framework
                         * GET /caas/containers/{serviceName}/frameworks/{frameworkId}/apps
                         */
                        $get(): Promise<stack.framework.application>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    password: {
                        /**
                         * Update the framework access password
                         * PUT /caas/containers/{serviceName}/frameworks/{frameworkId}/password
                         */
                        $put(params?: { password?: string }): Promise<void>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            registry: {
                credentials: {
                    /**
                     * List the registry credentials associated to the stack.
                     * GET /caas/containers/{serviceName}/registry/credentials
                     */
                    $get(): Promise<string[]>;
                    /**
                     * Associate the stack with some credentials to an authenticated registry.
                     * POST /caas/containers/{serviceName}/registry/credentials
                     */
                    $post(params?: { certificate?: string, key?: string }): Promise<docker.stack.registryCredentials>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    $(credentialsId: string): {
                        /**
                         * Delete the registry credentials.
                         * DELETE /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                         */
                        $delete(): Promise<void>;
                        /**
                         * Inspect the image registry credentials associated to the stack
                         * GET /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                         */
                        $get(): Promise<docker.stack.registryCredentials>;
                        /**
                         * Update the registry credentials.
                         * PUT /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                         */
                        $put(params?: { certificate?: string, key?: string }): Promise<docker.stack.registryCredentials>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    };
                }
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /caas/containers/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /caas/containers/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            slaves: {
                /**
                 * List the id of the registered slave instances
                 * GET /caas/containers/{serviceName}/slaves
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(slaveId: string): {
                    /**
                     * Inspect the argument user slave instance
                     * GET /caas/containers/{serviceName}/slaves/{slaveId}
                     */
                    $get(): Promise<docker.slave>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            ssl: {
                /**
                 * Delete the custom SSL certificate and private key associated to the stack
                 * DELETE /caas/containers/{serviceName}/ssl
                 */
                $delete(): Promise<docker.stack.customSslMessage>;
                /**
                 * Inspect the custom SSL certificate and private
                 * GET /caas/containers/{serviceName}/ssl
                 */
                $get(): Promise<docker.stack.customSsl>;
                /**
                 * Update the custom SSL certificate and private
                 * PUT /caas/containers/{serviceName}/ssl
                 */
                $put(params?: { certificate?: string, key?: string }): Promise<docker.stack.customSslMessage>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        };
    }
}
