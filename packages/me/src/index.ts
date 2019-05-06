import { ApiCommon } from '@ovh-api/common';
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
  contractId?: Number;
  /**
   * Date the agreed contract was effective
   *
   */
  date?: string;
  /**
   * Id of the contract
   *
   */
  id?: Number;
}
/**
 * API Application
 */
export interface ApiApplication {
  /**
   */
  applicationId?: Number;
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
  applicationId?: Number;
  /**
   */
  creation?: string;
  /**
   */
  credentialId?: Number;
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
  logId?: Number;
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
  id?: Number;
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
  orderId?: Number;
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
  id?: Number;
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
  id?: Number;
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
  orderId?: Number;
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
  alertThreshold?: Number;
  /**
   */
  balance?: Number;
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
  amount?: Number;
  /**
   */
  balance?: Number;
  /**
   */
  date?: string;
  /**
   */
  description?: string;
  /**
   */
  movementId?: Number;
  /**
   */
  operation?: BillingFidelityAccountOperationEnum;
  /**
   */
  order?: Number;
  /**
   */
  previousBalance?: Number;
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
  quantity?: Number;
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
  domainsToMigrate?: Number;
  /**
   * Total number of domains successfully migrated to manual renew mode
   *
   */
  migratedDomains?: Number;
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
  movementId?: Number;
  /**
   */
  operation?: BillingOvhAccountOperationEnum;
  /**
   */
  order?: Number;
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
  orderId?: Number;
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
  orderDetailId?: Number;
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
  alertThreshold?: Number;
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
  id?: Number;
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
  billingContactId?: Number;
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
  id?: Number;
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
  id?: Number;
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
  orderId?: Number;
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
  id?: Number;
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
  movementId?: Number;
  /**
   */
  operation?: BillingVoucherAccountOperationEnum;
  /**
   */
  order?: Number;
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
  orderId?: Number;
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
  orderId?: Number;
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
  movementId?: Number;
  /**
   * Order ID associated to this credit movement
   *
   */
  orderId?: Number;
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
  id?: Number;
}
/**
 * All data needed to use a payment mean
 */
export interface BillingOrderPaymentMean {
  /**
   */
  fee?: Number;
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
  registered?: Number[];
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
  id?: Number;
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
  debtId?: Number;
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
  orderId?: Number;
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
  depositOrderId?: Number;
  /**
   */
  operationId?: Number;
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
  rating?: Number;
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
  step?: Number;
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
  priority?: Number;
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
  order?: Number;
  /**
   * raid partition type
   *
   */
  raid?: DedicatedServerPartitionRaidEnum;
  /**
   * size of partition in Mb, 0 => rest of the space
   *
   */
  size?: ComplexTypeUnitAndValue<Number>;
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
  executionDuration?: Number;
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
  value?: Number;
  /**
   */
  valueInUcents?: Number;
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
  id?: Number;
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
  serviceId?: Number;
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
  quantity?: Number;
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
  quantity?: Number;
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
  billingContactId?: Number;
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
  paymentMeanId?: Number;
  /**
   * Payment method ID
   *
   */
  paymentMethodId?: Number;
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
  paymentMethodId?: Number;
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
  transactionId?: Number;
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
  id?: Number;
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
  maximumSize?: Number;
  /**
   * Minimum of the content length that you can send
   *
   */
  minimumSize?: Number;
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
  progress?: Number;
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
  id?: Number;
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
  renewDay?: Number;
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
  id?: Number;
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
  remaining?: Number;
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
  remainingCodes?: Number;
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
  id?: Number;
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
  id?: Number;
  /**
   */
  remainingTry?: Number;
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
  id?: Number;
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
  id?: Number;
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
  id?: Number;
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
  id?: Number;
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
  id?: Number;
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
  size?: Number;
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
  id?: Number;
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
  id?: Number;
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
  value?: Number;
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
  id?: Number;
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
  id?: Number;
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
  constructor(config: {appKey: string, appSecret: string, consumerKey: string}) {
    super(config);
  }
  /**
  List the nichandle.Subscription objects
  List of all OVH things you can subscribe to
  **/
  public get(path: '/me/subscription'): Promise<string[]>;
  /**
  List of all OVH things you can subscribe to
  Get this object properties
  **/
  public get(path: '/me/subscription/{subscriptionType}', pathParams: {subscriptionType: string}): Promise<NichandleSubscription>;
  /**
  availableLists operations
  List of mailing list you can subscribe
  **/
  public get(path: '/me/mailingList/availableLists'): Promise<string[]>;
  /**
  List the nichandle.sshKey objects
  List of your public SSH keys
  **/
  public get(path: '/me/sshKey'): Promise<string[]>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Get this object properties
  **/
  public get(path: '/me/sshKey/{keyName}', pathParams: {keyName: string}): Promise<NichandleSshKey>;
  /**
  List all consent campaign available
  List all consent campaign available
  **/
  public get(path: '/me/consent'): Promise<MeConsentCampaign[]>;
  /**
  Get decision value for a consent campaign
  Get decision value for a consent campaign
  **/
  public get(path: '/me/consent/{campaignName}/decision', pathParams: {campaignName: string}): Promise<MeConsentConsent>;
  /**
  Retrieve information about a consent campaign
  Retrieve information about a consent campaign
  **/
  public get(path: '/me/consent/{campaignName}', pathParams: {campaignName: string}): Promise<MeConsentCampaign>;
  /**
  List the billing.Deposit objects
  List of all the deposits made to your prepaid account or debt account
  **/
  public get(path: '/me/deposit', pathParams: undefined, queryParams: {'date.from'?: string, 'date.to'?: string, orderId?: Number}): Promise<string[]>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/payment', pathParams: {depositId: string}): Promise<BillingPayment>;
  /**
  List the billing.Bill objects
  Get invoices paid by this deposit
  **/
  public get(path: '/me/deposit/{depositId}/paidBills', pathParams: {depositId: string}): Promise<string[]>;
  /**
  List the billing.BillDetail objects
  Give access to all entries of the bill
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details', pathParams: {depositId: string, billId: string}): Promise<string[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/details/{billDetailId}', pathParams: {depositId: string, billId: string, billDetailId: string}): Promise<BillingBillDetail>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}', pathParams: {depositId: string, billId: string}): Promise<BillingBill>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt', pathParams: {depositId: string, billId: string}): Promise<DebtDebt>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}', pathParams: {depositId: string, billId: string, operationId: Number}): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation/{operationId}/associatedObject', pathParams: {depositId: string, billId: string, operationId: Number}): Promise<DebtEntryAssociatedObject>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/operation', pathParams: {depositId: string, billId: string}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/paidBills/{billId}/payment', pathParams: {depositId: string, billId: string}): Promise<BillingPayment>;
  /**
  Details about a deposit
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}', pathParams: {depositId: string}): Promise<BillingDeposit>;
  /**
  Information about a Deposit entry
  Get this object properties
  **/
  public get(path: '/me/deposit/{depositId}/details/{depositDetailId}', pathParams: {depositId: string, depositDetailId: string}): Promise<BillingDepositDetail>;
  /**
  List the billing.DepositDetail objects
  Give access to all entries of this deposit
  **/
  public get(path: '/me/deposit/{depositId}/details', pathParams: {depositId: string}): Promise<string[]>;
  /**
  List the billing.OvhAccount objects
  List of OVH accounts the logged account has
  **/
  public get(path: '/me/ovhAccount'): Promise<string[]>;
  /**
  Details about an OVH account
  Get this object properties
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements/{movementId}', pathParams: {ovhAccountId: string, movementId: Number}): Promise<BillingMovement>;
  /**
  List the billing.Movement objects
  Details about an entry of the OVH account
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}/movements', pathParams: {ovhAccountId: string}, queryParams: {'date.from'?: string, 'date.to'?: string}): Promise<Number[]>;
  /**
  Details about an OVH account
  Get this object properties
  **/
  public get(path: '/me/ovhAccount/{ovhAccountId}', pathParams: {ovhAccountId: string}): Promise<BillingOvhAccount>;
  /**
  Details about a fidelity account
  Get this object properties
  **/
  public get(path: '/me/fidelityAccount/movements/{movementId}', pathParams: {movementId: Number}): Promise<BillingFidelityMovement>;
  /**
  List the billing.FidelityMovement objects
  List of entries of the fidelity account
  **/
  public get(path: '/me/fidelityAccount/movements', pathParams: undefined, queryParams: {'date.to'?: string, 'date.from'?: string}): Promise<Number[]>;
  /**
  Balance of the fidelity account
  Get this object properties
  **/
  public get(path: '/me/fidelityAccount'): Promise<BillingFidelityAccount>;
  /**
  List the nichandle.ipxe objects
  List of all your IPXE scripts
  **/
  public get(path: '/me/ipxeScript'): Promise<string[]>;
  /**
  Customer IPXE scripts
  Get this object properties
  **/
  public get(path: '/me/ipxeScript/{name}', pathParams: {name: string}): Promise<NichandleIpxe>;
  /**
  List the nichandle.emailNotification objects
  List of all your email notifications
  **/
  public get(path: '/me/notification/email/history'): Promise<Number[]>;
  /**
  Email notification
  Get this object properties
  **/
  public get(path: '/me/notification/email/history/{id}', pathParams: {id: Number}): Promise<NichandleEmailNotification>;
  /**
  status operations
  Return status of order
  **/
  public get(path: '/me/order/{orderId}/status', pathParams: {orderId: Number}): Promise<BillingOrderOrderStatusEnum>;
  /**
  List the billing.OrderDetail objects
  Give access to all entries of the order
  **/
  public get(path: '/me/order/{orderId}/details', pathParams: {orderId: Number}): Promise<Number[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/details/{orderDetailId}', pathParams: {orderId: Number, orderDetailId: Number}): Promise<BillingOrderDetail>;
  /**
  Extensions of a detail
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/details/{orderDetailId}/extension', pathParams: {orderId: Number, orderDetailId: Number}): Promise<BillingItemDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/payment', pathParams: {orderId: Number}): Promise<BillingPayment>;
  /**
  Details about a Refund
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/refund', pathParams: {orderId: Number}): Promise<BillingRefund>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/debt', pathParams: {orderId: Number}): Promise<DebtDebt>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/order/{orderId}/debt/operation', pathParams: {orderId: Number}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}/associatedObject', pathParams: {orderId: Number, operationId: Number}): Promise<DebtEntryAssociatedObject>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/debt/operation/{operationId}', pathParams: {orderId: Number, operationId: Number}): Promise<DebtOperation>;
  /**
  paymentMeans operations
  Return main data about the object the processing of the order generated
  **/
  public get(path: '/me/order/{orderId}/paymentMeans', pathParams: {orderId: Number}): Promise<BillingOrderPaymentMeans>;
  /**
  paymentMethods operations
  List of registered payment method you can use to pay this order
  **/
  public get(path: '/me/order/{orderId}/paymentMethods', pathParams: {orderId: Number}): Promise<BillingOrderPaymentMethods>;
  /**
  associatedObject operations
  Return main data about the object the processing of the order generated
  **/
  public get(path: '/me/order/{orderId}/associatedObject', pathParams: {orderId: Number}): Promise<BillingOrderAssociatedObject>;
  /**
  Details about an Order
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}', pathParams: {orderId: Number}): Promise<BillingOrder>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/order/{orderId}/bill', pathParams: {orderId: Number}): Promise<BillingBill>;
  /**
  availableRegisteredPaymentMean operations
  List of registered payment mean you can use to pay this order
  **/
  public get(path: '/me/order/{orderId}/availableRegisteredPaymentMean', pathParams: {orderId: Number}): Promise<BillingOrderRegisteredPaymentMean[]>;
  /**
  List the billing.Order objects
  List of all the orders the logged account has
  **/
  public get(path: '/me/order', pathParams: undefined, queryParams: {'date.from'?: string, 'date.to'?: string}): Promise<Number[]>;
  /**
  Custom domains of your fax services
  Get this object properties
  **/
  public get(path: '/me/fax/customDomains/{id}', pathParams: {id: Number}): Promise<TelephonyMailDomain2Service>;
  /**
  List the telephony.MailDomain2Service objects
  Get the fax custom domains linked to the customer account
  **/
  public get(path: '/me/fax/customDomains'): Promise<Number[]>;
  /**
  setting operations
  Get xdsl settings linked to the nichandle
  **/
  public get(path: '/me/xdsl/setting'): Promise<XdslSetting>;
  /**
  API Log
  Get this object properties
  **/
  public get(path: '/me/api/logs/services/{logId}', pathParams: {logId: Number}): Promise<ApiLog>;
  /**
  List the api.Log objects
  List of Api calls done on services you have access to
  **/
  public get(path: '/me/api/logs/services'): Promise<Number[]>;
  /**
  List the api.Log objects
  List of Api calls done with your account
  **/
  public get(path: '/me/api/logs/self'): Promise<Number[]>;
  /**
  API Log
  Get this object properties
  **/
  public get(path: '/me/api/logs/self/{logId}', pathParams: {logId: Number}): Promise<ApiLog>;
  /**
  List the api.Credential objects
  List of your Api Credentials
  **/
  public get(path: '/me/api/credential', pathParams: undefined, queryParams: {applicationId?: Number, status?: AuthCredentialStateEnum}): Promise<Number[]>;
  /**
  API Credential
  Get this object properties
  **/
  public get(path: '/me/api/credential/{credentialId}', pathParams: {credentialId: Number}): Promise<ApiCredential>;
  /**
  API Application
  Get this object properties
  **/
  public get(path: '/me/api/credential/{credentialId}/application', pathParams: {credentialId: Number}): Promise<ApiApplication>;
  /**
  List the api.Application objects
  List of your Api Application
  **/
  public get(path: '/me/api/application'): Promise<Number[]>;
  /**
  API Application
  Get this object properties
  **/
  public get(path: '/me/api/application/{applicationId}', pathParams: {applicationId: Number}): Promise<ApiApplication>;
  /**
  availableAutomaticPaymentMeans operations
  List available payment methods in this Nic's country
  **/
  public get(path: '/me/availableAutomaticPaymentMeans'): Promise<BillingAutomaticPaymentMean>;
  /**
  Missing description
  Display mandatory/read-only informations of a contact
  **/
  public get(path: '/me/contact/{contactId}/fields', pathParams: {contactId: Number}): Promise<ContactFieldInformation[]>;
  /**
  Missing description
  Retrieve information about a contact
  **/
  public get(path: '/me/contact/{contactId}', pathParams: {contactId: Number}): Promise<ContactContact>;
  /**
  Missing description
  Retrieve all contact that you created
  **/
  public get(path: '/me/contact'): Promise<Number[]>;
  /**
  Auto renewal information
  Get this object properties
  **/
  public get(path: '/me/autorenew'): Promise<NichandleNicAutorenewInfos>;
  /**
  List the billing.BankAccount objects
  List of bank accounts
  **/
  public get(path: '/me/paymentMean/bankAccount', pathParams: undefined, queryParams: {state?: BillingBankAccountStateEnum}): Promise<Number[]>;
  /**
  SEPA bank account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/bankAccount/{id}', pathParams: {id: Number}): Promise<BillingBankAccount>;
  /**
  Paypal account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/paypal/{id}', pathParams: {id: Number}): Promise<BillingPaypal>;
  /**
  List the billing.Paypal objects
  List of Paypal accounts usable for payments on this account
  **/
  public get(path: '/me/paymentMean/paypal'): Promise<Number[]>;
  /**
  List the billing.CreditCard objects
  List of credit cards
  **/
  public get(path: '/me/paymentMean/creditCard'): Promise<Number[]>;
  /**
  Credit card informations
  Get this object properties
  **/
  public get(path: '/me/paymentMean/creditCard/{id}', pathParams: {id: Number}): Promise<BillingCreditCard>;
  /**
  Deferred payment account info
  Get this object properties
  **/
  public get(path: '/me/paymentMean/deferredPaymentAccount/{id}', pathParams: {id: Number}): Promise<BillingDeferredPaymentAccount>;
  /**
  List the billing.DeferredPaymentAccount objects
  List of authorized deferred payment account for this customer
  **/
  public get(path: '/me/paymentMean/deferredPaymentAccount'): Promise<Number[]>;
  /**
  List of documents added on your account
  Get this object properties
  **/
  public get(path: '/me/document/{id}', pathParams: {id: string}): Promise<NichandleDocumentDocument>;
  /**
  List the nichandle.document.Document objects
  List of documents added in your account
  **/
  public get(path: '/me/document'): Promise<string[]>;
  /**
  List the dedicated.installationTemplate.Templates objects
  Your customized operating system installation templates
  **/
  public get(path: '/me/installationTemplate'): Promise<string[]>;
  /**
  Available installation templates
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}', pathParams: {templateName: string}): Promise<DedicatedInstallationTemplateTemplates>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Partitioning schemes available on this template
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme', pathParams: {templateName: string}): Promise<string[]>;
  /**
  Partitioning schemes available on this template
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', pathParams: {templateName: string, schemeName: string}): Promise<DedicatedInstallationTemplateTemplatePartitioningSchemes>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Hardware RAIDs defined in this partitioning scheme
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', pathParams: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
  Hardware RAID defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', pathParams: {templateName: string, schemeName: string, name: string}): Promise<DedicatedInstallationTemplateHardwareRaid>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Partitions defined in this partitioning scheme
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', pathParams: {templateName: string, schemeName: string}): Promise<string[]>;
  /**
   Partitions defined in this partitioning scheme
  Get this object properties
  **/
  public get(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', pathParams: {templateName: string, schemeName: string, mountpoint: string}): Promise<DedicatedInstallationTemplateTemplatePartitions>;
  /**
  List the agreements.ContractAgreement objects
  List of contracts signed between you and OVH
  **/
  public get(path: '/me/agreements', pathParams: undefined, queryParams: {contractId?: Number, agreed?: AgreementsAgreementStateEnum}): Promise<Number[]>;
  /**
  Contract agreement
  Get this object properties
  **/
  public get(path: '/me/agreements/{id}', pathParams: {id: Number}): Promise<AgreementsContractAgreement>;
  /**
  Contract of service
  Get this object properties
  **/
  public get(path: '/me/agreements/{id}/contract', pathParams: {id: Number}): Promise<AgreementsContract>;
  /**
  Manage payment method
  Get one payment method
  **/
  public get(path: '/me/payment/method/{paymentMethodId}', pathParams: {paymentMethodId: Number}): Promise<MePaymentMethodPaymentMethod>;
  /**
  Manage payment method
  Retrieve payment method ID list
  **/
  public get(path: '/me/payment/method', pathParams: undefined, queryParams: {status?: MePaymentMethodPaymentMethodStatus, paymentType?: string}): Promise<Number[]>;
  /**
  Available payment methods
  Retrieve available payment method
  **/
  public get(path: '/me/payment/availableMethods'): Promise<MePaymentMethodAvailablePaymentMethod[]>;
  /**
  Manage payment method transaction
  Get associated payment method transaction
  **/
  public get(path: '/me/payment/transaction/{transactionId}', pathParams: {transactionId: Number}): Promise<MePaymentMethodTransaction>;
  /**
  Retrieve payment method transaction ID list
  Retrieve associated payment method transaction ID list
  **/
  public get(path: '/me/payment/transaction', pathParams: undefined, queryParams: {paymentMethodId?: Number, status?: MePaymentMethodTransactionStatus}): Promise<Number[]>;
  /**
  Details about a Refund
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}', pathParams: {refundId: string}): Promise<BillingRefund>;
  /**
  List the billing.RefundDetail objects
  Give access to all entries of the refund
  **/
  public get(path: '/me/refund/{refundId}/details', pathParams: {refundId: string}): Promise<string[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}/details/{refundDetailId}', pathParams: {refundId: string, refundDetailId: string}): Promise<BillingRefundDetail>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/refund/{refundId}/payment', pathParams: {refundId: string}): Promise<BillingPayment>;
  /**
  List the billing.Refund objects
  List of all the refunds the logged account has
  **/
  public get(path: '/me/refund', pathParams: undefined, queryParams: {orderId?: Number, 'date.from'?: string, 'date.to'?: string}): Promise<string[]>;
  /**
  Retrieve your insight access token. This token give you access to all your products metrics (cloud instances, dedicated servers, load balancers, ...)
  Get your insight access token
  **/
  public get(path: '/me/insight'): Promise<InsightAccess>;
  /**
  status operations
  Get the status request of this SLA
  **/
  public get(path: '/me/sla/{id}/status', pathParams: {id: Number}): Promise<string>;
  /**
  SLA properties
  Get this object properties
  **/
  public get(path: '/me/sla/{id}', pathParams: {id: Number}): Promise<BillingSlaOperation>;
  /**
  services operations
  Get services impacted by this SLA
  **/
  public get(path: '/me/sla/{id}/services', pathParams: {id: Number}): Promise<BillingSlaOperationService[]>;
  /**
  canBeApplied operations
  Check whether this SLA can be applied on your services
  **/
  public get(path: '/me/sla/{id}/canBeApplied', pathParams: {id: Number}): Promise<boolean>;
  /**
  List the billing.SlaOperation objects
  List active SLA
  **/
  public get(path: '/me/sla'): Promise<Number[]>;
  /**
  List the billing.Withdrawal objects
  List of all the withdrawals made from your prepaid account
  **/
  public get(path: '/me/withdrawal', pathParams: undefined, queryParams: {'date.from'?: string, 'date.to'?: string, orderId?: Number}): Promise<string[]>;
  /**
  Details about a withdrawal
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}', pathParams: {withdrawalId: string}): Promise<BillingWithdrawal>;
  /**
  Information about a Withdrawal entry
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/details/{withdrawalDetailId}', pathParams: {withdrawalId: string, withdrawalDetailId: string}): Promise<BillingWithdrawalDetail>;
  /**
  List the billing.WithdrawalDetail objects
  Give access to all entries of this withdrawal
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/details', pathParams: {withdrawalId: string}): Promise<string[]>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/withdrawal/{withdrawalId}/payment', pathParams: {withdrawalId: string}): Promise<BillingPayment>;
  /**
  settings operations
  Get the telephony settings linked to the customer account
  **/
  public get(path: '/me/telephony/settings'): Promise<TelephonySettings>;
  /**
  List the telephony.DefaultIpRestriction objects
  The default SIP IP restictions for your future VoIP lines
  **/
  public get(path: '/me/telephony/defaultIpRestriction'): Promise<Number[]>;
  /**
  Default IP restriction of a VoIP line
  Get this object properties
  **/
  public get(path: '/me/telephony/defaultIpRestriction/{id}', pathParams: {id: Number}): Promise<TelephonyDefaultIpRestriction>;
  /**
  List the nichandle.SubAccount objects
  List of sub-accounts
  **/
  public get(path: '/me/subAccount'): Promise<Number[]>;
  /**
  Sub Account
  Get this object properties
  **/
  public get(path: '/me/subAccount/{id}', pathParams: {id: Number}): Promise<NichandleSubAccount>;
  /**
  List the nichandle.Ipv4Org objects
  List of organisations
  **/
  public get(path: '/me/ipOrganisation'): Promise<string[]>;
  /**
  Details about an IP block organisation
  Get this object properties
  **/
  public get(path: '/me/ipOrganisation/{organisationId}', pathParams: {organisationId: string}): Promise<NichandleIpv4Org>;
  /**
  List the nichandle.accessRestriction.U2FAccount objects
  List of U2F accounts
  **/
  public get(path: '/me/accessRestriction/u2f'): Promise<Number[]>;
  /**
  U2F Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/u2f/{id}', pathParams: {id: Number}): Promise<NichandleAccessRestrictionU2FAccount>;
  /**
  Login restrictions on a development version of the Manager
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/developerMode'): Promise<NichandleDeveloperModeRestriction>;
  /**
  TOTP Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/totp/{id}', pathParams: {id: Number}): Promise<NichandleAccessRestrictionTOTPAccount>;
  /**
  List the nichandle.accessRestriction.TOTPAccount objects
  List of TOTP accounts
  **/
  public get(path: '/me/accessRestriction/totp'): Promise<Number[]>;
  /**
  SOTP Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/backupCode'): Promise<NichandleAccessRestrictionSOTPAccount>;
  /**
  IP Restriction default rule
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/ipDefaultRule'): Promise<NichandleIpRestrictionDefaultRule>;
  /**
  Sms Two-Factor Authentication
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/sms/{id}', pathParams: {id: Number}): Promise<NichandleAccessRestrictionSmsAccount>;
  /**
  List the nichandle.accessRestriction.SmsAccount objects
  List of Sms accounts
  **/
  public get(path: '/me/accessRestriction/sms'): Promise<Number[]>;
  /**
  List of all IP Restrictions
  Get this object properties
  **/
  public get(path: '/me/accessRestriction/ip/{id}', pathParams: {id: Number}): Promise<NichandleIpRestriction>;
  /**
  List the nichandle.IpRestriction objects
  List of IP restrictions
  **/
  public get(path: '/me/accessRestriction/ip'): Promise<Number[]>;
  /**
  invoicesByPostalMail operations
  Send invoices through postal mail
  **/
  public get(path: '/me/billing/invoicesByPostalMail'): Promise<boolean>;
  /**
  Details about your OVH identifier
  Get this object properties
  **/
  public get(path: '/me'): Promise<NichandleNichandle>;
  /**
  Missing description
  Get list of transactions between two dates
  **/
  public get(path: '/me/consumption/usage/history', pathParams: undefined, queryParams: {beginDate?: string, endDate?: string}): Promise<MeConsumptionTransaction[]>;
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
  Users linked to this account
  Retrieve all users of this account
  **/
  public get(path: '/me/identity/user'): Promise<string[]>;
  /**
  A user linked to this account
  Get this object properties
  **/
  public get(path: '/me/identity/user/{user}', pathParams: {user: string}): Promise<NichandleUser>;
  /**
  Groups linked to this account
  Retrieve all groups of this account
  **/
  public get(path: '/me/identity/group'): Promise<string[]>;
  /**
  A group linked to this account
  Get this object properties
  **/
  public get(path: '/me/identity/group/{group}', pathParams: {group: string}): Promise<NichandleAuthenticationGroup>;
  /**
  List the billing.BillDetail objects
  Give access to all entries of the bill
  **/
  public get(path: '/me/bill/{billId}/details', pathParams: {billId: string}): Promise<string[]>;
  /**
  Information about a Bill entry
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/details/{billDetailId}', pathParams: {billId: string, billDetailId: string}): Promise<BillingBillDetail>;
  /**
  Details about a Bill
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}', pathParams: {billId: string}): Promise<BillingBill>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}', pathParams: {billId: string, operationId: Number}): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/bill/{billId}/debt/operation/{operationId}/associatedObject', pathParams: {billId: string, operationId: Number}): Promise<DebtEntryAssociatedObject>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/bill/{billId}/debt/operation', pathParams: {billId: string}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/debt', pathParams: {billId: string}): Promise<DebtDebt>;
  /**
  Details about a payment
  Get this object properties
  **/
  public get(path: '/me/bill/{billId}/payment', pathParams: {billId: string}): Promise<BillingPayment>;
  /**
  List the billing.Bill objects
  List of all the bills the logged account has
  **/
  public get(path: '/me/bill', pathParams: undefined, queryParams: {orderId?: Number, 'date.from'?: string, 'date.to'?: string}): Promise<string[]>;
  /**
  Get all certificates of the account
  Get all certificates of the account
  **/
  public get(path: '/me/certificates', pathParams: undefined, queryParams: {name?: string}): Promise<string[]>;
  /**
  State of a debt
  Get this object properties
  **/
  public get(path: '/me/debtAccount/debt/{debtId}', pathParams: {debtId: Number}): Promise<DebtDebt>;
  /**
  Operation that happend on a debt
  Get this object properties
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}', pathParams: {debtId: Number, operationId: Number}): Promise<DebtOperation>;
  /**
  associatedObject operations
  Return main data about the object related to this debt operation
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation/{operationId}/associatedObject', pathParams: {debtId: Number, operationId: Number}): Promise<DebtEntryAssociatedObject>;
  /**
  List the debt.Operation objects
  All operations related to these debts
  **/
  public get(path: '/me/debtAccount/debt/{debtId}/operation', pathParams: {debtId: Number}, queryParams: {depositOrderId?: Number}): Promise<Number[]>;
  /**
  List the debt.Debt objects
  All debts related to your account
  **/
  public get(path: '/me/debtAccount/debt'): Promise<Number[]>;
  /**
  Debt balance of the account
  Get this object properties
  **/
  public get(path: '/me/debtAccount'): Promise<DebtBalance>;
  /**
  vipStatus operations
  VIP Status of this account
  **/
  public get(path: '/me/vipStatus'): Promise<NichandleVipStatus>;
  /**
  List the nichandle.emailChange.Task objects
  List of email change tasks you are involved in
  **/
  public get(path: '/me/task/emailChange', pathParams: undefined, queryParams: {state?: NichandleChangeEmailTaskStateEnum}): Promise<Number[]>;
  /**
  Task running an email change on an account
  Get this object properties
  **/
  public get(path: '/me/task/emailChange/{id}', pathParams: {id: Number}): Promise<NichandleEmailChangeTask>;
  /**
  List the nichandle.contactChange.Task objects
  List of service contact change tasks you are involved in
  **/
  public get(path: '/me/task/contactChange', pathParams: undefined, queryParams: {state?: NichandleChangeContactTaskStateEnum, askingAccount?: string, toAccount?: string}): Promise<Number[]>;
  /**
  Task running a contact change on a service
  Get this object properties
  **/
  public get(path: '/me/task/contactChange/{id}', pathParams: {id: Number}): Promise<NichandleContactChangeTask>;
  /**
  List the nichandle.DomainTask objects
  List of domain task
  **/
  public get(path: '/me/task/domain', pathParams: undefined, queryParams: {status?: DomainOperationStatusEnum, domain?: string, function?: DomainNicOperationFunctionEnum}): Promise<Number[]>;
  /**
  Domain tasks
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}', pathParams: {id: Number}): Promise<NichandleDomainTask>;
  /**
  Domain operation argument
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}/argument/{key}', pathParams: {id: Number, key: string}): Promise<NichandleDomainTaskArgument>;
  /**
  List the nichandle.DomainTaskArgument objects
  List of arguments
  **/
  public get(path: '/me/task/domain/{id}/argument', pathParams: {id: Number}): Promise<string[]>;
  /**
  Domain operation progress
  Get this object properties
  **/
  public get(path: '/me/task/domain/{id}/progressbar', pathParams: {id: Number}): Promise<NichandleDomainTaskProgressBar>;
  /**
  Retrieve credit balance names
  Retrieve credit balance names
  **/
  public get(path: '/me/credit/balance', pathParams: undefined, queryParams: {type?: BillingCreditBalanceType}): Promise<string[]>;
  /**
  Retrieve a credit balance
  Retrieve a credit balance
  **/
  public get(path: '/me/credit/balance/{balanceName}', pathParams: {balanceName: string}): Promise<BillingCreditBalance>;
  /**
  Retrieve movements for a specific balance
  Retrieve movements for a specific balance
  **/
  public get(path: '/me/credit/balance/{balanceName}/movement', pathParams: {balanceName: string}): Promise<Number[]>;
  /**
  Retrieve a specific movement for a credit balance
  Retrieve a specific movement for a credit balance
  **/
  public get(path: '/me/credit/balance/{balanceName}/movement/{movementId}', pathParams: {balanceName: string, movementId: Number}): Promise<BillingCreditBalanceMovement>;
  public get(path: PathsMeGET, pathParams?: { [key:string]: string | Number; }, queryParams?: any) : Promise<any> {return super.get(path, pathParams, queryParams);}
  /**
  List of all OVH things you can subscribe to
  Alter this object properties
  **/
  public put(path: '/me/subscription/{subscriptionType}', pathParams: {subscriptionType: string}): Promise<void>;
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Alter this object properties
  **/
  public put(path: '/me/sshKey/{keyName}', pathParams: {keyName: string}): Promise<void>;
  /**
  Get decision value for a consent campaign
  Update decision of a consent campaign
  **/
  public put(path: '/me/consent/{campaignName}/decision', pathParams: {campaignName: string}): Promise<void>;
  /**
  Details about an OVH account
  Alter this object properties
  **/
  public put(path: '/me/ovhAccount/{ovhAccountId}', pathParams: {ovhAccountId: string}): Promise<void>;
  /**
  Balance of the fidelity account
  Alter this object properties
  **/
  public put(path: '/me/fidelityAccount'): Promise<void>;
  /**
  Missing description
  Update an existing contact
  **/
  public put(path: '/me/contact/{contactId}', pathParams: {contactId: Number}): Promise<ContactContact>;
  /**
  Auto renewal information
  Alter this object properties
  **/
  public put(path: '/me/autorenew'): Promise<void>;
  /**
  SEPA bank account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/bankAccount/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Paypal account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/paypal/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Credit card informations
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/creditCard/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Deferred payment account info
  Alter this object properties
  **/
  public put(path: '/me/paymentMean/deferredPaymentAccount/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  List of documents added on your account
  Alter this object properties
  **/
  public put(path: '/me/document/{id}', pathParams: {id: string}): Promise<void>;
  /**
  Available installation templates
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}', pathParams: {templateName: string}): Promise<void>;
  /**
  Partitioning schemes available on this template
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', pathParams: {templateName: string, schemeName: string}): Promise<void>;
  /**
  Hardware RAID defined in this partitioning scheme
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', pathParams: {templateName: string, schemeName: string, name: string}): Promise<void>;
  /**
   Partitions defined in this partitioning scheme
  Alter this object properties
  **/
  public put(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', pathParams: {templateName: string, schemeName: string, mountpoint: string}): Promise<void>;
  /**
  Manage payment method
  Edit payment method
  **/
  public put(path: '/me/payment/method/{paymentMethodId}', pathParams: {paymentMethodId: Number}): Promise<BillingPaymentMethod>;
  /**
  Sub Account
  Alter this object properties
  **/
  public put(path: '/me/subAccount/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Details about an IP block organisation
  Alter this object properties
  **/
  public put(path: '/me/ipOrganisation/{organisationId}', pathParams: {organisationId: string}): Promise<void>;
  /**
  U2F Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/u2f/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Login restrictions on a development version of the Manager
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/developerMode'): Promise<void>;
  /**
  TOTP Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/totp/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  IP Restriction default rule
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/ipDefaultRule'): Promise<void>;
  /**
  Sms Two-Factor Authentication
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/sms/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  List of all IP Restrictions
  Alter this object properties
  **/
  public put(path: '/me/accessRestriction/ip/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Details about your OVH identifier
  Alter this object properties
  **/
  public put(path: '/me'): Promise<void>;
  /**
  A user linked to this account
  Alter a user
  **/
  public put(path: '/me/identity/user/{user}', pathParams: {user: string}): Promise<void>;
  /**
  A group linked to this account
  Alter a group
  **/
  public put(path: '/me/identity/group/{group}', pathParams: {group: string}): Promise<void>;
  /**
  Domain operation argument
  Alter this object properties
  **/
  public put(path: '/me/task/domain/{id}/argument/{key}', pathParams: {id: Number, key: string}): Promise<void>;
  public put(path: PathsMePUT, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.put(path, pathParams, bodyParams);}
  /**
  subscribe operations
  Subscribe an email to a restricted mailing list
  **/
  public post(path: '/me/mailingList/subscribe'): Promise<void>;
  /**
  List the nichandle.sshKey objects
  Add a new public SSH key
  **/
  public post(path: '/me/sshKey'): Promise<void>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/deposit/{depositId}/paidBills/{billId}/debt/pay', pathParams: {depositId: string, billId: string}): Promise<BillingOrder>;
  /**
  retrieveMoney operations
  Transfer money from ovhAccount to your bank account
  **/
  public post(path: '/me/ovhAccount/{ovhAccountId}/retrieveMoney', pathParams: {ovhAccountId: string}): Promise<BillingOrder>;
  /**
  creditOrder operations
  Generate an order that can be paid in order to credit the OVH account
  **/
  public post(path: '/me/ovhAccount/{ovhAccountId}/creditOrder', pathParams: {ovhAccountId: string}): Promise<BillingOrder>;
  /**
  creditOrder operations
  Generate an order that can be paid in order to credit the fidelity account
  **/
  public post(path: '/me/fidelityAccount/creditOrder'): Promise<BillingOrder>;
  /**
  List the nichandle.ipxe objects
  Add an IPXE script
  **/
  public post(path: '/me/ipxeScript'): Promise<NichandleIpxe>;
  /**
  pay operations
  Pay with a payment method reference
  **/
  public post(path: '/me/order/{orderId}/pay', pathParams: {orderId: Number}): Promise<void>;
  /**
  payWithRegisteredPaymentMean operations
  Pay with an already registered payment mean
  **/
  public post(path: '/me/order/{orderId}/payWithRegisteredPaymentMean', pathParams: {orderId: Number}): Promise<void>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/order/{orderId}/debt/pay', pathParams: {orderId: Number}): Promise<BillingOrder>;
  /**
  retraction operations
  Request retraction of order
  **/
  public post(path: '/me/order/{orderId}/retraction', pathParams: {orderId: Number}): Promise<void>;
  /**
  List the telephony.MailDomain2Service objects
  Create a custom domain for your fax services
  **/
  public post(path: '/me/fax/customDomains'): Promise<TelephonyMailDomain2Service>;
  /**
  setting operations
  Change xdsl settings linked to the nichandle
  **/
  public post(path: '/me/xdsl/setting'): Promise<void>;
  /**
  Missing description
  Create a new contact
  **/
  public post(path: '/me/contact'): Promise<ContactContact>;
  /**
  Auto renewal information
  Activate auto renew for this nic
  **/
  public post(path: '/me/autorenew'): Promise<void>;
  /**
  List the billing.BankAccount objects
  Enable payment through a new account
  **/
  public post(path: '/me/paymentMean/bankAccount'): Promise<BillingPaymentMeanValidation>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this bank account as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/bankAccount/{id}/chooseAsDefaultPaymentMean', pathParams: {id: Number}): Promise<void>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this Paypal agreement as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/paypal/{id}/chooseAsDefaultPaymentMean', pathParams: {id: Number}): Promise<void>;
  /**
  List the billing.Paypal objects
  Enable payment through a new PayPal account
  **/
  public post(path: '/me/paymentMean/paypal'): Promise<BillingPaymentMeanValidation>;
  /**
  List the billing.CreditCard objects
  Add a new credit card
  **/
  public post(path: '/me/paymentMean/creditCard'): Promise<BillingPaymentMeanValidation>;
  /**
  chooseAsDefaultPaymentMean operations
  Choose this credit card as your default payment mean. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/creditCard/{id}/chooseAsDefaultPaymentMean', pathParams: {id: Number}): Promise<void>;
  /**
  chooseAsDefaultPaymentMean operations
  Allow you to use deferred payment. Will cancel the previous choice.
  **/
  public post(path: '/me/paymentMean/deferredPaymentAccount/{id}/chooseAsDefaultPaymentMean', pathParams: {id: Number}): Promise<void>;
  /**
  Add CORS support on your container
  Add CORS support on your container
  **/
  public post(path: '/me/document/cors'): Promise<void>;
  /**
  List the nichandle.document.Document objects
  Create new document
  **/
  public post(path: '/me/document'): Promise<NichandleDocumentDocument>;
  /**
  List the dedicated.installationTemplate.Templates objects
  Create a template
  **/
  public post(path: '/me/installationTemplate'): Promise<void>;
  /**
  List the dedicated.installationTemplate.templatePartitioningSchemes objects
  Add a scheme of partition
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme', pathParams: {templateName: string}): Promise<void>;
  /**
  List the dedicated.installationTemplate.hardwareRaid objects
  Add an hardware RAID in this partitioning scheme
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid', pathParams: {templateName: string, schemeName: string}): Promise<void>;
  /**
  List the dedicated.installationTemplate.templatePartitions objects
  Add a partition in this partitioning scheme
  **/
  public post(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition', pathParams: {templateName: string, schemeName: string}): Promise<void>;
  /**
  checkIntegrity operations
  Check the integrity of this template
  **/
  public post(path: '/me/installationTemplate/{templateName}/checkIntegrity', pathParams: {templateName: string}): Promise<void>;
  /**
  accept operations
  Accept this contract
  **/
  public post(path: '/me/agreements/{id}/accept', pathParams: {id: Number}): Promise<string>;
  /**
  Finalize one payment method registration
  Finalize one payment method registration
  **/
  public post(path: '/me/payment/method/{paymentMethodId}/finalize', pathParams: {paymentMethodId: Number}): Promise<MePaymentMethodPaymentMethod>;
  /**
  Manage payment method
  Pay an order and register a new payment method if necessary
  **/
  public post(path: '/me/payment/method'): Promise<MePaymentMethodRegisterValidationResult>;
  /**
  apply operations
  Ask for SLA application
  **/
  public post(path: '/me/sla/{id}/apply', pathParams: {id: Number}): Promise<void>;
  /**
  settings operations
  Change the telephony settings linked to the customer account
  **/
  public post(path: '/me/telephony/settings'): Promise<void>;
  /**
  List the telephony.DefaultIpRestriction objects
  Create a default IP restriction for your future VoIP lines
  **/
  public post(path: '/me/telephony/defaultIpRestriction'): Promise<TelephonyDefaultIpRestriction>;
  /**
  List the nichandle.SubAccount objects
  Create a new sub-account
  **/
  public post(path: '/me/subAccount'): Promise<Number>;
  /**
  createConsumerKey operations
  Create a consumer key for the current application
  **/
  public post(path: '/me/subAccount/{id}/createConsumerKey', pathParams: {id: Number}): Promise<NichandleSubAccountConsumerKey>;
  /**
  checkValidity operations
  Verify existing voucher
  **/
  public post(path: '/me/voucher/checkValidity'): Promise<NichandleVoucherStatus>;
  /**
  changeEmail operations
  Initiate an email change procedure
  **/
  public post(path: '/me/changeEmail'): Promise<NichandleEmailChangeTask>;
  /**
  List the nichandle.Ipv4Org objects
  Add an organisation
  **/
  public post(path: '/me/ipOrganisation'): Promise<void>;
  /**
  List the nichandle.accessRestriction.U2FAccount objects
  Add a U2F access restriction
  **/
  public post(path: '/me/accessRestriction/u2f'): Promise<NichandleAccessRestrictionU2FRegisterChallenge>;
  /**
  disable operations
  Disable this U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/disable', pathParams: {id: Number}): Promise<void>;
  /**
  challenge operations
  Get an U2F Challenge
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/challenge', pathParams: {id: Number}): Promise<NichandleAccessRestrictionU2FSignChallenge>;
  /**
  validate operations
  Validate your U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/validate', pathParams: {id: Number}): Promise<void>;
  /**
  enable operations
  Enable this U2F account
  **/
  public post(path: '/me/accessRestriction/u2f/{id}/enable', pathParams: {id: Number}): Promise<void>;
  /**
  enable operations
  Enable this TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/enable', pathParams: {id: Number}): Promise<void>;
  /**
  disable operations
  Disable this TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/disable', pathParams: {id: Number}): Promise<void>;
  /**
  validate operations
  Validate your TOTP account
  **/
  public post(path: '/me/accessRestriction/totp/{id}/validate', pathParams: {id: Number}): Promise<void>;
  /**
  List the nichandle.accessRestriction.TOTPAccount objects
  Add a TOTP access restriction
  **/
  public post(path: '/me/accessRestriction/totp'): Promise<NichandleAccessRestrictionTOTPSecret>;
  /**
  validate operations
  Validate your SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/validate'): Promise<NichandleAccessRestrictionSOTPValidate>;
  /**
  disable operations
  Disable this SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/disable'): Promise<void>;
  /**
  SOTP Two-Factor Authentication
  Add a SOTP access restriction
  **/
  public post(path: '/me/accessRestriction/backupCode'): Promise<NichandleAccessRestrictionSOTPSecret>;
  /**
  enable operations
  Enable this SOTP account
  **/
  public post(path: '/me/accessRestriction/backupCode/enable'): Promise<void>;
  /**
  disable operations
  Disable this SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/disable', pathParams: {id: Number}): Promise<void>;
  /**
  validate operations
  Validate your SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/validate', pathParams: {id: Number}): Promise<void>;
  /**
  enable operations
  Enable this SMS account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/enable', pathParams: {id: Number}): Promise<void>;
  /**
  sendCode operations
  Send a SMS to this account
  **/
  public post(path: '/me/accessRestriction/sms/{id}/sendCode', pathParams: {id: Number}): Promise<NichandleAccessRestrictionSmsCode>;
  /**
  List the nichandle.accessRestriction.SmsAccount objects
  Add a SMS access restriction
  **/
  public post(path: '/me/accessRestriction/sms'): Promise<NichandleAccessRestrictionSmsSecret>;
  /**
  List the nichandle.IpRestriction objects
  Add an IP access restriction
  **/
  public post(path: '/me/accessRestriction/ip'): Promise<void>;
  /**
  invoicesByPostalMail operations
  Enable or disable invoices by postal mail
  **/
  public post(path: '/me/billing/invoicesByPostalMail'): Promise<void>;
  /**
  changePassword operations
  Initiate a password change procedure
  **/
  public post(path: '/me/changePassword'): Promise<void>;
  /**
  Users linked to this account
  Create a new user
  **/
  public post(path: '/me/identity/user'): Promise<void>;
  /**
  A user linked to this account
  Enable this user
  **/
  public post(path: '/me/identity/user/{user}/enable', pathParams: {user: string}): Promise<void>;
  /**
  A user linked to this account
  Disable this user
  **/
  public post(path: '/me/identity/user/{user}/disable', pathParams: {user: string}): Promise<void>;
  /**
  Groups linked to this account
  Create a new group
  **/
  public post(path: '/me/identity/group'): Promise<NichandleAuthenticationGroup>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/bill/{billId}/debt/pay', pathParams: {billId: string}): Promise<BillingOrder>;
  /**
  pay operations
  Create an order in order to pay this order's debt
  **/
  public post(path: '/me/debtAccount/debt/{debtId}/pay', pathParams: {debtId: Number}): Promise<BillingOrder>;
  /**
  pay operations
  Create an order in order to pay all your due debts
  **/
  public post(path: '/me/debtAccount/pay'): Promise<BillingOrder>;
  /**
  refuse operations
  Refuse this change request
  **/
  public post(path: '/me/task/emailChange/{id}/refuse', pathParams: {id: Number}): Promise<void>;
  /**
  accept operations
  Accept this change request
  **/
  public post(path: '/me/task/emailChange/{id}/accept', pathParams: {id: Number}): Promise<void>;
  /**
  refuse operations
  Refuse this change request
  **/
  public post(path: '/me/task/contactChange/{id}/refuse', pathParams: {id: Number}): Promise<void>;
  /**
  accept operations
  Accept this change request
  **/
  public post(path: '/me/task/contactChange/{id}/accept', pathParams: {id: Number}): Promise<void>;
  /**
  resendEmail operations
  This call will send you a new email, containing a new token
  **/
  public post(path: '/me/task/contactChange/{id}/resendEmail', pathParams: {id: Number}): Promise<void>;
  /**
  relaunch operations
  Relaunch the task
  **/
  public post(path: '/me/task/domain/{id}/relaunch', pathParams: {id: Number}): Promise<void>;
  /**
  accelerate operations
  Accelerate the task
  **/
  public post(path: '/me/task/domain/{id}/accelerate', pathParams: {id: Number}): Promise<void>;
  /**
  cancel operations
  Cancel the task
  **/
  public post(path: '/me/task/domain/{id}/cancel', pathParams: {id: Number}): Promise<void>;
  /**
  Validate a code to generate associated credit
  Validate a code to generate associated credit movement
  **/
  public post(path: '/me/credit/code'): Promise<BillingCreditBalanceMovement>;
  /**
  Route for getting visitor's country and continent
  Fetch visitor country & region
  **/
  public post(path: '/me/geolocation'): Promise<GeolocationContinentCountryLocation>;
  /**
  Request a password recover
  Request a password recover
  **/
  public post(path: '/me/passwordRecover'): Promise<void>;
  public post(path: PathsMePOST, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.post(path, pathParams, bodyParams);}
  /**
  Customer public SSH key, can be used for rescue netboot or server access after reinstallation
  Remove this public SSH key
  **/
  public delete(path: '/me/sshKey/{keyName}', pathParams: {keyName: string}): Promise<void>;
  /**
  Customer IPXE scripts
  Remove this IPXE Script
  **/
  public delete(path: '/me/ipxeScript/{name}', pathParams: {name: string}): Promise<void>;
  /**
  Custom domains of your fax services
  Delete a custom domain of your fax services
  **/
  public delete(path: '/me/fax/customDomains/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  API Credential
  Remove this credential
  **/
  public delete(path: '/me/api/credential/{credentialId}', pathParams: {credentialId: Number}): Promise<void>;
  /**
  API Application
  Remove this application. It will revoke all credential belonging to this application.
  **/
  public delete(path: '/me/api/application/{applicationId}', pathParams: {applicationId: Number}): Promise<void>;
  /**
  SEPA bank account info
  Disable payment through this account
  **/
  public delete(path: '/me/paymentMean/bankAccount/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Paypal account info
  Disable payment through this PayPal account
  **/
  public delete(path: '/me/paymentMean/paypal/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Credit card informations
  Disable payment through this credit card
  **/
  public delete(path: '/me/paymentMean/creditCard/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  List of documents added on your account
  Delete a document
  **/
  public delete(path: '/me/document/{id}', pathParams: {id: string}): Promise<void>;
  /**
  Available installation templates
  remove this template
  **/
  public delete(path: '/me/installationTemplate/{templateName}', pathParams: {templateName: string}): Promise<void>;
  /**
  Partitioning schemes available on this template
  remove this scheme of partition
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}', pathParams: {templateName: string, schemeName: string}): Promise<void>;
  /**
  Hardware RAID defined in this partitioning scheme
  Remove this RAID
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}', pathParams: {templateName: string, schemeName: string, name: string}): Promise<void>;
  /**
   Partitions defined in this partitioning scheme
  remove this partition
  **/
  public delete(path: '/me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}', pathParams: {templateName: string, schemeName: string, mountpoint: string}): Promise<void>;
  /**
  Manage payment method
  Cancel one payment method
  **/
  public delete(path: '/me/payment/method/{paymentMethodId}', pathParams: {paymentMethodId: Number}): Promise<MePaymentMethodPaymentMethod>;
  /**
  Default IP restriction of a VoIP line
  Delete a default IP restriction for your future VoIP lines
  **/
  public delete(path: '/me/telephony/defaultIpRestriction/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  Details about an IP block organisation
  Delete this organisation
  **/
  public delete(path: '/me/ipOrganisation/{organisationId}', pathParams: {organisationId: string}): Promise<void>;
  /**
  U2F Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/u2f/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  TOTP Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/totp/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  SOTP Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/backupCode'): Promise<void>;
  /**
  Sms Two-Factor Authentication
  Delete this Two-Factor
  **/
  public delete(path: '/me/accessRestriction/sms/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  List of all IP Restrictions
  Delete this restriction rule
  **/
  public delete(path: '/me/accessRestriction/ip/{id}', pathParams: {id: Number}): Promise<void>;
  /**
  A user linked to this account
  Delete this object
  **/
  public delete(path: '/me/identity/user/{user}', pathParams: {user: string}): Promise<void>;
  /**
  A group linked to this account
  Delete this object
  **/
  public delete(path: '/me/identity/group/{group}', pathParams: {group: string}): Promise<void>;
  public delete(path: PathsMeDELETE, pathParams?: { [key:string]: string | Number; }, bodyParams?: any) : Promise<any> {return super.delete(path, pathParams, bodyParams);}
}
