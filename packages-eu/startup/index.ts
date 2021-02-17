import { buildOvhProxy, CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

/**
 * START API /startup Models
 * Source: https://eu.api.ovh.com/1.0/startup.json
 */
export namespace nichandle {
    /**
     * Countries a nichandle can choose
     * type fullname: nichandle.CountryEnum
     */
    export type CountryEnum = "AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DG" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EA" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "IC" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "UNKNOWN" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW"
}
export namespace startup {
    /**
     * Acceptance status
     * type fullname: startup.acceptanceStatusEnum
     */
    export type acceptanceStatusEnum = "Open" | "Rejected" | "RegisteredQualified" | "AdvancedQualified" | "Registered" | "Advanced" | "AdvancedHandOperated" | "Banned"
    /**
     * Where did you hear about OVHcloud
     * type fullname: startup.awarnessEnum
     */
    export type awarnessEnum = "Twitter" | "LinkedIn" | "Facebook" | "Email" | "WordOfMouth" | "Event" | "InternetSearch" | "OnlineAdvert" | "Partner" | "Website"
    /**
     * employeesNumber
     * type fullname: startup.employeesNumberEnum
     */
    export type employeesNumberEnum = "1Or2" | "3To5" | "6To9" | "10To19" | "20To49" | "50To99" | "100To199" | "200To249" | "250To499"
    /**
     * When do you plan to start using cloud infrastructure ? (months)
     * type fullname: startup.infrastructureUsingEnum
     */
    export type infrastructureUsingEnum = "Less1" | "1To6" | "6To12" | "Over12" | "DontKnow"
    /**
     * last Fundraising
     * type fullname: startup.lastFundraisingEnum
     */
    export type lastFundraisingEnum = "DontShare" | "Crowdfunding" | "PreSeed" | "Seed" | "Series_A" | "Series_B" | "Series_C" | "More" | "No"
    /**
     * Planned Fund Raising
     * type fullname: startup.plannedFundRaisingEnum
     */
    export type plannedFundRaisingEnum = "DontShare" | "Yes" | "No"
    /**
     * Society Industries
     * type fullname: startup.relatedIndustryEnum
     */
    export type relatedIndustryEnum = "Accommodation_and_FoodServices" | "Agriculture" | "Agro_industry" | "AI_Wholesale" | "ARTISANAT" | "ASP_SI_ITServices" | "Automotive" | "Banking" | "Construction_and_Architecture" | "Databases_Wholesale" | "DigitalServices" | "E_Retail" | "EducationalServices" | "Energy_and_Water" | "Game_Wholesale" | "HeadOffice" | "Healthcare" | "Host_the_Hoster_Wholesale" | "IAASproviders_WebHosters_Data" | "Manufacturing_Industry" | "Mining_Industry" | "NonProfit" | "Other_Services_Business" | "Other_Services_Personal" | "Others" | "PublicSector" | "Retail_and_Trade" | "ScienceR&D" | "Software Editors" | "Storage_Wholesale" | "Telecommunication_Internet" | "Transportation_Logistics" | "TV_Media" | "Virtualization_Wholesale" | "WebAgencies"
    /**
     * Related Technologies
     * type fullname: startup.relatedTechnologyEnum
     */
    export type relatedTechnologyEnum = "CloudGaming" | "Streaming" | "ScientificComputation" | "IoT" | "API" | "MobileApplications" | "Big_Data" | "Chatbot" | "ArtificialIntelligence" | "MachineLearningDeepLearning" | "PredictiveAnalyticAlgorithms" | "Blockchain" | "CRM_ERP" | "GeoLocalization" | "ContainersDockers" | "VirtualMachines" | "Orchestration" | "Drones" | "AugmentedReality" | "VirtualDesktop" | "VoIP" | "3dPrinting" | "ElearningPlatform" | "Robotics" | "Storage" | "BankingDataInfrastructure" | "Healthcareinfrastructure" | "Marketplace" | "CyberSecurity" | "Other"
    /**
     * Startup Entity
     * interface fullName: startup.startup.startup
     */
    export interface startup {
        acceptanceStatus?: startupacceptanceStatusEnum;
        awarness: startupawarnessEnum;
        company: startupstartupcompany;
        eventCode?: string;
        fundRaising: startupstartupfundRaising;
        project: startupstartupproject;
    }
    export namespace startup {
        /**
         * Company info
         * interface fullName: startup.startup.company.company
         */
        export interface company {
            detail?: startupstartupcompanydetail;
            employeesNumber: startupemployeesNumberEnum;
            incubator?: startupstartupcompanyincubator;
            name: string;
            relatedIndustry: startuprelatedIndustryEnum;
            socialNetwork?: startupstartupcompanysocialNetwork;
            societyWebsite: string;
        }
        export namespace company {
            /**
             * Details that relates to the company
             * interface fullName: startup.startup.company.detail.detail
             */
            export interface detail {
                creationdate: string;
                lastYearTurnover: number;
                vatNumber: string;
            }
            /**
             * Incubator infos
             * interface fullName: startup.startup.company.incubator.incubator
             */
            export interface incubator {
                city: string;
                country: nichandle.CountryEnum;
                name: string;
            }
            /**
             * Company social networks
             * interface fullName: startup.startup.company.socialNetwork.socialNetwork
             */
            export interface socialNetwork {
                linkedin?: string;
                twitter?: string;
            }
        }
        /**
         * Fundraising infos
         * interface fullName: startup.startup.fundRaising.fundRaising
         */
        export interface fundRaising {
            lastFundraising: startuplastFundraisingEnum;
            plannedFundRaising: startupplannedFundRaisingEnum;
        }
        /**
         * Project info
         * interface fullName: startup.startup.project.project
         */
        export interface project {
            businessModel: string;
            description: string;
            developmentStage: string;
            productName: string;
            relatedTechnology: startuprelatedTechnologyEnum[];
            requirements: startupstartupprojecttechnicalNeed;
        }
        export namespace project {
            /**
             * Project technical need info
             * interface fullName: startup.startup.project.technicalNeed.technicalNeed
             */
            export interface technicalNeed {
                infrastructureUsing: startupinfrastructureUsingEnum;
                otherCloudProvider?: boolean;
                otherCloudProviderInfo?: string;
                technicalNeeds: string;
            }
        }
    }
}

/**
 * END API /startup Models
 */
export function proxyStartup(ovhEngine: OvhRequestable): Startup {
    return buildOvhProxy(ovhEngine, '/startup');
}
export default proxyStartup;
/**
 * Api model for /startup
 */
export interface Startup {
    /**
     * Get startup status
     * GET /startup
     */
    $get(): Promise<startup.startup>;
    /**
     * Register a startup
     * POST /startup
     */
    $post(params: { acceptanceStatus?: startupacceptanceStatusEnum, awarness: startupawarnessEnum, company: startupstartupcompany, eventCode?: string, fundRaising: startupstartupfundRaising, project: startupstartupproject }): Promise<void>;
    /**
     * Controle cache
     */
    $cache(param?: ICacheOptions | CacheAction): Promise<any>;
}
/**
 * Extra Alias to bypass relativer namespace colitions
 */
type startupacceptanceStatusEnum = startup.acceptanceStatusEnum;
type startupawarnessEnum = startup.awarnessEnum;
type startupstartupcompany = startup.startup.company;
type startupstartupfundRaising = startup.startup.fundRaising;
type startupstartupproject = startup.startup.project;
type startupstartupcompanydetail = startup.startup.company.detail;
type startupemployeesNumberEnum = startup.employeesNumberEnum;
type startupstartupcompanyincubator = startup.startup.company.incubator;
type startuprelatedIndustryEnum = startup.relatedIndustryEnum;
type startupstartupcompanysocialNetwork = startup.startup.company.socialNetwork;
type startuplastFundraisingEnum = startup.lastFundraisingEnum;
type startupplannedFundRaisingEnum = startup.plannedFundRaisingEnum;
type startuprelatedTechnologyEnum = startup.relatedTechnologyEnum;
type startupstartupprojecttechnicalNeed = startup.startup.project.technicalNeed;
type startupinfrastructureUsingEnum = startup.infrastructureUsingEnum;
