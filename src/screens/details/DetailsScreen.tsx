import React, { useState } from 'react'
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import { useStore } from '../../store/store'
import { COLORS, FONT_SIZE, ItemType, ScreenName } from '../../constants'
import { styles } from './details.styles'
import { ImageBackgroundInfo, PaymentFooter } from '../../components'

export const DetailsScreen = ({ navigation, route }: any) => {
  const item = useStore((state: any) =>
    route.params.type === ItemType.coffee ? state.coffeeList : state.beanList
  )[route.params.index]

  const [price, setPrice] = useState(item.prices[0])
  const [showFullDescription, setShowFullDescription] = useState(false)

  const addToCart = useStore((state: any) => state.addToCart)
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice)
  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{ ...price, quantity: 1 }],
    })

    calculateCartPrice()

    navigation.navigate(ScreenName.cart)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <ImageBackgroundInfo
          imagelink_portrait={item.imagelink_portrait}
          type={item.type}
          id={item.id}
          title={item.name}
          favorite={item.favorite}
          special_ingredient={item.special_ingredient}
          ingredients={item.ingredients}
          average_rating={item.average_rating}
          ratings_count={item.ratings_count}
          roasted={item.roasted}
          hasBackButton
        />

        <View style={styles.footer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          {showFullDescription ? (
            <TouchableWithoutFeedback
              onPress={() => setShowFullDescription((state) => !state)}
            >
              <Text suppressHighlighting={true} style={styles.description}>
                {item.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => setShowFullDescription((state) => !state)}
            >
              <Text
                suppressHighlighting={true}
                style={styles.description}
                numberOfLines={3}
              >
                {item.description}
              </Text>
            </TouchableWithoutFeedback>
          )}

          <Text style={styles.descriptionTitle}>Size</Text>

          <View style={styles.sizeContainer}>
            {item.prices.map((data: any) => (
              <TouchableOpacity
                onPress={() => setPrice(data)}
                key={data.size}
                style={[
                  styles.sizeBox,
                  {
                    borderColor:
                      data.size === price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        item.type === ItemType.bean
                          ? FONT_SIZE.size_14
                          : FONT_SIZE.size_16,
                      color:
                        data.size === price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}
                >
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <PaymentFooter
          price={price}
          title="Add to Cart"
          onPress={() =>
            addToCartHandler({
              id: item.id,
              index: item.index,
              name: item.name,
              roasted: item.roasted,
              imagelink_square: item.imagelink_square,
              special_ingredient: item.special_ingredient,
              type: item.type,
              price: price,
            })
          }
        />
      </ScrollView>
    </SafeAreaView>
  )
}
