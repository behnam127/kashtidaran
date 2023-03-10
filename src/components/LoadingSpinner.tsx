import React from 'react'
import { Animated, BackHandler, Easing } from 'react-native'
import { navigator } from 'services/navigator'
import { Image } from 'tags'

const LOADING_ICON = require('assets/img/loading.png')
const LOGO = require('assets/img/logo/light/logo.png')

export default function LoadingSpinner({ navigation }) {
  const spinValue = new Animated.Value(0)

  React.useEffect(() => {
    // back()
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }, [])

  // const back = () => {
  //   BackHandler.addEventListener('hardwareBackPress', navigateToLogin)
  //   return () => BackHandler.removeEventListener('hardwareBackPress', navigateToLogin)
  // }

  // const navigateToLogin = () => {
  //   console.log('====================================')
  //   console.log('Home pressed')
  //   console.log('====================================')
  //   navigator(navigation, 'HomeScreen', {}, 'reset')
  //   return true
  // }

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <>
      <Animated.Image style={{ width: 55, height: 55, transform: [{ rotate: spin }] }} source={LOADING_ICON} />
      <Image source={LOGO} style={{ width: 40, height: 40, position: 'absolute' }} />
    </>
  )
}
