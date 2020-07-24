import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /hosting/privateDatabase Models
 * Source: https://ca.api.ovh.com/1.0/hosting/privateDatabase.json
 */
export namespace complexType {
    /**
     * Key and value, with proper key strings
     * interface fullName: complexType.SafeKeyValue.SafeKeyValue
     */
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace hosting {
    export namespace PrivateDatabase {
        /**
         * Description for available order capacities following an offer
         * interface fullName: hosting.PrivateDatabase.AvailableOrderCapacities.AvailableOrderCapacities
         */
        export interface AvailableOrderCapacities {
            datacenter: hosting.PrivateDatabase.DatacenterEnum[];
            offer: hosting.PrivateDatabase.OfferEnum;
            ram: hosting.PrivateDatabase.AvailableRamSizeEnum[];
            version: hosting.PrivateDatabase.AvailableVersionEnum[];
        }
        /**
         * Private database available ram sizes
         * type fullname: hosting.PrivateDatabase.AvailableRamSizeEnum
         */
        export type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512"
        /**
         * Private database available versions
         * type fullname: hosting.PrivateDatabase.AvailableVersionEnum
         */
        export type AvailableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mariadb_10.3" | "mariadb_10.4" | "mariadb_10.5" | "mongodb_3.4" | "mongodb_4.0" | "mysql_4.1" | "mysql_5.0" | "mysql_5.1" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_12" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0"
        /**
         * Private database capability
         * interface fullName: hosting.PrivateDatabase.Capability.Capability
         */
        export interface Capability {
            create: boolean;
            delete: boolean;
            object: string;
            update: boolean;
        }
        export namespace Configuration {
            /**
             * Configuration detail property
             * interface fullName: hosting.PrivateDatabase.Configuration.Detail.Detail
             */
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
            /**
             * Configuration detail type
             * type fullname: hosting.PrivateDatabase.Configuration.DetailType
             */
            export type DetailType = "boolean" | "number" | "string"
            /**
             * Configuration status
             * type fullname: hosting.PrivateDatabase.Configuration.Status
             */
            export type Status = "applied" | "updating"
        }
        export namespace Database {
            export namespace Extension {
                /**
                 * Extension status
                 * type fullname: hosting.PrivateDatabase.Database.Extension.Status
                 */
                export type Status = "disabled" | "disabling" | "enabled" | "enabling"
            }
            /**
             * User granted to a database
             * interface fullName: hosting.PrivateDatabase.Database.User.User
             */
            export interface User {
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
                userName: string;
            }
        }
        /**
         * Available datacenters
         * type fullname: hosting.PrivateDatabase.DatacenterEnum
         */
        export type DatacenterEnum = "bhs1" | "gra1" | "gra2" | "p19"
        /**
         * Parameters required to query metrics from OpenTSDB
         * interface fullName: hosting.PrivateDatabase.GraphEndpoint.GraphEndpoint
         */
        export interface GraphEndpoint {
            host: string;
            readToken: string;
            readTokenId: string;
        }
        /**
         * Available offers
         * type fullname: hosting.PrivateDatabase.OfferEnum
         */
        export type OfferEnum = "classic" | "public"
        /**
         * OOM kill informations
         * interface fullName: hosting.PrivateDatabase.Oom.Oom
         */
        export interface Oom {
            date: string;
            sizeReached: number;
        }
        /**
         * Private database state
         * type fullname: hosting.PrivateDatabase.StateEnum
         */
        export type StateEnum = "detached" | "restartPending" | "startPending" | "started" | "stopPending" | "stopped"
        /**
         * Temporary url informations
         * interface fullName: hosting.PrivateDatabase.TemporaryLogsLink.TemporaryLogsLink
         */
        export interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        /**
         * Private database type
         * type fullname: hosting.PrivateDatabase.TypeEnum
         */
        export type TypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis"
        export namespace User {
            /**
             * Databases linked to an user
             * interface fullName: hosting.PrivateDatabase.User.Database.Database
             */
            export interface Database {
                databaseName: string;
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
            }
        }
        export namespace Whitelist {
            /**
             * Whitelist status
             * type fullname: hosting.PrivateDatabase.Whitelist.Status
             */
            export type Status = "created" | "creating" | "deleting" | "updating"
        }
        export namespace grant {
            /**
             * Grant on a database for a specific user
             * type fullname: hosting.PrivateDatabase.grant.GrantEnum
             */
            export type GrantEnum = "admin" | "none" | "ro" | "rw"
        }
        export namespace task {
            /**
             * Task's function
             * type fullname: hosting.PrivateDatabase.task.FunctionEnum
             */
            export type FunctionEnum = "boot" | "changeFtpPassword" | "changeRam" | "changeRootPassword" | "changeVersion" | "configuration/update" | "create" | "database/create" | "database/delete" | "database/dump" | "database/dump/delete" | "database/extension/create" | "database/extension/delete" | "database/import" | "database/restore" | "database/wizard" | "delete" | "grant/create" | "grant/delete" | "grant/update" | "halt" | "install" | "refresh" | "reopen" | "restart" | "restore" | "start" | "stop" | "suspend" | "user/changePassword" | "user/create" | "user/delete" | "whitelist/create" | "whitelist/delete" | "whitelist/update"
            /**
             * Task's status
             * type fullname: hosting.PrivateDatabase.task.StatusEnum
             */
            export type StatusEnum = "cancelled" | "doing" | "done" | "error" | "init" | "todo"
        }
    }
    export namespace privateDatabase {
        /**
         * Configuration
         * interface fullName: hosting.privateDatabase.Configuration.Configuration
         */
        export interface Configuration {
            details: hosting.PrivateDatabase.Configuration.Detail[];
            lastUpdate: string;
            status: hosting.PrivateDatabase.Configuration.Status;
            taskId?: string;
        }
        /**
         * Private database
         * interface fullName: hosting.privateDatabase.Service.Service
         */
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
        /**
         * Databases
         * interface fullName: hosting.privateDatabase.database.database
         */
        export interface database {
            backupTime?: string;
            creationDate: string;
            databaseName: string;
            quotaUsed: complexType.UnitAndValue<number>;
            users: hosting.PrivateDatabase.Database.User[];
        }
        /**
         * Dump
         * interface fullName: hosting.privateDatabase.database_dump.database_dump
         */
        export interface database_dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            id: number;
            url: string;
        }
        /**
         * Databases extension
         * interface fullName: hosting.privateDatabase.database_extension.database_extension
         */
        export interface database_extension {
            description: string;
            extensionName: string;
            requiredExtensions: string[];
            status: hosting.PrivateDatabase.Database.Extension.Status;
        }
        /**
         * Dump
         * interface fullName: hosting.privateDatabase.dump.dump
         */
        export interface dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            dumpId: number;
            orphan: boolean;
            url: string;
        }
        /**
         * Grants
         * interface fullName: hosting.privateDatabase.grant.grant
         */
        export interface grant {
            creationDate: string;
            databaseName: string;
            grant: hosting.PrivateDatabase.grant.GrantEnum;
        }
        /**
         * Tasks
         * interface fullName: hosting.privateDatabase.task.task
         */
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
        /**
         * Users
         * interface fullName: hosting.privateDatabase.user.user
         */
        export interface user {
            creationDate: string;
            databases: hosting.PrivateDatabase.User.Database[];
            userName: string;
        }
        /**
         * IP whitelisting for your instance
         * interface fullName: hosting.privateDatabase.whitelist.whitelist
         */
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
    /**
     * All future uses you can provide for a service termination
     * type fullname: service.TerminationFutureUseEnum
     */
    export type TerminationFutureUseEnum = "NOT_REPLACING_SERVICE" | "OTHER" | "SUBSCRIBE_AN_OTHER_SERVICE" | "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR" | "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
    /**
     * All reasons you can provide for a service termination
     * type fullname: service.TerminationReasonEnum
     */
    export type TerminationReasonEnum = "FEATURES_DONT_SUIT_ME" | "LACK_OF_PERFORMANCES" | "MIGRATED_TO_ANOTHER_OVH_PRODUCT" | "MIGRATED_TO_COMPETITOR" | "NOT_ENOUGH_RECOGNITION" | "NOT_NEEDED_ANYMORE" | "NOT_RELIABLE" | "NO_ANSWER" | "OTHER" | "PRODUCT_DIMENSION_DONT_SUIT_ME" | "PRODUCT_TOOLS_DONT_SUIT_ME" | "TOO_EXPENSIVE" | "TOO_HARD_TO_USE" | "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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

/**
 * END API /hosting/privateDatabase Models
 */
export function proxyHostingPrivateDatabase(ovhEngine: OvhRequestable): Hosting {
    return buildOvhProxy(ovhEngine, '/hosting');
}
export default proxyHostingPrivateDatabase;
/**
 * Api model for /hosting/privateDatabase
 */
export interface Hosting {
    privateDatabase: {
        /**
         * List available services
         * GET /hosting/privateDatabase
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        availableOrderCapacities: {
            /**
             * Get available order capacitie
             * GET /hosting/privateDatabase/availableOrderCapacities
             */
            $get(params: { offer: hosting.PrivateDatabase.OfferEnum }): Promise<hosting.PrivateDatabase.AvailableOrderCapacities>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /hosting/privateDatabase/{serviceName}
             */
            $get(): Promise<hosting.privateDatabase.Service>;
            /**
             * Alter this object properties
             * PUT /hosting/privateDatabase/{serviceName}
             */
            $put(params?: { capabilities?: hosting.PrivateDatabase.Capability[], cpu?: number, datacenter?: hosting.PrivateDatabase.DatacenterEnum, displayName?: string, graphEndpoint?: hosting.PrivateDatabase.GraphEndpoint, guiURL?: string, hostname?: string, hostnameFtp?: string, infrastructure?: string, ip?: string, lastCheck?: string, offer?: hosting.PrivateDatabase.OfferEnum, port?: number, portFtp?: number, quotaSize?: complexType.UnitAndValue<number>, quotaUsed?: complexType.UnitAndValue<number>, ram?: complexType.UnitAndValue<number>, server?: string, serviceName?: string, state?: hosting.PrivateDatabase.StateEnum, tlsCa?: string, type?: hosting.PrivateDatabase.TypeEnum, version?: hosting.PrivateDatabase.AvailableVersionEnum, versionLabel?: string, versionNumber?: number }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            availableVersions: {
                /**
                 * Get the availables versions for this private database
                 * GET /hosting/privateDatabase/{serviceName}/availableVersions
                 */
                $get(): Promise<hosting.PrivateDatabase.AvailableVersionEnum[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeContact: {
                /**
                 * Launch a contact change procedure
                 * POST /hosting/privateDatabase/{serviceName}/changeContact
                 */
                $post(params?: { contactAdmin?: string, contactBilling?: string, contactTech?: string }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeFtpPassword: {
                /**
                 * Change your ftp admin password
                 * POST /hosting/privateDatabase/{serviceName}/changeFtpPassword
                 */
                $post(params: { password: string }): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            changeVersion: {
                /**
                 * Change the private database engine version
                 * POST /hosting/privateDatabase/{serviceName}/changeVersion
                 */
                $post(params: { version: hosting.PrivateDatabase.AvailableVersionEnum }): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            config: {
                /**
                 * Get this object properties
                 * GET /hosting/privateDatabase/{serviceName}/config
                 */
                $get(): Promise<hosting.privateDatabase.Configuration>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                update: {
                    /**
                     * Update the configuration
                     * POST /hosting/privateDatabase/{serviceName}/config/update
                     */
                    $post(params: { parameters: complexType.SafeKeyValue<string>[] }): Promise<hosting.privateDatabase.Configuration>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            }
            confirmTermination: {
                /**
                 * Confirm termination of your service
                 * POST /hosting/privateDatabase/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            database: {
                /**
                 * Databases linked to your private database service
                 * GET /hosting/privateDatabase/{serviceName}/database
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a new database on your private database service
                 * POST /hosting/privateDatabase/{serviceName}/database
                 */
                $post(params: { databaseName: string }): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(databaseName: string): {
                    /**
                     * Delete the database
                     * DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}
                     */
                    $delete(): Promise<hosting.privateDatabase.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}
                     */
                    $get(): Promise<hosting.privateDatabase.database>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    dump: {
                        /**
                         * Dump available for your databases
                         * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                         */
                        $get(params?: { creationDate?: string, deletionDate?: string }): Promise<number[]>;
                        /**
                         * Request the dump of this database ( an email will be send with a link available 30 days )
                         * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump
                         */
                        $post(params?: { sendEmail?: boolean }): Promise<hosting.privateDatabase.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(id: number): {
                            /**
                             * Delete dump before expiration date
                             * DELETE /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}
                             */
                            $delete(): Promise<hosting.privateDatabase.task>;
                            /**
                             * Get this object properties
                             * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}
                             */
                            $get(): Promise<hosting.privateDatabase.database_dump>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            restore: {
                                /**
                                 * Request the restore from this dump
                                 * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore
                                 */
                                $post(): Promise<hosting.privateDatabase.task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    extension: {
                        /**
                         * Extensions linked to your database
                         * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension
                         */
                        $get(params?: { extensionName?: string, status?: hosting.PrivateDatabase.Database.Extension.Status }): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(extensionName: string): {
                            /**
                             * Get this object properties
                             * GET /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}
                             */
                            $get(): Promise<hosting.privateDatabase.database_extension>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            disable: {
                                /**
                                 * Disable an extension from a database
                                 * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable
                                 */
                                $post(): Promise<hosting.privateDatabase.task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                            enable: {
                                /**
                                 * Enable an extension on a database
                                 * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable
                                 */
                                $post(): Promise<hosting.privateDatabase.task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                    import: {
                        /**
                         * Request the import in this database
                         * POST /hosting/privateDatabase/{serviceName}/database/{databaseName}/import
                         */
                        $post(params: { documentId: string, flushDatabase?: boolean, sendEmail?: boolean }): Promise<hosting.privateDatabase.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            databaseWizard: {
                /**
                 * Create a new database/user and grant it
                 * POST /hosting/privateDatabase/{serviceName}/databaseWizard
                 */
                $post(params: { databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum, password: string, userName: string }): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            dump: {
                /**
                 * Dumps available for your private database service
                 * GET /hosting/privateDatabase/{serviceName}/dump
                 */
                $get(params?: { databaseName?: string, orphan?: boolean }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(dumpId: number): {
                    /**
                     * Delete dump before expiration date
                     * DELETE /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                     */
                    $delete(): Promise<hosting.privateDatabase.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/privateDatabase/{serviceName}/dump/{dumpId}
                     */
                    $get(): Promise<hosting.privateDatabase.dump>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    restore: {
                        /**
                         * Request the restore from this dump
                         * POST /hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore
                         */
                        $post(params: { databaseName: string }): Promise<hosting.privateDatabase.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                };
            }
            generateTemporaryLogsLink: {
                /**
                 * Generate a temporary url to retrieve instance logs
                 * POST /hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink
                 */
                $post(): Promise<hosting.PrivateDatabase.TemporaryLogsLink>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            oom: {
                /**
                 * List of privatesql OOM kill
                 * GET /hosting/privateDatabase/{serviceName}/oom
                 */
                $get(): Promise<hosting.PrivateDatabase.Oom[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            quotaRefresh: {
                /**
                 * Refresh the quota of your private database
                 * POST /hosting/privateDatabase/{serviceName}/quotaRefresh
                 */
                $post(): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            restart: {
                /**
                 * Restart the private database
                 * POST /hosting/privateDatabase/{serviceName}/restart
                 */
                $post(): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            serviceInfos: {
                /**
                 * Get this object properties
                 * GET /hosting/privateDatabase/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Alter this object properties
                 * PUT /hosting/privateDatabase/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            start: {
                /**
                 * Start the private database
                 * POST /hosting/privateDatabase/{serviceName}/start
                 */
                $post(): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            stop: {
                /**
                 * Stop the private database
                 * POST /hosting/privateDatabase/{serviceName}/stop
                 */
                $post(): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            tasks: {
                /**
                 * Tasks attached to your private database service
                 * GET /hosting/privateDatabase/{serviceName}/tasks
                 */
                $get(params?: { function_?: hosting.PrivateDatabase.task.FunctionEnum, status?: hosting.PrivateDatabase.task.StatusEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: number): {
                    /**
                     * Get this object properties
                     * GET /hosting/privateDatabase/{serviceName}/tasks/{id}
                     */
                    $get(): Promise<hosting.privateDatabase.task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            terminate: {
                /**
                 * Terminate your service
                 * POST /hosting/privateDatabase/{serviceName}/terminate
                 */
                $post(): Promise<string>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            user: {
                /**
                 * User allowed to connect on your databases
                 * GET /hosting/privateDatabase/{serviceName}/user
                 */
                $get(): Promise<string[]>;
                /**
                 * Create a new user on your service
                 * POST /hosting/privateDatabase/{serviceName}/user
                 */
                $post(params: { password: string, userName: string }): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(userName: string): {
                    /**
                     * Delete a user
                     * DELETE /hosting/privateDatabase/{serviceName}/user/{userName}
                     */
                    $delete(): Promise<hosting.privateDatabase.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/privateDatabase/{serviceName}/user/{userName}
                     */
                    $get(): Promise<hosting.privateDatabase.user>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    changePassword: {
                        /**
                         * Request a change password for a user
                         * POST /hosting/privateDatabase/{serviceName}/user/{userName}/changePassword
                         */
                        $post(params: { password: string }): Promise<hosting.privateDatabase.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    }
                    grant: {
                        /**
                         * User grant's on your databases
                         * GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Add grant on a database
                         * POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant
                         */
                        $post(params: { databaseName: string, grant: hosting.PrivateDatabase.grant.GrantEnum }): Promise<hosting.privateDatabase.task>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(databaseName: string): {
                            /**
                             * Delete a grant on a database
                             * DELETE /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                             */
                            $delete(): Promise<hosting.privateDatabase.task>;
                            /**
                             * Get this object properties
                             * GET /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}
                             */
                            $get(): Promise<hosting.privateDatabase.grant>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            update: {
                                /**
                                 * Update user grant
                                 * POST /hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update
                                 */
                                $post(params: { grant: hosting.PrivateDatabase.grant.GrantEnum }): Promise<hosting.privateDatabase.task>;
                                /**
                                 * Controle cache
                                 */
                                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                            }
                        };
                    }
                };
            }
            webs: {
                /**
                 * List linked webs
                 * GET /hosting/privateDatabase/{serviceName}/webs
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            whitelist: {
                /**
                 * Whitelist allowed on your privatesql
                 * GET /hosting/privateDatabase/{serviceName}/whitelist
                 */
                $get(params?: { ip?: string, service?: boolean, sftp?: boolean }): Promise<string[]>;
                /**
                 * Create a new IP whitelist
                 * POST /hosting/privateDatabase/{serviceName}/whitelist
                 */
                $post(params: { ip: string, name?: string, service?: boolean, sftp?: boolean }): Promise<hosting.privateDatabase.task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(ip: string): {
                    /**
                     * Delete ain IP whitelist
                     * DELETE /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                     */
                    $delete(): Promise<hosting.privateDatabase.task>;
                    /**
                     * Get this object properties
                     * GET /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                     */
                    $get(): Promise<hosting.privateDatabase.whitelist>;
                    /**
                     * Alter this object properties
                     * PUT /hosting/privateDatabase/{serviceName}/whitelist/{ip}
                     */
                    $put(params?: { creationDate?: string, ip?: string, lastUpdate?: string, name?: string, service?: boolean, sftp?: boolean, status?: hosting.PrivateDatabase.Whitelist.Status, taskId?: string }): Promise<void>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
        };
    }
}
