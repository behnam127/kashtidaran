import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

const THUMB_RADIUS_LOW = 5
const THUMB_RADIUS_HIGH = 7

const Thumb = ({ name }) => {
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />
}

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    backgroundColor: '#ffffff'
  }
})

export default memo(Thumb)
