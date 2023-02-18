import React, { useContext, useEffect, useState } from 'react'
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { ScrollView, Section, Image } from 'tags'
import { ThemeContext, GlobalModalsContext } from 'context'
import { GrayText } from 'components'
import { navigator } from 'services/navigator'
import { useAppSetting } from 'hooks/useAppSetting'
import packageJson from '../../../package.json'

const APP_WIDTH = Dimensions.get('window').width
const APP_HEIGHT = Dimensions.get('window').height
const LOGO_WIDTH = APP_WIDTH * 0.3
const ANIMATED_WIDTH = APP_WIDTH + 256

const LOADING_ICON = require('assets/img/loading.png')
const LOGO_RIGHT_SECTION = require('assets/img/splash/LogoR.png')
const LOGO_LEFT_SECTION = require('assets/img/splash/LogoL.png')
const BACKGROUND_IMAGE = require('assets/img/splash/TransparentLogo.png')

export function Splash({ navigation }) {
  const fadeAnim = new Animated.Value(0)
  const offsetXLeft = new Animated.Value(-1000)
  const offsetXRight = new Animated.Value(1000)
  const loadingIconSpinValue = new Animated.Value(0)

  const { theme = 'light' } = useContext(ThemeContext)
  const isThemeDark = theme === 'dark'
  const backgroundImage = isThemeDark ? BACKGROUND_IMAGE : BACKGROUND_IMAGE

  const { setDisplayGlobalModals } = useContext(GlobalModalsContext)

  const animatedLogo = () => {
    try {
      Animated.parallel([
        Animated.timing(offsetXLeft, {
          toValue: 0,
          duration: 2000,
          delay: 0,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(offsetXRight, {
          toValue: 0,
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
      // navigator(navigation, 'Stacks', {}, 'reset')
    }, 3000)
  }, [])

  const loadingIconSpin = loadingIconSpinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={{ ...styles.animatedBgContainer, opacity: fadeAnim }}>
        <Image source={backgroundImage} style={styles.backImage} />
      </Animated.View>

      <Section style={styles.splashWrapper}>
        <Animated.View style={{ ...styles.logoImageContainer, opacity: fadeAnim }}>
          <Animated.View style={{ ...styles.logoRLContainer }}>
            <Animated.Image
              style={{ ...styles.rightLogo, transform: [{ translateX: offsetXRight }] }}
              source={LOGO_RIGHT_SECTION}
            />

            <Animated.Image
              style={{ ...styles.leftLogo, transform: [{ translateX: offsetXLeft }] }}
              source={LOGO_LEFT_SECTION}
            />
          </Animated.View>
        </Animated.View>

        <Animated.Image style={{ ...styles.loading, transform: [{ rotate: loadingIconSpin }] }} source={LOADING_ICON} />

        <GrayText style={styles.versionNumber}>نسخه {packageJson.version}</GrayText>
      </Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  splashWrapper: {
    width: APP_WIDTH,
    height: APP_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  },
  logoImageContainer: {
    width: LOGO_WIDTH,
    height: LOGO_WIDTH,
    backgroundColor: EStyleSheet.value('$bg.white'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '$text.black',
    elevation: 10,
    shadowRadius: 10,
    zIndex: 2
  },
  logoRLContainer: {
    width: LOGO_WIDTH,
    height: LOGO_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftLogo: {
    width: LOGO_WIDTH * 0.8,
    height: LOGO_WIDTH * 0.8,
    position: 'absolute',
    right: LOGO_WIDTH * 0.15
  },
  rightLogo: {
    width: LOGO_WIDTH * 0.8,
    height: LOGO_WIDTH * 0.8,
    position: 'absolute',
    marginTop: LOGO_WIDTH * 0.2,
    left: LOGO_WIDTH * 0.15
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
    alignContent: 'center'
  }
})
