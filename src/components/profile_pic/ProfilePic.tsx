import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './profile_pic.styles'

export const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/app_images/avatar.png')}
        style={styles.image}
      />
    </View>
  )
}
