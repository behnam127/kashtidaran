import React from 'react'
import { Image as RNImage, ImageProps } from 'react-native'

export function Image({ source, style }: ImageProps) {
  return <RNImage style={style} source={source} />
}
