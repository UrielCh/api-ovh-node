import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /license/sqlserver Models
 * Source: https://api.us.ovhcloud.com/1.0/license/sqlserver.json
 */
export namespace iam {
    /**
     * IAM resource metadata embedded in services models
     * interface fullName: iam.ResourceMetadata.ResourceMetadata
     */
    export interface ResourceMetadata {
        displayName?: string;
        id: string;
        tags?: { [key: string]: string };
        urn: string;
    }
    export namespace resource {
        /**
         * Resource tag filter
         * interface fullName: iam.resource.TagFilter.TagFilter
         */
        export interface TagFilter {
            operator?: iam.resource.TagFilter.OperatorEnum;
            value: string;
        }
        export namespace TagFilter {
            /**
             * Operator that can be used in order to filter resources tags
             * type fullname: iam.resource.TagFilter.OperatorEnum
             */
            export type OperatorEnum = "EQ"
        }
    }
}
export namespace license {
    /**
     * A short description of what does the Task on your license
     * type fullname: license.ActionType
     */
    export type ActionType = "addWindowFromExistingSerial" | "changeIp" | "changeOs" | "installLicense" | "optionUpgrade" | "releaseOption" | "versionUpgrade"
    /**
     * Possible values for license type
     * type fullname: license.LicenseTypeEnum
     */
    export type LicenseTypeEnum = "dedicated" | "dedicatedCloud" | "dedicatedFailover" | "failover" | "vm" | "vps" | "vps_ceph" | "vps_classic" | "vps_cloud" | "vps_cloud_2016" | "vps_ssd"
    /**
     * All options available for SQL Server products
     * interface fullName: license.OrderableSqlServerCompatibilityInfos.OrderableSqlServerCompatibilityInfos
     */
    export interface OrderableSqlServerCompatibilityInfos {
        version: license.SqlServerVersionEnum;
    }
    /**
     * Allowed SQL Server versions and their compliant options per matching serviceTypes
     * interface fullName: license.SqlServerOrderConfiguration.SqlServerOrderConfiguration
     */
    export interface SqlServerOrderConfiguration {
        orderableVersions: license.OrderableSqlServerCompatibilityInfos[];
        serviceType: license.LicenseTypeEnum;
    }
    /**
     * All versions for SQL Server product
     * type fullname: license.SqlServerVersionEnum
     */
    export type SqlServerVersionEnum = "sql-server-2008-license-standard-edition-2-cpu" | "sql-server-2008-license-standard-edition-4-cpu" | "sql-server-2008-license-web-edition-2-cpu" | "sql-server-2008-license-web-edition-4-cpu" | "sql-server-2012-license-standard-edition-10-cores" | "sql-server-2012-license-standard-edition-12-cores" | "sql-server-2012-license-standard-edition-16-cores" | "sql-server-2012-license-standard-edition-18-cores" | "sql-server-2012-license-standard-edition-2-cpu" | "sql-server-2012-license-standard-edition-20-cores" | "sql-server-2012-license-standard-edition-24-cores" | "sql-server-2012-license-standard-edition-32-cores" | "sql-server-2012-license-standard-edition-4-cores" | "sql-server-2012-license-standard-edition-6-cores" | "sql-server-2012-license-standard-edition-8-cores" | "sql-server-2012-license-web-edition-10-cores" | "sql-server-2012-license-web-edition-12-cores" | "sql-server-2012-license-web-edition-16-cores" | "sql-server-2012-license-web-edition-18-cores" | "sql-server-2012-license-web-edition-20-cores" | "sql-server-2012-license-web-edition-24-cores" | "sql-server-2012-license-web-edition-32-cores" | "sql-server-2012-license-web-edition-4-cores" | "sql-server-2012-license-web-edition-6-cores" | "sql-server-2012-license-web-edition-8-cores" | "sql-server-2014-license-standard-edition-10-cores" | "sql-server-2014-license-standard-edition-12-cores" | "sql-server-2014-license-standard-edition-16-cores" | "sql-server-2014-license-standard-edition-18-cores" | "sql-server-2014-license-standard-edition-20-cores" | "sql-server-2014-license-standard-edition-24-cores" | "sql-server-2014-license-standard-edition-4-cores" | "sql-server-2014-license-standard-edition-6-cores" | "sql-server-2014-license-standard-edition-8-cores" | "sql-server-2014-license-web-edition-10-cores" | "sql-server-2014-license-web-edition-12-cores" | "sql-server-2014-license-web-edition-16-cores" | "sql-server-2014-license-web-edition-18-cores" | "sql-server-2014-license-web-edition-20-cores" | "sql-server-2014-license-web-edition-24-cores" | "sql-server-2014-license-web-edition-4-cores" | "sql-server-2014-license-web-edition-6-cores" | "sql-server-2014-license-web-edition-8-cores" | "sql-server-2016-license-standard-edition-10-cores" | "sql-server-2016-license-standard-edition-12-cores" | "sql-server-2016-license-standard-edition-14-cores" | "sql-server-2016-license-standard-edition-16-cores" | "sql-server-2016-license-standard-edition-4-cores" | "sql-server-2016-license-standard-edition-6-cores" | "sql-server-2016-license-standard-edition-8-cores" | "sql-server-2016-license-web-edition-10-cores" | "sql-server-2016-license-web-edition-12-cores" | "sql-server-2016-license-web-edition-14-cores" | "sql-server-2016-license-web-edition-16-cores" | "sql-server-2016-license-web-edition-4-cores" | "sql-server-2016-license-web-edition-6-cores" | "sql-server-2016-license-web-edition-8-cores" | "sql-server-2017-license-standard-edition-10-cores" | "sql-server-2017-license-standard-edition-12-cores" | "sql-server-2017-license-standard-edition-14-cores" | "sql-server-2017-license-standard-edition-16-cores" | "sql-server-2017-license-standard-edition-18-cores" | "sql-server-2017-license-standard-edition-20-cores" | "sql-server-2017-license-standard-edition-22-cores" | "sql-server-2017-license-standard-edition-24-cores" | "sql-server-2017-license-standard-edition-26-cores" | "sql-server-2017-license-standard-edition-28-cores" | "sql-server-2017-license-standard-edition-30-cores" | "sql-server-2017-license-standard-edition-32-cores" | "sql-server-2017-license-standard-edition-4-cores" | "sql-server-2017-license-standard-edition-6-cores" | "sql-server-2017-license-standard-edition-8-cores" | "sql-server-2017-license-web-edition-10-cores" | "sql-server-2017-license-web-edition-12-cores" | "sql-server-2017-license-web-edition-14-cores" | "sql-server-2017-license-web-edition-16-cores" | "sql-server-2017-license-web-edition-18-cores" | "sql-server-2017-license-web-edition-20-cores" | "sql-server-2017-license-web-edition-22-cores" | "sql-server-2017-license-web-edition-24-cores" | "sql-server-2017-license-web-edition-26-cores" | "sql-server-2017-license-web-edition-28-cores" | "sql-server-2017-license-web-edition-30-cores" | "sql-server-2017-license-web-edition-32-cores" | "sql-server-2017-license-web-edition-4-cores" | "sql-server-2017-license-web-edition-6-cores" | "sql-server-2017-license-web-edition-8-cores" | "sql-server-2019-license-enterprise-edition-10-cores" | "sql-server-2019-license-enterprise-edition-12-cores" | "sql-server-2019-license-enterprise-edition-128-cores" | "sql-server-2019-license-enterprise-edition-14-cores" | "sql-server-2019-license-enterprise-edition-16-cores" | "sql-server-2019-license-enterprise-edition-18-cores" | "sql-server-2019-license-enterprise-edition-20-cores" | "sql-server-2019-license-enterprise-edition-22-cores" | "sql-server-2019-license-enterprise-edition-24-cores" | "sql-server-2019-license-enterprise-edition-26-cores" | "sql-server-2019-license-enterprise-edition-28-cores" | "sql-server-2019-license-enterprise-edition-30-cores" | "sql-server-2019-license-enterprise-edition-32-cores" | "sql-server-2019-license-enterprise-edition-34-cores" | "sql-server-2019-license-enterprise-edition-36-cores" | "sql-server-2019-license-enterprise-edition-38-cores" | "sql-server-2019-license-enterprise-edition-4-cores" | "sql-server-2019-license-enterprise-edition-40-cores" | "sql-server-2019-license-enterprise-edition-42-cores" | "sql-server-2019-license-enterprise-edition-44-cores" | "sql-server-2019-license-enterprise-edition-46-cores" | "sql-server-2019-license-enterprise-edition-48-cores" | "sql-server-2019-license-enterprise-edition-50-cores" | "sql-server-2019-license-enterprise-edition-52-cores" | "sql-server-2019-license-enterprise-edition-54-cores" | "sql-server-2019-license-enterprise-edition-56-cores" | "sql-server-2019-license-enterprise-edition-58-cores" | "sql-server-2019-license-enterprise-edition-6-cores" | "sql-server-2019-license-enterprise-edition-60-cores" | "sql-server-2019-license-enterprise-edition-62-cores" | "sql-server-2019-license-enterprise-edition-64-cores" | "sql-server-2019-license-enterprise-edition-8-cores" | "sql-server-2019-license-enterprise-edition-96-cores" | "sql-server-2019-license-standard-edition-10-cores" | "sql-server-2019-license-standard-edition-12-cores" | "sql-server-2019-license-standard-edition-128-cores" | "sql-server-2019-license-standard-edition-14-cores" | "sql-server-2019-license-standard-edition-16-cores" | "sql-server-2019-license-standard-edition-18-cores" | "sql-server-2019-license-standard-edition-20-cores" | "sql-server-2019-license-standard-edition-22-cores" | "sql-server-2019-license-standard-edition-24-cores" | "sql-server-2019-license-standard-edition-26-cores" | "sql-server-2019-license-standard-edition-28-cores" | "sql-server-2019-license-standard-edition-30-cores" | "sql-server-2019-license-standard-edition-32-cores" | "sql-server-2019-license-standard-edition-34-cores" | "sql-server-2019-license-standard-edition-36-cores" | "sql-server-2019-license-standard-edition-38-cores" | "sql-server-2019-license-standard-edition-4-cores" | "sql-server-2019-license-standard-edition-40-cores" | "sql-server-2019-license-standard-edition-42-cores" | "sql-server-2019-license-standard-edition-44-cores" | "sql-server-2019-license-standard-edition-46-cores" | "sql-server-2019-license-standard-edition-48-cores" | "sql-server-2019-license-standard-edition-50-cores" | "sql-server-2019-license-standard-edition-52-cores" | "sql-server-2019-license-standard-edition-54-cores" | "sql-server-2019-license-standard-edition-56-cores" | "sql-server-2019-license-standard-edition-58-cores" | "sql-server-2019-license-standard-edition-6-cores" | "sql-server-2019-license-standard-edition-60-cores" | "sql-server-2019-license-standard-edition-62-cores" | "sql-server-2019-license-standard-edition-64-cores" | "sql-server-2019-license-standard-edition-8-cores" | "sql-server-2019-license-standard-edition-96-cores" | "sql-server-2019-license-web-edition-10-cores" | "sql-server-2019-license-web-edition-12-cores" | "sql-server-2019-license-web-edition-128-cores" | "sql-server-2019-license-web-edition-14-cores" | "sql-server-2019-license-web-edition-16-cores" | "sql-server-2019-license-web-edition-18-cores" | "sql-server-2019-license-web-edition-20-cores" | "sql-server-2019-license-web-edition-22-cores" | "sql-server-2019-license-web-edition-24-cores" | "sql-server-2019-license-web-edition-26-cores" | "sql-server-2019-license-web-edition-28-cores" | "sql-server-2019-license-web-edition-30-cores" | "sql-server-2019-license-web-edition-32-cores" | "sql-server-2019-license-web-edition-34-cores" | "sql-server-2019-license-web-edition-36-cores" | "sql-server-2019-license-web-edition-38-cores" | "sql-server-2019-license-web-edition-4-cores" | "sql-server-2019-license-web-edition-40-cores" | "sql-server-2019-license-web-edition-42-cores" | "sql-server-2019-license-web-edition-44-cores" | "sql-server-2019-license-web-edition-46-cores" | "sql-server-2019-license-web-edition-48-cores" | "sql-server-2019-license-web-edition-50-cores" | "sql-server-2019-license-web-edition-52-cores" | "sql-server-2019-license-web-edition-54-cores" | "sql-server-2019-license-web-edition-56-cores" | "sql-server-2019-license-web-edition-58-cores" | "sql-server-2019-license-web-edition-6-cores" | "sql-server-2019-license-web-edition-60-cores" | "sql-server-2019-license-web-edition-62-cores" | "sql-server-2019-license-web-edition-64-cores" | "sql-server-2019-license-web-edition-8-cores" | "sql-server-2019-license-web-edition-96-cores" | "sql-server-2022-license-enterprise-edition-10-cores" | "sql-server-2022-license-enterprise-edition-12-cores" | "sql-server-2022-license-enterprise-edition-128-cores" | "sql-server-2022-license-enterprise-edition-14-cores" | "sql-server-2022-license-enterprise-edition-16-cores" | "sql-server-2022-license-enterprise-edition-18-cores" | "sql-server-2022-license-enterprise-edition-20-cores" | "sql-server-2022-license-enterprise-edition-22-cores" | "sql-server-2022-license-enterprise-edition-24-cores" | "sql-server-2022-license-enterprise-edition-26-cores" | "sql-server-2022-license-enterprise-edition-28-cores" | "sql-server-2022-license-enterprise-edition-30-cores" | "sql-server-2022-license-enterprise-edition-32-cores" | "sql-server-2022-license-enterprise-edition-34-cores" | "sql-server-2022-license-enterprise-edition-36-cores" | "sql-server-2022-license-enterprise-edition-38-cores" | "sql-server-2022-license-enterprise-edition-4-cores" | "sql-server-2022-license-enterprise-edition-40-cores" | "sql-server-2022-license-enterprise-edition-42-cores" | "sql-server-2022-license-enterprise-edition-44-cores" | "sql-server-2022-license-enterprise-edition-46-cores" | "sql-server-2022-license-enterprise-edition-48-cores" | "sql-server-2022-license-enterprise-edition-50-cores" | "sql-server-2022-license-enterprise-edition-52-cores" | "sql-server-2022-license-enterprise-edition-54-cores" | "sql-server-2022-license-enterprise-edition-56-cores" | "sql-server-2022-license-enterprise-edition-58-cores" | "sql-server-2022-license-enterprise-edition-6-cores" | "sql-server-2022-license-enterprise-edition-60-cores" | "sql-server-2022-license-enterprise-edition-62-cores" | "sql-server-2022-license-enterprise-edition-64-cores" | "sql-server-2022-license-enterprise-edition-8-cores" | "sql-server-2022-license-enterprise-edition-96-cores" | "sql-server-2022-license-standard-edition-10-cores" | "sql-server-2022-license-standard-edition-12-cores" | "sql-server-2022-license-standard-edition-128-cores" | "sql-server-2022-license-standard-edition-14-cores" | "sql-server-2022-license-standard-edition-16-cores" | "sql-server-2022-license-standard-edition-18-cores" | "sql-server-2022-license-standard-edition-20-cores" | "sql-server-2022-license-standard-edition-22-cores" | "sql-server-2022-license-standard-edition-24-cores" | "sql-server-2022-license-standard-edition-26-cores" | "sql-server-2022-license-standard-edition-28-cores" | "sql-server-2022-license-standard-edition-30-cores" | "sql-server-2022-license-standard-edition-32-cores" | "sql-server-2022-license-standard-edition-34-cores" | "sql-server-2022-license-standard-edition-36-cores" | "sql-server-2022-license-standard-edition-38-cores" | "sql-server-2022-license-standard-edition-4-cores" | "sql-server-2022-license-standard-edition-40-cores" | "sql-server-2022-license-standard-edition-42-cores" | "sql-server-2022-license-standard-edition-44-cores" | "sql-server-2022-license-standard-edition-46-cores" | "sql-server-2022-license-standard-edition-48-cores" | "sql-server-2022-license-standard-edition-50-cores" | "sql-server-2022-license-standard-edition-52-cores" | "sql-server-2022-license-standard-edition-54-cores" | "sql-server-2022-license-standard-edition-56-cores" | "sql-server-2022-license-standard-edition-58-cores" | "sql-server-2022-license-standard-edition-6-cores" | "sql-server-2022-license-standard-edition-60-cores" | "sql-server-2022-license-standard-edition-62-cores" | "sql-server-2022-license-standard-edition-64-cores" | "sql-server-2022-license-standard-edition-8-cores" | "sql-server-2022-license-standard-edition-96-cores" | "sql-server-2022-license-web-edition-10-cores" | "sql-server-2022-license-web-edition-12-cores" | "sql-server-2022-license-web-edition-128-cores" | "sql-server-2022-license-web-edition-14-cores" | "sql-server-2022-license-web-edition-16-cores" | "sql-server-2022-license-web-edition-18-cores" | "sql-server-2022-license-web-edition-20-cores" | "sql-server-2022-license-web-edition-22-cores" | "sql-server-2022-license-web-edition-24-cores" | "sql-server-2022-license-web-edition-26-cores" | "sql-server-2022-license-web-edition-28-cores" | "sql-server-2022-license-web-edition-30-cores" | "sql-server-2022-license-web-edition-32-cores" | "sql-server-2022-license-web-edition-34-cores" | "sql-server-2022-license-web-edition-36-cores" | "sql-server-2022-license-web-edition-38-cores" | "sql-server-2022-license-web-edition-4-cores" | "sql-server-2022-license-web-edition-40-cores" | "sql-server-2022-license-web-edition-42-cores" | "sql-server-2022-license-web-edition-44-cores" | "sql-server-2022-license-web-edition-46-cores" | "sql-server-2022-license-web-edition-48-cores" | "sql-server-2022-license-web-edition-50-cores" | "sql-server-2022-license-web-edition-52-cores" | "sql-server-2022-license-web-edition-54-cores" | "sql-server-2022-license-web-edition-56-cores" | "sql-server-2022-license-web-edition-58-cores" | "sql-server-2022-license-web-edition-6-cores" | "sql-server-2022-license-web-edition-60-cores" | "sql-server-2022-license-web-edition-62-cores" | "sql-server-2022-license-web-edition-64-cores" | "sql-server-2022-license-web-edition-8-cores" | "sql-server-2022-license-web-edition-96-cores"
    /**
     * All states a license can be in
     * type fullname: license.StateEnum
     */
    export type StateEnum = "ok" | "released" | "terminated" | "toDeliver"
    /**
     * licenses Todos
     * interface fullName: license.Task.Task
     */
    export interface Task {
        action: license.ActionType;
        doneDate?: string;
        lastUpdate: string;
        name: string;
        status: license.TaskStateEnum;
        taskId: number;
        todoDate: string;
    }
    /**
     * All states a license Task can be in
     * type fullname: license.TaskStateEnum
     */
    export type TaskStateEnum = "cancelled" | "doing" | "done" | "error" | "todo"
    export namespace sqlserver {
        /**
         * Your SQL Server license
         * interface fullName: license.sqlserver.SqlServer.SqlServer
         */
        export interface SqlServer {
            creation: string;
            domain: string;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.SqlServerVersionEnum;
        }
        /**
         * Your SQL Server license
         * interface fullName: license.sqlserver.SqlServerWithIAM.SqlServerWithIAM
         */
        export interface SqlServerWithIAM {
            creation: string;
            domain: string;
            iam?: iam.ResourceMetadata;
            ip: string;
            licenseId: string;
            status: license.StateEnum;
            version: license.SqlServerVersionEnum;
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
 * Api model for /license/sqlserver
 */
export interface License {
    sqlserver: {
        /**
         * List available services
         * GET /license/sqlserver
         */
        $get(params?: { iamTags?: any }): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): void;
        orderableVersions: {
            /**
             * Get the orderable Sql Server versions
             * GET /license/sqlserver/orderableVersions
             */
            $get(params: { ip: string }): Promise<license.SqlServerOrderConfiguration[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
        }
        $(serviceName: string): {
            /**
             * Get this object properties
             * GET /license/sqlserver/{serviceName}
             */
            $get(): Promise<license.sqlserver.SqlServer>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): void;
            confirmTermination: {
                /**
                 * Confirm service termination
                 * POST /license/sqlserver/{serviceName}/confirmTermination
                 */
                $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
            }
            serviceInfos: {
                /**
                 * Get service information
                 * GET /license/sqlserver/{serviceName}/serviceInfos
                 */
                $get(): Promise<services.Service>;
                /**
                 * Update service information
                 * PUT /license/sqlserver/{serviceName}/serviceInfos
                 */
                $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
            }
            tasks: {
                /**
                 * Tasks linked to this license
                 * GET /license/sqlserver/{serviceName}/tasks
                 */
                $get(params?: { action?: license.ActionType, status?: license.TaskStateEnum }): Promise<number[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): void;
                $(taskId: number): {
                    /**
                     * Get this object properties
                     * GET /license/sqlserver/{serviceName}/tasks/{taskId}
                     */
                    $get(): Promise<license.Task>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): void;
                };
            }
            terminate: {
                /**
                 * Ask for the termination of your service
                 * POST /license/sqlserver/{serviceName}/terminate
                 */
                $post(): Promise<string>;
            }
        };
    }
}

export declare function proxyLicenseSqlserver(ovhEngine: OvhRequestable): License;
export default proxyLicenseSqlserver;
