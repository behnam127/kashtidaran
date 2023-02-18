import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

export function Button({ children, onPress, onPressIn, onPressOut, style, disabled }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  )
}
