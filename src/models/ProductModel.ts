import { PriceModel } from '.'

export interface ProductModel {
  id: string
  name: string
  description: string
  roasted: string
  imagelink_square: any
  imagelink_portrait: any
  ingredients: string
  special_ingredient: string
  prices: PriceModel[]
  average_rating: number
  ratings_count: string
  favourite: false
  type: string
  index: number
}
