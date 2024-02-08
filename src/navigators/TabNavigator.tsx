import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, ICON_SIZE, IconName, ScreenName } from '../constants'
import {
  CartScreen,
  FavoriteScreen,
  HomeScreen,
  OrderHistoryScreen,
} from '../screens'
import { styles } from './tab_navigator.styles'
import { BlurView } from '@react-native-community/blur'
import CustomIcon from '../components/CustomIcon'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView overlayColor="" blurAmount={15} style={styles.blurView} />
        ),
      }}
    >
      <Tab.Screen
        name={ScreenName.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name={IconName.home}
              size={ICON_SIZE.size_25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.cart}
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name={IconName.cart}
              size={ICON_SIZE.size_25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.favorite}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name={IconName.like}
              size={ICON_SIZE.size_25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.orderHistory}
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name={IconName.bell}
              size={ICON_SIZE.size_25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
