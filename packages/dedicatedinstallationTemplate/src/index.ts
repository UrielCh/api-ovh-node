import { ApiCommon } from '@ovh-api/common';
/**
 * Os type
 */
export type DedicatedTemplateOsTypeEnum = 'bsd' | 'linux' | 'solaris' | 'windows';
/**
 * Partitioning schemes available on this template
 */
export interface DedicatedInstallationTemplateTemplatePartitioningSchemes {
  /**
   * name of this partitioning scheme
   *
   */
  name?: string;
  /**
   * on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)
   *
   */
  priority?: Number;
}
/**
 * Available os bit format
 */
export type DedicatedServerBitFormatEnum = 32 | 64;
/**
 * Filesystems available
 */
export type DedicatedTemplateOsFileSystemEnum = 'btrfs' | 'ext3' | 'ext4' | 'ntfs' | 'reiserfs' | 'swap' | 'ufs' | 'xfs' | 'zfs';
/**
 *  Partitions defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateTemplatePartitions {
  /**
   * size of partition in Mb, 0 => rest of the space
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
  /**
   * The volume name needed for proxmox distribution
   *
   */
  volumeName?: string;
  /**
   */
  type?: DedicatedTemplatePartitionTypeEnum;
  /**
   * Partition filesytem
   *
   */
  filesystem?: DedicatedTemplateOsFileSystemEnum;
  /**
   * partition mount point
   *
   */
  mountpoint?: string;
  /**
   * specifies the creation order of the partition on the disk
   *
   */
  order?: Number;
  /**
   * raid partition type
   *
   */
  raid?: DedicatedServerPartitionRaidEnum;
}
/**
 * partition type
 */
export type DedicatedTemplatePartitionTypeEnum = 'logical' | 'lv' | 'primary';
/**
 * all language available
 */
export type DedicatedTemplateOsLanguageEnum = 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'nb' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tr' | 'tu' | 'uk' | 'zh-Hans-CN' | 'zh-Hans-HK';
/**
 * Available installation templates
 */
export interface DedicatedInstallationTemplateTemplates {
  /**
   * this template  bit format
   *
   */
  bitFormat?: DedicatedServerBitFormatEnum;
  /**
   * Customizable template properties
   *
   */
  customization?: DedicatedTemplateOsProperties;
  /**
   * This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB
   *
   */
  supportsGptLabel?: boolean;
  /**
   * list of all language available for this template
   *
   */
  availableLanguages?: DedicatedTemplateOsLanguageEnum[];
  /**
   * is this distribution deprecated
   *
   */
  deprecated?: boolean;
  /**
   * information about this template
   *
   */
  description?: string;
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
   * the distribution this template is based on
   *
   */
  distribution?: string;
  /**
   * list of all filesystems  available for this template
   *
   */
  filesystems?: DedicatedTemplateOsFileSystemEnum[];
  /**
   * This distribution supports Logical Volumes (Linux LVM)
   *
   */
  lvmReady?: boolean;
  /**
   * This distribution supports RTM software
   *
   */
  supportsRTM?: boolean;
  /**
   * This distribution supports hardware raid configuration through the OVH API
   *
   */
  hardRaidConfiguration?: boolean;
  /**
   * the default language of this template
   *
   */
  defaultLanguage?: DedicatedTemplateOsLanguageEnum;
  /**
   * This template name
   *
   */
  templateName?: string;
  /**
   * Date of last modification of the base image
   *
   */
  lastModification?: Date;
  /**
   * This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel
   *
   */
  supportsDistributionKernel?: boolean;
  /**
   * category of this template (informative only)
   *
   */
  category?: DedicatedTemplateOsUsageEnum;
  /**
   * this template family type
   *
   */
  family?: DedicatedTemplateOsTypeEnum;
  /**
   * This distribution is new, and although tested and functional, may still display odd behaviour
   *
   */
  beta?: boolean;
}
/**
 * Hardware RAID defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateHardwareRaid {
  /**
   * RAID mode
   *
   */
  mode?: DedicatedTemplateOsHardwareRaidEnum;
  /**
   * Disk list
   *
   */
  disks?: string[];
  /**
   * Hardware RAID name
   *
   */
  name?: string;
  /**
   * Specifies the creation order of the hardware RAID
   *
   */
  step?: Number;
}
/**
 * A structure describing properties customizables about this dedicated installation template
 */
export interface DedicatedTemplateOsProperties {
  /**
   * Name of the ssh key that should be installed. Password login will be disabled
   *
   */
  sshKeyName?: string;
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
   * Set up the server using the provided hostname instead of the default hostname
   *
   */
  customHostname?: string;
  /**
   */
  rating?: Number;
  /**
   * Template change log details
   *
   */
  changeLog?: string;
  /**
   * Use the distribution's native kernel instead of the recommended OVH Kernel
   *
   */
  useDistributionKernel?: boolean;
}
/**
 * Hardware RAID enum
 */
export type DedicatedTemplateOsHardwareRaidEnum = 'raid0' | 'raid1' | 'raid10' | 'raid5' | 'raid50' | 'raid6' | 'raid60';
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
/**
 * partition raid type
 */
export type DedicatedServerPartitionRaidEnum = '0' | '1' | '10' | '5' | '6';
/**
 * supports UEFI setup
 */
export type DedicatedServerSupportsUEFIEnum = 'no' | 'only' | 'yes';
/**
 * Os usage definition
 */
export type DedicatedTemplateOsUsageEnum = 'basic' | 'customer' | 'hosting' | 'other' | 'readyToUse' | 'virtualisation';
type PathsdedicatedinstallationTemplateGET = '/dedicated/installationTemplate' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/dedicated/installationTemplate/{templateName}';

class ApidedicatedinstallationTemplate extends ApiCommon {
  /**
  List the dedicated.installationTemplate.Templates objects
  OVH operating system installation templates
  **/
  public get(path: '/dedicated/installationTemplate', pathParams: null, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Partitioning schemes available on this template
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme', pathParams: {templateName?: string}, queryParams: null): Promise<string[]>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Partitions defined in this partitioning scheme
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', pathParams: {templateName?: string, schemeName?: string}, queryParams: null): Promise<string[]>;
  /**
   Partitions defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', pathParams: {templateName?: string, schemeName?: string, mountpoint?: string}, queryParams: null): Promise<DedicatedInstallationTemplateTemplatePartitions>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Hardware RAIDs defined in this partitioning scheme
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', pathParams: {templateName?: string, schemeName?: string}, queryParams: null): Promise<string[]>;
  /**
  Hardware RAID defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', pathParams: {templateName?: string, schemeName?: string, name?: string}, queryParams: null): Promise<DedicatedInstallationTemplateHardwareRaid>;
  /**
  Partitioning schemes available on this template
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}', pathParams: {templateName?: string, schemeName?: string}, queryParams: null): Promise<DedicatedInstallationTemplateTemplatePartitioningSchemes>;
  /**
  Available installation templates
  Get this object properties
  **/
  public get(path: '/dedicated/installationTemplate/{templateName}', pathParams: {templateName?: string}, queryParams: null): Promise<DedicatedInstallationTemplateTemplates>;
  public get(path: PathsdedicatedinstallationTemplateGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
}
