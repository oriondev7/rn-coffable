import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONT_SIZE, IconName, PaymentMode } from '../../constants'
import { styles } from './payment_method.styles'
import LinearGradient from 'react-native-linear-gradient'
import CustomIcon from '../CustomIcon'
import { PaymentMethodProps } from './payment_method.types'

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  mode,
  name,
  icon,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor:
            mode === name ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex,
        },
      ]}
    >
      {name === PaymentMode.wallet ? (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.walletGradient}
        >
          <View style={styles.wallet}>
            <CustomIcon
              name={IconName.wallet}
              color={COLORS.primaryOrangeHex}
              size={FONT_SIZE.size_30}
            />

            <Text style={styles.title}>{name}</Text>
          </View>
          <Text style={styles.walletTotal}> $ 100.50</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.regularGradient}
        >
          <Image style={styles.icon} source={icon} />
          <Text style={styles.title}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  )
}
