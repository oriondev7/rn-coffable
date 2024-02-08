import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useStore } from '../../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { styles } from './favorite.styles'
import {
  EmptyListAnimation,
  FavoriteItemCard,
  HeaderBar,
} from '../../components'
import { COLORS, ScreenName } from '../../constants'
import { useNavigation } from '@react-navigation/native'

export const FavoriteScreen = () => {
  const navigation = useNavigation()
  const favoritesList = useStore((state: any) => state.favoritesList)

  const bottomTabBarHeight = useBottomTabBarHeight()

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
            <HeaderBar title="Favorites" />

            {favoritesList.length === 0 ? (
              <EmptyListAnimation title="No Favorites" />
            ) : (
              <View style={styles.listItemContainer}>
                {favoritesList.map((data: any) => (
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
                    <FavoriteItemCard
                      id={data.id}
                      name={data.name}
                      type={data.type}
                      roasted={data.roasted}
                      imagelink_portrait={data.imagelink_portrait}
                      special_ingredient={data.special_ingredient}
                      ingredients={data.ingredients}
                      average_rating={data.average_rating}
                      ratings_count={data.ratings_count}
                      description={data.description}
                      favorite={data.favorite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
