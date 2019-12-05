import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /distribution/image Models
 */
export declare namespace distribution {
    interface image {
        name: string;
        packages: distribution.image.pakage[];
        properties: distribution.image.properties;
        service: distribution.image.service;
    }
    namespace image {
        interface pakage {
            alias: string;
            name: string;
            version: string;
        }
        interface properties {
            category: distribution.image.properties.category;
        }
        namespace properties {
            type category = "none" | "bare" | "panel" | "cms" | "development" | "desktop";
        }
        type service = "vps" | "dedicated" | "cloud" | "dedicatedCloud";
    }
}
/**
 * END API /distribution/image Models
 */
export declare function proxyDistributionImage(ovhEngine: OvhRequestable): Distribution;
export default proxyDistributionImage;
/**
 * Api Proxy model
 */ export interface Distribution {
    image: {
        $(serviceType: distribution.image.service): {
            $get(): Promise<string[]>;
            $(imageName: string): {
                $get(): Promise<distribution.image>;
            };
        };
    };
    /**
     * Missing description
     * List images for a service
     */
    get(path: '/distribution/image/{serviceType}'): (params: {
        serviceType: distribution.image.service;
    }) => Promise<string[]>;
    /**
     * Missing description
     * Show image details
     */
    get(path: '/distribution/image/{serviceType}/{imageName}'): (params: {
        imageName: string;
        serviceType: distribution.image.service;
    }) => Promise<distribution.image>;
}
