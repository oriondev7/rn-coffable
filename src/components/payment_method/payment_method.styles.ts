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
    borderRadius: BORDER_RADIUS.radius_15 * 2,
    borderWidth: 3,
    backgroundColor: COLORS.primaryBlackHex,
  },

  walletGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDER_RADIUS.radius_15 * 2,
  },

  wallet: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_24,
  },

  title: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },

  walletTotal: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },

  regularGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDER_RADIUS.radius_15 * 2,
  },

  icon: {
    height: SPACING.space_30,
    width: SPACING.space_30,
  },
})
