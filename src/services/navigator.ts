import { CommonActions } from '@react-navigation/native'

export function navigator(navigation: any, route: string, params?: object, method = 'navigate') {
  if (method === 'reset') {
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{ name: route, params }]
      })
    })
    return
  }
  navigation[method](route, params)
}

// reset example
// navigation.reset({
//   index: 0,
//   routes: [{ name: 'Profile' }]
// })
