import { ApiCommon } from '@ovh-api/common';
/**
 * Description not available
 */
export type OvhstatusTaskTaskImpactEnum = 'partialUnavailability' | 'fullUnavailability' | 'downtime' | 'none' | 'unknown';
/**
 * Description not available
 */
export type OvhstatusTaskTaskStatusEnum = 'planned' | 'inProgress' | 'finished';
/**
 * Description not available
 */
export type OvhstatusTaskTaskTypeEnum = 'incident' | 'maintenance' | 'upgrade';
/**
 * A reply is useful to know the progress of a task
 */
export interface StatusReply {
  /**
   * The comment of the reply
   *
   */
  comment?: string;
  /**
   * The date of the reply
   *
   */
  date?: Date;
}
/**
 * A task linked to one of your services
 */
export interface StatusTask {
  /**
   * The category of the task
   *
   */
  category?: string;
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
   * Your impacted service linked to the task
   *
   */
  impactedService?: string;
  /**
   * The task progression from 0 to 100
   *
   */
  progress?: Number;
  /**
   * The project of task
   *
   */
  project?: string;
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
   * The start date of the task
   *
   */
  startDate?: Date;
  /**
   * The status of the task
   *
   */
  status?: OvhstatusTaskTaskStatusEnum;
  /**
   * The title of the task
   *
   */
  title?: string;
  /**
   * The type of the task
   *
   */
  type?: OvhstatusTaskTaskTypeEnum;
  /**
   * The task uuid
   *
   */
  uuid?: string;
}
type PathsStatusGET = '/status/task';

export class ApiStatus extends ApiCommon {
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  API to get incidents or maintenances linked to nichandle services
  Find all the incidents or maintenances linked to your services
  **/
  public get(path: '/status/task', pathParams: null, queryParams: {impact?: OvhstatusTaskTaskImpactEnum, status?: OvhstatusTaskTaskStatusEnum, type?: OvhstatusTaskTaskTypeEnum}): Promise<StatusTask[]>;
  public get(path: PathsStatusGET, pathParams?: { [key:string]:string; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
}
