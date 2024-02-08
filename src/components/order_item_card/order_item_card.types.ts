import { ImageProps } from 'react-native'

export interface OrderItemCardProps {
  type: string
  name: string
  imagelink_square: ImageProps
  special_ingredient: string
  prices: any
  itemPrice: string
}
