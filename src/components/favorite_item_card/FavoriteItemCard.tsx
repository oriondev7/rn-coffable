import { View, Text } from 'react-native'
import React from 'react'
import { ImageBackgroundInfo } from '..'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../constants'
import { styles } from './favorite_item_card.styles'
import { FavoriteItemCardProps } from './favorite_item_card.types'

export const FavoriteItemCard: React.FC<FavoriteItemCardProps> = ({
  id,
  name,
  type,
  roasted,
  imagelink_portrait,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  description,
  favorite,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackgroundInfo
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        title={name}
        favorite={favorite}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        hasBackButton={false}
      />

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.gradient}
      >
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </LinearGradient>
    </View>
  )
}
