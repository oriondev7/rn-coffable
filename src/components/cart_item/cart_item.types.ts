import { ImageProps } from 'react-native'

export interface CartItemProps {
  id: string
  title: string
  imagelink_square: ImageProps
  special_ingredient: string
  roasted: string
  prices: any
  type: string
  onDecrement: (id: string, size: string) => void
  onIncrement: (id: string, size: string) => void
}
