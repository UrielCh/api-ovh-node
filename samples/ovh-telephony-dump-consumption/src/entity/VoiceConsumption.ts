import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { telephony, order } from '@ovh-api/telephony'

@Entity()
export class VoiceConsumption {
    constructor(billingAccount: string, serviceName: string, data: telephony.VoiceConsumption, type: 'line' | 'number') {
        if (data) {
            this.consumptionId = data.consumptionId;
            this.nic = billingAccount.replace(/-[0-9]+$/, '');
            this.billingAccount = billingAccount;
            this.serviceName = serviceName;
            this.type = type;
            this.called = data.called;
            this.calling = data.calling;
            this.countrySuffix = data.countrySuffix;
            this.creationDatetime = data.creationDatetime;
            this.designation = data.designation;
            this.destinationType = data.destinationType;
            this.dialed = data.dialed;
            this.duration = data.duration;
            this.hangupNature = data.hangupNature;
            this.planType = data.planType;
            this.priceWithoutTax = data.priceWithoutTax.value;
            this.currencyCode = data.priceWithoutTax.currencyCode;
            this.wayType = data.wayType;
        } else {
            this.consumptionId = 0;
        }
    }
    @PrimaryColumn({ type: "bigint" })
    consumptionId: number;
    @Column({ type: "datetime" })
    creationDatetime?: string;

    @Column()
    nic?: string;
    @Column()
    billingAccount?: string;
    @Column()
    serviceName?: string;
    @Column({ type: 'enum', enum: ['line', 'number'] })
    type?: 'line' | 'number';

    @Column()
    called?: string;
    @Column()
    calling?: string;
    @Column()
    countrySuffix?: string;
    @Column()
    designation?: string;
    @Column({ type: "enum", enum: ["landline", "mobile", "special"] })
    destinationType?: telephony.VoiceConsumptionDestinationTypeEnum;
    @Column()
    dialed?: string;
    @Column()
    duration?: number;
    @Column()
    hangupNature?: string;
    @Column({ type: "enum", enum: ["outplan", "priceplan"] })
    planType?: telephony.VoiceConsumptionPlanTypeEnum;
    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    priceWithoutTax?: number;
    @Column({ type: "enum", enum: ["incoming", "outgoing", "transfer"] })
    wayType?: telephony.VoiceConsumptionWayTypeEnum;
    @Column({ type: "enum", enum: ["AUD", "CAD", "CZK", "EUR", "GBP", "LTL", "MAD", "N/A", "PLN", "SGD", "TND", "USD", "XOF", "points"] })
    currencyCode?: order.CurrencyCodeEnum;
}
