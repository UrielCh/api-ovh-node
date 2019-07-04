import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace OVH {
export namespace distribution {
    //distribution.image
    // fullName: distribution.image.image
    export interface image {
        name?: string;
        packages?: OVH.distribution.image.pakage[];
        properties?: OVH.distribution.image.properties;
        service?: OVH.distribution.image.service;
    }
    export namespace image {
        //distribution.image.package
        // fullName: distribution.image.package.pakage
        export interface pakage {
            alias?: string;
            name?: string;
            version?: string;
        }
        //distribution.image.properties
        // fullName: distribution.image.properties.properties
        export interface properties {
            category?: OVH.distribution.image.properties.category;
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
export interface Distribution {
    image:  {
        [keys: string]: {
            // GET /distribution/image/{serviceType}
            GET(): Promise<string[]>;
            [keys: string]: {
                // GET /distribution/image/{serviceType}/{imageName}
                GET(): Promise<distribution.image>;
            } | any
        } | any
    }
}
// Api
type PathsDistributionImageGET = '/distribution/image/{serviceType}/{imageName}' |
  '/distribution/image/{serviceType}';

export class ApiDistributionImage extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * Missing description
   * List images for a service
   */
  public get(path: '/distribution/image/{serviceType}', params: {serviceType: string}): Promise<string[]>;
  /**
   * Missing description
   * Show image details
   */
  public get(path: '/distribution/image/{serviceType}/{imageName}', params: {serviceType: string, imageName: string}): Promise<distribution.image>;
  public get(path: PathsDistributionImageGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
}
}