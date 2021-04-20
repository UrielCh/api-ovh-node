import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /dedicated/installationTemplate Models
 * Source: https://eu.api.kimsufi.com/1.0/dedicated/installationTemplate.json
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
     * Filesystems available
     * type fullname: dedicated.TemplateOsFileSystemEnum
     */
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs"
    /**
     * Hardware RAID enum
     * type fullname: dedicated.TemplateOsHardwareRaidEnum
     */
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
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
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    /**
     * Os type
     * type fullname: dedicated.TemplateOsTypeEnum
     */
    export type TemplateOsTypeEnum = "bsd" | "ibm" | "linux" | "solaris" | "unix" | "windows"
    /**
     * Os usage definition
     * type fullname: dedicated.TemplateOsUsageEnum
     */
    export type TemplateOsUsageEnum = "basic" | "customer" | "database" | "hosting" | "management" | "other" | "readyToUse" | "virtualisation" | "virtualization"
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
            beta?: boolean;
            bitFormat: dedicated.server.BitFormatEnum;
            category: dedicated.TemplateOsUsageEnum;
            customization?: dedicated.TemplateOsProperties;
            defaultLanguage: dedicated.TemplateOsLanguageEnum;
            deprecated?: boolean;
            description: string;
            distribution: string;
            family: dedicated.TemplateOsTypeEnum;
            filesystems: dedicated.TemplateOsFileSystemEnum[];
            hardRaidConfiguration?: boolean;
            lastModification?: string;
            lvmReady?: boolean;
            supportsDistributionKernel?: boolean;
            supportsGptLabel?: boolean;
            supportsRTM: boolean;
            supportsSqlServer?: boolean;
            supportsUEFI?: dedicated.server.SupportsUEFIEnum;
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
            filesystem: dedicated.TemplateOsFileSystemEnum;
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
         * partition raid type
         * type fullname: dedicated.server.PartitionRaidEnum
         */
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6"
        /**
         * supports UEFI setup
         * type fullname: dedicated.server.SupportsUEFIEnum
         */
        export type SupportsUEFIEnum = "no" | "only" | "yes"
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
