import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /distribution/image Models
 */
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

/**
 * END API /distribution/image Models
 */
export function proxyDistributionImage(ovhEngine: OvhRequestable): Distribution {
    return buildOvhProxy(ovhEngine, '/distribution');
}
export default proxyDistributionImage;
/**
 * Api Proxy model
 */// Apis harmony
// path /distribution
export interface Distribution{
    image: {
        $(serviceType: distribution.image.service): {
            // GET /distribution/image/{serviceType}
            $get(): Promise<string[]>;
            $(imageName: string): {
                // GET /distribution/image/{serviceType}/{imageName}
                $get(): Promise<distribution.image>;
            };
        };
    }
// Api
  /**
   * Missing description
   * List images for a service
   */
  get(path: '/distribution/image/{serviceType}'): (params: {serviceType: distribution.image.service}) => Promise<string[]>;
  /**
   * Missing description
   * Show image details
   */
  get(path: '/distribution/image/{serviceType}/{imageName}'): (params: {imageName: string, serviceType: distribution.image.service}) => Promise<distribution.image>;
}
/**
 * classic Model
 */