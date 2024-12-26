import Decimal from 'decimal.js'

import { Trade } from './trade'

export class Dashboard {
  private readonly roundConfig = Decimal.ROUND_FLOOR

  readonly trades?: Trade[]

  constructor(trades?: Trade[]) {
    this.trades = trades
  }

  get brlSellTotal() {
    return this.trades?.reduce(
      (acc, trade) =>
        trade.sell.currency === 'BRL' ? acc + trade.sell.value : acc,
      0
    )
  }

  get usdBuyTotal() {
    return this.trades?.reduce(
      (acc, trade) =>
        trade.buy.currency === 'USD' ? acc + trade.buy.value : acc,
      0
    )
  }

  get averageBuyPrice() {
    return new Decimal(
      (this.brlSellTotal ?? 0) / (this.usdBuyTotal ?? 1)
    ).toFixed(2, this.roundConfig)
  }

  get brlBuyTotal() {
    return this.trades?.reduce(
      (acc, trade) =>
        trade.buy.currency === 'BRL' ? acc + trade.buy.value : acc,
      0
    )
  }

  get usdSellTotal() {
    return this.trades?.reduce(
      (acc, trade) =>
        trade.sell.currency === 'USD' ? acc + trade.sell.value : acc,
      0
    )
  }

  get averageSellPrice() {
    return new Decimal(
      (this.brlBuyTotal ?? 0) / (this.usdSellTotal ?? 1)
    ).toFixed(2, this.roundConfig)
  }

  get winLoss() {
    return new Decimal(
      (this.brlBuyTotal ?? 0) - (this.brlSellTotal ?? 0)
    ).toFixed(2, this.roundConfig)
  }

  get roi() {
    return new Decimal(
      (parseFloat(this.winLoss) / (this.brlSellTotal ?? 1)) * 100
    ).toFixed(2, this.roundConfig)
  }
}
