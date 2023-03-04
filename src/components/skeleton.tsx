import React, { useEffect } from 'react'
import { Animated, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Section } from 'tags'

type skeletonTypes = {
  display?: boolean
  children?: React.ReactNode
}

export function Skeleton({ children, display = true }: skeletonTypes) {
  const offsetXRight = new Animated.Value(-500)

  useEffect(() => {
    Animated.loop(
      Animated.timing(offsetXRight, {
        toValue: 500,
        duration: 500,
        delay: 0,
        useNativeDriver: true
      })
    ).start()
  }, [offsetXRight])

  return (
    <Section style={{ ...styles.container, display: display === true ? 'flex' : 'none' }}>
      <Section style={styles.contentWrapper}>
        <Animated.View style={{ ...styles.shadowElemetnContainer, transform: [{ translateX: offsetXRight }] }}>
          <Section style={{ ...styles.whiteShadow }}></Section>
        </Animated.View>
        {children}
      </Section>
    </Section>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    overflow: 'hidden',
    padding: 10,
    backgroundColor: EStyleSheet.value('$bg.white')
  },
  contentWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shadowElemetnContainer: {
    height: '100%',
    position: 'absolute',
    zIndex: 2
  },
  whiteShadow: {
    height: '300%',
    width: 60,
    transform: [{ rotateZ: '45deg' }],
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: 'white',
    elevation: 10,
    zIndex: 2,
    bottom: 100
  }
})
