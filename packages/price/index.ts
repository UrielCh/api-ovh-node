import { OvhWrapper, OvhRequestable, OvhParamType } from '@ovh-api/common';
/**
 * 
 */
export type OrderCurrencyCodeEnum = 'AUD' | 'CAD' | 'CZK' | 'EUR' | 'GBP' | 'LTL' | 'MAD' | 'N/A' | 'PLN' | 'SGD' | 'TND' | 'USD' | 'XOF' | 'points';
/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  /**
   */
  currencyCode: OrderCurrencyCodeEnum;
  /**
   */
  text: string;
  /**
   */
  value: number;
}
/**
 * Enum of Models
 */
export type PriceDedicatedNashaModelEnum = '1200g' | '13200g' | '19200g' | '2400g' | '26400g' | '3600g' | '7200g';
/**
 * Enum of AntiDDoSPros
 */
export type PriceDedicatedServerAntiDDoSProEnum = 'sk';
/**
 * Enum of BackupStorages
 */
export type PriceDedicatedServerBackupStorageEnum = '1000' | '10000' | '500' | '5000';
/**
 * Enum of Firewalls
 */
export type PriceDedicatedServerFirewallEnum = 'asa5505' | 'asa5510' | 'asa5520';
/**
 * Enum of Ips
 */
export type PriceDedicatedServerIpEnum = 'kimsufi' | 'parking';
/**
 * Enum of ProfessionalUses
 */
export type PriceDedicatedServerProfessionalUseEnum = 'bhg' | 'eg' | 'hg' | 'mg' | 'sp';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2013v1Bhs1aFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200g-GB' | 'nfs-3300-GB' | 'nfs-3600-GB' | 'nfs-6600-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2013v1Bhs1aFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-3300-GB' | 'nfs-3600-GB' | 'nfs-6600-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2013v1Bhs1aHostHourlyEnum = 'L' | 'L+' | 'L++' | 'L2' | 'L2+' | 'M' | 'S' | 'S++' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2013v1Bhs1aHostMonthlyEnum = 'L' | 'L+' | 'L++' | 'L2' | 'L2+' | 'M' | 'S' | 'S++' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2013v1Rbx2aFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200g-GB' | 'nfs-3300-GB' | 'nfs-3600-GB' | 'nfs-6600-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2013v1Rbx2aFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-3300-GB' | 'nfs-3600-GB' | 'nfs-6600-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2013v1Rbx2aHostHourlyEnum = 'L' | 'L+' | 'L++' | 'L2' | 'L2+' | 'M' | 'S' | 'S++' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2013v1Rbx2aHostMonthlyEnum = 'L' | 'L+' | 'L++' | 'L2' | 'L2+' | 'M' | 'S' | 'S++' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2013v1Sbg1aFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200g-GB' | 'nfs-3300-GB' | 'nfs-3600-GB' | 'nfs-6600-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2013v1Sbg1aFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-3300-GB' | 'nfs-3600-GB' | 'nfs-6600-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2013v1Sbg1aHostHourlyEnum = 'L' | 'L+' | 'L++' | 'L2' | 'L2+' | 'M' | 'S' | 'S++' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2013v1Sbg1aHostMonthlyEnum = 'L' | 'L+' | 'L++' | 'L2' | 'L2+' | 'M' | 'S' | 'S++' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourlyEnum = 'iscsi-1200-GB' | 'iscsi-13200g-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthlyEnum = 'iscsi-1200-GB' | 'iscsi-13200-GB' | 'iscsi-3300-GB' | 'iscsi-6600-GB' | 'iscsi-800-GB' | 'nfs-100-GB' | 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthlyEnum = 'L' | 'L+' | 'M' | 'XL' | 'XL+';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthlyEnum = 'nfs-1200-GB' | 'nfs-13200-GB' | 'nfs-1600-GB' | 'nfs-2400-GB' | 'nfs-3300-GB' | 'nfs-6600-GB' | 'nfs-800-GB';
/**
 * Enum of Hourlys
 */
export type PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Monthlys
 */
export type PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthlyEnum = 'SDDC-128' | 'SDDC-16' | 'SDDC-256' | 'SDDC-512' | 'SDDC-64' | 'SDDCVSAN-256' | 'SDDCVSAN-512';
/**
 * Enum of Options
 */
export type PriceDomainZoneOptionEnum = 'dnsAnycast';
/**
 * Enum of Offers
 */
export type PriceEmailExchangeOfferEnum = 'hosted';
/**
 * Enum of PrivateDatabases
 */
export type PriceHostingPrivateDatabaseEnum = 'mysql_4.1_1024' | 'mysql_4.1_128' | 'mysql_4.1_256' | 'mysql_4.1_512' | 'mysql_5.0_1024' | 'mysql_5.0_128' | 'mysql_5.0_256' | 'mysql_5.0_512' | 'mysql_5.1_1024' | 'mysql_5.1_128' | 'mysql_5.1_256' | 'mysql_5.1_512' | 'mysql_5.5_1024' | 'mysql_5.5_128' | 'mysql_5.5_256' | 'mysql_5.5_512';
/**
 * Enum of Cdns
 */
export type PriceHostingWebCdnEnum = 'CDN_BUSINESS';
/**
 * Enum of ExtraSqlPersos
 */
export type PriceHostingWebExtraSqlPersoEnum = 'SQLPERSO_1_BASES_400_MB' | 'SQLPERSO_1_BASES_800_MB' | 'SQLPERSO_20_BASES_100_MB' | 'SQLPERSO_20_BASES_200_MB' | 'SQLPERSO_2_BASES_400_MB' | 'SQLPERSO_2_BASES_800_MB' | 'SQLPERSO_50_BASES_100_MB' | 'SQLPERSO_50_BASES_200_MB' | 'SQLPERSO_5_BASES_100_MB' | 'SQLPERSO_5_BASES_200_MB' | 'SQLPERSO_5_BASES_400_MB' | 'SQLPERSO_5_BASES_800_MB';
/**
 * Enum of Ssls
 */
export type PriceHostingWebSslEnum = 'HOSTEDSSL';
/**
 * Enum of Subscriptions
 */
export type PriceHpcspotAccountSubscriptionEnum = 'HPCSPOT';
/**
 * Enum of Jobs
 */
export type PriceHpcspotConsumptionJobEnum = '16core.64gb' | '4core.32gb' | '8core.32gb';
/**
 * Enum of Reservations
 */
export type PriceHpcspotConsumptionReservationEnum = '12core.60gb.quadrok400' | '1core.4gb' | '1core.4gb.quadrok4000' | '2core.8gb' | '2core.8gb.quadrok4000' | '4core.15gb' | '4core.15gb.quadrok4000' | '8core.30gb' | '8core.30gb.quadrok4000';
/**
 * Enum of Sessions
 */
export type PriceHpcspotConsumptionSessionEnum = '16core.64gb' | '4core.32gb' | '8core.32gb';
/**
 * Enum of Offices
 */
export type PriceLicenseOfficeEnum = 'officeBusiness' | 'officeProPlus';
/**
 * Enum of Offers
 */
export type PriceOverTheBoxOfferEnum = 'plus.v1';
/**
 * Enum of Installations
 */
export type PricePackXdslInstallationEnum = 'enterprise' | 'express' | 'expressLite';
/**
 * Enum of Offerss
 */
export type PricePackXdslOffersEnum = 'enterprise' | 'express' | 'expressLite';
/**
 * Enum of Optionss
 */
export type PricePackXdslOptionsEnum = 'enterpriseGtr' | 'vdslFt';
/**
 * Enum of Licenses
 */
export type PriceSaasCsp2LicenseEnum = 'AzureActiveDirectoryBasic' | 'AzureActiveDirectoryPremiumP1' | 'Business' | 'BusinessEssentials' | 'BusinessPremium' | 'EnterpriseE1' | 'EnterpriseE3' | 'EnterpriseK1' | 'ExchangeOnlinePlan1' | 'ProPlus' | 'ProjectOnline' | 'ProjectOnlineProfessional' | 'VisioPro';
/**
 * Enum of Offers
 */
export type PriceTelephonyOfferEnum = 'discovery' | 'enterprise' | 'enterpriseMobile' | 'resellerEnterprise' | 'resellerEnterpriseMobile';
/**
 * Enum of Models
 */
export type PriceVps2013v1ClassicModelEnum = 'model1' | 'model2' | 'model3' | 'model4' | 'model5' | 'model6';
/**
 * Enum of Models
 */
export type PriceVps2013v1CloudModelEnum = 'model1' | 'model2' | 'model3' | 'model4' | 'model5' | 'model6';
/**
 * Enum of Options
 */
export type PriceVps2013v1CloudOptionEnum = 'ftpbackup' | 'ip' | 'snapshot' | 'veeam';
/**
 * Enum of Models
 */
export type PriceVps2013v1LowlatModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Models
 */
export type PriceVps2014v1ClassicModelEnum = 'model1' | 'model2' | 'model3' | 'model4';
/**
 * Enum of Models
 */
export type PriceVps2014v1CloudModelEnum = 'model1' | 'model2' | 'model3' | 'model4';
/**
 * Enum of Options
 */
export type PriceVps2014v1CloudOptionEnum = 'ftpbackup' | 'ip' | 'snapshot' | 'veeam';
/**
 * Enum of Models
 */
export type PriceVps2015v1CloudModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2015v1CloudOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2015v1CloudramModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2015v1CloudramOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2015v1SsdModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2015v1SsdOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2017v1SsdModelEnum = 'model1' | 'model2' | 'model3' | 'model4';
/**
 * Enum of Options
 */
export type PriceVps2017v1SsdOptionEnum = 'ip';
/**
 * Enum of Models
 */
export type PriceVps2017v2CloudModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2017v2CloudOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2017v2CloudramModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2017v2CloudramOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2017v2SsdModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2017v2SsdOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2017v3CloudModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2017v3CloudOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2017v3CloudramModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2017v3CloudramOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2017v3SsdModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2017v3SsdOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2018v1CloudModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2018v1CloudOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2018v1CloudramModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2018v1CloudramOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'automatedBackup' | 'ftpbackup' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2018v1SsdModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Options
 */
export type PriceVps2018v1SsdOptionEnum = 'additionalDisk100' | 'additionalDisk200' | 'additionalDisk50' | 'additionalDisk500' | 'ip' | 'snapshot';
/**
 * Enum of Models
 */
export type PriceVps2018v2SsdModelEnum = 'model1' | 'model2' | 'model3' | 'model4';
/**
 * Enum of Options
 */
export type PriceVps2018v2SsdOptionEnum = 'ip';
/**
 * Enum of Models
 */
export type PriceVpsClassicModelEnum = 'model1' | 'model2' | 'model3' | 'model4' | 'model5' | 'model6';
/**
 * Enum of Models
 */
export type PriceVpsCloudModelEnum = 'model1' | 'model2' | 'model3' | 'model4' | 'model5' | 'model6';
/**
 * Enum of Options
 */
export type PriceVpsCloudOptionEnum = 'ftpbackup' | 'ip' | 'snapshot' | 'veeam';
/**
 * Enum of Models
 */
export type PriceVpsLowlatModelEnum = 'model1' | 'model2' | 'model3';
/**
 * Enum of Fees
 */
export type PriceXdslAddressMoveFeeEnum = 'keepPortability';
/**
 * Enum of Installations
 */
export type PriceXdslInstallationEnum = 'backup';
/**
 * Enum of Offerss
 */
export type PriceXdslOffersEnum = 'backup';
/**
 * Enum of Installations
 */
export type PriceXdslOptionsInstallationEnum = 'ipv4';
/**
 * Enum of Ipv4s
 */
export type PriceXdslOptionsIpv4Enum = '29';
/**
 * Enum of Lines
 */
export type PriceXdslOptionsLineEnum = 'creation' | 'partialToTotal';
type PathsPriceGET = '/price/dedicated/nasha/model/{modelName}' | 
'/price/dedicated/server/antiDDoSPro/{commercialRange}' | 
'/price/dedicated/server/backupStorage/{capacity}' | 
'/price/dedicated/server/firewall/{firewallModel}' | 
'/price/dedicated/server/ip/{routedTo}' | 
'/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}' | 
'/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}' | 
'/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}' | 
'/price/domain/zone/option/{optionName}' | 
'/price/hosting/privateDatabase/{privateDatabaseName}' | 
'/price/hosting/web/cdn/{cdnName}' | 
'/price/hosting/web/extraSqlPerso/{extraSqlPersoName}' | 
'/price/hosting/web/ssl/{sslName}' | 
'/price/hpcspot/account/subscription/{subscriptionName}' | 
'/price/hpcspot/consumption/job/{reference}' | 
'/price/hpcspot/consumption/reservation/{reference}' | 
'/price/hpcspot/consumption/session/{reference}' | 
'/price/license/office/{officeName}' | 
'/price/overTheBox/offer/{offerName}' | 
'/price/saas/csp2/license/{licenseName}' | 
'/price/vps/2013v1/classic/model/{modelName}' | 
'/price/vps/2013v1/cloud/model/{modelName}' | 
'/price/vps/2013v1/cloud/option/{optionName}' | 
'/price/vps/2013v1/lowlat/model/{modelName}' | 
'/price/vps/2014v1/classic/model/{modelName}' | 
'/price/vps/2014v1/cloud/model/{modelName}' | 
'/price/vps/2014v1/cloud/option/{optionName}' | 
'/price/vps/2015v1/cloud/model/{modelName}' | 
'/price/vps/2015v1/cloud/option/{optionName}' | 
'/price/vps/2015v1/cloudram/model/{modelName}' | 
'/price/vps/2015v1/cloudram/option/{optionName}' | 
'/price/vps/2015v1/ssd/model/{modelName}' | 
'/price/vps/2015v1/ssd/option/{optionName}' | 
'/price/vps/2017v1/ssd/model/{modelName}' | 
'/price/vps/2017v1/ssd/option/{optionName}' | 
'/price/vps/2017v2/cloud/model/{modelName}' | 
'/price/vps/2017v2/cloud/option/{optionName}' | 
'/price/vps/2017v2/cloudram/model/{modelName}' | 
'/price/vps/2017v2/cloudram/option/{optionName}' | 
'/price/vps/2017v2/ssd/model/{modelName}' | 
'/price/vps/2017v2/ssd/option/{optionName}' | 
'/price/vps/2017v3/cloud/model/{modelName}' | 
'/price/vps/2017v3/cloud/option/{optionName}' | 
'/price/vps/2017v3/cloudram/model/{modelName}' | 
'/price/vps/2017v3/cloudram/option/{optionName}' | 
'/price/vps/2017v3/ssd/model/{modelName}' | 
'/price/vps/2017v3/ssd/option/{optionName}' | 
'/price/vps/2018v1/cloud/model/{modelName}' | 
'/price/vps/2018v1/cloud/option/{optionName}' | 
'/price/vps/2018v1/cloudram/model/{modelName}' | 
'/price/vps/2018v1/cloudram/option/{optionName}' | 
'/price/vps/2018v1/ssd/model/{modelName}' | 
'/price/vps/2018v1/ssd/option/{optionName}' | 
'/price/vps/2018v2/ssd/model/{modelName}' | 
'/price/vps/2018v2/ssd/option/{optionName}' | 
'/price/vps/classic/model/{modelName}' | 
'/price/vps/cloud/model/{modelName}' | 
'/price/vps/cloud/option/{optionName}' | 
'/price/vps/lowlat/model/{modelName}' | 
'/price/xdsl/addressMove/fee/{option}' | 
'/price/xdsl/installation/{offer}' | 
'/price/xdsl/offers/{offersName}' | 
'/price/xdsl/options/installation/{option}' | 
'/price/xdsl/options/ipv4/{ipRange}' | 
'/price/xdsl/options/line/{lineAction}';

export class ApiPrice extends OvhWrapper {
  constructor(engine: OvhRequestable) {
    super(engine);
  }
  /**
  Get the price of Nas HA offers
  Get the price of Nas HA offers
  **/
  public get(path: '/price/dedicated/nasha/model/{modelName}', params: {modelName: PriceDedicatedNashaModelEnum}): Promise<OrderPrice>;
  /**
  Get price of anti-DDos Pro option
  Get price of anti-DDos Pro option
  **/
  public get(path: '/price/dedicated/server/antiDDoSPro/{commercialRange}', params: {commercialRange: PriceDedicatedServerAntiDDoSProEnum}): Promise<OrderPrice>;
  /**
  Get price of backup storage offer
  Get price of backup storage offer
  **/
  public get(path: '/price/dedicated/server/backupStorage/{capacity}', params: {capacity: PriceDedicatedServerBackupStorageEnum}): Promise<OrderPrice>;
  /**
  Get price of available firewall models
  Get price of available firewall models
  **/
  public get(path: '/price/dedicated/server/firewall/{firewallModel}', params: {firewallModel: PriceDedicatedServerFirewallEnum}): Promise<OrderPrice>;
  /**
  Get price of IPs
  Get price of IPs
  **/
  public get(path: '/price/dedicated/server/ip/{routedTo}', params: {routedTo: PriceDedicatedServerIpEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2013v1Bhs1aFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2013v1Bhs1aFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2013v1Bhs1aHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/bhs1a/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2013v1Bhs1aHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2013v1Rbx2aFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2013v1Rbx2aFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2013v1Rbx2aHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/rbx2a/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2013v1Rbx2aHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2013v1Sbg1aFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2013v1Sbg1aFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2013v1Sbg1aHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2013v1/sbg1a/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2013v1Sbg1aHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v1/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v1Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2014v2/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2014v2Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v1/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v1Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v2/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v2Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v3/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v3Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v4/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v4Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v5/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v5Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v6/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v6Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Bhs1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2bEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/enterprise/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Sbg1aEnterpriseHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2016v7/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2016v7Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Eri1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Lim1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v1/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v1Waw1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Eri1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Lim1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v2/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v2Waw1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Eri1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Lim1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v3/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v3Waw1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Eri1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Lim1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v4/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v4Waw1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Eri1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Lim1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v5/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v5Waw1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Eri1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Lim1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v6/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v6Waw1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/bhs1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Bhs1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/eri1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Eri1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/lim1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Lim1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Rbx2aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/rbx2b/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Rbx2bInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/sbg1a/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Sbg1aInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly filer ressources
  Get price of dedicated Cloud hourly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/hourly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureFilerHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly filer ressources
  Get price of dedicated Cloud monthly filer ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/filer/monthly/{filerProfile}', params: {filerProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureFilerMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud hourly host ressources
  Get price of dedicated Cloud hourly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/hourly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureHostHourlyEnum}): Promise<OrderPrice>;
  /**
  Get price of dedicated Cloud monthly host ressources
  Get price of dedicated Cloud monthly host ressources
  **/
  public get(path: '/price/dedicatedCloud/2018v7/waw1c/infrastructure/host/monthly/{hostProfile}', params: {hostProfile: PriceDedicatedCloud2018v7Waw1cInfrastructureHostMonthlyEnum}): Promise<OrderPrice>;
  /**
  Get price of zone options
  Get price of zone options
  **/
  public get(path: '/price/domain/zone/option/{optionName}', params: {optionName: PriceDomainZoneOptionEnum}): Promise<OrderPrice>;
  /**
  Get the price for a private database
  Get the price for a private database
  **/
  public get(path: '/price/hosting/privateDatabase/{privateDatabaseName}', params: {privateDatabaseName: PriceHostingPrivateDatabaseEnum}): Promise<OrderPrice>;
  /**
  Get the price for cdn option
  Get the price for cdn option
  **/
  public get(path: '/price/hosting/web/cdn/{cdnName}', params: {cdnName: PriceHostingWebCdnEnum}): Promise<OrderPrice>;
  /**
  Get the price for extra sql perso option
  Get the price for extra sql perso option
  **/
  public get(path: '/price/hosting/web/extraSqlPerso/{extraSqlPersoName}', params: {extraSqlPersoName: PriceHostingWebExtraSqlPersoEnum}): Promise<OrderPrice>;
  /**
  Get the price for hosted ssl option
  Get the price for hosted ssl option
  **/
  public get(path: '/price/hosting/web/ssl/{sslName}', params: {sslName: PriceHostingWebSslEnum}): Promise<OrderPrice>;
  /**
  Get the price of a HPC Spot Account for 1 month
  Get the price of a HPC Spot Account for 1 month
  **/
  public get(path: '/price/hpcspot/account/subscription/{subscriptionName}', params: {subscriptionName: PriceHpcspotAccountSubscriptionEnum}): Promise<OrderPrice>;
  /**
  Get the price of a JOB consumption for 1 hour
  Get the price of a JOB consumption for 1 hour
  **/
  public get(path: '/price/hpcspot/consumption/job/{reference}', params: {reference: PriceHpcspotConsumptionJobEnum}): Promise<OrderPrice>;
  /**
  Get the price of a RESERVATION consumption for 1 hour
  Get the price of a RESERVATION consumption for 1 hour
  **/
  public get(path: '/price/hpcspot/consumption/reservation/{reference}', params: {reference: PriceHpcspotConsumptionReservationEnum}): Promise<OrderPrice>;
  /**
  Get the price of a SESSION consumption for 1 hour
  Get the price of a SESSION consumption for 1 hour
  **/
  public get(path: '/price/hpcspot/consumption/session/{reference}', params: {reference: PriceHpcspotConsumptionSessionEnum}): Promise<OrderPrice>;
  /**
  Get the monthly price for an office license
  Get the monthly price for an office license
  **/
  public get(path: '/price/license/office/{officeName}', params: {officeName: PriceLicenseOfficeEnum}): Promise<OrderPrice>;
  /**
  Get the price of overTheBox offers
  Get the price of overTheBox offers
  **/
  public get(path: '/price/overTheBox/offer/{offerName}', params: {offerName: PriceOverTheBoxOfferEnum}): Promise<OrderPrice>;
  /**
  Get the monthly price for an Office 365 license
  Get the monthly price for an Office 365 license
  **/
  public get(path: '/price/saas/csp2/license/{licenseName}', params: {licenseName: PriceSaasCsp2LicenseEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud 2013
  Get price of VPS Cloud 2013
  **/
  public get(path: '/price/vps/2013v1/classic/model/{modelName}', params: {modelName: PriceVps2013v1ClassicModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Classic 2013
  Get price of VPS Classic 2013
  **/
  public get(path: '/price/vps/2013v1/cloud/model/{modelName}', params: {modelName: PriceVps2013v1CloudModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud Options 2013
  Get price of VPS Cloud Options 2013
  **/
  public get(path: '/price/vps/2013v1/cloud/option/{optionName}', params: {optionName: PriceVps2013v1CloudOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Low Latency 2013
  Get price of VPS Low Latency 2013
  **/
  public get(path: '/price/vps/2013v1/lowlat/model/{modelName}', params: {modelName: PriceVps2013v1LowlatModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Classic 2014
  Get price of VPS Classic 2014
  **/
  public get(path: '/price/vps/2014v1/classic/model/{modelName}', params: {modelName: PriceVps2014v1ClassicModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud 2014
  Get price of VPS Cloud 2014
  **/
  public get(path: '/price/vps/2014v1/cloud/model/{modelName}', params: {modelName: PriceVps2014v1CloudModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud Options 2014
  Get price of VPS Cloud Options 2014
  **/
  public get(path: '/price/vps/2014v1/cloud/option/{optionName}', params: {optionName: PriceVps2014v1CloudOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud 2015
  Get price of VPS Cloud 2015
  **/
  public get(path: '/price/vps/2015v1/cloud/model/{modelName}', params: {modelName: PriceVps2015v1CloudModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud Options 2015/2016
  Get price of VPS Cloud Options 2015/2016
  **/
  public get(path: '/price/vps/2015v1/cloud/option/{optionName}', params: {optionName: PriceVps2015v1CloudOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM 2016
  Get price of VPS Cloud RAM 2016
  **/
  public get(path: '/price/vps/2015v1/cloudram/model/{modelName}', params: {modelName: PriceVps2015v1CloudramModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM Options 2015/2016
  Get price of VPS Cloud RAM Options 2015/2016
  **/
  public get(path: '/price/vps/2015v1/cloudram/option/{optionName}', params: {optionName: PriceVps2015v1CloudramOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD 2015
  Get price of VPS SSD 2015
  **/
  public get(path: '/price/vps/2015v1/ssd/model/{modelName}', params: {modelName: PriceVps2015v1SsdModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD Options 2015/2016
  Get price of VPS SSD Options 2015/2016
  **/
  public get(path: '/price/vps/2015v1/ssd/option/{optionName}', params: {optionName: PriceVps2015v1SsdOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD Discovery 2017
  Get price of VPS SSD Discovery 2017
  **/
  public get(path: '/price/vps/2017v1/ssd/model/{modelName}', params: {modelName: PriceVps2017v1SsdModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD Discovery Options 2017
  Get price of VPS SSD Discovery Options 2017
  **/
  public get(path: '/price/vps/2017v1/ssd/option/{optionName}', params: {optionName: PriceVps2017v1SsdOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud 2017
  Get price of VPS Cloud 2017
  **/
  public get(path: '/price/vps/2017v2/cloud/model/{modelName}', params: {modelName: PriceVps2017v2CloudModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud Options 2015/2016
  Get price of VPS Cloud Options 2015/2016
  **/
  public get(path: '/price/vps/2017v2/cloud/option/{optionName}', params: {optionName: PriceVps2017v2CloudOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM 2017
  Get price of VPS Cloud RAM 2017
  **/
  public get(path: '/price/vps/2017v2/cloudram/model/{modelName}', params: {modelName: PriceVps2017v2CloudramModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM Options 2015/2016
  Get price of VPS Cloud RAM Options 2015/2016
  **/
  public get(path: '/price/vps/2017v2/cloudram/option/{optionName}', params: {optionName: PriceVps2017v2CloudramOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD 2017
  Get price of VPS SSD 2017
  **/
  public get(path: '/price/vps/2017v2/ssd/model/{modelName}', params: {modelName: PriceVps2017v2SsdModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD Options 2015/2016
  Get price of VPS SSD Options 2015/2016
  **/
  public get(path: '/price/vps/2017v2/ssd/option/{optionName}', params: {optionName: PriceVps2017v2SsdOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud 2017
  Get price of VPS Cloud 2017
  **/
  public get(path: '/price/vps/2017v3/cloud/model/{modelName}', params: {modelName: PriceVps2017v3CloudModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud Options 2015/2016
  Get price of VPS Cloud Options 2015/2016
  **/
  public get(path: '/price/vps/2017v3/cloud/option/{optionName}', params: {optionName: PriceVps2017v3CloudOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM 2017
  Get price of VPS Cloud RAM 2017
  **/
  public get(path: '/price/vps/2017v3/cloudram/model/{modelName}', params: {modelName: PriceVps2017v3CloudramModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM Options 2015/2016
  Get price of VPS Cloud RAM Options 2015/2016
  **/
  public get(path: '/price/vps/2017v3/cloudram/option/{optionName}', params: {optionName: PriceVps2017v3CloudramOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD 2017
  Get price of VPS SSD 2017
  **/
  public get(path: '/price/vps/2017v3/ssd/model/{modelName}', params: {modelName: PriceVps2017v3SsdModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD Options 2015/2016
  Get price of VPS SSD Options 2015/2016
  **/
  public get(path: '/price/vps/2017v3/ssd/option/{optionName}', params: {optionName: PriceVps2017v3SsdOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud 2017
  Get price of VPS Cloud 2017
  **/
  public get(path: '/price/vps/2018v1/cloud/model/{modelName}', params: {modelName: PriceVps2018v1CloudModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud Options 2015/2016
  Get price of VPS Cloud Options 2015/2016
  **/
  public get(path: '/price/vps/2018v1/cloud/option/{optionName}', params: {optionName: PriceVps2018v1CloudOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM 2017
  Get price of VPS Cloud RAM 2017
  **/
  public get(path: '/price/vps/2018v1/cloudram/model/{modelName}', params: {modelName: PriceVps2018v1CloudramModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud RAM Options 2015/2016
  Get price of VPS Cloud RAM Options 2015/2016
  **/
  public get(path: '/price/vps/2018v1/cloudram/option/{optionName}', params: {optionName: PriceVps2018v1CloudramOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD 2018
  Get price of VPS SSD 2018
  **/
  public get(path: '/price/vps/2018v1/ssd/model/{modelName}', params: {modelName: PriceVps2018v1SsdModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD Options 2015/2016
  Get price of VPS SSD Options 2015/2016
  **/
  public get(path: '/price/vps/2018v1/ssd/option/{optionName}', params: {optionName: PriceVps2018v1SsdOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD APAC
  Get price of VPS SSD APAC
  **/
  public get(path: '/price/vps/2018v2/ssd/model/{modelName}', params: {modelName: PriceVps2018v2SsdModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS SSD APAC Options
  Get price of VPS SSD APAC Options
  **/
  public get(path: '/price/vps/2018v2/ssd/option/{optionName}', params: {optionName: PriceVps2018v2SsdOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Classic
  Get price of VPS Classic
  **/
  public get(path: '/price/vps/classic/model/{modelName}', params: {modelName: PriceVpsClassicModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud
  Get price of VPS Cloud
  **/
  public get(path: '/price/vps/cloud/model/{modelName}', params: {modelName: PriceVpsCloudModelEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Cloud Options
  Get price of VPS Cloud Options
  **/
  public get(path: '/price/vps/cloud/option/{optionName}', params: {optionName: PriceVpsCloudOptionEnum}): Promise<OrderPrice>;
  /**
  Get price of VPS Low Latency
  Get price of VPS Low Latency
  **/
  public get(path: '/price/vps/lowlat/model/{modelName}', params: {modelName: PriceVpsLowlatModelEnum}): Promise<OrderPrice>;
  /**
  Get the price of address move option fee
  Get the price of address move option fee
  **/
  public get(path: '/price/xdsl/addressMove/fee/{option}', params: {option: PriceXdslAddressMoveFeeEnum}): Promise<OrderPrice>;
  /**
  Get the price of options installation fee
  Get the price of options installation fee
  **/
  public get(path: '/price/xdsl/installation/{offer}', params: {offer: PriceXdslInstallationEnum}): Promise<OrderPrice>;
  /**
  Get the price of xdsl offers
  Get the price of xdsl offers
  **/
  public get(path: '/price/xdsl/offers/{offersName}', params: {offersName: PriceXdslOffersEnum}): Promise<OrderPrice>;
  /**
  Get the price of options installation fee
  Get the price of options installation fee
  **/
  public get(path: '/price/xdsl/options/installation/{option}', params: {option: PriceXdslOptionsInstallationEnum}): Promise<OrderPrice>;
  /**
  Get the price of IPv4 options
  Get the price of IPv4 options
  **/
  public get(path: '/price/xdsl/options/ipv4/{ipRange}', params: {ipRange: PriceXdslOptionsIpv4Enum}): Promise<OrderPrice>;
  /**
  Get the price of line action
  Get the price of line action
  **/
  public get(path: '/price/xdsl/options/line/{lineAction}', params: {lineAction: PriceXdslOptionsLineEnum}): Promise<OrderPrice>;
  public get(path: PathsPriceGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
}
