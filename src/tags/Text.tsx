import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

const BOLD = 'YekanBakhFaNumNew-SemiBold'
const REGULAR = 'YekanBakhFaNumNew-Regular'
const LIGHT = 'YekanBakhFaNumNew-Light'

// const BOLD = 'YekanBakhBold'
// const REGULAR = 'YekanBakhRegular'

type TextType = TextProps & {
  bold?: boolean
  light?: boolean
}

export function Text(props: TextType) {
  const { children, style = {}, bold = false, light = false, numberOfLines } = props

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={Object.assign({}, { fontFamily: bold ? BOLD : light ? LIGHT : REGULAR, textAlign: 'left' }, style)}>
      {children}
    </RNText>
  )
}
