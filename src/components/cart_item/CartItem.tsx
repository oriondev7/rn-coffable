import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './cart_item.styles'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONT_SIZE, IconName, ItemType } from '../../constants'
import CustomIcon from '../CustomIcon'
import { CartItemProps } from './cart_item.types'

export const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  onDecrement,
  onIncrement,
}) => {
  const price = prices[0]

  return (
    <View>
      {prices.length > 1 ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.gradient}
        >
          <View style={styles.rowItemContainer}>
            <Image source={imagelink_square} style={styles.image} />

            <View style={styles.itemInfo}>
              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{special_ingredient}</Text>
              </View>

              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
            </View>
          </View>

          {prices.map((data: any, index: any) => (
            <View key={index.toString()} style={styles.rowSizeItemContainer}>
              <View style={styles.itemSizeValueContainer}>
                <View style={styles.sizeBox}>
                  <Text
                    style={[
                      styles.sizeBaseText,
                      type === ItemType.bean
                        ? styles.sizeBeanText
                        : styles.sizeCoffeeText,
                    ]}
                  >
                    {data.size}
                  </Text>
                </View>

                <Text style={styles.currency}>
                  {data.currency}
                  <Text style={styles.price}> {data.price}</Text>
                </Text>
              </View>

              <View style={styles.itemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={() => onDecrement(id, data.size)}
                >
                  <CustomIcon
                    name={IconName.minus}
                    color={COLORS.primaryWhiteHex}
                    size={FONT_SIZE.size_10}
                  />
                </TouchableOpacity>

                <View style={styles.quantityContainer}>
                  <Text style={styles.quantity}>{data.quantity}</Text>
                </View>

                <TouchableOpacity
                  style={styles.buttonIcon}
                  onPress={() => onIncrement(id, data.size)}
                >
                  <CustomIcon
                    name={IconName.add}
                    color={COLORS.primaryWhiteHex}
                    size={FONT_SIZE.size_10}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.singleSizeGradient}
        >
          <Image source={imagelink_square} style={styles.singleSizeImage} />

          <View style={styles.singleSizeItemInfo}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{special_ingredient}</Text>
            </View>

            <View style={styles.singleItemSizeValueContainer}>
              <View style={styles.sizeBox}>
                <Text
                  style={[
                    styles.sizeBaseText,
                    type === ItemType.bean
                      ? styles.sizeBeanText
                      : styles.sizeCoffeeText,
                  ]}
                >
                  {price.size}
                </Text>
              </View>

              <Text style={styles.currency}>
                {price.currency}
                <Text style={styles.price}> {price.price}</Text>
              </Text>
            </View>

            <View style={styles.singleSizeQuantityContainer}>
              <TouchableOpacity
                style={styles.buttonIcon}
                onPress={() => onDecrement(id, price.size)}
              >
                <CustomIcon
                  name={IconName.minus}
                  color={COLORS.primaryWhiteHex}
                  size={FONT_SIZE.size_10}
                />
              </TouchableOpacity>

              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>{price.quantity}</Text>
              </View>

              <TouchableOpacity
                style={styles.buttonIcon}
                onPress={() => onIncrement(id, price.size)}
              >
                <CustomIcon
                  name={IconName.add}
                  color={COLORS.primaryWhiteHex}
                  size={FONT_SIZE.size_10}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  )
}
