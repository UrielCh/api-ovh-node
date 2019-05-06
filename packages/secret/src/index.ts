import { ApiCommon } from '@ovh-api/common';
/**
 * A secret
 */
export interface SecretSecret {
  /**
   * Expiration time of the secret
   *
   */
  expiration?: Date;
  /**
   * The secret
   *
   */
  secret?: string;
}
type PathsSecretPOST = '/secret/retrieve';

export class ApiSecret extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Retrieve a secret sent by email
  Retrieve a secret sent by email
  **/
  public post(path: '/secret/retrieve'): Promise<SecretSecret>;
  public post(path: PathsSecretPOST, pathParams?: { [key:string]:string; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
