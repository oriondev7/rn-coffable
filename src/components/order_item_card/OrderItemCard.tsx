import { View, Text, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONT_SIZE, ItemType } from '../../constants'
import { styles } from './order_item_card.styles'
import { OrderItemCardProps } from './order_item_card.types'

export const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  itemPrice,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <View style={styles.infoContainer}>
        <View style={styles.imageInfoContainer}>
          <Image style={styles.image} source={imagelink_square} />

          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{special_ingredient}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.currency}>
            $ <Text style={styles.price}>{itemPrice}</Text>
          </Text>
        </View>
      </View>

      {prices.map((data: any, index: any) => (
        <View key={index.toString()} style={styles.tableRow}>
          <View style={styles.boxLeft}>
            <Text
              style={[
                styles.size,
                {
                  fontSize:
                    type === ItemType.bean
                      ? FONT_SIZE.size_12
                      : FONT_SIZE.size_16,
                },
              ]}
            >
              {data.size}
            </Text>
          </View>

          <View style={styles.boxRight}>
            <Text style={styles.tableRowCurrency}>
              {data.currency}{' '}
              <Text style={styles.tableRowPrice}>{data.price}</Text>
            </Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.quantity}>
              X <Text style={styles.tableRowPrice}>{data.quantity}</Text>
            </Text>

            <Text style={styles.quantity}>
              $ {(data.quantity * data.price).toFixed(2).toString()}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  )
}
