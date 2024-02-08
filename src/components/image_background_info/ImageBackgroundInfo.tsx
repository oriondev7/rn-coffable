import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from './image_background_info.styles'
import { GradientBGIcon } from '..'
import { COLORS, FONT_SIZE, IconName, ItemType } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useStore } from '../../store/store'
import CustomIcon from '../CustomIcon'
import { ImageBackgroundInfoProps } from './image_background_info.types'

export const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
  imagelink_portrait,
  type,
  id,
  title,
  favorite,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  hasBackButton,
}) => {
  const navigation = useNavigation()
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList)
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList
  )

  const toggleFavorite = () => {
    favorite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)
  }

  return (
    <View>
      <ImageBackground source={imagelink_portrait} style={styles.container}>
        {hasBackButton ? (
          <View style={styles.backFavorite}>
            <TouchableOpacity onPress={navigation.goBack}>
              <GradientBGIcon
                name={IconName.left}
                color={COLORS.primaryLightGreyHex}
                size={FONT_SIZE.size_16}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleFavorite}>
              <GradientBGIcon
                name={IconName.like}
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONT_SIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.favorite}>
            <TouchableOpacity onPress={toggleFavorite}>
              <GradientBGIcon
                name={IconName.like}
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONT_SIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.footerContainer}>
          <View style={styles.footerInnerContainer}>
            <View style={styles.footerRow}>
              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{special_ingredient}</Text>
              </View>

              <View style={styles.propertiesContainer}>
                <View style={styles.firstProperty}>
                  <CustomIcon
                    name={
                      type === ItemType.bean ? IconName.bean : IconName.beans
                    }
                    color={COLORS.primaryOrangeHex}
                    size={
                      type === ItemType.bean
                        ? FONT_SIZE.size_18
                        : FONT_SIZE.size_24
                    }
                  />

                  <Text
                    style={[
                      styles.firstPropertyBaseText,
                      type === ItemType.bean
                        ? styles.firstPropertyBeanText
                        : styles.firstPropertyCoffeeText,
                    ]}
                  >
                    {type}
                  </Text>
                </View>

                <View style={styles.firstProperty}>
                  <CustomIcon
                    name={
                      type === ItemType.bean ? IconName.location : IconName.drop
                    }
                    color={COLORS.primaryOrangeHex}
                    size={FONT_SIZE.size_16}
                  />

                  <Text style={styles.lastPropertyText}>{ingredients}</Text>
                </View>
              </View>
            </View>

            <View style={styles.footerRow}>
              <View style={styles.ratingContainer}>
                <CustomIcon
                  name={IconName.star}
                  color={COLORS.primaryOrangeHex}
                  size={FONT_SIZE.size_20}
                />

                <Text style={styles.ratingText}>{average_rating}</Text>
                <Text style={styles.ratingValue}>({ratings_count})</Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
