import { BlackText } from 'components'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Image, Section, Text } from 'tags'

const NO_DATA_ICON = require('assets/icons/weblog.png')

export function NoDataForPreview() {
  return (
    <Section style={styles.container}>
      <Image style={styles.icon} source={NO_DATA_ICON} />
      <BlackText>کاربر گرامی سرمایکس</BlackText>
      <BlackText> اطلاعاتی برای نمایش وجود ندارد</BlackText>
    </Section>
  )
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
    opacity: 0.15,
    marginBottom: EStyleSheet.value('$d.large')
  }
})
