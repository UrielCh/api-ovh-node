import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';

export namespace ovhstatus {
    export namespace task {
        //ovhstatus.task.TaskImpactEnum
        export type TaskImpactEnum = "partialUnavailability" | "fullUnavailability" | "downtime" | "none" | "unknown"
        //ovhstatus.task.TaskStatusEnum
        export type TaskStatusEnum = "planned" | "inProgress" | "finished"
        //ovhstatus.task.TaskTypeEnum
        export type TaskTypeEnum = "incident" | "maintenance" | "upgrade"
    }
}
export namespace status {
    export namespace Reply {
        //status.Reply.Reply
        // fullName: status.Reply.Reply.Reply
        export interface Reply {
            comment: string;
            date: string;
        }
    }
    export namespace Task {
        //status.Task.Task
        // fullName: status.Task.Task.Task
        export interface Task {
            category: string;
            endDate?: string;
            impact: ovhstatus.task.TaskImpactEnum;
            impactedService: string;
            progress: number;
            project: string;
            reference: string;
            replies: status.Reply.Reply[];
            startDate?: string;
            status: ovhstatus.task.TaskStatusEnum;
            title: string;
            type: ovhstatus.task.TaskTypeEnum;
            uuid: string;
        }
    }
}
// Apis harmony
// path /status
export interface Status{
    task: {
        // GET /status/task
        $get(param?: {impact?: ovhstatus.task.TaskImpactEnum, status?: ovhstatus.task.TaskStatusEnum, type?: ovhstatus.task.TaskTypeEnum}): Promise<status.Task.Task[]>;
    }
}
// Api
type PathsStatusGET = '/status/task';

export class ApiStatus extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
   * API to get incidents or maintenances linked to nichandle services
   * Find all the incidents or maintenances linked to your services
   */
  public get(path: '/status/task', params: {impact?: ovhstatus.task.TaskImpactEnum, status?: ovhstatus.task.TaskStatusEnum, type?: ovhstatus.task.TaskTypeEnum}): Promise<status.Task.Task[]>;
  public get(path: PathsStatusGET, params?: OvhParamType): Promise<any> {
    return super.get(path, params);
  }
}
export default ApiStatus;
