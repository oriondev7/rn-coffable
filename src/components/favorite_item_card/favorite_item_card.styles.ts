import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../constants'

export const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.radius_25,
    overflow: 'hidden',
  },

  gradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },

  descriptionTitle: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },

  description: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
})
