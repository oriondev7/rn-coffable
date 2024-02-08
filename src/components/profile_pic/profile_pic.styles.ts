import { StyleSheet } from 'react-native'
import { COLORS, SPACING } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: SPACING.space_2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
})
