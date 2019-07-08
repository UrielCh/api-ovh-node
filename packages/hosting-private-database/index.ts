import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /hosting/privateDatabase Models
 */
export namespace complexType {
    //complexType.SafeKeyValue
    // fullName: complexType.SafeKeyValue.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace hosting {
    export namespace PrivateDatabase {
        //hosting.PrivateDatabase.AvailableOrderCapacities
        // fullName: hosting.PrivateDatabase.AvailableOrderCapacities.AvailableOrderCapacities
        export interface AvailableOrderCapacities {
            datacenter: hosting.PrivateDatabase.DatacenterEnum[];
            offer: hosting.PrivateDatabase.OfferEnum;
            ram: hosting.PrivateDatabase.AvailableRamSizeEnum[];
            version: hosting.PrivateDatabase.AvailableVersionEnum[];
        }
        //hosting.PrivateDatabase.AvailableRamSizeEnum
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        //hosting.PrivateDatabase.AvailableVersionEnum
        export type AvailableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mongodb_3.4" | "mongodb_4.0" | "mysql_4.1" | "mysql_5.0" | "mysql_5.1" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0"
        //hosting.PrivateDatabase.Capability
        // fullName: hosting.PrivateDatabase.Capability.Capability
        export interface Capability {
            create: boolean;
            delete: boolean;
            object: string;
            update: boolean;
        }
        export namespace Configuration {
            //hosting.PrivateDatabase.Configuration.Detail
            // fullName: hosting.PrivateDatabase.Configuration.Detail.Detail
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
            //hosting.PrivateDatabase.Configuration.DetailType
            export type DetailType = "boolean" | "number" | "string"
            //hosting.PrivateDatabase.Configuration.Status
            export type Status = "applied" | "updating"
        }
        export namespace Database {
            export namespace Extension {
                //hosting.PrivateDatabase.Database.Extension.Status
                export type Status = "disabled" | "disabling" | "enabled" | "enabling"
            }
            //hosting.PrivateDatabase.Database.User
            // fullName: hosting.PrivateDatabase.Database.User.User
            export interface User {
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
                userName: string;
            }
        }
        //hosting.PrivateDatabase.DatacenterEnum
        export type DatacenterEnum = "gra1" | "gra2" | "p19"
        //hosting.PrivateDatabase.GraphEndpoint
        // fullName: hosting.PrivateDatabase.GraphEndpoint.GraphEndpoint
        export interface GraphEndpoint {
            host: string;
            readToken: string;
            readTokenId: string;
        }
        //hosting.PrivateDatabase.OfferEnum
        export type OfferEnum = "classic" | "public"
        //hosting.PrivateDatabase.Oom
        // fullName: hosting.PrivateDatabase.Oom.Oom
        export interface Oom {
            date: string;
            sizeReached: number;
        }
        //hosting.PrivateDatabase.StateEnum
        export type StateEnum = "detached" | "restartPending" | "startPending" | "started" | "stopPending" | "stopped"
        //hosting.PrivateDatabase.TemporaryLogsLink
        // fullName: hosting.PrivateDatabase.TemporaryLogsLink.TemporaryLogsLink
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        //hosting.PrivateDatabase.TypeEnum
        export type TypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
        export namespace User {
            //hosting.PrivateDatabase.User.Database
            // fullName: hosting.PrivateDatabase.User.Database.Database
            export interface Database {
                databaseName: string;
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
            }
        }
        export namespace Whitelist {
            //hosting.PrivateDatabase.Whitelist.Status
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
        export namespace grant {
            //hosting.PrivateDatabase.grant.GrantEnum
            export type GrantEnum = "admin" | "none" | "ro" | "rw"
        }
        export namespace task {
            //hosting.PrivateDatabase.task.FunctionEnum
            export type FunctionEnum = "boot" | "changeFtpPassword" | "changeRam" | "changeRootPassword" | "changeVersion" | "configuration/update" | "create" | "database/create" | "database/delete" | "database/dump" | "database/dump/delete" | "database/extension/create" | "database/extension/delete" | "database/import" | "database/restore" | "database/wizard" | "delete" | "grant/create" | "grant/delete" | "grant/update" | "halt" | "install" | "refresh" | "reopen" | "restart" | "restore" | "start" | "stop" | "suspend" | "user/changePassword" | "user/create" | "user/delete" | "whitelist/create" | "whitelist/delete" | "whitelist/update"
            //hosting.PrivateDatabase.task.StatusEnum
            export type StatusEnum = "cancelled" | "doing" | "done" | "error" | "init" | "todo"
        }
    }
    export namespace privateDatabase {
        //hosting.privateDatabase.Configuration
        // fullName: hosting.privateDatabase.Configuration.Configuration
        export interface Configuration {
            details: hosting.PrivateDatabase.Configuration.Detail[];
            lastUpdate: string;
            status: hosting.PrivateDatabase.Configuration.Status;
            taskId?: string;
        }
        //hosting.privateDatabase.Service
        // fullName: hosting.privateDatabase.Service.Service
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
            versionNumber: number;
        }
        //hosting.privateDatabase.database
        // fullName: hosting.privateDatabase.database.database
        export interface database {
            backupTime?: string;
            creationDate: string;
            databaseName: string;
            quotaUsed: complexType.UnitAndValue<number>;
            users: hosting.PrivateDatabase.Database.User[];
        }
        //hosting.privateDatabase.database_dump
        // fullName: hosting.privateDatabase.database_dump.database_dump
        export interface database_dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            id: number;
            url: string;
        }
        //hosting.privateDatabase.database_extension
        // fullName: hosting.privateDatabase.database_extension.database_extension
        export interface database_extension {
            description: string;
            extensionName: string;
            requiredExtensions: string[];
            status: hosting.PrivateDatabase.Database.Extension.Status;
        }
        //hosting.privateDatabase.dump
        // fullName: hosting.privateDatabase.dump.dump
        export interface dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            dumpId: number;
            orphan: boolean;
            url: string;
        }
        //hosting.privateDatabase.grant
        // fullName: hosting.privateDatabase.grant.grant
        export interface grant {
            creationDate: string;
            databaseName: string;
            grant: hosting.PrivateDatabase.grant.GrantEnum;
        }
        //hosting.privateDatabase.task
        // fullName: hosting.privateDatabase.task.task
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
        //hosting.privateDatabase.user
        // fullName: hosting.privateDatabase.user.user
        export interface user {
            creationDate: string;
            databases: hosting.PrivateDatabase.User.Database[];
            userName: string;
        }
        //hosting.privateDatabase.whitelist
        // fullName: hosting.privateDatabase.whitelist.whitelist
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
export interface Hosting{
    privateDatabase: {
        // GET /hosting/privateDatabase
        $get(): Promise<string[]>;
        availableOrderCapacities: {
            // GET /hosting/privateDatabase/availableOrderCapacities
            $get(params?: {offer: hosting.PrivateDatabase.OfferEnum}): Promise<hosting.PrivateDatabase.AvailableOrderCapacities>;
        }
        $(serviceName: string): {
            // GET /hosting/privateDatabase/{serviceName}
            $get(): Promise<hosting.privateDatabase.Service>;
            // PUT /hosting/privateDatabase/{serviceName}
            $put(params?: {capabilities?: hosting.PrivateDatabase.Capability[], cpu?: number, datacenter?: hosting.PrivateDatabase.DatacenterEnum, displayName?: string, graphEndpoint?: hosting.PrivateDatabase.GraphEndpoint, guiURL?: string, hostname?: string, hostnameFtp?: string, infrastructure?: string, ip?: string, lastCheck?: string, offer?: hosting.PrivateDatabase.OfferEnum, port?: number, portFtp?: number, quotaSize?: complexType.UnitAndValue<number>, quotaUsed?: complexType.UnitAndValue<number>, ram?: complexType.UnitAndValue<number>, server?: string, serviceName?: string, state?: hosting.PrivateDatabase.StateEnum, tlsCa?: string, type?: hosting.PrivateDatabase.TypeEnum, version?: hosting.PrivateDatabase.AvailableVersionEnum, versionNumber?: number}): Promise<void>;
            availableVersions: {
                // GET /hosting/privateDatabase/{serviceName}/availableVersions
                $get(): Promise<hosting.PrivateDatabase.AvailableVersionEnum[]>;
            }
            changeContact: {
                // POST /hosting/privateDatabase/{serviceName}/changeContact
                $post(params?: {contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
            }
            changeFtpPassword: {
                // POST /hosting/privateDatabase/{serviceName}/changeFtpPassword
                $post(params?: {password: string}): Promise<hosting.privateDatabase.task>;
            }
            changeVersion: {
                // POST /hosting/privateDatabase/{serviceName}/changeVersion
                $post(params?: {version: hosting.PrivateDatabase.AvailableVersionEnum}): Promise<hosting.privateDatabase.task>;
            }
            config: {
                // GET /hosting/privateDatabase/{serviceName}/config
                $get(): Promise<hosting.privateDatabase.Configuration>;
                update: {
                    // POST /hosting/privateDatabase/{serviceName}/config/update
                    $post(params?: {parameters: complexType.SafeKeyValue<string>[]}): Promise<hosting.privateDatabase.Configuration>;
                }
            }
            confirmTermination: {
                // POST /hosting/privateDatabase/{serviceName}/confirmTermination
                $post(params?: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
            }
            database: {
                // GET /hosting/privateDatabase/{serviceName}/database
                $get(): Promise<string[]>;
                // POST /hosting/privateDatabase/{serviceName}/database
                $post(params?: {databaseName: string}): Promise<hosting.privateDatabase.task>;
                $(databaseName: string): {
                    // DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/database/{databaseName}
                    $get(): Promise<hosting.privateDatabase.database>;
                    dump: {
                        // GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                        $get(params?: {creationDate?: string, deletionDate?: string}): Promise<number[]>;
                        // POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                        $post(params?: {sendEmail?: boolean}): Promise<hosting.privateDatabase.task>;
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
                        $get(params?: {extensionName?: string, status?: hosting.PrivateDatabase.Database.Extension.Status}): Promise<string[]>;
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
                        $post(params?: {documentId: string, flushDatabase?: boolean, sendEmail?: boolean}): Promise<hosting.privateDatabase.task>;
                    }
                };
            }
            databaseWizard: {
                // POST /hosting/privateDatabase/{serviceName}/databaseWizard
                $post(params?: {databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum, password: string, userName: string}): Promise<hosting.privateDatabase.task>;
            }
            dump: {
                // GET /hosting/privateDatabase/{serviceName}/dump
                $get(params?: {databaseName?: string, orphan?: boolean}): Promise<number[]>;
                $(dumpId: number): {
                    // DELETE /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                    $get(): Promise<hosting.privateDatabase.dump>;
                    restore: {
                        // POST /hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore
                        $post(params?: {databaseName: string}): Promise<hosting.privateDatabase.task>;
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
            refresh: {
                // POST /hosting/privateDatabase/{serviceName}/refresh
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
                $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
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
                $get(params?: {function_?: hosting.PrivateDatabase.task.FunctionEnum, status?: hosting.PrivateDatabase.task.StatusEnum}): Promise<number[]>;
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
                $post(params?: {password: string, userName: string}): Promise<hosting.privateDatabase.task>;
                $(userName: string): {
                    // DELETE /hosting/privateDatabase/{serviceName}/user/{userName}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/user/{userName}
                    $get(): Promise<hosting.privateDatabase.user>;
                    changePassword: {
                        // POST /hosting/privateDatabase/{serviceName}/user/{userName}/changePassword
                        $post(params?: {password: string}): Promise<hosting.privateDatabase.task>;
                    }
                    grant: {
                        // GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                        $get(): Promise<string[]>;
                        // POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                        $post(params?: {databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum}): Promise<hosting.privateDatabase.task>;
                        $(databaseName: string): {
                            // DELETE /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                            $delete(): Promise<hosting.privateDatabase.task>;
                            // GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                            $get(): Promise<hosting.privateDatabase.grant>;
                            update: {
                                // POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update
                                $post(params?: {grant: hosting.PrivateDatabase.grant.GrantEnum}): Promise<hosting.privateDatabase.task>;
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
                $get(params?: {ip?: string, service?: boolean, sftp?: boolean}): Promise<string[]>;
                // POST /hosting/privateDatabase/{serviceName}/whitelist
                $post(params?: {ip: string, name?: string, service?: boolean, sftp?: boolean}): Promise<hosting.privateDatabase.task>;
                $(ip: string): {
                    // DELETE /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                    $delete(): Promise<hosting.privateDatabase.task>;
                    // GET /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                    $get(): Promise<hosting.privateDatabase.whitelist>;
                    // PUT /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                    $put(params?: {creationDate?: string, ip?: string, lastUpdate?: string, name?: string, service?: boolean, sftp?: boolean, status?: hosting.PrivateDatabase.Whitelist.Status, taskId?: string}): Promise<void>;
                };
            }
        };
    }
// Api
  /**
   * Operations about the SQLPRIVE service
   * List available services
   */
  get(path: '/hosting/privateDatabase'): () => Promise<string[]>;
  /**
   * Private database
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}'): (params: {serviceName: string}) => Promise<hosting.privateDatabase.Service>;
  /**
   * availableVersions operations
   * Get the availables versions for this private database
   */
  get(path: '/hosting/privateDatabase/{serviceName}/availableVersions'): (params: {serviceName: string}) => Promise<hosting.PrivateDatabase.AvailableVersionEnum[]>;
  /**
   * Configuration
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/config'): (params: {serviceName: string}) => Promise<hosting.privateDatabase.Configuration>;
  /**
   * List the hosting.privateDatabase.database objects
   * Databases linked to your private database service
   */
  get(path: '/hosting/privateDatabase/{serviceName}/database'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Databases
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}'): (params: {databaseName: string, serviceName: string}) => Promise<hosting.privateDatabase.database>;
  /**
   * List the hosting.privateDatabase.database.dump objects
   * Dump available for your databases
   */
  get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump'): (params: {databaseName: string, serviceName: string, creationDate?: string, deletionDate?: string}) => Promise<number[]>;
  /**
   * Dump
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}'): (params: {databaseName: string, id: number, serviceName: string}) => Promise<hosting.privateDatabase.database_dump>;
  /**
   * List the hosting.privateDatabase.database.extension objects
   * Extensions linked to your database
   */
  get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension'): (params: {databaseName: string, serviceName: string, extensionName?: string, status?: hosting.PrivateDatabase.Database.Extension.Status}) => Promise<string[]>;
  /**
   * Databases extension
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}'): (params: {databaseName: string, extensionName: string, serviceName: string}) => Promise<hosting.privateDatabase.database_extension>;
  /**
   * List the hosting.privateDatabase.dump objects
   * Dumps available for your private database service
   */
  get(path: '/hosting/privateDatabase/{serviceName}/dump'): (params: {serviceName: string, databaseName?: string, orphan?: boolean}) => Promise<number[]>;
  /**
   * Dump
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}'): (params: {dumpId: number, serviceName: string}) => Promise<hosting.privateDatabase.dump>;
  /**
   * oom operations
   * List of privatesql OOM kill
   */
  get(path: '/hosting/privateDatabase/{serviceName}/oom'): (params: {serviceName: string}) => Promise<hosting.PrivateDatabase.Oom[]>;
  /**
   * Details about a Service
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/serviceInfos'): (params: {serviceName: string}) => Promise<services.Service>;
  /**
   * List the hosting.privateDatabase.task objects
   * Tasks attached to your private database service
   */
  get(path: '/hosting/privateDatabase/{serviceName}/tasks'): (params: {serviceName: string, function_?: hosting.PrivateDatabase.task.FunctionEnum, status?: hosting.PrivateDatabase.task.StatusEnum}) => Promise<number[]>;
  /**
   * Tasks
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/tasks/{id}'): (params: {id: number, serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * List the hosting.privateDatabase.user objects
   * User allowed to connect on your databases
   */
  get(path: '/hosting/privateDatabase/{serviceName}/user'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * Users
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}'): (params: {serviceName: string, userName: string}) => Promise<hosting.privateDatabase.user>;
  /**
   * List the hosting.privateDatabase.grant objects
   * User grant's on your databases
   */
  get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant'): (params: {serviceName: string, userName: string}) => Promise<string[]>;
  /**
   * Grants
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}'): (params: {databaseName: string, serviceName: string, userName: string}) => Promise<hosting.privateDatabase.grant>;
  /**
   * webs operations
   * List linked webs
   */
  get(path: '/hosting/privateDatabase/{serviceName}/webs'): (params: {serviceName: string}) => Promise<string[]>;
  /**
   * List the hosting.privateDatabase.whitelist objects
   * Whitelist allowed on your privatesql
   */
  get(path: '/hosting/privateDatabase/{serviceName}/whitelist'): (params: {serviceName: string, ip?: string, service?: boolean, sftp?: boolean}) => Promise<string[]>;
  /**
   * IP whitelisting for your instance
   * Get this object properties
   */
  get(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}'): (params: {ip: string, serviceName: string}) => Promise<hosting.privateDatabase.whitelist>;
  /**
   * Get available order capacitie
   * Get available order capacitie
   */
  get(path: '/hosting/privateDatabase/availableOrderCapacities'): (params: {offer: hosting.PrivateDatabase.OfferEnum}) => Promise<hosting.PrivateDatabase.AvailableOrderCapacities>;
  /**
   * Private database
   * Alter this object properties
   */
  put(path: '/hosting/privateDatabase/{serviceName}'): (params: {serviceName: string, capabilities?: hosting.PrivateDatabase.Capability[], cpu?: number, datacenter?: hosting.PrivateDatabase.DatacenterEnum, displayName?: string, graphEndpoint?: hosting.PrivateDatabase.GraphEndpoint, guiURL?: string, hostname?: string, hostnameFtp?: string, infrastructure?: string, ip?: string, lastCheck?: string, offer?: hosting.PrivateDatabase.OfferEnum, port?: number, portFtp?: number, quotaSize?: complexType.UnitAndValue<number>, quotaUsed?: complexType.UnitAndValue<number>, ram?: complexType.UnitAndValue<number>, server?: string, state?: hosting.PrivateDatabase.StateEnum, tlsCa?: string, type?: hosting.PrivateDatabase.TypeEnum, version?: hosting.PrivateDatabase.AvailableVersionEnum, versionNumber?: number}) => Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  put(path: '/hosting/privateDatabase/{serviceName}/serviceInfos'): (params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}) => Promise<void>;
  /**
   * IP whitelisting for your instance
   * Alter this object properties
   */
  put(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}'): (params: {ip: string, serviceName: string, creationDate?: string, lastUpdate?: string, name?: string, service?: boolean, sftp?: boolean, status?: hosting.PrivateDatabase.Whitelist.Status, taskId?: string}) => Promise<void>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  post(path: '/hosting/privateDatabase/{serviceName}/changeContact'): (params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}) => Promise<number[]>;
  /**
   * changeFtpPassword operations
   * Change your ftp admin password
   */
  post(path: '/hosting/privateDatabase/{serviceName}/changeFtpPassword'): (params: {serviceName: string, password: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * changeVersion operations
   * Change the private database engine version
   */
  post(path: '/hosting/privateDatabase/{serviceName}/changeVersion'): (params: {serviceName: string, version: hosting.PrivateDatabase.AvailableVersionEnum}) => Promise<hosting.privateDatabase.task>;
  /**
   * update operations
   * Update the configuration
   */
  post(path: '/hosting/privateDatabase/{serviceName}/config/update'): (params: {serviceName: string, parameters: complexType.SafeKeyValue<string>[]}) => Promise<hosting.privateDatabase.Configuration>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  post(path: '/hosting/privateDatabase/{serviceName}/confirmTermination'): (params: {serviceName: string, commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}) => Promise<string>;
  /**
   * List the hosting.privateDatabase.database objects
   * Create a new database on your private database service
   */
  post(path: '/hosting/privateDatabase/{serviceName}/database'): (params: {serviceName: string, databaseName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * List the hosting.privateDatabase.database.dump objects
   * Request the dump of this database ( an email will be send with a link available 30 days )
   */
  post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump'): (params: {databaseName: string, serviceName: string, sendEmail?: boolean}) => Promise<hosting.privateDatabase.task>;
  /**
   * restore operations
   * Request the restore from this dump
   */
  post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore'): (params: {databaseName: string, id: number, serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * disable operations
   * Disable an extension from a database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable'): (params: {databaseName: string, extensionName: string, serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * enable operations
   * Enable an extension on a database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable'): (params: {databaseName: string, extensionName: string, serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * import operations
   * Request the import in this database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/import'): (params: {databaseName: string, serviceName: string, documentId: string, flushDatabase?: boolean, sendEmail?: boolean}) => Promise<hosting.privateDatabase.task>;
  /**
   * databaseWizard operations
   * Create a new database/user and grant it
   */
  post(path: '/hosting/privateDatabase/{serviceName}/databaseWizard'): (params: {serviceName: string, databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum, password: string, userName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * restore operations
   * Request the restore from this dump
   */
  post(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore'): (params: {dumpId: number, serviceName: string, databaseName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * generateTemporaryLogsLink operations
   * Generate a temporary url to retrieve instance logs
   */
  post(path: '/hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink'): (params: {serviceName: string}) => Promise<hosting.PrivateDatabase.TemporaryLogsLink>;
  /**
   * refresh operations
   * Synchronize your informations from your private database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/refresh'): (params: {serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * restart operations
   * Restart the private database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/restart'): (params: {serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * start operations
   * Start the private database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/start'): (params: {serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * stop operations
   * Stop the private database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/stop'): (params: {serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  post(path: '/hosting/privateDatabase/{serviceName}/terminate'): (params: {serviceName: string}) => Promise<string>;
  /**
   * List the hosting.privateDatabase.user objects
   * Create a new user on your service
   */
  post(path: '/hosting/privateDatabase/{serviceName}/user'): (params: {serviceName: string, password: string, userName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * changePassword operations
   * Request a change password for a user
   */
  post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/changePassword'): (params: {serviceName: string, userName: string, password: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * List the hosting.privateDatabase.grant objects
   * Add grant on a database
   */
  post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant'): (params: {serviceName: string, userName: string, databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum}) => Promise<hosting.privateDatabase.task>;
  /**
   * update operations
   * Update user grant
   */
  post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update'): (params: {databaseName: string, serviceName: string, userName: string, grant: hosting.PrivateDatabase.grant.GrantEnum}) => Promise<hosting.privateDatabase.task>;
  /**
   * List the hosting.privateDatabase.whitelist objects
   * Create a new IP whitelist
   */
  post(path: '/hosting/privateDatabase/{serviceName}/whitelist'): (params: {serviceName: string, ip: string, name?: string, service?: boolean, sftp?: boolean}) => Promise<hosting.privateDatabase.task>;
  /**
   * Databases
   * Delete the database
   */
  delete(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}'): (params: {databaseName: string, serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * Dump
   * Delete dump before expiration date
   */
  delete(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}'): (params: {databaseName: string, id: number, serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * Dump
   * Delete dump before expiration date
   */
  delete(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}'): (params: {dumpId: number, serviceName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * Users
   * Delete a user
   */
  delete(path: '/hosting/privateDatabase/{serviceName}/user/{userName}'): (params: {serviceName: string, userName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * Grants
   * Delete a grant on a database
   */
  delete(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}'): (params: {databaseName: string, serviceName: string, userName: string}) => Promise<hosting.privateDatabase.task>;
  /**
   * IP whitelisting for your instance
   * Delete ain IP whitelist
   */
  delete(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}'): (params: {ip: string, serviceName: string}) => Promise<hosting.privateDatabase.task>;
}
/**
 * classic Model
 */