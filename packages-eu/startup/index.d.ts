import type { CacheAction, ICacheOptions, OvhRequestable } from '@ovh-api/common';

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
    export type acceptanceStatusEnum = "Advanced" | "AdvancedHandOperated" | "AdvancedQualified" | "Banned" | "Open" | "Registered" | "RegisteredQualified" | "Rejected"
    /**
     * Where did you hear about OVHcloud
     * type fullname: startup.awarnessEnum
     */
    export type awarnessEnum = "Email" | "EmpactVenture" | "Event" | "Facebook" | "InternetSearch" | "LinkedIn" | "OnlineAdvert" | "Partner" | "Twitter" | "Website" | "WordOfMouth"
    /**
     * employeesNumber
     * type fullname: startup.employeesNumberEnum
     */
    export type employeesNumberEnum = "100To199" | "10To19" | "1Or2" | "200To249" | "20To49" | "250To499" | "3To5" | "50To99" | "6To9"
    /**
     * When do you plan to start using cloud infrastructure ? (months)
     * type fullname: startup.infrastructureUsingEnum
     */
    export type infrastructureUsingEnum = "1To6" | "6To12" | "DontKnow" | "Less1" | "Over12"
    /**
     * last Fundraising
     * type fullname: startup.lastFundraisingEnum
     */
    export type lastFundraisingEnum = "Crowdfunding" | "DontShare" | "More" | "No" | "PreSeed" | "Seed" | "Series_A" | "Series_B" | "Series_C"
    /**
     * Planned Fund Raising
     * type fullname: startup.plannedFundRaisingEnum
     */
    export type plannedFundRaisingEnum = "DontShare" | "No" | "Yes"
    /**
     * Society Industries
     * type fullname: startup.relatedIndustryEnum
     */
    export type relatedIndustryEnum = "AI_Wholesale" | "ARTISANAT" | "ASP_SI_ITServices" | "Accommodation_and_FoodServices" | "Agriculture" | "Agro_industry" | "Art_Sport_Entertainment" | "Automotive" | "Banking" | "Construction_and_Architecture" | "Databases_Wholesale" | "DigitalServices" | "E_Retail" | "EducationalServices" | "Energy_and_Water" | "Game_Wholesale" | "HeadOffice" | "Healthcare" | "Host_the_Hoster_Wholesale" | "Human_Resources" | "IAASproviders_WebHosters_Data" | "Life_Sciences" | "Manufacturing_Industry" | "Mining_Industry" | "NonProfit" | "Other_Services_Business" | "Other_Services_Personal" | "Others" | "PublicSector" | "Real_Estate" | "Retail_and_Trade" | "ScienceR&D" | "Software Editors" | "Storage_Wholesale" | "TV_Media" | "Telecommunication_Internet" | "Transportation_Logistics" | "Ventures_for_Good" | "Virtualization_Wholesale" | "WebAgencies"
    /**
     * Related Technologies
     * type fullname: startup.relatedTechnologyEnum
     */
    export type relatedTechnologyEnum = "3dPrinting" | "API" | "ArtificialIntelligence" | "AugmentedReality" | "BankingDataInfrastructure" | "Big_Data" | "Blockchain" | "CRM_ERP" | "Chatbot" | "CloudGaming" | "ContainersDockers" | "CyberSecurity" | "Drones" | "ElearningPlatform" | "GeoLocalization" | "Healthcareinfrastructure" | "IoT" | "MachineLearningDeepLearning" | "Marketplace" | "MobileApplications" | "Orchestration" | "Other" | "PredictiveAnalyticAlgorithms" | "Robotics" | "ScientificComputation" | "Storage" | "Streaming" | "VirtualDesktop" | "VirtualMachines" | "VoIP"
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

export declare function proxyStartup(ovhEngine: OvhRequestable): Startup;
export default proxyStartup;
