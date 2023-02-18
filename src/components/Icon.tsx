import React from 'react'
import { ViewStyle } from 'react-native'
import { SvgCss, XmlProps } from 'react-native-svg'

type IconType = XmlProps & {
  style?: ViewStyle
}

export function Icon({ xml, style, ...props }: IconType) {
  return <SvgCss style={style} xml={xml} {...props} />
}
