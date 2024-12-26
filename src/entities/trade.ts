import { createId } from '@paralleldrive/cuid2'
import { MarkOptional } from 'ts-essentials'
import _ from 'lodash'

import { Amount } from './amount'
import { Broker } from './broker'

type TradeProps = {
  id?: string
  buy: Amount
  sell: Amount
  date: string
  description?: string
  broker?: Broker
  externalId?: string
}

export class Trade {
  readonly id: string
  readonly buy: Amount
  readonly sell: Amount
  readonly date: Date
  readonly description?: string
  readonly broker: Broker
  readonly externalId?: string

  constructor(props: MarkOptional<TradeProps, 'id'>) {
    this.id = props.id ?? createId()
    this.buy = new Amount(props.buy)
    this.sell = new Amount(props.sell)
    this.date = this.handleDate(props.date)
    this.description = props.description
    this.broker = props.broker ?? Broker.Unknown
    this.externalId = props.externalId
  }

  private handleDate(date: string | Date) {
    const finalDate = _.isString(date) ? new Date(date) : date
    if (isNaN(finalDate.getTime())) throw new Error('Invalid date')
    return finalDate
  }
}
