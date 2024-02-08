import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { styles } from './payment.styles'
import {
  COLORS,
  FONT_SIZE,
  IconName,
  PaymentMode,
  ScreenName,
} from '../../constants'
import {
  GradientBGIcon,
  PaymentFooter,
  PaymentMethod,
  PopUpAnimation,
} from '../../components'
import LinearGradient from 'react-native-linear-gradient'
import CustomIcon from '../../components/CustomIcon'
import { useStore } from '../../store/store'

const paymentList = [
  {
    name: PaymentMode.wallet,
    icon: 'icon',
  },

  {
    name: PaymentMode.googlePay,
    icon: require('../../assets/app_images/gpay.png'),
  },

  {
    name: PaymentMode.applePay,
    icon: require('../../assets/app_images/applepay.png'),
  },

  {
    name: PaymentMode.amazonPay,
    icon: require('../../assets/app_images/amazonpay.png'),
  },
]

export const PaymentScreen = ({ navigation, route }: any) => {
  const [paymentMode, setPaymentMode] = useState(PaymentMode.creditCard)
  const [showAnimation, setShowAnimation] = useState(false)

  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart
  )
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice)

  const onPay = () => {
    setShowAnimation(true)

    addToOrderHistoryListFromCart()
    calculateCartPrice()

    setTimeout(() => {
      setShowAnimation(false)

      navigation.navigate(ScreenName.orderHistory)
    }, 2000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation ? (
        <PopUpAnimation
          style={styles.lottie}
          source={require('../../lottie/successful.json')}
        />
      ) : (
        <></>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <GradientBGIcon
              name={IconName.left}
              color={COLORS.primaryLightGreyHex}
              size={FONT_SIZE.size_16}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Payments</Text>

          <View style={styles.emptyView} />
        </View>

        <View style={styles.paymentOptionsContainer}>
          <TouchableOpacity
            onPress={() => setPaymentMode(PaymentMode.creditCard)}
          >
            <View
              style={[
                styles.creditCardContainer,
                {
                  borderColor:
                    paymentMode === PaymentMode.creditCard
                      ? COLORS.primaryOrangeHex
                      : COLORS.primaryGreyHex,
                },
              ]}
            >
              <Text style={styles.creditCardTitle}>
                {PaymentMode.creditCard}
              </Text>

              <View style={styles.creditCardBackground}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                  style={styles.creditCardGradient}
                >
                  <View style={styles.creditCardRow}>
                    <CustomIcon
                      name={IconName.chip}
                      size={FONT_SIZE.size_20 * 2}
                      color={COLORS.primaryOrangeHex}
                    />

                    <CustomIcon
                      name={IconName.visa}
                      size={FONT_SIZE.size_30 * 2}
                      color={COLORS.primaryWhiteHex}
                    />
                  </View>

                  <View style={styles.creditCardNumberContainer}>
                    <Text style={styles.creditCardNumber}>5335</Text>
                    <Text style={styles.creditCardNumber}>4534</Text>
                    <Text style={styles.creditCardNumber}>3468</Text>
                    <Text style={styles.creditCardNumber}>6739</Text>
                  </View>

                  <View style={styles.creditCardRow}>
                    <View style={styles.creditCardNameContainer}>
                      <Text style={styles.creditCardNameSubtitle}>
                        Card Holder Name
                      </Text>
                      <Text style={styles.creditCardNameTitle}>
                        Carl Johnson
                      </Text>
                    </View>

                    <View style={styles.creditCardDateContainer}>
                      <Text style={styles.creditCardNameSubtitle}>
                        Expiry Date
                      </Text>
                      <Text style={styles.creditCardNameTitle}>02/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>

          {paymentList.map((method: any) => (
            <TouchableOpacity
              key={method.name}
              onPress={() => setPaymentMode(method.name)}
            >
              <PaymentMethod
                mode={paymentMode}
                name={method.name}
                icon={method.icon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <PaymentFooter
        price={{ price: route.params.total, currency: '$' }}
        title={`Pay with ${paymentMode}`}
        onPress={onPay}
      />
    </SafeAreaView>
  )
}
