import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /caas/containers Models
 */
export declare namespace docker {
    namespace framework {
        interface password {
            password: string;
        }
    }
    interface slave {
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
    namespace slave {
        interface flavor {
            bandwidth: number;
            cpus: number;
            disk: number;
            diskHa: boolean;
            id: string;
            isVm: boolean;
            ram: number;
        }
        namespace framework {
            interface app {
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
            namespace app {
                interface environment {
                    key?: string;
                    value?: string;
                }
                interface port {
                    containerPort?: number;
                    hostPort?: number;
                    protocol?: string;
                }
                interface volume {
                    containerPath?: number;
                    hostPath?: number;
                    mode?: string;
                }
            }
        }
        interface metrics {
            resources: docker.slave.metrics.resources;
            usedResources: docker.slave.metrics.usedResources;
        }
        namespace metrics {
            interface resources {
                cpu?: number;
                mem?: number;
            }
            interface usedResources {
                cpu?: number;
                mem?: number;
            }
        }
        type status = "blocked" | "created" | "creating";
    }
    interface stack {
        cluster?: string;
        createdAt: string;
        loadBalancer: string;
        metrics: docker.slave.metrics;
        name: string;
        slaves: string[];
        updatedAt: string;
    }
    namespace stack {
        interface customSsl {
            certificate: string;
            createdAt: string;
            updatedAt: string;
        }
        interface customSslMessage {
            message: string;
        }
        interface inputCustomSsl {
            certificate: string;
            key: string;
        }
        interface registryCredentials {
            createdAt: string;
            registryUrl: string;
            updatedAt: string;
            username: string;
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
export declare namespace stack {
    interface framework {
        accessUrl: string;
        createdAt: string;
        id: string;
        name: string;
        updatedAt: string;
    }
    namespace framework {
        interface application {
            apps: docker.slave.framework.app[];
        }
    }
}
/**
 * END API /caas/containers Models
 */
export declare function proxyCaasContainers(ovhEngine: OvhRequestable): Caas;
export default proxyCaasContainers;
/**
 * Api Proxy model
 */ export interface Caas {
    containers: {
        $get(): Promise<string[]>;
        slaves: {
            flavors: {
                $get(): Promise<string[]>;
                $(flavorId: string): {
                    $get(): Promise<docker.slave.flavor>;
                };
            };
        };
        $(serviceName: string): {
            $get(): Promise<docker.stack>;
            availableFrameworks: {
                $get(): Promise<string[]>;
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            frameworks: {
                $get(): Promise<string[]>;
                $(frameworkId: string): {
                    $get(): Promise<stack.framework>;
                    apps: {
                        $get(): Promise<stack.framework.application>;
                    };
                    password: {
                        $put(params?: {
                            password?: string;
                        }): Promise<void>;
                    };
                };
            };
            registry: {
                credentials: {
                    $get(): Promise<string[]>;
                    $post(params?: {
                        certificate?: string;
                        key?: string;
                    }): Promise<docker.stack.registryCredentials>;
                    $(credentialsId: string): {
                        $delete(): Promise<void>;
                        $get(): Promise<docker.stack.registryCredentials>;
                        $put(params?: {
                            certificate?: string;
                            key?: string;
                        }): Promise<docker.stack.registryCredentials>;
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
            slaves: {
                $get(): Promise<string[]>;
                $(slaveId: string): {
                    $get(): Promise<docker.slave>;
                };
            };
            ssl: {
                $delete(): Promise<docker.stack.customSslMessage>;
                $get(): Promise<docker.stack.customSsl>;
                $put(params?: {
                    certificate?: string;
                    key?: string;
                }): Promise<docker.stack.customSslMessage>;
            };
        };
    };
    /**
     * Operations about the DOCKER service
     * List available services
     */
    get(path: '/caas/containers'): () => Promise<string[]>;
    /**
     * Missing description
     * Inspect the argument stack
     */
    get(path: '/caas/containers/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<docker.stack>;
    /**
     * Missing description
     * List all the installable Mesos frameworks
     */
    get(path: '/caas/containers/{serviceName}/availableFrameworks'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * List the frameworks installed on the argument stack
     */
    get(path: '/caas/containers/{serviceName}/frameworks'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect the stack framework
     */
    get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}'): (params: {
        frameworkId: string;
        serviceName: string;
    }) => Promise<stack.framework>;
    /**
     * Missing description
     * List apps in the framework
     */
    get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/apps'): (params: {
        frameworkId: string;
        serviceName: string;
    }) => Promise<stack.framework.application>;
    /**
     * Missing description
     * List the registry credentials associated to the stack.
     */
    get(path: '/caas/containers/{serviceName}/registry/credentials'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect the image registry credentials associated to the stack
     */
    get(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}'): (params: {
        credentialsId: string;
        serviceName: string;
    }) => Promise<docker.stack.registryCredentials>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/caas/containers/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * Missing description
     * List the id of the registered slave instances
     */
    get(path: '/caas/containers/{serviceName}/slaves'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Inspect the argument user slave instance
     */
    get(path: '/caas/containers/{serviceName}/slaves/{slaveId}'): (params: {
        serviceName: string;
        slaveId: string;
    }) => Promise<docker.slave>;
    /**
     * Missing description
     * Inspect the custom SSL certificate and private
     */
    get(path: '/caas/containers/{serviceName}/ssl'): (params: {
        serviceName: string;
    }) => Promise<docker.stack.customSsl>;
    /**
     * Missing description
     * List the /cloud flavors available for the Docker PaaS slaves
     */
    get(path: '/caas/containers/slaves/flavors'): () => Promise<string[]>;
    /**
     * Missing description
     * Inspect the argument slave flavor
     */
    get(path: '/caas/containers/slaves/flavors/{flavorId}'): (params: {
        flavorId: string;
    }) => Promise<docker.slave.flavor>;
    /**
     * Missing description
     * Update the framework access password
     */
    put(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/password'): (params: {
        frameworkId: string;
        serviceName: string;
        password?: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Update the registry credentials.
     */
    put(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}'): (params: {
        credentialsId: string;
        serviceName: string;
        certificate?: string;
        key?: string;
    }) => Promise<docker.stack.registryCredentials>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/caas/containers/{serviceName}/serviceInfos'): (params: {
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
     * Missing description
     * Update the custom SSL certificate and private
     */
    put(path: '/caas/containers/{serviceName}/ssl'): (params: {
        serviceName: string;
        certificate?: string;
        key?: string;
    }) => Promise<docker.stack.customSslMessage>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/caas/containers/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * Missing description
     * Associate the stack with some credentials to an authenticated registry.
     */
    post(path: '/caas/containers/{serviceName}/registry/credentials'): (params: {
        serviceName: string;
        certificate?: string;
        key?: string;
    }) => Promise<docker.stack.registryCredentials>;
    /**
     * Missing description
     * Delete the registry credentials.
     */
    delete(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}'): (params: {
        credentialsId: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * Missing description
     * Delete the custom SSL certificate and private key associated to the stack
     */
    delete(path: '/caas/containers/{serviceName}/ssl'): (params: {
        serviceName: string;
    }) => Promise<docker.stack.customSslMessage>;
}
