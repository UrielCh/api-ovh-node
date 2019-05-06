import { ApiCommon } from '@ovh-api/common';
/**
 * A task linked to one of your services
 */
export interface StatusTask {
  /**
   * The end date of the task
   *
   */
  endDate?: Date;
  /**
   * The impact of the task
   *
   */
  impact?: OvhstatusTaskTaskImpactEnum;
  /**
   * The project of task
   *
   */
  project?: string;
  /**
   * Your impacted service linked to the task
   *
   */
  impactedService?: string;
  /**
   * The type of the task
   *
   */
  type?: OvhstatusTaskTaskTypeEnum;
  /**
   * The title of the task
   *
   */
  title?: string;
  /**
   * The task uuid
   *
   */
  uuid?: string;
  /**
   * The reference of the task
   *
   */
  reference?: string;
  /**
   * The replies of the task
   *
   */
  replies?: StatusReply[];
  /**
   * The task progression from 0 to 100
   *
   */
  progress?: Number;
  /**
   * The category of the task
   *
   */
  category?: string;
  /**
   * The start date of the task
   *
   */
  startDate?: Date;
  /**
   * The status of the task
   *
   */
  status?: OvhstatusTaskTaskStatusEnum;
}
/**
 * A reply is useful to know the progress of a task
 */
export interface StatusReply {
  /**
   * The date of the reply
   *
   */
  date?: Date;
  /**
   * The comment of the reply
   *
   */
  comment?: string;
}
/**
 * Description not available
 */
export type OvhstatusTaskTaskImpactEnum = 'partialUnavailability' | 'fullUnavailability' | 'downtime' | 'none' | 'unknown';
/**
 * Description not available
 */
export type OvhstatusTaskTaskTypeEnum = 'incident' | 'maintenance' | 'upgrade';
/**
 * Description not available
 */
export type OvhstatusTaskTaskStatusEnum = 'planned' | 'inProgress' | 'finished';
type PathsstatusGET = '/status/task';

class Apistatus extends ApiCommon {
  /**
  API to get incidents or maintenances linked to nichandle services
  Find all the incidents or maintenances linked to your services
  **/
  public get(path: '/status/task', pathParams: null, queryParams: {impact?: OvhstatusTaskTaskImpactEnum, status?: OvhstatusTaskTaskStatusEnum, type?: OvhstatusTaskTaskTypeEnum}): Promise<StatusTask[]>;
  public get(path: PathsstatusGET, pathParams?: any, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
}
