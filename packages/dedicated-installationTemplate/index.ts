import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace complexType {
    //complexType.UnitAndValue
    // fullName: complexType.UnitAndValue.UnitAndValue
    export interface UnitAndValue<T> {
        unit?: string;
        value?: T;
    }
}
export namespace dedicated {
    //dedicated.TemplateOsFileSystemEnum
    export type TemplateOsFileSystemEnum = "btrfs" | "ext3" | "ext4" | "ntfs" | "reiserfs" | "swap" | "ufs" | "xfs" | "zfs"
    //dedicated.TemplateOsHardwareRaidEnum
    export type TemplateOsHardwareRaidEnum = "raid0" | "raid1" | "raid10" | "raid5" | "raid50" | "raid6" | "raid60"
    //dedicated.TemplateOsLanguageEnum
    export type TemplateOsLanguageEnum = "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "it" | "ja" | "ko" | "lt" | "lv" | "nb" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tr" | "tu" | "uk" | "zh-Hans-CN" | "zh-Hans-HK"
    //dedicated.TemplateOsProperties
    // fullName: dedicated.TemplateOsProperties.TemplateOsProperties
    export interface TemplateOsProperties {
        changeLog?: string;
        customHostname?: string;
        postInstallationScriptLink?: string;
        postInstallationScriptReturn?: string;
        rating?: number;
        sshKeyName?: string;
        useDistributionKernel?: boolean;
    }
    //dedicated.TemplateOsTypeEnum
    export type TemplateOsTypeEnum = "bsd" | "linux" | "solaris" | "windows"
    //dedicated.TemplateOsUsageEnum
    export type TemplateOsUsageEnum = "basic" | "customer" | "hosting" | "other" | "readyToUse" | "virtualisation"
    //dedicated.TemplatePartitionTypeEnum
    export type TemplatePartitionTypeEnum = "logical" | "lv" | "primary"
    export namespace installationTemplate {
        //dedicated.installationTemplate.Templates
        // fullName: dedicated.installationTemplate.Templates.Templates
        export interface Templates {
            availableLanguages?: OVH.dedicated.TemplateOsLanguageEnum[];
            beta?: boolean;
            bitFormat?: OVH.dedicated.server.BitFormatEnum;
            category?: OVH.dedicated.TemplateOsUsageEnum;
            customization?: OVH.dedicated.TemplateOsProperties;
            defaultLanguage?: OVH.dedicated.TemplateOsLanguageEnum;
            deprecated?: boolean;
            description?: string;
            distribution?: string;
            family?: OVH.dedicated.TemplateOsTypeEnum;
            filesystems?: OVH.dedicated.TemplateOsFileSystemEnum[];
            hardRaidConfiguration?: boolean;
            lastModification?: string;
            lvmReady?: boolean;
            supportsDistributionKernel?: boolean;
            supportsGptLabel?: boolean;
            supportsRTM?: boolean;
            supportsSqlServer?: boolean;
            supportsUEFI?: OVH.dedicated.server.SupportsUEFIEnum;
            templateName?: string;
        }
        //dedicated.installationTemplate.hardwareRaid
        // fullName: dedicated.installationTemplate.hardwareRaid.hardwareRaid
        export interface hardwareRaid {
            disks?: string[];
            mode?: OVH.dedicated.TemplateOsHardwareRaidEnum;
            name?: string;
            step?: number;
        }
        //dedicated.installationTemplate.templatePartitioningSchemes
        // fullName: dedicated.installationTemplate.templatePartitioningSchemes.templatePartitioningSchemes
        export interface templatePartitioningSchemes {
            name?: string;
            priority?: number;
        }
        //dedicated.installationTemplate.templatePartitions
        // fullName: dedicated.installationTemplate.templatePartitions.templatePartitions
        export interface templatePartitions {
            filesystem?: OVH.dedicated.TemplateOsFileSystemEnum;
            mountpoint?: string;
            order?: number;
            raid?: OVH.dedicated.server.PartitionRaidEnum;
            size?: OVH.complexType.UnitAndValue<number>;
            type?: OVH.dedicated.TemplatePartitionTypeEnum;
            volumeName?: string;
        }
    }
    export namespace server {
        //dedicated.server.BitFormatEnum
        export type BitFormatEnum = 32 | 64
        //dedicated.server.PartitionRaidEnum
        export type PartitionRaidEnum = "0" | "1" | "10" | "5" | "6"
        //dedicated.server.SupportsUEFIEnum
        export type SupportsUEFIEnum = "no" | "only" | "yes"
    }
}
// Apis harmony
// path /dedicated
export interface Dedicated {
    installationTemplate:  {
        // GET /dedicated/installationTemplate
        GET(): Promise<string[]>;
        [keys: string]: {
            // GET /dedicated/installationTemplate/{templateName}
            GET(): Promise<dedicated.installationTemplate.Templates>;
            partitionScheme:  {
                // GET /dedicated/installationTemplate/{templateName}/partitionScheme
                GET(): Promise<string[]>;
                [keys: string]: {
                    // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}
                    GET(): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
                    partition:  {
                        // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
                        GET(): Promise<string[]>;
                        [keys: string]: {
                            // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
                            GET(): Promise<dedicated.installationTemplate.templatePartitions>;
                        } | any
                    }
                    hardwareRaid:  {
                        // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid
                        GET(): Promise<string[]>;
                        [keys: string]: {
                            // GET /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}
                            GET(): Promise<dedicated.installationTemplate.hardwareRaid>;
                        } | any
                    }
                } | any
            }
        } | any
    }
}
// Api
type PathsDedicatedInstallationTemplateGET = '/dedicated/installationTemplate/{templateName}' |
  '/dedicated/installationTemplate/{templateName}/partitionScheme' |
  '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' |
  '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' |
  '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}' |
  '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' |
  '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' |
  '/dedicated/installationTemplate';

export class ApiDedicatedInstallationTemplate extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * List the dedicated.installationTemplate.Templates objects
   * OVH operating system installation templates
   */
  public get(path: '/dedicated/installationTemplate'): Promise<string[]>;
  /**
   * Available installation templates
   * Get this object properties
   */
  public get(path: '/dedicated/installationTemplate/{templateName}', params: {templateName: string}): Promise<dedicated.installationTemplate.Templates>;
  /**
   * List the dedicated.installationTemplate.templatePartitioningSchemes objects
   * Partitioning schemes available on this template
   */
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme', params: {templateName: string}): Promise<string[]>;
  /**
   * Partitioning schemes available on this template
   * Get this object properties
   */
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string}): Promise<dedicated.installationTemplate.templatePartitioningSchemes>;
  /**
   * List the dedicated.installationTemplate.hardwareRaid objects
   * Hardware RAIDs defined in this partitioning scheme
   */
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
   * Hardware RAID defined in this partitioning scheme
   * Get this object properties
   */
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string}): Promise<dedicated.installationTemplate.hardwareRaid>;
  /**
   * List the dedicated.installationTemplate.templatePartitions objects
   * Partitions defined in this partitioning scheme
   */
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
   *  Partitions defined in this partitioning scheme
   * Get this object properties
   */
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string}): Promise<dedicated.installationTemplate.templatePartitions>;
  public get(path: PathsDedicatedInstallationTemplateGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
}
}