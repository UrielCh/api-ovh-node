import { OvhRequestable, buildOvhProxy } from '@ovh-api/common';

/**
 * START API /services Models
 */
export namespace complexType {
    // interface fullName: complexType.SafeKeyValue<T>.SafeKeyValue
    export interface SafeKeyValue<T> {
        key: string;
        value: T;
    }
}
export namespace order {
    // type fullname: order.CurrencyCodeEnum
    export type CurrencyCodeEnum = "AUD" | "CAD" | "CZK" | "EUR" | "GBP" | "LTL" | "MAD" | "N/A" | "PLN" | "SGD" | "TND" | "USD" | "XOF" | "points"
    // interface fullName: order.Price.Price
    export interface Price {
        currencyCode: order.CurrencyCodeEnum;
        text: string;
        value: number;
    }
}
export namespace services {
    export namespace billing {
        // interface fullName: services.billing.Invoice.Invoice
        export interface Invoice {
            date: string;
            id: string;
            lines: services.billing.InvoiceLine[];
        }
        // interface fullName: services.billing.InvoiceLine.InvoiceLine
        export interface InvoiceLine {
            description: string;
            periodEnd?: string;
            periodStart?: string;
            price: order.Price;
            quantity: number;
            serviceName: string;
            totalPrice: order.Price;
            type?: services.billing.InvoiceLineTypeEnum;
        }
        // type fullname: services.billing.InvoiceLineTypeEnum
        export type InvoiceLineTypeEnum = "accessory" | "consumption" | "creation" | "deposit" | "duration" | "gift" | "installation" | "misc" | "other" | "outplan" | "quantity" | "special" | "voucher"
        export namespace engagement {
            // interface fullName: services.billing.engagement.Engagement.Engagement
            export interface Engagement {
                currentPeriod: services.billing.engagement.EngagementPeriod;
            }
            // interface fullName: services.billing.engagement.EngagementPeriod.EngagementPeriod
            export interface EngagementPeriod {
                endDate?: string;
                startDate: string;
            }
        }
    }
    export namespace contacts {
        // interface fullName: services.contacts.ContactChangeRequest.ContactChangeRequest
        export interface ContactChangeRequest {
            admin: string[];
            billing: string[];
            technical: string[];
        }
        // interface fullName: services.contacts.Task.Task
        export interface Task {
            id: number;
            route: string;
        }
    }
    export namespace expanded {
        // interface fullName: services.expanded.Billing.Billing
        export interface Billing {
            expirationDate?: string;
            nextBillingDate?: string;
            plan?: services.expanded.Plan;
        }
        // interface fullName: services.expanded.Plan.Plan
        export interface Plan {
            code: string;
            invoiceName: string;
        }
        // interface fullName: services.expanded.Product.Product
        export interface Product {
            description: string;
            name: string;
        }
        // interface fullName: services.expanded.Resource.Resource
        export interface Resource {
            displayName: string;
            name: string;
            product?: services.expanded.Product;
        }
        // interface fullName: services.expanded.Route.Route
        export interface Route {
            path?: string;
            url?: string;
            vars: complexType.SafeKeyValue<string>[];
        }
        // interface fullName: services.expanded.Service.Service
        export interface Service {
            billing: services.expanded.Billing;
            resource: services.expanded.Resource;
            route?: services.expanded.Route;
            serviceId: number;
        }
    }
    export namespace form {
        // interface fullName: services.form.Answer.Answer
        export interface Answer {
            question: string;
            value: string;
        }
        // interface fullName: services.form.AnswerAllowedValue.AnswerAllowedValue
        export interface AnswerAllowedValue {
            key: string;
        }
        // type fullname: services.form.AnswerTypeEnum
        export type AnswerTypeEnum = "boolean" | "date" | "datetime" | "double" | "enum" | "long" | "string" | "text"
        // interface fullName: services.form.Description.Description
        export interface Description {
            name: string;
            questions: services.form.Question[];
        }
        // interface fullName: services.form.Form.Form
        export interface Form {
            answers: services.form.Answer[];
        }
        // interface fullName: services.form.Question.Question
        export interface Question {
            answers?: services.form.AnswerAllowedValue[];
            mandatory: boolean;
            question: string;
            type: services.form.AnswerTypeEnum;
        }
        // interface fullName: services.form.Response.Response
        export interface Response {
            message: string;
        }
    }
    export namespace terminate {
        // interface fullName: services.terminate.ConfirmServiceTerminationRequest.ConfirmServiceTerminationRequest
        export interface ConfirmServiceTerminationRequest {
            acknowledgePotentialFees: boolean;
            token: string;
        }
        // interface fullName: services.terminate.TerminationAnswer.TerminationAnswer
        export interface TerminationAnswer {
            message: string;
        }
        // interface fullName: services.terminate.TerminationFees.TerminationFees
        export interface TerminationFees {
            durationLeft: string;
            fees: order.Price;
        }
        // interface fullName: services.terminate.TerminationRequest.TerminationRequest
        export interface TerminationRequest {
            acknowledgePotentialFees: boolean;
        }
    }
}

/**
 * END API /services Models
 */
export function proxyServices(ovhEngine: OvhRequestable): Services {
    return buildOvhProxy(ovhEngine, '/services');
}
export default proxyServices;
/**
 * Api Proxy model
 */// Apis harmony
// path /services
export interface Services{
    // GET /services
    $get(params?: {orderBy?: string, routes?: string, sort?: string}): Promise<number[]>;
    $(serviceId: number): {
        // GET /services/{serviceId}
        $get(): Promise<services.expanded.Service>;
        billing: {
            engagement: {
                // GET /services/{serviceId}/billing/engagement
                $get(): Promise<services.billing.engagement.Engagement>;
            }
        }
    };
// Api
  /**
   * Get list of your service details
   * List available services
   */
  get(path: '/services'): (params?: {orderBy?: string, routes?: string, sort?: string}) => Promise<number[]>;
  /**
   * Get list of your service details
   * Get details about a service
   */
  get(path: '/services/{serviceId}'): (params: {serviceId: number}) => Promise<services.expanded.Service>;
  /**
   * Engagement for a given service
   * Get engagement details
   */
  get(path: '/services/{serviceId}/billing/engagement'): (params: {serviceId: number}) => Promise<services.billing.engagement.Engagement>;
}
