import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  lottie: {
    height: 300,
  },

  lottieText: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
})
