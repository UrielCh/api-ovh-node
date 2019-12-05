import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /license/cloudLinux Models
 */
export declare namespace license {
    type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade";
    interface CloudLinuxOrderConfiguration {
        orderableVersions: license.OrderableCloudLinuxCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    type CloudLinuxVersionEnum = "SINGLE" | "WITH_CPANEL" | "WITH_PLESK12" | "cloudlinux-license";
    type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd";
    interface OrderableCloudLinuxCompatibilityInfos {
        version: license.CloudLinuxVersionEnum;
    }
    type StateEnum = "ok" | "released" | "terminated" | "toDeliver";
    interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo";
    namespace cloudLinux {
        interface CloudLinux {
            creation: string;
            domain: string;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.CloudLinuxVersionEnum;
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
    type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR";
    type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT";
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
/**
 * END API /license/cloudLinux Models
 */
export declare function proxyLicenseCloudLinux(ovhEngine: OvhRequestable): License;
export default proxyLicenseCloudLinux;
/**
 * Api Proxy model
 */ export interface License {
    cloudLinux: {
        $get(): Promise<string[]>;
        orderableVersions: {
            $get(params: {
                ip: string;
            }): Promise<license.CloudLinuxOrderConfiguration[]>;
        };
        $(serviceName: string): {
            $get(): Promise<license.cloudLinux.CloudLinux>;
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
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
            tasks: {
                $get(params?: {
                    action?: license.ActionType;
                    status?: license.TaskStateEnum;
                }): Promise<number[]>;
                $(taskId: number): {
                    $get(): Promise<license.Task>;
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
        };
    };
    /**
     * Operations about the LICENSE service
     * List available services
     */
    get(path: '/license/cloudLinux'): () => Promise<string[]>;
    /**
     * Your CloudLinux license
     * Get this object properties
     */
    get(path: '/license/cloudLinux/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<license.cloudLinux.CloudLinux>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/license/cloudLinux/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the license.Task objects
     * Tasks linked to this license
     */
    get(path: '/license/cloudLinux/{serviceName}/tasks'): (params: {
        serviceName: string;
        action?: license.ActionType;
        status?: license.TaskStateEnum;
    }) => Promise<number[]>;
    /**
     * licenses Todos
     * Get this object properties
     */
    get(path: '/license/cloudLinux/{serviceName}/tasks/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<license.Task>;
    /**
     * Get the orderable CloudLinux versions
     * Get the orderable CloudLinux versions
     */
    get(path: '/license/cloudLinux/orderableVersions'): (params: {
        ip: string;
    }) => Promise<license.CloudLinuxOrderConfiguration[]>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/license/cloudLinux/{serviceName}/serviceInfos'): (params: {
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
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/license/cloudLinux/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/license/cloudLinux/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
}
