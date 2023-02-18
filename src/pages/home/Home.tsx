import React from 'react'
import { StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { BlackText } from 'components'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <BlackText>Home</BlackText>
    </SafeAreaView>
  )
}
export { HomeScreen }

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: EStyleSheet.value('$bg.white')
  }
})
