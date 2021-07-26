import { OvhCredential, OvhCredentialNew } from "./OVHInterfaces";
import OvhApi from ".";

export interface CertMonitor {
    notValid(errorCode: string, pass: number): Promise<any>;
    validated(cert: OvhCredential): Promise<any>;
}

export type CertMonitorProvider = (ovhApi: OvhApi, credential: OvhCredentialNew) => CertMonitor;

export const stdOutCertMonitorProvider: CertMonitorProvider = (ovhApi: OvhApi, credential: OvhCredentialNew) => {
    const { validationUrl, consumerKey } = credential;
    let extra = '';
    let extra2 = '';
    if (ovhApi.nichandle) {
        extra = ` for ${ovhApi.nichandle}`;
        extra2 = `${ovhApi.nichandle} `;
    }
    console.log(`[OVH] MISSING_CREDENTIAL issue a new one: ${consumerKey}${extra}\nValidate ${extra2}certificate with this url to continue:\n${validationUrl}`)
    return {
        notValid: async (errorCode: string, pass: number) => {
            // errorCode:"INVALID_CREDENTIAL"
            // httpCode:"403 Forbidden"
            // message:"This credential is not valid"
            if (pass % 15 == 0) {
                if (errorCode === 'MISSING_CREDENTIAL') {
                    console.log(`Waiting for credential validation${extra} here: ${validationUrl}`);
                } else {
                    console.log(`\nUnexpected error "${errorCode}" expecting "MISSING_CREDENTIAL", consumerKey:${consumerKey}${extra} url:\n${validationUrl}`);
                }
            }
        },
        validated: async (status: OvhCredential) => {
            console.log('consumerKey Authorized!')
        }
    }
}
