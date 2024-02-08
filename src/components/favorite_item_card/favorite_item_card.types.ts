import { ImageProps } from 'react-native'

export interface FavoriteItemCardProps {
  id: string
  name: string
  type: string
  roasted: string
  imagelink_portrait: ImageProps
  special_ingredient: string
  ingredients: string
  average_rating: number
  ratings_count: string
  description: string
  favorite: boolean
}
