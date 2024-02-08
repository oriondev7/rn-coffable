import { create } from 'zustand' // to create store
import { produce } from 'immer' // to update store
import { persist, createJSONStorage } from 'zustand/middleware' // to persist store
import { BeansData, CoffeeData, ItemType } from '../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useStore = create(
  persist(
    (set, get) => ({
      coffeeList: CoffeeData,
      beanList: BeansData,
      cartPrice: 0,
      favoritesList: [],
      cartList: [],
      orderHistoryList: [],

      addToCart: (cartItem: any) =>
        set(
          produce((state) => {
            let found = false

            for (let i = 0; i < state.cartList.length; i++) {
              if (state.cartList[i].id === cartItem.id) {
                found = true

                let size = false
                for (let j = 0; j < state.cartList[i].prices.length; j++) {
                  let statePrice = state.cartList[i].prices[j]

                  if (statePrice.size === cartItem.prices[0].size) {
                    size = true
                    statePrice.quantity++
                    break
                  }
                }

                if (!size) {
                  state.cartList[i].prices.push(cartItem.prices[0])
                }

                state.cartList[i].prices.sort((a: any, b: any) => {
                  if (a.size > b.size) {
                    return -1
                  }

                  if (a.size < b.size) {
                    return 1
                  }

                  return 0
                })
                break
              }
            }

            if (!found) {
              state.cartList.push(cartItem)
            }
          })
        ),

      calculateCartPrice: () =>
        set(
          produce((state) => {
            let totalPrice = 0
            for (let i = 0; i < state.cartList.length; i++) {
              let tempPrice = 0
              for (let j = 0; j < state.cartList[i].prices.length; j++) {
                const statePrice = state.cartList[i].prices[j]
                tempPrice += parseFloat(statePrice.price) * statePrice.quantity
              }

              state.cartList[i].itemPrice = tempPrice.toFixed(2).toString()

              totalPrice += tempPrice
            }

            state.cartPrice = totalPrice.toFixed(2).toString()
          })
        ),

      addToFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type === ItemType.coffee) {
              for (let i = 0; state.coffeeList.length; i++) {
                if (state.coffeeList[i].id === id) {
                  if (!state.coffeeList[i].favorite) {
                    state.coffeeList[i].favorite = true
                    state.favoritesList.unshift(state.coffeeList[i])
                  }
                  break
                }
              }
            } else {
              for (let i = 0; state.beanList.length; i++) {
                if (state.beanList[i].id === id) {
                  if (!state.beanList[i].favorite) {
                    state.beanList[i].favorite = true
                    state.favoritesList.unshift(state.beanList[i])
                  }
                  break
                }
              }
            }
          })
        ),

      deleteFromFavoriteList: (type: string, id: string) =>
        set(
          produce((state) => {
            if (type === ItemType.coffee) {
              for (let i = 0; state.coffeeList.length; i++) {
                if (
                  state.coffeeList[i].id === id &&
                  state.coffeeList[i].favorite
                ) {
                  state.coffeeList[i].favorite = false
                  break
                }
              }
            } else {
              for (let i = 0; state.beanList.length; i++) {
                if (state.beanList[i].id === id && state.beanList[i].favorite) {
                  state.beanList[i].favorite = false
                  break
                }
              }
            }

            let spliceIndex = -1
            for (let i = 0; i < state.favoritesList.length; i++) {
              if (state.favoritesList[i].id === id) {
                spliceIndex = i
                break
              }
            }

            state.favoritesList.splice(spliceIndex, 1)
          })
        ),

      incrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce((state) => {
            for (let i = 0; i < state.cartList.length; i++) {
              if (state.cartList[i].id === id) {
                const statePrices = state.cartList[i].prices
                for (let j = 0; j < statePrices.length; j++) {
                  if (statePrices[j].size === size) {
                    state.cartList[i].prices[j].quantity++
                    break
                  }
                }
              }
            }
          })
        ),

      decrementCartItemQuantity: (id: string, size: string) =>
        set(
          produce((state) => {
            for (let i = 0; i < state.cartList.length; i++) {
              if (state.cartList[i].id === id) {
                const statePrices = state.cartList[i].prices
                for (let j = 0; j < statePrices.length; j++) {
                  if (statePrices[j].size === size) {
                    if (statePrices.length > 1) {
                      if (statePrices[j].quantity > 1) {
                        state.cartList[i].prices[j].quantity--
                      } else {
                        state.cartList[i].prices.splice(j, 1)
                      }
                    } else {
                      if (statePrices[j].quantity > 1) {
                        state.cartList[i].prices[j].quantity--
                      } else {
                        state.cartList.splice(i, 1)
                      }
                    }

                    break
                  }
                }
              }
            }
          })
        ),

      addToOrderHistoryListFromCart: () =>
        set(
          produce((state) => {
            let totalPrice = state.cartList
              .reduce(
                (accumulator: number, currentValue: any) =>
                  accumulator + parseFloat(currentValue.itemPrice),
                0
              )
              .toFixed(2)
              .toString()

            if (state.orderHistoryList.length > 0) {
              state.orderHistoryList.unshift({
                orderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                cartList: state.cartList,
                totalPrice: totalPrice,
              })
            } else {
              state.orderHistoryList.push({
                orderDate:
                  new Date().toDateString() +
                  ' ' +
                  new Date().toLocaleTimeString(),
                cartList: state.cartList,
                totalPrice: totalPrice,
              })
            }

            state.cartList = []
          })
        ),
    }),
    {
      name: 'coffe-app',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
