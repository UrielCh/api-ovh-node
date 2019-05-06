import { ApiCommon } from '@ovh-api/common';
/**
 * The new framework password
 */
export interface DockerFrameworkPassword {
  /**
   * The new framework password
   *
   */
  password?: string;
}
/**
 * A host on which containers can be deployed
 */
export interface DockerSlave {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The framework UUID
   *
   */
  flavorId?: string;
  /**
   * The slave UUID
   *
   */
  id?: string;
  /**
   * Metrics about slave usage
   *
   */
  metrics?: DockerSlaveMetrics;
  /**
   * The slave hostname
   *
   */
  name?: string;
  /**
   * The region where the slave is located
   *
   */
  region?: string;
  /**
   * The stack to which the slave belongs
   *
   */
  stack?: string;
  /**
   * The state of the slave
   *
   */
  state?: DockerSlaveStatus;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
}
/**
 * Attributes of the slave flavor
 */
export interface DockerSlaveFlavor {
  /**
   * The network bandwidth, in Mbps
   *
   */
  bandwidth?: Number;
  /**
   * The amount of (v)CPUs
   *
   */
  cpus?: Number;
  /**
   * The disk size, in GB
   *
   */
  disk?: Number;
  /**
   * Wether the disk is HA (stored in Ceph) or local (SSD)
   *
   */
  diskHa?: boolean;
  /**
   * The flavor UUID
   *
   */
  id?: string;
  /**
   * Whether the flavor is an Openstack or dedicated flavor
   *
   */
  isVm?: boolean;
  /**
   * The amount of RAM, in MB
   *
   */
  ram?: Number;
}
/**
 * Application data
 */
export interface DockerSlaveFrameworkApp {
  /**
   * Application CPU
   *
   */
  cpu?: Number;
  /**
   * Application environment
   *
   */
  env?: DockerSlaveFrameworkAppEnvironment[];
  /**
   * Application id
   *
   */
  id?: string;
  /**
   * Application image
   *
   */
  image?: string;
  /**
   * Number of running containers instances
   *
   */
  instances?: Number;
  /**
   * Application memory
   *
   */
  mem?: Number;
  /**
   * Application ports
   *
   */
  ports?: DockerSlaveFrameworkAppPort[];
  /**
   * Application status
   *
   */
  status?: string;
  /**
   * Application volumes
   *
   */
  volumes?: DockerSlaveFrameworkAppVolume[];
}
/**
 * Application environment variable
 */
export interface DockerSlaveFrameworkAppEnvironment {
  /**
   * variable key
   *
   */
  key?: string;
  /**
   * variable value
   *
   */
  value?: string;
}
/**
 * Application ports
 */
export interface DockerSlaveFrameworkAppPort {
  /**
   * Container port
   *
   */
  containerPort?: Number;
  /**
   * Host port
   *
   */
  hostPort?: Number;
  /**
   * Port protocol
   *
   */
  protocol?: string;
}
/**
 * Application volumes
 */
export interface DockerSlaveFrameworkAppVolume {
  /**
   * Container path
   *
   */
  containerPath?: Number;
  /**
   * Host path
   *
   */
  hostPath?: Number;
  /**
   * Volume mode
   *
   */
  mode?: string;
}
/**
 * Metrics about slave usage
 */
export interface DockerSlaveMetrics {
  /**
   * Metrics about available slave resources
   *
   */
  resources?: DockerSlaveMetricsResources;
  /**
   * Metrics about used slave resources
   *
   */
  usedResources?: DockerSlaveMetricsUsedResources;
}
/**
 * Metrics about available slave resources
 */
export interface DockerSlaveMetricsResources {
  /**
   * Available CPU
   *
   */
  cpu?: Number;
  /**
   * Available memory
   *
   */
  mem?: Number;
}
/**
 * Metrics about used slave resources
 */
export interface DockerSlaveMetricsUsedResources {
  /**
   * Used CPU
   *
   */
  cpu?: Number;
  /**
   * Used memory
   *
   */
  mem?: Number;
}
/**
 * The state of the slave
 */
export type DockerSlaveStatus = 'blocked' | 'created' | 'creating';
/**
 * An isolated client Docker PaaS environment
 */
export interface DockerStack {
  /**
   * The cluster on which the stack is deployed
   *
   */
  cluster?: string;
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The DNS address of the stack load balancer
   *
   */
  loadBalancer?: string;
  /**
   * Metrics about slave usage
   *
   */
  metrics?: DockerSlaveMetrics;
  /**
   * The stack name
   *
   */
  name?: string;
  /**
   * A list of slave UUIDs
   *
   */
  slaves?: string[];
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
}
/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerStackCustomSsl {
  /**
   * The custom SSL public certificate
   *
   */
  certificate?: string;
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
}
/**
 * Action validation message
 */
export interface DockerStackCustomSslMessage {
  /**
   * The action validation message
   *
   */
  message?: string;
}
/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerStackInputCustomSsl {
  /**
   * The custom SSL public certificate
   *
   */
  certificate?: string;
  /**
   * The custom SSL certificate private key
   *
   */
  key?: string;
}
/**
 * Credentials providing authentication to an external registry
 */
export interface DockerStackRegistryCredentials {
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The URL of the registry
   *
   */
  registryUrl?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
  /**
   * The registry account username
   *
   */
  username?: string;
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  /**
   * The service is automatically renewed
   *
   */
  automatic?: boolean;
  /**
   * The service will be deleted at expiration
   *
   */
  deleteAtExpiration?: boolean;
  /**
   * The service forced to be renewed
   *
   */
  forced?: boolean;
  /**
   * The service needs to be manually renewed and paid
   *
   */
  manualPayment?: boolean;
  /**
   * period of renew in month
   *
   */
  period?: Number;
}
/**
 * Detailed renewal type of a service
 */
export type ServiceRenewalTypeEnum = 'automaticForcedProduct' | 'automaticV2012' | 'automaticV2014' | 'automaticV2016' | 'manual' | 'oneShot' | 'option';
/**
 * 
 */
export type ServiceStateEnum = 'expired' | 'inCreation' | 'ok' | 'pendingDebt' | 'unPaid';
/**
 * Details about a Service
 */
export interface ServicesService {
  /**
   * Indicates that the service can be set up to be deleted at expiration
   *
   */
  canDeleteAtExpiration?: boolean;
  /**
   */
  contactAdmin?: string;
  /**
   */
  contactBilling?: string;
  /**
   */
  contactTech?: string;
  /**
   */
  creation?: string;
  /**
   */
  domain?: string;
  /**
   */
  engagedUpTo?: string;
  /**
   */
  expiration?: string;
  /**
   * All the possible renew period of your service in month
   *
   */
  possibleRenewPeriod?: Number[];
  /**
   * Way of handling the renew
   *
   */
  renew?: ServiceRenewType;
  /**
   */
  renewalType?: ServiceRenewalTypeEnum;
  /**
   */
  serviceId?: Number;
  /**
   */
  status?: ServiceStateEnum;
}
/**
 * A framework installed for a docker PaaS stack
 */
export interface StackFramework {
  /**
   * The framework name
   *
   */
  accessUrl?: string;
  /**
   * Date of the resource creation
   *
   */
  createdAt?: string;
  /**
   * The framework UUID
   *
   */
  id?: string;
  /**
   * The framework name
   *
   */
  name?: string;
  /**
   * Date of the resource last update
   *
   */
  updatedAt?: string;
}
/**
 * Application deployed on the framework
 */
export interface StackFrameworkApplication {
  /**
   * Application list
   *
   */
  apps?: DockerSlaveFrameworkApp[];
}
type PathsCaasContainersGET = '/caas/containers/{serviceName}/availableFrameworks' | 
'/caas/containers/{serviceName}/frameworks/{frameworkId}' | 
'/caas/containers/{serviceName}/frameworks/{frameworkId}/apps' | 
'/caas/containers/{serviceName}/frameworks' | 
'/caas/containers/{serviceName}/serviceInfos' | 
'/caas/containers/{serviceName}/registry/credentials/{credentialsId}' | 
'/caas/containers/{serviceName}/registry/credentials' | 
'/caas/containers/{serviceName}/ssl' | 
'/caas/containers/{serviceName}' | 
'/caas/containers/{serviceName}/slaves' | 
'/caas/containers/{serviceName}/slaves/{slaveId}' | 
'/caas/containers' | 
'/caas/containers/slaves/flavors/{flavorId}' | 
'/caas/containers/slaves/flavors';

type PathsCaasContainersPUT = '/caas/containers/{serviceName}/frameworks/{frameworkId}/password' | 
'/caas/containers/{serviceName}/serviceInfos' | 
'/caas/containers/{serviceName}/registry/credentials/{credentialsId}' | 
'/caas/containers/{serviceName}/ssl';

type PathsCaasContainersPOST = '/caas/containers/{serviceName}/registry/credentials' | 
'/caas/containers/{serviceName}/changeContact';

type PathsCaasContainersDELETE = '/caas/containers/{serviceName}/registry/credentials/{credentialsId}' | 
'/caas/containers/{serviceName}/ssl';

export class ApiCaasContainers extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  Missing description
  List all the installable Mesos frameworks
  **/
  public get(path: '/caas/containers/{serviceName}/availableFrameworks', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect the stack framework
  **/
  public get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}', pathParams: {frameworkId: string, serviceName: string}): Promise<StackFramework>;
  /**
  Missing description
  List apps in the framework
  **/
  public get(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/apps', pathParams: {frameworkId: string, serviceName: string}): Promise<StackFrameworkApplication>;
  /**
  Missing description
  List the frameworks installed on the argument stack
  **/
  public get(path: '/caas/containers/{serviceName}/frameworks', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Details about a Service
  Get this object properties
  **/
  public get(path: '/caas/containers/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<ServicesService>;
  /**
  Missing description
  Inspect the image registry credentials associated to the stack
  **/
  public get(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', pathParams: {credentialsId: string, serviceName: string}): Promise<DockerStackRegistryCredentials>;
  /**
  Missing description
  List the registry credentials associated to the stack.
  **/
  public get(path: '/caas/containers/{serviceName}/registry/credentials', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect the custom SSL certificate and private
  **/
  public get(path: '/caas/containers/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<DockerStackCustomSsl>;
  /**
  Missing description
  Inspect the argument stack
  **/
  public get(path: '/caas/containers/{serviceName}', pathParams: {serviceName: string}): Promise<DockerStack>;
  /**
  Missing description
  List the id of the registered slave instances
  **/
  public get(path: '/caas/containers/{serviceName}/slaves', pathParams: {serviceName: string}): Promise<string[]>;
  /**
  Missing description
  Inspect the argument user slave instance
  **/
  public get(path: '/caas/containers/{serviceName}/slaves/{slaveId}', pathParams: {slaveId: string, serviceName: string}): Promise<DockerSlave>;
  /**
  Operations about the DOCKER service
  List available services
  **/
  public get(path: '/caas/containers'): Promise<string[]>;
  /**
  Missing description
  Inspect the argument slave flavor
  **/
  public get(path: '/caas/containers/slaves/flavors/{flavorId}', pathParams: {flavorId: string}): Promise<DockerSlaveFlavor>;
  /**
  Missing description
  List the /cloud flavors available for the Docker PaaS slaves
  **/
  public get(path: '/caas/containers/slaves/flavors'): Promise<string[]>;
  public get(path: PathsCaasContainersGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  Missing description
  Update the framework access password
  **/
  public put(path: '/caas/containers/{serviceName}/frameworks/{frameworkId}/password', pathParams: {frameworkId: string, serviceName: string}): Promise<void>;
  /**
  Details about a Service
  Alter this object properties
  **/
  public put(path: '/caas/containers/{serviceName}/serviceInfos', pathParams: {serviceName: string}): Promise<void>;
  /**
  Missing description
  Update the registry credentials.
  **/
  public put(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', pathParams: {credentialsId: string, serviceName: string}): Promise<DockerStackRegistryCredentials>;
  /**
  Missing description
  Update the custom SSL certificate and private
  **/
  public put(path: '/caas/containers/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<DockerStackCustomSslMessage>;
  public put(path: PathsCaasContainersPUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  Missing description
  Associate the stack with some credentials to an authenticated registry.
  **/
  public post(path: '/caas/containers/{serviceName}/registry/credentials', pathParams: {serviceName: string}): Promise<DockerStackRegistryCredentials>;
  /**
  Change the contacts of this service
  Launch a contact change procedure
  **/
  public post(path: '/caas/containers/{serviceName}/changeContact', pathParams: {serviceName: string}): Promise<Number[]>;
  public post(path: PathsCaasContainersPOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Missing description
  Delete the registry credentials.
  **/
  public delete(path: '/caas/containers/{serviceName}/registry/credentials/{credentialsId}', pathParams: {credentialsId: string, serviceName: string}): Promise<void>;
  /**
  Missing description
  Delete the custom SSL certificate and private key associated to the stack
  **/
  public delete(path: '/caas/containers/{serviceName}/ssl', pathParams: {serviceName: string}): Promise<DockerStackCustomSslMessage>;
  public delete(path: PathsCaasContainersDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
