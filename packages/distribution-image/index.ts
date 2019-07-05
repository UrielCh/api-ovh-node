import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace distribution {
    //distribution.image
    // fullName: distribution.image.image
    export interface image {
        name: string;
        packages: distribution.image.pakage[];
        properties: distribution.image.properties;
        service: distribution.image.service;
    }
    export namespace image {
        //distribution.image.package
        // fullName: distribution.image.package.pakage
        export interface pakage {
            alias: string;
            name: string;
            version: string;
        }
        //distribution.image.properties
        // fullName: distribution.image.properties.properties
        export interface properties {
            category: distribution.image.properties.category;
        }
        export namespace properties {
            //distribution.image.properties.category
            export type category = "none" | "bare" | "panel" | "cms" | "development" | "desktop"
        }
        //distribution.image.service
        export type service = "vps" | "dedicated" | "cloud" | "dedicatedCloud"
    }
}
// Apis harmony
// path /distribution
export interface Distribution{
    image: {
        [keys: string]:{
            // GET /distribution/image/{serviceType}
            $get(): Promise<string[]>;
            [keys: string]:{
                // GET /distribution/image/{serviceType}/{imageName}
                $get(): Promise<distribution.image>;
            } | any
        } | any
    }
}
// Api
type PathsDistributionImageGET = '/distribution/image/{serviceType}' |
  '/distribution/image/{serviceType}/{imageName}';

export class ApiDistributionImage extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Missing description
   * List images for a service
   */
  public get(path: '/distribution/image/{serviceType}', params: {serviceType: distribution.image.service}): Promise<string[]>;
  /**
   * Missing description
   * Show image details
   */
  public get(path: '/distribution/image/{serviceType}/{imageName}', params: {imageName: string, serviceType: distribution.image.service}): Promise<distribution.image>;
  public get(path: PathsDistributionImageGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
}
export default ApiDistributionImage;
