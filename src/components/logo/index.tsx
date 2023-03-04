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
  let logo = require('assets/img/logo/dark/logo-typed.png')

  switch (type) {
    case 'logo':
      logo =
        theme === 'dark'
          ? require('assets/img/logo/dark/logo-typed.png')
          : require('assets/img/logo/light/logo-typed.png')
      break
  }

  return <Image style={style} source={logo} />
}

const styles = EStyleSheet.create({
  defaultLogo: {
    width: 150,
    height: 150,
    marginTop: 100,
    resizeMode: 'contain',
    position: 'absolute'
  }
})

export default Logo
