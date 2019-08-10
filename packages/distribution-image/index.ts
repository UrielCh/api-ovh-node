import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /distribution/image Models
 */
export namespace distribution {
    // interface fullName: distribution.image.image
    export interface image {
        name: string;
        packages: distributionimagepakage[];
        properties: distributionimageproperties;
        service: distributionimageservice;
    }
    export namespace image {
        // interface fullName: distribution.image.package.pakage
        export interface pakage {
            alias: string;
            name: string;
            version: string;
        }
        // interface fullName: distribution.image.properties.properties
        export interface properties {
            category: distributionimagepropertiescategory;
        }
        export namespace properties {
            // type fullname: distribution.image.properties.category
            export type category = "none" | "bare" | "panel" | "cms" | "development" | "desktop"
        }
        // type fullname: distribution.image.service
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
  get(path: '/distribution/image/{serviceType}'): (params: {serviceType: distributionimageservice}) => Promise<string[]>;
  /**
   * Missing description
   * Show image details
   */
  get(path: '/distribution/image/{serviceType}/{imageName}'): (params: {imageName: string, serviceType: distributionimageservice}) => Promise<distribution.image>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type distributionimagepakage = distribution.image.pakage;
type distributionimageproperties = distribution.image.properties;
type distributionimageservice = distribution.image.service;
type distributionimagepropertiescategory = distribution.image.properties.category;
