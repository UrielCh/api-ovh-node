import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /status Models
 * Source: https://eu.api.kimsufi.com/1.0/status.json
 */
export namespace ovhstatus {
    export namespace task {
        /**
         * Description not available
         * type fullname: ovhstatus.task.TaskImpactEnum
         */
        export type TaskImpactEnum = "partialUnavailability" | "fullUnavailability" | "downtime" | "none" | "unknown"
        /**
         * Description not available
         * type fullname: ovhstatus.task.TaskStatusEnum
         */
        export type TaskStatusEnum = "planned" | "inProgress" | "finished"
        /**
         * Description not available
         * type fullname: ovhstatus.task.TaskTypeEnum
         */
        export type TaskTypeEnum = "incident" | "maintenance" | "upgrade"
    }
}
export namespace status {
    export namespace Reply {
        /**
         * A reply is useful to know the progress of a task
         * interface fullName: status.Reply.Reply.Reply
         */
        export interface Reply {
            comment: string;
            date: string;
        }
    }
    export namespace Task {
        /**
         * A task linked to one of your services
         * interface fullName: status.Task.Task.Task
         */
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

/**
 * END API /status Models
 */
export function proxyStatus(ovhEngine: OvhRequestable): Status {
    return buildOvhProxy(ovhEngine, '/status');
}
export default proxyStatus;
/**
 * Api model for /status
 */
export interface Status {
    task: {
        /**
         * Find all the incidents or maintenances linked to your services
         * GET /status/task
         */
        $get(params?: { impact?: ovhstatus.task.TaskImpactEnum, status?: ovhstatus.task.TaskStatusEnum, type?: ovhstatus.task.TaskTypeEnum }): Promise<status.Task.Task[]>;
        /**
         * Controle cache
         */
        $cache(param?: ICacheOptions | CacheAction): Promise<any>;
    }
}
