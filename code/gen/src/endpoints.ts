
export interface IEndpoint {
    host: string;
    directory: string;
    namespace: string;
    port: number;
    region: 'Europe' | 'USA' | 'Canada';
}

export const endpoints: { [key: string]: IEndpoint } = {
    'ovh-eu': { host: 'eu.api.ovh.com', directory: 'packages-eu', namespace: 'ovh-api', port: 443, region: 'Europe' },
    'ovh-us': { host: 'api.us.ovhcloud.com', directory: 'packages-us', namespace: 'ovh-api-us', port: 443, region: 'USA' },
    'ovh-ca': { host: 'ca.api.ovh.com', directory: 'packages-ca', namespace: 'ovh-api-ca', port: 443, region: 'Canada' },
    // 'runabove-ca': { host: 'api.runabove.com', directory: 'runabove-ca', namespace: 'ovh-runabove-ca', port: 443, region: 'Canada' },
    'soyoustart-eu': { host: 'eu.api.soyoustart.com', directory: 'soyoustart-eu', namespace: 'ovh-soyoustart', port: 443, region: 'Europe' },
    'soyoustart-ca': { host: 'ca.api.soyoustart.com', directory: 'soyoustart-ca', namespace: 'ovh-soyoustart-ca', port: 443, region: 'Canada' },
    'kimsufi-eu': { host: 'eu.api.kimsufi.com', directory: 'kimsufi-eu', namespace: 'ovh-kimsufi', port: 443, region: 'Europe' },
    'kimsufi-ca': { host: 'ca.api.kimsufi.com', directory: 'kimsufi-ca', namespace: 'ovh-kimsufi-ca', port: 443, region: 'Canada' },
};

// export { endpoints }