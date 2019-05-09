import { ApiCommon, OvhApi, OvhParamType } from '@ovh-api/common';
/**
 * The current state of a contract agreement
 */
export type AgreementsAgreementStateEnum = 'ko' | 'obsolete' | 'ok' | 'todo';
/**
 * Contract of service
 */
export interface AgreementsContract {
  /**
   * Is this contract currently active or not ?
   *
   */
  active?: boolean;
  /**
   * Date the contract was created on
   *
   */
  date?: string;
  /**
   * Name of of the contract
   *
   */
  name?: string;
  /**
   * URL you can download the contract at
   *
   */
  pdf?: string;
  /**
   * Full text of the contract
   *
   */
  text?: string;
}
/**
 * Contract agreement
 */
export interface AgreementsContractAgreement {
  /**
   * State of the agreement
   *
   */
  agreed?: AgreementsAgreementStateEnum;
  /**
   * Id of the agreed contract
   *
   */
  contractId?: number;
  /**
   * Date the agreed contract was effective
   *
   */
  date?: string;
  /**
   * Id of the contract
   *
   */
  id?: number;
}
/**
 * API Application
 */
export interface ApiApplication {
  /**
   */
  applicationId?: number;
  /**
   */
  applicationKey?: string;
  /**
   */
  description?: string;
  /**
   */
  name?: string;
  /**
   */
  status?: ApiApplicationStatusEnum;
}
/**
 * List of state of an Api Application
 */
export type ApiApplicationStatusEnum = 'active' | 'blocked' | 'inactive' | 'trusted';
/**
 * API Credential
 */
export interface ApiCredential {
  /**
   */
  applicationId?: number;
  /**
   */
  creation?: string;
  /**
   */
  credentialId?: number;
  /**
   */
  expiration?: string;
  /**
   */
  lastUse?: string;
  /**
   * States whether this credential has been created by yourself or by the OVH support team
   *
   */
  ovhSupport?: boolean;
  /**
   */
  rules?: AuthAccessRule[];
  /**
   */
  status?: AuthCredentialStateEnum;
}
/**
 * API Log
 */
export interface ApiLog {
  /**
   * Account which did the Request
   *
   */
  account?: string;
  /**
   * Date of the request
   *
   */
  date?: string;
  /**
   * Source IP of the request
   *
   */
  ip?: string;
  /**
   */
  logId?: number;
  /**
   * HTTP Method of the request
   *
   */
  method?: HttpMethodEnum;
  /**
   * HTTP URI of the request
   *
   */
  path?: string;
  /**
   * API Route called
   *
   */
  route?: string;
}
/**
 * Access rule required for the application
 */
export interface AuthAccessRule {
  /**
   */
  method?: AuthMethodEnum;
  /**
   */
  path?: string;
}
/**
 * All states a Credential can be in
 */
export type AuthCredentialStateEnum = 'expired' | 'pendingValidation' | 'refused' | 'validated';
/**
 * All HTTP methods available
 */
export type AuthMethodEnum = 'DELETE' | 'GET' | 'POST' | 'PUT';
/**
 * Available automatic payment means
 */
export interface BillingAutomaticPaymentMean {
  /**
   * Bank Account
   *
   */
  bankAccount?: boolean;
  /**
   * Credit Card
   *
   */
  creditCard?: boolean;
  /**
   * Deferred invoice payment account for authorized customers
   *
   */
  deferredPaymentAccount?: boolean;
  /**
   * Paypal account
   *
   */
  paypal?: boolean;
}
/**
 * SEPA bank account info
 */
export interface BillingBankAccount {
  /**
   */
  bic?: string;
  /**
   */
  creationDate?: string;
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  iban?: string;
  /**
   */
  id?: number;
  /**
   */
  mandateSignatureDate?: string;
  /**
   */
  ownerAddress?: string;
  /**
   */
  ownerName?: string;
  /**
   */
  state?: BillingBankAccountStateEnum;
  /**
   */
  uniqueReference?: string;
  /**
   */
  validationDocumentLink?: string;
}
/**
 * List of bank account states
 */
export type BillingBankAccountStateEnum = 'blockedForIncidents' | 'pendingValidation' | 'valid';
/**
 * Details about a Bill
 */
export interface BillingBill {
  /**
   */
  billId?: string;
  /**
   */
  date?: string;
  /**
   */
  orderId?: number;
  /**
   */
  password?: string;
  /**
   */
  pdfUrl?: string;
  /**
   */
  priceWithTax?: OrderPrice;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  tax?: OrderPrice;
  /**
   */
  url?: string;
}
/**
 * Information about a Bill entry
 */
export interface BillingBillDetail {
  /**
   */
  billDetailId?: string;
  /**
   */
  description?: string;
  /**
   */
  domain?: string;
  /**
   */
  periodEnd?: string;
  /**
   */
  periodStart?: string;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  unitPrice?: OrderPrice;
}
/**
 * billing task status
 */
export type BillingBillingTaskStatusEnum = 'cancelled' | 'customerError' | 'doing' | 'done' | 'init' | 'ovhError' | 'todo';
/**
 * Credit balance applied on an Order
 */
export interface BillingCreditBalance {
  /**
   * Amount applied from the balance
   *
   */
  amount?: OrderPrice;
  /**
   * Credit balance name
   *
   */
  balanceName?: string;
}
/**
 * Credit card informations
 */
export interface BillingCreditCard {
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  expirationDate?: string;
  /**
   */
  id?: number;
  /**
   */
  number?: string;
  /**
   */
  state?: BillingCreditCardStateEnum;
  /**
   * True if this credit card has been registered with a successful 3DSecure challenge
   *
   */
  threeDsValidated?: boolean;
  /**
   */
  type?: string;
}
/**
 * State of you credit card
 */
export type BillingCreditCardStateEnum = 'expired' | 'tooManyFailures' | 'valid';
/**
 * Deferred payment account info
 */
export interface BillingDeferredPaymentAccount {
  /**
   */
  creationDate?: string;
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  id?: number;
  /**
   * Deferred account type
   *
   */
  label?: string;
  /**
   */
  state?: BillingDeferredPaymentAccountStatusEnum;
}
/**
 * Status of your deferred invoice payment account
 */
export type BillingDeferredPaymentAccountStatusEnum = 'valid';
/**
 * Details about a deposit
 */
export interface BillingDeposit {
  /**
   */
  amount?: OrderPrice;
  /**
   */
  date?: string;
  /**
   */
  depositId?: string;
  /**
   */
  orderId?: number;
  /**
   */
  password?: string;
  /**
   */
  paymentInfo?: DebtAssociatedObjectPaymentInfo;
  /**
   */
  pdfUrl?: string;
  /**
   */
  url?: string;
}
/**
 * Information about a Deposit entry
 */
export interface BillingDepositDetail {
  /**
   */
  depositDetailId?: string;
  /**
   */
  description?: string;
  /**
   */
  domain?: string;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  unitPrice?: OrderPrice;
}
/**
 * Balance of the fidelity account
 */
export interface BillingFidelityAccount {
  /**
   */
  alertThreshold?: number;
  /**
   */
  balance?: number;
  /**
   */
  canBeCredited?: boolean;
  /**
   */
  lastUpdate?: string;
  /**
   */
  openDate?: string;
}
/**
 * Details about a fidelity account
 */
export interface BillingFidelityMovement {
  /**
   */
  amount?: number;
  /**
   */
  balance?: number;
  /**
   */
  date?: string;
  /**
   */
  description?: string;
  /**
   */
  movementId?: number;
  /**
   */
  operation?: BillingFidelityAccountOperationEnum;
  /**
   */
  order?: number;
  /**
   */
  previousBalance?: number;
}
/**
 * Extensions of a detail
 */
export interface BillingItemDetail {
  /**
   */
  order?: BillingItemDetailOrder;
}
/**
 * Order data for this Detail
 */
export interface BillingItemDetailOrder {
  /**
   * The meaning of this order detail
   *
   */
  action?: BillingItemDetailOrderActionEnum;
  /**
   * Configurations chosen during the order
   *
   */
  configurations?: BillingItemDetailOrderConfiguration[];
  /**
   * Plan from /order/cart
   *
   */
  plan?: BillingItemDetailOrderPlan;
}
/**
 * List of order actions
 */
export type BillingItemDetailOrderActionEnum = 'consumption' | 'installation' | 'renew' | 'upgrade';
/**
 * Configuration of order
 */
export interface BillingItemDetailOrderConfiguration {
  /**
   * Label of the configuration
   *
   */
  label?: string;
  /**
   * Value of the configuration
   *
   */
  value?: string;
}
/**
 * Plan data from order
 */
export interface BillingItemDetailOrderPlan {
  /**
   * Plan code used when ordering through /order/cart
   *
   */
  code?: string;
  /**
   * Duration chosen when ordering through /order/cart (ISO 8601)
   *
   */
  duration?: string;
  /**
   * Pricing mode used when ordering through /order/cart
   *
   */
  pricingMode?: string;
  /**
   * Product from /order/cart
   *
   */
  product?: BillingItemDetailOrderPlanProduct;
  /**
   * Quantity ordered
   *
   */
  quantity?: number;
}
/**
 * Product data from order
 */
export interface BillingItemDetailOrderPlanProduct {
  /**
   * Name of the product used when ordering through /order/cart
   *
   */
  name?: string;
}
/**
 * Status of your manual domain payment migration
 */
export interface BillingManualDomainPaymentStatus {
  /**
   * Total number of domains that needs to be migrated to manual renew mode
   *
   */
  domainsToMigrate?: number;
  /**
   * Total number of domains successfully migrated to manual renew mode
   *
   */
  migratedDomains?: number;
  /**
   */
  status?: BillingBillingTaskStatusEnum;
}
/**
 * Details about an OVH account
 */
export interface BillingMovement {
  /**
   */
  amount?: OrderPrice;
  /**
   */
  balance?: OrderPrice;
  /**
   */
  date?: string;
  /**
   */
  description?: string;
  /**
   */
  movementId?: number;
  /**
   */
  operation?: BillingOvhAccountOperationEnum;
  /**
   */
  order?: number;
  /**
   */
  previousBalance?: OrderPrice;
}
/**
 * Details about an Order
 */
export interface BillingOrder {
  /**
   */
  date?: string;
  /**
   */
  expirationDate?: string;
  /**
   */
  orderId?: number;
  /**
   */
  password?: string;
  /**
   */
  pdfUrl?: string;
  /**
   */
  priceWithTax?: OrderPrice;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  retractionDate?: string;
  /**
   */
  tax?: OrderPrice;
  /**
   */
  url?: string;
}
/**
 * Information about a Bill entry
 */
export interface BillingOrderDetail {
  /**
   */
  cancelled?: boolean;
  /**
   */
  description?: string;
  /**
   */
  domain?: string;
  /**
   */
  orderDetailId?: number;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  unitPrice?: OrderPrice;
}
/**
 * Details about an OVH account
 */
export interface BillingOvhAccount {
  /**
   */
  alertThreshold?: number;
  /**
   */
  balance?: OrderPrice;
  /**
   */
  canBeCredited?: boolean;
  /**
   */
  isActive?: boolean;
  /**
   */
  lastUpdate?: string;
  /**
   */
  openDate?: string;
  /**
   */
  ovhAccountId?: string;
}
/**
 * Details about a payment
 */
export interface BillingPayment {
  /**
   */
  paymentDate?: string;
  /**
   */
  paymentIdentifier?: string;
  /**
   */
  paymentType?: BillingPaymentMeanEnum;
}
/**
 * All payment means you might have use on an OVH order
 */
export type BillingPaymentMeanEnum = 'cash' | 'chargeback' | 'cheque' | 'creditAccount' | 'creditCard' | 'debtAccount' | 'deposit' | 'digitalLaunchPad' | 'edinar' | 'fidelityPoints' | 'free' | 'ideal' | 'incubatorAccount' | 'mandat' | 'multibanco' | 'none' | 'ovhAccount' | 'paymentMandate' | 'paypal' | 'payu' | 'platnosci' | 'refund' | 'transfer' | 'withdrawal';
/**
 * A validation required to add a payment mean
 */
export interface BillingPaymentMeanValidation {
  /**
   */
  id?: number;
  /**
   */
  submitUrl?: string;
  /**
   */
  url?: string;
  /**
   */
  validationType?: BillingPaymentMeanValidationType;
}
/**
 * All the validation you may have to do
 */
export type BillingPaymentMeanValidationType = 'creditAccount' | 'documentToSend' | 'simpleValidation';
/**
 * Available payment methods
 */
export interface BillingPaymentMethod {
  /**
   * Billing contact ID
   *
   */
  billingContactId?: number;
  /**
   * Creation date of the payment method
   *
   */
  creationDate?: string;
  /**
   * Is this payment method set as the default one
   *
   */
  default?: boolean;
  /**
   * Customer personalized description
   *
   */
  description?: string;
  /**
   * Payment method id
   *
   */
  id?: number;
  /**
   * Payment sub type
   *
   */
  paymentSubType?: BillingPaymentMethodPaymentSubTypeEnum;
  /**
   * Payment type
   *
   */
  paymentType?: BillingPaymentMethodPaymentTypeEnum;
  /**
   * Public payment method label
   *
   */
  publicLabel?: string;
  /**
   * Payment method status enum
   *
   */
  status?: BillingPaymentMethodStatusEnum;
}
/**
 * Paypal account info
 */
export interface BillingPaypal {
  /**
   */
  agreementId?: string;
  /**
   */
  creationDate?: string;
  /**
   */
  defaultPaymentMean?: boolean;
  /**
   * Custom description of this account
   *
   */
  description?: string;
  /**
   */
  email?: string;
  /**
   */
  id?: number;
  /**
   */
  state?: BillingPaypalStateEnum;
}
/**
 * State of you paypal account
 */
export type BillingPaypalStateEnum = 'tooManyFailures' | 'valid';
/**
 * Details about a Refund
 */
export interface BillingRefund {
  /**
   */
  date?: string;
  /**
   */
  orderId?: number;
  /**
   */
  originalBillId?: string;
  /**
   */
  password?: string;
  /**
   */
  pdfUrl?: string;
  /**
   */
  priceWithTax?: OrderPrice;
  /**
   */
  priceWithoutTax?: OrderPrice;
  /**
   */
  refundId?: string;
  /**
   */
  tax?: OrderPrice;
  /**
   */
  url?: string;
}
/**
 * Information about a Bill entry
 */
export interface BillingRefundDetail {
  /**
   */
  description?: string;
  /**
   */
  domain?: string;
  /**
   */
  quantity?: string;
  /**
   */
  reference?: string;
  /**
   */
  refundDetailId?: string;
  /**
   */
  refundId?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  unitPrice?: OrderPrice;
}
/**
 * Reusable payment mean type
 */
export type BillingReusablePaymentMeanEnum = 'CREDIT_CARD' | 'ENTERPRISE' | 'INTERNAL_TRUSTED_ACCOUNT' | 'PAYPAL' | 'bankAccount' | 'creditCard' | 'fidelityAccount' | 'ovhAccount' | 'paypal';
/**
 * SLA properties
 */
export interface BillingSlaOperation {
  /**
   * Date of the event that led to SLA
   *
   */
  date?: string;
  /**
   * Description of the SLA operation for this incident
   *
   */
  description?: string;
  /**
   * Date of the end of the SLA
   *
   */
  endDate?: string;
  /**
   * SLA identifier
   *
   */
  id?: number;
  /**
   * Sla operation name
   *
   */
  name?: string;
  /**
   * Date of the start of the SLA
   *
   */
  startDate?: string;
}
/**
 * Describe all services impacted by SLA
 */
export interface BillingSlaOperationService {
  /**
   * Service description
   *
   */
  description?: string;
  /**
   * Impacted service name
   *
   */
  serviceName?: string;
  /**
   * SLA plan application
   *
   */
  slaApplication?: string;
  /**
   * SLA plan description
   *
   */
  slaPlan?: string;
}
/**
 * Details about a Voucher account
 */
export interface BillingVoucherAccount {
  /**
   */
  balance?: OrderPrice;
  /**
   */
  lastUpdate?: string;
  /**
   */
  openDate?: string;
  /**
   */
  voucherAccountId?: string;
}
/**
 * Details about a voucher account
 */
export interface BillingVoucherMovement {
  /**
   */
  amount?: OrderPrice;
  /**
   */
  balance?: OrderPrice;
  /**
   */
  date?: string;
  /**
   */
  description?: string;
  /**
   */
  movementId?: number;
  /**
   */
  operation?: BillingVoucherAccountOperationEnum;
  /**
   */
  order?: number;
  /**
   */
  previousBalance?: OrderPrice;
}
/**
 * Details about a withdrawal
 */
export interface BillingWithdrawal {
  /**
   */
  amount?: OrderPrice;
  /**
   */
  country?: string;
  /**
   */
  date?: string;
  /**
   */
  orderId?: number;
  /**
   */
  password?: string;
  /**
   */
  pdfUrl?: string;
  /**
   */
  url?: string;
  /**
   */
  withdrawalId?: string;
}
/**
 * Information about a Withdrawal entry
 */
export interface BillingWithdrawalDetail {
  /**
   */
  description?: string;
  /**
   */
  domain?: string;
  /**
   */
  quantity?: string;
  /**
   */
  totalPrice?: OrderPrice;
  /**
   */
  unitPrice?: OrderPrice;
  /**
   */
  withdrawalDetailId?: string;
}
/**
 * Credit balance
 */
export interface BillingCreditBalance {
  /**
   * Balance amount
   *
   */
  amount?: OrderPrice;
  /**
   * Balance name
   *
   */
  balanceName?: string;
  /**
   * Movement already booked on orders
   *
   */
  booked?: BillingCreditBalanceBookedMovement[];
  /**
   * Balance creation date
   *
   */
  creationDate?: string;
  /**
   * Movement expiring soon
   *
   */
  expiring?: BillingCreditBalanceExpiringMovement[];
  /**
   * Movement expiring soon
   *
   */
  expiringSummary?: BillingCreditBalanceExpiringMovement[];
  /**
   * Balance last update
   *
   */
  lastUpdate?: string;
  /**
   * Balance type
   *
   */
  type?: BillingCreditBalanceType;
}
/**
 * Movement already booked on orders
 */
export interface BillingCreditBalanceBookedMovement {
  /**
   * Movement amount
   *
   */
  amount?: OrderPrice;
  /**
   * Order ID
   *
   */
  orderId?: number;
}
/**
 * Movement expiring soon
 */
export interface BillingCreditBalanceExpiringMovement {
  /**
   * Movement amount
   *
   */
  amount?: OrderPrice;
  /**
   * Movement creation date
   *
   */
  creationDate?: string;
  /**
   * Movement expiration date
   *
   */
  expirationDate?: string;
  /**
   * Movement last update
   *
   */
  lastUpdate?: string;
  /**
   * Object source of this credit movement
   *
   */
  sourceObject?: BillingCreditBalanceMovementSubObject;
}
/**
 * Credit balance
 */
export interface BillingCreditBalanceMovement {
  /**
   * Movement amount
   *
   */
  amount?: OrderPrice;
  /**
   * Balance name
   *
   */
  balanceName?: string;
  /**
   * Movement creation date
   *
   */
  creationDate?: string;
  /**
   * Movement expiration date
   *
   */
  expirationDate?: string;
  /**
   * Movement last update
   *
   */
  lastUpdate?: string;
  /**
   * Movement ID
   *
   */
  movementId?: number;
  /**
   * Order ID associated to this credit movement
   *
   */
  orderId?: number;
  /**
   * Object source of this credit movement
   *
   */
  sourceObject?: BillingCreditBalanceMovementSubObject;
  /**
   * Movement type
   *
   */
  type?: string;
}
/**
 * Balance type
 */
export type BillingCreditBalanceType = 'BONUS' | 'DEPOSIT' | 'PREPAID_ACCOUNT' | 'VOUCHER';
/**
 * Movement sub object
 */
export interface BillingCreditBalanceMovementSubObject {
  /**
   * Sub object ID
   *
   */
  id?: string;
  /**
   * Sub object name
   *
   */
  name?: string;
}
/**
 * Operations a fidelity account movement can represent
 */
export type BillingFidelityAccountOperationEnum = 'bonus' | 'cancel-bonus' | 'cancel-credit' | 'cancel-debit' | 'cancel-pre-debit' | 'credit' | 'debit' | 'pre-credit' | 'pre-debit';
/**
 * The object the processing of the order leaded to
 */
export interface BillingOrderAssociatedObject {
  /**
   */
  id?: string;
  /**
   */
  type?: BillingOrderAssociatedObjectTypeEnum;
}
/**
 * All possible order status
 */
export type BillingOrderOrderStatusEnum = 'cancelled' | 'cancelling' | 'checking' | 'delivered' | 'delivering' | 'documentsRequested' | 'notPaid' | 'unknown';
/**
 * Pay with payment method parameter
 */
export interface BillingOrderPayWithPaymentMethod {
  /**
   * ID of payment method for pay this order
   *
   */
  id?: number;
}
/**
 * All data needed to use a payment mean
 */
export interface BillingOrderPaymentMean {
  /**
   */
  fee?: number;
  /**
   */
  htmlForm?: string;
  /**
   */
  httpMethod?: string;
  /**
   */
  logo?: string;
  /**
   */
  parameters?: BillingOrderPaymentMeanHttpParameter[];
  /**
   */
  subType?: string;
  /**
   */
  url?: string;
}
/**
 * TODO
 */
export interface BillingOrderPaymentMeans {
  /**
   */
  creditCard?: BillingOrderPaymentMean[];
  /**
   */
  edinar?: BillingOrderPaymentMean[];
  /**
   */
  fidelityPoints?: BillingOrderPaymentMean[];
  /**
   */
  ideal?: BillingOrderPaymentMean[];
  /**
   */
  multibanco?: BillingOrderPaymentMean[];
  /**
   */
  ovhAccount?: BillingOrderPaymentMean[];
  /**
   */
  paypal?: BillingOrderPaymentMean[];
  /**
   */
  promotion?: BillingOrderPaymentMean[];
}
/**
 * Payment methods
 */
export interface BillingOrderPaymentMethods {
  /**
   * Payment method available on this order
   *
   */
  available?: PaymentMethodAvailablePaymentMethod[];
  /**
   * IDs of registered payment method usable on this order
   *
   */
  registered?: number[];
}
/**
 * A registered payment mean
 */
export interface BillingOrderRegisteredPaymentMean {
  /**
   */
  paymentMean?: BillingReusablePaymentMeanEnum;
}
/**
 * Retraction reason type
 */
export type BillingOrderRetractionReasonEnum = 'competitor' | 'difficulty' | 'expensive' | 'other' | 'performance' | 'reliability' | 'unused';
/**
 * Type of objects an order can be linked to
 */
export type BillingOrderAssociatedObjectTypeEnum = 'Bill' | 'Deposit' | 'Refund' | 'Withdrawal';
/**
 * Parameter to give to a payment page
 */
export interface BillingOrderPaymentMeanHttpParameter {
  /**
   */
  choice?: BillingOrderPaymentMeanHttpParameterChoice[];
  /**
   */
  name?: string;
  /**
   */
  value?: string;
}
/**
 * Choice for an HTTP multi value parameter
 */
export interface BillingOrderPaymentMeanHttpParameterChoice {
  /**
   */
  name?: string;
  /**
   */
  value?: string;
}
/**
 * Operations an OVH account movement can represent
 */
export type BillingOvhAccountOperationEnum = 'cancel-credit' | 'cancel-debit' | 'cancel-pre-debit' | 'credit' | 'debit' | 'pre-credit' | 'pre-debit';
/**
 * List of payment sub type enum
 */
export type BillingPaymentMethodPaymentSubTypeEnum = 'AMERICAN_EXPRESS' | 'MASTERCARD' | 'VISA';
/**
 * List of payment type enum
 */
export type BillingPaymentMethodPaymentTypeEnum = 'BANK_ACCOUNT' | 'CREDIT_CARD' | 'DEFERRED_PAYMENT_ACCOUNT' | 'ENTERPRISE' | 'INTERNAL_TRUSTED_ACCOUNT' | 'PAYPAL';
/**
 * List of payment method status enum
 */
export type BillingPaymentMethodStatusEnum = 'BLOCKED' | 'BLOCKED_BY_CUSTOMER' | 'BROKEN' | 'CANCELED' | 'CANCELED_BY_CUSTOMER' | 'CREATED' | 'ERROR' | 'EXPIRED' | 'PAUSED' | 'VALID' | 'VALID_FOR_CREDIT';
/**
 * Operations a voucher account movement can represent
 */
export type BillingVoucherAccountOperationEnum = 'cancel-credit' | 'cancel-debit' | 'cancel-pre-debit' | 'credit' | 'debit' | 'pre-credit' | 'pre-debit';
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  /**
   */
  key?: string;
  /**
   */
  value?: T;
}
/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  /**
   */
  unit?: string;
  /**
   */
  value?: T;
}
/**
 * Representation of an Address
 */
export interface ContactAddress {
  /**
   * City
   *
   */
  city?: string;
  /**
   * Country
   *
   */
  country?: NichandleCountryEnum;
  /**
   * First line of the address
   *
   */
  line1?: string;
  /**
   * Second line of the address
   *
   */
  line2?: string;
  /**
   * Third line of the address
   *
   */
  line3?: string;
  /**
   * Others details
   *
   */
  otherDetails?: string;
  /**
   * Province name
   *
   */
  province?: string;
  /**
   * Zipcode
   *
   */
  zip?: string;
}
/**
 * Representation of a Contact
 */
export interface ContactContact {
  /**
   * Address for this contact
   *
   */
  address?: ContactAddress;
  /**
   * Birth city
   *
   */
  birthCity?: string;
  /**
   * Birth Country
   *
   */
  birthCountry?: NichandleCountryEnum;
  /**
   * Birth date
   *
   */
  birthDay?: string;
  /**
   * Birth Zipcode
   *
   */
  birthZip?: string;
  /**
   * Cellphone number
   *
   */
  cellPhone?: string;
  /**
   * National identification number of your company
   *
   */
  companyNationalIdentificationNumber?: string;
  /**
   * Email address
   *
   */
  email?: string;
  /**
   * Fax number
   *
   */
  fax?: string;
  /**
   * First name
   *
   */
  firstName?: string;
  /**
   * Gender
   *
   */
  gender?: NichandleGenderEnum;
  /**
   * Contact Identifier
   *
   */
  id?: number;
  /**
   * Language
   *
   */
  language?: NichandleLanguageEnum;
  /**
   * Last name
   *
   */
  lastName?: string;
  /**
   * Legal form of the contact
   *
   */
  legalForm?: NichandleLegalFormEnum;
  /**
   * National identification number of the contact
   *
   */
  nationalIdentificationNumber?: string;
  /**
   * Nationality
   *
   */
  nationality?: NichandleCountryEnum;
  /**
   * Organisation name
   *
   */
  organisationName?: string;
  /**
   * Organisation type
   *
   */
  organisationType?: string;
  /**
   * Telephone number
   *
   */
  phone?: string;
  /**
   * Spare email address
   *
   */
  spareEmail?: string;
  /**
   * VAT number
   *
   */
  vat?: string;
}
/**
 * Extras informations about a field
 */
export interface ContactFieldInformation {
  /**
   * Name of the field concerned by restrictions
   *
   */
  fieldName?: string;
  /**
   * Indicates if the field is mandatory when editing
   *
   */
  mandatory?: boolean;
  /**
   * Indicates if the field can't be edited
   *
   */
  readOnly?: boolean;
}
/**
 * Continents
 */
export type CoreTypesContinentEnum = 'africa' | 'antartica' | 'asia' | 'europe' | 'north-america' | 'oceania' | 'south-america';
/**
 * ISO country codes
 */
export type CoreTypesCountryEnum = 'ac' | 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'an' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cs' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fc' | 'fd' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'fx' | 'ga' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 'qc' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tp' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'uk' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'we' | 'wf' | 'ws' | 'ye' | 'yt' | 'yu' | 'za' | 'zm' | 'zw';
/**
 * Debt balance of the account
 */
export interface DebtBalance {
  /**
   */
  active?: boolean;
  /**
   * Amount of debts the account has
   *
   */
  dueAmount?: OrderPrice;
  /**
   * Amount currently being processed
   *
   */
  pendingAmount?: OrderPrice;
  /**
   * Reserved amount awaiting payment
   *
   */
  todoAmount?: OrderPrice;
  /**
   * Unmatured amount for deferred payment term
   *
   */
  unmaturedAmount?: OrderPrice;
}
/**
 * State of a debt
 */
export interface DebtDebt {
  /**
   * Original amount of the debt
   *
   */
  amount?: OrderPrice;
  /**
   * Date the debt was created on
   *
   */
  date?: string;
  /**
   */
  debtId?: number;
  /**
   * Amount you still owe for that debt
   *
   */
  dueAmount?: OrderPrice;
  /**
   * If specified, the debt will not be recovered before that date
   *
   */
  dueDate?: string;
  /**
   * The order the debt relates to
   *
   */
  orderId?: number;
  /**
   * Amount currently being processed
   *
   */
  pendingAmount?: OrderPrice;
  /**
   * Reserved amount awaiting payment
   *
   */
  todoAmount?: OrderPrice;
  /**
   * Unmatured amount for deferred payment term
   *
   */
  unmaturedAmount?: OrderPrice;
}
/**
 * Operation that happend on a debt
 */
export interface DebtOperation {
  /**
   * Amount of the operation
   *
   */
  amount?: OrderPrice;
  /**
   * Date the operation took place on
   *
   */
  date?: string;
  /**
   * Order id associated to the deposit
   *
   */
  depositOrderId?: number;
  /**
   */
  operationId?: number;
  /**
   * Status of the operation
   *
   */
  status?: DebtEntryStatusEnum;
  /**
   * Type of movement this operation represents
   *
   */
  type?: DebtEntryOperationEnum;
}
/**
 * The payment infos linked to this debt entry
 */
export interface DebtAssociatedObjectPaymentInfo {
  /**
   * Optional customer description
   *
   */
  description?: string;
  /**
   * Payment mean used for this debt operation
   *
   */
  paymentType?: BillingPaymentMeanEnum;
  /**
   * Public payment mean label
   *
   */
  publicLabel?: string;
}
/**
 * Type of objects an order can be linked to
 */
export type DebtAssociatedObjectTypeEnum = 'Bill' | 'DebtOperation' | 'Deposit' | 'Order' | 'OvhAccountMovement' | 'Refund' | 'Withdrawal';
/**
 * The object linked to this debt entry
 */
export interface DebtEntryAssociatedObject {
  /**
   */
  id?: string;
  /**
   */
  paymentInfo?: DebtAssociatedObjectPaymentInfo;
  /**
   */
  subId?: string;
  /**
   */
  type?: DebtAssociatedObjectTypeEnum;
}
/**
 * All operations a debt entry can represent
 */
export type DebtEntryOperationEnum = 'CANCEL' | 'CASH_MANUAL' | 'CHECK_MANUAL' | 'CREDITCARD' | 'CREDITCARD_AUTOMATIC' | 'CREDITCARD_MANUAL' | 'CREDIT_ACCOUNT_AUTOMATIC' | 'EDINAR_MANUAL' | 'IDEAL_MANUAL' | 'MULTIBANCO_MANUAL' | 'ORDER' | 'PAYPAL_AUTOMATIC' | 'PAYPAL_MANUAL' | 'PAYU_MANUAL' | 'RECOVERY_TRANSFER_AUTOMATIC' | 'REFUND' | 'REFUND_CHECK' | 'REFUND_CREDITCARD' | 'REFUND_CREDIT_ACCOUNT' | 'REFUND_LOSS' | 'REFUND_PAYPAL' | 'REFUND_PAYU' | 'REFUND_SEPA' | 'REFUND_TRANSFER' | 'REFUND_UNKNOWN' | 'SEPA_AUTOMATIC' | 'TRANSFER_MANUAL' | 'UNPAID_CHECK' | 'UNPAID_CREDITCARD' | 'UNPAID_CREDIT_ACCOUNT' | 'UNPAID_PAYPAL' | 'UNPAID_SEPA' | 'UNPAID_WITHDRAW' | 'WARRANT_MANUAL' | 'WITHDRAW_AUTOMATIC';
/**
 * All status a debt entry can be in
 */
export type DebtEntryStatusEnum = 'CANCELLED' | 'DONE' | 'FAILED' | 'PAID' | 'PENDING' | 'TODO';
/**
 * Filesystems available
 */
export type DedicatedTemplateOsFileSystemEnum = 'btrfs' | 'ext3' | 'ext4' | 'ntfs' | 'reiserfs' | 'swap' | 'ufs' | 'xfs' | 'zfs';
/**
 * Hardware RAID enum
 */
export type DedicatedTemplateOsHardwareRaidEnum = 'raid0' | 'raid1' | 'raid10' | 'raid5' | 'raid50' | 'raid6' | 'raid60';
/**
 * all language available
 */
export type DedicatedTemplateOsLanguageEnum = 'ar' | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et' | 'fi' | 'fr' | 'he' | 'hr' | 'hu' | 'it' | 'ja' | 'ko' | 'lt' | 'lv' | 'nb' | 'nl' | 'no' | 'pl' | 'pt' | 'ro' | 'ru' | 'sk' | 'sl' | 'sr' | 'sv' | 'th' | 'tr' | 'tu' | 'uk' | 'zh-Hans-CN' | 'zh-Hans-HK';
/**
 * A structure describing properties customizables about this dedicated installation template
 */
export interface DedicatedTemplateOsProperties {
  /**
   * Template change log details
   *
   */
  changeLog?: string;
  /**
   * Set up the server using the provided hostname instead of the default hostname
   *
   */
  customHostname?: string;
  /**
   * Indicate the URL where your postinstall customisation script is located
   *
   */
  postInstallationScriptLink?: string;
  /**
   * indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is "loh1Xee7eo OK OK OK UGh8Ang1Gu
   *
   */
  postInstallationScriptReturn?: string;
  /**
   */
  rating?: number;
  /**
   * Name of the ssh key that should be installed. Password login will be disabled
   *
   */
  sshKeyName?: string;
  /**
   * Use the distribution's native kernel instead of the recommended OVH Kernel
   *
   */
  useDistributionKernel?: boolean;
}
/**
 * Os type
 */
export type DedicatedTemplateOsTypeEnum = 'bsd' | 'linux' | 'solaris' | 'windows';
/**
 * Os usage definition
 */
export type DedicatedTemplateOsUsageEnum = 'basic' | 'customer' | 'hosting' | 'other' | 'readyToUse' | 'virtualisation';
/**
 * partition type
 */
export type DedicatedTemplatePartitionTypeEnum = 'logical' | 'lv' | 'primary';
/**
 * Available installation templates
 */
export interface DedicatedInstallationTemplateTemplates {
  /**
   * list of all language available for this template
   *
   */
  availableLanguages?: DedicatedTemplateOsLanguageEnum[];
  /**
   * This distribution is new, and although tested and functional, may still display odd behaviour
   *
   */
  beta?: boolean;
  /**
   * this template  bit format
   *
   */
  bitFormat?: DedicatedServerBitFormatEnum;
  /**
   * category of this template (informative only)
   *
   */
  category?: DedicatedTemplateOsUsageEnum;
  /**
   * Customizable template properties
   *
   */
  customization?: DedicatedTemplateOsProperties;
  /**
   * the default language of this template
   *
   */
  defaultLanguage?: DedicatedTemplateOsLanguageEnum;
  /**
   * is this distribution deprecated
   *
   */
  deprecated?: boolean;
  /**
   * information about this template
   *
   */
  description?: string;
  /**
   * the distribution this template is based on
   *
   */
  distribution?: string;
  /**
   * this template family type
   *
   */
  family?: DedicatedTemplateOsTypeEnum;
  /**
   * list of all filesystems  available for this template
   *
   */
  filesystems?: DedicatedTemplateOsFileSystemEnum[];
  /**
   * This distribution supports hardware raid configuration through the OVH API
   *
   */
  hardRaidConfiguration?: boolean;
  /**
   * Date of last modification of the base image
   *
   */
  lastModification?: string;
  /**
   * This distribution supports Logical Volumes (Linux LVM)
   *
   */
  lvmReady?: boolean;
  /**
   * This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel
   *
   */
  supportsDistributionKernel?: boolean;
  /**
   * This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB
   *
   */
  supportsGptLabel?: boolean;
  /**
   * This distribution supports RTM software
   *
   */
  supportsRTM?: boolean;
  /**
   * This distribution supports the microsoft SQL server
   *
   */
  supportsSqlServer?: boolean;
  /**
   * This distribution supports UEFI setup
   *
   */
  supportsUEFI?: DedicatedServerSupportsUEFIEnum;
  /**
   * This template name
   *
   */
  templateName?: string;
}
/**
 * Hardware RAID defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateHardwareRaid {
  /**
   * Disk list
   *
   */
  disks?: string[];
  /**
   * RAID mode
   *
   */
  mode?: DedicatedTemplateOsHardwareRaidEnum;
  /**
   * Hardware RAID name
   *
   */
  name?: string;
  /**
   * Specifies the creation order of the hardware RAID
   *
   */
  step?: number;
}
/**
 * Partitioning schemes available on this template
 */
export interface DedicatedInstallationTemplateTemplatePartitioningSchemes {
  /**
   * name of this partitioning scheme
   *
   */
  name?: string;
  /**
   * on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)
   *
   */
  priority?: number;
}
/**
 *  Partitions defined in this partitioning scheme
 */
export interface DedicatedInstallationTemplateTemplatePartitions {
  /**
   * Partition filesytem
   *
   */
  filesystem?: DedicatedTemplateOsFileSystemEnum;
  /**
   * partition mount point
   *
   */
  mountpoint?: string;
  /**
   * specifies the creation order of the partition on the disk
   *
   */
  order?: number;
  /**
   * raid partition type
   *
   */
  raid?: DedicatedServerPartitionRaidEnum;
  /**
   * size of partition in Mb, 0 => rest of the space
   *
   */
  size?: ComplexTypeUnitAndValue<number>;
  /**
   */
  type?: DedicatedTemplatePartitionTypeEnum;
  /**
   * The volume name needed for proxmox distribution
   *
   */
  volumeName?: string;
}
/**
 * Available os bit format
 */
export type DedicatedServerBitFormatEnum = 32 | 64;
/**
 * partition raid type
 */
export type DedicatedServerPartitionRaidEnum = '0' | '1' | '10' | '5' | '6';
/**
 * supports UEFI setup
 */
export type DedicatedServerSupportsUEFIEnum = 'no' | 'only' | 'yes';
/**
 * Document file format
 */
export type DomainDocumentFormatsEnum = 'gif' | 'jpeg' | 'jpg' | 'pdf' | 'png';
/**
 * Operation functions
 */
export type DomainNicOperationFunctionEnum = 'ContactControl' | 'DnsAnycastActivate' | 'DnsAnycastDeactivate' | 'DnssecDisable' | 'DnssecEnable' | 'DnssecResigning' | 'DnssecRollKsk' | 'DnssecRollZsk' | 'DomainContactControl' | 'DomainContactUpdate' | 'DomainControl' | 'DomainCreate' | 'DomainDelete' | 'DomainDnsUpdate' | 'DomainDsUpdate' | 'DomainHold' | 'DomainHostCreate' | 'DomainHostDelete' | 'DomainHostUpdate' | 'DomainIncomingTransfer' | 'DomainLock' | 'DomainOutgoingTransfer' | 'DomainRenew' | 'DomainRestore' | 'DomainTrade' | 'ZoneImport';
/**
 * operation Action
 */
export type DomainOperationActionEnum = 'canCancel' | 'canCorrect' | 'canRelaunch' | 'canReset';
/**
 * Operation status
 */
export type DomainOperationStatusEnum = 'cancelled' | 'doing' | 'done' | 'error' | 'todo';
/**
 * One step from an operation
 */
export interface DomainOperationStep {
  /**
   * Description of the step
   *
   */
  description?: string;
  /**
   * Execution time of the step
   *
   */
  executionDuration?: number;
  /**
   * Name of the step
   *
   */
  step?: string;
}
/**
 * Representation of country and continent from visitor IP
 */
export interface GeolocationContinentCountryLocation {
  /**
   * Continent
   *
   */
  continent?: CoreTypesContinentEnum;
  /**
   * Country iso code
   *
   */
  countryCode?: CoreTypesCountryEnum;
  /**
   * The IP address processed, the user's origin one
   *
   */
  ip?: string;
}
/**
 * All HTTP methods available
 */
export type HttpMethodEnum = 'DELETE' | 'GET' | 'POST' | 'PUT';
/**
 * Insight access token
 */
export interface InsightAccess {
  /**
   * Access token
   *
   */
  access?: string;
  /**
   * Token creation date
   *
   */
  createdAt?: string;
  /**
   * Token expiration date
   *
   */
  expireAt?: string;
}
/**
 * Consent campaign
 */
export interface MeConsentCampaign {
  /**
   * Campaign description
   *
   */
  description?: string;
  /**
   * Campaign name
   *
   */
  name?: string;
  /**
   * Campaign type
   *
   */
  type?: MeConsentCampaignTypeEnum;
}
/**
 * Campaign type
 */
export type MeConsentCampaignTypeEnum = 'OPTIN' | 'OPTOUT';
/**
 * Customer consent information for a campaign
 */
export interface MeConsentConsent {
  /**
   * Campaign name
   *
   */
  campaign?: string;
  /**
   * Consent decisions history for this campaign
   *
   */
  history?: MeConsentDecision[];
  /**
   * Campaign type
   *
   */
  type?: MeConsentCampaignTypeEnum;
  /**
   * Current consent value
   *
   */
  value?: boolean;
}
/**
 * Customer consent decision
 */
export interface MeConsentDecision {
  /**
   * Consent decision datetime
   *
   */
  timestamp?: string;
  /**
   * Consent decision value
   *
   */
  value?: boolean;
}
/**
 * Price with currency and amount in micro-cents
 */
export interface MeConsumptionPrice {
  /**
   */
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  text?: string;
  /**
   */
  value?: number;
  /**
   */
  valueInUcents?: number;
}
/**
 * List of consumptions recorded in a range
 */
export interface MeConsumptionTransaction {
  /**
   * Begin date
   *
   */
  beginDate?: string;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * List of product plan code consumption
   *
   */
  elements?: MeConsumptionTransactionElement[];
  /**
   * End date
   *
   */
  endDate?: string;
  /**
   * Transaction ID
   *
   */
  id?: number;
  /**
   * Last update
   *
   */
  lastUpdate?: string;
  /**
   * Consumption amount price
   *
   */
  price?: MeConsumptionPrice;
  /**
   * Service ID
   *
   */
  serviceId?: number;
}
/**
 * Element of consumption for resource
 */
export interface MeConsumptionTransactionElement {
  /**
   * List of consumption details for this planCode
   *
   */
  details?: MeConsumptionTransactionElementDetail[];
  /**
   * Identifier of the offer
   *
   */
  planCode?: string;
  /**
   * Family of the offer
   *
   */
  planFamily?: string;
  /**
   * Consumption amount price
   *
   */
  price?: MeConsumptionPrice;
  /**
   * Consumption quantity
   *
   */
  quantity?: number;
}
/**
 * Element of consumption for resource
 */
export interface MeConsumptionTransactionElementDetail {
  /**
   * Consumption amount price
   *
   */
  price?: MeConsumptionPrice;
  /**
   * Consumption quantity
   *
   */
  quantity?: number;
  /**
   * Unique ID associated to one service element
   *
   */
  unique_id?: string;
}
/**
 * Available payment method object
 */
export interface MePaymentMethodAvailablePaymentMethod {
  /**
   * Payment method type icon
   *
   */
  icon?: MePaymentMethodIcon;
  /**
   * Payment method type is possible to pay in oneshot mode ?
   *
   */
  oneshot?: boolean;
  /**
   * Payment method type
   *
   */
  paymentType?: string;
  /**
   * Payment method type is registerable ?
   *
   */
  registerable?: boolean;
}
/**
 * Callback URL's to register a new payment method
 */
export interface MePaymentMethodCallbackUrl {
  /**
   * URL when customer cancels the action
   *
   */
  cancel?: string;
  /**
   * URL when registration encounters an error
   *
   */
  error?: string;
  /**
   * URL when registration failed
   *
   */
  failure?: string;
  /**
   * URL when payment method is in validation
   *
   */
  pending?: string;
  /**
   * URL when payment method registration success
   *
   */
  success?: string;
}
/**
 * Icon
 */
export interface MePaymentMethodIcon {
  /**
   * Icon in base64
   *
   */
  data?: string;
  /**
   * Icon name
   *
   */
  name?: string;
}
/**
 * Payment method object
 */
export interface MePaymentMethodPaymentMethod {
  /**
   * Associated billing contact ID
   *
   */
  billingContactId?: number;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Creation date
   *
   */
  default?: boolean;
  /**
   * Custom customer description
   *
   */
  description?: string;
  /**
   * Expiration date
   *
   */
  expirationDate?: string;
  /**
   * Payment method type icon
   *
   */
  icon?: MePaymentMethodIcon;
  /**
   * Payment method public label
   *
   */
  label?: string;
  /**
   * Last update date
   *
   */
  lastUpdate?: string;
  /**
   * Payment mean ID associated to this payment method
   *
   */
  paymentMeanId?: number;
  /**
   * Payment method ID
   *
   */
  paymentMethodId?: number;
  /**
   * Payment method sub-type
   *
   */
  paymentSubType?: string;
  /**
   * Payment method type
   *
   */
  paymentType?: string;
  /**
   * Payment method status
   *
   */
  status?: MePaymentMethodPaymentMethodStatus;
}
/**
 * Payment method status enum
 */
export type MePaymentMethodPaymentMethodStatus = 'CANCELED' | 'CANCELING' | 'CREATED' | 'CREATING' | 'ERROR' | 'EXPIRED' | 'MAINTENANCE' | 'PAUSED' | 'VALID';
/**
 * Register validation payload result
 */
export interface MePaymentMethodRegisterValidationResult {
  /**
   * Register new payment method ID
   *
   */
  paymentMethodId?: number;
  /**
   * Register validation URL
   *
   */
  url?: string;
  /**
   * Register validation type
   *
   */
  validationType?: MePaymentMethodRegisterValidationType;
}
/**
 * Register validation type enum
 */
export type MePaymentMethodRegisterValidationType = 'DONE' | 'IFRAME_VANTIV' | 'REDIRECT';
/**
 * Payment method transaction object
 */
export interface MePaymentMethodTransaction {
  /**
   * Transaction amount
   *
   */
  amount?: OrderPrice;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Transaction status
   *
   */
  status?: MePaymentMethodTransactionStatus;
  /**
   * Transaction ID
   *
   */
  transactionId?: number;
  /**
   * Transaction type
   *
   */
  type?: MePaymentMethodTransactionType;
}
/**
 * Payment transaction status enum
 */
export type MePaymentMethodTransactionStatus = 'CANCELED' | 'CANCELING' | 'CONFIRMING' | 'CREATED' | 'ERROR' | 'FAILED' | 'READY' | 'SUCCESS';
/**
 * Payment transaction type enum
 */
export type MePaymentMethodTransactionType = 'CREDIT' | 'DEBIT';
/**
 * X509 Certificate
 */
export interface NichandleAuthenticationCertificate {
  /**
   * Certificate's expiration
   *
   */
  expiration?: string;
  /**
   * Certificate's subject
   *
   */
  subject?: string;
}
/**
 * A group
 */
export interface NichandleAuthenticationGroup {
  /**
   * Creation date of this group
   *
   */
  creation?: string;
  /**
   * True if it is an default group. This kind of group can't be edited or deleted
   *
   */
  defaultGroup?: boolean;
  /**
   * Group's description
   *
   */
  description?: string;
  /**
   * Last update of this group
   *
   */
  lastUpdate?: string;
  /**
   * Group's name
   *
   */
  name?: string;
  /**
   * Group's role
   *
   */
  role?: NichandleAuthenticationRoleEnum;
}
/**
 * A SAML 2.0 provider
 */
export interface NichandleAuthenticationProvider {
  /**
   * Creation date of the identity provider
   *
   */
  creation?: string;
  /**
   * SAML Group attribute name
   *
   */
  groupAttributeName?: string;
  /**
   * IdP's signing certificate
   *
   */
  idpSigningCertificate?: NichandleAuthenticationCertificate;
  /**
   * Last update of the identity provider
   *
   */
  lastUpdate?: string;
  /**
   * IdP's Single Sign On Service Url
   *
   */
  ssoServiceUrl?: string;
}
/**
 * Permission given on the account
 */
export type NichandleAuthenticationRoleEnum = 'ADMIN' | 'REGULAR' | 'UNPRIVILEGED';
/**
 * Internal customer billing capacities for customer control panel
 */
export interface NichandleBillingCapacities {
  /**
   * Indicates if the debt system has been enabled on the customer account
   *
   */
  canUseDebtSystem?: boolean;
  /**
   * Indicates customer's ability to use postal mailing for invoices
   *
   */
  canUsePostalMailForInvoices?: boolean;
  /**
   * Indicates the mandatory nature of having a valid payment method
   *
   */
  requiredPaymentMethod?: NichandleRequiredPaymentMethodEnum;
}
/**
 * Countries a nichandle can choose
 */
export type NichandleCountryEnum = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DG' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EA' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'IC' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'UNKNOWN' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';
/**
 * Customer currency
 */
export interface NichandleCurrency {
  /**
   * Currency code
   *
   */
  code?: string;
  /**
   * Currency symbol
   *
   */
  symbol?: string;
}
/**
 * Login restrictions on a development version of the Manager
 */
export interface NichandleDeveloperModeRestriction {
  /**
   * Allow login on your account on a development version of the Manager
   *
   */
  enabled?: boolean;
}
/**
 * Domain tasks
 */
export interface NichandleDomainTask {
  /**
   * Can accelerate the task
   *
   */
  canAccelerate?: boolean;
  /**
   * Can cancel the task
   *
   */
  canCancel?: boolean;
  /**
   * Can relaunch the task
   *
   */
  canRelaunch?: boolean;
  /**
   * Comment about the task
   *
   */
  comment?: string;
  /**
   * Creation date of the task
   *
   */
  creationDate?: string;
  /**
   * Domain of the task
   *
   */
  domain?: string;
  /**
   * Done date of the task
   *
   */
  doneDate?: string;
  /**
   * Function of the task
   *
   */
  function?: DomainNicOperationFunctionEnum;
  /**
   * Id of the task
   *
   */
  id?: number;
  /**
   * Last update date of the task
   *
   */
  lastUpdate?: string;
  /**
   * Status of the task
   *
   */
  status?: DomainOperationStatusEnum;
  /**
   * Todo date of the task
   *
   */
  todoDate?: string;
}
/**
 * Domain operation argument
 */
export interface NichandleDomainTaskArgument {
  /**
   * List of accepted formats
   *
   */
  acceptedFormats?: DomainDocumentFormatsEnum[];
  /**
   * List of accepted values
   *
   */
  acceptedValues?: string[];
  /**
   * Description of the argument
   *
   */
  description?: string;
  /**
   * List of impacted field names
   *
   */
  fields?: XanderContactFieldEnum[];
  /**
   * Key of the argument
   *
   */
  key?: string;
  /**
   * Maximum of the content length that you can send
   *
   */
  maximumSize?: number;
  /**
   * Minimum of the content length that you can send
   *
   */
  minimumSize?: number;
  /**
   * True if the argument is in read only
   *
   */
  readOnly?: boolean;
  /**
   * Template of the content
   *
   */
  template?: string;
  /**
   * Type of the argument
   *
   */
  type?: string;
  /**
   * Value of the argument
   *
   */
  value?: string;
}
/**
 * Domain operation progress
 */
export interface NichandleDomainTaskProgressBar {
  /**
   * Current step of the operation
   *
   */
  currentStep?: DomainOperationStep;
  /**
   * The estimated end date of the task
   *
   */
  expectedDoneDate?: string;
  /**
   * all the steps of operation
   *
   */
  followUpSteps?: DomainOperationStep[];
  /**
   * The last update date of the task
   *
   */
  lastUpdateDate?: string;
  /**
   * Progress percentage of the task
   *
   */
  progress?: number;
  /**
   * Action possible on task
   *
   */
  taskActions?: DomainOperationActionEnum[];
  /**
   * The status of the task
   *
   */
  taskStatus?: DomainOperationStatusEnum;
}
/**
 * All genders a person can choose
 */
export type NichandleGenderEnum = 'female' | 'male';
/**
 * Ip registries
 */
export type NichandleIpRegistryEnum = 'ARIN' | 'RIPE';
/**
 * List of all IP Restrictions
 */
export interface NichandleIpRestriction {
  /**
   * The Id of the restriction
   *
   */
  id?: number;
  /**
   * An IP range where we will apply the rule
   *
   */
  ip?: string;
  /**
   * Accept or deny IP access
   *
   */
  rule?: NichandleAccessRestrictionIpRestrictionRuleEnum;
  /**
   * Send an email if someone try to access with this IP address
   *
   */
  warning?: boolean;
}
/**
 * IP Restriction default rule
 */
export interface NichandleIpRestrictionDefaultRule {
  /**
   * Accept or deny access
   *
   */
  rule?: NichandleAccessRestrictionIpRestrictionRuleEnum;
  /**
   * Send an email if someone try to access
   *
   */
  warning?: boolean;
}
/**
 * Details about an IP block organisation
 */
export interface NichandleIpv4Org {
  /**
   */
  abuse_mailbox?: string;
  /**
   */
  address?: string;
  /**
   */
  city?: string;
  /**
   */
  country?: NichandleCountryEnum;
  /**
   */
  firstname?: string;
  /**
   */
  lastname?: string;
  /**
   */
  organisationId?: string;
  /**
   */
  phone?: string;
  /**
   */
  registry?: NichandleIpRegistryEnum;
  /**
   */
  state?: string;
  /**
   */
  zip?: string;
}
/**
 * Languages a nichandle can choose
 */
export type NichandleLanguageEnum = 'cs_CZ' | 'de_DE' | 'en_AU' | 'en_CA' | 'en_GB' | 'en_IE' | 'en_US' | 'es_ES' | 'fi_FI' | 'fr_CA' | 'fr_FR' | 'fr_MA' | 'fr_SN' | 'fr_TN' | 'it_IT' | 'lt_LT' | 'nl_NL' | 'pl_PL' | 'pt_PT';
/**
 * Legal forms a nichandle can be registered as
 */
export type NichandleLegalFormEnum = 'administration' | 'association' | 'corporation' | 'individual' | 'other' | 'personalcorporation';
/**
 * Manager preference
 */
export interface NichandleManagerPreference {
  /**
   * This preference key
   *
   */
  key?: string;
  /**
   * This preference value
   *
   */
  value?: string;
}
/**
 * Auto renewal information
 */
export interface NichandleNicAutorenewInfos {
  /**
   * Renewal active or not
   *
   */
  active?: boolean;
  /**
   * give the last renew
   *
   */
  lastRenew?: string;
  /**
   * give the renewal day
   *
   */
  renewDay?: number;
}
/**
 * Details about your OVH identifier
 */
export interface NichandleNichandle {
  /**
   */
  address?: string;
  /**
   */
  area?: string;
  /**
   */
  birthCity?: string;
  /**
   */
  birthDay?: string;
  /**
   */
  city?: string;
  /**
   */
  companyNationalIdentificationNumber?: string;
  /**
   */
  corporationType?: string;
  /**
   */
  country?: NichandleCountryEnum;
  /**
   * Customer currency
   *
   */
  currency?: NichandleCurrency;
  /**
   * Your customer code (a numerical value used for identification when contacting support via phone call)
   *
   */
  customerCode?: string;
  /**
   */
  email?: string;
  /**
   */
  fax?: string;
  /**
   */
  firstname?: string;
  /**
   */
  language?: NichandleLanguageEnum;
  /**
   */
  legalform?: NichandleLegalFormEnum;
  /**
   */
  name?: string;
  /**
   */
  nationalIdentificationNumber?: string;
  /**
   */
  nichandle?: string;
  /**
   */
  organisation?: string;
  /**
   */
  ovhCompany?: NichandleOvhCompanyEnum;
  /**
   */
  ovhSubsidiary?: NichandleOvhSubsidiaryEnum;
  /**
   */
  phone?: string;
  /**
   */
  phoneCountry?: NichandleCountryEnum;
  /**
   */
  sex?: NichandleGenderEnum;
  /**
   */
  spareEmail?: string;
  /**
   */
  state?: NichandleStateEnum;
  /**
   */
  vat?: string;
  /**
   */
  zip?: string;
}
/**
 * SMS notifications
 */
export interface NichandleNichandleSmsNotification {
  /**
   * Receive notification for abuse reports
   *
   */
  abuse?: boolean;
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * The phone number you want to receive notification on
   *
   */
  phoneNumber?: string;
  /**
   * Status of your notification
   *
   */
  status?: NichandleNotificationStatusEnum;
  /**
   * Last update date
   *
   */
  updateDate?: string;
}
/**
 * Status of your notification
 */
export type NichandleNotificationStatusEnum = 'ok' | 'waitingForValidation';
/**
 * OVH subsidiaries
 */
export type NichandleOvhCompanyEnum = 'kimsufi' | 'ovh' | 'soyoustart';
/**
 * OVH subsidiaries
 */
export type NichandleOvhSubsidiaryEnum = 'ASIA' | 'AU' | 'CA' | 'CZ' | 'DE' | 'ES' | 'EU' | 'FI' | 'FR' | 'GB' | 'IE' | 'IT' | 'LT' | 'MA' | 'NL' | 'PL' | 'PT' | 'QC' | 'SG' | 'SN' | 'TN' | 'US' | 'WE' | 'WS';
/**
 * Indicates the mandatory nature of having a valid payment method
 */
export type NichandleRequiredPaymentMethodEnum = 'mandatoryForAutorenew' | 'mandatoryForPostpaid' | 'notMandatory';
/**
 * States a nichandle can be in
 */
export type NichandleStateEnum = 'complete' | 'incomplete';
/**
 * Sub Account
 */
export interface NichandleSubAccount {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * This sub-account description
   *
   */
  description?: string;
  /**
   * This sub-account id
   *
   */
  id?: number;
}
/**
 * Credentials to interact with the api on behalf of the sub-account
 */
export interface NichandleSubAccountConsumerKey {
  /**
   * The consumer key
   *
   */
  consumerKey?: string;
}
/**
 * List of all OVH things you can subscribe to
 */
export interface NichandleSubscription {
  /**
   * Determine whether you are registered or not
   *
   */
  registered?: boolean;
  /**
   * The type of subscription
   *
   */
  type?: string;
}
/**
 * A user
 */
export interface NichandleUser {
  /**
   * Creation date of this user
   *
   */
  creation?: string;
  /**
   * User's description
   *
   */
  description?: string;
  /**
   * User's email
   *
   */
  email?: string;
  /**
   * User's group
   *
   */
  group?: string;
  /**
   * Last update of this user
   *
   */
  lastUpdate?: string;
  /**
   * User's login suffix
   *
   */
  login?: string;
  /**
   * When the user changed his password for the last time
   *
   */
  passwordLastUpdate?: string;
  /**
   * Current user's status
   *
   */
  status?: NichandleUserStatus;
}
/**
 * Status of a User
 */
export type NichandleUserStatus = 'DISABLED' | 'OK' | 'PASSWORD_CHANGE_REQUIRED';
/**
 * VIP Status by Universe
 */
export interface NichandleVipStatus {
  /**
   * Is account VIP for Cloud Universe
   *
   */
  cloud?: boolean;
  /**
   * Is account VIP for Dedicated Universe
   *
   */
  dedicated?: boolean;
  /**
   * Is account VIP for Telecom Universe
   *
   */
  telecom?: boolean;
  /**
   * Is account VIP for Web Universe
   *
   */
  web?: boolean;
}
/**
 * Voucher Status and Information
 */
export interface NichandleVoucherStatus {
  /**
   * Is voucher valid
   *
   */
  validity?: boolean;
}
/**
 * Accept or deny IP access
 */
export type NichandleAccessRestrictionIpRestrictionRuleEnum = 'accept' | 'deny';
/**
 * SOTP Two-Factor Authentication
 */
export interface NichandleAccessRestrictionSOTPAccount {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Last used date
   *
   */
  lastUsedDate?: string;
  /**
   * Number of remaining codes
   *
   */
  remaining?: number;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionSOTPStatusEnum;
}
/**
 * Describe SOTP secret keys
 */
export interface NichandleAccessRestrictionSOTPSecret {
  /**
   */
  codes?: string[];
}
/**
 * Status of SOTP account
 */
export type NichandleAccessRestrictionSOTPStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation' | 'needEmailValidation';
/**
 * Describe SOTP validation status
 */
export interface NichandleAccessRestrictionSOTPValidate {
  /**
   */
  remainingCodes?: number;
}
/**
 * Sms Two-Factor Authentication
 */
export interface NichandleAccessRestrictionSmsAccount {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Description of this phone
   *
   */
  description?: string;
  /**
   * The Id of the restriction
   *
   */
  id?: number;
  /**
   * Last used date
   *
   */
  lastUsedDate?: string;
  /**
   * Associated phone number
   *
   */
  phoneNumber?: string;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionSmsStatusEnum;
}
/**
 * Send secret code
 */
export interface NichandleAccessRestrictionSmsCode {
  /**
   */
  challenge?: string;
}
/**
 * Describe secret key
 */
export interface NichandleAccessRestrictionSmsSecret {
  /**
   */
  id?: number;
  /**
   */
  remainingTry?: number;
}
/**
 * Status of the Sms account
 */
export type NichandleAccessRestrictionSmsStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation' | 'needEmailValidation';
/**
 * TOTP Two-Factor Authentication
 */
export interface NichandleAccessRestrictionTOTPAccount {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Description of this TOTP
   *
   */
  description?: string;
  /**
   * The Id of the restriction
   *
   */
  id?: number;
  /**
   * Last used date
   *
   */
  lastUsedDate?: string;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionTOTPStatusEnum;
}
/**
 * Describe TOTP secret keys
 */
export interface NichandleAccessRestrictionTOTPSecret {
  /**
   */
  id?: number;
  /**
   */
  qrcodeHelper?: string;
  /**
   */
  secret?: string;
}
/**
 * Status of TOTP account
 */
export type NichandleAccessRestrictionTOTPStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation' | 'needEmailValidation';
/**
 * U2F Two-Factor Authentication
 */
export interface NichandleAccessRestrictionU2FAccount {
  /**
   * Creation date
   *
   */
  creationDate?: string;
  /**
   * Description of this U2F key
   *
   */
  description?: string;
  /**
   * The Id of the restriction
   *
   */
  id?: number;
  /**
   * Last used date
   *
   */
  lastUsedDate?: string;
  /**
   * Status of this account
   *
   */
  status?: NichandleAccessRestrictionU2FStatusEnum;
}
/**
 * U2F Register Request
 */
export interface NichandleAccessRestrictionU2FRegisterChallenge {
  /**
   */
  applicationId?: string;
  /**
   */
  id?: number;
  /**
   */
  request?: NichandleAccessRestrictionU2FRegistrationRequest;
}
/**
 * Describe U2F RegistrationRequest
 */
export interface NichandleAccessRestrictionU2FRegistrationRequest {
  /**
   */
  challenge?: string;
  /**
   */
  version?: string;
}
/**
 * U2F Register Request
 */
export interface NichandleAccessRestrictionU2FSignChallenge {
  /**
   */
  applicationId?: string;
  /**
   */
  request?: NichandleAccessRestrictionU2FSignRequest;
}
/**
 * Describe U2F SignRequest
 */
export interface NichandleAccessRestrictionU2FSignRequest {
  /**
   */
  challenge?: string;
  /**
   */
  keyHandle?: string;
  /**
   */
  version?: string;
}
/**
 * Status of U2F account
 */
export type NichandleAccessRestrictionU2FStatusEnum = 'disabled' | 'enabled' | 'needCodeValidation';
/**
 * Allowed types of contact who can be changed by change contact task
 */
export type NichandleChangeContactContactTypeEnum = 'contactAdmin' | 'contactBilling' | 'contactTech';
/**
 * State of contact change task
 */
export type NichandleChangeContactTaskStateEnum = 'aborted' | 'checkValidity' | 'doing' | 'done' | 'error' | 'expired' | 'refused' | 'todo' | 'validatingByCustomers';
/**
 * State of email change task
 */
export type NichandleChangeEmailTaskStateEnum = 'aborted' | 'done' | 'refused' | 'todo';
/**
 * Task running a contact change on a service
 */
export interface NichandleContactChangeTask {
  /**
   * Account who asked the contact change
   *
   */
  askingAccount?: string;
  /**
   * Contacts to be changed
   *
   */
  contactTypes?: NichandleChangeContactContactTypeEnum[];
  /**
   * Date at which the contact change has been finished
   *
   */
  dateDone?: string;
  /**
   * Date at which the request has been made
   *
   */
  dateRequest?: string;
  /**
   * Account to change contact from
   *
   */
  fromAccount?: string;
  /**
   */
  id?: number;
  /**
   * The service on which the task runs
   *
   */
  serviceDomain?: string;
  /**
   * Current state of the request
   *
   */
  state?: NichandleChangeContactTaskStateEnum;
  /**
   * Account to change contact to
   *
   */
  toAccount?: string;
}
/**
 * List of documents added on your account
 */
export interface NichandleDocumentDocument {
  /**
   * Document creation
   *
   */
  creationDate?: string;
  /**
   * Document expiration
   *
   */
  expirationDate?: string;
  /**
   * URL used to get document
   *
   */
  getUrl?: string;
  /**
   * Document id
   *
   */
  id?: string;
  /**
   * Document name
   *
   */
  name?: string;
  /**
   * URL used to put document
   *
   */
  putUrl?: string;
  /**
   * Document size (in bytes)
   *
   */
  size?: number;
  /**
   * Document tags
   *
   */
  tags?: ComplexTypeSafeKeyValue<string>[];
  /**
   * Document validation
   *
   */
  validationDate?: string;
}
/**
 * Task running an email change on an account
 */
export interface NichandleEmailChangeTask {
  /**
   * End date of that request
   *
   */
  dateDone?: string;
  /**
   * Creation date of that request
   *
   */
  dateRequest?: string;
  /**
   */
  id?: number;
  /**
   * The email address to change for
   *
   */
  newEmail?: string;
  /**
   * Current state of the request
   *
   */
  state?: NichandleChangeEmailTaskStateEnum;
}
/**
 * Email notification
 */
export interface NichandleEmailNotification {
  /**
   * This email body
   *
   */
  body?: string;
  /**
   * This email date
   *
   */
  date?: string;
  /**
   * This email Id
   *
   */
  id?: number;
  /**
   * This email subject
   *
   */
  subject?: string;
}
/**
 * Customer IPXE scripts
 */
export interface NichandleIpxe {
  /**
   * Name of this script
   *
   */
  name?: string;
  /**
   * Content of your IPXE script
   *
   */
  script?: string;
}
/**
 * Customer public SSH key, can be used for rescue netboot or server access after reinstallation
 */
export interface NichandleSshKey {
  /**
   * True when this public SSH key is used for rescue mode and reinstallations
   *
   */
  default?: boolean;
  /**
   * ASCII encoded public SSH key
   *
   */
  key?: string;
  /**
   * Name of this public SSH key
   *
   */
  keyName?: string;
}
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
  currencyCode?: OrderCurrencyCodeEnum;
  /**
   */
  text?: string;
  /**
   */
  value?: number;
}
/**
 * Available payment methods
 */
export interface PaymentMethodAvailablePaymentMethod {
  /**
   * Payment method type icon
   *
   */
  icon?: PaymentMethodIcon;
  /**
   * Payment method type is possible to pay in oneshot mode ?
   *
   */
  oneshot?: boolean;
  /**
   * Payment method type
   *
   */
  paymentType?: string;
  /**
   * Payment method type is registerable ?
   *
   */
  registerable?: boolean;
}
/**
 * Payment icon
 */
export interface PaymentMethodIcon {
  /**
   * Icon data in base64
   *
   */
  data?: string;
  /**
   * Icon name
   *
   */
  name?: string;
}
/**
 * Billing policies settings
 */
export interface TelephonyBillingSettings {
  /**
   * Renew is done by billing contact instead of billing account
   *
   */
  renewByBillingContact?: boolean;
}
/**
 * Default IP restriction of a VoIP line
 */
export interface TelephonyDefaultIpRestriction {
  /**
   */
  id?: number;
  /**
   * The IPv4 subnet you want to allow
   *
   */
  subnet?: string;
  /**
   * The protocol you want to restrict (sip/mgcp)
   *
   */
  type?: TelephonyProtocolEnum;
}
/**
 * Line description policies settings
 */
export interface TelephonyLineDescriptionSettings {
  /**
   * Line's description is displayed on bills
   *
   */
  displayOnBill?: boolean;
  /**
   * Line's description is displayed on incoming calls
   *
   */
  displayOnIncomingCall?: boolean;
}
/**
 * Custom domains of your fax services
 */
export interface TelephonyMailDomain2Service {
  /**
   * The custom domain of your fax services
   *
   */
  domain?: string;
  /**
   */
  id?: number;
}
/**
 * Phone protocol
 */
export type TelephonyProtocolEnum = 'mgcp' | 'sip';
/**
 * Telephony settings linked to the customer account
 */
export interface TelephonySettings {
  /**
   * Billing policies settings
   *
   */
  billingPolicies?: TelephonyBillingSettings;
  /**
   * Line description policies settings
   *
   */
  lineDescriptionPolicies?: TelephonyLineDescriptionSettings;
}
/**
 * Available contact fields
 */
export type XanderContactFieldEnum = 'address.city' | 'address.country' | 'address.line1' | 'address.line2' | 'address.line3' | 'address.otherDetails' | 'address.province' | 'address.zip' | 'birthCity' | 'birthCountry' | 'birthDay' | 'birthZip' | 'cellPhone' | 'companyNationalIdentificationNumber' | 'email' | 'fax' | 'firstName' | 'gender' | 'language' | 'lastName' | 'legalForm' | 'nationalIdentificationNumber' | 'nationality' | 'organisationName' | 'organisationType' | 'phone' | 'spareEmail' | 'vat';
/**
 * Xdsl Settings
 */
export interface XdslSetting {
  /**
   * Send the modem as soon as possible, do not wait the xdsl line to be active
   *
   */
  resellerFastModemShipping?: boolean;
  /**
   * Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager
   *
   */
  resellerModemBasicConfig?: boolean;
}
type PathsMeGET = '/me' | 
'/me/accessRestriction/backupCode' | 
'/me/accessRestriction/developerMode' | 
'/me/accessRestriction/ip' | 
'/me/accessRestriction/ip/{id}' | 
'/me/accessRestriction/ipDefaultRule' | 
'/me/accessRestriction/sms' | 
'/me/accessRestriction/sms/{id}' | 
'/me/accessRestriction/totp' | 
'/me/accessRestriction/totp/{id}' | 
'/me/accessRestriction/u2f' | 
'/me/accessRestriction/u2f/{id}' | 
'/me/agreements' | 
'/me/agreements/{id}' | 
'/me/agreements/{id}/contract' | 
'/me/api/application' | 
'/me/api/application/{applicationId}' | 
'/me/api/credential' | 
'/me/api/credential/{credentialId}' | 
'/me/api/credential/{credentialId}/application' | 
'/me/api/logs/self' | 
'/me/api/logs/self/{logId}' | 
'/me/api/logs/services' | 
'/me/api/logs/services/{logId}' | 
'/me/autorenew' | 
'/me/availableAutomaticPaymentMeans' | 
'/me/bill' | 
'/me/bill/{billId}' | 
'/me/bill/{billId}/debt' | 
'/me/bill/{billId}/debt/operation' | 
'/me/bill/{billId}/debt/operation/{operationId}' | 
'/me/bill/{billId}/debt/operation/{operationId}/associatedObject' | 
'/me/bill/{billId}/details' | 
'/me/bill/{billId}/details/{billDetailId}' | 
'/me/bill/{billId}/payment' | 
'/me/billing/invoicesByPostalMail' | 
'/me/certificates' | 
'/me/consent' | 
'/me/consent/{campaignName}' | 
'/me/consent/{campaignName}/decision' | 
'/me/consumption/usage/current' | 
'/me/consumption/usage/forecast' | 
'/me/consumption/usage/history' | 
'/me/contact' | 
'/me/contact/{contactId}' | 
'/me/contact/{contactId}/fields' | 
'/me/credit/balance' | 
'/me/credit/balance/{balanceName}' | 
'/me/credit/balance/{balanceName}/movement' | 
'/me/credit/balance/{balanceName}/movement/{movementId}' | 
'/me/debtAccount' | 
'/me/debtAccount/debt' | 
'/me/debtAccount/debt/{debtId}' | 
'/me/debtAccount/debt/{debtId}/operation' | 
'/me/debtAccount/debt/{debtId}/operation/{operationId}' | 
'/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject' | 
'/me/deposit' | 
'/me/deposit/{depositId}' | 
'/me/deposit/{depositId}/details' | 
'/me/deposit/{depositId}/details/{depositDetailId}' | 
'/me/deposit/{depositId}/paidBills' | 
'/me/deposit/{depositId}/paidBills/{billId}' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/operation' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject' | 
'/me/deposit/{depositId}/paidBills/{billId}/details' | 
'/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}' | 
'/me/deposit/{depositId}/paidBills/{billId}/payment' | 
'/me/deposit/{depositId}/payment' | 
'/me/document' | 
'/me/document/{id}' | 
'/me/fax/customDomains' | 
'/me/fax/customDomains/{id}' | 
'/me/fidelityAccount' | 
'/me/fidelityAccount/movements' | 
'/me/fidelityAccount/movements/{movementId}' | 
'/me/identity/group' | 
'/me/identity/group/{group}' | 
'/me/identity/user' | 
'/me/identity/user/{user}' | 
'/me/insight' | 
'/me/installationTemplate' | 
'/me/installationTemplate/{templateName}' | 
'/me/installationTemplate/{templateName}/partitionScheme' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' | 
'/me/ipOrganisation' | 
'/me/ipOrganisation/{organisationId}' | 
'/me/ipxeScript' | 
'/me/ipxeScript/{name}' | 
'/me/mailingList/availableLists' | 
'/me/notification/email/history' | 
'/me/notification/email/history/{id}' | 
'/me/order' | 
'/me/order/{orderId}' | 
'/me/order/{orderId}/associatedObject' | 
'/me/order/{orderId}/availableRegisteredPaymentMean' | 
'/me/order/{orderId}/bill' | 
'/me/order/{orderId}/debt' | 
'/me/order/{orderId}/debt/operation' | 
'/me/order/{orderId}/debt/operation/{operationId}' | 
'/me/order/{orderId}/debt/operation/{operationId}/associatedObject' | 
'/me/order/{orderId}/details' | 
'/me/order/{orderId}/details/{orderDetailId}' | 
'/me/order/{orderId}/details/{orderDetailId}/extension' | 
'/me/order/{orderId}/payment' | 
'/me/order/{orderId}/paymentMeans' | 
'/me/order/{orderId}/paymentMethods' | 
'/me/order/{orderId}/refund' | 
'/me/order/{orderId}/status' | 
'/me/ovhAccount' | 
'/me/ovhAccount/{ovhAccountId}' | 
'/me/ovhAccount/{ovhAccountId}/movements' | 
'/me/ovhAccount/{ovhAccountId}/movements/{movementId}' | 
'/me/payment/availableMethods' | 
'/me/payment/method' | 
'/me/payment/method/{paymentMethodId}' | 
'/me/payment/transaction' | 
'/me/payment/transaction/{transactionId}' | 
'/me/paymentMean/bankAccount' | 
'/me/paymentMean/bankAccount/{id}' | 
'/me/paymentMean/creditCard' | 
'/me/paymentMean/creditCard/{id}' | 
'/me/paymentMean/deferredPaymentAccount' | 
'/me/paymentMean/deferredPaymentAccount/{id}' | 
'/me/paymentMean/paypal' | 
'/me/paymentMean/paypal/{id}' | 
'/me/refund' | 
'/me/refund/{refundId}' | 
'/me/refund/{refundId}/details' | 
'/me/refund/{refundId}/details/{refundDetailId}' | 
'/me/refund/{refundId}/payment' | 
'/me/sla' | 
'/me/sla/{id}' | 
'/me/sla/{id}/canBeApplied' | 
'/me/sla/{id}/services' | 
'/me/sla/{id}/status' | 
'/me/sshKey' | 
'/me/sshKey/{keyName}' | 
'/me/subAccount' | 
'/me/subAccount/{id}' | 
'/me/subscription' | 
'/me/subscription/{subscriptionType}' | 
'/me/task/contactChange' | 
'/me/task/contactChange/{id}' | 
'/me/task/domain' | 
'/me/task/domain/{id}' | 
'/me/task/domain/{id}/argument' | 
'/me/task/domain/{id}/argument/{key}' | 
'/me/task/domain/{id}/progressbar' | 
'/me/task/emailChange' | 
'/me/task/emailChange/{id}' | 
'/me/telephony/defaultIpRestriction' | 
'/me/telephony/defaultIpRestriction/{id}' | 
'/me/telephony/settings' | 
'/me/vipStatus' | 
'/me/withdrawal' | 
'/me/withdrawal/{withdrawalId}' | 
'/me/withdrawal/{withdrawalId}/details' | 
'/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}' | 
'/me/withdrawal/{withdrawalId}/payment' | 
'/me/xdsl/setting';

type PathsMePUT = '/me' | 
'/me/accessRestriction/developerMode' | 
'/me/accessRestriction/ip/{id}' | 
'/me/accessRestriction/ipDefaultRule' | 
'/me/accessRestriction/sms/{id}' | 
'/me/accessRestriction/totp/{id}' | 
'/me/accessRestriction/u2f/{id}' | 
'/me/autorenew' | 
'/me/consent/{campaignName}/decision' | 
'/me/contact/{contactId}' | 
'/me/document/{id}' | 
'/me/fidelityAccount' | 
'/me/identity/group/{group}' | 
'/me/identity/user/{user}' | 
'/me/installationTemplate/{templateName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' | 
'/me/ipOrganisation/{organisationId}' | 
'/me/ovhAccount/{ovhAccountId}' | 
'/me/payment/method/{paymentMethodId}' | 
'/me/paymentMean/bankAccount/{id}' | 
'/me/paymentMean/creditCard/{id}' | 
'/me/paymentMean/deferredPaymentAccount/{id}' | 
'/me/paymentMean/paypal/{id}' | 
'/me/sshKey/{keyName}' | 
'/me/subAccount/{id}' | 
'/me/subscription/{subscriptionType}' | 
'/me/task/domain/{id}/argument/{key}';

type PathsMePOST = '/me/accessRestriction/backupCode' | 
'/me/accessRestriction/backupCode/disable' | 
'/me/accessRestriction/backupCode/enable' | 
'/me/accessRestriction/backupCode/validate' | 
'/me/accessRestriction/ip' | 
'/me/accessRestriction/sms' | 
'/me/accessRestriction/sms/{id}/disable' | 
'/me/accessRestriction/sms/{id}/enable' | 
'/me/accessRestriction/sms/{id}/sendCode' | 
'/me/accessRestriction/sms/{id}/validate' | 
'/me/accessRestriction/totp' | 
'/me/accessRestriction/totp/{id}/disable' | 
'/me/accessRestriction/totp/{id}/enable' | 
'/me/accessRestriction/totp/{id}/validate' | 
'/me/accessRestriction/u2f' | 
'/me/accessRestriction/u2f/{id}/challenge' | 
'/me/accessRestriction/u2f/{id}/disable' | 
'/me/accessRestriction/u2f/{id}/enable' | 
'/me/accessRestriction/u2f/{id}/validate' | 
'/me/agreements/{id}/accept' | 
'/me/autorenew' | 
'/me/bill/{billId}/debt/pay' | 
'/me/billing/invoicesByPostalMail' | 
'/me/changeEmail' | 
'/me/changePassword' | 
'/me/contact' | 
'/me/credit/code' | 
'/me/debtAccount/debt/{debtId}/pay' | 
'/me/debtAccount/pay' | 
'/me/deposit/{depositId}/paidBills/{billId}/debt/pay' | 
'/me/document' | 
'/me/document/cors' | 
'/me/fax/customDomains' | 
'/me/fidelityAccount/creditOrder' | 
'/me/geolocation' | 
'/me/identity/group' | 
'/me/identity/user' | 
'/me/identity/user/{user}/disable' | 
'/me/identity/user/{user}/enable' | 
'/me/installationTemplate' | 
'/me/installationTemplate/{templateName}/checkIntegrity' | 
'/me/installationTemplate/{templateName}/partitionScheme' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition' | 
'/me/ipOrganisation' | 
'/me/ipxeScript' | 
'/me/mailingList/subscribe' | 
'/me/order/{orderId}/debt/pay' | 
'/me/order/{orderId}/pay' | 
'/me/order/{orderId}/payWithRegisteredPaymentMean' | 
'/me/order/{orderId}/retraction' | 
'/me/ovhAccount/{ovhAccountId}/creditOrder' | 
'/me/ovhAccount/{ovhAccountId}/retrieveMoney' | 
'/me/passwordRecover' | 
'/me/payment/method' | 
'/me/payment/method/{paymentMethodId}/finalize' | 
'/me/paymentMean/bankAccount' | 
'/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean' | 
'/me/paymentMean/creditCard' | 
'/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean' | 
'/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean' | 
'/me/paymentMean/paypal' | 
'/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean' | 
'/me/sla/{id}/apply' | 
'/me/sshKey' | 
'/me/subAccount' | 
'/me/subAccount/{id}/createConsumerKey' | 
'/me/task/contactChange/{id}/accept' | 
'/me/task/contactChange/{id}/refuse' | 
'/me/task/contactChange/{id}/resendEmail' | 
'/me/task/domain/{id}/accelerate' | 
'/me/task/domain/{id}/cancel' | 
'/me/task/domain/{id}/relaunch' | 
'/me/task/emailChange/{id}/accept' | 
'/me/task/emailChange/{id}/refuse' | 
'/me/telephony/defaultIpRestriction' | 
'/me/telephony/settings' | 
'/me/voucher/checkValidity' | 
'/me/xdsl/setting';

type PathsMeDELETE = '/me/accessRestriction/backupCode' | 
'/me/accessRestriction/ip/{id}' | 
'/me/accessRestriction/sms/{id}' | 
'/me/accessRestriction/totp/{id}' | 
'/me/accessRestriction/u2f/{id}' | 
'/me/api/application/{applicationId}' | 
'/me/api/credential/{credentialId}' | 
'/me/document/{id}' | 
'/me/fax/customDomains/{id}' | 
'/me/identity/group/{group}' | 
'/me/identity/user/{user}' | 
'/me/installationTemplate/{templateName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}' | 
'/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}' | 
'/me/ipOrganisation/{organisationId}' | 
'/me/ipxeScript/{name}' | 
'/me/payment/method/{paymentMethodId}' | 
'/me/paymentMean/bankAccount/{id}' | 
'/me/paymentMean/creditCard/{id}' | 
'/me/paymentMean/paypal/{id}' | 
'/me/sshKey/{keyName}' | 
'/me/telephony/defaultIpRestriction/{id}';

export class ApiMe extends ApiCommon {
  constructor(engine: OvhApi) {
    super(engine);
  }
  /**
  Details about your OVH identifier
  Get this object properties
  **/
  public get(path: '/me'): Promise<NichandleNichandle>;
  /**
  SOTP Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/backupCode'): Promise<NichandleAccessRestrictionSOTPAccount>;
  /**
  Login restrictions on a development version of the Manager
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/developerMode'): Promise<NichandleDeveloperModeRestriction>;
  /**
  List the nichandle.IpRestriction objects
  List of IP restrictions
  **/
  public get(path: '/me/accessRestriction/ip'): Promise<number[]>;
  /**
  List of all IP Restrictions
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/ip/{id}', params: {id: number}): Promise<NichandleIpRestriction>;
  /**
  IP Restriction default rule
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/ipDefaultRule'): Promise<NichandleIpRestrictionDefaultRule>;
  /**
  List the nichandle.accessRestriction.SmsAccount objects
  List of Sms accounts
  **/
  public get(path: '/me/accessRestriction/sms'): Promise<number[]>;
  /**
  Sms Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/sms/{id}', params: {id: number}): Promise<NichandleAccessRestrictionSmsAccount>;
  /**
  List the nichandle.accessRestriction.TOTPAccount objects
  List of TOTP accounts
  **/
  public get(path: '/me/accessRestriction/totp'): Promise<number[]>;
  /**
  TOTP Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/totp/{id}', params: {id: number}): Promise<NichandleAccessRestrictionTOTPAccount>;
  /**
  List the nichandle.accessRestriction.U2FAccount objects
  List of U2F accounts
  **/
  public get(path: '/me/accessRestriction/u2f'): Promise<number[]>;
  /**
  U2F Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/u2f/{id}', params: {id: number}): Promise<NichandleAccessRestrictionU2FAccount>;
  /**
  List the agreements.ContractAgreement objects
  List of contracts signed between you and OVH
  **/
  public get(path: '/me/agreements'): Promise<number[]>;
  /**
  Contract agreement
  Get this object properties
  **/
  public get(path: '/me/agreements/{id}', params: {id: number}): Promise<AgreementsContractAgreement>;
  /**
  Contract of service
  Get this object properties
  **/
  public get(path: '/me/agreements/{id}/contract', params: {id: number}): Promise<AgreementsContract>;
  /**
  List the api.Application objects
  List of your Api Application
  **/
  public get(path: '/me/api/application'): Promise<number[]>;
  /**
  API Application
  Get this object properties
  **/
  public get(path: '/me/api/application/{applicationId}', params: {applicationId: number}): Promise<ApiApplication>;
  /**
  List the api.Credential objects
  List of your Api Credentials
  **/
  public get(path: '/me/api/credential'): Promise<number[]>;
  /**
  API Credential
  Get this object properties
  **/
  public get(path: '/me/api/credential/{credentialId}', params: {credentialId: number}): Promise<ApiCredential>;
  /**
  API Application
  Get this object properties
  **/
  public get(path: '/me/api/credential/{credentialId}/application', params: {credentialId: number}): Promise<ApiApplication>;
  /**
  List the api.Log objects
  List of Api calls done with your account
  **/
  public get(path: '/me/api/logs/self'): Promise<number[]>;
  /**
  API Log
  Get this object properties
  **/
  public get(path: '/me/api/logs/self/{logId}', params: {logId: number}): Promise<ApiLog>;
  /**
  List the api.Log objects
  List of Api calls done on services you have access to
  **/
  public get(path: '/me/api/logs/services'): Promise<number[]>;
  /**
  API Log
  Get this object properties
  **/
  public get(path: '/me/api/logs/services/{logId}', params: {logId: number}): Promise<ApiLog>;
  /**
  Auto renewal information
  Get this object properties
  **/
  public get(path: '/me/autorenew'): Promise<NichandleNicAutorenewInfos>;
  /**
  availableAutomaticPaymentMeans operations
  List available payment methods in this Nic's country
  **/
  public get(path: '/me/availableAutomaticPaymentMeans'): Promise<BillingAutomaticPaymentMean>;
  /**
  List the billing.Bill objects
  List of all the bills the logged account has
  **/
  public get(path: '/me/bill'): Promise<string[]>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}', params: {billId: string}): Promise<BillingBill>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/debt', params: {billId: string}): Promise<DebtDebt>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/bill/{billId}/debt/operation', params: {billId: string, depositOrderId?: number}): Promise<number[]>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}', params: {billId: string, operationId: number}): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}/associatedObject', params: {billId: string, operationId: number}): Promise<DebtEntryAssociatedObject>;
  /**
  List the billing.BillDetail objects
  Give access to all entries of the bill
  **/
  public get(path: '/me/bill/{billId}/details', params: {billId: string}): Promise<string[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/details/{billDetailId}', params: {billId: string, billDetailId: string}): Promise<BillingBillDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/payment', params: {billId: string}): Promise<BillingPayment>;
  /**
  invoicesByPostalMail operations
  Send invoices through postal mail
  **/
  public get(path: '/me/billing/invoicesByPostalMail'): Promise<boolean>;
  /**
  Get all certificates of the account
  Get all certificates of the account
  **/
  public get(path: '/me/certificates'): Promise<string[]>;
  /**
  List all consent campaign available
  List all consent campaign available
  **/
  public get(path: '/me/consent'): Promise<MeConsentCampaign[]>;
  /**
  Retrieve information about a consent campaign
  Retrieve information about a consent campaign
  **/
  public get(path: '/me/consent/{campaignName}', params: {campaignName: string}): Promise<MeConsentCampaign>;
  /**
  Get decision value for a consent campaign
  Get decision value for a consent campaign
  **/
  public get(path: '/me/consent/{campaignName}/decision', params: {campaignName: string}): Promise<MeConsentConsent>;
  /**
  Missing description
  Get on-going consumptions for all services
  **/
  public get(path: '/me/consumption/usage/current'): Promise<MeConsumptionTransaction[]>;
  /**
  Missing description
  Get forecasted consumptions for all services
  **/
  public get(path: '/me/consumption/usage/forecast'): Promise<MeConsumptionTransaction[]>;
  /**
  Missing description
  Get list of transactions between two dates
  **/
  public get(path: '/me/consumption/usage/history'): Promise<MeConsumptionTransaction[]>;
  /**
  Missing description
  Retrieve all contact that you created
  **/
  public get(path: '/me/contact'): Promise<number[]>;
  /**
  Missing description
  Retrieve information about a contact
  **/
  public get(path: '/me/contact/{contactId}', params: {contactId: number}): Promise<ContactContact>;
  /**
  Missing description
  Display mandatory/read-only informations of a contact
  **/
  public get(path: '/me/contact/{contactId}/fields', params: {contactId: number}): Promise<ContactFieldInformation[]>;
  /**
  Retrieve credit balance names
  Retrieve credit balance names
  **/
  public get(path: '/me/credit/balance'): Promise<string[]>;
  /**
  Retrieve a credit balance
  Retrieve a credit balance
  **/
  public get(path: '/me/credit/balance/{balanceName}', params: {balanceName: string}): Promise<BillingCreditBalance>;
  /**
  Retrieve movements for a specific balance
  Retrieve movements for a specific balance
  **/
  public get(path: '/me/credit/balance/{balanceName}/movement', params: {balanceName: string}): Promise<number[]>;
  /**
  Retrieve a specific movement for a credit balance
  Retrieve a specific movement for a credit balance
  **/
  public get(path: '/me/credit/balance/{balanceName}/movement/{movementId}', params: {balanceName: string, movementId: number}): Promise<BillingCreditBalanceMovement>;
  /**
  Debt balance of the account
  Get this object properties
  **/
  public get(path: '/me/debtAccount'): Promise<DebtBalance>;
  /**
  List the debt.Debt objects
  All debts related to your account
  **/
  public get(path: '/me/debtAccount/debt'): Promise<number[]>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/debtAccount/debt/{debtId}', params: {debtId: number}): Promise<DebtDebt>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation', params: {debtId: number, depositOrderId?: number}): Promise<number[]>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}', params: {debtId: number, operationId: number}): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject', params: {debtId: number, operationId: number}): Promise<DebtEntryAssociatedObject>;
  /**
  List the billing.Deposit objects
  List of all the deposits made to your prepaid account or debt account
  **/
  public get(path: '/me/deposit'): Promise<string[]>;
  /**
  Details about a deposit
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}', params: {depositId: string}): Promise<BillingDeposit>;
  /**
  List the billing.DepositDetail objects
  Give access to all entries of this deposit
  **/
  public get(path: '/me/deposit/{depositId}/details', params: {depositId: string}): Promise<string[]>;
  /**
  Information about a Deposit entry
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/details/{depositDetailId}', params: {depositId: string, depositDetailId: string}): Promise<BillingDepositDetail>;
  /**
  List the billing.Bill objects
  Get invoices paid by this deposit
  **/
  public get(path: '/me/deposit/{depositId}/paidBills', params: {depositId: string}): Promise<string[]>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}', params: {depositId: string, billId: string}): Promise<BillingBill>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt', params: {depositId: string, billId: string}): Promise<DebtDebt>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation', params: {depositId: string, billId: string, depositOrderId?: number}): Promise<number[]>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}', params: {depositId: string, billId: string, operationId: number}): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject', params: {depositId: string, billId: string, operationId: number}): Promise<DebtEntryAssociatedObject>;
  /**
  List the billing.BillDetail objects
  Give access to all entries of the bill
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details', params: {depositId: string, billId: string}): Promise<string[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}', params: {depositId: string, billId: string, billDetailId: string}): Promise<BillingBillDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/payment', params: {depositId: string, billId: string}): Promise<BillingPayment>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/payment', params: {depositId: string}): Promise<BillingPayment>;
  /**
  List the nichandle.document.Document objects
  List of documents added in your account
  **/
  public get(path: '/me/document'): Promise<string[]>;
  /**
  List of documents added on your account
  Get this object properties
  **/
  public get(path: '/me/document/{id}', params: {id: string}): Promise<NichandleDocumentDocument>;
  /**
  List the telephony.MailDomain2Service objects
  Get the fax custom domains linked to the customer account
  **/
  public get(path: '/me/fax/customDomains'): Promise<number[]>;
  /**
  Custom domains of your fax services
  Get this object properties
  **/
  public get(path: '/me/fax/customDomains/{id}', params: {id: number}): Promise<TelephonyMailDomain2Service>;
  /**
  Balance of the fidelity account
  Get this object properties
  **/
  public get(path: '/me/fidelityAccount'): Promise<BillingFidelityAccount>;
  /**
  List the billing.FidelityMovement objects
  List of entries of the fidelity account
  **/
  public get(path: '/me/fidelityAccount/movements'): Promise<number[]>;
  /**
  Details about a fidelity account
  Get this object properties
  **/
  public get(path: '/me/fidelityAccount/movements/{movementId}', params: {movementId: number}): Promise<BillingFidelityMovement>;
  /**
  Groups linked to this account
  Retrieve all groups of this account
  **/
  public get(path: '/me/identity/group'): Promise<string[]>;
  /**
  A group linked to this account
  Get this object properties
  **/
  public get(path: '/me/identity/group/{group}', params: {group: string}): Promise<NichandleAuthenticationGroup>;
  /**
  Users linked to this account
  Retrieve all users of this account
  **/
  public get(path: '/me/identity/user'): Promise<string[]>;
  /**
  A user linked to this account
  Get this object properties
  **/
  public get(path: '/me/identity/user/{user}', params: {user: string}): Promise<NichandleUser>;
  /**
  Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...)
  Get your insight access token
  **/
  public get(path: '/me/insight'): Promise<InsightAccess>;
  /**
  List the dedicated.installationTemplate.Templates objects
  Your customized operating system installation templates
  **/
  public get(path: '/me/installationTemplate'): Promise<string[]>;
  /**
  Available installation templates
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}', params: {templateName: string}): Promise<DedicatedInstallationTemplateTemplates>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Partitioning schemes available on this template
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme', params: {templateName: string}): Promise<string[]>;
  /**
  Partitioning schemes available on this template
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string}): Promise<DedicatedInstallationTemplateTemplatePartitioningSchemes>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Hardware RAIDs defined in this partitioning scheme
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
  Hardware RAID defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string}): Promise<DedicatedInstallationTemplateHardwareRaid>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Partitions defined in this partitioning scheme
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', params: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
   Partitions defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string}): Promise<DedicatedInstallationTemplateTemplatePartitions>;
  /**
  List the nichandle.Ipv4Org objects
  List of organisations
  **/
  public get(path: '/me/ipOrganisation'): Promise<string[]>;
  /**
  Details about an IP block organisation
  Get this object properties
  **/
  public get(path: '/me/ipOrganisation/{organisationId}', params: {organisationId: string}): Promise<NichandleIpv4Org>;
  /**
  List the nichandle.ipxe objects
  List of all your IPXE scripts
  **/
  public get(path: '/me/ipxeScript'): Promise<string[]>;
  /**
  Customer IPXE scripts
  Get this object properties
  **/
  public get(path: '/me/ipxeScript/{name}', params: {name: string}): Promise<NichandleIpxe>;
  /**
  availableLists operations
  List of mailing list you can subscribe
  **/
  public get(path: '/me/mailingList/availableLists'): Promise<string[]>;
  /**
  List the nichandle.emailNotification objects
  List of all your email notifications
  **/
  public get(path: '/me/notification/email/history'): Promise<number[]>;
  /**
  Email notification
  Get this object properties
  **/
  public get(path: '/me/notification/email/history/{id}', params: {id: number}): Promise<NichandleEmailNotification>;
  /**
  List the billing.Order objects
  List of all the orders the logged account has
  **/
  public get(path: '/me/order'): Promise<number[]>;
  /**
  Details about an Order
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}', params: {orderId: number}): Promise<BillingOrder>;
  /**
  associatedObject operations
  Return main data about the object the processing of the order generated
  **/
  public get(path: '/me/order/{orderId}/associatedObject', params: {orderId: number}): Promise<BillingOrderAssociatedObject>;
  /**
  availableRegisteredPaymentMean operations
  List of registered payment mean you can use to pay this order
  **/
  public get(path: '/me/order/{orderId}/availableRegisteredPaymentMean', params: {orderId: number}): Promise<BillingOrderRegisteredPaymentMean[]>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/bill', params: {orderId: number}): Promise<BillingBill>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/debt', params: {orderId: number}): Promise<DebtDebt>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/order/{orderId}/debt/operation', params: {orderId: number, depositOrderId?: number}): Promise<number[]>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}', params: {orderId: number, operationId: number}): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}/associatedObject', params: {orderId: number, operationId: number}): Promise<DebtEntryAssociatedObject>;
  /**
  List the billing.OrderDetail objects
  Give access to all entries of the order
  **/
  public get(path: '/me/order/{orderId}/details', params: {orderId: number}): Promise<number[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/details/{orderDetailId}', params: {orderId: number, orderDetailId: number}): Promise<BillingOrderDetail>;
  /**
  Extensions of a detail
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/details/{orderDetailId}/extension', params: {orderId: number, orderDetailId: number}): Promise<BillingItemDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/payment', params: {orderId: number}): Promise<BillingPayment>;
  /**
  paymentMeans operations
  Return main data about the object the processing of the order generated
  **/
  public get(path: '/me/order/{orderId}/paymentMeans', params: {orderId: number}): Promise<BillingOrderPaymentMeans>;
  /**
  paymentMethods operations
  List of registered payment method you can use to pay this order
  **/
  public get(path: '/me/order/{orderId}/paymentMethods', params: {orderId: number}): Promise<BillingOrderPaymentMethods>;
  /**
  Details about a Refund
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/refund', params: {orderId: number}): Promise<BillingRefund>;
  /**
  status operations
  Return status of order
  **/
  public get(path: '/me/order/{orderId}/status', params: {orderId: number}): Promise<BillingOrderOrderStatusEnum>;
  /**
  List the billing.OvhAccount objects
  List of OVH accounts the logged account has
  **/
  public get(path: '/me/ovhAccount'): Promise<string[]>;
  /**
  Details about an OVH account
  Get this object properties
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}', params: {ovhAccountId: string}): Promise<BillingOvhAccount>;
  /**
  List the billing.Movement objects
  Details about an entry of the OVH account
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements', params: {ovhAccountId: string, 'date.from'?: string, 'date.to'?: string}): Promise<number[]>;
  /**
  Details about an OVH account
  Get this object properties
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements/{movementId}', params: {ovhAccountId: string, movementId: number}): Promise<BillingMovement>;
  /**
  Available payment methods
  Retrieve available payment method
  **/
  public get(path: '/me/payment/availableMethods'): Promise<MePaymentMethodAvailablePaymentMethod[]>;
  /**
  Manage payment method
  Retrieve payment method ID list
  **/
  public get(path: '/me/payment/method'): Promise<number[]>;
  /**
  Manage payment method
  Get one payment method
  **/
  public get(path: '/me/payment/method/{paymentMethodId}', params: {paymentMethodId: number}): Promise<MePaymentMethodPaymentMethod>;
  /**
  Retrieve payment method transaction ID list
  Retrieve associated payment method transaction ID list
  **/
  public get(path: '/me/payment/transaction'): Promise<number[]>;
  /**
  Manage payment method transaction
  Get associated payment method transaction
  **/
  public get(path: '/me/payment/transaction/{transactionId}', params: {transactionId: number}): Promise<MePaymentMethodTransaction>;
  /**
  List the billing.BankAccount objects
  List of bank accounts
  **/
  public get(path: '/me/paymentMean/bankAccount'): Promise<number[]>;
  /**
  SEPA bank account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/bankAccount/{id}', params: {id: number}): Promise<BillingBankAccount>;
  /**
  List the billing.CreditCard objects
  List of credit cards
  **/
  public get(path: '/me/paymentMean/creditCard'): Promise<number[]>;
  /**
  Credit card informations
  Get this object properties
  **/
  public get(path: '/me/paymentMean/creditCard/{id}', params: {id: number}): Promise<BillingCreditCard>;
  /**
  List the billing.DeferredPaymentAccount objects
  List of authorized deferred payment account for this customer
  **/
  public get(path: '/me/paymentMean/deferredPaymentAccount'): Promise<number[]>;
  /**
  Deferred payment account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/deferredPaymentAccount/{id}', params: {id: number}): Promise<BillingDeferredPaymentAccount>;
  /**
  List the billing.Paypal objects
  List of Paypal accounts usable for payments on this account
  **/
  public get(path: '/me/paymentMean/paypal'): Promise<number[]>;
  /**
  Paypal account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/paypal/{id}', params: {id: number}): Promise<BillingPaypal>;
  /**
  List the billing.Refund objects
  List of all the refunds the logged account has
  **/
  public get(path: '/me/refund'): Promise<string[]>;
  /**
  Details about a Refund
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}', params: {refundId: string}): Promise<BillingRefund>;
  /**
  List the billing.RefundDetail objects
  Give access to all entries of the refund
  **/
  public get(path: '/me/refund/{refundId}/details', params: {refundId: string}): Promise<string[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}/details/{refundDetailId}', params: {refundId: string, refundDetailId: string}): Promise<BillingRefundDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}/payment', params: {refundId: string}): Promise<BillingPayment>;
  /**
  List the billing.SlaOperation objects
  List active SLA
  **/
  public get(path: '/me/sla'): Promise<number[]>;
  /**
  SLA properties
  Get this object properties
  **/
  public get(path: '/me/sla/{id}', params: {id: number}): Promise<BillingSlaOperation>;
  /**
  canBeApplied operations
  Check whether this SLA can be applied on your services
  **/
  public get(path: '/me/sla/{id}/canBeApplied', params: {id: number}): Promise<boolean>;
  /**
  services operations
  Get services impacted by this SLA
  **/
  public get(path: '/me/sla/{id}/services', params: {id: number}): Promise<BillingSlaOperationService[]>;
  /**
  status operations
  Get the status request of this SLA
  **/
  public get(path: '/me/sla/{id}/status', params: {id: number}): Promise<string>;
  /**
  List the nichandle.sshKey objects
  List of your public SSH keys
  **/
  public get(path: '/me/sshKey'): Promise<string[]>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Get this object properties
  **/
  public get(path: '/me/sshKey/{keyName}', params: {keyName: string}): Promise<NichandleSshKey>;
  /**
  List the nichandle.SubAccount objects
  List of sub-accounts
  **/
  public get(path: '/me/subAccount'): Promise<number[]>;
  /**
  Sub Account
  Get this object properties
  **/
  public get(path: '/me/subAccount/{id}', params: {id: number}): Promise<NichandleSubAccount>;
  /**
  List the nichandle.Subscription objects
  List of all OVH things you can subscribe to
  **/
  public get(path: '/me/subscription'): Promise<string[]>;
  /**
  List of all OVH things you can subscribe to
  Get this object properties
  **/
  public get(path: '/me/subscription/{subscriptionType}', params: {subscriptionType: string}): Promise<NichandleSubscription>;
  /**
  List the nichandle.contactChange.Task objects
  List of service contact change tasks you are involved in
  **/
  public get(path: '/me/task/contactChange'): Promise<number[]>;
  /**
  Task running a contact change on a service
  Get this object properties
  **/
  public get(path: '/me/task/contactChange/{id}', params: {id: number}): Promise<NichandleContactChangeTask>;
  /**
  List the nichandle.DomainTask objects
  List of domain task
  **/
  public get(path: '/me/task/domain'): Promise<number[]>;
  /**
  Domain tasks
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}', params: {id: number}): Promise<NichandleDomainTask>;
  /**
  List the nichandle.DomainTaskArgument objects
  List of arguments
  **/
  public get(path: '/me/task/domain/{id}/argument', params: {id: number}): Promise<string[]>;
  /**
  Domain operation argument
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}/argument/{key}', params: {id: number, key: string}): Promise<NichandleDomainTaskArgument>;
  /**
  Domain operation progress
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}/progressbar', params: {id: number}): Promise<NichandleDomainTaskProgressBar>;
  /**
  List the nichandle.emailChange.Task objects
  List of email change tasks you are involved in
  **/
  public get(path: '/me/task/emailChange'): Promise<number[]>;
  /**
  Task running an email change on an account
  Get this object properties
  **/
  public get(path: '/me/task/emailChange/{id}', params: {id: number}): Promise<NichandleEmailChangeTask>;
  /**
  List the telephony.DefaultIpRestriction objects
  The default SIP IP restictions for your future VoIP lines
  **/
  public get(path: '/me/telephony/defaultIpRestriction'): Promise<number[]>;
  /**
  Default IP restriction of a VoIP line
  Get this object properties
  **/
  public get(path: '/me/telephony/defaultIpRestriction/{id}', params: {id: number}): Promise<TelephonyDefaultIpRestriction>;
  /**
  settings operations
  Get the telephony settings linked to the customer account
  **/
  public get(path: '/me/telephony/settings'): Promise<TelephonySettings>;
  /**
  vipStatus operations
  VIP Status of this account
  **/
  public get(path: '/me/vipStatus'): Promise<NichandleVipStatus>;
  /**
  List the billing.Withdrawal objects
  List of all the withdrawals made from your prepaid account
  **/
  public get(path: '/me/withdrawal'): Promise<string[]>;
  /**
  Details about a withdrawal
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}', params: {withdrawalId: string}): Promise<BillingWithdrawal>;
  /**
  List the billing.WithdrawalDetail objects
  Give access to all entries of this withdrawal
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/details', params: {withdrawalId: string}): Promise<string[]>;
  /**
  Information about a Withdrawal entry
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}', params: {withdrawalId: string, withdrawalDetailId: string}): Promise<BillingWithdrawalDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/payment', params: {withdrawalId: string}): Promise<BillingPayment>;
  /**
  setting operations
  Get xdsl settings linked to the nichandle
  **/
  public get(path: '/me/xdsl/setting'): Promise<XdslSetting>;
  public get(path: PathsMeGET, params?: OvhParamType) : Promise<any> {
    return super.get(path, params
  );}
  /**
  Details about your OVH identifier
  Alter this object properties
  **/
  public put(path: '/me'): Promise<void>;
  /**
  Login restrictions on a development version of the Manager
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/developerMode'): Promise<void>;
  /**
  List of all IP Restrictions
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/ip/{id}', params: {id: number}): Promise<void>;
  /**
  IP Restriction default rule
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/ipDefaultRule'): Promise<void>;
  /**
  Sms Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/sms/{id}', params: {id: number}): Promise<void>;
  /**
  TOTP Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/totp/{id}', params: {id: number}): Promise<void>;
  /**
  U2F Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/u2f/{id}', params: {id: number}): Promise<void>;
  /**
  Auto renewal information
  Alter this object properties
  **/
  public put(path: '/me/autorenew'): Promise<void>;
  /**
  Get decision value for a consent campaign
  Update decision of a consent campaign
  **/
  public put(path: '/me/consent/{campaignName}/decision', params: {campaignName: string}): Promise<void>;
  /**
  Missing description
  Update an existing contact
  **/
  public put(path: '/me/contact/{contactId}', params: {contactId: number}): Promise<ContactContact>;
  /**
  List of documents added on your account
  Alter this object properties
  **/
  public put(path: '/me/document/{id}', params: {id: string}): Promise<void>;
  /**
  Balance of the fidelity account
  Alter this object properties
  **/
  public put(path: '/me/fidelityAccount'): Promise<void>;
  /**
  A group linked to this account
  Alter a group
  **/
  public put(path: '/me/identity/group/{group}', params: {group: string}): Promise<void>;
  /**
  A user linked to this account
  Alter a user
  **/
  public put(path: '/me/identity/user/{user}', params: {user: string}): Promise<void>;
  /**
  Available installation templates
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}', params: {templateName: string}): Promise<void>;
  /**
  Partitioning schemes available on this template
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string}): Promise<void>;
  /**
  Hardware RAID defined in this partitioning scheme
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string}): Promise<void>;
  /**
   Partitions defined in this partitioning scheme
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string}): Promise<void>;
  /**
  Details about an IP block organisation
  Alter this object properties
  **/
  public put(path: '/me/ipOrganisation/{organisationId}', params: {organisationId: string}): Promise<void>;
  /**
  Details about an OVH account
  Alter this object properties
  **/
  public put(path: '/me/ovhAccount/{ovhAccountId}', params: {ovhAccountId: string}): Promise<void>;
  /**
  Manage payment method
  Edit payment method
  **/
  public put(path: '/me/payment/method/{paymentMethodId}', params: {paymentMethodId: number}): Promise<BillingPaymentMethod>;
  /**
  SEPA bank account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/bankAccount/{id}', params: {id: number}): Promise<void>;
  /**
  Credit card informations
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/creditCard/{id}', params: {id: number}): Promise<void>;
  /**
  Deferred payment account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/deferredPaymentAccount/{id}', params: {id: number}): Promise<void>;
  /**
  Paypal account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/paypal/{id}', params: {id: number}): Promise<void>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Alter this object properties
  **/
  public put(path: '/me/sshKey/{keyName}', params: {keyName: string}): Promise<void>;
  /**
  Sub Account
  Alter this object properties
  **/
  public put(path: '/me/subAccount/{id}', params: {id: number}): Promise<void>;
  /**
  List of all OVH things you can subscribe to
  Alter this object properties
  **/
  public put(path: '/me/subscription/{subscriptionType}', params: {subscriptionType: string}): Promise<void>;
  /**
  Domain operation argument
  Alter this object properties
  **/
  public put(path: '/me/task/domain/{id}/argument/{key}', params: {id: number, key: string}): Promise<void>;
  public put(path: PathsMePUT, params?: OvhParamType) : Promise<any> {
    return super.put(path, params
  );}
  /**
  SOTP Two-Factor Authentication
  Add a SOTP access restriction
  **/
  public post(path: '/me/accessRestriction/backupCode'): Promise<NichandleAccessRestrictionSOTPSecret>;
  /**
  disable operations
  Disable this SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/disable'): Promise<void>;
  /**
  enable operations
  Enable this SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/enable'): Promise<void>;
  /**
  validate operations
  Validate your SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/validate'): Promise<NichandleAccessRestrictionSOTPValidate>;
  /**
  List the nichandle.IpRestriction objects
  Add an IP access restriction
  **/
  public post(path: '/me/accessRestriction/ip'): Promise<void>;
  /**
  List the nichandle.accessRestriction.SmsAccount objects
  Add a SMS access restriction
  **/
  public post(path: '/me/accessRestriction/sms'): Promise<NichandleAccessRestrictionSmsSecret>;
  /**
  disable operations
  Disable this SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/disable', params: {id: number}): Promise<void>;
  /**
  enable operations
  Enable this SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/enable', params: {id: number}): Promise<void>;
  /**
  sendCode operations
  Send a SMS to this account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/sendCode', params: {id: number}): Promise<NichandleAccessRestrictionSmsCode>;
  /**
  validate operations
  Validate your SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/validate', params: {id: number}): Promise<void>;
  /**
  List the nichandle.accessRestriction.TOTPAccount objects
  Add a TOTP access restriction
  **/
  public post(path: '/me/accessRestriction/totp'): Promise<NichandleAccessRestrictionTOTPSecret>;
  /**
  disable operations
  Disable this TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/disable', params: {id: number}): Promise<void>;
  /**
  enable operations
  Enable this TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/enable', params: {id: number}): Promise<void>;
  /**
  validate operations
  Validate your TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/validate', params: {id: number}): Promise<void>;
  /**
  List the nichandle.accessRestriction.U2FAccount objects
  Add a U2F access restriction
  **/
  public post(path: '/me/accessRestriction/u2f'): Promise<NichandleAccessRestrictionU2FRegisterChallenge>;
  /**
  challenge operations
  Get an U2F Challenge
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/challenge', params: {id: number}): Promise<NichandleAccessRestrictionU2FSignChallenge>;
  /**
  disable operations
  Disable this U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/disable', params: {id: number}): Promise<void>;
  /**
  enable operations
  Enable this U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/enable', params: {id: number}): Promise<void>;
  /**
  validate operations
  Validate your U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/validate', params: {id: number}): Promise<void>;
  /**
  accept operations
  Accept this contract
  **/
  public post(path: '/me/agreements/{id}/accept', params: {id: number}): Promise<string>;
  /**
  Auto renewal information
  Activate auto renew for this nic
  **/
  public post(path: '/me/autorenew'): Promise<void>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/bill/{billId}/debt/pay', params: {billId: string}): Promise<BillingOrder>;
  /**
  invoicesByPostalMail operations
  Enable or disable invoices by postal mail
  **/
  public post(path: '/me/billing/invoicesByPostalMail'): Promise<void>;
  /**
  changeEmail operations
  Initiate an email change procedure
  **/
  public post(path: '/me/changeEmail'): Promise<NichandleEmailChangeTask>;
  /**
  changePassword operations
  Initiate a password change procedure
  **/
  public post(path: '/me/changePassword'): Promise<void>;
  /**
  Missing description
  Create a new contact
  **/
  public post(path: '/me/contact'): Promise<ContactContact>;
  /**
  Validate a code to generate associated credit
  Validate a code to generate associated credit movement
  **/
  public post(path: '/me/credit/code'): Promise<BillingCreditBalanceMovement>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/debtAccount/debt/{debtId}/pay', params: {debtId: number}): Promise<BillingOrder>;
  /**
  pay operations
  Create an order in order to pay all your due debts
  **/
  public post(path: '/me/debtAccount/pay'): Promise<BillingOrder>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/pay', params: {depositId: string, billId: string}): Promise<BillingOrder>;
  /**
  List the nichandle.document.Document objects
  Create new document
  **/
  public post(path: '/me/document'): Promise<NichandleDocumentDocument>;
  /**
  Add CORS support on your container
  Add CORS support on your container
  **/
  public post(path: '/me/document/cors'): Promise<void>;
  /**
  List the telephony.MailDomain2Service objects
  Create a custom domain for your fax services
  **/
  public post(path: '/me/fax/customDomains'): Promise<TelephonyMailDomain2Service>;
  /**
  creditOrder operations
  Generate an order that can be paid in order to credit the fidelity account
  **/
  public post(path: '/me/fidelityAccount/creditOrder'): Promise<BillingOrder>;
  /**
  Route for getting visitor's country and continent
  Fetch visitor country & region
  **/
  public post(path: '/me/geolocation'): Promise<GeolocationContinentCountryLocation>;
  /**
  Groups linked to this account
  Create a new group
  **/
  public post(path: '/me/identity/group'): Promise<NichandleAuthenticationGroup>;
  /**
  Users linked to this account
  Create a new user
  **/
  public post(path: '/me/identity/user'): Promise<void>;
  /**
  A user linked to this account
  Disable this user
  **/
  public post(path: '/me/identity/user/{user}/disable', params: {user: string}): Promise<void>;
  /**
  A user linked to this account
  Enable this user
  **/
  public post(path: '/me/identity/user/{user}/enable', params: {user: string}): Promise<void>;
  /**
  List the dedicated.installationTemplate.Templates objects
  Create a template
  **/
  public post(path: '/me/installationTemplate'): Promise<void>;
  /**
  checkIntegrity operations
  Check the integrity of this template
  **/
  public post(path: '/me/installationTemplate/{templateName}/checkIntegrity', params: {templateName: string}): Promise<void>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Add a scheme of partition
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme', params: {templateName: string}): Promise<void>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Add an hardware RAID in this partitioning scheme
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', params: {templateName: string, schemeName: string}): Promise<void>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Add a partition in this partitioning scheme
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', params: {templateName: string, schemeName: string}): Promise<void>;
  /**
  List the nichandle.Ipv4Org objects
  Add an organisation
  **/
  public post(path: '/me/ipOrganisation'): Promise<void>;
  /**
  List the nichandle.ipxe objects
  Add an IPXE script
  **/
  public post(path: '/me/ipxeScript'): Promise<NichandleIpxe>;
  /**
  subscribe operations
  Subscribe an email to a restricted mailing list
  **/
  public post(path: '/me/mailingList/subscribe'): Promise<void>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/order/{orderId}/debt/pay', params: {orderId: number}): Promise<BillingOrder>;
  /**
  pay operations
  Pay with a payment method reference
  **/
  public post(path: '/me/order/{orderId}/pay', params: {orderId: number}): Promise<void>;
  /**
  payWithRegisteredPaymentMean operations
  Pay with an already registered payment mean
  **/
  public post(path: '/me/order/{orderId}/payWithRegisteredPaymentMean', params: {orderId: number}): Promise<void>;
  /**
  retraction operations
  Request retraction of order
  **/
  public post(path: '/me/order/{orderId}/retraction', params: {orderId: number}): Promise<void>;
  /**
  creditOrder operations
  Generate an order that can be paid in order to credit the OVH account
  **/
  public post(path: '/me/ovhAccount/{ovhAccountId}/creditOrder', params: {ovhAccountId: string}): Promise<BillingOrder>;
  /**
  retrieveMoney operations
  Transfer money from ovhAccount to your bank account
  **/
  public post(path: '/me/ovhAccount/{ovhAccountId}/retrieveMoney', params: {ovhAccountId: string}): Promise<BillingOrder>;
  /**
  Request a password recover
  Request a password recover
  **/
  public post(path: '/me/passwordRecover'): Promise<void>;
  /**
  Manage payment method
  Pay an order and register a new payment method if necessary
  **/
  public post(path: '/me/payment/method'): Promise<MePaymentMethodRegisterValidationResult>;
  /**
  Finalize one payment method registration
  Finalize one payment method registration
  **/
  public post(path: '/me/payment/method/{paymentMethodId}/finalize', params: {paymentMethodId: number}): Promise<MePaymentMethodPaymentMethod>;
  /**
  List the billing.BankAccount objects
  Enable payment through a new account
  **/
  public post(path: '/me/paymentMean/bankAccount'): Promise<BillingPaymentMeanValidation>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this bank account as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean', params: {id: number}): Promise<void>;
  /**
  List the billing.CreditCard objects
  Add a new credit card
  **/
  public post(path: '/me/paymentMean/creditCard'): Promise<BillingPaymentMeanValidation>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this credit card as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean', params: {id: number}): Promise<void>;
  /**
  chooseAsDefaultPaymentMean operations
  Allow you to use deferred payment. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean', params: {id: number}): Promise<void>;
  /**
  List the billing.Paypal objects
  Enable payment through a new PayPal account
  **/
  public post(path: '/me/paymentMean/paypal'): Promise<BillingPaymentMeanValidation>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean', params: {id: number}): Promise<void>;
  /**
  apply operations
  Ask for SLA application
  **/
  public post(path: '/me/sla/{id}/apply', params: {id: number}): Promise<void>;
  /**
  List the nichandle.sshKey objects
  Add a new public SSH key
  **/
  public post(path: '/me/sshKey'): Promise<void>;
  /**
  List the nichandle.SubAccount objects
  Create a new sub-account
  **/
  public post(path: '/me/subAccount'): Promise<number>;
  /**
  createConsumerKey operations
  Create a consumer key for the current application
  **/
  public post(path: '/me/subAccount/{id}/createConsumerKey', params: {id: number}): Promise<NichandleSubAccountConsumerKey>;
  /**
  accept operations
  Accept this change request
  **/
  public post(path: '/me/task/contactChange/{id}/accept', params: {id: number}): Promise<void>;
  /**
  refuse operations
  Refuse this change request
  **/
  public post(path: '/me/task/contactChange/{id}/refuse', params: {id: number}): Promise<void>;
  /**
  resendEmail operations
  This call will send you a new email, containing a new token
  **/
  public post(path: '/me/task/contactChange/{id}/resendEmail', params: {id: number}): Promise<void>;
  /**
  accelerate operations
  Accelerate the task
  **/
  public post(path: '/me/task/domain/{id}/accelerate', params: {id: number}): Promise<void>;
  /**
  cancel operations
  Cancel the task
  **/
  public post(path: '/me/task/domain/{id}/cancel', params: {id: number}): Promise<void>;
  /**
  relaunch operations
  Relaunch the task
  **/
  public post(path: '/me/task/domain/{id}/relaunch', params: {id: number}): Promise<void>;
  /**
  accept operations
  Accept this change request
  **/
  public post(path: '/me/task/emailChange/{id}/accept', params: {id: number}): Promise<void>;
  /**
  refuse operations
  Refuse this change request
  **/
  public post(path: '/me/task/emailChange/{id}/refuse', params: {id: number}): Promise<void>;
  /**
  List the telephony.DefaultIpRestriction objects
  Create a default IP restriction for your future VoIP lines
  **/
  public post(path: '/me/telephony/defaultIpRestriction'): Promise<TelephonyDefaultIpRestriction>;
  /**
  settings operations
  Change the telephony settings linked to the customer account
  **/
  public post(path: '/me/telephony/settings'): Promise<void>;
  /**
  checkValidity operations
  Verify existing voucher
  **/
  public post(path: '/me/voucher/checkValidity'): Promise<NichandleVoucherStatus>;
  /**
  setting operations
  Change xdsl settings linked to the nichandle
  **/
  public post(path: '/me/xdsl/setting'): Promise<void>;
  public post(path: PathsMePOST, params?: OvhParamType) : Promise<any> {
    return super.post(path, params
  );}
  /**
  SOTP Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/backupCode'): Promise<void>;
  /**
  List of all IP Restrictions
  Delete this restriction rule
  **/
  public delete(path: '/me/accessRestriction/ip/{id}', params: {id: number}): Promise<void>;
  /**
  Sms Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/sms/{id}', params: {id: number}): Promise<void>;
  /**
  TOTP Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/totp/{id}', params: {id: number}): Promise<void>;
  /**
  U2F Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/u2f/{id}', params: {id: number}): Promise<void>;
  /**
  API Application
  Remove this application. It will revoke all credential belonging to this application.
  **/
  public delete(path: '/me/api/application/{applicationId}', params: {applicationId: number}): Promise<void>;
  /**
  API Credential
  Remove this credential
  **/
  public delete(path: '/me/api/credential/{credentialId}', params: {credentialId: number}): Promise<void>;
  /**
  List of documents added on your account
  Delete a document
  **/
  public delete(path: '/me/document/{id}', params: {id: string}): Promise<void>;
  /**
  Custom domains of your fax services
  Delete a custom domain of your fax services
  **/
  public delete(path: '/me/fax/customDomains/{id}', params: {id: number}): Promise<void>;
  /**
  A group linked to this account
  Delete this object
  **/
  public delete(path: '/me/identity/group/{group}', params: {group: string}): Promise<void>;
  /**
  A user linked to this account
  Delete this object
  **/
  public delete(path: '/me/identity/user/{user}', params: {user: string}): Promise<void>;
  /**
  Available installation templates
  remove this template
  **/
  public delete(path: '/me/installationTemplate/{templateName}', params: {templateName: string}): Promise<void>;
  /**
  Partitioning schemes available on this template
  remove this scheme of partition
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', params: {templateName: string, schemeName: string}): Promise<void>;
  /**
  Hardware RAID defined in this partitioning scheme
  Remove this RAID
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', params: {templateName: string, schemeName: string, name: string}): Promise<void>;
  /**
   Partitions defined in this partitioning scheme
  remove this partition
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', params: {templateName: string, schemeName: string, mountpoint: string}): Promise<void>;
  /**
  Details about an IP block organisation
  Delete this organisation
  **/
  public delete(path: '/me/ipOrganisation/{organisationId}', params: {organisationId: string}): Promise<void>;
  /**
  Customer IPXE scripts
  Remove this IPXE Script
  **/
  public delete(path: '/me/ipxeScript/{name}', params: {name: string}): Promise<void>;
  /**
  Manage payment method
  Cancel one payment method
  **/
  public delete(path: '/me/payment/method/{paymentMethodId}', params: {paymentMethodId: number}): Promise<MePaymentMethodPaymentMethod>;
  /**
  SEPA bank account info
  Disable payment through this account
  **/
  public delete(path: '/me/paymentMean/bankAccount/{id}', params: {id: number}): Promise<void>;
  /**
  Credit card informations
  Disable payment through this credit card
  **/
  public delete(path: '/me/paymentMean/creditCard/{id}', params: {id: number}): Promise<void>;
  /**
  Paypal account info
  Disable payment through this PayPal account
  **/
  public delete(path: '/me/paymentMean/paypal/{id}', params: {id: number}): Promise<void>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Remove this public SSH key
  **/
  public delete(path: '/me/sshKey/{keyName}', params: {keyName: string}): Promise<void>;
  /**
  Default IP restriction of a VoIP line
  Delete a default IP restriction for your future VoIP lines
  **/
  public delete(path: '/me/telephony/defaultIpRestriction/{id}', params: {id: number}): Promise<void>;
  public delete(path: PathsMeDELETE, params?: OvhParamType) : Promise<any> {
    return super.delete(path, params
  );}
}
