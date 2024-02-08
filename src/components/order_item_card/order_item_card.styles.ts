import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../constants'

export const styles = StyleSheet.create({
  gradient: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
    borderRadius: BORDER_RADIUS.radius_25,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageInfoContainer: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    alignItems: 'center',
  },

  image: {
    height: 90,
    width: 90,
    borderRadius: BORDER_RADIUS.radius_15,
  },

  title: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },

  subtitle: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },

  currency: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },

  price: {
    color: COLORS.primaryWhiteHex,
  },

  tableRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  boxLeft: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS.radius_10,
    borderBottomLeftRadius: BORDER_RADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryGreyHex,
  },

  size: {
    fontFamily: FONT_FAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },

  boxRight: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopRightRadius: BORDER_RADIUS.radius_10,
    borderBottomRightRadius: BORDER_RADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.primaryGreyHex,
  },

  tableRowCurrency: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },

  tableRowPrice: {
    color: COLORS.primaryWhiteHex,
  },

  quantity: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
})
