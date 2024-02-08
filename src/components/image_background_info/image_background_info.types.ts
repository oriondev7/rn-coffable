import { ImageProps } from 'react-native'

export interface ImageBackgroundInfoProps {
  imagelink_portrait: ImageProps
  type: string
  id: string
  title: string
  favorite: boolean
  special_ingredient: string
  ingredients: string
  average_rating: number
  ratings_count: string
  roasted: string
  hasBackButton: boolean
}
