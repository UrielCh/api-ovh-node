// Generated by https://quicktype.io

/**
 * Original OVH Model
 */
export interface Schema {
    apis?:         API[];
    basePath:     string;
    // models is missing from ovh-kimsufi/order
    models?:       {[key:string]: ModelsProp};
    apiVersion:   string;
    resourcePath: string;
}

export interface API {
    path:        string;
    operations:  Operation[];
    description: string;
}


export type OvhErrorsMajor = 'Server' | 'Client';
export type OvhErrorsMinor = 'NoContent' | 'NotFound' | 'BadRequest' | 'InternalServerError' | 'Forbidden' | 'ValidationError' | 'Conflict' | 'NotImplemented' | 'PaymentRequired';
/**
 * added on 30/06/2021
 */
export type IOvhErrors = `${OvhErrorsMajor}::${OvhErrorsMinor}::${string}`; 
export type IOvhScopes = `account/${string}` | `product/${string}` | `services/${string}` | `order/${string}` | 'all' | '/all';
//typeof AllScopes[number];

export interface Operation {
    apiStatus:         APIStatus;
    httpMethod:        "DELETE" | "GET" | "POST" | "PUT";
    parameters:        Parameter[];
    resellerOnly?:     boolean;
    responseType:      string;
    scopes?:           IOvhScopes[];
    responseFullType?: string;
    noAuthentication:  boolean;
    /**
     * operation name
     */
    operationId?:     string;
    description:      string;
    /**
     * added on 09/22/2020
     * May contains duplicated entry
     */
    errors?:          IOvhErrors[];
}

export interface APIStatus {
    description:     Description;
    value:           Value;
    deprecatedDate?: string;
    deletionDate?:   string;
    replacement?:    string;
}

export type Description = "Alpha version" | "Beta version" | "Deprecated, will be removed" | "Stable production version";

export type Value = "ALPHA" | "BETA" | "DEPRECATED" | "PRODUCTION";

export interface Parameter {
    fullType:    string;
    description: null | string;
    name?:       null | string;
    paramType:   "body" | "path" | "query";
    dataType:    string;
    required:    boolean;
}

export interface ModelsProp {
    id:          string;
    description?:string;
    namespace:   string;
    enum?:       string[];
    /**
     * extra type added on 09/22/2020
     */
    enumType?:   "long" | "string" | 'coreTypes.CountryEnum' | 'coreTypes.TimeZoneEnum';
    errorValue?: "IDoNotWishToDiscloseThisInformation";
    generics?:   string[];
    properties?: {[key:string]: FieldProp};
}

export interface FieldProp  {
    canBeNull:    boolean;
    description?: string | null;
    fullType?:    string;
    readOnly?:    boolean;
    required?:    boolean;
    type:         string;
}

export interface OvhIndex {
    apis:     API[];
    basePath: string;
}

export interface API2 {
    path:        string;
    schema:      string; // "{path}.{format}",
    format:      ApiFormat[];
    description: string;
}

export enum ApiFormat {
    JSON = "json",
    YAML = "yaml",
}
