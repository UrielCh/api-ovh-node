import { ApiCommon } from '@ovh-api/common';
/**
 * Information about installed package for a given image
 */
export interface DistributionImage {
  /**
   * The image name
   *
   */
  name?: string;
  /**
   * Packages informations
   *
   */
  packages?: DistributionImagePackage[];
  /**
   * Image properties
   *
   */
  properties?: DistributionImageProperties;
  /**
   * The service type name
   *
   */
  service?: DistributionImageService;
}
/**
 * An image package description
 */
export interface DistributionImagePackage {
  /**
   * Package alias
   *
   */
  alias?: string;
  /**
   * Package name
   *
   */
  name?: string;
  /**
   * Package version
   *
   */
  version?: string;
}
/**
 * Description not available
 */
export interface DistributionImageProperties {
  /**
   * The image category
   *
   */
  category?: DistributionImagePropertiesCategory;
}
/**
 * Description not available
 */
export type DistributionImagePropertiesCategory = 'bare' | 'cms' | 'desktop' | 'development' | 'none' | 'panel';
/**
 * Description not available
 */
export type DistributionImageService = 'cloud' | 'dedicated' | 'dedicatedCloud' | 'vps';
type PathsDistributionImageGET = '/distribution/image/{serviceType}/{imageName}' | 
'/distribution/image/{serviceType}';

export class ApiDistributionImage extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Missing description
  Show image details
  **/
  public get(path: '/distribution/image/{serviceType}/{imageName}', pathParams: {serviceType: DistributionImageService, imageName: string}): Promise<DistributionImage>;
  /**
  Missing description
  List images for a service
  **/
  public get(path: '/distribution/image/{serviceType}', pathParams: {serviceType: DistributionImageService}): Promise<string[]>;
  public get(path: PathsDistributionImageGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
}
