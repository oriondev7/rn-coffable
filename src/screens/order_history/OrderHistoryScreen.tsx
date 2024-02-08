import {
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { styles } from './order_history.styles'
import { COLORS, ScreenName } from '../../constants'
import {
  EmptyListAnimation,
  HeaderBar,
  OrderHistoryCard,
  PopUpAnimation,
} from '../../components'
import { useNavigation } from '@react-navigation/native'

export const OrderHistoryScreen = () => {
  const navigation = useNavigation()
  const orderHistoryList = useStore((state: any) => state.orderHistoryList)
  const [showAnimation, setShowAnimation] = useState(false)
  const bottomTabBarHeight = useBottomTabBarHeight()

  const navigateToDetailScreen = ({ index, id, type }: any) => {
    navigation.push(ScreenName.details, {
      index,
      id,
      type,
    })
  }

  const onDownload = () => {
    setShowAnimation(true)

    setTimeout(() => {
      setShowAnimation(false)
    }, 2000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation ? (
        <PopUpAnimation
          style={styles.lottie}
          source={require('../../lottie/download.json')}
        />
      ) : (
        <></>
      )}

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
            <HeaderBar title="Order History" />

            {orderHistoryList.length === 0 ? (
              <EmptyListAnimation title="No Order History" />
            ) : (
              <View style={styles.listItemContainer}>
                {orderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    cartList={data.cartList}
                    totalPrice={data.totalPrice}
                    orderDate={data.orderDate}
                    onPress={navigateToDetailScreen}
                  />
                ))}
              </View>
            )}
          </View>

          {orderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={onDownload}
            >
              <Text style={styles.downloadButtonTitle}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
