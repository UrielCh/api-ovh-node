import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dedicated/housing Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace dedicated {
    type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete";
    type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo";
    namespace housing {
        interface ApcOrderable {
            free: boolean;
            orderable: boolean;
        }
        type DatacenterEnum = "gsw" | "pdc1";
        type HaRoutingOfferEnum = "ha2x2" | "ha2x4";
        interface HaRoutingOrderable {
            offer: dedicated.housing.HaRoutingOfferEnum[];
            orderable: boolean;
        }
        interface Housing {
            datacenter?: dedicated.housing.DatacenterEnum;
            name: string;
            network: dedicated.housing.NetworkInfo[];
            options: dedicated.housing.Options;
            rack: string;
            securityCode: string;
        }
        interface IpInfo {
            gateway?: string;
            network: string;
            reservedAddresses?: string[];
        }
        interface LinkInfo {
            port: string;
            router: string;
        }
        interface NetworkInfo {
            ipv4?: dedicated.housing.IpInfo;
            ipv6?: dedicated.housing.IpInfo;
            link?: dedicated.housing.LinkInfo;
        }
        interface Options {
            apcCount: number;
            handsneyes: boolean;
            highAvailabilityRouting: string;
        }
        interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.housing.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
        }
        type TaskFunctionEnum = "applyBackupFtpAcls" | "applyBackupFtpQuota" | "changePasswordBackupFTP" | "createBackupFTP" | "migrateBackupFTP" | "removeBackupFTP";
    }
    namespace server {
        interface BackupFtp {
            ftpBackupName: string;
            quota?: complexType.UnitAndValue<number>;
            readOnlyDate?: string;
            type: dedicated.server.BackupStorageTypeEnum;
            usage?: complexType.UnitAndValue<number>;
        }
        interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        type BackupStorageTypeEnum = "included" | "storage";
        interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
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
/**
 * END API /dedicated/housing Models
 */
export declare function proxyDedicatedHousing(ovhEngine: OvhRequestable): Dedicated;
export default proxyDedicatedHousing;
/**
 * Api Proxy model
 */ export interface Dedicated {
    housing: {
        $get(): Promise<string[]>;
        $(serviceName: string): {
            $get(): Promise<dedicated.housing.Housing>;
            features: {
                backupFTP: {
                    $delete(): Promise<dedicated.server.Task>;
                    $get(): Promise<dedicated.server.BackupFtp>;
                    $post(): Promise<dedicated.server.Task>;
                    access: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            cifs: boolean;
                            ftp?: boolean;
                            ipBlock: string;
                            nfs: boolean;
                        }): Promise<dedicated.server.Task>;
                        $(ipBlock: string): {
                            $delete(): Promise<dedicated.server.Task>;
                            $get(): Promise<dedicated.server.BackupFtpAcl>;
                            $put(params?: {
                                cifs?: boolean;
                                ftp?: boolean;
                                ipBlock?: string;
                                isApplied?: boolean;
                                lastUpdate?: string;
                                nfs?: boolean;
                            }): Promise<void>;
                        };
                    };
                    authorizableBlocks: {
                        $get(): Promise<string[]>;
                    };
                    password: {
                        $post(): Promise<dedicated.server.Task>;
                    };
                };
            };
            orderable: {
                APC: {
                    $get(): Promise<dedicated.housing.ApcOrderable>;
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
            task: {
                $get(params?: {
                    function_?: dedicated.housing.TaskFunctionEnum;
                    status?: dedicated.TaskStatusEnum;
                }): Promise<number[]>;
                $(taskId: number): {
                    $get(): Promise<dedicated.housing.Task>;
                    cancel: {
                        $post(): Promise<void>;
                    };
                };
            };
        };
    };
    /**
     * Operations about the HOUSING service
     * List available services
     */
    get(path: '/dedicated/housing'): () => Promise<string[]>;
    /**
     * Housing bay
     * Get this object properties
     */
    get(path: '/dedicated/housing/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<dedicated.housing.Housing>;
    /**
     * Backup Ftp assigned to this server
     * Get this object properties
     */
    get(path: '/dedicated/housing/{serviceName}/features/backupFTP'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.BackupFtp>;
    /**
     * List the dedicated.server.BackupFtpAcl objects
     * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
     */
    get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Backup Ftp ACL for this server and Backup Ftp
     * Get this object properties
     */
    get(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {
        ipBlock: string;
        serviceName: string;
    }) => Promise<dedicated.server.BackupFtpAcl>;
    /**
     * authorizableBlocks operations
     * Get all IP blocks that can be used in the ACL
     */
    get(path: '/dedicated/housing/{serviceName}/features/backupFTP/authorizableBlocks'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * APC operations
     * Is an APC orderable for this housing bay
     */
    get(path: '/dedicated/housing/{serviceName}/orderable/APC'): (params: {
        serviceName: string;
    }) => Promise<dedicated.housing.ApcOrderable>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/dedicated/housing/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the dedicated.housing.Task objects
     * View task list
     */
    get(path: '/dedicated/housing/{serviceName}/task'): (params: {
        serviceName: string;
        function_?: dedicated.housing.TaskFunctionEnum;
        status?: dedicated.TaskStatusEnum;
    }) => Promise<number[]>;
    /**
     * Housing tasks
     * Get this object properties
     */
    get(path: '/dedicated/housing/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<dedicated.housing.Task>;
    /**
     * Backup Ftp ACL for this server and Backup Ftp
     * Alter this object properties
     */
    put(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {
        ipBlock: string;
        serviceName: string;
        cifs?: boolean;
        ftp?: boolean;
        isApplied?: boolean;
        lastUpdate?: string;
        nfs?: boolean;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/dedicated/housing/{serviceName}/serviceInfos'): (params: {
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
     * Backup Ftp assigned to this server
     * Create a new Backup FTP space
     */
    post(path: '/dedicated/housing/{serviceName}/features/backupFTP'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * List the dedicated.server.BackupFtpAcl objects
     * Create a new Backup FTP ACL
     */
    post(path: '/dedicated/housing/{serviceName}/features/backupFTP/access'): (params: {
        serviceName: string;
        cifs: boolean;
        ftp?: boolean;
        ipBlock: string;
        nfs: boolean;
    }) => Promise<dedicated.server.Task>;
    /**
     * password operations
     * Change your Backup FTP password
     */
    post(path: '/dedicated/housing/{serviceName}/features/backupFTP/password'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * cancel operations
     * this action stop the task progression if it's possible
     */
    post(path: '/dedicated/housing/{serviceName}/task/{taskId}/cancel'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<void>;
    /**
     * Backup Ftp assigned to this server
     * Terminate your Backup FTP service, ALL DATA WILL BE PERMANENTLY DELETED
     */
    delete(path: '/dedicated/housing/{serviceName}/features/backupFTP'): (params: {
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
    /**
     * Backup Ftp ACL for this server and Backup Ftp
     * Revoke this ACL
     */
    delete(path: '/dedicated/housing/{serviceName}/features/backupFTP/access/{ipBlock}'): (params: {
        ipBlock: string;
        serviceName: string;
    }) => Promise<dedicated.server.Task>;
}
