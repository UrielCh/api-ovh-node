import { OvhRequestable } from '@ovh-api/common';
/**
 * START API /vrack Models
 */
export declare namespace complexType {
    interface UnitAndValue<T> {
        unit: string;
        value: T;
    }
}
export declare namespace dedicated {
    namespace server {
        type MrtgPeriodEnum = "daily" | "hourly" | "monthly" | "weekly" | "yearly";
        interface MrtgTimestampValue {
            timestamp: number;
            value?: complexType.UnitAndValue<number>;
        }
        type MrtgTypeEnum = "errors:download" | "errors:upload" | "packets:download" | "packets:upload" | "traffic:download" | "traffic:upload";
    }
}
export declare namespace service {
    type StateEnum = "expired" | "inCreation" | "ok" | "pendingDebt" | "unPaid";
}
export declare namespace services {
    interface NonExpiringService {
        contactAdmin: string;
        contactBilling: string;
        contactTech: string;
        creation: string;
        domain: string;
        serviceId: number;
        status: service.StateEnum;
    }
}
export declare namespace vrack {
    interface AllowedDedicatedServerInterfaces {
        dedicatedServer: string;
        dedicatedServerInterface: string;
        name: string;
    }
    interface AllowedServices {
        cloudProject?: string[];
        dedicatedCloud?: string[];
        dedicatedCloudDatacenter?: string[];
        dedicatedConnect?: string[];
        dedicatedServer?: string[];
        dedicatedServerInterface?: vrackAllowedDedicatedServerInterfaces[];
        ip?: string[];
        ipLoadbalancing?: string[];
        legacyVrack?: string[];
    }
    interface Task {
        function: string;
        id: number;
        lastUpdate?: string;
        orderId?: number;
        serviceName?: string;
        status: vrackTaskStatusEnum;
        targetDomain?: string;
        todoDate?: string;
    }
    type TaskStatusEnum = "cancelled" | "doing" | "done" | "init" | "todo";
    type VrackZoneEnum = "bhs" | "fra1" | "gra" | "lon1" | "pdx1" | "rbx" | "sbg" | "sgp1" | "syd1" | "was1" | "waw";
    interface cloudProject {
        project: string;
        vrack: string;
    }
    interface dedicatedCloud {
        dedicatedCloud: string;
        vlanId?: number;
        vrack: string;
    }
    interface dedicatedConnect {
        name: string;
    }
    interface dedicatedServer {
        dedicatedServer: string;
        vrack: string;
    }
    interface dedicatedServerInterface {
        dedicatedServerInterface: string;
        vrack: string;
    }
    interface ip {
        gateway?: string;
        ip: string;
        zone?: vrackVrackZoneEnum;
    }
    interface iplb {
        ipLoadbalancing: string;
        vrack: string;
    }
    interface legacyVrack {
        legacyVrack: string;
        vlanId: number;
    }
    interface nasha {
        serviceIp: string;
        zpool: string;
    }
    interface pccDatacenter {
        datacenter: string;
        dedicatedCloud: string;
        vrack: string;
    }
    interface publicRoutingOption {
        bandwidth?: number;
    }
    interface vrack {
        description: string;
        name: string;
    }
}
/**
 * END API /vrack Models
 */
export declare function proxyVrack(ovhEngine: OvhRequestable): Vrack;
export default proxyVrack;
/**
 * Api Proxy model
 */ export interface Vrack {
    $get(): Promise<string[]>;
    $(serviceName: string): {
        $get(): Promise<vrack.vrack>;
        $put(params?: {
            description?: string;
            name?: string;
        }): Promise<void>;
        allowedServices: {
            $get(): Promise<vrack.AllowedServices>;
        };
        cloudProject: {
            $get(): Promise<string[]>;
            $post(params: {
                project: string;
            }): Promise<vrack.Task>;
            $(project: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.cloudProject>;
            };
        };
        dedicatedCloud: {
            $get(): Promise<string[]>;
            $post(params: {
                dedicatedCloud: string;
            }): Promise<vrack.Task>;
            $(dedicatedCloud: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.dedicatedCloud>;
            };
        };
        dedicatedCloudDatacenter: {
            $get(): Promise<string[]>;
            $(datacenter: string): {
                $get(): Promise<vrack.pccDatacenter>;
                allowedVrack: {
                    $get(): Promise<string[]>;
                };
                move: {
                    $post(params: {
                        targetServiceName: string;
                    }): Promise<vrack.Task>;
                };
            };
        };
        dedicatedConnect: {
            $get(): Promise<string[]>;
            $(name: string): {
                $get(): Promise<vrack.dedicatedConnect>;
                $put(params?: {
                    name?: string;
                }): Promise<void>;
            };
        };
        dedicatedServer: {
            $get(): Promise<string[]>;
            $post(params: {
                dedicatedServer: string;
            }): Promise<vrack.Task>;
            $(dedicatedServer: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.dedicatedServer>;
                mrtg: {
                    $get(params: {
                        period: dedicated.server.MrtgPeriodEnum;
                        type: dedicated.server.MrtgTypeEnum;
                    }): Promise<dedicated.server.MrtgTimestampValue[]>;
                };
            };
        };
        dedicatedServerInterface: {
            $get(): Promise<string[]>;
            $post(params: {
                dedicatedServerInterface: string;
            }): Promise<vrack.Task>;
            $(dedicatedServerInterface: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.dedicatedServerInterface>;
            };
        };
        dedicatedServerInterfaceDetails: {
            $get(): Promise<vrack.AllowedDedicatedServerInterfaces[]>;
        };
        ip: {
            $get(): Promise<string[]>;
            $post(params: {
                block: string;
            }): Promise<vrack.Task>;
            $(ip: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.ip>;
                announceInZone: {
                    $post(params: {
                        zone: vrackVrackZoneEnum;
                    }): Promise<vrack.Task>;
                };
                availableZone: {
                    $get(): Promise<vrack.VrackZoneEnum[]>;
                };
            };
        };
        ipLoadbalancing: {
            $get(): Promise<string[]>;
            $post(params: {
                ipLoadbalancing: string;
            }): Promise<vrack.Task>;
            $(ipLoadbalancing: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.iplb>;
            };
        };
        legacyVrack: {
            $get(): Promise<string[]>;
            $post(params: {
                legacyVrack: string;
            }): Promise<vrack.Task>;
            $(legacyVrack: string): {
                $delete(): Promise<vrack.Task>;
                $get(): Promise<vrack.legacyVrack>;
            };
        };
        serviceInfos: {
            $get(): Promise<services.NonExpiringService>;
        };
        task: {
            $get(): Promise<number[]>;
            $(taskId: number): {
                $get(): Promise<vrack.Task>;
            };
        };
    };
    /**
     * Operations about the VRACK service
     * List available services
     */
    get(path: '/vrack'): () => Promise<string[]>;
    /**
     * vrack
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}'): (params: {
        serviceName: string;
    }) => Promise<vrack.vrack>;
    /**
     * allowedServices operations
     * List all services allowed in this vrack
     */
    get(path: '/vrack/{serviceName}/allowedServices'): (params: {
        serviceName: string;
    }) => Promise<vrack.AllowedServices>;
    /**
     * List the vrack.cloudProject objects
     * vrack for publicCloud project
     */
    get(path: '/vrack/{serviceName}/cloudProject'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * PublicCloud project in vrack
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/cloudProject/{project}'): (params: {
        project: string;
        serviceName: string;
    }) => Promise<vrack.cloudProject>;
    /**
     * List the vrack.dedicatedCloud objects
     * vrack dedicated cloud (VmNetwork)
     */
    get(path: '/vrack/{serviceName}/dedicatedCloud'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * vrack dedicated cloud interface
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}'): (params: {
        dedicatedCloud: string;
        serviceName: string;
    }) => Promise<vrack.dedicatedCloud>;
    /**
     * List the vrack.pccDatacenter objects
     * vrack dedicated cloud datacenter
     */
    get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * vrack datacenter interface
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}'): (params: {
        datacenter: string;
        serviceName: string;
    }) => Promise<vrack.pccDatacenter>;
    /**
     * allowedVrack operations
     * Vracks allowed for your dedicatedCloud datacenter
     */
    get(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/allowedVrack'): (params: {
        datacenter: string;
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * List the vrack.dedicatedConnect objects
     * vrack dedicated connect
     */
    get(path: '/vrack/{serviceName}/dedicatedConnect'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * vrack dedicated connect interface
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/dedicatedConnect/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<vrack.dedicatedConnect>;
    /**
     * List the vrack.dedicatedServer objects
     * vrack for dedicated server
     */
    get(path: '/vrack/{serviceName}/dedicatedServer'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * vrack dedicated server interfaces
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}'): (params: {
        dedicatedServer: string;
        serviceName: string;
    }) => Promise<vrack.dedicatedServer>;
    /**
     * mrtg operations
     * Retrieve vrack traffic graph values
     */
    get(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}/mrtg'): (params: {
        dedicatedServer: string;
        serviceName: string;
        period: dedicated.server.MrtgPeriodEnum;
        type: dedicated.server.MrtgTypeEnum;
    }) => Promise<dedicated.server.MrtgTimestampValue[]>;
    /**
     * List the vrack.dedicatedServerInterface objects
     * vrack for dedicated server interface
     */
    get(path: '/vrack/{serviceName}/dedicatedServerInterface'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * vrack dedicated server interfaces
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}'): (params: {
        dedicatedServerInterface: string;
        serviceName: string;
    }) => Promise<vrack.dedicatedServerInterface>;
    /**
     * dedicatedServerInterfaceDetails operations
     * Details for all dedicated server interfaces in this vrack
     */
    get(path: '/vrack/{serviceName}/dedicatedServerInterfaceDetails'): (params: {
        serviceName: string;
    }) => Promise<vrack.AllowedDedicatedServerInterfaces[]>;
    /**
     * List the vrack.ip objects
     * vrack for IP blocks
     */
    get(path: '/vrack/{serviceName}/ip'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * IP block in vrack
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/ip/{ip}'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<vrack.ip>;
    /**
     * availableZone operations
     * Zone available to announce your block
     */
    get(path: '/vrack/{serviceName}/ip/{ip}/availableZone'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<vrack.VrackZoneEnum[]>;
    /**
     * List the vrack.iplb objects
     * vrack for ipLoadbalancing
     */
    get(path: '/vrack/{serviceName}/ipLoadbalancing'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * ipLoadbalancing in vrack
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}'): (params: {
        ipLoadbalancing: string;
        serviceName: string;
    }) => Promise<vrack.iplb>;
    /**
     * List the vrack.legacyVrack objects
     * vrack for legacy vrack
     */
    get(path: '/vrack/{serviceName}/legacyVrack'): (params: {
        serviceName: string;
    }) => Promise<string[]>;
    /**
     * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}'): (params: {
        legacyVrack: string;
        serviceName: string;
    }) => Promise<vrack.legacyVrack>;
    /**
     * Details about a non-expiring Service
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/serviceInfos'): (params: {
        serviceName: string;
    }) => Promise<services.NonExpiringService>;
    /**
     * List the vrack.Task objects
     * vrack tasks
     */
    get(path: '/vrack/{serviceName}/task'): (params: {
        serviceName: string;
    }) => Promise<number[]>;
    /**
     * vrack tasks
     * Get this object properties
     */
    get(path: '/vrack/{serviceName}/task/{taskId}'): (params: {
        serviceName: string;
        taskId: number;
    }) => Promise<vrack.Task>;
    /**
     * vrack
     * Alter this object properties
     */
    put(path: '/vrack/{serviceName}'): (params: {
        serviceName: string;
        description?: string;
        name?: string;
    }) => Promise<void>;
    /**
     * vrack dedicated connect interface
     * Alter this object properties
     */
    put(path: '/vrack/{serviceName}/dedicatedConnect/{name}'): (params: {
        name: string;
        serviceName: string;
    }) => Promise<void>;
    /**
     * List the vrack.cloudProject objects
     * add a publicCloud project to this vrack
     */
    post(path: '/vrack/{serviceName}/cloudProject'): (params: {
        serviceName: string;
        project: string;
    }) => Promise<vrack.Task>;
    /**
     * List the vrack.dedicatedCloud objects
     * add a dedicatedCloud (VmNetwork) to this vrack
     */
    post(path: '/vrack/{serviceName}/dedicatedCloud'): (params: {
        serviceName: string;
        dedicatedCloud: string;
    }) => Promise<vrack.Task>;
    /**
     * move operations
     * Move your dedicatedCloud datacenter from a Vrack to another
     */
    post(path: '/vrack/{serviceName}/dedicatedCloudDatacenter/{datacenter}/move'): (params: {
        datacenter: string;
        serviceName: string;
        targetServiceName: string;
    }) => Promise<vrack.Task>;
    /**
     * List the vrack.dedicatedServer objects
     * add a dedicated server to this vrack
     */
    post(path: '/vrack/{serviceName}/dedicatedServer'): (params: {
        serviceName: string;
        dedicatedServer: string;
    }) => Promise<vrack.Task>;
    /**
     * List the vrack.dedicatedServerInterface objects
     * add a dedicated server interface to this vrack
     */
    post(path: '/vrack/{serviceName}/dedicatedServerInterface'): (params: {
        serviceName: string;
        dedicatedServerInterface: string;
    }) => Promise<vrack.Task>;
    /**
     * List the vrack.ip objects
     * add an IP block to this vrack
     */
    post(path: '/vrack/{serviceName}/ip'): (params: {
        serviceName: string;
        block: string;
    }) => Promise<vrack.Task>;
    /**
     * announceInZone operations
     * Announce IP to zone for vrack
     */
    post(path: '/vrack/{serviceName}/ip/{ip}/announceInZone'): (params: {
        ip: string;
        serviceName: string;
        zone: vrackVrackZoneEnum;
    }) => Promise<vrack.Task>;
    /**
     * List the vrack.iplb objects
     * add an ipLoadbalancing to this vrack
     */
    post(path: '/vrack/{serviceName}/ipLoadbalancing'): (params: {
        serviceName: string;
        ipLoadbalancing: string;
    }) => Promise<vrack.Task>;
    /**
     * List the vrack.legacyVrack objects
     * add a legacy vrack (vrackXXXX) to this vrack (pn-XXXX)
     */
    post(path: '/vrack/{serviceName}/legacyVrack'): (params: {
        serviceName: string;
        legacyVrack: string;
    }) => Promise<vrack.Task>;
    /**
     * PublicCloud project in vrack
     * remove this publicCloud project from this vrack
     */
    delete(path: '/vrack/{serviceName}/cloudProject/{project}'): (params: {
        project: string;
        serviceName: string;
    }) => Promise<vrack.Task>;
    /**
     * vrack dedicated cloud interface
     * remove this dedicatedCloud (VmNetwork) from this vrack
     */
    delete(path: '/vrack/{serviceName}/dedicatedCloud/{dedicatedCloud}'): (params: {
        dedicatedCloud: string;
        serviceName: string;
    }) => Promise<vrack.Task>;
    /**
     * vrack dedicated server interfaces
     * remove this server from this vrack
     */
    delete(path: '/vrack/{serviceName}/dedicatedServer/{dedicatedServer}'): (params: {
        dedicatedServer: string;
        serviceName: string;
    }) => Promise<vrack.Task>;
    /**
     * vrack dedicated server interfaces
     * remove this server interface from this vrack
     */
    delete(path: '/vrack/{serviceName}/dedicatedServerInterface/{dedicatedServerInterface}'): (params: {
        dedicatedServerInterface: string;
        serviceName: string;
    }) => Promise<vrack.Task>;
    /**
     * IP block in vrack
     * remove this IP block from this vrack
     */
    delete(path: '/vrack/{serviceName}/ip/{ip}'): (params: {
        ip: string;
        serviceName: string;
    }) => Promise<vrack.Task>;
    /**
     * ipLoadbalancing in vrack
     * remove this ipLoadbalancing from this vrack
     */
    delete(path: '/vrack/{serviceName}/ipLoadbalancing/{ipLoadbalancing}'): (params: {
        ipLoadbalancing: string;
        serviceName: string;
    }) => Promise<vrack.Task>;
    /**
     * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
     * remove this legacy vrack (vrackXXXX) from this vrack (pn-XXXX)
     */
    delete(path: '/vrack/{serviceName}/legacyVrack/{legacyVrack}'): (params: {
        legacyVrack: string;
        serviceName: string;
    }) => Promise<vrack.Task>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
declare type vrackAllowedDedicatedServerInterfaces = vrack.AllowedDedicatedServerInterfaces;
declare type vrackTaskStatusEnum = vrack.TaskStatusEnum;
declare type vrackVrackZoneEnum = vrack.VrackZoneEnum;
