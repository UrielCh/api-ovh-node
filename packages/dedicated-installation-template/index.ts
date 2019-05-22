import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit: string;
  /**
   */
  value: T;
}
/**
 * Filesystems available
 */
export type DedicatedTemplateOsFileSystemEnum = 'btrfs' | 'ext3' | 'ext4' | 'ntfs' | 'reiserfs' | 'swap' | 'ufs' | 'xfs' | 'zfs';
/**
 * Hardware RAID enum
 */
export type DedicatedTemplateOsHardwareRaidEnum = 'raid0' | 'raid1' | 'raid10' | 'raid5' | 'raid50' | 'raid6' | 'raid60';
/**
 * all language available
 */
export type DedicatedTemplateOsLanguageEnum = 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'nb' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tr' | 'tu' | 'uk' | 'zh-Hans-CN' | 'zh-Hans-HK';
/**
 * A structure describing properties customizables about this dedicated installation template
 */
export interface DedicatedTemplateOsProperties {
  /**
   * Template change log details
   *
   */
  changeLog?: string;
  /**
   * Set up the server using the provided hostname instead of the default hostname
   *
   */
  customHostname?: string;
  /**
   * Indicate the URL where your postinstall customisation script is located
   *
   */
  postInstallationScriptLink?: string;
  /**
   * indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is "loh1Xee7eo OK OK OK UGh8Ang1Gu
   *
   */
  postInstallationScriptReturn?: string;
  /**
   */
  rating?: number;
  /**
   * Name of the ssh key that should be installed. Password login will be disabled
   *
   */
  sshKeyName?: string;
  /**
   * Use the distribution's native kernel instead of the recommended OVH Kernel
   *
   */
  useDistributionKernel?: boolean;
}
/**
 * Os type
 */
export type DedicatedTemplateOsTypeEnum = 'bsd' | 'linux' | 'solaris' | 'windows';
/**
 * Os usage definition
 */
export type DedicatedTemplateOsUsageEnum = 'basic' | 'customer' | 'hosting' | 'other' | 'readyToUse' | 'virtualisation';
/**
 * partition type
 */
export type DedicatedTemplatePartitionTypeEnum = 'logical' | 'lv' | 'primary';
/**
 * Available installation templates
 */
export interface DedicatedInstallationTemplateTemplates {
  /**
   * list of all language available for this template
   *
   */
  availableLanguages: DedicatedTemplateOsLanguageEnum[];
  /**
   * This distribution is new, and although tested and functional, may still display odd behaviour
   *
   */
  beta?: boolean;
  /**
   * this template  bit format
   *
   */
  bitFormat: DedicatedServerBitFormatEnum;
  /**
   * category of this template (informative only)
   *
   */
  category: DedicatedTemplateOsUsageEnum;
  /**
   * Customizable template properties
   *
   */
  customization?: DedicatedTemplateOsProperties;
  /**
   * the default language of this template
   *
   */
  defaultLanguage: DedicatedTemplateOsLanguageEnum;
  /**
   * is this distribution deprecated
   *
   */
  deprecated?: boolean;
  /**
   * information about this template
   *
   */
  description: string;
  /**
   * the distribution this template is based on
   *
   */
  distribution: string;
  /**
   * this template family type
   *
   */
  family: DedicatedTemplateOsTypeEnum;
  /**
   * list of all filesystems  available for this template
   *
   */
  filesystems: DedicatedTemplateOsFileSystemEnum[];
  /**
   * This distribution supports hardware raid configuration through the OVH API
   *
   */
  hardRaidConfiguration?: boolean;
  /**
   * Date of last modification of the base image
   *
   */
  lastModification?: string;
  /**
   * This distribution supports Logical Volumes (Linux LVM)
   *
   */
  lvmReady?: boolean;
  /**
   * This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel
   *
   */
  supportsDistributionKernel?: boolean;
  /**
   * This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB
   *
   */
  supportsGptLabel?: boolean;
  /**
   * This distribution supports RTM software
   *
   */
  supportsRTM: boolean;
  /**
   * This distribution supports the microsoft SQL server
   *
   */
  supportsSqlServer?: boolean;
  /**
   * This distribution supports UEFI setup
   *
   */
  supportsUEFI?: DedicatedServerSupportsUEFIEnum;
  /**
   * This template name
   *
   */
  templateName: string;
}
/**
 * Hardware RAID defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateHardwareRaid {
  /**
   * Disk list
   *
   */
  disks: string[];
  /**
   * RAID mode
   *
   */
  mode: DedicatedTemplateOsHardwareRaidEnum;
  /**
   * Hardware RAID name
   *
   */
  name: string;
  /**
   * Specifies the creation order of the hardware RAID
   *
   */
  step: number;
}
/**
 * Partitioning schemes available on this template
 */
export interface DedicatedInstallationTemplateTemplatePartitioningSchemes {
  /**
   * name of this partitioning scheme
   *
   */
  name: string;
  /**
   * on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)
   *
   */
  priority: number;
}
/**
 *  Partitions defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateTemplatePartitions {
  /**
   * Partition filesytem
   *
   */
  filesystem: DedicatedTemplateOsFileSystemEnum;
  /**
   * partition mount point
   *
   */
  mountpoint: string;
  /**
   * specifies the creation order of the partition on the disk
   *
   */
  order: number;
  /**
   * raid partition type
   *
   */
  raid?: DedicatedServerPartitionRaidEnum;
  /**
   * size of partition in Mb, 0 => rest of the space
   *
   */
  size: ComplexTypeUnitAndValue<number>;
  /**
   */
  type: DedicatedTemplatePartitionTypeEnum;
  /**
   * The volume name needed for proxmox distribution
   *
   */
  volumeName?: string;
}
/**
 * Available os bit format
 */
export type DedicatedServerBitFormatEnum = 32 | 64;
/**
 * partition raid type
 */
export type DedicatedServerPartitionRaidEnum = '0' | '1' | '10' | '5' | '6';
/**
 * supports UEFI setup
 */
export type DedicatedServerSupportsUEFIEnum = 'no' | 'only' | 'yes';
type PathsDedicatedInstallationTemplateGET = '/dedicated/installationTemplate' | 
'/dedicated/installationTemplate/{templateName}' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}';

export class ApiDedicatedInstallationTemplate extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  List the dedicated.installationTemplate.Templates objects
  OVH operating system installation templates
  **/
  public get(path: '/dedicated/installationTemplate'): Promise<string[]>;
  /**
  Available installation templates
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}', params: {templateName: string}): Promise<DedicatedInstallationTemplateTemplates>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Partitioning schemes available on this template
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme', params: {templateName: string}): Promise<string[]>;
  /**
  Partitioning schemes available on this template
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string}): Promise<DedicatedInstallationTemplateTemplatePartitioningSchemes>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Hardware RAIDs defined in this partitioning scheme
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
  Hardware RAID defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string}): Promise<DedicatedInstallationTemplateHardwareRaid>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Partitions defined in this partitioning scheme
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
   Partitions defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string}): Promise<DedicatedInstallationTemplateTemplatePartitions>;
  public get(path: PathsDedicatedInstallationTemplateGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
}
