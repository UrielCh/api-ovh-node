import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /hosting/privateDatabase Models
 */
export declare namespace complexType {
    interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace hosting {
    namespace PrivateDatabase {
        interface AvailableOrderCapacities {
            datacenter: hosting.PrivateDatabase.DatacenterEnum[];
            offer: hosting.PrivateDatabase.OfferEnum;
            ram: hosting.PrivateDatabase.AvailableRamSizeEnum[];
            version: hosting.PrivateDatabase.AvailableVersionEnum[];
        }
        type AvailableRamSizeEnum = "1024" | "2048" | "4096" | "512";
        type AvailableVersionEnum = "mariadb_10.1" | "mariadb_10.2" | "mongodb_3.4" | "mongodb_4.0" | "mysql_4.1" | "mysql_5.0" | "mysql_5.1" | "mysql_5.5" | "mysql_5.6" | "mysql_5.7" | "postgresql_10" | "postgresql_11" | "postgresql_9.4" | "postgresql_9.5" | "postgresql_9.6" | "redis_3.2" | "redis_4.0";
        interface Capability {
            create: boolean;
            delete: boolean;
            object: string;
            update: boolean;
        }
        namespace Configuration {
            interface Detail {
                availableValues: string[];
                defaultValue: string;
                description: string;
                key: string;
                lastUpdate: string;
                type: hosting.PrivateDatabase.Configuration.DetailType;
                unit?: string;
                value: string;
            }
            type DetailType = "boolean" | "number" | "string";
            type Status = "applied" | "updating";
        }
        namespace Database {
            namespace Extension {
                type Status = "disabled" | "disabling" | "enabled" | "enabling";
            }
            interface User {
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
                userName: string;
            }
        }
        type DatacenterEnum = "gra1" | "gra2" | "p19";
        interface GraphEndpoint {
            host: string;
            readToken: string;
            readTokenId: string;
        }
        type OfferEnum = "classic" | "public";
        interface Oom {
            date: string;
            sizeReached: number;
        }
        type StateEnum = "detached" | "restartPending" | "startPending" | "started" | "stopPending" | "stopped";
        interface TemporaryLogsLink {
            expirationDate: string;
            url: string;
        }
        type TypeEnum = "mariadb" | "mongodb" | "mysql" | "postgresql" | "redis";
        namespace User {
            interface Database {
                databaseName: string;
                grantId: number;
                grantType: hosting.PrivateDatabase.grant.GrantEnum;
            }
        }
        namespace Whitelist {
            type Status = "created" | "creating" | "deleting" | "updating";
        }
        namespace grant {
            type GrantEnum = "admin" | "none" | "ro" | "rw";
        }
        namespace task {
            type FunctionEnum = "boot" | "changeFtpPassword" | "changeRam" | "changeRootPassword" | "changeVersion" | "configuration/update" | "create" | "database/create" | "database/delete" | "database/dump" | "database/dump/delete" | "database/extension/create" | "database/extension/delete" | "database/import" | "database/restore" | "database/wizard" | "delete" | "grant/create" | "grant/delete" | "grant/update" | "halt" | "install" | "refresh" | "reopen" | "restart" | "restore" | "start" | "stop" | "suspend" | "user/changePassword" | "user/create" | "user/delete" | "whitelist/create" | "whitelist/delete" | "whitelist/update";
            type StatusEnum = "cancelled" | "doing" | "done" | "error" | "init" | "todo";
        }
    }
    namespace privateDatabase {
        interface Configuration {
            details: hosting.PrivateDatabase.Configuration.Detail[];
            lastUpdate: string;
            status: hosting.PrivateDatabase.Configuration.Status;
            taskId?: string;
        }
        interface Service {
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
        interface database {
            backupTime?: string;
            creationDate: string;
            databaseName: string;
            quotaUsed: complexType.UnitAndValue<number>;
            users: hosting.PrivateDatabase.Database.User[];
        }
        interface database_dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            id: number;
            url: string;
        }
        interface database_extension {
            description: string;
            extensionName: string;
            requiredExtensions: string[];
            status: hosting.PrivateDatabase.Database.Extension.Status;
        }
        interface dump {
            creationDate: string;
            databaseName: string;
            deletionDate: string;
            dumpId: number;
            orphan: boolean;
            url: string;
        }
        interface grant {
            creationDate: string;
            databaseName: string;
            grant: hosting.PrivateDatabase.grant.GrantEnum;
        }
        interface task {
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
        interface user {
            creationDate: string;
            databases: hosting.PrivateDatabase.User.Database[];
            userName: string;
        }
        interface whitelist {
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
 * END API /hosting/privateDatabase Models
 */
export declare function proxyHostingPrivateDatabase(ovhEngine: OvhRequestable): Hosting;
export default proxyHostingPrivateDatabase;
/**
 * Api Proxy model
 */ export interface Hosting {
    privateDatabase: {
        $get(): Promise<string[]>;
        availableOrderCapacities: {
            $get(params: {
                offer: hosting.PrivateDatabase.OfferEnum;
            }): Promise<hosting.PrivateDatabase.AvailableOrderCapacities>;
        };
        $(serviceName: string): {
            $get(): Promise<hosting.privateDatabase.Service>;
            $put(params?: {
                capabilities?: hosting.PrivateDatabase.Capability[];
                cpu?: number;
                datacenter?: hosting.PrivateDatabase.DatacenterEnum;
                displayName?: string;
                graphEndpoint?: hosting.PrivateDatabase.GraphEndpoint;
                guiURL?: string;
                hostname?: string;
                hostnameFtp?: string;
                infrastructure?: string;
                ip?: string;
                lastCheck?: string;
                offer?: hosting.PrivateDatabase.OfferEnum;
                port?: number;
                portFtp?: number;
                quotaSize?: complexType.UnitAndValue<number>;
                quotaUsed?: complexType.UnitAndValue<number>;
                ram?: complexType.UnitAndValue<number>;
                server?: string;
                serviceName?: string;
                state?: hosting.PrivateDatabase.StateEnum;
                tlsCa?: string;
                type?: hosting.PrivateDatabase.TypeEnum;
                version?: hosting.PrivateDatabase.AvailableVersionEnum;
                versionNumber?: number;
            }): Promise<void>;
            availableVersions: {
                $get(): Promise<hosting.PrivateDatabase.AvailableVersionEnum[]>;
            };
            changeContact: {
                $post(params?: {
                    contactAdmin?: string;
                    contactBilling?: string;
                    contactTech?: string;
                }): Promise<number[]>;
            };
            changeFtpPassword: {
                $post(params: {
                    password: string;
                }): Promise<hosting.privateDatabase.task>;
            };
            changeVersion: {
                $post(params: {
                    version: hosting.PrivateDatabase.AvailableVersionEnum;
                }): Promise<hosting.privateDatabase.task>;
            };
            config: {
                $get(): Promise<hosting.privateDatabase.Configuration>;
                update: {
                    $post(params: {
                        parameters: complexType.SafeKeyValue<string>[];
                    }): Promise<hosting.privateDatabase.Configuration>;
                };
            };
            confirmTermination: {
                $post(params: {
                    commentary?: string;
                    futureUse?: service.TerminationFutureUseEnum;
                    reason?: service.TerminationReasonEnum;
                    token: string;
                }): Promise<string>;
            };
            database: {
                $get(): Promise<string[]>;
                $post(params: {
                    databaseName: string;
                }): Promise<hosting.privateDatabase.task>;
                $(databaseName: string): {
                    $delete(): Promise<hosting.privateDatabase.task>;
                    $get(): Promise<hosting.privateDatabase.database>;
                    dump: {
                        $get(params?: {
                            creationDate?: string;
                            deletionDate?: string;
                        }): Promise<number[]>;
                        $post(params?: {
                            sendEmail?: boolean;
                        }): Promise<hosting.privateDatabase.task>;
                        $(id: number): {
                            $delete(): Promise<hosting.privateDatabase.task>;
                            $get(): Promise<hosting.privateDatabase.database_dump>;
                            restore: {
                                $post(): Promise<hosting.privateDatabase.task>;
                            };
                        };
                    };
                    extension: {
                        $get(params?: {
                            extensionName?: string;
                            status?: hosting.PrivateDatabase.Database.Extension.Status;
                        }): Promise<string[]>;
                        $(extensionName: string): {
                            $get(): Promise<hosting.privateDatabase.database_extension>;
                            disable: {
                                $post(): Promise<hosting.privateDatabase.task>;
                            };
                            enable: {
                                $post(): Promise<hosting.privateDatabase.task>;
                            };
                        };
                    };
                    import: {
                        $post(params: {
                            documentId: string;
                            flushDatabase?: boolean;
                            sendEmail?: boolean;
                        }): Promise<hosting.privateDatabase.task>;
                    };
                };
            };
            databaseWizard: {
                $post(params: {
                    databaseName: string;
                    grant: hosting.PrivateDatabase.grant.GrantEnum;
                    password: string;
                    userName: string;
                }): Promise<hosting.privateDatabase.task>;
            };
            dump: {
                $get(params?: {
                    databaseName?: string;
                    orphan?: boolean;
                }): Promise<number[]>;
                $(dumpId: number): {
                    $delete(): Promise<hosting.privateDatabase.task>;
                    $get(): Promise<hosting.privateDatabase.dump>;
                    restore: {
                        $post(params: {
                            databaseName: string;
                        }): Promise<hosting.privateDatabase.task>;
                    };
                };
            };
            generateTemporaryLogsLink: {
                $post(): Promise<hosting.PrivateDatabase.TemporaryLogsLink>;
            };
            oom: {
                $get(): Promise<hosting.PrivateDatabase.Oom[]>;
            };
            quotaRefresh: {
                $post(): Promise<hosting.privateDatabase.task>;
            };
            restart: {
                $post(): Promise<hosting.privateDatabase.task>;
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
            start: {
                $post(): Promise<hosting.privateDatabase.task>;
            };
            stop: {
                $post(): Promise<hosting.privateDatabase.task>;
            };
            tasks: {
                $get(params?: {
                    function_?: hosting.PrivateDatabase.task.FunctionEnum;
                    status?: hosting.PrivateDatabase.task.StatusEnum;
                }): Promise<number[]>;
                $(id: number): {
                    $get(): Promise<hosting.privateDatabase.task>;
                };
            };
            terminate: {
                $post(): Promise<string>;
            };
            user: {
                $get(): Promise<string[]>;
                $post(params: {
                    password: string;
                    userName: string;
                }): Promise<hosting.privateDatabase.task>;
                $(userName: string): {
                    $delete(): Promise<hosting.privateDatabase.task>;
                    $get(): Promise<hosting.privateDatabase.user>;
                    changePassword: {
                        $post(params: {
                            password: string;
                        }): Promise<hosting.privateDatabase.task>;
                    };
                    grant: {
                        $get(): Promise<string[]>;
                        $post(params: {
                            databaseName: string;
                            grant: hosting.PrivateDatabase.grant.GrantEnum;
                        }): Promise<hosting.privateDatabase.task>;
                        $(databaseName: string): {
                            $delete(): Promise<hosting.privateDatabase.task>;
                            $get(): Promise<hosting.privateDatabase.grant>;
                            update: {
                                $post(params: {
                                    grant: hosting.PrivateDatabase.grant.GrantEnum;
                                }): Promise<hosting.privateDatabase.task>;
                            };
                        };
                    };
                };
            };
            webs: {
                $get(): Promise<string[]>;
            };
            whitelist: {
                $get(params?: {
                    ip?: string;
                    service?: boolean;
                    sftp?: boolean;
                }): Promise<string[]>;
                $post(params: {
                    ip: string;
                    name?: string;
                    service?: boolean;
                    sftp?: boolean;
                }): Promise<hosting.privateDatabase.task>;
                $(ip: string): {
                    $delete(): Promise<hosting.privateDatabase.task>;
                    $get(): Promise<hosting.privateDatabase.whitelist>;
                    $put(params?: {
                        creationDate?: string;
                        ip?: string;
                        lastUpdate?: string;
                        name?: string;
                        service?: boolean;
                        sftp?: boolean;
                        status?: hosting.PrivateDatabase.Whitelist.Status;
                        taskId?: string;
                    }): Promise<void>;
                };
            };
        };
    };
    /**
     * Operations about the SQLPRIVE service
     * List available services
     */
    get(path: '/hosting/privateDatabase'): () => Promise<string[]>;
    /**
     * Private database
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<hosting.privateDatabase.Service>;
    /**
     * availableVersions operations
     * Get the availables versions for this private database
     */
    get(path: '/hosting/privateDatabase/{serviceName}/availableVersions'): (params: {
        serviceName: string;
    }) => Promise<hosting.PrivateDatabase.AvailableVersionEnum[]>;
    /**
     * Configuration
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/config'): (params: {
        serviceName: string;
    }) => Promise<hosting.privateDatabase.Configuration>;
    /**
     * List the hosting.privateDatabase.database objects
     * Databases linked to your private database service
     */
    get(path: '/hosting/privateDatabase/{serviceName}/database'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Databases
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}'): (params: {
        databaseName: string;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.database>;
    /**
     * List the hosting.privateDatabase.database.dump objects
     * Dump available for your databases
     */
    get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump'): (params: {
        databaseName: string;
        serviceName: string;
        creationDate?: string;
        deletionDate?: string;
    }) => Promise<number[]>;
    /**
     * Dump
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}'): (params: {
        databaseName: string;
        id: number;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.database_dump>;
    /**
     * List the hosting.privateDatabase.database.extension objects
     * Extensions linked to your database
     */
    get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension'): (params: {
        databaseName: string;
        serviceName: string;
        extensionName?: string;
        status?: hosting.PrivateDatabase.Database.Extension.Status;
    }) => Promise<string[]>;
    /**
     * Databases extension
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}'): (params: {
        databaseName: string;
        extensionName: string;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.database_extension>;
    /**
     * List the hosting.privateDatabase.dump objects
     * Dumps available for your private database service
     */
    get(path: '/hosting/privateDatabase/{serviceName}/dump'): (params: {
        serviceName: string;
        databaseName?: string;
        orphan?: boolean;
    }) => Promise<number[]>;
    /**
     * Dump
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}'): (params: {
        dumpId: number;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.dump>;
    /**
     * oom operations
     * List of privatesql OOM kill
     */
    get(path: '/hosting/privateDatabase/{serviceName}/oom'): (params: {
        serviceName: string;
    }) => Promise<hosting.PrivateDatabase.Oom[]>;
    /**
     * Details about a Service
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.Service>;
    /**
     * List the hosting.privateDatabase.task objects
     * Tasks attached to your private database service
     */
    get(path: '/hosting/privateDatabase/{serviceName}/tasks'): (params: {
        serviceName: string;
        function_?: hosting.PrivateDatabase.task.FunctionEnum;
        status?: hosting.PrivateDatabase.task.StatusEnum;
    }) => Promise<number[]>;
    /**
     * Tasks
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/tasks/{id}'): (params: {
        id: number;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * List the hosting.privateDatabase.user objects
     * User allowed to connect on your databases
     */
    get(path: '/hosting/privateDatabase/{serviceName}/user'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * Users
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}'): (params: {
        serviceName: string;
        userName: string;
    }) => Promise<hosting.privateDatabase.user>;
    /**
     * List the hosting.privateDatabase.grant objects
     * User grant's on your databases
     */
    get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant'): (params: {
        serviceName: string;
        userName: string;
    }) => Promise<string[]>;
    /**
     * Grants
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}'): (params: {
        databaseName: string;
        serviceName: string;
        userName: string;
    }) => Promise<hosting.privateDatabase.grant>;
    /**
     * webs operations
     * List linked webs
     */
    get(path: '/hosting/privateDatabase/{serviceName}/webs'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List the hosting.privateDatabase.whitelist objects
     * Whitelist allowed on your privatesql
     */
    get(path: '/hosting/privateDatabase/{serviceName}/whitelist'): (params: {
        serviceName: string;
        ip?: string;
        service?: boolean;
        sftp?: boolean;
    }) => Promise<string[]>;
    /**
     * IP whitelisting for your instance
     * Get this object properties
     */
    get(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.whitelist>;
    /**
     * Get available order capacitie
     * Get available order capacitie
     */
    get(path: '/hosting/privateDatabase/availableOrderCapacities'): (params: {
        offer: hosting.PrivateDatabase.OfferEnum;
    }) => Promise<hosting.PrivateDatabase.AvailableOrderCapacities>;
    /**
     * Private database
     * Alter this object properties
     */
    put(path: '/hosting/privateDatabase/{serviceName}'): (params: {
        serviceName: string;
        capabilities?: hosting.PrivateDatabase.Capability[];
        cpu?: number;
        datacenter?: hosting.PrivateDatabase.DatacenterEnum;
        displayName?: string;
        graphEndpoint?: hosting.PrivateDatabase.GraphEndpoint;
        guiURL?: string;
        hostname?: string;
        hostnameFtp?: string;
        infrastructure?: string;
        ip?: string;
        lastCheck?: string;
        offer?: hosting.PrivateDatabase.OfferEnum;
        port?: number;
        portFtp?: number;
        quotaSize?: complexType.UnitAndValue<number>;
        quotaUsed?: complexType.UnitAndValue<number>;
        ram?: complexType.UnitAndValue<number>;
        server?: string;
        state?: hosting.PrivateDatabase.StateEnum;
        tlsCa?: string;
        type?: hosting.PrivateDatabase.TypeEnum;
        version?: hosting.PrivateDatabase.AvailableVersionEnum;
        versionNumber?: number;
    }) => Promise<void>;
    /**
     * Details about a Service
     * Alter this object properties
     */
    put(path: '/hosting/privateDatabase/{serviceName}/serviceInfos'): (params: {
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
     * IP whitelisting for your instance
     * Alter this object properties
     */
    put(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}'): (params: {
        ip: string;
        serviceName: string;
        creationDate?: string;
        lastUpdate?: string;
        name?: string;
        service?: boolean;
        sftp?: boolean;
        status?: hosting.PrivateDatabase.Whitelist.Status;
        taskId?: string;
    }) => Promise<void>;
    /**
     * Change the contacts of this service
     * Launch a contact change procedure
     */
    post(path: '/hosting/privateDatabase/{serviceName}/changeContact'): (params: {
        serviceName: string;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
    }) => Promise<number[]>;
    /**
     * changeFtpPassword operations
     * Change your ftp admin password
     */
    post(path: '/hosting/privateDatabase/{serviceName}/changeFtpPassword'): (params: {
        serviceName: string;
        password: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * changeVersion operations
     * Change the private database engine version
     */
    post(path: '/hosting/privateDatabase/{serviceName}/changeVersion'): (params: {
        serviceName: string;
        version: hosting.PrivateDatabase.AvailableVersionEnum;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * update operations
     * Update the configuration
     */
    post(path: '/hosting/privateDatabase/{serviceName}/config/update'): (params: {
        serviceName: string;
        parameters: complexType.SafeKeyValue<string>[];
    }) => Promise<hosting.privateDatabase.Configuration>;
    /**
     * Confirm termination of your service
     * Confirm termination of your service
     */
    post(path: '/hosting/privateDatabase/{serviceName}/confirmTermination'): (params: {
        serviceName: string;
        commentary?: string;
        futureUse?: service.TerminationFutureUseEnum;
        reason?: service.TerminationReasonEnum;
        token: string;
    }) => Promise<string>;
    /**
     * List the hosting.privateDatabase.database objects
     * Create a new database on your private database service
     */
    post(path: '/hosting/privateDatabase/{serviceName}/database'): (params: {
        serviceName: string;
        databaseName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * List the hosting.privateDatabase.database.dump objects
     * Request the dump of this database ( an email will be send with a link available 30 days )
     */
    post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump'): (params: {
        databaseName: string;
        serviceName: string;
        sendEmail?: boolean;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * restore operations
     * Request the restore from this dump
     */
    post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}/restore'): (params: {
        databaseName: string;
        id: number;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * disable operations
     * Disable an extension from a database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/disable'): (params: {
        databaseName: string;
        extensionName: string;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * enable operations
     * Enable an extension on a database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/extension/{extensionName}/enable'): (params: {
        databaseName: string;
        extensionName: string;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * import operations
     * Request the import in this database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/import'): (params: {
        databaseName: string;
        serviceName: string;
        documentId: string;
        flushDatabase?: boolean;
        sendEmail?: boolean;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * databaseWizard operations
     * Create a new database/user and grant it
     */
    post(path: '/hosting/privateDatabase/{serviceName}/databaseWizard'): (params: {
        serviceName: string;
        databaseName: string;
        grant: hosting.PrivateDatabase.grant.GrantEnum;
        password: string;
        userName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * restore operations
     * Request the restore from this dump
     */
    post(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}/restore'): (params: {
        dumpId: number;
        serviceName: string;
        databaseName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * generateTemporaryLogsLink operations
     * Generate a temporary url to retrieve instance logs
     */
    post(path: '/hosting/privateDatabase/{serviceName}/generateTemporaryLogsLink'): (params: {
        serviceName: string;
    }) => Promise<hosting.PrivateDatabase.TemporaryLogsLink>;
    /**
     * quotaRefresh operations
     * Refresh the quota of your private database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/quotaRefresh'): (params: {
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * restart operations
     * Restart the private database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/restart'): (params: {
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * start operations
     * Start the private database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/start'): (params: {
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * stop operations
     * Stop the private database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/stop'): (params: {
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * Terminate your service
     * Terminate your service
     */
    post(path: '/hosting/privateDatabase/{serviceName}/terminate'): (params: {
        serviceName: string;
    }) => Promise<string>;
    /**
     * List the hosting.privateDatabase.user objects
     * Create a new user on your service
     */
    post(path: '/hosting/privateDatabase/{serviceName}/user'): (params: {
        serviceName: string;
        password: string;
        userName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * changePassword operations
     * Request a change password for a user
     */
    post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/changePassword'): (params: {
        serviceName: string;
        userName: string;
        password: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * List the hosting.privateDatabase.grant objects
     * Add grant on a database
     */
    post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant'): (params: {
        serviceName: string;
        userName: string;
        databaseName: string;
        grant: hosting.PrivateDatabase.grant.GrantEnum;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * update operations
     * Update user grant
     */
    post(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}/update'): (params: {
        databaseName: string;
        serviceName: string;
        userName: string;
        grant: hosting.PrivateDatabase.grant.GrantEnum;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * List the hosting.privateDatabase.whitelist objects
     * Create a new IP whitelist
     */
    post(path: '/hosting/privateDatabase/{serviceName}/whitelist'): (params: {
        serviceName: string;
        ip: string;
        name?: string;
        service?: boolean;
        sftp?: boolean;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * Databases
     * Delete the database
     */
    delete(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}'): (params: {
        databaseName: string;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * Dump
     * Delete dump before expiration date
     */
    delete(path: '/hosting/privateDatabase/{serviceName}/database/{databaseName}/dump/{id}'): (params: {
        databaseName: string;
        id: number;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * Dump
     * Delete dump before expiration date
     */
    delete(path: '/hosting/privateDatabase/{serviceName}/dump/{dumpId}'): (params: {
        dumpId: number;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * Users
     * Delete a user
     */
    delete(path: '/hosting/privateDatabase/{serviceName}/user/{userName}'): (params: {
        serviceName: string;
        userName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * Grants
     * Delete a grant on a database
     */
    delete(path: '/hosting/privateDatabase/{serviceName}/user/{userName}/grant/{databaseName}'): (params: {
        databaseName: string;
        serviceName: string;
        userName: string;
    }) => Promise<hosting.privateDatabase.task>;
    /**
     * IP whitelisting for your instance
     * Delete ain IP whitelist
     */
    delete(path: '/hosting/privateDatabase/{serviceName}/whitelist/{ip}'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<hosting.privateDatabase.task>;
}
