import { View, ViewProps } from 'react-native'
import React from 'react'

export function Section({ children, style }: ViewProps) {
  return <View style={style}>{children}</View>
}
