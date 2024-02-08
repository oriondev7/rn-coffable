import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabNavigator } from './navigators/TabNavigator'
import { DetailsScreen, PaymentScreen } from './screens'
import { ScreenName } from './constants'
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator()

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={ScreenName.tabNavigator}
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name={ScreenName.details}
          component={DetailsScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name={ScreenName.payment}
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
