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
    height: 250,
  },

  scrollView: {
    flexGrow: 1,
  },

  scrollViewInnerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  itemContainer: {
    flex: 1,
  },

  listItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30,
  },

  downloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: BORDER_RADIUS.radius_20,
  },

  downloadButtonTitle: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
})
