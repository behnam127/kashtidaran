import React from 'react'
import { TextStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Text } from 'tags'
import { normalize } from './NormalizingFont'

type GrayTextType = {
  children: React.ReactNode
  size?: number
  style?: TextStyle
  numberOfLines?: number
  bold?: boolean
}

export function GrayText({
  children,
  size = normalize(EStyleSheet.value('0.75rem')),
  style,
  numberOfLines,
  bold = true
}: GrayTextType) {
  return (
    <Text
      numberOfLines={numberOfLines}
      bold={bold}
      style={{ ...{ fontSize: size, color: EStyleSheet.value('$text.gray') }, ...style }}>
      {children}
    </Text>
  )
}
