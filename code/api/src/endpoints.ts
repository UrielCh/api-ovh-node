
const endpoints: { [key: string]: { host: string, port?: number } } = {
    'ovh-eu': { host: 'eu.api.ovh.com' },
    'ovh-us': { host: 'api.us.ovhcloud.com' },
    'ovh-ca': { host: 'ca.api.ovh.com' },
    'runabove-ca': { host: 'api.runabove.com' },
    'sys-eu': { host: 'eu.api.soyoustart.com' },
    'sys-ca': { host: 'ca.api.soyoustart.com' },
    'soyoustart-eu': { host: 'eu.api.soyoustart.com' },
    'soyoustart-ca': { host: 'ca.api.soyoustart.com' },
    'ks-eu': { host: 'eu.api.kimsufi.com' },
    'ks-ca': { host: 'ca.api.kimsufi.com' },
    'kimsufi-eu': { host: 'eu.api.kimsufi.com' },
    'kimsufi-ca': { host: 'ca.api.kimsufi.com' },
};

export { endpoints }