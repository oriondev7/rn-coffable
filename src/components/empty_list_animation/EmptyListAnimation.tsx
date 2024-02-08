import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './empty_list_animation.styles'
import LottieView from 'lottie-react-native'
import { EmptyListAnimationProps } from './empty_list_animation.types'

export const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({
  title,
}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../lottie/coffeecup.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.lottieText}>{title}</Text>
    </View>
  )
}
