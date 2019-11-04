import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /status Models
 */
export namespace ovhstatus {
    export namespace task {
        // type fullname: ovhstatus.task.TaskImpactEnum
        export type TaskImpactEnum = "partialUnavailability" | "fullUnavailability" | "downtime" | "none" | "unknown"
        // type fullname: ovhstatus.task.TaskStatusEnum
        export type TaskStatusEnum = "planned" | "inProgress" | "finished"
        // type fullname: ovhstatus.task.TaskTypeEnum
        export type TaskTypeEnum = "incident" | "maintenance" | "upgrade"
    }
}
export namespace status {
    // interface fullName: status.Reply.Reply
    export interface Reply {
        comment: string;
        date: string;
    }
    // interface fullName: status.Task.Task
    export interface Task {
        category: string;
        endDate?: string;
        impact: ovhstatus.task.TaskImpactEnum;
        impactedService: string;
        progress: number;
        project: string;
        reference: string;
        replies: status.Reply[];
        startDate?: string;
        status: ovhstatus.task.TaskStatusEnum;
        title: string;
        type: ovhstatus.task.TaskTypeEnum;
        uuid: string;
    }
}

/**
 * END API /status Models
 */
export function proxyStatus(ovhEngine: OvhRequestable): Status {
    return buildOvhProxy(ovhEngine, '/status');
}
export default proxyStatus;
/**
 * Api Proxy model
 */// Apis harmony
// path /status
export interface Status{
    task: {
        // GET /status/task
        $get(params?: {impact?: ovhstatus.task.TaskImpactEnum, status?: ovhstatus.task.TaskStatusEnum, type?: ovhstatus.task.TaskTypeEnum}): Promise<status.Task[]>;
    }
// Api
  /**
   * API to get incidents or maintenances linked to nichandle services
   * Find all the incidents or maintenances linked to your services
   */
  get(path: '/status/task'): (params?: {impact?: ovhstatus.task.TaskImpactEnum, status?: ovhstatus.task.TaskStatusEnum, type?: ovhstatus.task.TaskTypeEnum}) => Promise<status.Task[]>;
}
