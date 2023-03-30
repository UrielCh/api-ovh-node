import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/installationTemplate Models
 * Source: https://eu.api.soyoustart.com/1.0/dedicated/installationTemplate.json
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
}
export namespace dedicated {
    /**
     * Hardware RAID enum
     * type fullname: dedicated.TemplateOsHardwareRaidEnum
     */
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    /**
     * A structure describing some interesting facts about an OS template
     * interface fullName: dedicated.TemplateOsInfo.TemplateOsInfo
     */
    export interface TemplateOsInfo {
        category: dedicated.TemplateOsUsageEnum;
        description: string;
        endOfInstall?: string;
        family: dedicated.TemplateOsTypeEnum;
        license?: dedicated.TemplateOsInfoLicense;
        project?: dedicated.TemplateOsInfoProject;
        subfamily: dedicated.TemplateOsSubfamilyEnum;
        templateName: string;
    }
    /**
     * A structure describing some interesting facts about an OS template licensing
     * interface fullName: dedicated.TemplateOsInfoLicense.TemplateOsInfoLicense
     */
    export interface TemplateOsInfoLicense {
        os?: dedicated.TemplateOsInfoLicenseItem;
        usage?: dedicated.TemplateOsInfoLicenseItem;
    }
    /**
     * A structure describing some interesting facts about an OS template license item
     * interface fullName: dedicated.TemplateOsInfoLicenseItem.TemplateOsInfoLicenseItem
     */
    export interface TemplateOsInfoLicenseItem {
        name?: dedicated.TemplateOsInfoLicenseItemEnum[];
        url?: string;
    }
    /**
     * Standard license name according to SPDX
     * type fullname: dedicated.TemplateOsInfoLicenseItemEnum
     */
    export type TemplateOsInfoLicenseItemEnum = "0BSD" | "AAL" | "ADSL" | "AFL-1.1" | "AFL-1.2" | "AFL-2.0" | "AFL-2.1" | "AFL-3.0" | "AGPL-1.0-only" | "AGPL-1.0-or-later" | "AGPL-3.0-only" | "AGPL-3.0-or-later" | "AMDPLPA" | "AML" | "AMPAS" | "ANTLR-PD" | "ANTLR-PD-fallback" | "APAFML" | "APL-1.0" | "APSL-1.0" | "APSL-1.1" | "APSL-1.2" | "APSL-2.0" | "Abstyles" | "Adobe-2006" | "Adobe-Glyph" | "Afmparse" | "Aladdin" | "Apache-1.0" | "Apache-1.1" | "Apache-2.0" | "Artistic-1.0" | "Artistic-1.0-Perl" | "Artistic-1.0-cl8" | "Artistic-2.0" | "BSD-1-Clause" | "BSD-2-Clause" | "BSD-2-Clause-Patent" | "BSD-2-Clause-Views" | "BSD-3-Clause" | "BSD-3-Clause-Attribution" | "BSD-3-Clause-Clear" | "BSD-3-Clause-LBNL" | "BSD-3-Clause-Modification" | "BSD-3-Clause-No-Nuclear-License" | "BSD-3-Clause-No-Nuclear-License-2014" | "BSD-3-Clause-No-Nuclear-Warranty" | "BSD-3-Clause-Open-MPI" | "BSD-4-Clause" | "BSD-4-Clause-Shortened" | "BSD-4-Clause-UC" | "BSD-Protection" | "BSD-Source-Code" | "BSL-1.0" | "BUSL-1.1" | "Bahyph" | "Barr" | "Beerware" | "BitTorrent-1.0" | "BitTorrent-1.1" | "BlueOak-1.0.0" | "Borceux" | "C-UDA-1.0" | "CAL-1.0" | "CAL-1.0-Combined-Work-Exception" | "CATOSL-1.1" | "CC-BY-1.0" | "CC-BY-2.0" | "CC-BY-2.5" | "CC-BY-3.0" | "CC-BY-4.0" | "CC-BY-NC-1.0" | "CC-BY-NC-2.0" | "CC-BY-NC-2.5" | "CC-BY-NC-3.0" | "CC-BY-NC-4.0" | "CC-BY-NC-ND-1.0" | "CC-BY-NC-ND-2.0" | "CC-BY-NC-ND-2.5" | "CC-BY-NC-ND-3.0" | "CC-BY-NC-ND-4.0" | "CC-BY-NC-SA-1.0" | "CC-BY-NC-SA-2.0" | "CC-BY-NC-SA-2.5" | "CC-BY-NC-SA-3.0" | "CC-BY-NC-SA-4.0" | "CC-BY-ND-1.0" | "CC-BY-ND-2.0" | "CC-BY-ND-2.5" | "CC-BY-ND-3.0" | "CC-BY-ND-4.0" | "CC-BY-SA-1.0" | "CC-BY-SA-2.0" | "CC-BY-SA-2.5" | "CC-BY-SA-3.0" | "CC-BY-SA-4.0" | "CC-PDDC" | "CC0-1.0" | "CDDL-1.0" | "CDDL-1.1" | "CDLA-Permissive-1.0" | "CDLA-Sharing-1.0" | "CECILL-1.0" | "CECILL-1.1" | "CECILL-2.0" | "CECILL-2.1" | "CECILL-B" | "CECILL-C" | "CERN-OHL-1.1" | "CERN-OHL-1.2" | "CERN-OHL-P-2.0" | "CERN-OHL-S-2.0" | "CERN-OHL-W-2.0" | "CNRI-Jython" | "CNRI-Python" | "CNRI-Python-GPL-Compatible" | "CPAL-1.0" | "CPL-1.0" | "CPOL-1.02" | "CUA-OPL-1.0" | "Caldera" | "ClArtistic" | "Condor-1.1" | "Crossword" | "CrystalStacker" | "Cube" | "D-FSL-1.0" | "DFSG" | "DOC" | "DRL-1.0" | "DSDP" | "Dotseqn" | "ECL-1.0" | "ECL-2.0" | "EFL-1.0" | "EFL-2.0" | "EPICS" | "EPL-1.0" | "EPL-2.0" | "EUDatagrid" | "EUPL-1.0" | "EUPL-1.1" | "EUPL-1.2" | "Entessa" | "ErlPL-1.1" | "Eurosym" | "FSFAP" | "FSFUL" | "FSFULLR" | "FTL" | "Fair" | "Frameworx-1.0" | "FreeBSD-DOC" | "FreeImage" | "GD" | "GFDL-1.1-invariants-only" | "GFDL-1.1-invariants-or-later" | "GFDL-1.1-no-invariants-only" | "GFDL-1.1-no-invariants-or-later" | "GFDL-1.1-only" | "GFDL-1.1-or-later" | "GFDL-1.2-invariants-only" | "GFDL-1.2-invariants-or-later" | "GFDL-1.2-no-invariants-only" | "GFDL-1.2-no-invariants-or-later" | "GFDL-1.2-only" | "GFDL-1.2-or-later" | "GFDL-1.3-invariants-only" | "GFDL-1.3-invariants-or-later" | "GFDL-1.3-no-invariants-only" | "GFDL-1.3-no-invariants-or-later" | "GFDL-1.3-only" | "GFDL-1.3-or-later" | "GL2PS" | "GLWTPL" | "GPL-1.0-only" | "GPL-1.0-or-later" | "GPL-2.0-only" | "GPL-2.0-or-later" | "GPL-3.0-only" | "GPL-3.0-or-later" | "Giftware" | "Glide" | "Glulxe" | "HPND" | "HPND-sell-variant" | "HTMLTIDY" | "HaskellReport" | "Hippocratic-2.1" | "IBM-pibs" | "ICU" | "IJG" | "IPA" | "IPL-1.0" | "ISC" | "ImageMagick" | "Imlib2" | "Info-ZIP" | "Intel" | "Intel-ACPI" | "Interbase-1.0" | "JPNIC" | "JSON" | "JasPer-2.0" | "LAL-1.2" | "LAL-1.3" | "LGPL-2.0-only" | "LGPL-2.0-or-later" | "LGPL-2.1-only" | "LGPL-2.1-or-later" | "LGPL-3.0-only" | "LGPL-3.0-or-later" | "LGPLLR" | "LPL-1.0" | "LPL-1.02" | "LPPL-1.0" | "LPPL-1.1" | "LPPL-1.2" | "LPPL-1.3a" | "LPPL-1.3c" | "Latex2e" | "Leptonica" | "LiLiQ-P-1.1" | "LiLiQ-R-1.1" | "LiLiQ-Rplus-1.1" | "Libpng" | "Linux-OpenIB" | "MIT" | "MIT-0" | "MIT-CMU" | "MIT-Modern-Variant" | "MIT-advertising" | "MIT-enna" | "MIT-feh" | "MIT-open-group" | "MITNFA" | "MPL-1.0" | "MPL-1.1" | "MPL-2.0" | "MPL-2.0-no-copyleft-exception" | "MS-PL" | "MS-RL" | "MTLL" | "MakeIndex" | "MirOS" | "Motosoto" | "MulanPSL-1.0" | "MulanPSL-2.0" | "Multics" | "Mup" | "NAIST-2003" | "NASA-1.3" | "NBPL-1.0" | "NCGL-UK-2.0" | "NCSA" | "NGPL" | "NIST-PD" | "NIST-PD-fallback" | "NLOD-1.0" | "NLPL" | "NOSL" | "NPL-1.0" | "NPL-1.1" | "NPOSL-3.0" | "NRL" | "NTP" | "NTP-0" | "Naumen" | "Net-SNMP" | "NetCDF" | "Newsletr" | "Nokia" | "Noweb" | "O-UDA-1.0" | "OCCT-PL" | "OCLC-2.0" | "ODC-By-1.0" | "ODbL-1.0" | "OFL-1.0" | "OFL-1.0-RFN" | "OFL-1.0-no-RFN" | "OFL-1.1" | "OFL-1.1-RFN" | "OFL-1.1-no-RFN" | "OGC-1.0" | "OGDL-Taiwan-1.0" | "OGL-Canada-2.0" | "OGL-UK-1.0" | "OGL-UK-2.0" | "OGL-UK-3.0" | "OGTSL" | "OLDAP-1.1" | "OLDAP-1.2" | "OLDAP-1.3" | "OLDAP-1.4" | "OLDAP-2.0" | "OLDAP-2.0.1" | "OLDAP-2.1" | "OLDAP-2.2" | "OLDAP-2.2.1" | "OLDAP-2.2.2" | "OLDAP-2.3" | "OLDAP-2.4" | "OLDAP-2.5" | "OLDAP-2.6" | "OLDAP-2.7" | "OLDAP-2.8" | "OML" | "OPL-1.0" | "OSET-PL-2.1" | "OSL-1.0" | "OSL-1.1" | "OSL-2.0" | "OSL-2.1" | "OSL-3.0" | "OpenSSL" | "PDDL-1.0" | "PHP-3.0" | "PHP-3.01" | "PSF-2.0" | "Parity-6.0.0" | "Parity-7.0.0" | "Plexus" | "PolyForm-Noncommercial-1.0.0" | "PolyForm-Small-Business-1.0.0" | "PostgreSQL" | "Python-2.0" | "QPL-1.0" | "Qhull" | "RHeCos-1.1" | "RPL-1.1" | "RPL-1.5" | "RPSL-1.0" | "RSA-MD" | "RSCPL" | "Rdisc" | "Ruby" | "SAX-PD" | "SCEA" | "SGI-B-1.0" | "SGI-B-1.1" | "SGI-B-2.0" | "SHL-0.5" | "SHL-0.51" | "SISSL" | "SISSL-1.2" | "SMLNJ" | "SMPPL" | "SNIA" | "SPL-1.0" | "SSH-OpenSSH" | "SSH-short" | "SSPL-1.0" | "SWL" | "Saxpath" | "Sendmail" | "Sendmail-8.23" | "SimPL-2.0" | "Sleepycat" | "Spencer-86" | "Spencer-94" | "Spencer-99" | "SugarCRM-1.1.3" | "TAPR-OHL-1.0" | "TCL" | "TCP-wrappers" | "TMate" | "TORQUE-1.1" | "TOSL" | "TU-Berlin-1.0" | "TU-Berlin-2.0" | "UCL-1.0" | "UPL-1.0" | "Unicode-DFS-2015" | "Unicode-DFS-2016" | "Unicode-TOU" | "Unlicense" | "VOSTROM" | "VSL-1.0" | "Vim" | "W3C" | "W3C-19980720" | "W3C-20150513" | "WTFPL" | "Watcom-1.0" | "Wsuipa" | "X11" | "XFree86-1.1" | "XSkat" | "Xerox" | "Xnet" | "ZPL-1.1" | "ZPL-2.0" | "ZPL-2.1" | "Zed" | "Zend-2.0" | "Zimbra-1.3" | "Zimbra-1.4" | "Zlib" | "blessing" | "bzip2-1.0.5" | "bzip2-1.0.6" | "copyleft-next-0.3.0" | "copyleft-next-0.3.1" | "curl" | "diffmark" | "dvipdfm" | "eGenix" | "etalab-2.0" | "freeware" | "gSOAP-1.3b" | "gnuplot" | "iMatix" | "libpng-2.0" | "libselinux-1.0" | "libtiff" | "mpich2" | "proprietary" | "psfrag" | "psutils" | "unknown" | "xinetd" | "xpp" | "zlib-acknowledgement"
    /**
     * A structure describing some interesting facts about an OS template project
     * interface fullName: dedicated.TemplateOsInfoProject.TemplateOsInfoProject
     */
    export interface TemplateOsInfoProject {
        os?: dedicated.TemplateOsInfoProjectItem;
        usage?: dedicated.TemplateOsInfoProjectItem;
    }
    /**
     * A structure describing some interesting facts about an OS template project item
     * interface fullName: dedicated.TemplateOsInfoProjectItem.TemplateOsInfoProjectItem
     */
    export interface TemplateOsInfoProjectItem {
        governance?: string[];
        releaseNotes?: string;
        url?: string;
        version?: string;
    }
    /**
     * A structure describing input questions for the specific OS template
     * interface fullName: dedicated.TemplateOsInput.TemplateOsInput
     */
    export interface TemplateOsInput {
        default?: string;
        description?: string;
        enum: string[];
        mandatory: boolean;
        name: string;
        type: dedicated.TemplateOsInputTypeEnum;
    }
    /**
     * Template OS Input type enum
     * type fullname: dedicated.TemplateOsInputTypeEnum
     */
    export type TemplateOsInputTypeEnum = "boolean" | "date" | "email" | "enum" | "hexstring" | "ip" | "keyValue" | "number" | "string" | "text" | "time" | "url" | "uuid"
    /**
     * all language available
     * type fullname: dedicated.TemplateOsLanguageEnum
     */
    export type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK"
    /**
     * A structure describing properties customizables about this dedicated installation template
     * interface fullName: dedicated.TemplateOsProperties.TemplateOsProperties
     */
    export interface TemplateOsProperties {
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    /**
     * Os subfamily definition
     * type fullname: dedicated.TemplateOsSubfamilyEnum
     */
    export type TemplateOsSubfamilyEnum = "alma" | "aos" | "arch" | "byoi" | "centos" | "cloudlinux" | "coreos" | "debian" | "dgx" | "esxi" | "fedora" | "freebsd" | "gentoo" | "hyperv" | "omnios" | "openio" | "openmediavault" | "opensuse" | "ovh" | "pcs" | "power" | "proxmox" | "rhel" | "rocky" | "slackware" | "sles-sap" | "smartos" | "solusvm" | "ubuntu" | "windows-server-core" | "windows-server-desktop-exp" | "xcp" | "xen"
    /**
     * Os type
     * type fullname: dedicated.TemplateOsTypeEnum
     */
    export type TemplateOsTypeEnum = "bsd" | "custom" | "ibm" | "linux" | "solaris" | "unix" | "windows"
    /**
     * Os usage definition
     * type fullname: dedicated.TemplateOsUsageEnum
     */
    export type TemplateOsUsageEnum = "basic" | "customer" | "database" | "erp" | "hosting" | "management" | "other" | "readyToUse" | "virtualisation" | "virtualization"
    /**
     * partition type
     * type fullname: dedicated.TemplatePartitionTypeEnum
     */
    export type TemplatePartitionTypeEnum = "logical" | "lv" | "primary"
    export namespace installationTemplate {
        /**
         * Available installation templates
         * interface fullName: dedicated.installationTemplate.Templates.Templates
         */
        export interface Templates {
            availableLanguages: dedicated.TemplateOsLanguageEnum[];
            bitFormat: dedicated.server.BitFormatEnum;
            category: dedicated.TemplateOsUsageEnum;
            customization?: dedicated.TemplateOsProperties;
            defaultLanguage: dedicated.TemplateOsLanguageEnum;
            description: string;
            distribution: string;
            endOfInstall: string;
            family: dedicated.TemplateOsTypeEnum;
            filesystems: dedicated.server.FileSystemEnum[];
            hardRaidConfiguration?: boolean;
            inputs?: dedicated.TemplateOsInput[];
            license?: dedicated.TemplateOsInfoLicense;
            lvmReady?: boolean;
            noPartitioning: boolean;
            project?: dedicated.TemplateOsInfoProject;
            softRaidOnlyMirroring: boolean;
            subfamily: dedicated.TemplateOsSubfamilyEnum;
            supportsDistributionKernel?: boolean;
            supportsGptLabel?: boolean;
            supportsRTM: boolean;
            supportsSqlServer?: boolean;
            templateName: string;
        }
        /**
         * Hardware RAID defined in this partitioning scheme
         * interface fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
         */
        export interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        /**
         * Partitioning schemes available on this template
         * interface fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
         */
        export interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        /**
         *  Partitions defined in this partitioning scheme
         * interface fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
         */
        export interface templatePartitions {
            filesystem: dedicated.server.FileSystemEnum;
            mountpoint: string;
            order: number;
            raid?: dedicated.server.PartitionRaidEnum;
            size: complexType.UnitAndValue<number>;
            type: dedicated.TemplatePartitionTypeEnum;
            volumeName?: string;
        }
    }
    export namespace server {
        /**
         * Available os bit format
         * type fullname: dedicated.server.BitFormatEnum
         */
        export type BitFormatEnum = 32 | 64
        /**
         * FileSystems
         * type fullname: dedicated.server.FileSystemEnum
         */
        export type FileSystemEnum = "btrfs" | "ext3" | "ext4" | "fat16" | "none" | "ntfs" | "reiserfs" | "swap" | "ufs" | "vmfs5" | "vmfs6" | "vmfsl" | "xfs" | "zfs"
        /**
         * partition raid type
         * type fullname: dedicated.server.PartitionRaidEnum
         */
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6" | "7"
    }
}

/**
 * END API /dedicated/installationTemplate Models
 */
export function proxyDedicatedInstallationTemplate(ovhEngine: OvhRequestable): Dedicated {
    return buildOvhProxy(ovhEngine, '/dedicated');
}
export default proxyDedicatedInstallationTemplate;
/**
 * Api model for /dedicated/installationTemplate
 */
export interface Dedicated {
    installationTemplate: {
        /**
         * OVH operating system installation templates
         * GET /dedicated/installationTemplate
         */
        $get(): Promise<string[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        templateInfos: {
            /**
             * Get details about available distributions for dedicated servers
             * GET /dedicated/installationTemplate/templateInfos
             */
            $get(): Promise<dedicated.TemplateOsInfo[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
        }
        $(templateName: string): {
            /**
             * Get this object properties
             * GET /dedicated/installationTemplate/{templateName}
             */
            $get(): Promise<dedicated.installationTemplate.Templates>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
            partitionScheme: {
                /**
                 * Partitioning schemes available on this template
                 * GET /dedicated/installationTemplate/{templateName}/partitionScheme
                 */
                $get(): Promise<string[]>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                $(schemeName: string): {
                    /**
                     * Get this object properties
                     * GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}
                     */
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    /**
                     * Controle cache
                     */
                    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                    hardwareRaid: {
                        /**
                         * Hardware RAIDs defined in this partitioning scheme
                         * GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(name: string): {
                            /**
                             * Get this object properties
                             * GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                             */
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                    partition: {
                        /**
                         * Partitions defined in this partitioning scheme
                         * GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                         */
                        $get(): Promise<string[]>;
                        /**
                         * Controle cache
                         */
                        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        $(mountpoint: string): {
                            /**
                             * Get this object properties
                             * GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                             */
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                            /**
                             * Controle cache
                             */
                            $cache(param?: ICacheOptions | CacheAction): Promise<any>;
                        };
                    }
                };
            }
        };
    }
}
