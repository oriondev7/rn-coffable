import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
  },
})
