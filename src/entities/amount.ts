export type Currency = 'USD' | 'BRL' | 'BTC'

export class Amount {
  readonly value: number
  readonly currency: Currency

  constructor(props: Amount) {
    this.value = props.value
    this.currency = props.currency
  }
}
