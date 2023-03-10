import React, { useContext, useEffect, useState } from 'react'
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { ScrollView, Section, Image } from 'tags'
import { ThemeContext, GlobalModalsContext } from 'context'
import { GrayText } from 'components'
import { navigator } from 'services/navigator'
import { useAppSetting } from 'hooks/useAppSetting'
import packageJson from '../../../package.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

const APP_WIDTH = Dimensions.get('window').width
const APP_HEIGHT = Dimensions.get('window').height

const ANIMATED_WIDTH = APP_WIDTH + 256

const LOADING_ICON = require('assets/img/loading.png')
const LOGO_1 = require('assets/img/splash/i.jpg')
const LOGO_2 = require('assets/img/splash/ship.png')
const LOGO_3 = require('assets/img/splash/ship2.jpg')
const LOGO_4 = require('assets/img/splash/ship3.png')
const BACKGROUND_IMAGE = require('assets/img/splash/TransparentLogo.png')
const LOGO = require('assets/img/splash/logo.png')
const LOGO_TEXT = require('assets/img/splash/logoText.png')

export function Splash({ navigation }) {
  const fadeAnim = new Animated.Value(0)
  const offsetXTopLeft = new Animated.Value(-1000)
  const offsetYTopRight = new Animated.Value(-1000)
  const offsetXBottomRight = new Animated.Value(1000)
  const offsetYBottomLeft = new Animated.Value(1000)
  const loadingIconSpinValue = new Animated.Value(0)

  const { theme = 'light' } = useContext(ThemeContext)
  const isThemeDark = theme === 'dark'
  const backgroundImage = isThemeDark ? BACKGROUND_IMAGE : BACKGROUND_IMAGE

  const { setDisplayGlobalModals } = useContext(GlobalModalsContext)

  const animatedLogo = () => {
    try {
      Animated.parallel([
        Animated.timing(offsetXTopLeft, {
          toValue: -APP_WIDTH * 0.55,
          duration: 2000,
          delay: 0,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(offsetYTopRight, {
          toValue: -APP_HEIGHT * 0.27,
          duration: 2000,
          delay: 0,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(offsetXBottomRight, {
          toValue: -APP_WIDTH * 0.05,
          duration: 2000,
          delay: 0,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(offsetYBottomLeft, {
          toValue: APP_HEIGHT * 0.29,
          duration: 2000,
          delay: 0,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.loop(
          Animated.timing(loadingIconSpinValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true
          })
        )
      ]).start()
    } catch (error) {
      console.log(error)
    }
  }

  const { data, isLoading } = useAppSetting()

  useEffect(() => {
    animatedLogo()
    setTimeout(() => {
      handleNextStep()
    }, 2000)
  }, [])

  const handleNextStep = async () => {
    const token = await AsyncStorage.getItem('@token')
    if (token !== null) {
      navigator(navigation, 'Stacks', {}, 'reset')
    } else {
      navigator(navigation, 'Login', {}, 'reset')
    }
  }

  const loadingIconSpin = loadingIconSpinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Animated.View style={{ ...styles.logoImageContainerBorder, opacity: fadeAnim }}></Animated.View>
      <Animated.View style={{ ...styles.logoImageContainer, opacity: fadeAnim }}>
        <Image source={LOGO} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
        <Image source={LOGO_TEXT} style={{ width: '80%', height: '50%', resizeMode: 'contain' }} />
      </Animated.View>
      <Section style={styles.splashWrapper}>
        <Animated.View style={{ ...styles.logoRLContainer }}>
          <Animated.Image
            style={{ ...styles.topRightLogo, transform: [{ translateX: offsetXTopLeft }] }}
            source={LOGO_1}
          />
          <Animated.Image
            style={{ ...styles.topLeftLogo, transform: [{ translateY: offsetYTopRight }] }}
            source={LOGO_2}
          />

          <Animated.Image
            style={{ ...styles.BottomRightLogo, transform: [{ translateX: offsetXBottomRight }] }}
            source={LOGO_3}
          />
          <Animated.Image
            style={{ ...styles.BottomLeftLogo, transform: [{ translateY: offsetYBottomLeft }] }}
            source={LOGO_4}
          />
        </Animated.View>
      </Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: EStyleSheet.value('$bg.black')
  },
  splashWrapper: {
    width: APP_WIDTH,
    height: APP_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logoImageContainer: {
    width: APP_WIDTH * 0.5,
    height: APP_WIDTH * 0.5,
    backgroundColor: EStyleSheet.value('$bg.white'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: APP_HEIGHT * 0.5 - APP_WIDTH * 0.25,
    borderRadius: 30,
    shadowColor: '$text.white',
    elevation: 10,
    shadowRadius: 10,
    zIndex: 20,
    padding: 10
  },
  logoImageContainerBorder: {
    width: APP_WIDTH * 0.55,
    height: APP_WIDTH * 0.55,
    backgroundColor: EStyleSheet.value('$bg.whiteWithOpacity'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: APP_HEIGHT * 0.5 - APP_WIDTH * 0.275,
    borderRadius: 30,
    shadowColor: '$text.white',
    elevation: 10,
    shadowRadius: 10,
    zIndex: 20
  },
  logoRLContainer: {
    width: APP_WIDTH * 0.3,
    height: APP_WIDTH * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 0
  },
  topLeftLogo: {
    width: APP_WIDTH * 0.5,
    height: APP_HEIGHT * 0.5,
    position: 'absolute',
    right: APP_WIDTH * 0.2
  },
  topRightLogo: {
    width: APP_WIDTH * 0.5,
    height: APP_HEIGHT * 0.6,
    position: 'absolute',
    bottom: APP_HEIGHT * 0.06,
    right: APP_WIDTH * 0.2
  },
  BottomRightLogo: {
    width: APP_WIDTH * 0.5,
    height: APP_HEIGHT * 0.5,
    position: 'absolute',
    right: APP_WIDTH * 0.2,
    top: APP_HEIGHT * 0.08
  },
  BottomLeftLogo: {
    width: APP_WIDTH * 0.5,
    height: APP_HEIGHT * 0.5,
    position: 'absolute',
    left: APP_WIDTH * 0.2
  },
  image: {
    width: ANIMATED_WIDTH,
    height: '100%'
  },
  loading: {
    marginTop: EStyleSheet.value('$d.large') * 5,
    marginBottom: EStyleSheet.value('$d.large') * 3
  },
  versionNumber: {
    marginBottom: EStyleSheet.value('$d.large') * 5
  },
  backImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: 'bg.gray'
  },
  animatedBgContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 10
  }
})
