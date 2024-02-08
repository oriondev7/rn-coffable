import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: FONT_FAMILY.poppins_semibold,
    fontSize: FONT_SIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
})
