import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /vps Models
 * Source: https://ca.api.ovh.com/1.0/vps.json
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
    // interface fullName: complexType.UnitAndValues.UnitAndValues
    export interface UnitAndValues<T> {
        unit: string;
        values: T[];
    }
}
export namespace coreTypes {
    // type fullname: coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    // type fullname: coreTypes.IpVersionEnum
    export type IpVersionEnum = "v4" | "v6"
}
export namespace dedicated {
    // type fullname: dedicated.TaskFunctionEnum
    export type TaskFunctionEnum = "INFRA_002_VirtualNetworkInterface" | "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "ipmi/configureSGX" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    // type fullname: dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace server {
        // interface fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
        export interface BackupFtpAcl {
            cifs: boolean;
            ftp: boolean;
            ipBlock: string;
            isApplied: boolean;
            lastUpdate: string;
            nfs: boolean;
        }
        // interface fullName: dedicated.server.Task.Task
        export interface Task {
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
export namespace nichandle {
    // type fullname: nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace secondaryDns {
    // interface fullName: secondaryDns.SecondaryDNS.SecondaryDNS
    export interface SecondaryDNS {
        creationDate: string;
        dns: string;
        domain: string;
        ipMaster: string;
    }
    // interface fullName: secondaryDns.SecondaryDNSNameServer.SecondaryDNSNameServer
    export interface SecondaryDNSNameServer {
        hostname: string;
        ip: string;
        ipv6?: string;
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
export namespace vps {
    // interface fullName: vps.AutomatedBackup.AutomatedBackup
    export interface AutomatedBackup {
        schedule?: string;
        state: vps.BackupStateEnum;
    }
    // interface fullName: vps.BackupFtp.BackupFtp
    export interface BackupFtp {
        ftpBackupName: string;
        quota?: complexType.UnitAndValue<number>;
        readOnlyDate?: string;
        type: string;
        usage?: complexType.UnitAndValue<number>;
    }
    // type fullname: vps.BackupStateEnum
    export type BackupStateEnum = "disabled" | "enabled"
    // interface fullName: vps.Datacenter.Datacenter
    export interface Datacenter {
        country: coreTypes.CountryEnum;
        longName: string;
        name: string;
    }
    // interface fullName: vps.Disk.Disk
    export interface Disk {
        bandwidthLimit: number;
        id: number;
        lowFreeSpaceThreshold?: number;
        monitoring?: boolean;
        size: number;
        state: vps.disk.StateEnum;
        type: vps.disk.TypeEnum;
    }
    // interface fullName: vps.Image.Image
    export interface Image {
        id: string;
        name: string;
    }
    // interface fullName: vps.Ip.Ip
    export interface Ip {
        gateway?: string;
        geolocation: vps.ip.GeolocationEnum;
        ipAddress: string;
        macAddress?: string;
        reverse?: string;
        type: vps.ip.TypeEnum;
        version: coreTypes.IpVersionEnum;
    }
    // interface fullName: vps.Model.Model
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
    // interface fullName: vps.Option.Option
    export interface Option {
        option: vps.VpsOptionEnum;
        state: vps.VpsOptionStateEnum;
    }
    // type fullname: vps.RestoreStateEnum
    export type RestoreStateEnum = "available" | "restored" | "restoring"
    // type fullname: vps.RestoreTypeEnum
    export type RestoreTypeEnum = "file" | "full"
    // interface fullName: vps.Snapshot.Snapshot
    export interface Snapshot {
        creationDate: string;
        description: string;
    }
    // interface fullName: vps.Software.Software
    export interface Software {
        id: number;
        name: string;
        status: vps.SoftwareStatusEnum;
        type: vps.SoftwareTypeEnum;
    }
    // type fullname: vps.SoftwareStatusEnum
    export type SoftwareStatusEnum = "deprecated" | "stable" | "testing"
    // type fullname: vps.SoftwareTypeEnum
    export type SoftwareTypeEnum = "database" | "environment" | "webserver"
    // interface fullName: vps.Task.Task
    export interface Task {
        id: number;
        progress: number;
        state: vps.TaskStateEnum;
        type: vps.TaskTypeEnum;
    }
    // type fullname: vps.TaskStateEnum
    export type TaskStateEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "paused" | "todo" | "waitingAck"
    // type fullname: vps.TaskTypeEnum
    export type TaskTypeEnum = "addVeeamBackupJob" | "changeRootPassword" | "createSnapshot" | "deleteSnapshot" | "deliverVm" | "getConsoleUrl" | "internalTask" | "openConsoleAccess" | "provisioningAdditionalIp" | "reOpenVm" | "rebootVm" | "reinstallVm" | "removeVeeamBackup" | "restoreFullVeeamBackup" | "restoreVeeamBackup" | "restoreVm" | "revertSnapshot" | "setMonitoring" | "setNetboot" | "startVm" | "stopVm" | "upgradeVm"
    // interface fullName: vps.Template.Template
    export interface Template {
        availableLanguage: string[];
        bitFormat: vps.TemplateBitFormatEnum;
        distribution: string;
        id: number;
        locale: string;
        name: string;
    }
    // type fullname: vps.TemplateBitFormatEnum
    export type TemplateBitFormatEnum = 32 | 64
    // interface fullName: vps.VPS.VPS
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
    // interface fullName: vps.Veeam.Veeam
    export interface Veeam {
        backup: boolean;
    }
    // interface fullName: vps.Vnc.Vnc
    export interface Vnc {
        host: string;
        password: string;
        port: number;
    }
    // type fullname: vps.VncProtocolEnum
    export type VncProtocolEnum = "VNC" | "VNCOverWebSocket"
    // interface fullName: vps.VpsBillingVersion.VpsBillingVersion
    export interface VpsBillingVersion {
        version: number;
    }
    // type fullname: vps.VpsKeymapEnum
    export type VpsKeymapEnum = "fr" | "us"
    // type fullname: vps.VpsMonitoringPeriodEnum
    export type VpsMonitoringPeriodEnum = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
    // type fullname: vps.VpsNetbootEnum
    export type VpsNetbootEnum = "local" | "rescue"
    // type fullname: vps.VpsOfferEnum
    export type VpsOfferEnum = "beta-classic" | "classic" | "cloud" | "cloudram" | "game-classic" | "lowlat" | "ssd"
    // type fullname: vps.VpsOptionEnum
    export type VpsOptionEnum = "additionalDisk" | "automatedBackup" | "cpanel" | "ftpbackup" | "plesk" | "snapshot" | "veeam" | "windows"
    // type fullname: vps.VpsOptionStateEnum
    export type VpsOptionStateEnum = "released" | "subscribed"
    // type fullname: vps.VpsStateEnum
    export type VpsStateEnum = "installing" | "maintenance" | "rebooting" | "running" | "stopped" | "stopping" | "upgrading"
    // type fullname: vps.VpsStatisticTypeEnum
    export type VpsStatisticTypeEnum = "cpu:iowait" | "cpu:max" | "cpu:nice" | "cpu:sys" | "cpu:used" | "cpu:user" | "mem:max" | "mem:used" | "net:rx" | "net:tx"
    // interface fullName: vps.VpsTimestampValue.VpsTimestampValue
    export interface VpsTimestampValue {
        timestamp: number;
        value?: number;
    }
    // type fullname: vps.VpsVersionEnum
    export type VpsVersionEnum = "2013v1" | "2014v1" | "2015v1" | "2017v1" | "2017v2" | "2017v3" | "2018v1" | "2018v2" | "2019v1"
    export namespace automatedBackup {
        // interface fullName: vps.automatedBackup.Attached.Attached
        export interface Attached {
            access: vps.automatedBackup.attached.Infos;
            restorePoint: string;
        }
        export namespace attached {
            // interface fullName: vps.automatedBackup.attached.Infos.Infos
            export interface Infos {
                additionalDisk?: string;
                nfs?: string;
                smb?: string;
            }
        }
    }
    export namespace disk {
        // type fullname: vps.disk.StateEnum
        export type StateEnum = "connected" | "disconnected" | "pending"
        // type fullname: vps.disk.StatisticTypeEnum
        export type StatisticTypeEnum = "max" | "used"
        // type fullname: vps.disk.TypeEnum
        export type TypeEnum = "additional" | "primary"
    }
    export namespace ip {
        // type fullname: vps.ip.GeolocationEnum
        export type GeolocationEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        // interface fullName: vps.ip.ServiceStatus.ServiceStatus
        export interface ServiceStatus {
            dns: vps.ip.ServiceStatusService;
            http: vps.ip.ServiceStatusService;
            https: vps.ip.ServiceStatusService;
            ping: vps.ip.ServiceStatusStateEnum;
            smtp: vps.ip.ServiceStatusService;
            ssh: vps.ip.ServiceStatusService;
            tools?: vps.ip.ServiceStatusStateEnum;
        }
        // interface fullName: vps.ip.ServiceStatusService.ServiceStatusService
        export interface ServiceStatusService {
            port: number;
            state: vps.ip.ServiceStatusStateEnum;
        }
        // type fullname: vps.ip.ServiceStatusStateEnum
        export type ServiceStatusStateEnum = "down" | "up"
        // type fullname: vps.ip.TypeEnum
        export type TypeEnum = "additional" | "primary"
    }
    export namespace migration {
        // interface fullName: vps.migration.Migration.Migration
        export interface Migration {
            date: string;
            id: string;
        }
    }
    export namespace veeam {
        // type fullname: vps.veeam.ExportTypeEnum
        export type ExportTypeEnum = "nfs" | "smb"
        // interface fullName: vps.veeam.Infos.Infos
        export interface Infos {
            nfs: string;
            smb: string;
        }
        // interface fullName: vps.veeam.RestorePoint.RestorePoint
        export interface RestorePoint {
            creationTime: string;
            id: number;
        }
        // interface fullName: vps.veeam.RestoredBackup.RestoredBackup
        export interface RestoredBackup {
            accessInfos: vps.veeam.Infos;
            restorePointId: number;
            state: vps.veeam.StateEnum;
        }
        // type fullname: vps.veeam.StateEnum
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
 * Api Proxy model
 */// Apis harmony
// path /vps
export interface Vps{
    // GET /vps
    $get(): Promise<string[]>;
    datacenter: {
        // GET /vps/datacenter
        $get(params: {country: nichandle.CountryEnum}): Promise<string[]>;
    }
    $(serviceName: string): {
        // GET /vps/{serviceName}
        $get(): Promise<vps.VPS>;
        // PUT /vps/{serviceName}
        $put(params?: {cluster?: string, displayName?: string, keymap?: vps.VpsKeymapEnum, memoryLimit?: number, model?: vps.Model, monitoringIpBlocks?: string[], name?: string, netbootMode?: vps.VpsNetbootEnum, offerType?: vps.VpsOfferEnum, slaMonitoring?: boolean, state?: vps.VpsStateEnum, vcore?: number, zone?: string}): Promise<void>;
        activeOptions: {
            // GET /vps/{serviceName}/activeOptions
            $get(): Promise<vps.VpsOptionEnum[]>;
        }
        automatedBackup: {
            // GET /vps/{serviceName}/automatedBackup
            $get(): Promise<vps.AutomatedBackup>;
            attachedBackup: {
                // GET /vps/{serviceName}/automatedBackup/attachedBackup
                $get(): Promise<vps.automatedBackup.Attached[]>;
            }
            detachBackup: {
                // POST /vps/{serviceName}/automatedBackup/detachBackup
                $post(params: {restorePoint: string}): Promise<vps.Task>;
            }
            restore: {
                // POST /vps/{serviceName}/automatedBackup/restore
                $post(params: {changePassword?: boolean, restorePoint: string, type: vps.RestoreTypeEnum}): Promise<vps.Task>;
            }
            restorePoints: {
                // GET /vps/{serviceName}/automatedBackup/restorePoints
                $get(params: {state: vps.RestoreStateEnum}): Promise<string[]>;
            }
        }
        availableUpgrade: {
            // GET /vps/{serviceName}/availableUpgrade
            $get(): Promise<vps.Model[]>;
        }
        backupftp: {
            // GET /vps/{serviceName}/backupftp
            $get(): Promise<vps.BackupFtp>;
            access: {
                // GET /vps/{serviceName}/backupftp/access
                $get(): Promise<string[]>;
                // POST /vps/{serviceName}/backupftp/access
                $post(params: {cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean}): Promise<dedicated.server.Task>;
                $(ipBlock: string): {
                    // DELETE /vps/{serviceName}/backupftp/access/{ipBlock}
                    $delete(): Promise<dedicated.server.Task>;
                    // GET /vps/{serviceName}/backupftp/access/{ipBlock}
                    $get(): Promise<dedicated.server.BackupFtpAcl>;
                    // PUT /vps/{serviceName}/backupftp/access/{ipBlock}
                    $put(params?: {cifs?: boolean, ftp?: boolean, ipBlock?: string, isApplied?: boolean, lastUpdate?: string, nfs?: boolean}): Promise<void>;
                };
            }
            authorizableBlocks: {
                // GET /vps/{serviceName}/backupftp/authorizableBlocks
                $get(): Promise<string[]>;
            }
            password: {
                // POST /vps/{serviceName}/backupftp/password
                $post(): Promise<dedicated.server.Task>;
            }
        }
        confirmTermination: {
            // POST /vps/{serviceName}/confirmTermination
            $post(params: {commentary?: string, futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, token: string}): Promise<string>;
        }
        createSnapshot: {
            // POST /vps/{serviceName}/createSnapshot
            $post(params?: {description?: string}): Promise<vps.Task>;
        }
        datacenter: {
            // GET /vps/{serviceName}/datacenter
            $get(): Promise<vps.Datacenter>;
        }
        disks: {
            // GET /vps/{serviceName}/disks
            $get(): Promise<number[]>;
            $(id: number): {
                // GET /vps/{serviceName}/disks/{id}
                $get(): Promise<vps.Disk>;
                // PUT /vps/{serviceName}/disks/{id}
                $put(params?: {bandwidthLimit?: number, id?: number, lowFreeSpaceThreshold?: number, monitoring?: boolean, size?: number, state?: vps.disk.StateEnum, type?: vps.disk.TypeEnum}): Promise<void>;
                monitoring: {
                    // GET /vps/{serviceName}/disks/{id}/monitoring
                    $get(params: {period: vps.VpsMonitoringPeriodEnum, type: vps.disk.StatisticTypeEnum}): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
                }
                use: {
                    // GET /vps/{serviceName}/disks/{id}/use
                    $get(params: {type: vps.disk.StatisticTypeEnum}): Promise<complexType.UnitAndValue<number>>;
                }
            };
        }
        distribution: {
            // GET /vps/{serviceName}/distribution
            $get(): Promise<vps.Template>;
            software: {
                // GET /vps/{serviceName}/distribution/software
                $get(): Promise<number[]>;
                $(softwareId: number): {
                    // GET /vps/{serviceName}/distribution/software/{softwareId}
                    $get(): Promise<vps.Software>;
                };
            }
        }
        getConsoleUrl: {
            // POST /vps/{serviceName}/getConsoleUrl
            $post(): Promise<string>;
        }
        ipCountryAvailable: {
            // GET /vps/{serviceName}/ipCountryAvailable
            $get(): Promise<vps.ip.GeolocationEnum[]>;
        }
        ips: {
            // GET /vps/{serviceName}/ips
            $get(): Promise<string[]>;
            $(ipAddress: string): {
                // DELETE /vps/{serviceName}/ips/{ipAddress}
                $delete(): Promise<void>;
                // GET /vps/{serviceName}/ips/{ipAddress}
                $get(): Promise<vps.Ip>;
                // PUT /vps/{serviceName}/ips/{ipAddress}
                $put(params?: {gateway?: string, geolocation?: vps.ip.GeolocationEnum, ipAddress?: string, macAddress?: string, reverse?: string, type?: vps.ip.TypeEnum, version?: coreTypes.IpVersionEnum}): Promise<void>;
            };
        }
        models: {
            // GET /vps/{serviceName}/models
            $get(): Promise<vps.Model[]>;
        }
        monitoring: {
            // GET /vps/{serviceName}/monitoring
            $get(params: {period: vps.VpsMonitoringPeriodEnum, type: vps.VpsStatisticTypeEnum}): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
        }
        openConsoleAccess: {
            // POST /vps/{serviceName}/openConsoleAccess
            $post(params?: {protocol?: vps.VncProtocolEnum}): Promise<vps.Vnc>;
        }
        option: {
            // GET /vps/{serviceName}/option
            $get(): Promise<vps.VpsOptionEnum[]>;
            $(option: vps.VpsOptionEnum): {
                // DELETE /vps/{serviceName}/option/{option}
                $delete(params?: {deleteNow?: boolean}): Promise<void>;
                // GET /vps/{serviceName}/option/{option}
                $get(): Promise<vps.Option>;
            };
        }
        reboot: {
            // POST /vps/{serviceName}/reboot
            $post(): Promise<vps.Task>;
        }
        reinstall: {
            // POST /vps/{serviceName}/reinstall
            $post(params: {doNotSendPassword?: boolean, language?: string, softwareId?: number[], sshKey?: string[], templateId: number}): Promise<vps.Task>;
        }
        secondaryDnsDomains: {
            // GET /vps/{serviceName}/secondaryDnsDomains
            $get(): Promise<string[]>;
            // POST /vps/{serviceName}/secondaryDnsDomains
            $post(params: {domain: string, ip?: string}): Promise<void>;
            $(domain: string): {
                // DELETE /vps/{serviceName}/secondaryDnsDomains/{domain}
                $delete(): Promise<void>;
                // GET /vps/{serviceName}/secondaryDnsDomains/{domain}
                $get(): Promise<secondaryDns.SecondaryDNS>;
                // PUT /vps/{serviceName}/secondaryDnsDomains/{domain}
                $put(params?: {creationDate?: string, dns?: string, domain?: string, ipMaster?: string}): Promise<void>;
                dnsServer: {
                    // GET /vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
                    $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
                }
            };
        }
        secondaryDnsNameServerAvailable: {
            // GET /vps/{serviceName}/secondaryDnsNameServerAvailable
            $get(): Promise<secondaryDns.SecondaryDNSNameServer>;
        }
        serviceInfos: {
            // GET /vps/{serviceName}/serviceInfos
            $get(): Promise<services.Service>;
            // PUT /vps/{serviceName}/serviceInfos
            $put(params?: {canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: service.RenewType, renewalType?: service.RenewalTypeEnum, serviceId?: number, status?: service.StateEnum}): Promise<void>;
        }
        setPassword: {
            // POST /vps/{serviceName}/setPassword
            $post(): Promise<vps.Task>;
        }
        snapshot: {
            // DELETE /vps/{serviceName}/snapshot
            $delete(): Promise<vps.Task>;
            // GET /vps/{serviceName}/snapshot
            $get(): Promise<vps.Snapshot>;
            // PUT /vps/{serviceName}/snapshot
            $put(params?: {creationDate?: string, description?: string}): Promise<void>;
            revert: {
                // POST /vps/{serviceName}/snapshot/revert
                $post(): Promise<vps.Task>;
            }
        }
        start: {
            // POST /vps/{serviceName}/start
            $post(): Promise<vps.Task>;
        }
        status: {
            // GET /vps/{serviceName}/status
            $get(): Promise<vps.ip.ServiceStatus>;
        }
        stop: {
            // POST /vps/{serviceName}/stop
            $post(): Promise<vps.Task>;
        }
        tasks: {
            // GET /vps/{serviceName}/tasks
            $get(params?: {state?: vps.TaskStateEnum, type?: vps.TaskTypeEnum}): Promise<number[]>;
            $(id: number): {
                // GET /vps/{serviceName}/tasks/{id}
                $get(): Promise<vps.Task>;
            };
        }
        templates: {
            // GET /vps/{serviceName}/templates
            $get(): Promise<number[]>;
            $(id: number): {
                // GET /vps/{serviceName}/templates/{id}
                $get(): Promise<vps.Template>;
                software: {
                    // GET /vps/{serviceName}/templates/{id}/software
                    $get(): Promise<number[]>;
                    $(softwareId: number): {
                        // GET /vps/{serviceName}/templates/{id}/software/{softwareId}
                        $get(): Promise<vps.Software>;
                    };
                }
            };
        }
        terminate: {
            // POST /vps/{serviceName}/terminate
            $post(): Promise<string>;
        }
        use: {
            // GET /vps/{serviceName}/use
            $get(params: {type: vps.VpsStatisticTypeEnum}): Promise<complexType.UnitAndValue<number>>;
        }
        veeam: {
            // GET /vps/{serviceName}/veeam
            $get(): Promise<vps.Veeam>;
            restorePoints: {
                // GET /vps/{serviceName}/veeam/restorePoints
                $get(params?: {creationTime?: string}): Promise<number[]>;
                $(id: number): {
                    // GET /vps/{serviceName}/veeam/restorePoints/{id}
                    $get(): Promise<vps.veeam.RestorePoint>;
                    restore: {
                        // POST /vps/{serviceName}/veeam/restorePoints/{id}/restore
                        $post(params: {changePassword?: boolean, export?: vps.veeam.ExportTypeEnum, full: boolean}): Promise<vps.Task>;
                    }
                };
            }
            restoredBackup: {
                // DELETE /vps/{serviceName}/veeam/restoredBackup
                $delete(): Promise<vps.Task>;
                // GET /vps/{serviceName}/veeam/restoredBackup
                $get(): Promise<vps.veeam.RestoredBackup>;
            }
        }
    };
}
