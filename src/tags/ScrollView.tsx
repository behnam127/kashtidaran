import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native'
import React from 'react'

export function ScrollView({ children, style, showsVerticalScrollIndicator, contentContainerStyle }: ScrollViewProps) {
  return (
    <RNScrollView
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      keyboardShouldPersistTaps="always"
      contentContainerStyle={contentContainerStyle}
      style={Object.assign({}, style, { minHeight: '100%' })}>
      {children}
    </RNScrollView>
  )
}
