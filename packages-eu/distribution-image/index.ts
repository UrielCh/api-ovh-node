import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /distribution/image Models
 * Source: https://eu.api.ovh.com/1.0/distribution/image.json
 */
export namespace distribution {
    // interface fullName: distribution.image.image
    export interface image {
        name: string;
        packages: distribution.image.pakage[];
        properties: distribution.image.properties;
        service: distribution.image.service;
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
            category: distribution.image.properties.category;
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
export interface Distribution {
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
}
