
export interface IEndpoint {
    host: string;
    directory: string;
    namespace: string;
    port: number;
}

export const endpoints: { [key: string]: IEndpoint } = {
    'ovh-eu': { host: 'eu.api.ovh.com', directory: 'packages', namespace: 'ovh-api', port: 443 },
    'ovh-us': { host: 'api.us.ovhcloud.com', directory: 'packages-us', namespace: 'ovh-api-us', port: 443 },
    'ovh-ca': { host: 'ca.api.ovh.com', directory: 'packages-ca', namespace: 'ovh-api-ca', port: 443 },
    // 'runabove-ca': { host: 'api.runabove.com', directory: 'runabove-ca', namespace: 'ovh-runabove-ca', port: 443 },
    'soyoustart-eu': { host: 'eu.api.soyoustart.com', directory: 'soyoustart', namespace: 'ovh-soyoustart', port: 443 },
    'soyoustart-ca': { host: 'ca.api.soyoustart.com', directory: 'soyoustart-ca', namespace: 'ovh-soyoustart-ca', port: 443 },
    'kimsufi-eu': { host: 'eu.api.kimsufi.com', directory: 'kimsufi', namespace: 'ovh-kimsufi', port: 443 },
    'kimsufi-ca': { host: 'ca.api.kimsufi.com', directory: 'kimsufi-ca', namespace: 'ovh-kimsufi-ca', port: 443 },
};

// export { endpoints }