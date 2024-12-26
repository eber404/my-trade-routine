import 'dotenv/config'

import { Dashboard } from './entities/dashboard'
import { NotionTradeRepository } from './repositories/notion-trade-repository'

const tradeRepository = new NotionTradeRepository()

async function main() {
  const trades = await tradeRepository.list()

  const dashboard = new Dashboard(trades)

  console.log('Total sold (BRL):', dashboard.brlSellTotal)
  console.log('Total bought (BRL):', dashboard.brlBuyTotal)
  console.log('Average Buy price (BRL):', dashboard.averageBuyPrice)
  console.log('Average Sell price (BRL):', dashboard.averageSellPrice)
  console.log('Win/Loss (BRL):', dashboard.winLoss)
  console.log('ROI (BRL):', dashboard.roi)
}

main()
