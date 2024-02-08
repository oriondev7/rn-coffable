import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useStore } from '../../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { styles } from './cart.styles'
import { COLORS, ScreenName } from '../../constants'
import {
  CartItem,
  EmptyListAnimation,
  HeaderBar,
  PaymentFooter,
} from '../../components'
import { useNavigation } from '@react-navigation/native'

export const CartScreen = () => {
  const navigation = useNavigation()
  const cartList = useStore((state: any) => state.cartList)
  const cartPrice = useStore((state: any) => state.cartPrice)
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice)
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity
  )
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity
  )
  const bottomTabBarHeight = useBottomTabBarHeight()

  const onDecrement = (id: string, size: string) => {
    decrementCartItemQuantity(id, size)
    calculateCartPrice()
  }

  const onIncrement = (id: string, size: string) => {
    incrementCartItemQuantity(id, size)
    calculateCartPrice()
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View
          style={[
            styles.scrollViewInnerContainer,
            {
              marginBottom: bottomTabBarHeight,
            },
          ]}
        >
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />

            {cartList.length === 0 ? (
              <EmptyListAnimation title="Cart is empty" />
            ) : (
              <View style={styles.listItemContainer}>
                {cartList.map((data: any) => (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() =>
                      navigation.push(ScreenName.details, {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      })
                    }
                  >
                    <CartItem
                      id={data.id}
                      title={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      onDecrement={onDecrement}
                      onIncrement={onIncrement}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {cartList.length !== 0 ? (
            <PaymentFooter
              price={{ size: '', price: cartPrice, currency: '$' }}
              title="Pay"
              onPress={() =>
                navigation.navigate(ScreenName.payment, { total: cartPrice })
              }
            />
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
