import React from 'react'
import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Section } from 'tags'

type RadioButtonType = {
  style?: ViewStyle
  containerStyle?: ViewStyle
  checked?: boolean
}

export function RadioButton({ containerStyle, style, checked }: RadioButtonType) {
  const buttonStyle = checked ? styles.activeRadioBtn : styles.radioBtn
  const circleDisplay = checked ? 'flex' : 'none'

  return (
    <Section style={{ ...buttonStyle, ...containerStyle }}>
      <Section style={{ ...styles.circle, display: circleDisplay, ...style }} />
    </Section>
  )
}

export const styles = EStyleSheet.create({
  radioBtn: {
    width: 24,
    height: 24,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '$border.dark',
    // marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  activeRadioBtn: {
    width: 24,
    height: 24,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '$border.lightRed',
    // marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: '$bg.red'
  }
})
