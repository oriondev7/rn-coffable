import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './pop_up_animation.styles'
import LottieView from 'lottie-react-native'

interface PopUpAnimationProps {
  style: any
  source: any
}

export const PopUpAnimation: React.FC<PopUpAnimationProps> = ({
  style,
  source
}) => {
  return (
    <View style={styles.container}>
      <LottieView
        style={style}
        source={source}
        autoPlay
        loop={false}
      />
    </View>
  )
}
