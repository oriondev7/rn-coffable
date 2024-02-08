import { StyleSheet } from 'react-native'
import { BORDER_RADIUS, SPACING } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.radius_8,
  },
})
