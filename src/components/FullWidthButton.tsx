import React from 'react'
import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Button, Text } from 'tags'

type FullWidthButtonTypes = {
  text: string
  style?: ViewStyle
  textStyle?: ViewStyle
  state?:
    | 'activeBlue'
    | 'activeGray'
    | 'disable'
    | 'activeLightRed'
    | 'white'
    | 'withBorder'
    | 'deactiveWithBorder'
    | 'activeGreen'
  onPress?: () => any
}

export function FullWidthButton({ text, style, textStyle, state = 'activeBlue', onPress }: FullWidthButtonTypes) {
  const styleObject =
    state === 'activeBlue'
      ? darkBlueStyle
      : state === 'activeLightRed'
      ? LightRedStyle
      : state === 'white'
      ? WhiteStyle
      : state === 'activeGray'
      ? grayStyle
      : state === 'withBorder'
      ? withBorderStyle
      : state === 'deactiveWithBorder'
      ? deactiveWithBorderStyle
      : state === 'activeGreen'
      ? activeGreenStyle
      : disableStyle
  return (
    <Button
      disabled={state === 'disable' ? true : false}
      onPress={onPress}
      style={Object.assign({}, styleObject.button, style)}>
      <Text bold style={{ ...styleObject.text, ...textStyle }}>
        {text}
      </Text>
    </Button>
  )
}

const LightRedStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '$bg.veryLightRed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    height: '2.8rem'
  },
  text: {
    color: '$text.red'
  }
})

const darkBlueStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '$bg.red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    height: '2.8rem'
  },
  text: {
    color: '$text.white'
  }
})

const activeGreenStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '$bg.green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    height: '2.8rem'
  },
  text: {
    color: '$text.white'
  }
})

const WhiteStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '$bg.white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '$border.dark',
    height: '2.8rem'
  },
  text: {
    color: '$text.black'
  }
})
const grayStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '$bg.gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    height: '2.8rem'
  },
  text: {
    color: '$text.gray'
  }
})

const disableStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '$bg.gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    height: '2.8rem'
  },
  text: {
    color: '$text.gray'
  }
})

const withBorderStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    // backgroundColor: '$bg.gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '$text.red',
    height: '2.8rem'
  },
  text: {
    color: '$text.red'
  }
})

const deactiveWithBorderStyle = EStyleSheet.create({
  button: {
    alignSelf: 'stretch',
    // backgroundColor: '$bg.gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '$text.lightGray',
    height: '2.8rem'
  },
  text: {
    color: '$text.lightGray'
  }
})
