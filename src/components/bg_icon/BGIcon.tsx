import { View } from 'react-native'
import React from 'react'
import { styles } from './bg_icon.styles'
import CustomIcon from '../CustomIcon'
import { BGIconProps } from './bg_icon.types'

export const BGIcon: React.FC<BGIconProps> = ({
  name,
  color,
  size,
  BGColor,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: BGColor }]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  )
}
