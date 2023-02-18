import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const RailSelected = () => {
  return <View style={styles.root} />
}

export default memo(RailSelected)

const styles = StyleSheet.create({
  root: {
    height: 15,

    backgroundColor: EStyleSheet.value('$bg.darkBlueAlpha'),
    borderRadius: 10
  }
})
