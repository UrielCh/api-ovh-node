import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /vps Models
 * Source: https://api.us.ovhcloud.com/1.0/vps.json
 */
export namespace complexType {
    /**
     * A numeric value tagged with its unit
     * interface fullName: complexType.UnitAndValue.UnitAndValue
     */
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
    /**
     * A value set tagged with its unit
     * interface fullName: complexType.UnitAndValues.UnitAndValues
     */
    export interface UnitAndValues<T> {
        unit: string;
        values: T[];
    }
}
export namespace coreTypes {
    /**
     * ISO country codes
     * type fullname: coreTypes.CountryEnum
     */
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    /**
     * Ip versions
     * type fullname: coreTypes.IpVersionEnum
     */
    export type IpVersionEnum = "v4" | "v6"
}
export namespace dedicated {
    /**
     * different task operation
     * type fullname: dedicated.TaskFunctionEnum
     */
    export type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "INFRA_002_VirtualNetworkInterface_group" | "INFRA_002_VirtualNetworkInterface_ungroup" | "INFRA_ONE_NETWORK_VirtualNetworkInterface_group" | "INFRA_ONE_NETWORK_VirtualNetworkInterface_ungroup" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "hardware_update" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    /**
     * different task status
     * type fullname: dedicated.TaskStatusEnum
     */
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace server {
        /**
         * Backup Ftp ACL for this server and Backup Ftp
         * interface fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
         */
        export interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        /**
         * Server tasks
         * interface fullName: dedicated.server.Task.Task
         */
        export interface Task {
            comment?: string;
            doneDate?: string;
            function: dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            needSchedule: boolean;
            note?: string;
            plannedInterventionId?: number;
            startDate: string;
            status: dedicated.TaskStatusEnum;
            taskId: number;
            ticketReference?: string;
        }
    }
}
export namespace nichandle {
    /**
     * OVH subsidiaries
     * type fullname: nichandle.OvhSubsidiaryEnum
     */
    export type OvhSubsidiaryEnum = "CZ" | "DE" | "ES" | "EU" | "FI" | "FR" | "GB" | "IE" | "IT" | "LT" | "MA" | "NL" | "PL" | "PT" | "SN" | "TN" | "ASIA" | "AU" | "CA" | "QC" | "SG" | "WE" | "WS" | "US"
}
export namespace secondaryDns {
    /**
     * Secondary dns infos
     * interface fullName: secondaryDns.SecondaryDNS.SecondaryDNS
     */
    export interface SecondaryDNS {
        creationDate: string;
        dns: string;
        domain: string;
        ipMaster: string;
    }
    /**
     * A structure describing informations about available nameserver for secondary dns 
     * interface fullName: secondaryDns.SecondaryDNSNameServer.SecondaryDNSNameServer
     */
    export interface SecondaryDNSNameServer {
        hostname: string;
        ip: string;
        ipv6?: string;
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
export namespace vps {
    /**
     * Backup your VPS
     * interface fullName: vps.AutomatedBackup.AutomatedBackup
     */
    export interface AutomatedBackup {
        schedule?: string;
        state: vps.BackupStateEnum;
    }
    /**
     * Backup Ftp assigned to this VPS
     * interface fullName: vps.BackupFtp.BackupFtp
     */
    export interface BackupFtp {
        ftpBackupName: string;
        quota?: complexType.UnitAndValue<number>;
        readOnlyDate?: string;
        type: string;
        usage?: complexType.UnitAndValue<number>;
    }
    /**
     * Available AutomatedBackup states
     * type fullname: vps.BackupStateEnum
     */
    export type BackupStateEnum = "disabled" | "enabled"
    /**
     * Information about a datacenter of a VPS Virtual Machine
     * interface fullName: vps.Datacenter.Datacenter
     */
    export interface Datacenter {
        country: coreTypes.CountryEnum;
        longName: string;
        name: string;
    }
    /**
     * Information about a disk of a VPS Virtual Machine
     * interface fullName: vps.Disk.Disk
     */
    export interface Disk {
        bandwidthLimit: number;
        id: number;
        lowFreeSpaceThreshold?: number;
        monitoring?: boolean;
        serviceName?: string;
        size: number;
        state: vps.disk.StateEnum;
        type: vps.disk.TypeEnum;
    }
    /**
     * Installation image for a VPS
     * interface fullName: vps.Image.Image
     */
    export interface Image {
        id: string;
        name: string;
    }
    /**
     * Information about an IP address for a VPS Virtual Machine
     * interface fullName: vps.Ip.Ip
     */
    export interface Ip {
        gateway?: string;
        geolocation: vps.ip.GeolocationEnum;
        ipAddress: string;
        macAddress?: string;
        reverse?: string;
        type: vps.ip.TypeEnum;
        version: coreTypes.IpVersionEnum;
    }
    /**
     * A structure describing characteristics of a VPS model
     * interface fullName: vps.Model.Model
     */
    export interface Model {
        availableOptions: vps.VpsOptionEnum[];
        datacenter: string[];
        disk: number;
        maximumAdditionnalIp: number;
        memory: number;
        name: string;
        offer: string;
        vcore: number;
        version: vps.VpsVersionEnum;
    }
    /**
     * Information about the options of a VPS Virtual Machine
     * interface fullName: vps.Option.Option
     */
    export interface Option {
        option: vps.VpsOptionEnum;
        state: vps.VpsOptionStateEnum;
    }
    /**
     * Available restore state
     * type fullname: vps.RestoreStateEnum
     */
    export type RestoreStateEnum = "available" | "restored" | "restoring"
    /**
     * Available restore types
     * type fullname: vps.RestoreTypeEnum
     */
    export type RestoreTypeEnum = "file" | "full"
    /**
     * Information about the snapshot of a VPS Virtual Machine
     * interface fullName: vps.Snapshot.Snapshot
     */
    export interface Snapshot {
        creationDate: string;
        description: string;
    }
    /**
     * Available softwares on a Template
     * interface fullName: vps.Software.Software
     */
    export interface Software {
        id: number;
        name: string;
        status: vps.SoftwareStatusEnum;
        type: vps.SoftwareTypeEnum;
    }
    /**
     * Available Status for a vps Software
     * type fullname: vps.SoftwareStatusEnum
     */
    export type SoftwareStatusEnum = "deprecated" | "stable" | "testing"
    /**
     * Available Type for a vps Software
     * type fullname: vps.SoftwareTypeEnum
     */
    export type SoftwareTypeEnum = "database" | "environment" | "webserver"
    /**
     * Operation on a VPS Virtual Machine
     * interface fullName: vps.Task.Task
     */
    export interface Task {
        date: string;
        id: number;
        progress: number;
        state: vps.TaskStateEnum;
        type: vps.TaskTypeEnum;
    }
    /**
     * All states a VPS task can be in
     * type fullname: vps.TaskStateEnum
     */
    export type TaskStateEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "paused" | "todo" | "waitingAck"
    /**
     * All type a VPS task can be
     * type fullname: vps.TaskTypeEnum
     */
    export type TaskTypeEnum = "addVeeamBackupJob" | "changeRootPassword" | "createSnapshot" | "deleteSnapshot" | "deliverVm" | "getConsoleUrl" | "internalTask" | "migrate" | "openConsoleAccess" | "provisioningAdditionalIp" | "reOpenVm" | "rebootVm" | "reinstallVm" | "removeVeeamBackup" | "rescheduleAutoBackup" | "restoreFullVeeamBackup" | "restoreVeeamBackup" | "restoreVm" | "revertSnapshot" | "setMonitoring" | "setNetboot" | "startVm" | "stopVm" | "upgradeVm"
    /**
     * Installation template for a VPS Virtual Machine
     * interface fullName: vps.Template.Template
     */
    export interface Template {
        availableLanguage: string[];
        bitFormat: vps.TemplateBitFormatEnum;
        distribution: string;
        id: number;
        locale: string;
        name: string;
    }
    /**
     * Bitness of a VPS template
     * type fullname: vps.TemplateBitFormatEnum
     */
    export type TemplateBitFormatEnum = 32 | 64
    /**
     * VPS Virtual Machine
     * interface fullName: vps.VPS.VPS
     */
    export interface VPS {
        cluster: string;
        displayName?: string;
        keymap?: vps.VpsKeymapEnum;
        memoryLimit: number;
        model: vps.Model;
        monitoringIpBlocks: string[];
        name: string;
        netbootMode: vps.VpsNetbootEnum;
        offerType: vps.VpsOfferEnum;
        slaMonitoring?: boolean;
        state: vps.VpsStateEnum;
        vcore: number;
        zone: string;
    }
    /**
     * Informations about a VPS Veeam backups
     * interface fullName: vps.Veeam.Veeam
     */
    export interface Veeam {
        backup: boolean;
    }
    /**
     * A VNC connection informations
     * interface fullName: vps.Vnc.Vnc
     */
    export interface Vnc {
        host: string;
        password: string;
        port: number;
    }
    /**
     * All supported VNC protocols by VPS
     * type fullname: vps.VncProtocolEnum
     */
    export type VncProtocolEnum = "VNC" | "VNCOverWebSocket"
    /**
     * VPS billing version
     * interface fullName: vps.VpsBillingVersion.VpsBillingVersion
     */
    export interface VpsBillingVersion {
        version: number;
    }
    /**
     * All values keymap can be in
     * type fullname: vps.VpsKeymapEnum
     */
    export type VpsKeymapEnum = "fr" | "us"
    /**
     * Available periods for the VPS monitoring
     * type fullname: vps.VpsMonitoringPeriodEnum
     */
    export type VpsMonitoringPeriodEnum = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
    /**
     * Statistics about resource usage
     * interface fullName: vps.VpsMonitoringStatistics.VpsMonitoringStatistics
     */
    export interface VpsMonitoringStatistics {
        cpu: number;
        disk: number;
        memory: number;
    }
    /**
     * All values a VPS netboot mode can be in
     * type fullname: vps.VpsNetbootEnum
     */
    export type VpsNetbootEnum = "local" | "rescue"
    /**
     * All offers a VPS can have
     * type fullname: vps.VpsOfferEnum
     */
    export type VpsOfferEnum = "beta-classic" | "classic" | "cloud" | "cloudram" | "game-classic" | "lowlat" | "ssd"
    /**
     * All options a VPS can have
     * type fullname: vps.VpsOptionEnum
     */
    export type VpsOptionEnum = "additionalDisk" | "automatedBackup" | "cpanel" | "ftpbackup" | "plesk" | "snapshot" | "veeam" | "windows"
    /**
     * All states a VPS Option can be in
     * type fullname: vps.VpsOptionStateEnum
     */
    export type VpsOptionStateEnum = "released" | "subscribed"
    /**
     * All states a VPS can be in
     * type fullname: vps.VpsStateEnum
     */
    export type VpsStateEnum = "backuping" | "installing" | "maintenance" | "rebooting" | "rescued" | "running" | "stopped" | "stopping" | "upgrading"
    /**
     * Available types for the VPS monitoring and use
     * type fullname: vps.VpsStatisticTypeEnum
     */
    export type VpsStatisticTypeEnum = "cpu:iowait" | "cpu:max" | "cpu:nice" | "cpu:sys" | "cpu:used" | "cpu:user" | "mem:max" | "mem:used" | "net:rx" | "net:tx"
    /**
     * A timestamp associated to a value
     * interface fullName: vps.VpsTimestampValue.VpsTimestampValue
     */
    export interface VpsTimestampValue {
        timestamp: number;
        value?: number;
    }
    /**
     * All versions that VPS can have
     * type fullname: vps.VpsVersionEnum
     */
    export type VpsVersionEnum = "2013v1" | "2014v1" | "2015v1" | "2017v1" | "2017v2" | "2017v3" | "2018v1" | "2018v2" | "2019v1"
    export namespace automatedBackup {
        /**
         * A backup attached to your VPS
         * interface fullName: vps.automatedBackup.Attached.Attached
         */
        export interface Attached {
            access: vps.automatedBackup.attached.Infos;
            restorePoint: string;
        }
        export namespace attached {
            /**
             * A structure describing a backup's access informations
             * interface fullName: vps.automatedBackup.attached.Infos.Infos
             */
            export interface Infos {
                additionalDisk?: string;
                nfs?: string;
                smb?: string;
            }
        }
    }
    export namespace disk {
        /**
         * Possible states the disk can be in
         * type fullname: vps.disk.StateEnum
         */
        export type StateEnum = "connected" | "disconnected" | "pending"
        /**
         * Available types for the Disk monitoring and use
         * type fullname: vps.disk.StatisticTypeEnum
         */
        export type StatisticTypeEnum = "max" | "used"
        /**
         * Possible type a disk can be in
         * type fullname: vps.disk.TypeEnum
         */
        export type TypeEnum = "additional" | "primary"
    }
    export namespace ip {
        /**
         * Geolocation of the IP Address
         * type fullname: vps.ip.GeolocationEnum
         */
        export type GeolocationEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "gb" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        /**
         * Service states for an Ip
         * interface fullName: vps.ip.ServiceStatus.ServiceStatus
         */
        export interface ServiceStatus {
            dns: vps.ip.ServiceStatusService;
            http: vps.ip.ServiceStatusService;
            https: vps.ip.ServiceStatusService;
            ping: vps.ip.ServiceStatusStateEnum;
            smtp: vps.ip.ServiceStatusService;
            ssh: vps.ip.ServiceStatusService;
            tools?: vps.ip.ServiceStatusStateEnum;
        }
        /**
         * Port and state of a service on an IP
         * interface fullName: vps.ip.ServiceStatusService.ServiceStatusService
         */
        export interface ServiceStatusService {
            port: number;
            state: vps.ip.ServiceStatusStateEnum;
        }
        /**
         * Possible states of a service (ping, port)
         * type fullname: vps.ip.ServiceStatusStateEnum
         */
        export type ServiceStatusStateEnum = "down" | "up"
        /**
         * Ip types on a VPS
         * type fullname: vps.ip.TypeEnum
         */
        export type TypeEnum = "additional" | "primary"
    }
    export namespace migration {
        /**
         * A structure describing a migration from VPS Cloud 2014 to VPS 2020
         * interface fullName: vps.migration.Cloud2014to2020.Cloud2014to2020
         */
        export interface Cloud2014to2020 {
            date?: string;
            model?: string;
            notAfter?: string;
            notBefore?: string;
            options: vps.migration.OptionMapping[];
            status: vps.migration.StatusEnum;
        }
        /**
         * Description not available
         * interface fullName: vps.migration.Migration.Migration
         */
        export interface Migration {
            date: string;
            id: string;
        }
        /**
         * Mapping between a VPS 2014 option code and a VPS 2020 option code
         * interface fullName: vps.migration.OptionMapping.OptionMapping
         */
        export interface OptionMapping {
            vps2014code: vps.VpsOptionEnum;
            vps2020code: string;
        }
        /**
         * Mapping between a VPS 2016 option code and a VPS 2020 option code
         * interface fullName: vps.migration.OptionMapping2016.OptionMapping2016
         */
        export interface OptionMapping2016 {
            currentPlan: string;
            newPlan: string;
            product: string;
        }
        /**
         * All status a migration task can be in
         * type fullname: vps.migration.StatusEnum
         */
        export type StatusEnum = "available" | "notAvailable" | "ongoing" | "planned" | "toPlan"
        /**
         * A structure describing a migration from VPS 2016 to VPS 2020
         * interface fullName: vps.migration.VPS2016to2020.VPS2016to2020
         */
        export interface VPS2016to2020 {
            currentPlan: string;
            datacenter: string;
            date?: string;
            newPlan: string;
            options: vps.migration.OptionMapping2016[];
            product: string;
            status: vps.migration.StatusEnum;
        }
    }
    export namespace order {
        export namespace rule {
            /**
             * Datacenter rules
             * interface fullName: vps.order.rule.Datacenter.Datacenter
             */
            export interface Datacenter {
                datacenter: string;
                status: vps.order.rule.DatacenterStatusEnum;
            }
            /**
             * Possible values for datacenter status
             * type fullname: vps.order.rule.DatacenterStatusEnum
             */
            export type DatacenterStatusEnum = "available" | "out-of-stock"
            /**
             * Datacenters rules
             * interface fullName: vps.order.rule.Datacenters.Datacenters
             */
            export interface Datacenters {
                datacenters: vps.order.rule.Datacenter[];
            }
            /**
             * OS choice rules
             * interface fullName: vps.order.rule.OSChoice.OSChoice
             */
            export interface OSChoice {
                name: string;
                status: vps.order.rule.OSChoiceStatusEnum;
            }
            /**
             * Possible values for OS choice status
             * type fullname: vps.order.rule.OSChoiceStatusEnum
             */
            export type OSChoiceStatusEnum = "unavailable" | "available" | "checked-by-default"
            /**
             * OS choices rules
             * interface fullName: vps.order.rule.OSChoices.OSChoices
             */
            export interface OSChoices {
                choices: vps.order.rule.OSChoice[];
            }
        }
    }
    export namespace veeam {
        /**
         * A structure describing a Veeam backup's export options
         * type fullname: vps.veeam.ExportTypeEnum
         */
        export type ExportTypeEnum = "nfs" | "smb"
        /**
         * A structure describing a Veeam backup's access informations
         * interface fullName: vps.veeam.Infos.Infos
         */
        export interface Infos {
            nfs: string;
            smb: string;
        }
        /**
         * Informations about a VPS Veeam restore points
         * interface fullName: vps.veeam.RestorePoint.RestorePoint
         */
        export interface RestorePoint {
            creationTime: string;
            id: number;
        }
        /**
         * Currently restored backup
         * interface fullName: vps.veeam.RestoredBackup.RestoredBackup
         */
        export interface RestoredBackup {
            accessInfos: vps.veeam.Infos;
            restorePointId: number;
            state: vps.veeam.StateEnum;
        }
        /**
         * A structure describing a Veeam restored backup's state
         * type fullname: vps.veeam.StateEnum
         */
        export type StateEnum = "mounted" | "restoring" | "unmounted" | "unmounting"
    }
}

/**
 * END API /vps Models
 */
export function proxyVps(ovhEngine: OvhRequestable): Vps {
    return buildOvhProxy(ovhEngine, '/vps');
}
export default proxyVps;
/**
 * Api model for /vps
 */
export interface Vps {
    /**
     * List available services
     * GET /vps
     */
    $get(): Promise<string[]>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    order: {
        rule: {
            datacenter: {
                /**
                 * List datacenters with priority and stock status
                 * GET /vps/order/rule/datacenter
                 */
                $get(params: { os?: string, ovhSubsidiary: nichandle.OvhSubsidiaryEnum, planCode: string }): Promise<vps.order.rule.Datacenters>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            osChoices: {
                /**
                 * List OS choices with status
                 * GET /vps/order/rule/osChoices
                 */
                $get(params: { datacenter: string, os: string }): Promise<vps.order.rule.OSChoices>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
    }
    $(serviceName: string): {
        /**
         * Get this object properties
         * GET /vps/{serviceName}
         */
        $get(): Promise<vps.VPS>;
        /**
         * Alter this object properties
         * PUT /vps/{serviceName}
         */
        $put(params?: { cluster?: string, displayName?: string, keymap?: vps.VpsKeymapEnum, memoryLimit?: number, model?: vps.Model, monitoringIpBlocks?: string[], name?: string, netbootMode?: vps.VpsNetbootEnum, offerType?: vps.VpsOfferEnum, slaMonitoring?: boolean, state?: vps.VpsStateEnum, vcore?: number, zone?: string }): Promise<void>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        activeOptions: {
            /**
             * Return all active options for the virtual server
             * GET /vps/{serviceName}/activeOptions
             */
            $get(): Promise<vps.VpsOptionEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        automatedBackup: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/automatedBackup
             */
            $get(): Promise<vps.AutomatedBackup>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            attachedBackup: {
                /**
                 * Backup attached to your VPS
                 * GET /vps/{serviceName}/automatedBackup/attachedBackup
                 */
                $get(): Promise<vps.automatedBackup.Attached[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
            detachBackup: {
                /**
                 * Create a VPS.Task that will umount a restored backup on your VPS
                 * POST /vps/{serviceName}/automatedBackup/detachBackup
                 */
                $post(params: { restorePoint: string }): Promise<vps.Task>;
            }
            reschedule: {
                /**
                 * Change the scheduled time of your daily backup
                 * POST /vps/{serviceName}/automatedBackup/reschedule
                 */
                $post(params: { schedule: string }): Promise<vps.Task>;
            }
            restore: {
                /**
                 * Creates a VPS.Task that will restore the given restorePoint
                 * POST /vps/{serviceName}/automatedBackup/restore
                 */
                $post(params: { changePassword?: boolean, restorePoint: string, type: vps.RestoreTypeEnum }): Promise<vps.Task>;
            }
            restorePoints: {
                /**
                 * Get available Restore Points
                 * GET /vps/{serviceName}/automatedBackup/restorePoints
                 */
                $get(params: { state: vps.RestoreStateEnum }): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        confirmTermination: {
            /**
             * Confirm termination of your service
             * POST /vps/{serviceName}/confirmTermination
             */
            $post(params: { commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string }): Promise<string>;
        }
        createSnapshot: {
            /**
             * Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot
             * POST /vps/{serviceName}/createSnapshot
             */
            $post(params?: { description?: string }): Promise<vps.Task>;
        }
        datacenter: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/datacenter
             */
            $get(): Promise<vps.Datacenter>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        disks: {
            /**
             * Disks associated to this virtual server
             * GET /vps/{serviceName}/disks
             */
            $get(): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/disks/{id}
                 */
                $get(): Promise<vps.Disk>;
                /**
                 * Alter this object properties
                 * PUT /vps/{serviceName}/disks/{id}
                 */
                $put(params?: { bandwidthLimit?: number, id?: number, lowFreeSpaceThreshold?: number, monitoring?: boolean, serviceName?: string, size?: number, state?: vps.disk.StateEnum, type?: vps.disk.TypeEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                monitoring: {
                    /**
                     * Return many statistics about the disk for a given period
                     * GET /vps/{serviceName}/disks/{id}/monitoring
                     */
                    $get(params: { period: vps.VpsMonitoringPeriodEnum, type: vps.disk.StatisticTypeEnum }): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
                use: {
                    /**
                     * Return many statistics about the disk at that time
                     * GET /vps/{serviceName}/disks/{id}/use
                     */
                    $get(params: { type: vps.disk.StatisticTypeEnum }): Promise<complexType.UnitAndValue<number>>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        getConsoleUrl: {
            /**
             * Return the VPS console URL
             * POST /vps/{serviceName}/getConsoleUrl
             */
            $post(): Promise<string>;
        }
        images: {
            available: {
                /**
                 * Images available for this virtual server
                 * GET /vps/{serviceName}/images/available
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(id: string): {
                    /**
                     * Get this object properties
                     * GET /vps/{serviceName}/images/available/{id}
                     */
                    $get(): Promise<vps.Image>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                };
            }
            current: {
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/images/current
                 */
                $get(): Promise<vps.Image>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            }
        }
        ipCountryAvailable: {
            /**
             * Get the countries you can select for your IPs geolocation
             * GET /vps/{serviceName}/ipCountryAvailable
             */
            $get(): Promise<vps.ip.GeolocationEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        ips: {
            /**
             * Ips associated to this virtual server
             * GET /vps/{serviceName}/ips
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(ipAddress: string): {
                /**
                 * Release a given Ip (Additional Ip)
                 * DELETE /vps/{serviceName}/ips/{ipAddress}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/ips/{ipAddress}
                 */
                $get(): Promise<vps.Ip>;
                /**
                 * Alter this object properties
                 * PUT /vps/{serviceName}/ips/{ipAddress}
                 */
                $put(params?: { gateway?: string, geolocation?: vps.ip.GeolocationEnum, ipAddress?: string, macAddress?: string, reverse?: string, type?: vps.ip.TypeEnum, version?: coreTypes.IpVersionEnum }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        migration2014: {
            /**
             * Get information on a possible migration of a VPS Cloud 2014 to VPS Cloud 2020
             * GET /vps/{serviceName}/migration2014
             */
            $get(): Promise<vps.migration.Cloud2014to2020>;
            /**
             * Schedule the migration of a VPS Cloud 2014 to VPS Cloud 2020
             * POST /vps/{serviceName}/migration2014
             */
            $post(params: { date: string }): Promise<vps.Task>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        monitoring: {
            /**
             * Return many statistics about the virtual machine for a given period
             * GET /vps/{serviceName}/monitoring
             */
            $get(params: { period: vps.VpsMonitoringPeriodEnum, type: vps.VpsStatisticTypeEnum }): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        option: {
            /**
             * List of VPS options
             * GET /vps/{serviceName}/option
             */
            $get(): Promise<vps.VpsOptionEnum[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(option: vps.VpsOptionEnum): {
                /**
                 * Release a given option
                 * DELETE /vps/{serviceName}/option/{option}
                 */
                $delete(params?: { deleteNow?: boolean }): Promise<void>;
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/option/{option}
                 */
                $get(): Promise<vps.Option>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        reboot: {
            /**
             * Request a reboot of the machine
             * POST /vps/{serviceName}/reboot
             */
            $post(): Promise<vps.Task>;
        }
        rebuild: {
            /**
             * Reinstall the virtual server
             * POST /vps/{serviceName}/rebuild
             */
            $post(params: { doNotSendPassword?: boolean, imageId: string, installRTM?: boolean, sshKey?: string }): Promise<vps.Task>;
        }
        secondaryDnsDomains: {
            /**
             * List of secondary dns domain name
             * GET /vps/{serviceName}/secondaryDnsDomains
             */
            $get(): Promise<string[]>;
            /**
             * add a domain on secondary dns
             * POST /vps/{serviceName}/secondaryDnsDomains
             */
            $post(params: { domain: string, ip?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(domain: string): {
                /**
                 * remove this domain
                 * DELETE /vps/{serviceName}/secondaryDnsDomains/{domain}
                 */
                $delete(): Promise<void>;
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/secondaryDnsDomains/{domain}
                 */
                $get(): Promise<secondaryDns.SecondaryDNS>;
                /**
                 * Alter this object properties
                 * PUT /vps/{serviceName}/secondaryDnsDomains/{domain}
                 */
                $put(params?: { creationDate?: string, dns?: string, domain?: string, ipMaster?: string }): Promise<void>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                dnsServer: {
                    /**
                     * domain name server informations
                     * GET /vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
                     */
                    $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                }
            };
        }
        secondaryDnsNameServerAvailable: {
            /**
             * Secondary nameServer available for your Server
             * GET /vps/{serviceName}/secondaryDnsNameServerAvailable
             */
            $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        serviceInfos: {
            /**
             * Get this object properties
             * GET /vps/{serviceName}/serviceInfos
             */
            $get(): Promise<services.Service>;
            /**
             * Alter this object properties
             * PUT /vps/{serviceName}/serviceInfos
             */
            $put(params?: { canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        snapshot: {
            /**
             * Creates a vps.Task that will delete the Snapshot
             * DELETE /vps/{serviceName}/snapshot
             */
            $delete(): Promise<vps.Task>;
            /**
             * Get this object properties
             * GET /vps/{serviceName}/snapshot
             */
            $get(): Promise<vps.Snapshot>;
            /**
             * Alter this object properties
             * PUT /vps/{serviceName}/snapshot
             */
            $put(params?: { creationDate?: string, description?: string }): Promise<void>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            revert: {
                /**
                 * Revert the Virtual Server to this snapshot
                 * POST /vps/{serviceName}/snapshot/revert
                 */
                $post(): Promise<vps.Task>;
            }
        }
        start: {
            /**
             * Request the machine to start
             * POST /vps/{serviceName}/start
             */
            $post(): Promise<vps.Task>;
        }
        statistics: {
            /**
             * Return monitoring statistics about the virtual machine
             * GET /vps/{serviceName}/statistics
             */
            $get(): Promise<vps.VpsMonitoringStatistics>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        stop: {
            /**
             * Request the machine to stop
             * POST /vps/{serviceName}/stop
             */
            $post(): Promise<vps.Task>;
        }
        tasks: {
            /**
             * Tasks associated to this virtual server
             * GET /vps/{serviceName}/tasks
             */
            $get(params?: { state?: vps.TaskStateEnum, type?: vps.TaskTypeEnum }): Promise<number[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            $(id: number): {
                /**
                 * Get this object properties
                 * GET /vps/{serviceName}/tasks/{id}
                 */
                $get(): Promise<vps.Task>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            };
        }
        terminate: {
            /**
             * Terminate your service
             * POST /vps/{serviceName}/terminate
             */
            $post(): Promise<string>;
        }
    };
}
