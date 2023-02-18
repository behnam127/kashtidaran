import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const Rail = () => {
  return <View style={styles.root} />
}

export default memo(Rail)

const styles = StyleSheet.create({
  root: {
    width: '90%',
    height: 15,
    borderRadius: 2,
    backgroundColor: EStyleSheet.value('$bg.gray')
  }
})
