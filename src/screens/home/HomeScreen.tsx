import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  ToastAndroid,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { useStore } from '../../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { styles } from './home.styles'
import { COLORS, FONT_SIZE, IconName, ScreenName } from '../../constants'
import { CoffeeCard, HeaderBar } from '../../components'
import CustomIcon from '../../components/CustomIcon'
import { useNavigation } from '@react-navigation/native'

const categoryNamesFromData = (data: any) => {
  let temp: any[] = []

  for (let i = 0; i < data.length; i++) {
    const categoryName = data[i].name

    if (temp[categoryName] === undefined) {
      temp[categoryName] = 1
    } else {
      temp[categoryName]++
    }
  }

  let categories = Object.keys(temp)
  categories.unshift('All')

  return categories
}

const sortedCoffeeList = (category: string, data: any) => {
  if (category === 'All') {
    return data
  }

  return data.filter((item: any) => item.name === category)
}

export const HomeScreen = () => {
  const navigation = useNavigation()
  const coffeeList = useStore((state: any) => state.coffeeList)
  const beanList = useStore((state: any) => state.beanList)
  const addToCart = useStore((state: any) => state.addToCart)
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice)

  const categoryNames = categoryNamesFromData(coffeeList)
  const [searchText, setSearchText] = useState('')
  const [category, setCategoryIndex] = useState({
    index: 0,
    name: categoryNames[0],
  })
  const [sortedCoffee, setSortedCoffee] = useState(
    sortedCoffeeList(category.name, coffeeList)
  )

  const listRef: any = useRef<FlatList>()
  const bottomTabBarHeight = useBottomTabBarHeight()

  const onSearch = () => {
    if (searchText === '') {
      return
    }

    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    })

    setCategoryIndex({ index: 0, name: categoryNames[0] })

    setSortedCoffee(
      coffeeList.filter((item: any) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    )
  }

  const onClearSearch = () => {
    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    })

    setSearchText('')
    setCategoryIndex({ index: 0, name: categoryNames[0] })
    setSortedCoffee(coffeeList)
  }

  const onAddToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: prices,
    })

    calculateCartPrice()

    ToastAndroid.showWithGravity(
      `${name} is added to cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <HeaderBar />

        <Text style={styles.title}>Find the best{'\n'}coffee for you</Text>

        {/* Search Input */}
        <View style={styles.inputContainer}>
          <CustomIcon
            name={IconName.search}
            color={
              searchText.length > 0
                ? COLORS.primaryOrangeHex
                : COLORS.primaryLightGreyHex
            }
            size={FONT_SIZE.size_18}
            style={styles.inputIcon}
          />

          <TextInput
            placeholder="Find You Coffee..."
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text)
              onSearch()
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInput}
          />

          {searchText.length > 0 ? (
            <TouchableOpacity onPress={onClearSearch}>
              <CustomIcon
                style={styles.inputIcon}
                name={IconName.close}
                size={FONT_SIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        {/* Category Scroller */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScrollViewContainer}
        >
          {categoryNames.map((data, index) => (
            <View key={index.toString()} style={styles.categoryContainer}>
              <TouchableOpacity
                style={styles.categoryItem}
                onPress={() => {
                  listRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  })

                  setCategoryIndex({
                    index: index,
                    name: categoryNames[index],
                  })

                  setSortedCoffee([
                    ...sortedCoffeeList(categoryNames[index], coffeeList),
                  ])
                }}
              >
                <Text
                  style={[
                    styles.categoryTitleBaseStyle,
                    category.index === index ? styles.activeCategoryTitle : {},
                  ]}
                >
                  {data}
                </Text>

                {category.index === index ? (
                  <View style={styles.activeCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee Flatlist */}
        <FlatList
          ref={listRef}
          disableIntervalMomentum={true}
          horizontal
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <Text style={styles.categoryTitleBaseStyle}>
                No Coffee Available
              </Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenName.details, {
                  index: item.index,
                  id: item.id,
                  type: item.type,
                })
              }
            >
              <CoffeeCard
                id={item.id}
                name={item.name}
                index={item.index}
                type={item.type}
                roasted={item.roasted}
                imagelink_square={item.imagelink_square}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                price={item.prices[0]}
                onPress={onAddToCartHandler}
              />
            </TouchableOpacity>
          )}
        />

        <Text style={styles.coffeeBeansTitle}>Coffee Beans</Text>

        {/* Beans Flatlist */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={beanList}
          contentContainerStyle={[
            styles.flatListContainer,
            { marginBottom: bottomTabBarHeight },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(ScreenName.details, {
                  index: item.index,
                  id: item.id,
                  type: item.type,
                })
              }
            >
              <CoffeeCard
                id={item.id}
                name={item.name}
                index={item.index}
                type={item.type}
                roasted={item.roasted}
                imagelink_square={item.imagelink_square}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                price={item.prices[0]}
                onPress={onAddToCartHandler}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
