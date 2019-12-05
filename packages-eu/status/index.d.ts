import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /status Models
 */
export declare namespace ovhstatus {
    namespace task {
        type TaskImpactEnum = "partialUnavailability" | "fullUnavailability" | "downtime" | "none" | "unknown";
        type TaskStatusEnum = "planned" | "inProgress" | "finished";
        type TaskTypeEnum = "incident" | "maintenance" | "upgrade";
    }
}
export declare namespace status {
    namespace Reply {
        interface Reply {
            comment: string;
            date: string;
        }
    }
    namespace Task {
        interface Task {
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
export declare function proxyStatus(ovhEngine: OvhRequestable): Status;
export default proxyStatus;
/**
 * Api Proxy model
 */ export interface Status {
    task: {
        $get(params?: {
            impact?: ovhstatus.task.TaskImpactEnum;
            status?: ovhstatus.task.TaskStatusEnum;
            type?: ovhstatus.task.TaskTypeEnum;
        }): Promise<status.Task.Task[]>;
    };
    /**
     * API to get incidents or maintenances linked to nichandle services
     * Find all the incidents or maintenances linked to your services
     */
    get(path: '/status/task'): (params?: {
        impact?: ovhstatus.task.TaskImpactEnum;
        status?: ovhstatus.task.TaskStatusEnum;
        type?: ovhstatus.task.TaskTypeEnum;
    }) => Promise<status.Task.Task[]>;
}
