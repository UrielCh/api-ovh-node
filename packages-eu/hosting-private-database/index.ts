import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /hosting/privateDatabase Models
 * Source: https://eu.api.ovh.com/1.0/hosting/privateDatabase.json
 */
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace hosting {
    export namespace PrivateDatabase {
        // interface fullName: hosting.PrivateDatabase.AvailableOrderCapacities.AvailableOrderCapacities
        export interface AvailableOrderCapacities {
            datacenter: hosting.PrivateDatabase.DatacenterEnum[];
            offer: hosting.PrivateDatabase.OfferEnum;
            ram: hosting.PrivateDatabase.AvailableRamSizeEnum[];
            version: hosting.PrivateDatabase.AvailableVersionEnum[];
        }
        // type fullname: hosting.PrivateDatabase.AvailableRamSizeEnum
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        // type fullname: hosting.PrivateDatabase.AvailableVersionEnum
        export type AvailableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mongodb_3.4" | "mongodb_4.0" | "mysql_4.1" | "mysql_5.0" | "mysql_5.1" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_12" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0"
        // interface fullName: hosting.PrivateDatabase.Capability.Capability
        export interface Capability {
            create: boolean;
            delete: boolean;
            object: string;
            update: boolean;
        }
        export namespace Configuration {
            // interface fullName: hosting.PrivateDatabase.Configuration.Detail.Detail
            export interface Detail {
                availableValues: string[];
                defaultValue: string;
                description: string;
                key: string;
                lastUpdate: string;
                type: hosting.PrivateDatabase.Configuration.DetailType;
                unit?: string;
                value: string;
            }
            // type fullname: hosting.PrivateDatabase.Configuration.DetailType
            export type DetailType = "boolean" | "number" | "string"
            // type fullname: hosting.PrivateDatabase.Configuration.Status
            export type Status = "applied" | "updating"
        }
        export namespace Database {
            export namespace Extension {
                // type fullname: hosting.PrivateDatabase.Database.Extension.Status
                export type Status = "disabled" | "disabling" | "enabled" | "enabling"
            }
            // interface fullName: hosting.PrivateDatabase.Database.User.User
            export interface User {
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
                userName: string;
            }
        }
        // type fullname: hosting.PrivateDatabase.DatacenterEnum
        export type DatacenterEnum = "gra1" | "gra2" | "p19"
        // interface fullName: hosting.PrivateDatabase.GraphEndpoint.GraphEndpoint
        export interface GraphEndpoint {
            host: string;
            readToken: string;
            readTokenId: string;
        }
        // type fullname: hosting.PrivateDatabase.OfferEnum
        export type OfferEnum = "classic" | "public"
        // interface fullName: hosting.PrivateDatabase.Oom.Oom
        export interface Oom {
            date: string;
            sizeReached: number;
        }
        // type fullname: hosting.PrivateDatabase.StateEnum
        export type StateEnum = "detached" | "restartPending" | "startPending" | "started" | "stopPending" | "stopped"
        // interface fullName: hosting.PrivateDatabase.TemporaryLogsLink.TemporaryLogsLink
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        // type fullname: hosting.PrivateDatabase.TypeEnum
        export type TypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
        export namespace User {
            // interface fullName: hosting.PrivateDatabase.User.Database.Database
            export interface Database {
                databaseName: string;
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
            }
        }
        export namespace Whitelist {
            // type fullname: hosting.PrivateDatabase.Whitelist.Status
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
        export namespace grant {
            // type fullname: hosting.PrivateDatabase.grant.GrantEnum
            export type GrantEnum = "admin" | "none" | "ro" | "rw"
        }
        export namespace task {
            // type fullname: hosting.PrivateDatabase.task.FunctionEnum
            export type FunctionEnum = "boot" | "changeFtpPassword" | "changeRam" | "changeRootPassword" | "changeVersion" | "configuration/update" | "create" | "database/create" | "database/delete" | "database/dump" | "database/dump/delete" | "database/extension/create" | "database/extension/delete" | "database/import" | "database/restore" | "database/wizard" | "delete" | "grant/create" | "grant/delete" | "grant/update" | "halt" | "install" | "refresh" | "reopen" | "restart" | "restore" | "start" | "stop" | "suspend" | "user/changePassword" | "user/create" | "user/delete" | "whitelist/create" | "whitelist/delete" | "whitelist/update"
            // type fullname: hosting.PrivateDatabase.task.StatusEnum
            export type StatusEnum = "cancelled" | "doing" | "done" | "error" | "init" | "todo"
        }
    }
    export namespace privateDatabase {
        // interface fullName: hosting.privateDatabase.Configuration.Configuration
        export interface Configuration {
            details: hosting.PrivateDatabase.Configuration.Detail[];
            lastUpdate: string;
            status: hosting.PrivateDatabase.Configuration.Status;
            taskId?: string;
        }
        // interface fullName: hosting.privateDatabase.Service.Service
        export interface Service {
            capabilities: hosting.PrivateDatabase.Capability[];
            cpu: number;
            datacenter: hosting.PrivateDatabase.DatacenterEnum;
            displayName?: string;
            graphEndpoint?: hosting.PrivateDatabase.GraphEndpoint;
            guiURL?: string;
            hostname?: string;
            hostnameFtp?: string;
            infrastructure: string;
            ip?: string;
            lastCheck: string;
            offer: hosting.PrivateDatabase.OfferEnum;
            port: number;
            portFtp?: number;
            quotaSize: complexType.UnitAndValue<number>;
            quotaUsed: complexType.UnitAndValue<number>;
            ram: complexType.UnitAndValue<number>;
            server?: string;
            serviceName: string;
            state: hosting.PrivateDatabase.StateEnum;
            tlsCa?: string;
            type: hosting.PrivateDatabase.TypeEnum;
            version: hosting.PrivateDatabase.AvailableVersionEnum;
            versionLabel: string;
            versionNumber: number;
        }
        // interface fullName: hosting.privateDatabase.database.database
        export interface database {
            backupTime?: string;
            creationDate: string;
            databaseName: string;
            quotaUsed: complexType.UnitAndValue<number>;
            users: hosting.PrivateDatabase.Database.User[];
        }
        // interface fullName: hosting.privateDatabase.database_dump.database_dump
        export interface database_dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            id: number;
            url: string;
        }
        // interface fullName: hosting.privateDatabase.database_extension.database_extension
        export interface database_extension {
            description: string;
            extensionName: string;
            requiredExtensions: string[];
            status: hosting.PrivateDatabase.Database.Extension.Status;
        }
        // interface fullName: hosting.privateDatabase.dump.dump
        export interface dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            dumpId: number;
            orphan: boolean;
            url: string;
        }
        // interface fullName: hosting.privateDatabase.grant.grant
        export interface grant {
            creationDate: string;
            databaseName: string;
            grant: hosting.PrivateDatabase.grant.GrantEnum;
        }
        // interface fullName: hosting.privateDatabase.task.task
        export interface task {
            databaseName?: string;
            doneDate?: string;
            dumpId?: number;
            function: hosting.PrivateDatabase.task.FunctionEnum;
            id: number;
            lastUpdate?: string;
            startDate: string;
            status: hosting.PrivateDatabase.task.StatusEnum;
            userName?: string;
        }
        // interface fullName: hosting.privateDatabase.user.user
        export interface user {
            creationDate: string;
            databases: hosting.PrivateDatabase.User.Database[];
            userName: string;
        }
        // interface fullName: hosting.privateDatabase.whitelist.whitelist
        export interface whitelist {
            creationDate: string;
            ip: string;
            lastUpdate: string;
            name?: string;
            service: boolean;
            sftp: boolean;
            status: hosting.PrivateDatabase.Whitelist.Status;
            taskId?: string;
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
    // type fullname: service.TerminationFutureUseEnum
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    // type fullname: service.TerminationReasonEnum
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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

/**
 * END API /hosting/privateDatabase Models
 */
export function proxyHostingPrivateDatabase(ovhEngine: OvhRequestable): Hosting {
    return buildOvhProxy(ovhEngine, '/hosting');
}
export default proxyHostingPrivateDatabase;
/**
 * Api Proxy model
 */// Apis harmony
// path /hosting
export interface Hosting {
    privateDatabase: {
        // GET /hosting/privateDatabase
        $get(): Promise<string[]>;
        availableOrderCapacities: {
            // GET /hosting/privateDatabase/availableOrderCapacities
            $get(params: { offer: hosting.PrivateDatabase.OfferEnum }): Promise<hosting.PrivateDatabase.AvailableOrderCapacities>;
        }
        $(serviceName: string): {
            // GET /hosting/privateDatabase/{serviceName}
            $get(): Promise<hosting.privateDatabase.Service>;
            // PUT /hosting/privateDatabase/{serviceName}
            $put(params?: { capabilities?: hosting.PrivateDatabase.Capability[], cpu?: number, datacenter?: hosting.PrivateDatabase.DatacenterEnum, displayName?: string, graphEndpoint?: hosting.PrivateDatabase.GraphEndpoint, guiURL?: string, hostname?: string, hostnameFtp?: string, infrastructure?: string, ip?: string, lastCheck?: string, offer?: hosting.PrivateDatabase.OfferEnum, port?: number, portFtp?: number, quotaSize?: complexType.UnitAndValue<number>, quotaUsed?: complexType.UnitAndValue<number>, ram?: complexType.UnitAndValue<number>, server?: string, serviceName?: string, state?: hosting.PrivateDatabase.StateEnum, tlsCa?: string, type?: hosting.PrivateDatabase.TypeEnum, version?: hosting.PrivateDatabase.AvailableVersionEnum, versionLabel?: string, versionNumber?: number }): Promise<void>;
            availableVersions: {
                // GET /hosting/privateDatabase/{serviceName}/availableVersions
                $get(): Promise<hosting.PrivateDatabase.AvailableVersionEnum[]>;
            }
            changeContact: {
                // POST /hosting/privateDatabase/{serviceName}/changeContact
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
            }
            changeFtpPassword: {
                // POST /hosting/privateDatabase/{serviceName}/changeFtpPassword
                $post(params: { password: string }): Promise<hosting.privateDatabase.task>;
            }
            changeVersion: {
                // POST /hosting/privateDatabase/{serviceName}/changeVersion
                $post(params: { version: hosting.PrivateDatabase.AvailableVersionEnum }): Promise<hosting.privateDatabase.task>;
            }
            config: {
                // GET /hosting/privateDatabase/{serviceName}/config
                $get(): Promise<hosting.privateDatabase.Configuration>;
                update: {
                    // POST /hosting/privateDatabase/{serviceName}/config/update
                    $post(params: { parameters: complexType.SafeKeyValue<string>[] }): Promise<hosting.privateDatabase.Configuration>;
                }
            }
            confirmTermination: {
                // POST /hosting/privateDatabase/{serviceName}/confirmTermination
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            database: {
                // GET /hosting/privateDatabase/{serviceName}/database
                $get(): Promise<string[]>;
                // POST /hosting/privateDatabase/{serviceName}/database
                $post(params: { databaseName: string }): Promise<hosting.privateDatabase.task>;
                $(databaseName: string): {
                    // DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/database/{databaseName}
                    $get(): Promise<hosting.privateDatabase.database>;
                    dump: {
                        // GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                        $get(params?: { creationDate?: string, deletionDate?: string }): Promise<number[]>;
                        // POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                        $post(params?: { sendEmail?: boolean }): Promise<hosting.privateDatabase.task>;
                        $(id: number): {
                            // DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}
                            $delete(): Promise<hosting.privateDatabase.task>;
                            // GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}
                            $get(): Promise<hosting.privateDatabase.database_dump>;
                            restore: {
                                // POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore
                                $post(): Promise<hosting.privateDatabase.task>;
                            }
                        };
                    }
                    extension: {
                        // GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension
                        $get(params?: { extensionName?: string, status?: hosting.PrivateDatabase.Database.Extension.Status }): Promise<string[]>;
                        $(extensionName: string): {
                            // GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}
                            $get(): Promise<hosting.privateDatabase.database_extension>;
                            disable: {
                                // POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable
                                $post(): Promise<hosting.privateDatabase.task>;
                            }
                            enable: {
                                // POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable
                                $post(): Promise<hosting.privateDatabase.task>;
                            }
                        };
                    }
                    import: {
                        // POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/import
                        $post(params: { documentId: string, flushDatabase?: boolean, sendEmail?: boolean }): Promise<hosting.privateDatabase.task>;
                    }
                };
            }
            databaseWizard: {
                // POST /hosting/privateDatabase/{serviceName}/databaseWizard
                $post(params: { databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum, password: string, userName: string }): Promise<hosting.privateDatabase.task>;
            }
            dump: {
                // GET /hosting/privateDatabase/{serviceName}/dump
                $get(params?: { databaseName?: string, orphan?: boolean }): Promise<number[]>;
                $(dumpId: number): {
                    // DELETE /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                    $get(): Promise<hosting.privateDatabase.dump>;
                    restore: {
                        // POST /hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore
                        $post(params: { databaseName: string }): Promise<hosting.privateDatabase.task>;
                    }
                };
            }
            generateTemporaryLogsLink: {
                // POST /hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink
                $post(): Promise<hosting.PrivateDatabase.TemporaryLogsLink>;
            }
            oom: {
                // GET /hosting/privateDatabase/{serviceName}/oom
                $get(): Promise<hosting.PrivateDatabase.Oom[]>;
            }
            quotaRefresh: {
                // POST /hosting/privateDatabase/{serviceName}/quotaRefresh
                $post(): Promise<hosting.privateDatabase.task>;
            }
            restart: {
                // POST /hosting/privateDatabase/{serviceName}/restart
                $post(): Promise<hosting.privateDatabase.task>;
            }
            serviceInfos: {
                // GET /hosting/privateDatabase/{serviceName}/serviceInfos
                $get(): Promise<services.Service>;
                // PUT /hosting/privateDatabase/{serviceName}/serviceInfos
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            }
            start: {
                // POST /hosting/privateDatabase/{serviceName}/start
                $post(): Promise<hosting.privateDatabase.task>;
            }
            stop: {
                // POST /hosting/privateDatabase/{serviceName}/stop
                $post(): Promise<hosting.privateDatabase.task>;
            }
            tasks: {
                // GET /hosting/privateDatabase/{serviceName}/tasks
                $get(params?: { function_?: hosting.PrivateDatabase.task.FunctionEnum, status?: hosting.PrivateDatabase.task.StatusEnum }): Promise<number[]>;
                $(id: number): {
                    // GET /hosting/privateDatabase/{serviceName}/tasks/{id}
                    $get(): Promise<hosting.privateDatabase.task>;
                };
            }
            terminate: {
                // POST /hosting/privateDatabase/{serviceName}/terminate
                $post(): Promise<string>;
            }
            user: {
                // GET /hosting/privateDatabase/{serviceName}/user
                $get(): Promise<string[]>;
                // POST /hosting/privateDatabase/{serviceName}/user
                $post(params: { password: string, userName: string }): Promise<hosting.privateDatabase.task>;
                $(userName: string): {
                    // DELETE /hosting/privateDatabase/{serviceName}/user/{userName}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/user/{userName}
                    $get(): Promise<hosting.privateDatabase.user>;
                    changePassword: {
                        // POST /hosting/privateDatabase/{serviceName}/user/{userName}/changePassword
                        $post(params: { password: string }): Promise<hosting.privateDatabase.task>;
                    }
                    grant: {
                        // GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                        $get(): Promise<string[]>;
                        // POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                        $post(params: { databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum }): Promise<hosting.privateDatabase.task>;
                        $(databaseName: string): {
                            // DELETE /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                            $delete(): Promise<hosting.privateDatabase.task>;
                            // GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                            $get(): Promise<hosting.privateDatabase.grant>;
                            update: {
                                // POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update
                                $post(params: { grant: hosting.PrivateDatabase.grant.GrantEnum }): Promise<hosting.privateDatabase.task>;
                            }
                        };
                    }
                };
            }
            webs: {
                // GET /hosting/privateDatabase/{serviceName}/webs
                $get(): Promise<string[]>;
            }
            whitelist: {
                // GET /hosting/privateDatabase/{serviceName}/whitelist
                $get(params?: { ip?: string, service?: boolean, sftp?: boolean }): Promise<string[]>;
                // POST /hosting/privateDatabase/{serviceName}/whitelist
                $post(params: { ip: string, name?: string, service?: boolean, sftp?: boolean }): Promise<hosting.privateDatabase.task>;
                $(ip: string): {
                    // DELETE /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                    $get(): Promise<hosting.privateDatabase.whitelist>;
                    // PUT /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                    $put(params?: { creationDate?: string, ip?: string, lastUpdate?: string, name?: string, service?: boolean, sftp?: boolean, status?: hosting.PrivateDatabase.Whitelist.Status, taskId?: string }): Promise<void>;
                };
            }
        };
    }
}
