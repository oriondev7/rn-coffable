import { PriceModel } from '../../models'

export interface PaymentFooterProps {
  price: PriceModel
  title: string
  onPress: () => void
}
