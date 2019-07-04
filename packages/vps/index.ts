import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
    //complexType.UnitAndValues
    // fullName: complexType.UnitAndValues.UnitAndValues
    export interface UnitAndValues<T> {
        unit?: string;
        values?: T[];
    }
}
export namespace coreTypes {
    //coreTypes.CountryEnum
    export type CountryEnum = "ac" | "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cs" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fc" | "fd" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "fx" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "qc" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tp" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "uk" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "we" | "wf" | "ws" | "ye" | "yt" | "yu" | "za" | "zm" | "zw"
    //coreTypes.IpVersionEnum
    export type IpVersionEnum = "v4" | "v6"
}
export namespace dedicated {
    //dedicated.TaskFunctionEnum
    export type TaskFunctionEnum = "addVirtualMac" | "addWindowSplaFromExistingSerial" | "applyBackupFtpAcls" | "applyBackupFtpQuota" | "bypassAntiDDosGame" | "changePasswordBackupFTP" | "changeRipeOrg" | "checkAndReleaseIp" | "createBackupFTP" | "createOrUpdateRipeOrg" | "createPrivateNetwork" | "disableFirewall" | "enableFirewall" | "genericMoveFloatingIp" | "hardReboot" | "migrateBackupFTP" | "moveFloatingIp" | "moveVirtualMac" | "rebootPower8To" | "reinstallServer" | "releaseIp" | "removeBackupFTP" | "removeVirtualMac" | "requestAccessIPMI" | "resetIPMI" | "resetIPMISession" | "testIPMIhttp" | "testIPMIpassword" | "testIPMIping" | "virtualMacAdd" | "virtualMacDelete"
    //dedicated.TaskStatusEnum
    export type TaskStatusEnum = "cancelled" | "customerError" | "doing" | "done" | "init" | "ovhError" | "todo"
    export namespace server {
        //dedicated.server.BackupFtpAcl
        // fullName: dedicated.server.BackupFtpAcl.BackupFtpAcl
        export interface BackupFtpAcl {
            cifs?: boolean;
            ftp?: boolean;
            ipBlock?: string;
            isApplied?: boolean;
            lastUpdate?: string;
            nfs?: boolean;
        }
        //dedicated.server.Task
        // fullName: dedicated.server.Task.Task
        export interface Task {
            comment?: string;
            doneDate?: string;
            function?: OVH.dedicated.TaskFunctionEnum;
            lastUpdate?: string;
            startDate?: string;
            status?: OVH.dedicated.TaskStatusEnum;
            taskId?: number;
        }
    }
}
export namespace nichandle {
    //nichandle.CountryEnum
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace secondaryDns {
    //secondaryDns.SecondaryDNS
    // fullName: secondaryDns.SecondaryDNS.SecondaryDNS
    export interface SecondaryDNS {
        creationDate?: string;
        dns?: string;
        domain?: string;
        ipMaster?: string;
    }
    //secondaryDns.SecondaryDNSNameServer
    // fullName: secondaryDns.SecondaryDNSNameServer.SecondaryDNSNameServer
    export interface SecondaryDNSNameServer {
        hostname?: string;
        ip?: string;
        ipv6?: string;
    }
}
export namespace service {
    //service.RenewType
    // fullName: service.RenewType.RenewType
    export interface RenewType {
        automatic?: boolean;
        deleteAtExpiration?: boolean;
        forced?: boolean;
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
        canDeleteAtExpiration?: boolean;
        contactAdmin?: string;
        contactBilling?: string;
        contactTech?: string;
        creation?: string;
        domain?: string;
        engagedUpTo?: string;
        expiration?: string;
        possibleRenewPeriod?: number[];
        renew?: OVH.service.RenewType;
        renewalType?: OVH.service.RenewalTypeEnum;
        serviceId?: number;
        status?: OVH.service.StateEnum;
    }
}
export namespace vps {
    //vps.AutomatedBackup
    // fullName: vps.AutomatedBackup.AutomatedBackup
    export interface AutomatedBackup {
        schedule?: string;
        state?: OVH.vps.BackupStateEnum;
    }
    //vps.BackupFtp
    // fullName: vps.BackupFtp.BackupFtp
    export interface BackupFtp {
        ftpBackupName?: string;
        quota?: OVH.complexType.UnitAndValue<number>;
        readOnlyDate?: string;
        type?: string;
        usage?: OVH.complexType.UnitAndValue<number>;
    }
    //vps.BackupStateEnum
    export type BackupStateEnum = "disabled" | "enabled"
    //vps.Datacenter
    // fullName: vps.Datacenter.Datacenter
    export interface Datacenter {
        longName?: string;
        name?: string;
    }
    //vps.Disk
    // fullName: vps.Disk.Disk
    export interface Disk {
        bandwidthLimit?: number;
        id?: number;
        lowFreeSpaceThreshold?: number;
        monitoring?: boolean;
        size?: number;
        state?: OVH.vps.disk.StateEnum;
        type?: OVH.vps.disk.TypeEnum;
    }
    //vps.Image
    // fullName: vps.Image.Image
    export interface Image {
        id?: string;
        name?: string;
    }
    //vps.Ip
    // fullName: vps.Ip.Ip
    export interface Ip {
        gateway?: string;
        geolocation?: OVH.vps.ip.GeolocationEnum;
        ipAddress?: string;
        macAddress?: string;
        reverse?: string;
        type?: OVH.vps.ip.TypeEnum;
        version?: OVH.coreTypes.IpVersionEnum;
    }
    //vps.Model
    // fullName: vps.Model.Model
    export interface Model {
        availableOptions?: OVH.vps.VpsOptionEnum[];
        datacenter?: string[];
        disk?: number;
        maximumAdditionnalIp?: number;
        memory?: number;
        name?: string;
        offer?: string;
        vcore?: number;
        version?: OVH.vps.VpsVersionEnum;
    }
    //vps.Option
    // fullName: vps.Option.Option
    export interface Option {
        option?: OVH.vps.VpsOptionEnum;
        state?: OVH.vps.VpsOptionStateEnum;
    }
    //vps.RestoreStateEnum
    export type RestoreStateEnum = "available" | "restored" | "restoring"
    //vps.RestoreTypeEnum
    export type RestoreTypeEnum = "file" | "full"
    //vps.Snapshot
    // fullName: vps.Snapshot.Snapshot
    export interface Snapshot {
        creationDate?: string;
        description?: string;
    }
    //vps.Software
    // fullName: vps.Software.Software
    export interface Software {
        id?: number;
        name?: string;
        status?: OVH.vps.SoftwareStatusEnum;
        type?: OVH.vps.SoftwareTypeEnum;
    }
    //vps.SoftwareStatusEnum
    export type SoftwareStatusEnum = "deprecated" | "stable" | "testing"
    //vps.SoftwareTypeEnum
    export type SoftwareTypeEnum = "database" | "environment" | "webserver"
    //vps.Task
    // fullName: vps.Task.Task
    export interface Task {
        id?: number;
        progress?: number;
        state?: OVH.vps.TaskStateEnum;
        type?: OVH.vps.TaskTypeEnum;
    }
    //vps.TaskStateEnum
    export type TaskStateEnum = "blocked" | "cancelled" | "doing" | "done" | "error" | "paused" | "todo" | "waitingAck"
    //vps.TaskTypeEnum
    export type TaskTypeEnum = "addVeeamBackupJob" | "changeRootPassword" | "createSnapshot" | "deleteSnapshot" | "deliverVm" | "getConsoleUrl" | "internalTask" | "openConsoleAccess" | "provisioningAdditionalIp" | "reOpenVm" | "rebootVm" | "reinstallVm" | "removeVeeamBackup" | "restoreFullVeeamBackup" | "restoreVeeamBackup" | "restoreVm" | "revertSnapshot" | "setMonitoring" | "setNetboot" | "startVm" | "stopVm" | "upgradeVm"
    //vps.Template
    // fullName: vps.Template.Template
    export interface Template {
        availableLanguage?: string[];
        bitFormat?: OVH.vps.TemplateBitFormatEnum;
        distribution?: string;
        id?: number;
        locale?: string;
        name?: string;
    }
    //vps.TemplateBitFormatEnum
    export type TemplateBitFormatEnum = 32 | 64
    //vps.VPS
    // fullName: vps.VPS.VPS
    export interface VPS {
        cluster?: string;
        displayName?: string;
        keymap?: OVH.vps.VpsKeymapEnum;
        memoryLimit?: number;
        model?: OVH.vps.Model;
        monitoringIpBlocks?: string[];
        name?: string;
        netbootMode?: OVH.vps.VpsNetbootEnum;
        offerType?: OVH.vps.VpsOfferEnum;
        slaMonitoring?: boolean;
        state?: OVH.vps.VpsStateEnum;
        vcore?: number;
        zone?: string;
    }
    //vps.Veeam
    // fullName: vps.Veeam.Veeam
    export interface Veeam {
        backup?: boolean;
    }
    //vps.Vnc
    // fullName: vps.Vnc.Vnc
    export interface Vnc {
        host?: string;
        password?: string;
        port?: number;
    }
    //vps.VncProtocolEnum
    export type VncProtocolEnum = "VNC" | "VNCOverWebSocket"
    //vps.VpsBillingVersion
    // fullName: vps.VpsBillingVersion.VpsBillingVersion
    export interface VpsBillingVersion {
        version?: number;
    }
    //vps.VpsKeymapEnum
    export type VpsKeymapEnum = "fr" | "us"
    //vps.VpsMonitoringPeriodEnum
    export type VpsMonitoringPeriodEnum = "lastday" | "lastmonth" | "lastweek" | "lastyear" | "today"
    //vps.VpsNetbootEnum
    export type VpsNetbootEnum = "local" | "rescue"
    //vps.VpsOfferEnum
    export type VpsOfferEnum = "beta-classic" | "classic" | "cloud" | "cloudram" | "game-classic" | "lowlat" | "ssd"
    //vps.VpsOptionEnum
    export type VpsOptionEnum = "additionalDisk" | "automatedBackup" | "cpanel" | "ftpbackup" | "plesk" | "snapshot" | "veeam" | "windows"
    //vps.VpsOptionStateEnum
    export type VpsOptionStateEnum = "released" | "subscribed"
    //vps.VpsStateEnum
    export type VpsStateEnum = "installing" | "maintenance" | "rebooting" | "running" | "stopped" | "stopping" | "upgrading"
    //vps.VpsStatisticTypeEnum
    export type VpsStatisticTypeEnum = "cpu:iowait" | "cpu:max" | "cpu:nice" | "cpu:sys" | "cpu:used" | "cpu:user" | "mem:max" | "mem:used" | "net:rx" | "net:tx"
    //vps.VpsTimestampValue
    // fullName: vps.VpsTimestampValue.VpsTimestampValue
    export interface VpsTimestampValue {
        timestamp?: number;
        value?: number;
    }
    //vps.VpsVersionEnum
    export type VpsVersionEnum = "2013v1" | "2014v1" | "2015v1" | "2017v1" | "2017v2" | "2017v3" | "2018v1" | "2018v2" | "2019v1"
    export namespace automatedBackup {
        //vps.automatedBackup.Attached
        // fullName: vps.automatedBackup.Attached.Attached
        export interface Attached {
            access?: OVH.vps.automatedBackup.attached.Infos;
            restorePoint?: string;
        }
        export namespace attached {
            //vps.automatedBackup.attached.Infos
            // fullName: vps.automatedBackup.attached.Infos.Infos
            export interface Infos {
                additionalDisk?: string;
                nfs?: string;
                smb?: string;
            }
        }
    }
    export namespace disk {
        //vps.disk.StateEnum
        export type StateEnum = "connected" | "disconnected" | "pending"
        //vps.disk.StatisticTypeEnum
        export type StatisticTypeEnum = "max" | "used"
        //vps.disk.TypeEnum
        export type TypeEnum = "additional" | "primary"
    }
    export namespace ip {
        //vps.ip.GeolocationEnum
        export type GeolocationEnum = "au" | "be" | "ca" | "cz" | "de" | "es" | "fi" | "fr" | "ie" | "it" | "lt" | "nl" | "pl" | "pt" | "sg" | "uk" | "us"
        //vps.ip.ServiceStatus
        // fullName: vps.ip.ServiceStatus.ServiceStatus
        export interface ServiceStatus {
            dns?: OVH.vps.ip.ServiceStatusService;
            http?: OVH.vps.ip.ServiceStatusService;
            https?: OVH.vps.ip.ServiceStatusService;
            ping?: OVH.vps.ip.ServiceStatusStateEnum;
            smtp?: OVH.vps.ip.ServiceStatusService;
            ssh?: OVH.vps.ip.ServiceStatusService;
            tools?: OVH.vps.ip.ServiceStatusStateEnum;
        }
        //vps.ip.ServiceStatusService
        // fullName: vps.ip.ServiceStatusService.ServiceStatusService
        export interface ServiceStatusService {
            port?: number;
            state?: OVH.vps.ip.ServiceStatusStateEnum;
        }
        //vps.ip.ServiceStatusStateEnum
        export type ServiceStatusStateEnum = "down" | "up"
        //vps.ip.TypeEnum
        export type TypeEnum = "additional" | "primary"
    }
    export namespace migration {
        //vps.migration.Migration
        // fullName: vps.migration.Migration.Migration
        export interface Migration {
            date?: string;
            id?: string;
        }
    }
    export namespace veeam {
        //vps.veeam.ExportTypeEnum
        export type ExportTypeEnum = "nfs" | "smb"
        //vps.veeam.Infos
        // fullName: vps.veeam.Infos.Infos
        export interface Infos {
            nfs?: string;
            smb?: string;
        }
        //vps.veeam.RestorePoint
        // fullName: vps.veeam.RestorePoint.RestorePoint
        export interface RestorePoint {
            creationTime?: string;
            id?: number;
        }
        //vps.veeam.RestoredBackup
        // fullName: vps.veeam.RestoredBackup.RestoredBackup
        export interface RestoredBackup {
            accessInfos?: OVH.vps.veeam.Infos;
            restorePointId?: number;
            state?: OVH.vps.veeam.StateEnum;
        }
        //vps.veeam.StateEnum
        export type StateEnum = "mounted" | "restoring" | "unmounted" | "unmounting"
    }
}
// Apis harmony
// path /vps
export interface Vps {
    // GET /vps
    GET(): Promise<string[]>;
    datacenter:  {
        // GET /vps/datacenter
        GET(param?: {country: nichandle.CountryEnum}): Promise<string[]>;
    }
    [keys: string]: {
        // GET /vps/{serviceName}
        GET(): Promise<vps.VPS>;
        // PUT /vps/{serviceName}
        PUT(body?: {body: vps.VPS}): Promise<void>;
        datacenter:  {
            // GET /vps/{serviceName}/datacenter
            GET(): Promise<vps.Datacenter>;
        }
        getConsoleUrl:  {
            // POST /vps/{serviceName}/getConsoleUrl
            POST(): Promise<string>;
        }
        secondaryDnsDomains:  {
            // GET /vps/{serviceName}/secondaryDnsDomains
            GET(): Promise<string[]>;
            // POST /vps/{serviceName}/secondaryDnsDomains
            POST(body?: {ip?: string, domain: string}): Promise<void>;
            [keys: string]: {
                // GET /vps/{serviceName}/secondaryDnsDomains/{domain}
                GET(): Promise<secondaryDns.SecondaryDNS>;
                // PUT /vps/{serviceName}/secondaryDnsDomains/{domain}
                PUT(body?: {body: secondaryDns.SecondaryDNS}): Promise<void>;
                // DELETE /vps/{serviceName}/secondaryDnsDomains/{domain}
                DELETE(): Promise<void>;
                dnsServer:  {
                    // GET /vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer
                    GET(): Promise<secondaryDns.SecondaryDNSNameServer>;
                }
            } | any
        }
        secondaryDnsNameServerAvailable:  {
            // GET /vps/{serviceName}/secondaryDnsNameServerAvailable
            GET(): Promise<secondaryDns.SecondaryDNSNameServer>;
        }
        stop:  {
            // POST /vps/{serviceName}/stop
            POST(): Promise<vps.Task>;
        }
        monitoring:  {
            // GET /vps/{serviceName}/monitoring
            GET(param?: {period: vps.VpsMonitoringPeriodEnum, type: vps.VpsStatisticTypeEnum}): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
        }
        automatedBackup:  {
            // GET /vps/{serviceName}/automatedBackup
            GET(): Promise<vps.AutomatedBackup>;
            restore:  {
                // POST /vps/{serviceName}/automatedBackup/restore
                POST(body?: {restorePoint: string, changePassword?: boolean, type: vps.RestoreTypeEnum}): Promise<vps.Task>;
            }
            detachBackup:  {
                // POST /vps/{serviceName}/automatedBackup/detachBackup
                POST(body?: {restorePoint: string}): Promise<vps.Task>;
            }
            restorePoints:  {
                // GET /vps/{serviceName}/automatedBackup/restorePoints
                GET(param?: {state: vps.RestoreStateEnum}): Promise<string[]>;
            }
            attachedBackup:  {
                // GET /vps/{serviceName}/automatedBackup/attachedBackup
                GET(): Promise<vps.automatedBackup.Attached[]>;
            }
        }
        activeOptions:  {
            // GET /vps/{serviceName}/activeOptions
            GET(): Promise<vps.VpsOptionEnum[]>;
        }
        createSnapshot:  {
            // POST /vps/{serviceName}/createSnapshot
            POST(body?: {description?: string}): Promise<vps.Task>;
        }
        reboot:  {
            // POST /vps/{serviceName}/reboot
            POST(): Promise<vps.Task>;
        }
        backupftp:  {
            // GET /vps/{serviceName}/backupftp
            GET(): Promise<vps.BackupFtp>;
            access:  {
                // GET /vps/{serviceName}/backupftp/access
                GET(): Promise<string[]>;
                // POST /vps/{serviceName}/backupftp/access
                POST(body?: {nfs: boolean, ftp?: boolean, cifs: boolean, ipBlock: string}): Promise<dedicated.server.Task>;
                [keys: string]: {
                    // GET /vps/{serviceName}/backupftp/access/{ipBlock}
                    GET(): Promise<dedicated.server.BackupFtpAcl>;
                    // PUT /vps/{serviceName}/backupftp/access/{ipBlock}
                    PUT(body?: {body: dedicated.server.BackupFtpAcl}): Promise<void>;
                    // DELETE /vps/{serviceName}/backupftp/access/{ipBlock}
                    DELETE(): Promise<dedicated.server.Task>;
                } | any
            }
            authorizableBlocks:  {
                // GET /vps/{serviceName}/backupftp/authorizableBlocks
                GET(): Promise<string[]>;
            }
            password:  {
                // POST /vps/{serviceName}/backupftp/password
                POST(): Promise<dedicated.server.Task>;
            }
        }
        veeam:  {
            // GET /vps/{serviceName}/veeam
            GET(): Promise<vps.Veeam>;
            restorePoints:  {
                // GET /vps/{serviceName}/veeam/restorePoints
                GET(param?: {creationTime?: string}): Promise<number[]>;
                [keys: string]: {
                    // GET /vps/{serviceName}/veeam/restorePoints/{id}
                    GET(): Promise<vps.veeam.RestorePoint>;
                    restore:  {
                        // POST /vps/{serviceName}/veeam/restorePoints/{id}/restore
                        POST(body?: {full: boolean, changePassword?: boolean, export?: vps.veeam.ExportTypeEnum}): Promise<vps.Task>;
                    }
                } | any
            }
            restoredBackup:  {
                // GET /vps/{serviceName}/veeam/restoredBackup
                GET(): Promise<vps.veeam.RestoredBackup>;
                // DELETE /vps/{serviceName}/veeam/restoredBackup
                DELETE(): Promise<vps.Task>;
            }
        }
        use:  {
            // GET /vps/{serviceName}/use
            GET(param?: {type: vps.VpsStatisticTypeEnum}): Promise<complexType.UnitAndValue<number>>;
        }
        openConsoleAccess:  {
            // POST /vps/{serviceName}/openConsoleAccess
            POST(body?: {protocol?: vps.VncProtocolEnum}): Promise<vps.Vnc>;
        }
        templates:  {
            // GET /vps/{serviceName}/templates
            GET(): Promise<number[]>;
            [keys: string]: {
                // GET /vps/{serviceName}/templates/{id}
                GET(): Promise<vps.Template>;
                software:  {
                    // GET /vps/{serviceName}/templates/{id}/software
                    GET(): Promise<number[]>;
                    [keys: string]: {
                        // GET /vps/{serviceName}/templates/{id}/software/{softwareId}
                        GET(): Promise<vps.Software>;
                    } | any
                }
            } | any
        }
        distribution:  {
            // GET /vps/{serviceName}/distribution
            GET(): Promise<vps.Template>;
            software:  {
                // GET /vps/{serviceName}/distribution/software
                GET(): Promise<number[]>;
                [keys: string]: {
                    // GET /vps/{serviceName}/distribution/software/{softwareId}
                    GET(): Promise<vps.Software>;
                } | any
            }
        }
        setPassword:  {
            // POST /vps/{serviceName}/setPassword
            POST(): Promise<vps.Task>;
        }
        ips:  {
            // GET /vps/{serviceName}/ips
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /vps/{serviceName}/ips/{ipAddress}
                GET(): Promise<vps.Ip>;
                // PUT /vps/{serviceName}/ips/{ipAddress}
                PUT(body?: {body: vps.Ip}): Promise<void>;
                // DELETE /vps/{serviceName}/ips/{ipAddress}
                DELETE(): Promise<void>;
            } | any
        }
        tasks:  {
            // GET /vps/{serviceName}/tasks
            GET(param?: {state?: vps.TaskStateEnum, type?: vps.TaskTypeEnum}): Promise<number[]>;
            [keys: string]: {
                // GET /vps/{serviceName}/tasks/{id}
                GET(): Promise<vps.Task>;
            } | any
        }
        models:  {
            // GET /vps/{serviceName}/models
            GET(): Promise<vps.Model[]>;
        }
        ipCountryAvailable:  {
            // GET /vps/{serviceName}/ipCountryAvailable
            GET(): Promise<vps.ip.GeolocationEnum[]>;
        }
        availableUpgrade:  {
            // GET /vps/{serviceName}/availableUpgrade
            GET(): Promise<vps.Model[]>;
        }
        disks:  {
            // GET /vps/{serviceName}/disks
            GET(): Promise<number[]>;
            [keys: string]: {
                // GET /vps/{serviceName}/disks/{id}
                GET(): Promise<vps.Disk>;
                // PUT /vps/{serviceName}/disks/{id}
                PUT(body?: {body: vps.Disk}): Promise<void>;
                use:  {
                    // GET /vps/{serviceName}/disks/{id}/use
                    GET(param?: {type: vps.disk.StatisticTypeEnum}): Promise<complexType.UnitAndValue<number>>;
                }
                monitoring:  {
                    // GET /vps/{serviceName}/disks/{id}/monitoring
                    GET(param?: {period: vps.VpsMonitoringPeriodEnum, type: vps.disk.StatisticTypeEnum}): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
                }
            } | any
        }
        option:  {
            // GET /vps/{serviceName}/option
            GET(): Promise<vps.VpsOptionEnum[]>;
            [keys: string]: {
                // GET /vps/{serviceName}/option/{option}
                GET(): Promise<vps.Option>;
                // DELETE /vps/{serviceName}/option/{option}
                DELETE(): Promise<void>;
            } | any
        }
        status:  {
            // GET /vps/{serviceName}/status
            GET(): Promise<vps.ip.ServiceStatus>;
        }
        terminate:  {
            // POST /vps/{serviceName}/terminate
            POST(): Promise<string>;
        }
        reinstall:  {
            // POST /vps/{serviceName}/reinstall
            POST(body?: {language?: string, softwareId?: number[], doNotSendPassword?: boolean, templateId: number, sshKey?: string[]}): Promise<vps.Task>;
        }
        changeContact:  {
            // POST /vps/{serviceName}/changeContact
            POST(body?: {contactAdmin?: string, contactTech?: string, contactBilling?: string}): Promise<number[]>;
        }
        start:  {
            // POST /vps/{serviceName}/start
            POST(): Promise<vps.Task>;
        }
        serviceInfos:  {
            // GET /vps/{serviceName}/serviceInfos
            GET(): Promise<services.Service>;
            // PUT /vps/{serviceName}/serviceInfos
            PUT(body?: {body: services.Service}): Promise<void>;
        }
        snapshot:  {
            // GET /vps/{serviceName}/snapshot
            GET(): Promise<vps.Snapshot>;
            // PUT /vps/{serviceName}/snapshot
            PUT(body?: {body: vps.Snapshot}): Promise<void>;
            // DELETE /vps/{serviceName}/snapshot
            DELETE(): Promise<vps.Task>;
            revert:  {
                // POST /vps/{serviceName}/snapshot/revert
                POST(): Promise<vps.Task>;
            }
        }
        confirmTermination:  {
            // POST /vps/{serviceName}/confirmTermination
            POST(body?: {futureUse?: service.TerminationFutureUseEnum, reason?: service.TerminationReasonEnum, commentary?: string, token: string}): Promise<string>;
        }
    } | any
}
// Api
type PathsVpsGET = '/vps/datacenter' |
  '/vps' |
  '/vps/{serviceName}' |
  '/vps/{serviceName}/datacenter' |
  '/vps/{serviceName}/secondaryDnsDomains' |
  '/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer' |
  '/vps/{serviceName}/secondaryDnsDomains/{domain}' |
  '/vps/{serviceName}/secondaryDnsNameServerAvailable' |
  '/vps/{serviceName}/monitoring' |
  '/vps/{serviceName}/automatedBackup' |
  '/vps/{serviceName}/automatedBackup/restorePoints' |
  '/vps/{serviceName}/automatedBackup/attachedBackup' |
  '/vps/{serviceName}/activeOptions' |
  '/vps/{serviceName}/backupftp' |
  '/vps/{serviceName}/backupftp/access/{ipBlock}' |
  '/vps/{serviceName}/backupftp/access' |
  '/vps/{serviceName}/backupftp/authorizableBlocks' |
  '/vps/{serviceName}/veeam' |
  '/vps/{serviceName}/veeam/restorePoints' |
  '/vps/{serviceName}/veeam/restorePoints/{id}' |
  '/vps/{serviceName}/veeam/restoredBackup' |
  '/vps/{serviceName}/use' |
  '/vps/{serviceName}/templates' |
  '/vps/{serviceName}/templates/{id}/software' |
  '/vps/{serviceName}/templates/{id}/software/{softwareId}' |
  '/vps/{serviceName}/templates/{id}' |
  '/vps/{serviceName}/distribution/software' |
  '/vps/{serviceName}/distribution/software/{softwareId}' |
  '/vps/{serviceName}/distribution' |
  '/vps/{serviceName}/ips/{ipAddress}' |
  '/vps/{serviceName}/ips' |
  '/vps/{serviceName}/tasks' |
  '/vps/{serviceName}/tasks/{id}' |
  '/vps/{serviceName}/models' |
  '/vps/{serviceName}/ipCountryAvailable' |
  '/vps/{serviceName}/availableUpgrade' |
  '/vps/{serviceName}/disks' |
  '/vps/{serviceName}/disks/{id}' |
  '/vps/{serviceName}/disks/{id}/use' |
  '/vps/{serviceName}/disks/{id}/monitoring' |
  '/vps/{serviceName}/option/{option}' |
  '/vps/{serviceName}/option' |
  '/vps/{serviceName}/status' |
  '/vps/{serviceName}/serviceInfos' |
  '/vps/{serviceName}/snapshot';

type PathsVpsPUT = '/vps/{serviceName}' |
  '/vps/{serviceName}/secondaryDnsDomains/{domain}' |
  '/vps/{serviceName}/backupftp/access/{ipBlock}' |
  '/vps/{serviceName}/ips/{ipAddress}' |
  '/vps/{serviceName}/disks/{id}' |
  '/vps/{serviceName}/serviceInfos' |
  '/vps/{serviceName}/snapshot';

type PathsVpsPOST = '/vps/{serviceName}/getConsoleUrl' |
  '/vps/{serviceName}/secondaryDnsDomains' |
  '/vps/{serviceName}/stop' |
  '/vps/{serviceName}/automatedBackup/restore' |
  '/vps/{serviceName}/automatedBackup/detachBackup' |
  '/vps/{serviceName}/createSnapshot' |
  '/vps/{serviceName}/reboot' |
  '/vps/{serviceName}/backupftp/access' |
  '/vps/{serviceName}/backupftp/password' |
  '/vps/{serviceName}/veeam/restorePoints/{id}/restore' |
  '/vps/{serviceName}/openConsoleAccess' |
  '/vps/{serviceName}/setPassword' |
  '/vps/{serviceName}/terminate' |
  '/vps/{serviceName}/reinstall' |
  '/vps/{serviceName}/changeContact' |
  '/vps/{serviceName}/start' |
  '/vps/{serviceName}/snapshot/revert' |
  '/vps/{serviceName}/confirmTermination';

type PathsVpsDELETE = '/vps/{serviceName}/secondaryDnsDomains/{domain}' |
  '/vps/{serviceName}/backupftp/access/{ipBlock}' |
  '/vps/{serviceName}/veeam/restoredBackup' |
  '/vps/{serviceName}/ips/{ipAddress}' |
  '/vps/{serviceName}/option/{option}' |
  '/vps/{serviceName}/snapshot';

export class ApiVps extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Operations about the VPS service
   * List available services
   */
  public get(path: '/vps'): Promise<string[]>;
  /**
   * VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}', params: {serviceName: string}): Promise<vps.VPS>;
  /**
   * activeOptions operations
   * Return all active options for the virtual server
   */
  public get(path: '/vps/{serviceName}/activeOptions', params: {serviceName: string}): Promise<vps.VpsOptionEnum[]>;
  /**
   * Backup your VPS
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/automatedBackup', params: {serviceName: string}): Promise<vps.AutomatedBackup>;
  /**
   * attachedBackup operations
   * Backup attached to your VPS
   */
  public get(path: '/vps/{serviceName}/automatedBackup/attachedBackup', params: {serviceName: string}): Promise<vps.automatedBackup.Attached[]>;
  /**
   * restorePoints operations
   * Get available Restore Points
   */
  public get(path: '/vps/{serviceName}/automatedBackup/restorePoints', params: {serviceName: string, state: OVH.vps.RestoreStateEnum}): Promise<string[]>;
  /**
   * availableUpgrade operations
   * Return all models the virtual server can be upgraded to
   */
  public get(path: '/vps/{serviceName}/availableUpgrade', params: {serviceName: string}): Promise<vps.Model[]>;
  /**
   * Backup Ftp assigned to this VPS
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/backupftp', params: {serviceName: string}): Promise<vps.BackupFtp>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * List of IP blocks (and protocols to allow on these blocks) authorized on your backup FTP
   */
  public get(path: '/vps/{serviceName}/backupftp/access', params: {serviceName: string}): Promise<string[]>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', params: {serviceName: string, ipBlock: string}): Promise<dedicated.server.BackupFtpAcl>;
  /**
   * authorizableBlocks operations
   * Get all IP blocks that can be used in the ACL
   */
  public get(path: '/vps/{serviceName}/backupftp/authorizableBlocks', params: {serviceName: string}): Promise<string[]>;
  /**
   * Information about a datacenter of a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/datacenter', params: {serviceName: string}): Promise<vps.Datacenter>;
  /**
   * List the vps.Disk objects
   * Disks associated to this virtual server
   */
  public get(path: '/vps/{serviceName}/disks', params: {serviceName: string}): Promise<number[]>;
  /**
   * Information about a disk of a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/disks/{id}', params: {serviceName: string, id: string}): Promise<vps.Disk>;
  /**
   * monitoring operations
   * Return many statistics about the disk for a given period
   */
  public get(path: '/vps/{serviceName}/disks/{id}/monitoring', params: {serviceName: string, id: string, period: OVH.vps.VpsMonitoringPeriodEnum, type: OVH.vps.disk.StatisticTypeEnum}): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
  /**
   * use operations
   * Return many statistics about the disk at that time
   */
  public get(path: '/vps/{serviceName}/disks/{id}/use', params: {serviceName: string, id: string, type: OVH.vps.disk.StatisticTypeEnum}): Promise<complexType.UnitAndValue<number>>;
  /**
   * Installation template for a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/distribution', params: {serviceName: string}): Promise<vps.Template>;
  /**
   * List the vps.Software objects
   * List available softwares for this template Id
   */
  public get(path: '/vps/{serviceName}/distribution/software', params: {serviceName: string}): Promise<number[]>;
  /**
   * Available softwares on a Template
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/distribution/software/{softwareId}', params: {serviceName: string, softwareId: string}): Promise<vps.Software>;
  /**
   * ipCountryAvailable operations
   * Get the countries you can select for your IPs geolocation
   */
  public get(path: '/vps/{serviceName}/ipCountryAvailable', params: {serviceName: string}): Promise<vps.ip.GeolocationEnum[]>;
  /**
   * List the vps.Ip objects
   * Ips associated to this virtual server
   */
  public get(path: '/vps/{serviceName}/ips', params: {serviceName: string}): Promise<string[]>;
  /**
   * Information about an IP address for a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/ips/{ipAddress}', params: {serviceName: string, ipAddress: string}): Promise<vps.Ip>;
  /**
   * models operations
   * Return all models for the range of the virtual server
   */
  public get(path: '/vps/{serviceName}/models', params: {serviceName: string}): Promise<vps.Model[]>;
  /**
   * monitoring operations
   * Return many statistics about the virtual machine for a given period
   */
  public get(path: '/vps/{serviceName}/monitoring', params: {serviceName: string, period: OVH.vps.VpsMonitoringPeriodEnum, type: OVH.vps.VpsStatisticTypeEnum}): Promise<complexType.UnitAndValues<vps.VpsTimestampValue>>;
  /**
   * List the vps.Option objects
   * List of VPS options
   */
  public get(path: '/vps/{serviceName}/option', params: {serviceName: string}): Promise<vps.VpsOptionEnum[]>;
  /**
   * Information about the options of a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/option/{option}', params: {serviceName: string, option: string}): Promise<vps.Option>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * List of secondary dns domain name
   */
  public get(path: '/vps/{serviceName}/secondaryDnsDomains', params: {serviceName: string}): Promise<string[]>;
  /**
   * Secondary dns infos
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', params: {serviceName: string, domain: string}): Promise<secondaryDns.SecondaryDNS>;
  /**
   * dnsServer operations
   * domain name server informations
   */
  public get(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer', params: {serviceName: string, domain: string}): Promise<secondaryDns.SecondaryDNSNameServer>;
  /**
   * secondaryDnsNameServerAvailable operations
   * Secondary nameServer available for your Server
   */
  public get(path: '/vps/{serviceName}/secondaryDnsNameServerAvailable', params: {serviceName: string}): Promise<secondaryDns.SecondaryDNSNameServer>;
  /**
   * Details about a Service
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/serviceInfos', params: {serviceName: string}): Promise<services.Service>;
  /**
   * Information about the snapshot of a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/snapshot', params: {serviceName: string}): Promise<vps.Snapshot>;
  /**
   * status operations
   * Give the status of the services of the main IP
   */
  public get(path: '/vps/{serviceName}/status', params: {serviceName: string}): Promise<vps.ip.ServiceStatus>;
  /**
   * List the vps.Task objects
   * Tasks associated to this virtual server
   */
  public get(path: '/vps/{serviceName}/tasks', params: {serviceName: string, state?: OVH.vps.TaskStateEnum, type?: OVH.vps.TaskTypeEnum}): Promise<number[]>;
  /**
   * Operation on a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/tasks/{id}', params: {serviceName: string, id: string}): Promise<vps.Task>;
  /**
   * List the vps.Template objects
   * Templates available for this virtual server
   */
  public get(path: '/vps/{serviceName}/templates', params: {serviceName: string}): Promise<number[]>;
  /**
   * Installation template for a VPS Virtual Machine
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/templates/{id}', params: {serviceName: string, id: string}): Promise<vps.Template>;
  /**
   * List the vps.Software objects
   * List available softwares for this template Id
   */
  public get(path: '/vps/{serviceName}/templates/{id}/software', params: {serviceName: string, id: string}): Promise<number[]>;
  /**
   * Available softwares on a Template
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/templates/{id}/software/{softwareId}', params: {serviceName: string, id: string, softwareId: string}): Promise<vps.Software>;
  /**
   * use operations
   * Return many statistics about the virtual machine at that time
   */
  public get(path: '/vps/{serviceName}/use', params: {serviceName: string, type: OVH.vps.VpsStatisticTypeEnum}): Promise<complexType.UnitAndValue<number>>;
  /**
   * Informations about a VPS Veeam backups
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/veeam', params: {serviceName: string}): Promise<vps.Veeam>;
  /**
   * Currently restored backup
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/veeam/restoredBackup', params: {serviceName: string}): Promise<vps.veeam.RestoredBackup>;
  /**
   * List the vps.veeam.RestorePoint objects
   * Veeam restore points for the VPS
   */
  public get(path: '/vps/{serviceName}/veeam/restorePoints', params: {serviceName: string, creationTime?: string}): Promise<number[]>;
  /**
   * Informations about a VPS Veeam restore points
   * Get this object properties
   */
  public get(path: '/vps/{serviceName}/veeam/restorePoints/{id}', params: {serviceName: string, id: string}): Promise<vps.veeam.RestorePoint>;
  /**
   * Missing description
   * List all the datacenters for a specific country
   */
  public get(path: '/vps/datacenter', params: {country: OVH.nichandle.CountryEnum}): Promise<string[]>;
  public get(path: PathsVpsGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
  /**
   * VPS Virtual Machine
   * Alter this object properties
   */
  public put(path: '/vps/{serviceName}', params: {serviceName: string, cluster?: string, displayName?: string, keymap?: OVH.vps.VpsKeymapEnum, memoryLimit?: number, model?: OVH.vps.Model, monitoringIpBlocks?: string[], name?: string, netbootMode?: OVH.vps.VpsNetbootEnum, offerType?: OVH.vps.VpsOfferEnum, slaMonitoring?: boolean, state?: OVH.vps.VpsStateEnum, vcore?: number, zone?: string}): Promise<void>;
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Alter this object properties
   */
  public put(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', params: {serviceName: string, ipBlock: string, cifs?: boolean, ftp?: boolean, isApplied?: boolean, lastUpdate?: string, nfs?: boolean}): Promise<void>;
  /**
   * Information about a disk of a VPS Virtual Machine
   * Alter this object properties
   */
  public put(path: '/vps/{serviceName}/disks/{id}', params: {serviceName: string, id: string, bandwidthLimit?: number, lowFreeSpaceThreshold?: number, monitoring?: boolean, size?: number, state?: OVH.vps.disk.StateEnum, type?: OVH.vps.disk.TypeEnum}): Promise<void>;
  /**
   * Information about an IP address for a VPS Virtual Machine
   * Alter this object properties
   */
  public put(path: '/vps/{serviceName}/ips/{ipAddress}', params: {serviceName: string, ipAddress: string, gateway?: string, geolocation?: OVH.vps.ip.GeolocationEnum, macAddress?: string, reverse?: string, type?: OVH.vps.ip.TypeEnum, version?: OVH.coreTypes.IpVersionEnum}): Promise<void>;
  /**
   * Secondary dns infos
   * Alter this object properties
   */
  public put(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', params: {serviceName: string, domain: string, creationDate?: string, dns?: string, ipMaster?: string}): Promise<void>;
  /**
   * Details about a Service
   * Alter this object properties
   */
  public put(path: '/vps/{serviceName}/serviceInfos', params: {serviceName: string, canDeleteAtExpiration?: boolean, contactAdmin?: string, contactBilling?: string, contactTech?: string, creation?: string, domain?: string, engagedUpTo?: string, expiration?: string, possibleRenewPeriod?: number[], renew?: OVH.service.RenewType, renewalType?: OVH.service.RenewalTypeEnum, serviceId?: number, status?: OVH.service.StateEnum}): Promise<void>;
  /**
   * Information about the snapshot of a VPS Virtual Machine
   * Alter this object properties
   */
  public put(path: '/vps/{serviceName}/snapshot', params: {serviceName: string, creationDate?: string, description?: string}): Promise<void>;
  public put(path: PathsVpsPUT, params?: OvhParamType): Promise<any> {
    return super.put(path, params);
  }
  /**
   * detachBackup operations
   * Create a VPS.Task that will umount a restored backup on your VPS
   */
  public post(path: '/vps/{serviceName}/automatedBackup/detachBackup', params: {serviceName: string, restorePoint: string}): Promise<vps.Task>;
  /**
   * restore operations
   * Creates a VPS.Task that will restore the given restorePoint
   */
  public post(path: '/vps/{serviceName}/automatedBackup/restore', params: {serviceName: string, changePassword?: boolean, restorePoint: string, type: OVH.vps.RestoreTypeEnum}): Promise<vps.Task>;
  /**
   * List the dedicated.server.BackupFtpAcl objects
   * Create a new Backup FTP ACL
   */
  public post(path: '/vps/{serviceName}/backupftp/access', params: {serviceName: string, cifs: boolean, ftp?: boolean, ipBlock: string, nfs: boolean}): Promise<dedicated.server.Task>;
  /**
   * password operations
   * Change your Backup FTP password
   */
  public post(path: '/vps/{serviceName}/backupftp/password', params: {serviceName: string}): Promise<dedicated.server.Task>;
  /**
   * Change the contacts of this service
   * Launch a contact change procedure
   */
  public post(path: '/vps/{serviceName}/changeContact', params: {serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string}): Promise<number[]>;
  /**
   * Confirm termination of your service
   * Confirm termination of your service
   */
  public post(path: '/vps/{serviceName}/confirmTermination', params: {serviceName: string, commentary?: string, futureUse?: OVH.service.TerminationFutureUseEnum, reason?: OVH.service.TerminationReasonEnum, token: string}): Promise<string>;
  /**
   * createSnapshot operations
   * Create a snapshot of the Virtual Server if the snapshot option is enabled and if there is no existing snapshot
   */
  public post(path: '/vps/{serviceName}/createSnapshot', params: {serviceName: string, description?: string}): Promise<vps.Task>;
  /**
   * getConsoleUrl operations
   * Return the VPS console URL
   */
  public post(path: '/vps/{serviceName}/getConsoleUrl', params: {serviceName: string}): Promise<string>;
  /**
   * openConsoleAccess operations
   * Return the necessary informations to open a VNC connection to your VPS
   */
  public post(path: '/vps/{serviceName}/openConsoleAccess', params: {serviceName: string, protocol?: OVH.vps.VncProtocolEnum}): Promise<vps.Vnc>;
  /**
   * reboot operations
   * Request a reboot of the machine
   */
  public post(path: '/vps/{serviceName}/reboot', params: {serviceName: string}): Promise<vps.Task>;
  /**
   * reinstall operations
   * Reinstall the virtual server
   */
  public post(path: '/vps/{serviceName}/reinstall', params: {serviceName: string, doNotSendPassword?: boolean, language?: string, softwareId?: number[], sshKey?: string[], templateId: number}): Promise<vps.Task>;
  /**
   * List the secondaryDns.SecondaryDNS objects
   * add a domain on secondary dns
   */
  public post(path: '/vps/{serviceName}/secondaryDnsDomains', params: {serviceName: string, domain: string, ip?: string}): Promise<void>;
  /**
   * setPassword operations
   * Start the process in order to set the root password of the virtual machine. Be careful, in case of Cloud model, a reboot is mandatory.
   */
  public post(path: '/vps/{serviceName}/setPassword', params: {serviceName: string}): Promise<vps.Task>;
  /**
   * revert operations
   * Revert the Virtual Server to this snapshot
   */
  public post(path: '/vps/{serviceName}/snapshot/revert', params: {serviceName: string}): Promise<vps.Task>;
  /**
   * start operations
   * Request the machine to start
   */
  public post(path: '/vps/{serviceName}/start', params: {serviceName: string}): Promise<vps.Task>;
  /**
   * stop operations
   * Request the machine to stop
   */
  public post(path: '/vps/{serviceName}/stop', params: {serviceName: string}): Promise<vps.Task>;
  /**
   * Terminate your service
   * Terminate your service
   */
  public post(path: '/vps/{serviceName}/terminate', params: {serviceName: string}): Promise<string>;
  /**
   * restore operations
   * Creates a VPS.Task that will restore the given restorePoint
   */
  public post(path: '/vps/{serviceName}/veeam/restorePoints/{id}/restore', params: {serviceName: string, id: string, changePassword?: boolean, export?: OVH.vps.veeam.ExportTypeEnum, full: boolean}): Promise<vps.Task>;
  public post(path: PathsVpsPOST, params?: OvhParamType): Promise<any> {
    return super.post(path, params);
  }
  /**
   * Backup Ftp ACL for this server and Backup Ftp
   * Revoke this ACL
   */
  public delete(path: '/vps/{serviceName}/backupftp/access/{ipBlock}', params: {serviceName: string, ipBlock: string}): Promise<dedicated.server.Task>;
  /**
   * Information about an IP address for a VPS Virtual Machine
   * Release a given Ip (Additional Ip)
   */
  public delete(path: '/vps/{serviceName}/ips/{ipAddress}', params: {serviceName: string, ipAddress: string}): Promise<void>;
  /**
   * Information about the options of a VPS Virtual Machine
   * Release a given option
   */
  public delete(path: '/vps/{serviceName}/option/{option}', params: {serviceName: string, option: string}): Promise<void>;
  /**
   * Secondary dns infos
   * remove this domain
   */
  public delete(path: '/vps/{serviceName}/secondaryDnsDomains/{domain}', params: {serviceName: string, domain: string}): Promise<void>;
  /**
   * Information about the snapshot of a VPS Virtual Machine
   * Creates a vps.Task that will delete the Snapshot
   */
  public delete(path: '/vps/{serviceName}/snapshot', params: {serviceName: string}): Promise<vps.Task>;
  /**
   * Currently restored backup
   * Creates a VPS.Task that will unmount the backup
   */
  public delete(path: '/vps/{serviceName}/veeam/restoredBackup', params: {serviceName: string}): Promise<vps.Task>;
  public delete(path: PathsVpsDELETE, params?: OvhParamType): Promise<any> {
    return super.delete(path, params);
  }
}
}