import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './payment_footer.styles'

interface PriceProps {
  price: string
  currency: string
}

interface PaymentFooterProps {
  price: PriceProps
  title: string
  onPress: () => void
}

export const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  title,
  onPress
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <Text style={styles.currency}>
          {price.currency} <Text style={styles.price}>{price.price}</Text>
        </Text>
      </View>
      
      <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
