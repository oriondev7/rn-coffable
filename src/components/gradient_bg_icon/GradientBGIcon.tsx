import { View } from 'react-native'
import React from 'react'
import { styles } from './gradient_bg_icon.styles'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../constants'
import CustomIcon from '../CustomIcon'
import { GradientBGIconProps } from './gradient_bg_icon.types'

export const GradientBGIcon: React.FC<GradientBGIconProps> = ({
  name,
  color,
  size,
}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradientBG}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      >
        <CustomIcon name={name} size={size} color={color} />
      </LinearGradient>
    </View>
  )
}
