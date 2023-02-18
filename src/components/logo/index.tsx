/** Native Imports **/
import React from 'react'
import { Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

type props = {
  type?: string
  theme?: string
  style?: object
}

const Logo = ({ type = 'logo', theme = 'dark', style = styles.defaultLogo }: props) => {
  let logo = require('assets/img/logo/dark/logo.png')

  switch (type) {
    case 'logo':
      logo = theme === 'dark' ? require('assets/img/logo/dark/logo.png') : require('assets/img/logo/light/logo.png')
      break
    case 'logotype':
      logo =
        theme === 'dark' ? require('assets/img/logo/dark/logotype.png') : require('assets/img/logo/light/logotype.png')
      break
    case 'logotype-en':
      logo =
        theme === 'dark'
          ? require('assets/img/logo/dark/logotype-en.png')
          : require('assets/img/logo/light/logotype-en.png')
      break
    case 'logotype-fa':
      logo =
        theme === 'dark'
          ? require('assets/img/logo/dark/logotype-fa.png')
          : require('assets/img/logo/light/logotype-fa.png')
      break
  }

  return <Image style={style} source={logo} />
}

const styles = EStyleSheet.create({
  defaultLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute'
  }
})

export default Logo
