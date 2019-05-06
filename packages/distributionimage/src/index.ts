import { ApiCommon } from '@ovh-api/common';
/**
 * Description not available
 */
export type DistributionImagePropertiesCategory = 'none' | 'bare' | 'panel' | 'cms' | 'development' | 'desktop';
/**
 * Information about installed package for a given image
 */
export interface DistributionImage {
  /**
   * The service type name
   *
   */
  service?: DistributionImageService;
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
export type DistributionImageService = 'vps' | 'dedicated' | 'cloud' | 'dedicatedCloud';
/**
 * An image package description
 */
export interface DistributionImagePackage {
  /**
   * Package name
   *
   */
  name?: string;
  /**
   * Package alias
   *
   */
  alias?: string;
  /**
   * Package version
   *
   */
  version?: string;
}
type PathsdistributionimageGET = '/distribution/image/{serviceType}/{imageName}' | 
'/distribution/image/{serviceType}';

class Apidistributionimage extends ApiCommon {
  /**
  Missing description
  Show image details
  **/
  public get(path: '/distribution/image/{serviceType}/{imageName}', pathParams: {serviceType?: DistributionImageService, imageName?: string}, queryParams: null): Promise<DistributionImage>;
  /**
  Missing description
  List images for a service
  **/
  public get(path: '/distribution/image/{serviceType}', pathParams: {serviceType?: DistributionImageService}, queryParams: null): Promise<string[]>;
  public get(path: PathsdistributionimageGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
}
