export type { CertMonitorProvider, CertMonitor } from './certMonitor.js';
export type { OvhCredential, OvhCredentialNew, AccessRule, CredentialStateEnum } from "./OVHInterfaces.js";
export type { OvhParams } from './OvhParams.js';
export { type IOvhError, OvhError } from './OvhError.js';
import OvhApi from './OvhApi.js';

export default OvhApi;
