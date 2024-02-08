import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../constants'

export const styles = StyleSheet.create({
  // Multiple Item Size Styles
  gradient: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDER_RADIUS.radius_25,
  },

  rowItemContainer: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    flex: 1,
  },

  image: {
    height: 130,
    width: 130,
    borderRadius: BORDER_RADIUS.radius_20,
  },

  itemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
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

  roastedContainer: {
    height: 50,
    width: 50 * 2 + SPACING.space_20,
    borderRadius: BORDER_RADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },

  roastedText: {
    fontFamily: FONT_FAMILY.poppins_regular,
    fontSize: FONT_SIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },

  rowSizeItemContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  itemSizeValueContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  sizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: BORDER_RADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sizeBaseText: {
    fontFamily: FONT_FAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },

  sizeBeanText: {
    fontSize: FONT_SIZE.size_12,
  },

  sizeCoffeeText: {
    fontSize: FONT_SIZE.size_16,
  },

  currency: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },

  price: {
    color: COLORS.primaryWhiteHex,
  },

  buttonIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDER_RADIUS.radius_10,
  },

  quantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 80,
    borderRadius: BORDER_RADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },

  quantity: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },

  // Single Item Size Styles
  singleSizeGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    gap: SPACING.space_12,
    borderRadius: BORDER_RADIUS.radius_25,
  },

  singleSizeImage: {
    height: 150,
    width: 150,
    borderRadius: BORDER_RADIUS.radius_20,
  },

  singleSizeItemInfo: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },

  singleItemSizeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  singleSizeQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
