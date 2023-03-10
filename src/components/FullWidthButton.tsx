import React from 'react'
import { ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { shadow } from 'react-native-paper'
import { Button, Image, Text } from 'tags'

type FullWidthButtonTypes = {
  text: string
  style?: ViewStyle
  textStyle?: ViewStyle
  shadow?: boolean
  ICON?: any
  state?:
    | 'activeBlue'
    | 'activeGray'
    | 'disable'
    | 'activeLightRed'
    | 'white'
    | 'withBorder'
    | 'deactiveWithBorder'
    | 'activeGreen'
    | 'activeYellow'
  onPress?: () => any
}

export function FullWidthButton({
  text,
  style,
  textStyle,
  ICON,
  shadow = false,
  state = 'activeBlue',
  onPress
}: FullWidthButtonTypes) {
  const styleObject =
    state === 'activeBlue'
      ? lightBlueStyle
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
      : state === 'activeYellow'
      ? activeYellowStyle
      : disableStyle
  return (
    <Button
      disabled={state === 'disable' ? true : false}
      onPress={onPress}
      style={{ ...Object.assign({}, styleObject.button, styleObject.shadow, style), elevation: shadow ? 10 : 0 }}>
      <Image source={ICON} style={{ ...Object.assign({}, styleObject.icon), display: ICON ? 'flex' : 'none' }} />
      <Text bold style={{ ...styleObject.text, ...textStyle }}>
        {text}
      </Text>
    </Button>
  )
}

const LightRedStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '$bg.veryLightRed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '2.8rem'
  },
  text: {
    color: '$text.red'
  },
  shadow: {
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})

const lightBlueStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '$bg.darkBlueAlpha',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '2.8rem'
  },
  text: {
    color: '$text.white'
  },
  shadow: {
    elevation: 10,
    shadowColor: '$bg.darkBlueAlpha'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})

const activeGreenStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '$bg.green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '2.8rem'
  },
  text: {
    color: '$text.white'
  },
  shadow: {
    elevation: 10,
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})

const activeYellowStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '$bg.yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '2.8rem'
  },
  text: {
    color: '$text.white'
  },
  shadow: {
    elevation: 10,
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})

const WhiteStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
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
  },
  shadow: {
    elevation: 10,
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})
const grayStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '$bg.gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '2.8rem'
  },
  text: {
    color: '$text.gray'
  },
  shadow: {
    elevation: 10,
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})

const disableStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '$bg.lightBlue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '2.8rem'
  },
  text: {
    color: '$text.darkBlue'
  },
  shadow: {
    elevation: 10,
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})

const withBorderStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    // backgroundColor: '$bg.gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '$text.red',
    height: '2.8rem'
  },
  text: {
    color: '$text.red'
  },
  shadow: {
    elevation: 10,
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})

const deactiveWithBorderStyle = EStyleSheet.create({
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    // backgroundColor: '$bg.gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '$text.lightGray',
    height: '2.8rem'
  },
  text: {
    color: '$text.lightGray'
  },
  shadow: {
    elevation: 10,
    shadowColor: '$shadow'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: '$text.white'
  }
})
