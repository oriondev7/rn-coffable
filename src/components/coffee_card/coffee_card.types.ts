import { ImageProps } from 'react-native'

export interface CoffeeCardProps {
  id: string
  name: string
  index: number
  type: string
  roasted: string
  imagelink_square: ImageProps
  special_ingredient: string
  average_rating: number
  price: any
  onPress: any
}
