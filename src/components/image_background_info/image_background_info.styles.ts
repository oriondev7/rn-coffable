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
    width: '100%',
    aspectRatio: 0.8, // 20 / 25
    justifyContent: 'space-between',
  },

  backFavorite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.space_30,
  },

  favorite: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: SPACING.space_30,
  },

  footerContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDER_RADIUS.radius_20 * 2,
    borderTopRightRadius: BORDER_RADIUS.radius_20 * 2,
  },

  footerInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },

  subtitle: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },

  propertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },

  firstProperty: {
    height: 55,
    width: 55,
    borderRadius: BORDER_RADIUS.radius_15,
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
    justifyContent: 'center',
  },

  firstPropertyBaseText: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },

  firstPropertyBeanText: {
    marginTop: SPACING.space_6,
  },

  firstPropertyCoffeeText: {
    marginTop: 0,
  },

  lastPropertyText: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_6,
  },

  ratingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },

  ratingText: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },

  ratingValue: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },

  roastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDER_RADIUS.radius_15,
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
    justifyContent: 'center',
  },

  roastedText: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
})
