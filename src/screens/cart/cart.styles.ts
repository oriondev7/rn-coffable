import { StyleSheet } from 'react-native'
import { COLORS, SPACING } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
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
    gap: SPACING.space_20,
  },
})
