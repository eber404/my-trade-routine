export interface TradeResponseDto {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  in_trash: boolean
  properties: Properties
  url: string
  public_url: any
}

export interface CreatedBy {
  object: string
  id: string
}

export interface LastEditedBy {
  object: string
  id: string
}

export interface Parent {
  type: string
  database_id: string
}

export interface Properties {
  operation: Operation
  brl_quantity: QuantityBrl
  date: Date
  price_brl: PriceBrl
  bank: Bank
  payment: Payment
  usd_quantity: QuantityUsd
  broker: Broker
  name: Name
}

export interface Operation {
  id: string
  type: string
  select: Select
}

export interface Select {
  id: string
  name: string
  color: string
}

export interface QuantityBrl {
  id: string
  type: string
  number: number
}

export interface Date {
  id: string
  type: string
  date: Date2
}

export interface Date2 {
  start: string
  end: any
  time_zone: any
}

export interface PriceBrl {
  id: string
  type: string
  formula: Formula
}

export interface Formula {
  type: string
  number: number
}

export interface Bank {
  id: string
  type: string
  select: Select2
}

export interface Select2 {
  id: string
  name: string
  color: string
}

export interface Payment {
  id: string
  type: string
  select: Select3
}

export interface Select3 {
  id: string
  name: string
  color: string
}

export interface QuantityUsd {
  id: string
  type: string
  number: number
}

export interface Broker {
  id: string
  type: string
  select: Select4
}

export interface Select4 {
  id: string
  name: string
  color: string
}

export interface Name {
  id: string
  type: string
  title: any[]
}
