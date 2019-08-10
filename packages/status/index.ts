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
    export namespace Reply {
        // interface fullName: status.Reply.Reply.Reply
        export interface Reply {
            comment: string;
            date: string;
        }
    }
    export namespace Task {
        // interface fullName: status.Task.Task.Task
        export interface Task {
            category: string;
            endDate?: string;
            impact: ovhstatustaskTaskImpactEnum;
            impactedService: string;
            progress: number;
            project: string;
            reference: string;
            replies: statusReplyReply[];
            startDate?: string;
            status: ovhstatustaskTaskStatusEnum;
            title: string;
            type: ovhstatustaskTaskTypeEnum;
            uuid: string;
        }
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
        $get(params?: {impact?: ovhstatustaskTaskImpactEnum, status?: ovhstatustaskTaskStatusEnum, type?: ovhstatustaskTaskTypeEnum}): Promise<status.Task.Task[]>;
    }
// Api
  /**
   * API to get incidents or maintenances linked to nichandle services
   * Find all the incidents or maintenances linked to your services
   */
  get(path: '/status/task'): (params?: {impact?: ovhstatustaskTaskImpactEnum, status?: ovhstatustaskTaskStatusEnum, type?: ovhstatustaskTaskTypeEnum}) => Promise<status.Task.Task[]>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type ovhstatustaskTaskImpactEnum = ovhstatus.task.TaskImpactEnum;
type statusReplyReply = status.Reply.Reply;
type ovhstatustaskTaskStatusEnum = ovhstatus.task.TaskStatusEnum;
type ovhstatustaskTaskTypeEnum = ovhstatus.task.TaskTypeEnum;
