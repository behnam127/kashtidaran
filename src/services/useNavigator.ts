import { CommonActions, useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

export function useNavigator(route: string, params?: object, method = 'navigate') {
  const navigation = useNavigation()
  const resetNavigator = useCallback(() => {
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{ name: route, params }]
      })
    })
  }, [])
  const pushingNavigator = useCallback(() => {
    console.log({ route, params })
    return navigation[method](route, params)
  }, [])
  return [pushingNavigator, resetNavigator]
}

// const [, resetStackAndNavigateToLogin] = useNavigator('Login')
// const [navigateToLogin] = useNavigator('Login')
// resetStackAndNavigateToLogin()
// navigateToLogin()
