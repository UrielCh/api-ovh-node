import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /dedicated/installationTemplate Models
 * Source: https://eu.api.soyoustart.com/1.0/dedicated/installationTemplate.json
 */
export namespace complexType {
    // interface fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export namespace dedicated {
    // type fullname: dedicated.TemplateOsFileSystemEnum
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs"
    // type fullname: dedicated.TemplateOsHardwareRaidEnum
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    // type fullname: dedicated.TemplateOsLanguageEnum
    export type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK"
    // interface fullName: dedicated.TemplateOsProperties.TemplateOsProperties
    export interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    // type fullname: dedicated.TemplateOsTypeEnum
    export type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows"
    // type fullname: dedicated.TemplateOsUsageEnum
    export type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation"
    // type fullname: dedicated.TemplatePartitionTypeEnum
    export type TemplatePartitionTypeEnum = "logical" | "lv" | "primary"
    export namespace installationTemplate {
        // interface fullName: dedicated.installationTemplate.Templates.Templates
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
        // interface fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
        export interface hardwareRaid {
            disks: string[];
            mode: dedicated.TemplateOsHardwareRaidEnum;
            name: string;
            step: number;
        }
        // interface fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
        export interface templatePartitioningSchemes {
            name: string;
            priority: number;
        }
        // interface fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
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
        // type fullname: dedicated.server.BitFormatEnum
        export type BitFormatEnum = 32 | 64
        // type fullname: dedicated.server.PartitionRaidEnum
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6"
        // type fullname: dedicated.server.SupportsUEFIEnum
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
 * Api Proxy model
 */// Apis harmony
// path /dedicated
export interface Dedicated{
    installationTemplate: {
        // GET /dedicated/installationTemplate
        $get(): Promise<string[]>;
        $(templateName: string): {
            // GET /dedicated/installationTemplate/{templateName}
            $get(): Promise<dedicated.installationTemplate.Templates>;
            partitionScheme: {
                // GET /dedicated/installationTemplate/{templateName}/partitionScheme
                $get(): Promise<string[]>;
                $(schemeName: string): {
                    // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    $get(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    hardwareRaid: {
                        // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        $get(): Promise<string[]>;
                        $(name: string): {
                            // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            $get(): Promise<dedicated.installationTemplate.hardwareRaid>;
                        };
                    }
                    partition: {
                        // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        $get(): Promise<string[]>;
                        $(mountpoint: string): {
                            // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            $get(): Promise<dedicated.installationTemplate.templatePartitions>;
                        };
                    }
                };
            }
        };
    }
// Api
  /**
   * List the dedicated.installationTemplate.Templates objects
   * OVH operating system installation templates
   */
  get(path: '/dedicated/installationTemplate'): () => Promise<string[]>;
  /**
   * Available installation templates
   * Get this object properties
   */
  get(path: '/dedicated/installationTemplate/{templateName}'): (params: {templateName: string}) => Promise<dedicated.installationTemplate.Templates>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Partitioning schemes available on this template
   */
  get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme'): (params: {templateName: string}) => Promise<string[]>;
  /**
   * Partitioning schemes available on this template
   * Get this object properties
   */
  get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}'): (params: {schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Hardware RAIDs defined in this partitioning scheme
   */
  get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid'): (params: {schemeName: string, templateName: string}) => Promise<string[]>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Get this object properties
   */
  get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}'): (params: {name: string, schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.hardwareRaid>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Partitions defined in this partitioning scheme
   */
  get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition'): (params: {schemeName: string, templateName: string}) => Promise<string[]>;
  /**
   *  Partitions defined in this partitioning scheme
   * Get this object properties
   */
  get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}'): (params: {mountpoint: string, schemeName: string, templateName: string}) => Promise<dedicated.installationTemplate.templatePartitions>;
}
