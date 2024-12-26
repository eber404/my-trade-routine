import { Client } from '@notionhq/client'

import { TradeResponseDto } from './dtos/trade-response-dto'
import { Trade } from '../entities/trade'
import { Broker } from '../entities/broker'

const token = process.env.NOTION_TOKEN
const tableId = process.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: token,
})

export class NotionTradeRepository {
  async list(): Promise<Trade[]> {
    const res = await notion.databases.query({
      database_id: tableId,
    })

    const tradesDto = res.results as TradeResponseDto[]

    return tradesDto.map((dto) => {
      const isBuy =
        dto.properties.operation.select.name.toLocaleLowerCase() === 'buy'

      const buyCurrency = isBuy ? 'USD' : 'BRL'
      const buyValue = isBuy
        ? dto.properties.usd_quantity.number
        : dto.properties.brl_quantity.number

      const sellCurrency = !isBuy ? 'USD' : 'BRL'
      const sellValue = !isBuy
        ? dto.properties.usd_quantity.number
        : dto.properties.brl_quantity.number

      return new Trade({
        externalId: dto.id,
        buy: {
          currency: buyCurrency,
          value: buyValue,
        },
        sell: {
          currency: sellCurrency,
          value: sellValue,
        },
        date: dto.properties.date.date.start,
        broker: (dto.properties.broker.select.name as Broker) ?? null,
      })
    })
  }
}
