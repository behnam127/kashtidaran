import { commonStyles } from 'commonStyles'
import React from 'react'
import { Image, Section } from 'tags'

const LOGO = require('assets/img/logo.png')
const shadowLogo = require('assets/icons/shadowLogo.png')

export default function AuthPagesLogo() {
  return (
    <Section style={commonStyles.centerAlignVertically}>
      <Image source={shadowLogo} style={styles.shadowLogo} />
      <Image style={styles.logo} source={LOGO} />
    </Section>
  )
}

const styles = {
  logo: {
    resizeMode: 'contain',
    maxHeight: 150,
    maxWidth: 170
  },
  shadowLogo: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    maxHeight: 350,
    resizeMode: 'contain'
  }
}
