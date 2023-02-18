import { StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { Button, Section } from 'tags'
import EStyleSheet from 'react-native-extended-stylesheet'

type ColorfulRadioButtonType = {
  statusColor: string
  style?: ViewStyle
}

export function ColorfulRadioButton({ statusColor, style }: ColorfulRadioButtonType) {
  return (
    <Button style={{ ...styles.container, ...style }}>
      <Section style={{ ...styles.bigCircle, ...{ backgroundColor: statusColor } }} />
      <Section style={{ ...styles.smallCircle, ...{ backgroundColor: statusColor } }} />
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 18,
    height: 18
  },
  bigCircle: {
    width: 18,
    height: 18,
    borderRadius: 10,
    opacity: 0.4
  },
  smallCircle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 4,
    bottom: 4
  }
})
