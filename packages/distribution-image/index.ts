import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * Information about installed package for a given image
 */
export interface DistributionImage {
  /**
   * The image name
   *
   */
  name: string;
  /**
   * Packages informations
   *
   */
  packages: DistributionImagePackage[];
  /**
   * Image properties
   *
   */
  properties: DistributionImageProperties;
  /**
   * The service type name
   *
   */
  service: DistributionImageService;
}
/**
 * An image package description
 */
export interface DistributionImagePackage {
  /**
   * Package alias
   *
   */
  alias: string;
  /**
   * Package name
   *
   */
  name: string;
  /**
   * Package version
   *
   */
  version: string;
}
/**
 * Description not available
 */
export interface DistributionImageProperties {
  /**
   * The image category
   *
   */
  category: DistributionImagePropertiesCategory;
}
/**
 * Description not available
 */
export type DistributionImagePropertiesCategory = 'bare' | 'cms' | 'desktop' | 'development' | 'none' | 'panel';
/**
 * Description not available
 */
export type DistributionImageService = 'cloud' | 'dedicated' | 'dedicatedCloud' | 'vps';
type PathsDistributionImageGET = '/distribution/image/{serviceType}' | 
'/distribution/image/{serviceType}/{imageName}';

export class ApiDistributionImage extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Missing description
  List images for a service
  **/
  public get(path: '/distribution/image/{serviceType}', params: {serviceType: DistributionImageService}): Promise<string[]>;
  /**
  Missing description
  Show image details
  **/
  public get(path: '/distribution/image/{serviceType}/{imageName}', params: {serviceType: DistributionImageService, imageName: string}): Promise<DistributionImage>;
  public get(path: PathsDistributionImageGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
}
export default ApiDistributionImage;
