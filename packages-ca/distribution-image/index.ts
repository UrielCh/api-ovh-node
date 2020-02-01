import { buildOvhProxy, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /distribution/image Models
 * Source: https://ca.api.ovh.com/1.0/distribution/image.json
 */
export namespace distribution {
    /**
     * Information about installed package for a given image
     * interface fullName: distribution.image.image
     */
    export interface image {
        name: string;
        packages: distribution.image.pakage[];
        properties: distribution.image.properties;
        service: distribution.image.service;
    }
    export namespace image {
        /**
         * An image package description
         * interface fullName: distribution.image.package.pakage
         */
        export interface pakage {
            alias: string;
            name: string;
            version: string;
        }
        /**
         * Description not available
         * interface fullName: distribution.image.properties.properties
         */
        export interface properties {
            category: distribution.image.properties.category;
        }
        export namespace properties {
            /**
             * Description not available
             * type fullname: distribution.image.properties.category
             */
            export type category = "none" | "bare" | "panel" | "cms" | "development" | "desktop"
        }
        /**
         * Description not available
         * type fullname: distribution.image.service
         */
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
 * Api model for /distribution/image
 */
export interface Distribution {
    image: {
        $(serviceType: distribution.image.service): {
            /**
             * List images for a service
             * GET /distribution/image/{serviceType}
             */
            $get(): Promise<string[]>;
            /**
             * Controle cache
             */
            $cache(param?: ICacheOptions): Promise<any>;
            $(imageName: string): {
                /**
                 * Show image details
                 * GET /distribution/image/{serviceType}/{imageName}
                 */
                $get(): Promise<distribution.image>;
                /**
                 * Controle cache
                 */
                $cache(param?: ICacheOptions): Promise<any>;
            };
        };
    }
}
