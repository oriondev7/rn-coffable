import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './header_bar.styles'
import { GradientBGIcon, ProfilePic } from '..'
import { COLORS, FONT_SIZE, IconName } from '../../constants'
import { HeaderBarProps } from './header_bar.types'

export const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <GradientBGIcon
        name={IconName.menu}
        color={COLORS.primaryLightGreyHex}
        size={FONT_SIZE.size_16}
      />

      <Text style={styles.title}>{title}</Text>

      <ProfilePic />
    </View>
  )
}
