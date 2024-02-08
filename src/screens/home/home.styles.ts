import { Dimensions, StyleSheet } from 'react-native'
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

  scrollViewContainer: {
    flexGrow: 1,
  },

  title: {
    fontSize: FONT_SIZE.size_28,
    fontFamily: FONT_FAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },

  inputContainer: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDER_RADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },

  inputIcon: {
    marginHorizontal: SPACING.space_20,
  },

  textInput: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },

  categoriesScrollViewContainer: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },

  categoryContainer: {
    paddingHorizontal: SPACING.space_15,
  },

  categoryItem: {
    alignItems: 'center',
  },

  activeCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDER_RADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },

  categoryTitleBaseStyle: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },

  activeCategoryTitle: {
    color: COLORS.primaryOrangeHex,
  },

  flatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },

  emptyList: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.15,
    // backgroundColor: 'red'
  },

  coffeeBeansTitle: {
    fontSize: FONT_SIZE.size_18,
    fontFamily: FONT_FAMILY.poppins_medium,
    marginLeft: SPACING.space_30,
    marginTop: SPACING.space_20,
    color: COLORS.secondaryLightGreyHex,
  },
})
