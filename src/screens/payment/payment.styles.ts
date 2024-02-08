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
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  lottie: {
    flex: 1,
  },

  scrollView: {
    flexGrow: 1,
  },

  headerContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },

  emptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },

  paymentOptionsContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },

  creditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_10,
    borderRadius: BORDER_RADIUS.radius_15 * 2,
    borderWidth: 3,
  },

  creditCardTitle: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10,
  },

  creditCardBackground: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDER_RADIUS.radius_25,
  },

  creditCardGradient: {
    borderRadius: BORDER_RADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10,
  },

  creditCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  creditCardNumberContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },

  creditCardNumber: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryWhiteHex,
    letterSpacing: SPACING.space_4 * 1.7,
  },

  creditCardNameContainer: {
    alignItems: 'flex-start',
  },

  creditCardNameSubtitle: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },

  creditCardNameTitle: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },

  creditCardDateContainer: {
    alignItems: 'flex-end',
  },
})
