import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../constants'

const CARD_WIDTH = Dimensions.get('window').width * 0.32

export const styles = StyleSheet.create({
  linearGradient: {
    padding: SPACING.space_15,
    borderRadius: BORDER_RADIUS.radius_25,
  },

  imageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDER_RADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },

  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderTopRightRadius: BORDER_RADIUS.radius_20,
    borderBottomLeftRadius: BORDER_RADIUS.radius_20,
    top: 0,
    right: 0,
  },

  ratingText: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_14,
    lineHeight: 22,
    color: COLORS.primaryWhiteHex,
  },

  title: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },

  subtitle: {
    fontFamily: FONT_FAMILY.poppins_light,
    fontSize: FONT_SIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },

  priceCurrency: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },

  price: {
    color: COLORS.primaryWhiteHex,
  },
})
