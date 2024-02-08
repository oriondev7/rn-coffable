import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    gap: SPACING.space_10,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center',
  },

  totalContainer: {
    alignItems: 'flex-end',
  },

  headerTitle: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },

  headerSubtitle: {
    fontFamily: FONT_FAMILY.poppins_light,
    fontSize: FONT_SIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },

  headerTotal: {
    fontFamily: FONT_FAMILY.poppins_medium,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },

  listContainer: {
    gap: SPACING.space_20,
  },
})
