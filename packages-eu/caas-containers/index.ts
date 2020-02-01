import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /caas/containers Models
 * Source: https://eu.api.ovh.com/1.0/caas/containers.json
 */
export namespace docker {
    export namespace framework {
        // interface fullName: docker.framework.password.password
        export interface password {
            password: string;
        }
    }
    // interface fullName: docker.slave.slave
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
        // interface fullName: docker.slave.flavor.flavor
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
            // interface fullName: docker.slave.framework.app.app
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
                // interface fullName: docker.slave.framework.app.environment.environment
                export interface environment {
                    key?: string;
                    value?: string;
                }
                // interface fullName: docker.slave.framework.app.port.port
                export interface port {
                    containerPort?: number;
                    hostPort?: number;
                    protocol?: string;
                }
                // interface fullName: docker.slave.framework.app.volume.volume
                export interface volume {
                    containerPath?: number;
                    hostPath?: number;
                    mode?: string;
                }
            }
        }
        // interface fullName: docker.slave.metrics.metrics
        export interface metrics {
            resources: docker.slave.metrics.resources;
            usedResources: docker.slave.metrics.usedResources;
        }
        export namespace metrics {
            // interface fullName: docker.slave.metrics.resources.resources
            export interface resources {
                cpu?: number;
                mem?: number;
            }
            // interface fullName: docker.slave.metrics.usedResources.usedResources
            export interface usedResources {
                cpu?: number;
                mem?: number;
            }
        }
        // type fullname: docker.slave.status
        export type status = "blocked" | "created" | "creating"
    }
    // interface fullName: docker.stack.stack
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
        // interface fullName: docker.stack.customSsl.customSsl
        export interface customSsl {
            certificate: string;
            createdAt: string;
            updatedAt: string;
        }
        // interface fullName: docker.stack.customSslMessage.customSslMessage
        export interface customSslMessage {
            message: string;
        }
        // interface fullName: docker.stack.inputCustomSsl.inputCustomSsl
        export interface inputCustomSsl {
            certificate: string;
            key: string;
        }
        // interface fullName: docker.stack.registryCredentials.registryCredentials
        export interface registryCredentials {
            createdAt: string;
            registryUrl: string;
            updatedAt: string;
            username: string;
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
export namespace stack {
    // interface fullName: stack.framework.framework
    export interface framework {
        accessUrl: string;
        createdAt: string;
        id: string;
        name: string;
        updatedAt: string;
    }
    export namespace framework {
        // interface fullName: stack.framework.application.application
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
export interface Caas {
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
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
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
                        $put(params?: {password?: string}): Promise<void>;
                    }
                };
            }
            registry: {
                credentials: {
                    // GET /caas/containers/{serviceName}/registry/credentials
                    $get(): Promise<string[]>;
                    // POST /caas/containers/{serviceName}/registry/credentials
                    $post(params?: {certificate?: string, key?: string}): Promise<docker.stack.registryCredentials>;
                    $(credentialsId: string): {
                        // DELETE /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        $delete(): Promise<void>;
                        // GET /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        $get(): Promise<docker.stack.registryCredentials>;
                        // PUT /caas/containers/{serviceName}/registry/credentials/{credentialsId}
                        $put(params?: {certificate?: string, key?: string}): Promise<docker.stack.registryCredentials>;
                    };
                }
            }
            serviceInfos: {
                // GET /caas/containers/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /caas/containers/{serviceName}/serviceInfos
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
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
                $put(params?: {certificate?: string, key?: string}): Promise<docker.stack.customSslMessage>;
            }
        };
    }
}
