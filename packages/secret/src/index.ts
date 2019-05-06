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
type PathssecretPOST = '/secret/retrieve';

class Apisecret extends ApiCommon {
  /**
  Retrieve a secret sent by email
  Retrieve a secret sent by email
  **/
  public post(path: '/secret/retrieve', pathParams: null, bodyParams: null): Promise<SecretSecret>;
  public post(path: PathssecretPOST, pathParams?: any, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
}
