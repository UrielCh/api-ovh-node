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
/**
 * added on 09/22/2020
 */
export const OvhErrors = [
    "Server::NoContent::PartnerError",
    "Client::NotFound::PartnerNotFound",
    "Server::InternalServerError::PartnerError",
    "Server::InternalServerError::MissingParameterInRequestContext",
    "Server::InternalServerError::CouldNotUpdateLoadBalancerConfiguration",
    "Server::InternalServerError::MarshalingError",
    "Client::BadRequest::CouldNotAssignIPToLoadBalancer",
    "Client::BadRequest::CouldNotAssignRegionToLoadBalancer",
    "Client::BadRequest::CouldNotCreateLoadBalancerConfigurationVersionMismatch",
    "Client::BadRequest::CouldNotCurrentDeleteLoadBalancerConfiguration",
    "Client::BadRequest::UnprocessableEntity",
    "Client::Forbidden::LoadBalancerIsFrozen",
    "Client::Forbidden::NotWhiteListed",
    "Client::Forbidden::CouldNotDeleteCertificate",
    "Client::Forbidden::QuotaReached",
    "Server::InternalServerError::CouldNotImportCertificate",
    "Server::InternalServerError::CouldNotListCertificate",
    "Server::InternalServerError::CouldNotSerializeResponse",
    "Server::InternalServerError::CouldNotApplyLoadBalancerConfiguration",
    "Server::InternalServerError::CouldNotCreateLoadBalancer",
    "Server::InternalServerError::CouldNotCreateLoadBalancerConfiguration",
    "Server::InternalServerError::CouldNotDeleteLoadBalancer",
    "Server::InternalServerError::CouldNotDeleteLoadBalancerConfiguration",
    "Server::InternalServerError::CouldNotFindLoadBalancer",
    "Server::InternalServerError::CouldNotFindLoadBalancerConfigurations",
    "Server::InternalServerError::CouldNotFindLoadBalancerIP",
    "Server::InternalServerError::CouldNotFindLoadBalancerIPAddresses",
    "Server::InternalServerError::CouldNotFindLoadBalancerLastAppliedConfiguration",
    "Server::InternalServerError::CouldNotFindLoadBalancerLatestConfiguration",
    "Server::InternalServerError::CouldNotFindRegion",
    "Server::InternalServerError::CouldNotListLoadBalancers",
    "Server::InternalServerError::CouldNotListRegions",
    "Server::InternalServerError::CouldNotParseRequest",
    "Server::InternalServerError::CouldNotUpdateLoadBalancer",
] as const;

export type IOvhErrors = typeof OvhErrors[number];

export interface Operation {
    apiStatus:        APIStatus;
    httpMethod:       "DELETE" | "GET" | "POST" | "PUT";
    parameters:       Parameter[];
    resellerOnly?:     boolean;
    responseType:     string;
    responseFullType?: string;
    noAuthentication: boolean;
    /**
     * operation name
     */
    operationId?:     string;
    description:      string;
    /**
     * added on 09/22/2020
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
