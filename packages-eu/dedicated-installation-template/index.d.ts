import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /dedicated/installationTemplate Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace dedicated {
    type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs";
    type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60";
    type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK";
    interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows";
    type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation";
    type TemplatePartitionTypeEnum = "logical" | "lv" | "primary";
    namespace installationTemplate {
        interface Templates {
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
        interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        interface templatePartitions {
            filesystem: dedicated.TemplateOsFileSystemEnum;
            mountpoint: string;
            order: number;
            raid?: dedicated.server.PartitionRaidEnum;
            size: complexType.UnitAndValue<number>;
            type: dedicated.TemplatePartitionTypeEnum;
            volumeName?: string;
        }
    }
    namespace server {
        type BitFormatEnum = 32 | 64;
        type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6";
        type SupportsUEFIEnum = "no" | "only" | "yes";
    }
}
/**
 * END API /dedicated/installationTemplate Models
 */
export declare function proxyDedicatedInstallationTemplate(ovhEngine: OvhRequestable): Dedicated;
export default proxyDedicatedInstallationTemplate;
/**
 * Api Proxy model
 */ export interface Dedicated {
    installationTemplate: {
        $get(): Promise<string[]>;
        $(templateName: string): {
            $get(): Promise<dedicated.installationTemplate.Templates>;
            partitionScheme: {
                $get(): Promise<string[]>;
                $(schemeName: string): {
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    hardwareRaid: {
                        $get(): Promise<string[]>;
                        $(name: string): {
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                        };
                    };
                    partition: {
                        $get(): Promise<string[]>;
                        $(mountpoint: string): {
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                        };
                    };
                };
            };
        };
    };
    /**
     * List the dedicated.installationTemplate.Templates objects
     * OVH operating system installation templates
     */
    get(path: '/dedicated/installationTemplate'): () => Promise<string[]>;
    /**
     * Available installation templates
     * Get this object properties
     */
    get(path: '/dedicated/installationTemplate/{templateName}'): (params: {
        templateName: string;
    }) => Promise<dedicated.installationTemplate.Templates>;
    /**
     * List the dedicated.installationTemplate.templatePartitioningSchemes objects
     * Partitioning schemes available on this template
     */
    get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme'): (params: {
        templateName: string;
    }) => Promise<string[]>;
    /**
     * Partitioning schemes available on this template
     * Get this object properties
     */
    get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {
        schemeName: string;
        templateName: string;
    }) => Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
    /**
     * List the dedicated.installationTemplate.hardwareRaid objects
     * Hardware RAIDs defined in this partitioning scheme
     */
    get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {
        schemeName: string;
        templateName: string;
    }) => Promise<string[]>;
    /**
     * Hardware RAID defined in this partitioning scheme
     * Get this object properties
     */
    get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {
        name: string;
        schemeName: string;
        templateName: string;
    }) => Promise<dedicated.installationTemplate.hardwareRaid>;
    /**
     * List the dedicated.installationTemplate.templatePartitions objects
     * Partitions defined in this partitioning scheme
     */
    get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {
        schemeName: string;
        templateName: string;
    }) => Promise<string[]>;
    /**
     *  Partitions defined in this partitioning scheme
     * Get this object properties
     */
    get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {
        mountpoint: string;
        schemeName: string;
        templateName: string;
    }) => Promise<dedicated.installationTemplate.templatePartitions>;
}
