import { BackHandler, Modal, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'
import { Section } from 'tags'
import { navigator } from 'services/navigator'
import { useNavigation } from '@react-navigation/native'

const BG_COLOR = 'rgba(255,255,255,0.4)'

export function LoadingModal({ visible }: { visible: boolean }) {
  const navigation = useNavigation()

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goBack)
    return () => BackHandler.removeEventListener('hardwareBackPress', goBack)
  }, [])

  const goBack = () => {
    console.log('============canGoBack========================')
    console.log(navigation.canGoBack())
    console.log('====================================')
    visible = false
    navigation.canGoBack()
    navigation.canGoBack() && navigation.goBack()
    return true
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      {/* <StatusBar backgroundColor={BG_COLOR} barStyle="dark-content" translucent /> */}
      <Section style={styles.modal}>
        <LoadingSpinner navigation={navigation} />
      </Section>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
