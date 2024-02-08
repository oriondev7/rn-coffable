import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './coffee_card.styles'
import { COLORS, FONT_SIZE, IconName } from '../../constants'
import CustomIcon from '../CustomIcon'
import { BGIcon } from '..'
import { CoffeeCardProps } from './coffee_card.types'

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  name,
  index,
  type,
  roasted,
  imagelink_square,
  special_ingredient,
  average_rating,
  price,
  onPress,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <ImageBackground
        source={imagelink_square}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.ratingContainer}>
          <CustomIcon
            name={IconName.star}
            size={FONT_SIZE.size_16}
            color={COLORS.primaryOrangeHex}
          />

          <Text style={styles.ratingText}>{average_rating}</Text>
        </View>
      </ImageBackground>

      <Text style={styles.title}>{name}</Text>

      <Text style={styles.subtitle}>{special_ingredient}</Text>

      <View style={styles.footerRow}>
        <Text style={styles.priceCurrency}>
          $<Text style={styles.price}>{price.price}</Text>
        </Text>

        <TouchableOpacity
          onPress={() =>
            onPress({
              id,
              index,
              name,
              roasted,
              imagelink_square,
              special_ingredient,
              type,
              prices: [{ ...price, quantity: 1 }],
            })
          }
        >
          <BGIcon
            name={IconName.add}
            color={COLORS.primaryWhiteHex}
            size={FONT_SIZE.size_10}
            BGColor={COLORS.primaryOrangeHex}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}
