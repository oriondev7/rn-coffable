import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './order_history_card.styles'
import { OrderItemCard } from '..'
import { OrderHistoryCardProps } from './order_history_card.types'

export const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
  cartList,
  totalPrice,
  orderDate,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>Order Time</Text>
          <Text style={styles.headerSubtitle}>{orderDate}</Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.headerTitle}>Total Amount</Text>
          <Text style={styles.headerTotal}>$ {totalPrice}</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        {cartList.map((data: any, index: any) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() =>
              onPress({
                index: data.index,
                id: data.id,
                type: data.type,
              })
            }
          >
            <OrderItemCard
              type={data.type}
              name={data.name}
              imagelink_square={data.imagelink_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              itemPrice={data.itemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
